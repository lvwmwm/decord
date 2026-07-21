// Module ID: 422
// Function ID: 5921
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 422 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_2 = [];
let closure_3 = [null];
let closure_4 = importDefault(dependencyMap[0]);
let closure_5 = importDefault(dependencyMap[1]);
let closure_6 = importDefault(dependencyMap[2]);
let closure_7 = importDefault(dependencyMap[3]);
let closure_8 = importDefault(dependencyMap[4]);
let closure_9 = importDefault(dependencyMap[5]);
const importAllResult = importAll(dependencyMap[6]);
({ jsx: closure_10, jsxs: closure_11 } = arg1(dependencyMap[7]));
let closure_12 = (Component) => {
  class TouchableOpacity {
    constructor() {
      self = this;
      tmp = closure_5(this, TouchableOpacity);
      length = arguments.length;
      array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      items = [];
      combined = items.concat(array);
      obj = closure_8(TouchableOpacity);
      tmp4 = closure_7;
      if (closure_13()) {
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
      value = new TouchableOpacity(closure_1[8]).Value(tmp4Result._getChildStyleOpacityWithDefault());
      obj.anim = value;
      tmp8 = TouchableOpacity(closure_1[9]);
      tmp8 = new tmp8(tmp4Result._createPressabilityConfig());
      obj.pressability = tmp8;
      tmp4Result.state = obj;
      return tmp4Result;
    }
  }
  const importDefault = TouchableOpacity;
  callback3(TouchableOpacity, Component);
  let obj = {
    key: "_createPressabilityConfig",
    value: function _createPressabilityConfig() {
      const self = this;
      const TouchableOpacity = this;
      const obj = { cancelable: !this.props.rejectResponderTermination };
      aria-disabled = this.props.disabled;
      if (null == aria_disabled) {
        aria-disabled = self.props.aria-disabled;
      }
      if (null == aria_disabled) {
        const accessibilityState = self.props.accessibilityState;
        let disabled;
        if (null != accessibilityState) {
          disabled = accessibilityState.disabled;
        }
        aria-disabled = disabled;
      }
      obj.disabled = aria_disabled;
      obj.hitSlop = self.props.hitSlop;
      obj.delayLongPress = self.props.delayLongPress;
      obj.delayPressIn = self.props.delayPressIn;
      obj.delayPressOut = self.props.delayPressOut;
      obj.minPressDuration = 0;
      obj.pressRectOffset = self.props.pressRetentionOffset;
      obj.onBlur = function onBlur(arg0) {
        if (self(closure_1[10]).isTV) {
          self._opacityInactive(250);
        }
        if (null != self.props.onBlur) {
          const props = self.props;
          props.onBlur(arg0);
        }
      };
      obj.onFocus = function onFocus(arg0) {
        if (self(closure_1[10]).isTV) {
          self._opacityActive(150);
        }
        if (null != self.props.onFocus) {
          const props = self.props;
          props.onFocus(arg0);
        }
      };
      obj.onLongPress = self.props.onLongPress;
      obj.onPress = self.props.onPress;
      obj.onPressIn = function onPressIn(dispatchConfig) {
        let num = 150;
        if ("onResponderGrant" === dispatchConfig.dispatchConfig.registrationName) {
          num = 0;
        }
        self._opacityActive(num);
        if (null != self.props.onPressIn) {
          const props = self.props;
          props.onPressIn(dispatchConfig);
        }
      };
      obj.onPressOut = function onPressOut(arg0) {
        self._opacityInactive(250);
        if (null != self.props.onPressOut) {
          const props = self.props;
          props.onPressOut(arg0);
        }
      };
      return obj;
    }
  };
  const items = [obj, , , , , , , , ];
  obj = {
    key: "_setOpacityTo",
    value: function _setOpacityTo(toValue, duration) {
      let obj = TouchableOpacity(closure_1[8]);
      obj = { toValue, duration, easing: TouchableOpacity(closure_1[11]).inOut(TouchableOpacity(closure_1[11]).quad), useNativeDriver: true };
      const obj3 = TouchableOpacity(closure_1[11]);
      obj.timing(this.state.anim, obj).start();
    }
  };
  items[1] = obj;
  obj = {
    key: "_opacityActive",
    value: function _opacityActive(duration) {
      const activeOpacity = this.props.activeOpacity;
      let num = 0.2;
      if (null != activeOpacity) {
        num = activeOpacity;
      }
      this._setOpacityTo(num, duration);
    }
  };
  items[2] = obj;
  items[3] = {
    key: "_opacityInactive",
    value: function _opacityInactive(duration) {
      this._setOpacityTo(this._getChildStyleOpacityWithDefault(), duration);
    }
  };
  items[4] = {
    key: "_getChildStyleOpacityWithDefault",
    value: function _getChildStyleOpacityWithDefault() {
      let opacity;
      const tmp2 = TouchableOpacity(closure_1[12])(this.props.style);
      if (null != tmp2) {
        opacity = tmp2.opacity;
      }
      let num = 1;
      if ("number" === typeof opacity) {
        num = opacity;
      }
      return num;
    }
  };
  items[5] = {
    key: "render",
    value: function render() {
      let onBlur;
      let onFocus;
      const self = this;
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
      const obj1 = { accessible: false !== self.props.accessible, accessibilityLabel, accessibilityHint: self.props.accessibilityHint, accessibilityLanguage: self.props.accessibilityLanguage, accessibilityRole: self.props.accessibilityRole, accessibilityState: merged, accessibilityActions: self.props.accessibilityActions, onAccessibilityAction: self.props.onAccessibilityAction, accessibilityValue: obj };
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
      const items = [self.props.style, { opacity: self.state.anim }];
      obj1.style = items;
      let nativeID = self.props.id;
      if (null == nativeID) {
        nativeID = self.props.nativeID;
      }
      obj1.nativeID = nativeID;
      obj1.testID = self.props.testID;
      obj1.onLayout = self.props.onLayout;
      obj1.nextFocusDown = self.props.nextFocusDown;
      obj1.nextFocusForward = self.props.nextFocusForward;
      obj1.nextFocusLeft = self.props.nextFocusLeft;
      obj1.nextFocusRight = self.props.nextFocusRight;
      obj1.nextFocusUp = self.props.nextFocusUp;
      obj1.hasTVPreferredFocus = self.props.hasTVPreferredFocus;
      obj1.hitSlop = self.props.hitSlop;
      obj1.focusable = false !== self.props.focusable && undefined !== self.props.onPress && !self.props.disabled;
      obj1.ref = self.props.hostRef;
      const children = [self.props.children, null];
      return closure_11(TouchableOpacity(closure_1[8]).View, Object.assign(obj1, callback(eventHandlers, closure_2), { children }));
    }
  };
  items[6] = {
    key: "componentDidUpdate",
    value: function componentDidUpdate(disabled) {
      const self = this;
      const pressability = this.state.pressability;
      pressability.configure(this._createPressabilityConfig());
      let tmp2 = this.props.disabled === disabled.disabled;
      if (tmp2) {
        const tmp5 = TouchableOpacity(closure_1[12])(disabled.style);
        let opacity;
        if (null != tmp5) {
          opacity = tmp5.opacity;
        }
        const tmp10 = TouchableOpacity(closure_1[12])(self.props.style);
        let opacity1;
        if (null != tmp10) {
          opacity1 = tmp10.opacity;
        }
        tmp2 = opacity === opacity1;
      }
      if (!tmp2) {
        self._opacityInactive(250);
      }
    }
  };
  items[7] = {
    key: "componentDidMount",
    value: function componentDidMount() {
      const pressability = this.state.pressability;
      pressability.configure(this._createPressabilityConfig());
    }
  };
  items[8] = {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      const pressability = this.state.pressability;
      pressability.reset();
      const anim = this.state.anim;
      anim.resetAnimation();
    }
  };
  return callback2(TouchableOpacity, items);
}(importAllResult.Component);
class Touchable {
  constructor(arg0) {
    return jsx(f5925, Object.assign({}, closure_4(global, _isNativeReflectConstruct), { hostRef: global.ref }));
  }
}
Touchable.displayName = "TouchableOpacity";

export default Touchable;
