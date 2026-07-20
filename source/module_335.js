// Module ID: 335
// Function ID: 4969
// Dependencies: []

// Module 335
importAll(dependencyMap[0]);
const jsx = arg1(dependencyMap[1]).jsx;
let prop;
if (null != global) {
  prop = global.nativeFabricUIManager;
}
let closure_3 = importDefault(dependencyMap[3]).create({ container: { display: "contents" } });

export default null != prop ? function LayoutConformance(arg0) {
  return jsx(importDefault(dependencyMap[2]), Object.assign({}, arg0, { style: container.container }));
} : function UnimplementedLayoutConformance(children) {
  return children.children;
};
