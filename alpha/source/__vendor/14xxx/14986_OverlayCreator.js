// Module ID: 14986
// Function ID: 14987
// Name: OverlayCreator
// Dependencies: [19, 17, 14987, 14988, 21]
// Exports: default

// Module 14986 (OverlayCreator)
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import module_14987_mod from "module_14987" /* 14987 */;
import module_14988_mod from "module_14988" /* 14988 */;
import Fragment from "Fragment" /* 21 */;

let tmp4;
let tmp6;
if (react) {
  const __esModule = react.__esModule;
}
let module_14987 = module_14987_mod;
if (!module_14987) {
  let obj = { default: module_14987 };
  tmp4 = obj;
} else {
  tmp4 = module_14987;
}
module_14987 = tmp4;
let module_14988 = module_14988_mod;
if (!module_14988) {
  tmp6 = { default: module_14988 };
  const obj2 = { default: module_14988 };
} else {
  tmp6 = module_14988;
}
module_14988 = tmp6;

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
            items[1] = <module_14988.default emitter={emitter} />;
            return <View style={{ flex: 1 }}>{items}</View>;
          };
        }
      }
    };
    return obj;
  };
};
