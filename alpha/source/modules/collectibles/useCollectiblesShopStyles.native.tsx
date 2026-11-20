// Module ID: 9292
// Function ID: 9293
// Name: useCollectiblesShopStyles
// Dependencies: [7965, 575, 9293, 2]

// Module 9292 (useCollectiblesShopStyles)
import nativeDefault from "native" /* 575 */;
import createUseCollectiblesShopStylesDefault from "createUseCollectiblesShopStyles" /* 9293 */;
import module_7965_mod from "module_7965" /* 7965 */;
import size from "module_2" /* 2 */;

let module_7965 = module_7965_mod;
const importDefaultResultResult = module_7965(nativeDefault.unsafe_rawColors.WHITE);
const saturateResult = importDefaultResultResult.saturate(1);
module_7965 = module_7965_mod;
const importDefaultResult1Result = module_7965(nativeDefault.unsafe_rawColors.BLACK);
const saturateResult1 = importDefaultResult1Result.saturate(1);
const tmp6 = createUseCollectiblesShopStylesDefault({ dark: saturateResult1, light: saturateResult });
const result = size.fileFinishedImporting("modules/collectibles/useCollectiblesShopStyles.native.tsx");

export default tmp6;
