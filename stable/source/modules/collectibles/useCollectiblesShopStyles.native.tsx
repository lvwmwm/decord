// Module ID: 10022
// Function ID: 10023
// Name: useCollectiblesShopStyles
// Dependencies: [8495, 575, 10023, 2]

// Module 10022 (useCollectiblesShopStyles)
import nativeDefault from "native" /* 575 */;
import createUseCollectiblesShopStylesDefault from "createUseCollectiblesShopStyles" /* 10023 */;
import module_8495_mod from "module_8495" /* 8495 */;
import size from "module_2" /* 2 */;

let module_8495 = module_8495_mod;
const importDefaultResultResult = module_8495(nativeDefault.unsafe_rawColors.WHITE);
const saturateResult = importDefaultResultResult.saturate(1);
module_8495 = module_8495_mod;
const importDefaultResult1Result = module_8495(nativeDefault.unsafe_rawColors.BLACK);
const saturateResult1 = importDefaultResult1Result.saturate(1);
const tmp6 = createUseCollectiblesShopStylesDefault({ dark: saturateResult1, light: saturateResult });
const result = size.fileFinishedImporting("modules/collectibles/useCollectiblesShopStyles.native.tsx");

export default tmp6;
