// Module ID: 11311
// Function ID: 88026
// Name: useLatch
// Dependencies: [31, 2]
// Exports: default

// Module 11311 (useLatch)
import result from "result";

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
        ref.current = false;
        callback();
      }
    }, items)
  };
};
