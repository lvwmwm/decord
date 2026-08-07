// Module ID: 11999
// Function ID: 12000
// Name: GUILD_TEMPLATE_ICONS
// Dependencies: [11631, 11635, 11633, 11634, 11636, 11637, 11632, 5967, 2]

// Module 11999 (GUILD_TEMPLATE_ICONS)
let obj = { CREATE: require("registerAsset"), GAMING: require("registerAsset"), FRIENDS: require("registerAsset"), STUDY: require("registerAsset"), CLUBS: require("registerAsset"), CREATORS: require("registerAsset"), LOCAL_COMMUNITY: require("registerAsset"), SCHOOL_CLUB: require("registerAsset") };
obj = { CREATE: require("AccountAgeTier10LargeBadge").PencilIllocon, GAMING: require("AccountAgeTier10LargeBadge").ControllerIllocon, FRIENDS: require("AccountAgeTier10LargeBadge").HeartIllocon, STUDY: require("AccountAgeTier10LargeBadge").AppleIllocon, CLUBS: require("AccountAgeTier10LargeBadge").BookIllocon, CREATORS: require("AccountAgeTier10LargeBadge").PaintIllocon, LOCAL_COMMUNITY: require("AccountAgeTier10LargeBadge").LeafIllocon, SCHOOL_CLUB: require("AccountAgeTier10LargeBadge").BookIllocon };
const result = require("registerAsset").fileFinishedImporting("modules/create_guild/native/CreateGuildIcons.tsx");

export const GUILD_TEMPLATE_ICONS = obj;
export const GUILD_TEMPLATE_ICON_COMPONENTS = obj;
