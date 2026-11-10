// Module ID: 16601
// Function ID: 16602
// Dependencies: [19, 16583, 16602, 21]
// Exports: default

// Module 16601
import react from "react" /* 19 */;
import module_16583_mod from "module_16583" /* 16583 */;
import module_16602_mod from "module_16602" /* 16602 */;
import Fragment from "Fragment" /* 21 */;

let closure_0;

let tmp4;
let tmp6;
if (react) {
  const __esModule = react.__esModule;
}
let module_16583 = module_16583_mod;
if (!module_16583) {
  const obj = { default: module_16583 };
  tmp4 = obj;
} else {
  tmp4 = module_16583;
}
module_16583 = tmp4;
let module_16602 = module_16602_mod;
if (!module_16602) {
  let obj2 = { default: module_16602 };
  tmp6 = obj2;
} else {
  tmp6 = module_16602;
}
module_16602 = tmp6;

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
