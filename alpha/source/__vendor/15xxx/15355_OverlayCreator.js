// Module ID: 15355
// Function ID: 15356
// Name: OverlayCreator
// Dependencies: [19, 17, 15356, 15357, 21]
// Exports: default

// Module 15355 (OverlayCreator)
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import module_15356_mod from "module_15356" /* 15356 */;
import module_15357_mod from "module_15357" /* 15357 */;
import Fragment from "Fragment" /* 21 */;

let tmp4;
let tmp6;
if (react) {
  const __esModule = react.__esModule;
}
let module_15356 = module_15356_mod;
if (!module_15356) {
  let obj = { default: module_15356 };
  tmp4 = obj;
} else {
  tmp4 = module_15356;
}
module_15356 = tmp4;
let module_15357 = module_15357_mod;
if (!module_15357) {
  tmp6 = { default: module_15357 };
  const obj2 = { default: module_15357 };
} else {
  tmp6 = module_15357;
}
module_15357 = tmp6;

export default function OverlayCreator() {
  let RN;
  return function overlay() {
    let closure_0 = closure_1.default();
    let obj = {
      onCommand(type) {
        if ("overlay" === type.type) {
          closure_0.emit("overlay", type.payload);
        }
      },
      features: {
        overlay(emitter) {
          return () => {
            let obj = arg0;
            if (arg0 === undefined) {
              obj = {};
            }
            const jsxs = React.jsxs;
            const View = RN.View;
            const jsx = React.jsx;
            const merged = Object.assign(obj);
            const items = [<emitter />, ];
            items[1] = <module_15357.default emitter={emitter} />;
            return <View style={{ flex: 1 }}>{items}</View>;
          };
        }
      }
    };
    return obj;
  };
};
