// Module ID: 13773
// Function ID: 13774
// Name: useCollectiblesShopStyles
// Dependencies: [7609, 587, 13774, 2]

// Module 13773 (useCollectiblesShopStyles)
import nativeDefault from "native" /* 587 */;
import createUseCollectiblesShopStylesDefault from "createUseCollectiblesShopStyles" /* 13774 */;
import module_7609_mod from "module_7609" /* 7609 */;
import size from "module_2" /* 2 */;

let module_7609 = module_7609_mod;
const importDefaultResultResult = module_7609(nativeDefault.unsafe_rawColors.WHITE);
const saturateResult = importDefaultResultResult.saturate(1);
module_7609 = module_7609_mod;
const importDefaultResult1Result = module_7609(nativeDefault.unsafe_rawColors.BLACK);
const saturateResult1 = importDefaultResult1Result.saturate(1);
const tmp6 = createUseCollectiblesShopStylesDefault({ dark: saturateResult1, light: saturateResult });
const result = size.fileFinishedImporting("modules/collectibles/useCollectiblesShopStyles.native.tsx");

export default tmp6;
