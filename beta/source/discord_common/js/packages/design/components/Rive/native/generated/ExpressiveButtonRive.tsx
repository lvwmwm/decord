// Module ID: 4632
// Function ID: 4633
// Name: ExpressiveButtonRive
// Dependencies: [109, 19, 21, 4560, 4633, 4615, 2]

// Module 4632 (ExpressiveButtonRive)
import Fragment from "Fragment" /* 21 */;
import BaseRive2 from "BaseRive" /* 4560 */;
import RiveErrorBoundary2 from "RiveErrorBoundary" /* 4615 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let closure_3 = ["fallback", "artboard", "stateMachine", "defaultViewModelInstance", "dataBinding", "onDataBindingChange"];
const jsx = Fragment.jsx;
const artboardProperties = { "Mobile Expressive Button Lightmode": { posy: "number", posx: "number", buttonColor: "color", cornerRadius: "number", pressed: "boolean" }, Ambient_Lightmode: { posy: "number", posx: "number", buttonColor: "color", cornerRadius: "number", pressed: "boolean" }, "Mobile Expressive Button Dark Mode": { posy: "number", posx: "number", buttonColor: "color", cornerRadius: "number", pressed: "boolean" }, Ambient: { posy: "number", posx: "number", buttonColor: "color", cornerRadius: "number", pressed: "boolean" } };
const artboardViewModelInstances = { "Mobile Expressive Button Lightmode": ["Instance"], Ambient_Lightmode: ["Instance"], "Mobile Expressive Button Dark Mode": ["Instance"], Ambient: ["Instance"] };
let closure_9 = {
  "Mobile Expressive Button Lightmode": function MobileExpressiveButtonLightmodeBindings(arg0) {
    let dataBinding;
    let instance;
    let onDataBindingChange;
    let playIfNeeded;
    ({ instance, dataBinding, onDataBindingChange, playIfNeeded } = arg0);
    let posy;
    const useNumberBinding = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      posy = dataBinding.posy;
    }
    let posy1;
    if (onDataBindingChange != null) {
      posy1 = onDataBindingChange.posy;
    }
    const numberBinding = useNumberBinding("posy", instance, posy, posy1, playIfNeeded);
    let posx;
    const useNumberBinding2 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      posx = dataBinding.posx;
    }
    let posx1;
    if (onDataBindingChange != null) {
      posx1 = onDataBindingChange.posx;
    }
    const numberBinding2 = useNumberBinding2("posx", instance, posx, posx1, playIfNeeded);
    let buttonColor;
    const useColorBinding = BaseRive2.useColorBinding;
    BaseRive2;
    if (dataBinding != null) {
      buttonColor = dataBinding.buttonColor;
    }
    let buttonColor1;
    if (onDataBindingChange != null) {
      buttonColor1 = onDataBindingChange.buttonColor;
    }
    const colorBinding = useColorBinding("buttonColor", instance, buttonColor, buttonColor1, playIfNeeded);
    let cornerRadius;
    const useNumberBinding3 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      cornerRadius = dataBinding.cornerRadius;
    }
    let cornerRadius1;
    if (onDataBindingChange != null) {
      cornerRadius1 = onDataBindingChange.cornerRadius;
    }
    const numberBinding3 = useNumberBinding3("cornerRadius", instance, cornerRadius, cornerRadius1, playIfNeeded);
    let pressed;
    const useBooleanBinding = BaseRive2.useBooleanBinding;
    BaseRive2;
    if (dataBinding != null) {
      pressed = dataBinding.pressed;
    }
    let pressed1;
    if (onDataBindingChange != null) {
      pressed1 = onDataBindingChange.pressed;
    }
    const booleanBinding = useBooleanBinding("pressed", instance, pressed, pressed1, playIfNeeded);
    return null;
  },
  Ambient_Lightmode: function AmbientLightmodeBindings(arg0) {
    let dataBinding;
    let instance;
    let onDataBindingChange;
    let playIfNeeded;
    ({ instance, dataBinding, onDataBindingChange, playIfNeeded } = arg0);
    let posy;
    const useNumberBinding = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      posy = dataBinding.posy;
    }
    let posy1;
    if (onDataBindingChange != null) {
      posy1 = onDataBindingChange.posy;
    }
    const numberBinding = useNumberBinding("posy", instance, posy, posy1, playIfNeeded);
    let posx;
    const useNumberBinding2 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      posx = dataBinding.posx;
    }
    let posx1;
    if (onDataBindingChange != null) {
      posx1 = onDataBindingChange.posx;
    }
    const numberBinding2 = useNumberBinding2("posx", instance, posx, posx1, playIfNeeded);
    let buttonColor;
    const useColorBinding = BaseRive2.useColorBinding;
    BaseRive2;
    if (dataBinding != null) {
      buttonColor = dataBinding.buttonColor;
    }
    let buttonColor1;
    if (onDataBindingChange != null) {
      buttonColor1 = onDataBindingChange.buttonColor;
    }
    const colorBinding = useColorBinding("buttonColor", instance, buttonColor, buttonColor1, playIfNeeded);
    let cornerRadius;
    const useNumberBinding3 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      cornerRadius = dataBinding.cornerRadius;
    }
    let cornerRadius1;
    if (onDataBindingChange != null) {
      cornerRadius1 = onDataBindingChange.cornerRadius;
    }
    const numberBinding3 = useNumberBinding3("cornerRadius", instance, cornerRadius, cornerRadius1, playIfNeeded);
    let pressed;
    const useBooleanBinding = BaseRive2.useBooleanBinding;
    BaseRive2;
    if (dataBinding != null) {
      pressed = dataBinding.pressed;
    }
    let pressed1;
    if (onDataBindingChange != null) {
      pressed1 = onDataBindingChange.pressed;
    }
    const booleanBinding = useBooleanBinding("pressed", instance, pressed, pressed1, playIfNeeded);
    return null;
  },
  "Mobile Expressive Button Dark Mode": function MobileExpressiveButtonDarkModeBindings(arg0) {
    let dataBinding;
    let instance;
    let onDataBindingChange;
    let playIfNeeded;
    ({ instance, dataBinding, onDataBindingChange, playIfNeeded } = arg0);
    let posy;
    const useNumberBinding = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      posy = dataBinding.posy;
    }
    let posy1;
    if (onDataBindingChange != null) {
      posy1 = onDataBindingChange.posy;
    }
    const numberBinding = useNumberBinding("posy", instance, posy, posy1, playIfNeeded);
    let posx;
    const useNumberBinding2 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      posx = dataBinding.posx;
    }
    let posx1;
    if (onDataBindingChange != null) {
      posx1 = onDataBindingChange.posx;
    }
    const numberBinding2 = useNumberBinding2("posx", instance, posx, posx1, playIfNeeded);
    let buttonColor;
    const useColorBinding = BaseRive2.useColorBinding;
    BaseRive2;
    if (dataBinding != null) {
      buttonColor = dataBinding.buttonColor;
    }
    let buttonColor1;
    if (onDataBindingChange != null) {
      buttonColor1 = onDataBindingChange.buttonColor;
    }
    const colorBinding = useColorBinding("buttonColor", instance, buttonColor, buttonColor1, playIfNeeded);
    let cornerRadius;
    const useNumberBinding3 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      cornerRadius = dataBinding.cornerRadius;
    }
    let cornerRadius1;
    if (onDataBindingChange != null) {
      cornerRadius1 = onDataBindingChange.cornerRadius;
    }
    const numberBinding3 = useNumberBinding3("cornerRadius", instance, cornerRadius, cornerRadius1, playIfNeeded);
    let pressed;
    const useBooleanBinding = BaseRive2.useBooleanBinding;
    BaseRive2;
    if (dataBinding != null) {
      pressed = dataBinding.pressed;
    }
    let pressed1;
    if (onDataBindingChange != null) {
      pressed1 = onDataBindingChange.pressed;
    }
    const booleanBinding = useBooleanBinding("pressed", instance, pressed, pressed1, playIfNeeded);
    return null;
  },
  Ambient: function AmbientBindings(arg0) {
    let dataBinding;
    let instance;
    let onDataBindingChange;
    let playIfNeeded;
    ({ instance, dataBinding, onDataBindingChange, playIfNeeded } = arg0);
    let posy;
    const useNumberBinding = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      posy = dataBinding.posy;
    }
    let posy1;
    if (onDataBindingChange != null) {
      posy1 = onDataBindingChange.posy;
    }
    const numberBinding = useNumberBinding("posy", instance, posy, posy1, playIfNeeded);
    let posx;
    const useNumberBinding2 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      posx = dataBinding.posx;
    }
    let posx1;
    if (onDataBindingChange != null) {
      posx1 = onDataBindingChange.posx;
    }
    const numberBinding2 = useNumberBinding2("posx", instance, posx, posx1, playIfNeeded);
    let buttonColor;
    const useColorBinding = BaseRive2.useColorBinding;
    BaseRive2;
    if (dataBinding != null) {
      buttonColor = dataBinding.buttonColor;
    }
    let buttonColor1;
    if (onDataBindingChange != null) {
      buttonColor1 = onDataBindingChange.buttonColor;
    }
    const colorBinding = useColorBinding("buttonColor", instance, buttonColor, buttonColor1, playIfNeeded);
    let cornerRadius;
    const useNumberBinding3 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      cornerRadius = dataBinding.cornerRadius;
    }
    let cornerRadius1;
    if (onDataBindingChange != null) {
      cornerRadius1 = onDataBindingChange.cornerRadius;
    }
    const numberBinding3 = useNumberBinding3("cornerRadius", instance, cornerRadius, cornerRadius1, playIfNeeded);
    let pressed;
    const useBooleanBinding = BaseRive2.useBooleanBinding;
    BaseRive2;
    if (dataBinding != null) {
      pressed = dataBinding.pressed;
    }
    let pressed1;
    if (onDataBindingChange != null) {
      pressed1 = onDataBindingChange.pressed;
    }
    const booleanBinding = useBooleanBinding("pressed", instance, pressed, pressed1, playIfNeeded);
    return null;
  }
};
let closure_10 = react.forwardRef(function ExpressiveButtonRiveInner(defaultViewModelInstance, ref) {
  let artboard;
  let fallback;
  ({ fallback, artboard } = defaultViewModelInstance);
  let str = "Mobile Expressive Button Lightmode";
  if (undefined !== artboard) {
    str = artboard;
  }
  defaultViewModelInstance = defaultViewModelInstance.defaultViewModelInstance;
  let str2 = "Instance";
  const stateMachine = defaultViewModelInstance.stateMachine;
  if (undefined !== defaultViewModelInstance) {
    str2 = defaultViewModelInstance;
  }
  const dataBinding = defaultViewModelInstance.dataBinding;
  const onDataBindingChange = defaultViewModelInstance.onDataBindingChange;
  const items = [str, dataBinding, onDataBindingChange];
  const tmp = _objectWithoutProperties(defaultViewModelInstance, closure_3);
  const callback = react.useCallback((arg0) => {
    let tmp2 = null;
    if (null != closure_9[str]) {
      const merged = Object.assign(arg0);
      tmp2 = <tmp dataBinding={dataBinding} onDataBindingChange={onDataBindingChange} />;
    }
    return tmp2;
  }, items);
  const BaseRive = str(onDataBindingChange[3]).BaseRive;
  let merged = Object.assign(tmp);
  return <BaseRive ref={arg1} src={dataBinding(onDataBindingChange[4])} artboard={str} artboardProperties={artboardProperties} artboardViewModelInstances={artboardViewModelInstances} defaultViewModelInstance={str2} stateMachine={stateMachine} renderDataBinding={callback} />;
});
const forwardRefResult = react.forwardRef(function ExpressiveButtonRiveWithBoundary(fallback, ref) {
  const RiveErrorBoundary = RiveErrorBoundary2.RiveErrorBoundary;
  const merged = Object.assign(fallback);
  return <RiveErrorBoundary fallback={arg0.fallback}>{null}</RiveErrorBoundary>;
});
const result = size.fileFinishedImporting("../discord_common/js/packages/design/components/Rive/native/generated/ExpressiveButtonRive.tsx");

export const ExpressiveButtonRive = forwardRefResult;
