// Module ID: 14192
// Function ID: 14193
// Dependencies: [19, 14174, 14193, 21]
// Exports: default

// Module 14192
import react from "react" /* 19 */;
import module_14174_mod from "module_14174" /* 14174 */;
import module_14193_mod from "module_14193" /* 14193 */;
import Fragment from "Fragment" /* 21 */;

let closure_0;

let tmp4;
let tmp6;
if (react) {
  const __esModule = react.__esModule;
}
let module_14174 = module_14174_mod;
if (!module_14174) {
  const obj = { default: module_14174 };
  tmp4 = obj;
} else {
  tmp4 = module_14174;
}
module_14174 = tmp4;
let module_14193 = module_14193_mod;
if (!module_14193) {
  let obj2 = { default: module_14193 };
  tmp6 = obj2;
} else {
  tmp6 = module_14193;
}
module_14193 = tmp6;

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
