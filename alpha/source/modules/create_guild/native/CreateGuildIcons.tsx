// Module ID: 14494
// Function ID: 14495
// Name: CreateGuildIcons
// Dependencies: [14091, 14095, 14093, 14094, 14096, 14097, 14092, 14495, 14498, 14502, 14506, 14510, 14514, 14518, 2]

// Module 14494 (CreateGuildIcons)
import AssetRegistryDefault from "AssetRegistry" /* 14091 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 14092 */;
import AssetRegistryDefault3 from "AssetRegistry" /* 14093 */;
import AssetRegistryDefault4 from "AssetRegistry" /* 14094 */;
import AssetRegistryDefault5 from "AssetRegistry" /* 14095 */;
import AssetRegistryDefault6 from "AssetRegistry" /* 14096 */;
import AssetRegistryDefault7 from "AssetRegistry" /* 14097 */;
import PencilIllocon from "PencilIllocon" /* 14495 */;
import ControllerIllocon from "ControllerIllocon" /* 14498 */;
import HeartIllocon from "HeartIllocon" /* 14502 */;
import AppleIllocon from "AppleIllocon" /* 14506 */;
import BookIllocon from "BookIllocon" /* 14510 */;
import PaintIllocon from "PaintIllocon" /* 14514 */;
import LeafIllocon from "LeafIllocon" /* 14518 */;
import size from "module_2" /* 2 */;

const obj = { CREATE: AssetRegistryDefault, GAMING: AssetRegistryDefault5, FRIENDS: AssetRegistryDefault3, STUDY: AssetRegistryDefault4, CLUBS: AssetRegistryDefault6, CREATORS: AssetRegistryDefault7, LOCAL_COMMUNITY: AssetRegistryDefault2, SCHOOL_CLUB: AssetRegistryDefault6 };
const obj2 = { CREATE: PencilIllocon.PencilIllocon, GAMING: ControllerIllocon.ControllerIllocon, FRIENDS: HeartIllocon.HeartIllocon, STUDY: AppleIllocon.AppleIllocon, CLUBS: BookIllocon.BookIllocon, CREATORS: PaintIllocon.PaintIllocon, LOCAL_COMMUNITY: LeafIllocon.LeafIllocon, SCHOOL_CLUB: BookIllocon.BookIllocon };
const result = size.fileFinishedImporting("modules/create_guild/native/CreateGuildIcons.tsx");

export const GUILD_TEMPLATE_ICONS = obj;
export const GUILD_TEMPLATE_ICON_COMPONENTS = obj2;
