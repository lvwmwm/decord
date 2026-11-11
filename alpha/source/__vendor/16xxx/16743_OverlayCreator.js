// Module ID: 16743
// Function ID: 16744
// Name: OverlayCreator
// Dependencies: [19, 17, 16744, 16745, 21]
// Exports: default

// Module 16743 (OverlayCreator)
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import module_16744_mod from "module_16744" /* 16744 */;
import module_16745_mod from "module_16745" /* 16745 */;
import Fragment from "Fragment" /* 21 */;

let tmp4;
let tmp6;
if (react) {
  const __esModule = react.__esModule;
}
let module_16744 = module_16744_mod;
if (!module_16744) {
  let obj = { default: module_16744 };
  tmp4 = obj;
} else {
  tmp4 = module_16744;
}
module_16744 = tmp4;
let module_16745 = module_16745_mod;
if (!module_16745) {
  tmp6 = { default: module_16745 };
  const obj2 = { default: module_16745 };
} else {
  tmp6 = module_16745;
}
module_16745 = tmp6;

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
            items[1] = <module_16745.default emitter={emitter} />;
            return <View style={{ flex: 1 }}>{items}</View>;
          };
        }
      }
    };
    return obj;
  };
};
