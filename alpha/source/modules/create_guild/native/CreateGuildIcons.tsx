// Module ID: 14268
// Function ID: 14269
// Name: CreateGuildIcons
// Dependencies: [13859, 13863, 13861, 13862, 13864, 13865, 13860, 14269, 14272, 14276, 14280, 14284, 14288, 14292, 2]

// Module 14268 (CreateGuildIcons)
import AssetRegistryDefault from "AssetRegistry" /* 13859 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 13860 */;
import AssetRegistryDefault3 from "AssetRegistry" /* 13861 */;
import AssetRegistryDefault4 from "AssetRegistry" /* 13862 */;
import AssetRegistryDefault5 from "AssetRegistry" /* 13863 */;
import AssetRegistryDefault6 from "AssetRegistry" /* 13864 */;
import AssetRegistryDefault7 from "AssetRegistry" /* 13865 */;
import PencilIllocon from "PencilIllocon" /* 14269 */;
import ControllerIllocon from "ControllerIllocon" /* 14272 */;
import HeartIllocon from "HeartIllocon" /* 14276 */;
import AppleIllocon from "AppleIllocon" /* 14280 */;
import BookIllocon from "BookIllocon" /* 14284 */;
import PaintIllocon from "PaintIllocon" /* 14288 */;
import LeafIllocon from "LeafIllocon" /* 14292 */;
import size from "module_2" /* 2 */;

const obj = { CREATE: AssetRegistryDefault, GAMING: AssetRegistryDefault5, FRIENDS: AssetRegistryDefault3, STUDY: AssetRegistryDefault4, CLUBS: AssetRegistryDefault6, CREATORS: AssetRegistryDefault7, LOCAL_COMMUNITY: AssetRegistryDefault2, SCHOOL_CLUB: AssetRegistryDefault6 };
const obj2 = { CREATE: PencilIllocon.PencilIllocon, GAMING: ControllerIllocon.ControllerIllocon, FRIENDS: HeartIllocon.HeartIllocon, STUDY: AppleIllocon.AppleIllocon, CLUBS: BookIllocon.BookIllocon, CREATORS: PaintIllocon.PaintIllocon, LOCAL_COMMUNITY: LeafIllocon.LeafIllocon, SCHOOL_CLUB: BookIllocon.BookIllocon };
const result = size.fileFinishedImporting("modules/create_guild/native/CreateGuildIcons.tsx");

export const GUILD_TEMPLATE_ICONS = obj;
export const GUILD_TEMPLATE_ICON_COMPONENTS = obj2;
