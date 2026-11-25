// Module ID: 9370
// Function ID: 9371
// Name: useCollectiblesShopStyles
// Dependencies: [6290, 575, 9371, 2]

// Module 9370 (useCollectiblesShopStyles)
import nativeDefault from "native" /* 575 */;
import createUseCollectiblesShopStylesDefault from "createUseCollectiblesShopStyles" /* 9371 */;
import module_6290_mod from "module_6290" /* 6290 */;
import size from "module_2" /* 2 */;

let module_6290 = module_6290_mod;
const importDefaultResultResult = module_6290(nativeDefault.unsafe_rawColors.WHITE);
const saturateResult = importDefaultResultResult.saturate(1);
module_6290 = module_6290_mod;
const importDefaultResult1Result = module_6290(nativeDefault.unsafe_rawColors.BLACK);
const saturateResult1 = importDefaultResult1Result.saturate(1);
const tmp6 = createUseCollectiblesShopStylesDefault({ dark: saturateResult1, light: saturateResult });
const result = size.fileFinishedImporting("modules/collectibles/useCollectiblesShopStyles.native.tsx");

export default tmp6;
