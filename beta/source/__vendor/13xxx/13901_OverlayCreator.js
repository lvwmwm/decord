// Module ID: 13901
// Function ID: 13902
// Name: OverlayCreator
// Dependencies: [19, 17, 13902, 13903, 21]
// Exports: default

// Module 13901 (OverlayCreator)
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import module_13902_mod from "module_13902" /* 13902 */;
import module_13903_mod from "module_13903" /* 13903 */;
import Fragment from "Fragment" /* 21 */;

let tmp4;
let tmp6;
if (react) {
  const __esModule = react.__esModule;
}
let module_13902 = module_13902_mod;
if (!module_13902) {
  let obj = { default: module_13902 };
  tmp4 = obj;
} else {
  tmp4 = module_13902;
}
module_13902 = tmp4;
let module_13903 = module_13903_mod;
if (!module_13903) {
  tmp6 = { default: module_13903 };
  const obj2 = { default: module_13903 };
} else {
  tmp6 = module_13903;
}
module_13903 = tmp6;

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
            items[1] = <module_13903.default emitter={emitter} />;
            return <View style={{ flex: 1 }}>{items}</View>;
          };
        }
      }
    };
    return obj;
  };
};
