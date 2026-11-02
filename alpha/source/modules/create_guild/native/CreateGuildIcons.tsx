// Module ID: 14283
// Function ID: 14284
// Name: CreateGuildIcons
// Dependencies: [13874, 13878, 13876, 13877, 13879, 13880, 13875, 14284, 14287, 14291, 14295, 14299, 14303, 14307, 2]

// Module 14283 (CreateGuildIcons)
import AssetRegistryDefault from "AssetRegistry" /* 13874 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 13875 */;
import AssetRegistryDefault3 from "AssetRegistry" /* 13876 */;
import AssetRegistryDefault4 from "AssetRegistry" /* 13877 */;
import AssetRegistryDefault5 from "AssetRegistry" /* 13878 */;
import AssetRegistryDefault6 from "AssetRegistry" /* 13879 */;
import AssetRegistryDefault7 from "AssetRegistry" /* 13880 */;
import PencilIllocon from "PencilIllocon" /* 14284 */;
import ControllerIllocon from "ControllerIllocon" /* 14287 */;
import HeartIllocon from "HeartIllocon" /* 14291 */;
import AppleIllocon from "AppleIllocon" /* 14295 */;
import BookIllocon from "BookIllocon" /* 14299 */;
import PaintIllocon from "PaintIllocon" /* 14303 */;
import LeafIllocon from "LeafIllocon" /* 14307 */;
import size from "module_2" /* 2 */;

const obj = { CREATE: AssetRegistryDefault, GAMING: AssetRegistryDefault5, FRIENDS: AssetRegistryDefault3, STUDY: AssetRegistryDefault4, CLUBS: AssetRegistryDefault6, CREATORS: AssetRegistryDefault7, LOCAL_COMMUNITY: AssetRegistryDefault2, SCHOOL_CLUB: AssetRegistryDefault6 };
const obj2 = { CREATE: PencilIllocon.PencilIllocon, GAMING: ControllerIllocon.ControllerIllocon, FRIENDS: HeartIllocon.HeartIllocon, STUDY: AppleIllocon.AppleIllocon, CLUBS: BookIllocon.BookIllocon, CREATORS: PaintIllocon.PaintIllocon, LOCAL_COMMUNITY: LeafIllocon.LeafIllocon, SCHOOL_CLUB: BookIllocon.BookIllocon };
const result = size.fileFinishedImporting("modules/create_guild/native/CreateGuildIcons.tsx");

export const GUILD_TEMPLATE_ICONS = obj;
export const GUILD_TEMPLATE_ICON_COMPONENTS = obj2;
