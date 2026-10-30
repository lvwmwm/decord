// Module ID: 16197
// Function ID: 16198
// Name: OverlayCreator
// Dependencies: [19, 17, 16198, 16199, 21]
// Exports: default

// Module 16197 (OverlayCreator)
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import module_16198_mod from "module_16198" /* 16198 */;
import module_16199_mod from "module_16199" /* 16199 */;
import Fragment from "Fragment" /* 21 */;

let tmp4;
let tmp6;
if (react) {
  const __esModule = react.__esModule;
}
let module_16198 = module_16198_mod;
if (!module_16198) {
  let obj = { default: module_16198 };
  tmp4 = obj;
} else {
  tmp4 = module_16198;
}
module_16198 = tmp4;
let module_16199 = module_16199_mod;
if (!module_16199) {
  tmp6 = { default: module_16199 };
  const obj2 = { default: module_16199 };
} else {
  tmp6 = module_16199;
}
module_16199 = tmp6;

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
            items[1] = <module_16199.default emitter={emitter} />;
            return <View style={{ flex: 1 }}>{items}</View>;
          };
        }
      }
    };
    return obj;
  };
};
