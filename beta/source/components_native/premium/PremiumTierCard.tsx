// Module ID: 13832
// Function ID: 13833
// Name: PremiumTierCard
// Dependencies: [19, 17, 7676, 1378, 21, 4758, 580, 558, 568, 13833, 13834, 8331, 7680, 7681, 11013, 4418, 5198, 1098, 5824, 2]

// Module 13832 (PremiumTierCard)
import nativeDefault from "native" /* 580 */;
import ConstantsIOS from "ConstantsIOS" /* 1098 */;
import PremiumUtils from "PremiumUtils" /* 4418 */;
import LinearGradientDefault from "LinearGradient" /* 5198 */;
import _modDef7680 from "module_7680" /* 7680 */;
import _modDef7681 from "module_7681" /* 7681 */;
import _modDef8331 from "module_8331" /* 8331 */;
import _modDef11013 from "module_11013" /* 11013 */;
import _modDef13833 from "module_13833" /* 13833 */;
import _modDef13834 from "module_13834" /* 13834 */;
import noop from "module_19" /* 19 */;

const Card = tmp8(5824);
require = fn;
get_ActivityIndicator = fn(17);
({ View: c3, Image: closure_4 } = get_ActivityIndicator);
const getPremiumGradientColor = fn(7676).getPremiumGradientColor;
const PremiumTypes = fn(1378).PremiumTypes;
const jsxProd = fn(21);
({ jsx: closure_7, Fragment: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(4758);
let obj2 = { header: { marginTop: 24, padding: 16 }, textLogoTier0: { width: 158, height: 32 }, textLogoTier1: { width: 185, height: 32 }, textLogoTier2: { width: 80, height: 32 }, wumpusLogo: { position: "absolute", top: 0, right: 24, zIndex: 1 }, wumpusLogoTier0: { width: 83, height: 100 }, wumpusLogoTier1: { width: 86, height: 100 }, wumpusLogoTier2: { width: 133, height: 100 }, body: { padding: 16, borderBottomRightRadius: nativeDefault.radii.xs, borderBottomLeftRadius: nativeDefault.radii.xs } };
let closure_10 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
const obj3 = { padding: 16, borderBottomRightRadius: nativeDefault.radii.xs, borderBottomLeftRadius: nativeDefault.radii.xs };
const size = fn(2);
const result = size.fileFinishedImporting("components_native/premium/PremiumTierCard.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((premiumType) => {
  const cResult = premiumType(568).c(50);
  premiumType = premiumType.premiumType;
  ({ children, style } = premiumType);
  const tmp2 = closure_10();
  importDefault = tmp2;
  if (cResult[0] !== premiumType) {
    const fn = function n() {
      if (PremiumTypes.TIER_0 === premiumType) {
        return _modDef13833;
      } else if (tmp2.TIER_1 === tmp) {
        return _modDef13834;
      } else if (tmp2.TIER_2 === tmp) {
        return _modDef8331;
      }
    };
    cResult[0] = premiumType;
    cResult[1] = fn;
  }
  if (cResult[2] !== premiumType) {
    class E {
      constructor() {
        tmp = premiumType;
        tmp2 = PremiumTypes;
        if (PremiumTypes.TIER_0 === premiumType) {
          tmp7 = closure_1;
          tmp8 = closure_2;
          return closure_1(closure_2[12]);
        } else if (tmp2.TIER_1 === tmp) {
          tmp5 = closure_1;
          tmp6 = closure_2;
          return closure_1(closure_2[13]);
        } else if (tmp2.TIER_2 === tmp) {
          tmp3 = closure_1;
          tmp4 = closure_2;
          return closure_1(closure_2[14]);
        } else {
          return;
        }
      }
    }
    cResult[2] = premiumType;
    cResult[3] = E;
  } else {
    class E {
      constructor() {
        tmp = premiumType;
        tmp2 = PremiumTypes;
        if (PremiumTypes.TIER_0 === premiumType) {
          tmp7 = closure_1;
          tmp8 = closure_2;
          return closure_1(closure_2[12]);
        } else if (tmp2.TIER_1 === tmp) {
          tmp5 = closure_1;
          tmp6 = closure_2;
          return closure_1(closure_2[13]);
        } else if (tmp2.TIER_2 === tmp) {
          tmp3 = closure_1;
          tmp4 = closure_2;
          return closure_1(closure_2[14]);
        } else {
          return;
        }
      }
    }
  }
  if (cResult[4] === premiumType) {
    class E {
      constructor() {
        tmp = premiumType;
        tmp2 = PremiumTypes;
        if (PremiumTypes.TIER_0 === premiumType) {
          tmp7 = closure_1;
          tmp8 = closure_2;
          return closure_1(closure_2[12]);
        } else if (tmp2.TIER_1 === tmp) {
          tmp5 = closure_1;
          tmp6 = closure_2;
          return closure_1(closure_2[13]);
        } else if (tmp2.TIER_2 === tmp) {
          tmp3 = closure_1;
          tmp4 = closure_2;
          return closure_1(closure_2[14]);
        } else {
          return;
        }
      }
    }
  }
  const fn2 = function b() {
    if (PremiumTypes.TIER_0 === premiumType) {
      return closure_1.textLogoTier0;
    } else if (tmp2.TIER_1 === tmp) {
      return closure_1.textLogoTier1;
    } else if (tmp2.TIER_2 === tmp) {
      return closure_1.textLogoTier2;
    }
  };
  cResult[4] = premiumType;
  cResult[5] = tmp2.textLogoTier0;
  cResult[6] = tmp2.textLogoTier1;
  cResult[7] = tmp2.textLogoTier2;
  cResult[8] = fn2;
}) : ((premiumType) => {
  premiumType = premiumType.premiumType;
  ({ children, style } = premiumType);
  const tmp = closure_10();
  const obj = { style: tmp.header, start: ConstantsIOS.HorizontalGradient.START, end: ConstantsIOS.HorizontalGradient.END, colors: getPremiumGradientColor(premiumType), children: null };
  const obj2 = { accessible: true, accessibilityLabel: null, accessibilityRole: "header", style: null, source: null };
  const tmp2 = options;
  const tmp3 = closure_1_8;
  const tmp7 = LinearGradientDefault;
  obj2.accessibilityLabel = PremiumUtils.getPremiumTypeDisplayName(premiumType);
  if (PremiumTypes.TIER_0 === premiumType) {
    let textLogoTier2 = tmp.textLogoTier0;
  } else if (tmp10.TIER_1 === premiumType) {
    textLogoTier2 = tmp.textLogoTier1;
  } else if (tmp10.TIER_2 === premiumType) {
    textLogoTier2 = tmp.textLogoTier2;
  }
  obj2.style = textLogoTier2;
  if (PremiumTypes.TIER_0 === premiumType) {
    let tmp5Result = tmp5(13833);
  } else if (tmp10.TIER_1 === premiumType) {
    tmp5Result = tmp5(13834);
  } else if (tmp10.TIER_2 === premiumType) {
    tmp5Result = tmp5(8331);
  }
  obj2.source = tmp5Result;
  obj.children = React5(React4, obj2);
  const items = [React5(tmp7, obj), , ];
  const items1 = [tmp.wumpusLogo, ];
  if (PremiumTypes.TIER_0 === premiumType) {
    let wumpusLogoTier2 = tmp.wumpusLogoTier0;
  } else if (tmp10.TIER_1 === premiumType) {
    wumpusLogoTier2 = tmp.wumpusLogoTier1;
  } else if (tmp10.TIER_2 === premiumType) {
    wumpusLogoTier2 = tmp.wumpusLogoTier2;
  }
  const obj4 = { accessible: false, importantForAccessibility: "no", style: items1, source: null };
  items1[1] = wumpusLogoTier2;
  if (PremiumTypes.TIER_0 === premiumType) {
    let tmp5Result2 = tmp5(7680);
  } else if (tmp10.TIER_1 === premiumType) {
    tmp5Result2 = tmp5(7681);
  } else if (tmp10.TIER_2 === premiumType) {
    tmp5Result2 = tmp5(11013);
  }
  const obj5 = { children: null };
  obj4.source = tmp5Result2;
  items[1] = React5(React4, obj4);
  items[2] = React5(React3, { style: tmp.body, children });
  obj5.children = items;
  const children1 = tmp2(tmp3, obj5);
  return React5(Card.Card, { variant: "surface-high", style, children: children1 });
});
