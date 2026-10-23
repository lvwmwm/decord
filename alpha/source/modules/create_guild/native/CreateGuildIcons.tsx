// Module ID: 13574
// Function ID: 13575
// Name: CreateGuildIcons
// Dependencies: [13168, 13172, 13170, 13171, 13173, 13174, 13169, 13575, 13578, 13582, 13586, 13590, 13594, 13598, 2]

// Module 13574 (CreateGuildIcons)
import AssetRegistryDefault from "AssetRegistry" /* 13168 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 13169 */;
import AssetRegistryDefault3 from "AssetRegistry" /* 13170 */;
import AssetRegistryDefault4 from "AssetRegistry" /* 13171 */;
import AssetRegistryDefault5 from "AssetRegistry" /* 13172 */;
import AssetRegistryDefault6 from "AssetRegistry" /* 13173 */;
import AssetRegistryDefault7 from "AssetRegistry" /* 13174 */;
import PencilIllocon from "PencilIllocon" /* 13575 */;
import ControllerIllocon from "ControllerIllocon" /* 13578 */;
import HeartIllocon from "HeartIllocon" /* 13582 */;
import AppleIllocon from "AppleIllocon" /* 13586 */;
import BookIllocon from "BookIllocon" /* 13590 */;
import PaintIllocon from "PaintIllocon" /* 13594 */;
import LeafIllocon from "LeafIllocon" /* 13598 */;
import size from "module_2" /* 2 */;

const obj = { CREATE: AssetRegistryDefault, GAMING: AssetRegistryDefault5, FRIENDS: AssetRegistryDefault3, STUDY: AssetRegistryDefault4, CLUBS: AssetRegistryDefault6, CREATORS: AssetRegistryDefault7, LOCAL_COMMUNITY: AssetRegistryDefault2, SCHOOL_CLUB: AssetRegistryDefault6 };
const obj2 = { CREATE: PencilIllocon.PencilIllocon, GAMING: ControllerIllocon.ControllerIllocon, FRIENDS: HeartIllocon.HeartIllocon, STUDY: AppleIllocon.AppleIllocon, CLUBS: BookIllocon.BookIllocon, CREATORS: PaintIllocon.PaintIllocon, LOCAL_COMMUNITY: LeafIllocon.LeafIllocon, SCHOOL_CLUB: BookIllocon.BookIllocon };
const result = size.fileFinishedImporting("modules/create_guild/native/CreateGuildIcons.tsx");

export const GUILD_TEMPLATE_ICONS = obj;
export const GUILD_TEMPLATE_ICON_COMPONENTS = obj2;
