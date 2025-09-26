// Alumni Directory JavaScript Functionality

// Alumni data with additional fields
const alumniData = [
    // {
    //     name: "Adeyemo Adeonipekun",
    //     year: "2004",
    //     city: "Ogun",
    //     school: "School of Technical Education",
    //     department: "Electrical / Electronics",
    //     matricNumber: "01/TED/12201",
    //     status: "Inactive",
    //     image: "images/yemo-adeonipekun.png"
    // },
    {
        name: "Oluwatosin Ligali",
        year: "2004",
        city: "Lagos",
        school: "School of Technical Education",
        department: "Electrical / Electronics",
        matricNumber: "01/TED/12791",
        status: "Inactive",
        image: "images/members/ligali.jpg"
    },
    {
        name: "Awe Tolulope D",
        year: "2008",
        city: "Oyo",
        school: "School of Business Education",
        department: "Accounting",
        matricNumber: "05/BED/19231",
        status: "Active",
        image: "images/members/female.jpg"
    },
    {
        name: "Adeyanju Adeonipekun",
        year: "2010",
        city: "Ogun",
        school: "School of Business Education",
        department: "Office Technology & Management",
        matricNumber: "07/BED/22096",
        status: "Inactive",
        image: "images/members/yanju.jpg"
    },
    {
        name: "Olafimihan Abosede O",
        year: "1993",
        city: "Ogun",
        school: "School of Business Education",
        department: "Accounting",
        matricNumber: "90/BAE/5888",
        status: "Active",
        image: "images/members/female.jpg"
    },
    // {
    //     name: "Nancy Nwosu",
    //     year: "2012",
    //     city: "Oyo",
    //     school: "School of Business Education",
    //     department: "Accounting",
    //     matricNumber: "--/---/------",
    //     status: "Inactive",
    //     image: "images/nwosu-nancy.png"
    // },
    // {
    //     name: "Taiwo Shina",
    //     year: "2012",
    //     city: "Lagos",
    //     school: "School of Technical Education",
    //     department: "Electrical/Electronics",
    //     matricNumber: "--/---/------",
    //     status: "Inactive",
    //     image: "images/members/male.jpg"
    // },
    // {
    //     name: "Lawal Bolanle",
    //     year: "2001",
    //     city: "Lagos",
    //     school: "School of Business Education",
    //     department: "Accounting",
    //     matricNumber: "--/---/------",
    //     status: "Inactive",
    //     image: "images/members/female.jpg"
    // },
    // {
    //     name: "Lawrence Daria",
    //     year: "1980",
    //     city: "Lagos",
    //     school: "School of Technical Education",
    //     department: "Woodwork",
    //     matricNumber: "--/---/------",
    //     status: "Active",
    //     image: "images/members/male.jpg"
    // },
    {
        name: "Ajayi Akintunde",
        year: "2004",
        city: "Lagos",
        school: "School of Technical Education",
        department: "Electrical / Electronics",
        matricNumber: "01/TED/127---",
        status: "Inactive",
        image: "images/members/ajayi-akintunde.jpg"
    },
    // {
    //     name: "Owolabi Kafayat",
    //     year: "1997",
    //     city: "Edo",
    //     school: "School of Business Education",
    //     department: "Secretariat Studies",
    //     matricNumber: "--/---/------",
    //     status: "Inactive",
    //     image: "images/owolabi-kafayat.png"
    // },
    // {
    //     name: "Shabi Adebisi",
    //     year: "2004",
    //     city: "Lagos",
    //     school: "School of Science Education",
    //     department: "Integrated Science/Biology",
    //     matricNumber: "--/---/------",
    //     status: "Inactive",
    //     image: "images/shabi-adebisi.png"
    // },
    // {
    //     name: "Lucky Adebesin",
    //     year: "1999",
    //     city: "Lagos",
    //     school: "School of Technical Education",
    //     department: "Metal Work",
    //     matricNumber: "--/---/------",
    //     status: "Inactive",
    //     image: "images/lucky-adebesin.png"
    // },
    // {
    //     name: "Ahmed Ayinla",
    //     year: "2012",
    //     city: "Lagos",
    //     school: "School of Science Education",
    //     department: "Computer Science / Mathematics",
    //     matricNumber: "--/---/------",
    //     status: "Inactive",
    //     image: "images/members/ahmed-ayinla.jpg"
    // },
    // {
    //     name: "Obilana Ayodele",
    //     year: "2008",
    //     city: "Lagos",
    //     school: "School of Business Education",
    //     department: "Accounting",
    //     matricNumber: "--/---/------",
    //     status: "Inactive",
    //     image: "images/members/male.jpg"
    // },
    // {
    //     name: "Sunday Odunuga",
    //     year: "1999",
    //     city: "Lagos",
    //     school: "School of Technical Education",
    //     department: "Electrical",
    //     matricNumber: "--/---/------",
    //     status: "Inactive",
    //     image: "images/members/male.jpg"
    // },
    {
        name: "Mojeed Mukaila Adeyemi",
        year: "2008",
        city: "Lagos",
        school: "School of Science Education",
        department: "Integrated Science / Biology",
        matricNumber: "05/ISB/19945",
        status: "Inactive",
        image: "images/members/mojeed-mukaila.jpg"
    },
    // {
    //     name: "Babatunde Aminu",
    //     year: "2009",
    //     city: "Lagos",
    //     school: "School of Business Education",
    //     department: "Office Technology & Management",
    //     matricNumber: "--/---/------",
    //     status: "Inactive",
    //     image: "images/members/male.jpg"
    // },
    // {
    //     name: "Ovwigbo Ohwofosa",
    //     year: "2012",
    //     city: "Lagos",
    //     school: "School of Technical Education",
    //     department: "Electrical",
    //     matricNumber: "--/---/------",
    //     status: "Inactive",
    //     image: "images/members/male.jpg"
    // },
    {
        name: "Ogbebor Philomena",
        year: "2004",
        city: "Lagos",
        school: "School of Business Education",
        department: "Office Technology & Management",
        matricNumber: "01/BED/12910",
        status: "Active",
        image: "images/members/female.jpg"
    },
    // {
    //     name: "Damilola Ayobamidele",
    //     year: "2012",
    //     city: "Lagos",
    //     school: "School of Business Education",
    //     department: "Accounting",
    //     matricNumber: "--/---/------",
    //     status: "Inactive",
    //     image: "images/members/male.jpg"
    // },
    // {
    //     name: "Olawale Oluwole",
    //     year: "2010",
    //     city: "Lagos",
    //     school: "School of Business Education",
    //     department: "Accounting",
    //     matricNumber: "--/---/------",
    //     status: "Inactive",
    //     image: "images/members/male.jpg"
    // },
    // {
    //     name: "Idowu Akinsola",
    //     year: "2008",
    //     city: "Lagos",
    //     school: "School of Business Education",
    //     department: "Accounting",
    //     matricNumber: "--/---/------",
    //     status: "Inactive",
    //     image: "images/members/male.jpg"
    // },
    // {
    //     name: "Uzezi Ogoro",
    //     year: "2012",
    //     city: "Lagos",
    //     school: "School of Business Education",
    //     department: "Accounting",
    //     matricNumber: "--/---/------",
    //     status: "Inactive",
    //     image: "images/members/male.jpg"
    // },
    // {
    //     name: "Debo Bankole",
    //     year: "2015",
    //     city: "Lagos",
    //     school: "School of Business Education",
    //     department: "Accounting",
    //     matricNumber: "--/---/------",
    //     status: "Inactive",
    //     image: "images/members/male.jpg"
    // },
    {
        name: "Apata Tolulope",
        year: "2005",
        city: "Ogun",
        school: "School of Business Education",
        department: "Accounting",
        matricNumber: "02/BED/13241",
        status: "Active",
        image: "images/members/female.jpg"
    },
    // {
    //     name: "Odulaja Olumuyiwa",
    //     year: "2014",
    //     city: "Lagos",
    //     school: "School of Business Education",
    //     department: "Accounting",
    //     matricNumber: "--/---/------",
    //     status: "Inactive",
    //     image: "images/members/male.jpg"
    // },
    // {
    //     name: "Ekodun Emmanuel",
    //     year: "2015",
    //     city: "Lagos",
    //     school: "School of Business Education",
    //     department: "Office Technology & Management",
    //     matricNumber: "--/---/------",
    //     status: "Inactive",
    //     image: "images/members/female.jpg"
    // },
    // {
    //     name: "Ishola Olalekan",
    //     year: "2009",
    //     city: "Lagos",
    //     school: "School of Business Education",
    //     department: "Accounting",
    //     matricNumber: "--/---/------",
    //     status: "Inactive",
    //     image: "images/members/male.jpg"
    // },
    // {
    //     name: "Sunkanmi Erogbogbo",
    //     year: "2013",
    //     city: "Lagos",
    //     school: "School of Business Education",
    //     department: "Accounting",
    //     matricNumber: "--/---/------",
    //     status: "Inactive",
    //     image: "images/members/male.jpg"
    // },
    // {
    //     name: "Omolade Ottun",
    //     year: "2015",
    //     city: "Lagos",
    //     school: "School of Business Education",
    //     department: "Accounting",
    //     matricNumber: "--/---/------",
    //     status: "Inactive",
    //     image: "images/members/male.jpg"
    // },
    // {
    //     name: "Suleiman Abdulkadir",
    //     year: "1974",
    //     city: "Lagos",
    //     school: "School of Technical Education",
    //     department: "Woodwork",
    //     matricNumber: "--/---/------",
    //     status: "Active",
    //     image: "images/members/male.jpg"
    // },
    // {
    //     name: "Temitope Lawal",
    //     year: "2017",
    //     city: "Lagos",
    //     school: "School of Science Education",
    //     department: "Integrated Science / Chemistry",
    //     matricNumber: "--/---/------",
    //     status: "Inactive",
    //     image: "images/members/female.jpg"
    // },
    // {
    //     name: "Adeyemi-Adebayo Rukayat",
    //     year: "2014",
    //     city: "Lagos",
    //     school: "School of Science Education",
    //     department: "Integrated Science / Chemistry",
    //     matricNumber: "--/---/------",
    //     status: "Inactive",
    //     image: "images/members/female.jpg"
    // },
    // {
    //     name: "Adebiyi Oluwafemi",
    //     year: "1967",
    //     city: "Lagos",
    //     school: "School of Business Education",
    //     department: "Accounting",
    //     matricNumber: "--/---/-----",
    //     status: "Inactive",
    //     image: "images/members/male.jpg"
    // },
    // {
    //     name: "Abdulquadri Olapeju",
    //     year: "2021",
    //     city: "Ogun",
    //     school: "School of Science Education",
    //     department: "Integrated Science / Biology",
    //     matricNumber: "--/---/-----",
    //     status: "Inactive",
    //     image: "images/members/male.jpg"
    // },
    {
        name: "Ajibola Adeyanju",
        year: "1993",
        city: "Lagos",
        school: "School of Technical Education",
        department: "Building",
        matricNumber: "90/BLD/----",
        status: "Active",
        image: "images/members/female.jpg"
    },
    // {
    //     name: "Akintunde Mebawondu",
    //     year: "2008",
    //     city: "SA",
    //     school: "School of Science Education",
    //     department: "Computer Science / Mathematics",
    //     matricNumber: "--/---/------",
    //     status: "Inactive",
    //     image: "images/members/male.jpg"
    // },
    // {
    //     name: "Yusuf Funmilola",
    //     year: "2010",
    //     city: "Ogun",
    //     school: "School of Business Education",
    //     department: "Accounting",
    //     matricNumber: "--/---/------",
    //     status: "Inactive",
    //     image: "images/members/female.jpg"
    // },
    // {
    //     name: "Babatunde Lawal",
    //     year: "2017",
    //     city: "Lagos",
    //     school: "School of Science Education",
    //     department: "Integrated Science / Chemistry",
    //     matricNumber: "--/---/------",
    //     status: "Inactive",
    //     image: "images/members/male.jpg"
    // },
    {
        name: "Ayeni Morenikeji Abiodun",
        year: "2008",
        city: "Lagos",
        school: "School of Business Education",
        department: "Office Technology / Management",
        matricNumber: "05/BED/------",
        status: "Active",
        image: "images/members/female.jpg"
    },
    // {
    //     name: "Ridwan Saheed",
    //     year: "2013",
    //     city: "Lagos",
    //     school: "School of Business Education",
    //     department: "Accounting",
    //     matricNumber: "--/---/------",
    //     status: "Inactive",
    //     image: "images/members/male.jpg"
    // },
    // {
    //     name: "Saheed Azeez",
    //     year: "2009",
    //     city: "Lagos",
    //     school: "School of Technical Education",
    //     department: "Metal-Work",
    //     matricNumber: "--/---/------",
    //     status: "Inactive",
    //     image: "images/members/male.jpg"
    // },
    // {
    //     name: "Abosede Odekhiran-Ajayi",
    //     year: "2008",
    //     city: "Lagos",
    //     school: "School of Business Education",
    //     department: "Office Technology & Management",
    //     matricNumber: "--/---/------",
    //     status: "Inactive",
    //     image: "images/members/female.jpg"
    // },
    // {
    //     name: "Opawale Samuel",
    //     year: "2015",
    //     city: "Lagos",
    //     school: "School of Business Education",
    //     department: "Office Technology & Management",
    //     matricNumber: "--/---/------",
    //     status: "Inactive",
    //     image: "images/members/male.jpg"
    // },
    // {
    //     name: "Olajide Olakunle",
    //     year: "2015",
    //     city: "Lagos",
    //     school: "School of Business Education",
    //     department: "Accounting",
    //     matricNumber: "--/---/------",
    //     status: "Inactive",
    //     image: "images/members/female.jpg"
    // },
    // {
    //     name: "Ososanya Opeyemi",
    //     year: "2012",
    //     city: "Lagos",
    //     school: "School of Science Education",
    //     department: "Computer Science / Mathematics",
    //     matricNumber: "--/---/------",
    //     status: "Inactive",
    //     image: "images/members/male.jpg"
    // },
    // {
    //     name: "Dorcas Odeleye",
    //     year: "2021",
    //     city: "Lagos",
    //     school: "School of Business Education",
    //     department: "Office Technology & Management",
    //     matricNumber: "--/---/------",
    //     status: "Inactive",
    //     image: "images/members/female.jpg"
    // },
    {
        name: "Adewale Junaid",
        year: "2007",
        city: "Lagos",
        school: "School of Business Education",
        department: "Accounting",
        matricNumber: "04/BED/17628",
        status: "Active",
        image: "images/members/female.jpg"
    },
    // {
    //     name: "Giwa Temitope",
    //     year: "2013",
    //     city: "Lagos",
    //     school: "School of Business Education",
    //     department: "Accounting",
    //     matricNumber: "--/---/------",
    //     status: "Inactive",
    //     image: "images/members/male.jpg"
    // },
    // {
    //     name: "Anita Adedeji",
    //     year: "2015",
    //     city: "Lagos",
    //     school: "School of Science Education",
    //     department: "Integrated Science / Biology",
    //     matricNumber: "--/---/------",
    //     status: "Inactive",
    //     image: "images/members/female.jpg"
    // },
    // {
    //     name: "Dennis Nwenonye",
    //     year: "2009",
    //     city: "Lagos",
    //     school: "School of Technical Education",
    //     department: "Electrical / Electronics",
    //     matricNumber: "--/---/------",
    //     status: "Inactive",
    //     image: "images/members/male.jpg"
    // },
    // {
    //     name: "Philip Bakare",
    //     year: "2013",
    //     city: "Lagos",
    //     school: "School of Business Education",
    //     department: "Accounting",
    //     matricNumber: "--/---/------",
    //     status: "Inactive",
    //     image: "images/members/male.jpg"
    // },
    // {
    //     name: "Ogunjobi Samuel",
    //     year: "2014",
    //     city: "Lagos",
    //     school: "School of Science Education",
    //     department: "Computer Science / Physics",
    //     matricNumber: "--/---/------",
    //     status: "Inactive",
    //     image: "images/members/male.jpg"
    // },
    // {
    //     name: "Ehi-Asher Abiodun",
    //     year: "2005",
    //     city: "Lagos",
    //     school: "School of Vocational Education",
    //     department: "Fine & Applied Arts",
    //     matricNumber: "--/---/------",
    //     status: "Inactive",
    //     image: "images/members/female.jpg"
    // },
    // {
    //     name: "Ibrahim Kabiru",
    //     year: "2013",
    //     city: "Lagos",
    //     school: "School of Business Education",
    //     department: "Accounting",
    //     matricNumber: "--/---/------",
    //     status: "Inactive",
    //     image: "images/members/male.jpg"
    // },
    // {
    //     name: "Sunday Oke",
    //     year: "1986",
    //     city: "Lagos",
    //     school: "School of Technical Education",
    //     department: "Electrical / Electronics",
    //     matricNumber: "--/---/------",
    //     status: "Inactive",
    //     image: "images/members/male.jpg"
    // },
    // {
    //     name: "Matthew Adeosun",
    //     year: "2014",
    //     city: "Lagos",
    //     school: "School of Science Education",
    //     department: "Integrated Science / Mathematics",
    //     matricNumber: "--/---/------",
    //     status: "Inactive",
    //     image: "images/members/male.jpg"
    // },
    {
        name: "Awofeso Rasheed",
        year: "1993",
        city: "UK",
        school: "School of Business Education",
        department: "Accounting",
        matricNumber: "90/BAE/6898",
        status: "Active",
        image: "images/members/male.jpg"
    },
    // {
    //     name: "Oladipupo Oni-Orisan",
    //     year: "2010",
    //     city: "Lagos",
    //     school: "School of Business Education",
    //     department: "Accounting",
    //     matricNumber: "--/---/------",
    //     status: "Inactive",
    //     image: "images/members/oni-orisan.jpg"
    // },
    {
        name: "Adio Ibrahim Mayowa",
        year: "2010",
        city: "Lagos",
        school: "School of Technical Education",
        department: "Electrical / Electronics ",
        matricNumber: "07/TED/22526",
        status: "Inactive",
        image: "images/members/male.jpg"
    },
    {
        name: "Olayemi Adebukola M",
        year: "2013",
        city: "Lagos",
        school: "School of Business Education",
        department: "Office Technology & Management",
        matricNumber: "18/DLP/OD/BED/3608",
        status: "Inactive",
        image: "images/members/female.jpg"
    },
    {
        name: "Rotowa Oluwaseun",
        year: "2007",
        city: "Ogun",
        school: "School of Vocational Education",
        department: "Agricultural Science",
        matricNumber: "04/AGE/17654",
        status: "Inactive",
        image: "images/members/male.jpg"
    },
    {
        name: "Adegboyega Olusegun A",
        year: "1995",       
        city: "Lagos",
        school: "School of Business Education",
        department: "Office Technology & Management",
        matricNumber: "95/BED/7771",
        status: "Inactive",
        image: "images/members/male.jpg"
    },
    {
        name: "Ogunyemi Emmanuel S",
        year: "1993",
        city: "Lagos",
        school: "School of Business Education",
        department: "Agricultural Science",
        matricNumber: "90/BAE/5898",
        status: "Inactive",
        image: "images/members/male.jpg"
    },
    {
        name: "Osime Nicholas O",
        year: "2004",
        city: "Lagos",
        school: "School of Business Education",
        department: "Office Technology & Management",
        matricNumber: "05/BED/19296",
        status: "Inactive",
        image: "images/members/male.jpg"
    },
    {
        name: "Surakat Abdulrazaaq",
        year: "2007",
        city: "Lagos",
        school: "School of Business Education",
        department: "Accountant",
        matricNumber: "04/BED/17323",
        status: "Inactive",
        image: "images/members/male.jpg"
    },
    {
        name: "Samuel Olawale",
        year: "2003",
        city: "Lagos",
        school: "School of Vocational Education",
        department: "Agricultural Science",
        matricNumber: "99/AGE/9935",
        status: "Inactive",
        image: "images/members/male.jpg"
    },
    {
        name: "Oseni Taiwo",
        year: "2006",
        city: "Ogun",
        school: "School of Science Education",
        department: "Integrated Science / Biology",
        matricNumber: "03/ISC/15804",
        status: "Inactive",
        image: "images/members/female.jpg"
    },
    {
        name: "Olaoye Olubunmi",
        year: "2006",
        city: "Lagos",
        school: "School of Business Education",
        department: "Accounting",
        matricNumber: "03/BED/15968",
        status: "Inactive",
        image: "images/members/female.jpg"
    },
    {
        name: "Basheer-Deen Abidemi",
        year: "1993",
        city: "Ogun",
        school: "School of Business Education",
        department: "Accounting",
        matricNumber: "90/BAE/5906",
        status: "Inactive",
        image: "images/members/female.jpg"
    },
    {
        name: "Alabi Oluremi O",
        year: "1993",
        city: "Lagos",
        school: "School of Business Education",
        department: "Accounting",
        matricNumber: "90/BAE/----",
        status: "Inactive",
        image: "images/members/female.jpg"
    },
    {
        name: "Ogunyemi Saburi O",
        year: "1993",
        city: "Lagos",
        school: "School of Business Education",
        department: "Accounting",
        matricNumber: "90/BAE/5948",
        status: "Inactive",
        image: "images/members/male.jpg"
    },
    {
        name: "Kolapo Jelili O",
        year: "1993",
        city: "Lagos",
        school: "School of Technical Education",
        department: "Building",
        matricNumber: "89/TPB/5753",
        status: "Inactive",
        image: "images/members/male.jpg"
    },
    {
        name: "Jinadu Dare",
        year: "2005",
        city: "Lagos",
        school: "School of Business Education",
        department: "Accounting",
        matricNumber: "02/BED/14660",
        status: "Inactive",
        image: "images/members/male.jpg"
    },
    {
        name: "Ninola Abiola",
        year: "2006",
        city: "Lagos",
        school: "School of Business Education",
        department: "Office Technology & Management",
        matricNumber: "03/BED/14685",
        status: "Inactive",
        image: "images/members/male.jpg"
    },
    {
        name: "Olusona Raphael A",
        year: "1993",
        city: "Abuja",
        school: "School of Business Education",
        department: "Accounting",
        matricNumber: "90/BAE/59454",
        status: "Inactive",
        image: "images/members/male.jpg"
    },
    {
        name: "Ogunsanya Emmanuel",
        year: "2005",
        city: "Lagos",
        school: "School of Business Education",
        department: "Accounting",
        matricNumber: "02/BED/14137",
        status: "Inactive",
        image: "images/members/male.jpg"
    },
    {
        name: "Nwankpa Chinyere",
        year: "2005",
        city: "Lagos",
        school: "School of Business Education",
        department: "Accounting",
        matricNumber: "02/BED/14690",
        status: "Inactive",
        image: "images/members/female.jpg"
    },  
    {
        name: "Coker Abimbola",
        year: "2005",
        city: "Lagos",
        school: "School of Business Education",
        department: "Accounting",
        matricNumber: "02/BED/14042",
        status: "Inactive",
        image: "images/members/female.jpg"
    },
    {
        name: "Bolajoko Musa",
        year: "2005",
        city: "Lagos",
        school: "School of Business Education",
        department: "Accounting",
        matricNumber: "02/BED/14037",
        status: "Inactive",
        image: "images/members/male.jpg"
    },
    {
        name: "Enyia Theresa",
        year: "2005",
        city: "Lagos",
        school: "School of Business Education",
        department: "Accounting",
        matricNumber: "02/BED/14062",
        status: "Inactive",
        image: "images/members/female.jpg"
    },
    {
        name: "Wchuwa Lawrence",
        year: "2005",
        city: "Lagos",
        school: "School of Business Education",
        department: "Accounting",
        matricNumber: "02/BED/14049",
        status: "Active",
        image: "images/members/male.jpg"
    },
    {
        name: "Esan Ukamaka",
        year: "2005",
        city: "Lagos",
        school: "School of Business Education",
        department: "Office Technology & Management ",
        matricNumber: "02/BED/14066",
        status: "Active",
        image: "images/members/female.jpg"
    },
    {
        name: "Ogunbowale Olukayode",
        year: "2005",
        city: "Lagos",
        school: "School of Business Education",
        department: "Accounting",
        matricNumber: "02/BED/14129",
        status: "Active",
        image: "images/members/male.jpg"
    },
    {
        name: "Babatunde Olufunke",
        year: "2005",
        city: "Lagos",
        school: "School of Business Education",
        department: "Accounting",
        matricNumber: "02/BED/14017",
        status: "Active",
        image: "images/members/female.jpg"
    },
    {
        name: "Kareem Oluwakemi",
        year: "2007",
        city: "Lagos",
        school: "School of Vocational Education",
        department: "Home Economics",
        matricNumber: "04/HEC/17623",
        status: "Active",
        image: "images/members/female.jpg"
    },
    {
        name: "Salisu Rukayat",
        year: "2007",
        city: "Lagos",
        school: "School of Science Education",
        department: "Integrated Science / Mathematics",
        matricNumber: "04/ISC/17662",
        status: "Active",
        image: "images/members/female.jpg"
    },
    {
        name: "Salami Aminat",
        year: "2010",
        city: "Lagos",
        school: "School of Business Education",
        department: "Accounting",
        matricNumber: "07/BED/18523",
        status: "Active",
        image: "images/members/female.jpg"
    },
    {
        name: "Tijani Titilope",
        year: "2003",
        city: "Ogun",
        school: "School of Business Education",
        department: "Accounting",
        matricNumber: "00/BED/1023",
        status: "Active",
        image: "images/members/female.jpg"
    },
    {
        name: "Olaoye Olubunmi",
        year: "2006",
        city: "Lagos",
        school: "School of Business Education",
        department: "Accounting",
        matricNumber: "03/BED/12431",
        status: "Active",
        image: "images/members/female.jpg"
    },
    {
        name: "Nwokemopo Chioma",
        year: "2005",
        city: "Ogun",
        school: "School of Business Education",
        department: "Accounting",
        matricNumber: "02/BED/14692",
        status: "Inactive",
        image: "images/members/female.jpg"
    },
    {
        name: "Odaro Uyi",
        year: "2005",
        city: "Lagos",
        school: "School of Business Education",
        department: "Accounting",
        matricNumber: "02/BED/14696",
        status: "Inactive",
        image: "images/members/female.jpg"
    },
    {
        name: "Nwaizu Eunice",
        year: "2005",
        city: "Lagos",
        school: "School of Business Education",
        department: "Office Technology & Management",
        matricNumber: "02/BED/14688",
        status: "Inactive",
        image: "images/members/female.jpg"
    },
    {
        name: "Adeleye Ige",
        year: "2005",
        city: "Lagos",
        school: "School of Business Education",
        department: "Accounting",
        matricNumber: "02/BED/14699",
        status: "Inactive",
        image: "images/members/female.jpg"
    },
    {
        name: "Obi Florence",
        year: "2005",
        city: "Lagos",
        school: "School of Business Education",
        department: "Accounting",
        matricNumber: "02/BED/14120",
        status: "Inactive",
        image: "images/members/female.jpg"
    },
    {
        name: "Ishola Zainab",
        year: "2005",
        city: "Lagos",
        school: "School of Business Education",
        department: "Accounting",
        matricNumber: "02/BED/14154",
        status: "Inactive",
        image: "images/members/female.jpg"
    },
    {
        name: "Ikatule Omebu",
        year: "2005",
        city: "Rivers",
        school: "School of Business Education",
        department: "Office Technology & Management",
        matricNumber: "02/BED/14103",
        status: "Inactive",
        image: "images/members/male.jpg"
    },
    {
        name: "Osang Gloria",
        year: "2005",
        city: "Lagos",
        school: "School of Business Education",
        department: "Office Technology & Management",
        matricNumber: "02/BED/14781",
        status: "Inactive",
        image: "images/members/female.jpg"
    },
    {
        name: "Ikeh Eucharia",
        year: "2005",
        city: "Lagos",
        school: "School of Business Education",
        department: "Accounting",
        matricNumber: "02/BED/14105",
        status: "Inactive",
        image: "images/members/male.jpg"
    },
    {
        name: "Omeh Love",
        year: "2005",
        city: "Lagos",
        school: "School of Business Education",
        department: "Accounting",
        matricNumber: "02/BED/14158",
        status: "Inactive",
        image: "images/members/female.jpg"
    },
    {
        name: "Olalere Ibrahim",
        year: "2005",
        city: "Ogun",
        school: "School of Business Education",
        department: "Office Technology & Management",
        matricNumber: "02/BED/14134",
        status: "Inactive",
        image: "images/members/male.jpg"
    },
    {
        name: "Odunuga Adedola",
        year: "2005",
        city: "Oyo",
        school: "School of Business Education",
        department: "Accounting",
        matricNumber: "02/BED/14125",
        status: "Inactive",
        image: "images/members/male.jpg"
    },
    {
        name: "Oyegunsen Oluwakemi",
        year: "2005",
        city: "Oyo",
        school: "School of Business Education",
        department: "Office Technology & Management",
        matricNumber: "02/BED/14844",
        status: "Inactive",
        image: "images/members/male.jpg"
    },
    {
        name: "Soewu Abimbola",
        year: "2005",
        city: "Osun",
        school: "School of Business Education",
        department: "Office Technology & Management",
        matricNumber: "02/BED/14816",
        status: "Inactive",
        image: "images/members/male.jpg"
    },
    {
        name: "Taiwo Opeyemi",
        year: "2005",
        city: "Osun",
        school: "School of Business Education",
        department: "Accounting",
        matricNumber: "02/BED/14820",
        status: "Inactive",
        image: "images/members/male.jpg"
    },
    {
        name: "Udoh Etimbuk",
        year: "2005",
        city: "Lagos",
        school: "School of Business Education",
        department: "Office Technology & Management",
        matricNumber: "02/BED/14827",
        status: "Inactive",
        image: "images/members/male.jpg"
    },
    {
        name: "Lasisi Aramide",
        year: "2005",
        city: "Lagos",
        school: "School of Business Education",
        department: "Accounting",
        matricNumber: "02/BED/14887",
        status: "Inactive",
        image: "images/members/female.jpg"
    },
    {
        name: "Odekunle Wasilat",
        year: "2007",
        city: "Oyo",
        school: "School of Business Education",
        department: "Accounting",
        matricNumber: "04/BED/15698",
        status: "Inactive",
        image: "images/members/female.jpg"
    },
    {
        name: "Kadiri Moriamo",
        year: "2006",
        city: "Lagos",
        school: "School of Business Education",
        department: "Accounting",
        matricNumber: "03/BED/15636",
        status: "Inactive",
        image: "images/members/female.jpg"
    },
    {
        name: "Christopher Damilola",
        year: "2006",
        city: "Lagos",
        school: "School of Business Education",
        department: "Accounting",
        matricNumber: "03/BED/15567",
        status: "Inactive",
        image: "images/members/female.jpg"
    },
    {
        name: "Fabajo Oyinade",
        year: "2006",
        city: "Ekiti",
        school: "School of Business Education",
        department: "Office Technology & Management",
        matricNumber: "03/BED/15---",
        status: "Inactive",
        image: "images/members/female.jpg"
    },
    {
        name: "Durodola Monsurat",
        year: "2006",
        city: "Lagos",
        school: "School of Business Education",
        department: "Accounting",
        matricNumber: "03/BED/15574",
        status: "Inactive",
        image: "images/members/female.jpg"
    },
    {
        name: "Alakpa Gloria",
        year: "2006",
        city: "Lagos",
        school: "School of Business Education",
        department: "Accounting",
        matricNumber: "03/BED/15510",
        status: "Inactive",
        image: "images/members/female.jpg"
    },
    {
        name: "Barahai Joy",
        year: "2006",
        city: "Edo",
        school: "School of Business Education",
        department: "Accounting",
        matricNumber: "03/BED/15560",
        status: "Inactive",
        image: "images/members/female.jpg"
    },
    {
        name: "Ariyo Eniola",
        year: "2006",
        city: "Ogun",
        school: "School of Business Education",
        department: "Accounting",
        matricNumber: "03/BED/15529",
        status: "Inactive",
        image: "images/members/female.jpg"
    },
    {
        name: "Obidiagba Chinyere",
        year: "2006",
        city: "Ondo",
        school: "School of Business Education",
        department: "Office Technology & Management",
        matricNumber: "03/BED/15696",
        status: "Inactive",
        image: "images/members/female.jpg"
    },
    {
        name: "Akinbitan Rasheed O",
        year: "2006",
        city: "Lagos",
        school: "School of Business Education",
        department: "Accounting",
        matricNumber: "00/BED/-----",
        status: "Active",
        image: "images/members/male.jpg"
    },
    {
        name: "Ozopelide Maume Lynda",
        year: "1993",
        city: "Canada",
        school: "School of Business Education",
        department: "Accounting",
        matricNumber: "90/BAE/5966",
        status: "Active",
        image: "images/members/female.jpg"
    },
    {
        name: "Egbeyemi Oluwakorede",
        year: "1993",
        city: "Ogun",
        school: "School of Business Education",
        department: "Office Technology & Management",
        matricNumber: "90/BSE/6048",
        status: "Inactive",
        image: "images/members/male.jpg"
    },
    {
        name: "Ejalonibu Rasheed",
        year: "1993",
        city: "Lagos",
        school: "School of Business Education",
        department: "Office Technology & Management",
        matricNumber: "90/BSE/6050",
        status: "Inactive",
        image: "images/members/male.jpg"
    },
    {
        name: "Adeyemi Raphael A",
        year: "1993",
        city: "Lagos",
        school: "School of Business Education",
        department: "Accounting",
        matricNumber: "90/BAE/5875",
        status: "Inactive",
        image: "images/members/male.jpg"
    },
    {
        name: "Nnkeneme Chioma",
        year: "2006",
        city: "Lagos",
        school: "School of Business Education",
        department: "Accounting",
        matricNumber: "03/BED/15254",
        status: "Inactive",
        image: "images/members/female.jpg"
    },
    {
        name: "Adeshina Halimah",
        year: "2006",
        city: "Ogun",
        school: "School of Business Education",
        department: "Accounting",
        matricNumber: "03/BED/15216",
        status: "Inactive",
        image: "images/members/female.jpg"
    },
    {
        name: "Amatosend Harry",
        year: "2006",
        city: "Lagos",
        school: "School of Business Education",
        department: "Office Technology & Management",
        matricNumber: "03/BED/15227",
        status: "Inactive",
        image: "images/members/male.jpg"
    },
    {
        name: "Faniyi Adebanke",
        year: "2006",
        city: "Ogun",
        school: "School of Business Education",
        department: "Office Technology & Management",
        matricNumber: "03/BED/15240",
        status: "Inactive",
        image: "images/members/female.jpg"
    },
    {
        name: "Okeowo Oyebola",
        year: "2006",
        city: "Ekiti",
        school: "School of Business Education",
        department: "Accounting",
        matricNumber: "03/BED/15286",
        status: "Inactive",
        image: "images/members/female.jpg"
    },
    {
        name: "Oguntubi Ruth",
        year: "2006",
        city: "Lagos",
        school: "School of Business Education",
        department: "Accounting",
        matricNumber: "03/BED/15277",
        status: "Inactive",
        image: "images/members/female.jpg"
    },
    {
        name: "Ukie Joseph",
        year: "2006",
        city: "Akwa",
        school: "School of Business Education",
        department: "Accounting",
        matricNumber: "03/BED/15256",
        status: "Inactive",
        image: "images/members/male.jpg"
    },
    {
        name: "Aladesusi Rhoda",
        year: "2006",
        city: "Oyo",
        school: "School of Business Education",
        department: "Office Technology & Management",
        matricNumber: "03/BED/15225",
        status: "Inactive",
        image: "images/members/female.jpg"
    },
    {
        name: "Ekwo Valentine",
        year: "2006",
        city: "Anambra",
        school: "School of Business Education",
        department: "Accounting",
        matricNumber: "03/BED/15236",
        status: "Inactive",
        image: "images/members/male.jpg"
    },
    {
        name: "Ikhuoria Godfrey",
        year: "2006",
        city: "Lagos",
        school: "School of Business Education",
        department: "Accounting",
        matricNumber: "03/BED/15245",
        status: "Inactive",
        image: "images/members/male.jpg"
    },
    {
        name: "Makanjuola Taofik",
        year: "2006",
        city: "Ogun",
        school: "School of Business Education",
        department: "Accounting",
        matricNumber: "03/BED/15251",
        status: "Inactive",
        image: "images/members/male.jpg"
    },
    {
        name: "Ogunsanya Monsurat",
        year: "2006",
        city: "Osun",
        school: "School of Business Education",
        department: "Office Technology & Management",
        matricNumber: "03/BED/-----",
        status: "Inactive",
        image: "images/members/female.jpg"
    },
    {
        name: "Obaronbi Mary",
        year: "2006",
        city: "Ogun",
        school: "School of Business Education",
        department: "Office Technology & Management",
        matricNumber: "03/BED/15257",
        status: "Inactive",
        image: "images/members/female.jpg"
    },
    {
        name: "Okoli Chikodi",
        year: "2006",
        city: "Delta",
        school: "School of Business Education",
        department: "Accounting",
        matricNumber: "03/BED/15290",
        status: "Inactive",
        image: "images/members/female.jpg"
    },
    {
        name: "Ogunleye Oluwabunmi",
        year: "2006",
        city: "Oyo",
        school: "School of Business Education",
        department: "Office Technology & Management",
        matricNumber: "03/BED/15264",
        status: "Inactive",
        image: "images/members/female.jpg"
    },
    {
        name: "Ofunana Betty",
        year: "2006",
        city: "Imo",
        school: "School of Business Education",
        department: "Accounting",
        matricNumber: "03/BED/15258",
        status: "Inactive",
        image: "images/members/female.jpg"
    },
    {
        name: "Ogungbamila Olabimpe",
        year: "2006",
        city: "Lagos",
        school: "School of Business Education",
        department: "Office Technology & Management",
        matricNumber: "03/BED/15262",
        status: "Inactive",
        image: "images/members/female.jpg"
    },
    {
        name: "Hammed Kafayat",
        year: "2006",
        city: "Lagos",
        school: "School of Business Education",
        department: "Office Technology & Management",
        matricNumber: "03/BED/15241",
        status: "Inactive",
        image: "images/members/female.jpg"
    },
    {
        name: "George Babatunde",
        year: "2006",
        city: "Ogun",
        school: "School of Business Education",
        department: "Office Technology & Management",
        matricNumber: "03/BED/15606",
        status: "Inactive",
        image: "images/members/male.jpg"
    },
    {
        name: "Mustapha Tawakalitu",
        year: "2006",
        city: "Lagos",
        school: "School of Business Education",
        department: "Office Technology & Management",
        matricNumber: "03/BED/15671",
        status: "Inactive",
        image: "images/members/female.jpg"
    },
    {
        name: "Jikeme Victory",
        year: "2006",
        city: "Ebonyi",
        school: "School of Business Education",
        department: "Accounting",
        matricNumber: "03/BED/15628",
        status: "Inactive",
        image: "images/members/female.jpg"
    },
    {
        name: "Ibrahim Bamidele",
        year: "2006",
        city: "Oyo",
        school: "School of Business Education",
        department: "Accounting",
        matricNumber: "03/BED/15613",
        status: "Inactive",
        image: "images/members/male.jpg"
    },
    {
        name: "Ogunniran Abidemi",
        year: "2006",
        city: "Ogun",
        school: "School of Business Education",
        department: "Office Technology & Management",
        matricNumber: "03/BED/15269",
        status: "Inactive",
        image: "images/members/female.jpg"
    },
    {
        name: "Balogun Relaunyi",
        year: "2006",
        city: "Ogun",
        school: "School of Business Education",
        department: "Office Technology & Management",
        matricNumber: "03/BED/15233",
        status: "Inactive",
        image: "images/members/male.jpg"
    },
    {
        name: "Ogunyale Adewunmi",
        year: "2006",
        city: "Ondo",
        school: "School of Business Education",
        department: "Office Technology & Management",
        matricNumber: "03/BED/15266",
        status: "Inactive",
        image: "images/members/female.jpg"
    },
    {
        name: "Okonkwo Stella",
        year: "2006",
        city: "Oyo",
        school: "School of Business Education",
        department: "Accounting",
        matricNumber: "03/BED/15220",
        status: "Inactive",
        image: "images/members/female.jpg"
    },
    {
        name: "Akharueme Omokhele",
        year: "2006",
        city: "Ogun",
        school: "School of Business Education",
        department: "Office Technology & Management",
        matricNumber: "03/BED/-----",
        status: "Inactive",
        image: "images/members/male.jpg"
    },
    {
        name: "Okonkwo Jacinta",
        year: "2006",
        city: "Ekiti",
        school: "School of Business Education",
        department: "Office Technology & Management",
        matricNumber: "03/BED/15293",
        status: "Inactive",
        image: "images/members/female.jpg"
    },
    {
        name: "Saheed Ridwan",
        year: "2013",
        city: "Lagos",
        school: "School of Business Education",
        department: "Accounting",
        matricNumber: "10/BED/25964",
        status: "Inactive",
        image: "images/members/male.jpg"
    },
    {
        name: "Bamigboye Tunde",
        year: "2004",
        city: "Lagos",
        school: "School of Technical Education",
        department: "Electrical / Electronics",
        matricNumber: "01/TED/12774",
        status: "Inactive",
        image: "images/members/male.jpg"
    },
    {
        name: "Odukunle Taiwo David",
        year: "2015",
        city: "Lagos",
        school: "School of Business Education",
        department: "Accounting",
        matricNumber: "13/PDBED/30288",
        status: "Inactive",
        image: "images/members/male.jpg"
    },
    {
        name: "Aremu Abraham",
        year: "2004",
        city: "Ogun",
        school: "School of Vocational Education",
        department: "Agricultural Science",
        matricNumber: "01/AGE/12570",
        status: "Inactive",
        image: "images/members/male.jpg"
    },
    {
        name: "Alake Florence",
        year: "1995",
        city: "Ogun",
        school: "School of Business Education",
        department: "Office Technology & Management",
        matricNumber: "91/BSE/6450",
        status: "Inactive",
        image: "images/members/female.jpg"
    },
    {
        name: "Abdulaziz Yahya Oyetunde",
        year: "1993",
        city: "Ogun",
        school: "School of Business Education",
        department: "Accounting",
        matricNumber: "90/BAE/5928",
        status: "Inactive",
        image: "images/members/female.jpg"
    },
    {
        name: "Adebayo Oladele",
        year: "2006",
        city: "Lagos",
        school: "School of Business Education",
        department: "Office Technology & Management",
        matricNumber: "03/BED/15211",
        status: "Inactive",
        image: "images/members/male.jpg"
    },
    {
        name: "Akinbule Roseline Taiwo",
        year: "1993",
        city: "Lagos",
        school: "School of Business Education",
        department: "Accounting",
        matricNumber: "90/BAE/5884",
        status: "Inactive",
        image: "images/members/female.jpg"
    },
    {
        name: "Balogun Adebambo",
        year: "1993",
        city: "Lagos",
        school: "School of Technical Education",
        department: "Electrical / Electronics",
        matricNumber: "90/TED/----",
        status: "Inactive",
        image: "images/members/male.jpg"
    },
    {
        name: "Olojede Modupe",
        year: "1993",
        city: "Lagos",
        school: "School of Technical Education",
        department: "Electrical / Electronics",
        matricNumber: "90/TEE/6024",
        status: "Inactive",
        image: "images/members/female.jpg"
    },  
    {
        name: "Gbadamosi Gbolahan A",
        year: "2007",
        city: "Lagos",
        school: "School of Vocational Education",
        department: "Fine & Applied Arts",
        matricNumber: "04/FAA/17621",
        status: "Inactive",
        image: "images/members/male.jpg"
    }, 
    {
        name: "Lawal Babatunde",
        year: "2014",
        city: "Lagos",
        school: "School of Science Education",
        department: "Computer Science / Mathematics",
        matricNumber: "11/CME/27981",
        status: "Inactive",
        image: "images/members/male.jpg"
    }, 
    {
        name: "Usman Mariam Olabisi",
        year: "2016",
        city: "Lagos",
        school: "School of Education",
        department: "Primary Education",
        matricNumber: "13/PES/29757",
        status: "Inactive",
        image: "images/members/female.jpg"
    }, 
    {
        name: "Erhun-Osunbor Galvin",
        year: "2014",
        city: "Lagos",
        school: "School of Business Education",
        department: "Business Education",
        matricNumber: "11/BED/27094",
        status: "Inactive",
        image: "images/members/male.jpg"
    },
    {
        name: "Oyaleye Gbolahan Olayemi",
        year: "2001",
        city: "Lagos",
        school: "School of Education",
        department: "Accounting",
        matricNumber: "01/BED/12194",
        status: "Inactive",
        image: "images/members/male.jpg"
    }, 
    {
        name: "Akinpelu Akinade T",
        year: "1993",
        city: "Osun",
        school: "School of Education",
        department: "Accounting",
        matricNumber: "90/BAE/5887",
        status: "Inactive",
        image: "images/members/male.jpg"
    }, 
    {
        name: "David, Kingsley Ogugua",
        year: "1993",
        city: "Lagos",
        school: "School of Technical Education",
        department: "Electrical / Electronics",
        matricNumber: "90/TEE/6005",
        status: "Inactive",
        image: "images/members/male.jpg"
    },
    {
        name: "Oluyole Rotimi Williams",
        year: "1993",
        city: "Ogun",
        school: "School of Technical Education",
        department: "Electrical / Electronics",
        matricNumber: "90/TEE/6024",
        status: "Inactive",
        image: "images/members/male.jpg"
    },
    {
        name: "Fakuyi Funmi",
        year: "1993",
        city: "Ondo",
        school: "School of Technical Education",
        department: "Woodwork",
        matricNumber: "90/TEE/6145",
        status: "Inactive",
        image: "images/members/male.jpg"
    },
    {
        name: "Alli-Balogun Tolani",
        year: "1993",
        city: "Lagos",
        school: "School of Business Education",
        department: "Accounting",
        matricNumber: "90/BAE/5903",
        status: "Active",
        image: "images/members/male.jpg"
    },
    {
        name: "Ebiesuwa Tinuola Abiodun",
        year: "1993",
        city: "Lagos",
        school: "School of Business Education",
        department: "Office Technology & Management",
        matricNumber: "90/BSE/6045",
        status: "Inactive",
        image: "images/members/female.jpg"
    },
    {
        name: "Ajibola Patrick Sunday",
        year: "1991",
        city: "Lagos",
        school: "School of Technical Education",
        department: "Building",
        matricNumber: "88/TBD/5093",
        status: "Inactive",
        image: "images/members/male.jpg"
    },
    {
        name: "Fakorede Saheed Olajide",
        year: "1992",
        city: "Lagos",
        school: "School of Technical Education",
        department: "Mechanical",
        matricNumber: "89/TME/5533",
        status: "Inactive",
        image: "images/members/male.jpg"
    },
    {
        name: "Osi-Efa Nurudeen",
        year: "1994",
        city: "Lagos",
        school: "School of Business Education",
        department: "Accounting",
        matricNumber: "90/BAE/----",
        status: "Inactive",
        image: "images/members/male.jpg"
    },
    {
        name: "Enilolobo Abiodun",
        year: "1993",
        city: "Lagos",
        school: "School of Business Education",
        department: "Accounting",
        matricNumber: "90/BAE/5915",
        status: "Inactive",
        image: "images/members/male.jpg"
    },
    {
        name: "Emupenne Akindele",
        year: "2005",
        city: "Lagos",
        school: "School of Business Education",
        department: "Accounting",
        matricNumber: "05/BED/-----",
        status: "Inactive",
        image: "images/members/male.jpg"
    },
    {
        name: "Ayuba Adewale",
        year: "2004",
        city: "Lagos",
        school: "School of Vocational Education",
        department: "Fine & Applied Arts",
        matricNumber: "01/FAA/12726",
        status: "Inactive",
        image: "images/members/male.jpg"
    },
    {
        name: "Akinola Modinat Abiola",
        year: "2007",
        city: "Lagos",
        school: "School of Vocational Education",
        department: "Home Economics",
        matricNumber: "04/HEC/0984",
        status: "Inactive",
        image: "images/members/female.jpg"
    },
    {
        name: "Akinwunmi Akinbayo",
        year: "1993",
        city: "Lagos",
        school: "School of Business Education",
        department: "Accounting",
        matricNumber: "90/BAE/5891",
        status: "Inactive",
        image: "images/members/male.jpg"
    },


];

