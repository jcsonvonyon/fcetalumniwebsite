// FCE(T) Akoka Alumni Voting Portal JavaScript with Serial Number Authentication

// Alumni database with generated serial numbers
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

// Global variables
let currentUser = null;
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
 * Initialize the voting system
 */
function initializeVotingSystem() {
    loadVotingData();
    setupEventListeners();
    checkElectionStatus();
    
    console.log('FCE(T) Akoka Alumni Voting System initialized');
}

/**
 * Check election status and show appropriate section
 */
function checkElectionStatus() {
    const electionStatus = getElectionStatus();
    updateElectionStatusDisplay(electionStatus);
    
    if (electionStatus === ELECTION_STATUS.ACTIVE) {
        showLoginSection();
    } else {
        showElectionClosedSection(electionStatus);
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
function setElectionStatus(status) {
    const statusData = {
        status: status,
        timestamp: new Date().toISOString(),
        updatedBy: 'admin'
    };
    localStorage.setItem('fcetElectionStatus', JSON.stringify(statusData));
    
    // Dispatch event for admin dashboard
    window.dispatchEvent(new CustomEvent('electionStatusChanged', { 
        detail: statusData 
    }));
}

/**
 * Update election status display
 */
function updateElectionStatusDisplay(status) {
    const statusBadge = document.getElementById('statusBadge');
    const statusText = {
        active: 'Election Status: Active',
        paused: 'Election Status: Paused',
        stopped: 'Election Status: Stopped',
        closed: 'Election Status: Closed'
    };
    
    const statusClasses = {
        active: 'status-active',
        paused: 'status-paused',
        stopped: 'status-stopped',
        closed: 'status-closed'
    };
    
    if (statusBadge) {
        statusBadge.textContent = statusText[status] || 'Election Status: Unknown';
        statusBadge.className = `status-badge ${statusClasses[status] || ''}`;
    }
}

/**
 * Show election closed section
 */
function showElectionClosedSection(status) {
    hideAllSections();
    document.getElementById('electionClosedSection').style.display = 'block';
    
    const title = document.getElementById('electionClosedTitle');
    const message = document.getElementById('electionClosedMessage');
    
    const messages = {
        paused: {
            title: 'Election Temporarily Paused',
            message: 'The election has been temporarily paused by the administrators. Please check back shortly.'
        },
        stopped: {
            title: 'Election Stopped',
            message: 'The election has been stopped by the administrators. Please contact the election committee for more information.'
        },
        closed: {
            title: 'Election Closed',
            message: 'The voting period has ended. Thank you for your participation. Results will be announced soon.'
        }
    };
    
    const statusMessage = messages[status] || messages.closed;
    if (title) title.textContent = statusMessage.title;
    if (message) message.textContent = statusMessage.message;
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
        // Reset to default if data is corrupted
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
        
        // Dispatch custom event for admin dashboard to listen to
        window.dispatchEvent(new CustomEvent('votingDataUpdated', { 
            detail: dataToSave 
        }));
    } catch (error) {
        console.error('Error saving voting data:', error);
        showMessage('loginMessage', 'Error saving voting data. Please try again.', 'error');
    }
}

/**
 * Setup event listeners
 */
function setupEventListeners() {
    // Login form submission
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', handleLogin);
    }

    // Voting form submission
    const votingForm = document.getElementById('votingForm');
    if (votingForm) {
        votingForm.addEventListener('submit', handleVoting);
    }

    // Auto-uppercase serial number input
    const serialInput = document.getElementById('serialNumber');
    if (serialInput) {
        serialInput.addEventListener('input', function(e) {
            e.target.value = e.target.value.toUpperCase();
        });
    }

    // Check election status periodically
    setInterval(checkElectionStatus, 30000); // Check every 30 seconds

    // Listen for election status changes
    window.addEventListener('electionStatusChanged', function(event) {
        setTimeout(() => {
            checkElectionStatus();
        }, 1000);
    });

    // Prevent form resubmission on page reload
    window.addEventListener('beforeunload', function() {
        if (currentUser) {
            saveVotingData();
        }
    });
    
    // Handle page visibility changes for data persistence
    document.addEventListener('visibilitychange', function() {
        if (document.visibilityState === 'hidden' && currentUser) {
            saveVotingData();
        }
    });
}

/**
 * Handle login form submission
 */
