// Module ID: 12282
// Function ID: 12283
// Name: ForumChannelEmptyState
// Dependencies: [19, 17, 21, 4836, 4685, 1613, 12283, 12284, 4832, 1115, 2]

// Module 12282 (ForumChannelEmptyState)
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1613 */;
import shared from "shared" /* 4685 */;
import Text_Text from "Text/Text" /* 4832 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: c3, Image: closure_4 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4836);
let closure_7 = createStyles.createStyles({ container: { flex: 1, alignSelf: "stretch", justifyContent: "center", alignItems: "center" }, image: { width: 120, height: 80 }, title: { textAlign: "center", marginTop: 16, marginHorizontal: 20 }, subtext: { textAlign: "center", marginTop: 4, marginHorizontal: 20 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/forums/native/ForumChannelEmptyState.tsx");

export default noop.memo((topViewHeight) => {
  let num = topViewHeight.topViewHeight;
  if (num === undefined) {
    num = 0;
  }
  const tagFilter = topViewHeight.tagFilter;
  const tmp = closure_7();
  const rect = useSafeAreaInsetsDefault();
  const obj2 = { style: null, children: null };
  const items = [tmp.container, { marginBottom: rect.bottom + rect.top + num }];
  obj2.style = items;
  const obj = shared;
  const tmp6 = timestampProducer;
  const tmp7 = React3;
  const tmp9 = React4;
  if (obj3.isThemeLight(obj.useThemeContext().theme)) {
    let tmp4Result = tmp4(12283);
  } else {
    tmp4Result = tmp4(12284);
  }
  const items1 = [hasOwnProperty(tmp9, { source: tmp4Result, style: tmp.image }), , ];
  const obj5 = { style: tmp.title, accessibilityRole: "header", variant: "heading-lg/semibold", color: "mobile-text-heading-primary", children: null };
  const intl = tmp2(1115).intl;
  if (tagFilter.size > 0) {
    const obj6 = { numTags: tagFilter.size };
    let formatToPlainStringResult = intl.formatToPlainString(tmp2(1115).t.lvPci0, obj6);
  } else {
    formatToPlainStringResult = intl.string(tmp2(1115).t.PwTMG0);
  }
  obj5.children = formatToPlainStringResult;
  items1[1] = hasOwnProperty(Text_Text.Text, obj5);
  const obj7 = { style: tmp.subtext, variant: "text-sm/medium", color: "text-default", children: null };
  const intl2 = tmp2(1115).intl;
  const formatToPlainString = intl2.formatToPlainString;
  const t = tmp2(1115).t;
  if (tagFilter.size > 0) {
    const obj8 = { numTags: tagFilter.size };
    let formatToPlainStringResult1 = formatToPlainString(t.AAeye1, obj8);
  } else {
    const obj9 = { channelName: topViewHeight.channelName };
    formatToPlainStringResult1 = formatToPlainString(t.YtsXFD, obj9);
  }
  obj7.children = formatToPlainStringResult1;
  items1[2] = hasOwnProperty(Text_Text.Text, obj7);
  obj2.children = items1;
  return tmp6(tmp7, obj2);
});
