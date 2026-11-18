// Module ID: 5385
// Function ID: 5386
// Name: react
// Dependencies: [19, 2]
// Exports: default, useMountLayoutEffect, useUnmountEffect

// Module 5385 (react)
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("../discord_common/js/shared/hooks/useMountEffect.tsx");

export default function useMountEffect(map) {
  let closure_0 = react.useRef(map);
  const effect = react.useEffect(() => ref.current(), []);
};
export function useMountLayoutEffect(map) {
  let closure_0 = react.useRef(map);
  const layoutEffect = react.useLayoutEffect(() => ref.current(), []);
}
export function useUnmountEffect(callback) {
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
}
