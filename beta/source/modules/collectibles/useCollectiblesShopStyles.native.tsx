// Module ID: 13721
// Function ID: 13722
// Name: useCollectiblesShopStyles
// Dependencies: [7540, 587, 13722, 2]

// Module 13721 (useCollectiblesShopStyles)
import nativeDefault from "native" /* 587 */;
import createUseCollectiblesShopStylesDefault from "createUseCollectiblesShopStyles" /* 13722 */;
import module_7540_mod from "module_7540" /* 7540 */;
import size from "module_2" /* 2 */;

let module_7540 = module_7540_mod;
const importDefaultResultResult = module_7540(nativeDefault.unsafe_rawColors.WHITE);
const saturateResult = importDefaultResultResult.saturate(1);
module_7540 = module_7540_mod;
const importDefaultResult1Result = module_7540(nativeDefault.unsafe_rawColors.BLACK);
const saturateResult1 = importDefaultResult1Result.saturate(1);
const tmp6 = createUseCollectiblesShopStylesDefault({ dark: saturateResult1, light: saturateResult });
const result = size.fileFinishedImporting("modules/collectibles/useCollectiblesShopStyles.native.tsx");

export default tmp6;
