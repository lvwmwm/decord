// Module ID: 13620
// Function ID: 13621
// Name: CreateGuildIcons
// Dependencies: [13183, 13187, 13185, 13186, 13188, 13189, 13184, 13621, 13624, 13628, 13632, 13636, 13640, 13644, 2]

// Module 13620 (CreateGuildIcons)
import AssetRegistryDefault from "AssetRegistry" /* 13183 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 13184 */;
import AssetRegistryDefault3 from "AssetRegistry" /* 13185 */;
import AssetRegistryDefault4 from "AssetRegistry" /* 13186 */;
import AssetRegistryDefault5 from "AssetRegistry" /* 13187 */;
import AssetRegistryDefault6 from "AssetRegistry" /* 13188 */;
import AssetRegistryDefault7 from "AssetRegistry" /* 13189 */;
import PencilIllocon from "PencilIllocon" /* 13621 */;
import ControllerIllocon from "ControllerIllocon" /* 13624 */;
import HeartIllocon from "HeartIllocon" /* 13628 */;
import AppleIllocon from "AppleIllocon" /* 13632 */;
import BookIllocon from "BookIllocon" /* 13636 */;
import PaintIllocon from "PaintIllocon" /* 13640 */;
import LeafIllocon from "LeafIllocon" /* 13644 */;
import size from "module_2" /* 2 */;

const obj = { CREATE: AssetRegistryDefault, GAMING: AssetRegistryDefault5, FRIENDS: AssetRegistryDefault3, STUDY: AssetRegistryDefault4, CLUBS: AssetRegistryDefault6, CREATORS: AssetRegistryDefault7, LOCAL_COMMUNITY: AssetRegistryDefault2, SCHOOL_CLUB: AssetRegistryDefault6 };
const obj2 = { CREATE: PencilIllocon.PencilIllocon, GAMING: ControllerIllocon.ControllerIllocon, FRIENDS: HeartIllocon.HeartIllocon, STUDY: AppleIllocon.AppleIllocon, CLUBS: BookIllocon.BookIllocon, CREATORS: PaintIllocon.PaintIllocon, LOCAL_COMMUNITY: LeafIllocon.LeafIllocon, SCHOOL_CLUB: BookIllocon.BookIllocon };
const result = size.fileFinishedImporting("modules/create_guild/native/CreateGuildIcons.tsx");

export const GUILD_TEMPLATE_ICONS = obj;
export const GUILD_TEMPLATE_ICON_COMPONENTS = obj2;
