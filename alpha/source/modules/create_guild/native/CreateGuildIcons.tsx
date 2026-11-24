// Module ID: 13531
// Function ID: 13532
// Name: CreateGuildIcons
// Dependencies: [13098, 13102, 13100, 13101, 13103, 13104, 13099, 13532, 13535, 13539, 13543, 13547, 13551, 13555, 2]

// Module 13531 (CreateGuildIcons)
import AssetRegistryDefault from "AssetRegistry" /* 13098 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 13099 */;
import AssetRegistryDefault3 from "AssetRegistry" /* 13100 */;
import AssetRegistryDefault4 from "AssetRegistry" /* 13101 */;
import AssetRegistryDefault5 from "AssetRegistry" /* 13102 */;
import AssetRegistryDefault6 from "AssetRegistry" /* 13103 */;
import AssetRegistryDefault7 from "AssetRegistry" /* 13104 */;
import PencilIllocon from "PencilIllocon" /* 13532 */;
import ControllerIllocon from "ControllerIllocon" /* 13535 */;
import HeartIllocon from "HeartIllocon" /* 13539 */;
import AppleIllocon from "AppleIllocon" /* 13543 */;
import BookIllocon from "BookIllocon" /* 13547 */;
import PaintIllocon from "PaintIllocon" /* 13551 */;
import LeafIllocon from "LeafIllocon" /* 13555 */;
import size from "module_2" /* 2 */;

const obj = { CREATE: AssetRegistryDefault, GAMING: AssetRegistryDefault5, FRIENDS: AssetRegistryDefault3, STUDY: AssetRegistryDefault4, CLUBS: AssetRegistryDefault6, CREATORS: AssetRegistryDefault7, LOCAL_COMMUNITY: AssetRegistryDefault2, SCHOOL_CLUB: AssetRegistryDefault6 };
const obj2 = { CREATE: PencilIllocon.PencilIllocon, GAMING: ControllerIllocon.ControllerIllocon, FRIENDS: HeartIllocon.HeartIllocon, STUDY: AppleIllocon.AppleIllocon, CLUBS: BookIllocon.BookIllocon, CREATORS: PaintIllocon.PaintIllocon, LOCAL_COMMUNITY: LeafIllocon.LeafIllocon, SCHOOL_CLUB: BookIllocon.BookIllocon };
const result = size.fileFinishedImporting("modules/create_guild/native/CreateGuildIcons.tsx");

export const GUILD_TEMPLATE_ICONS = obj;
export const GUILD_TEMPLATE_ICON_COMPONENTS = obj2;
