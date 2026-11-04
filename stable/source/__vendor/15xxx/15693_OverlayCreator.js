// Module ID: 15693
// Function ID: 15694
// Name: OverlayCreator
// Dependencies: [19, 17, 15694, 15695, 21]
// Exports: default

// Module 15693 (OverlayCreator)
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import module_15694_mod from "module_15694" /* 15694 */;
import module_15695_mod from "module_15695" /* 15695 */;
import Fragment from "Fragment" /* 21 */;

let tmp4;
let tmp6;
if (react) {
  const __esModule = react.__esModule;
}
let module_15694 = module_15694_mod;
if (!module_15694) {
  let obj = { default: module_15694 };
  tmp4 = obj;
} else {
  tmp4 = module_15694;
}
module_15694 = tmp4;
let module_15695 = module_15695_mod;
if (!module_15695) {
  tmp6 = { default: module_15695 };
  const obj2 = { default: module_15695 };
} else {
  tmp6 = module_15695;
}
module_15695 = tmp6;

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
            items[1] = <module_15695.default emitter={emitter} />;
            return <View style={{ flex: 1 }}>{items}</View>;
          };
        }
      }
    };
    return obj;
  };
};
