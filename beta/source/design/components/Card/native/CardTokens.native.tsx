// Module ID: 5825
// Function ID: 5826
// Name: CardTokens
// Dependencies: [4758, 580, 2]
// Exports: createCardShadowToken

// Module 5825 (CardTokens)
import nativeDefault from "native" /* 580 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const result = size.fileFinishedImporting("design/components/Card/native/CardTokens.native.tsx");

export const createCardShadowToken = function createCardShadowToken(arg0) {
  _require = arg0;
  return require("createStyles").experimental_createToken((gradient) => {
    if (null == gradient.gradient) {
      if ("none" !== closure_0) {
        if ("border" === tmp11) {
          return nativeDefault.shadows.SHADOW_BORDER;
        } else if ("high" === tmp11) {
          return nativeDefault.shadows.SHADOW_HIGH;
        } else if ("ledge" === tmp11) {
          return nativeDefault.shadows.SHADOW_LEDGE;
        } else if ("low" === tmp11) {
          return nativeDefault.shadows.SHADOW_LOW;
        } else if ("medium" === tmp11) {
          return nativeDefault.shadows.SHADOW_MEDIUM;
        }
      }
    }
    return {};
  });
};
