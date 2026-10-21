// Module ID: 13501
// Function ID: 13502
// Name: CreateGuildIcons
// Dependencies: [13093, 13097, 13095, 13096, 13098, 13099, 13094, 13502, 13505, 13509, 13513, 13517, 13521, 13525, 2]

// Module 13501 (CreateGuildIcons)
import AssetRegistryDefault from "AssetRegistry" /* 13093 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 13094 */;
import AssetRegistryDefault3 from "AssetRegistry" /* 13095 */;
import AssetRegistryDefault4 from "AssetRegistry" /* 13096 */;
import AssetRegistryDefault5 from "AssetRegistry" /* 13097 */;
import AssetRegistryDefault6 from "AssetRegistry" /* 13098 */;
import AssetRegistryDefault7 from "AssetRegistry" /* 13099 */;
import PencilIllocon from "PencilIllocon" /* 13502 */;
import ControllerIllocon from "ControllerIllocon" /* 13505 */;
import HeartIllocon from "HeartIllocon" /* 13509 */;
import AppleIllocon from "AppleIllocon" /* 13513 */;
import BookIllocon from "BookIllocon" /* 13517 */;
import PaintIllocon from "PaintIllocon" /* 13521 */;
import LeafIllocon from "LeafIllocon" /* 13525 */;
import size from "module_2" /* 2 */;

const obj = { CREATE: AssetRegistryDefault, GAMING: AssetRegistryDefault5, FRIENDS: AssetRegistryDefault3, STUDY: AssetRegistryDefault4, CLUBS: AssetRegistryDefault6, CREATORS: AssetRegistryDefault7, LOCAL_COMMUNITY: AssetRegistryDefault2, SCHOOL_CLUB: AssetRegistryDefault6 };
const obj2 = { CREATE: PencilIllocon.PencilIllocon, GAMING: ControllerIllocon.ControllerIllocon, FRIENDS: HeartIllocon.HeartIllocon, STUDY: AppleIllocon.AppleIllocon, CLUBS: BookIllocon.BookIllocon, CREATORS: PaintIllocon.PaintIllocon, LOCAL_COMMUNITY: LeafIllocon.LeafIllocon, SCHOOL_CLUB: BookIllocon.BookIllocon };
const result = size.fileFinishedImporting("modules/create_guild/native/CreateGuildIcons.tsx");

export const GUILD_TEMPLATE_ICONS = obj;
export const GUILD_TEMPLATE_ICON_COMPONENTS = obj2;
