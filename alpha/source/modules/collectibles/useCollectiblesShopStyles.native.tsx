// Module ID: 13280
// Function ID: 13281
// Name: useCollectiblesShopStyles
// Dependencies: [7274, 587, 13281, 2]

// Module 13280 (useCollectiblesShopStyles)
import nativeDefault from "native" /* 587 */;
import createUseCollectiblesShopStylesDefault from "createUseCollectiblesShopStyles" /* 13281 */;
import module_7274_mod from "module_7274" /* 7274 */;
import size from "module_2" /* 2 */;

let module_7274 = module_7274_mod;
const importDefaultResultResult = module_7274(nativeDefault.unsafe_rawColors.WHITE);
const saturateResult = importDefaultResultResult.saturate(1);
module_7274 = module_7274_mod;
const importDefaultResult1Result = module_7274(nativeDefault.unsafe_rawColors.BLACK);
const saturateResult1 = importDefaultResult1Result.saturate(1);
const tmp6 = createUseCollectiblesShopStylesDefault({ dark: saturateResult1, light: saturateResult });
const result = size.fileFinishedImporting("modules/collectibles/useCollectiblesShopStyles.native.tsx");

export default tmp6;
