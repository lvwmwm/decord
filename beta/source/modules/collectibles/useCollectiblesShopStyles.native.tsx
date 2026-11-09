// Module ID: 14733
// Function ID: 14734
// Name: useCollectiblesShopStyles
// Dependencies: [7806, 575, 14734, 2]

// Module 14733 (useCollectiblesShopStyles)
import nativeDefault from "native" /* 575 */;
import createUseCollectiblesShopStylesDefault from "createUseCollectiblesShopStyles" /* 14734 */;
import module_7806_mod from "module_7806" /* 7806 */;
import size from "module_2" /* 2 */;

let module_7806 = module_7806_mod;
const importDefaultResultResult = module_7806(nativeDefault.unsafe_rawColors.WHITE);
const saturateResult = importDefaultResultResult.saturate(1);
module_7806 = module_7806_mod;
const importDefaultResult1Result = module_7806(nativeDefault.unsafe_rawColors.BLACK);
const saturateResult1 = importDefaultResult1Result.saturate(1);
const tmp6 = createUseCollectiblesShopStylesDefault({ dark: saturateResult1, light: saturateResult });
const result = size.fileFinishedImporting("modules/collectibles/useCollectiblesShopStyles.native.tsx");

export default tmp6;
