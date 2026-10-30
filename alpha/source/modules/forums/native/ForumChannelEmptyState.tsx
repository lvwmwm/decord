// Module ID: 14326
// Function ID: 14327
// Name: ForumChannelEmptyState
// Dependencies: [19, 17, 21, 5009, 5016, 1626, 5712, 14327, 14328, 5619, 1114, 2]

// Module 14326 (ForumChannelEmptyState)
import react_native from "react-native" /* 17 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1626 */;
import shared from "shared" /* 5016 */;
import FastImageDefault from "FastImage" /* 5712 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let closure_6 = createStyles.createStyles({ container: { flex: 1, alignSelf: "stretch", justifyContent: "center", alignItems: "center" }, image: { width: 120, height: 80 }, title: { textAlign: "center", marginTop: 16, marginHorizontal: 20 }, subtext: { textAlign: "center", marginTop: 4, marginHorizontal: 20 } });
const memoResult = react.memo(function ForumChannelEmptyState(topViewHeight) {
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
  const tmp = closure_6();
  const obj = shared;
  const theme = obj.useThemeContext().theme;
  const rect = useSafeAreaInsetsDefault();
  const obj2 = { style: items, children: items1 };
  items = [tmp.container, { marginBottom: rect.bottom + rect.top + num }];
  const tmp9 = FastImageDefault;
  const obj3 = shared;
  const tmp6 = hasOwnProperty;
  const tmp7 = View;
  if (obj3.isThemeLight(theme)) {
    tmp4Result = tmp4(14327);
  } else {
    tmp4Result = tmp4(14328);
  }
  items1 = [, , ];
  const obj4 = { source: tmp4Result, style: tmp.image };
  items1[0] = React3(tmp9, obj4);
  const obj5 = { style: tmp.title, accessibilityRole: "header", variant: "heading-lg/semibold", color: "mobile-text-heading-primary", children: formatToPlainStringResult };
  const Text = tmp2(5619).Text;
  const intl = tmp2(1114).intl;
  if (tagFilter.size > 0) {
    const obj6 = { numTags: tagFilter.size };
    formatToPlainStringResult = intl.formatToPlainString(tmp2(1114).t.lvPci0, obj6);
  } else {
    formatToPlainStringResult = intl.string(tmp2(1114).t.PwTMG0);
  }
  items1[1] = React3(Text, obj5);
  const obj7 = { style: tmp.subtext, variant: "text-sm/medium", color: "text-default", children: formatToPlainStringResult1 };
  const Text2 = tmp2(5619).Text;
  const intl2 = tmp2(1114).intl;
  const formatToPlainString = intl2.formatToPlainString;
  const t = tmp2(1114).t;
  if (tagFilter.size > 0) {
    const obj8 = { numTags: tagFilter.size };
    formatToPlainStringResult1 = formatToPlainString(t.AAeye1, obj8);
  } else {
    const obj9 = { channelName };
    formatToPlainStringResult1 = formatToPlainString(t.YtsXFD, obj9);
  }
  items1[2] = React3(Text2, obj7);
  return tmp6(tmp7, obj2);
});
const result = size.fileFinishedImporting("modules/forums/native/ForumChannelEmptyState.tsx");

export default memoResult;
