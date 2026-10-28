// Module ID: 15940
// Function ID: 15941
// Dependencies: [19, 15922, 15941, 21]
// Exports: default

// Module 15940
import react from "react" /* 19 */;
import module_15922_mod from "module_15922" /* 15922 */;
import module_15941_mod from "module_15941" /* 15941 */;
import Fragment from "Fragment" /* 21 */;

let closure_0;

let tmp4;
let tmp6;
if (react) {
  const __esModule = react.__esModule;
}
let module_15922 = module_15922_mod;
if (!module_15922) {
  const obj = { default: module_15922 };
  tmp4 = obj;
} else {
  tmp4 = module_15922;
}
module_15922 = tmp4;
let module_15941 = module_15941_mod;
if (!module_15941) {
  let obj2 = { default: module_15941 };
  tmp6 = obj2;
} else {
  tmp6 = module_15941;
}
module_15941 = tmp6;

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
