// Module ID: 14508
// Function ID: 14509
// Name: CreateGuildIcons
// Dependencies: [14105, 14109, 14107, 14108, 14110, 14111, 14106, 14509, 14512, 14516, 14520, 14524, 14528, 14532, 2]

// Module 14508 (CreateGuildIcons)
import AssetRegistryDefault from "AssetRegistry" /* 14105 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 14106 */;
import AssetRegistryDefault3 from "AssetRegistry" /* 14107 */;
import AssetRegistryDefault4 from "AssetRegistry" /* 14108 */;
import AssetRegistryDefault5 from "AssetRegistry" /* 14109 */;
import AssetRegistryDefault6 from "AssetRegistry" /* 14110 */;
import AssetRegistryDefault7 from "AssetRegistry" /* 14111 */;
import PencilIllocon from "PencilIllocon" /* 14509 */;
import ControllerIllocon from "ControllerIllocon" /* 14512 */;
import HeartIllocon from "HeartIllocon" /* 14516 */;
import AppleIllocon from "AppleIllocon" /* 14520 */;
import BookIllocon from "BookIllocon" /* 14524 */;
import PaintIllocon from "PaintIllocon" /* 14528 */;
import LeafIllocon from "LeafIllocon" /* 14532 */;
import size from "module_2" /* 2 */;

const obj = { CREATE: AssetRegistryDefault, GAMING: AssetRegistryDefault5, FRIENDS: AssetRegistryDefault3, STUDY: AssetRegistryDefault4, CLUBS: AssetRegistryDefault6, CREATORS: AssetRegistryDefault7, LOCAL_COMMUNITY: AssetRegistryDefault2, SCHOOL_CLUB: AssetRegistryDefault6 };
const obj2 = { CREATE: PencilIllocon.PencilIllocon, GAMING: ControllerIllocon.ControllerIllocon, FRIENDS: HeartIllocon.HeartIllocon, STUDY: AppleIllocon.AppleIllocon, CLUBS: BookIllocon.BookIllocon, CREATORS: PaintIllocon.PaintIllocon, LOCAL_COMMUNITY: LeafIllocon.LeafIllocon, SCHOOL_CLUB: BookIllocon.BookIllocon };
const result = size.fileFinishedImporting("modules/create_guild/native/CreateGuildIcons.tsx");

export const GUILD_TEMPLATE_ICONS = obj;
export const GUILD_TEMPLATE_ICON_COMPONENTS = obj2;
