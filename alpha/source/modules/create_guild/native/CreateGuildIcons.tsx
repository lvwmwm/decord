// Module ID: 13611
// Function ID: 13612
// Name: CreateGuildIcons
// Dependencies: [13205, 13209, 13207, 13208, 13210, 13211, 13206, 13612, 13615, 13619, 13623, 13627, 13631, 13635, 2]

// Module 13611 (CreateGuildIcons)
import AssetRegistryDefault from "AssetRegistry" /* 13205 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 13206 */;
import AssetRegistryDefault3 from "AssetRegistry" /* 13207 */;
import AssetRegistryDefault4 from "AssetRegistry" /* 13208 */;
import AssetRegistryDefault5 from "AssetRegistry" /* 13209 */;
import AssetRegistryDefault6 from "AssetRegistry" /* 13210 */;
import AssetRegistryDefault7 from "AssetRegistry" /* 13211 */;
import PencilIllocon from "PencilIllocon" /* 13612 */;
import ControllerIllocon from "ControllerIllocon" /* 13615 */;
import HeartIllocon from "HeartIllocon" /* 13619 */;
import AppleIllocon from "AppleIllocon" /* 13623 */;
import BookIllocon from "BookIllocon" /* 13627 */;
import PaintIllocon from "PaintIllocon" /* 13631 */;
import LeafIllocon from "LeafIllocon" /* 13635 */;
import size from "module_2" /* 2 */;

const obj = { CREATE: AssetRegistryDefault, GAMING: AssetRegistryDefault5, FRIENDS: AssetRegistryDefault3, STUDY: AssetRegistryDefault4, CLUBS: AssetRegistryDefault6, CREATORS: AssetRegistryDefault7, LOCAL_COMMUNITY: AssetRegistryDefault2, SCHOOL_CLUB: AssetRegistryDefault6 };
const obj2 = { CREATE: PencilIllocon.PencilIllocon, GAMING: ControllerIllocon.ControllerIllocon, FRIENDS: HeartIllocon.HeartIllocon, STUDY: AppleIllocon.AppleIllocon, CLUBS: BookIllocon.BookIllocon, CREATORS: PaintIllocon.PaintIllocon, LOCAL_COMMUNITY: LeafIllocon.LeafIllocon, SCHOOL_CLUB: BookIllocon.BookIllocon };
const result = size.fileFinishedImporting("modules/create_guild/native/CreateGuildIcons.tsx");

export const GUILD_TEMPLATE_ICONS = obj;
export const GUILD_TEMPLATE_ICON_COMPONENTS = obj2;
