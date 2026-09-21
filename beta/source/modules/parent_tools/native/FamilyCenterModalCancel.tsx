// Module ID: 15194
// Function ID: 15195
// Name: FamilyCenterModalCancel
// Dependencies: [19, 17, 21, 4758, 580, 558, 568, 8922, 4961, 4457, 1119, 12047, 38, 15189, 7238, 2486, 4754, 15159, 8699, 5188, 12057, 5652, 8698, 5839, 11453, 2]

// Module 15194 (FamilyCenterModalCancel)
import nativeDefault from "native" /* 580 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4961 */;
import NavigatorHeader from "NavigatorHeader" /* 5839 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4758);
let obj2 = { header: { display: "flex", alignItems: "center", justifyContent: "center", marginBottom: nativeDefault.space.PX_16 }, headerText: null };
let obj3 = { display: "flex", alignItems: "center", justifyContent: "center", marginBottom: nativeDefault.space.PX_16 };
obj2.headerText = { marginTop: nativeDefault.space.PX_16, marginBottom: nativeDefault.space.PX_4 };
let closure_7 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_8 = ReactCompilerGating.isReactCompilerEnabled() ? ((otherUser) => {
  const cResult = otherUser(568).c(28);
  otherUser = otherUser.otherUser;
  const tmp4 = closure_7();
  const obj = otherUser(568);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function o() {
      cancelLinkRequest(4961).pop();
    };
    cResult[0] = fn;
    let first = fn;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    class C {
      constructor() {
        obj = otherUser(closure_1_2[9]);
        intl = otherUser(closure_1_2[10]).intl;
        presentFailedToastResult = obj.presentFailedToast(intl.string(otherUser(closure_1_2[10]).t.R0RpRX));
        return;
      }
    }
    cResult[1] = C;
    const tmp8 = C;
  } else {
    class C {
      constructor() {
        obj = otherUser(closure_1_2[9]);
        intl = otherUser(closure_1_2[10]).intl;
        presentFailedToastResult = obj.presentFailedToast(intl.string(otherUser(closure_1_2[10]).t.R0RpRX));
        return;
      }
    }
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    class C {
      constructor() {
        obj = otherUser(closure_1_2[9]);
        intl = otherUser(closure_1_2[10]).intl;
        presentFailedToastResult = obj.presentFailedToast(intl.string(otherUser(closure_1_2[10]).t.R0RpRX));
        return;
      }
    }
    tmp10[0] = first;
    tmp10[1] = tmp8;
    cResult[2] = tmp10;
    const tmp9 = tmp10;
  } else {
    class C {
      constructor() {
        obj = otherUser(closure_1_2[9]);
        intl = otherUser(closure_1_2[10]).intl;
        presentFailedToastResult = obj.presentFailedToast(intl.string(otherUser(closure_1_2[10]).t.R0RpRX));
        return;
      }
    }
  }
  const tmp6 = cancelLinkRequest(8922)();
  const familyCenterActions = otherUser(12047).useFamilyCenterActions(tmp9);
  cancelLinkRequest = familyCenterActions.cancelLinkRequest;
  if (cResult[3] === cancelLinkRequest) {
    class C {
      constructor() {
        obj = otherUser(closure_1_2[9]);
        intl = otherUser(closure_1_2[10]).intl;
        presentFailedToastResult = obj.presentFailedToast(intl.string(otherUser(closure_1_2[10]).t.R0RpRX));
        return;
      }
    }
    tmp5(38)(tmp6, "FamilyCenterCancelModal should only be rendered for parents.");
    if (cResult[6] !== otherUser) {
      class C {
        constructor() {
          obj = otherUser(closure_1_2[9]);
          intl = otherUser(closure_1_2[10]).intl;
          presentFailedToastResult = obj.presentFailedToast(intl.string(otherUser(closure_1_2[10]).t.R0RpRX));
          return;
        }
      }
      const obj2 = { otherUser, iconSrc: tmp5(7238) };
      const tmp15 = closure_5(tmp5(15189), obj2);
      cResult[6] = otherUser;
      cResult[7] = tmp15;
      const tmp5Result = tmp5(15189);
    } else {
      class C {
        constructor() {
          obj = otherUser(closure_1_2[9]);
          intl = otherUser(closure_1_2[10]).intl;
          presentFailedToastResult = obj.presentFailedToast(intl.string(otherUser(closure_1_2[10]).t.R0RpRX));
          return;
        }
      }
    }
    const _Symbol = Symbol;
    if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
      class C {
        constructor() {
          obj = otherUser(closure_1_2[9]);
          intl = otherUser(closure_1_2[10]).intl;
          presentFailedToastResult = obj.presentFailedToast(intl.string(otherUser(closure_1_2[10]).t.R0RpRX));
          return;
        }
      }
      const stringResult = obj4.string(tmp5(2486).HynllX);
      cResult[8] = stringResult;
      const tmp16 = stringResult;
    } else {
      class C {
        constructor() {
          obj = otherUser(closure_1_2[9]);
          intl = otherUser(closure_1_2[10]).intl;
          presentFailedToastResult = obj.presentFailedToast(intl.string(otherUser(closure_1_2[10]).t.R0RpRX));
          return;
        }
      }
    }
    if (cResult[9] !== tmp4.headerText) {
      class C {
        constructor() {
          obj = otherUser(closure_1_2[9]);
          intl = otherUser(closure_1_2[10]).intl;
          presentFailedToastResult = obj.presentFailedToast(intl.string(otherUser(closure_1_2[10]).t.R0RpRX));
          return;
        }
      }
      const obj3 = { style: tmp4.headerText, variant: "text-lg/bold", children: tmp16 };
      const tmp19 = closure_5(tmp(4754).Text, obj3);
      cResult[9] = tmp4.headerText;
      cResult[10] = tmp19;
    } else {
      class C {
        constructor() {
          obj = otherUser(closure_1_2[9]);
          intl = otherUser(closure_1_2[10]).intl;
          presentFailedToastResult = obj.presentFailedToast(intl.string(otherUser(closure_1_2[10]).t.R0RpRX));
          return;
        }
      }
    }
    if (cResult[11] !== otherUser) {
      class C {
        constructor() {
          obj = otherUser(closure_1_2[9]);
          intl = otherUser(closure_1_2[10]).intl;
          presentFailedToastResult = obj.presentFailedToast(intl.string(otherUser(closure_1_2[10]).t.R0RpRX));
          return;
        }
      }
      const obj5 = { user: otherUser };
      const tmp21 = closure_5(tmp5(15159), obj5);
      cResult[11] = otherUser;
      cResult[12] = tmp21;
    } else {
      class C {
        constructor() {
          obj = otherUser(closure_1_2[9]);
          intl = otherUser(closure_1_2[10]).intl;
          presentFailedToastResult = obj.presentFailedToast(intl.string(otherUser(closure_1_2[10]).t.R0RpRX));
          return;
        }
      }
    }
    if (cResult[13] === tmp4.header) {
      class C {
        constructor() {
          obj = otherUser(closure_1_2[9]);
          intl = otherUser(closure_1_2[10]).intl;
          presentFailedToastResult = obj.presentFailedToast(intl.string(otherUser(closure_1_2[10]).t.R0RpRX));
          return;
        }
      }
    }
    const obj6 = { children: null };
    const obj7 = { style: tmp4.header, children: null };
    const items = [tmp13, tmp18, tmp20];
    obj7.children = items;
    obj6.children = closure_6(View, obj7);
    const tmp26 = closure_5(tmp(8699).ModalContent, obj6);
    cResult[13] = tmp4.header;
    cResult[14] = tmp20;
    cResult[15] = tmp13;
    cResult[16] = tmp18;
    cResult[17] = tmp26;
  }
  const fn2 = function f() {
    cancelLinkRequest(otherUser.id);
  };
  cResult[3] = cancelLinkRequest;
  cResult[4] = otherUser.id;
  cResult[5] = fn2;
}) : ((otherUser) => {
  otherUser = otherUser.otherUser;
  let cancelLinkRequest;
  const tmp = closure_7();
  const callback = noop.useCallback(() => {
    cancelLinkRequest(4961).pop();
  }, []);
  const callback1 = noop.useCallback(() => {
    const intl = otherUser(1119).intl;
    otherUser(4457).presentFailedToast(intl.string(otherUser(1119).t.R0RpRX));
  }, []);
  const tmp2 = cancelLinkRequest(8922)();
  const familyCenterActions = otherUser(12047).useFamilyCenterActions({ onSuccess: callback, onError: callback1 });
  cancelLinkRequest = familyCenterActions.cancelLinkRequest;
  const isCancelLoading = familyCenterActions.isCancelLoading;
  const items = [cancelLinkRequest, otherUser.id];
  const callback2 = noop.useCallback(() => {
    cancelLinkRequest(otherUser.id);
  }, items);
  cancelLinkRequest(38)(tmp2, "FamilyCenterCancelModal should only be rendered for parents.");
  const obj2 = { children: null };
  const obj3 = { children: null };
  const obj4 = { style: tmp.header, children: null };
  const obj5 = { otherUser, iconSrc: null };
  const obj = otherUser(12047);
  obj5.iconSrc = cancelLinkRequest(7238);
  const items1 = [closure_5(cancelLinkRequest(15189), obj5), , ];
  const obj6 = { style: tmp.headerText, variant: "text-lg/bold", children: null };
  let intl = otherUser(1119).intl;
  obj6.children = intl.string(cancelLinkRequest(2486).HynllX);
  items1[1] = closure_5(otherUser(4754).Text, obj6);
  items1[2] = closure_5(cancelLinkRequest(15159), { user: otherUser });
  obj4.children = items1;
  obj3.children = closure_6(View, obj4);
  const items2 = [closure_5(otherUser(8699).ModalContent, obj3), ];
  const obj7 = { children: null };
  const obj8 = { children: null };
  const obj9 = { variant: "destructive", disabled: isCancelLoading, loading: isCancelLoading, text: null, onPress: null };
  const intl2 = otherUser(1119).intl;
  obj9.text = intl2.string(cancelLinkRequest(2486).mK40bk);
  obj9.onPress = callback2;
  const items3 = [closure_5(otherUser(5188).Button, obj9), ];
  const obj10 = { variant: "tertiary", text: null, onPress: null };
  const intl3 = otherUser(1119).intl;
  obj10.text = intl3.string(cancelLinkRequest(2486).czincX);
  obj10.onPress = cancelLinkRequest(4961).pop;
  items3[1] = closure_5(otherUser(5188).Button, obj10);
  obj8.children = items3;
  obj7.children = closure_6(otherUser(5652).ButtonGroup, obj8);
  items2[1] = closure_5(otherUser(12057).ModalFooter, obj7);
  obj2.children = items2;
  return closure_6(otherUser(8698).ModalScreen, obj2);
});
ReactCompilerGating = fn(558);
let obj4 = { marginTop: nativeDefault.space.PX_16, marginBottom: nativeDefault.space.PX_4 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/parent_tools/native/FamilyCenterModalCancel.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((otherUser) => {
  const cResult = otherUser(568).c(5);
  otherUser = otherUser.otherUser;
  if (cResult[0] !== otherUser) {
    const obj2 = { CANCEL: null };
    const obj3 = {
      headerShown: true,
      headerLeft: tmp(5839).getHeaderCloseButton(ModalActionCreatorsDefault.pop),
      headerTitle() {
          return null;
        },
      render() {
          return closure_2_5(closure_2_8, { otherUser });
        }
    };
    obj2.CANCEL = obj3;
    cResult[0] = otherUser;
    cResult[1] = obj2;
    let tmp4 = obj2;
    const tmpResult = tmp(5839);
  } else {
    tmp4 = cResult[1];
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1119).intl;
    const stringResult = intl.string(tmp(1119).t["13/7kX"]);
    cResult[2] = stringResult;
    let tmp6 = stringResult;
  } else {
    tmp6 = cResult[2];
  }
  if (cResult[3] !== tmp4) {
    const obj4 = { initialRouteName: "CANCEL", screens: tmp4, headerBackTitle: tmp6 };
    const tmp10 = closure_5(tmp(11453).Modal, obj4);
    cResult[3] = tmp4;
    cResult[4] = tmp10;
    let tmp8 = tmp10;
  } else {
    tmp8 = cResult[4];
  }
  return tmp8;
}) : ((otherUser) => {
  otherUser = otherUser.otherUser;
  const items = [otherUser];
  const memo = noop.useMemo(() => {
    const obj = { CANCEL: null };
    const obj2 = {
      headerShown: true,
      headerLeft: NavigatorHeader.getHeaderCloseButton(ModalActionCreatorsDefault.pop),
      headerTitle() {
        return null;
      },
      render() {
        return closure_2_5(closure_2_8, { otherUser });
      }
    };
    obj.CANCEL = obj2;
    return obj;
  }, items);
  let obj = { initialRouteName: "CANCEL", screens: memo, headerBackTitle: null };
  const intl = otherUser(1119).intl;
  obj.headerBackTitle = intl.string(otherUser(1119).t["13/7kX"]);
  return closure_5(otherUser(11453).Modal, obj);
});
