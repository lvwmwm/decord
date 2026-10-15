// Module ID: 13615
// Function ID: 13616
// Name: useCollectiblesShopStyles
// Dependencies: [7490, 587, 13616, 2]

// Module 13615 (useCollectiblesShopStyles)
import nativeDefault from "native" /* 587 */;
import createUseCollectiblesShopStylesDefault from "createUseCollectiblesShopStyles" /* 13616 */;
import module_7490_mod from "module_7490" /* 7490 */;
import size from "module_2" /* 2 */;

let module_7490 = module_7490_mod;
const importDefaultResultResult = module_7490(nativeDefault.unsafe_rawColors.WHITE);
const saturateResult = importDefaultResultResult.saturate(1);
module_7490 = module_7490_mod;
const importDefaultResult1Result = module_7490(nativeDefault.unsafe_rawColors.BLACK);
const saturateResult1 = importDefaultResult1Result.saturate(1);
const tmp6 = createUseCollectiblesShopStylesDefault({ dark: saturateResult1, light: saturateResult });
const result = size.fileFinishedImporting("modules/collectibles/useCollectiblesShopStyles.native.tsx");

export default tmp6;
