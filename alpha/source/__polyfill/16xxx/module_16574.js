// Module ID: 16574
// Function ID: 16575
// Dependencies: [19, 16556, 16575, 21]
// Exports: default

// Module 16574
import react from "react" /* 19 */;
import module_16556_mod from "module_16556" /* 16556 */;
import module_16575_mod from "module_16575" /* 16575 */;
import Fragment from "Fragment" /* 21 */;

let closure_0;

let tmp4;
let tmp6;
if (react) {
  const __esModule = react.__esModule;
}
let module_16556 = module_16556_mod;
if (!module_16556) {
  const obj = { default: module_16556 };
  tmp4 = obj;
} else {
  tmp4 = module_16556;
}
module_16556 = tmp4;
let module_16575 = module_16575_mod;
if (!module_16575) {
  let obj2 = { default: module_16575 };
  tmp6 = obj2;
} else {
  tmp6 = module_16575;
}
module_16575 = tmp6;

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
