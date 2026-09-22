// Module ID: 5689
// Function ID: 5690
// Name: CardTokens
// Dependencies: [4636, 576, 2]
// Exports: createCardShadowToken

// Module 5689 (CardTokens)
import nativeDefault from "native" /* 576 */;
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
