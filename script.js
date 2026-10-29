document.addEventListener("DOMContentLoaded", function () {

    console.log("Civic_Care AI website loaded successfully.");


    // =========================================
    // NAVIGATION ACTIVE LINK
    // =========================================

    const navLinks = document.querySelectorAll(".nav-links a");

    navLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            navLinks.forEach(function (item) {
                item.classList.remove("active");
            });

            this.classList.add("active");
        });

    });


    // =========================================
    // SMOOTH SCROLL
    // =========================================

    const internalLinks = document.querySelectorAll('a[href^="#"]');

    internalLinks.forEach(function (link) {

        link.addEventListener("click", function (event) {

            const targetId = this.getAttribute("href");

            if (targetId === "#") return;

            const targetSection = document.querySelector(targetId);

            if (targetSection) {

                event.preventDefault();

                targetSection.scrollIntoView({
                    behavior: "smooth"
                });

            }

        });

    });


    // =========================================
    // REPORT BUTTON
    // =========================================

    const reportButtons = document.querySelectorAll(
        'a[href="report.html"]'
    );

    reportButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            console.log("Opening Report Issue page.");

        });

    });


    // =========================================
    // TRACK BUTTON
    // =========================================

    const trackButtons = document.querySelectorAll(
        'a[href="track.html"]'
    );

    trackButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            console.log("Opening Track Complaint page.");

        });

    });


    // =========================================
    // SCROLL ANIMATION
    // =========================================

    const animatedElements = document.querySelectorAll(
        ".about-box, .step, .feature-card"
    );

    if (animatedElements.length > 0) {

        const observer = new IntersectionObserver(
            function (entries) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("show");

                    }

                });

            },
            {
                threshold: 0.15
            }
        );

        animatedElements.forEach(function (element) {

            observer.observe(element);

        });

    }


    // =========================================
    // LOGIN FORM
    // =========================================

    const loginForm = document.getElementById("loginForm");

    if (loginForm) {

        loginForm.addEventListener("submit", function (event) {

            event.preventDefault();

            const email =
                document.getElementById("email").value.trim();

            const password =
                document.getElementById("password").value;

            const emailPattern =
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


            if (!emailPattern.test(email)) {

                alert("Please enter a valid email address.");

                return;

            }


            if (password.length < 6) {

                alert(
                    "Password must contain at least 6 characters."
                );

                return;

            }


            alert(
                "Login details are valid!\n\n" +
                "Backend authentication will be connected later."
            );


            console.log("Email:", email);

            console.log("Login validation successful.");

        });

    }


    // =========================================
    // FORGOT PASSWORD
    // =========================================

    const forgotPassword =
        document.querySelector(".forgot-password");

    if (forgotPassword) {

        forgotPassword.addEventListener(
            "click",
            function (event) {

                event.preventDefault();

                alert(
                    "Password recovery will be available " +
                    "after connecting the Django backend."
                );

            }
        );

    }


    // =========================================
    // REGISTER FORM
    // =========================================

    const registerForm =
        document.getElementById("registerForm");

    if (registerForm) {

        registerForm.addEventListener(
            "submit",
            function (event) {

                event.preventDefault();


                const name =
                    document.getElementById("name").value.trim();

                const email =
                    document.getElementById(
                        "registerEmail"
                    ).value.trim();

                const phone =
                    document.getElementById(
                        "phone"
                    ).value.trim();

                const password =
                    document.getElementById(
                        "registerPassword"
                    ).value;

                const confirmPassword =
                    document.getElementById(
                        "confirmPassword"
                    ).value;

                const terms =
                    document.getElementById(
                        "terms"
                    ).checked;


                const emailPattern =
                    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

                const phonePattern =
                    /^[0-9]{10}$/;


                if (name.length < 3) {

                    alert(
                        "Please enter your full name."
                    );

                    return;

                }


                if (!emailPattern.test(email)) {

                    alert(
                        "Please enter a valid email address."
                    );

                    return;

                }


                if (!phonePattern.test(phone)) {

                    alert(
                        "Please enter a valid 10-digit phone number."
                    );

                    return;

                }


                if (password.length < 6) {

                    alert(
                        "Password must contain at least 6 characters."
                    );

                    return;

                }


                if (password !== confirmPassword) {

                    alert(
                        "Passwords do not match."
                    );

                    return;

                }


                if (!terms) {

                    alert(
                        "Please agree to the Terms & Conditions."
                    );

                    return;

                }


                alert(
                    "Registration successful! 🎉\n\n" +
                    "Your account will be created after " +
                    "connecting the Django backend."
                );


                console.log(
                    "Registration successful."
                );

                console.log("Name:", name);

                console.log("Email:", email);

                console.log("Phone:", phone);

            }
        );

    }


    // =========================================
    // REPORT FORM
    // =========================================

    const reportForm =
        document.getElementById("reportForm");

    if (reportForm) {

        const issueImage =
            document.getElementById("issueImage");

        const imagePreviewContainer =
            document.getElementById(
                "imagePreviewContainer"
            );

        const imagePreview =
            document.getElementById("imagePreview");


        // IMAGE PREVIEW

        if (issueImage) {

            issueImage.addEventListener(
                "change",
                function () {

                    const file = this.files[0];


                    if (!file) {

                        imagePreviewContainer.classList.remove(
                            "show"
                        );

                        imagePreview.src = "";

                        return;

                    }


                    if (!file.type.startsWith("image/")) {

                        alert(
                            "Please upload an image file."
                        );

                        this.value = "";

                        imagePreviewContainer.classList.remove(
                            "show"
                        );

                        return;

                    }


                    if (file.size > 5 * 1024 * 1024) {

                        alert(
                            "Image size should be less than 5 MB."
                        );

                        this.value = "";

                        imagePreviewContainer.classList.remove(
                            "show"
                        );

                        return;

                    }


                    const reader =
                        new FileReader();


                    reader.onload =
                        function (event) {

                            imagePreview.src =
                                event.target.result;

                            imagePreviewContainer.classList.add(
                                "show"
                            );

                        };


                    reader.readAsDataURL(file);

                }
            );

        }


        // REPORT VALIDATION

        reportForm.addEventListener(
            "submit",
            function (event) {

                event.preventDefault();


                const title =
                    document.getElementById(
                        "issueTitle"
                    ).value.trim();

                const category =
                    document.getElementById(
                        "issueCategory"
                    ).value;

                const image =
                    document.getElementById(
                        "issueImage"
                    ).files[0];

                const location =
                    document.getElementById(
                        "location"
                    ).value.trim();

                const description =
                    document.getElementById(
                        "description"
                    ).value.trim();


                if (title.length < 5) {

                    alert(
                        "Please enter a proper issue title."
                    );

                    return;

                }


                if (!category) {

                    alert(
                        "Please select an issue category."
                    );

                    return;

                }


                if (!image) {

                    alert(
                        "Please upload a photo of the issue."
                    );

                    return;

                }


                if (location.length < 3) {

                    alert(
                        "Please enter the issue location."
                    );

                    return;

                }


                if (description.length < 10) {

                    alert(
                        "Please provide a little more detail about the issue."
                    );

                    return;

                }


                alert(
                    "Complaint submitted successfully! 🎉\n\n" +
                    "AI detection and authority routing will be " +
                    "connected with the Django backend."
                );


                console.log(
                    "Complaint Title:",
                    title
                );

                console.log(
                    "Category:",
                    category
                );

                console.log(
                    "Location:",
                    location
                );

                console.log(
                    "Description:",
                    description
                );

                console.log(
                    "Image:",
                    image.name
                );

            }
        );

    }


    // =========================================
    // TRACK COMPLAINT
    // =========================================

    const trackForm =
        document.getElementById("trackForm");


    if (trackForm) {

        const trackResult =
            document.getElementById("trackResult");

        const resultComplaintId =
            document.getElementById(
                "resultComplaintId"
            );

        const resultStatus =
            document.getElementById(
                "resultStatus"
            );

        const resultIssue =
            document.getElementById(
                "resultIssue"
            );

        const resultCategory =
            document.getElementById(
                "resultCategory"
            );

        const resultLocation =
            document.getElementById(
                "resultLocation"
            );


        // HIDE RESULT INITIALLY

        if (trackResult) {

            trackResult.style.display = "none";

        }


        // SAMPLE COMPLAINT DATA

        const complaints = {

            "CL-0001": {

                issue:
                    "Large pothole near main road",

                category:
                    "Pothole",

                location:
                    "Main Road",

                status:
                    "Pending"

            }

        };


        // TRACK FORM SUBMIT

        trackForm.addEventListener(
            "submit",
            function (event) {

                event.preventDefault();


                const complaintId =
                    document.getElementById(
                        "complaintId"
                    ).value
                    .trim()
                    .toUpperCase();


                if (complaintId === "") {

                    alert(
                        "Please enter a complaint ID."
                    );

                    return;

                }


                if (!complaints[complaintId]) {

                    alert(
                        "Complaint not found.\n\n" +
                        "Please check your complaint ID."
                    );

                    if (trackResult) {

                        trackResult.style.display =
                            "none";

                    }

                    return;

                }


                const complaint =
                    complaints[complaintId];


                // DISPLAY DATA

                resultComplaintId.textContent =
                    complaintId;

                resultIssue.textContent =
                    complaint.issue;

                resultCategory.textContent =
                    complaint.category;

                resultLocation.textContent =
                    complaint.location;


                // STATUS

                resultStatus.textContent =
                    complaint.status;


                resultStatus.className =
                    "status-badge";


                if (complaint.status === "Pending") {

                    resultStatus.classList.add(
                        "pending"
                    );

                }
                else if (
                    complaint.status === "In Progress"
                ) {

                    resultStatus.classList.add(
                        "in-progress"
                    );

                }
                else if (
                    complaint.status === "Resolved"
                ) {

                    resultStatus.classList.add(
                        "resolved"
                    );

                }


                // SHOW RESULT

                if (trackResult) {

                    trackResult.style.display =
                        "block";

                }


                console.log(
                    "Complaint tracked:",
                    complaintId
                );

            }
        );

    }


    // =========================================
    // FOOTER YEAR
    // =========================================

    const footerText =
        document.querySelector(
            ".footer-bottom p"
        );


    if (footerText) {

        const currentYear =
            new Date().getFullYear();

        footerText.textContent =
            "© " +
            currentYear +
            " Civic_Care AI. Mini Project.";

    }

});

