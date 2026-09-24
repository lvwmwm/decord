// Module ID: 13796
// Function ID: 13797
// Name: Footer
// Dependencies: [19, 17, 21, 4790, 558, 568, 13797, 7461, 4786, 1119, 5220, 5834, 13798, 2]

// Module 13796 (Footer)
import c from "c" /* 568 */;
import util from "util" /* 1119 */;
import Text_Text from "Text/Text" /* 4786 */;
import components_Button_Button from "components/Button/Button" /* 5220 */;
import FastImageDefault from "FastImage" /* 5834 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7461 */;
import useOpenPremiumMarketingPaymentDefault from "useOpenPremiumMarketingPayment" /* 13797 */;
import _modDef13798 from "module_13798" /* 13798 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, Fragment: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4790);
let closure_7 = createStyles.createStyles({ container: { flex: 1, flexDirection: "column", alignItems: "center", width: "100%" }, footerText: { marginBottom: 24 }, button: { marginBottom: 40 }, easterEggSpacing: { position: "absolute", top: 40 } });
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/premium/native/Footer.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(15);
  ({ style, showSubscribeButton } = arg0);
  const tmp4 = closure_7();
  ({ openPayment, buttonText } = useOpenPremiumMarketingPaymentDefault(AnalyticsLocationDefault.PREMIUM_MARKETING_FOOTER));
  if (cResult[0] === style) {
    if (cResult[1] === tmp4.container) {
      let tmp8 = cResult[2];
    }
    if (cResult[3] === buttonText) {
      if (cResult[4] === openPayment) {
        if (cResult[5] === showSubscribeButton) {
          if (cResult[6] === tmp4.button) {
            if (cResult[7] === tmp4.footerText) {
              let tmp9 = cResult[8];
            }
            let easterEggSpacing = null;
            if (!showSubscribeButton) {
              easterEggSpacing = tmp4.easterEggSpacing;
            }
            if (cResult[9] !== easterEggSpacing) {
              const obj2 = { style: easterEggSpacing, source: tmp5(13798) };
              const tmp19 = React4(tmp5(5834), obj2);
              cResult[9] = easterEggSpacing;
              cResult[10] = tmp19;
              let tmp16 = tmp19;
              const tmp5Result = tmp5(5834);
            } else {
              tmp16 = cResult[10];
            }
            if (cResult[11] === tmp8) {
              if (cResult[12] === tmp9) {
                if (cResult[13] === tmp16) {
                  let tmp20 = cResult[14];
                }
                return tmp20;
              }
            }
            const obj3 = { style: tmp8, children: null };
            const items = [tmp9, tmp16];
            obj3.children = items;
            const tmp23 = timestampProducer(View, obj3);
            cResult[11] = tmp8;
            cResult[12] = tmp9;
            cResult[13] = tmp16;
            cResult[14] = tmp23;
            tmp20 = tmp23;
          }
        }
      }
    }
    let tmp10 = showSubscribeButton;
    if (showSubscribeButton) {
      const obj4 = { children: null };
      const obj5 = { style: tmp4.footerText, variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: null };
      const intl = tmp(1119).intl;
      obj5.children = intl.string(tmp(1119).t["2bSPbq"]);
      const items1 = [React4(tmp(4786).Text, obj5), ];
      const obj6 = { style: tmp4.button, children: null };
      const obj7 = { text: buttonText, variant: "primary", size: "lg", onPress: openPayment, grow: true };
      obj6.children = React4(tmp(5220).Button, obj7);
      items1[1] = React4(View, obj6);
      obj4.children = items1;
      tmp10 = timestampProducer(hasOwnProperty, obj4);
    }
    cResult[3] = buttonText;
    cResult[4] = openPayment;
    cResult[5] = showSubscribeButton;
    cResult[6] = tmp4.button;
    cResult[7] = tmp4.footerText;
    cResult[8] = tmp10;
    tmp9 = tmp10;
  }
  const items2 = [tmp4.container, style];
  cResult[0] = style;
  cResult[1] = tmp4.container;
  cResult[2] = items2;
  tmp8 = items2;
}) : ((showSubscribeButton) => {
  showSubscribeButton = showSubscribeButton.showSubscribeButton;
  const tmp = closure_7();
  useOpenPremiumMarketingPaymentDefault(AnalyticsLocationDefault.PREMIUM_MARKETING_FOOTER);
  const obj = { style: null, children: null };
  const items = [tmp.container, showSubscribeButton.style];
  obj.style = items;
  let tmp8Result = showSubscribeButton;
  if (showSubscribeButton) {
    const obj2 = { children: null };
    const obj3 = { style: tmp.footerText, variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: null };
    const intl = util.intl;
    obj3.children = intl.string(util.t["2bSPbq"]);
    const items1 = [React4(Text_Text.Text, obj3), ];
    const obj4 = { style: tmp.button, children: null };
    const obj5 = { text: tmp7, variant: "primary", size: "lg", onPress: tmp6, grow: true };
    obj4.children = React4(components_Button_Button.Button, obj5);
    items1[1] = React4(tmp9, obj4);
    obj2.children = items1;
    tmp8Result = tmp8(hasOwnProperty, obj2);
  }
  const items2 = [tmp8Result, ];
  let easterEggSpacing = null;
  const tmp14 = React4;
  if (!showSubscribeButton) {
    easterEggSpacing = tmp.easterEggSpacing;
  }
  const tmp2Result = FastImageDefault;
  items2[1] = tmp14(tmp2Result, { style: easterEggSpacing, source: _modDef13798 });
  obj.children = items2;
  return timestampProducer(View, obj);
});
