// Module ID: 15453
// Function ID: 15454
// Dependencies: [19, 15435, 15454, 21]
// Exports: default

// Module 15453
import react from "react" /* 19 */;
import module_15435_mod from "module_15435" /* 15435 */;
import module_15454_mod from "module_15454" /* 15454 */;
import Fragment from "Fragment" /* 21 */;

let closure_0;

let tmp4;
let tmp6;
if (react) {
  const __esModule = react.__esModule;
}
let module_15435 = module_15435_mod;
if (!module_15435) {
  const obj = { default: module_15435 };
  tmp4 = obj;
} else {
  tmp4 = module_15435;
}
module_15435 = tmp4;
let module_15454 = module_15454_mod;
if (!module_15454) {
  let obj2 = { default: module_15454 };
  tmp6 = obj2;
} else {
  tmp6 = module_15454;
}
module_15454 = tmp6;

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
