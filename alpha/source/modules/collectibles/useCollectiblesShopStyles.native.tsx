// Module ID: 14412
// Function ID: 14413
// Name: useCollectiblesShopStyles
// Dependencies: [7718, 587, 14413, 2]

// Module 14412 (useCollectiblesShopStyles)
import nativeDefault from "native" /* 587 */;
import createUseCollectiblesShopStylesDefault from "createUseCollectiblesShopStyles" /* 14413 */;
import module_7718_mod from "module_7718" /* 7718 */;
import size from "module_2" /* 2 */;

let module_7718 = module_7718_mod;
const importDefaultResultResult = module_7718(nativeDefault.unsafe_rawColors.WHITE);
const saturateResult = importDefaultResultResult.saturate(1);
module_7718 = module_7718_mod;
const importDefaultResult1Result = module_7718(nativeDefault.unsafe_rawColors.BLACK);
const saturateResult1 = importDefaultResult1Result.saturate(1);
const tmp6 = createUseCollectiblesShopStylesDefault({ dark: saturateResult1, light: saturateResult });
const result = size.fileFinishedImporting("modules/collectibles/useCollectiblesShopStyles.native.tsx");

export default tmp6;
