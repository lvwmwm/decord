// Module ID: 11884
// Function ID: 11885
// Name: react
// Dependencies: [19, 2]
// Exports: default

// Module 11884 (react)
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/chat_input/native/useDebouncedSetChatInputState.tsx");

export default function useDebouncedSetChatInputState(arg0, arg1) {
  let items1;
  let items2;
  let closure_0 = arg0;
  let closure_1 = arg1;
  let closure_2 = react.useRef(null);
  const callback = react.useCallback(() => {
    if (null != ref.current) {
      const _clearTimeout = clearTimeout;
      clearTimeout(ref.current);
      ref.current = null;
    }
  }, []);
  const items = [callback];
  const effect = react.useEffect(() => callback, items);
  const obj = {
    setData: react.useCallback((arg0) => {
      closure_0 = arg0;
      let tmp = callback();
      closure_2.current = setTimeout(() => {
        const tmp = focused((focused) => {
          let tmp2 = focused;
          if (focused.focused === focused.focused) {
            tmp2 = tmp;
            if (focused.text === focused.text) {
              tmp2 = tmp;
              if (focused.selectionStart === focused.selectionStart) {
                tmp2 = tmp;
                if (focused.selectionEnd === focused.selectionEnd) {
                  tmp2 = focused;
                }
              }
            }
          }
          return tmp2;
        });
      }, closure_1);
    }, items1),
    setDataImmediate: react.useCallback((arg0) => {
      callback();
      closure_0(arg0);
    }, items2)
  };
  items1 = [callback, arg0, arg1];
  items2 = [callback, arg0];
  return obj;
};
