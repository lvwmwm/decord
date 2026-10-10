// Module ID: 14642
// Function ID: 14643
// Name: OverlayCreator
// Dependencies: [19, 17, 14643, 14644, 21]
// Exports: default

// Module 14642 (OverlayCreator)
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import module_14643_mod from "module_14643" /* 14643 */;
import module_14644_mod from "module_14644" /* 14644 */;
import Fragment from "Fragment" /* 21 */;

let tmp4;
let tmp6;
if (react) {
  const __esModule = react.__esModule;
}
let module_14643 = module_14643_mod;
if (!module_14643) {
  let obj = { default: module_14643 };
  tmp4 = obj;
} else {
  tmp4 = module_14643;
}
module_14643 = tmp4;
let module_14644 = module_14644_mod;
if (!module_14644) {
  tmp6 = { default: module_14644 };
  const obj2 = { default: module_14644 };
} else {
  tmp6 = module_14644;
}
module_14644 = tmp6;

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
            items[1] = <module_14644.default emitter={emitter} />;
            return <View style={{ flex: 1 }}>{items}</View>;
          };
        }
      }
    };
    return obj;
  };
};
