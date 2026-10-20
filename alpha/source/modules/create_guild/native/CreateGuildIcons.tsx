// Module ID: 13416
// Function ID: 13417
// Name: CreateGuildIcons
// Dependencies: [13007, 13011, 13009, 13010, 13012, 13013, 13008, 13417, 13420, 13424, 13428, 13432, 13436, 13440, 2]

// Module 13416 (CreateGuildIcons)
import AssetRegistryDefault from "AssetRegistry" /* 13007 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 13008 */;
import AssetRegistryDefault3 from "AssetRegistry" /* 13009 */;
import AssetRegistryDefault4 from "AssetRegistry" /* 13010 */;
import AssetRegistryDefault5 from "AssetRegistry" /* 13011 */;
import AssetRegistryDefault6 from "AssetRegistry" /* 13012 */;
import AssetRegistryDefault7 from "AssetRegistry" /* 13013 */;
import PencilIllocon from "PencilIllocon" /* 13417 */;
import ControllerIllocon from "ControllerIllocon" /* 13420 */;
import HeartIllocon from "HeartIllocon" /* 13424 */;
import AppleIllocon from "AppleIllocon" /* 13428 */;
import BookIllocon from "BookIllocon" /* 13432 */;
import PaintIllocon from "PaintIllocon" /* 13436 */;
import LeafIllocon from "LeafIllocon" /* 13440 */;
import size from "module_2" /* 2 */;

const obj = { CREATE: AssetRegistryDefault, GAMING: AssetRegistryDefault5, FRIENDS: AssetRegistryDefault3, STUDY: AssetRegistryDefault4, CLUBS: AssetRegistryDefault6, CREATORS: AssetRegistryDefault7, LOCAL_COMMUNITY: AssetRegistryDefault2, SCHOOL_CLUB: AssetRegistryDefault6 };
const obj2 = { CREATE: PencilIllocon.PencilIllocon, GAMING: ControllerIllocon.ControllerIllocon, FRIENDS: HeartIllocon.HeartIllocon, STUDY: AppleIllocon.AppleIllocon, CLUBS: BookIllocon.BookIllocon, CREATORS: PaintIllocon.PaintIllocon, LOCAL_COMMUNITY: LeafIllocon.LeafIllocon, SCHOOL_CLUB: BookIllocon.BookIllocon };
const result = size.fileFinishedImporting("modules/create_guild/native/CreateGuildIcons.tsx");

export const GUILD_TEMPLATE_ICONS = obj;
export const GUILD_TEMPLATE_ICON_COMPONENTS = obj2;
