// Module ID: 16585
// Function ID: 16586
// Name: OverlayCreator
// Dependencies: [19, 17, 16586, 16587, 21]
// Exports: default

// Module 16585 (OverlayCreator)
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import module_16586_mod from "module_16586" /* 16586 */;
import module_16587_mod from "module_16587" /* 16587 */;
import Fragment from "Fragment" /* 21 */;

let tmp4;
let tmp6;
if (react) {
  const __esModule = react.__esModule;
}
let module_16586 = module_16586_mod;
if (!module_16586) {
  let obj = { default: module_16586 };
  tmp4 = obj;
} else {
  tmp4 = module_16586;
}
module_16586 = tmp4;
let module_16587 = module_16587_mod;
if (!module_16587) {
  tmp6 = { default: module_16587 };
  const obj2 = { default: module_16587 };
} else {
  tmp6 = module_16587;
}
module_16587 = tmp6;

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
            items[1] = <module_16587.default emitter={emitter} />;
            return <View style={{ flex: 1 }}>{items}</View>;
          };
        }
      }
    };
    return obj;
  };
};
