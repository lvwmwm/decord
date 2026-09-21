// Module ID: 12858
// Function ID: 12859
// Name: CreateGuildIcons
// Dependencies: [12473, 12477, 12475, 12476, 12478, 12479, 12474, 5907, 2]

// Module 12858 (CreateGuildIcons)
import native from "native" /* 5907 */;
import _modDef12473 from "module_12473" /* 12473 */;
import _modDef12474 from "module_12474" /* 12474 */;
import _modDef12475 from "module_12475" /* 12475 */;
import _modDef12476 from "module_12476" /* 12476 */;
import _modDef12477 from "module_12477" /* 12477 */;
import _modDef12478 from "module_12478" /* 12478 */;
import _modDef12479 from "module_12479" /* 12479 */;
import size from "module_2" /* 2 */;

const obj = { CREATE: _modDef12473, GAMING: _modDef12477, FRIENDS: _modDef12475, STUDY: _modDef12476, CLUBS: _modDef12478, CREATORS: _modDef12479, LOCAL_COMMUNITY: _modDef12474, SCHOOL_CLUB: _modDef12478 };
const result = size.fileFinishedImporting("modules/create_guild/native/CreateGuildIcons.tsx");

export const GUILD_TEMPLATE_ICONS = obj;
export const GUILD_TEMPLATE_ICON_COMPONENTS = { CREATE: native.PencilIllocon, GAMING: native.ControllerIllocon, FRIENDS: native.HeartIllocon, STUDY: native.AppleIllocon, CLUBS: native.BookIllocon, CREATORS: native.PaintIllocon, LOCAL_COMMUNITY: native.LeafIllocon, SCHOOL_CLUB: native.BookIllocon };