// Pagination settings - Changed from 100 to 50 items per page
let currentPage = 1;
const itemsPerPage = 50;
let filteredData = [...alumniData];

// DOM elements
let alumniListContainer;
let paginationContainer;
let pageInfoElement;
let showingInfoElement;

// Initialize the directory when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeDirectory();
    setupEventListeners();
    displayAlumni();
    updatePagination();
});

function initializeDirectory() {
    alumniListContainer = document.getElementById('alumni-list');
    paginationContainer = document.getElementById('pagination');
    pageInfoElement = document.getElementById('page-info');
    showingInfoElement = document.getElementById('showing-info');
}

function setupEventListeners() {
    // Filter event listeners
    document.getElementById('filter-name').addEventListener('input', debounce(applyFilters, 300));
    document.getElementById('filter-year').addEventListener('change', applyFilters);
    document.getElementById('filter-city').addEventListener('change', applyFilters);
    document.getElementById('filter-school').addEventListener('change', applyFilters);
    document.getElementById('filter-department').addEventListener('change', applyFilters);
    document.getElementById('filter-matric').addEventListener('input', debounce(applyFilters, 300));
    document.getElementById('filter-status').addEventListener('change', applyFilters);
    document.getElementById('clear-filters').addEventListener('click', clearAllFilters);
}

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function applyFilters() {
    const nameFilter = document.getElementById('filter-name').value.toLowerCase();
    const yearFilter = document.getElementById('filter-year').value;
    const cityFilter = document.getElementById('filter-city').value;
    const schoolFilter = document.getElementById('filter-school').value;
    const departmentFilter = document.getElementById('filter-department').value;
    const matricFilter = document.getElementById('filter-matric').value.toLowerCase();
    const statusFilter = document.getElementById('filter-status').value;

    filteredData = alumniData.filter(alumni => {
        return (!nameFilter || alumni.name.toLowerCase().includes(nameFilter)) &&
               (!yearFilter || alumni.year === yearFilter) &&
               (!cityFilter || alumni.city === cityFilter) &&
               (!schoolFilter || alumni.school === schoolFilter) &&
               (!departmentFilter || alumni.department.includes(departmentFilter)) &&
               (!matricFilter || alumni.matricNumber.toLowerCase().includes(matricFilter)) &&
               (!statusFilter || alumni.status === statusFilter);
    });

    currentPage = 1; // Reset to first page when filtering
    displayAlumni();
    updatePagination();
}

