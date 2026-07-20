// Module ID: 13231
// Function ID: 100421
// Dependencies: []
// Exports: default

// Module 13231
const result = _interopRequireDefault(require(dependencyMap[0]));
let closure_0 = _interopRequireDefault(require(dependencyMap[1]));
let closure_1 = _interopRequireDefault(require(dependencyMap[2]));
let closure_2 = require(dependencyMap[3]);

export default function _default() {
  return () => {
    closure_0 = closure_0.default();
    let obj = {
      onCommand(type) {
        if ("storybook" === type.type) {
          closure_0.emit("storybook", type.payload);
        }
      },
      features: obj
    };
    obj = {
      storybookSwitcher(arg0) {
        let closure_0 = arg0;
        return (arg0) => function StorybookSwitcherContainer(arg0) {
          return <mod.default storybookUi={arg0} emitter={arg0}><arg0 {...Object.assign({}, arg0)} /></mod.default>;
        };
      }
    };
    return obj;
  };
};
