// Module ID: 13527
// Function ID: 13528
// Name: CreateGuildIcons
// Dependencies: [13090, 13094, 13092, 13093, 13095, 13096, 13091, 13528, 13531, 13535, 13539, 13543, 13547, 13551, 2]

// Module 13527 (CreateGuildIcons)
import AssetRegistryDefault from "AssetRegistry" /* 13090 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 13091 */;
import AssetRegistryDefault3 from "AssetRegistry" /* 13092 */;
import AssetRegistryDefault4 from "AssetRegistry" /* 13093 */;
import AssetRegistryDefault5 from "AssetRegistry" /* 13094 */;
import AssetRegistryDefault6 from "AssetRegistry" /* 13095 */;
import AssetRegistryDefault7 from "AssetRegistry" /* 13096 */;
import PencilIllocon from "PencilIllocon" /* 13528 */;
import ControllerIllocon from "ControllerIllocon" /* 13531 */;
import HeartIllocon from "HeartIllocon" /* 13535 */;
import AppleIllocon from "AppleIllocon" /* 13539 */;
import BookIllocon from "BookIllocon" /* 13543 */;
import PaintIllocon from "PaintIllocon" /* 13547 */;
import LeafIllocon from "LeafIllocon" /* 13551 */;
import size from "module_2" /* 2 */;

const obj = { CREATE: AssetRegistryDefault, GAMING: AssetRegistryDefault5, FRIENDS: AssetRegistryDefault3, STUDY: AssetRegistryDefault4, CLUBS: AssetRegistryDefault6, CREATORS: AssetRegistryDefault7, LOCAL_COMMUNITY: AssetRegistryDefault2, SCHOOL_CLUB: AssetRegistryDefault6 };
const obj2 = { CREATE: PencilIllocon.PencilIllocon, GAMING: ControllerIllocon.ControllerIllocon, FRIENDS: HeartIllocon.HeartIllocon, STUDY: AppleIllocon.AppleIllocon, CLUBS: BookIllocon.BookIllocon, CREATORS: PaintIllocon.PaintIllocon, LOCAL_COMMUNITY: LeafIllocon.LeafIllocon, SCHOOL_CLUB: BookIllocon.BookIllocon };
const result = size.fileFinishedImporting("modules/create_guild/native/CreateGuildIcons.tsx");

export const GUILD_TEMPLATE_ICONS = obj;
export const GUILD_TEMPLATE_ICON_COMPONENTS = obj2;
