// Module ID: 14241
// Function ID: 14242
// Name: CreateGuildIcons
// Dependencies: [13801, 13805, 13803, 13804, 13806, 13807, 13802, 14242, 14245, 14249, 14253, 14257, 14261, 14265, 2]

// Module 14241 (CreateGuildIcons)
import AssetRegistryDefault from "AssetRegistry" /* 13801 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 13802 */;
import AssetRegistryDefault3 from "AssetRegistry" /* 13803 */;
import AssetRegistryDefault4 from "AssetRegistry" /* 13804 */;
import AssetRegistryDefault5 from "AssetRegistry" /* 13805 */;
import AssetRegistryDefault6 from "AssetRegistry" /* 13806 */;
import AssetRegistryDefault7 from "AssetRegistry" /* 13807 */;
import PencilIllocon from "PencilIllocon" /* 14242 */;
import ControllerIllocon from "ControllerIllocon" /* 14245 */;
import HeartIllocon from "HeartIllocon" /* 14249 */;
import AppleIllocon from "AppleIllocon" /* 14253 */;
import BookIllocon from "BookIllocon" /* 14257 */;
import PaintIllocon from "PaintIllocon" /* 14261 */;
import LeafIllocon from "LeafIllocon" /* 14265 */;
import size from "module_2" /* 2 */;

const obj = { CREATE: AssetRegistryDefault, GAMING: AssetRegistryDefault5, FRIENDS: AssetRegistryDefault3, STUDY: AssetRegistryDefault4, CLUBS: AssetRegistryDefault6, CREATORS: AssetRegistryDefault7, LOCAL_COMMUNITY: AssetRegistryDefault2, SCHOOL_CLUB: AssetRegistryDefault6 };
const obj2 = { CREATE: PencilIllocon.PencilIllocon, GAMING: ControllerIllocon.ControllerIllocon, FRIENDS: HeartIllocon.HeartIllocon, STUDY: AppleIllocon.AppleIllocon, CLUBS: BookIllocon.BookIllocon, CREATORS: PaintIllocon.PaintIllocon, LOCAL_COMMUNITY: LeafIllocon.LeafIllocon, SCHOOL_CLUB: BookIllocon.BookIllocon };
const result = size.fileFinishedImporting("modules/create_guild/native/CreateGuildIcons.tsx");

export const GUILD_TEMPLATE_ICONS = obj;
export const GUILD_TEMPLATE_ICON_COMPONENTS = obj2;
