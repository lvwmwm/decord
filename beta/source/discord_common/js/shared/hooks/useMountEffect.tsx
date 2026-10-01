// Module ID: 5299
// Function ID: 5300
// Name: react
// Dependencies: [19, 2]
// Exports: default, useMountLayoutEffect, useUnmountEffect

// Module 5299 (react)
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("../discord_common/js/shared/hooks/useMountEffect.tsx");

export default function useMountEffect(set) {
  let closure_0 = react.useRef(set);
  const effect = react.useEffect(() => ref.current(), []);
};
export const useMountLayoutEffect = function useMountLayoutEffect(set) {
  let closure_0 = react.useRef(set);
  const layoutEffect = react.useLayoutEffect(() => ref.current(), []);
};
export const useUnmountEffect = function useUnmountEffect(callback) {
  let closure_0 = callback;
  let closure_1 = react.useRef(callback);
  const effect = react.useEffect(() => {
    closure_1.current = current;
  });
  const effect1 = react.useEffect(() => {
    let ref;
    return () => {
      ref.current();
    };
  }, []);
};
