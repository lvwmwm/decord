// Module ID: 3990
// Function ID: 33116
// Name: View
// Dependencies: []

// Module 3990 (View)
const jsx = require(dependencyMap[1]).jsx;
let closure_1 = importDefault(dependencyMap[2]).createAnimatedComponent(importDefault(dependencyMap[3]));
let View = require(dependencyMap[0]).forwardRef((entering) => {
  const obj = {};
  const merged = Object.assign(entering);
  obj["hasEnteringAnimation"] = null != entering.entering;
  obj["ref"] = arg1;
  return <closure_1 {...obj} />;
});
View.displayName = "REAWorkaroundView";
const _module = require(dependencyMap[4]);
if (!_module.isFabric()) {
  View = importDefault(dependencyMap[2]).View;
}
const _module1 = require(dependencyMap[5]);
const result = _module1.fileFinishedImporting("modules/reanimated/native/REAWorkaroundView.tsx");

export default View;
