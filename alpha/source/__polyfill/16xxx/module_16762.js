// Module ID: 16762
// Function ID: 16763
// Dependencies: [19, 16744, 16763, 21]
// Exports: default

// Module 16762
import react from "react" /* 19 */;
import module_16744_mod from "module_16744" /* 16744 */;
import module_16763_mod from "module_16763" /* 16763 */;
import Fragment from "Fragment" /* 21 */;

let closure_0;

let tmp4;
let tmp6;
if (react) {
  const __esModule = react.__esModule;
}
let module_16744 = module_16744_mod;
if (!module_16744) {
  const obj = { default: module_16744 };
  tmp4 = obj;
} else {
  tmp4 = module_16744;
}
module_16744 = tmp4;
let module_16763 = module_16763_mod;
if (!module_16763) {
  let obj2 = { default: module_16763 };
  tmp6 = obj2;
} else {
  tmp6 = module_16763;
}
module_16763 = tmp6;

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
