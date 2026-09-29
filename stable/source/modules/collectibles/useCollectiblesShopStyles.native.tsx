// Module ID: 11376
// Function ID: 11377
// Name: useCollectiblesShopStyles
// Dependencies: [7826, 576, 11377, 2]

// Module 11376 (useCollectiblesShopStyles)
import nativeDefault from "native" /* 576 */;
import createUseCollectiblesShopStylesDefault from "createUseCollectiblesShopStyles" /* 11377 */;
import tinycolor_mod from "tinycolor" /* 7826 */;

let tinycolor = tinycolor_mod;
const importDefaultResultResult = tinycolor(nativeDefault.unsafe_rawColors.WHITE);
let tinycolor = tinycolor_mod;
const saturateResult = tinycolor(nativeDefault.unsafe_rawColors.WHITE).saturate(1);
const importDefaultResult1Result = tinycolor(nativeDefault.unsafe_rawColors.BLACK);
const saturateResult1 = tinycolor(nativeDefault.unsafe_rawColors.BLACK).saturate(1);
const size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/useCollectiblesShopStyles.native.tsx");

export default createUseCollectiblesShopStylesDefault({ dark: tinycolor(nativeDefault.unsafe_rawColors.BLACK).saturate(1), light: saturateResult });
