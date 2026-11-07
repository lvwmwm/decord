// Module ID: 16564
// Function ID: 16565
// Dependencies: [19, 16546, 16565, 21]
// Exports: default

// Module 16564
import react from "react" /* 19 */;
import module_16546_mod from "module_16546" /* 16546 */;
import module_16565_mod from "module_16565" /* 16565 */;
import Fragment from "Fragment" /* 21 */;

let closure_0;

let tmp4;
let tmp6;
if (react) {
  const __esModule = react.__esModule;
}
let module_16546 = module_16546_mod;
if (!module_16546) {
  const obj = { default: module_16546 };
  tmp4 = obj;
} else {
  tmp4 = module_16546;
}
module_16546 = tmp4;
let module_16565 = module_16565_mod;
if (!module_16565) {
  let obj2 = { default: module_16565 };
  tmp6 = obj2;
} else {
  tmp6 = module_16565;
}
module_16565 = tmp6;

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
