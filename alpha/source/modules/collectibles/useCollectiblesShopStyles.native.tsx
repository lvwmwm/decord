// Module ID: 14445
// Function ID: 14446
// Name: useCollectiblesShopStyles
// Dependencies: [7723, 575, 14446, 2]

// Module 14445 (useCollectiblesShopStyles)
import nativeDefault from "native" /* 575 */;
import createUseCollectiblesShopStylesDefault from "createUseCollectiblesShopStyles" /* 14446 */;
import module_7723_mod from "module_7723" /* 7723 */;
import size from "module_2" /* 2 */;

let module_7723 = module_7723_mod;
const importDefaultResultResult = module_7723(nativeDefault.unsafe_rawColors.WHITE);
const saturateResult = importDefaultResultResult.saturate(1);
module_7723 = module_7723_mod;
const importDefaultResult1Result = module_7723(nativeDefault.unsafe_rawColors.BLACK);
const saturateResult1 = importDefaultResult1Result.saturate(1);
const tmp6 = createUseCollectiblesShopStylesDefault({ dark: saturateResult1, light: saturateResult });
const result = size.fileFinishedImporting("modules/collectibles/useCollectiblesShopStyles.native.tsx");

export default tmp6;
