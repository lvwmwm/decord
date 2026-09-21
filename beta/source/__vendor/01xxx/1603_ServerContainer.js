// Module ID: 1603
// Function ID: 1604
// Name: ServerContainer
// Dependencies: [19, 21, 1604, 1491]

// Module 1603 (ServerContainer)
import BaseNavigationContainer from "BaseNavigationContainer" /* 1491 */;
import ServerContext from "ServerContext" /* 1604 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;

export const ServerContainer = noop.forwardRef(function ServerContainer(arg0, fn) {
  ({ children, location: _location } = arg0);
  const effect = noop.useEffect(() => {
    console.error("'ServerContainer' should only be used on the server with 'react-dom/server' for SSR.");
  }, []);
  value = {};
  if (fn) {
    const obj2 = {
      getCurrentOptions() {
          return obj.options;
        }
    };
    if (typeof fn === "function") {
      fn(obj2);
    } else {
      fn.current = obj2;
    }
  }
  return jsx(ServerContext.ServerContext.Provider, { value: { location: _location }, children: jsx(BaseNavigationContainer.CurrentRenderContext.Provider, { value, children }) });
});
