// Module ID: 11828
// Function ID: 91834
// Dependencies: [31, 27, 33, 4130, 3976, 1557, 11829, 11830, 4126, 1212, 2]

// Module 11828
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import importAllResult from "result";

let closure_3;
let closure_4;
let closure_5;
let closure_6;
const require = arg1;
({ View: closure_3, Image: closure_4 } = get_ActivityIndicator);
({ jsx: closure_5, jsxs: closure_6 } = jsxProd);
let closure_7 = _createForOfIteratorHelperLoose.createStyles({ container: { flex: 1, alignSelf: "stretch", justifyContent: "center", alignItems: "center" }, image: { width: 120, height: 80 }, title: { textAlign: "center", marginTop: 16, marginHorizontal: 20 }, subtext: { textAlign: "center", marginTop: 4, marginHorizontal: 20 } });
const memoResult = require("result").memo((topViewHeight) => {
  let num = topViewHeight.topViewHeight;
  if (num === undefined) {
    num = 0;
  }
  const tagFilter = topViewHeight.tagFilter;
  const tmp = callback();
  let obj = require(3976) /* AccessibilityAnnouncer */;
  const rect = importDefault(1557)();
  obj = { style: items };
  items = [tmp.container, ];
  obj = { marginBottom: rect.bottom + rect.top + num };
  items[1] = obj;
  const obj1 = {};
  let obj4 = require(3976) /* AccessibilityAnnouncer */;
  if (obj4.isThemeLight(obj.useThemeContext().theme)) {
    let tmp7Result = tmp7(11829);
  } else {
    tmp7Result = tmp7(11830);
  }
  obj1.source = tmp7Result;
  obj1.style = tmp.image;
  const items1 = [closure_5(closure_4, obj1), , ];
  const obj2 = { style: tmp.title, accessibilityRole: "header", variant: "heading-lg/semibold", color: "mobile-text-heading-primary" };
  const intl = require(1212) /* getSystemLocale */.intl;
  if (tagFilter.size > 0) {
    const obj3 = { numTags: tagFilter.size };
    let formatToPlainStringResult = intl.formatToPlainString(tmp11(1212).t.lvPci0, obj3);
  } else {
    formatToPlainStringResult = intl.string(tmp11(1212).t.PwTMG0);
  }
  obj2.children = formatToPlainStringResult;
  items1[1] = closure_5(require(4126) /* Text */.Text, obj2);
  obj4 = { style: tmp.subtext, variant: "text-sm/medium", color: "text-default" };
  const intl2 = require(1212) /* getSystemLocale */.intl;
  const formatToPlainString = intl2.formatToPlainString;
  const t = require(1212) /* getSystemLocale */.t;
  if (tagFilter.size > 0) {
    const obj5 = { numTags: tagFilter.size };
    let formatToPlainStringResult1 = formatToPlainString(t.AAeye1, obj5);
  } else {
    const obj6 = { channelName: topViewHeight.channelName };
    formatToPlainStringResult1 = formatToPlainString(t.YtsXFD, obj6);
  }
  obj4.children = formatToPlainStringResult1;
  items1[2] = closure_5(require(4126) /* Text */.Text, obj4);
  obj.children = items1;
  return closure_6(closure_3, obj);
});
const result = require("jsxProd").fileFinishedImporting("modules/forums/native/ForumChannelEmptyState.tsx");

export default memoResult;
