// Module ID: 12436
// Function ID: 12437
// Name: CreateGuildIcons
// Dependencies: [12023, 12027, 12025, 12026, 12028, 12029, 12024, 12437, 12440, 12444, 12448, 12452, 12456, 12460, 2]

// Module 12436 (CreateGuildIcons)
import AssetRegistryDefault from "AssetRegistry" /* 12023 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 12024 */;
import AssetRegistryDefault3 from "AssetRegistry" /* 12025 */;
import AssetRegistryDefault4 from "AssetRegistry" /* 12026 */;
import AssetRegistryDefault5 from "AssetRegistry" /* 12027 */;
import AssetRegistryDefault6 from "AssetRegistry" /* 12028 */;
import AssetRegistryDefault7 from "AssetRegistry" /* 12029 */;
import PencilIllocon from "PencilIllocon" /* 12437 */;
import ControllerIllocon from "ControllerIllocon" /* 12440 */;
import HeartIllocon from "HeartIllocon" /* 12444 */;
import AppleIllocon from "AppleIllocon" /* 12448 */;
import BookIllocon from "BookIllocon" /* 12452 */;
import PaintIllocon from "PaintIllocon" /* 12456 */;
import LeafIllocon from "LeafIllocon" /* 12460 */;
import size from "module_2" /* 2 */;

const obj = { CREATE: AssetRegistryDefault, GAMING: AssetRegistryDefault5, FRIENDS: AssetRegistryDefault3, STUDY: AssetRegistryDefault4, CLUBS: AssetRegistryDefault6, CREATORS: AssetRegistryDefault7, LOCAL_COMMUNITY: AssetRegistryDefault2, SCHOOL_CLUB: AssetRegistryDefault6 };
const obj2 = { CREATE: PencilIllocon.PencilIllocon, GAMING: ControllerIllocon.ControllerIllocon, FRIENDS: HeartIllocon.HeartIllocon, STUDY: AppleIllocon.AppleIllocon, CLUBS: BookIllocon.BookIllocon, CREATORS: PaintIllocon.PaintIllocon, LOCAL_COMMUNITY: LeafIllocon.LeafIllocon, SCHOOL_CLUB: BookIllocon.BookIllocon };
const result = size.fileFinishedImporting("modules/create_guild/native/CreateGuildIcons.tsx");

export const GUILD_TEMPLATE_ICONS = obj;
export const GUILD_TEMPLATE_ICON_COMPONENTS = obj2;
