// Module ID: 13960
// Function ID: 13961
// Name: useCollectiblesShopStyles
// Dependencies: [7661, 587, 13961, 2]

// Module 13960 (useCollectiblesShopStyles)
import nativeDefault from "native" /* 587 */;
import createUseCollectiblesShopStylesDefault from "createUseCollectiblesShopStyles" /* 13961 */;
import module_7661_mod from "module_7661" /* 7661 */;
import size from "module_2" /* 2 */;

let module_7661 = module_7661_mod;
const importDefaultResultResult = module_7661(nativeDefault.unsafe_rawColors.WHITE);
const saturateResult = importDefaultResultResult.saturate(1);
module_7661 = module_7661_mod;
const importDefaultResult1Result = module_7661(nativeDefault.unsafe_rawColors.BLACK);
const saturateResult1 = importDefaultResult1Result.saturate(1);
const tmp6 = createUseCollectiblesShopStylesDefault({ dark: saturateResult1, light: saturateResult });
const result = size.fileFinishedImporting("modules/collectibles/useCollectiblesShopStyles.native.tsx");

export default tmp6;
