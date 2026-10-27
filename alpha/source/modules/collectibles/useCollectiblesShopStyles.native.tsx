// Module ID: 13946
// Function ID: 13947
// Name: useCollectiblesShopStyles
// Dependencies: [7660, 587, 13947, 2]

// Module 13946 (useCollectiblesShopStyles)
import nativeDefault from "native" /* 587 */;
import createUseCollectiblesShopStylesDefault from "createUseCollectiblesShopStyles" /* 13947 */;
import module_7660_mod from "module_7660" /* 7660 */;
import size from "module_2" /* 2 */;

let module_7660 = module_7660_mod;
const importDefaultResultResult = module_7660(nativeDefault.unsafe_rawColors.WHITE);
const saturateResult = importDefaultResultResult.saturate(1);
module_7660 = module_7660_mod;
const importDefaultResult1Result = module_7660(nativeDefault.unsafe_rawColors.BLACK);
const saturateResult1 = importDefaultResult1Result.saturate(1);
const tmp6 = createUseCollectiblesShopStylesDefault({ dark: saturateResult1, light: saturateResult });
const result = size.fileFinishedImporting("modules/collectibles/useCollectiblesShopStyles.native.tsx");

export default tmp6;
