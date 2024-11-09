import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const github = {
    username: "RetendoNetwork",
    repo: "nintendo-wiki",
};

const config: Config = {
    title: "nintendo-wiki",
    tagline: "Nintendo Wiki Documentation",
    favicon: "img/favicon.ico",

    // GitHub Pages deployment configuration
    url: `https://${github.username.toLowerCase()}.github.io`,
    baseUrl: `/`,
    organizationName: github.username,
    projectName: github.repo,

    onBrokenLinks: "ignore",
    onBrokenMarkdownLinks: "warn",

    i18n: {
        defaultLocale: "en",
        locales: ["en"],
    },

    presets: [
        [
            "classic",
            {
                docs: {
                    routeBasePath: "/",
                    sidebarPath: "./sidebars.ts",
                    editUrl: `https://github.com/${github.username}/${github.repo}/tree/main/docs/`,
                },
                blog: false,
                pages: false,
                theme: {
                    customCss: "./src/css/custom.css",
                },
            } satisfies Preset.Options,
        ],
    ],

    themeConfig: {
        navbar: {
            title: "nintendo-wiki",
            logo: {
                alt: "Docusaurus Logo",
                src: "img/logo.svg",
            },
            items: [
                {
                    href: `https://github.com/${github.username}/${github.repo}`,
                    label: "GitHub",
                    position: "right",
                },
            ],
        },
        prism: {
            additionalLanguages: ["bash"],
            theme: prismThemes.github,
            darkTheme: prismThemes.dracula,
        },
    } satisfies Preset.ThemeConfig,
};

export default config;