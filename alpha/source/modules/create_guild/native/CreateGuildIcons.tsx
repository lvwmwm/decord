// Module ID: 14915
// Function ID: 14916
// Name: CreateGuildIcons
// Dependencies: [14610, 14614, 14612, 14613, 14615, 14616, 14611, 14916, 14919, 14923, 14927, 14931, 14935, 14939, 2]

// Module 14915 (CreateGuildIcons)
import AssetRegistryDefault from "AssetRegistry" /* 14610 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 14611 */;
import AssetRegistryDefault3 from "AssetRegistry" /* 14612 */;
import AssetRegistryDefault4 from "AssetRegistry" /* 14613 */;
import AssetRegistryDefault5 from "AssetRegistry" /* 14614 */;
import AssetRegistryDefault6 from "AssetRegistry" /* 14615 */;
import AssetRegistryDefault7 from "AssetRegistry" /* 14616 */;
import PencilIllocon from "PencilIllocon" /* 14916 */;
import ControllerIllocon from "ControllerIllocon" /* 14919 */;
import HeartIllocon from "HeartIllocon" /* 14923 */;
import AppleIllocon from "AppleIllocon" /* 14927 */;
import BookIllocon from "BookIllocon" /* 14931 */;
import PaintIllocon from "PaintIllocon" /* 14935 */;
import LeafIllocon from "LeafIllocon" /* 14939 */;
import size from "module_2" /* 2 */;

const obj = { CREATE: AssetRegistryDefault, GAMING: AssetRegistryDefault5, FRIENDS: AssetRegistryDefault3, STUDY: AssetRegistryDefault4, CLUBS: AssetRegistryDefault6, CREATORS: AssetRegistryDefault7, LOCAL_COMMUNITY: AssetRegistryDefault2, SCHOOL_CLUB: AssetRegistryDefault6 };
const obj2 = { CREATE: PencilIllocon.PencilIllocon, GAMING: ControllerIllocon.ControllerIllocon, FRIENDS: HeartIllocon.HeartIllocon, STUDY: AppleIllocon.AppleIllocon, CLUBS: BookIllocon.BookIllocon, CREATORS: PaintIllocon.PaintIllocon, LOCAL_COMMUNITY: LeafIllocon.LeafIllocon, SCHOOL_CLUB: BookIllocon.BookIllocon };
const result = size.fileFinishedImporting("modules/create_guild/native/CreateGuildIcons.tsx");

export const GUILD_TEMPLATE_ICONS = obj;
export const GUILD_TEMPLATE_ICON_COMPONENTS = obj2;
