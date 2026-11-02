// Module ID: 14497
// Function ID: 14498
// Name: useCollectiblesShopStyles
// Dependencies: [7730, 575, 14498, 2]

// Module 14497 (useCollectiblesShopStyles)
import nativeDefault from "native" /* 575 */;
import createUseCollectiblesShopStylesDefault from "createUseCollectiblesShopStyles" /* 14498 */;
import module_7730_mod from "module_7730" /* 7730 */;
import size from "module_2" /* 2 */;

let module_7730 = module_7730_mod;
const importDefaultResultResult = module_7730(nativeDefault.unsafe_rawColors.WHITE);
const saturateResult = importDefaultResultResult.saturate(1);
module_7730 = module_7730_mod;
const importDefaultResult1Result = module_7730(nativeDefault.unsafe_rawColors.BLACK);
const saturateResult1 = importDefaultResult1Result.saturate(1);
const tmp6 = createUseCollectiblesShopStylesDefault({ dark: saturateResult1, light: saturateResult });
const result = size.fileFinishedImporting("modules/collectibles/useCollectiblesShopStyles.native.tsx");

export default tmp6;
