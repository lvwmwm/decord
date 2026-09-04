// Module ID: 17827
// Function ID: 17828
// Name: NATIVE_REQUIRED_ASSETS
// Dependencies: [17828, 17835, 2]

// Module 17827 (NATIVE_REQUIRED_ASSETS)
import set from "set" /* 2 */;
import NATIVE_REQUIRED_ASSETS_ICONS from "NATIVE_REQUIRED_ASSETS_ICONS" /* 17828 */;
import NATIVE_REQUIRED_ASSETS_MISC from "NATIVE_REQUIRED_ASSETS_MISC" /* 17835 */;

const merged = Object.assign(NATIVE_REQUIRED_ASSETS_ICONS.NATIVE_REQUIRED_ASSETS_ICONS);
const merged1 = Object.assign(NATIVE_REQUIRED_ASSETS_MISC.NATIVE_REQUIRED_ASSETS_MISC);
const result = set.fileFinishedImporting("modules/react_asset/native/native_required_assets.tsx");

export const NATIVE_REQUIRED_ASSETS = {};
