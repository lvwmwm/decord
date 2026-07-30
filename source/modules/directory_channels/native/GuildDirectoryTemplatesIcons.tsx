// Module ID: 10073
// Function ID: 10074
// Name: GUILD_TEMPLATE_ICONS
// Dependencies: [10074, 10075, 10076, 10077, 10078, 10079, 10080, 2]

// Module 10073 (GUILD_TEMPLATE_ICONS)
const obj = { CREATE: require("registerAsset"), HUB_SCHOOL_CLUB: require("registerAsset"), HUB_STUDY: require("registerAsset"), HUB_CLASS: require("registerAsset"), HUB_SOCIAL: require("registerAsset"), HUB_MAJOR: require("registerAsset"), HUB_DORM: require("registerAsset") };
const result = require("registerAsset").fileFinishedImporting("modules/directory_channels/native/GuildDirectoryTemplatesIcons.tsx");

export const GUILD_TEMPLATE_ICONS = obj;
