// Module ID: 14179
// Function ID: 14180
// Name: useCollectiblesShopStyles
// Dependencies: [7695, 587, 14180, 2]

// Module 14179 (useCollectiblesShopStyles)
import nativeDefault from "native" /* 587 */;
import createUseCollectiblesShopStylesDefault from "createUseCollectiblesShopStyles" /* 14180 */;
import module_7695_mod from "module_7695" /* 7695 */;
import size from "module_2" /* 2 */;

let module_7695 = module_7695_mod;
const importDefaultResultResult = module_7695(nativeDefault.unsafe_rawColors.WHITE);
const saturateResult = importDefaultResultResult.saturate(1);
module_7695 = module_7695_mod;
const importDefaultResult1Result = module_7695(nativeDefault.unsafe_rawColors.BLACK);
const saturateResult1 = importDefaultResult1Result.saturate(1);
const tmp6 = createUseCollectiblesShopStylesDefault({ dark: saturateResult1, light: saturateResult });
const result = size.fileFinishedImporting("modules/collectibles/useCollectiblesShopStyles.native.tsx");

export default tmp6;
