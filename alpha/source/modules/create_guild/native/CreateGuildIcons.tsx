// Module ID: 13551
// Function ID: 13552
// Name: CreateGuildIcons
// Dependencies: [13145, 13149, 13147, 13148, 13150, 13151, 13146, 13552, 13555, 13559, 13563, 13567, 13571, 13575, 2]

// Module 13551 (CreateGuildIcons)
import AssetRegistryDefault from "AssetRegistry" /* 13145 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 13146 */;
import AssetRegistryDefault3 from "AssetRegistry" /* 13147 */;
import AssetRegistryDefault4 from "AssetRegistry" /* 13148 */;
import AssetRegistryDefault5 from "AssetRegistry" /* 13149 */;
import AssetRegistryDefault6 from "AssetRegistry" /* 13150 */;
import AssetRegistryDefault7 from "AssetRegistry" /* 13151 */;
import PencilIllocon from "PencilIllocon" /* 13552 */;
import ControllerIllocon from "ControllerIllocon" /* 13555 */;
import HeartIllocon from "HeartIllocon" /* 13559 */;
import AppleIllocon from "AppleIllocon" /* 13563 */;
import BookIllocon from "BookIllocon" /* 13567 */;
import PaintIllocon from "PaintIllocon" /* 13571 */;
import LeafIllocon from "LeafIllocon" /* 13575 */;
import size from "module_2" /* 2 */;

const obj = { CREATE: AssetRegistryDefault, GAMING: AssetRegistryDefault5, FRIENDS: AssetRegistryDefault3, STUDY: AssetRegistryDefault4, CLUBS: AssetRegistryDefault6, CREATORS: AssetRegistryDefault7, LOCAL_COMMUNITY: AssetRegistryDefault2, SCHOOL_CLUB: AssetRegistryDefault6 };
const obj2 = { CREATE: PencilIllocon.PencilIllocon, GAMING: ControllerIllocon.ControllerIllocon, FRIENDS: HeartIllocon.HeartIllocon, STUDY: AppleIllocon.AppleIllocon, CLUBS: BookIllocon.BookIllocon, CREATORS: PaintIllocon.PaintIllocon, LOCAL_COMMUNITY: LeafIllocon.LeafIllocon, SCHOOL_CLUB: BookIllocon.BookIllocon };
const result = size.fileFinishedImporting("modules/create_guild/native/CreateGuildIcons.tsx");

export const GUILD_TEMPLATE_ICONS = obj;
export const GUILD_TEMPLATE_ICON_COMPONENTS = obj2;
