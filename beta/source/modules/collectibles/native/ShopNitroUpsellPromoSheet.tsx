// Module ID: 16133
// Function ID: 16134
// Name: ShopNitroUpsellPromoSheet
// Dependencies: [19, 1078, 21, 558, 568, 7441, 10259, 8133, 9457, 10260, 5939, 1119, 10263, 5220, 10649, 5684, 2]

// Module 16133 (ShopNitroUpsellPromoSheet)
import c from "c" /* 568 */;
import util from "util" /* 1119 */;
import components_Button_Button from "components/Button/Button" /* 5220 */;
import ButtonGroup from "ButtonGroup" /* 5684 */;
import native from "native" /* 5939 */;
import useAnalyticsLocationsDefault from "useAnalyticsLocations" /* 7441 */;
import EntitlementFeatureNames from "EntitlementFeatureNames" /* 8133 */;
import PremiumUpsellUtils from "PremiumUpsellUtils" /* 9457 */;
import PremiumFeatureUpsellUtils from "PremiumFeatureUpsellUtils" /* 10259 */;
import usePremiumFeatureUpsellGetNitroDefault from "usePremiumFeatureUpsellGetNitro" /* 10260 */;
import NitroUpsellButtonDefault from "NitroUpsellButton" /* 10263 */;
import PromoSheet from "PromoSheet" /* 10649 */;
import noop from "module_19" /* 19 */;

require = fn;
const AnalyticsPages = fn(1078).AnalyticsPages;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/native/ShopNitroUpsellPromoSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((analyticsLocations) => {
  const cResult = c.c(16);
  analyticsLocations = analyticsLocations.analyticsLocations;
  if (cResult[0] !== analyticsLocations) {
    let items = analyticsLocations;
    if (undefined === analyticsLocations) {
      items = [];
    }
    cResult[0] = analyticsLocations;
    cResult[1] = items;
    let tmp4 = items;
  } else {
    tmp4 = cResult[1];
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const upsellType = tmp(10259).getUpsellType(tmp(8133).EntitlementFeatureNames.SHOP_MEMBER_PRICING);
    cResult[2] = upsellType;
    let tmp7 = upsellType;
    const tmpResult = tmp(10259);
  } else {
    tmp7 = cResult[2];
  }
  const tmp6 = tmp4;
  const onViewAllPerks = PremiumUpsellUtils.usePremiumUpsellConfig(tmp7, useAnalyticsLocationsDefault(tmp4).analyticsLocations).onViewAllPerks;
  const tmpResult2 = PremiumUpsellUtils;
  ({ loading, onPress } = usePremiumFeatureUpsellGetNitroDefault(false, onViewAllPerks, AnalyticsPages.PREMIUM_UPSELL_SHOP_MEMBER_PRICING, undefined, tmp6));
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp14 = React4(tmp(5939).DiscountsMegaphoneSpotIllustration, {});
    const intl = tmp(1119).intl;
    const stringResult = intl.string(tmp(1119).t.GZWBoL);
    const intl2 = tmp(1119).intl;
    const stringResult1 = intl2.string(tmp(1119).t["2+/rrF"]);
    cResult[3] = tmp14;
    cResult[4] = stringResult;
    cResult[5] = stringResult1;
    let tmp12 = stringResult1;
    let tmp11 = stringResult;
    let tmp10 = tmp14;
  } else {
    tmp10 = cResult[3];
    tmp11 = cResult[4];
    tmp12 = cResult[5];
  }
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    const intl3 = tmp(1119).intl;
    const stringResult2 = intl3.string(tmp(1119).t["8x0jKT"]);
    cResult[6] = stringResult2;
    let tmp17 = stringResult2;
  } else {
    tmp17 = cResult[6];
  }
  if (cResult[7] === loading) {
    if (cResult[8] === onPress) {
      let tmp19 = cResult[9];
    }
    const _Symbol = Symbol;
    if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
      const intl4 = tmp(1119).intl;
      const stringResult3 = intl4.string(tmp(1119).t.PcTCB7);
      cResult[10] = stringResult3;
      let tmp21 = stringResult3;
    } else {
      tmp21 = cResult[10];
    }
    if (cResult[11] !== onViewAllPerks) {
      const obj2 = { size: "lg", variant: "secondary", text: tmp21, onPress: onViewAllPerks };
      const tmp25 = React4(tmp(5220).Button, obj2);
      cResult[11] = onViewAllPerks;
      cResult[12] = tmp25;
      let tmp23 = tmp25;
    } else {
      tmp23 = cResult[12];
    }
    if (cResult[13] === tmp23) {
      if (cResult[14] === tmp19) {
        let tmp26 = cResult[15];
      }
      return tmp26;
    }
    const obj3 = { illustration: tmp10, title: tmp11, description: tmp12, actions: null };
    const obj4 = { children: null };
    const items1 = [tmp19, tmp23];
    obj4.children = items1;
    obj3.actions = hasOwnProperty(tmp(5684).ButtonGroup, obj4);
    const tmp29 = React4(tmp(10649).PromoSheet, obj3);
    cResult[13] = tmp23;
    cResult[14] = tmp19;
    cResult[15] = tmp29;
    tmp26 = tmp29;
  }
  const tmp20 = React4(NitroUpsellButtonDefault, { text: tmp17, loading, onPress, shiny: false });
  cResult[7] = loading;
  cResult[8] = onPress;
  cResult[9] = tmp20;
  tmp19 = tmp20;
}) : ((analyticsLocations) => {
  analyticsLocations = analyticsLocations.analyticsLocations;
  if (analyticsLocations === undefined) {
    analyticsLocations = [];
  }
  const obj = PremiumUpsellUtils;
  const onViewAllPerks = obj.usePremiumUpsellConfig(PremiumFeatureUpsellUtils.getUpsellType(EntitlementFeatureNames.EntitlementFeatureNames.SHOP_MEMBER_PRICING), useAnalyticsLocationsDefault(analyticsLocations).analyticsLocations).onViewAllPerks;
  ({ loading, onPress } = usePremiumFeatureUpsellGetNitroDefault(false, onViewAllPerks, AnalyticsPages.PREMIUM_UPSELL_SHOP_MEMBER_PRICING, undefined, analyticsLocations));
  const obj3 = { illustration: React4(native.DiscountsMegaphoneSpotIllustration, {}), title: null, description: null, actions: null };
  const intl = util.intl;
  obj3.title = intl.string(util.t.GZWBoL);
  const intl2 = util.intl;
  obj3.description = intl2.string(util.t["2+/rrF"]);
  const obj4 = { children: null };
  const obj5 = { text: null, loading: null, onPress: null, shiny: false };
  const tmp = usePremiumFeatureUpsellGetNitroDefault(false, onViewAllPerks, AnalyticsPages.PREMIUM_UPSELL_SHOP_MEMBER_PRICING, undefined, analyticsLocations);
  const intl3 = util.intl;
  obj5.text = intl3.string(util.t["8x0jKT"]);
  obj5.loading = loading;
  obj5.onPress = onPress;
  const items = [React4(NitroUpsellButtonDefault, obj5), ];
  const obj6 = { size: "lg", variant: "secondary", text: null, onPress: null };
  const intl4 = util.intl;
  obj6.text = intl4.string(util.t.PcTCB7);
  obj6.onPress = onViewAllPerks;
  items[1] = React4(components_Button_Button.Button, obj6);
  obj4.children = items;
  obj3.actions = hasOwnProperty(ButtonGroup.ButtonGroup, obj4);
  return React4(PromoSheet.PromoSheet, obj3);
});
