// Module ID: 12774
// Function ID: 12775
// Name: useCollectiblesShopStyles
// Dependencies: [7269, 587, 12775, 2]

// Module 12774 (useCollectiblesShopStyles)
import nativeDefault from "native" /* 587 */;
import createUseCollectiblesShopStylesDefault from "createUseCollectiblesShopStyles" /* 12775 */;
import module_7269_mod from "module_7269" /* 7269 */;
import size from "module_2" /* 2 */;

let module_7269 = module_7269_mod;
const importDefaultResultResult = module_7269(nativeDefault.unsafe_rawColors.WHITE);
const saturateResult = importDefaultResultResult.saturate(1);
module_7269 = module_7269_mod;
const importDefaultResult1Result = module_7269(nativeDefault.unsafe_rawColors.BLACK);
const saturateResult1 = importDefaultResult1Result.saturate(1);
const tmp6 = createUseCollectiblesShopStylesDefault({ dark: saturateResult1, light: saturateResult });
const result = size.fileFinishedImporting("modules/collectibles/useCollectiblesShopStyles.native.tsx");

export default tmp6;
