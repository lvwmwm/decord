// Module ID: 13920
// Function ID: 13921
// Dependencies: [19, 13902, 13921, 21]
// Exports: default

// Module 13920
import react from "react" /* 19 */;
import module_13902_mod from "module_13902" /* 13902 */;
import module_13921_mod from "module_13921" /* 13921 */;
import Fragment from "Fragment" /* 21 */;

let closure_0;

let tmp4;
let tmp6;
if (react) {
  const __esModule = react.__esModule;
}
let module_13902 = module_13902_mod;
if (!module_13902) {
  const obj = { default: module_13902 };
  tmp4 = obj;
} else {
  tmp4 = module_13902;
}
module_13902 = tmp4;
let module_13921 = module_13921_mod;
if (!module_13921) {
  let obj2 = { default: module_13921 };
  tmp6 = obj2;
} else {
  tmp6 = module_13921;
}
module_13921 = tmp6;

export default () => () => {
  closure_0 = closure_0.default();
  return {
    onCommand(type) {
      if ("storybook" === type.type) {
        closure_0.emit("storybook", type.payload);
      }
    },
    features: {
      storybookSwitcher(arg0) {
        closure_0 = arg0;
        return (arg0) => {
          closure_0 = arg0;
          return function StorybookSwitcherContainer(arg0) {
            const jsx = React.jsx;
            const jsx2 = React.jsx;
            const obj2 = {};
            const merged = Object.assign(arg0);
            return <_default storybookUi={emitter} emitter={emitter}>{jsx2(emitter, obj2)}</_default>;
          };
        };
      }
    }
  };
};
