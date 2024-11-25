import { Skilldivider } from "../components/skilldivider";
import React, { useState } from "react";
import { Check, CheckBox, CheckBoxOutlineBlank } from "@mui/icons-material";
import { Skill } from "../components/skillcard";
import { motion } from "framer-motion";

const SkillPage = (props) => {
  const [showAll, setShowAll] = useState(false);
  const changeShow = () => setShowAll(!showAll);

  const { lang } = props;

  const enTitle = (
    <>
      <p className="text-gray-800 font-bold text-2xl md:text-4xl xl:text-7xl mb-4">
        My <span className="text-white">Skills</span>
      </p>
      <p className="text-white  text-lg md:text-xl xl:text-2xl mb-8">
        All of the programming language or other that I have learn or mastered.
      </p>
    </>
  );
  const idTitle = (
    <>
      <p className="text-gray-800 font-bold text-2xl md:text-4xl xl:text-7xl mb-4">
        <span className="text-white">Keahlian </span>Saya
      </p>
      <p className="text-white text-lg md:text-xl xl:text-2xl mb-8">
        Semua bahasa pemrograman yang sedang saya pelajari atau sudah saya
        kuasai
      </p>
    </>
  );
  return (
    <section className="h-lvh h-fit mb-48 sm:mb-0 md:h-full grid md:grid-cols-2"
    style={{
      background: "linear-gradient(to right,#A8E063, #56AB2F, #004E1A)", 
  }}>
      <div className="md:h-screen  justify-items-center items-center grid">
        <motion.div 
        initial={{opacity:0, y:-200}}
        whileInView={{opacity:1, y:0}}
        transition={{duration:1}}
        className="w-4/5 xl:w-1/2">
          {lang === "id" ? idTitle : enTitle}
        </motion.div>
      </div>
      <div className="h-auto  justify-items-center md:items-center grid">
        <div className=" 2xl:w-3/4 lg:w-full w-5/6 h-5/6 md:h-2/3">
          <div className="relative h-2/3 sm:h-3/4 lg:h-full">
            <div className="absolute w-full h-16 bg-gradient-to-b  top-0"></div>
            <div className="absolute w-full h-16 bg-gradient-to-t  bottom-0"></div>
            <motion.div 
            initial={{opacity:0, y:200}}
            whileInView={{opacity:1, y:0}}
            transition={{duration:1}}
              className="rounded-xl overflow-auto h-full bg-opacity-20 grid sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-3 content-center gap-6"
            style={{ height: '90%' }}>
            <Skilldivider title="Other"/>
              <Skill
                icon="https://img.icons8.com/ios-glyphs/30/github.png"
                title="Github"
              />
            <Skilldivider title="language" />
              <Skill
                icon="https://img.icons8.com/officel/160/php-logo.png"
                title="PHP"
              />
              <Skill
                icon="https://img.icons8.com/fluency/48/javascript.png"
                title="Javascript"
              />
              <Skill
                icon="https://img.icons8.com/color/96/kotlin.png"
                title="Kotlin"
              />
              <Skilldivider title="framework" />
              <Skill
                icon="https://img.icons8.com/color/96/000000/react-native.png"
                title="React.js"
              />
              <Skill
                icon="https://laravel.com/img/logomark.min.svg"
                title="Laravel"
              />
              <Skill
                icon="https://img.icons8.com/color/96/vue-js.png"
                title="Vue.js"
              />
              <Skilldivider title="basic language" />
              <Skill
                icon="https://img.icons8.com/color/96/html-5--v1.png"
                title="html"
              />
              <Skill
                icon="https://img.icons8.com/color/96/css3.png"
                title="css"
              />
              <Skill
                icon="https://img.icons8.com/color/96/mysql-logo.png"
                title="mySql"
              />
                <Skilldivider title="IDE"/>
              <Skill
                icon="https://img.icons8.com/color/96/visual-studio-code-2019.png"
                title="VS Code"
              />
              <Skill
                icon="https://img.icons8.com/color/96/android-studio--v3.png"
                title="Android Studio"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillPage;
