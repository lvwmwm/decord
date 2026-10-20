// Module ID: 13434
// Function ID: 13435
// Name: CreateGuildIcons
// Dependencies: [13025, 13029, 13027, 13028, 13030, 13031, 13026, 13435, 13438, 13442, 13446, 13450, 13454, 13458, 2]

// Module 13434 (CreateGuildIcons)
import AssetRegistryDefault from "AssetRegistry" /* 13025 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 13026 */;
import AssetRegistryDefault3 from "AssetRegistry" /* 13027 */;
import AssetRegistryDefault4 from "AssetRegistry" /* 13028 */;
import AssetRegistryDefault5 from "AssetRegistry" /* 13029 */;
import AssetRegistryDefault6 from "AssetRegistry" /* 13030 */;
import AssetRegistryDefault7 from "AssetRegistry" /* 13031 */;
import PencilIllocon from "PencilIllocon" /* 13435 */;
import ControllerIllocon from "ControllerIllocon" /* 13438 */;
import HeartIllocon from "HeartIllocon" /* 13442 */;
import AppleIllocon from "AppleIllocon" /* 13446 */;
import BookIllocon from "BookIllocon" /* 13450 */;
import PaintIllocon from "PaintIllocon" /* 13454 */;
import LeafIllocon from "LeafIllocon" /* 13458 */;
import size from "module_2" /* 2 */;

const obj = { CREATE: AssetRegistryDefault, GAMING: AssetRegistryDefault5, FRIENDS: AssetRegistryDefault3, STUDY: AssetRegistryDefault4, CLUBS: AssetRegistryDefault6, CREATORS: AssetRegistryDefault7, LOCAL_COMMUNITY: AssetRegistryDefault2, SCHOOL_CLUB: AssetRegistryDefault6 };
const obj2 = { CREATE: PencilIllocon.PencilIllocon, GAMING: ControllerIllocon.ControllerIllocon, FRIENDS: HeartIllocon.HeartIllocon, STUDY: AppleIllocon.AppleIllocon, CLUBS: BookIllocon.BookIllocon, CREATORS: PaintIllocon.PaintIllocon, LOCAL_COMMUNITY: LeafIllocon.LeafIllocon, SCHOOL_CLUB: BookIllocon.BookIllocon };
const result = size.fileFinishedImporting("modules/create_guild/native/CreateGuildIcons.tsx");

export const GUILD_TEMPLATE_ICONS = obj;
export const GUILD_TEMPLATE_ICON_COMPONENTS = obj2;
