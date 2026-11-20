// Module ID: 16863
// Function ID: 16864
// Name: OverlayCreator
// Dependencies: [19, 17, 16864, 16865, 21]
// Exports: default

// Module 16863 (OverlayCreator)
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import module_16864_mod from "module_16864" /* 16864 */;
import module_16865_mod from "module_16865" /* 16865 */;
import Fragment from "Fragment" /* 21 */;

let tmp4;
let tmp6;
if (react) {
  const __esModule = react.__esModule;
}
let module_16864 = module_16864_mod;
if (!module_16864) {
  let obj = { default: module_16864 };
  tmp4 = obj;
} else {
  tmp4 = module_16864;
}
module_16864 = tmp4;
let module_16865 = module_16865_mod;
if (!module_16865) {
  tmp6 = { default: module_16865 };
  const obj2 = { default: module_16865 };
} else {
  tmp6 = module_16865;
}
module_16865 = tmp6;

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
            items[1] = <module_16865.default emitter={emitter} />;
            return <View style={{ flex: 1 }}>{items}</View>;
          };
        }
      }
    };
    return obj;
  };
};
