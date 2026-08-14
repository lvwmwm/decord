// Module ID: 5438
// Function ID: 5439
// Name: createCardShadowToken
// Dependencies: [4342, 712, 2]
// Exports: createCardShadowToken

// Module 5438 (createCardShadowToken)
const result = require("set").fileFinishedImporting("design/components/Card/native/CardTokens.native.tsx");

export const createCardShadowToken = function createCardShadowToken(arg0) {
  const _require = arg0;
  return _require(4342).experimental_createToken((gradient) => {
    if (null == gradient.gradient) {
      if ("none" !== closure_0) {
        if ("border" === tmp11) {
          return outer1_1(outer1_2[1]).shadows.SHADOW_BORDER;
        } else if ("high" === tmp11) {
          return outer1_1(outer1_2[1]).shadows.SHADOW_HIGH;
        } else if ("ledge" === tmp11) {
          return outer1_1(outer1_2[1]).shadows.SHADOW_LEDGE;
        } else if ("low" === tmp11) {
          return outer1_1(outer1_2[1]).shadows.SHADOW_LOW;
        } else if ("medium" === tmp11) {
          return outer1_1(outer1_2[1]).shadows.SHADOW_MEDIUM;
        }
      }
    }
    return {};
  });
};
