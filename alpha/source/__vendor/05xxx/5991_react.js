// Module ID: 5991
// Function ID: 5992
// Name: react
// Dependencies: [19, 21]

// Module 5991 (react)
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;

let _window;
let map;
({ Fragment: _window, jsx: map } = Fragment);
const context = react.createContext((children) => {
  const obj = { children: children.children };
  return map(React, obj);
});

export const GHContext = context;
export const RNSScreensRefContext = react.createContext(null);
