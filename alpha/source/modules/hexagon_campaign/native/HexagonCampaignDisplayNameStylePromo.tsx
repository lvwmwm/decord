// Module ID: 16783
// Function ID: 16784
// Name: HexagonCampaignDisplayNameStylePromo
// Dependencies: [19, 17, 21, 5140, 575, 5199, 16784, 16785, 5751, 1113, 4411, 16787, 2]
// Exports: default

// Module 16783 (HexagonCampaignDisplayNameStylePromo)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import Text_Text from "Text/Text" /* 5751 */;
import HexagonCampaignPromoGradientDefault from "HexagonCampaignPromoGradient" /* 16785 */;
import openHexagonCampaignLearnMore from "openHexagonCampaignLearnMore" /* 16787 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5140 */;
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
          const obj = { variant: "footnote/medium", color: "text-strong", style: link.link, accessibilityRole: "link", onPress: openHexagonCampaignLearnMore.openHexagonCampaignLearnMore, children };
          const Text = Text_Text.Text;
          return React3(Text, obj, arg1);
        }
    };
    formatResult = intl.format(tmp6(4411).eb99JA, obj3);
  } else {
    formatResult = intl.string(tmp6(4411).WyZOg3);
  }
  items[1] = closure_4(Text, { variant: "footnote/medium", color: "text-default", lineClamp: 1, children: formatResult });
  return closure_4(ThemeContextProvider, obj);
};
