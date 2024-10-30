import Image from "next/image";
import { LuArrowRight } from "react-icons/lu";
import dayjs from "dayjs";

const ResumePage = () => {
  const info = {
    name: "梁高菘",
    site: "ec50n9.github.io",
    email: "shelloworld@qq.com",
    phone: "13727809535",
    github: "https://github.com/ec50n9",
    wechat: "https://github.com/ec50n9",
    aboutMe:
      "一名拥有3年前端开发经验的全栈工程师，擅长 Vue 和 React 生态系统开发，对前端工程化和性能优化有实践经验。熟悉 Node.js 和 Java 后端开发，具备跨端开发经验。目前在深圳工作，热衷技术创新和工程效率提升。",
    highlights: [
      "3年前端开发经验，擅长 Vue2/3 和 React 技术栈，具备全栈开发能力",
      "熟悉前端工程化实践，包括 TypeScript、Vite、ESLint、CI/CD 等",
      "深入理解 Vue 生态系统，熟练运用 Vue-Router、Pinia、ElementUI 等核心库",
      "具备跨端开发经验，熟悉 Uni-app、微信小程序、H5 等多端适配开发",
      "掌握后端开发技术，熟练使用 Node.js(Express/Nest.js)、Java(SpringBoot) 进行服务端开发",
      "擅长性能优化，有丰富的大数据量场景优化经验",
      "熟悉主流数据库技术(MySQL/MongoDB/Redis)和应用场景",
      "具备桌面应用开发经验，熟悉 Electron/Tauri 跨平台开发",
      "具有团队协作精神，善于技术方案设计与项目架构",
    ],
    education: [
      {
        school: "广东行政职业学院",
        degree: "软件技术",
        from: dayjs("2020-09-01").format("YYYY.MM"),
        to: dayjs("2023-06-01").format("YYYY.MM"),
        location: "广东省 · 广州市",
        activities:
          "担任计算机协会会长，负责组织协会活动，如技术讲座、程序设计比赛，协调会员之间的交流与合作，培养团队协作精神，提高协会在校园的知名度，为协会招募新成员。",
      },
    ],
    experience: [
      {
        company: "亚哲科技",
        role: "前端开发工程师",
        from: dayjs("2023-02").format("YYYY 年 MM 月"),
        to: dayjs("2024-06").format("YYYY 年 MM 月"),
        location: "广州市",
        tasks: [
          "主导驾校 SaaS 管理系统架构重构，将系统从 Unicloud+MongoDB 迁移至 Java+SpringBoot 架构，完成需求分析、数据库设计和技术选型工作，提升系统稳定性和可扩展性",
          "设计并实现高性能组件库，包含支持 H5/小程序的虚拟 Swiper 和虚拟列表等组件，解决大数据量渲染性能问题，提升用户体验",
          "参与支付系统开发，集成微信支付、分账等核心功能，并搭建 Serverless 自动化部署流程，实现 CI/CD",
          "设计实现基于 WebSocket 的实时通信架构，封装通用 Hooks，优化状态管理，显著提升代码可维护性",
          "负责智能客服系统开发，整合 ChatGPT API 和知识库系统，实现智能对话及自动问答功能，提升客服效率",
          "开发团队效率工具，如 Python 自动化脚本、数据转换工具等，提升团队研发效率30%以上",
        ],
      },
      {
        company: "深圳赛瑞斯汽车科技服务有限公司",
        role: "前端开发工程师",
        from: dayjs("2024-06").format("YYYY 年 MM 月"),
        to: dayjs("2024-11").format("YYYY 年 MM 月"),
        location: "深圳市",
        tasks: [
          "主导项目技术栈升级，将传统 HBuilder 项目重构为 Vue3 + Vite + TypeScript + UnoCSS 现代技术栈，提升开发效率",
          "设计并实现多个跨平台组件，例如封装文件上传、PDF 预览等高频组件，支持 H5/小程序/App 多端复用",
          "基于 Composition API 封装多个核心 Hooks：useRequest 统一请求层、usePageRequest 处理分页逻辑、useLocation 封装定位能力，显著降低代码重复率",
          "基于 UnoCSS 实现自适应安全区域方案，解决异形屏适配难题，支持 iPhone/Android 全面屏机型",
          "设计跨页面 Promise 通信方案，优化页面间数据流转，解决多层级页面间通信痛点",
          "推动项目工程化建设，引入 ESLint + Prettier + Husky 规范代码质量",
        ],
      },
    ],
    projects: [
      {
        name: "焕新保",
        role: "前端开发",
        from: dayjs("2020-06-01").format("YYYY 年 MM 月"),
        to: "至今",
        location: "广东省 · 广州市",
        tasks: [
          "完成前端项目的开发",
          "完成后端项目的开发",
          "完成数据分析项目的开发",
          "完成移动端项目的开发",
          "完成产品的设计和开发",
        ],
      },
    ],
  } as const;

  return (
    <div className="max-w-4xl mx-auto px-4 py-28 text-slate-700">
      {/* Header Section */}
      <header className="flex justify-between items-center mb-20">
        <div>
          <h1 className="text-3xl font-bold mb-2">{info.name}</h1>
          <div className="text-slate-500 space-x-2 tracking-wide">
            <span>{info.email}</span>
            <span>•</span>
            <span>{info.phone}</span>
            <span>•</span>
            <span>{info.site}</span>
          </div>
        </div>
        <div className="rounded-full bg-gray-100 overflow-hidden">
          <Image
            src="/avatar.png"
            alt="Profile"
            className="object-cover"
            width={64}
            height={64}
          />
        </div>
      </header>

      {/* Two Column Layout */}
      <div className="grid grid-cols-1 md:grid-cols-12">
        {/* Left Column */}
        <div className="md:col-span-5">
          {/* About Me Section */}
          <Module title="About Me">
            <p className="text-sm text-slate-700 tracking-wide leading-relaxed">
              {info.aboutMe}
            </p>
          </Module>

          {/* Highlights Section */}
          <Module title="Highlights">
            <ul className="space-y-2 marker:text-slate-300 text-sm text-slate-700 tracking-wide">
              {info.highlights.map((highlight) => (
                <li key={highlight} className="list-disc">
                  {highlight}
                </li>
              ))}
            </ul>
          </Module>

          {/* Education Section */}
          <Module title="Education">
            <div className="space-y-4">
              {info.education.map((school) => (
                <div key={school.school} className="mb-4">
                  <h3 className="font-semibold">
                    {school.school} · {school.degree}
                  </h3>
                  <p className="mt-1 text-sm text-slate-400">
                    {school.from} - {school.to} · {school.location}
                  </p>
                  <p className="mt-3 text-sm text-slate-700 tracking-wide leading-relaxed">
                    {school.activities}
                  </p>
                </div>
              ))}
            </div>
          </Module>

          {/* Social Media Section */}
          <Module title="Social Media" isLast>
            <div className="flex flex-col gap-2">
              <Link href={""}>GitHub</Link>
              <Link href={""}>公众号</Link>
              <Link href={""}>...</Link>
            </div>
          </Module>
        </div>

        {/* Right Column */}
        <div className="md:col-span-6 md:col-start-7">
          {/* Experience Section */}
          <Module title="Experience">
            <div className="space-y-6">
              {info.experience.map((job) => (
                <div key={job.company} className="mb-6">
                  <h3 className="font-semibold mb-1">
                    {job.company} · {job.role}
                  </h3>
                  <p className="mb-3 text-slate-400 text-sm">
                    {job.from} - {job.to} · {job.location}
                  </p>
                  <ul className="space-y-2 marker:text-slate-300 text-sm text-slate-700">
                    {job.tasks.map((task) => (
                      <li key={task} className="list-disc">
                        {task}
                      </li>
                    ))}
                  </ul>

                  <p className="mt-3">
                    <Link href={""}>Link</Link>
                  </p>
                </div>
              ))}
            </div>
          </Module>

          {/* Projects Section */}
          <Module title="Projects" isLast>
            <div className="space-y-6">
              {info.projects.map((project) => (
                <div key={project.name} className="mb-6">
                  <h3 className="font-semibold mb-1">
                    {project.name} · {project.role}
                  </h3>
                  <p className="mb-3 text-slate-400 text-sm">
                    {project.from} - {project.to} · {project.location}
                  </p>
                  <ul className="space-y-2 marker:text-slate-300 text-sm text-slate-700">
                    {project.tasks.map((task) => (
                      <li key={task} className="list-disc">
                        {task}
                      </li>
                    ))}
                  </ul>

                  <p className="mt-3">
                    <Link href={""}>Link</Link>
                  </p>
                </div>
              ))}
            </div>
          </Module>
        </div>
      </div>
    </div>
  );
};

type ModuleProps = {
  title: string;
  isLast?: boolean;
  children: React.ReactNode;
};

const Module = ({ title, isLast, children }: ModuleProps) => {
  return (
    <section className={!isLast ? "mb-8" : ""}>
      <h2 className="text-xl font-bold mb-4 pb-1 border-b border-b-slate-100">
        {title}
      </h2>
      {children}
    </section>
  );
};

type LinkProps = {
  href: string;
  children: React.ReactNode;
};

const Link = ({ href, children }: LinkProps) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1 text-sm text-blue-500 font-semibold underline underline-offset-2 decoration-1 hover:text-blue-400"
    >
      <LuArrowRight className="text-base" />
      {children}
    </a>
  );
};

export default ResumePage;
