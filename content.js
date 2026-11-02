/**
 * FormPilot Pro - Ultimate Universal Master Edition
 * Covers 70+ Mandatory Administrative, Academic, Travel, Financial & Biometric Fields.
 */
(function () {
    if (window.formPilotInitialized) return;
    window.formPilotInitialized = true;

    // --- COMPREHENSIVE MASTER DICTIONARY ---
    const MASTER_DICTIONARY = {
        // --- 1. PERSONAL IDENTIFICATION & IDENTITY VERIFICATION ---
        candidate_name: {
            cat: "Identity & Personal",
            title: { en: "Candidate's Full Legal Name", hi: "उम्मीदवार का पूरा कानूनी नाम" },
            exp: { en: "Enter your exact name as it appears on official birth certificates or school leaving records.", hi: "जन्म प्रमाण पत्र या स्कूल मार्कशीट के अनुसार अपना सटीक नाम दर्ज करें।" },
            rule: { en: "Do not use pet names, nicknames, or prefixes like Mr. or Dr.", hi: "उपनाम या श्री/डॉ. जैसे उपसर्गों का प्रयोग न करें।" }
        },
        alias_name: {
            cat: "Identity & Personal",
            title: { en: "Alias / Previous Name", hi: "उपनाम / पूर्व नाम" },
            exp: { en: "Declare any legal name changes, maiden names, or official aliases used in the past.", hi: "과거에 प्रयोग किए गए किसी भी कानूनी नाम परिवर्तन या उपनाम का खुलासा करें।" },
            rule: { en: "Legal proof of name change (gazette notification/affidavit) will be required.", hi: "नाम परिवर्तन का कानूनी प्रमाण (शपथ पत्र) आवश्यक होगा।" }
        },
        date_of_birth: {
            cat: "Identity & Personal",
            title: { en: "Date of Birth (DD/MM/YYYY)", hi: "जन्म तिथि (दिन/माह/वर्ष)" },
            exp: { en: "Verifiable birth date matching official registries and Class 10 passing certificates.", hi: "सरकारी रजिस्ट्रियों और 10वीं के प्रमाण पत्र से मेल खाती जन्म तिथि।" },
            rule: { en: "Must strictly match your Class 10 or matriculation document.", hi: "यह आपकी 10वीं की मार्कशीट से बिल्कुल मेल खाना चाहिए।" }
        },
        place_of_birth: {
            cat: "Identity & Personal",
            title: { en: "Place of Birth (City/State)", hi: "जन्म स्थान (शहर/राज्य)" },
            exp: { en: "City, district, state, and country of birth to establish legal jurisdiction.", hi: "कानूनी अधिकार क्षेत्र स्थापित करने के लिए जन्म का शहर और राज्य।" },
            rule: { en: "Must match details recorded on official birth certificates.", hi: "जन्म प्रमाण पत्र पर दर्ज विवरण से मेल खाना चाहिए।" }
        },
        gender: {
            cat: "Identity & Personal",
            title: { en: "Gender / Sex Marker", hi: "लिंग (Gender)" },
            exp: { en: "Legal gender marker for demographic, regulatory, or quota categorization.", hi: "जनसांख्यिकी या आरक्षण वर्गीकरण के लिए कानूनी लिंग चिन्ह।" },
            rule: { en: "Select the legal marker listed on your government ID card.", hi: "अपने सरकारी पहचान पत्र पर सूचीबद्ध कानूनी विकल्प चुनें।" }
        },
        father_name: {
            cat: "Identity & Personal",
            title: { en: "Father's Full Name", hi: "पिता का पूरा नाम" },
            exp: { en: "Used universally in institutional forms for secondary identity verification.", hi: "द्वितीयक पहचान सत्यापन के लिए पिता का आधिकारिक नाम।" },
            rule: { en: "Do not add titles like Mr., Late, or Dr. unless specifically instructed.", hi: "श्री या डॉ. जैसे उपसर्ग न जोड़ें।" }
        },
        mother_name: {
            cat: "Identity & Personal",
            title: { en: "Mother's Full Name", hi: "माता का पूरा नाम" },
            exp: { en: "Required for multi-factor identity matching and official board registrations.", hi: "बहु-कारक पहचान मिलान और बोर्ड पंजीकरण के लिए आवश्यक।" },
            rule: { en: "Spelling must match secondary school board records precisely.", hi: "वर्तनी माध्यमिक स्कूल बोर्ड के रिकॉर्ड से बिल्कुल मेल खानी चाहिए।" }
        },
        passport_number: {
            cat: "Identity Verification",
            title: { en: "Passport Number", hi: "पासपोर्ट नंबर" },
            exp: { en: "Mandatory for international travel, specific exam categories, or foreign verification.", hi: "अंतर्राष्ट्रीय यात्रा या विशिष्ट परीक्षा श्रेणियों के लिए अनिवार्य।" },
            rule: { en: "Must be valid and not expired at the time of form submission.", hi: "फॉर्म जमा करने के समय वैध और गैर-म्याद समाप्त होना चाहिए।" }
        },
        voter_id: {
            cat: "Identity Verification",
            title: { en: "Voter ID Card Number (EPIC)", hi: "वोटर आईडी कार्ड नंबर (EPIC)" },
            exp: { en: "Used in regional government applications to verify citizenship and electoral residency.", hi: "नागरिकता और चुनावी निवास की पुष्टि के लिए मतदाता कार्ड नंबर।" },
            rule: { en: "Enter the full alphanumeric EPIC number printed on your Voter Card.", hi: "कार्ड पर छपा पूरा EPIC नंबर दर्ज करें।" }
        },
        pan: {
            cat: "Financial Identity",
            title: { en: "PAN (Permanent Account Number)", hi: "पैन (स्थायी खाता संख्या)" },
            exp: { en: "Required for forms involving financial transactions, stipends, scholarships, or employment.", hi: "वित्तीय लेनदेन, छात्रवृत्ति या नौकरी से जुड़े फॉर्मों के लिए आवश्यक।" },
            rule: { en: "Format: 5 letters, 4 numbers, 1 letter (e.g., ABCDE1234F).", hi: "स्वरूप: 5 अक्षर, 4 अंक, 1 अक्षर।" }
        },
        identification_mark: {
            cat: "Identity & Security",
            title: { en: "Visible Identification Marks", hi: "दृश्यमान पहचान चिन्ह" },
            exp: { en: "Distinct physical features (e.g., moles, permanent scars) for manual security checks.", hi: "मैनुअल सुरक्षा जांच के लिए विशिष्ट शारीरिक लक्षण (जैसे तिल, स्थायी निशान)।" },
            rule: { en: "Specify visible marks on face, neck, or hands (e.g., 'A mole on right cheek').", hi: "चेहरे, गर्दन या हाथों पर दिखाई देने वाले निशान का उल्लेख करें।" }
        },
        marital_status: {
            cat: "Identity & Personal",
            title: { en: "Marital Status", hi: "वैवाहिक स्थिति" },
            exp: { en: "Single, married, divorced, or widowed status for legal, hostel, or benefit purposes.", hi: "कानूनी या लाभ उद्देश्यों के लिए वैवाहिक स्थिति (अविवाहित/विवाहित)।" },
            rule: { en: "Select your current legally recognized marital status.", hi: "अपनी वर्तमान कानूनी रूप से मान्यता प्राप्त स्थिति चुनें।" }
        },
        nationality: {
            cat: "Identity & Personal",
            title: { en: "Nationality / Citizenship", hi: "राष्ट्रीयता / नागरिकता" },
            exp: { en: "Legal declaration of country allegiance (e.g., Indian, NRI, OCI, Foreign National).", hi: "देश की निष्ठा का कानूनी घोषणा (जैसे भारतीय, एनआरआई, ओसीआई)।" },
            rule: { en: "Appropriate documentation (Passport/Citizenship Proof) will be required.", hi: "उपयुक्त दस्तावेज (पासपोर्ट/नागरिकता प्रमाण) आवश्यक होंगे।" }
        },
        hobbies_interests: {
            cat: "Personal & Co-Curricular",
            title: { en: "Hobbies & Extra-Curricular Interests", hi: "हॉबी और अतिरिक्त गतिविधियाँ" },
            exp: { en: "Personal activities, sports, artistic pursuits, or leisure interests you regularly engage in.", hi: "आपकी व्यक्तिगत रुचियां, खेल, कला या शौक जिन्हें आप नियमित रूप से करते हैं।" },
            rule: { en: "List relevant hobbies clearly; be prepared to answer questions during interviews.", hi: "स्पष्ट और प्रासंगिक हॉबी लिखें; साक्षात्कार में इनके बारे में पूछे जाने के लिए तैयार रहें।" }
        },
        username: {
            cat: "Authentication & Identity",
            title: { en: "Username / Login ID", hi: "यूज़रनेम / लॉगिन आईडी" },
            exp: { en: "A unique alphanumeric handle chosen by you or assigned by the portal to identify your user account.", hi: "आपके खाते की पहचान के लिए आपके द्वारा चुना गया या पोर्टल द्वारा दिया गया अनूठा नाम।" },
            rule: { en: "Must be unique across the platform. Keep it lowercase and free of spaces.", hi: "यह प्लेटफॉर्म पर अनूठा होना चाहिए। इसमें रिक्त स्थान न रखें।" }
        },
        security_pin: {
            cat: "Authentication & Security",
            title: { en: "Security PIN / Password / Captcha", hi: "सुरक्षा पिन / पासवर्ड / कैप्चा" },
            exp: { en: "Enter your confidential security PIN, portal password, or captcha code to authenticate securely.", hi: "अपने खाते को प्रमाणित करने के लिए अपना गोपनीय सुरक्षा पिन या पासवर्ड दर्ज करें।" },
            rule: { en: "Keep this private. Ensure caps lock is turned off.", hi: "इसे गोपनीय रखें। कैप्स लॉक बंद रखें।" }
        },

        // --- 2. CONTACT & RESIDENTIAL DATA ---
        permanent_address: {
            cat: "Contact & Location",
            title: { en: "Permanent Address", hi: "स्थाई पता" },
            exp: { en: "The legal or ancestral home address used for official physical correspondence and background checks.", hi: "आधार कार्ड पर दर्ज आपका पैतृक घर या कानूनी मूल पता।" },
            rule: { en: "Must match your official ID proofs. Do not enter temporary hostel addresses here.", hi: "यह आपके आधिकारिक आईडी प्रमाण से मेल खाना चाहिए।" }
        },
        correspondence_address: {
            cat: "Contact & Location",
            title: { en: "Current / Correspondence Address", hi: "वर्तमान / पत्राचार का पता" },
            exp: { en: "The exact physical location where the applicant presently resides to receive immediate physical mail.", hi: "वह पता जहाँ आप वर्तमान में रह रहे हैं ताकि तुरंत डाक मिल सके।" },
            rule: { en: "Ensure someone is available to receive physical post at this location.", hi: "सुनिश्चित करें कि यहाँ डाक प्राप्त करने के लिए कोई उपलब्ध हो।" }
        },
        duration_of_stay: {
            cat: "Contact & Location",
            title: { en: "Duration of Stay at Current Address", hi: "वर्तमान पते पर रहने की अवधि" },
            exp: { en: "Length of time spent at the present location, often required for police background checks.", hi: "वर्तमान स्थान पर बिताया गया समय, जो पुलिस सत्यापन के लिए आवश्यक होता है।" },
            rule: { en: "State accurate years and months of residence.", hi: "निवास के सटीक वर्ष और महीने बताएं।" }
        },
        mobile: {
            cat: "Contact & Identity",
            title: { en: "Primary Mobile Number", hi: "प्राथमिक मोबाइल नंबर" },
            exp: { en: "Your active 10-digit primary phone number used for OTP verifications and emergency communication.", hi: "ओटीपी सत्यापन और संदेशों के लिए आपका चालू 10-अंकों का मुख्य मोबाइल नंबर।" },
            rule: { en: "Enter exactly 10 numeric digits without prefixing +91 or zero.", hi: "बिना +91 के ठीक 10 अंक दर्ज करें।" }
        },
        alt_mobile: {
            cat: "Contact & Identity",
            title: { en: "Alternative Contact Number", hi: "वैकल्पिक संपर्क नंबर" },
            exp: { en: "A secondary phone number (parent or alternate line) in case the primary line is unreachable.", hi: "प्राथमिक नंबर बंद होने की स्थिति के लिए द्वितीयक फोन नंबर।" },
            rule: { en: "Provide a working secondary number distinct from your primary mobile.", hi: "एक अलग कार्यशील द्वितीयक नंबर प्रदान करें।" }
        },
        email: {
            cat: "Contact & Identity",
            title: { en: "Primary Email Address", hi: "प्राथमिक ईमेल आईडी" },
            exp: { en: "The main digital channel for receiving application receipts, admit cards, or confirmation letters.", hi: "आवेदन रसीदें और प्रवेश पत्र प्राप्त करने के लिए मुख्य ईमेल पता।" },
            rule: { en: "Must include '@' symbol and a valid domain like gmail.com.", hi: "इसमें '@' और वैध डोमेन होना चाहिए।" }
        },
        alt_email: {
            cat: "Contact & Identity",
            title: { en: "Alternative Email Address", hi: "वैकल्पिक ईमेल आईडी" },
            exp: { en: "A backup digital inbox used for account recovery or secondary notifications.", hi: "खाता पुनर्प्राप्ति या द्वितीयक सूचनाओं के लिए बैकअप ईमेल।" },
            rule: { en: "Ensure you have access to this secondary inbox.", hi: "सुनिश्चित करें कि आपकी इस द्वितीयक इनबॉक्स तक पहुंच है।" }
        },
        emergency_contact_name: {
            cat: "Emergency Details",
            title: { en: "Emergency Contact Person Name", hi: "आपतकालीन संपर्क व्यक्ति का नाम" },
            exp: { en: "Name of a trusted individual to reach out to in urgent or medical situations.", hi: "आपतकालीन या चिकित्सा स्थितियों में संपर्क करने के लिए किसी विश्वसनीय व्यक्ति का नाम।" },
            rule: { en: "Provide full legal name of your immediate contact.", hi: "अपने निकटतम संपर्क का पूरा नाम दें।" }
        },
        emergency_contact_rel: {
            cat: "Emergency Details",
            title: { en: "Emergency Contact Relationship", hi: "आपतकालीन संपर्क से संबंध" },
            exp: { en: "The applicant's legal or familial relation to the emergency contact (e.g., Father, Guardian, Spouse).", hi: "आपतकालीन संपर्क व्यक्ति के साथ आपका संबंध (जैसे पिता, अभिभावक)।" },
            rule: { en: "Select or type the precise relation.", hi: "सटीक संबंध चुनें या टाइप करें।" }
        },
        emergency_contact_phone: {
            cat: "Emergency Details",
            title: { en: "Emergency Contact Phone Number", hi: "आपतकालीन संपर्क फोन नंबर" },
            exp: { en: "Direct working phone line dedicated to the emergency contact person.", hi: "आपतकालीन संपर्क व्यक्ति का सीधा कार्यशील फोन नंबर।" },
            rule: { en: "Must be an active number reachable at all times.", hi: "हर समय उपलब्ध रहने वाला चालू नंबर होना चाहिए।" }
        },
        pincode: {
            cat: "Contact & Location",
            title: { en: "PIN Code / Postal Index Code", hi: "पिन कोड" },
            exp: { en: "The 6-digit postal index number assigned by the postal department for your location.", hi: "आपके क्षेत्र के लिए डाक विभाग द्वारा निर्धारित 6-अंकों का पिन कोड।" },
            rule: { en: "Must be exactly 6 numeric digits.", hi: "ठीक 6 अंक होने चाहिए।" }
        },

        // --- 3. EDUCATIONAL BACKGROUND & QUALIFICATIONS (JEE / ERP / Academic) ---
        qualifying_status: {
            cat: "Educational Qualifications",
            title: { en: "Qualifying Examination Status", hi: "योग्यता परीक्षा की स्थिति" },
            exp: { en: "Indicates whether the candidate has passed or is currently appearing for the final qualifying exams.", hi: "दर्शाता है कि उम्मीदवार ने परीक्षा पास कर ली है या वर्तमान में दे रहा है (Passed/Appearing)।" },
            rule: { en: "Select 'Passed' if marksheets are issued; 'Appearing' if currently enrolled.", hi: "'Passed' चुनें यदि अंक पत्र जारी किए गए हैं; अन्यथा 'Appearing'।" }
        },
        passing_year: {
            cat: "Educational Qualifications",
            title: { en: "Year of Passing / Appearing", hi: "उत्तीर्ण / उपस्थित होने का वर्ष" },
            exp: { en: "The exact calendar year the academic qualification was achieved or will be completed.", hi: "शैक्षणिक योग्यता हासिल करने का सटीक कैलेंडर वर्ष।" },
            rule: { en: "Must match the passing year printed on your diploma or board degree.", hi: "आपकी बोर्ड डिग्री पर मुद्रित वर्ष से मेल खाना चाहिए।" }
        },
        school_name: {
            cat: "Educational Qualifications",
            title: { en: "Name of School / College / Institute", hi: "स्कूल / कॉलेज का नाम" },
            exp: { en: "The official registered name of the last attended academic institution.", hi: "आपके पिछले शैक्षणिक संस्थान का आधिकारिक पंजीकृत नाम।" },
            rule: { en: "Write full name without informal abbreviations.", hi: "अनौपचारिक संक्षिप्त रूपों के बिना पूरा नाम लिखें।" }
        },
        board_name: {
            cat: "Educational Qualifications",
            title: { en: "School Board / University Name", hi: "स्कूल बोर्ड / विश्वविद्यालय का नाम" },
            exp: { en: "The governing academic body that issued the qualification (e.g., CBSE, ICSE, State Board).", hi: "योग्यता जारी करने वाला शासी निकाय (जैसे सीबीएसई, आईसीएसई, राज्य बोर्ड)।" },
            rule: { en: "Must match the official title printed on your final marksheet header.", hi: "आपकी अंतिम मार्कशीट हेडर पर मुद्रित नाम से मेल खाना चाहिए।" }
        },
        roll_number: {
            cat: "Educational Qualifications",
            title: { en: "Board Roll Number / Registration No.", hi: "बोर्ड रोल नंबर / पंजीकरण संख्या" },
            exp: { en: "The specific board exam roll number or institute registration number assigned to you.", hi: "आपको आवंटित विशिष्ट बोर्ड परीक्षा रोल नंबर या संस्थान पंजीकरण संख्या।" },
            rule: { en: "Double-check digits carefully against your admit card/admit letter.", hi: "प्रवेश पत्र के अनुसार अंकों की सावधानीपूर्वक जांच करें।" }
        },
        school_address: {
            cat: "Educational Qualifications",
            title: { en: "School / College Address & PIN", hi: "स्कूल / कॉलेज का पता और पिन कोड" },
            exp: { en: "Physical location and PIN code of your academic institution.", hi: "आपके शैक्षणिक संस्थान का भौतिक स्थान और पिन कोड।" },
            rule: { en: "Provide accurate district and PIN code of the campus.", hi: "कैंपस का सटीक जिला और पिन कोड प्रदान करें।" }
        },
        marks_obtained: {
            cat: "Educational Qualifications",
            title: { en: "Marks Obtained / Scored CGPA", hi: "प्राप्त अंक / प्राप्त सीजीपीए" },
            exp: { en: "Total cumulative marks or grade points earned in the examination.", hi: "परीक्षा में अर्जित कुल अंक या ग्रेड अंक।" },
            rule: { en: "Enter exact figures as calculated on your official transcript.", hi: "आधिकारिक ट्रांसक्रिप्ट के अनुसार सटीक आंकड़े दर्ज करें।" }
        },
        max_marks: {
            cat: "Educational Qualifications",
            title: { en: "Maximum Possible Marks", hi: "अधिकतम संभव अंक" },
            exp: { en: "The total evaluation scale (e.g., 500, 1000, 10.0 CGPA) against which performance is graded.", hi: "कुल मूल्यांकन स्केल (जैसे 500, 1000) जिसके आधार पर ग्रेड दिया जाता है।" },
            rule: { en: "Must reflect the grand total maximum score of all subjects.", hi: "सभी विषयों के कुल अधिकतम अंक को दर्शाना चाहिए।" }
        },
        percentage_marks: {
            cat: "Educational Qualifications",
            title: { en: "Calculated Percentage of Marks", hi: "गणना किया गया अंक प्रतिशत" },
            exp: { en: "The aggregate percentage calculated from marks obtained divided by maximum marks.", hi: "प्राप्त अंकों को अधिकतम अंकों से विभाजित करके गणना किया गया कुल प्रतिशत।" },
            rule: { en: "Round off or enter decimals strictly according to portal formatting rules.", hi: "पोर्टल नियमों के अनुसार दशमलव अंक दर्ज करें।" }
        },
        subjects_studied: {
            cat: "Educational Qualifications",
            title: { en: "Core Subjects Studied (Maths, Chemistry, etc.)", hi: "मुख्य अध्ययन किए गए विषय (गणित, रसायन विज्ञान आदि)" },
            exp: { en: "Specific core academic subjects taken in qualifying senior secondary examinations such as Mathematics, Physics, Chemistry, Biology, Computer Science, and English.", hi: "कक्षा 12वीं या योग्यता परीक्षाओं में पढ़े गए मुख्य विषय जैसे गणित, भौतिकी, रसायन विज्ञान, जीव विज्ञान और अंग्रेजी।" },
            rule: { en: "Select or list all mandatory stream subjects exactly as they appear on your board scorecard.", hi: "अपने बोर्ड स्कोरकार्ड के अनुसार सभी अनिवार्य विषयों का चयन करें।" }
        },
        medium_instruction: {
            cat: "Educational Qualifications",
            title: { en: "Medium of Instruction", hi: "शिक्षा का माध्यम" },
            exp: { en: "The primary language in which courses and lectures were delivered (e.g., English, Hindi).", hi: "वह मुख्य भाषा जिसमें शिक्षा प्रदान की गई थी (जैसे अंग्रेजी, हिंदी)।" },
            rule: { en: "Select the primary language of your qualifying exams.", hi: "अपनी परीक्षा की मुख्य भाषा चुनें।" }
        },
        school_category: {
            cat: "Educational Qualifications",
            title: { en: "School Classification Category", hi: "स्कूल का प्रकार / श्रेणी" },
            exp: { en: "Type of institution (e.g., Government, Private Aided, Kendriya Vidyalaya, Jawahar Navodaya).", hi: "संस्थान का प्रकार (जैसे सरकारी, निजी, केंद्रीय विद्यालय)।" },
            rule: { en: "Select the exact administrative category of your school.", hi: "अपने स्कूल की प्रशासनिक श्रेणी चुनें।" }
        },
        school_location: {
            cat: "Educational Qualifications",
            title: { en: "School Geographic Location", hi: "स्कूल की भौगोलिक स्थिति (ग्रामीण/शहरी)" },
            exp: { en: "Declares whether the educational institution is situated in a Rural or Urban area.", hi: "घोषणा करता है कि संस्थान ग्रामीण क्षेत्र में है या शहरी क्षेत्र में।" },
            rule: { en: "Required for demographic statistical tracking and rural concessions.", hi: "ग्रामीण रियायतों और सांख्यिकीय ट्रैकिंग के लिए आवश्यक।" }
        },

        // --- 4. SOCIO-ECONOMIC & CATEGORY DATA ---
        category: {
            cat: "Socio-Economic & Quotas",
            title: { en: "Reservation Category (Gen/OBC/SC/ST)", hi: "आरक्षण श्रेणी (सामान्य/ओबीसी/एससी/एसटी)" },
            exp: { en: "Social classification used to determine government quota reservations and fee waivers.", hi: "सरकारी आरक्षण और शुल्क छूट तय करने के लिए सामाजिक श्रेणी।" },
            rule: { en: "Must strictly match your government-issued Caste Certificate.", hi: "यह आपके सरकारी जाति प्रमाण पत्र से बिल्कुल मेल खाना चाहिए।" }
        },
        caste_cert_number: {
            cat: "Socio-Economic & Quotas",
            title: { en: "Caste / Category Certificate Number", hi: "जाति / श्रेणी प्रमाण पत्र संख्या" },
            exp: { en: "The official document serial number verifying your social reservation category claim.", hi: "आपके सामाजिक आरक्षण दावे को सत्यापित करने वाला आधिकारिक प्रमाण पत्र संख्या।" },
            rule: { en: "Enter exact serial/certificate number printed on the document.", hi: "दस्तावेज़ पर मुद्रित सटीक प्रमाण पत्र संख्या दर्ज करें।" }
        },
        cert_authority: {
            cat: "Socio-Economic & Quotas",
            title: { en: "Certificate Issuing Authority", hi: "प्रमाण पत्र जारी करने वाला प्राधिकारी" },
            exp: { en: "The designated government officer who authorized the certificate (e.g., Tahsildar, SDM, DM).", hi: "प्रमाण पत्र को अधिकृत करने वाला सरकारी अधिकारी (जैसे तहसीलदार, एसडीएम)।" },
            rule: { en: "Select or type the official designation of the issuing officer.", hi: "जारीकर्ता अधिकारी का पदनाम चुनें।" }
        },
        cert_issue_date: {
            cat: "Socio-Economic & Quotas",
            title: { en: "Date of Issue of Certificate", hi: "प्रमाण पत्र जारी करने की तिथि" },
            exp: { en: "The calendar date on which the reservation document was officially authorized.", hi: "वह तारीख जिस दिन आरक्षण दस्तावेज अधिकृत किया गया था।" },
            rule: { en: "Must be valid and issued within the required statutory timeframe.", hi: "वैध और समय सीमा के भीतर जारी किया जाना चाहिए।" }
        },
        pwd_status: {
            cat: "Socio-Economic & Quotas",
            title: { en: "Person with Disability (PwD) Status", hi: "दिव्यांगता स्थिति (PwD)" },
            exp: { en: "Declaration of physical or medical impairment requiring educational or exam accommodations.", hi: "परीक्षा में विशेष सुविधाओं के लिए शारीरिक या चिकित्सा अक्षमता की घोषणा।" },
            rule: { en: "Must be supported by a recognized Medical Board Certificate.", hi: "मान्यता प्राप्त मेडिकल बोर्ड प्रमाण पत्र द्वारा समर्थित होना चाहिए।" }
        },
        disability_type: {
            cat: "Socio-Economic & Quotas",
            title: { en: "Type of Disability", hi: "दिव्यांगता का प्रकार" },
            exp: { en: "Specific classification of impairment (e.g., Visual, Locomotor, Hearing, Autism).", hi: "विकलांगता का विशिष्ट वर्गीकरण (जैसे दृष्टिबाधित, लोकोमोटर)।" },
            rule: { en: "Select the category specified in your disability certificate.", hi: "अपने प्रमाण पत्र में निर्दिष्ट श्रेणी चुनें।" }
        },
        disability_percentage: {
            cat: "Socio-Economic & Quotas",
            title: { en: "Percentage of Disability", hi: "दिव्यांगता का प्रतिशत" },
            exp: { en: "Medical assessment metric indicating the severity of physical impairment.", hi: "शारीरिक अक्षमता की गंभीरता को दर्शाने वाला चिकित्सा मूल्यांकन प्रतिशत।" },
            rule: { en: "Must usually be 40% or higher to claim statutory PwD reservations.", hi: "आरक्षण का दावा करने के लिए आमतौर पर 40% या उससे अधिक होना चाहिए।" }
        },
        scribe_required: {
            cat: "Socio-Economic & Quotas",
            title: { en: "Scribe / Reader Requirement", hi: "लेखक / स्क्राइव की आवश्यकता" },
            exp: { en: "Indicates whether the candidate requires an assistant/scribe to write exam papers.", hi: "दर्शाता है कि क्या उम्मीदवार को परीक्षा लिखने के लिए सहायक की आवश्यकता है।" },
            rule: { en: "Subject to NTA/Government scribe rules and advance notification.", hi: "सरकारी नियमों और अग्रिम सूचना के अधीन।" }
        },
        annual_income: {
            cat: "Socio-Economic & Quotas",
            title: { en: "Parental / Family Annual Income", hi: "पारिवारिक वार्षिक आय" },
            exp: { en: "Total combined yearly earnings of parents/guardians from all sources before taxes.", hi: "सभी स्रोतों से माता-पिता की कुल वार्षिक कमाई।" },
            rule: { en: "Must match the exact figure written on your Income Certificate.", hi: "यह आपके आय प्रमाण पत्र पर लिखी गई राशि से मेल खाना चाहिए।" }
        },
        ews_status: {
            cat: "Socio-Economic & Quotas",
            title: { en: "EWS (Economically Weaker Section) Status", hi: "ईडब्ल्यूएस स्थिति" },
            exp: { en: "Income and asset-based classification offering 10% reservation benefits to General category applicants.", hi: "सामान्य श्रेणी के आवेदकों को 10% आरक्षण देने वाली आर्थिक स्थिति।" },
            rule: { en: "Must hold a valid EWS Income & Asset Certificate for the current financial year.", hi: "चालू वित्त वर्ष का वैध ईडब्ल्यूएस प्रमाण पत्र होना चाहिए।" }
        },
        minority_status: {
            cat: "Socio-Economic & Quotas",
            title: { en: "Minority Community Status", hi: "अल्पसंख्यक समुदाय स्थिति" },
            exp: { en: "Declaration of belonging to a constitutionally recognized religious or linguistic minority.", hi: "संवैधानिक रूप से मान्यता प्राप्त धार्मिक या भाषाई अल्पसंख्यक की घोषणा।" },
            rule: { en: "Select relevant community (e.g., Muslim, Christian, Sikh, Buddhist, Jain, Parsi).", hi: "संबंधित समुदाय का चयन करें।" }
        },

        // --- 5. TRAVEL & LOGISTICS INFORMATION (Railway / IRCTC / Transit) ---
        train_flight_number: {
            cat: "Travel & Logistics",
            title: { en: "Train / Flight / Transit Number", hi: "ट्रेन / फ्लाइट / यात्रा संख्या" },
            exp: { en: "The specific numeric identification code assigned to the scheduled transport vehicle.", hi: "अनुसूचित वाहन को आवंटित विशिष्ट पहचान संख्या (जैसे 12951)।" },
            rule: { en: "Verify train or flight number against official timetable before booking.", hi: "बुकिंग से पहले समय सारणी से नंबर सत्यापित करें।" }
        },
        date_of_journey: {
            cat: "Travel & Logistics",
            title: { en: "Date of Journey", hi: "यात्रा की तिथि" },
            exp: { en: "The planned calendar day for departure and transit.", hi: "प्रस्थान और यात्रा के लिए निर्धारित कैलेंडर दिन।" },
            rule: { en: "Ensure date matches your travel itinerary precisely.", hi: "सुनिश्चित करें कि तारीख आपकी यात्रा योजना से मेल खाती है।" }
        },
        origin_station: {
            cat: "Travel & Logistics",
            title: { en: "Station / Port of Origin", hi: "प्रस्थान स्टेशन / बंदरगाह" },
            exp: { en: "The starting station or boarding point code of the scheduled trip.", hi: "आपकी निर्धारित यात्रा का प्रारंभिक स्टेशन या बोर्डिंग पॉइंट।" },
            rule: { en: "Select correct station code (e.g., NDLS, JU, BCT).", hi: "सही स्टेशन कोड चुनें।" }
        },
        destination_station: {
            cat: "Travel & Logistics",
            title: { en: "Destination Station / Port", hi: "गंतव्य स्टेशन / बंदरगाह" },
            exp: { en: "The final debarkation stop or arrival location of the journey.", hi: "यात्रा का अंतिम ठहराव या आगमन स्थान।" },
            rule: { en: "Double-check city terminal codes prior to fare payment.", hi: "किराया भुगतान से पहले टर्मिनल कोड की जाँच करें।" }
        },
        class_of_travel: {
            cat: "Travel & Logistics",
            title: { en: "Class of Travel / Accommodation", hi: "यात्रा की श्रेणी (Class)" },
            exp: { en: "The tier of service booked (e.g., 1st AC, 2nd AC, 3rd AC, Sleeper, Executive, Economy).", hi: "आरक्षित सेवा की श्रेणी (जैसे प्रथम एसी, स्लीपर, इकोनॉमी)।" },
            rule: { en: "Fares and rules vary according to the chosen travel tier.", hi: "चुनी गई श्रेणी के अनुसार किराया भिन्न होता है।" }
        },
        quota_category: {
            cat: "Travel & Logistics",
            title: { en: "Quota Category (General/Tatkal/Ladies)", hi: "कोटा श्रेणी (सामान्य/तत्काल/महिला)" },
            exp: { en: "Special booking allocations (e.g., General, Ladies, Tatkal, Senior Citizen, Premium Tatkal).", hi: "विशेष बुकिंग आवंटन (जैसे जनरल, तत्काल, वरिष्ठ नागरिक)।" },
            rule: { en: "Select quota matching your legal eligibility.", hi: "अपनी कानूनी पात्रता से मेल खाने वाला कोटा चुनें।" }
        },
        berth_preference: {
            cat: "Travel & Logistics",
            title: { en: "Berth / Seat Preference", hi: "बर्थ / सीट प्राथमिकता" },
            exp: { en: "Choice of seating location during transit (e.g., Lower Berth, Upper, Window Seat, Aisle).", hi: "यात्रा के दौरान बैठने की जगह की पसंद (जैसे लोअर बर्थ, विंडो सीट)।" },
            rule: { en: "Seat allotment is subject to system availability at chart preparation.", hi: "सीट आवंटन चार्ट बनने के समय उपलब्धता पर निर्भर करता है।" }
        },
        meal_preference: {
            cat: "Travel & Logistics",
            title: { en: "Food / Meal Preference", hi: "भोजन / आहार प्राथमिकता" },
            exp: { en: "Dietary choices provided during long-distance transit (e.g., Veg, Non-Veg, Jain).", hi: "लंबी दूरी की यात्रा के दौरान मिलने वाला भोजन (शाकाहारी/मांसाहारी)।" },
            rule: { en: "Can be updated prior to final train/flight catering lock.", hi: "अंतिम केटरिंग लॉक से पहले अपडेट किया जा सकता है।" }
        },
        age_verification: {
            cat: "Travel & Logistics",
            title: { en: "Age Verification & Concession", hi: "आयु सत्यापन और छूट" },
            exp: { en: "Age declared specifically to calculate fare concessions or senior citizen discounts.", hi: "किराया छूट की गणना के लिए घोषित आयु।" },
            rule: { en: "Original government ID showing DOB must be carried during travel.", hi: "यात्रा के दौरान जन्म तिथि वाला मूल आईडी कार्ड पास होना चाहिए।" }
        },
        co_passenger: {
            cat: "Travel & Logistics",
            title: { en: "Co-Passenger Details", hi: "सह-यात्री विवरण" },
            exp: { en: "Legal names, ages, and genders of individuals traveling on the same ticket.", hi: "एक ही टिकट पर यात्रा करने वाले अन्य लोगों के नाम और विवरण।" },
            rule: { en: "Ensure names match their photo identity cards precisely.", hi: "सुनिश्चित करें कि नाम उनके फोटो आईडी कार्ड से मेल खाते हैं।" }
        },

        // --- 6. SECURITY, LEGAL & MISCELLANEOUS DISCLOSURES ---
        criminal_record: {
            cat: "Legal & Disclosures",
            title: { en: "Criminal Record Declaration", hi: "आपराधिक रिकॉर्ड घोषणा" },
            exp: { en: "Mandatory disclosure of any pending court cases, convictions, or legal indictments.", hi: "किसी भी लंबित अदालती मामले या कानूनी दोषसिद्धि का अनिवार्य खुलासा।" },
            rule: { en: "Concealing legal proceedings leads to immediate disqualification and legal action.", hi: "कानूनी कार्यवाही छुपाने पर तत्काल अयोग्यता होगी।" }
        },
        debarment_status: {
            cat: "Legal & Disclosures",
            title: { en: "Debarment / Blacklisting Status", hi: "डिबारमेंट (पाबंदी) स्थिति" },
            exp: { en: "Information on whether the applicant has been banned from prior exams or government services.", hi: "जानकारी कि क्या आवेदक को पिछली परीक्षाओं या सेवाओं से प्रतिबंधित किया गया है।" },
            rule: { en: "Provide truthful declarations under penalty of permanent blacklisting.", hi: "स्थायी ब्लैकलिस्टिंग के जोखिम से बचने के लिए सत्य घोषणाएं दें।" }
        },
        employment_status: {
            cat: "Legal & Disclosures",
            title: { en: "Employment Status", hi: "रोजगार की स्थिति" },
            exp: { en: "Current occupation details (e.g., Government Employee, Private Sector, Unemployed, Student).", hi: "वर्तमान व्यवसाय विवरण (जैसे सरकारी कर्मचारी, बेरोजगार, छात्र)।" },
            rule: { en: "Government employees must submit a No-Objection Certificate (NOC).", hi: "सरकारी कर्मचारियों को अनापत्ति प्रमाण पत्र (NOC) जमा करना होगा।" }
        },
        exam_city_choice: {
            cat: "Legal & Disclosures",
            title: { en: "Choice of Exam / Service City", hi: "परीक्षा / सेवा शहर की पसंद" },
            exp: { en: "Preferred geographic locations to take a test or receive administrative services.", hi: "परीक्षा देने के लिए पसंदीदा शहरों के विकल्प।" },
            rule: { en: "Select cities in order of proximity and preference.", hi: "निकटता के क्रम में पसंदीदा शहर चुनें।" }
        },
        photograph_upload: {
            cat: "Biometrics & Uploads",
            title: { en: "Photograph Upload Specifications", hi: "तस्वीर अपलोड विनिर्देश" },
            exp: { en: "Digital passport image adhering to strict dimensions, light background, and date stamps.", hi: "सख्त आयामों और हल्के पृष्ठभूमि रंगों वाली डिजिटल पासपोर्ट तस्वीर।" },
            rule: { en: "Must be recent (within 3 months), clear, showing 80% face coverage with ears visible.", hi: "हाल ही की (3 महीने के भीतर), 80% चेहरे और कानों के साथ स्पष्ट होनी चाहिए।" }
        },
        signature_upload: {
            cat: "Biometrics & Uploads",
            title: { en: "Signature Upload Specifications", hi: "हस्ताक्षर अपलोड विनिर्देश" },
            exp: { en: "Digital scan of the applicant's official handwritten signature in dark ink.", hi: "काली या नीली स्याही में किए गए आवेदक के हस्ताक्षर की स्कैन कॉपी।" },
            rule: { en: "Sign on clean white paper; do not use CAPITAL LETTERS for signature.", hi: "सफेद कागज पर हस्ताक्षर करें; केवल बड़े अक्षरों का प्रयोग न करें।" }
        },
        thumb_impression: {
            cat: "Biometrics & Uploads",
            title: { en: "Left-Hand Thumb Impression (LTI)", hi: "बाएं हाथ के अंगूठे का निशान" },
            exp: { en: "Digital scan or ink print required by specific security protocols.", hi: "विशिष्ट सुरक्षा प्रोटोकॉल के लिए आवश्यक बाएं हाथ के अंगूठे की छाप।" },
            rule: { en: "Ensure clear print without smudges on white paper background.", hi: "सफेद कागज पर बिना धुंधले धब्बों के स्पष्ट छाप लगाएं।" }
        },
        declaration_truthfulness: {
            cat: "Legal & Disclosures",
            title: { en: "Declaration of Truthfulness", hi: "सत्यता की घोषणा" },
            exp: { en: "Mandatory legal checkbox confirming that all provided information is accurate under penalty of law.", hi: "कानूनी पुष्टि कि दी गई सभी जानकारी सत्य और सही है।" },
            rule: { en: "False statements invite criminal prosecution and candidate cancellation.", hi: "गलत बयानबाजी पर कानूनी कार्रवाई और उम्मीदवारी रद्द हो सकती है।" }
        }
    };

    let currentLang = "en";

    // --- CREATE SHADOW DOM UI WIDGET ---
    const host = document.createElement('div');
    document.body.appendChild(host);
    const shadow = host.attachShadow({ mode: 'open' });

    shadow.innerHTML = `
        <style>
            :host { all: initial; font-family: system-ui, -apple-system, sans-serif; }
            .box {
                position: fixed; bottom: 24px; right: 24px; width: 360px;
                background: #ffffff; border-radius: 16px; box-shadow: 0 12px 32px rgba(0,0,0,0.18);
                z-index: 2147483647; border: 1px solid #e2e8f0; overflow: hidden;
            }
            .header {
                background: linear-gradient(135deg, #4f46e5, #3b82f6); color: #ffffff;
                padding: 12px 16px; display: flex; justify-content: space-between; align-items: center;
                font-weight: bold; font-size: 13px;
            }
            .lang { background: rgba(255,255,255,0.25); color: #fff; border: none; border-radius: 6px; padding: 3px 8px; font-size: 11px; cursor: pointer; }
            .lang option { color: #000; }
            .body { padding: 16px; max-height: 380px; overflow-y: auto; font-size: 12px; }
            .badge { display: inline-block; background: #e0e7ff; color: #4338ca; padding: 2px 8px; border-radius: 4px; font-size: 10px; font-weight: bold; text-transform: uppercase; margin-bottom: 6px; }
            .title { font-size: 15px; font-weight: bold; color: #1e293b; margin-bottom: 12px; }
            .card { background: #f8fafc; border: 1px solid #f1f5f9; padding: 12px; border-radius: 10px; margin-bottom: 10px; color: #334155; line-height: 1.4; }
            .rule { background: #eff6ff; border-color: #dbeafe; color: #1e40af; }
            .card-head { font-weight: bold; margin-bottom: 3px; font-size: 11px; display: flex; align-items: center; gap: 4px; }
        </style>
        <div class="box">
            <div class="header">
                <span>✈️ FormPilot Pro (Ultimate)</span>
                <select class="lang" id="lang">
                    <option value="en">English 🇬🇧</option>
                    <option value="hi">हिंदी 🇮🇳</option>
                </select>
            </div>
            <div class="body">
                <div class="badge" id="f-cat">System Ready</div>
                <div class="title" id="f-title">Click any form field...</div>
                
                <div class="card">
                    <div class="card-head">💡 Simple Explanation</div>
                    <div id="t-exp">FormPilot is active and monitoring portal input boxes.</div>
                </div>

                <div class="card rule">
                    <div class="card-head">🛡️ What you should fill here</div>
                    <div id="t-rule">Ensure accuracy matching your official certificates and identity documents.</div>
                </div>
            </div>
        </div>
    `;

    // --- LINGUISTIC DYNAMIC FALLBACK & SMART MATCHING ENGINE ---
    function getSmartFallback(fieldName) {
        const lower = fieldName.toLowerCase();

        if (lower.includes('upload') || lower.includes('file') || lower.includes('scan') || lower.includes('document')) {
            return {
                cat: "Document Upload Field",
                title: { en: fieldName, hi: "दस्तावेज़ अपलोड फ़ील्ड" },
                exp: { en: `This requires uploading a scanned digital copy for '${fieldName}'.`, hi: `इसके लिए आपको '${fieldName}' की स्कैन की गई प्रति अपलोड करनी होगी।` },
                rule: { en: "Ensure the file format is PDF or JPG and file size is within portal limits.", hi: "सुनिश्चित करें कि फ़ाइल प्रारूप पीडीएफ या जेपीजी है।" }
            };
        } else if (lower.includes('date') || lower.includes('dob') || lower.includes('year') || lower.includes('birth')) {
            return {
                cat: "Date & Calendar Field",
                title: { en: fieldName, hi: "तिथि फ़ील्ड" },
                exp: { en: `Enter the specific calendar date or year for '${fieldName}'.`, hi: `'${fieldName}' के लिए विशिष्ट कैलेंडर तिथि दर्ज करें।` },
                rule: { en: "Use the required format (e.g., DD/MM/YYYY) matching your certificates.", hi: "आवश्यक प्रारूप (जैसे DD/MM/YYYY) का उपयोग करें।" }
            };
        } else if (lower.includes('hobby') || lower.includes('hobbies') || lower.includes('interest') || lower.includes('activity') || lower.includes('co-curricular') || lower.includes('extra-curricular')) {
            return {
                cat: "Personal & Co-Curricular",
                title: { en: fieldName, hi: "हॉबी और रुचियां फ़ील्ड" },
                exp: { en: `Provide details regarding your hobbies or personal interests for '${fieldName}'.`, hi: `'${fieldName}' के लिए अपनी रुचियों या हॉबी का विवरण दर्ज करें।` },
                rule: { en: "Keep entries concise, truthful, and relevant.", hi: "सच्चे और स्पष्ट शौक का उल्लेख करें।" }
            };
        } else if (lower.includes('subject') || lower.includes('math') || lower.includes('chem') || lower.includes('phys') || lower.includes('bio') || lower.includes('engl') || lower.includes('comp') || lower.includes('science')) {
            return {
                cat: "Academic Subject Field",
                title: { en: fieldName, hi: "शैक्षणिक विषय फ़ील्ड" },
                exp: { en: `Specify the academic subject name or score details for '${fieldName}' as studied in your qualifying examinations.`, hi: `अपनी योग्यता परीक्षाओं में पढ़े गए '${fieldName}' के विषय या अंक विवरण दर्ज करें।` },
                rule: { en: "Ensure exact naming consistency with your board examination transcripts or marksheets.", hi: "अपनी बोर्ड परीक्षा की मार्कशीट के अनुसार विषय का सटीक नाम दर्ज करें।" }
            };
        } else if (lower.includes('number') || lower.includes('code') || lower.includes('id') || lower.includes('digit')) {
            return {
                cat: "Numerical / Code Field",
                title: { en: fieldName, hi: "संख्या / कोड फ़ील्ड" },
                exp: { en: `Enter the numerical identification code or serial digits for '${fieldName}'.`, hi: `'${fieldName}' के लिए संख्यात्मक पहचान कोड दर्ज करें।` },
                rule: { en: "Double-check digits carefully; wrong characters cause verification failure.", hi: "अंकों की सावधानीपूर्वक जांच करें।" }
            };
        } else {
            return {
                cat: "Standard Application Field",
                title: { en: fieldName, hi: "फॉर्म फ़ील्ड" },
                exp: { en: `Provide the correct details requested under '${fieldName}' based on your official papers.`, hi: `अपने आधिकारिक कागजात के आधार पर '${fieldName}' के अंतर्गत सही विवरण दें।` },
                rule: { en: "Verify that spelling and data match your official ID proofs.", hi: "सत्यापित करें कि जानकारी आधिकारिक प्रमाण से मेल खाती है।" }
            };
        }
    }

    // --- STRICT LOCAL MATCHING ENGINE ---
    function getCleanFieldName(el) {
        const placeholder = (el.placeholder || '').toLowerCase();
        const name = (el.name || '').toLowerCase();
        const id = (el.id || '').toLowerCase();
        
        let labelText = "";
        if (el.id) {
            const explicitLabel = document.querySelector(`label[for="${el.id}"]`);
            if (explicitLabel) labelText = explicitLabel.innerText.toLowerCase();
        }
        if (!labelText && el.parentElement && el.parentElement.tagName === 'LABEL') {
            labelText = el.parentElement.innerText.toLowerCase();
        }

        const combined = `${placeholder} ${name} ${id} ${labelText}`;

        // Direct isolated checks to prevent cross-field bleeding
        if (combined.includes('pin') || combined.includes('password') || combined.includes('captcha') || el.type === 'password') {
            return MASTER_DICTIONARY['security_pin'];
        }
        if (combined.includes('mobile') || combined.includes('phone') || el.type === 'tel') {
            if (combined.includes('alt') || combined.includes('emergency') || combined.includes('secondary')) {
                return MASTER_DICTIONARY['alt_mobile'];
            }
            return MASTER_DICTIONARY['mobile'];
        }
        if (combined.includes('email') || combined.includes('mail') || el.type === 'email') {
            if (combined.includes('alt') || combined.includes('secondary')) {
                return MASTER_DICTIONARY['alt_email'];
            }
            return MASTER_DICTIONARY['email'];
        }
        if (combined.includes('dob') || combined.includes('birth') || (combined.includes('date') && combined.includes('get'))) {
            return MASTER_DICTIONARY['date_of_birth'];
        }
        if (combined.includes('hobby') || combined.includes('hobbies') || combined.includes('interest') || combined.includes('extracurricular') || combined.includes('co-curricular')) {
            return MASTER_DICTIONARY['hobbies_interests'];
        }
        if (combined.includes('subject') || combined.includes('math') || combined.includes('chem') || combined.includes('phys') || combined.includes('bio') || combined.includes('science')) {
            return MASTER_DICTIONARY['subjects_studied'];
        }

        // Exact key matching in master dictionary
        for (const key in MASTER_DICTIONARY) {
            if (combined.includes(key.replace('_', ' '))) {
                return MASTER_DICTIONARY[key];
            }
        }

        // Fallback cleanup of dollar symbols ($)
        let cleanName = el.placeholder || el.name || "Form Field";
        if (cleanName.includes('$') || cleanName.length > 30) cleanName = "Input Field";

        return getSmartFallback(cleanName);
    }

    let activeData = null;

    function updateUI() {
        if (!activeData) return;
        shadow.getElementById('f-cat').innerText = activeData.cat;
        shadow.getElementById('f-title').innerText = activeData.title[currentLang] || activeData.title['en'];
        shadow.getElementById('t-exp').innerText = activeData.exp[currentLang] || activeData.exp['en'];
        shadow.getElementById('t-rule').innerText = activeData.rule[currentLang] || activeData.rule['en'];
    }

    document.addEventListener('focusin', (e) => {
        if (e.target.matches('input, select, textarea')) {
            activeData = getCleanFieldName(e.target);
            updateUI();
        }
    });

    // Check active element immediately upon page load (fixes initial focus issue)
    setTimeout(() => {
        const activeEl = document.activeElement;
        if (activeEl && activeEl.matches('input, select, textarea')) {
            activeData = getCleanFieldName(activeEl);
            updateUI();
        }
    }, 300);

    shadow.getElementById('lang').addEventListener('change', (e) => {
        currentLang = e.target.value;
        if (activeData) updateUI();
    });
})();