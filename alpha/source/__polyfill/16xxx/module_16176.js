// Module ID: 16176
// Function ID: 16177
// Dependencies: [19, 16158, 16177, 21]
// Exports: default

// Module 16176
import react from "react" /* 19 */;
import module_16158_mod from "module_16158" /* 16158 */;
import module_16177_mod from "module_16177" /* 16177 */;
import Fragment from "Fragment" /* 21 */;

let closure_0;

let tmp4;
let tmp6;
if (react) {
  const __esModule = react.__esModule;
}
let module_16158 = module_16158_mod;
if (!module_16158) {
  const obj = { default: module_16158 };
  tmp4 = obj;
} else {
  tmp4 = module_16158;
}
module_16158 = tmp4;
let module_16177 = module_16177_mod;
if (!module_16177) {
  let obj2 = { default: module_16177 };
  tmp6 = obj2;
} else {
  tmp6 = module_16177;
}
module_16177 = tmp6;

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
