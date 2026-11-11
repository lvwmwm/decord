// Module ID: 5545
// Function ID: 5546
// Name: RawButton
// Dependencies: [109, 19, 17, 21, 5546, 5637, 5639]
// Exports: BorderlessButton, RectButton

// Module 5545 (RawButton)
import react2 from "react" /* 19 */;
import ButtonComponentDefault from "ButtonComponent" /* 5637 */;
import react_native from "react-native" /* 5639 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react_native2 from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createNativeWrapper from "createNativeWrapper" /* 5546 */;

let onActiveStateChange;

let Platform;
let StyleSheet;
let c10;
let c9;
let closure_2 = ["onLongPress", "onPress", "onActiveStateChange"];
let closure_3 = ["children", "style", "activeOpacity", "underlayColor"];
let closure_4 = ["children", "style", "ref"];
const useRef = react2.useRef;
const Animated = react_native2.Animated;
({ Platform, StyleSheet } = react_native2);
({ jsx: c9, jsxs: c10 } = Fragment);
const ButtonComponent = createNativeWrapper(ButtonComponentDefault, { shouldCancelWhenOutside: false, shouldActivateOnStart: false });
class RawButton {
  constructor(arg0) {
    const obj = { needsOffscreenAlphaCompositing: true };
    const merged = Object.assign(arg0);
    return React4(ButtonComponent, obj);
  }
}
class BaseButton {
  constructor(delayLongPress) {
    let closure_129_4;
    let closure_129_5;
    let closure_129_6;
    let closure_0 = delayLongPress;
    let closure_1 = useRef(false);
    closure_2 = useRef(undefined);
    let num = delayLongPress.delayLongPress;
    if (num == null) {
      num = 600;
    }
    ({ onLongPress: closure_129_4, onPress: closure_129_5, onActiveStateChange: closure_129_6 } = delayLongPress);
    const tmp = _objectWithoutProperties(delayLongPress, closure_2);
    function wrappedLongPress() {
      ref.current = true;
      if (closure_1_4 != null) {
        tmp();
      }
    }
    const obj = react_native;
    const tVProps = obj.getTVProps(tmp);
    const obj2 = {
      onBegin(pointerInside) {
        if (pointerInside.pointerInside) {
          if (closure_1_6 != null) {
            tmp(true);
          }
          ref.current = false;
          const tmp5 = closure_1_4;
          if (tmp5) {
            const _setTimeout = setTimeout;
            ref2.current = setTimeout(wrappedLongPress, num);
          }
          const onBegin = closure_0.onBegin;
          if (onBegin != null) {
            onBegin(pointerInside);
          }
        }
      },
      onActivate(pointerInside) {
        pointerInside = pointerInside.pointerInside || undefined === ref2.current;
        if (!pointerInside) {
          const _clearTimeout = clearTimeout;
          clearTimeout(ref2.current);
          ref2.current = undefined;
        }
        const onActivate = closure_0.onActivate;
        if (onActivate != null) {
          onActivate(pointerInside);
        }
      },
      onDeactivate(arg0) {
        const onDeactivate = closure_0.onDeactivate;
        if (onDeactivate != null) {
          onDeactivate(arg0);
        }
      },
      onFinalize(canceled) {
        if (closure_1_6 != null) {
          tmp(false);
        }
        const current = canceled.canceled || ref.current;
        if (!current) {
          if (closure_1_5 != null) {
            tmp4(canceled.pointerInside);
          }
        }
        if (undefined !== ref2.current) {
          const _clearTimeout = clearTimeout;
          clearTimeout(ref2.current);
          ref2.current = undefined;
        }
        const onFinalize = closure_0.onFinalize;
        if (onFinalize != null) {
          onFinalize(canceled);
        }
      }
    };
    const merged = Object.assign(tmp);
    const merged1 = Object.assign(tVProps);
    return React4(RawButton, obj2);
  }
}
let closure_14 = Animated.createAnimatedComponent(BaseButton);
const underlay = StyleSheet.create({ underlay: { position: "absolute", left: 0, right: 0, bottom: 0, top: 0 } });

export { RawButton };
export { BaseButton };
export const RectButton = (children) => {
  let activeOpacity;
  let borderRadius;
  let borderTopLeftRadius;
  let borderTopRightRadius;
  let items1;
  let prop;
  let prop1;
  let style;
  let underlayColor;
  let closure_0 = children;
  ({ style, activeOpacity, underlayColor } = children);
  let str = "black";
  children = children.children;
  if (undefined !== underlayColor) {
    str = underlayColor;
  }
  const tmp = _objectWithoutProperties(children, closure_3);
  const value = new Animated.Value(0);
  const current = useRef(value).current;
  const flatten = StyleSheet.flatten;
  const tmp2 = Animated;
  if (style == null) {
    style = {};
  }
  const flattenResult = flatten(style);
  const obj = {
    style: flattenResult,
    onActiveStateChange(arg0) {
      onActiveStateChange = onActiveStateChange.onActiveStateChange;
      if (onActiveStateChange != null) {
        onActiveStateChange(arg0);
      }
    },
    children: items1
  };
  const merged = Object.assign(tmp);
  const items = [underlay.underlay, { opacity: current }, ];
  const obj2 = { backgroundColor: str, borderRadius, borderTopLeftRadius, borderTopRightRadius, borderBottomLeftRadius: prop, borderBottomRightRadius: prop1 };
  borderRadius = undefined;
  const View = tmp2.View;
  const tmp6 = authStore;
  const tmp7 = BaseButton;
  const tmp9 = React4;
  if (flattenResult != null) {
    borderRadius = flattenResult.borderRadius;
  }
  borderTopLeftRadius = undefined;
  if (flattenResult != null) {
    borderTopLeftRadius = flattenResult.borderTopLeftRadius;
  }
  borderTopRightRadius = undefined;
  if (flattenResult != null) {
    borderTopRightRadius = flattenResult.borderTopRightRadius;
  }
  prop = undefined;
  if (flattenResult != null) {
    prop = flattenResult.borderBottomLeftRadius;
  }
  prop1 = undefined;
  if (flattenResult != null) {
    prop1 = flattenResult.borderBottomRightRadius;
  }
  items[2] = obj2;
  items1 = [tmp9(View, { style: items }), children];
  return tmp6(tmp7, obj);
};
export const BorderlessButton = (ref) => {
  let children;
  let items;
  let style;
  let closure_0 = ref;
  const value = new Animated.Value(1);
  const current = useRef(value).current;
  ref = ref.ref;
  ({ children, style } = ref);
  const obj = {
    borderless: true,
    ref,
    onActiveStateChange(arg0) {
      onActiveStateChange = onActiveStateChange.onActiveStateChange;
      if (onActiveStateChange != null) {
        onActiveStateChange(arg0);
      }
    },
    style: items,
    children
  };
  const merged = Object.assign(_objectWithoutProperties(ref, closure_4));
  const tmp3 = React4;
  const tmp4 = closure_14;
  if (ref == null) {
    ref = null;
  }
  items = [style, false];
  return tmp3(tmp4, obj);
};
export const PureNativeButton = ButtonComponentDefault;
