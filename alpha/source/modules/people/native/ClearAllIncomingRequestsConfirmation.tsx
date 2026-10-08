// Module ID: 7012
// Function ID: 7013
// Name: ClearAllIncomingRequestsConfirmation
// Dependencies: [32, 19, 17, 21, 5090, 587, 558, 576, 5940, 4765, 1126, 7004, 7013, 6767, 5086, 5375, 6803, 2]

// Module 7012 (ClearAllIncomingRequestsConfirmation)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl6 from "intl" /* 1126 */;
import ToastUtils from "ToastUtils" /* 4765 */;
import Text_Text from "Text/Text" /* 5086 */;
import components_Button_Button from "components/Button/Button" /* 5375 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5940 */;
import RelationshipActionCreatorsDefault from "RelationshipActionCreators" /* 7004 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5090 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap;

let c9;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj10;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
let obj8;
let obj9;
({ View: hasOwnProperty, ScrollView: metroRequire } = react_native);
({ jsx: metroImportDefault, Fragment: metroImportAll, jsxs: c9 } = Fragment);
let createStyles = createStyles_mod;
let obj = { root: obj2, closeButton: { marginRight: 8, alignSelf: "flex-end" }, content: obj3, container: obj4, footer: obj5, header: obj6, headerText: obj7, body: obj8, noticeHeader: obj9, buttonWrapper: obj10 };
obj2 = { display: "flex", flexDirection: "column", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, height: "100%", paddingTop: nativeDefault.space.PX_24 };
createStyles = createStyles.createStyles;
obj3 = { flexGrow: 1, padding: nativeDefault.space.PX_16 };
obj4 = { display: "flex", flexDirection: "column", height: "100%", marginTop: nativeDefault.space.PX_24 };
obj5 = { flexGrow: 0, flexShrink: 1, backgroundColor: nativeDefault.colors.BORDER_SUBTLE, paddingVertical: nativeDefault.space.PX_24, paddingHorizontal: nativeDefault.space.PX_16 };
obj6 = { display: "flex", alignItems: "center", justifyContent: "center", marginBottom: nativeDefault.space.PX_16 };
obj7 = { marginTop: nativeDefault.space.PX_16, marginBottom: nativeDefault.space.PX_4 };
obj8 = { padding: nativeDefault.space.PX_24, borderRadius: nativeDefault.radii.md, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
obj9 = { marginBottom: nativeDefault.space.PX_4 };
obj10 = { marginBottom: nativeDefault.space.PX_4 };
let closure_10 = createStyles(obj);
const tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function ClearAllIncomingRequestsConfirmationModal(incomingPendingRequestCount) {
  let body;
  let buttonWrapper;
  let closure_2;
  let container;
  let content;
  let first;
  let footer;
  let header;
  let headerText;
  let intl;
  let items;
  let items1;
  let items2;
  let noticeHeader;
  let obj15;
  let require;
  let tmp10;
  let tmp12;
  let tmp17;
  let tmp6;
  let tmp8;
  let tmp9;
  let obj = react2;
  const cResult = obj.c(50);
  incomingPendingRequestCount = incomingPendingRequestCount.incomingPendingRequestCount;
  const tmp4 = closure_10();
  [tmp6, require] = react.useState(false);
  _slicedToArray(react.useState(false), 2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function s() {
      _require(false);
      const arr = ModalActionCreatorsDefault;
      arr.pop();
    };
    cResult[0] = fn;
    first = fn;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const fn2 = function v() {
      _require(false);
      const presentFailedToast = ToastUtils.presentFailedToast;
      ToastUtils;
      const intl = intl6.intl;
      presentFailedToast(intl.string(intl6.t.R0RpRX));
    };
    cResult[1] = fn2;
    tmp8 = fn2;
  } else {
    tmp8 = cResult[1];
  }
  dependencyMap = tmp8;
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    class T {
      constructor() {
        _require(true);
        const obj = RelationshipActionCreatorsDefault;
        const result = obj.clearPendingRelationships();
        const nextPromise = result.then(first);
        nextPromise.catch(closure_2);
      }
    }
    cResult[2] = T;
    tmp9 = T;
  } else {
    class T {
      constructor() {
        _require(true);
        const obj = RelationshipActionCreatorsDefault;
        const result = obj.clearPendingRelationships();
        const nextPromise = result.then(first);
        nextPromise.catch(closure_2);
      }
    }
  }
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    class T {
      constructor() {
        _require(true);
        const obj = RelationshipActionCreatorsDefault;
        const result = obj.clearPendingRelationships();
        const nextPromise = result.then(first);
        nextPromise.catch(closure_2);
      }
    }
    const stringResult = obj2.string(intl6.t.cpT0Cq);
    cResult[3] = stringResult;
    tmp10 = stringResult;
  } else {
    class T {
      constructor() {
        _require(true);
        const obj = RelationshipActionCreatorsDefault;
        const result = obj.clearPendingRelationships();
        const nextPromise = result.then(first);
        nextPromise.catch(closure_2);
      }
    }
  }
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    class X {
      constructor() {
        const arr = first(closure_2[8]);
        return arr.pop();
      }
    }
    cResult[4] = X;
    tmp12 = X;
  } else {
    class X {
      constructor() {
        const arr = first(closure_2[8]);
        return arr.pop();
      }
    }
  }
  if (cResult[5] !== tmp4.closeButton) {
    class X {
      constructor() {
        const arr = first(closure_2[8]);
        return arr.pop();
      }
    }
    const obj3 = { accessibilityRole: "button", accessibilityLabel: tmp10, source: first(6767), style: tmp4.closeButton, onPress: tmp12 };
    const tmp15 = first(7013);
    cResult[5] = tmp4.closeButton;
    cResult[6] = closure_7(tmp15, obj3);
    const tmp16 = closure_7(tmp15, obj3);
  } else {
    class X {
      constructor() {
        const arr = first(closure_2[8]);
        return arr.pop();
      }
    }
  }
  ({ container, content, header, headerText } = tmp4);
  if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
    class X {
      constructor() {
        const arr = first(closure_2[8]);
        return arr.pop();
      }
    }
    const stringResult1 = obj4.string(intl6.t.eVjfAu);
    cResult[7] = stringResult1;
    tmp17 = stringResult1;
  } else {
    class X {
      constructor() {
        const arr = first(closure_2[8]);
        return arr.pop();
      }
    }
  }
  if (cResult[8] !== tmp4.headerText) {
    class X {
      constructor() {
        const arr = first(closure_2[8]);
        return arr.pop();
      }
    }
    const obj5 = { style: headerText, variant: "text-lg/bold", children: tmp17 };
    cResult[8] = tmp4.headerText;
    cResult[9] = closure_7(Text_Text.Text, obj5);
    const tmp20 = closure_7(Text_Text.Text, obj5);
  } else {
    class X {
      constructor() {
        const arr = first(closure_2[8]);
        return arr.pop();
      }
    }
  }
  if (cResult[10] === tmp4.header) {
    class X {
      constructor() {
        const arr = first(closure_2[8]);
        return arr.pop();
      }
    }
    ({ body, noticeHeader } = tmp4);
    if (cResult[13] !== incomingPendingRequestCount) {
      class X {
        constructor() {
          const arr = first(closure_2[8]);
          return arr.pop();
        }
      }
      const obj7 = { incomingRequestCount: incomingPendingRequestCount };
      cResult[13] = incomingPendingRequestCount;
      cResult[14] = obj6.format(intl6.t.jaXsA3, obj7);
      const formatResult = obj6.format(intl6.t.jaXsA3, obj7);
    } else {
      class X {
        constructor() {
          const arr = first(closure_2[8]);
          return arr.pop();
        }
      }
    }
    if (cResult[15] === tmp4.noticeHeader) {
      class X {
        constructor() {
          const arr = first(closure_2[8]);
          return arr.pop();
        }
      }
      if (cResult[18] === tmp4.body) {
        class X {
          constructor() {
            const arr = first(closure_2[8]);
            return arr.pop();
          }
        }
        if (cResult[21] === tmp21) {
          class X {
            constructor() {
              const arr = first(closure_2[8]);
              return arr.pop();
            }
          }
          if (cResult[24] === tmp4.content) {
            let tmp40;
            class X {
              constructor() {
                const arr = first(closure_2[8]);
                return arr.pop();
              }
            }
            const _Symbol = Symbol;
            ({ footer, buttonWrapper } = tmp4);
            if (cResult[27] === Symbol.for("react.memo_cache_sentinel")) {
              class X {
                constructor() {
                  const arr = first(closure_2[8]);
                  return arr.pop();
                }
              }
              const stringResult2 = obj12.string(intl6.t.Eq9seb);
              cResult[27] = stringResult2;
              tmp40 = stringResult2;
            } else {
              class X {
                constructor() {
                  const arr = first(closure_2[8]);
                  return arr.pop();
                }
              }
            }
            if (cResult[28] !== tmp6) {
              class X {
                constructor() {
                  const arr = first(closure_2[8]);
                  return arr.pop();
                }
              }
              const obj8 = { disabled: tmp6, loading: tmp6, variant: "destructive", size: "md", text: tmp40, onPress: tmp9, grow: true };
              cResult[28] = tmp6;
              cResult[29] = closure_7(components_Button_Button.Button, obj8);
              const tmp43 = closure_7(components_Button_Button.Button, obj8);
            } else {
              class X {
                constructor() {
                  const arr = first(closure_2[8]);
                  return arr.pop();
                }
              }
            }
            if (cResult[30] === tmp4.buttonWrapper) {
              let tmp48;
              class X {
                constructor() {
                  const arr = first(closure_2[8]);
                  return arr.pop();
                }
              }
              const _Symbol2 = Symbol;
              if (cResult[33] === Symbol.for("react.memo_cache_sentinel")) {
                class X {
                  constructor() {
                    const arr = first(closure_2[8]);
                    return arr.pop();
                  }
                }
                const obj9 = { variant: "secondary", size: "md", text: intl.string(intl6.t["ETE/oC"]), onPress: first(5940).pop, grow: true };
                const Button = tmp(5375).Button;
                intl = tmp(1126).intl;
                const tmp50 = closure_7(Button, obj9);
                cResult[33] = tmp50;
                tmp48 = tmp50;
              } else {
                class X {
                  constructor() {
                    const arr = first(closure_2[8]);
                    return arr.pop();
                  }
                }
              }
              if (cResult[34] !== tmp4.buttonWrapper) {
                class X {
                  constructor() {
                    const arr = first(closure_2[8]);
                    return arr.pop();
                  }
                }
                const obj10 = { style: tmp4.buttonWrapper, children: tmp48 };
                cResult[34] = tmp4.buttonWrapper;
                cResult[35] = closure_7(closure_5, obj10);
                const tmp53 = closure_7(closure_5, obj10);
              } else {
                class X {
                  constructor() {
                    const arr = first(closure_2[8]);
                    return arr.pop();
                  }
                }
              }
              if (cResult[36] === tmp44) {
                class X {
                  constructor() {
                    const arr = first(closure_2[8]);
                    return arr.pop();
                  }
                }
                if (cResult[39] === tmp4.footer) {
                  class X {
                    constructor() {
                      const arr = first(closure_2[8]);
                      return arr.pop();
                    }
                  }
                  if (cResult[42] === tmp4.container) {
                    class X {
                      constructor() {
                        const arr = first(closure_2[8]);
                        return arr.pop();
                      }
                    }
                  }
                  const obj11 = { style: container, children: items };
                  items = [tmp36, tmp59];
                  cResult[42] = tmp4.container;
                  cResult[43] = tmp36;
                  cResult[44] = tmp59;
                  cResult[45] = closure_9(closure_5, obj11);
                  const tmp66 = closure_9(closure_5, obj11);
                }
                const obj13 = { style: footer, children: tmp54 };
                cResult[39] = tmp4.footer;
                cResult[40] = tmp54;
                cResult[41] = closure_7(closure_5, obj13);
                const tmp62 = closure_7(closure_5, obj13);
              }
              const obj14 = { bottom: true, children: closure_9(closure_8, obj15) };
              obj15 = { children: items1 };
              items1 = [tmp44, tmp51];
              const SafeAreaPaddingView = tmp(6803).SafeAreaPaddingView;
              cResult[36] = tmp44;
              cResult[37] = tmp51;
              cResult[38] = closure_7(SafeAreaPaddingView, obj14);
              const tmp58 = closure_7(SafeAreaPaddingView, obj14);
            }
            const obj16 = { style: buttonWrapper, children: tmp42 };
            cResult[30] = tmp4.buttonWrapper;
            cResult[31] = tmp42;
            cResult[32] = closure_7(closure_5, obj16);
            const tmp47 = closure_7(closure_5, obj16);
          }
          const obj17 = { style: content, children: tmp32 };
          cResult[24] = tmp4.content;
          cResult[25] = tmp32;
          cResult[26] = closure_7(closure_6, obj17);
          const tmp39 = closure_7(closure_6, obj17);
        }
        const obj18 = { children: items2 };
        items2 = [tmp21, tmp28];
        cResult[21] = tmp21;
        cResult[22] = tmp28;
        cResult[23] = closure_9(closure_8, obj18);
        const tmp35 = closure_9(closure_8, obj18);
      }
      const obj19 = { style: body, children: tmp25 };
      cResult[18] = tmp4.body;
      cResult[19] = tmp25;
      cResult[20] = closure_7(closure_5, obj19);
      const tmp31 = closure_7(closure_5, obj19);
    }
    const obj20 = { style: noticeHeader, variant: "text-xs/normal", color: "mobile-text-heading-primary", children: tmp23 };
    cResult[15] = tmp4.noticeHeader;
    cResult[16] = tmp23;
    cResult[17] = closure_7(Text_Text.Text, obj20);
    const tmp27 = closure_7(Text_Text.Text, obj20);
  }
  cResult[10] = tmp4.header;
  cResult[11] = tmp19;
  cResult[12] = closure_7(closure_5, { style: header, children: tmp19 });
  const tmp22 = closure_7(closure_5, { style: header, children: tmp19 });
}) : (function ClearAllIncomingRequestsConfirmationModal(incomingPendingRequestCount) {
  let Button;
  let Button2;
  let SafeAreaPaddingView2;
  let Text;
  let Text2;
  let _undefined;
  let c0;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let items1;
  let items2;
  let items3;
  let items4;
  let obj10;
  let obj12;
  let obj13;
  let obj15;
  let obj17;
  let obj2;
  let obj6;
  let obj8;
  let tmp3;
  _require = undefined;
  incomingPendingRequestCount = incomingPendingRequestCount.incomingPendingRequestCount;
  const tmp = closure_10();
  const tmp2 = _slicedToArray(react.useState(false), 2);
  [tmp3, c0] = tmp2;
  const callback = react.useCallback(() => {
    _undefined(false);
    const arr = ModalActionCreatorsDefault;
    arr.pop();
  }, []);
  const callback1 = react.useCallback(() => {
    _undefined(false);
    const presentFailedToast = ToastUtils.presentFailedToast;
    ToastUtils;
    const intl = intl6.intl;
    presentFailedToast(intl.string(intl6.t.R0RpRX));
  }, []);
  const items = [callback, callback1];
  const callback2 = react.useCallback(() => {
    _undefined(true);
    const obj = RelationshipActionCreatorsDefault;
    const result = obj.clearPendingRelationships();
    const nextPromise = result.then(callback);
    nextPromise.catch(callback1);
  }, items);
  let obj = { top: true, children: closure_9(closure_5, obj2) };
  obj2 = { style: tmp.root, children: items1 };
  const SafeAreaPaddingView = require("common/SafeAreaView").SafeAreaPaddingView;
  const obj3 = {
    accessibilityRole: "button",
    accessibilityLabel: intl.string(require("intl").t.cpT0Cq),
    source: callback(callback1[13]),
    style: tmp.closeButton,
    onPress() {
      const arr = callback(callback1[8]);
      return arr.pop();
    }
  };
  const tmp7 = callback(callback1[12]);
  intl = require("intl").intl;
  items1 = [closure_7(tmp7, obj3), ];
  const obj4 = { style: tmp.container, children: items3 };
  const obj5 = { style: tmp.content, children: closure_9(closure_8, obj6) };
  obj6 = { children: items2 };
  const obj7 = { style: tmp.header, children: closure_7(Text, obj8) };
  obj8 = { style: tmp.headerText, variant: "text-lg/bold", children: intl2.string(require("intl").t.eVjfAu) };
  Text = require("Text/Text").Text;
  intl2 = require("intl").intl;
  items2 = [closure_7(closure_5, obj7), ];
  const obj9 = { style: tmp.body, children: closure_7(Text2, obj10) };
  obj10 = { style: tmp.noticeHeader, variant: "text-xs/normal", color: "mobile-text-heading-primary", children: intl3.format(require("intl").t.jaXsA3, { incomingRequestCount: incomingPendingRequestCount }) };
  Text2 = require("Text/Text").Text;
  intl3 = require("intl").intl;
  items2[1] = closure_7(closure_5, obj9);
  items3 = [closure_7(closure_6, obj5), ];
  const obj11 = { style: tmp.footer, children: closure_7(SafeAreaPaddingView2, obj12) };
  obj12 = { bottom: true, children: closure_9(closure_8, obj13) };
  obj13 = { children: items4 };
  const obj14 = { style: tmp.buttonWrapper, children: closure_7(Button, obj15) };
  SafeAreaPaddingView2 = require("common/SafeAreaView").SafeAreaPaddingView;
  obj15 = { disabled: tmp3, loading: tmp3, variant: "destructive", size: "md", text: intl4.string(require("intl").t.Eq9seb), onPress: callback2, grow: true };
  Button = require("components/Button/Button").Button;
  intl4 = require("intl").intl;
  items4 = [closure_7(closure_5, obj14), ];
  const obj16 = { style: tmp.buttonWrapper, children: closure_7(Button2, obj17) };
  obj17 = { variant: "secondary", size: "md", text: intl5.string(require("intl").t["ETE/oC"]), onPress: callback(callback1[8]).pop, grow: true };
  Button2 = require("components/Button/Button").Button;
  intl5 = require("intl").intl;
  items4[1] = closure_7(closure_5, obj16);
  items3[1] = closure_7(closure_5, obj11);
  items1[1] = closure_9(closure_5, obj4);
  return closure_7(SafeAreaPaddingView, obj);
});
let result = size.fileFinishedImporting("modules/people/native/ClearAllIncomingRequestsConfirmation.tsx");

export default tmp5;
