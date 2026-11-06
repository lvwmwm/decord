// Module ID: 14699
// Function ID: 14700
// Name: useCollectiblesShopStyles
// Dependencies: [7829, 575, 14700, 2]

// Module 14699 (useCollectiblesShopStyles)
import nativeDefault from "native" /* 575 */;
import createUseCollectiblesShopStylesDefault from "createUseCollectiblesShopStyles" /* 14700 */;
import module_7829_mod from "module_7829" /* 7829 */;
import size from "module_2" /* 2 */;

let module_7829 = module_7829_mod;
const importDefaultResultResult = module_7829(nativeDefault.unsafe_rawColors.WHITE);
const saturateResult = importDefaultResultResult.saturate(1);
module_7829 = module_7829_mod;
const importDefaultResult1Result = module_7829(nativeDefault.unsafe_rawColors.BLACK);
const saturateResult1 = importDefaultResult1Result.saturate(1);
const tmp6 = createUseCollectiblesShopStylesDefault({ dark: saturateResult1, light: saturateResult });
const result = size.fileFinishedImporting("modules/collectibles/useCollectiblesShopStyles.native.tsx");

export default tmp6;
