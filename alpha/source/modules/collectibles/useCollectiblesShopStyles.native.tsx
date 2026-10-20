// Module ID: 13755
// Function ID: 13756
// Name: useCollectiblesShopStyles
// Dependencies: [7606, 587, 13756, 2]

// Module 13755 (useCollectiblesShopStyles)
import nativeDefault from "native" /* 587 */;
import createUseCollectiblesShopStylesDefault from "createUseCollectiblesShopStyles" /* 13756 */;
import module_7606_mod from "module_7606" /* 7606 */;
import size from "module_2" /* 2 */;

let module_7606 = module_7606_mod;
const importDefaultResultResult = module_7606(nativeDefault.unsafe_rawColors.WHITE);
const saturateResult = importDefaultResultResult.saturate(1);
module_7606 = module_7606_mod;
const importDefaultResult1Result = module_7606(nativeDefault.unsafe_rawColors.BLACK);
const saturateResult1 = importDefaultResult1Result.saturate(1);
const tmp6 = createUseCollectiblesShopStylesDefault({ dark: saturateResult1, light: saturateResult });
const result = size.fileFinishedImporting("modules/collectibles/useCollectiblesShopStyles.native.tsx");

export default tmp6;
