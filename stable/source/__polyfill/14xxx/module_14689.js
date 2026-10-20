// Module ID: 14689
// Function ID: 14690
// Dependencies: [19, 14671, 14690, 21]
// Exports: default

// Module 14689
import react from "react" /* 19 */;
import module_14671_mod from "module_14671" /* 14671 */;
import module_14690_mod from "module_14690" /* 14690 */;
import Fragment from "Fragment" /* 21 */;

let closure_0;

let tmp4;
let tmp6;
if (react) {
  const __esModule = react.__esModule;
}
let module_14671 = module_14671_mod;
if (!module_14671) {
  const obj = { default: module_14671 };
  tmp4 = obj;
} else {
  tmp4 = module_14671;
}
module_14671 = tmp4;
let module_14690 = module_14690_mod;
if (!module_14690) {
  let obj2 = { default: module_14690 };
  tmp6 = obj2;
} else {
  tmp6 = module_14690;
}
module_14690 = tmp6;

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
