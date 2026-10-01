// Module ID: 13032
// Function ID: 13033
// Name: Footer
// Dependencies: [19, 17, 21, 4836, 13033, 6603, 4832, 1115, 5281, 5899, 13034, 2]
// Exports: default

// Module 13032 (Footer)
import react_native from "react-native" /* 17 */;
import intl2 from "intl" /* 1115 */;
import Text_Text from "Text/Text" /* 4832 */;
import components_Button_Button from "components/Button/Button" /* 5281 */;
import FastImageDefault from "FastImage" /* 5899 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 6603 */;
import useOpenPremiumMarketingPaymentDefault from "useOpenPremiumMarketingPayment" /* 13033 */;
import AssetRegistryDefault from "AssetRegistry" /* 13034 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let metroRequire;
const View = react_native.View;
({ jsx: closure_4, Fragment: hasOwnProperty, jsxs: metroRequire } = Fragment);
let closure_7 = createStyles.createStyles({ container: { flex: 1, flexDirection: "column", alignItems: "center", width: "100%" }, footerText: { marginBottom: 24 }, button: { marginBottom: 40 }, easterEggSpacing: { position: "absolute", top: 40 } });
const result = size.fileFinishedImporting("modules/user_settings/premium/native/Footer.tsx");

export default function Footer(showSubscribeButton) {
  let intl;
  let items;
  let items1;
  let items2;
  let obj5;
  showSubscribeButton = showSubscribeButton.showSubscribeButton;
  const style = showSubscribeButton.style;
  const tmp = closure_7();
  const tmp4 = useOpenPremiumMarketingPaymentDefault;
  tmp4(AnalyticsLocationDefault.PREMIUM_MARKETING_FOOTER);
  const obj = { style: items, children: items2 };
  items = [tmp.container, style];
  let tmp8Result = showSubscribeButton;
  if (tmp8Result) {
    const obj2 = { children: items1 };
    const obj3 = { style: tmp.footerText, variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: intl.string(intl2.t["2bSPbq"]) };
    const Text = Text_Text.Text;
    intl = intl2.intl;
    items1 = [React3(Text, obj3), ];
    const obj4 = { style: tmp.button, children: React3(components_Button_Button.Button, obj5) };
    obj5 = { text: tmp7, variant: "primary", size: "lg", onPress: tmp6, grow: true };
    items1[1] = React3(View, obj4);
    tmp8Result = tmp8(hasOwnProperty, obj2);
  }
  items2 = [tmp8Result, ];
  let easterEggSpacing = null;
  const tmp14 = React3;
  const tmp2Result = FastImageDefault;
  if (!showSubscribeButton) {
    easterEggSpacing = tmp.easterEggSpacing;
  }
  const obj6 = { style: easterEggSpacing, source: AssetRegistryDefault };
  items2[1] = tmp14(tmp2Result, obj6);
  return metroRequire(View, obj);
};
