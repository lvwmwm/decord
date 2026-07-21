// Module ID: 4556
// Function ID: 39899
// Name: useMountEffect
// Dependencies: []
// Exports: default, useMountLayoutEffect, useUnmountEffect

// Module 4556 (useMountEffect)
let closure_0 = importAll(dependencyMap[0]);
const result = arg1(dependencyMap[1]).fileFinishedImporting("../discord_common/js/shared/hooks/useMountEffect.tsx");

export default function useMountEffect(arg0) {
  const React = React.useRef(arg0);
  const effect = React.useEffect(() => ref.current(), []);
};
export const useMountLayoutEffect = function useMountLayoutEffect(arg0) {
  const React = React.useRef(arg0);
  const layoutEffect = React.useLayoutEffect(() => ref.current(), []);
};
export const useUnmountEffect = function useUnmountEffect(arg0) {
  const React = arg0;
  let closure_1 = React.useRef(arg0);
  const effect = React.useEffect(() => {
    closure_1.current = arg0;
  });
  const effect1 = React.useEffect(() => () => {
    ref.current();
  }, []);
};
