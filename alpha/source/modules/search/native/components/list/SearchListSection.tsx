// Module ID: 17254
// Function ID: 17255
// Name: SearchListSection
// Dependencies: [19, 17, 8209, 21, 4829, 4825, 2]

// Module 17254 (SearchListSection)
import Text_Text from "Text/Text" /* 4825 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
const createStyles = fn(4829);
let closure_5 = createStyles.createStyles({ section: { flex: 1, display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", textTransform: "none", paddingTop: fn(8209).SEARCH_LIST_SECTION_TOP_PADDING, paddingHorizontal: 16, paddingBottom: 8 } });
let obj = { section: { flex: 1, display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", textTransform: "none", paddingTop: fn(8209).SEARCH_LIST_SECTION_TOP_PADDING, paddingHorizontal: 16, paddingBottom: 8 } };
const size = fn(2);
const result = size.fileFinishedImporting("modules/search/native/components/list/SearchListSection.tsx");

export default noop.memo((arg0) => {
  ({ title, trailing } = arg0);
  const obj = { style: closure_5().section, children: null };
  const items = [React3(Text_Text.Text, { maxFontSizeMultiplier: 2, accessibilityRole: "header", variant: "text-sm/semibold", color: "interactive-text-default", children: title }), trailing];
  obj.children = items;
  return React4(View, obj);
});
