// Module ID: 15921
// Function ID: 15922
// Name: OverlayCreator
// Dependencies: [19, 17, 15922, 15923, 21]
// Exports: default

// Module 15921 (OverlayCreator)
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import module_15922_mod from "module_15922" /* 15922 */;
import module_15923_mod from "module_15923" /* 15923 */;
import Fragment from "Fragment" /* 21 */;

let tmp4;
let tmp6;
if (react) {
  const __esModule = react.__esModule;
}
let module_15922 = module_15922_mod;
if (!module_15922) {
  let obj = { default: module_15922 };
  tmp4 = obj;
} else {
  tmp4 = module_15922;
}
module_15922 = tmp4;
let module_15923 = module_15923_mod;
if (!module_15923) {
  tmp6 = { default: module_15923 };
  const obj2 = { default: module_15923 };
} else {
  tmp6 = module_15923;
}
module_15923 = tmp6;

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
            items[1] = <module_15923.default emitter={emitter} />;
            return <View style={{ flex: 1 }}>{items}</View>;
          };
        }
      }
    };
    return obj;
  };
};