function clearAllFilters() {
    document.getElementById('filter-name').value = '';
    document.getElementById('filter-year').value = '';
    document.getElementById('filter-city').value = '';
    document.getElementById('filter-school').value = '';
    document.getElementById('filter-department').value = '';
    document.getElementById('filter-matric').value = '';
    document.getElementById('filter-status').value = '';
    
    filteredData = [...alumniData];
    currentPage = 1;
    displayAlumni();
    updatePagination();
}

function displayAlumni() {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentPageData = filteredData.slice(startIndex, endIndex);

    if (currentPageData.length === 0) {
        alumniListContainer.innerHTML = `
            <div class="no-results">
                <i class="fa fa-search"></i>
                <p>No alumni found matching your criteria.</p>
                <p>Try adjusting your filters or <button onclick="clearAllFilters()" style="background: none; border: none; color: #05AFEC; cursor: pointer; text-decoration: underline;">clear all filters</button>.</p>
            </div>
        `;
        return;
    }

    let html = '';
    currentPageData.forEach(alumni => {
        const statusClass = alumni.status === 'Active' ? 'status-active' : 'status-inactive';
        
        html += `
            <li class="box-content">
                <span class="user">
                    <img src="${alumni.image}" alt="${alumni.name}" onerror="this.src='images/members/male.jpg'">
                    <span class="label-name">${alumni.name}</span>
                </span>
                <span class="year">${alumni.year}</span>
                <span class="city">${alumni.city}</span>
                <span class="school">${alumni.school}</span>
                <span class="department">${alumni.department}</span>
                <span class="matric">${alumni.matricNumber}</span>
                <span class="status ${statusClass}">${alumni.status}</span>
            </li>
        `;
    });

    alumniListContainer.innerHTML = html;
    updateShowingInfo();
}

