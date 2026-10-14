// Module ID: 12981
// Function ID: 12982
// Name: CreateGuildIcons
// Dependencies: [12575, 12579, 12577, 12578, 12580, 12581, 12576, 12982, 12985, 12989, 12993, 12997, 13001, 13005, 2]

// Module 12981 (CreateGuildIcons)
import AssetRegistryDefault from "AssetRegistry" /* 12575 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 12576 */;
import AssetRegistryDefault3 from "AssetRegistry" /* 12577 */;
import AssetRegistryDefault4 from "AssetRegistry" /* 12578 */;
import AssetRegistryDefault5 from "AssetRegistry" /* 12579 */;
import AssetRegistryDefault6 from "AssetRegistry" /* 12580 */;
import AssetRegistryDefault7 from "AssetRegistry" /* 12581 */;
import PencilIllocon from "PencilIllocon" /* 12982 */;
import ControllerIllocon from "ControllerIllocon" /* 12985 */;
import HeartIllocon from "HeartIllocon" /* 12989 */;
import AppleIllocon from "AppleIllocon" /* 12993 */;
import BookIllocon from "BookIllocon" /* 12997 */;
import PaintIllocon from "PaintIllocon" /* 13001 */;
import LeafIllocon from "LeafIllocon" /* 13005 */;
import size from "module_2" /* 2 */;

const obj = { CREATE: AssetRegistryDefault, GAMING: AssetRegistryDefault5, FRIENDS: AssetRegistryDefault3, STUDY: AssetRegistryDefault4, CLUBS: AssetRegistryDefault6, CREATORS: AssetRegistryDefault7, LOCAL_COMMUNITY: AssetRegistryDefault2, SCHOOL_CLUB: AssetRegistryDefault6 };
const obj2 = { CREATE: PencilIllocon.PencilIllocon, GAMING: ControllerIllocon.ControllerIllocon, FRIENDS: HeartIllocon.HeartIllocon, STUDY: AppleIllocon.AppleIllocon, CLUBS: BookIllocon.BookIllocon, CREATORS: PaintIllocon.PaintIllocon, LOCAL_COMMUNITY: LeafIllocon.LeafIllocon, SCHOOL_CLUB: BookIllocon.BookIllocon };
const result = size.fileFinishedImporting("modules/create_guild/native/CreateGuildIcons.tsx");

export const GUILD_TEMPLATE_ICONS = obj;
export const GUILD_TEMPLATE_ICON_COMPONENTS = obj2;
