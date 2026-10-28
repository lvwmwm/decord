// Module ID: 12327
// Function ID: 12328
// Name: ConjureChatHeader
// Dependencies: [19, 17, 9734, 21, 5004, 587, 558, 576, 1630, 9735, 2]

// Module 12327 (ConjureChatHeader)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1630 */;
import react_native from "react-native" /* 9734 */;
import react from "react" /* 19 */;
import react_native2 from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5004 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
let metroImportDefault;
let metroRequire;
let tmp;
const PressableNavigatorBackIcon = tmp(9735);
({ StyleSheet: c3, View: closure_4 } = react_native2);
const MIN_HEADER_HEIGHT = react_native.MIN_HEADER_HEIGHT;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let closure_8 = createStyles.createStyles((paddingTop) => {
  let obj5;
  const obj = { header: { flexDirection: "row", alignItems: "center", flexShrink: 0, paddingTop, minHeight: paddingTop + MIN_HEADER_HEIGHT, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW }, title: { flex: 1, flexDirection: "row", alignItems: "center", paddingEnd: nativeDefault.space.PX_8 }, actions: { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8, marginEnd: nativeDefault.space.PX_16 }, border: obj5 };
  ({ flexDirection: "row", alignItems: "center", flexShrink: 0, paddingTop, minHeight: paddingTop + MIN_HEADER_HEIGHT, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW });
  ({ flex: 1, flexDirection: "row", alignItems: "center", paddingEnd: nativeDefault.space.PX_8 });
  obj5 = { top: undefined, height: 1, backgroundColor: nativeDefault.colors.STANDALONE_CHANNEL_HEADER_BORDER };
  ({ flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8, marginEnd: nativeDefault.space.PX_16 });
  const merged = Object.assign(absoluteFillObject.absoluteFillObject);
  return obj;
});
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureChatHeader(arg0) {
  let actions;
  let items;
  let onBack;
  let showBorder;
  let title;
  const obj = react2;
  const cResult = obj.c(17);
  ({ title, actions, onBack, showBorder } = arg0);
  const tmp4 = closure_8(useSafeAreaInsetsDefault().top);
  if (cResult[0] === showBorder) {
    let tmp5;
    let tmp9;
    if (cResult[1] === tmp4.border) {
      tmp5 = cResult[2];
    }
    if (cResult[3] !== onBack) {
      const obj2 = { onPress: onBack };
      const tmp11 = metroRequire(PressableNavigatorBackIcon.PressableNavigatorBackIcon, obj2);
      cResult[3] = onBack;
      cResult[4] = tmp11;
      tmp9 = tmp11;
    } else {
      tmp9 = cResult[4];
    }
    if (cResult[5] === tmp4.title) {
      let tmp12;
      if (cResult[6] === title) {
        tmp12 = cResult[7];
      }
      if (cResult[8] === actions) {
        let tmp16;
        if (cResult[9] === tmp4.actions) {
          tmp16 = cResult[10];
        }
        if (cResult[11] === tmp4.header) {
          if (cResult[12] === tmp5) {
            if (cResult[13] === tmp9) {
              if (cResult[14] === tmp12) {
                let tmp20;
                if (cResult[15] === tmp16) {
                  tmp20 = cResult[16];
                }
                return tmp20;
              }
            }
          }
        }
        const obj3 = { style: tmp4.header, children: items };
        items = [tmp5, tmp9, tmp12, tmp16];
        const tmp23 = metroImportDefault(React3, obj3);
        cResult[11] = tmp4.header;
        cResult[12] = tmp5;
        cResult[13] = tmp9;
        cResult[14] = tmp12;
        cResult[15] = tmp16;
        cResult[16] = tmp23;
        tmp20 = tmp23;
      }
      let tmp17 = null;
      if (null != actions) {
        const obj4 = { style: tmp4.actions, children: actions };
        tmp17 = metroRequire(React3, obj4);
      }
      cResult[8] = actions;
      cResult[9] = tmp4.actions;
      cResult[10] = tmp17;
      tmp16 = tmp17;
    }
    const obj5 = { style: tmp4.title, children: title };
    const tmp15 = metroRequire(React3, obj5);
    cResult[5] = tmp4.title;
    cResult[6] = title;
    cResult[7] = tmp15;
    tmp12 = tmp15;
  }
  let tmp6 = null;
  if (showBorder) {
    const obj6 = { style: tmp4.border };
    tmp6 = metroRequire(React3, obj6);
  }
  cResult[0] = showBorder;
  cResult[1] = tmp4.border;
  cResult[2] = tmp6;
  tmp5 = tmp6;
}) : (function ConjureChatHeader(actions) {
  let items;
  let onBack;
  let showBorder;
  let title;
  actions = actions.actions;
  ({ title, onBack, showBorder } = actions);
  const tmp2 = closure_8(useSafeAreaInsetsDefault().top);
  let tmp5 = null;
  const obj = { style: tmp2.header, children: items };
  const tmp3 = metroImportDefault;
  if (showBorder) {
    const obj2 = { style: tmp2.border };
    tmp5 = metroRequire(tmp4, obj2);
  }
  items = [tmp5, metroRequire(PressableNavigatorBackIcon.PressableNavigatorBackIcon, { onPress: onBack }), , ];
  const obj3 = { style: tmp2.title, children: title };
  items[2] = metroRequire(React3, obj3);
  let tmp7Result = null;
  const tmp7 = metroRequire;
  if (null != actions) {
    const obj4 = { style: tmp2.actions, children: actions };
    tmp7Result = tmp7(tmp4, obj4);
  }
  items[3] = tmp7Result;
  return tmp3(React3, obj);
});
const result = size.fileFinishedImporting("modules/conjure/builder/native/ConjureChatHeader.tsx");

export default tmp5;
