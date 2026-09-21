// Module ID: 11378
// Function ID: 11379
// Name: useCollectiblesShopStyles
// Dependencies: [7799, 580, 11379, 2]

// Module 11378 (useCollectiblesShopStyles)
import nativeDefault from "native" /* 580 */;
import createUseCollectiblesShopStylesDefault from "createUseCollectiblesShopStyles" /* 11379 */;
import tinycolor_mod from "tinycolor" /* 7799 */;

let tinycolor = tinycolor_mod;
const importDefaultResultResult = tinycolor(nativeDefault.unsafe_rawColors.WHITE);
let tinycolor = tinycolor_mod;
const saturateResult = tinycolor(nativeDefault.unsafe_rawColors.WHITE).saturate(1);
const importDefaultResult1Result = tinycolor(nativeDefault.unsafe_rawColors.BLACK);
const saturateResult1 = tinycolor(nativeDefault.unsafe_rawColors.BLACK).saturate(1);
const size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/useCollectiblesShopStyles.native.tsx");

export default createUseCollectiblesShopStylesDefault({ dark: tinycolor(nativeDefault.unsafe_rawColors.BLACK).saturate(1), light: saturateResult });
