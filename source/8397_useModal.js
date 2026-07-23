// Module ID: 8397
// Function ID: 66820
// Name: useModal
// Dependencies: [31, 27, 8395]
// Exports: useModal

// Module 8397 (useModal)
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import getNativeComponent from "getNativeComponent";

let Platform;
let closure_0;
let closure_1;
let closure_2;
let closure_3;
({ useCallback: closure_0, useEffect: closure_1, useRef: closure_2 } = result);
({ NativeEventEmitter: closure_3, Platform } = get_ActivityIndicator);
getNativeComponent = getNativeComponent.getNativeModule();

export const useModal = function useModal(props) {
  props = props.props;
  let id = props.id;
  callback = callback(false);
  let tmp = (function usePrevious(props) {
    let closure_0 = props;
    const tmp = ref();
    const id = tmp;
    id(() => {
      closure_1.current = closure_0;
    });
    return tmp.current;
  })(props);
  let closure_3 = tmp;
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
  const getNativeComponent = tmp2;
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
  let closure_5 = tmp3;
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
      tmp2.openPicker(props, tmp2, closure_5);
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
    const obj = new closure_3(closure_4);
    obj.addListener("onConfirm", closure_4);
    obj.addListener("onCancel", closure_5);
    return () => {
      obj.removeAllListeners("onConfirm");
      obj.removeAllListeners("onCancel");
    };
  }, items4);
};
