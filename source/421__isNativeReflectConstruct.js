// Module ID: 421
// Function ID: 5899
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 421 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_2 = [];
let closure_3 = [];
let closure_4 = importDefault(dependencyMap[0]);
let closure_5 = importDefault(dependencyMap[1]);
let closure_6 = importDefault(dependencyMap[2]);
let closure_7 = importDefault(dependencyMap[3]);
let closure_8 = importDefault(dependencyMap[4]);
let closure_9 = importDefault(dependencyMap[5]);
const importAllResult = importAll(dependencyMap[6]);
const cloneElement = arg1(dependencyMap[6]).cloneElement;
({ jsx: closure_12, jsxs: closure_13 } = arg1(dependencyMap[7]));
let closure_14 = (Component) => {
  class TouchableHighlightImpl {
    constructor() {
      self = this;
      tmp = closure_5(this, TouchableHighlightImpl);
      length = arguments.length;
      array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      items = [];
      combined = items.concat(array);
      obj = closure_8(TouchableHighlightImpl);
      tmp4 = closure_7;
      if (closure_15()) {
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
      tmp4Result._isMounted = false;
      obj = {};
      tmp7 = TouchableHighlightImpl(closure_1[8]);
      tmp7 = new tmp7(tmp4Result._createPressabilityConfig());
      obj.pressability = tmp7;
      _createExtraStylesResult = null;
      if (true === tmp4Result.props.testOnly_pressed) {
        _createExtraStylesResult = tmp4Result._createExtraStyles();
      }
      obj.extraStyles = _createExtraStylesResult;
      tmp4Result.state = obj;
      return tmp4Result;
    }
  }
  const importDefault = TouchableHighlightImpl;
  callback3(TouchableHighlightImpl, Component);
  let obj = {
    key: "_createPressabilityConfig",
    value: function _createPressabilityConfig() {
      const self = this;
      const TouchableHighlightImpl = this;
      const obj = { cancelable: !this.props.rejectResponderTermination };
      if (null != this.props.disabled) {
        let disabled = self.props.disabled;
      } else {
        const accessibilityState = self.props.accessibilityState;
        if (null != accessibilityState) {
          disabled = accessibilityState.disabled;
        }
      }
      obj.disabled = disabled;
      obj.hitSlop = self.props.hitSlop;
      obj.delayLongPress = self.props.delayLongPress;
      obj.delayPressIn = self.props.delayPressIn;
      obj.delayPressOut = self.props.delayPressOut;
      obj.minPressDuration = 0;
      obj.pressRectOffset = self.props.pressRetentionOffset;
      obj.android_disableSound = self.props.touchSoundDisabled;
      obj.onBlur = function onBlur(arg0) {
        if (self(closure_1[9]).isTV) {
          self._hideUnderlay();
        }
        if (null != self.props.onBlur) {
          const props = self.props;
          props.onBlur(arg0);
        }
      };
      obj.onFocus = function onFocus(arg0) {
        if (self(closure_1[9]).isTV) {
          self._showUnderlay();
        }
        if (null != self.props.onFocus) {
          const props = self.props;
          props.onFocus(arg0);
        }
      };
      obj.onLongPress = self.props.onLongPress;
      obj.onPress = function onPress(arg0) {
        if (null != self._hideTimeout) {
          const _clearTimeout = clearTimeout;
          clearTimeout(self._hideTimeout);
        }
        if (!self(closure_1[9]).isTV) {
          self._showUnderlay();
          const delayPressOut = self.props.delayPressOut;
          let num = 0;
          if (null != delayPressOut) {
            num = delayPressOut;
          }
          self._hideTimeout = setTimeout(() => {
            closure_0._hideUnderlay();
          }, num);
          const tmp4 = self;
        }
        if (null != self.props.onPress) {
          const props = self.props;
          props.onPress(arg0);
        }
      };
      obj.onPressIn = function onPressIn(arg0) {
        if (null != self._hideTimeout) {
          const _clearTimeout = clearTimeout;
          clearTimeout(self._hideTimeout);
          self._hideTimeout = null;
        }
        self._showUnderlay();
        if (null != self.props.onPressIn) {
          const props = self.props;
          props.onPressIn(arg0);
        }
      };
      obj.onPressOut = function onPressOut(arg0) {
        if (null == self._hideTimeout) {
          self._hideUnderlay();
        }
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
    key: "_createExtraStyles",
    value: function _createExtraStyles() {
      const self = this;
      let obj = {};
      obj = {};
      const activeOpacity = this.props.activeOpacity;
      let num = 0.85;
      if (null != activeOpacity) {
        num = activeOpacity;
      }
      obj.opacity = num;
      obj.child = obj;
      obj = {};
      let str = "black";
      if (undefined !== self.props.underlayColor) {
        str = self.props.underlayColor;
      }
      obj.backgroundColor = str;
      obj.underlay = obj;
      return obj;
    }
  };
  items[1] = obj;
  obj = {
    key: "_showUnderlay",
    value: function _showUnderlay() {
      const self = this;
      if (tmp) {
        const obj = { extraStyles: self._createExtraStyles() };
        self.setState(obj);
        if (null != self.props.onShowUnderlay) {
          const props = self.props;
          props.onShowUnderlay();
        }
      }
    }
  };
  items[2] = obj;
  items[3] = {
    key: "_hideUnderlay",
    value: function _hideUnderlay() {
      const self = this;
      if (null != this._hideTimeout) {
        const _clearTimeout = clearTimeout;
        clearTimeout(self._hideTimeout);
        self._hideTimeout = null;
      }
      if (tmp3) {
        const obj = { extraStyles: null };
        self.setState(obj);
        if (null != self.props.onHideUnderlay) {
          const props = self.props;
          props.onHideUnderlay();
        }
      }
    }
  };
  items[4] = {
    key: "_hasPressHandler",
    value: function _hasPressHandler() {
      const self = this;
      return null != this.props.onPress || null != self.props.onPressIn || null != self.props.onPressOut || null != self.props.onLongPress;
    }
  };
  items[5] = {
    key: "render",
    value: function render() {
      let onBlur;
      let onFocus;
      const self = this;
      const Children = React.Children;
      const onlyResult = Children.only(this.props.children);
      const pressability = this.state.pressability;
      const eventHandlers = pressability.getEventHandlers();
      ({ onBlur, onFocus } = eventHandlers);
      if (null != this.props.disabled) {
        const _Object = Object;
        let obj = { disabled: self.props.disabled };
        let accessibilityState = Object.assign({}, self.props.accessibilityState, obj);
      } else {
        accessibilityState = self.props.accessibilityState;
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
      obj = { accessible: false !== self.props.accessible, accessibilityLabel, accessibilityHint: self.props.accessibilityHint, accessibilityLanguage: self.props.accessibilityLanguage, accessibilityRole: self.props.accessibilityRole, accessibilityState };
      obj.accessibilityValue = obj;
      obj.accessibilityActions = self.props.accessibilityActions;
      obj.onAccessibilityAction = self.props.onAccessibilityAction;
      let str2 = "no-hide-descendants";
      const tmp3 = callback(eventHandlers, closure_2);
      const tmp9 = closure_13;
      if (true !== self.props.aria-hidden) {
        str2 = self.props.importantForAccessibility;
      }
      obj.importantForAccessibility = str2;
      let accessibilityViewIsModal = self.props.aria-modal;
      if (null == accessibilityViewIsModal) {
        accessibilityViewIsModal = self.props.accessibilityViewIsModal;
      }
      obj.accessibilityViewIsModal = accessibilityViewIsModal;
      obj.accessibilityLiveRegion = str;
      let accessibilityElementsHidden = self.props.aria-hidden;
      if (null == accessibilityElementsHidden) {
        accessibilityElementsHidden = self.props.accessibilityElementsHidden;
      }
      obj.accessibilityElementsHidden = accessibilityElementsHidden;
      const tmp10 = TouchableHighlightImpl(closure_1[10]);
      const extraStyles = self.state.extraStyles;
      let underlay;
      if (null != extraStyles) {
        underlay = extraStyles.underlay;
      }
      obj.style = TouchableHighlightImpl(closure_1[11]).compose(self.props.style, underlay);
      obj.onLayout = self.props.onLayout;
      obj.hitSlop = self.props.hitSlop;
      obj.hasTVPreferredFocus = self.props.hasTVPreferredFocus;
      obj.nextFocusDown = self.props.nextFocusDown;
      obj.nextFocusForward = self.props.nextFocusForward;
      obj.nextFocusLeft = self.props.nextFocusLeft;
      obj.nextFocusRight = self.props.nextFocusRight;
      obj.nextFocusUp = self.props.nextFocusUp;
      obj.focusable = false !== self.props.focusable && undefined !== self.props.onPress && !self.props.disabled;
      let nativeID = self.props.id;
      if (null == nativeID) {
        nativeID = self.props.nativeID;
      }
      obj.nativeID = nativeID;
      obj.testID = self.props.testID;
      obj.ref = self.props.hostRef;
      const obj1 = {};
      const obj2 = {};
      const obj4 = TouchableHighlightImpl(closure_1[11]);
      const tmp12 = closure_11;
      const extraStyles2 = self.state.extraStyles;
      let child;
      if (null != extraStyles2) {
        child = extraStyles2.child;
      }
      obj2.style = TouchableHighlightImpl(closure_1[11]).compose(onlyResult.props.style, child);
      const items = [tmp12(onlyResult, obj2), null];
      obj1.children = items;
      return tmp9(tmp10, Object.assign(obj, tmp3, obj1));
    }
  };
  items[6] = {
    key: "componentDidMount",
    value: function componentDidMount() {
      this._isMounted = true;
      const pressability = this.state.pressability;
      pressability.configure(this._createPressabilityConfig());
    }
  };
  items[7] = {
    key: "componentDidUpdate",
    value: function componentDidUpdate(arg0, arg1) {
      const pressability = this.state.pressability;
      pressability.configure(this._createPressabilityConfig());
    }
  };
  items[8] = {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      const self = this;
      this._isMounted = false;
      if (null != this._hideTimeout) {
        const _clearTimeout = clearTimeout;
        clearTimeout(self._hideTimeout);
      }
      const pressability = self.state.pressability;
      pressability.reset();
    }
  };
  return callback2(TouchableHighlightImpl, items);
}(importAllResult.Component);
class TouchableHighlight {
  constructor(arg0) {
    return jsx(f5903, Object.assign({}, closure_4(global, _isNativeReflectConstruct), { hostRef: global.ref }));
  }
}
TouchableHighlight.displayName = "TouchableHighlight";

export default TouchableHighlight;
