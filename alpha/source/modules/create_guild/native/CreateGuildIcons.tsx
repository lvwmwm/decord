// Module ID: 14082
// Function ID: 14083
// Name: CreateGuildIcons
// Dependencies: [13676, 13680, 13678, 13679, 13681, 13682, 13677, 14083, 14086, 14090, 14094, 14098, 14102, 14106, 2]

// Module 14082 (CreateGuildIcons)
import AssetRegistryDefault from "AssetRegistry" /* 13676 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 13677 */;
import AssetRegistryDefault3 from "AssetRegistry" /* 13678 */;
import AssetRegistryDefault4 from "AssetRegistry" /* 13679 */;
import AssetRegistryDefault5 from "AssetRegistry" /* 13680 */;
import AssetRegistryDefault6 from "AssetRegistry" /* 13681 */;
import AssetRegistryDefault7 from "AssetRegistry" /* 13682 */;
import PencilIllocon from "PencilIllocon" /* 14083 */;
import ControllerIllocon from "ControllerIllocon" /* 14086 */;
import HeartIllocon from "HeartIllocon" /* 14090 */;
import AppleIllocon from "AppleIllocon" /* 14094 */;
import BookIllocon from "BookIllocon" /* 14098 */;
import PaintIllocon from "PaintIllocon" /* 14102 */;
import LeafIllocon from "LeafIllocon" /* 14106 */;
import size from "module_2" /* 2 */;

const obj = { CREATE: AssetRegistryDefault, GAMING: AssetRegistryDefault5, FRIENDS: AssetRegistryDefault3, STUDY: AssetRegistryDefault4, CLUBS: AssetRegistryDefault6, CREATORS: AssetRegistryDefault7, LOCAL_COMMUNITY: AssetRegistryDefault2, SCHOOL_CLUB: AssetRegistryDefault6 };
const obj2 = { CREATE: PencilIllocon.PencilIllocon, GAMING: ControllerIllocon.ControllerIllocon, FRIENDS: HeartIllocon.HeartIllocon, STUDY: AppleIllocon.AppleIllocon, CLUBS: BookIllocon.BookIllocon, CREATORS: PaintIllocon.PaintIllocon, LOCAL_COMMUNITY: LeafIllocon.LeafIllocon, SCHOOL_CLUB: BookIllocon.BookIllocon };
const result = size.fileFinishedImporting("modules/create_guild/native/CreateGuildIcons.tsx");

export const GUILD_TEMPLATE_ICONS = obj;
export const GUILD_TEMPLATE_ICON_COMPONENTS = obj2;
