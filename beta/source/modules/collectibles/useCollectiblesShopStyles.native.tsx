// Module ID: 14765
// Function ID: 14766
// Name: useCollectiblesShopStyles
// Dependencies: [7839, 575, 14766, 2]

// Module 14765 (useCollectiblesShopStyles)
import nativeDefault from "native" /* 575 */;
import createUseCollectiblesShopStylesDefault from "createUseCollectiblesShopStyles" /* 14766 */;
import module_7839_mod from "module_7839" /* 7839 */;
import size from "module_2" /* 2 */;

let module_7839 = module_7839_mod;
const importDefaultResultResult = module_7839(nativeDefault.unsafe_rawColors.WHITE);
const saturateResult = importDefaultResultResult.saturate(1);
module_7839 = module_7839_mod;
const importDefaultResult1Result = module_7839(nativeDefault.unsafe_rawColors.BLACK);
const saturateResult1 = importDefaultResult1Result.saturate(1);
const tmp6 = createUseCollectiblesShopStylesDefault({ dark: saturateResult1, light: saturateResult });
const result = size.fileFinishedImporting("modules/collectibles/useCollectiblesShopStyles.native.tsx");

export default tmp6;
