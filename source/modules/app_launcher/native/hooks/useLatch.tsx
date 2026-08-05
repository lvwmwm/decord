// Module ID: 11431
// Function ID: 11432
// Name: useLatch
// Dependencies: [19, 2]
// Exports: default

// Module 11431 (useLatch)
import noop from "noop";

const result = require("set").fileFinishedImporting("modules/app_launcher/native/hooks/useLatch.tsx");

export default function useLatch(arg0) {
  const React = arg0;
  let closure_1 = React.useRef(false);
  const items = [arg0];
  return {
    setLatch: React.useCallback((current) => {
      closure_1.current = current;
      return current;
    }, []),
    tryCallback: React.useCallback(() => {
      if (ref.current) {
        tmp.current = false;
        callback();
      }
    }, items)
  };
};
