// Module ID: 18777
// Function ID: 18778
// Name: SearchListSection
// Dependencies: [19, 17, 8576, 21, 4913, 5504, 7565, 12797, 7030, 2]

// Module 18777 (SearchListSection)
import react_native from "react-native" /* 17 */;
import Text_Text from "Text/Text" /* 5504 */;
import SearchConstants from "SearchConstants" /* 8576 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4913 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
const View = react_native.View;
const SEARCH_LIST_SECTION_TOP_PADDING = SearchConstants.SEARCH_LIST_SECTION_TOP_PADDING;
({ jsx: c3, jsxs: closure_4 } = Fragment);
let obj = { section: { flex: 1, display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", textTransform: "none", paddingTop: SEARCH_LIST_SECTION_TOP_PADDING, paddingHorizontal: 16, paddingBottom: 8 } };
let closure_5 = createStyles.createStyles(obj);
const memoResult = react.memo(function SearchListSection(trailing) {
  let collapsed;
  let items;
  let items1;
  let obj3;
  let onToggle;
  let title;
  ({ title, collapsed, onToggle } = trailing);
  trailing = trailing.trailing;
  const tmp = closure_5();
  const tmp5 = _false(Text_Text.Text, { maxFontSizeMultiplier: 2, accessibilityRole: "header", variant: "body-sm/semibold", color: "interactive-text-default", children: title });
  const tmp2 = _false;
  if (null == onToggle) {
    const obj2 = { style: tmp.section, children: items };
    items = [tmp5, trailing];
    return React3(View, obj2);
  } else {
    let ChevronSmallDownIcon;
    if (true === collapsed) {
      ChevronSmallDownIcon = tmp3(7565).ChevronSmallRightIcon;
    } else {
      ChevronSmallDownIcon = tmp3(12797).ChevronSmallDownIcon;
    }
    const obj = { accessibilityRole: "button", accessibilityLabel: title, accessibilityState: obj3, activeOpacity: 0.4, onPress: onToggle, style: tmp.section, children: items1 };
    items1 = [tmp5, ];
    obj3 = { expanded: true !== collapsed };
    const PressableOpacity = tmp3(7030).PressableOpacity;
    items1[1] = tmp2(ChevronSmallDownIcon, { size: "sm" });
    return React3(PressableOpacity, obj);
  }
});
const result = size.fileFinishedImporting("modules/search/native/components/list/SearchListSection.tsx");

export default memoResult;
