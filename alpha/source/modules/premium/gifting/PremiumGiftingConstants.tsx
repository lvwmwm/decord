// Module ID: 13900
// Function ID: 13901
// Name: PremiumGiftingConstants
// Dependencies: [1391, 2599, 2]

// Module 13900 (PremiumGiftingConstants)
import PremiumConstants from "PremiumConstants" /* 1391 */;
import _modDef2599 from "module_2599" /* 2599 */;
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
const obj = { [SNOWGLOBE]: _modDef2599.M6cPwB, [BOX]: _modDef2599.B9XqQk, [CUP]: _modDef2599["6dCq/u"], [STANDARD_BOX]: _modDef2599.GzPel1, [CAKE]: _modDef2599.AJ4iir, [CHEST]: _modDef2599.P5keo3, [COFFEE]: _modDef2599.w84vET, [SEASONAL_STANDARD_BOX]: _modDef2599["vd1fu/"], [SEASONAL_CAKE]: _modDef2599.aubYGR, [SEASONAL_CHEST]: _modDef2599.vjxYqU, [SEASONAL_COFFEE]: _modDef2599.bHuJLa, [NITROWEEN_STANDARD]: _modDef2599["+HMF8k"] };
({ SNOWGLOBE, BOX, CUP, STANDARD_BOX, CAKE, CHEST, COFFEE, SEASONAL_STANDARD_BOX, SEASONAL_CAKE, SEASONAL_CHEST, SEASONAL_COFFEE, NITROWEEN_STANDARD } = PremiumGiftStyles);
const result = size.fileFinishedImporting("modules/premium/gifting/PremiumGiftingConstants.tsx");

export const GIFT_STYLE_DESCRIPTIONS = obj;
