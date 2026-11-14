// Module ID: 15029
// Function ID: 15030
// Name: CreateGuildIcons
// Dependencies: [14723, 14727, 14725, 14726, 14728, 14729, 14724, 15030, 15033, 15037, 15041, 15045, 15049, 15053, 2]

// Module 15029 (CreateGuildIcons)
import AssetRegistryDefault from "AssetRegistry" /* 14723 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 14724 */;
import AssetRegistryDefault3 from "AssetRegistry" /* 14725 */;
import AssetRegistryDefault4 from "AssetRegistry" /* 14726 */;
import AssetRegistryDefault5 from "AssetRegistry" /* 14727 */;
import AssetRegistryDefault6 from "AssetRegistry" /* 14728 */;
import AssetRegistryDefault7 from "AssetRegistry" /* 14729 */;
import PencilIllocon from "PencilIllocon" /* 15030 */;
import ControllerIllocon from "ControllerIllocon" /* 15033 */;
import HeartIllocon from "HeartIllocon" /* 15037 */;
import AppleIllocon from "AppleIllocon" /* 15041 */;
import BookIllocon from "BookIllocon" /* 15045 */;
import PaintIllocon from "PaintIllocon" /* 15049 */;
import LeafIllocon from "LeafIllocon" /* 15053 */;
import size from "module_2" /* 2 */;

const obj = { CREATE: AssetRegistryDefault, GAMING: AssetRegistryDefault5, FRIENDS: AssetRegistryDefault3, STUDY: AssetRegistryDefault4, CLUBS: AssetRegistryDefault6, CREATORS: AssetRegistryDefault7, LOCAL_COMMUNITY: AssetRegistryDefault2, SCHOOL_CLUB: AssetRegistryDefault6 };
const obj2 = { CREATE: PencilIllocon.PencilIllocon, GAMING: ControllerIllocon.ControllerIllocon, FRIENDS: HeartIllocon.HeartIllocon, STUDY: AppleIllocon.AppleIllocon, CLUBS: BookIllocon.BookIllocon, CREATORS: PaintIllocon.PaintIllocon, LOCAL_COMMUNITY: LeafIllocon.LeafIllocon, SCHOOL_CLUB: BookIllocon.BookIllocon };
const result = size.fileFinishedImporting("modules/create_guild/native/CreateGuildIcons.tsx");

export const GUILD_TEMPLATE_ICONS = obj;
export const GUILD_TEMPLATE_ICON_COMPONENTS = obj2;
