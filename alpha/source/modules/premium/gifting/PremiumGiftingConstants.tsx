// Module ID: 14385
// Function ID: 14386
// Name: PremiumGiftingConstants
// Dependencies: [1386, 2601, 2]

// Module 14385 (PremiumGiftingConstants)
import PremiumConstants from "PremiumConstants" /* 1386 */;
import _modDef2601 from "module_2601" /* 2601 */;
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
const obj = { [SNOWGLOBE]: _modDef2601.M6cPwB, [BOX]: _modDef2601.B9XqQk, [CUP]: _modDef2601["6dCq/u"], [STANDARD_BOX]: _modDef2601.GzPel1, [CAKE]: _modDef2601.AJ4iir, [CHEST]: _modDef2601.P5keo3, [COFFEE]: _modDef2601.w84vET, [SEASONAL_STANDARD_BOX]: _modDef2601["vd1fu/"], [SEASONAL_CAKE]: _modDef2601.aubYGR, [SEASONAL_CHEST]: _modDef2601.vjxYqU, [SEASONAL_COFFEE]: _modDef2601.bHuJLa, [NITROWEEN_STANDARD]: _modDef2601["+HMF8k"] };
({ SNOWGLOBE, BOX, CUP, STANDARD_BOX, CAKE, CHEST, COFFEE, SEASONAL_STANDARD_BOX, SEASONAL_CAKE, SEASONAL_CHEST, SEASONAL_COFFEE, NITROWEEN_STANDARD } = PremiumGiftStyles);
const result = size.fileFinishedImporting("modules/premium/gifting/PremiumGiftingConstants.tsx");

export const GIFT_STYLE_DESCRIPTIONS = obj;
