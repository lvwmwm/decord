// Module ID: 8390
// Function ID: 66771
// Name: useModal
// Dependencies: []
// Exports: useModal

// Module 8390 (useModal)
let Platform;
const _module = require(dependencyMap[0]);
({ useCallback: closure_0, useEffect: closure_1, useRef: closure_2 } = _module);
const _module1 = require(dependencyMap[1]);
({ NativeEventEmitter: closure_3, Platform } = _module1);
const _module2 = require(dependencyMap[2]);
const nativeModule = _module2.getNativeModule();

export const useModal = function useModal(props) {
  props = props.props;
  const id = props.id;
  const callback = callback(false);
  const tmp = function usePrevious(props) {
    const tmp = ref();
    const id = tmp;
    id(() => {
      tmp.current = arg0;
    });
    return tmp.current;
  }(props);
  const items = [id, props];
  const tmp2 = props((id) => {
    if (id.id === id) {
      closure_2.current = true;
      let date = id.date;
      if (props.onConfirm) {
        const _Date = Date;
        date = new Date(date);
        props.onConfirm(date);
      }
    }
  }, items);
  let closure_4 = tmp2;
  const items1 = [id, props];
  const tmp3 = props((id) => {
    id = undefined;
    if (null != id) {
      id = id.id;
    }
    if (id === id) {
      closure_2.current = true;
      if (props.onCancel) {
        props.onCancel();
      }
    }
  }, items1);
  const items2 = [tmp3, tmp2, tmp, props];
  id(() => {
    let open = !tmp2;
    if (!!props.modal) {
      open = props.open;
    }
    if (open) {
      open = undefined;
      if (null != tmp) {
        open = tmp.open;
      }
      open = !open;
    }
    if (open) {
      closure_2.current = false;
      tmp2.openPicker(props, tmp2, tmp3);
    }
  }, items2);
  const items3 = [tmp, props];
  id(() => {
    let current = !props.modal;
    if (!current) {
      current = props.open;
    }
    if (!current) {
      let open;
      if (null != tmp) {
        open = tmp.open;
      }
      current = !open;
    }
    if (!current) {
      current = ref.current;
    }
    if (!current) {
      ref.current = true;
      tmp2.closePicker();
    }
  }, items3);
  const items4 = [tmp3, tmp2];
  id(() => {
    const obj = new tmp(tmp2);
    const props = obj;
    obj.addListener("onConfirm", tmp2);
    obj.addListener("onCancel", tmp3);
    return () => {
      obj.removeAllListeners("onConfirm");
      obj.removeAllListeners("onCancel");
    };
  }, items4);
};
