// Module ID: 15185
// Function ID: 15186
// Name: FamilyCenterModalCancel
// Dependencies: [19, 17, 21, 5092, 587, 558, 576, 7739, 5934, 4808, 1126, 11530, 38, 15180, 7728, 2568, 5088, 15148, 7515, 5379, 11539, 5958, 7514, 6200, 10602, 2]

// Module 15185 (FamilyCenterModalCancel)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5934 */;
import NavigatorHeader from "NavigatorHeader" /* 6200 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5092 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
function headerTitle() {
  return null;
}
const View = react_native.View;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let createStyles = createStyles_mod;
let obj = { header: obj2, headerText: obj3 };
obj2 = { display: "flex", alignItems: "center", justifyContent: "center", marginBottom: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { marginTop: nativeDefault.space.PX_16, marginBottom: nativeDefault.space.PX_4 };
let closure_7 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_8 = ReactCompilerGating.isReactCompilerEnabled() ? (function FamilyCenterModalCancelScreen(otherUser) {
  let cancelLinkRequest;
  let first;
  let intl3;
  let items;
  let items1;
  let items2;
  let obj12;
  let obj8;
  let tmp8;
  let tmp9;
  const tmp = otherUser;
  const obj = otherUser(576);
  const cResult = obj.c(28);
  otherUser = otherUser.otherUser;
  const tmp4 = closure_7();
  const tmp6 = cancelLinkRequest(7739)();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function l() {
      const arr = cancelLinkRequest(dependencyMap[8]);
      arr.pop();
    };
    cResult[0] = fn;
    first = fn;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const fn2 = function p() {
      const presentFailedToast = otherUser(dependencyMap[9]).presentFailedToast;
      otherUser(dependencyMap[9]);
      const intl = otherUser(dependencyMap[10]).intl;
      presentFailedToast(intl.string(otherUser(dependencyMap[10]).t.R0RpRX));
    };
    cResult[1] = fn2;
    tmp8 = fn2;
  } else {
    tmp8 = cResult[1];
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { onSuccess: first, onError: tmp8 };
    cResult[2] = obj2;
    tmp9 = obj2;
  } else {
    tmp9 = cResult[2];
  }
  const tmpResult = tmp(11530);
  const familyCenterActions = tmpResult.useFamilyCenterActions(tmp9);
  cancelLinkRequest = familyCenterActions.cancelLinkRequest;
  const isCancelLoading = familyCenterActions.isCancelLoading;
  if (cResult[3] === cancelLinkRequest) {
    let tmp11;
    let tmp13;
    let tmp17;
    let tmp19;
    let tmp22;
    if (cResult[4] === otherUser.id) {
      tmp11 = cResult[5];
    }
    cancelLinkRequest(38)(tmp6, "FamilyCenterCancelModal should only be rendered for parents.");
    const header = tmp4.header;
    if (cResult[6] !== otherUser) {
      const obj3 = { otherUser, iconSrc: cancelLinkRequest(7728) };
      const tmp5Result = cancelLinkRequest(15180);
      const tmp16 = closure_5(tmp5Result, obj3);
      cResult[6] = otherUser;
      cResult[7] = tmp16;
      tmp13 = tmp16;
    } else {
      tmp13 = cResult[7];
    }
    const _Symbol = Symbol;
    const headerText = tmp4.headerText;
    if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
      let intl = tmp(1126).intl;
      const stringResult = intl.string(cancelLinkRequest(2568).HynllX);
      cResult[8] = stringResult;
      tmp17 = stringResult;
    } else {
      tmp17 = cResult[8];
    }
    if (cResult[9] !== tmp4.headerText) {
      const obj4 = { style: headerText, variant: "text-lg/bold", children: tmp17 };
      const tmp21 = closure_5(tmp(5088).Text, obj4);
      cResult[9] = tmp4.headerText;
      cResult[10] = tmp21;
      tmp19 = tmp21;
    } else {
      tmp19 = cResult[10];
    }
    if (cResult[11] !== otherUser) {
      const obj5 = { user: otherUser };
      const tmp24 = closure_5(cancelLinkRequest(15148), obj5);
      cResult[11] = otherUser;
      cResult[12] = tmp24;
      tmp22 = tmp24;
    } else {
      tmp22 = cResult[12];
    }
    if (cResult[13] === tmp4.header) {
      if (cResult[14] === tmp22) {
        if (cResult[15] === tmp13) {
          let tmp25;
          let tmp30;
          if (cResult[16] === tmp19) {
            tmp25 = cResult[17];
          }
          const _Symbol2 = Symbol;
          if (cResult[18] === Symbol.for("react.memo_cache_sentinel")) {
            const intl2 = tmp(1126).intl;
            const stringResult1 = intl2.string(cancelLinkRequest(2568).mK40bk);
            cResult[18] = stringResult1;
            tmp30 = stringResult1;
          } else {
            tmp30 = cResult[18];
          }
          if (cResult[19] === tmp11) {
            let tmp32;
            let tmp35;
            let tmp38;
            if (cResult[20] === isCancelLoading) {
              tmp32 = cResult[21];
            }
            const _Symbol3 = Symbol;
            if (cResult[22] === Symbol.for("react.memo_cache_sentinel")) {
              const obj6 = { variant: "tertiary", text: intl3.string(cancelLinkRequest(2568).czincX), onPress: cancelLinkRequest(5934).pop };
              const Button = tmp(5379).Button;
              intl3 = tmp(1126).intl;
              const tmp37 = closure_5(Button, obj6);
              cResult[22] = tmp37;
              tmp35 = tmp37;
            } else {
              tmp35 = cResult[22];
            }
            if (cResult[23] !== tmp32) {
              const obj7 = { children: closure_6(tmp(5958).ButtonGroup, obj8) };
              const ModalFooter = tmp(11539).ModalFooter;
              obj8 = { children: items };
              items = [tmp32, tmp35];
              const tmp41 = closure_5(ModalFooter, obj7);
              cResult[23] = tmp32;
              cResult[24] = tmp41;
              tmp38 = tmp41;
            } else {
              tmp38 = cResult[24];
            }
            if (cResult[25] === tmp25) {
              let tmp42;
              if (cResult[26] === tmp38) {
                tmp42 = cResult[27];
              }
              return tmp42;
            }
            const obj9 = { children: items1 };
            items1 = [tmp25, tmp38];
            const tmp44 = closure_6(tmp(7514).ModalScreen, obj9);
            cResult[25] = tmp25;
            cResult[26] = tmp38;
            cResult[27] = tmp44;
            tmp42 = tmp44;
          }
          const obj10 = { variant: "destructive", disabled: isCancelLoading, loading: isCancelLoading, text: tmp30, onPress: tmp11 };
          const tmp34 = closure_5(tmp(5379).Button, obj10);
          cResult[19] = tmp11;
          cResult[20] = isCancelLoading;
          cResult[21] = tmp34;
          tmp32 = tmp34;
        }
      }
    }
    const obj11 = { children: closure_6(View, obj12) };
    obj12 = { style: header, children: items2 };
    items2 = [tmp13, tmp19, tmp22];
    const ModalContent = tmp(7515).ModalContent;
    const tmp29 = closure_5(ModalContent, obj11);
    cResult[13] = tmp4.header;
    cResult[14] = tmp22;
    cResult[15] = tmp13;
    cResult[16] = tmp19;
    cResult[17] = tmp29;
    tmp25 = tmp29;
  }
  const fn3 = function f() {
    cancelLinkRequest(otherUser.id);
  };
  cResult[3] = cancelLinkRequest;
  cResult[4] = otherUser.id;
  cResult[5] = fn3;
  tmp11 = fn3;
}) : (function FamilyCenterModalCancelScreen(otherUser) {
  let ButtonGroup;
  let intl;
  let intl2;
  let intl3;
  let items1;
  let items2;
  let items3;
  let obj4;
  let obj8;
  otherUser = otherUser.otherUser;
  let cancelLinkRequest;
  const tmp = closure_7();
  const tmp2 = cancelLinkRequest(7739)();
  const callback = react.useCallback(() => {
    const arr = cancelLinkRequest(dependencyMap[8]);
    arr.pop();
  }, []);
  const callback1 = react.useCallback(() => {
    const presentFailedToast = otherUser(dependencyMap[9]).presentFailedToast;
    otherUser(dependencyMap[9]);
    const intl = otherUser(dependencyMap[10]).intl;
    presentFailedToast(intl.string(otherUser(dependencyMap[10]).t.R0RpRX));
  }, []);
  const obj = otherUser(11530);
  const familyCenterActions = obj.useFamilyCenterActions({ onSuccess: callback, onError: callback1 });
  cancelLinkRequest = familyCenterActions.cancelLinkRequest;
  const isCancelLoading = familyCenterActions.isCancelLoading;
  const items = [cancelLinkRequest, otherUser.id];
  const callback2 = react.useCallback(() => {
    cancelLinkRequest(otherUser.id);
  }, items);
  cancelLinkRequest(38)(tmp2, "FamilyCenterCancelModal should only be rendered for parents.");
  const obj2 = { children: items2 };
  const ModalScreen = otherUser(7514).ModalScreen;
  const obj3 = { children: closure_6(View, obj4) };
  obj4 = { style: tmp.header, children: items1 };
  const ModalContent = otherUser(7515).ModalContent;
  const obj5 = { otherUser, iconSrc: cancelLinkRequest(7728) };
  const tmp8 = cancelLinkRequest(15180);
  items1 = [closure_5(tmp8, obj5), , ];
  const obj6 = { style: tmp.headerText, variant: "text-lg/bold", children: intl.string(cancelLinkRequest(2568).HynllX) };
  const Text = otherUser(5088).Text;
  intl = otherUser(1126).intl;
  items1[1] = closure_5(Text, obj6);
  items1[2] = closure_5(cancelLinkRequest(15148), { user: otherUser });
  items2 = [closure_5(ModalContent, obj3), ];
  const obj7 = { children: closure_6(ButtonGroup, obj8) };
  const ModalFooter = otherUser(11539).ModalFooter;
  obj8 = { children: items3 };
  ButtonGroup = otherUser(5958).ButtonGroup;
  const obj9 = { variant: "destructive", disabled: isCancelLoading, loading: isCancelLoading, text: intl2.string(cancelLinkRequest(2568).mK40bk), onPress: callback2 };
  const Button = otherUser(5379).Button;
  intl2 = otherUser(1126).intl;
  items3 = [closure_5(Button, obj9), ];
  const obj10 = { variant: "tertiary", text: intl3.string(cancelLinkRequest(2568).czincX), onPress: cancelLinkRequest(5934).pop };
  const Button2 = otherUser(5379).Button;
  intl3 = otherUser(1126).intl;
  items3[1] = closure_5(Button2, obj10);
  items2[1] = closure_5(ModalFooter, obj7);
  return closure_6(ModalScreen, obj2);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function FamilyCenterModalCancel(otherUser) {
  let obj3;
  let tmp4;
  let tmp6;
  let tmp8;
  let tmpResult;
  const obj = otherUser(576);
  const cResult = obj.c(5);
  otherUser = otherUser.otherUser;
  if (cResult[0] !== otherUser) {
    const obj2 = { CANCEL: obj3 };
    obj3 = {
      headerShown: true,
      headerLeft: tmpResult.getHeaderCloseButton(ModalActionCreatorsDefault.pop),
      headerTitle,
      render() {
          const obj = { otherUser };
          return closure_2_5(closure_2_8, obj);
        }
    };
    cResult[0] = otherUser;
    cResult[1] = obj2;
    tmp4 = obj2;
    tmpResult = otherUser(6200);
  } else {
    tmp4 = cResult[1];
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1126).intl;
    const stringResult = intl.string(otherUser(1126).t["13/7kX"]);
    cResult[2] = stringResult;
    tmp6 = stringResult;
  } else {
    tmp6 = cResult[2];
  }
  if (cResult[3] !== tmp4) {
    const obj4 = { initialRouteName: "CANCEL", screens: tmp4, headerBackTitle: tmp6 };
    const tmp10 = closure_5(otherUser(10602).Modal, obj4);
    cResult[3] = tmp4;
    cResult[4] = tmp10;
    tmp8 = tmp10;
  } else {
    tmp8 = cResult[4];
  }
  return tmp8;
}) : (function FamilyCenterModalCancel(otherUser) {
  let intl;
  otherUser = otherUser.otherUser;
  const items = [otherUser];
  const memo = react.useMemo(() => {
    let obj2;
    let obj3;
    let closure_0 = otherUser;
    let obj = { CANCEL: obj2 };
    obj2 = {
      headerShown: true,
      headerLeft: obj3.getHeaderCloseButton(ModalActionCreatorsDefault.pop),
      headerTitle,
      render() {
        const obj = { otherUser };
        return closure_2_5(closure_2_8, obj);
      }
    };
    obj3 = NavigatorHeader;
    return obj;
  }, items);
  let obj = { initialRouteName: "CANCEL", screens: memo, headerBackTitle: intl.string(otherUser(1126).t["13/7kX"]) };
  const Modal = otherUser(10602).Modal;
  intl = otherUser(1126).intl;
  return closure_5(Modal, obj);
});
const result = size.fileFinishedImporting("modules/parent_tools/native/FamilyCenterModalCancel.tsx");

export default tmp4;
