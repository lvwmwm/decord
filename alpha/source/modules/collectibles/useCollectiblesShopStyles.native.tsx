// Module ID: 9315
// Function ID: 9316
// Name: useCollectiblesShopStyles
// Dependencies: [7997, 575, 9316, 2]

// Module 9315 (useCollectiblesShopStyles)
import nativeDefault from "native" /* 575 */;
import createUseCollectiblesShopStylesDefault from "createUseCollectiblesShopStyles" /* 9316 */;
import module_7997_mod from "module_7997" /* 7997 */;
import size from "module_2" /* 2 */;

let module_7997 = module_7997_mod;
const importDefaultResultResult = module_7997(nativeDefault.unsafe_rawColors.WHITE);
const saturateResult = importDefaultResultResult.saturate(1);
module_7997 = module_7997_mod;
const importDefaultResult1Result = module_7997(nativeDefault.unsafe_rawColors.BLACK);
const saturateResult1 = importDefaultResult1Result.saturate(1);
const tmp6 = createUseCollectiblesShopStylesDefault({ dark: saturateResult1, light: saturateResult });
const result = size.fileFinishedImporting("modules/collectibles/useCollectiblesShopStyles.native.tsx");

export default tmp6;
