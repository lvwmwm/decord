// Module ID: 13898
// Function ID: 13899
// Name: useCollectiblesShopStyles
// Dependencies: [7645, 587, 13899, 2]

// Module 13898 (useCollectiblesShopStyles)
import nativeDefault from "native" /* 587 */;
import createUseCollectiblesShopStylesDefault from "createUseCollectiblesShopStyles" /* 13899 */;
import module_7645_mod from "module_7645" /* 7645 */;
import size from "module_2" /* 2 */;

let module_7645 = module_7645_mod;
const importDefaultResultResult = module_7645(nativeDefault.unsafe_rawColors.WHITE);
const saturateResult = importDefaultResultResult.saturate(1);
module_7645 = module_7645_mod;
const importDefaultResult1Result = module_7645(nativeDefault.unsafe_rawColors.BLACK);
const saturateResult1 = importDefaultResult1Result.saturate(1);
const tmp6 = createUseCollectiblesShopStylesDefault({ dark: saturateResult1, light: saturateResult });
const result = size.fileFinishedImporting("modules/collectibles/useCollectiblesShopStyles.native.tsx");

export default tmp6;
