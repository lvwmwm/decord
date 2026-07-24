// Module ID: 5127
// Function ID: 44446
// Name: createCardBackgroundToken
// Dependencies: [4130, 689, 2]
// Exports: createCardShadowToken, getCardSecondaryBg

// Module 5127 (createCardBackgroundToken)
const require = arg1;
function createCardBackgroundToken(TABLEROW_BACKGROUND_DEFAULT, CARD_GRADIENT_BG) {
  const _require = TABLEROW_BACKGROUND_DEFAULT;
  let closure_1 = CARD_GRADIENT_BG;
  return _require(4130).experimental_createToken((primaryColor) => null != primaryColor.primaryColor ? closure_1 : closure_0);
}
const cardBackgroundToken = createCardBackgroundToken(require("_createForOfIteratorHelperLoose").colors.TABLEROW_BACKGROUND_DEFAULT, require("_createForOfIteratorHelperLoose").colors.CARD_GRADIENT_BG);
const cardBackgroundToken1 = createCardBackgroundToken(require("_createForOfIteratorHelperLoose").colors.TABLEROW_BACKGROUND_PRESSED, require("_createForOfIteratorHelperLoose").colors.CARD_GRADIENT_PRESSED_BG);
const result = require("set").fileFinishedImporting("design/components/Card/native/CardTokens.native.tsx");

export const CARD_PRIMARY_BG = cardBackgroundToken;
export const getCardSecondaryBg = function getCardSecondaryBg(arg0) {
  const colors = importDefault(689).colors;
  return createCardBackgroundToken(arg0 ? colors.BACKGROUND_MOD_MUTED : colors.CARD_SECONDARY_BG, importDefault(689).colors.CARD_GRADIENT_BG);
};
export const CARD_PRIMARY_PRESSED_BG = cardBackgroundToken1;
export const createCardShadowToken = function createCardShadowToken(arg0) {
  const _require = arg0;
  return _require(4130).experimental_createToken((gradient) => {
    if (null == gradient.gradient) {
      if ("none" !== closure_0) {
        if ("border" === closure_0) {
          return outer1_1(outer1_2[1]).shadows.SHADOW_BORDER;
        } else if ("high" === tmp12) {
          return outer1_1(outer1_2[1]).shadows.SHADOW_HIGH;
        } else if ("ledge" === tmp12) {
          return outer1_1(outer1_2[1]).shadows.SHADOW_LEDGE;
        } else if ("low" === tmp12) {
          return outer1_1(outer1_2[1]).shadows.SHADOW_LOW;
        } else if ("medium" === tmp12) {
          return outer1_1(outer1_2[1]).shadows.SHADOW_MEDIUM;
        }
      }
    }
    return {};
  });
};
