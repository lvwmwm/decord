// Module ID: 13377
// Function ID: 13378
// Name: CreateGuildIcons
// Dependencies: [12970, 12974, 12972, 12973, 12975, 12976, 12971, 13378, 13381, 13385, 13389, 13393, 13397, 13401, 2]

// Module 13377 (CreateGuildIcons)
import AssetRegistryDefault from "AssetRegistry" /* 12970 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 12971 */;
import AssetRegistryDefault3 from "AssetRegistry" /* 12972 */;
import AssetRegistryDefault4 from "AssetRegistry" /* 12973 */;
import AssetRegistryDefault5 from "AssetRegistry" /* 12974 */;
import AssetRegistryDefault6 from "AssetRegistry" /* 12975 */;
import AssetRegistryDefault7 from "AssetRegistry" /* 12976 */;
import PencilIllocon from "PencilIllocon" /* 13378 */;
import ControllerIllocon from "ControllerIllocon" /* 13381 */;
import HeartIllocon from "HeartIllocon" /* 13385 */;
import AppleIllocon from "AppleIllocon" /* 13389 */;
import BookIllocon from "BookIllocon" /* 13393 */;
import PaintIllocon from "PaintIllocon" /* 13397 */;
import LeafIllocon from "LeafIllocon" /* 13401 */;
import size from "module_2" /* 2 */;

const obj = { CREATE: AssetRegistryDefault, GAMING: AssetRegistryDefault5, FRIENDS: AssetRegistryDefault3, STUDY: AssetRegistryDefault4, CLUBS: AssetRegistryDefault6, CREATORS: AssetRegistryDefault7, LOCAL_COMMUNITY: AssetRegistryDefault2, SCHOOL_CLUB: AssetRegistryDefault6 };
const obj2 = { CREATE: PencilIllocon.PencilIllocon, GAMING: ControllerIllocon.ControllerIllocon, FRIENDS: HeartIllocon.HeartIllocon, STUDY: AppleIllocon.AppleIllocon, CLUBS: BookIllocon.BookIllocon, CREATORS: PaintIllocon.PaintIllocon, LOCAL_COMMUNITY: LeafIllocon.LeafIllocon, SCHOOL_CLUB: BookIllocon.BookIllocon };
const result = size.fileFinishedImporting("modules/create_guild/native/CreateGuildIcons.tsx");

export const GUILD_TEMPLATE_ICONS = obj;
export const GUILD_TEMPLATE_ICON_COMPONENTS = obj2;
