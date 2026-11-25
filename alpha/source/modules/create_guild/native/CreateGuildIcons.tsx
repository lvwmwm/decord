// Module ID: 13654
// Function ID: 13655
// Name: CreateGuildIcons
// Dependencies: [13221, 13225, 13223, 13224, 13226, 13227, 13222, 13655, 13658, 13662, 13666, 13670, 13674, 13678, 2]

// Module 13654 (CreateGuildIcons)
import AssetRegistryDefault from "AssetRegistry" /* 13221 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 13222 */;
import AssetRegistryDefault3 from "AssetRegistry" /* 13223 */;
import AssetRegistryDefault4 from "AssetRegistry" /* 13224 */;
import AssetRegistryDefault5 from "AssetRegistry" /* 13225 */;
import AssetRegistryDefault6 from "AssetRegistry" /* 13226 */;
import AssetRegistryDefault7 from "AssetRegistry" /* 13227 */;
import PencilIllocon from "PencilIllocon" /* 13655 */;
import ControllerIllocon from "ControllerIllocon" /* 13658 */;
import HeartIllocon from "HeartIllocon" /* 13662 */;
import AppleIllocon from "AppleIllocon" /* 13666 */;
import BookIllocon from "BookIllocon" /* 13670 */;
import PaintIllocon from "PaintIllocon" /* 13674 */;
import LeafIllocon from "LeafIllocon" /* 13678 */;
import size from "module_2" /* 2 */;

const obj = { CREATE: AssetRegistryDefault, GAMING: AssetRegistryDefault5, FRIENDS: AssetRegistryDefault3, STUDY: AssetRegistryDefault4, CLUBS: AssetRegistryDefault6, CREATORS: AssetRegistryDefault7, LOCAL_COMMUNITY: AssetRegistryDefault2, SCHOOL_CLUB: AssetRegistryDefault6 };
const obj2 = { CREATE: PencilIllocon.PencilIllocon, GAMING: ControllerIllocon.ControllerIllocon, FRIENDS: HeartIllocon.HeartIllocon, STUDY: AppleIllocon.AppleIllocon, CLUBS: BookIllocon.BookIllocon, CREATORS: PaintIllocon.PaintIllocon, LOCAL_COMMUNITY: LeafIllocon.LeafIllocon, SCHOOL_CLUB: BookIllocon.BookIllocon };
const result = size.fileFinishedImporting("modules/create_guild/native/CreateGuildIcons.tsx");

export const GUILD_TEMPLATE_ICONS = obj;
export const GUILD_TEMPLATE_ICON_COMPONENTS = obj2;
