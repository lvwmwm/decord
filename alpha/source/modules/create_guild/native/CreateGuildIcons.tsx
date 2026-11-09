// Module ID: 14519
// Function ID: 14520
// Name: CreateGuildIcons
// Dependencies: [14108, 14112, 14110, 14111, 14113, 14114, 14109, 14520, 14523, 14527, 14531, 14535, 14539, 14543, 2]

// Module 14519 (CreateGuildIcons)
import AssetRegistryDefault from "AssetRegistry" /* 14108 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 14109 */;
import AssetRegistryDefault3 from "AssetRegistry" /* 14110 */;
import AssetRegistryDefault4 from "AssetRegistry" /* 14111 */;
import AssetRegistryDefault5 from "AssetRegistry" /* 14112 */;
import AssetRegistryDefault6 from "AssetRegistry" /* 14113 */;
import AssetRegistryDefault7 from "AssetRegistry" /* 14114 */;
import PencilIllocon from "PencilIllocon" /* 14520 */;
import ControllerIllocon from "ControllerIllocon" /* 14523 */;
import HeartIllocon from "HeartIllocon" /* 14527 */;
import AppleIllocon from "AppleIllocon" /* 14531 */;
import BookIllocon from "BookIllocon" /* 14535 */;
import PaintIllocon from "PaintIllocon" /* 14539 */;
import LeafIllocon from "LeafIllocon" /* 14543 */;
import size from "module_2" /* 2 */;

const obj = { CREATE: AssetRegistryDefault, GAMING: AssetRegistryDefault5, FRIENDS: AssetRegistryDefault3, STUDY: AssetRegistryDefault4, CLUBS: AssetRegistryDefault6, CREATORS: AssetRegistryDefault7, LOCAL_COMMUNITY: AssetRegistryDefault2, SCHOOL_CLUB: AssetRegistryDefault6 };
const obj2 = { CREATE: PencilIllocon.PencilIllocon, GAMING: ControllerIllocon.ControllerIllocon, FRIENDS: HeartIllocon.HeartIllocon, STUDY: AppleIllocon.AppleIllocon, CLUBS: BookIllocon.BookIllocon, CREATORS: PaintIllocon.PaintIllocon, LOCAL_COMMUNITY: LeafIllocon.LeafIllocon, SCHOOL_CLUB: BookIllocon.BookIllocon };
const result = size.fileFinishedImporting("modules/create_guild/native/CreateGuildIcons.tsx");

export const GUILD_TEMPLATE_ICONS = obj;
export const GUILD_TEMPLATE_ICON_COMPONENTS = obj2;
