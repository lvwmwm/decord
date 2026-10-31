// Module ID: 14483
// Function ID: 14484
// Name: useCollectiblesShopStyles
// Dependencies: [7730, 575, 14484, 2]

// Module 14483 (useCollectiblesShopStyles)
import nativeDefault from "native" /* 575 */;
import createUseCollectiblesShopStylesDefault from "createUseCollectiblesShopStyles" /* 14484 */;
import module_7730_mod from "module_7730" /* 7730 */;
import size from "module_2" /* 2 */;

let module_7730 = module_7730_mod;
const importDefaultResultResult = module_7730(nativeDefault.unsafe_rawColors.WHITE);
const saturateResult = importDefaultResultResult.saturate(1);
module_7730 = module_7730_mod;
const importDefaultResult1Result = module_7730(nativeDefault.unsafe_rawColors.BLACK);
const saturateResult1 = importDefaultResult1Result.saturate(1);
const tmp6 = createUseCollectiblesShopStylesDefault({ dark: saturateResult1, light: saturateResult });
const result = size.fileFinishedImporting("modules/collectibles/useCollectiblesShopStyles.native.tsx");

export default tmp6;