function updatePagination() {
    const totalPages = Math.ceil(filteredData.length / itemsPerPage);
    const maxVisiblePages = 5;
    
    let html = '';
    
    // Previous button
    if (currentPage > 1) {
        html += `<li><a href="#" onclick="goToPage(${currentPage - 1}); return false;">Previous</a></li>`;
    } else {
        html += `<li class="disabled"><span>Previous</span></li>`;
    }

    // Calculate page range
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);
    
    if (endPage - startPage + 1 < maxVisiblePages) {
        startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    // First page and ellipsis
    if (startPage > 1) {
        html += `<li><a href="#" onclick="goToPage(1); return false;">1</a></li>`;
        if (startPage > 2) {
            html += `<li class="disabled"><span>...</span></li>`;
        }
    }

    // Page numbers
    for (let i = startPage; i <= endPage; i++) {
        if (i === currentPage) {
            html += `<li class="active"><span>${i}</span></li>`;
        } else {
            html += `<li><a href="#" onclick="goToPage(${i}); return false;">${i}</a></li>`;
        }
    }

    // Last page and ellipsis
    if (endPage < totalPages) {
        if (endPage < totalPages - 1) {
            html += `<li class="disabled"><span>...</span></li>`;
        }
        html += `<li><a href="#" onclick="goToPage(${totalPages}); return false;">${totalPages}</a></li>`;
    }

    // Next button
    if (currentPage < totalPages) {
        html += `<li><a href="#" onclick="goToPage(${currentPage + 1}); return false;">Next</a></li>`;
    } else {
        html += `<li class="disabled"><span>Next</span></li>`;
    }

    paginationContainer.innerHTML = html;
    
    // Update page info
    if (pageInfoElement) {
        pageInfoElement.textContent = `Page ${currentPage} of ${totalPages}`;
    }
}

function updateShowingInfo() {
    const startIndex = (currentPage - 1) * itemsPerPage + 1;
    const endIndex = Math.min(currentPage * itemsPerPage, filteredData.length);
    const total = filteredData.length;
    
    if (showingInfoElement) {
        showingInfoElement.textContent = `Showing ${startIndex}-${endIndex} of ${total} alumni`;
    }
}

function goToPage(page) {
    const totalPages = Math.ceil(filteredData.length / itemsPerPage);
    
    if (page >= 1 && page <= totalPages) {
        currentPage = page;
        displayAlumni();
        updatePagination();
        
        // Scroll to top of directory
        document.querySelector('.alumni-directory-content').scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Export functions to global scope for HTML onclick handlers
window.goToPage = goToPage;
window.clearAllFilters = clearAllFilters;