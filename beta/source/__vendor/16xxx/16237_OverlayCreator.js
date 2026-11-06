// Module ID: 16237
// Function ID: 16238
// Name: OverlayCreator
// Dependencies: [19, 17, 16238, 16239, 21]
// Exports: default

// Module 16237 (OverlayCreator)
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import module_16238_mod from "module_16238" /* 16238 */;
import module_16239_mod from "module_16239" /* 16239 */;
import Fragment from "Fragment" /* 21 */;

let tmp4;
let tmp6;
if (react) {
  const __esModule = react.__esModule;
}
let module_16238 = module_16238_mod;
if (!module_16238) {
  let obj = { default: module_16238 };
  tmp4 = obj;
} else {
  tmp4 = module_16238;
}
module_16238 = tmp4;
let module_16239 = module_16239_mod;
if (!module_16239) {
  tmp6 = { default: module_16239 };
  const obj2 = { default: module_16239 };
} else {
  tmp6 = module_16239;
}
module_16239 = tmp6;

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
            items[1] = <module_16239.default emitter={emitter} />;
            return <View style={{ flex: 1 }}>{items}</View>;
          };
        }
      }
    };
    return obj;
  };
};
