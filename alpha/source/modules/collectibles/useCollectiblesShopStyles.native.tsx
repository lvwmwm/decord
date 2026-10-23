// Module ID: 13921
// Function ID: 13922
// Name: useCollectiblesShopStyles
// Dependencies: [7658, 587, 13922, 2]

// Module 13921 (useCollectiblesShopStyles)
import nativeDefault from "native" /* 587 */;
import createUseCollectiblesShopStylesDefault from "createUseCollectiblesShopStyles" /* 13922 */;
import module_7658_mod from "module_7658" /* 7658 */;
import size from "module_2" /* 2 */;

let module_7658 = module_7658_mod;
const importDefaultResultResult = module_7658(nativeDefault.unsafe_rawColors.WHITE);
const saturateResult = importDefaultResultResult.saturate(1);
module_7658 = module_7658_mod;
const importDefaultResult1Result = module_7658(nativeDefault.unsafe_rawColors.BLACK);
const saturateResult1 = importDefaultResult1Result.saturate(1);
const tmp6 = createUseCollectiblesShopStylesDefault({ dark: saturateResult1, light: saturateResult });
const result = size.fileFinishedImporting("modules/collectibles/useCollectiblesShopStyles.native.tsx");

export default tmp6;
