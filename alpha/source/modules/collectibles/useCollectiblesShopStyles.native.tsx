// Module ID: 12725
// Function ID: 12726
// Name: useCollectiblesShopStyles
// Dependencies: [7267, 587, 12726, 2]

// Module 12725 (useCollectiblesShopStyles)
import nativeDefault from "native" /* 587 */;
import createUseCollectiblesShopStylesDefault from "createUseCollectiblesShopStyles" /* 12726 */;
import module_7267_mod from "module_7267" /* 7267 */;
import size from "module_2" /* 2 */;

let module_7267 = module_7267_mod;
const importDefaultResultResult = module_7267(nativeDefault.unsafe_rawColors.WHITE);
const saturateResult = importDefaultResultResult.saturate(1);
module_7267 = module_7267_mod;
const importDefaultResult1Result = module_7267(nativeDefault.unsafe_rawColors.BLACK);
const saturateResult1 = importDefaultResult1Result.saturate(1);
const tmp6 = createUseCollectiblesShopStylesDefault({ dark: saturateResult1, light: saturateResult });
const result = size.fileFinishedImporting("modules/collectibles/useCollectiblesShopStyles.native.tsx");

export default tmp6;
