// Admin Dashboard JavaScript for FCE(T) Akoka Alumni Voting System with Serial Number Authentication

// Alumni database for authentication (matches vote.js)
const alumniDatabase = {
    "awe.tolulope@yahoo.com": { 
        name: "Awe Tolulope D", 
        matricNumber: "05/BED/19231", 
        year: "2008", 
        status: "Active",
        serialNumber: "FCET-VSN-2025-001"
    },
    "olafimihan.abosede@gmail.com": { 
        name: "Olafimihan Abosede O", 
        matricNumber: "90/BAE/5888", 
        year: "1993", 
        status: "Active",
        serialNumber: "FCET-VSN-2025-002"
    },
    "ogbebor.philomena@gmail.com": { 
        name: "Ogbebor Philomena", 
        matricNumber: "01/BED/12910", 
        year: "2004", 
        status: "Active",
        serialNumber: "FCET-VSN-2025-003"
    },
    "apata.tolulope@yahoo.com": { 
        name: "Apata Tolulope", 
        matricNumber: "02/BED/13241", 
        year: "2005", 
        status: "Active",
        serialNumber: "FCET-VSN-2025-004"
    },
    "ajibola.adeyanju@hotmail.com": { 
        name: "Ajibola Adeyanju", 
        matricNumber: "90/BLD/----", 
        year: "1993", 
        status: "Active",
        serialNumber: "FCET-VSN-2025-005"
    },
    "ayeni.morenikeji@gmail.com": { 
        name: "Ayeni Morenikeji Abiodun", 
        matricNumber: "05/BED/------", 
        year: "2008", 
        status: "Active",
        serialNumber: "FCET-VSN-2025-006"
    },
    "adewale.junaid@yahoo.com": { 
        name: "Adewale Junaid", 
        matricNumber: "04/BED/17628", 
        year: "2007", 
        status: "Active",
        serialNumber: "FCET-VSN-2025-007"
    },
    "awofeso.rasheed@gmail.com": { 
        name: "Awofeso Rasheed", 
        matricNumber: "90/BAE/6898", 
        year: "1993", 
        status: "Active",
        serialNumber: "FCET-VSN-2025-008"
    },
    "alli.balogun@yahoo.com": { 
        name: "Alli-Balogun Tolani", 
        matricNumber: "90/BAE/5903", 
        year: "1993", 
        status: "Active",
        serialNumber: "FCET-VSN-2025-009"
    },
    "wchuwa.lawrence@gmail.com": { 
        name: "Wchuwa Lawrence", 
        matricNumber: "02/BED/14049", 
        year: "2005", 
        status: "Active",
        serialNumber: "FCET-VSN-2025-010"
    },
    "esan.ukamaka@yahoo.com": { 
        name: "Esan Ukamaka", 
        matricNumber: "02/BED/14066", 
        year: "2005", 
        status: "Active",
        serialNumber: "FCET-VSN-2025-011"
    },
    "ogunbowale.kayode@gmail.com": { 
        name: "Ogunbowale Olukayode", 
        matricNumber: "02/BED/14129", 
        year: "2005", 
        status: "Active",
        serialNumber: "FCET-VSN-2025-012"
    },
    "babatunde.olufunke@yahoo.com": { 
        name: "Babatunde Olufunke", 
        matricNumber: "02/BED/14017", 
        year: "2005", 
        status: "Active",
        serialNumber: "FCET-VSN-2025-013"
    },
    "salisu.rukayat@gmail.com": { 
        name: "Salisu Rukayat", 
        matricNumber: "04/ISC/17662", 
        year: "2007", 
        status: "Active",
        serialNumber: "FCET-VSN-2025-014"
    },
    "ozopelide.lynda@gmail.com": { 
        name: "Ozopelide Maume Lynda", 
        matricNumber: "90/BAE/5966", 
        year: "1993", 
        status: "Active",
        serialNumber: "FCET-VSN-2025-015"
    }
};

// Candidate names mapping
const candidateNames = {
    alli_balogun: 'Alli-Balogun Tolani',
    awofeso_rasheed: 'Awofeso Rasheed',
    wchuwa_lawrence: 'Wchuwa Lawrence',
    ozopelide_lynda: 'Ozopelide Maume Lynda',
    esan_ukamaka: 'Esan Ukamaka',
    salisu_rukayat: 'Salisu Rukayat',
    babatunde_olufunke: 'Babatunde Olufunke',
    ogunbowale_kayode: 'Ogunbowale Olukayode'
};

// Position names mapping
const positionNames = {
    president: 'President',
    vp: 'Vice President',
    secretary: 'Secretary',
    treasurer: 'Treasurer'
};

// Election status constants
const ELECTION_STATUS = {
    ACTIVE: 'active',
    PAUSED: 'paused',
    STOPPED: 'stopped',
    CLOSED: 'closed'
};

// Admin credentials (in production, this should be server-side)
const adminCredentials = {
    username: 'admin',
    password: 'fcet2025'
};

// Global variables
let isAdminLoggedIn = false;
let dashboardRefreshInterval = null;
let votingData = {
    votes: {},
    voters: new Set(),
    results: {
        president: {},
        vp: {},
        secretary: {},
        treasurer: {}
    }
};

