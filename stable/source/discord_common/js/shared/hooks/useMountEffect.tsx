// Module ID: 5236
// Function ID: 5237
// Name: hooks/useMountEffect
// Dependencies: [19, 2]
// Exports: default, useMountLayoutEffect, useUnmountEffect

// Module 5236 (hooks/useMountEffect)
import noop from "module_19" /* 19 */;

const size = fn(2);
const result = size.fileFinishedImporting("../discord_common/js/shared/hooks/useMountEffect.tsx");

export default function useMountEffect(set) {
  noop.useRef(set);
  const effect = noop.useEffect(() => ref.current(), []);
};
export const useMountLayoutEffect = function useMountLayoutEffect(set) {
  noop.useRef(set);
  const layoutEffect = noop.useLayoutEffect(() => ref.current(), []);
};
export const useUnmountEffect = function useUnmountEffect(callback) {
  const current = callback;
  closure_1 = noop.useRef(callback);
  const effect = noop.useEffect(() => {
    closure_1.current = current;
  });
  const effect1 = noop.useEffect(() => () => {
    ref.current();
  }, []);
};