function handleLogin(event) {
    event.preventDefault();
    
    // Check if election is active
    if (getElectionStatus() !== ELECTION_STATUS.ACTIVE) {
        showMessage('loginMessage', 'Voting is currently not available. The election may be paused or closed.', 'error');
        return;
    }
    
    const email = document.getElementById('email').value.toLowerCase().trim();
    const serialNumber = document.getElementById('serialNumber').value.toUpperCase().trim();
    
    // Clear previous messages
    clearMessage('loginMessage');
    
    // Show loading state
    const loginBtn = document.getElementById('loginBtn');
    const originalText = loginBtn.textContent;
    loginBtn.textContent = 'Authenticating...';
    loginBtn.disabled = true;
    
    // Simulate authentication delay
    setTimeout(() => {
        authenticateUser(email, serialNumber, loginBtn, originalText);
    }, 1500);
}

/**
 * Authenticate user credentials
 */
function authenticateUser(email, serialNumber, loginBtn, originalText) {
    try {
        // Validate input
        if (!email || !serialNumber) {
            showMessage('loginMessage', 'Please enter both email and voting serial number.', 'error');
            resetLoginButton(loginBtn, originalText);
            return;
        }

        // Check if user exists in database
        const alumniRecord = alumniDatabase[email];
        if (!alumniRecord) {
            showMessage('loginMessage', 'Email address not found in alumni database. Please check your email and try again.', 'error');
            resetLoginButton(loginBtn, originalText);
            return;
        }

        // Verify serial number
        if (alumniRecord.serialNumber !== serialNumber) {
            showMessage('loginMessage', 'Invalid voting serial number. Please check your serial number and try again.', 'error');
            resetLoginButton(loginBtn, originalText);
            return;
        }

        // Check if user has already voted
        if (votingData.voters.has(email)) {
            showMessage('loginMessage', 'You have already voted in this election. Each alumni can only vote once.', 'error');
            resetLoginButton(loginBtn, originalText);
            return;
        }

        // Double-check election status before allowing voting
        if (getElectionStatus() !== ELECTION_STATUS.ACTIVE) {
            showMessage('loginMessage', 'The election has been paused or closed. Please try again later.', 'error');
            resetLoginButton(loginBtn, originalText);
            return;
        }

        // Successful authentication
        currentUser = { email, ...alumniRecord };
        showMessage('loginMessage', `Welcome, ${currentUser.name}! Redirecting to voting ballot...`, 'success');
        
        setTimeout(() => {
            showVotingSection();
            resetLoginButton(loginBtn, originalText);
        }, 2000);

    } catch (error) {
        console.error('Authentication error:', error);
        showMessage('loginMessage', 'An error occurred during authentication. Please try again.', 'error');
        resetLoginButton(loginBtn, originalText);
    }
}

/**
 * Reset login button state
 */
function resetLoginButton(loginBtn, originalText) {
    loginBtn.textContent = originalText;
    loginBtn.disabled = false;
}

/**
 * Handle voting form submission
 */
function handleVoting(event) {
    event.preventDefault();
    
    // Check if election is still active
    if (getElectionStatus() !== ELECTION_STATUS.ACTIVE) {
        showMessage('votingMessage', 'The election has been paused or closed. Your votes cannot be submitted at this time.', 'error');
        return;
    }
    
    const votes = {
        president: document.querySelector('input[name="president"]:checked')?.value,
        vp: document.querySelector('input[name="vp"]:checked')?.value,
        secretary: document.querySelector('input[name="secretary"]:checked')?.value,
        treasurer: document.querySelector('input[name="treasurer"]:checked')?.value
    };

    // Validate that all positions are voted for
    const unvotedPositions = Object.keys(votes).filter(position => !votes[position]);
    if (unvotedPositions.length > 0) {
        const positionList = unvotedPositions.map(pos => positionNames[pos]).join(', ');
        showMessage('votingMessage', `Please select candidates for: ${positionList}`, 'error');
        
        // Scroll to first unvoted position
        const firstUnvoted = document.querySelector(`input[name="${unvotedPositions[0]}"]`);
        if (firstUnvoted) {
            firstUnvoted.closest('.position-section').scrollIntoView({ 
                behavior: 'smooth', 
                block: 'center' 
            });
        }
        return;
    }

    // Show confirmation dialog
    if (!confirmVotes(votes)) {
        return;
    }

    // Process the votes
    processVotes(votes);
}

/**
 * Confirm votes with user
 */
function confirmVotes(votes) {
    let confirmMessage = 'Please confirm your votes:\n\n';
    Object.keys(votes).forEach(position => {
        const candidateName = candidateNames[votes[position]] || votes[position];
        confirmMessage += `${positionNames[position]}: ${candidateName}\n`;
    });
    confirmMessage += '\nOnce submitted, you cannot change your votes. Do you want to proceed?';
    
    return confirm(confirmMessage);
}

