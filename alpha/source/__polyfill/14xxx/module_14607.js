// Module ID: 14607
// Function ID: 14608
// Dependencies: [19, 14589, 14608, 21]
// Exports: default

// Module 14607
import react from "react" /* 19 */;
import module_14589_mod from "module_14589" /* 14589 */;
import module_14608_mod from "module_14608" /* 14608 */;
import Fragment from "Fragment" /* 21 */;

let closure_0;

let tmp4;
let tmp6;
if (react) {
  const __esModule = react.__esModule;
}
let module_14589 = module_14589_mod;
if (!module_14589) {
  const obj = { default: module_14589 };
  tmp4 = obj;
} else {
  tmp4 = module_14589;
}
module_14589 = tmp4;
let module_14608 = module_14608_mod;
if (!module_14608) {
  let obj2 = { default: module_14608 };
  tmp6 = obj2;
} else {
  tmp6 = module_14608;
}
module_14608 = tmp6;

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
