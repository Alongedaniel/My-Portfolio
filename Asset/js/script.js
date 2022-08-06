<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./Asset/Scss/style.css">
    <title>Alonge Daniel | Portfolio</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
        integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g=="
        crossorigin="anonymous" referrerpolicy="no-referrer" />
</head>

<body onscroll="myFunction()">

    <!--          preloader start      -->

    <div class="loader-style">
        <div class="loader2">
            <div class="circle1"></div>
            <div class="circle2"></div>
            <div class="circle3"></div>
            <div class="circle4"></div>
            <div class="circle5"></div>
        </div>
        <strong class="strong">Loading...</strong>
    </div>

    <!--         preloader end      -->




    <!-- --------------- PAGE HEADER -------------------- -->



    <nav class="navbar">
        <div class="my-title">
            <i class="fa-solid fa-code code-icon"></i>
            <h1><a href="./index.html" class="nav-link logo">Dlonge</a></h1>
        </div>
        <ul class="nav-links">
            <li> <a class="nav-link" href="./index.html">Home</a></li>
            <li><a class="nav-link" href="#myskills">My Skills</a> </li>
            <li><a class="nav-link" href="#my-projects">Projects</a> </li>
            <li><a href="#about" class="nav-link">About</a> </li>
            <li><a class="nav-link" href="#contact">Contact Me</a> </li>
        </ul>
        <i class="fa-solid fa-lightbulb theme-changer"></i>
        <audio controls class="audio" src="./Asset/Images/mixkit-single-classic-click-1116.wav"></audio>
    </nav>
    <header class="page-header">
        <div class="page-intro">
            <h2 class="introduction">Hello, I'm</h2>
            <h1 class="my-name">Alonge Daniel</h1>
            <br>
            <p class="intro-title">AND THIS IS MY PORTFOLIO</p>
        </div>
    </header>



    <!-- --------------- PAGE HEADER END --------------------  -->

    <!-- --------------------- Mobile navbar ------------------- -->


    <ul class="mobile-nav-links">
        <li> <a class="mobile-nav-link" href="./index.html">Home</a></li>
        <li><a class="mobile-nav-link" href="#myskills">My Skills</a> </li>
        <li><a class="mobile-nav-link" href="#my-projects">Projects</a> </li>
        <li><a href="#about" class="mobile-nav-link">About</a> </li>
        <li><a class="mobile-nav-link" href="#contact">Contact Me</a> </li>
    </ul>




    <!-- --------------------- Mobile navbar end ------------------- -->


    <!-- ---------------- My Skills ------------------ -->


    <section id="myskills">
        <h1 class="myskills-header">My Skills</h1>
        <br>
        <br>
        <div class="skill-list">
            <h1 class="skill-list-header">Skills</h1>
            <br>
            <div class="skill-in">
                <div class="skill">
                    <h1 class="skill-header">Web Development</h1>
                    <progress value="80" max="100" class="skill-level"></progress>
                </div>
                <div class="skill">
                    <h1 class="skill-header">Mobile App Development</h1>
                    <progress value="50" max="100" class="skill-level"></progress>
                </div>
                <div class="skill">
                    <h1 class="skill-header">Responsive Web Design</h1>
                    <progress value="80" max="100" class="skill-level"></progress>
                </div>
            </div>

        </div>
        <br>
        <br>
        <br>
        <div class="skill-list">
            <h1 class="skill-list-header">Languages</h1>
            <br>
            <br>
            <div class="language-icons">
                <div class="language-icon">
                    <div class="icon-cont">
                        <i class="fa-brands fa-html5 icon icon-html"></i>
                        <h1 class="language-name">Html</h1>
                        <div class="line-change html-circle"></div>
                    </div>
                </div>
                <div class="language-icon">
                    <div class="language-icon">
                        <div class="icon-cont">
                            <i class="fa-brands fa-css3 icon icon-css"></i>
                            <h1 class="language-name">Css</h1>
                            <div class="line-change css-circle"></div>
                        </div>
                    </div>
                </div>
                <div class="language-icon">
                    <div class="icon-cont">
                        <i class="fa-brands fa-js icon icon-js"></i>
                        <h1 class="language-name">Javascript</h1>
                        <div class="line-change js-circle"></div>
                    </div>
                </div>
            </div>
            <br>
            <br>
            <h1 class="skill-list-header">Frameworks and Libraries</h1>
            <br>
            <br>
            <div class="language-icons">
                <div class="language-icon">
                    <div class="language-icon">
                        <div class="icon-cont">
                            <i class="fa-brands fa-git-alt icon icon-git"></i>
                            <h1 class="language-name">Git</h1>
                            <div class="line-change css-circle"></div>
                        </div>
                    </div>
                </div>
                <div class="language-icon">
                    <div class="icon-cont">
                        <i class="fa-brands fa-sass icon icon-sass"></i>
                        <h1 class="language-name">Sass</h1>
                        <div class="line-change js-circle"></div>
                    </div>
                </div>
                <div class="language-icon">
                    <div class="icon-cont">
                        <i class="fa-brands fa-react icon icon-react"></i>
                        <h1 class="language-name">React</h1>
                        <div class="line-change html-circle"></div>
                    </div>
                </div>
            </div>
        </div>
    </section>



    <!-- --------------- My Skill End ----------------- -->



    <!-- --------------My Projects ------------------ -->


    <section id="my-projects">
        <h1 class="project-header">My Projects</h1>
        <br>
        <ul class="project-sort-list">
            <li class="project-sort for-all">All</li>
            <li class="project-sort for-web">Web</li>
            <li class="project-sort for-app">Apps</li>
        </ul>
        <br>
        <div class="projects-list">
            <div class="projects web">
                <div class="image">
                    <img src="./Asset/Images/Screenshot (45).png" alt="Traveline" class="project-image">
                    <div class="image-overlay"></div>
                </div>
                <h1 class="project-name">My Portfolio</h1>
                <div class="project-cta">
                    <a href="http://alongedaniel.netlify.app/" target="_blank"><button class="view"><i
                                class="fa-solid fa-eye"></i> Demo</button></a>
                    <a href="https://github.com/Alongedaniel/My-Portfolio" target="_blank"><button class="code"><i
                                class="fa-solid fa-code"></i> Code</button></a>
                </div>
                <p class="tools">Tools: Html, Css, Sass, Javascript</p>
            </div>
            <div class="projects web">
                <div class="image">
                    <img src="./Asset/Images/Group 5452.png" alt="Traveline" class="project-image">
                    <div class="image-overlay"></div>
                </div>
                <h1 class="project-name">Traveline</h1>
                <div class="project-cta">
                    <a href="http://traveline-project.netlify.app/" target="_blank"><button class="view"><i
                                class="fa-solid fa-eye"></i> Demo</button></a>
                    <a href="https://github.com/Alongedaniel/Travelline" target="_blank"><button class="code"><i
                                class="fa-solid fa-code"></i> Code</button></a>
                </div>
                <p class="tools">Tools: Html, Css, Sass, Javascript</p>
            </div>
            <div class="projects web">
                <div class="image">
                    <img src="./Asset/Images/trafalgar.png" alt="trafalgar" class="project-image">
                    <div class="image-overlay"></div>
                </div>
                <h1 class="project-name">Trafalgar</h1>
                <div class="project-cta">
                    <a href="https://mytrafalgarproject.netlify.app/" target="_blank"><button class="view"><i
                                class="fa-solid fa-eye"></i> Demo</button></a>
                    <a href="https://github.com/Alongedaniel/Trafalgar" target="_blank"><button class="code"><i
                                class="fa-solid fa-code"></i> Code</button></a>
                </div>
                <p class="tools">Tools: Html, Css, Sass, Javascript</p>
            </div>
            <div class="projects web">
                <div class="image">
                    <img src="./Asset/Images/logoipsum.png" alt="logoipsum" class="project-image">
                    <div class="image-overlay"></div>
                </div>
                <h1 class="project-name">Logoipsum</h1>
                <div class="project-cta">
                    <a href="https://logoipsumproject.netlify.app" target="_blank"><button class="view"><i
                                class="fa-solid fa-eye"></i> Demo</button></a>
                    <a href="https://github.com/Alongedaniel/Logoipsum" target="_blank"><button class="code"><i
                                class="fa-solid fa-code"></i> Code</button></a>
                </div>
                <p class="tools">Tools: Html, Css, Sass, Javascript</p>
            </div>
            <div class="projects app">
                <div class="image">
                    <img src="./Asset/Images/calc.png" alt="calculator" class="project-image">
                    <div class="image-overlay"></div>
                </div>
                <h1 class="project-name">Calculator</h1>
                <div class="project-cta">
                    <a href="https://danielscalculator.netlify.app/" target="_blank"><button class="view"><i
                                class="fa-solid fa-eye"></i> Demo</button></a>
                    <a href="https://github.com/Alongedaniel/Calculator" target="_blank"><button class="code"><i
                                class="fa-solid fa-code"></i> Code</button></a>
                </div>
                <p class="tools">Tools: Html, Css, Sass, Javascript</p>
            </div>
            <div class="projects app">
                <div class="image">
                    <img src="./Asset/Images/dashboard.png" alt="admin-dashboard" class="project-image">
                    <div class="image-overlay"></div>
                </div>
                <h1 class="project-name">Admin Dashboard</h1>
                <div class="project-cta">
                    <a href="https://dlonge-admindashboard.netlify.app/" target="_blank"><button class="view"><i
                                class="fa-solid fa-eye"></i> Demo</button></a>
                    <a href="https://github.com/Alongedaniel/Admin-Dashboard" target="_blank"><button class="code"><i
                                class="fa-solid fa-code"></i> Code</button></a>
                </div>
                <p class="tools">Tools: Html, Css, Sass, Javascript</p>
            </div>
            <div class="projects web">
                <div class="image">
                    <img src="./Asset/Images/sendpay.png" alt="sendpay" class="project-image">
                    <div class="image-overlay"></div>
                </div>
                <h1 class="project-name">Sendpay</h1>
                <div class="project-cta">
                    <a href="https://sendpay.netlify.app/" target="_blank"><button class="view"><i
                                class="fa-solid fa-eye"></i> Demo</button></a>
                    <a href="https://github.com/Alongedaniel/sendpay" target="_blank"><button class="code"><i
                                class="fa-solid fa-code"></i> Code</button></a>
                </div>
                <p class="tools">Tools: Html, Css, Sass, Javascript</p>
            </div>
            <div class="projects app">
                <div class="image">
                    <img src="./Asset/Images/pingpong.png" alt="pingpong" class="project-image">
                    <div class="image-overlay"></div>
                </div>
                <h1 class="project-name">Ping-Pong</h1>
                <div class="project-cta">
                    <a href="https://playping-pong.netlify.app/" target="_blank"><button class="view"><i
                                class="fa-solid fa-eye"></i> Demo</button></a>
                    <a href="https://github.com/Alongedaniel/ping-pong" target="_blank"><button class="code"><i
                                class="fa-solid fa-code"></i> Code</button></a>
                </div>
                <p class="tools">Tools: Html, Css, Sass, Javascript</p>
            </div>
        </div>
    </section>


    <!-- -------------------My Projects End ---------------- -->




    <!-- --------------- About Me --------------------  -->


    <sectiion id="about">
        <img src="./Asset/Images/IMG_0472-1.JPG" alt="" class="my-image">
        <div class="about-text">
            <h1 class="about-title">About Me</h1>
            <div class="line"></div>
            <p class="about-me">I'm a web developer. I work with HTML, CSS, and Javascript. I spend my time
                experimenting with a lot of useful information. I build websites and i'm very good at it.
                <br>
                <br>
                I enjoy working on projects that challenge me to learn something new. My <a href="#my-projects"
                    class="link-to-projects">list of projects </a>will give you an idea of the type of tools i use.
                <br>
                <br>
                If you'll like to work on a project with me, just hit me up and lets get down to business.
            </p>
            <div class="about-cta">
                <a href=""><button class="hire-me">Hire Me</button></a>
                <a href="#contact"><button class="contact-me">Contact Me</button></a>
            </div>
        </div>
    </sectiion>

    <!-- --------------------- About end ------------------- -->



    <!-- ------------------ Contact start ------------------- -->
    <section id="contact">
        <h1 class="contact-header">Contact Me</h1>
        <div class="communications">
            <div class="form-container">
                <h1 class="get-in-touch">Get In Touch</h1>
                <form class="contact-form" action="https://formspree.io/f/xrgdzyeq" target="_blank" method="POST">
                    <input type="name" name="From" class="form-input" placeholder="Your Name" required />
                    <input class="form-input" type="email" name="Reply-to" placeholder="Email Address" required />
                    <textarea name="message" name="message" placeholder="Your Message" class="form-input" cols="7"
                        rows="10"></textarea>
                    <input class="send-btn" type="submit" value="Send">
                </form>
            </div>
            <div class="details-container">
                <h1 class="details-header">My Contact Details</h1>
                <div>
                    <h2 class="detail-item">Email</h2>
                    <p class="detail-value">alongedamiel41@gmail.com</p>
                </div>
                <br>
                <div>
                    <h2 class="detail-item">Phone</h2>
                    <a class="detail-value" href="">
                        <p>08055133931</p>
                    </a>
                </div>
                <br>
                <div>
                    <h2 class="detail-item">Address</h2>
                    <p class="detail-value">No. 1, Grace Ave. Close E Uncle T, Ibafo</p>
                </div>
                <br>
                <br>
                <div class="socials">
                    <a href="https://github.com/Alongedaniel" target="_blank" class="github-hover">
                        <div class="social-container">
                            <div class="background github"></div>
                            <i class="fa-brands fa-github social github"></i>
                        </div>
                    </a>
                    <a href="https://www.linkedin.com/in/alonge-daniel-b2a646231/" target="_blank">
                        <div class="social-container linkedin-hover">
                            <div class="background linkedin"></div>
                            <i class="fa-brands fa-linkedin social linkedin"></i>
                        </div>
                    </a>
                    <a href="https://www.instagram.com/_dlonge/?hl=en" target="_blank">
                        <div class="social-container instagram-hover">
                            <div class="background instagram"></div>
                            <i class="fa-brands fa-instagram social instagram"></i>
                        </div>
                    </a>
                    <a href="https://twitter.com/Niel60616232" target="_blank">
                        <div class="social-container twitter-hover">
                            <div class="background twitter"></div>
                            <i class="fa-brands fa-twitter social twitter"></i>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </section>

    <!-- ------------------Contact end ---------------------- -->

    <div class="bottom-note">Copyright © 2022 All rights reserved | Created by Alonge Daniel(dlonge)</div>





    <script src="./Asset/js/script.js"></script>
</body>

</html>