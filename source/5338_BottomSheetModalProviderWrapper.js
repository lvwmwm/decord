// Module ID: 5338
// Function ID: 45908
// Name: BottomSheetModalProviderWrapper
// Dependencies: [31, 33, 1582, 5193, 5336, 5190, 5200, 5312, 4001]
// Exports: default

// Module 5338 (BottomSheetModalProviderWrapper)
import result from "result";
import "result";
import jsxProd from "jsxProd";

let closure_2;
let closure_3;
let closure_4;
let closure_5;
let closure_6;
({ useCallback: closure_2, useMemo: closure_3, useRef: closure_4 } = result);
({ jsx: closure_5, jsxs: closure_6 } = jsxProd);

export default function BottomSheetModalProviderWrapper(children) {
  let obj = sharedValue(sharedValue1[2]);
  sharedValue = obj.useSharedValue(sharedValue(sharedValue1[3]).INITIAL_CONTAINER_HEIGHT);
  sharedValue1 = sharedValue(sharedValue1[2]).useSharedValue(sharedValue(sharedValue1[3]).INITIAL_CONTAINER_OFFSET);
  const tmp3 = callback2(() => "bottom-sheet-portal-" + sharedValue(sharedValue1[4]).id(), []);
  const callback = tmp3;
  callback2 = callback3([]);
  let tmp4 = callback((key, current) => {
    let closure_0 = key;
    current = closure_3.current;
    const substr = current.slice();
    const findIndexResult = substr.findIndex((key) => key.key === closure_0);
    if (-1 === findIndexResult) {
      if (substr[substr.length - 1]) {
        if (!tmp3.willUnmount) {
          if (arg2 === sharedValue(sharedValue1[5]).MODAL_STACK_BEHAVIOR.replace) {
            let tmp12 = null == ref2;
            let obj2 = ref2;
            if (!tmp12) {
              const current2 = ref2.current;
              tmp12 = null == current2;
              obj2 = current2;
            }
            if (!tmp12) {
              obj2.dismiss();
            }
          } else if (arg2 === sharedValue(sharedValue1[5]).MODAL_STACK_BEHAVIOR.switch) {
            let tmp9 = null == ref;
            let obj = ref;
            if (!tmp9) {
              current = ref.current;
              tmp9 = null == current;
              obj = current;
            }
            if (!tmp9) {
              obj.minimize();
            }
          }
        }
      }
      if (-1 !== findIndexResult) {
        substr.splice(findIndexResult, 1);
        let tmp16 = null == current;
        if (!tmp16) {
          const current3 = current.current;
          tmp16 = null == current3;
          const obj3 = current3;
        }
        if (!tmp16) {
          obj3.restore();
        }
      }
      obj = { key, ref: current, willUnmount: false };
      substr.push(obj);
      closure_3.current = substr;
    }
  }, []);
  callback3 = tmp4;
  let tmp5 = callback((arg0) => {
    let closure_0 = arg0;
    let current = closure_3.current;
    const substr = current.slice();
    const findIndexResult = substr.findIndex((key) => key.key === closure_0);
    let tmp2 = findIndexResult === substr.length - 1;
    substr.splice(findIndexResult, 1);
    closure_3.current = substr;
    if (tmp2) {
      tmp2 = closure_3.current.length > 0;
    }
    if (tmp2) {
      tmp2 = tmp4;
    }
    if (tmp2) {
      tmp2 = !tmp4.willUnmount;
    }
    if (tmp2) {
      const ref = closure_3.current[closure_3.current.length - 1].ref;
      let tmp7 = null == ref;
      let obj = ref;
      if (!tmp7) {
        current = ref.current;
        tmp7 = null == current;
        obj = current;
      }
      if (!tmp7) {
        obj.restore();
      }
    }
  }, []);
  const callback4 = tmp5;
  const tmp6 = callback((arg0) => {
    let closure_0 = arg0;
    let current = closure_3.current;
    const substr = current.slice();
    const findIndexResult = substr.findIndex((key) => key.key === closure_0);
    let tmp2 = findIndexResult === substr.length - 1;
    if (-1 !== findIndexResult) {
      substr[findIndexResult].willUnmount = true;
    }
    if (tmp2) {
      tmp2 = substr.length > 1;
    }
    if (tmp2) {
      let tmp4 = null == ref;
      let obj = ref;
      if (!tmp4) {
        current = ref.current;
        tmp4 = null == current;
        obj = current;
      }
      if (!tmp4) {
        obj.restore();
      }
    }
    closure_3.current = substr;
  }, []);
  const callback5 = tmp6;
  let tmp7 = callback((arg0) => {
    let closure_0 = arg0;
    let current = closure_3.current;
    if (arg0) {
      let found = current.find((key) => key.key === closure_0);
    } else {
      found = current[tmp.current.length - 1];
    }
    let flag = !tmp3;
    if (!!found) {
      let tmp5 = null == ref;
      let obj = ref;
      if (!tmp5) {
        current = ref.current;
        tmp5 = null == current;
        obj = current;
      }
      flag = true;
      if (!tmp5) {
        obj.dismiss();
        flag = true;
      }
    }
    return flag;
  }, []);
  let closure_7 = tmp7;
  const tmp8 = callback(() => {
    let current = closure_3.current;
    const mapped = current.map((ref) => {
      let tmp = null == ref;
      let obj = ref;
      if (!tmp) {
        const current = ref.current;
        tmp = null == current;
        obj = current;
      }
      if (!tmp) {
        obj.dismiss();
      }
    });
  }, []);
  let closure_8 = tmp8;
  const items = [tmp7, tmp8];
  const items1 = [tmp3, sharedValue, sharedValue1, tmp4, tmp5, tmp6];
  let obj2 = sharedValue(sharedValue1[2]);
  let tmp9 = callback2(() => ({ dismiss: closure_7, dismissAll: closure_8 }), items);
  obj = { value: tmp9 };
  obj = { value: callback2(() => ({ hostName: closure_2, containerHeight: sharedValue, containerOffset: sharedValue1, mountSheet: closure_4, unmountSheet: closure_5, willUnmountSheet: closure_6 }), items1) };
  const items2 = [callback4(sharedValue(sharedValue1[7]).BottomSheetHostingContainer, { containerOffset: sharedValue1, containerHeight: sharedValue }), callback4(sharedValue(sharedValue1[8]).PortalProvider, { rootHostName: tmp3, children: children.children })];
  obj.children = items2;
  obj.children = callback5(sharedValue(sharedValue1[6]).BottomSheetModalInternalProvider, obj);
  return callback4(sharedValue(sharedValue1[6]).BottomSheetModalProvider, obj);
};
