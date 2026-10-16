// Module ID: 13311
// Function ID: 13312
// Name: CreateGuildIcons
// Dependencies: [12902, 12906, 12904, 12905, 12907, 12908, 12903, 13312, 13315, 13319, 13323, 13327, 13331, 13335, 2]

// Module 13311 (CreateGuildIcons)
import AssetRegistryDefault from "AssetRegistry" /* 12902 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 12903 */;
import AssetRegistryDefault3 from "AssetRegistry" /* 12904 */;
import AssetRegistryDefault4 from "AssetRegistry" /* 12905 */;
import AssetRegistryDefault5 from "AssetRegistry" /* 12906 */;
import AssetRegistryDefault6 from "AssetRegistry" /* 12907 */;
import AssetRegistryDefault7 from "AssetRegistry" /* 12908 */;
import PencilIllocon from "PencilIllocon" /* 13312 */;
import ControllerIllocon from "ControllerIllocon" /* 13315 */;
import HeartIllocon from "HeartIllocon" /* 13319 */;
import AppleIllocon from "AppleIllocon" /* 13323 */;
import BookIllocon from "BookIllocon" /* 13327 */;
import PaintIllocon from "PaintIllocon" /* 13331 */;
import LeafIllocon from "LeafIllocon" /* 13335 */;
import size from "module_2" /* 2 */;

const obj = { CREATE: AssetRegistryDefault, GAMING: AssetRegistryDefault5, FRIENDS: AssetRegistryDefault3, STUDY: AssetRegistryDefault4, CLUBS: AssetRegistryDefault6, CREATORS: AssetRegistryDefault7, LOCAL_COMMUNITY: AssetRegistryDefault2, SCHOOL_CLUB: AssetRegistryDefault6 };
const obj2 = { CREATE: PencilIllocon.PencilIllocon, GAMING: ControllerIllocon.ControllerIllocon, FRIENDS: HeartIllocon.HeartIllocon, STUDY: AppleIllocon.AppleIllocon, CLUBS: BookIllocon.BookIllocon, CREATORS: PaintIllocon.PaintIllocon, LOCAL_COMMUNITY: LeafIllocon.LeafIllocon, SCHOOL_CLUB: BookIllocon.BookIllocon };
const result = size.fileFinishedImporting("modules/create_guild/native/CreateGuildIcons.tsx");

export const GUILD_TEMPLATE_ICONS = obj;
export const GUILD_TEMPLATE_ICON_COMPONENTS = obj2;
