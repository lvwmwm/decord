// Module ID: 16426
// Function ID: 16427
// Name: HexagonCampaignDisplayNameStylePromo
// Dependencies: [19, 17, 21, 5009, 575, 5075, 16427, 16428, 5619, 1114, 4282, 16430, 2]
// Exports: default

// Module 16426 (HexagonCampaignDisplayNameStylePromo)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import Text_Text from "Text/Text" /* 5619 */;
import HexagonCampaignPromoGradientDefault from "HexagonCampaignPromoGradient" /* 16428 */;
import openHexagonCampaignLearnMore from "openHexagonCampaignLearnMore" /* 16430 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5009 */;
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
const result = size.fileFinishedImporting("modules/hexagon_campaign/native/HexagonCampaignDisplayNameStylePromo.tsx");

export default function HexagonCampaignDisplayNameStylePromo(showLearnMore) {
  let formatResult;
  let items;
  let link;
  let obj2;
  let tmp4;
  let tmp5;
  let flag = showLearnMore.showLearnMore;
  if (flag === undefined) {
    flag = false;
  }
  const tmp = closure_6();
  _require = tmp;
  let obj = { theme: require("shared/ThemeTypes").ThemeTypes.DARK, children: tmp4(tmp5, obj2) };
  const ThemeContextProvider = require("native").ThemeContextProvider;
  obj2 = { style: tmp.promo, children: items };
  items = [closure_4(HexagonCampaignPromoGradientDefault, { angle: 172 }), ];
  let Text = require("Text/Text").Text;
  const intl = require("intl").intl;
  tmp4 = closure_5;
  tmp5 = View;
  if (flag) {
    const obj3 = {
      learnMoreHook(children, arg1) {
          const obj = { variant: "text-xxs/medium", color: "text-strong", style: link.link, accessibilityRole: "link", onPress: openHexagonCampaignLearnMore.openHexagonCampaignLearnMore, children };
          const Text = Text_Text.Text;
          return React3(Text, obj, arg1);
        }
    };
    formatResult = intl.format(tmp6(4282).eb99JA, obj3);
  } else {
    formatResult = intl.string(tmp6(4282).WyZOg3);
  }
  items[1] = closure_4(Text, { variant: "text-xxs/medium", color: "text-default", lineClamp: 1, children: formatResult });
  return closure_4(ThemeContextProvider, obj);
};
