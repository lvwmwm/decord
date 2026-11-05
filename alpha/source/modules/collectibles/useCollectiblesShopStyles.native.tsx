// Module ID: 14722
// Function ID: 14723
// Name: useCollectiblesShopStyles
// Dependencies: [7875, 575, 14723, 2]

// Module 14722 (useCollectiblesShopStyles)
import nativeDefault from "native" /* 575 */;
import createUseCollectiblesShopStylesDefault from "createUseCollectiblesShopStyles" /* 14723 */;
import module_7875_mod from "module_7875" /* 7875 */;
import size from "module_2" /* 2 */;

let module_7875 = module_7875_mod;
const importDefaultResultResult = module_7875(nativeDefault.unsafe_rawColors.WHITE);
const saturateResult = importDefaultResultResult.saturate(1);
module_7875 = module_7875_mod;
const importDefaultResult1Result = module_7875(nativeDefault.unsafe_rawColors.BLACK);
const saturateResult1 = importDefaultResult1Result.saturate(1);
const tmp6 = createUseCollectiblesShopStylesDefault({ dark: saturateResult1, light: saturateResult });
const result = size.fileFinishedImporting("modules/collectibles/useCollectiblesShopStyles.native.tsx");

export default tmp6;
