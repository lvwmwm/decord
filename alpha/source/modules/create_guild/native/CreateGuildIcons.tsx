// Module ID: 14518
// Function ID: 14519
// Name: CreateGuildIcons
// Dependencies: [14107, 14111, 14109, 14110, 14112, 14113, 14108, 14519, 14522, 14526, 14530, 14534, 14538, 14542, 2]

// Module 14518 (CreateGuildIcons)
import AssetRegistryDefault from "AssetRegistry" /* 14107 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 14108 */;
import AssetRegistryDefault3 from "AssetRegistry" /* 14109 */;
import AssetRegistryDefault4 from "AssetRegistry" /* 14110 */;
import AssetRegistryDefault5 from "AssetRegistry" /* 14111 */;
import AssetRegistryDefault6 from "AssetRegistry" /* 14112 */;
import AssetRegistryDefault7 from "AssetRegistry" /* 14113 */;
import PencilIllocon from "PencilIllocon" /* 14519 */;
import ControllerIllocon from "ControllerIllocon" /* 14522 */;
import HeartIllocon from "HeartIllocon" /* 14526 */;
import AppleIllocon from "AppleIllocon" /* 14530 */;
import BookIllocon from "BookIllocon" /* 14534 */;
import PaintIllocon from "PaintIllocon" /* 14538 */;
import LeafIllocon from "LeafIllocon" /* 14542 */;
import size from "module_2" /* 2 */;

const obj = { CREATE: AssetRegistryDefault, GAMING: AssetRegistryDefault5, FRIENDS: AssetRegistryDefault3, STUDY: AssetRegistryDefault4, CLUBS: AssetRegistryDefault6, CREATORS: AssetRegistryDefault7, LOCAL_COMMUNITY: AssetRegistryDefault2, SCHOOL_CLUB: AssetRegistryDefault6 };
const obj2 = { CREATE: PencilIllocon.PencilIllocon, GAMING: ControllerIllocon.ControllerIllocon, FRIENDS: HeartIllocon.HeartIllocon, STUDY: AppleIllocon.AppleIllocon, CLUBS: BookIllocon.BookIllocon, CREATORS: PaintIllocon.PaintIllocon, LOCAL_COMMUNITY: LeafIllocon.LeafIllocon, SCHOOL_CLUB: BookIllocon.BookIllocon };
const result = size.fileFinishedImporting("modules/create_guild/native/CreateGuildIcons.tsx");

export const GUILD_TEMPLATE_ICONS = obj;
export const GUILD_TEMPLATE_ICON_COMPONENTS = obj2;
