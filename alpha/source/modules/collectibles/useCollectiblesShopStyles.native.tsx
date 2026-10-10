// Module ID: 12772
// Function ID: 12773
// Name: useCollectiblesShopStyles
// Dependencies: [7273, 587, 12773, 2]

// Module 12772 (useCollectiblesShopStyles)
import nativeDefault from "native" /* 587 */;
import createUseCollectiblesShopStylesDefault from "createUseCollectiblesShopStyles" /* 12773 */;
import module_7273_mod from "module_7273" /* 7273 */;
import size from "module_2" /* 2 */;

let module_7273 = module_7273_mod;
const importDefaultResultResult = module_7273(nativeDefault.unsafe_rawColors.WHITE);
const saturateResult = importDefaultResultResult.saturate(1);
module_7273 = module_7273_mod;
const importDefaultResult1Result = module_7273(nativeDefault.unsafe_rawColors.BLACK);
const saturateResult1 = importDefaultResult1Result.saturate(1);
const tmp6 = createUseCollectiblesShopStylesDefault({ dark: saturateResult1, light: saturateResult });
const result = size.fileFinishedImporting("modules/collectibles/useCollectiblesShopStyles.native.tsx");

export default tmp6;
