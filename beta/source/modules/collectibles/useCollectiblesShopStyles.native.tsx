// Module ID: 13977
// Function ID: 13978
// Name: useCollectiblesShopStyles
// Dependencies: [7692, 587, 13978, 2]

// Module 13977 (useCollectiblesShopStyles)
import nativeDefault from "native" /* 587 */;
import createUseCollectiblesShopStylesDefault from "createUseCollectiblesShopStyles" /* 13978 */;
import module_7692_mod from "module_7692" /* 7692 */;
import size from "module_2" /* 2 */;

let module_7692 = module_7692_mod;
const importDefaultResultResult = module_7692(nativeDefault.unsafe_rawColors.WHITE);
const saturateResult = importDefaultResultResult.saturate(1);
module_7692 = module_7692_mod;
const importDefaultResult1Result = module_7692(nativeDefault.unsafe_rawColors.BLACK);
const saturateResult1 = importDefaultResult1Result.saturate(1);
const tmp6 = createUseCollectiblesShopStylesDefault({ dark: saturateResult1, light: saturateResult });
const result = size.fileFinishedImporting("modules/collectibles/useCollectiblesShopStyles.native.tsx");

export default tmp6;
