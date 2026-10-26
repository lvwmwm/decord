// Module ID: 13615
// Function ID: 13616
// Name: CreateGuildIcons
// Dependencies: [13209, 13213, 13211, 13212, 13214, 13215, 13210, 13616, 13619, 13623, 13627, 13631, 13635, 13639, 2]

// Module 13615 (CreateGuildIcons)
import AssetRegistryDefault from "AssetRegistry" /* 13209 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 13210 */;
import AssetRegistryDefault3 from "AssetRegistry" /* 13211 */;
import AssetRegistryDefault4 from "AssetRegistry" /* 13212 */;
import AssetRegistryDefault5 from "AssetRegistry" /* 13213 */;
import AssetRegistryDefault6 from "AssetRegistry" /* 13214 */;
import AssetRegistryDefault7 from "AssetRegistry" /* 13215 */;
import PencilIllocon from "PencilIllocon" /* 13616 */;
import ControllerIllocon from "ControllerIllocon" /* 13619 */;
import HeartIllocon from "HeartIllocon" /* 13623 */;
import AppleIllocon from "AppleIllocon" /* 13627 */;
import BookIllocon from "BookIllocon" /* 13631 */;
import PaintIllocon from "PaintIllocon" /* 13635 */;
import LeafIllocon from "LeafIllocon" /* 13639 */;
import size from "module_2" /* 2 */;

const obj = { CREATE: AssetRegistryDefault, GAMING: AssetRegistryDefault5, FRIENDS: AssetRegistryDefault3, STUDY: AssetRegistryDefault4, CLUBS: AssetRegistryDefault6, CREATORS: AssetRegistryDefault7, LOCAL_COMMUNITY: AssetRegistryDefault2, SCHOOL_CLUB: AssetRegistryDefault6 };
const obj2 = { CREATE: PencilIllocon.PencilIllocon, GAMING: ControllerIllocon.ControllerIllocon, FRIENDS: HeartIllocon.HeartIllocon, STUDY: AppleIllocon.AppleIllocon, CLUBS: BookIllocon.BookIllocon, CREATORS: PaintIllocon.PaintIllocon, LOCAL_COMMUNITY: LeafIllocon.LeafIllocon, SCHOOL_CLUB: BookIllocon.BookIllocon };
const result = size.fileFinishedImporting("modules/create_guild/native/CreateGuildIcons.tsx");

export const GUILD_TEMPLATE_ICONS = obj;
export const GUILD_TEMPLATE_ICON_COMPONENTS = obj2;
