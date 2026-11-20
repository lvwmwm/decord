// Module ID: 13497
// Function ID: 13498
// Name: CreateGuildIcons
// Dependencies: [13060, 13064, 13062, 13063, 13065, 13066, 13061, 13498, 13501, 13505, 13509, 13513, 13517, 13521, 2]

// Module 13497 (CreateGuildIcons)
import AssetRegistryDefault from "AssetRegistry" /* 13060 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 13061 */;
import AssetRegistryDefault3 from "AssetRegistry" /* 13062 */;
import AssetRegistryDefault4 from "AssetRegistry" /* 13063 */;
import AssetRegistryDefault5 from "AssetRegistry" /* 13064 */;
import AssetRegistryDefault6 from "AssetRegistry" /* 13065 */;
import AssetRegistryDefault7 from "AssetRegistry" /* 13066 */;
import PencilIllocon from "PencilIllocon" /* 13498 */;
import ControllerIllocon from "ControllerIllocon" /* 13501 */;
import HeartIllocon from "HeartIllocon" /* 13505 */;
import AppleIllocon from "AppleIllocon" /* 13509 */;
import BookIllocon from "BookIllocon" /* 13513 */;
import PaintIllocon from "PaintIllocon" /* 13517 */;
import LeafIllocon from "LeafIllocon" /* 13521 */;
import size from "module_2" /* 2 */;

const obj = { CREATE: AssetRegistryDefault, GAMING: AssetRegistryDefault5, FRIENDS: AssetRegistryDefault3, STUDY: AssetRegistryDefault4, CLUBS: AssetRegistryDefault6, CREATORS: AssetRegistryDefault7, LOCAL_COMMUNITY: AssetRegistryDefault2, SCHOOL_CLUB: AssetRegistryDefault6 };
const obj2 = { CREATE: PencilIllocon.PencilIllocon, GAMING: ControllerIllocon.ControllerIllocon, FRIENDS: HeartIllocon.HeartIllocon, STUDY: AppleIllocon.AppleIllocon, CLUBS: BookIllocon.BookIllocon, CREATORS: PaintIllocon.PaintIllocon, LOCAL_COMMUNITY: LeafIllocon.LeafIllocon, SCHOOL_CLUB: BookIllocon.BookIllocon };
const result = size.fileFinishedImporting("modules/create_guild/native/CreateGuildIcons.tsx");

export const GUILD_TEMPLATE_ICONS = obj;
export const GUILD_TEMPLATE_ICON_COMPONENTS = obj2;
