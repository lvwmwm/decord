// Module ID: 10232
// Function ID: 10233
// Name: GUILD_TEMPLATE_ICONS
// Dependencies: [10233, 10234, 10235, 10236, 10237, 10238, 10239, 2]

// Module 10232 (GUILD_TEMPLATE_ICONS)
const obj = { CREATE: require("registerAsset"), HUB_SCHOOL_CLUB: require("registerAsset"), HUB_STUDY: require("registerAsset"), HUB_CLASS: require("registerAsset"), HUB_SOCIAL: require("registerAsset"), HUB_MAJOR: require("registerAsset"), HUB_DORM: require("registerAsset") };
const result = require("registerAsset").fileFinishedImporting("modules/directory_channels/native/GuildDirectoryTemplatesIcons.tsx");

export const GUILD_TEMPLATE_ICONS = obj;
