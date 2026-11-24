// Module ID: 9412
// Function ID: 9413
// Name: useCollectiblesShopStyles
// Dependencies: [8085, 575, 9413, 2]

// Module 9412 (useCollectiblesShopStyles)
import nativeDefault from "native" /* 575 */;
import createUseCollectiblesShopStylesDefault from "createUseCollectiblesShopStyles" /* 9413 */;
import module_8085_mod from "module_8085" /* 8085 */;
import size from "module_2" /* 2 */;

let module_8085 = module_8085_mod;
const importDefaultResultResult = module_8085(nativeDefault.unsafe_rawColors.WHITE);
const saturateResult = importDefaultResultResult.saturate(1);
module_8085 = module_8085_mod;
const importDefaultResult1Result = module_8085(nativeDefault.unsafe_rawColors.BLACK);
const saturateResult1 = importDefaultResult1Result.saturate(1);
const tmp6 = createUseCollectiblesShopStylesDefault({ dark: saturateResult1, light: saturateResult });
const result = size.fileFinishedImporting("modules/collectibles/useCollectiblesShopStyles.native.tsx");

export default tmp6;
