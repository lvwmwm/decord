// Module ID: 14352
// Function ID: 14353
// Name: PremiumGiftingConstants
// Dependencies: [1391, 2600, 2]

// Module 14352 (PremiumGiftingConstants)
import PremiumConstants from "PremiumConstants" /* 1391 */;
import _modDef2600 from "module_2600" /* 2600 */;
import size from "module_2" /* 2 */;

let BOX;
let CAKE;
let CHEST;
let COFFEE;
let CUP;
let NITROWEEN_STANDARD;
let SEASONAL_CAKE;
let SEASONAL_CHEST;
let SEASONAL_COFFEE;
let SEASONAL_STANDARD_BOX;
let SNOWGLOBE;
let STANDARD_BOX;
const PremiumGiftStyles = PremiumConstants.PremiumGiftStyles;
const obj = { [SNOWGLOBE]: _modDef2600.M6cPwB, [BOX]: _modDef2600.B9XqQk, [CUP]: _modDef2600["6dCq/u"], [STANDARD_BOX]: _modDef2600.GzPel1, [CAKE]: _modDef2600.AJ4iir, [CHEST]: _modDef2600.P5keo3, [COFFEE]: _modDef2600.w84vET, [SEASONAL_STANDARD_BOX]: _modDef2600["vd1fu/"], [SEASONAL_CAKE]: _modDef2600.aubYGR, [SEASONAL_CHEST]: _modDef2600.vjxYqU, [SEASONAL_COFFEE]: _modDef2600.bHuJLa, [NITROWEEN_STANDARD]: _modDef2600["+HMF8k"] };
({ SNOWGLOBE, BOX, CUP, STANDARD_BOX, CAKE, CHEST, COFFEE, SEASONAL_STANDARD_BOX, SEASONAL_CAKE, SEASONAL_CHEST, SEASONAL_COFFEE, NITROWEEN_STANDARD } = PremiumGiftStyles);
const result = size.fileFinishedImporting("modules/premium/gifting/PremiumGiftingConstants.tsx");

export const GIFT_STYLE_DESCRIPTIONS = obj;
