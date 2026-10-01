// Module ID: 12208
// Function ID: 12209
// Name: CreateGuildIcons
// Dependencies: [11809, 11813, 11811, 11812, 11814, 11815, 11810, 12209, 12210, 12212, 12214, 12216, 12218, 12220, 2]

// Module 12208 (CreateGuildIcons)
import AssetRegistryDefault from "AssetRegistry" /* 11809 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 11810 */;
import AssetRegistryDefault3 from "AssetRegistry" /* 11811 */;
import AssetRegistryDefault4 from "AssetRegistry" /* 11812 */;
import AssetRegistryDefault5 from "AssetRegistry" /* 11813 */;
import AssetRegistryDefault6 from "AssetRegistry" /* 11814 */;
import AssetRegistryDefault7 from "AssetRegistry" /* 11815 */;
import PencilIllocon from "PencilIllocon" /* 12209 */;
import ControllerIllocon from "ControllerIllocon" /* 12210 */;
import HeartIllocon from "HeartIllocon" /* 12212 */;
import AppleIllocon from "AppleIllocon" /* 12214 */;
import BookIllocon from "BookIllocon" /* 12216 */;
import PaintIllocon from "PaintIllocon" /* 12218 */;
import LeafIllocon from "LeafIllocon" /* 12220 */;
import size from "module_2" /* 2 */;

const obj = { CREATE: AssetRegistryDefault, GAMING: AssetRegistryDefault5, FRIENDS: AssetRegistryDefault3, STUDY: AssetRegistryDefault4, CLUBS: AssetRegistryDefault6, CREATORS: AssetRegistryDefault7, LOCAL_COMMUNITY: AssetRegistryDefault2, SCHOOL_CLUB: AssetRegistryDefault6 };
const obj2 = { CREATE: PencilIllocon.PencilIllocon, GAMING: ControllerIllocon.ControllerIllocon, FRIENDS: HeartIllocon.HeartIllocon, STUDY: AppleIllocon.AppleIllocon, CLUBS: BookIllocon.BookIllocon, CREATORS: PaintIllocon.PaintIllocon, LOCAL_COMMUNITY: LeafIllocon.LeafIllocon, SCHOOL_CLUB: BookIllocon.BookIllocon };
const result = size.fileFinishedImporting("modules/create_guild/native/CreateGuildIcons.tsx");

export const GUILD_TEMPLATE_ICONS = obj;
export const GUILD_TEMPLATE_ICON_COMPONENTS = obj2;
