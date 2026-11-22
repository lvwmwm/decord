// Module ID: 13617
// Function ID: 13618
// Name: CreateGuildIcons
// Dependencies: [13180, 13184, 13182, 13183, 13185, 13186, 13181, 13618, 13621, 13625, 13629, 13633, 13637, 13641, 2]

// Module 13617 (CreateGuildIcons)
import AssetRegistryDefault from "AssetRegistry" /* 13180 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 13181 */;
import AssetRegistryDefault3 from "AssetRegistry" /* 13182 */;
import AssetRegistryDefault4 from "AssetRegistry" /* 13183 */;
import AssetRegistryDefault5 from "AssetRegistry" /* 13184 */;
import AssetRegistryDefault6 from "AssetRegistry" /* 13185 */;
import AssetRegistryDefault7 from "AssetRegistry" /* 13186 */;
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
