// Module ID: 1545
// Function ID: 17563
// Dependencies: []

// Module 1545
const importAllResult = importAll(dependencyMap[0]);
const jsx = arg1(dependencyMap[1]).jsx;

export default importAllResult.forwardRef(function ServerContainer(arg0, arg1) {
  let _location;
  let children;
  ({ children, location: _location } = arg0);
  const effect = importAllResult.useEffect(() => {
    console.error("'ServerContainer' should only be used on the server with 'react-dom/server' for SSR.");
  }, []);
  let obj = {};
  arg1 = obj;
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
  obj.children = jsx(arg1(dependencyMap[3]).CurrentRenderContext.Provider, { value: obj, children });
  return jsx(importDefault(dependencyMap[2]).Provider, obj);
});
