// Module ID: 5394
// Function ID: 46001
// Name: createCardBackgroundToken
// Dependencies: []
// Exports: createCardShadowToken, getCardSecondaryBg

// Module 5394 (createCardBackgroundToken)
function createCardBackgroundToken(TABLEROW_BACKGROUND_DEFAULT, CARD_GRADIENT_BG) {
  CARD_GRADIENT_BG = TABLEROW_BACKGROUND_DEFAULT;
  const importDefault = CARD_GRADIENT_BG;
  return CARD_GRADIENT_BG(dependencyMap[0]).experimental_createToken((primaryColor) => null != primaryColor.primaryColor ? arg1 : primaryColor);
}
const cardBackgroundToken = createCardBackgroundToken(importDefault(dependencyMap[1]).colors.TABLEROW_BACKGROUND_DEFAULT, importDefault(dependencyMap[1]).colors.CARD_GRADIENT_BG);
const cardBackgroundToken1 = createCardBackgroundToken(importDefault(dependencyMap[1]).colors.TABLEROW_BACKGROUND_PRESSED, importDefault(dependencyMap[1]).colors.CARD_GRADIENT_PRESSED_BG);
const result = arg1(dependencyMap[2]).fileFinishedImporting("design/components/Card/native/CardTokens.native.tsx");

export const CARD_PRIMARY_BG = cardBackgroundToken;
export const getCardSecondaryBg = function getCardSecondaryBg(arg0) {
  const colors = importDefault(dependencyMap[1]).colors;
  return createCardBackgroundToken(arg0 ? colors.BACKGROUND_MOD_MUTED : colors.CARD_SECONDARY_BG, importDefault(dependencyMap[1]).colors.CARD_GRADIENT_BG);
};
export const CARD_PRIMARY_PRESSED_BG = cardBackgroundToken1;
export const createCardShadowToken = function createCardShadowToken(arg0) {
  const arg1 = arg0;
  return arg1(dependencyMap[0]).experimental_createToken((gradient) => {
    if (null == gradient.gradient) {
      if ("none" !== gradient) {
        if ("border" === gradient) {
          return callback(closure_2[1]).shadows.SHADOW_BORDER;
        } else if ("high" === tmp12) {
          return callback(closure_2[1]).shadows.SHADOW_HIGH;
        } else if ("ledge" === tmp12) {
          return callback(closure_2[1]).shadows.SHADOW_LEDGE;
        } else if ("low" === tmp12) {
          return callback(closure_2[1]).shadows.SHADOW_LOW;
        } else if ("medium" === tmp12) {
          return callback(closure_2[1]).shadows.SHADOW_MEDIUM;
        }
      }
    }
    return {};
  });
};
