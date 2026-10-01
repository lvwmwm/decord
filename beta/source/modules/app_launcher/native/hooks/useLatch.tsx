// Module ID: 11641
// Function ID: 11642
// Name: react
// Dependencies: [19, 2]
// Exports: default

// Module 11641 (react)
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/app_launcher/native/hooks/useLatch.tsx");

export default function useLatch(arg0) {
  let items;
  let closure_0 = arg0;
  let closure_1 = react.useRef(false);
  const obj = {
    setLatch: react.useCallback((current) => {
      ref.current = current;
      return current;
    }, []),
    tryCallback: react.useCallback(() => {
      if (ref.current) {
        tmp.current = false;
        closure_0();
      }
    }, items)
  };
  items = [arg0];
  return obj;
};
