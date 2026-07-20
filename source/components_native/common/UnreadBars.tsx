// Module ID: 14750
// Function ID: 111216
// Name: _isNativeReflectConstruct
// Dependencies: []
// Exports: default

// Module 14750 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
const importAllResult = importAll(dependencyMap[5]);
({ View: closure_9, Animated: closure_10, TouchableWithoutFeedback: closure_11 } = arg1(dependencyMap[6]));
let closure_12 = importDefault(dependencyMap[7]);
const tmp3 = arg1(dependencyMap[6]);
({ jsx: closure_13, jsxs: closure_14 } = arg1(dependencyMap[9]));
let obj = arg1(dependencyMap[10]);
obj = {};
obj = {};
const tmp4 = arg1(dependencyMap[9]);
const merged = Object.assign(importDefault(dependencyMap[11])(arg1(dependencyMap[8]).Fonts.DISPLAY_SEMIBOLD, importDefault(dependencyMap[12]).unsafe_rawColors.WHITE, 12, { uppercase: true }));
obj.unreadText = obj;
const obj2 = { "Bool(false)": 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000015459527405317443, "Bool(false)": 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000003337610788552319, "Bool(false)": 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000256882983287256, "Bool(false)": "SpotifyNeutralIcon", borderRadius: importDefault(dependencyMap[12]).radii.md };
const importDefaultResult = importDefault(dependencyMap[11]);
const obj1 = { uppercase: true };
obj2.backgroundColor = arg1(dependencyMap[13]).hexWithOpacity(importDefault(dependencyMap[12]).unsafe_rawColors.PRIMARY_400, 0.9);
obj.unread = obj2;
const obj3 = {};
const obj6 = arg1(dependencyMap[13]);
obj3.backgroundColor = arg1(dependencyMap[13]).hexWithOpacity(importDefault(dependencyMap[12]).unsafe_rawColors.RED_400, 0.9);
obj.mention = obj3;
let closure_15 = obj.createLegacyClassComponentStyles(obj);
const tmp7 = (PureComponent) => {
  class UnreadBar {
    constructor(arg0) {
      self = this;
      items = [...arguments];
      tmp = closure_3(this, UnreadBar);
      items1 = [...items];
      obj = closure_6(UnreadBar);
      tmp2 = closure_5;
      if (closure_17()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_6;
        constructResult = Reflect.construct(obj, items1, closure_6(self).constructor);
      } else {
        constructResult = obj.apply(self, items1);
      }
      tmp2Result = tmp2(self, constructResult);
      UnreadBar = tmp2Result;
      tmp2Result.state = { active: false };
      value = new closure_10.Value(0);
      tmp2Result.animation = value;
      tmp2Result.handlePress = () => {
        let item;
        let onPress;
        ({ item, onPress } = tmp2Result.props);
        const result = tmp2Result(closure_2[14]).triggerHapticFeedback(callback(closure_2[15]).IMPACT_LIGHT);
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
  const arg1 = UnreadBar;
  callback2(UnreadBar, PureComponent);
  let obj = {
    key: "componentWillEnter",
    value(arg0) {
      this.show(arg0);
    }
  };
  const items = [obj, , , , , ];
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
      RN.spring(this.animation, {}).start(arg0);
    }
  };
  items[2] = obj;
  items[3] = {
    key: "hide",
    value(arg0) {
      RN.spring(this.animation, {}).start(arg0);
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
        const obj2 = { inputRange: [null, null] };
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
      const tmp = callback3(this.context);
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
      const intl = UnreadBar(closure_2[17]).intl;
      const string = intl.string;
      const t = UnreadBar(closure_2[17]).t;
      if (props.compact) {
        let stringResult = string(t.y2b7CA);
      } else if (mention) {
        stringResult = string(t.8zH0LJ);
      } else {
        stringResult = string(t.FCRiT3);
      }
      obj1.children = stringResult;
      obj.children = closure_13(UnreadBar(closure_2[16]).LegacyText, obj1);
      obj.children = closure_13(closure_9, obj);
      obj.children = closure_13(RN.View, obj);
      return closure_13(closure_11, obj);
    }
  };
  return callback(UnreadBar, items);
}(importAllResult.PureComponent);
tmp7.defaultProps = { bottom: false };
tmp7.contextType = arg1(dependencyMap[18]).ThemeContext;
const obj8 = arg1(dependencyMap[13]);
const result = arg1(dependencyMap[21]).fileFinishedImporting("components_native/common/UnreadBars.tsx");

export default function UnreadBars(contentInset) {
  let afterItem;
  let beforeItem;
  let compact;
  ({ scrollToLocation: closure_0, beforeItem, afterItem, compact } = contentInset);
  if (compact === undefined) {
    compact = false;
  }
  contentInset = contentInset.contentInset;
  if (contentInset === undefined) {
    contentInset = { "Bool(false)": "r", "Bool(false)": "onRequireModeratorMFAClick", "Bool(false)": "Array", "Bool(false)": "isSpamMessageRequest" };
  }
  function handlePress(section) {
    callback({ section: section.section, item: section.row, animated: true });
  }
  let obj1 = arg1(dependencyMap[19]);
  const items = [closure_12];
  const stateFromStores = obj1.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  let obj = { component: importAllResult.Fragment };
  let tmp3 = null;
  if (null != beforeItem) {
    obj = { compact, item: beforeItem, onPress: handlePress, contentInset, useReducedMotion: stateFromStores };
    tmp3 = callback3(tmp7, obj, "BEFORE");
  }
  const items1 = [tmp3, ];
  let tmp6 = null;
  if (null != afterItem) {
    obj1 = { compact, item: afterItem, onPress: handlePress, contentInset, bottom: true, useReducedMotion: stateFromStores };
    tmp6 = callback3(tmp7, obj1, "AFTER");
  }
  items1[1] = tmp6;
  obj.children = items1;
  return closure_14(arg1(dependencyMap[20]).TransitionGroup, obj);
};
