// Module ID: 8608
// Function ID: 8609
// Name: defaultMVCPConfig
// Dependencies: [109, 19, 17, 21, 1382, 558, 576, 6530, 4811, 6529, 6305, 2]

// Module 8608 (defaultMVCPConfig)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import BottomSheetFlashListDefault from "BottomSheetFlashList" /* 6529 */;
import _mod6530 from "module_6530" /* 6530 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import PlatformUtils from "PlatformUtils" /* 1382 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import ReanimatedRexport_mod from "ReanimatedRexport" /* 4811 */;
import size from "module_2" /* 2 */;

let obj;

let tmp;
const BottomSheetModal = tmp(6305);
let closure_3 = ["ref"];
let closure_4 = ["ref"];
let closure_5 = ["preventNativeModalDismiss", "ref"];
let closure_6 = ["preventNativeModalDismiss", "refreshControl", "ref"];
let closure_7 = ["preventNativeModalDismiss", "refreshControl", "ref"];
const RefreshControl = react_native.RefreshControl;
const jsx = Fragment.jsx;
let defaultMVCPConfig;
if (PlatformUtils.isAndroid()) {
  defaultMVCPConfig = { disabled: true };
}
function noop() {

}
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_14 = ReactCompilerGating.isReactCompilerEnabled() ? (function useModalDismissGuardRefreshControl(arg0, arg1) {
  obj = react2;
  const cResult = obj.c(1);
  let tmp4 = arg1;
  if (null == arg1) {
    tmp4 = arg1;
    if (true === arg0) {
      tmp4 = arg1;
      const tmpResult = PlatformUtils;
      if (tmpResult.isIOS()) {
        let first;
        const _Symbol = Symbol;
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const tmp11 = <RefreshControl refreshing={false} onRefresh={noop} tintColor="transparent" />;
          cResult[0] = tmp11;
          first = tmp11;
        } else {
          first = cResult[0];
        }
        tmp4 = first;
      }
    }
  }
  return tmp4;
}) : (function useModalDismissGuardRefreshControl(arg0, arg1) {
  let closure_0 = arg0;
  let closure_1 = arg1;
  const items = [arg0, arg1];
  return react.useMemo(() => {
    let tmp2 = closure_1;
    if (null == closure_1) {
      tmp2 = tmp;
      if (true === closure_0) {
        tmp2 = tmp;
        obj = PlatformUtils;
        if (obj.isIOS()) {
          tmp2 = <RefreshControl refreshing={false} onRefresh={noop} tintColor="transparent" />;
        }
      }
    }
    return tmp2;
  }, items);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((ref) => {
  let tmp4;
  let tmp5;
  const maintainVisibleContentPosition = react2;
  const cResult = maintainVisibleContentPosition.c(6);
  if (cResult[0] !== ref) {
    const tmp8 = _objectWithoutProperties(ref, closure_3);
    cResult[0] = ref;
    cResult[1] = tmp8;
    cResult[2] = ref.ref;
    tmp5 = ref;
    tmp4 = tmp8;
  } else {
    tmp4 = cResult[1];
    tmp5 = cResult[2];
  }
  if (cResult[3] === tmp4) {
    let tmp9;
    if (cResult[4] === tmp5) {
      tmp9 = cResult[5];
    }
    return tmp9;
  }
  const FlashList = _mod6530.FlashList;
  const merged = Object.assign(tmp4);
  const tmp11 = <FlashList maintainVisibleContentPosition={maintainVisibleContentPosition} ref={tmp5} />;
  cResult[3] = tmp4;
  cResult[4] = tmp5;
  cResult[5] = tmp11;
  tmp9 = tmp11;
}) : ((ref) => {
  let maintainVisibleContentPosition;
  const merged = Object.assign(ref, Object.assign({ ref: 0 }));
  maintainVisibleContentPosition = { maintainVisibleContentPosition, ref };
  const FlashList = _mod6530.FlashList;
  const merged1 = Object.assign(merged);
  return <FlashList maintainVisibleContentPosition={maintainVisibleContentPosition} ref={arg0.ref} />;
});
let ReanimatedRexport = ReanimatedRexport_mod;
let closure_15 = ReanimatedRexport.createAnimatedComponent(_mod6530.FlashList);
ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((ref) => {
  let tmp2;
  let tmp3;
  const maintainVisibleContentPosition = react2;
  const cResult = maintainVisibleContentPosition.c(6);
  if (cResult[0] !== ref) {
    const tmp6 = _objectWithoutProperties(ref, closure_4);
    cResult[0] = ref;
    cResult[1] = tmp6;
    cResult[2] = ref.ref;
    tmp3 = ref;
    tmp2 = tmp6;
  } else {
    tmp2 = cResult[1];
    tmp3 = cResult[2];
  }
  if (cResult[3] === tmp2) {
    let tmp7;
    if (cResult[4] === tmp3) {
      tmp7 = cResult[5];
    }
    return tmp7;
  }
  const merged = Object.assign(tmp2);
  const tmp9 = <closure_15 maintainVisibleContentPosition={maintainVisibleContentPosition} ref={tmp3} />;
  cResult[3] = tmp2;
  cResult[4] = tmp3;
  cResult[5] = tmp9;
  tmp7 = tmp9;
}) : ((ref) => {
  let maintainVisibleContentPosition;
  maintainVisibleContentPosition = { maintainVisibleContentPosition, ref: ref.ref };
  const merged = Object.assign(Object.assign(ref, Object.assign({ ref: 0 })));
  return <closure_15 maintainVisibleContentPosition={maintainVisibleContentPosition} ref={arg0.ref} />;
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let preventNativeModalDismiss;
  let ref;
  let tmp4;
  let tmp5;
  const maintainVisibleContentPosition = react2;
  const cResult = maintainVisibleContentPosition.c(6);
  if (cResult[0] !== arg0) {
    ({ preventNativeModalDismiss, ref } = arg0);
    const tmp8 = _objectWithoutProperties(arg0, closure_5);
    cResult[0] = arg0;
    cResult[1] = tmp8;
    cResult[2] = ref;
    tmp5 = ref;
    tmp4 = tmp8;
  } else {
    tmp4 = cResult[1];
    tmp5 = cResult[2];
  }
  if (cResult[3] === tmp4) {
    let tmp9;
    if (cResult[4] === tmp5) {
      tmp9 = cResult[5];
    }
    return tmp9;
  }
  const FlashList = _mod6530.FlashList;
  const merged = Object.assign(tmp4);
  const tmp11 = <FlashList ref={tmp5} maintainVisibleContentPosition={maintainVisibleContentPosition} masonry />;
  cResult[3] = tmp4;
  cResult[4] = tmp5;
  cResult[5] = tmp11;
  tmp9 = tmp11;
}) : ((ref) => {
  let maintainVisibleContentPosition;
  const merged = Object.assign(ref, Object.assign({ preventNativeModalDismiss: 0, ref: 0 }));
  maintainVisibleContentPosition = { ref, maintainVisibleContentPosition, masonry: true };
  const FlashList = _mod6530.FlashList;
  const merged1 = Object.assign(merged);
  return <FlashList ref={arg0.ref} maintainVisibleContentPosition={maintainVisibleContentPosition} masonry />;
});
ReanimatedRexport = ReanimatedRexport_mod;
let closure_16 = ReanimatedRexport.createAnimatedComponent(_mod6530.FlashList);
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let preventNativeModalDismiss;
  let ref;
  let refreshControl;
  let tmp3;
  let tmp4;
  let tmp5;
  let tmp6;
  const maintainVisibleContentPosition = react2;
  const cResult = maintainVisibleContentPosition.c(9);
  if (cResult[0] !== arg0) {
    ({ preventNativeModalDismiss, refreshControl, ref } = arg0);
    const tmp9 = _objectWithoutProperties(arg0, closure_6);
    cResult[0] = arg0;
    cResult[1] = preventNativeModalDismiss;
    cResult[2] = tmp9;
    cResult[3] = ref;
    cResult[4] = refreshControl;
    tmp6 = refreshControl;
    tmp5 = ref;
    tmp4 = tmp9;
    tmp3 = preventNativeModalDismiss;
  } else {
    tmp3 = cResult[1];
    tmp4 = cResult[2];
    tmp5 = cResult[3];
    tmp6 = cResult[4];
  }
  const tmp10 = closure_14(tmp3, tmp6);
  if (cResult[5] === tmp10) {
    if (cResult[6] === tmp4) {
      let tmp11;
      if (cResult[7] === tmp5) {
        tmp11 = cResult[8];
      }
      return tmp11;
    }
  }
  BottomSheetFlashListDefault;
  const merged = Object.assign(tmp4);
  const tmp14 = <tmp12 ref={tmp5} maintainVisibleContentPosition={maintainVisibleContentPosition} refreshControl={tmp10} />;
  cResult[5] = tmp10;
  cResult[6] = tmp4;
  cResult[7] = tmp5;
  cResult[8] = tmp14;
  tmp11 = tmp14;
}) : ((arg0) => {
  let maintainVisibleContentPosition;
  let preventNativeModalDismiss;
  let ref;
  let refreshControl;
  let tmp2;
  ({ preventNativeModalDismiss, refreshControl, ref } = arg0);
  const merged = Object.assign(arg0, Object.assign({ preventNativeModalDismiss: 0, refreshControl: 0, ref: 0 }));
  maintainVisibleContentPosition = { ref, maintainVisibleContentPosition, refreshControl: tmp2 };
  tmp2 = closure_14(preventNativeModalDismiss, refreshControl);
  BottomSheetFlashListDefault;
  const merged1 = Object.assign(merged);
  return <tmp3 ref={ref} maintainVisibleContentPosition={maintainVisibleContentPosition} refreshControl={tmp2} />;
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let preventNativeModalDismiss;
  let ref;
  let refreshControl;
  let tmp4;
  let tmp5;
  let tmp6;
  let tmp7;
  const maintainVisibleContentPosition = react2;
  const cResult = maintainVisibleContentPosition.c(9);
  if (cResult[0] !== arg0) {
    ({ preventNativeModalDismiss, refreshControl, ref } = arg0);
    const tmp10 = _objectWithoutProperties(arg0, closure_7);
    cResult[0] = arg0;
    cResult[1] = preventNativeModalDismiss;
    cResult[2] = tmp10;
    cResult[3] = ref;
    cResult[4] = refreshControl;
    tmp7 = refreshControl;
    tmp6 = ref;
    tmp5 = tmp10;
    tmp4 = preventNativeModalDismiss;
  } else {
    tmp4 = cResult[1];
    tmp5 = cResult[2];
    tmp6 = cResult[3];
    tmp7 = cResult[4];
  }
  const tmp11 = closure_14(tmp4, tmp7);
  if (cResult[5] === tmp11) {
    if (cResult[6] === tmp5) {
      let tmp12;
      if (cResult[7] === tmp6) {
        tmp12 = cResult[8];
      }
      return tmp12;
    }
  }
  const merged = Object.assign(tmp5);
  const tmp14 = <closure_16 ref={tmp6} maintainVisibleContentPosition={maintainVisibleContentPosition} masonry renderScrollComponent={BottomSheetModal.BottomSheetScrollView} refreshControl={tmp11} />;
  cResult[5] = tmp11;
  cResult[6] = tmp5;
  cResult[7] = tmp6;
  cResult[8] = tmp14;
  tmp12 = tmp14;
}) : ((arg0) => {
  let maintainVisibleContentPosition;
  let preventNativeModalDismiss;
  let ref;
  let refreshControl;
  let tmp2;
  ({ preventNativeModalDismiss, refreshControl, ref } = arg0);
  const merged = Object.assign(arg0, Object.assign({ preventNativeModalDismiss: 0, refreshControl: 0, ref: 0 }));
  maintainVisibleContentPosition = { ref, maintainVisibleContentPosition, masonry: true, renderScrollComponent: BottomSheetModal.BottomSheetScrollView, refreshControl: tmp2 };
  tmp2 = closure_14(preventNativeModalDismiss, refreshControl);
  const merged1 = Object.assign(merged);
  return <closure_16 ref={ref} maintainVisibleContentPosition={maintainVisibleContentPosition} masonry renderScrollComponent={BottomSheetModal.BottomSheetScrollView} refreshControl={tmp2} />;
});
const result = size.fileFinishedImporting("../discord_common/js/packages/flash-list/index.js");
for (const key10085 in _mod6530) {
  let tmp8 = key10085;
  exports[key10085] = _mod6530[key10085];
  continue;
}
const FlashList_export = tmp2;

export { defaultMVCPConfig };
export { FlashList_export as FlashList };
export const AnimatedFlashList = tmp3;
export const MasonryFlashList = tmp4;
export const BottomSheetFlashList = tmp5;
export const BottomSheetMasonryFlashList = tmp6;
