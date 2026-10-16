// Module ID: 15374
// Function ID: 15375
// Dependencies: [19, 15356, 15375, 21]
// Exports: default

// Module 15374
import react from "react" /* 19 */;
import module_15356_mod from "module_15356" /* 15356 */;
import module_15375_mod from "module_15375" /* 15375 */;
import Fragment from "Fragment" /* 21 */;

let closure_0;

let tmp4;
let tmp6;
if (react) {
  const __esModule = react.__esModule;
}
let module_15356 = module_15356_mod;
if (!module_15356) {
  const obj = { default: module_15356 };
  tmp4 = obj;
} else {
  tmp4 = module_15356;
}
module_15356 = tmp4;
let module_15375 = module_15375_mod;
if (!module_15375) {
  let obj2 = { default: module_15375 };
  tmp6 = obj2;
} else {
  tmp6 = module_15375;
}
module_15375 = tmp6;

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
