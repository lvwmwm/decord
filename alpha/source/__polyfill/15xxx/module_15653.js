// Module ID: 15653
// Function ID: 15654
// Dependencies: [19, 15635, 15654, 21]
// Exports: default

// Module 15653
import react from "react" /* 19 */;
import module_15635_mod from "module_15635" /* 15635 */;
import module_15654_mod from "module_15654" /* 15654 */;
import Fragment from "Fragment" /* 21 */;

let closure_0;

let tmp4;
let tmp6;
if (react) {
  const __esModule = react.__esModule;
}
let module_15635 = module_15635_mod;
if (!module_15635) {
  const obj = { default: module_15635 };
  tmp4 = obj;
} else {
  tmp4 = module_15635;
}
module_15635 = tmp4;
let module_15654 = module_15654_mod;
if (!module_15654) {
  let obj2 = { default: module_15654 };
  tmp6 = obj2;
} else {
  tmp6 = module_15654;
}
module_15654 = tmp6;

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
