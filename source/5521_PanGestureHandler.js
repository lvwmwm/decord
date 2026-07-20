// Module ID: 5521
// Function ID: 47002
// Name: PanGestureHandler
// Dependencies: []
// Exports: PanGestureHandler

// Module 5521 (PanGestureHandler)
let closure_3 = importAll(dependencyMap[0]);
const jsx = arg1(dependencyMap[1]).jsx;

export const PanGestureHandler = function PanGestureHandler(arg0) {
  const ref = React.useRef(null);
  const obj = { value: ref, children: jsx(arg1(dependencyMap[3]).PanGestureHandler, Object.assign({}, arg0, { ref })) };
  return jsx(importDefault(dependencyMap[2]).Provider, obj);
};
export const GestureHandlerRootView = arg1(dependencyMap[3]).GestureHandlerRootView;
export const GestureState = arg1(dependencyMap[3]).State;
