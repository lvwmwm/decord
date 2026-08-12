// Module ID: 11757
// Function ID: 11758
// Name: GUILD_TEMPLATE_ICONS
// Dependencies: [11758, 11759, 11760, 11761, 11762, 11763, 11764, 2]

// Module 11757 (GUILD_TEMPLATE_ICONS)
const obj = { CREATE: require("registerAsset"), HUB_SCHOOL_CLUB: require("registerAsset"), HUB_STUDY: require("registerAsset"), HUB_CLASS: require("registerAsset"), HUB_SOCIAL: require("registerAsset"), HUB_MAJOR: require("registerAsset"), HUB_DORM: require("registerAsset") };
const result = require("registerAsset").fileFinishedImporting("modules/directory_channels/native/GuildDirectoryTemplatesIcons.tsx");

export const GUILD_TEMPLATE_ICONS = obj;
