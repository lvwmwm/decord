// Module ID: 8164
// Function ID: 64531
// Name: deprecatedPropType
// Dependencies: [3955]

// Module 8164 (deprecatedPropType)
import emptyFunction from "emptyFunction";
import emptyFunction from "emptyFunction";
import emptyFunction from "emptyFunction";
import emptyFunction from "emptyFunction";
import emptyFunction from "emptyFunction";
import emptyFunction from "emptyFunction";
import emptyFunction from "emptyFunction";
import emptyFunction from "emptyFunction";
import emptyFunction from "emptyFunction";
import emptyFunction from "emptyFunction";
import emptyFunction from "emptyFunction";
import emptyFunction from "emptyFunction";
import emptyFunction from "emptyFunction";
import emptyFunction from "emptyFunction";

function deprecatedPropType(number, arg1) {
  let closure_0 = number;
  let c1 = "Use the transform prop instead.";
  return function validate(arg0, arg1, arg2) {
    if (undefined !== arg0[arg1]) {
      const _console = console;
      const _HermesInternal = HermesInternal;
      console.warn("`" + arg1 + "` supplied to `" + arg2 + "` has been deprecated. " + c1);
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
    return number.apply(undefined, items.concat(array));
  };
}
let obj = {};
obj = { perspective: require("emptyFunction").number };
let items = [emptyFunction.shape(obj), , , , , , , , , , , ];
obj = { rotate: require("emptyFunction").string };
items[1] = emptyFunction.shape(obj);
items[2] = emptyFunction.shape({ rotateX: require("emptyFunction").string });
const obj1 = { rotateX: require("emptyFunction").string };
items[3] = emptyFunction.shape({ rotateY: require("emptyFunction").string });
const obj2 = { rotateY: require("emptyFunction").string };
items[4] = emptyFunction.shape({ rotateZ: require("emptyFunction").string });
const obj3 = { rotateZ: require("emptyFunction").string };
items[5] = emptyFunction.shape({ scale: require("emptyFunction").number });
const obj4 = { scale: require("emptyFunction").number };
items[6] = emptyFunction.shape({ scaleX: require("emptyFunction").number });
const obj5 = { scaleX: require("emptyFunction").number };
items[7] = emptyFunction.shape({ scaleY: require("emptyFunction").number });
const obj6 = { scaleY: require("emptyFunction").number };
items[8] = emptyFunction.shape({ translateX: require("emptyFunction").number });
const obj7 = { translateX: require("emptyFunction").number };
items[9] = emptyFunction.shape({ translateY: require("emptyFunction").number });
const obj8 = { translateY: require("emptyFunction").number };
items[10] = emptyFunction.shape({ skewX: require("emptyFunction").string });
const obj9 = { skewX: require("emptyFunction").string };
items[11] = emptyFunction.shape({ skewY: require("emptyFunction").string });
obj.transform = emptyFunction.arrayOf(emptyFunction.oneOfType(items));
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
obj.scaleX = deprecatedPropType(require("emptyFunction").number, "Use the transform prop instead.");
obj.scaleY = deprecatedPropType(require("emptyFunction").number, "Use the transform prop instead.");
obj.rotation = deprecatedPropType(require("emptyFunction").number, "Use the transform prop instead.");
obj.translateX = deprecatedPropType(require("emptyFunction").number, "Use the transform prop instead.");
obj.translateY = deprecatedPropType(require("emptyFunction").number, "Use the transform prop instead.");

export default obj;
