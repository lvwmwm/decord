// Module ID: 16502
// Function ID: 16503
// Name: SearchListSection
// Dependencies: [19, 17, 7303, 21, 4836, 4832, 2]

// Module 16502 (SearchListSection)
import react_native from "react-native" /* 17 */;
import Text_Text from "Text/Text" /* 4832 */;
import SearchConstants from "SearchConstants" /* 7303 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
const View = react_native.View;
const SEARCH_LIST_SECTION_TOP_PADDING = SearchConstants.SEARCH_LIST_SECTION_TOP_PADDING;
({ jsx: c3, jsxs: closure_4 } = Fragment);
let obj = { section: { flex: 1, display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", textTransform: "none", paddingTop: SEARCH_LIST_SECTION_TOP_PADDING, paddingHorizontal: 16, paddingBottom: 8 } };
let closure_5 = createStyles.createStyles(obj);
const memoResult = react.memo((arg0) => {
  let items;
  let title;
  let trailing;
  ({ title, trailing } = arg0);
  const obj = { style: closure_5().section, children: items };
  items = [_false(Text_Text.Text, { maxFontSizeMultiplier: 2, accessibilityRole: "header", variant: "text-sm/semibold", color: "interactive-text-default", children: title }), trailing];
  return React3(View, obj);
});
const result = size.fileFinishedImporting("modules/search/native/components/list/SearchListSection.tsx");

export default memoResult;
