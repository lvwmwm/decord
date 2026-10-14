// Module ID: 13319
// Function ID: 13320
// Name: useCollectiblesShopStyles
// Dependencies: [7280, 587, 13320, 2]

// Module 13319 (useCollectiblesShopStyles)
import nativeDefault from "native" /* 587 */;
import createUseCollectiblesShopStylesDefault from "createUseCollectiblesShopStyles" /* 13320 */;
import module_7280_mod from "module_7280" /* 7280 */;
import size from "module_2" /* 2 */;

let module_7280 = module_7280_mod;
const importDefaultResultResult = module_7280(nativeDefault.unsafe_rawColors.WHITE);
const saturateResult = importDefaultResultResult.saturate(1);
module_7280 = module_7280_mod;
const importDefaultResult1Result = module_7280(nativeDefault.unsafe_rawColors.BLACK);
const saturateResult1 = importDefaultResult1Result.saturate(1);
const tmp6 = createUseCollectiblesShopStylesDefault({ dark: saturateResult1, light: saturateResult });
const result = size.fileFinishedImporting("modules/collectibles/useCollectiblesShopStyles.native.tsx");

export default tmp6;
