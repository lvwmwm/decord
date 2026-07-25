// Module ID: 5167
// Function ID: 44992
// Name: createCardShadowToken
// Dependencies: [4131, 689, 2]
// Exports: createCardShadowToken

// Module 5167 (createCardShadowToken)
const result = require("set").fileFinishedImporting("design/components/Card/native/CardTokens.native.tsx");

export const createCardShadowToken = function createCardShadowToken(arg0) {
  const _require = arg0;
  return _require(4131).experimental_createToken((gradient) => {
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
