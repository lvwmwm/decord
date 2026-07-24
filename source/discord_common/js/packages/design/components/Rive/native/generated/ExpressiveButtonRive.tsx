// Module ID: 3925
// Function ID: 32411
// Name: ExpressiveButtonRive
// Dependencies: [29, 31, 33, 3859, 3926, 3910, 2]

// Module 3925 (ExpressiveButtonRive)
import _objectWithoutProperties from "_objectWithoutProperties";
import importAllResult from "result";
import { jsx } from "jsxProd";

const require = arg1;
let closure_3 = ["fallback", "artboard", "stateMachine", "defaultViewModelInstance", "dataBinding", "onDataBindingChange"];
let closure_7 = { "Mobile Expressive Button Lightmode": { posy: "number", posx: "number", buttonColor: "color", cornerRadius: "number", pressed: "boolean" }, Ambient_Lightmode: { posy: "number", posx: "number", buttonColor: "color", cornerRadius: "number", pressed: "boolean" }, "Mobile Expressive Button Dark Mode": { posy: "number", posx: "number", buttonColor: "color", cornerRadius: "number", pressed: "boolean" }, Ambient: { posy: "number", posx: "number", buttonColor: "color", cornerRadius: "number", pressed: "boolean" } };
let closure_8 = { "Mobile Expressive Button Lightmode": ["Instance"], Ambient_Lightmode: ["Instance"], "Mobile Expressive Button Dark Mode": ["Instance"], Ambient: ["Instance"] };
let closure_9 = {
  "Mobile Expressive Button Lightmode": function MobileExpressiveButtonLightmodeBindings(arg0) {
    let dataBinding;
    let instance;
    let onDataBindingChange;
    let playIfNeeded;
    ({ instance, dataBinding, onDataBindingChange, playIfNeeded } = arg0);
    let posy;
    if (null != dataBinding) {
      posy = dataBinding.posy;
    }
    let posy1;
    if (null != onDataBindingChange) {
      posy1 = onDataBindingChange.posy;
    }
    const numberBinding = require(3859) /* useObservedValue */.useNumberBinding("posy", instance, posy, posy1, playIfNeeded);
    const obj = require(3859) /* useObservedValue */;
    let posx;
    if (null != dataBinding) {
      posx = dataBinding.posx;
    }
    let posx1;
    if (null != onDataBindingChange) {
      posx1 = onDataBindingChange.posx;
    }
    const numberBinding1 = require(3859) /* useObservedValue */.useNumberBinding("posx", instance, posx, posx1, playIfNeeded);
    const obj2 = require(3859) /* useObservedValue */;
    let buttonColor;
    if (null != dataBinding) {
      buttonColor = dataBinding.buttonColor;
    }
    let buttonColor1;
    if (null != onDataBindingChange) {
      buttonColor1 = onDataBindingChange.buttonColor;
    }
    const colorBinding = require(3859) /* useObservedValue */.useColorBinding("buttonColor", instance, buttonColor, buttonColor1, playIfNeeded);
    const obj3 = require(3859) /* useObservedValue */;
    let cornerRadius;
    if (null != dataBinding) {
      cornerRadius = dataBinding.cornerRadius;
    }
    let cornerRadius1;
    if (null != onDataBindingChange) {
      cornerRadius1 = onDataBindingChange.cornerRadius;
    }
    const numberBinding2 = require(3859) /* useObservedValue */.useNumberBinding("cornerRadius", instance, cornerRadius, cornerRadius1, playIfNeeded);
    const obj4 = require(3859) /* useObservedValue */;
    let pressed;
    if (null != dataBinding) {
      pressed = dataBinding.pressed;
    }
    let pressed1;
    if (null != onDataBindingChange) {
      pressed1 = onDataBindingChange.pressed;
    }
    const booleanBinding = require(3859) /* useObservedValue */.useBooleanBinding("pressed", instance, pressed, pressed1, playIfNeeded);
    return null;
  },
  Ambient_Lightmode: function AmbientLightmodeBindings(arg0) {
    let dataBinding;
    let instance;
    let onDataBindingChange;
    let playIfNeeded;
    ({ instance, dataBinding, onDataBindingChange, playIfNeeded } = arg0);
    let posy;
    if (null != dataBinding) {
      posy = dataBinding.posy;
    }
    let posy1;
    if (null != onDataBindingChange) {
      posy1 = onDataBindingChange.posy;
    }
    const numberBinding = require(3859) /* useObservedValue */.useNumberBinding("posy", instance, posy, posy1, playIfNeeded);
    const obj = require(3859) /* useObservedValue */;
    let posx;
    if (null != dataBinding) {
      posx = dataBinding.posx;
    }
    let posx1;
    if (null != onDataBindingChange) {
      posx1 = onDataBindingChange.posx;
    }
    const numberBinding1 = require(3859) /* useObservedValue */.useNumberBinding("posx", instance, posx, posx1, playIfNeeded);
    const obj2 = require(3859) /* useObservedValue */;
    let buttonColor;
    if (null != dataBinding) {
      buttonColor = dataBinding.buttonColor;
    }
    let buttonColor1;
    if (null != onDataBindingChange) {
      buttonColor1 = onDataBindingChange.buttonColor;
    }
    const colorBinding = require(3859) /* useObservedValue */.useColorBinding("buttonColor", instance, buttonColor, buttonColor1, playIfNeeded);
    const obj3 = require(3859) /* useObservedValue */;
    let cornerRadius;
    if (null != dataBinding) {
      cornerRadius = dataBinding.cornerRadius;
    }
    let cornerRadius1;
    if (null != onDataBindingChange) {
      cornerRadius1 = onDataBindingChange.cornerRadius;
    }
    const numberBinding2 = require(3859) /* useObservedValue */.useNumberBinding("cornerRadius", instance, cornerRadius, cornerRadius1, playIfNeeded);
    const obj4 = require(3859) /* useObservedValue */;
    let pressed;
    if (null != dataBinding) {
      pressed = dataBinding.pressed;
    }
    let pressed1;
    if (null != onDataBindingChange) {
      pressed1 = onDataBindingChange.pressed;
    }
    const booleanBinding = require(3859) /* useObservedValue */.useBooleanBinding("pressed", instance, pressed, pressed1, playIfNeeded);
    return null;
  },
  "Mobile Expressive Button Dark Mode": function MobileExpressiveButtonDarkModeBindings(arg0) {
    let dataBinding;
    let instance;
    let onDataBindingChange;
    let playIfNeeded;
    ({ instance, dataBinding, onDataBindingChange, playIfNeeded } = arg0);
    let posy;
    if (null != dataBinding) {
      posy = dataBinding.posy;
    }
    let posy1;
    if (null != onDataBindingChange) {
      posy1 = onDataBindingChange.posy;
    }
    const numberBinding = require(3859) /* useObservedValue */.useNumberBinding("posy", instance, posy, posy1, playIfNeeded);
    const obj = require(3859) /* useObservedValue */;
    let posx;
    if (null != dataBinding) {
      posx = dataBinding.posx;
    }
    let posx1;
    if (null != onDataBindingChange) {
      posx1 = onDataBindingChange.posx;
    }
    const numberBinding1 = require(3859) /* useObservedValue */.useNumberBinding("posx", instance, posx, posx1, playIfNeeded);
    const obj2 = require(3859) /* useObservedValue */;
    let buttonColor;
    if (null != dataBinding) {
      buttonColor = dataBinding.buttonColor;
    }
    let buttonColor1;
    if (null != onDataBindingChange) {
      buttonColor1 = onDataBindingChange.buttonColor;
    }
    const colorBinding = require(3859) /* useObservedValue */.useColorBinding("buttonColor", instance, buttonColor, buttonColor1, playIfNeeded);
    const obj3 = require(3859) /* useObservedValue */;
    let cornerRadius;
    if (null != dataBinding) {
      cornerRadius = dataBinding.cornerRadius;
    }
    let cornerRadius1;
    if (null != onDataBindingChange) {
      cornerRadius1 = onDataBindingChange.cornerRadius;
    }
    const numberBinding2 = require(3859) /* useObservedValue */.useNumberBinding("cornerRadius", instance, cornerRadius, cornerRadius1, playIfNeeded);
    const obj4 = require(3859) /* useObservedValue */;
    let pressed;
    if (null != dataBinding) {
      pressed = dataBinding.pressed;
    }
    let pressed1;
    if (null != onDataBindingChange) {
      pressed1 = onDataBindingChange.pressed;
    }
    const booleanBinding = require(3859) /* useObservedValue */.useBooleanBinding("pressed", instance, pressed, pressed1, playIfNeeded);
    return null;
  },
  Ambient: function AmbientBindings(arg0) {
    let dataBinding;
    let instance;
    let onDataBindingChange;
    let playIfNeeded;
    ({ instance, dataBinding, onDataBindingChange, playIfNeeded } = arg0);
    let posy;
    if (null != dataBinding) {
      posy = dataBinding.posy;
    }
    let posy1;
    if (null != onDataBindingChange) {
      posy1 = onDataBindingChange.posy;
    }
    const numberBinding = require(3859) /* useObservedValue */.useNumberBinding("posy", instance, posy, posy1, playIfNeeded);
    const obj = require(3859) /* useObservedValue */;
    let posx;
    if (null != dataBinding) {
      posx = dataBinding.posx;
    }
    let posx1;
    if (null != onDataBindingChange) {
      posx1 = onDataBindingChange.posx;
    }
    const numberBinding1 = require(3859) /* useObservedValue */.useNumberBinding("posx", instance, posx, posx1, playIfNeeded);
    const obj2 = require(3859) /* useObservedValue */;
    let buttonColor;
    if (null != dataBinding) {
      buttonColor = dataBinding.buttonColor;
    }
    let buttonColor1;
    if (null != onDataBindingChange) {
      buttonColor1 = onDataBindingChange.buttonColor;
    }
    const colorBinding = require(3859) /* useObservedValue */.useColorBinding("buttonColor", instance, buttonColor, buttonColor1, playIfNeeded);
    const obj3 = require(3859) /* useObservedValue */;
    let cornerRadius;
    if (null != dataBinding) {
      cornerRadius = dataBinding.cornerRadius;
    }
    let cornerRadius1;
    if (null != onDataBindingChange) {
      cornerRadius1 = onDataBindingChange.cornerRadius;
    }
    const numberBinding2 = require(3859) /* useObservedValue */.useNumberBinding("cornerRadius", instance, cornerRadius, cornerRadius1, playIfNeeded);
    const obj4 = require(3859) /* useObservedValue */;
    let pressed;
    if (null != dataBinding) {
      pressed = dataBinding.pressed;
    }
    let pressed1;
    if (null != onDataBindingChange) {
      pressed1 = onDataBindingChange.pressed;
    }
    const booleanBinding = require(3859) /* useObservedValue */.useBooleanBinding("pressed", instance, pressed, pressed1, playIfNeeded);
    return null;
  }
};
let closure_10 = importAllResult.forwardRef(function ExpressiveButtonRiveInner(defaultViewModelInstance, ref) {
  let artboard;
  let fallback;
  ({ fallback, artboard } = defaultViewModelInstance);
  let str = "Mobile Expressive Button Lightmode";
  if (undefined !== artboard) {
    str = artboard;
  }
  defaultViewModelInstance = defaultViewModelInstance.defaultViewModelInstance;
  let str2 = "Instance";
  if (undefined !== defaultViewModelInstance) {
    str2 = defaultViewModelInstance;
  }
  const dataBinding = defaultViewModelInstance.dataBinding;
  const onDataBindingChange = defaultViewModelInstance.onDataBindingChange;
  const items = [str, dataBinding, onDataBindingChange];
  const callback = importAllResult.useCallback((arg0) => {
    let tmp2 = null;
    if (null != outer1_9[str]) {
      const obj = {};
      const merged = Object.assign(arg0);
      obj["dataBinding"] = dataBinding;
      obj["onDataBindingChange"] = onDataBindingChange;
      tmp2 = outer1_6(tmp, obj);
    }
    return tmp2;
  }, items);
  let obj = { ref, src: dataBinding(onDataBindingChange[4]), artboard: str, artboardProperties: closure_7, artboardViewModelInstances: closure_8, defaultViewModelInstance: str2, stateMachine: defaultViewModelInstance.stateMachine, renderDataBinding: callback };
  let merged = Object.assign(callback(defaultViewModelInstance, closure_3));
  return jsx(str(onDataBindingChange[3]).BaseRive, { ref, src: dataBinding(onDataBindingChange[4]), artboard: str, artboardProperties: closure_7, artboardViewModelInstances: closure_8, defaultViewModelInstance: str2, stateMachine: defaultViewModelInstance.stateMachine, renderDataBinding: callback });
});
const forwardRefResult = importAllResult.forwardRef(function ExpressiveButtonRiveWithBoundary(fallback, ref) {
  let obj = { fallback: fallback.fallback };
  obj = { ref };
  const merged = Object.assign(fallback);
  obj.children = <closure_10 ref={arg1} />;
  return jsx(require(3910) /* _isNativeReflectConstruct */.RiveErrorBoundary, { ref });
});
const result = require("jsxProd").fileFinishedImporting("../discord_common/js/packages/design/components/Rive/native/generated/ExpressiveButtonRive.tsx");

export const ExpressiveButtonRive = forwardRefResult;
