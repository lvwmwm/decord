// Module ID: 11272
// Function ID: 87736
// Name: useLatch
// Dependencies: []
// Exports: default

// Module 11272 (useLatch)
let closure_0 = importAll(dependencyMap[0]);
const result = arg1(dependencyMap[1]).fileFinishedImporting("modules/app_launcher/native/hooks/useLatch.tsx");

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
        arg0();
      }
    }, items)
  };
};
