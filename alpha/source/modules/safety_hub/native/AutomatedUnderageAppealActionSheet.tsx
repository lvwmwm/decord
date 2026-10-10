// Module ID: 11475
// Function ID: 11476
// Name: AutomatedUnderageAppealActionSheet
// Dependencies: [19, 17, 7536, 7512, 21, 5092, 587, 1126, 558, 576, 504, 1631, 11474, 7497, 5918, 5056, 4806, 5088, 6179, 6264, 11472, 5379, 6306, 6839, 2]

// Module 11475 (AutomatedUnderageAppealActionSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import intl8 from "intl" /* 1126 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5056 */;
import Text_Text from "Text/Text" /* 5088 */;
import AgeVerificationAnalyticsUtils from "AgeVerificationAnalyticsUtils" /* 5918 */;
import TableRow2 from "TableRow" /* 6179 */;
import AgeVerificationActionCreatorsDefault from "AgeVerificationActionCreators" /* 7497 */;
import SafetyHubActionCreators from "SafetyHubActionCreators" /* 11472 */;
import AutomatedUnderageAppealModalActionCreatorsDefault from "AutomatedUnderageAppealModalActionCreators" /* 11474 */;
import react from "react" /* 19 */;
import SafetyHubStore from "SafetyHubStore" /* 7536 */;
import SafetyHubConstants from "SafetyHubConstants" /* 7512 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5092 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let BottomSheet, dependencyMap;

let c9;
let intl;
let intl2;
let intl3;
let intl4;
let intl5;
let intl6;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let size;
const View = react_native.View;
({ AGE_APPEAL_ACTION_SHEET_NAME: metroRequire, SafetyHubLinks: metroImportDefault } = SafetyHubConstants);
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, header: { alignItems: "center" }, content: obj3, moreInfo: obj4, learnMore: obj5, footer: obj6, number: size };
obj2 = { flex: 1, paddingHorizontal: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_8 };
createStyles = createStyles.createStyles;
obj3 = { flex: 1, gap: nativeDefault.space.PX_16 };
obj4 = { gap: nativeDefault.space.PX_4 };
obj5 = { marginTop: nativeDefault.space.PX_12, textAlign: "center", paddingBottom: nativeDefault.space.PX_32 };
obj6 = { marginTop: nativeDefault.space.PX_8 };
size = { alignItems: "center", justifyContent: "center", width: 32, height: 32, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE };
let closure_10 = createStyles(obj);
let obj7 = { title: intl.string(intl8.t["1+E7LP"]), description: intl2.string(intl8.t["BXiat/"]) };
intl = intl8.intl;
intl2 = intl8.intl;
let items = [obj7, , ];
let obj8 = { title: intl3.string(intl8.t.iMQXtK), description: intl4.string(intl8.t.oQ0vwu) };
intl3 = intl8.intl;
intl4 = intl8.intl;
items[1] = obj8;
let obj9 = { title: intl5.string(intl8.t["oY/z1Q"]), description: intl6.string(intl8.t.wtj02W) };
intl5 = intl8.intl;
intl6 = intl8.intl;
items[2] = obj9;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function AutomatedUnderageAppealActionSheet(onClose) {
  let TableRow;
  let intl;
  let intl2;
  let items2;
  let items3;
  let items4;
  let number;
  let obj7;
  let tmp10;
  let tmp5;
  let tmp6;
  let tmp9;
  const tmp = onClose;
  let obj = onClose(576);
  const cResult = obj.c(53);
  onClose = onClose.onClose;
  const classificationId = onClose.classificationId;
  const tmp4 = closure_10();
  dependencyMap = tmp4;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    items = [L];
    const fn = function p() {
      return L.getAgeVerificationWebviewUrl();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp5 = items;
    tmp6 = fn;
  } else {
    [tmp5, tmp6] = cResult;
  }
  const tmpResult = tmp(504);
  const stateFromStores = tmpResult.useStateFromStores(tmp5, tmp6);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [L];
    class E {
      constructor() {
        return L.getIsLoadingAgeVerification();
      }
    }
    cResult[2] = items1;
    cResult[3] = E;
    tmp10 = E;
    tmp9 = items1;
  } else {
    tmp9 = cResult[2];
    tmp10 = cResult[3];
  }
  const tmpResult2 = tmp(504);
  const stateFromStores1 = tmpResult2.useStateFromStores(tmp9, tmp10);
  const bottom = classificationId(1631)().bottom;
  if (cResult[4] !== onClose) {
    class T {
      constructor() {
        if (onClose != null) {
          tmp();
        }
        const obj = AutomatedUnderageAppealModalActionCreatorsDefault;
        obj.close();
      }
    }
    cResult[4] = onClose;
    class E {
      constructor() {
        return L.getIsLoadingAgeVerification();
      }
    }
    cResult[5] = T;
  } else {
    class T {
      constructor() {
        if (onClose != null) {
          tmp();
        }
        const obj = AutomatedUnderageAppealModalActionCreatorsDefault;
        obj.close();
      }
    }
  }
  T = tmp14;
  if (cResult[6] !== tmp14) {
    class L {
      constructor() {
        const obj = AutomatedUnderageAppealModalActionCreatorsDefault;
        obj.success();
        T();
        const obj2 = AutomatedUnderageAppealModalActionCreatorsDefault;
        const result = obj2.start_verification_check();
      }
    }
    cResult[6] = tmp14;
    class E {
      constructor() {
        return L.getIsLoadingAgeVerification();
      }
    }
    cResult[7] = L;
  } else {
    class L {
      constructor() {
        const obj = AutomatedUnderageAppealModalActionCreatorsDefault;
        obj.success();
        T();
        const obj2 = AutomatedUnderageAppealModalActionCreatorsDefault;
        const result = obj2.start_verification_check();
      }
    }
  }
  L = tmp15;
  if (cResult[8] === tmp15) {
    class L {
      constructor() {
        const obj = AutomatedUnderageAppealModalActionCreatorsDefault;
        obj.success();
        T();
        const obj2 = AutomatedUnderageAppealModalActionCreatorsDefault;
        const result = obj2.start_verification_check();
      }
    }
    const effect = stateFromStores.useEffect(R, items4);
    class E {
      constructor() {
        return L.getIsLoadingAgeVerification();
      }
    }
    if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
      class L {
        constructor() {
          const obj = AutomatedUnderageAppealModalActionCreatorsDefault;
          obj.success();
          T();
          const obj2 = AutomatedUnderageAppealModalActionCreatorsDefault;
          const result = obj2.start_verification_check();
        }
      }
      cResult[12] = tmp19;
      class E {
        constructor() {
          return L.getIsLoadingAgeVerification();
        }
      }
    } else {
      class L {
        constructor() {
          const obj = AutomatedUnderageAppealModalActionCreatorsDefault;
          obj.success();
          T();
          const obj2 = AutomatedUnderageAppealModalActionCreatorsDefault;
          const result = obj2.start_verification_check();
        }
      }
    }
    const sum = 425 + bottom;
    const sum1 = sum + tmp13(587).space.PX_16;
    const sum2 = sum1 + tmp13(587).space.PX_32;
    if (cResult[13] === bottom) {
      let tmp28;
      let tmp39;
      let tmp41;
      let tmp47;
      let tmp48;
      class L {
        constructor() {
          const obj = AutomatedUnderageAppealModalActionCreatorsDefault;
          obj.success();
          T();
          const obj2 = AutomatedUnderageAppealModalActionCreatorsDefault;
          const result = obj2.start_verification_check();
        }
      }
      const _Symbol = Symbol;
      class E {
        constructor() {
          return L.getIsLoadingAgeVerification();
        }
      }
      const _Symbol2 = Symbol;
      if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
        class L {
          constructor() {
            const obj = AutomatedUnderageAppealModalActionCreatorsDefault;
            obj.success();
            T();
            const obj2 = AutomatedUnderageAppealModalActionCreatorsDefault;
            const result = obj2.start_verification_check();
          }
        }
        let obj2 = { variant: "heading-md/medium", color: "text-default", children: obj6.string(tmp(1126).t["yvx//1"]) };
        const Text = tmp(5088).Text;
        class E {
          constructor() {
            return L.getIsLoadingAgeVerification();
          }
        }
        const tmp29 = closure_8(Text, obj2);
        cResult[17] = tmp29;
        tmp28 = tmp29;
      } else {
        class L {
          constructor() {
            const obj = AutomatedUnderageAppealModalActionCreatorsDefault;
            obj.success();
            T();
            const obj2 = AutomatedUnderageAppealModalActionCreatorsDefault;
            const result = obj2.start_verification_check();
          }
        }
      }
      if (cResult[18] !== tmp4.header) {
        class L {
          constructor() {
            const obj = AutomatedUnderageAppealModalActionCreatorsDefault;
            obj.success();
            T();
            const obj2 = AutomatedUnderageAppealModalActionCreatorsDefault;
            const result = obj2.start_verification_check();
          }
        }
        let obj3 = { style: null, children: items2 };
        class E {
          constructor() {
            return L.getIsLoadingAgeVerification();
          }
        }
        items2 = [tmp27, tmp28];
        cResult[18] = tmp4.header;
        cResult[19] = closure_9(T, obj3);
        const tmp32 = closure_9(T, obj3);
      } else {
        class L {
          constructor() {
            const obj = AutomatedUnderageAppealModalActionCreatorsDefault;
            obj.success();
            T();
            const obj2 = AutomatedUnderageAppealModalActionCreatorsDefault;
            const result = obj2.start_verification_check();
          }
        }
      }
      if (cResult[20] !== tmp4.number) {
        class L {
          constructor() {
            const obj = AutomatedUnderageAppealModalActionCreatorsDefault;
            obj.success();
            T();
            const obj2 = AutomatedUnderageAppealModalActionCreatorsDefault;
            const result = obj2.start_verification_check();
          }
        }
        const mapped = items.map((item, index) => {
          let description;
          let obj2;
          let obj3;
          let title;
          ({ title, description } = item);
          const obj = { label: title, subLabel: description, icon: metroImportAll(View, obj2) };
          obj2 = { style: number.number, children: metroImportAll(Text_Text.Text, obj3) };
          const TableRow = TableRow2.TableRow;
          obj3 = { variant: "heading-md/semibold", color: "text-brand", children: index + 1 };
          return metroImportAll(TableRow, obj, index);
        });
        class E {
          constructor() {
            return L.getIsLoadingAgeVerification();
          }
        }
        cResult[21] = mapped;
      } else {
        class L {
          constructor() {
            const obj = AutomatedUnderageAppealModalActionCreatorsDefault;
            obj.success();
            T();
            const obj2 = AutomatedUnderageAppealModalActionCreatorsDefault;
            const result = obj2.start_verification_check();
          }
        }
      }
      if (cResult[22] !== tmp33) {
        class L {
          constructor() {
            const obj = AutomatedUnderageAppealModalActionCreatorsDefault;
            obj.success();
            T();
            const obj2 = AutomatedUnderageAppealModalActionCreatorsDefault;
            const result = obj2.start_verification_check();
          }
        }
        const obj4 = { children: closure_8(tmp(6264).TableRowGroup, tmp37) };
        class E {
          constructor() {
            return L.getIsLoadingAgeVerification();
          }
        }
        tmp37[1] = tmp33;
        cResult[22] = tmp33;
        cResult[23] = closure_8(T, obj4);
        const tmp38 = closure_8(T, obj4);
      } else {
        class L {
          constructor() {
            const obj = AutomatedUnderageAppealModalActionCreatorsDefault;
            obj.success();
            T();
            const obj2 = AutomatedUnderageAppealModalActionCreatorsDefault;
            const result = obj2.start_verification_check();
          }
        }
      }
      const _Symbol3 = Symbol;
      const moreInfo = tmp4.moreInfo;
      if (cResult[24] === Symbol.for("react.memo_cache_sentinel")) {
        class L {
          constructor() {
            const obj = AutomatedUnderageAppealModalActionCreatorsDefault;
            obj.success();
            T();
            const obj2 = AutomatedUnderageAppealModalActionCreatorsDefault;
            const result = obj2.start_verification_check();
          }
        }
        const stringResult = obj9.string(tmp(1126).t.WPwp1b);
        class E {
          constructor() {
            return L.getIsLoadingAgeVerification();
          }
        }
        cResult[24] = stringResult;
        tmp39 = stringResult;
      } else {
        class L {
          constructor() {
            const obj = AutomatedUnderageAppealModalActionCreatorsDefault;
            obj.success();
            T();
            const obj2 = AutomatedUnderageAppealModalActionCreatorsDefault;
            const result = obj2.start_verification_check();
          }
        }
      }
      const _Symbol4 = Symbol;
      if (cResult[25] === Symbol.for("react.memo_cache_sentinel")) {
        class L {
          constructor() {
            const obj = AutomatedUnderageAppealModalActionCreatorsDefault;
            obj.success();
            T();
            const obj2 = AutomatedUnderageAppealModalActionCreatorsDefault;
            const result = obj2.start_verification_check();
          }
        }
        const obj5 = { title: tmp39, hasIcons: false, children: closure_8(TableRow, obj7) };
        class E {
          constructor() {
            return L.getIsLoadingAgeVerification();
          }
        }
        obj7 = { label: intl.string(tmp(1126).t.N9WJMM), subLabel: intl2.string(tmp(1126).t.NHq382), onPress: tmp18, arrow: true, start: true, end: true };
        TableRow = tmp(6179).TableRow;
        intl = tmp(1126).intl;
        intl2 = tmp(1126).intl;
        const tmp43 = closure_8(tmp42, obj5);
        cResult[25] = tmp43;
        tmp41 = tmp43;
      } else {
        class L {
          constructor() {
            const obj = AutomatedUnderageAppealModalActionCreatorsDefault;
            obj.success();
            T();
            const obj2 = AutomatedUnderageAppealModalActionCreatorsDefault;
            const result = obj2.start_verification_check();
          }
        }
      }
      if (cResult[26] !== tmp4.moreInfo) {
        class L {
          constructor() {
            const obj = AutomatedUnderageAppealModalActionCreatorsDefault;
            obj.success();
            T();
            const obj2 = AutomatedUnderageAppealModalActionCreatorsDefault;
            const result = obj2.start_verification_check();
          }
        }
        const obj8 = { style: null, children: tmp41 };
        class E {
          constructor() {
            return L.getIsLoadingAgeVerification();
          }
        }
        cResult[26] = tmp4.moreInfo;
        cResult[27] = closure_8(T, obj8);
        const tmp46 = closure_8(T, obj8);
      } else {
        class L {
          constructor() {
            const obj = AutomatedUnderageAppealModalActionCreatorsDefault;
            obj.success();
            T();
            const obj2 = AutomatedUnderageAppealModalActionCreatorsDefault;
            const result = obj2.start_verification_check();
          }
        }
      }
      const footer = tmp4.footer;
      if (cResult[28] !== classificationId) {
        class Q {
          constructor() {
            const obj = SafetyHubActionCreators;
            return obj.requestSuspendedUserAgeVerification(classificationId);
          }
        }
        cResult[28] = classificationId;
        class E {
          constructor() {
            return L.getIsLoadingAgeVerification();
          }
        }
        cResult[29] = Q;
        tmp47 = Q;
      } else {
        class Q {
          constructor() {
            const obj = SafetyHubActionCreators;
            return obj.requestSuspendedUserAgeVerification(classificationId);
          }
        }
      }
      const _Symbol5 = Symbol;
      if (cResult[30] === Symbol.for("react.memo_cache_sentinel")) {
        class Q {
          constructor() {
            const obj = SafetyHubActionCreators;
            return obj.requestSuspendedUserAgeVerification(classificationId);
          }
        }
        const stringResult1 = obj13.string(tmp(1126).t["54b8V0"]);
        class E {
          constructor() {
            return L.getIsLoadingAgeVerification();
          }
        }
        cResult[30] = stringResult1;
        tmp48 = stringResult1;
      } else {
        class Q {
          constructor() {
            const obj = SafetyHubActionCreators;
            return obj.requestSuspendedUserAgeVerification(classificationId);
          }
        }
      }
      if (cResult[31] === stateFromStores1) {
        class Q {
          constructor() {
            const obj = SafetyHubActionCreators;
            return obj.requestSuspendedUserAgeVerification(classificationId);
          }
        }
        const _Symbol6 = Symbol;
        const learnMore = tmp4.learnMore;
        class E {
          constructor() {
            return L.getIsLoadingAgeVerification();
          }
        }
        if (tmp53 === Symbol.for("react.memo_cache_sentinel")) {
          class Q {
            constructor() {
              const obj = SafetyHubActionCreators;
              return obj.requestSuspendedUserAgeVerification(classificationId);
            }
          }
          const format = tmp55.format;
          const obj10 = { learnMoreLink: constants.LEARN_MORE_UU_APPEAL_LINK };
          class E {
            constructor() {
              return L.getIsLoadingAgeVerification();
            }
          }
          cResult[34] = format(tmp(1126).t.ZbWsOF, obj10);
          const formatResult = format(tmp(1126).t.ZbWsOF, obj10);
        } else {
          class Q {
            constructor() {
              const obj = SafetyHubActionCreators;
              return obj.requestSuspendedUserAgeVerification(classificationId);
            }
          }
        }
        if (cResult[35] !== tmp4.learnMore) {
          class Q {
            constructor() {
              const obj = SafetyHubActionCreators;
              return obj.requestSuspendedUserAgeVerification(classificationId);
            }
          }
          const obj11 = { variant: "heading-sm/medium", color: "text-subtle", style: learnMore, children: null };
          class E {
            constructor() {
              return L.getIsLoadingAgeVerification();
            }
          }
          cResult[35] = tmp4.learnMore;
          cResult[36] = closure_8(tmp(5088).Text, obj11);
          const tmp58 = closure_8(tmp(5088).Text, obj11);
        } else {
          class Q {
            constructor() {
              const obj = SafetyHubActionCreators;
              return obj.requestSuspendedUserAgeVerification(classificationId);
            }
          }
        }
        if (cResult[37] === tmp4.footer) {
          class Q {
            constructor() {
              const obj = SafetyHubActionCreators;
              return obj.requestSuspendedUserAgeVerification(classificationId);
            }
          }
        }
        const obj12 = { style: footer, children: items3 };
        items3 = [tmp50, tmp57];
        cResult[37] = tmp4.footer;
        cResult[38] = tmp50;
        cResult[39] = tmp57;
        cResult[40] = closure_9(T, obj12);
        const tmp62 = closure_9(T, obj12);
      }
      const obj14 = { onPress: tmp47, loading: stateFromStores1, disabled: stateFromStores1, text: tmp48 };
      cResult[31] = stateFromStores1;
      const tmp52 = closure_8(tmp(5379).Button, obj14);
      class R {
        constructor() {
          if ("" !== stateFromStores) {
            const obj = { webviewUrl: tmp, onComplete: L, entryPoint: AgeVerificationAnalyticsUtils.AgeVerificationModalEntryPoint.AUTOMATED_UNDERAGE_APPEALS };
            const showAgeVerification = AgeVerificationActionCreatorsDefault.showAgeVerification;
            AgeVerificationActionCreatorsDefault;
            showAgeVerification(obj);
            const obj2 = ActionSheetActionCreatorsDefault;
            obj2.hideActionSheet(metroRequire);
          }
        }
      }
      cResult[33] = tmp52;
    }
    const obj15 = { paddingBottom: bottom };
    const merged = Object.assign(tmp4.content);
    cResult[13] = bottom;
    cResult[14] = tmp4.content;
    cResult[15] = obj15;
  }
  class R {
    constructor() {
      if ("" !== stateFromStores) {
        const obj = { webviewUrl: tmp, onComplete: L, entryPoint: AgeVerificationAnalyticsUtils.AgeVerificationModalEntryPoint.AUTOMATED_UNDERAGE_APPEALS };
        const showAgeVerification = AgeVerificationActionCreatorsDefault.showAgeVerification;
        AgeVerificationActionCreatorsDefault;
        showAgeVerification(obj);
        const obj2 = ActionSheetActionCreatorsDefault;
        obj2.hideActionSheet(metroRequire);
      }
    }
  }
  items4 = [stateFromStores, tmp15];
  cResult[8] = tmp15;
  cResult[9] = stateFromStores;
  cResult[10] = R;
  cResult[11] = items4;
}) : (function AutomatedUnderageAppealActionSheet(onClose) {
  let BottomSheetScrollView;
  let TableRow;
  let TableRowGroup;
  let TableRowGroup2;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let intl7;
  let items5;
  let items6;
  let items7;
  let number;
  let obj11;
  let obj13;
  let obj14;
  let obj18;
  let obj4;
  let obj5;
  let obj6;
  let sum1;
  onClose = onClose.onClose;
  const classificationId = onClose.classificationId;
  let callback1;
  const tmp = closure_10();
  dependencyMap = tmp;
  let obj = onClose(504);
  items = [callback1];
  const stateFromStores = obj.useStateFromStores(items, () => callback1.getAgeVerificationWebviewUrl());
  let obj2 = onClose(504);
  const items1 = [callback1];
  const stateFromStores1 = obj2.useStateFromStores(items1, () => callback1.getIsLoadingAgeVerification());
  const bottom = classificationId(1631)().bottom;
  const items2 = [onClose];
  const callback = stateFromStores.useCallback(() => {
    if (onClose != null) {
      tmp();
    }
    const obj = AutomatedUnderageAppealModalActionCreatorsDefault;
    obj.close();
  }, items2);
  const items3 = [callback];
  callback1 = stateFromStores.useCallback(() => {
    const obj = AutomatedUnderageAppealModalActionCreatorsDefault;
    obj.success();
    callback();
    const obj2 = AutomatedUnderageAppealModalActionCreatorsDefault;
    const result = obj2.start_verification_check();
  }, items3);
  const items4 = [stateFromStores, callback1];
  const effect = stateFromStores.useEffect(() => {
    if ("" !== stateFromStores) {
      const obj = { webviewUrl: tmp, onComplete: callback1, entryPoint: AgeVerificationAnalyticsUtils.AgeVerificationModalEntryPoint.AUTOMATED_UNDERAGE_APPEALS };
      const showAgeVerification = AgeVerificationActionCreatorsDefault.showAgeVerification;
      AgeVerificationActionCreatorsDefault;
      showAgeVerification(obj);
      const obj2 = ActionSheetActionCreatorsDefault;
      obj2.hideActionSheet(metroRequire);
    }
  }, items4);
  let obj3 = { scrollable: true, startHeight: sum1 + classificationId(587).space.PX_32, children: closure_8(BottomSheetScrollView, obj4) };
  BottomSheet = onClose(6839).BottomSheet;
  const sum = 425 + bottom;
  sum1 = sum + classificationId(587).space.PX_16;
  obj4 = { style: tmp.container, children: closure_9(callback, obj5) };
  obj5 = { style: obj6, children: items6 };
  obj6 = { paddingBottom: bottom };
  BottomSheetScrollView = onClose(6306).BottomSheetScrollView;
  const merged = Object.assign(tmp.content);
  const obj7 = { style: tmp.header, children: items5 };
  const obj8 = { variant: "heading-xl/bold", color: "mobile-text-heading-primary", children: intl.string(onClose(1126).t["9SDLnj"]) };
  const Text = onClose(5088).Text;
  intl = onClose(1126).intl;
  items5 = [closure_8(Text, obj8), ];
  const obj9 = { variant: "heading-md/medium", color: "text-default", children: intl2.string(onClose(1126).t["yvx//1"]) };
  const Text2 = onClose(5088).Text;
  intl2 = onClose(1126).intl;
  items5[1] = closure_8(Text2, obj9);
  items6 = [closure_9(callback, obj7), , , ];
  const obj10 = { children: closure_8(TableRowGroup, obj11) };
  obj11 = {
    hasIcons: true,
    children: items.map((item, index) => {
      let description;
      let obj2;
      let obj3;
      let title;
      ({ title, description } = item);
      const obj = { label: title, subLabel: description, icon: metroImportAll(View, obj2) };
      obj2 = { style: number.number, children: metroImportAll(Text_Text.Text, obj3) };
      const TableRow = TableRow2.TableRow;
      obj3 = { variant: "heading-md/semibold", color: "text-brand", children: index + 1 };
      return metroImportAll(TableRow, obj, index);
    })
  };
  TableRowGroup = onClose(6264).TableRowGroup;
  items6[1] = closure_8(callback, obj10);
  const obj12 = { style: tmp.moreInfo, children: closure_8(TableRowGroup2, obj13) };
  obj13 = { title: intl3.string(onClose(1126).t.WPwp1b), hasIcons: false, children: closure_8(TableRow, obj14) };
  TableRowGroup2 = onClose(6264).TableRowGroup;
  intl3 = onClose(1126).intl;
  obj14 = {
    label: intl4.string(onClose(1126).t.N9WJMM),
    subLabel: intl5.string(onClose(1126).t.NHq382),
    onPress: function openForm() {
      const obj = classificationId(number[16]);
      return obj.openURL(constants.AGE_VERIFICATION_LINK);
    },
    arrow: true,
    start: true,
    end: true
  };
  TableRow = onClose(6179).TableRow;
  intl4 = onClose(1126).intl;
  intl5 = onClose(1126).intl;
  items6[2] = closure_8(callback, obj12);
  const obj15 = { style: tmp.footer, children: items7 };
  const obj16 = {
    onPress() {
      const obj = SafetyHubActionCreators;
      return obj.requestSuspendedUserAgeVerification(classificationId);
    },
    loading: stateFromStores1,
    disabled: stateFromStores1,
    text: intl6.string(onClose(1126).t["54b8V0"])
  };
  const Button = onClose(5379).Button;
  intl6 = onClose(1126).intl;
  items7 = [closure_8(Button, obj16), ];
  const obj17 = { variant: "heading-sm/medium", color: "text-subtle", style: tmp.learnMore, children: intl7.format(onClose(1126).t.ZbWsOF, obj18) };
  const Text3 = onClose(5088).Text;
  intl7 = onClose(1126).intl;
  obj18 = { learnMoreLink: constants.LEARN_MORE_UU_APPEAL_LINK };
  items7[1] = closure_8(Text3, obj17);
  items6[3] = closure_9(callback, obj15);
  return closure_8(BottomSheet, obj3);
});
size = size_mod;
let result = size.fileFinishedImporting("modules/safety_hub/native/AutomatedUnderageAppealActionSheet.tsx");

export default tmp5;
