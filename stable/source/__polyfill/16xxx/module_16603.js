// Module ID: 16603
// Function ID: 16604
// Dependencies: [19, 16585, 16604, 21]
// Exports: default

// Module 16603
import react from "react" /* 19 */;
import module_16585_mod from "module_16585" /* 16585 */;
import module_16604_mod from "module_16604" /* 16604 */;
import Fragment from "Fragment" /* 21 */;

let closure_0;

let tmp4;
let tmp6;
if (react) {
  const __esModule = react.__esModule;
}
let module_16585 = module_16585_mod;
if (!module_16585) {
  const obj = { default: module_16585 };
  tmp4 = obj;
} else {
  tmp4 = module_16585;
}
module_16585 = tmp4;
let module_16604 = module_16604_mod;
if (!module_16604) {
  let obj2 = { default: module_16604 };
  tmp6 = obj2;
} else {
  tmp6 = module_16604;
}
module_16604 = tmp6;

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
