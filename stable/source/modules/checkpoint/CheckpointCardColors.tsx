// Module ID: 6255
// Function ID: 6256
// Name: CheckpointCardColors
// Dependencies: [6256, 6257, 6258, 6259, 6260, 6261, 6262, 6263, 6264, 6265, 6266, 6267, 6268, 6269, 6270, 6271, 6272, 6273, 6253, 6274, 2]
// Exports: getCardColors, getCharacterCardColorPalette

// Module 6255 (CheckpointCardColors)
import CheckpointCardColorPalette from "CheckpointCardColorPalette" /* 6253 */;
import _modDef6256 from "module_6256" /* 6256 */;
import _modDef6257 from "module_6257" /* 6257 */;
import _modDef6258 from "module_6258" /* 6258 */;
import _modDef6259 from "module_6259" /* 6259 */;
import _modDef6260 from "module_6260" /* 6260 */;
import _modDef6261 from "module_6261" /* 6261 */;
import _modDef6262 from "module_6262" /* 6262 */;
import _modDef6263 from "module_6263" /* 6263 */;
import _modDef6264 from "module_6264" /* 6264 */;
import _modDef6265 from "module_6265" /* 6265 */;
import _modDef6266 from "module_6266" /* 6266 */;
import _modDef6267 from "module_6267" /* 6267 */;
import _modDef6268 from "module_6268" /* 6268 */;
import _modDef6269 from "module_6269" /* 6269 */;
import _modDef6270 from "module_6270" /* 6270 */;
import _modDef6271 from "module_6271" /* 6271 */;
import _modDef6272 from "module_6272" /* 6272 */;
import _modDef6273 from "module_6273" /* 6273 */;
import CheckpointTraitConfig from "CheckpointTraitConfig" /* 6274 */;
import size from "module_2" /* 2 */;

const obj = { primaryBackgroundColor: "#7D53DE", secondaryBackgroundColor: "#BCB1D5", tertiaryBackgroundColor: "#CFC3EB", shadowColor: "#411D96", backgroundGradientStartColor: "#2F156B", recapCardBackgroundImage: _modDef6256, clydeLogoImage: _modDef6257, clydeLogoStaticImage: _modDef6258 };
const obj2 = { primaryBackgroundColor: "#34E2F1", secondaryBackgroundColor: "#94CCD1", tertiaryBackgroundColor: "#A5E3E9", shadowColor: "#0C9BA7", backgroundGradientStartColor: "#12606D", recapCardBackgroundImage: _modDef6259, clydeLogoImage: _modDef6260, clydeLogoStaticImage: _modDef6261 };
const obj3 = { primaryBackgroundColor: "#FF4CD2", secondaryBackgroundColor: "#D5A9D6", tertiaryBackgroundColor: "#E9BBE9", shadowColor: "#B20086", backgroundGradientStartColor: "#80005F", recapCardBackgroundImage: _modDef6262, clydeLogoImage: _modDef6263, clydeLogoStaticImage: _modDef6264 };
const obj4 = { primaryBackgroundColor: "#35ED7E", secondaryBackgroundColor: "#B2C5B1", tertiaryBackgroundColor: "#B5DCB3", shadowColor: "#0FA44A", backgroundGradientStartColor: "#0A7535", recapCardBackgroundImage: _modDef6265, clydeLogoImage: _modDef6266, clydeLogoStaticImage: _modDef6267 };
const obj5 = { primaryBackgroundColor: "#EF3054", secondaryBackgroundColor: "#E5A1AE", tertiaryBackgroundColor: "#F6AFBC", shadowColor: "#A60D2A", backgroundGradientStartColor: "#76091E", recapCardBackgroundImage: _modDef6268, clydeLogoImage: _modDef6269, clydeLogoStaticImage: _modDef6270 };
const obj6 = { primaryBackgroundColor: "#FFE047", secondaryBackgroundColor: "#E6CBA8", tertiaryBackgroundColor: "#FFE0B8", shadowColor: "#B29400", backgroundGradientStartColor: "#806A00", recapCardBackgroundImage: _modDef6271, clydeLogoImage: _modDef6272, clydeLogoStaticImage: _modDef6273 };
let closure_3 = { [CheckpointCardColorPalette.CheckpointCardColorPalette.NONE]: obj2, [CheckpointCardColorPalette.CheckpointCardColorPalette.CYAN]: obj2, [CheckpointCardColorPalette.CheckpointCardColorPalette.PURPLE]: obj, [CheckpointCardColorPalette.CheckpointCardColorPalette.PINK]: obj3, [CheckpointCardColorPalette.CheckpointCardColorPalette.GREEN]: obj4, [CheckpointCardColorPalette.CheckpointCardColorPalette.RED]: obj5, [CheckpointCardColorPalette.CheckpointCardColorPalette.YELLOW]: obj6 };
const result = size.fileFinishedImporting("modules/checkpoint/CheckpointCardColors.tsx");

export function getCharacterCardColorPalette(character) {
  let NONE;
  if (null == character) {
    NONE = CheckpointCardColorPalette.CheckpointCardColorPalette.NONE;
  } else {
    NONE = CheckpointTraitConfig.CHECKPOINT_BASE_TO_CARD_COLOR_PALETTE[character.base];
    const tmp = require;
    if (NONE == null) {
      NONE = tmp(6253).CheckpointCardColorPalette.NONE;
    }
  }
  return NONE;
}
export function getCardColors(characterCardColorPalette) {
  let tmp = closure_3[characterCardColorPalette];
  if (tmp == null) {
    tmp = obj2;
  }
  return tmp;
}
