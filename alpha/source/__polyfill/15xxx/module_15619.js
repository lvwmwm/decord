// Module ID: 15619
// Function ID: 15620
// Dependencies: [19, 15601, 15620, 21]
// Exports: default

// Module 15619
import react from "react" /* 19 */;
import module_15601_mod from "module_15601" /* 15601 */;
import module_15620_mod from "module_15620" /* 15620 */;
import Fragment from "Fragment" /* 21 */;

let closure_0;

let tmp4;
let tmp6;
if (react) {
  const __esModule = react.__esModule;
}
let module_15601 = module_15601_mod;
if (!module_15601) {
  const obj = { default: module_15601 };
  tmp4 = obj;
} else {
  tmp4 = module_15601;
}
module_15601 = tmp4;
let module_15620 = module_15620_mod;
if (!module_15620) {
  let obj2 = { default: module_15620 };
  tmp6 = obj2;
} else {
  tmp6 = module_15620;
}
module_15620 = tmp6;

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
