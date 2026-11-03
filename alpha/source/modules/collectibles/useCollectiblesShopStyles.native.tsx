// Module ID: 14628
// Function ID: 14629
// Name: useCollectiblesShopStyles
// Dependencies: [7854, 575, 14629, 2]

// Module 14628 (useCollectiblesShopStyles)
import nativeDefault from "native" /* 575 */;
import createUseCollectiblesShopStylesDefault from "createUseCollectiblesShopStyles" /* 14629 */;
import module_7854_mod from "module_7854" /* 7854 */;
import size from "module_2" /* 2 */;

let module_7854 = module_7854_mod;
const importDefaultResultResult = module_7854(nativeDefault.unsafe_rawColors.WHITE);
const saturateResult = importDefaultResultResult.saturate(1);
module_7854 = module_7854_mod;
const importDefaultResult1Result = module_7854(nativeDefault.unsafe_rawColors.BLACK);
const saturateResult1 = importDefaultResult1Result.saturate(1);
const tmp6 = createUseCollectiblesShopStylesDefault({ dark: saturateResult1, light: saturateResult });
const result = size.fileFinishedImporting("modules/collectibles/useCollectiblesShopStyles.native.tsx");

export default tmp6;
