// Module ID: 17160
// Function ID: 17161
// Name: SearchListSection
// Dependencies: [19, 17, 8154, 21, 4788, 4784, 2]

// Module 17160 (SearchListSection)
import Text_Text from "Text/Text" /* 4784 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
const createStyles = fn(4788);
let closure_5 = createStyles.createStyles({ section: { flex: 1, display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", textTransform: "none", paddingTop: fn(8154).SEARCH_LIST_SECTION_TOP_PADDING, paddingHorizontal: 16, paddingBottom: 8 } });
let obj = { section: { flex: 1, display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", textTransform: "none", paddingTop: fn(8154).SEARCH_LIST_SECTION_TOP_PADDING, paddingHorizontal: 16, paddingBottom: 8 } };
const size = fn(2);
const result = size.fileFinishedImporting("modules/search/native/components/list/SearchListSection.tsx");

export default noop.memo((arg0) => {
  ({ title, trailing } = arg0);
  const obj = { style: closure_5().section, children: null };
  const items = [React3(Text_Text.Text, { maxFontSizeMultiplier: 2, accessibilityRole: "header", variant: "text-sm/semibold", color: "interactive-text-default", children: title }), trailing];
  obj.children = items;
  return React4(View, obj);
});
