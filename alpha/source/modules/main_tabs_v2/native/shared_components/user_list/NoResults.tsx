// Module ID: 13353
// Function ID: 13354
// Name: NoResults
// Dependencies: [19, 17, 21, 5009, 5619, 2]
// Exports: default

// Module 13353 (NoResults)
import Text_Text from "Text/Text" /* 5619 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

let c2;
let c3;
let closure_4;
let hasOwnProperty;
({ View: c2, ScrollView: c3 } = react_native);
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let closure_6 = createStyles.createStyles({ headerContainer: { paddingHorizontal: 16 }, container: { flex: 1, alignItems: "center", justifyContent: "center", paddingHorizontal: 16, paddingBottom: 16, paddingTop: 32 }, image: { marginBottom: 12 }, textContainer: { justifyContent: "center", alignItems: "center" }, text: { textAlign: "center", marginTop: 4 }, fullHeightContentContainer: { paddingBottom: 0, paddingTop: 0 }, fullHeightScrollContent: { flexGrow: 1 } });
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/user_list/NoResults.tsx");

export default function NoResults(illustration) {
  let children;
  let containerStyle;
  let fullHeight;
  let fullHeightScrollContent;
  let items1;
  let items2;
  let items3;
  let subtitle;
  let title;
  ({ subtitle, fullHeight } = illustration);
  ({ title, children, containerStyle } = illustration);
  if (fullHeight === undefined) {
    fullHeight = false;
  }
  illustration = illustration.illustration;
  const tmp = closure_6();
  const obj = { style: tmp.headerContainer, alwaysBounceVertical: false, contentContainerStyle: fullHeightScrollContent, children: items3 };
  fullHeightScrollContent = fullHeight;
  const tmp3 = _false;
  if (fullHeight) {
    fullHeightScrollContent = tmp.fullHeightScrollContent;
  }
  const items = [tmp.container, , ];
  if (fullHeight) {
    fullHeight = tmp.fullHeightContentContainer;
  }
  const obj2 = { style: items, children: items1 };
  items[1] = fullHeight;
  items[2] = containerStyle;
  let tmp5 = null != illustration;
  if (tmp5) {
    const obj3 = { style: tmp.image, children: React3(illustration, {}) };
    tmp5 = React3(tmp4, obj3);
  }
  items1 = [tmp5, ];
  const obj4 = { style: tmp.textContainer, children: items2 };
  items2 = [, ];
  const obj5 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", style: tmp.text, children: title };
  items2[0] = React3(Text_Text.Text, obj5);
  let tmp7Result = null;
  const tmp7 = React3;
  if (null != subtitle) {
    const obj6 = { variant: "text-xs/medium", color: "interactive-text-default", style: tmp.text, children: subtitle };
    tmp7Result = tmp7(Text_Text.Text, obj6);
  }
  items2[1] = tmp7Result;
  items1[1] = hasOwnProperty(React2, obj4);
  items3 = [hasOwnProperty(React2, obj2), children];
  return hasOwnProperty(tmp3, obj);
};
