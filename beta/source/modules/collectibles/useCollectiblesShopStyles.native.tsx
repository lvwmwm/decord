// Module ID: 10576
// Function ID: 10577
// Name: useCollectiblesShopStyles
// Dependencies: [6976, 588, 10577, 2]

// Module 10576 (useCollectiblesShopStyles)
import nativeDefault from "native" /* 588 */;
import createUseCollectiblesShopStylesDefault from "createUseCollectiblesShopStyles" /* 10577 */;
import module_6976_mod from "module_6976" /* 6976 */;
import size from "module_2" /* 2 */;

let module_6976 = module_6976_mod;
const importDefaultResultResult = module_6976(nativeDefault.unsafe_rawColors.WHITE);
const saturateResult = importDefaultResultResult.saturate(1);
module_6976 = module_6976_mod;
const importDefaultResult1Result = module_6976(nativeDefault.unsafe_rawColors.BLACK);
const saturateResult1 = importDefaultResult1Result.saturate(1);
const tmp6 = createUseCollectiblesShopStylesDefault({ dark: saturateResult1, light: saturateResult });
const result = size.fileFinishedImporting("modules/collectibles/useCollectiblesShopStyles.native.tsx");

export default tmp6;
