// Module ID: 5967
// Function ID: 5968
// Name: react
// Dependencies: [19]
// Exports: getNamedContext

// Module 5967 (react)
import react from "react" /* 19 */;

let __react_navigation__elements_contexts = "__react_navigation__elements_contexts";
__react_navigation__elements_contexts = globalThis.__react_navigation__elements_contexts;
let _globalThis = globalThis;
if (__react_navigation__elements_contexts == null) {
  const _Map = Map;
  const self = this;
  const self2 = this;
  __react_navigation__elements_contexts = new Map();
}
_globalThis.__react_navigation__elements_contexts = __react_navigation__elements_contexts;

export const getNamedContext = function getNamedContext(FrameContext, arg1) {
  const obj = globalThis[__react_navigation__elements_contexts];
  let value = obj.get(FrameContext);
  const tmp = __react_navigation__elements_contexts;
  if (!value) {
    const context = react.createContext(arg1);
    context.displayName = FrameContext;
    const _globalThis = globalThis;
    const obj2 = globalThis[tmp];
    const result = obj2.set(FrameContext, context);
    value = context;
  }
  return value;
};
