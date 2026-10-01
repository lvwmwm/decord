// Module ID: 14702
// Function ID: 14703
// Name: MobileQuestPreviewContainer
// Dependencies: [17, 21, 4836, 576, 4832, 2]
// Exports: default

// Module 14702 (MobileQuestPreviewContainer)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import Text_Text from "Text/Text" /* 4832 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
let obj2;
const View = react_native.View;
({ jsx: c3, jsxs: closure_4 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, title: { marginBottom: nativeDefault.space.PX_16 } };
obj2 = { marginTop: nativeDefault.space.PX_12, paddingHorizontal: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
({ marginBottom: nativeDefault.space.PX_16 });
let closure_5 = createStyles(obj);
const result = size.fileFinishedImporting("modules/user_settings/quests/native/MobileQuestPreviewContainer.tsx");

export default function MobileQuestPreviewContainer(title) {
  let items;
  title = title.title;
  const children = title.children;
  const tmp = closure_5();
  let tmp4 = null != title;
  const obj = { style: tmp.container, children: items };
  const tmp2 = React3;
  const tmp3 = View;
  if (tmp4) {
    const obj2 = { variant: "text-lg/semibold", color: "text-default", style: tmp.title, children: title };
    tmp4 = _false(Text_Text.Text, obj2);
  }
  items = [tmp4, children];
  return tmp2(tmp3, obj);
};
