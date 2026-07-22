// Module ID: 13228
// Function ID: 100333
// Name: OverlayCreator
// Dependencies: []
// Exports: default

// Module 13228 (OverlayCreator)
const result = _interopRequireDefault(require(dependencyMap[0]));
let closure_0 = require(dependencyMap[1]);
let closure_1 = _interopRequireDefault(require(dependencyMap[2]));
let closure_2 = _interopRequireDefault(require(dependencyMap[3]));
let closure_3 = require(dependencyMap[4]);

export default function OverlayCreator() {
  return function overlay() {
    let closure_0 = closure_1.default();
    let obj = {
      onCommand(type) {
        if ("overlay" === type.type) {
          closure_0.emit("overlay", type.payload);
        }
      },
      features: obj
    };
    obj = {
      overlay(arg0) {
        let closure_0 = arg0;
        return () => {
          if (arguments.length > 0) {
            if (undefined !== arguments[0]) {
              const first = arguments[0];
            }
            let obj = {};
            obj = { flex: 1 };
            obj.style = obj;
            const _Object = Object;
            const items = [<arg0 {...Object.assign({}, {})} />, ];
            obj = { emitter: arg0 };
            items[1] = <mod.default {...obj} />;
            obj.children = items;
            return <arg0.View {...obj} />;
          }
        };
      }
    };
    return obj;
  };
};