/**
 * Initialize admin dashboard on page load
 */
function initializeAdminDashboard() {
    loadVotingData();
    setupAdminEventListeners();
    showAdminLoginSection();
    
    console.log('Admin Dashboard initialized');
}

/**
 * Load voting data from localStorage
 */
function loadVotingData() {
    try {
        const savedData = localStorage.getItem('fcetVotingData');
        if (savedData) {
            const parsed = JSON.parse(savedData);
            votingData = {
                ...parsed,
                voters: new Set(parsed.voters || [])
            };
        }
    } catch (error) {
        console.error('Error loading voting data:', error);
        votingData = {
            votes: {},
            voters: new Set(),
            results: {
                president: {},
                vp: {},
                secretary: {},
                treasurer: {}
            }
        };
    }
}

/**
 * Save voting data to localStorage
 */
function saveVotingData() {
    try {
        const dataToSave = {
            ...votingData,
            voters: Array.from(votingData.voters)
        };
        localStorage.setItem('fcetVotingData', JSON.stringify(dataToSave));
    } catch (error) {
        console.error('Error saving voting data:', error);
    }
}

/**
 * Get current election status
 */
function getElectionStatus() {
    const savedStatus = JSON.parse(localStorage.getItem('fcetElectionStatus') || '{"status": "active"}');
    return savedStatus.status;
}

/**
 * Set election status
 */
function setElectionStatus(status, reason = '') {
    const statusData = {
        status: status,
        timestamp: new Date().toISOString(),
        updatedBy: 'admin',
        reason: reason
    };
    localStorage.setItem('fcetElectionStatus', JSON.stringify(statusData));
    
    // Update UI immediately
    updateElectionStatusInDashboard();
    
    // Dispatch event for voting page to listen to
    window.dispatchEvent(new CustomEvent('electionStatusChanged', { 
        detail: statusData 
    }));
    
    console.log(`Election status changed to: ${status}`);
}

/**
 * Update election status display in dashboard
 */
function updateElectionStatusInDashboard() {
    const status = getElectionStatus();
    const statusElement = document.getElementById('electionStatusAdmin');
    
    const statusText = {
        active: 'Active',
        paused: 'Paused',
        stopped: 'Stopped',
        closed: 'Closed'
    };
    
    if (statusElement) {
        statusElement.textContent = statusText[status] || 'Unknown';
        statusElement.className = `election-status-${status}`;
    }
    
    // Update control buttons
    updateElectionControlButtons(status);
}

/**
 * Update election control buttons
 */
function updateElectionControlButtons(status) {
    const startBtn = document.getElementById('startBtn');
    const pauseBtn = document.getElementById('pauseBtn');
    const resumeBtn = document.getElementById('resumeBtn');
    const stopBtn = document.getElementById('stopBtn');
    
    // Reset all buttons
    if (startBtn) startBtn.disabled = false;
    if (pauseBtn) pauseBtn.disabled = false;
    if (resumeBtn) resumeBtn.disabled = false;
    if (stopBtn) stopBtn.disabled = false;
    
    // Set button states based on status
    switch (status) {
        case ELECTION_STATUS.ACTIVE:
            if (startBtn) startBtn.disabled = true;
            if (resumeBtn) resumeBtn.disabled = true;
            break;
        case ELECTION_STATUS.PAUSED:
            if (startBtn) startBtn.disabled = true;
            if (pauseBtn) pauseBtn.disabled = true;
            break;
        case ELECTION_STATUS.STOPPED:
            if (pauseBtn) pauseBtn.disabled = true;
            if (resumeBtn) resumeBtn.disabled = true;
            if (stopBtn) stopBtn.disabled = true;
            break;
        case ELECTION_STATUS.CLOSED:
            if (startBtn) startBtn.disabled = true;
            if (pauseBtn) pauseBtn.disabled = true;
            if (resumeBtn) resumeBtn.disabled = true;
            if (stopBtn) stopBtn.disabled = true;
            break;
    }
}

/**
 * Setup admin event listeners
 */
function setupAdminEventListeners() {
    // Admin login form
    const adminLoginForm = document.getElementById('adminLoginForm');
    if (adminLoginForm) {
        adminLoginForm.addEventListener('submit', handleAdminLogin);
    }
    
    // Auto-refresh data when page becomes visible
    document.addEventListener('visibilitychange', function() {
        if (document.visibilityState === 'visible' && isAdminLoggedIn) {
            loadVotingData();
            updateAdminDashboard();
        }
    });
    
    // Listen for voting data updates
    window.addEventListener('votingDataUpdated', function(event) {
        if (isAdminLoggedIn) {
            loadVotingData();
            updateAdminDashboard();
        }
    });
}

/**
 * Handle admin login
 */
function handleAdminLogin(event) {
    event.preventDefault();
    
    const username = document.getElementById('adminUsername').value.trim();
    const password = document.getElementById('adminPassword').value;
    
    // Clear previous messages
    clearMessage('adminLoginMessage');
    
    // Show loading state
    const loginBtn = document.getElementById('adminLoginBtn');
    const originalText = loginBtn.innerHTML;
    loginBtn.innerHTML = '<i class="fa fa-spin fa-spinner"></i> Authenticating...';
    loginBtn.disabled = true;
    
    // Simulate authentication delay
    setTimeout(() => {
        authenticateAdmin(username, password, loginBtn, originalText);
    }, 1500);
}

