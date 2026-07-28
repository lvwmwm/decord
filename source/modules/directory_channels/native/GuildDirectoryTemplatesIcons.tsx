// Module ID: 10056
// Function ID: 77638
// Name: GUILD_TEMPLATE_ICONS
// Dependencies: [10057, 10058, 10059, 10060, 10061, 10062, 10063, 2]

// Module 10056 (GUILD_TEMPLATE_ICONS)
const obj = { CREATE: require("registerAsset"), HUB_SCHOOL_CLUB: require("registerAsset"), HUB_STUDY: require("registerAsset"), HUB_CLASS: require("registerAsset"), HUB_SOCIAL: require("registerAsset"), HUB_MAJOR: require("registerAsset"), HUB_DORM: require("registerAsset") };
const result = require("registerAsset").fileFinishedImporting("modules/directory_channels/native/GuildDirectoryTemplatesIcons.tsx");

export const GUILD_TEMPLATE_ICONS = obj;
