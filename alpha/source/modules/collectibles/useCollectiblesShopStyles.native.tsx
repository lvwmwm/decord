// Module ID: 13884
// Function ID: 13885
// Name: useCollectiblesShopStyles
// Dependencies: [7644, 587, 13885, 2]

// Module 13884 (useCollectiblesShopStyles)
import nativeDefault from "native" /* 587 */;
import createUseCollectiblesShopStylesDefault from "createUseCollectiblesShopStyles" /* 13885 */;
import module_7644_mod from "module_7644" /* 7644 */;
import size from "module_2" /* 2 */;

let module_7644 = module_7644_mod;
const importDefaultResultResult = module_7644(nativeDefault.unsafe_rawColors.WHITE);
const saturateResult = importDefaultResultResult.saturate(1);
module_7644 = module_7644_mod;
const importDefaultResult1Result = module_7644(nativeDefault.unsafe_rawColors.BLACK);
const saturateResult1 = importDefaultResult1Result.saturate(1);
const tmp6 = createUseCollectiblesShopStylesDefault({ dark: saturateResult1, light: saturateResult });
const result = size.fileFinishedImporting("modules/collectibles/useCollectiblesShopStyles.native.tsx");

export default tmp6;
