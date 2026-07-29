// Module ID: 11802
// Function ID: 11803
// Name: GUILD_TEMPLATE_ICONS
// Dependencies: [10078, 10082, 10080, 10081, 10083, 10084, 10079, 6785, 2]

// Module 11802 (GUILD_TEMPLATE_ICONS)
let obj = { CREATE: require("registerAsset"), GAMING: require("registerAsset"), FRIENDS: require("registerAsset"), STUDY: require("registerAsset"), CLUBS: require("registerAsset"), CREATORS: require("registerAsset"), LOCAL_COMMUNITY: require("registerAsset"), SCHOOL_CLUB: require("registerAsset") };
obj = { CREATE: require("AccountAgeTier10LargeBadge").PencilIllocon, GAMING: require("AccountAgeTier10LargeBadge").ControllerIllocon, FRIENDS: require("AccountAgeTier10LargeBadge").HeartIllocon, STUDY: require("AccountAgeTier10LargeBadge").AppleIllocon, CLUBS: require("AccountAgeTier10LargeBadge").BookIllocon, CREATORS: require("AccountAgeTier10LargeBadge").PaintIllocon, LOCAL_COMMUNITY: require("AccountAgeTier10LargeBadge").LeafIllocon, SCHOOL_CLUB: require("AccountAgeTier10LargeBadge").BookIllocon };
const result = require("registerAsset").fileFinishedImporting("modules/create_guild/native/CreateGuildIcons.tsx");

export const GUILD_TEMPLATE_ICONS = obj;
export const GUILD_TEMPLATE_ICON_COMPONENTS = obj;
