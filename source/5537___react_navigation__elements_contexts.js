// Module ID: 5537
// Function ID: 47105
// Name: __react_navigation__elements_contexts
// Dependencies: [31]
// Exports: default

// Module 5537 (__react_navigation__elements_contexts)
import result from "result";

let __react_navigation__elements_contexts = global.__react_navigation__elements_contexts;
if (null == __react_navigation__elements_contexts) {
  const _Map = Map;
  __react_navigation__elements_contexts = new Map();
}
global.__react_navigation__elements_contexts = __react_navigation__elements_contexts;

export default function getNamedContext(displayName) {
  const __react_navigation__elements_contexts = global.__react_navigation__elements_contexts;
  let value = __react_navigation__elements_contexts.get(displayName);
  if (!value) {
    const context = React.createContext(arg1);
    context.displayName = displayName;
    const __react_navigation__elements_contexts2 = global.__react_navigation__elements_contexts;
    const result = __react_navigation__elements_contexts2.set(displayName, context);
    value = context;
  }
  return value;
};
