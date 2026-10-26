// Module ID: 15658
// Function ID: 15659
// Name: OverlayCreator
// Dependencies: [19, 17, 15659, 15660, 21]
// Exports: default

// Module 15658 (OverlayCreator)
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import module_15659_mod from "module_15659" /* 15659 */;
import module_15660_mod from "module_15660" /* 15660 */;
import Fragment from "Fragment" /* 21 */;

let tmp4;
let tmp6;
if (react) {
  const __esModule = react.__esModule;
}
let module_15659 = module_15659_mod;
if (!module_15659) {
  let obj = { default: module_15659 };
  tmp4 = obj;
} else {
  tmp4 = module_15659;
}
module_15659 = tmp4;
let module_15660 = module_15660_mod;
if (!module_15660) {
  tmp6 = { default: module_15660 };
  const obj2 = { default: module_15660 };
} else {
  tmp6 = module_15660;
}
module_15660 = tmp6;

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
            items[1] = <module_15660.default emitter={emitter} />;
            return <View style={{ flex: 1 }}>{items}</View>;
          };
        }
      }
    };
    return obj;
  };
};
