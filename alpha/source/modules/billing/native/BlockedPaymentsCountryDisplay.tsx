// Module ID: 11339
// Function ID: 11340
// Name: BlockedPaymentsCountryDisplay
// Dependencies: [19, 17, 1072, 21, 5009, 575, 5248, 1188, 1114, 2062, 5712, 5016, 11340, 11341, 2]
// Exports: default

// Module 11339 (BlockedPaymentsCountryDisplay)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1072 */;
import intl3 from "intl" /* 1114 */;
import native from "native" /* 1188 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2062 */;
import shared from "shared" /* 5016 */;
import useThemeDefault from "useTheme" /* 5248 */;
import FastImageDefault from "FastImage" /* 5712 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let metroRequire;
let obj2;
const View = react_native.View;
const HelpdeskArticles = Constants.HelpdeskArticles;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let obj = { container: { alignItems: "center" }, header: obj2, image: { marginTop: 38 } };
obj2 = { fontSize: 20, fontWeight: "700", color: nativeDefault.colors.TEXT_SUBTLE, marginBottom: 16 };
let closure_7 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/billing/native/BlockedPaymentsCountryDisplay.tsx");

export default function BlockedPaymentsCountryDisplay() {
  let IHxEJU;
  let format;
  let intl;
  let items;
  let obj4;
  let obj5;
  let tmp2Result;
  const tmp = closure_7();
  const obj = { style: tmp.container, children: items };
  const obj2 = { style: tmp.header, children: intl.string(intl3.t.vwMEHS) };
  const tmp4 = useThemeDefault();
  const LegacyText = native.LegacyText;
  intl = intl3.intl;
  items = [hasOwnProperty(LegacyText, obj2), , ];
  const obj3 = { children: format(IHxEJU, obj4) };
  const LegacyText2 = native.LegacyText;
  const intl2 = intl3.intl;
  format = intl2.format;
  obj4 = { helpdeskArticle: obj5.getArticleURL(HelpdeskArticles.BLOCKED_PAYMENTS) };
  IHxEJU = intl3.t.IHxEJU;
  obj5 = HelpdeskUtilsDefault;
  items[1] = hasOwnProperty(LegacyText2, obj3);
  const obj6 = { style: tmp.image, source: tmp2Result };
  const tmp8 = FastImageDefault;
  const obj7 = shared;
  const tmp5 = metroRequire;
  const tmp6 = View;
  const tmp7 = hasOwnProperty;
  if (obj7.isThemeDark(tmp4)) {
    tmp2Result = tmp2(11340);
  } else {
    tmp2Result = tmp2(11341);
  }
  items[2] = tmp7(tmp8, obj6);
  return tmp5(tmp6, obj);
};
