// Module ID: 16706
// Function ID: 130204
// Name: NATIVE_REQUIRED_ASSETS
// Dependencies: [16707, 16714, 2]

// Module 16706 (NATIVE_REQUIRED_ASSETS)
const merged = Object.assign(require("NATIVE_REQUIRED_ASSETS_ICONS").NATIVE_REQUIRED_ASSETS_ICONS);
const merged1 = Object.assign(require("NATIVE_REQUIRED_ASSETS_MISC").NATIVE_REQUIRED_ASSETS_MISC);
const result = require("set").fileFinishedImporting("modules/react_asset/native/native_required_assets.tsx");

export const NATIVE_REQUIRED_ASSETS = {};
