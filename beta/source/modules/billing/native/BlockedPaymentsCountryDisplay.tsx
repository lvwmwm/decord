// Module ID: 10979
// Function ID: 10980
// Name: BlockedPaymentsCountryDisplay
// Dependencies: [19, 17, 1074, 21, 4836, 576, 4767, 1177, 1115, 2111, 4685, 10980, 10981, 2]
// Exports: default

// Module 10979 (BlockedPaymentsCountryDisplay)
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1074 */;
import intl3 from "intl" /* 1115 */;
import native from "native" /* 1177 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2111 */;
import shared from "shared" /* 4685 */;
import useThemeDefault from "useTheme" /* 4767 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
let metroImportDefault;
let metroRequire;
let obj2;
({ View: c3, Image: closure_4 } = react_native);
const HelpdeskArticles = Constants.HelpdeskArticles;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let obj = { container: { alignItems: "center" }, header: obj2, image: { marginTop: 38 } };
obj2 = { fontSize: 20, fontWeight: "700", color: nativeDefault.colors.TEXT_SUBTLE, marginBottom: 16 };
let closure_8 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/billing/native/BlockedPaymentsCountryDisplay.tsx");

export default function BlockedPaymentsCountryDisplay() {
  let IHxEJU;
  let format;
  let intl;
  let items;
  let obj4;
  let obj5;
  let tmp2Result;
  const tmp = closure_8();
  const obj = { style: tmp.container, children: items };
  const obj2 = { style: tmp.header, children: intl.string(intl3.t.vwMEHS) };
  const tmp4 = useThemeDefault();
  const LegacyText = native.LegacyText;
  intl = intl3.intl;
  items = [metroRequire(LegacyText, obj2), , ];
  const obj3 = { children: format(IHxEJU, obj4) };
  const LegacyText2 = native.LegacyText;
  const intl2 = intl3.intl;
  format = intl2.format;
  obj4 = { helpdeskArticle: obj5.getArticleURL(HelpdeskArticles.BLOCKED_PAYMENTS) };
  IHxEJU = intl3.t.IHxEJU;
  obj5 = HelpdeskUtilsDefault;
  items[1] = metroRequire(LegacyText2, obj3);
  const obj6 = { style: tmp.image, source: tmp2Result };
  const obj7 = shared;
  const tmp5 = metroImportDefault;
  const tmp6 = _false;
  const tmp7 = metroRequire;
  const tmp8 = React3;
  if (obj7.isThemeDark(tmp4)) {
    tmp2Result = tmp2(10980);
  } else {
    tmp2Result = tmp2(10981);
  }
  items[2] = tmp7(tmp8, obj6);
  return tmp5(tmp6, obj);
};
