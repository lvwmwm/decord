// Module ID: 13649
// Function ID: 13650
// Name: useCollectiblesShopStyles
// Dependencies: [7494, 587, 13650, 2]

// Module 13649 (useCollectiblesShopStyles)
import nativeDefault from "native" /* 587 */;
import createUseCollectiblesShopStylesDefault from "createUseCollectiblesShopStyles" /* 13650 */;
import module_7494_mod from "module_7494" /* 7494 */;
import size from "module_2" /* 2 */;

let module_7494 = module_7494_mod;
const importDefaultResultResult = module_7494(nativeDefault.unsafe_rawColors.WHITE);
const saturateResult = importDefaultResultResult.saturate(1);
module_7494 = module_7494_mod;
const importDefaultResult1Result = module_7494(nativeDefault.unsafe_rawColors.BLACK);
const saturateResult1 = importDefaultResult1Result.saturate(1);
const tmp6 = createUseCollectiblesShopStylesDefault({ dark: saturateResult1, light: saturateResult });
const result = size.fileFinishedImporting("modules/collectibles/useCollectiblesShopStyles.native.tsx");

export default tmp6;
