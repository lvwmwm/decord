// Module ID: 13619
// Function ID: 13620
// Name: CreateGuildIcons
// Dependencies: [13182, 13186, 13184, 13185, 13187, 13188, 13183, 13620, 13623, 13627, 13631, 13635, 13639, 13643, 2]

// Module 13619 (CreateGuildIcons)
import AssetRegistryDefault from "AssetRegistry" /* 13182 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 13183 */;
import AssetRegistryDefault3 from "AssetRegistry" /* 13184 */;
import AssetRegistryDefault4 from "AssetRegistry" /* 13185 */;
import AssetRegistryDefault5 from "AssetRegistry" /* 13186 */;
import AssetRegistryDefault6 from "AssetRegistry" /* 13187 */;
import AssetRegistryDefault7 from "AssetRegistry" /* 13188 */;
import PencilIllocon from "PencilIllocon" /* 13620 */;
import ControllerIllocon from "ControllerIllocon" /* 13623 */;
import HeartIllocon from "HeartIllocon" /* 13627 */;
import AppleIllocon from "AppleIllocon" /* 13631 */;
import BookIllocon from "BookIllocon" /* 13635 */;
import PaintIllocon from "PaintIllocon" /* 13639 */;
import LeafIllocon from "LeafIllocon" /* 13643 */;
import size from "module_2" /* 2 */;

const obj = { CREATE: AssetRegistryDefault, GAMING: AssetRegistryDefault5, FRIENDS: AssetRegistryDefault3, STUDY: AssetRegistryDefault4, CLUBS: AssetRegistryDefault6, CREATORS: AssetRegistryDefault7, LOCAL_COMMUNITY: AssetRegistryDefault2, SCHOOL_CLUB: AssetRegistryDefault6 };
const obj2 = { CREATE: PencilIllocon.PencilIllocon, GAMING: ControllerIllocon.ControllerIllocon, FRIENDS: HeartIllocon.HeartIllocon, STUDY: AppleIllocon.AppleIllocon, CLUBS: BookIllocon.BookIllocon, CREATORS: PaintIllocon.PaintIllocon, LOCAL_COMMUNITY: LeafIllocon.LeafIllocon, SCHOOL_CLUB: BookIllocon.BookIllocon };
const result = size.fileFinishedImporting("modules/create_guild/native/CreateGuildIcons.tsx");

export const GUILD_TEMPLATE_ICONS = obj;
export const GUILD_TEMPLATE_ICON_COMPONENTS = obj2;
