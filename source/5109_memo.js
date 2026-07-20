// Module ID: 5109
// Function ID: 43445
// Name: memo
// Dependencies: [325386240, 494206976, 520093696, 553648128, 150994944, 100663316, 4026531860, 1313297, 1313536, 1313792]

// Module 5109 (memo)
let forwardRef;
let memo;
let closure_3 = ["DARK", "alignItems", "children", "status", "prototype", "ix", "default", "text", "kind", "length", "st", "a"];
let closure_4 = importDefault(dependencyMap[0]);
let closure_5 = importDefault(dependencyMap[1]);
({ useCallback: closure_6, useImperativeHandle: closure_7, useMemo: closure_8, useRef: closure_9, useState: closure_10, createElement: closure_11, forwardRef, memo } = arg1(dependencyMap[2]));
let closure_12 = importDefault(dependencyMap[2]);
const jsx = arg1(dependencyMap[3]).jsx;
let closure_14 = { mount: false, data: undefined };
const memoResult = memo(forwardRef(function BottomSheetModalComponent(name) {
  let containerHeight;
  let containerOffset;
  let hostName;
  let mountSheet;
  name = name.name;
  const importDefault = name;
  let DEFAULT_STACK_BEHAVIOR = name.stackBehavior;
  if (undefined === DEFAULT_STACK_BEHAVIOR) {
    DEFAULT_STACK_BEHAVIOR = arg1(dependencyMap[4]).DEFAULT_STACK_BEHAVIOR;
  }
  const dependencyMap = DEFAULT_STACK_BEHAVIOR;
  let DEFAULT_ENABLE_DISMISS_ON_CLOSE = name.enableDismissOnClose;
  if (undefined === DEFAULT_ENABLE_DISMISS_ON_CLOSE) {
    DEFAULT_ENABLE_DISMISS_ON_CLOSE = arg1(dependencyMap[4]).DEFAULT_ENABLE_DISMISS_ON_CLOSE;
  }
  let closure_3 = DEFAULT_ENABLE_DISMISS_ON_CLOSE;
  const onDismiss = name.onDismiss;
  const callback = onDismiss;
  const onAnimate = name.onAnimate;
  const callback2 = onAnimate;
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
  const animateOnMount = name.animateOnMount;
  let Fragment = name.containerComponent;
  if (undefined === Fragment) {
    Fragment = React.Fragment;
  }
  const onChange = name.onChange;
  const children = name.children;
  const tmp9 = callback(mountSheet(closure_14), 2);
  const first = tmp9[0];
  const mount = first.mount;
  const callback3 = tmp9[1];
  let obj = arg1(dependencyMap[5]);
  const bottomSheetModalInternal = obj.useBottomSheetModalInternal();
  ({ hostName, mountSheet } = bottomSheetModalInternal);
  const unmountSheet = bottomSheetModalInternal.unmountSheet;
  const willUnmountSheet = bottomSheetModalInternal.willUnmountSheet;
  const React = willUnmountSheet;
  ({ containerHeight, containerOffset } = bottomSheetModalInternal);
  let obj1 = arg1(dependencyMap[6]);
  const removePortal = obj1.usePortal(hostName).removePortal;
  const jsx = removePortal;
  const tmp13 = callback3(null);
  closure_14 = tmp13;
  let num4 = -1;
  if (!(undefined === animateOnMount || animateOnMount)) {
    num4 = num3;
  }
  let closure_15 = callback3(num4);
  let closure_16 = callback3(null);
  let closure_17 = callback3(-1);
  let closure_18 = callback3(false);
  let closure_19 = callback3(false);
  const tmp14 = callback3(false);
  tmp14.current = mount;
  const items = [name];
  const tmp15 = onChange(() => {
    let combined = name;
    if (!name) {
      const _HermesInternal = HermesInternal;
      combined = "bottom-sheet-modal-" + arg1(DEFAULT_STACK_BEHAVIOR[7]).id();
      const obj = arg1(DEFAULT_STACK_BEHAVIOR[7]);
    }
    return combined;
  }, items);
  function resetVariables() {
    let obj = arg1(DEFAULT_STACK_BEHAVIOR[8]);
    obj = { component: closure_15.name, method: resetVariables.name };
    obj.print(obj);
    closure_15.current = -1;
    closure_17.current = -1;
    closure_18.current = false;
    tmp14.current = false;
    closure_19.current = false;
  }
  const tmp16 = num3(resetVariables, []);
  const items1 = [tmp15, tmp16, unmountSheet, removePortal, onDismiss];
  const tmp17 = num3(function unmount(ref) {
    tmp16();
    unmountSheet(tmp15);
    removePortal(tmp15);
    if (tmp14.current) {
      callback(tmp13);
    }
    if (onDismiss) {
      onDismiss();
    }
  }, items1);
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
    const arg1 = arg0;
    const animationFrame = requestAnimationFrame(() => {
      callback({ mount: true, data: arg0 });
      callback2(closure_21, arg0, closure_2);
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
        willUnmountSheet(tmp15);
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
  const tmp12 = callback3;
  const tmp8 = callback2(name, closure_3);
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
      tmp14.current = false;
      closure_19.current = true;
      if (closure_18.current) {
        const tmp13 = tmp17();
      } else {
        willUnmountSheet(tmp15);
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
  tmp5(arg1, () => ({ snapToIndex: closure_24, snapToPosition: closure_25, expand: closure_26, collapse: closure_27, close: closure_28, forceClose: closure_29, dismiss: closure_31, present: closure_30, minimize: closure_32, restore: closure_33 }));
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
      tmp33 = <children {...obj2} />;
    }
    obj.children = unmountSheet(importDefault(dependencyMap[9]), merged, tmp33);
    obj.children = <></>;
    tmp25Result = tmp25(arg1(dependencyMap[6]).Portal, obj, tmp15);
    const tmp28 = unmountSheet;
    const tmp30 = importDefault(dependencyMap[9]);
  }
  return tmp25Result;
}));
memoResult.displayName = "BottomSheetModal";

export default memoResult;
