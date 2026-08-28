// Module ID: 12182
// Function ID: 12183
// Name: GUILD_TEMPLATE_ICONS
// Dependencies: [11829, 11833, 11831, 11832, 11834, 11835, 11830, 6221, 2]

// Module 12182 (GUILD_TEMPLATE_ICONS)
import set from "set" /* 2 */;
import AccountAgeTier10LargeBadge from "AccountAgeTier10LargeBadge" /* 6221 */;
import registerAssetDefault from "registerAsset" /* 11829 */;
import registerAssetDefault2 from "registerAsset" /* 11830 */;
import registerAssetDefault3 from "registerAsset" /* 11831 */;
import registerAssetDefault4 from "registerAsset" /* 11832 */;
import registerAssetDefault5 from "registerAsset" /* 11833 */;
import registerAssetDefault6 from "registerAsset" /* 11834 */;
import registerAssetDefault7 from "registerAsset" /* 11835 */;

let obj = { CREATE: registerAssetDefault, GAMING: registerAssetDefault5, FRIENDS: registerAssetDefault3, STUDY: registerAssetDefault4, CLUBS: registerAssetDefault6, CREATORS: registerAssetDefault7, LOCAL_COMMUNITY: registerAssetDefault2, SCHOOL_CLUB: registerAssetDefault6 };
obj = { CREATE: AccountAgeTier10LargeBadge.PencilIllocon, GAMING: AccountAgeTier10LargeBadge.ControllerIllocon, FRIENDS: AccountAgeTier10LargeBadge.HeartIllocon, STUDY: AccountAgeTier10LargeBadge.AppleIllocon, CLUBS: AccountAgeTier10LargeBadge.BookIllocon, CREATORS: AccountAgeTier10LargeBadge.PaintIllocon, LOCAL_COMMUNITY: AccountAgeTier10LargeBadge.LeafIllocon, SCHOOL_CLUB: AccountAgeTier10LargeBadge.BookIllocon };
const result = set.fileFinishedImporting("modules/create_guild/native/CreateGuildIcons.tsx");

export const GUILD_TEMPLATE_ICONS = obj;
export const GUILD_TEMPLATE_ICON_COMPONENTS = obj;
