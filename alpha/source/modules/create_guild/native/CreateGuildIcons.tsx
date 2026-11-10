// Module ID: 14545
// Function ID: 14546
// Name: CreateGuildIcons
// Dependencies: [14134, 14138, 14136, 14137, 14139, 14140, 14135, 14546, 14549, 14553, 14557, 14561, 14565, 14569, 2]

// Module 14545 (CreateGuildIcons)
import AssetRegistryDefault from "AssetRegistry" /* 14134 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 14135 */;
import AssetRegistryDefault3 from "AssetRegistry" /* 14136 */;
import AssetRegistryDefault4 from "AssetRegistry" /* 14137 */;
import AssetRegistryDefault5 from "AssetRegistry" /* 14138 */;
import AssetRegistryDefault6 from "AssetRegistry" /* 14139 */;
import AssetRegistryDefault7 from "AssetRegistry" /* 14140 */;
import PencilIllocon from "PencilIllocon" /* 14546 */;
import ControllerIllocon from "ControllerIllocon" /* 14549 */;
import HeartIllocon from "HeartIllocon" /* 14553 */;
import AppleIllocon from "AppleIllocon" /* 14557 */;
import BookIllocon from "BookIllocon" /* 14561 */;
import PaintIllocon from "PaintIllocon" /* 14565 */;
import LeafIllocon from "LeafIllocon" /* 14569 */;
import size from "module_2" /* 2 */;

const obj = { CREATE: AssetRegistryDefault, GAMING: AssetRegistryDefault5, FRIENDS: AssetRegistryDefault3, STUDY: AssetRegistryDefault4, CLUBS: AssetRegistryDefault6, CREATORS: AssetRegistryDefault7, LOCAL_COMMUNITY: AssetRegistryDefault2, SCHOOL_CLUB: AssetRegistryDefault6 };
const obj2 = { CREATE: PencilIllocon.PencilIllocon, GAMING: ControllerIllocon.ControllerIllocon, FRIENDS: HeartIllocon.HeartIllocon, STUDY: AppleIllocon.AppleIllocon, CLUBS: BookIllocon.BookIllocon, CREATORS: PaintIllocon.PaintIllocon, LOCAL_COMMUNITY: LeafIllocon.LeafIllocon, SCHOOL_CLUB: BookIllocon.BookIllocon };
const result = size.fileFinishedImporting("modules/create_guild/native/CreateGuildIcons.tsx");

export const GUILD_TEMPLATE_ICONS = obj;
export const GUILD_TEMPLATE_ICON_COMPONENTS = obj2;
