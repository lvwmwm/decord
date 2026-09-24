// Module ID: 12894
// Function ID: 12895
// Name: CreateGuildIcons
// Dependencies: [12509, 12513, 12511, 12512, 12514, 12515, 12510, 5939, 2]

// Module 12894 (CreateGuildIcons)
import native from "native" /* 5939 */;
import _modDef12509 from "module_12509" /* 12509 */;
import _modDef12510 from "module_12510" /* 12510 */;
import _modDef12511 from "module_12511" /* 12511 */;
import _modDef12512 from "module_12512" /* 12512 */;
import _modDef12513 from "module_12513" /* 12513 */;
import _modDef12514 from "module_12514" /* 12514 */;
import _modDef12515 from "module_12515" /* 12515 */;
import size from "module_2" /* 2 */;

const obj = { CREATE: _modDef12509, GAMING: _modDef12513, FRIENDS: _modDef12511, STUDY: _modDef12512, CLUBS: _modDef12514, CREATORS: _modDef12515, LOCAL_COMMUNITY: _modDef12510, SCHOOL_CLUB: _modDef12514 };
const result = size.fileFinishedImporting("modules/create_guild/native/CreateGuildIcons.tsx");

export const GUILD_TEMPLATE_ICONS = obj;
export const GUILD_TEMPLATE_ICON_COMPONENTS = { CREATE: native.PencilIllocon, GAMING: native.ControllerIllocon, FRIENDS: native.HeartIllocon, STUDY: native.AppleIllocon, CLUBS: native.BookIllocon, CREATORS: native.PaintIllocon, LOCAL_COMMUNITY: native.LeafIllocon, SCHOOL_CLUB: native.BookIllocon };
