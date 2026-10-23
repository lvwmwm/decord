// Module ID: 15844
// Function ID: 15845
// Name: HexagonCampaignDisplayNameStylePromo
// Dependencies: [19, 17, 21, 4969, 587, 558, 576, 5232, 15845, 15846, 1128, 5035, 15848, 2]

// Module 15844 (HexagonCampaignDisplayNameStylePromo)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import Text_Text from "Text/Text" /* 5232 */;
import openHexagonCampaignLearnMore from "openHexagonCampaignLearnMore" /* 15845 */;
import HexagonCampaignPromoGradientDefault from "HexagonCampaignPromoGradient" /* 15846 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4969 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let closure_4;
let hasOwnProperty;
let obj2;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let obj = { promo: obj2, link: { textDecorationLine: "underline" } };
obj2 = { height: 32, justifyContent: "center", paddingBottom: 2, paddingLeft: nativeDefault.space.PX_12, paddingRight: nativeDefault.space.PX_8 };
let closure_6 = createStyles.createStyles(obj);
const tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function HexagonCampaignDisplayNameStylePromo(showLearnMore) {
  let formatResult;
  let items;
  let link;
  let obj4;
  let tmp6;
  let tmp7;
  let obj = require("react");
  const cResult = obj.c(11);
  showLearnMore = showLearnMore.showLearnMore;
  const tmp5 = closure_6();
  _require = tmp5;
  if (cResult[0] !== tmp5.link) {
    function learnMoreHook(children, arg1) {
      const obj = { variant: "text-xxs/medium", color: "text-strong", style: link.link, accessibilityRole: "link", onPress: openHexagonCampaignLearnMore.openHexagonCampaignLearnMore, children };
      const Text = Text_Text.Text;
      return React3(Text, obj, arg1);
    }
    cResult[0] = tmp5.link;
    cResult[1] = learnMoreHook;
    tmp6 = learnMoreHook;
  } else {
    tmp6 = cResult[1];
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp10 = closure_4(HexagonCampaignPromoGradientDefault, { angle: 172 });
    cResult[2] = tmp10;
    tmp7 = tmp10;
  } else {
    tmp7 = cResult[2];
  }
  if (cResult[3] === tmp6) {
    let tmp11;
    let tmp13;
    if (cResult[4] === (undefined !== showLearnMore && showLearnMore)) {
      tmp11 = cResult[5];
    }
    if (cResult[6] !== tmp11) {
      const obj2 = { variant: "text-xxs/medium", color: "text-default", lineClamp: 1, children: tmp11 };
      const tmp15 = closure_4(require("Text/Text").Text, obj2);
      cResult[6] = tmp11;
      cResult[7] = tmp15;
      tmp13 = tmp15;
    } else {
      tmp13 = cResult[7];
    }
    if (cResult[8] === tmp5.promo) {
      let tmp16;
      if (cResult[9] === tmp13) {
        tmp16 = cResult[10];
      }
      return tmp16;
    }
    const obj3 = { theme: require("shared/ThemeTypes").ThemeTypes.DARK, children: closure_5(View, obj4) };
    const ThemeContextProvider = tmp(5035).ThemeContextProvider;
    obj4 = { style: tmp5.promo, children: items };
    items = [tmp7, tmp13];
    const tmp20 = closure_4(ThemeContextProvider, obj3);
    cResult[8] = tmp5.promo;
    cResult[9] = tmp13;
    cResult[10] = tmp20;
    tmp16 = tmp20;
  }
  const intl = tmp(1128).intl;
  if (undefined !== showLearnMore && showLearnMore) {
    const obj5 = { learnMoreHook: tmp6 };
    formatResult = intl.format(tmp(1128).t.eb99JA, obj5);
  } else {
    formatResult = intl.string(tmp(1128).t.WyZOg3);
  }
  cResult[3] = tmp6;
  cResult[4] = undefined !== showLearnMore && showLearnMore;
  cResult[5] = formatResult;
  tmp11 = formatResult;
}) : (function HexagonCampaignDisplayNameStylePromo(showLearnMore) {
  let formatResult;
  let items;
  let link;
  let obj2;
  let tmp5;
  let tmp6;
  let flag = showLearnMore.showLearnMore;
  if (flag === undefined) {
    flag = false;
  }
  const tmp = closure_6();
  _require = tmp;
  let obj = { theme: require("shared/ThemeTypes").ThemeTypes.DARK, children: tmp5(tmp6, obj2) };
  const ThemeContextProvider = require("native").ThemeContextProvider;
  obj2 = { style: tmp.promo, children: items };
  items = [closure_4(HexagonCampaignPromoGradientDefault, { angle: 172 }), ];
  let Text = require("Text/Text").Text;
  const intl = require("intl").intl;
  tmp5 = closure_5;
  tmp6 = View;
  if (flag) {
    const obj3 = {
      learnMoreHook(children, arg1) {
          const obj = { variant: "text-xxs/medium", color: "text-strong", style: link.link, accessibilityRole: "link", onPress: openHexagonCampaignLearnMore.openHexagonCampaignLearnMore, children };
          const Text = Text_Text.Text;
          return React3(Text, obj, arg1);
        }
    };
    formatResult = intl.format(tmp3(1128).t.eb99JA, obj3);
  } else {
    formatResult = intl.string(tmp3(1128).t.WyZOg3);
  }
  items[1] = closure_4(Text, { variant: "text-xxs/medium", color: "text-default", lineClamp: 1, children: formatResult });
  return closure_4(ThemeContextProvider, obj);
});
const result = size.fileFinishedImporting("modules/hexagon_campaign/native/HexagonCampaignDisplayNameStylePromo.tsx");

export default tmp4;
