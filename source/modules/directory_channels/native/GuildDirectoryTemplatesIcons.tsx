// Module ID: 11609
// Function ID: 11610
// Name: GUILD_TEMPLATE_ICONS
// Dependencies: [11610, 11611, 11612, 11613, 11614, 11615, 11616, 2]

// Module 11609 (GUILD_TEMPLATE_ICONS)
const obj = { CREATE: require("registerAsset"), HUB_SCHOOL_CLUB: require("registerAsset"), HUB_STUDY: require("registerAsset"), HUB_CLASS: require("registerAsset"), HUB_SOCIAL: require("registerAsset"), HUB_MAJOR: require("registerAsset"), HUB_DORM: require("registerAsset") };
const result = require("registerAsset").fileFinishedImporting("modules/directory_channels/native/GuildDirectoryTemplatesIcons.tsx");

export const GUILD_TEMPLATE_ICONS = obj;
