/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Mitsuki from "../assets/mitsuki.png";
import Mitsuki1 from "../assets/mitsuki1.jpg";
import { Skill } from "../components/skillcard";
import { Skilldivider } from "../components/skilldivider";
import { motion } from "framer-motion";

const Landing = (props) => {
    const { lang } = props;
    const [showAll, setShowAll] = useState(false);

    const toggleShowAll = () => setShowAll(!showAll);

    const year = new Date().getFullYear();
    const n = lang === "id" ? "Aku" : "I'm";
    const d = lang === "id" ? "Hanya Seorang Manusia Biasa" : "Just an Ordinary Person";

    return (
        <>
            {/* Home Section */}
            <section
                className="md:h-screen md:p-8 grid md:grid-cols-2 top-0"
                style={{
                    background: "radial-gradient(circle,#A8E063, #56AB2F, #004E1A)",
                }}
            >
                <div className="grid content-center h-fit md:h-full">
                    <div className="text-start justify-self-center text-lg md:text-2xl p-8 md:p-0 md:w-2/3">
                        <motion.p
                            initial={{ opacity: 0, y: 100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="text-blue-400 font-medium uppercase tracking-widest text-start md:text-start"
                        >
                            {lang === "id" && "o"}
                        </motion.p>
                        <motion.p
                            initial={{ opacity: 0, y: 150 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.75 }}
                            className="text-yellow-200 font-bold text-4xl lg:text-7xl mb-4"
                        >
                            {n}{" "}
                            <span className="text-gray-800">
                                Juki <span className=" text-nowrap">Sufail</span>
                            </span>
                        </motion.p>
                        <motion.p
                            initial={{ opacity: 0, y: 200 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                            className="text-yellow-200 font-medium text-md lg:text-2xl mb-8"
                        >
                            {d}.
                        </motion.p>
                    </div>
                </div>
                <div className="grid content-center">
                    <motion.img
                        initial={{ opacity: 0, x: 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                        src={Mitsuki}
                        style={{ scale: "0.7" }}
                    />
                </div>
            </section>

            {/* Project Section */}
            <section
                className="h-full md:p-8 pb-8 overflow-x-hidden"
                style={{
                    background: "radial-gradient(circle,#A8E063, #56AB2F, #004E1A)",
                }}
            >
                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    className="p-8 pt-16 md:pt-8 h-1/5 grid content-center"
                >
                    <p className="text-gray-800 text-2xl md:text-5xl mb-3 font-bold uppercase">
                        {lang === "id" ? "Projek Saya" : "My Projects"}
                    </p>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    className="relative h-3/4 sm:h-4/5 rounded-xl"
                >
                    <div className="h-full flex gap-10 p-10 overflow-x-scroll">
                        <p className="text-8xl text-yellow-200">Masih Kosong Bjir</p>
                    </div>
                </motion.div>
            </section>

            {/* Skill Section */}
            <section
                className="h-lvh h-fit mb-48 sm:mb-0 md:h-full grid md:grid-cols-2"
                style={{
                    background: "radial-gradient(circle,#A8E063, #56AB2F, #004E1A)",
                }}
            >
                <div className="md:h-screen grid justify-items-center items-center">
                    <motion.div
                        initial={{ opacity: 0, y: -200 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="w-4/5 xl:w-1/2"
                    >
                        <p className="text-gray-800 font-bold text-2xl md:text-4xl xl:text-7xl mb-4">
                            {lang === "id" ? "Keahlian Saya" : "My Skills"}
                        </p>
                    </motion.div>
                </div>
                <div className="h-auto grid justify-items-center md:items-center">
                    <Skilldivider title="language" />
                    <Skill icon="https://img.icons8.com/officel/160/php-logo.png" title="PHP" />
                    <Skill icon="https://img.icons8.com/fluency/48/javascript.png" title="Javascript" />
                </div>
            </section>

            {/* About Section */}
            <section
                className="lg:h-auto mb-20 grid lg:grid-cols-2 lg:p-8"
                style={{
                    background: "radial-gradient(circle,#A8E063, #56AB2F, #004E1A)",
                }}
            >
                <div className="flex justify-center items-center">
                    <div
                        className="xl:w-3/5 shadow-xl rounded-xl bg-no-repeat bg-center bg-cover"
                        style={{ backgroundImage: `url(${Mitsuki1})` }}
                    ></div>
                </div>
                <div className="grid">
                    <p className="text-yellow-200 text-2xl lg:text-5xl font-bold mt-3">
                        {lang === "id" ? "Tentang Saya" : "About Me"}
                    </p>
                    <p className="font-bold uppercase tracking-widest text-black text-xs lg:text-md">
                        Juki Sufail
                    </p>
                </div>
            </section>
        </>
    );
};

export default Landing;
