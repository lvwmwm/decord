// Module ID: 16474
// Function ID: 16475
// Name: OverlayCreator
// Dependencies: [19, 17, 16475, 16476, 21]
// Exports: default

// Module 16474 (OverlayCreator)
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import module_16475_mod from "module_16475" /* 16475 */;
import module_16476_mod from "module_16476" /* 16476 */;
import Fragment from "Fragment" /* 21 */;

let tmp4;
let tmp6;
if (react) {
  const __esModule = react.__esModule;
}
let module_16475 = module_16475_mod;
if (!module_16475) {
  let obj = { default: module_16475 };
  tmp4 = obj;
} else {
  tmp4 = module_16475;
}
module_16475 = tmp4;
let module_16476 = module_16476_mod;
if (!module_16476) {
  tmp6 = { default: module_16476 };
  const obj2 = { default: module_16476 };
} else {
  tmp6 = module_16476;
}
module_16476 = tmp6;

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
            items[1] = <module_16476.default emitter={emitter} />;
            return <View style={{ flex: 1 }}>{items}</View>;
          };
        }
      }
    };
    return obj;
  };
};
