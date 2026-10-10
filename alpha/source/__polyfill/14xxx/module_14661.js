// Module ID: 14661
// Function ID: 14662
// Dependencies: [19, 14643, 14662, 21]
// Exports: default

// Module 14661
import react from "react" /* 19 */;
import module_14643_mod from "module_14643" /* 14643 */;
import module_14662_mod from "module_14662" /* 14662 */;
import Fragment from "Fragment" /* 21 */;

let closure_0;

let tmp4;
let tmp6;
if (react) {
  const __esModule = react.__esModule;
}
let module_14643 = module_14643_mod;
if (!module_14643) {
  const obj = { default: module_14643 };
  tmp4 = obj;
} else {
  tmp4 = module_14643;
}
module_14643 = tmp4;
let module_14662 = module_14662_mod;
if (!module_14662) {
  let obj2 = { default: module_14662 };
  tmp6 = obj2;
} else {
  tmp6 = module_14662;
}
module_14662 = tmp6;

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
