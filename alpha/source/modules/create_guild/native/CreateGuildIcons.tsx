// Module ID: 14485
// Function ID: 14486
// Name: CreateGuildIcons
// Dependencies: [14082, 14086, 14084, 14085, 14087, 14088, 14083, 14486, 14489, 14493, 14497, 14501, 14505, 14509, 2]

// Module 14485 (CreateGuildIcons)
import AssetRegistryDefault from "AssetRegistry" /* 14082 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 14083 */;
import AssetRegistryDefault3 from "AssetRegistry" /* 14084 */;
import AssetRegistryDefault4 from "AssetRegistry" /* 14085 */;
import AssetRegistryDefault5 from "AssetRegistry" /* 14086 */;
import AssetRegistryDefault6 from "AssetRegistry" /* 14087 */;
import AssetRegistryDefault7 from "AssetRegistry" /* 14088 */;
import PencilIllocon from "PencilIllocon" /* 14486 */;
import ControllerIllocon from "ControllerIllocon" /* 14489 */;
import HeartIllocon from "HeartIllocon" /* 14493 */;
import AppleIllocon from "AppleIllocon" /* 14497 */;
import BookIllocon from "BookIllocon" /* 14501 */;
import PaintIllocon from "PaintIllocon" /* 14505 */;
import LeafIllocon from "LeafIllocon" /* 14509 */;
import size from "module_2" /* 2 */;

const obj = { CREATE: AssetRegistryDefault, GAMING: AssetRegistryDefault5, FRIENDS: AssetRegistryDefault3, STUDY: AssetRegistryDefault4, CLUBS: AssetRegistryDefault6, CREATORS: AssetRegistryDefault7, LOCAL_COMMUNITY: AssetRegistryDefault2, SCHOOL_CLUB: AssetRegistryDefault6 };
const obj2 = { CREATE: PencilIllocon.PencilIllocon, GAMING: ControllerIllocon.ControllerIllocon, FRIENDS: HeartIllocon.HeartIllocon, STUDY: AppleIllocon.AppleIllocon, CLUBS: BookIllocon.BookIllocon, CREATORS: PaintIllocon.PaintIllocon, LOCAL_COMMUNITY: LeafIllocon.LeafIllocon, SCHOOL_CLUB: BookIllocon.BookIllocon };
const result = size.fileFinishedImporting("modules/create_guild/native/CreateGuildIcons.tsx");

export const GUILD_TEMPLATE_ICONS = obj;
export const GUILD_TEMPLATE_ICON_COMPONENTS = obj2;
