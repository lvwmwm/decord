// Module ID: 14884
// Function ID: 113485
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 31, 27, 4122, 653, 33, 4130, 5052, 689, 3974, 4099, 4100, 1273, 1212, 3842, 566, 10364, 2]
// Exports: default

// Module 14884 (_isNativeReflectConstruct)
import getActivityIndicator from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import IMPACT_LIGHT from "IMPACT_LIGHT";
import getSystemLocale from "getSystemLocale";
import ManaContext from "ManaContext";
import importAllResult from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import closure_12 from "_isNativeReflectConstruct";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import hexToRgb from "hexToRgb";
import hexToRgb from "hexToRgb";
import importDefaultResult from "createTextStyle";

let closure_10;
let closure_11;
let closure_13;
let closure_14;
let closure_9;
const require = arg1;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
({ View: closure_9, Animated: closure_10, TouchableWithoutFeedback: closure_11 } = get_ActivityIndicator);
({ jsx: closure_13, jsxs: closure_14 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = {};
let merged = Object.assign(require("createTextStyle")(require("ME").Fonts.DISPLAY_SEMIBOLD, require("_createForOfIteratorHelperLoose").unsafe_rawColors.WHITE, 12, { uppercase: true }));
_createForOfIteratorHelperLoose.unreadText = _createForOfIteratorHelperLoose;
let obj2 = { margin: 8, height: 24, justifyContent: "center", alignItems: "center", borderRadius: require("_createForOfIteratorHelperLoose").radii.md };
obj2.backgroundColor = hexToRgb.hexWithOpacity(require("_createForOfIteratorHelperLoose").unsafe_rawColors.PRIMARY_400, 0.9);
_createForOfIteratorHelperLoose.unread = obj2;
const obj3 = {};
obj3.backgroundColor = hexToRgb.hexWithOpacity(require("_createForOfIteratorHelperLoose").unsafe_rawColors.RED_400, 0.9);
_createForOfIteratorHelperLoose.mention = obj3;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createLegacyClassComponentStyles(_createForOfIteratorHelperLoose);
const tmp7 = ((PureComponent) => {
  class UnreadBar {
    constructor(arg0) {
      self = this;
      items = [...arguments];
      tmp = outer1_3(this, apply);
      items1 = [...items];
      obj = outer1_6(apply);
      tmp2 = outer1_5;
      if (outer1_17()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = outer1_6;
        constructResult = Reflect.construct(obj, items1, outer1_6(self).constructor);
      } else {
        constructResult = obj.apply(self, items1);
      }
      tmp2Result = tmp2(self, constructResult);
      apply = tmp2Result;
      tmp2Result.state = { active: false };
      value = new outer1_10.Value(0);
      tmp2Result.animation = value;
      tmp2Result.handlePress = () => {
        let item;
        let onPress;
        ({ item, onPress } = tmp2Result.props);
        const result = UnreadBar(outer2_2[14]).triggerHapticFeedback(outer2_1(outer2_2[15]).IMPACT_LIGHT);
        tmp2Result.hide();
        onPress(item);
      };
      tmp2Result.handlePressIn = () => {
        tmp2Result.setState({ active: true });
      };
      tmp2Result.handlePressOut = () => {
        tmp2Result.setState({ active: false });
      };
      return tmp2Result;
    }
  }
  callback2(UnreadBar, PureComponent);
  let obj = {
    key: "componentWillEnter",
    value(arg0) {
      this.show(arg0);
    }
  };
  let items = [obj, , , , , ];
  obj = {
    key: "componentWillLeave",
    value(arg0) {
      this.hide(arg0);
    }
  };
  items[1] = obj;
  obj = {
    key: "show",
    value(arg0) {
      outer1_10.spring(this.animation, { toValue: 1, friction: 15, tension: 250, useNativeDriver: true }).start(arg0);
    }
  };
  items[2] = obj;
  items[3] = {
    key: "hide",
    value(arg0) {
      outer1_10.spring(this.animation, { toValue: 0, friction: 15, tension: 250, useNativeDriver: true }).start(arg0);
    }
  };
  items[4] = {
    key: "getAnimatedStyle",
    value() {
      let bottom;
      let contentInset;
      const self = this;
      const props = this.props;
      ({ bottom, contentInset } = props);
      let obj = { position: "absolute" };
      const left = contentInset.left;
      let num = 0;
      if (null != left) {
        num = left;
      }
      obj.left = num;
      const right = contentInset.right;
      let num2 = 0;
      if (null != right) {
        num2 = right;
      }
      obj.right = num2;
      let str = "top";
      if (bottom) {
        str = "bottom";
      }
      if (bottom) {
        const bottom2 = contentInset.bottom;
        let num4 = 0;
        if (null != bottom2) {
          num4 = bottom2;
        }
        let num3 = num4;
      } else {
        const top = contentInset.top;
        num3 = 0;
        if (null != top) {
          num3 = top;
        }
      }
      obj[str] = num3;
      if (props.useReducedMotion) {
        obj = {};
        const merged = Object.assign(obj);
        obj["opacity"] = self.animation;
      } else {
        obj = {};
        const merged1 = Object.assign(obj);
        obj["opacity"] = self.animation;
        const obj1 = {};
        const animation = self.animation;
        const obj2 = { inputRange: [0, 1] };
        let num5 = -72;
        if (bottom) {
          num5 = 72;
        }
        const items = [num5, ];
        let num6 = 0;
        if (this.state.active) {
          num6 = 1;
        }
        items[1] = num6;
        obj2.outputRange = items;
        obj1.translateY = animation.interpolate(obj2);
        const items1 = [obj1];
        obj["transform"] = items1;
      }
      return obj;
    }
  };
  items[5] = {
    key: "render",
    value() {
      let mention;
      let section;
      const tmp = outer1_15(this.context);
      const props = this.props;
      ({ mention, section } = props.item);
      let obj = { accessibilityRole: "button", onPress: this.handlePress, onPressIn: this.handlePressIn, onPressOut: this.handlePressOut, testID: "unread-bar-touchable-" + mention + "-" + section };
      obj = { style: this.getAnimatedStyle(), nativeID: "unread-bar-animated-view-" + mention + "-" + section };
      obj = {};
      const items = [tmp.unread, ];
      mention = undefined;
      if (mention) {
        mention = tmp.mention;
      }
      items[1] = mention;
      obj.style = items;
      obj.nativeID = "unread-bar-view-" + mention + "-" + section;
      const obj1 = { style: tmp.unreadText, maxFontSizeMultiplier: 1.5 };
      const intl = UnreadBar(outer1_2[17]).intl;
      const string = intl.string;
      const t = UnreadBar(outer1_2[17]).t;
      if (props.compact) {
        let stringResult = string(t.y2b7CA);
      } else if (mention) {
        stringResult = string(t["8zH0LJ"]);
      } else {
        stringResult = string(t.FCRiT3);
      }
      obj1.children = stringResult;
      obj.children = outer1_13(UnreadBar(outer1_2[16]).LegacyText, obj1);
      obj.children = outer1_13(outer1_9, obj);
      obj.children = outer1_13(outer1_10.View, obj);
      return outer1_13(outer1_11, obj);
    }
  };
  return callback(UnreadBar, items);
})(importAllResult.PureComponent);
let closure_16 = tmp7;
tmp7.defaultProps = { bottom: false };
tmp7.contextType = require("ManaContext").ThemeContext;
let obj1 = { uppercase: true };
let result = require("_possibleConstructorReturn").fileFinishedImporting("components_native/common/UnreadBars.tsx");

export default function UnreadBars(contentInset) {
  let afterItem;
  let beforeItem;
  let compact;
  let require;
  ({ scrollToLocation: require, beforeItem, afterItem, compact } = contentInset);
  if (compact === undefined) {
    compact = false;
  }
  contentInset = contentInset.contentInset;
  if (contentInset === undefined) {
    contentInset = { top: 0, left: 0, right: 0, bottom: 0 };
  }
  function handlePress(section) {
    callback({ section: section.section, item: section.row, animated: true });
  }
  let obj1 = require(566) /* initialize */;
  const items = [closure_12];
  const stateFromStores = obj1.useStateFromStores(items, () => outer1_12.useReducedMotion);
  let obj = { component: importAllResult.Fragment };
  let tmp3 = null;
  if (null != beforeItem) {
    obj = { compact, item: beforeItem, onPress: handlePress, contentInset, useReducedMotion: stateFromStores };
    tmp3 = callback3(closure_16, obj, "BEFORE");
  }
  const items1 = [tmp3, ];
  let tmp6 = null;
  if (null != afterItem) {
    obj1 = { compact, item: afterItem, onPress: handlePress, contentInset, bottom: true, useReducedMotion: stateFromStores };
    tmp6 = callback3(closure_16, obj1, "AFTER");
  }
  items1[1] = tmp6;
  obj.children = items1;
  return closure_14(require(10364) /* _toPropertyKey */.TransitionGroup, obj);
};
