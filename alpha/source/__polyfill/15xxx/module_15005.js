// Module ID: 15005
// Function ID: 15006
// Dependencies: [19, 14987, 15006, 21]
// Exports: default

// Module 15005
import react from "react" /* 19 */;
import module_14987_mod from "module_14987" /* 14987 */;
import module_15006_mod from "module_15006" /* 15006 */;
import Fragment from "Fragment" /* 21 */;

let closure_0;

let tmp4;
let tmp6;
if (react) {
  const __esModule = react.__esModule;
}
let module_14987 = module_14987_mod;
if (!module_14987) {
  const obj = { default: module_14987 };
  tmp4 = obj;
} else {
  tmp4 = module_14987;
}
module_14987 = tmp4;
let module_15006 = module_15006_mod;
if (!module_15006) {
  let obj2 = { default: module_15006 };
  tmp6 = obj2;
} else {
  tmp6 = module_15006;
}
module_15006 = tmp6;

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
