// Module ID: 17400
// Function ID: 17401
// Name: NATIVE_REQUIRED_ASSETS
// Dependencies: [17401, 17408, 2]

// Module 17400 (NATIVE_REQUIRED_ASSETS)
import set from "set" /* 2 */;
import NATIVE_REQUIRED_ASSETS_ICONS from "NATIVE_REQUIRED_ASSETS_ICONS" /* 17401 */;
import NATIVE_REQUIRED_ASSETS_MISC from "NATIVE_REQUIRED_ASSETS_MISC" /* 17408 */;

const merged = Object.assign(NATIVE_REQUIRED_ASSETS_ICONS.NATIVE_REQUIRED_ASSETS_ICONS);
const merged1 = Object.assign(NATIVE_REQUIRED_ASSETS_MISC.NATIVE_REQUIRED_ASSETS_MISC);
const result = set.fileFinishedImporting("modules/react_asset/native/native_required_assets.tsx");

export const NATIVE_REQUIRED_ASSETS = {};
