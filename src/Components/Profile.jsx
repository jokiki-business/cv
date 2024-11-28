import { useEffect } from "react";
import pp from "../assets/pp.jpeg";
import AOS from 'aos';
import 'aos/dist/aos.css';

const CV = () => {
    useEffect(() => {
        AOS.init({
            duration: 1200,
            easing: 'ease-in-out',
            once: true,
        });

        return () => {
            AOS.refresh();
        };
    }, []);

    return (
        <div className="bg-gray-50 min-h-screen p-6 sm:p-10">
            <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-xl p-8 sm:p-12 hover:shadow-3xl transition duration-500 transform hover:scale-105">
                {/* Profile Header Section */}
                <div className="flex flex-col sm:flex-row items-center border-b-4 border-gray-300 pb-6 mb-8" data-aos="fade-up">
                    <img
                        src={pp}
                        alt="Reifal Albari Sopiyan, Web Developer"
                        className="h-40 w-40 rounded-full border-4 border-indigo-500 shadow-2xl transform transition duration-500 hover:scale-110 profile-picture"
                    />
                    <div className="sm:ml-8 mt-6 sm:mt-0 flex-1">
                        <h1 className="text-3xl font-semibold text-indigo-800">Reifal Albari Sopiyan</h1>
                        <p className="text-xl text-gray-700 mt-2">Front-end Developer | UI/UX Enthusiast</p>
                        <p className="mt-4 text-gray-600">I am passionate about creating visually appealing and user-friendly web experiences. My skills span across web development, design, and problem-solving, always focusing on delivering exceptional user interfaces.</p>
                    </div>
                    <div className="sm:ml-8 mt-6 sm:mt-0">
                        <h2 className="text-xl font-semibold text-indigo-700 mb-3">Contact</h2>
                        <div className="text-gray-700 space-y-2">
                            <p className="flex items-center">
                                <i className="fa-solid fa-phone text-green-500 mr-2"></i> +62 898-3737-592
                            </p>
                            <p className="flex items-center">
                                <i className="fa-solid fa-envelope text-red-500 mr-2"></i> reifalalbari@gmail.com
                            </p>
                            <p className="flex items-center">
                                <i className="fa-brands fa-github text-black mr-2"></i>
                                <a
                                    href="https://github.com/reifal-ui"
                                    target="_blank"
                                    className="text-blue-600 hover:underline"
                                    rel="noreferrer"
                                >
                                    github.com/reifal-ui
                                </a>
                            </p>
                            <p className="flex items-center">
                                <i className="fa-brands fa-instagram text-pink-500 mr-2"></i>
                                <a
                                    href="https://www.instagram.com/reifalalbari_"
                                    target="_blank"
                                    className="text-blue-600 hover:underline"
                                    rel="noreferrer"
                                >
                                    reifalalbari_
                                </a>
                            </p>
                        </div>
                    </div>
                </div>

                {/* Education Section */}
                <div className="mb-8" data-aos="fade-up">
                    <h2 className="text-2xl font-semibold text-indigo-700 mb-4">Education</h2>
                    <ul className="list-inside list-disc text-gray-700">
                        <li>
                            <strong>Vocational SMK PRAKARYA INTERNASIONAL High School</strong> (2023 - 2026)
                            <p className="mt-2 text-gray-600">Currently studying Software Development and Game Development. Gaining deep knowledge in web programming, game development, and database management.</p>
                        </li>
                    </ul>
                </div>

                {/* Projects Section */}
                <div className="mb-8" data-aos="fade-up">
                    <h2 className="text-2xl font-semibold text-indigo-700 mb-4">Projects</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="bg-indigo-50 p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
                            <h3 className="text-xl font-semibold text-indigo-800">Library Management System</h3>
                            <p className="mt-2 text-gray-600">Developed a web-based library application using PHP and MySQL, allowing real-time management of books, members, and transactions.</p>
                        </div>
                        <div className="bg-indigo-50 p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
                            <h3 className="text-xl font-semibold text-indigo-800">Student Registration System</h3>
                            <p className="mt-2 text-gray-600">Built a student registration system for a school, with features such as secure login, student data management, and email notifications.</p>
                        </div>
                        <div className="bg-indigo-50 p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
                            <h3 className="text-xl font-semibold text-indigo-800">React Digital Catalog</h3>
                            <p className="mt-2 text-gray-600">Developed a digital catalog using React.js and Tailwind CSS, featuring search, filtering, and mobile-responsive design for a better user experience.</p>
                        </div>
                        <div className="bg-indigo-50 p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
                            <h3 className="text-xl font-semibold text-indigo-800">To-do List Web App</h3>
                            <p className="mt-2 text-gray-600">Created a simple task management web app using vanilla JavaScript, focusing on intuitive user interface and functionality with local storage.</p>
                        </div>
                    </div>
                </div>

                {/* Skills Section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8">
                    <div className="flex-1" data-aos="fade-left">
                        <h2 className="text-2xl font-semibold text-indigo-700 mb-4">Technical Skills</h2>
                        <ul className="list-disc ml-6 text-gray-700">
                            <li>HTML, CSS, JavaScript</li>
                            <li>React.js & Next.js</li>
                            <li>PHP & Laravel</li>
                            <li>UI/UX Design (Figma, Adobe XD)</li>
                            <li>Version Control (Git, GitHub)</li>
                        </ul>
                    </div>
                    <div className="flex-1" data-aos="fade-right">
                        <h2 className="text-2xl font-semibold text-indigo-700 mb-4">Soft Skills</h2>
                        <ul className="list-disc ml-6 text-gray-700">
                            <li>Creative Problem Solving</li>
                            <li>Adaptability & Learning</li>
                            <li>Team Collaboration</li>
                            <li>Attention to Detail</li>
                            <li>Communication & Public Speaking</li>
                        </ul>
                    </div>
                </div>

                <hr className="border-t-2 border-gray-300 mb-8" />

                {/* Hobbies & Interests Section */}
                <div className="mb-8" data-aos="fade-up">
                    <h2 className="text-2xl font-semibold text-indigo-700 mb-4">Hobbies & Interests</h2>
                    <p className="text-gray-700">I have a deep interest in emerging technologies, web development trends, graphic design, and digital art. In my free time, I enjoy experimenting with new tech, reading books on personal development, and participating in design challenges.</p>
                </div>
            </div>
        </div>
    );
};

export default CV;
