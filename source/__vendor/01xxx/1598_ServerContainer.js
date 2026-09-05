// Module ID: 1598
// Function ID: 1599
// Name: ServerContainer
// Dependencies: [19, 21, 1599, 1486]

// Module 1598 (ServerContainer)
import importAllResult from "noop" /* 19 */;
import { jsx } from "jsxProd" /* 21 */;

const require = arg1;

export const ServerContainer = importAllResult.forwardRef(function ServerContainer(arg0, fn) {
  let obj;
  ({ children, location: _location } = arg0);
  const effect = importAllResult.useEffect(() => {
    console.error("'ServerContainer' should only be used on the server with 'react-dom/server' for SSR.");
  }, []);
  obj = {};
  if (fn) {
    obj = { getCurrentOptions: null };
    obj[0] = function getCurrentOptions() {
      return obj.options;
    };
    if (typeof fn === "function") {
      fn(obj);
    } else {
      fn.current = obj;
    }
  }
  obj = { value: { location: _location }, children: jsx(obj(1486).CurrentRenderContext.Provider, { value: obj, children }) };
  return jsx(obj(1599).ServerContext.Provider, { value: { location: _location }, children: jsx(obj(1486).CurrentRenderContext.Provider, { value: obj, children }) });
});
