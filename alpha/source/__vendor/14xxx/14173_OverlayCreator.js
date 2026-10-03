// Module ID: 14173
// Function ID: 14174
// Name: OverlayCreator
// Dependencies: [19, 17, 14174, 14175, 21]
// Exports: default

// Module 14173 (OverlayCreator)
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import module_14174_mod from "module_14174" /* 14174 */;
import module_14175_mod from "module_14175" /* 14175 */;
import Fragment from "Fragment" /* 21 */;

let tmp4;
let tmp6;
if (react) {
  const __esModule = react.__esModule;
}
let module_14174 = module_14174_mod;
if (!module_14174) {
  let obj = { default: module_14174 };
  tmp4 = obj;
} else {
  tmp4 = module_14174;
}
module_14174 = tmp4;
let module_14175 = module_14175_mod;
if (!module_14175) {
  tmp6 = { default: module_14175 };
  const obj2 = { default: module_14175 };
} else {
  tmp6 = module_14175;
}
module_14175 = tmp6;

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
            items[1] = <module_14175.default emitter={emitter} />;
            return <View style={{ flex: 1 }}>{items}</View>;
          };
        }
      }
    };
    return obj;
  };
};
