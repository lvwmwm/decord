// Module ID: 9955
// Function ID: 9956
// Name: useCollectiblesShopStyles
// Dependencies: [8429, 575, 9956, 2]

// Module 9955 (useCollectiblesShopStyles)
import nativeDefault from "native" /* 575 */;
import createUseCollectiblesShopStylesDefault from "createUseCollectiblesShopStyles" /* 9956 */;
import module_8429_mod from "module_8429" /* 8429 */;
import size from "module_2" /* 2 */;

let module_8429 = module_8429_mod;
const importDefaultResultResult = module_8429(nativeDefault.unsafe_rawColors.WHITE);
const saturateResult = importDefaultResultResult.saturate(1);
module_8429 = module_8429_mod;
const importDefaultResult1Result = module_8429(nativeDefault.unsafe_rawColors.BLACK);
const saturateResult1 = importDefaultResult1Result.saturate(1);
const tmp6 = createUseCollectiblesShopStylesDefault({ dark: saturateResult1, light: saturateResult });
const result = size.fileFinishedImporting("modules/collectibles/useCollectiblesShopStyles.native.tsx");

export default tmp6;