/**
 * Authenticate admin credentials
 */
function authenticateAdmin(username, password, loginBtn, originalText) {
    if (username === adminCredentials.username && password === adminCredentials.password) {
        isAdminLoggedIn = true;
        showMessage('adminLoginMessage', 'Authentication successful! Loading dashboard...', 'success');
        
        setTimeout(() => {
            showAdminDashboard();
            resetAdminLoginButton(loginBtn, originalText);
        }, 2000);
    } else {
        showMessage('adminLoginMessage', 'Invalid username or password. Please try again.', 'error');
        resetAdminLoginButton(loginBtn, originalText);
    }
}

/**
 * Reset admin login button
 */
function resetAdminLoginButton(loginBtn, originalText) {
    loginBtn.innerHTML = originalText;
    loginBtn.disabled = false;
}

/**
 * Show admin login section
 */
function showAdminLoginSection() {
    document.getElementById('adminLoginSection').style.display = 'block';
    document.getElementById('adminDashboardSection').style.display = 'none';
}

/**
 * Show admin dashboard
 */
function showAdminDashboard() {
    document.getElementById('adminLoginSection').style.display = 'none';
    document.getElementById('adminDashboardSection').style.display = 'block';
    
    // Load and update dashboard data
    loadVotingData();
    updateAdminDashboard();
    
    // Set up auto-refresh every 30 seconds
    if (dashboardRefreshInterval) {
        clearInterval(dashboardRefreshInterval);
    }
    dashboardRefreshInterval = setInterval(() => {
        loadVotingData();
        updateAdminDashboard();
    }, 30000);
    
    // Update last updated time
    updateLastUpdatedTime();
}

/**
 * Update admin dashboard with latest data
 */
function updateAdminDashboard() {
    updateAdminStats();
    updateElectionStatusInDashboard();
    updateAdminResults();
    updateRecentActivity();
    updateVoterAnalytics();
    updateCharts();
    updateLastUpdatedTime();
}

/**
 * Update admin statistics
 */
function updateAdminStats() {
    const totalEligibleVoters = Object.keys(alumniDatabase).length;
    const totalVoters = votingData.voters.size;
    const turnoutRate = totalEligibleVoters > 0 ? Math.round((totalVoters / totalEligibleVoters) * 100) : 0;
    
    // Update stat displays
    updateElement('totalVotersAdmin', totalVoters);
    updateElement('eligibleVotersAdmin', totalEligibleVoters);
    updateElement('turnoutRateAdmin', turnoutRate + '%');
}

/**
 * Update admin results display
 */
function updateAdminResults() {
    const resultsContainer = document.getElementById('adminElectionResults');
    if (!resultsContainer) return;
    
    let resultsHTML = '';
    
    Object.keys(positionNames).forEach(position => {
        const positionResults = votingData.results[position] || {};
        const sortedCandidates = Object.entries(positionResults)
            .sort((a, b) => b[1] - a[1]);
        
        const totalVotes = Object.values(positionResults).reduce((sum, votes) => sum + votes, 0);
        
        resultsHTML += `
            <div class="admin-result-item">
                <div class="admin-result-header">
                    <div class="admin-result-position">${positionNames[position]}</div>
                    <div class="admin-result-total">${totalVotes} Total Votes</div>
                </div>
                <div class="admin-result-votes">
        `;
        
        if (sortedCandidates.length === 0) {
            resultsHTML += '<div class="admin-vote-item"><span>No votes recorded yet</span></div>';
        } else {
            sortedCandidates.forEach(([candidate, votes], index) => {
                const percentage = totalVotes > 0 ? Math.round((votes / totalVotes) * 100) : 0;
                const isWinner = index === 0 && votes > 0;
                
                resultsHTML += `
                    <div class="admin-vote-item ${isWinner ? 'winner' : ''}">
                        <div class="admin-vote-details">
                            <div class="admin-vote-name">
                                ${candidateNames[candidate] || candidate}
                                ${isWinner ? '<span class="winner-badge">Leading</span>' : ''}
                            </div>
                            <div class="admin-vote-stats">
                                <div class="admin-vote-percentage">${percentage}%</div>
                                <div class="admin-vote-count">${votes} vote${votes !== 1 ? 's' : ''}</div>
                            </div>
                        </div>
                    </div>
                `;
            });
        }
        
        resultsHTML += '</div></div>';
    });
    
    resultsContainer.innerHTML = resultsHTML;
}

/**
 * Update recent activity
 */
