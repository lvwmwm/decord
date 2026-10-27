// Module ID: 13631
// Function ID: 13632
// Name: CreateGuildIcons
// Dependencies: [13226, 13230, 13228, 13229, 13231, 13232, 13227, 13632, 13635, 13639, 13643, 13647, 13651, 13655, 2]

// Module 13631 (CreateGuildIcons)
import AssetRegistryDefault from "AssetRegistry" /* 13226 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 13227 */;
import AssetRegistryDefault3 from "AssetRegistry" /* 13228 */;
import AssetRegistryDefault4 from "AssetRegistry" /* 13229 */;
import AssetRegistryDefault5 from "AssetRegistry" /* 13230 */;
import AssetRegistryDefault6 from "AssetRegistry" /* 13231 */;
import AssetRegistryDefault7 from "AssetRegistry" /* 13232 */;
import PencilIllocon from "PencilIllocon" /* 13632 */;
import ControllerIllocon from "ControllerIllocon" /* 13635 */;
import HeartIllocon from "HeartIllocon" /* 13639 */;
import AppleIllocon from "AppleIllocon" /* 13643 */;
import BookIllocon from "BookIllocon" /* 13647 */;
import PaintIllocon from "PaintIllocon" /* 13651 */;
import LeafIllocon from "LeafIllocon" /* 13655 */;
import size from "module_2" /* 2 */;

const obj = { CREATE: AssetRegistryDefault, GAMING: AssetRegistryDefault5, FRIENDS: AssetRegistryDefault3, STUDY: AssetRegistryDefault4, CLUBS: AssetRegistryDefault6, CREATORS: AssetRegistryDefault7, LOCAL_COMMUNITY: AssetRegistryDefault2, SCHOOL_CLUB: AssetRegistryDefault6 };
const obj2 = { CREATE: PencilIllocon.PencilIllocon, GAMING: ControllerIllocon.ControllerIllocon, FRIENDS: HeartIllocon.HeartIllocon, STUDY: AppleIllocon.AppleIllocon, CLUBS: BookIllocon.BookIllocon, CREATORS: PaintIllocon.PaintIllocon, LOCAL_COMMUNITY: LeafIllocon.LeafIllocon, SCHOOL_CLUB: BookIllocon.BookIllocon };
const result = size.fileFinishedImporting("modules/create_guild/native/CreateGuildIcons.tsx");

export const GUILD_TEMPLATE_ICONS = obj;
export const GUILD_TEMPLATE_ICON_COMPONENTS = obj2;
