// Module ID: 13648
// Function ID: 13649
// Name: CreateGuildIcons
// Dependencies: [13242, 13246, 13244, 13245, 13247, 13248, 13243, 13649, 13652, 13656, 13660, 13664, 13668, 13672, 2]

// Module 13648 (CreateGuildIcons)
import AssetRegistryDefault from "AssetRegistry" /* 13242 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 13243 */;
import AssetRegistryDefault3 from "AssetRegistry" /* 13244 */;
import AssetRegistryDefault4 from "AssetRegistry" /* 13245 */;
import AssetRegistryDefault5 from "AssetRegistry" /* 13246 */;
import AssetRegistryDefault6 from "AssetRegistry" /* 13247 */;
import AssetRegistryDefault7 from "AssetRegistry" /* 13248 */;
import PencilIllocon from "PencilIllocon" /* 13649 */;
import ControllerIllocon from "ControllerIllocon" /* 13652 */;
import HeartIllocon from "HeartIllocon" /* 13656 */;
import AppleIllocon from "AppleIllocon" /* 13660 */;
import BookIllocon from "BookIllocon" /* 13664 */;
import PaintIllocon from "PaintIllocon" /* 13668 */;
import LeafIllocon from "LeafIllocon" /* 13672 */;
import size from "module_2" /* 2 */;

const obj = { CREATE: AssetRegistryDefault, GAMING: AssetRegistryDefault5, FRIENDS: AssetRegistryDefault3, STUDY: AssetRegistryDefault4, CLUBS: AssetRegistryDefault6, CREATORS: AssetRegistryDefault7, LOCAL_COMMUNITY: AssetRegistryDefault2, SCHOOL_CLUB: AssetRegistryDefault6 };
const obj2 = { CREATE: PencilIllocon.PencilIllocon, GAMING: ControllerIllocon.ControllerIllocon, FRIENDS: HeartIllocon.HeartIllocon, STUDY: AppleIllocon.AppleIllocon, CLUBS: BookIllocon.BookIllocon, CREATORS: PaintIllocon.PaintIllocon, LOCAL_COMMUNITY: LeafIllocon.LeafIllocon, SCHOOL_CLUB: BookIllocon.BookIllocon };
const result = size.fileFinishedImporting("modules/create_guild/native/CreateGuildIcons.tsx");

export const GUILD_TEMPLATE_ICONS = obj;
export const GUILD_TEMPLATE_ICON_COMPONENTS = obj2;
