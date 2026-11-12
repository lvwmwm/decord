// Module ID: 14551
// Function ID: 14552
// Name: CreateGuildIcons
// Dependencies: [14140, 14144, 14142, 14143, 14145, 14146, 14141, 14552, 14555, 14559, 14563, 14567, 14571, 14575, 2]

// Module 14551 (CreateGuildIcons)
import AssetRegistryDefault from "AssetRegistry" /* 14140 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 14141 */;
import AssetRegistryDefault3 from "AssetRegistry" /* 14142 */;
import AssetRegistryDefault4 from "AssetRegistry" /* 14143 */;
import AssetRegistryDefault5 from "AssetRegistry" /* 14144 */;
import AssetRegistryDefault6 from "AssetRegistry" /* 14145 */;
import AssetRegistryDefault7 from "AssetRegistry" /* 14146 */;
import PencilIllocon from "PencilIllocon" /* 14552 */;
import ControllerIllocon from "ControllerIllocon" /* 14555 */;
import HeartIllocon from "HeartIllocon" /* 14559 */;
import AppleIllocon from "AppleIllocon" /* 14563 */;
import BookIllocon from "BookIllocon" /* 14567 */;
import PaintIllocon from "PaintIllocon" /* 14571 */;
import LeafIllocon from "LeafIllocon" /* 14575 */;
import size from "module_2" /* 2 */;

const obj = { CREATE: AssetRegistryDefault, GAMING: AssetRegistryDefault5, FRIENDS: AssetRegistryDefault3, STUDY: AssetRegistryDefault4, CLUBS: AssetRegistryDefault6, CREATORS: AssetRegistryDefault7, LOCAL_COMMUNITY: AssetRegistryDefault2, SCHOOL_CLUB: AssetRegistryDefault6 };
const obj2 = { CREATE: PencilIllocon.PencilIllocon, GAMING: ControllerIllocon.ControllerIllocon, FRIENDS: HeartIllocon.HeartIllocon, STUDY: AppleIllocon.AppleIllocon, CLUBS: BookIllocon.BookIllocon, CREATORS: PaintIllocon.PaintIllocon, LOCAL_COMMUNITY: LeafIllocon.LeafIllocon, SCHOOL_CLUB: BookIllocon.BookIllocon };
const result = size.fileFinishedImporting("modules/create_guild/native/CreateGuildIcons.tsx");

export const GUILD_TEMPLATE_ICONS = obj;
export const GUILD_TEMPLATE_ICON_COMPONENTS = obj2;
