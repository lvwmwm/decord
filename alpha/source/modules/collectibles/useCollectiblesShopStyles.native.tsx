// Module ID: 10533
// Function ID: 10534
// Name: useCollectiblesShopStyles
// Dependencies: [6967, 576, 10534, 2]

// Module 10533 (useCollectiblesShopStyles)
import nativeDefault from "native" /* 576 */;
import createUseCollectiblesShopStylesDefault from "createUseCollectiblesShopStyles" /* 10534 */;
import tinycolor_mod from "tinycolor" /* 6967 */;

let tinycolor = tinycolor_mod;
const importDefaultResultResult = tinycolor(nativeDefault.unsafe_rawColors.WHITE);
let tinycolor = tinycolor_mod;
const saturateResult = tinycolor(nativeDefault.unsafe_rawColors.WHITE).saturate(1);
const importDefaultResult1Result = tinycolor(nativeDefault.unsafe_rawColors.BLACK);
const saturateResult1 = tinycolor(nativeDefault.unsafe_rawColors.BLACK).saturate(1);
const size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/useCollectiblesShopStyles.native.tsx");

export default createUseCollectiblesShopStylesDefault({ dark: tinycolor(nativeDefault.unsafe_rawColors.BLACK).saturate(1), light: saturateResult });
