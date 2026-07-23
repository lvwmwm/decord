// Module ID: 13342
// Function ID: 102489
// Name: result3
// Dependencies: [31, 27, 13343, 13344, 33]
// Exports: default

// Module 13342 (result3)
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import jsxProd from "jsxProd";

_interopRequireDefault(require("map"));

export default function OverlayCreator() {
  return function overlay() {
    let closure_0 = outer1_1.default();
    obj = {
      onCommand(type) {
        if ("overlay" === type.type) {
          closure_0.emit("overlay", type.payload);
        }
      },
      features: obj
    };
    obj = {
      overlay(arg0) {
        let closure_0 = arg0;
        return () => {
          if (arguments.length > 0) {
            if (undefined !== arguments[0]) {
              const first = arguments[0];
            }
            let obj = {};
            obj = { flex: 1 };
            obj.style = obj;
            const _Object = Object;
            const items = [<closure_0 {...Object.assign({}, {})} />, ];
            obj = { emitter: closure_0 };
            items[1] = <outer3_2.default emitter={closure_0} />;
            obj.children = items;
            return <outer3_0.View emitter={closure_0} />;
          }
        };
      }
    };
    return obj;
  };
};
