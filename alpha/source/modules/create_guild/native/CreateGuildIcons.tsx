// Module ID: 13713
// Function ID: 13714
// Name: CreateGuildIcons
// Dependencies: [13281, 13285, 13283, 13284, 13286, 13287, 13282, 13714, 13717, 13721, 13725, 13729, 13733, 13737, 2]

// Module 13713 (CreateGuildIcons)
import AssetRegistryDefault from "AssetRegistry" /* 13281 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 13282 */;
import AssetRegistryDefault3 from "AssetRegistry" /* 13283 */;
import AssetRegistryDefault4 from "AssetRegistry" /* 13284 */;
import AssetRegistryDefault5 from "AssetRegistry" /* 13285 */;
import AssetRegistryDefault6 from "AssetRegistry" /* 13286 */;
import AssetRegistryDefault7 from "AssetRegistry" /* 13287 */;
import PencilIllocon from "PencilIllocon" /* 13714 */;
import ControllerIllocon from "ControllerIllocon" /* 13717 */;
import HeartIllocon from "HeartIllocon" /* 13721 */;
import AppleIllocon from "AppleIllocon" /* 13725 */;
import BookIllocon from "BookIllocon" /* 13729 */;
import PaintIllocon from "PaintIllocon" /* 13733 */;
import LeafIllocon from "LeafIllocon" /* 13737 */;
import size from "module_2" /* 2 */;

const obj = { CREATE: AssetRegistryDefault, GAMING: AssetRegistryDefault5, FRIENDS: AssetRegistryDefault3, STUDY: AssetRegistryDefault4, CLUBS: AssetRegistryDefault6, CREATORS: AssetRegistryDefault7, LOCAL_COMMUNITY: AssetRegistryDefault2, SCHOOL_CLUB: AssetRegistryDefault6 };
const obj2 = { CREATE: PencilIllocon.PencilIllocon, GAMING: ControllerIllocon.ControllerIllocon, FRIENDS: HeartIllocon.HeartIllocon, STUDY: AppleIllocon.AppleIllocon, CLUBS: BookIllocon.BookIllocon, CREATORS: PaintIllocon.PaintIllocon, LOCAL_COMMUNITY: LeafIllocon.LeafIllocon, SCHOOL_CLUB: BookIllocon.BookIllocon };
const result = size.fileFinishedImporting("modules/create_guild/native/CreateGuildIcons.tsx");

export const GUILD_TEMPLATE_ICONS = obj;
export const GUILD_TEMPLATE_ICON_COMPONENTS = obj2;
