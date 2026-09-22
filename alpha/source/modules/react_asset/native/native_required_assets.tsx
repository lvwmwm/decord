// Module ID: 18375
// Function ID: 18376
// Name: native_required_assets
// Dependencies: [18376, 18382, 2]

// Module 18375 (native_required_assets)
import native_required_assets_icons from "native_required_assets_icons" /* 18376 */;
import native_required_assets_misc from "native_required_assets_misc" /* 18382 */;
import size from "module_2" /* 2 */;

const merged = Object.assign(native_required_assets_icons.NATIVE_REQUIRED_ASSETS_ICONS);
const merged1 = Object.assign(native_required_assets_misc.NATIVE_REQUIRED_ASSETS_MISC);
const result = size.fileFinishedImporting("modules/react_asset/native/native_required_assets.tsx");

export const NATIVE_REQUIRED_ASSETS = {};
