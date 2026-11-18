// Module ID: 13545
// Function ID: 13546
// Name: CreateGuildIcons
// Dependencies: [13108, 13112, 13110, 13111, 13113, 13114, 13109, 13546, 13549, 13553, 13557, 13561, 13565, 13569, 2]

// Module 13545 (CreateGuildIcons)
import AssetRegistryDefault from "AssetRegistry" /* 13108 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 13109 */;
import AssetRegistryDefault3 from "AssetRegistry" /* 13110 */;
import AssetRegistryDefault4 from "AssetRegistry" /* 13111 */;
import AssetRegistryDefault5 from "AssetRegistry" /* 13112 */;
import AssetRegistryDefault6 from "AssetRegistry" /* 13113 */;
import AssetRegistryDefault7 from "AssetRegistry" /* 13114 */;
import PencilIllocon from "PencilIllocon" /* 13546 */;
import ControllerIllocon from "ControllerIllocon" /* 13549 */;
import HeartIllocon from "HeartIllocon" /* 13553 */;
import AppleIllocon from "AppleIllocon" /* 13557 */;
import BookIllocon from "BookIllocon" /* 13561 */;
import PaintIllocon from "PaintIllocon" /* 13565 */;
import LeafIllocon from "LeafIllocon" /* 13569 */;
import size from "module_2" /* 2 */;

const obj = { CREATE: AssetRegistryDefault, GAMING: AssetRegistryDefault5, FRIENDS: AssetRegistryDefault3, STUDY: AssetRegistryDefault4, CLUBS: AssetRegistryDefault6, CREATORS: AssetRegistryDefault7, LOCAL_COMMUNITY: AssetRegistryDefault2, SCHOOL_CLUB: AssetRegistryDefault6 };
const obj2 = { CREATE: PencilIllocon.PencilIllocon, GAMING: ControllerIllocon.ControllerIllocon, FRIENDS: HeartIllocon.HeartIllocon, STUDY: AppleIllocon.AppleIllocon, CLUBS: BookIllocon.BookIllocon, CREATORS: PaintIllocon.PaintIllocon, LOCAL_COMMUNITY: LeafIllocon.LeafIllocon, SCHOOL_CLUB: BookIllocon.BookIllocon };
const result = size.fileFinishedImporting("modules/create_guild/native/CreateGuildIcons.tsx");

export const GUILD_TEMPLATE_ICONS = obj;
export const GUILD_TEMPLATE_ICON_COMPONENTS = obj2;
