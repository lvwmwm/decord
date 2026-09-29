// Module ID: 12993
// Function ID: 12994
// Name: CreateGuildIcons
// Dependencies: [12609, 12613, 12611, 12612, 12614, 12615, 12610, 5941, 2]

// Module 12993 (CreateGuildIcons)
import native from "native" /* 5941 */;
import _modDef12609 from "module_12609" /* 12609 */;
import _modDef12610 from "module_12610" /* 12610 */;
import _modDef12611 from "module_12611" /* 12611 */;
import _modDef12612 from "module_12612" /* 12612 */;
import _modDef12613 from "module_12613" /* 12613 */;
import _modDef12614 from "module_12614" /* 12614 */;
import _modDef12615 from "module_12615" /* 12615 */;
import size from "module_2" /* 2 */;

const obj = { CREATE: _modDef12609, GAMING: _modDef12613, FRIENDS: _modDef12611, STUDY: _modDef12612, CLUBS: _modDef12614, CREATORS: _modDef12615, LOCAL_COMMUNITY: _modDef12610, SCHOOL_CLUB: _modDef12614 };
const result = size.fileFinishedImporting("modules/create_guild/native/CreateGuildIcons.tsx");

export const GUILD_TEMPLATE_ICONS = obj;
export const GUILD_TEMPLATE_ICON_COMPONENTS = { CREATE: native.PencilIllocon, GAMING: native.ControllerIllocon, FRIENDS: native.HeartIllocon, STUDY: native.AppleIllocon, CLUBS: native.BookIllocon, CREATORS: native.PaintIllocon, LOCAL_COMMUNITY: native.LeafIllocon, SCHOOL_CLUB: native.BookIllocon };
