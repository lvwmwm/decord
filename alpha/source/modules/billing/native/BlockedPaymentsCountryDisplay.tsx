// Module ID: 11778
// Function ID: 11779
// Name: BlockedPaymentsCountryDisplay
// Dependencies: [19, 17, 1074, 21, 4827, 576, 4761, 1177, 1115, 2108, 4678, 11779, 11780, 2]
// Exports: default

// Module 11778 (BlockedPaymentsCountryDisplay)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import native from "native" /* 1177 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2108 */;
import useThemeDefault from "useTheme" /* 4761 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: c3, Image: closure_4 } = get_ActivityIndicator);
const HelpdeskArticles = fn(1074).HelpdeskArticles;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4827);
let obj2 = { container: { alignItems: "center" }, header: { fontSize: 20, fontWeight: "700", color: nativeDefault.colors.TEXT_SUBTLE, marginBottom: 16 }, image: { marginTop: 38 } };
let closure_8 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/billing/native/BlockedPaymentsCountryDisplay.tsx");

export default function BlockedPaymentsCountryDisplay() {
  const tmp = closure_8();
  const obj = { style: tmp.container, children: null };
  const obj2 = { style: tmp.header, children: null };
  const intl = util.intl;
  obj2.children = intl.string(util.t.vwMEHS);
  const items = [timestampProducer(native.LegacyText, obj2), , ];
  const obj3 = { children: null };
  const intl2 = util.intl;
  const obj4 = { helpdeskArticle: null };
  const tmp4 = useThemeDefault();
  const tmp5 = React5;
  const tmp6 = React3;
  const tmp7 = timestampProducer;
  obj4.helpdeskArticle = HelpdeskUtilsDefault.getArticleURL(HelpdeskArticles.BLOCKED_PAYMENTS);
  obj3.children = intl2.format(util.t.IHxEJU, obj4);
  items[1] = timestampProducer(native.LegacyText, obj3);
  const obj6 = { style: tmp.image, source: null };
  const tmp8 = React4;
  if (obj7.isThemeDark(tmp4)) {
    let tmp2Result = tmp2(11779);
  } else {
    tmp2Result = tmp2(11780);
  }
  obj6.source = tmp2Result;
  items[2] = tmp7(tmp8, obj6);
  obj.children = items;
  return tmp5(tmp6, obj);
};
