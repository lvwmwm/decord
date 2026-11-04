// Module ID: 20398
// Function ID: 20399
// Name: native_required_assets
// Dependencies: [20399, 20405, 2]

// Module 20398 (native_required_assets)
import native_required_assets_icons from "native_required_assets_icons" /* 20399 */;
import native_required_assets_misc from "native_required_assets_misc" /* 20405 */;
import size from "module_2" /* 2 */;

const obj = {};
const merged = Object.assign(native_required_assets_icons.NATIVE_REQUIRED_ASSETS_ICONS);
const merged1 = Object.assign(native_required_assets_misc.NATIVE_REQUIRED_ASSETS_MISC);
const result = size.fileFinishedImporting("modules/react_asset/native/native_required_assets.tsx");

export const NATIVE_REQUIRED_ASSETS = obj;
