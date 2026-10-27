// Module ID: 13617
// Function ID: 13618
// Name: CreateGuildIcons
// Dependencies: [13212, 13216, 13214, 13215, 13217, 13218, 13213, 13618, 13621, 13625, 13629, 13633, 13637, 13641, 2]

// Module 13617 (CreateGuildIcons)
import AssetRegistryDefault from "AssetRegistry" /* 13212 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 13213 */;
import AssetRegistryDefault3 from "AssetRegistry" /* 13214 */;
import AssetRegistryDefault4 from "AssetRegistry" /* 13215 */;
import AssetRegistryDefault5 from "AssetRegistry" /* 13216 */;
import AssetRegistryDefault6 from "AssetRegistry" /* 13217 */;
import AssetRegistryDefault7 from "AssetRegistry" /* 13218 */;
import PencilIllocon from "PencilIllocon" /* 13618 */;
import ControllerIllocon from "ControllerIllocon" /* 13621 */;
import HeartIllocon from "HeartIllocon" /* 13625 */;
import AppleIllocon from "AppleIllocon" /* 13629 */;
import BookIllocon from "BookIllocon" /* 13633 */;
import PaintIllocon from "PaintIllocon" /* 13637 */;
import LeafIllocon from "LeafIllocon" /* 13641 */;
import size from "module_2" /* 2 */;

const obj = { CREATE: AssetRegistryDefault, GAMING: AssetRegistryDefault5, FRIENDS: AssetRegistryDefault3, STUDY: AssetRegistryDefault4, CLUBS: AssetRegistryDefault6, CREATORS: AssetRegistryDefault7, LOCAL_COMMUNITY: AssetRegistryDefault2, SCHOOL_CLUB: AssetRegistryDefault6 };
const obj2 = { CREATE: PencilIllocon.PencilIllocon, GAMING: ControllerIllocon.ControllerIllocon, FRIENDS: HeartIllocon.HeartIllocon, STUDY: AppleIllocon.AppleIllocon, CLUBS: BookIllocon.BookIllocon, CREATORS: PaintIllocon.PaintIllocon, LOCAL_COMMUNITY: LeafIllocon.LeafIllocon, SCHOOL_CLUB: BookIllocon.BookIllocon };
const result = size.fileFinishedImporting("modules/create_guild/native/CreateGuildIcons.tsx");

export const GUILD_TEMPLATE_ICONS = obj;
export const GUILD_TEMPLATE_ICON_COMPONENTS = obj2;
