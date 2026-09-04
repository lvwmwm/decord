// Module ID: 12091
// Function ID: 12092
// Name: useLatch
// Dependencies: [19, 2]
// Exports: default

// Module 12091 (useLatch)
import closure_0 from "noop" /* 19 */;

const result = require("set").fileFinishedImporting("modules/app_launcher/native/hooks/useLatch.tsx");

export default function useLatch(arg0) {
  const React = arg0;
  closure_1 = React.useRef(false);
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
