// Module ID: 11177
// Function ID: 11178
// Name: useCollectiblesShopStyles
// Dependencies: [7262, 587, 11178, 2]

// Module 11177 (useCollectiblesShopStyles)
import nativeDefault from "native" /* 587 */;
import createUseCollectiblesShopStylesDefault from "createUseCollectiblesShopStyles" /* 11178 */;
import module_7262_mod from "module_7262" /* 7262 */;
import size from "module_2" /* 2 */;

let module_7262 = module_7262_mod;
const importDefaultResultResult = module_7262(nativeDefault.unsafe_rawColors.WHITE);
const saturateResult = importDefaultResultResult.saturate(1);
module_7262 = module_7262_mod;
const importDefaultResult1Result = module_7262(nativeDefault.unsafe_rawColors.BLACK);
const saturateResult1 = importDefaultResult1Result.saturate(1);
const tmp6 = createUseCollectiblesShopStylesDefault({ dark: saturateResult1, light: saturateResult });
const result = size.fileFinishedImporting("modules/collectibles/useCollectiblesShopStyles.native.tsx");

export default tmp6;
