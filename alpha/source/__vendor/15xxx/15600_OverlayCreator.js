// Module ID: 15600
// Function ID: 15601
// Name: OverlayCreator
// Dependencies: [19, 17, 15601, 15602, 21]
// Exports: default

// Module 15600 (OverlayCreator)
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import module_15601_mod from "module_15601" /* 15601 */;
import module_15602_mod from "module_15602" /* 15602 */;
import Fragment from "Fragment" /* 21 */;

let tmp4;
let tmp6;
if (react) {
  const __esModule = react.__esModule;
}
let module_15601 = module_15601_mod;
if (!module_15601) {
  let obj = { default: module_15601 };
  tmp4 = obj;
} else {
  tmp4 = module_15601;
}
module_15601 = tmp4;
let module_15602 = module_15602_mod;
if (!module_15602) {
  tmp6 = { default: module_15602 };
  const obj2 = { default: module_15602 };
} else {
  tmp6 = module_15602;
}
module_15602 = tmp6;

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
            items[1] = <module_15602.default emitter={emitter} />;
            return <View style={{ flex: 1 }}>{items}</View>;
          };
        }
      }
    };
    return obj;
  };
};
