// Module ID: 13414
// Function ID: 102982
// Name: result7
// Dependencies: [31, 13396, 13415, 33]
// Exports: default

// Module 13414 (result7)
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import jsxProd from "jsxProd";

_interopRequireDefault(require("map"));

export default function _default() {
  return () => {
    let closure_0 = outer1_0.default();
    obj = {
      onCommand(type) {
        if ("storybook" === type.type) {
          closure_0.emit("storybook", type.payload);
        }
      },
      features: obj
    };
    obj = {
      storybookSwitcher(arg0) {
        let closure_0 = arg0;
        return (arg0) => {
          let closure_0 = arg0;
          return function StorybookSwitcherContainer(arg0) {
            return <outer4_1.default storybookUi={closure_0} emitter={closure_0}><closure_0 {...Object.assign({}, arg0)} /></outer4_1.default>;
          };
        };
      }
    };
    return obj;
  };
};