/**
 * Process and record votes
 */
function processVotes(votes) {
    try {
        // Final check for election status
        if (getElectionStatus() !== ELECTION_STATUS.ACTIVE) {
            showMessage('votingMessage', 'The election has been paused or closed. Your votes cannot be submitted.', 'error');
            return;
        }

        // Show processing state
        const submitBtn = document.getElementById('submitVoteBtn');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Processing Votes...';
        submitBtn.disabled = true;

        // Record the votes
        votingData.votes[currentUser.email] = {
            ...votes,
            timestamp: new Date().toISOString(),
            voterInfo: {
                name: currentUser.name,
                year: currentUser.year,
                status: currentUser.status,
                serialNumber: currentUser.serialNumber
            }
        };

        // Add voter to the list
        votingData.voters.add(currentUser.email);

        // Update results
        Object.keys(votes).forEach(position => {
            const candidate = votes[position];
            if (!votingData.results[position][candidate]) {
                votingData.results[position][candidate] = 0;
            }
            votingData.results[position][candidate]++;
        });

        // Save data
        saveVotingData();

        // Show success message
        showMessage('votingMessage', 'Your votes have been recorded successfully! Redirecting to results...', 'success');

        // Redirect to results
        setTimeout(() => {
            showResultsSection();
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }, 2500);

    } catch (error) {
        console.error('Error processing votes:', error);
        showMessage('votingMessage', 'An error occurred while processing your votes. Please try again.', 'error');
        
        // Reset button
        const submitBtn = document.getElementById('submitVoteBtn');
        submitBtn.textContent = 'Submit My Votes';
        submitBtn.disabled = false;
    }
}

/**
 * Select a candidate (for click handling)
 */
function selectCandidate(position, candidate) {
    const radio = document.querySelector(`input[name="${position}"][value="${candidate}"]`);
    if (radio) {
        radio.checked = true;
        
        // Update visual selection
        document.querySelectorAll(`input[name="${position}"]`).forEach(input => {
            input.closest('.candidate').classList.remove('selected');
        });
        radio.closest('.candidate').classList.add('selected');
        
        // Clear any error messages
        clearMessage('votingMessage');
    }
}

/**
 * Show login section
 */
function showLoginSection() {
    hideAllSections();
    document.getElementById('loginSection').style.display = 'block';
    clearForms();
}

/**
 * Show voting section
 */
function showVotingSection() {
    hideAllSections();
    document.getElementById('votingSection').style.display = 'block';
    
    // Display user info
    displayUserInfo();
    
    // Clear any messages
    clearMessage('votingMessage');
}

/**
 * Show results section
 */
function showResultsSection() {
    hideAllSections();
    document.getElementById('resultsSection').style.display = 'block';
    
    // Display results
    displayResults();
}

/**
 * Hide all sections
 */
function hideAllSections() {
    document.getElementById('loginSection').style.display = 'none';
    document.getElementById('votingSection').style.display = 'none';
    document.getElementById('resultsSection').style.display = 'none';
    document.getElementById('electionClosedSection').style.display = 'none';
}

/**
 * Display user information
 */
function displayUserInfo() {
    const userInfoElement = document.getElementById('userInfo');
    if (userInfoElement && currentUser) {
        userInfoElement.innerHTML = `
            <strong>Welcome, ${currentUser.name}!</strong><br>
            Class of ${currentUser.year} • ${currentUser.matricNumber} • Status: ${currentUser.status}<br>
            <small>Voting Serial: ${currentUser.serialNumber}</small>
        `;
    }
}

/**
 * Display voting results
 */
function displayResults() {
    updateVotingStats();
    displayElectionResults();
}

/**
 * Update voting statistics
 */
function updateVotingStats() {
    const totalEligibleVoters = Object.keys(alumniDatabase).length;
    const totalVoters = votingData.voters.size;
    const participationRate = totalEligibleVoters > 0 ? Math.round((totalVoters / totalEligibleVoters) * 100) : 0;
    
    const totalVotersElement = document.getElementById('totalVoters');
    const participationRateElement = document.getElementById('participationRate');
    
    if (totalVotersElement) {
        totalVotersElement.textContent = totalVoters;
    }
    
    if (participationRateElement) {
        participationRateElement.textContent = participationRate + '%';
    }
}

/**
 * Display election results
 */
