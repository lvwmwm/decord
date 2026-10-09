// Module ID: 12390
// Function ID: 12391
// Name: CreateGuildIcons
// Dependencies: [11977, 11981, 11979, 11980, 11982, 11983, 11978, 12391, 12394, 12398, 12402, 12406, 12410, 12414, 2]

// Module 12390 (CreateGuildIcons)
import AssetRegistryDefault from "AssetRegistry" /* 11977 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 11978 */;
import AssetRegistryDefault3 from "AssetRegistry" /* 11979 */;
import AssetRegistryDefault4 from "AssetRegistry" /* 11980 */;
import AssetRegistryDefault5 from "AssetRegistry" /* 11981 */;
import AssetRegistryDefault6 from "AssetRegistry" /* 11982 */;
import AssetRegistryDefault7 from "AssetRegistry" /* 11983 */;
import PencilIllocon from "PencilIllocon" /* 12391 */;
import ControllerIllocon from "ControllerIllocon" /* 12394 */;
import HeartIllocon from "HeartIllocon" /* 12398 */;
import AppleIllocon from "AppleIllocon" /* 12402 */;
import BookIllocon from "BookIllocon" /* 12406 */;
import PaintIllocon from "PaintIllocon" /* 12410 */;
import LeafIllocon from "LeafIllocon" /* 12414 */;
import size from "module_2" /* 2 */;

const obj = { CREATE: AssetRegistryDefault, GAMING: AssetRegistryDefault5, FRIENDS: AssetRegistryDefault3, STUDY: AssetRegistryDefault4, CLUBS: AssetRegistryDefault6, CREATORS: AssetRegistryDefault7, LOCAL_COMMUNITY: AssetRegistryDefault2, SCHOOL_CLUB: AssetRegistryDefault6 };
const obj2 = { CREATE: PencilIllocon.PencilIllocon, GAMING: ControllerIllocon.ControllerIllocon, FRIENDS: HeartIllocon.HeartIllocon, STUDY: AppleIllocon.AppleIllocon, CLUBS: BookIllocon.BookIllocon, CREATORS: PaintIllocon.PaintIllocon, LOCAL_COMMUNITY: LeafIllocon.LeafIllocon, SCHOOL_CLUB: BookIllocon.BookIllocon };
const result = size.fileFinishedImporting("modules/create_guild/native/CreateGuildIcons.tsx");

export const GUILD_TEMPLATE_ICONS = obj;
export const GUILD_TEMPLATE_ICON_COMPONENTS = obj2;
