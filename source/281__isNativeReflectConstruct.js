// Module ID: 281
// Function ID: 4389
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 281 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_3 = [false, false];
let closure_4 = importDefault(dependencyMap[0]);
let closure_5 = importDefault(dependencyMap[1]);
let closure_6 = importDefault(dependencyMap[2]);
let closure_7 = importDefault(dependencyMap[3]);
let closure_8 = importDefault(dependencyMap[4]);
let closure_9 = importDefault(dependencyMap[5]);
const importAllResult = importAll(dependencyMap[6]);
const cloneElement = arg1(dependencyMap[6]).cloneElement;
const jsx = arg1(dependencyMap[7]).jsx;
const tmp3 = (Component) => {
  class TouchableNativeFeedback {
    constructor() {
      self = this;
      tmp = closure_5(this, TouchableNativeFeedback);
      length = arguments.length;
      array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      items = [];
      combined = items.concat(array);
      obj = closure_8(TouchableNativeFeedback);
      tmp4 = closure_7;
      if (closure_14()) {
        items1 = combined;
        if (!combined) {
          items1 = [];
        }
        tmp6 = closure_8;
        constructResult = Reflect.construct(obj, items1, closure_8(self).constructor);
      } else {
        constructResult = obj.apply(self, combined);
      }
      tmp4Result = tmp4(self, constructResult);
      obj = {};
      tmp7 = closure_1(closure_2[8]);
      tmp7 = new tmp7(tmp4Result._createPressabilityConfig());
      obj.pressability = tmp7;
      tmp4Result.state = obj;
      return tmp4Result;
    }
  }
  const arg1 = TouchableNativeFeedback;
  callback2(TouchableNativeFeedback, Component);
  let obj = {
    key: "_createPressabilityConfig",
    value: function _createPressabilityConfig() {
      const self = this;
      const TouchableNativeFeedback = this;
      let disabled = this.props.aria-disabled;
      if (null == disabled) {
        const accessibilityState = self.props.accessibilityState;
        disabled = undefined;
        if (null != accessibilityState) {
          disabled = accessibilityState.disabled;
        }
      }
      const obj = { cancelable: !self.props.rejectResponderTermination };
      if (null != self.props.disabled) {
        disabled = self.props.disabled;
      }
      obj.disabled = disabled;
      obj.hitSlop = self.props.hitSlop;
      obj.delayLongPress = self.props.delayLongPress;
      obj.delayPressIn = self.props.delayPressIn;
      obj.delayPressOut = self.props.delayPressOut;
      obj.minPressDuration = 0;
      obj.pressRectOffset = self.props.pressRetentionOffset;
      obj.android_disableSound = self.props.touchSoundDisabled;
      obj.onLongPress = self.props.onLongPress;
      obj.onPress = self.props.onPress;
      obj.onPressIn = function onPressIn(nativeEvent) {
        const result = self._dispatchHotspotUpdate(nativeEvent);
        const result1 = self._dispatchPressedStateChange(true);
        if (null != self.props.onPressIn) {
          const props = self.props;
          props.onPressIn(nativeEvent);
        }
      };
      obj.onPressMove = function onPressMove(nativeEvent) {
        const result = self._dispatchHotspotUpdate(nativeEvent);
      };
      obj.onPressOut = function onPressOut(arg0) {
        const result = self._dispatchPressedStateChange(false);
        if (null != self.props.onPressOut) {
          const props = self.props;
          props.onPressOut(arg0);
        }
      };
      return obj;
    }
  };
  const items = [obj, , , , , , ];
  obj = {
    key: "_dispatchPressedStateChange",
    value: function _dispatchPressedStateChange(arg0) {
      const result = TouchableNativeFeedback(closure_2[9]).findHostInstance_DEPRECATED(this);
      if (null == result) {
        const _console = console;
        console.warn("Touchable: Unable to find HostComponent instance. Has your Touchable component been unmounted?");
      } else {
        const Commands = TouchableNativeFeedback(closure_2[10]).Commands;
        Commands.setPressed(result, arg0);
      }
    }
  };
  items[1] = obj;
  obj = {
    key: "_dispatchHotspotUpdate",
    value: function _dispatchHotspotUpdate(nativeEvent) {
      let locationX;
      let locationY;
      ({ locationX, locationY } = nativeEvent.nativeEvent);
      const result = TouchableNativeFeedback(closure_2[9]).findHostInstance_DEPRECATED(this);
      if (null == result) {
        const _console = console;
        console.warn("Touchable: Unable to find HostComponent instance. Has your Touchable component been unmounted?");
      } else {
        const Commands = TouchableNativeFeedback(closure_2[10]).Commands;
        let num2 = 0;
        if (null != locationX) {
          num2 = locationX;
        }
        let num3 = 0;
        if (null != locationY) {
          num3 = locationY;
        }
        Commands.hotspotUpdate(result, num2, num3);
      }
    }
  };
  items[2] = obj;
  items[3] = {
    key: "render",
    value: function render() {
      let onBlur;
      let onFocus;
      const self = this;
      const Children = React.Children;
      const onlyResult = Children.only(this.props.children);
      const items = [onlyResult.props.children];
      const pressability = this.state.pressability;
      const eventHandlers = pressability.getEventHandlers();
      ({ onBlur, onFocus } = eventHandlers);
      let obj = {};
      aria-busy = this.props.aria-busy;
      if (null == aria_busy) {
        const accessibilityState = self.props.accessibilityState;
        let busy;
        if (null != accessibilityState) {
          busy = accessibilityState.busy;
        }
        aria-busy = busy;
      }
      obj.busy = aria_busy;
      aria-checked = self.props.aria-checked;
      if (null == aria_checked) {
        const accessibilityState2 = self.props.accessibilityState;
        let checked;
        if (null != accessibilityState2) {
          checked = accessibilityState2.checked;
        }
        aria-checked = checked;
      }
      obj.checked = aria_checked;
      aria-disabled = self.props.aria-disabled;
      if (null == aria_disabled) {
        const accessibilityState3 = self.props.accessibilityState;
        let disabled;
        if (null != accessibilityState3) {
          disabled = accessibilityState3.disabled;
        }
        aria-disabled = disabled;
      }
      obj.disabled = aria_disabled;
      aria-expanded = self.props.aria-expanded;
      if (null == aria_expanded) {
        const accessibilityState4 = self.props.accessibilityState;
        let expanded;
        if (null != accessibilityState4) {
          expanded = accessibilityState4.expanded;
        }
        aria-expanded = expanded;
      }
      obj.expanded = aria_expanded;
      aria-selected = self.props.aria-selected;
      if (null == aria_selected) {
        const accessibilityState5 = self.props.accessibilityState;
        let selected;
        if (null != accessibilityState5) {
          selected = accessibilityState5.selected;
        }
        aria-selected = selected;
      }
      obj.selected = aria_selected;
      let merged = obj;
      if (null != self.props.disabled) {
        const _Object = Object;
        obj = { disabled: self.props.disabled };
        merged = Object.assign({}, obj, obj);
      }
      obj = {};
      aria-valuemax = self.props.aria-valuemax;
      if (null == aria_valuemax) {
        const accessibilityValue = self.props.accessibilityValue;
        let max;
        if (null != accessibilityValue) {
          max = accessibilityValue.max;
        }
        aria-valuemax = max;
      }
      obj.max = aria_valuemax;
      aria-valuemin = self.props.aria-valuemin;
      if (null == aria_valuemin) {
        const accessibilityValue2 = self.props.accessibilityValue;
        let min;
        if (null != accessibilityValue2) {
          min = accessibilityValue2.min;
        }
        aria-valuemin = min;
      }
      obj.min = aria_valuemin;
      aria-valuenow = self.props.aria-valuenow;
      if (null == aria_valuenow) {
        const accessibilityValue3 = self.props.accessibilityValue;
        let now;
        if (null != accessibilityValue3) {
          now = accessibilityValue3.now;
        }
        aria-valuenow = now;
      }
      obj.now = aria_valuenow;
      aria-valuetext = self.props.aria-valuetext;
      if (null == aria_valuetext) {
        const accessibilityValue4 = self.props.accessibilityValue;
        let text;
        if (null != accessibilityValue4) {
          text = accessibilityValue4.text;
        }
        aria-valuetext = text;
      }
      obj.text = aria_valuetext;
      let str = "none";
      if ("off" !== self.props.aria-live) {
        let accessibilityLiveRegion = self.props.aria-live;
        if (null == accessibilityLiveRegion) {
          accessibilityLiveRegion = self.props.accessibilityLiveRegion;
        }
        str = accessibilityLiveRegion;
      }
      let accessibilityLabel = self.props.aria-label;
      if (null == accessibilityLabel) {
        accessibilityLabel = self.props.accessibilityLabel;
      }
      const items1 = [onlyResult, ];
      if (undefined === self.props.background) {
        let background = TouchableNativeFeedback.SelectableBackground();
      } else {
        background = self.props.background;
      }
      const tmp16 = closure_13;
      const tmp3 = callback2(eventHandlers, closure_3);
      const obj1 = { accessible: false !== self.props.accessible, accessibilityHint: self.props.accessibilityHint, accessibilityLanguage: self.props.accessibilityLanguage, accessibilityLabel, accessibilityRole: self.props.accessibilityRole, accessibilityState: merged, accessibilityActions: self.props.accessibilityActions, onAccessibilityAction: self.props.onAccessibilityAction, accessibilityValue: obj };
      let str2 = "no-hide-descendants";
      if (true !== self.props.aria-hidden) {
        str2 = self.props.importantForAccessibility;
      }
      obj1.importantForAccessibility = str2;
      let accessibilityViewIsModal = self.props.aria-modal;
      if (null == accessibilityViewIsModal) {
        accessibilityViewIsModal = self.props.accessibilityViewIsModal;
      }
      obj1.accessibilityViewIsModal = accessibilityViewIsModal;
      obj1.accessibilityLiveRegion = str;
      let accessibilityElementsHidden = self.props.aria-hidden;
      if (null == accessibilityElementsHidden) {
        accessibilityElementsHidden = self.props.accessibilityElementsHidden;
      }
      obj1.accessibilityElementsHidden = accessibilityElementsHidden;
      obj1.hasTVPreferredFocus = self.props.hasTVPreferredFocus;
      obj1.hitSlop = self.props.hitSlop;
      obj1.focusable = false !== self.props.focusable && undefined !== self.props.onPress && !self.props.disabled;
      let nativeID = self.props.id;
      if (null == nativeID) {
        nativeID = self.props.nativeID;
      }
      obj1.nativeID = nativeID;
      obj1.nextFocusDown = self.props.nextFocusDown;
      obj1.nextFocusForward = self.props.nextFocusForward;
      obj1.nextFocusLeft = self.props.nextFocusLeft;
      obj1.nextFocusRight = self.props.nextFocusRight;
      obj1.nextFocusUp = self.props.nextFocusUp;
      obj1.onLayout = self.props.onLayout;
      obj1.testID = self.props.testID;
      items1[1] = Object.assign({}, tmp3, closure_13(background, true === self.props.useForeground), obj1);
      return callback5.apply(undefined, items1.concat(items));
    }
  };
  items[4] = {
    key: "componentDidUpdate",
    value: function componentDidUpdate(arg0, arg1) {
      const pressability = this.state.pressability;
      pressability.configure(this._createPressabilityConfig());
    }
  };
  items[5] = {
    key: "componentDidMount",
    value: function componentDidMount() {
      const pressability = this.state.pressability;
      pressability.configure(this._createPressabilityConfig());
    }
  };
  items[6] = {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      const pressability = this.state.pressability;
      pressability.reset();
    }
  };
  return callback(TouchableNativeFeedback, items);
}(importAllResult.Component);
tmp3.SelectableBackground = (rippleRadius) => {
  const obj = { isDynamicProduct: 1073741, eight_pointed_black_star: 1895907425, rippleRadius };
  return obj;
};
tmp3.SelectableBackgroundBorderless = (rippleRadius) => {
  const obj = { isDynamicProduct: 1, eight_pointed_black_star: "100%", rippleRadius };
  return obj;
};
tmp3.Ripple = (arg0, borderless, rippleRadius) => {
  const tmp = importDefault(dependencyMap[11])(arg0);
  let tmp3 = null == tmp;
  if (!tmp3) {
    tmp3 = "number" === typeof tmp;
  }
  importDefault(dependencyMap[12])(tmp3, "Unexpected color given for Ripple color");
  return { type: "RippleAndroid", color: tmp, borderless, rippleRadius };
};
tmp3.canUseNativeForeground = () => true;
function getBackgroundProp(nativeBackgroundAndroid) {
  if (arg1) {
    if (tmp3.canUseNativeForeground()) {
      let obj = { nativeForegroundAndroid: nativeBackgroundAndroid };
    }
    return obj;
  }
  obj = { nativeBackgroundAndroid };
}
tmp3.displayName = "TouchableNativeFeedback";

export default tmp3;
