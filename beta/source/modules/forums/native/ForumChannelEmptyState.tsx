// Module ID: 12282
// Function ID: 12283
// Name: ForumChannelEmptyState
// Dependencies: [19, 17, 21, 4836, 4685, 1613, 12283, 12284, 4832, 1115, 2]

// Module 12282 (ForumChannelEmptyState)
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1613 */;
import shared from "shared" /* 4685 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
let hasOwnProperty;
let metroRequire;
({ View: c3, Image: closure_4 } = react_native);
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let closure_7 = createStyles.createStyles({ container: { flex: 1, alignSelf: "stretch", justifyContent: "center", alignItems: "center" }, image: { width: 120, height: 80 }, title: { textAlign: "center", marginTop: 16, marginHorizontal: 20 }, subtext: { textAlign: "center", marginTop: 4, marginHorizontal: 20 } });
const memoResult = react.memo((topViewHeight) => {
  let formatToPlainStringResult;
  let formatToPlainStringResult1;
  let items;
  let items1;
  let tmp4Result;
  let num = topViewHeight.topViewHeight;
  if (num === undefined) {
    num = 0;
  }
  const tagFilter = topViewHeight.tagFilter;
  const channelName = topViewHeight.channelName;
  const tmp = closure_7();
  const obj = shared;
  const theme = obj.useThemeContext().theme;
  const rect = useSafeAreaInsetsDefault();
  const obj2 = { style: items, children: items1 };
  items = [tmp.container, { marginBottom: rect.bottom + rect.top + num }];
  const obj3 = shared;
  const tmp6 = metroRequire;
  const tmp7 = _false;
  const tmp9 = React3;
  if (obj3.isThemeLight(theme)) {
    tmp4Result = tmp4(12283);
  } else {
    tmp4Result = tmp4(12284);
  }
  items1 = [, , ];
  const obj4 = { source: tmp4Result, style: tmp.image };
  items1[0] = hasOwnProperty(tmp9, obj4);
  const obj5 = { style: tmp.title, accessibilityRole: "header", variant: "heading-lg/semibold", color: "mobile-text-heading-primary", children: formatToPlainStringResult };
  const Text = tmp2(4832).Text;
  const intl = tmp2(1115).intl;
  if (tagFilter.size > 0) {
    const obj6 = { numTags: tagFilter.size };
    formatToPlainStringResult = intl.formatToPlainString(tmp2(1115).t.lvPci0, obj6);
  } else {
    formatToPlainStringResult = intl.string(tmp2(1115).t.PwTMG0);
  }
  items1[1] = hasOwnProperty(Text, obj5);
  const obj7 = { style: tmp.subtext, variant: "text-sm/medium", color: "text-default", children: formatToPlainStringResult1 };
  const Text2 = tmp2(4832).Text;
  const intl2 = tmp2(1115).intl;
  const formatToPlainString = intl2.formatToPlainString;
  const t = tmp2(1115).t;
  if (tagFilter.size > 0) {
    const obj8 = { numTags: tagFilter.size };
    formatToPlainStringResult1 = formatToPlainString(t.AAeye1, obj8);
  } else {
    const obj9 = { channelName };
    formatToPlainStringResult1 = formatToPlainString(t.YtsXFD, obj9);
  }
  items1[2] = hasOwnProperty(Text2, obj7);
  return tmp6(tmp7, obj2);
});
const result = size.fileFinishedImporting("modules/forums/native/ForumChannelEmptyState.tsx");

export default memoResult;
