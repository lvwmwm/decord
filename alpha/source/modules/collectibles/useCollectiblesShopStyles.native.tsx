// Module ID: 9413
// Function ID: 9414
// Name: useCollectiblesShopStyles
// Dependencies: [6321, 575, 9414, 2]

// Module 9413 (useCollectiblesShopStyles)
import nativeDefault from "native" /* 575 */;
import createUseCollectiblesShopStylesDefault from "createUseCollectiblesShopStyles" /* 9414 */;
import module_6321_mod from "module_6321" /* 6321 */;
import size from "module_2" /* 2 */;

let module_6321 = module_6321_mod;
const importDefaultResultResult = module_6321(nativeDefault.unsafe_rawColors.WHITE);
const saturateResult = importDefaultResultResult.saturate(1);
module_6321 = module_6321_mod;
const importDefaultResult1Result = module_6321(nativeDefault.unsafe_rawColors.BLACK);
const saturateResult1 = importDefaultResult1Result.saturate(1);
const tmp6 = createUseCollectiblesShopStylesDefault({ dark: saturateResult1, light: saturateResult });
const result = size.fileFinishedImporting("modules/collectibles/useCollectiblesShopStyles.native.tsx");

export default tmp6;
