// Module ID: 9271
// Function ID: 9272
// Name: useCollectiblesShopStyles
// Dependencies: [6195, 575, 9272, 2]

// Module 9271 (useCollectiblesShopStyles)
import nativeDefault from "native" /* 575 */;
import createUseCollectiblesShopStylesDefault from "createUseCollectiblesShopStyles" /* 9272 */;
import module_6195_mod from "module_6195" /* 6195 */;
import size from "module_2" /* 2 */;

let module_6195 = module_6195_mod;
const importDefaultResultResult = module_6195(nativeDefault.unsafe_rawColors.WHITE);
const saturateResult = importDefaultResultResult.saturate(1);
module_6195 = module_6195_mod;
const importDefaultResult1Result = module_6195(nativeDefault.unsafe_rawColors.BLACK);
const saturateResult1 = importDefaultResult1Result.saturate(1);
const tmp6 = createUseCollectiblesShopStylesDefault({ dark: saturateResult1, light: saturateResult });
const result = size.fileFinishedImporting("modules/collectibles/useCollectiblesShopStyles.native.tsx");

export default tmp6;
