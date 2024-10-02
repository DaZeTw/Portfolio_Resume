"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { useSectionInView } from "@/lib/hooks";
import { useLocale, useTranslations } from "next-intl";

export default function About() {
  const { ref } = useSectionInView("About");
  const t = useTranslations("AboutSection");
  const sectionLan = useTranslations("SectionName");
  const activeLocale = useLocale();

  return (
    <motion.section
      ref={ref}
      className="mb-50 max-w-[45rem] text-start leading-8 sm:mb-40 scroll-mt-28 mb-28 "
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>{sectionLan("about")}</SectionHeading>
      {activeLocale == "zh" ? (
        // <p>{t("desc")}</p> //这样一段话没法分段
        <div className="flex flex-col gap-2">
          <div>我是一个喜欢学习、思考，有韧性的人。</div>
          <div>
            2019到2023年，我在珞珈山上的武汉大学度过了4个春夏秋冬。期间，我打开了前端开发的大门。先后在学校的大数据研究院和蔚来实习了半年。作为转码选手，我遇到了不少困难，也有过自我怀疑的时候。但回头看是什么让我坚持下来？我想是我享受自我提升，享受在团队中和大家打成一片，并肩作战的感觉。
          </div>
          <div>
            本科毕业后，我来到苏格兰的海边小镇🏴󠁧󠁢󠁳󠁣󠁴󠁿，在安静美丽的圣安德鲁斯大学度过了我人生中难忘的一段时光。
            在这里，我养成了规律运动和健康饮食的好习惯，也认识了许多志同道合的好朋友。我甚至在这儿的意大利餐馆当厨师，在Hotel做早餐服务员。
          </div>
          <div>
            当然，适应异国他乡的生活并不容易，但我锻炼了从逆境、矛盾、失败甚至是积极事件中恢复常态的能力。坚持、专注和自信，是我认为最重要的品质之一。
          </div>

          <div>
            目前，我在准备2025年秋招。同时在自己的
            <a
              className="underline"
              href="https://www.xiaohongshu.com/user/profile/5f603fb10000000001000c91?xhsshare=CopyLink&appuid=5f603fb10000000001000c91&apptime=1719567055"
              target="_blank"
            >
              小红书
            </a>
            、
            <a
              className="underline"
              href="https://blog-joy-peng.netlify.app/"
              target="_blank"
            >
              个人博客
            </a>
            和
            <a
              className="underline"
              href="https://space.bilibili.com/12324398"
              target="_blank"
            >
              b站
            </a>
            记录技术和生活。
          </div>
        </div>
      ) : (
        <>
          <p className="mb-3">
            My journey into programming began during my undergraduate studies in
            <span className="font-medium italic"> Data Science</span> at {}
            <span className="italic underline">
              <a href="https://en.hcmus.edu.vn/" target="_blank">
                University of Science.
              </a>
            </span>{" "}
            As a freshman, I developed a strong foundation in machine learning,
            data analysis, and software engineering, where I gained exposure to
            various programming languages and technologies. But what truly
            sparked my passion was my Introduction to Data Science class, where
            I discovered my passion for building predictive models, This
            experience opened my eyes to the charm of models development———
            <span className="font-medium italic">
              literally, models can significantly enhance decision-making.
            </span>
          </p>

          <p className="mb-3">
            I sharpened my software development skills through internships and
            fellowship at Internships at Extern and MarkovAI, and Fellowship at
            Headstarter. Working closely with developers, and product managers,
            I loved the buzz of a team pulling together to make our product
            better. And there’s nothing quite like the thrill of seeing my own
            code being used by thousands—it’s what solidified my decision to
            pursue a career in data science.
          </p>

          <p>
            In my spare time, I enjoy exploring new technologies and building
            interesting projects. And when I’m not at the computer, you’ll find
            me
            <span className="font-medium italic">
              {" "}
              catching a movie, or keeping fit with regular workouts.
            </span>
          </p>
        </>
      )}
    </motion.section>
  );
}
