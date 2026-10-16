// Module ID: 13303
// Function ID: 13304
// Name: CreateGuildIcons
// Dependencies: [12894, 12898, 12896, 12897, 12899, 12900, 12895, 13304, 13307, 13311, 13315, 13319, 13323, 13327, 2]

// Module 13303 (CreateGuildIcons)
import AssetRegistryDefault from "AssetRegistry" /* 12894 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 12895 */;
import AssetRegistryDefault3 from "AssetRegistry" /* 12896 */;
import AssetRegistryDefault4 from "AssetRegistry" /* 12897 */;
import AssetRegistryDefault5 from "AssetRegistry" /* 12898 */;
import AssetRegistryDefault6 from "AssetRegistry" /* 12899 */;
import AssetRegistryDefault7 from "AssetRegistry" /* 12900 */;
import PencilIllocon from "PencilIllocon" /* 13304 */;
import ControllerIllocon from "ControllerIllocon" /* 13307 */;
import HeartIllocon from "HeartIllocon" /* 13311 */;
import AppleIllocon from "AppleIllocon" /* 13315 */;
import BookIllocon from "BookIllocon" /* 13319 */;
import PaintIllocon from "PaintIllocon" /* 13323 */;
import LeafIllocon from "LeafIllocon" /* 13327 */;
import size from "module_2" /* 2 */;

const obj = { CREATE: AssetRegistryDefault, GAMING: AssetRegistryDefault5, FRIENDS: AssetRegistryDefault3, STUDY: AssetRegistryDefault4, CLUBS: AssetRegistryDefault6, CREATORS: AssetRegistryDefault7, LOCAL_COMMUNITY: AssetRegistryDefault2, SCHOOL_CLUB: AssetRegistryDefault6 };
const obj2 = { CREATE: PencilIllocon.PencilIllocon, GAMING: ControllerIllocon.ControllerIllocon, FRIENDS: HeartIllocon.HeartIllocon, STUDY: AppleIllocon.AppleIllocon, CLUBS: BookIllocon.BookIllocon, CREATORS: PaintIllocon.PaintIllocon, LOCAL_COMMUNITY: LeafIllocon.LeafIllocon, SCHOOL_CLUB: BookIllocon.BookIllocon };
const result = size.fileFinishedImporting("modules/create_guild/native/CreateGuildIcons.tsx");

export const GUILD_TEMPLATE_ICONS = obj;
export const GUILD_TEMPLATE_ICON_COMPONENTS = obj2;
