// Module ID: 10035
// Function ID: 10036
// Name: useCollectiblesShopStyles
// Dependencies: [8506, 575, 10036, 2]

// Module 10035 (useCollectiblesShopStyles)
import nativeDefault from "native" /* 575 */;
import createUseCollectiblesShopStylesDefault from "createUseCollectiblesShopStyles" /* 10036 */;
import module_8506_mod from "module_8506" /* 8506 */;
import size from "module_2" /* 2 */;

let module_8506 = module_8506_mod;
const importDefaultResultResult = module_8506(nativeDefault.unsafe_rawColors.WHITE);
const saturateResult = importDefaultResultResult.saturate(1);
module_8506 = module_8506_mod;
const importDefaultResult1Result = module_8506(nativeDefault.unsafe_rawColors.BLACK);
const saturateResult1 = importDefaultResult1Result.saturate(1);
const tmp6 = createUseCollectiblesShopStylesDefault({ dark: saturateResult1, light: saturateResult });
const result = size.fileFinishedImporting("modules/collectibles/useCollectiblesShopStyles.native.tsx");

export default tmp6;
