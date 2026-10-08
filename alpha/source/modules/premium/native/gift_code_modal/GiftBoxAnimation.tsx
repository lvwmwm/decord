// Module ID: 11237
// Function ID: 11238
// Name: GiftBoxAnimation
// Dependencies: [19, 5079, 1391, 21, 558, 576, 504, 11238, 11239, 11240, 10176, 10185, 10182, 10179, 10188, 10191, 10194, 10197, 5741, 6110, 2]

// Module 11237 (GiftBoxAnimation)
import Fragment from "Fragment" /* 21 */;
import get_initialized from "get initialized" /* 504 */;
import react2 from "react" /* 576 */;
import PremiumConstants from "PremiumConstants" /* 1391 */;
import merged5 from "merged5" /* 5741 */;
import LottieAnimationViewDefault from "LottieAnimationView" /* 6110 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5079 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const PremiumGiftStyles = PremiumConstants.PremiumGiftStyles;
const jsx = Fragment.jsx;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function GiftBoxAnimation(giftStyle) {
  let tmp32;
  let tmp4;
  let tmp5;
  let useReducedMotion;
  const obj = react2;
  const cResult = obj.c(20);
  giftStyle = giftStyle.giftStyle;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [AccessibilityStore];
    const fn = function h() {
      return useReducedMotion.useReducedMotion;
    };
    cResult[0] = items;
    cResult[1] = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  get_initialized;
  if (null == giftStyle) {
    return null;
  } else {
    let tmp30;
    if (cResult[2] !== giftStyle) {
      let tmp10;
      let tmp11;
      let tmp13;
      let tmp15;
      let tmp16;
      let tmp18;
      let tmp19;
      let tmp21;
      let tmp23;
      let tmp24;
      let tmp25;
      let tmp26;
      const _Symbol = Symbol;
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        class A {
          constructor() {
            return require("module_11238");
          }
        }
        cResult[4] = A;
        tmp10 = A;
      } else {
        class A {
          constructor() {
            return require("module_11238");
          }
        }
      }
      const _Symbol2 = Symbol;
      if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
        class A {
          constructor() {
            return require("module_11238");
          }
        }
        cResult[5] = tmp12;
        tmp11 = tmp12;
      } else {
        class A {
          constructor() {
            return require("module_11238");
          }
        }
      }
      const _Symbol3 = Symbol;
      if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
        class A {
          constructor() {
            return require("module_11238");
          }
        }
        cResult[6] = tmp14;
        tmp13 = tmp14;
      } else {
        class A {
          constructor() {
            return require("module_11238");
          }
        }
      }
      const _Symbol4 = Symbol;
      if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
        class E {
          constructor() {
            return require("module_10176");
          }
        }
        cResult[7] = E;
        tmp15 = E;
      } else {
        class E {
          constructor() {
            return require("module_10176");
          }
        }
      }
      const _Symbol5 = Symbol;
      if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
        class E {
          constructor() {
            return require("module_10176");
          }
        }
        cResult[8] = tmp17;
        tmp16 = tmp17;
      } else {
        class E {
          constructor() {
            return require("module_10176");
          }
        }
      }
      const _Symbol6 = Symbol;
      if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
        class O {
          constructor() {
            return require("module_10182");
          }
        }
        cResult[9] = O;
        tmp18 = O;
      } else {
        class O {
          constructor() {
            return require("module_10182");
          }
        }
      }
      const _Symbol7 = Symbol;
      if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
        class O {
          constructor() {
            return require("module_10182");
          }
        }
        cResult[10] = tmp20;
        tmp19 = tmp20;
      } else {
        class O {
          constructor() {
            return require("module_10182");
          }
        }
      }
      const _Symbol8 = Symbol;
      if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
        class O {
          constructor() {
            return require("module_10182");
          }
        }
        cResult[11] = tmp22;
        tmp21 = tmp22;
      } else {
        class O {
          constructor() {
            return require("module_10182");
          }
        }
      }
      const _Symbol9 = Symbol;
      if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
        class C {
          constructor() {
            return require("module_10191");
          }
        }
        cResult[12] = C;
        tmp23 = C;
      } else {
        class C {
          constructor() {
            return require("module_10191");
          }
        }
      }
      const _Symbol10 = Symbol;
      if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
        class N {
          constructor() {
            return require("module_10194");
          }
        }
        cResult[13] = N;
        tmp24 = N;
      } else {
        class N {
          constructor() {
            return require("module_10194");
          }
        }
      }
      const _Symbol11 = Symbol;
      if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
        class B {
          constructor() {
            return require("module_10197");
          }
        }
        cResult[14] = B;
        tmp25 = B;
      } else {
        class B {
          constructor() {
            return require("module_10197");
          }
        }
      }
      const _Symbol12 = Symbol;
      if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
        class F {
          constructor() {
            return require("module_10176");
          }
        }
        cResult[15] = F;
        tmp26 = F;
      } else {
        class F {
          constructor() {
            return require("module_10176");
          }
        }
      }
      const str = merged5;
      const match = str.match(giftStyle);
      const withResult = match.with(PremiumGiftStyles.SNOWGLOBE, tmp10);
      const withResult1 = withResult.with(PremiumGiftStyles.BOX, tmp11);
      const withResult2 = withResult1.with(PremiumGiftStyles.CUP, tmp13);
      const withResult3 = withResult2.with(PremiumGiftStyles.STANDARD_BOX, tmp15);
      const withResult4 = withResult3.with(PremiumGiftStyles.COFFEE, tmp16);
      const withResult5 = withResult4.with(PremiumGiftStyles.CHEST, tmp18);
      const withResult6 = withResult5.with(PremiumGiftStyles.CAKE, tmp19);
      const withResult7 = withResult6.with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, tmp21);
      const withResult8 = withResult7.with(PremiumGiftStyles.SEASONAL_CAKE, tmp23);
      const withResult9 = withResult8.with(PremiumGiftStyles.SEASONAL_CHEST, tmp24);
      const withResult10 = withResult9.with(PremiumGiftStyles.SEASONAL_COFFEE, tmp25);
      cResult[2] = giftStyle;
      cResult[3] = withResult10.otherwise(tmp26);
      const otherwiseResult = withResult10.otherwise(tmp26);
    } else {
      class F {
        constructor() {
          return require("module_10176");
        }
      }
    }
    const _Symbol13 = Symbol;
    if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
      class F {
        constructor() {
          return require("module_10176");
        }
      }
      cResult[16] = tmp31;
      tmp30 = tmp31;
    } else {
      class F {
        constructor() {
          return require("module_10176");
        }
      }
    }
    if (cResult[17] === tmp9) {
      class F {
        constructor() {
          return require("module_10176");
        }
      }
      return tmp32;
    }
    const tmp35 = jsx(LottieAnimationViewDefault, { source: tmp9, autoPlay: !tmp8, style: tmp30 });
    cResult[17] = tmp9;
    cResult[18] = !tmp8;
    cResult[19] = tmp35;
    tmp32 = tmp35;
  }
}) : (function GiftBoxAnimation(giftStyle) {
  let useReducedMotion;
  const f107110 = () => require("module_10176");
  giftStyle = giftStyle.giftStyle;
  get_initialized;
  [][0] = AccessibilityStore;
  if (null == giftStyle) {
    return null;
  } else {
    const str = merged5;
    const match = str.match(giftStyle);
    const withResult = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11238"));
    const withResult1 = withResult.with(PremiumGiftStyles.BOX, () => require("module_11239"));
    const withResult2 = withResult1.with(PremiumGiftStyles.CUP, () => require("module_11240"));
    const withResult3 = withResult2.with(PremiumGiftStyles.STANDARD_BOX, () => require("module_10176"));
    const withResult4 = withResult3.with(PremiumGiftStyles.COFFEE, () => require("module_10185"));
    const withResult5 = withResult4.with(PremiumGiftStyles.CHEST, () => require("module_10182"));
    const withResult6 = withResult5.with(PremiumGiftStyles.CAKE, () => require("module_10179"));
    const withResult7 = withResult6.with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("module_10188"));
    const withResult8 = withResult7.with(PremiumGiftStyles.SEASONAL_CAKE, () => require("module_10191"));
    const withResult9 = withResult8.with(PremiumGiftStyles.SEASONAL_CHEST, () => require("module_10194"));
    const withResult10 = withResult9.with(PremiumGiftStyles.SEASONAL_COFFEE, () => require("module_10197"));
    withResult10.otherwise(f107110);
    return jsx(LottieAnimationViewDefault, { source: withResult10.otherwise(f107110), autoPlay: !tmp4, style: { width: 320, height: 212 } });
  }
});
const result = size.fileFinishedImporting("modules/premium/native/gift_code_modal/GiftBoxAnimation.tsx");

export default tmp3;
