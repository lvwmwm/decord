// Module ID: 12147
// Function ID: 12148
// Name: GUILD_TEMPLATE_ICONS
// Dependencies: [11773, 11777, 11775, 11776, 11778, 11779, 11774, 6091, 2]

// Module 12147 (GUILD_TEMPLATE_ICONS)
let obj = { CREATE: require("registerAsset"), GAMING: require("registerAsset"), FRIENDS: require("registerAsset"), STUDY: require("registerAsset"), CLUBS: require("registerAsset"), CREATORS: require("registerAsset"), LOCAL_COMMUNITY: require("registerAsset"), SCHOOL_CLUB: require("registerAsset") };
obj = { CREATE: require("AccountAgeTier10LargeBadge").PencilIllocon, GAMING: require("AccountAgeTier10LargeBadge").ControllerIllocon, FRIENDS: require("AccountAgeTier10LargeBadge").HeartIllocon, STUDY: require("AccountAgeTier10LargeBadge").AppleIllocon, CLUBS: require("AccountAgeTier10LargeBadge").BookIllocon, CREATORS: require("AccountAgeTier10LargeBadge").PaintIllocon, LOCAL_COMMUNITY: require("AccountAgeTier10LargeBadge").LeafIllocon, SCHOOL_CLUB: require("AccountAgeTier10LargeBadge").BookIllocon };
const result = require("registerAsset").fileFinishedImporting("modules/create_guild/native/CreateGuildIcons.tsx");

export const GUILD_TEMPLATE_ICONS = obj;
export const GUILD_TEMPLATE_ICON_COMPONENTS = obj;