function updateRecentActivity() {
    const activityContainer = document.getElementById('recentActivity');
    if (!activityContainer) return;
    
    const activities = [];
    const voterEmails = Array.from(votingData.voters).slice(-8);
    
    voterEmails.reverse().forEach((email, index) => {
        const voterInfo = alumniDatabase[email];
        if (voterInfo) {
            const timeAgo = calculateTimeAgo(index);
            activities.push({
                icon: 'fa-check-circle',
                title: `${voterInfo.name} completed voting`,
                time: timeAgo,
                type: 'vote'
            });
        }
    });
    
    // Add system activities
    const electionStatus = getElectionStatus();
    activities.unshift({
        icon: 'fa-refresh',
        title: 'Dashboard refreshed',
        time: 'Just now',
        type: 'system'
    });
    
    activities.unshift({
        icon: electionStatus === 'active' ? 'fa-play' : electionStatus === 'paused' ? 'fa-pause' : 'fa-stop',
        title: `Election status: ${electionStatus.charAt(0).toUpperCase() + electionStatus.slice(1)}`,
        time: '2 minutes ago',
        type: 'status'
    });
    
    let activityHTML = '';
    activities.slice(0, 6).forEach(activity => {
        activityHTML += `
            <div class="activity-item">
                <div class="activity-icon">
                    <i class="fa ${activity.icon}"></i>
                </div>
                <div class="activity-details">
                    <div class="activity-title">${activity.title}</div>
                    <div class="activity-time">${activity.time}</div>
                </div>
            </div>
        `;
    });
    
    activityContainer.innerHTML = activityHTML;
}

/**
 * Calculate time ago for activity feed
 */
function calculateTimeAgo(index) {
    const minutes = (index + 1) * 3;
    if (minutes < 60) {
        return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
    }
    const hours = Math.floor(minutes / 60);
    return `${hours} hour${hours > 1 ? 's' : ''} ago`;
}

/**
 * Update voter analytics
 */
function updateVoterAnalytics() {
    updateSummaryTab();
    updateDemographicsTab();
    updateTimelineTab();
}

/**
 * Update summary tab
 */
function updateSummaryTab() {
    const summaryContainer = document.getElementById('voterSummary');
    if (!summaryContainer) return;
    
    const totalVoters = votingData.voters.size;
    const totalEligible = Object.keys(alumniDatabase).length;
    const activeVoters = Array.from(votingData.voters).filter(email => 
        alumniDatabase[email] && alumniDatabase[email].status === 'Active'
    ).length;
    const completionRate = totalEligible > 0 ? Math.round((totalVoters / totalEligible) * 100) : 0;
    
    const summaryHTML = `
        <div class="analytics-item">
            <div class="analytics-value">${totalVoters}</div>
            <div class="analytics-label">Votes Cast</div>
        </div>
        <div class="analytics-item">
            <div class="analytics-value">${totalEligible - totalVoters}</div>
            <div class="analytics-label">Pending Votes</div>
        </div>
        <div class="analytics-item">
            <div class="analytics-value">${activeVoters}</div>
            <div class="analytics-label">Active Members</div>
        </div>
        <div class="analytics-item">
            <div class="analytics-value">${completionRate}%</div>
            <div class="analytics-label">Completion Rate</div>
        </div>
    `;
    
    summaryContainer.innerHTML = summaryHTML;
}

/**
 * Update demographics tab
 */
function updateDemographicsTab() {
    const demographicsContainer = document.getElementById('voterDemographics');
    if (!demographicsContainer) return;
    
    const votersByYear = {};
    const votersByStatus = { Active: 0, Inactive: 0 };
    
    Array.from(votingData.voters).forEach(email => {
        const voter = alumniDatabase[email];
        if (voter) {
            votersByYear[voter.year] = (votersByYear[voter.year] || 0) + 1;
            votersByStatus[voter.status] = (votersByStatus[voter.status] || 0) + 1;
        }
    });
    
    const topYears = Object.entries(votersByYear)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 2);
    
    let demographicsHTML = `
        <div class="analytics-item">
            <div class="analytics-value">${votersByStatus.Active}</div>
            <div class="analytics-label">Active Members</div>
        </div>
        <div class="analytics-item">
            <div class="analytics-value">${votersByStatus.Inactive}</div>
            <div class="analytics-label">Inactive Members</div>
        </div>
    `;
    
    topYears.forEach(([year, count]) => {
        demographicsHTML += `
            <div class="analytics-item">
                <div class="analytics-value">${count}</div>
                <div class="analytics-label">Class of ${year}</div>
            </div>
        `;
    });
    
    demographicsContainer.innerHTML = demographicsHTML;
}

/**
 * Update timeline tab
 */
function updateTimelineTab() {
    const timelineContainer = document.getElementById('votingTimeline');
    if (!timelineContainer) return;
    
    const totalVoters = votingData.voters.size;
    const timelineEvents = [
        { title: 'Election system launched', time: '3 hours ago' },
        { title: 'First votes recorded', time: '2 hours 30 minutes ago' },
    ];
    
    if (totalVoters >= 5) {
        timelineEvents.push({ title: '5+ votes milestone reached', time: '2 hours ago' });
    }
    
    if (totalVoters >= 10) {
        timelineEvents.push({ title: '10+ votes milestone reached', time: '1 hour 30 minutes ago' });
    }
    
    timelineEvents.push({ title: `Current: ${totalVoters} votes cast`, time: 'Now' });
    
    let timelineHTML = '';
    timelineEvents.forEach(event => {
        timelineHTML += `
            <div class="timeline-item">
                <div class="timeline-marker"></div>
                <div class="timeline-content">
                    <div class="timeline-title">${event.title}</div>
                    <div class="timeline-time">${event.time}</div>
                </div>
            </div>
        `;
    });
    
    timelineContainer.innerHTML = timelineHTML;
}

