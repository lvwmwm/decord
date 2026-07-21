// Module ID: 8156
// Function ID: 64469
// Name: deprecatedPropType
// Dependencies: []

// Module 8156 (deprecatedPropType)
function deprecatedPropType(number, arg1) {
  let closure_1 = "Use the transform prop instead.";
  return function validate(arg0, arg1, arg2) {
    if (undefined !== arg0[arg1]) {
      const _console = console;
      const _HermesInternal = HermesInternal;
      console.warn("`" + arg1 + "` supplied to `" + arg2 + "` has been deprecated. " + closure_1);
    }
    const length = arguments.length;
    let num = 0;
    if (length > 3) {
      num = length - 3;
    }
    const array = new Array(num);
    for (let num2 = 3; num2 < length; num2 = num2 + 1) {
      array[num2 - 3] = arguments[num2];
    }
    const items = [arg0, arg1, arg2];
    return arg0.apply(undefined, items.concat(array));
  };
}
let obj = {};
const _module = require(dependencyMap[0]);
const _module1 = require(dependencyMap[0]);
const _module2 = require(dependencyMap[0]);
obj = { perspective: require(dependencyMap[0]).number };
const items = [_module2.shape(obj), , , , , , , , , , , ];
const _module3 = require(dependencyMap[0]);
obj = { rotate: require(dependencyMap[0]).string };
items[1] = _module3.shape(obj);
const _module4 = require(dependencyMap[0]);
items[2] = _module4.shape({ rotateX: require(dependencyMap[0]).string });
const _module5 = require(dependencyMap[0]);
const obj1 = { rotateX: require(dependencyMap[0]).string };
items[3] = _module5.shape({ rotateY: require(dependencyMap[0]).string });
const _module6 = require(dependencyMap[0]);
const obj2 = { rotateY: require(dependencyMap[0]).string };
items[4] = _module6.shape({ rotateZ: require(dependencyMap[0]).string });
const _module7 = require(dependencyMap[0]);
const obj3 = { rotateZ: require(dependencyMap[0]).string };
items[5] = _module7.shape({ scale: require(dependencyMap[0]).number });
const _module8 = require(dependencyMap[0]);
const obj4 = { scale: require(dependencyMap[0]).number };
items[6] = _module8.shape({ scaleX: require(dependencyMap[0]).number });
const _module9 = require(dependencyMap[0]);
const obj5 = { scaleX: require(dependencyMap[0]).number };
items[7] = _module9.shape({ scaleY: require(dependencyMap[0]).number });
const _module10 = require(dependencyMap[0]);
const obj6 = { scaleY: require(dependencyMap[0]).number };
items[8] = _module10.shape({ translateX: require(dependencyMap[0]).number });
const _module11 = require(dependencyMap[0]);
const obj7 = { translateX: require(dependencyMap[0]).number };
items[9] = _module11.shape({ translateY: require(dependencyMap[0]).number });
const _module12 = require(dependencyMap[0]);
const obj8 = { translateY: require(dependencyMap[0]).number };
items[10] = _module12.shape({ skewX: require(dependencyMap[0]).string });
const _module13 = require(dependencyMap[0]);
const obj9 = { skewX: require(dependencyMap[0]).string };
items[11] = _module13.shape({ skewY: require(dependencyMap[0]).string });
obj.transform = _module.arrayOf(_module1.oneOfType(items));
obj.transformMatrix = function TransformMatrixPropType(arg0, arg1, arg2) {
  if (arg0[arg1]) {
    const _Error = Error;
    const error = new Error("The transformMatrix style property is deprecated. Use `transform: [{ matrix: ... }]` instead.");
    return error;
  }
};
obj.decomposedMatrix = function DecomposedMatrixPropType(arg0, arg1, arg2) {
  if (arg0[arg1]) {
    const _Error = Error;
    const error = new Error("The decomposedMatrix style property is deprecated. Use `transform: [...]` instead.");
    return error;
  }
};
obj.scaleX = deprecatedPropType(require(dependencyMap[0]).number, "Use the transform prop instead.");
obj.scaleY = deprecatedPropType(require(dependencyMap[0]).number, "Use the transform prop instead.");
obj.rotation = deprecatedPropType(require(dependencyMap[0]).number, "Use the transform prop instead.");
obj.translateX = deprecatedPropType(require(dependencyMap[0]).number, "Use the transform prop instead.");
obj.translateY = deprecatedPropType(require(dependencyMap[0]).number, "Use the transform prop instead.");

export default obj;
