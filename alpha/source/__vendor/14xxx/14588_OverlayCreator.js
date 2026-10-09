// Module ID: 14588
// Function ID: 14589
// Name: OverlayCreator
// Dependencies: [19, 17, 14589, 14590, 21]
// Exports: default

// Module 14588 (OverlayCreator)
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import module_14589_mod from "module_14589" /* 14589 */;
import module_14590_mod from "module_14590" /* 14590 */;
import Fragment from "Fragment" /* 21 */;

let tmp4;
let tmp6;
if (react) {
  const __esModule = react.__esModule;
}
let module_14589 = module_14589_mod;
if (!module_14589) {
  let obj = { default: module_14589 };
  tmp4 = obj;
} else {
  tmp4 = module_14589;
}
module_14589 = tmp4;
let module_14590 = module_14590_mod;
if (!module_14590) {
  tmp6 = { default: module_14590 };
  const obj2 = { default: module_14590 };
} else {
  tmp6 = module_14590;
}
module_14590 = tmp6;

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
            items[1] = <module_14590.default emitter={emitter} />;
            return <View style={{ flex: 1 }}>{items}</View>;
          };
        }
      }
    };
    return obj;
  };
};
