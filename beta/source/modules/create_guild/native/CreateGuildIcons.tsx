// Module ID: 13382
// Function ID: 13383
// Name: CreateGuildIcons
// Dependencies: [12975, 12979, 12977, 12978, 12980, 12981, 12976, 13383, 13386, 13390, 13394, 13398, 13402, 13406, 2]

// Module 13382 (CreateGuildIcons)
import AssetRegistryDefault from "AssetRegistry" /* 12975 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 12976 */;
import AssetRegistryDefault3 from "AssetRegistry" /* 12977 */;
import AssetRegistryDefault4 from "AssetRegistry" /* 12978 */;
import AssetRegistryDefault5 from "AssetRegistry" /* 12979 */;
import AssetRegistryDefault6 from "AssetRegistry" /* 12980 */;
import AssetRegistryDefault7 from "AssetRegistry" /* 12981 */;
import PencilIllocon from "PencilIllocon" /* 13383 */;
import ControllerIllocon from "ControllerIllocon" /* 13386 */;
import HeartIllocon from "HeartIllocon" /* 13390 */;
import AppleIllocon from "AppleIllocon" /* 13394 */;
import BookIllocon from "BookIllocon" /* 13398 */;
import PaintIllocon from "PaintIllocon" /* 13402 */;
import LeafIllocon from "LeafIllocon" /* 13406 */;
import size from "module_2" /* 2 */;

const obj = { CREATE: AssetRegistryDefault, GAMING: AssetRegistryDefault5, FRIENDS: AssetRegistryDefault3, STUDY: AssetRegistryDefault4, CLUBS: AssetRegistryDefault6, CREATORS: AssetRegistryDefault7, LOCAL_COMMUNITY: AssetRegistryDefault2, SCHOOL_CLUB: AssetRegistryDefault6 };
const obj2 = { CREATE: PencilIllocon.PencilIllocon, GAMING: ControllerIllocon.ControllerIllocon, FRIENDS: HeartIllocon.HeartIllocon, STUDY: AppleIllocon.AppleIllocon, CLUBS: BookIllocon.BookIllocon, CREATORS: PaintIllocon.PaintIllocon, LOCAL_COMMUNITY: LeafIllocon.LeafIllocon, SCHOOL_CLUB: BookIllocon.BookIllocon };
const result = size.fileFinishedImporting("modules/create_guild/native/CreateGuildIcons.tsx");

export const GUILD_TEMPLATE_ICONS = obj;
export const GUILD_TEMPLATE_ICON_COMPONENTS = obj2;
