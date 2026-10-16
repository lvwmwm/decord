// Module ID: 13641
// Function ID: 13642
// Name: useCollectiblesShopStyles
// Dependencies: [7492, 587, 13642, 2]

// Module 13641 (useCollectiblesShopStyles)
import nativeDefault from "native" /* 587 */;
import createUseCollectiblesShopStylesDefault from "createUseCollectiblesShopStyles" /* 13642 */;
import module_7492_mod from "module_7492" /* 7492 */;
import size from "module_2" /* 2 */;

let module_7492 = module_7492_mod;
const importDefaultResultResult = module_7492(nativeDefault.unsafe_rawColors.WHITE);
const saturateResult = importDefaultResultResult.saturate(1);
module_7492 = module_7492_mod;
const importDefaultResult1Result = module_7492(nativeDefault.unsafe_rawColors.BLACK);
const saturateResult1 = importDefaultResult1Result.saturate(1);
const tmp6 = createUseCollectiblesShopStylesDefault({ dark: saturateResult1, light: saturateResult });
const result = size.fileFinishedImporting("modules/collectibles/useCollectiblesShopStyles.native.tsx");

export default tmp6;
