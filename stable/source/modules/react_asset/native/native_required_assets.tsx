// Module ID: 18020
// Function ID: 18021
// Name: native_required_assets
// Dependencies: [18021, 18028, 2]

// Module 18020 (native_required_assets)
import native_required_assets_icons from "native_required_assets_icons" /* 18021 */;
import native_required_assets_misc from "native_required_assets_misc" /* 18028 */;
import size from "module_2" /* 2 */;

const merged = Object.assign(native_required_assets_icons.NATIVE_REQUIRED_ASSETS_ICONS);
const merged1 = Object.assign(native_required_assets_misc.NATIVE_REQUIRED_ASSETS_MISC);
const result = size.fileFinishedImporting("modules/react_asset/native/native_required_assets.tsx");

export const NATIVE_REQUIRED_ASSETS = {};
