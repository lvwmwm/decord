// Module ID: 15365
// Function ID: 15366
// Name: OverlayCreator
// Dependencies: [19, 17, 15366, 15367, 21]
// Exports: default

// Module 15365 (OverlayCreator)
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import module_15366_mod from "module_15366" /* 15366 */;
import module_15367_mod from "module_15367" /* 15367 */;
import Fragment from "Fragment" /* 21 */;

let tmp4;
let tmp6;
if (react) {
  const __esModule = react.__esModule;
}
let module_15366 = module_15366_mod;
if (!module_15366) {
  let obj = { default: module_15366 };
  tmp4 = obj;
} else {
  tmp4 = module_15366;
}
module_15366 = tmp4;
let module_15367 = module_15367_mod;
if (!module_15367) {
  tmp6 = { default: module_15367 };
  const obj2 = { default: module_15367 };
} else {
  tmp6 = module_15367;
}
module_15367 = tmp6;

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
            items[1] = <module_15367.default emitter={emitter} />;
            return <View style={{ flex: 1 }}>{items}</View>;
          };
        }
      }
    };
    return obj;
  };
};
