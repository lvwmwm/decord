// Module ID: 11134
// Function ID: 11135
// Name: BlockedPaymentsCountryDisplay
// Dependencies: [19, 17, 1084, 21, 5005, 587, 558, 576, 5242, 1125, 1199, 2065, 5012, 11135, 11136, 5707, 2]

// Module 11134 (BlockedPaymentsCountryDisplay)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1084 */;
import intl3 from "intl" /* 1125 */;
import native from "native" /* 1199 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2065 */;
import shared from "shared" /* 5012 */;
import useThemeDefault from "useTheme" /* 5242 */;
import FastImageDefault from "FastImage" /* 5707 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5005 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
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
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function BlockedPaymentsCountryDisplay() {
  let IHxEJU;
  let container;
  let first;
  let format;
  let header;
  let items;
  let obj4;
  let tmp12;
  let tmp5Result;
  let tmp5Result2;
  let tmp9;
  const obj = react2;
  const cResult = obj.c(11);
  const tmp4 = closure_7();
  ({ container, header } = tmp4);
  const tmp6 = useThemeDefault();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1125).intl;
    const stringResult = intl.string(intl3.t.vwMEHS);
    cResult[0] = stringResult;
    first = stringResult;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== tmp4.header) {
    const obj2 = { style: header, children: first };
    const tmp11 = hasOwnProperty(native.LegacyText, obj2);
    cResult[1] = tmp4.header;
    cResult[2] = tmp11;
    tmp9 = tmp11;
  } else {
    tmp9 = cResult[2];
  }
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const obj3 = { children: format(IHxEJU, obj4) };
    const LegacyText = tmp(1199).LegacyText;
    const intl2 = tmp(1125).intl;
    format = intl2.format;
    obj4 = { helpdeskArticle: tmp5Result.getArticleURL(HelpdeskArticles.BLOCKED_PAYMENTS) };
    IHxEJU = tmp(1125).t.IHxEJU;
    tmp5Result = HelpdeskUtilsDefault;
    const tmp15 = hasOwnProperty(LegacyText, obj3);
    cResult[3] = tmp15;
    tmp12 = tmp15;
  } else {
    tmp12 = cResult[3];
  }
  const tmpResult = shared;
  if (tmpResult.isThemeDark(tmp6)) {
    tmp5Result2 = tmp5(11135);
  } else {
    tmp5Result2 = tmp5(11136);
  }
  if (cResult[4] === tmp4.image) {
    let tmp17;
    if (cResult[5] === tmp5Result2) {
      tmp17 = cResult[6];
    }
    if (cResult[7] === tmp4.container) {
      if (cResult[8] === tmp9) {
        let tmp19;
        if (cResult[9] === tmp17) {
          tmp19 = cResult[10];
        }
        return tmp19;
      }
    }
    const obj5 = { style: container, children: items };
    items = [tmp9, tmp12, tmp17];
    const tmp22 = metroRequire(View, obj5);
    cResult[7] = tmp4.container;
    cResult[8] = tmp9;
    cResult[9] = tmp17;
    cResult[10] = tmp22;
    tmp19 = tmp22;
  }
  const obj6 = { style: tmp4.image, source: tmp5Result2 };
  const tmp18 = hasOwnProperty(FastImageDefault, obj6);
  cResult[4] = tmp4.image;
  cResult[5] = tmp5Result2;
  cResult[6] = tmp18;
  tmp17 = tmp18;
}) : (function BlockedPaymentsCountryDisplay() {
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
    tmp2Result = tmp2(11135);
  } else {
    tmp2Result = tmp2(11136);
  }
  items[2] = tmp7(tmp8, obj6);
  return tmp5(tmp6, obj);
});
const result = size.fileFinishedImporting("modules/billing/native/BlockedPaymentsCountryDisplay.tsx");

export default tmp4;
