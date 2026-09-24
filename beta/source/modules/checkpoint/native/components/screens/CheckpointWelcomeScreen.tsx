// Module ID: 15974
// Function ID: 15975
// Name: CheckpointWelcomeScreen
// Dependencies: [17, 1376, 21, 4790, 580, 558, 568, 1482, 504, 4635, 1119, 3004, 15975, 3036, 15976, 15977, 2]

// Module 15974 (CheckpointWelcomeScreen)
import _mod17 from "module_17" /* 17 */;
import initialize from "initialize" /* 504 */;
import c from "c" /* 568 */;
import nativeDefault from "native" /* 580 */;
import util from "util" /* 1119 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1482 */;
import _modDef3004 from "module_3004" /* 3004 */;
import _modDef3036 from "module_3036" /* 3036 */;
import UserUtils from "UserUtils" /* 4635 */;
import CheckpointTextDefault from "CheckpointText" /* 15975 */;
import CheckpointKnickKnacksDefault from "CheckpointKnickKnacks" /* 15976 */;
import CheckpointScreenDefault from "CheckpointScreen" /* 15977 */;
import UserStore from "UserStore" /* 1376 */;
import jsxProd from "jsxProd" /* 21 */;
import createStyles from "createStyles" /* 4790 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const View = _mod17.View;
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
let obj = { container: { width: "100%", flexGrow: 1 }, title: { transformOrigin: "left", width: 340 }, titleText: { textTransform: "uppercase", fontSize: 72, lineHeight: 72, letterSpacing: -2.88 }, subtitle: { maxWidth: 327, marginTop: nativeDefault.space.PX_12 }, content: { flex: 1, justifyContent: "center" }, knickKnacks: null };
let obj2 = { maxWidth: 327, marginTop: nativeDefault.space.PX_12 };
obj.knickKnacks = { marginTop: nativeDefault.space.PX_16 };
let closure_7 = createStyles.createStyles(obj);
let obj3 = { marginTop: nativeDefault.space.PX_16 };
const result = size.fileFinishedImporting("modules/checkpoint/native/components/screens/CheckpointWelcomeScreen.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(30);
  const tmp4 = closure_7();
  const bound = Math.min(useWindowDimensionsDefault().width / 392, 1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    const fn = function h() {
      return currentUser.getCurrentUser();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp7 = items;
    tmp8 = fn;
  } else {
    [tmp7, tmp8] = cResult;
  }
  const stateFromStores = initialize.useStateFromStores(tmp7, tmp8);
  const tmpResult = initialize;
  const name = UserUtils.useName(stateFromStores);
  ({ container, content } = tmp4);
  if (cResult[2] !== bound) {
    const obj2 = { transform: null };
    const obj3 = { scale: bound };
    const items1 = [obj3];
    obj2.transform = items1;
    cResult[2] = bound;
    cResult[3] = obj2;
    let tmp12 = obj2;
  } else {
    tmp12 = cResult[3];
  }
  if (cResult[4] === tmp4.title) {
    if (cResult[5] === tmp12) {
      let tmp13 = cResult[6];
    }
    const _Symbol = Symbol;
    if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
      const intl = tmp(1119).intl;
      const stringResult = intl.string(tmp5(3004)["CdU/PF"]);
      cResult[7] = stringResult;
      let tmp14 = stringResult;
    } else {
      tmp14 = cResult[7];
    }
    if (cResult[8] !== tmp4.titleText) {
      const obj4 = { style: tmp4.titleText, variant: "display-lg", children: tmp14 };
      const tmp18 = hasOwnProperty(tmp5(15975), obj4);
      cResult[8] = tmp4.titleText;
      cResult[9] = tmp18;
      let tmp16 = tmp18;
    } else {
      tmp16 = cResult[9];
    }
    if (cResult[10] === tmp13) {
      if (cResult[11] === tmp16) {
        let tmp19 = cResult[12];
      }
      if (cResult[13] !== name) {
        const intl2 = tmp(1119).intl;
        const obj5 = { username: name };
        const formatResult = intl2.format(tmp5(3036).xhZ23b, obj5);
        cResult[13] = name;
        cResult[14] = formatResult;
        let tmp23 = formatResult;
      } else {
        tmp23 = cResult[14];
      }
      if (cResult[15] !== tmp23) {
        const obj6 = { variant: "heading-xl/medium", children: tmp23 };
        const tmp27 = hasOwnProperty(tmp5(15975), obj6);
        cResult[15] = tmp23;
        cResult[16] = tmp27;
        let tmp25 = tmp27;
      } else {
        tmp25 = cResult[16];
      }
      if (cResult[17] === tmp4.subtitle) {
        if (cResult[18] === tmp25) {
          let tmp28 = cResult[19];
        }
        if (cResult[20] !== tmp4.knickKnacks) {
          const obj7 = { style: tmp4.knickKnacks };
          const tmp34 = hasOwnProperty(tmp5(15976), obj7);
          cResult[20] = tmp4.knickKnacks;
          cResult[21] = tmp34;
          let tmp32 = tmp34;
        } else {
          tmp32 = cResult[21];
        }
        if (cResult[22] === tmp4.content) {
          if (cResult[23] === tmp28) {
            if (cResult[24] === tmp32) {
              if (cResult[25] === tmp19) {
                let tmp35 = cResult[26];
              }
              if (cResult[27] === tmp4.container) {
                if (cResult[28] === tmp35) {
                  let tmp39 = cResult[29];
                }
                return tmp39;
              }
              const obj8 = { children: null };
              const obj9 = { style: container, children: tmp35 };
              obj8.children = hasOwnProperty(View, obj9);
              const tmp43 = hasOwnProperty(tmp5(15977), obj8);
              cResult[27] = tmp4.container;
              cResult[28] = tmp35;
              cResult[29] = tmp43;
              tmp39 = tmp43;
              const tmp5Result = tmp5(15977);
            }
          }
        }
        const obj10 = { style: content, children: null };
        const items2 = [tmp19, tmp28, tmp32];
        obj10.children = items2;
        const tmp38 = timestampProducer(View, obj10);
        cResult[22] = tmp4.content;
        cResult[23] = tmp28;
        cResult[24] = tmp32;
        cResult[25] = tmp19;
        cResult[26] = tmp38;
        tmp35 = tmp38;
      }
      const obj11 = { style: tmp4.subtitle, children: tmp25 };
      const tmp31 = hasOwnProperty(View, obj11);
      cResult[17] = tmp4.subtitle;
      cResult[18] = tmp25;
      cResult[19] = tmp31;
      tmp28 = tmp31;
    }
    const obj12 = { style: tmp13, children: tmp16 };
    const tmp22 = hasOwnProperty(View, obj12);
    cResult[10] = tmp13;
    cResult[11] = tmp16;
    cResult[12] = tmp22;
    tmp19 = tmp22;
  }
  const items3 = [tmp4.title, tmp12];
  cResult[4] = tmp4.title;
  cResult[5] = tmp12;
  cResult[6] = items3;
  tmp13 = items3;
}) : (() => {
  const tmp = closure_7();
  const bound = Math.min(useWindowDimensionsDefault().width / 392, 1);
  const items = [UserStore];
  const stateFromStores = initialize.useStateFromStores(items, () => currentUser.getCurrentUser());
  const name = UserUtils.useName(stateFromStores);
  const obj3 = { children: null };
  const obj4 = { style: tmp.container, children: null };
  const obj5 = { style: tmp.content, children: null };
  const obj6 = { style: null, children: null };
  const items1 = [tmp.title, ];
  const obj7 = { transform: null };
  const items2 = [{ scale: bound }];
  obj7.transform = items2;
  items1[1] = obj7;
  obj6.style = items1;
  const obj8 = { style: tmp.titleText, variant: "display-lg", children: null };
  const tmp5 = CheckpointScreenDefault;
  const intl = util.intl;
  obj8.children = intl.string(_modDef3004["CdU/PF"]);
  obj6.children = hasOwnProperty(CheckpointTextDefault, obj8);
  const items3 = [hasOwnProperty(View, obj6), , ];
  const obj9 = { style: tmp.subtitle, children: null };
  const obj10 = { variant: "heading-xl/medium", children: null };
  const intl2 = util.intl;
  obj10.children = intl2.format(_modDef3036.xhZ23b, { username: name });
  obj9.children = hasOwnProperty(CheckpointTextDefault, obj10);
  items3[1] = hasOwnProperty(View, obj9);
  items3[2] = hasOwnProperty(CheckpointKnickKnacksDefault, { style: tmp.knickKnacks });
  obj5.children = items3;
  obj4.children = timestampProducer(View, obj5);
  obj3.children = hasOwnProperty(View, obj4);
  return hasOwnProperty(tmp5, obj3);
});
