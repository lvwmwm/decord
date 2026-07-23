// Module ID: 5334
// Function ID: 45882
// Name: memo
// Dependencies: [57, 29, 31, 33, 5335, 5194, 4001, 5336, 5206, 5191]

// Module 5334 (memo)
import _slicedToArray from "_slicedToArray";
import _objectWithoutProperties from "_objectWithoutProperties";
import result from "result";
import closure_12 from "result";
import { jsx } from "jsxProd";

let closure_10;
let closure_11;
let closure_6;
let closure_7;
let closure_8;
let closure_9;
let forwardRef;
let memo;
const require = arg1;
let closure_3 = ["name", "stackBehavior", "enableDismissOnClose", "onDismiss", "onAnimate", "index", "snapPoints", "enablePanDownToClose", "animateOnMount", "containerComponent", "onChange", "children"];
({ useCallback: closure_6, useImperativeHandle: closure_7, useMemo: closure_8, useRef: closure_9, useState: closure_10, createElement: closure_11, forwardRef, memo } = result);
let closure_14 = { mount: false, data: undefined };
const memoResult = memo(forwardRef(function BottomSheetModalComponent(name) {
  let containerHeight;
  let containerOffset;
  let hostName;
  let mountSheet;
  const _require = arg1;
  name = name.name;
  let DEFAULT_STACK_BEHAVIOR = name.stackBehavior;
  if (undefined === DEFAULT_STACK_BEHAVIOR) {
    DEFAULT_STACK_BEHAVIOR = _require(DEFAULT_STACK_BEHAVIOR[4]).DEFAULT_STACK_BEHAVIOR;
  }
  let DEFAULT_ENABLE_DISMISS_ON_CLOSE = name.enableDismissOnClose;
  if (undefined === DEFAULT_ENABLE_DISMISS_ON_CLOSE) {
    DEFAULT_ENABLE_DISMISS_ON_CLOSE = _require(DEFAULT_STACK_BEHAVIOR[4]).DEFAULT_ENABLE_DISMISS_ON_CLOSE;
  }
  const onDismiss = name.onDismiss;
  const onAnimate = name.onAnimate;
  const index = name.index;
  let num3 = 0;
  if (undefined !== index) {
    num3 = index;
  }
  const enablePanDownToClose = name.enablePanDownToClose;
  let tmp5 = undefined === enablePanDownToClose;
  if (!tmp5) {
    tmp5 = enablePanDownToClose;
  }
  const callback = tmp5;
  const animateOnMount = name.animateOnMount;
  let Fragment = name.containerComponent;
  if (undefined === Fragment) {
    Fragment = willUnmountSheet.Fragment;
  }
  const onChange = name.onChange;
  const children = name.children;
  const tmp9 = onDismiss(mountSheet(closure_14), 2);
  const first = tmp9[0];
  const mount = first.mount;
  const callback2 = tmp9[1];
  let obj = _require(DEFAULT_STACK_BEHAVIOR[5]);
  const bottomSheetModalInternal = obj.useBottomSheetModalInternal();
  ({ hostName, mountSheet } = bottomSheetModalInternal);
  const unmountSheet = bottomSheetModalInternal.unmountSheet;
  willUnmountSheet = bottomSheetModalInternal.willUnmountSheet;
  ({ containerHeight, containerOffset } = bottomSheetModalInternal);
  let obj1 = _require(DEFAULT_STACK_BEHAVIOR[6]);
  const removePortal = obj1.usePortal(hostName).removePortal;
  let tmp13 = callback2(null);
  closure_14 = tmp13;
  let num4 = -1;
  if (!(undefined === animateOnMount || animateOnMount)) {
    num4 = num3;
  }
  let closure_15 = callback2(num4);
  let closure_16 = callback2(null);
  let closure_17 = callback2(-1);
  let closure_18 = callback2(false);
  let closure_19 = callback2(false);
  const tmp14 = callback2(false);
  let closure_20 = tmp14;
  tmp14.current = mount;
  const items = [name];
  const tmp15 = onChange(() => {
    let combined = name;
    if (!name) {
      const _HermesInternal = HermesInternal;
      combined = "bottom-sheet-modal-" + callback(DEFAULT_STACK_BEHAVIOR[7]).id();
      const obj = callback(DEFAULT_STACK_BEHAVIOR[7]);
    }
    return combined;
  }, items);
  let closure_21 = tmp15;
  function resetVariables() {
    let obj = callback(DEFAULT_STACK_BEHAVIOR[8]);
    obj = { component: closure_15.name, method: resetVariables.name };
    obj.print(obj);
    closure_15.current = -1;
    closure_17.current = -1;
    closure_18.current = false;
    closure_20.current = false;
    closure_19.current = false;
  }
  const tmp16 = num3(resetVariables, []);
  let closure_22 = tmp16;
  const items1 = [tmp15, tmp16, unmountSheet, removePortal, onDismiss];
  const tmp17 = num3(function unmount(ref) {
    tmp16();
    unmountSheet(closure_21);
    removePortal(closure_21);
    if (tmp14.current) {
      callback2(closure_14);
    }
    if (onDismiss) {
      onDismiss();
    }
  }, items1);
  let closure_23 = tmp17;
  let closure_24 = num3(() => {
    if (!closure_18.current) {
      const length = arguments.length;
      const _Array = Array;
      const array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      const current = tmp13.current;
      if (null != current) {
        const snapToIndex = current.snapToIndex;
        snapToIndex.apply(current, array);
      }
    }
  }, []);
  let closure_25 = num3(() => {
    if (!closure_18.current) {
      const length = arguments.length;
      const _Array = Array;
      const array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      const current = tmp13.current;
      if (null != current) {
        const snapToPosition = current.snapToPosition;
        snapToPosition.apply(current, array);
      }
    }
  }, []);
  let closure_26 = num3(() => {
    if (!closure_18.current) {
      const length = arguments.length;
      const _Array = Array;
      const array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      const current = tmp13.current;
      if (null != current) {
        const expand = current.expand;
        expand.apply(current, array);
      }
    }
  }, []);
  let closure_27 = num3(() => {
    if (!closure_18.current) {
      const length = arguments.length;
      const _Array = Array;
      const array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      const current = tmp13.current;
      if (null != current) {
        const collapse = current.collapse;
        collapse.apply(current, array);
      }
    }
  }, []);
  let closure_28 = num3(() => {
    if (!closure_18.current) {
      const length = arguments.length;
      const _Array = Array;
      const array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      const current = tmp13.current;
      if (null != current) {
        const close = current.close;
        close.apply(current, array);
      }
    }
  }, []);
  let closure_29 = num3(() => {
    if (!closure_18.current) {
      const length = arguments.length;
      const _Array = Array;
      const array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      const current = tmp13.current;
      if (null != current) {
        const forceClose = current.forceClose;
        forceClose.apply(current, array);
      }
    }
  }, []);
  const items2 = [tmp15, DEFAULT_STACK_BEHAVIOR, mountSheet];
  let closure_30 = num3(function handlePresent(arg0) {
    let closure_0 = arg0;
    const animationFrame = requestAnimationFrame(() => {
      outer1_9({ mount: true, data: closure_0 });
      outer1_10(outer1_21, closure_0, outer1_2);
    });
  }, items2);
  const items3 = [willUnmountSheet, tmp17, tmp15, tmp5];
  let closure_31 = num3(function handleDismiss(arg0) {
    let tmp2 = -1 !== closure_15.current;
    if (!tmp2) {
      tmp2 = false !== closure_18.current;
    }
    if (!tmp2) {
      tmp2 = tmp;
    }
    if (tmp2) {
      if (tmp) {
        willUnmountSheet(closure_21);
        closure_19.current = true;
        const current = tmp13.current;
        if (null != current) {
          current.forceClose(arg0);
        }
      } else if (closure_18.current) {
        tmp17();
      }
    }
  }, items3);
  const items4 = [num3];
  let closure_32 = num3(function handleMinimize() {
    if (!closure_18.current) {
      closure_18.current = true;
      if (-1 === closure_15.current) {
        closure_17.current = num3;
      } else {
        closure_17.current = closure_15.current;
      }
      const current = tmp13.current;
      if (null != current) {
        current.close();
      }
    }
  }, items4);
  let closure_33 = num3(function handleRestore() {
    let current = closure_18.current;
    if (current) {
      current = !ref3.current;
    }
    if (current) {
      closure_18.current = false;
      const current2 = tmp13.current;
      if (null != current2) {
        current2.snapToIndex(ref2.current);
      }
    }
  }, []);
  const items5 = [tmp15, tmp17, willUnmountSheet];
  const tmp12 = callback2;
  const tmp8 = onAnimate(name, DEFAULT_ENABLE_DISMISS_ON_CLOSE);
  const tmp19 = num3(function handlePortalRender(arg0) {
    if (tmp14.current) {
      arg0();
    }
  }, []);
  const items6 = [onChange];
  const items7 = [onAnimate];
  const tmp18 = num3(function handlePortalOnUnmount() {
    let tmp = -1 === closure_15.current;
    if (tmp) {
      tmp = false === closure_18.current;
    }
    if (!tmp) {
      closure_20.current = false;
      closure_19.current = true;
      if (closure_18.current) {
        const tmp13 = tmp17();
      } else {
        willUnmountSheet(closure_21);
        const current = tmp13.current;
        if (null != current) {
          current.close();
        }
      }
    }
  }, items5);
  const items8 = [DEFAULT_ENABLE_DISMISS_ON_CLOSE, tmp17];
  const tmp20 = num3(function handleBottomSheetOnChange(current) {
    closure_15.current = current;
    closure_16.current = null;
    if (onChange) {
      onChange(current, arg1, arg2);
    }
  }, items6);
  const tmp21 = num3((arg0, current) => {
    closure_16.current = current;
    if (onAnimate) {
      onAnimate(arg0, current, arg2, arg3, arg4);
    }
  }, items7);
  callback(arg1, () => ({ snapToIndex: closure_24, snapToPosition: closure_25, expand: closure_26, collapse: closure_27, close: closure_28, forceClose: closure_29, dismiss: closure_31, present: closure_30, minimize: closure_32, restore: closure_33 }));
  let tmp25Result = null;
  if (mount) {
    obj = { name: tmp15, hostName, handleOnMount: tmp19, handleOnUpdate: tmp19, handleOnUnmount: tmp18 };
    obj = {};
    const _Object = Object;
    obj1 = { ref: tmp13, key: tmp15, index: num3, snapPoints: name.snapPoints, enablePanDownToClose: tmp5, animateOnMount: tmp6, containerHeight, containerOffset, onChange: tmp20, onClose: tmp22, onAnimate: tmp21, $modal: true };
    let tmp33 = children;
    const merged = Object.assign({}, tmp8, obj1);
    if ("function" === typeof children) {
      const obj2 = { data: first.data };
      tmp33 = removePortal(children, obj2);
    }
    obj.children = unmountSheet(name(DEFAULT_STACK_BEHAVIOR[9]), merged, tmp33);
    obj.children = removePortal(Fragment, obj, tmp15);
    tmp25Result = tmp25(_require(DEFAULT_STACK_BEHAVIOR[6]).Portal, obj, tmp15);
    const tmp28 = unmountSheet;
    const tmp30 = name(DEFAULT_STACK_BEHAVIOR[9]);
  }
  return tmp25Result;
}));
memoResult.displayName = "BottomSheetModal";

export default memoResult;
