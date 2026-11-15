// Module ID: 14548
// Function ID: 14549
// Name: CreateGuildIcons
// Dependencies: [14140, 14144, 14142, 14143, 14145, 14146, 14141, 14549, 14552, 14556, 14560, 14564, 14568, 14572, 2]

// Module 14548 (CreateGuildIcons)
import AssetRegistryDefault from "AssetRegistry" /* 14140 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 14141 */;
import AssetRegistryDefault3 from "AssetRegistry" /* 14142 */;
import AssetRegistryDefault4 from "AssetRegistry" /* 14143 */;
import AssetRegistryDefault5 from "AssetRegistry" /* 14144 */;
import AssetRegistryDefault6 from "AssetRegistry" /* 14145 */;
import AssetRegistryDefault7 from "AssetRegistry" /* 14146 */;
import PencilIllocon from "PencilIllocon" /* 14549 */;
import ControllerIllocon from "ControllerIllocon" /* 14552 */;
import HeartIllocon from "HeartIllocon" /* 14556 */;
import AppleIllocon from "AppleIllocon" /* 14560 */;
import BookIllocon from "BookIllocon" /* 14564 */;
import PaintIllocon from "PaintIllocon" /* 14568 */;
import LeafIllocon from "LeafIllocon" /* 14572 */;
import size from "module_2" /* 2 */;

const obj = { CREATE: AssetRegistryDefault, GAMING: AssetRegistryDefault5, FRIENDS: AssetRegistryDefault3, STUDY: AssetRegistryDefault4, CLUBS: AssetRegistryDefault6, CREATORS: AssetRegistryDefault7, LOCAL_COMMUNITY: AssetRegistryDefault2, SCHOOL_CLUB: AssetRegistryDefault6 };
const obj2 = { CREATE: PencilIllocon.PencilIllocon, GAMING: ControllerIllocon.ControllerIllocon, FRIENDS: HeartIllocon.HeartIllocon, STUDY: AppleIllocon.AppleIllocon, CLUBS: BookIllocon.BookIllocon, CREATORS: PaintIllocon.PaintIllocon, LOCAL_COMMUNITY: LeafIllocon.LeafIllocon, SCHOOL_CLUB: BookIllocon.BookIllocon };
const result = size.fileFinishedImporting("modules/create_guild/native/CreateGuildIcons.tsx");

export const GUILD_TEMPLATE_ICONS = obj;
export const GUILD_TEMPLATE_ICON_COMPONENTS = obj2;
