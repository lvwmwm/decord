// Module ID: 12844
// Function ID: 12845
// Name: CreateGuildIcons
// Dependencies: [12459, 12463, 12461, 12462, 12464, 12465, 12460, 5773, 2]

// Module 12844 (CreateGuildIcons)
import native from "native" /* 5773 */;
import _modDef12459 from "module_12459" /* 12459 */;
import _modDef12460 from "module_12460" /* 12460 */;
import _modDef12461 from "module_12461" /* 12461 */;
import _modDef12462 from "module_12462" /* 12462 */;
import _modDef12463 from "module_12463" /* 12463 */;
import _modDef12464 from "module_12464" /* 12464 */;
import _modDef12465 from "module_12465" /* 12465 */;
import size from "module_2" /* 2 */;

const obj = { CREATE: _modDef12459, GAMING: _modDef12463, FRIENDS: _modDef12461, STUDY: _modDef12462, CLUBS: _modDef12464, CREATORS: _modDef12465, LOCAL_COMMUNITY: _modDef12460, SCHOOL_CLUB: _modDef12464 };
const result = size.fileFinishedImporting("modules/create_guild/native/CreateGuildIcons.tsx");

export const GUILD_TEMPLATE_ICONS = obj;
export const GUILD_TEMPLATE_ICON_COMPONENTS = { CREATE: native.PencilIllocon, GAMING: native.ControllerIllocon, FRIENDS: native.HeartIllocon, STUDY: native.AppleIllocon, CLUBS: native.BookIllocon, CREATORS: native.PaintIllocon, LOCAL_COMMUNITY: native.LeafIllocon, SCHOOL_CLUB: native.BookIllocon };
