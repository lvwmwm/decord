// Module ID: 13623
// Function ID: 13624
// Name: CreateGuildIcons
// Dependencies: [13186, 13190, 13188, 13189, 13191, 13192, 13187, 13624, 13627, 13631, 13635, 13639, 13643, 13647, 2]

// Module 13623 (CreateGuildIcons)
import AssetRegistryDefault from "AssetRegistry" /* 13186 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 13187 */;
import AssetRegistryDefault3 from "AssetRegistry" /* 13188 */;
import AssetRegistryDefault4 from "AssetRegistry" /* 13189 */;
import AssetRegistryDefault5 from "AssetRegistry" /* 13190 */;
import AssetRegistryDefault6 from "AssetRegistry" /* 13191 */;
import AssetRegistryDefault7 from "AssetRegistry" /* 13192 */;
import PencilIllocon from "PencilIllocon" /* 13624 */;
import ControllerIllocon from "ControllerIllocon" /* 13627 */;
import HeartIllocon from "HeartIllocon" /* 13631 */;
import AppleIllocon from "AppleIllocon" /* 13635 */;
import BookIllocon from "BookIllocon" /* 13639 */;
import PaintIllocon from "PaintIllocon" /* 13643 */;
import LeafIllocon from "LeafIllocon" /* 13647 */;
import size from "module_2" /* 2 */;

const obj = { CREATE: AssetRegistryDefault, GAMING: AssetRegistryDefault5, FRIENDS: AssetRegistryDefault3, STUDY: AssetRegistryDefault4, CLUBS: AssetRegistryDefault6, CREATORS: AssetRegistryDefault7, LOCAL_COMMUNITY: AssetRegistryDefault2, SCHOOL_CLUB: AssetRegistryDefault6 };
const obj2 = { CREATE: PencilIllocon.PencilIllocon, GAMING: ControllerIllocon.ControllerIllocon, FRIENDS: HeartIllocon.HeartIllocon, STUDY: AppleIllocon.AppleIllocon, CLUBS: BookIllocon.BookIllocon, CREATORS: PaintIllocon.PaintIllocon, LOCAL_COMMUNITY: LeafIllocon.LeafIllocon, SCHOOL_CLUB: BookIllocon.BookIllocon };
const result = size.fileFinishedImporting("modules/create_guild/native/CreateGuildIcons.tsx");

export const GUILD_TEMPLATE_ICONS = obj;
export const GUILD_TEMPLATE_ICON_COMPONENTS = obj2;
