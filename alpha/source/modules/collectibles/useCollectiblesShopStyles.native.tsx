// Module ID: 14759
// Function ID: 14760
// Name: useCollectiblesShopStyles
// Dependencies: [7809, 575, 14760, 2]

// Module 14759 (useCollectiblesShopStyles)
import nativeDefault from "native" /* 575 */;
import createUseCollectiblesShopStylesDefault from "createUseCollectiblesShopStyles" /* 14760 */;
import module_7809_mod from "module_7809" /* 7809 */;
import size from "module_2" /* 2 */;

let module_7809 = module_7809_mod;
const importDefaultResultResult = module_7809(nativeDefault.unsafe_rawColors.WHITE);
const saturateResult = importDefaultResultResult.saturate(1);
module_7809 = module_7809_mod;
const importDefaultResult1Result = module_7809(nativeDefault.unsafe_rawColors.BLACK);
const saturateResult1 = importDefaultResult1Result.saturate(1);
const tmp6 = createUseCollectiblesShopStylesDefault({ dark: saturateResult1, light: saturateResult });
const result = size.fileFinishedImporting("modules/collectibles/useCollectiblesShopStyles.native.tsx");

export default tmp6;
