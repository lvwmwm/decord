// Module ID: 4560
// Function ID: 39947
// Name: useMountEffect
// Dependencies: [31, 2]
// Exports: default, useMountLayoutEffect, useUnmountEffect

// Module 4560 (useMountEffect)
import result from "result";

const result = require("set").fileFinishedImporting("../discord_common/js/shared/hooks/useMountEffect.tsx");

export default function useMountEffect(arg0) {
  React = React.useRef(arg0);
  const effect = React.useEffect(() => ref.current(), []);
};
export const useMountLayoutEffect = function useMountLayoutEffect(arg0) {
  React = React.useRef(arg0);
  const layoutEffect = React.useLayoutEffect(() => ref.current(), []);
};
export const useUnmountEffect = function useUnmountEffect(arg0) {
  const React = arg0;
  let closure_1 = React.useRef(arg0);
  const effect = React.useEffect(() => {
    closure_1.current = result;
  });
  const effect1 = React.useEffect(() => () => {
    outer1_1.current();
  }, []);
};
