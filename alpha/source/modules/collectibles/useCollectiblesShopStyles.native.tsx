// Module ID: 14708
// Function ID: 14709
// Name: useCollectiblesShopStyles
// Dependencies: [7870, 575, 14709, 2]

// Module 14708 (useCollectiblesShopStyles)
import nativeDefault from "native" /* 575 */;
import createUseCollectiblesShopStylesDefault from "createUseCollectiblesShopStyles" /* 14709 */;
import module_7870_mod from "module_7870" /* 7870 */;
import size from "module_2" /* 2 */;

let module_7870 = module_7870_mod;
const importDefaultResultResult = module_7870(nativeDefault.unsafe_rawColors.WHITE);
const saturateResult = importDefaultResultResult.saturate(1);
module_7870 = module_7870_mod;
const importDefaultResult1Result = module_7870(nativeDefault.unsafe_rawColors.BLACK);
const saturateResult1 = importDefaultResult1Result.saturate(1);
const tmp6 = createUseCollectiblesShopStylesDefault({ dark: saturateResult1, light: saturateResult });
const result = size.fileFinishedImporting("modules/collectibles/useCollectiblesShopStyles.native.tsx");

export default tmp6;
