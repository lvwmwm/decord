// Module ID: 10544
// Function ID: 10545
// Name: useCollectiblesShopStyles
// Dependencies: [6972, 576, 10545, 2]

// Module 10544 (useCollectiblesShopStyles)
import nativeDefault from "native" /* 576 */;
import createUseCollectiblesShopStylesDefault from "createUseCollectiblesShopStyles" /* 10545 */;
import module_6972_mod from "module_6972" /* 6972 */;
import size from "module_2" /* 2 */;

let module_6972 = module_6972_mod;
const importDefaultResultResult = module_6972(nativeDefault.unsafe_rawColors.WHITE);
const saturateResult = importDefaultResultResult.saturate(1);
module_6972 = module_6972_mod;
const importDefaultResult1Result = module_6972(nativeDefault.unsafe_rawColors.BLACK);
const saturateResult1 = importDefaultResult1Result.saturate(1);
const tmp6 = createUseCollectiblesShopStylesDefault({ dark: saturateResult1, light: saturateResult });
const result = size.fileFinishedImporting("modules/collectibles/useCollectiblesShopStyles.native.tsx");

export default tmp6;
