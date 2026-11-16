// Module ID: 16880
// Function ID: 16881
// Dependencies: [19, 16862, 16881, 21]
// Exports: default

// Module 16880
import react from "react" /* 19 */;
import module_16862_mod from "module_16862" /* 16862 */;
import module_16881_mod from "module_16881" /* 16881 */;
import Fragment from "Fragment" /* 21 */;

let closure_0;

let tmp4;
let tmp6;
if (react) {
  const __esModule = react.__esModule;
}
let module_16862 = module_16862_mod;
if (!module_16862) {
  const obj = { default: module_16862 };
  tmp4 = obj;
} else {
  tmp4 = module_16862;
}
module_16862 = tmp4;
let module_16881 = module_16881_mod;
if (!module_16881) {
  let obj2 = { default: module_16881 };
  tmp6 = obj2;
} else {
  tmp6 = module_16881;
}
module_16881 = tmp6;

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
