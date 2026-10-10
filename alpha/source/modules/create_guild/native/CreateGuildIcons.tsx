// Module ID: 12434
// Function ID: 12435
// Name: CreateGuildIcons
// Dependencies: [12021, 12025, 12023, 12024, 12026, 12027, 12022, 12435, 12438, 12442, 12446, 12450, 12454, 12458, 2]

// Module 12434 (CreateGuildIcons)
import AssetRegistryDefault from "AssetRegistry" /* 12021 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 12022 */;
import AssetRegistryDefault3 from "AssetRegistry" /* 12023 */;
import AssetRegistryDefault4 from "AssetRegistry" /* 12024 */;
import AssetRegistryDefault5 from "AssetRegistry" /* 12025 */;
import AssetRegistryDefault6 from "AssetRegistry" /* 12026 */;
import AssetRegistryDefault7 from "AssetRegistry" /* 12027 */;
import PencilIllocon from "PencilIllocon" /* 12435 */;
import ControllerIllocon from "ControllerIllocon" /* 12438 */;
import HeartIllocon from "HeartIllocon" /* 12442 */;
import AppleIllocon from "AppleIllocon" /* 12446 */;
import BookIllocon from "BookIllocon" /* 12450 */;
import PaintIllocon from "PaintIllocon" /* 12454 */;
import LeafIllocon from "LeafIllocon" /* 12458 */;
import size from "module_2" /* 2 */;

const obj = { CREATE: AssetRegistryDefault, GAMING: AssetRegistryDefault5, FRIENDS: AssetRegistryDefault3, STUDY: AssetRegistryDefault4, CLUBS: AssetRegistryDefault6, CREATORS: AssetRegistryDefault7, LOCAL_COMMUNITY: AssetRegistryDefault2, SCHOOL_CLUB: AssetRegistryDefault6 };
const obj2 = { CREATE: PencilIllocon.PencilIllocon, GAMING: ControllerIllocon.ControllerIllocon, FRIENDS: HeartIllocon.HeartIllocon, STUDY: AppleIllocon.AppleIllocon, CLUBS: BookIllocon.BookIllocon, CREATORS: PaintIllocon.PaintIllocon, LOCAL_COMMUNITY: LeafIllocon.LeafIllocon, SCHOOL_CLUB: BookIllocon.BookIllocon };
const result = size.fileFinishedImporting("modules/create_guild/native/CreateGuildIcons.tsx");

export const GUILD_TEMPLATE_ICONS = obj;
export const GUILD_TEMPLATE_ICON_COMPONENTS = obj2;
