// Module ID: 14492
// Function ID: 14493
// Name: OverlayCreator
// Dependencies: [19, 17, 14493, 14494, 21]
// Exports: default

// Module 14492 (OverlayCreator)
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import module_14493_mod from "module_14493" /* 14493 */;
import module_14494_mod from "module_14494" /* 14494 */;
import Fragment from "Fragment" /* 21 */;

let tmp4;
let tmp6;
if (react) {
  const __esModule = react.__esModule;
}
let module_14493 = module_14493_mod;
if (!module_14493) {
  let obj = { default: module_14493 };
  tmp4 = obj;
} else {
  tmp4 = module_14493;
}
module_14493 = tmp4;
let module_14494 = module_14494_mod;
if (!module_14494) {
  tmp6 = { default: module_14494 };
  const obj2 = { default: module_14494 };
} else {
  tmp6 = module_14494;
}
module_14494 = tmp6;

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
            items[1] = <module_14494.default emitter={emitter} />;
            return <View style={{ flex: 1 }}>{items}</View>;
          };
        }
      }
    };
    return obj;
  };
};
