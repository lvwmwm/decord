// Module ID: 1545
// Function ID: 17569
// Dependencies: [31, 33, 1546, 1459]

// Module 1545
import importAllResult from "result";
import { jsx } from "jsxProd";

const require = arg1;

export default importAllResult.forwardRef(function ServerContainer(arg0, arg1) {
  let _location;
  let children;
  ({ children, location: _location } = arg0);
  const effect = importAllResult.useEffect(() => {
    console.error("'ServerContainer' should only be used on the server with 'react-dom/server' for SSR.");
  }, []);
  let obj = {};
  if (arg1) {
    obj = {
      getCurrentOptions() {
          return obj.options;
        }
    };
    if ("function" === typeof arg1) {
      arg1(obj);
    } else {
      arg1.current = obj;
    }
  }
  obj = { value: { location: _location } };
  obj.children = jsx(obj(1459).CurrentRenderContext.Provider, { value: obj, children });
  return jsx(importDefault(1546).Provider, { value: { location: _location } });
});
