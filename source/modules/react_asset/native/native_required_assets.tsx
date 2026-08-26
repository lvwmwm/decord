// Module ID: 17334
// Function ID: 17335
// Name: NATIVE_REQUIRED_ASSETS
// Dependencies: [17335, 17342, 2]

// Module 17334 (NATIVE_REQUIRED_ASSETS)
import set from "set" /* 2 */;
import NATIVE_REQUIRED_ASSETS_ICONS from "NATIVE_REQUIRED_ASSETS_ICONS" /* 17335 */;
import NATIVE_REQUIRED_ASSETS_MISC from "NATIVE_REQUIRED_ASSETS_MISC" /* 17342 */;

const merged = Object.assign(NATIVE_REQUIRED_ASSETS_ICONS.NATIVE_REQUIRED_ASSETS_ICONS);
const merged1 = Object.assign(NATIVE_REQUIRED_ASSETS_MISC.NATIVE_REQUIRED_ASSETS_MISC);
const result = set.fileFinishedImporting("modules/react_asset/native/native_required_assets.tsx");

export const NATIVE_REQUIRED_ASSETS = {};
