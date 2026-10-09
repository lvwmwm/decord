// Module ID: 15365
// Function ID: 15366
// Name: MobileQuestPreviewContainer
// Dependencies: [17, 21, 5091, 587, 558, 576, 5087, 2]

// Module 15365 (MobileQuestPreviewContainer)
import react_native from "react-native" /* 17 */;
import react from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5091 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
let obj2;
let obj3;
let tmp;
const Text_Text = tmp(5087);
const View = react_native.View;
({ jsx: c3, jsxs: closure_4 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, title: obj3 };
obj2 = { marginTop: nativeDefault.space.PX_12, paddingHorizontal: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { marginBottom: nativeDefault.space.PX_16 };
let closure_5 = createStyles(obj);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function MobileQuestPreviewContainer(arg0) {
  let children;
  let items;
  let title;
  const obj = react;
  const cResult = obj.c(7);
  ({ children, title } = arg0);
  const tmp4 = closure_5();
  if (cResult[0] === tmp4.title) {
    let tmp5;
    if (cResult[1] === title) {
      tmp5 = cResult[2];
    }
    if (cResult[3] === children) {
      if (cResult[4] === tmp4.container) {
        let tmp8;
        if (cResult[5] === tmp5) {
          tmp8 = cResult[6];
        }
        return tmp8;
      }
    }
    const obj2 = { style: tmp4.container, children: items };
    items = [tmp5, children];
    const tmp11 = React3(View, obj2);
    cResult[3] = children;
    cResult[4] = tmp4.container;
    cResult[5] = tmp5;
    cResult[6] = tmp11;
    tmp8 = tmp11;
  }
  let tmp6 = null != title;
  if (tmp6) {
    const obj3 = { variant: "text-lg/semibold", color: "text-default", style: tmp4.title, children: title };
    tmp6 = _false(Text_Text.Text, obj3);
  }
  cResult[0] = tmp4.title;
  cResult[1] = title;
  cResult[2] = tmp6;
  tmp5 = tmp6;
}) : (function MobileQuestPreviewContainer(title) {
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
});
const result = size.fileFinishedImporting("modules/user_settings/quests/native/MobileQuestPreviewContainer.tsx");

export default tmp4;