function displayElectionResults() {
    const resultsContainer = document.getElementById('electionResults');
    if (!resultsContainer) return;
    
    let resultsHTML = '';
    
    Object.keys(positionNames).forEach(position => {
        resultsHTML += `
            <div class="result-item">
                <div class="result-position">${positionNames[position]}</div>
                <div class="result-votes">
        `;
        
        const positionResults = votingData.results[position] || {};
        const sortedCandidates = Object.entries(positionResults)
            .sort((a, b) => b[1] - a[1]);
        
        if (sortedCandidates.length === 0) {
            resultsHTML += '<div class="vote-item"><span>No votes recorded yet</span></div>';
        } else {
            sortedCandidates.forEach(([candidate, votes]) => {
                resultsHTML += `
                    <div class="vote-item">
                        <span class="vote-name">${candidateNames[candidate] || candidate}</span>
                        <span class="vote-count">${votes} vote${votes !== 1 ? 's' : ''}</span>
                    </div>
                `;
            });
        }
        
        resultsHTML += '</div></div>';
    });
    
    resultsContainer.innerHTML = resultsHTML;
}

/**
 * Logout function
 */
function logout() {
    // Clear current user
    currentUser = null;
    
    // Check election status and show appropriate section
    checkElectionStatus();
    
    // Clear all messages
    clearMessage('loginMessage');
    clearMessage('votingMessage');
    
    console.log('User logged out successfully');
}

/**
 * Show message to user
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
 * Clear message
 */
function clearMessage(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        element.innerHTML = '';
    }
}

/**
 * Clear all forms
 */
function clearForms() {
    // Clear login form
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.reset();
    }
    
    // Clear voting form
    const votingForm = document.getElementById('votingForm');
    if (votingForm) {
        votingForm.reset();
        
        // Clear visual selections
        document.querySelectorAll('.candidate').forEach(candidate => {
            candidate.classList.remove('selected');
        });
    }
    
    // Clear messages
    clearMessage('loginMessage');
    clearMessage('votingMessage');
}

/**
 * Generate serial numbers for all alumni (Admin function)
 */
function generateSerialNumbers() {
    const serialNumbers = [];
    const emails = Object.keys(alumniDatabase);
    
    emails.forEach((email, index) => {
        const serialNumber = `FCET-VSN-2025-${String(index + 1).padStart(3, '0')}`;
        alumniDatabase[email].serialNumber = serialNumber;
        
        serialNumbers.push({
            email: email,
            name: alumniDatabase[email].name,
            serialNumber: serialNumber,
            matricNumber: alumniDatabase[email].matricNumber
        });
    });
    
    return serialNumbers;
}

/**
 * Export serial numbers for email distribution (Admin function)
 */
function exportSerialNumbers() {
    const serialNumbers = generateSerialNumbers();
    
    let csvContent = 'Email,Name,Serial Number,Matric Number\n';
    serialNumbers.forEach(record => {
        csvContent += `"${record.email}","${record.name}","${record.serialNumber}","${record.matricNumber}"\n`;
    });
    
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `fcet-voting-serial-numbers-${new Date().toISOString().split('T')[0]}.csv`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    console.log('Serial numbers exported successfully');
    return serialNumbers;
}

/**
 * Get current voting statistics (for admin dashboard)
 */
function getVotingStats() {
    return {
        totalVoters: votingData.voters.size,
        totalEligible: Object.keys(alumniDatabase).length,
        turnoutRate: Object.keys(alumniDatabase).length > 0 ? 
                    Math.round((votingData.voters.size / Object.keys(alumniDatabase).length) * 100) : 0,
        results: votingData.results,
        voters: Array.from(votingData.voters),
        electionStatus: getElectionStatus()
    };
}

/**
 * Debug function to reset all voting data (for testing)
 */
function resetVotingData() {
    if (confirm('Are you sure you want to reset all voting data? This action cannot be undone.')) {
        localStorage.removeItem('fcetVotingData');
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
        alert('Voting data has been reset.');
        logout();
    }
}

// Make functions available globally for HTML onclick handlers and admin access
window.selectCandidate = selectCandidate;
window.logout = logout;
window.resetVotingData = resetVotingData;
window.getVotingStats = getVotingStats;
window.generateSerialNumbers = generateSerialNumbers;
window.exportSerialNumbers = exportSerialNumbers;
window.getElectionStatus = getElectionStatus;
window.setElectionStatus = setElectionStatus;
window.ELECTION_STATUS = ELECTION_STATUS;

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeVotingSystem();
});

// Auto-save data periodically
setInterval(function() {
    if (votingData.voters.size > 0 && currentUser) {
        saveVotingData();
    }
}, 120000); // Save every 2 minutes

// Handle browser close/refresh
window.addEventListener('beforeunload', function() {
    if (currentUser) {
        saveVotingData();
    }
});