import { Github, Twitter } from "lucide-react"

export const defaultLanguage: string = "en"

export const common = {
  domain: "https://your-blog-domain.com",
  meta: {
    favicon: "/avatar.png",
    url: "https://your-blog-domain.com",
  },
  googleAnalyticsId: "",
  social: [
    {
      icon: Twitter,
      label: "X",
      link: "https://x.com/yourusername",
    },
    {
      icon: Github,
      label: "GitHub",
      link: "https://github.com/yourusername",
    },
  ],
  rss: true,
  navigation: {
    home: true,
    archive: true,
    custom: [],
    links: true,
    about: true,
  },
  latestPosts: 8,
  comments: {
    enabled: true,
    twikoo: {
      enabled: true,
      // replace with your own envId
      envId: import.meta.env.PUBLIC_TWIKOO_ENV_ID ?? "",
    },
  },
}

export const zh = {
  ...common,
  siteName: "小孙同学",
  meta: {
    ...common.meta,
    title: "小孙同学",
    slogan: "一个浪漫的理性主义者",
    description: "读书、摄影、编程、旅行",
  },
  navigation: {
    ...common.navigation,
    custom: [
      {
        label: "影集",
        link: "https://camlife.cn",
      },
    ],
  },
  pageMeta: {
    archive: {
      title: "归档",
      description: "小孙同学的所有文章",
      ogImage: "/images/page-meta/zh/archive.png",
    },
    links: {
      title: "朋友们",
      description: "小孙同学的和他朋友们",
      ogImage: "/images/page-meta/zh/links.png",
    },
    about: {
      title: "关于我",
      description: "小孙同学的自我介绍",
      ogImage: "/images/page-meta/zh/about.png",
    },
  },
}

export const en = {
  ...common,
  siteName: "My Blog",
  meta: {
    ...common.meta,
    title: "My Blog",
    slogan: "Welcome to my blog",
    description: "Thoughts, ideas, and stories",
  },
  navigation: {
    ...common.navigation,
    custom: [],
  },
  pageMeta: {
    archive: {
      title: "All Posts",
      description: "All blog posts and articles",
      ogImage: "/images/page-meta/en/archive.png",
    },
    links: {
      title: "Links",
      description: "Useful links and resources",
      ogImage: "/images/page-meta/en/links.png",
    },
    about: {
      title: "About",
      description: "Learn more about this blog",
      ogImage: "/images/page-meta/en/about.png",
    },
  },
}
