// Module ID: 5540
// Function ID: 47078
// Name: MaskedView
// Dependencies: []
// Exports: default

// Module 5540 (MaskedView)
let closure_0 = [null];
let closure_2 = importDefault(dependencyMap[0]);
importAll(dependencyMap[1]);
const UIManager = arg1(dependencyMap[2]).UIManager;
const jsx = arg1(dependencyMap[3]).jsx;
let closure_1 = arg1(dependencyMap[4]).default;
let closure_4 = null != UIManager.getViewManagerConfig("RNCMaskedView");

export default function MaskedView(children) {
  children = children.children;
  let tmp2 = children;
  if (closure_4) {
    tmp2 = children;
    if (closure_1) {
      const _Object = Object;
      const obj = { children };
      tmp2 = <closure_1 {...Object.assign({}, tmp, obj)} />;
    }
  }
  return tmp2;
};
