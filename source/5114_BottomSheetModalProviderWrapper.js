// Module ID: 5114
// Function ID: 43519
// Name: BottomSheetModalProviderWrapper
// Dependencies: []
// Exports: default

// Module 5114 (BottomSheetModalProviderWrapper)
const _module = require(dependencyMap[0]);
({ useCallback: closure_2, useMemo: closure_3, useRef: closure_4 } = _module);
importDefault(dependencyMap[0]);
const _module1 = require(dependencyMap[1]);
({ jsx: closure_5, jsxs: closure_6 } = _module1);

export default function BottomSheetModalProviderWrapper(children) {
  let obj = require(dependencyMap[2]);
  const sharedValue = obj.useSharedValue(require(dependencyMap[3]).INITIAL_CONTAINER_HEIGHT);
  const require = sharedValue;
  const sharedValue1 = require(dependencyMap[2]).useSharedValue(require(dependencyMap[3]).INITIAL_CONTAINER_OFFSET);
  const dependencyMap = sharedValue1;
  const tmp3 = callback(() => "bottom-sheet-portal-" + sharedValue(sharedValue1[4]).id(), []);
  const callback = tmp4([]);
  const tmp4 = tmp3((key, current) => {
    const sharedValue = key;
    current = closure_3.current;
    const substr = current.slice();
    const findIndexResult = substr.findIndex((key) => key.key === key);
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
  const tmp5 = tmp3((arg0) => {
    const sharedValue = arg0;
    let current = closure_3.current;
    const substr = current.slice();
    const findIndexResult = substr.findIndex((key) => key.key === key);
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
  const tmp6 = tmp3((arg0) => {
    const sharedValue = arg0;
    let current = closure_3.current;
    const substr = current.slice();
    const findIndexResult = substr.findIndex((key) => key.key === key);
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
  const tmp7 = tmp3((arg0) => {
    const sharedValue = arg0;
    let current = closure_3.current;
    if (arg0) {
      let found = current.find((key) => key.key === key);
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
  const tmp8 = tmp3(() => {
    const current = closure_3.current;
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
  const items = [tmp7, tmp8];
  const items1 = [tmp3, sharedValue, sharedValue1, tmp4, tmp5, tmp6];
  const obj2 = require(dependencyMap[2]);
  const tmp9 = callback(() => ({ dismiss: tmp7, dismissAll: tmp8 }), items);
  obj = { value: tmp9 };
  obj = { value: callback(() => ({ hostName: tmp3, containerHeight: sharedValue, containerOffset: sharedValue1, mountSheet: tmp4, unmountSheet: tmp5, willUnmountSheet: tmp6 }), items1) };
  const items2 = [tmp5(require(dependencyMap[7]).BottomSheetHostingContainer, { containerOffset: sharedValue1, containerHeight: sharedValue }), tmp5(require(dependencyMap[8]).PortalProvider, { rootHostName: tmp3, children: children.children })];
  obj.children = items2;
  obj.children = tmp6(require(dependencyMap[6]).BottomSheetModalInternalProvider, obj);
  return tmp5(require(dependencyMap[6]).BottomSheetModalProvider, obj);
};