/**
 * Update charts and visualizations
 */
function updateCharts() {
    updateVoteDistributionChart();
    updateParticipationChart();
}

/**
 * Update vote distribution chart
 */
function updateVoteDistributionChart() {
    const chartContainer = document.getElementById('voteDistributionChart');
    if (!chartContainer) return;
    
    let chartHTML = '<div class="chart-placeholder">';
    chartHTML += '<i class="fa fa-bar-chart"></i>';
    chartHTML += '<p><strong>Vote Distribution Overview</strong></p>';
    
    // Calculate leading candidates for each position
    Object.keys(positionNames).forEach(position => {
        const positionResults = votingData.results[position] || {};
        const sortedCandidates = Object.entries(positionResults)
            .sort((a, b) => b[1] - a[1]);
        
        if (sortedCandidates.length > 0) {
            const [leadingCandidate, votes] = sortedCandidates[0];
            const totalVotes = Object.values(positionResults).reduce((sum, v) => sum + v, 0);
            const percentage = totalVotes > 0 ? Math.round((votes / totalVotes) * 100) : 0;
            
            chartHTML += `<p>${positionNames[position]}: ${candidateNames[leadingCandidate]} leads with ${percentage}%</p>`;
        } else {
            chartHTML += `<p>${positionNames[position]}: No votes yet</p>`;
        }
    });
    
    chartHTML += '</div>';
    chartContainer.innerHTML = chartHTML;
}

/**
 * Update participation chart
 */
function updateParticipationChart() {
    const chartContainer = document.getElementById('participationChart');
    if (!chartContainer) return;
    
    const totalVoters = votingData.voters.size;
    const totalEligible = Object.keys(alumniDatabase).length;
    const participated = totalEligible > 0 ? Math.round((totalVoters / totalEligible) * 100) : 0;
    const remaining = 100 - participated;
    
    let chartHTML = '<div class="chart-placeholder">';
    chartHTML += '<i class="fa fa-pie-chart"></i>';
    chartHTML += '<p><strong>Participation Overview</strong></p>';
    chartHTML += `<p>Voted: ${totalVoters} alumni (${participated}%)</p>`;
    chartHTML += `<p>Remaining: ${totalEligible - totalVoters} alumni (${remaining}%)</p>`;
    chartHTML += `<p>Total Eligible: ${totalEligible} alumni</p>`;
    chartHTML += '</div>';
    
    chartContainer.innerHTML = chartHTML;
}

/**
 * Show analytics tab
 */
function showAnalyticsTab(tabName) {
    // Remove active class from all tabs
    document.querySelectorAll('.tab-button').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelectorAll('.tab-pane').forEach(pane => {
        pane.classList.remove('active');
    });
    
    // Add active class to selected tab
    event.target.classList.add('active');
    document.getElementById(tabName + 'Tab').classList.add('active');
}

/**
 * Update last updated time
 */
function updateLastUpdatedTime() {
    const lastUpdatedElement = document.querySelector('#lastUpdated span');
    if (lastUpdatedElement) {
        const now = new Date();
        lastUpdatedElement.textContent = now.toLocaleTimeString();
    }
}

/**
 * Refresh dashboard
 */
function refreshDashboard() {
    const refreshBtn = event.target.closest('button');
    const originalContent = refreshBtn.innerHTML;
    refreshBtn.innerHTML = '<i class="fa fa-spin fa-refresh"></i> Refreshing...';
    refreshBtn.disabled = true;
    
    setTimeout(() => {
        loadVotingData();
        updateAdminDashboard();
        refreshBtn.innerHTML = originalContent;
        refreshBtn.disabled = false;
        
        showAdminMessage('Dashboard refreshed successfully!', 'success');
    }, 2000);
}

/**
 * Start Election
 */
function startElection() {
    if (confirm('Are you sure you want to start the election? Voters will be able to cast their ballots.')) {
        setElectionStatus(ELECTION_STATUS.ACTIVE, 'Election started by administrator');
        showAdminMessage('Election has been started successfully!', 'success');
        
        // Log this action
        addActivityLog('Election started', 'admin');
    }
}

/**
 * Pause election
 */
function pauseElection() {
    if (confirm('Are you sure you want to pause the election? This will temporarily prevent new votes from being cast.')) {
        setElectionStatus(ELECTION_STATUS.PAUSED, 'Election paused by administrator');
        showAdminMessage('Election has been paused. No new votes can be cast.', 'warning');
        
        // Log this action
        addActivityLog('Election paused', 'admin');
    }
}

/**
 * Resume election
 */
function resumeElection() {
    if (confirm('Are you sure you want to resume the election? Voting will become active again.')) {
        setElectionStatus(ELECTION_STATUS.ACTIVE, 'Election resumed by administrator');
        showAdminMessage('Election has been resumed. Voting is now active.', 'success');
        
        // Log this action
        addActivityLog('Election resumed', 'admin');
    }
}

/**
 * Stop Election
 */
function stopElection() {
    if (confirm('Are you sure you want to stop the election? This action will permanently end the voting process.')) {
        setElectionStatus(ELECTION_STATUS.STOPPED, 'Election stopped by administrator');
        showAdminMessage('Election has been stopped permanently.', 'warning');
        
        // Log this action
        addActivityLog('Election stopped', 'admin');
    }
}

