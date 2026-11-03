// Module ID: 14414
// Function ID: 14415
// Name: CreateGuildIcons
// Dependencies: [14005, 14009, 14007, 14008, 14010, 14011, 14006, 14415, 14418, 14422, 14426, 14430, 14434, 14438, 2]

// Module 14414 (CreateGuildIcons)
import AssetRegistryDefault from "AssetRegistry" /* 14005 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 14006 */;
import AssetRegistryDefault3 from "AssetRegistry" /* 14007 */;
import AssetRegistryDefault4 from "AssetRegistry" /* 14008 */;
import AssetRegistryDefault5 from "AssetRegistry" /* 14009 */;
import AssetRegistryDefault6 from "AssetRegistry" /* 14010 */;
import AssetRegistryDefault7 from "AssetRegistry" /* 14011 */;
import PencilIllocon from "PencilIllocon" /* 14415 */;
import ControllerIllocon from "ControllerIllocon" /* 14418 */;
import HeartIllocon from "HeartIllocon" /* 14422 */;
import AppleIllocon from "AppleIllocon" /* 14426 */;
import BookIllocon from "BookIllocon" /* 14430 */;
import PaintIllocon from "PaintIllocon" /* 14434 */;
import LeafIllocon from "LeafIllocon" /* 14438 */;
import size from "module_2" /* 2 */;

const obj = { CREATE: AssetRegistryDefault, GAMING: AssetRegistryDefault5, FRIENDS: AssetRegistryDefault3, STUDY: AssetRegistryDefault4, CLUBS: AssetRegistryDefault6, CREATORS: AssetRegistryDefault7, LOCAL_COMMUNITY: AssetRegistryDefault2, SCHOOL_CLUB: AssetRegistryDefault6 };
const obj2 = { CREATE: PencilIllocon.PencilIllocon, GAMING: ControllerIllocon.ControllerIllocon, FRIENDS: HeartIllocon.HeartIllocon, STUDY: AppleIllocon.AppleIllocon, CLUBS: BookIllocon.BookIllocon, CREATORS: PaintIllocon.PaintIllocon, LOCAL_COMMUNITY: LeafIllocon.LeafIllocon, SCHOOL_CLUB: BookIllocon.BookIllocon };
const result = size.fileFinishedImporting("modules/create_guild/native/CreateGuildIcons.tsx");

export const GUILD_TEMPLATE_ICONS = obj;
export const GUILD_TEMPLATE_ICON_COMPONENTS = obj2;
