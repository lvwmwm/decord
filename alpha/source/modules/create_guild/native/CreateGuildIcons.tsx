// Module ID: 14919
// Function ID: 14920
// Name: CreateGuildIcons
// Dependencies: [14614, 14618, 14616, 14617, 14619, 14620, 14615, 14920, 14923, 14927, 14931, 14935, 14939, 14943, 2]

// Module 14919 (CreateGuildIcons)
import AssetRegistryDefault from "AssetRegistry" /* 14614 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 14615 */;
import AssetRegistryDefault3 from "AssetRegistry" /* 14616 */;
import AssetRegistryDefault4 from "AssetRegistry" /* 14617 */;
import AssetRegistryDefault5 from "AssetRegistry" /* 14618 */;
import AssetRegistryDefault6 from "AssetRegistry" /* 14619 */;
import AssetRegistryDefault7 from "AssetRegistry" /* 14620 */;
import PencilIllocon from "PencilIllocon" /* 14920 */;
import ControllerIllocon from "ControllerIllocon" /* 14923 */;
import HeartIllocon from "HeartIllocon" /* 14927 */;
import AppleIllocon from "AppleIllocon" /* 14931 */;
import BookIllocon from "BookIllocon" /* 14935 */;
import PaintIllocon from "PaintIllocon" /* 14939 */;
import LeafIllocon from "LeafIllocon" /* 14943 */;
import size from "module_2" /* 2 */;

const obj = { CREATE: AssetRegistryDefault, GAMING: AssetRegistryDefault5, FRIENDS: AssetRegistryDefault3, STUDY: AssetRegistryDefault4, CLUBS: AssetRegistryDefault6, CREATORS: AssetRegistryDefault7, LOCAL_COMMUNITY: AssetRegistryDefault2, SCHOOL_CLUB: AssetRegistryDefault6 };
const obj2 = { CREATE: PencilIllocon.PencilIllocon, GAMING: ControllerIllocon.ControllerIllocon, FRIENDS: HeartIllocon.HeartIllocon, STUDY: AppleIllocon.AppleIllocon, CLUBS: BookIllocon.BookIllocon, CREATORS: PaintIllocon.PaintIllocon, LOCAL_COMMUNITY: LeafIllocon.LeafIllocon, SCHOOL_CLUB: BookIllocon.BookIllocon };
const result = size.fileFinishedImporting("modules/create_guild/native/CreateGuildIcons.tsx");

export const GUILD_TEMPLATE_ICONS = obj;
export const GUILD_TEMPLATE_ICON_COMPONENTS = obj2;