/**
 * Close Election
 */
function closeElection() {
    const confirmMessage = 'IMPORTANT: This will officially close the election and end the voting period.\n\n' +
                          'Type "CLOSE ELECTION" to confirm:';
    
    const userInput = prompt(confirmMessage);
    
    if (userInput === 'CLOSE ELECTION') {
        setElectionStatus(ELECTION_STATUS.CLOSED, 'Election officially closed');
        showAdminMessage('Election has been officially closed. Results can now be finalized.', 'success');
        
        // Generate final report automatically
        setTimeout(() => {
            generateFinalElectionReport();
        }, 2000);
        
        // Log this action
        addActivityLog('Election closed', 'admin');
    } else if (userInput !== null) {
        showAdminMessage('Election closure cancelled. Incorrect confirmation text.', 'error');
    }
}

/**
 * Add activity log entry
 */
function addActivityLog(action, user) {
    // In a real system, this would be sent to a server
    console.log(`Activity Log: ${action} by ${user} at ${new Date().toISOString()}`);
}

/**
 * Export serial numbers for email distribution
 */
function exportSerialNumbers() {
    try {
        let csvContent = 'Email,Name,Serial Number,Matric Number,Status\n';
        
        Object.keys(alumniDatabase).forEach(email => {
            const voter = alumniDatabase[email];
            csvContent += `"${email}","${voter.name}","${voter.serialNumber}","${voter.matricNumber}","${voter.status}"\n`;
        });
        
        const blob = new Blob([csvContent], { type: 'text/csv' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = `fcet-voting-serial-numbers-${new Date().toISOString().split('T')[0]}.csv`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
        showAdminMessage('Serial numbers exported successfully!', 'success');
    } catch (error) {
        console.error('Export error:', error);
        showAdminMessage('Error exporting serial numbers. Please try again.', 'error');
    }
}

/**
 * Export results to JSON file
 */
function exportResults() {
    try {
        const results = {
            timestamp: new Date().toISOString(),
            electionTitle: 'FCE(T) Akoka Alumni Association Election 2025',
            electionStatus: getElectionStatus(),
            statistics: {
                totalVoters: votingData.voters.size,
                eligibleVoters: Object.keys(alumniDatabase).length,
                turnoutRate: Math.round((votingData.voters.size / Object.keys(alumniDatabase).length) * 100)
            },
            results: votingData.results,
            detailedResults: {},
            voterCount: Array.from(votingData.voters).length,
            votersList: Array.from(votingData.voters).map(email => ({
                email: email,
                name: alumniDatabase[email]?.name || 'Unknown',
                serialNumber: alumniDatabase[email]?.serialNumber || 'Unknown'
            }))
        };
        
        // Add detailed results with candidate names
        Object.keys(positionNames).forEach(position => {
            results.detailedResults[position] = {
                positionName: positionNames[position],
                candidates: {}
            };
            
            const positionResults = votingData.results[position] || {};
            Object.keys(positionResults).forEach(candidateKey => {
                results.detailedResults[position].candidates[candidateKey] = {
                    name: candidateNames[candidateKey] || candidateKey,
                    votes: positionResults[candidateKey]
                };
            });
        });
        
        const dataStr = JSON.stringify(results, null, 2);
        const dataBlob = new Blob([dataStr], { type: 'application/json' });
        
        const link = document.createElement('a');
        link.href = URL.createObjectURL(dataBlob);
        link.download = `fcet-election-results-${new Date().toISOString().split('T')[0]}.json`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
        showAdminMessage('Results exported successfully!', 'success');
    } catch (error) {
        console.error('Export error:', error);
        showAdminMessage('Error exporting results. Please try again.', 'error');
    }
}

/**
 * Generate final election report
 */
function generateFinalElectionReport() {
    try {
        let report = 'FCE(T) AKOKA ALUMNI ASSOCIATION ELECTION 2025 - FINAL REPORT\n';
        report += '='.repeat(65) + '\n\n';
        report += `Generated: ${new Date().toLocaleString()}\n`;
        report += `Election Status: ${getElectionStatus().toUpperCase()}\n\n`;
        
        // Statistics
        report += 'FINAL ELECTION STATISTICS\n';
        report += '-'.repeat(28) + '\n';
        report += `Total Eligible Voters: ${Object.keys(alumniDatabase).length}\n`;
        report += `Total Votes Cast: ${votingData.voters.size}\n`;
        report += `Final Voter Turnout: ${Math.round((votingData.voters.size / Object.keys(alumniDatabase).length) * 100)}%\n\n`;
        
        // Winners by position
        report += 'ELECTION WINNERS\n';
        report += '-'.repeat(16) + '\n';
        
        Object.keys(positionNames).forEach(position => {
            const positionResults = votingData.results[position] || {};
            const sortedCandidates = Object.entries(positionResults)
                .sort((a, b) => b[1] - a[1]);
            
            if (sortedCandidates.length > 0) {
                const [winner, votes] = sortedCandidates[0];
                const totalVotes = Object.values(positionResults).reduce((sum, v) => sum + v, 0);
                const percentage = totalVotes > 0 ? ((votes / totalVotes) * 100).toFixed(1) : '0.0';
                
                report += `${positionNames[position]}: ${candidateNames[winner] || winner}\n`;
                report += `  Votes: ${votes} (${percentage}% of total)\n\n`;
            } else {
                report += `${positionNames[position]}: No votes recorded\n\n`;
            }
        });
        
        // Detailed results by position
        Object.keys(positionNames).forEach(position => {
            report += `${positionNames[position].toUpperCase()} - DETAILED RESULTS\n`;
            report += '-'.repeat(positionNames[position].length + 20) + '\n';
            
            const positionResults = votingData.results[position] || {};
            const sortedCandidates = Object.entries(positionResults)
                .sort((a, b) => b[1] - a[1]);
            
            const totalVotes = Object.values(positionResults).reduce((sum, votes) => sum + votes, 0);
            
            if (sortedCandidates.length === 0) {
                report += 'No votes recorded\n\n';
            } else {
                sortedCandidates.forEach(([candidate, votes], index) => {
                    const percentage = totalVotes > 0 ? ((votes / totalVotes) * 100).toFixed(1) : '0.0';
                    const status = index === 0 ? ' ✓ WINNER' : '';
                    report += `${index + 1}. ${candidateNames[candidate] || candidate}: ${votes} votes (${percentage}%)${status}\n`;
                });
                report += `Total votes for this position: ${totalVotes}\n\n`;
            }
        });
        
        // Create and download report
        const reportBlob = new Blob([report], { type: 'text/plain' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(reportBlob);
        link.download = `fcet-election-final-report-${new Date().toISOString().split('T')[0]}.txt`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
        showAdminMessage('Final election report generated successfully!', 'success');
    } catch (error) {
        console.error('Report generation error:', error);
        showAdminMessage('Error generating final report. Please try again.', 'error');
    }
}

/**
 * Generate detailed report
 */
function generateDetailedReport() {
    generateFinalElectionReport();
}

/**
 * Generate voter list
 */
function generateVoterList() {
    try {
        let voterList = 'FCE(T) AKOKA ALUMNI VOTER LIST\n';
        voterList += '='.repeat(35) + '\n\n';
        voterList += `Generated: ${new Date().toLocaleString()}\n`;
        voterList += `Election Status: ${getElectionStatus().toUpperCase()}\n\n`;
        
        voterList += 'VOTERS WHO HAVE CAST BALLOTS\n';
        voterList += '-'.repeat(30) + '\n';
        
        const voterEmails = Array.from(votingData.voters).sort();
        
        if (voterEmails.length === 0) {
            voterList += 'No votes have been cast yet.\n\n';
        } else {
            voterEmails.forEach((email, index) => {
                const voter = alumniDatabase[email];
                if (voter) {
                    voterList += `${index + 1}. ${voter.name}\n`;
                    voterList += `   Email: ${email}\n`;
                    voterList += `   Serial: ${voter.serialNumber}\n`;
                    voterList += `   Matric: ${voter.matricNumber}\n`;
                    voterList += `   Year: ${voter.year} • Status: ${voter.status}\n\n`;
                }
            });
        }
        
        voterList += `Total Voters: ${voterEmails.length}\n`;
        
        // Non-voters list
        const nonVoters = Object.keys(alumniDatabase).filter(email => !votingData.voters.has(email));
        
        voterList += '\n\nELIGIBLE VOTERS WHO HAVE NOT VOTED\n';
        voterList += '-'.repeat(35) + '\n';
        
        nonVoters.forEach((email, index) => {
            const voter = alumniDatabase[email];
            voterList += `${index + 1}. ${voter.name}\n`;
            voterList += `   Email: ${email}\n`;
            voterList += `   Serial: ${voter.serialNumber}\n`;
            voterList += `   Matric: ${voter.matricNumber}\n`;
            voterList += `   Year: ${voter.year} • Status: ${voter.status}\n\n`;
        });
        
        voterList += `Remaining Voters: ${nonVoters.length}\n`;
        
        const listBlob = new Blob([voterList], { type: 'text/plain' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(listBlob);
        link.download = `fcet-voter-list-${new Date().toISOString().split('T')[0]}.txt`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
        showAdminMessage('Voter list generated successfully!', 'success');
    } catch (error) {
        console.error('Voter list generation error:', error);
        showAdminMessage('Error generating voter list. Please try again.', 'error');
    }
}

/**
 * Backup data
 */
function backupData() {
    try {
        const backupData = {
            timestamp: new Date().toISOString(),
            description: 'FCE(T) Akoka Alumni Voting System Data Backup',
            electionStatus: getElectionStatus(),
            votingData: {
                ...votingData,
                voters: Array.from(votingData.voters)
            },
            alumniDatabase: alumniDatabase,
            candidateNames: candidateNames,
            positionNames: positionNames
        };
        
        const dataStr = JSON.stringify(backupData, null, 2);
        const dataBlob = new Blob([dataStr], { type: 'application/json' });
        
        const link = document.createElement('a');
        link.href = URL.createObjectURL(dataBlob);
        link.download = `fcet-voting-backup-${new Date().toISOString().split('T')[0]}.json`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
        showAdminMessage('Data backup created successfully!', 'success');
    } catch (error) {
        console.error('Backup error:', error);
        showAdminMessage('Error creating backup. Please try again.', 'error');
    }
}

/**
 * Clear all data (dangerous operation)
 */
function clearAllData() {
    const confirmMessage = 'DANGER: This will permanently delete all voting data.\n\n' +
                          'Type "CONFIRM DELETE" to proceed:';
    
    const userInput = prompt(confirmMessage);
    
    if (userInput === 'CONFIRM DELETE') {
        // Create backup before deletion
        backupData();
        
        // Clear voting data
        votingData = {
            votes: {},
            voters: new Set(),
            results: {
                president: {},
                vp: {},
                secretary: {},
                treasurer: {}
            }
        };
        
        // Reset election status
        setElectionStatus(ELECTION_STATUS.ACTIVE, 'Data cleared and election reset');
        
        // Save cleared data
        saveVotingData();
        
        // Update dashboard
        updateAdminDashboard();
        
        showAdminMessage('All voting data has been cleared. A backup was created before deletion.', 'warning');
    } else if (userInput !== null) {
        showAdminMessage('Data deletion cancelled. Incorrect confirmation text.', 'error');
    }
}

/**
 * Admin logout
 */
function adminLogout() {
    // Clear admin session
    isAdminLoggedIn = false;
    
    // Clear refresh interval
    if (dashboardRefreshInterval) {
        clearInterval(dashboardRefreshInterval);
        dashboardRefreshInterval = null;
    }
    
    // Show login section
    showAdminLoginSection();
    
    // Clear admin login form
    document.getElementById('adminLoginForm').reset();
    clearMessage('adminLoginMessage');
    
    showAdminMessage('Logged out successfully.', 'success');
}

/**
 * Show admin message (toast-style notification)
 */
function showAdminMessage(message, type) {
    // Create temporary message element
    const messageDiv = document.createElement('div');
    messageDiv.className = `admin-${type}`;
    messageDiv.textContent = message;
    messageDiv.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        z-index: 10000;
        max-width: 300px;
        padding: 15px 20px;
        border-radius: 8px;
        font-family: "Montserrat-Regular";
        font-size: 14px;
        box-shadow: 0 8px 25px rgba(0,0,0,0.15);
        animation: slideIn 0.3s ease;
    `;
    
    document.body.appendChild(messageDiv);
    
    // Remove after 4 seconds
    setTimeout(() => {
        if (messageDiv.parentNode) {
            messageDiv.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => {
                if (messageDiv.parentNode) {
                    messageDiv.parentNode.removeChild(messageDiv);
                }
            }, 300);
        }
    }, 4000);
}

/**
 * Utility function to show message in specified container
 */
function showMessage(elementId, message, type) {
    const element = document.getElementById(elementId);
    if (!element) return;
    
    const alertClass = type === 'success' ? 'alert-success' : 
                     type === 'error' ? 'alert-error' : 'alert-info';
    
    element.innerHTML = `<div class="alert ${alertClass}">${message}</div>`;
    
    // Auto-hide success messages after 5 seconds
    if (type === 'success') {
        setTimeout(() => {
            clearMessage(elementId);
        }, 5000);
    }
}

/**
 * Clear message from specified container
 */
function clearMessage(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        element.innerHTML = '';
    }
}

/**
 * Utility function to update element content
 */
function updateElement(elementId, content) {
    const element = document.getElementById(elementId);
    if (element) {
        element.textContent = content;
    }
}

// CSS for animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
    
    .election-status-active {
        background: #28a745;
        color: white;
        padding: 5px 12px;
        border-radius: 15px;
        font-size: 12px;
        text-transform: uppercase;
    }
    
    .election-status-paused {
        background: #ffc107;
        color: #212529;
        padding: 5px 12px;
        border-radius: 15px;
        font-size: 12px;
        text-transform: uppercase;
    }
    
    .election-status-stopped {
        background: #dc3545;
        color: white;
        padding: 5px 12px;
        border-radius: 15px;
        font-size: 12px;
        text-transform: uppercase;
    }
    
    .election-status-closed {
        background: #6c757d;
        color: white;
        padding: 5px 12px;
        border-radius: 15px;
        font-size: 12px;
        text-transform: uppercase;
    }
`;
document.head.appendChild(style);

// Make functions available globally
window.showAnalyticsTab = showAnalyticsTab;
window.refreshDashboard = refreshDashboard;
window.exportResults = exportResults;
window.exportSerialNumbers = exportSerialNumbers;
window.adminLogout = adminLogout;
window.startElection = startElection;
window.pauseElection = pauseElection;
window.resumeElection = resumeElection;
window.stopElection = stopElection;
window.closeElection = closeElection;
window.backupData = backupData;
window.clearAllData = clearAllData;
window.generateDetailedReport = generateDetailedReport;
window.generateVoterList = generateVoterList;

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeAdminDashboard();
});

// Auto-save data periodically if there are votes
setInterval(function() {
    if (votingData.voters.size > 0 && isAdminLoggedIn) {
        saveVotingData();
    }
}, 60000); // Save every minute

// Handle browser close/refresh
window.addEventListener('beforeunload', function() {
    if (isAdminLoggedIn) {
        saveVotingData();
    }
});