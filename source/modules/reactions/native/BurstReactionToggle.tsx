// Module ID: 9376
// Function ID: 73194
// Name: BurstReactionToggle
// Dependencies: [31, 27, 4122, 1345, 33, 3991, 566, 3834, 689, 4131, 4542, 4130, 9377, 1212, 7483, 2]
// Exports: default

// Module 9376 (BurstReactionToggle)
import result from "result";
import { Pressable } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { ContentDismissActionType } from "ContentDismissActionType";
import { jsx } from "jsxProd";
import { Easing } from "module_3991";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
let obj = { duration: 100 };
obj.easing = Easing.out(require("module_3991").Easing.quad);
let closure_9 = { stiffness: 750, mass: 2.5, damping: 70 };
let closure_10 = { code: "function BurstReactionToggleTsx1(){const{reducedMotion,targetBackgroundColor,backgroundColor,rotation}=this.__closure;const _backgroundColor=reducedMotion?targetBackgroundColor:backgroundColor.get();const _rotation=reducedMotion?0:rotation.get();return{backgroundColor:_backgroundColor,transform:[{rotate:_rotation+\"deg\"}]};}" };
obj = {};
obj = { borderRadius: require("_createForOfIteratorHelperLoose").modules.button.BORDER_RADIUS, padding: 8, marginLeft: 8, width: 40, height: 40 };
obj.container = obj;
let closure_11 = _createForOfIteratorHelperLoose.createStyles(obj);
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/reactions/native/BurstReactionToggle.tsx");

export default function BurstReactionToggle(arg0) {
  let isActive;
  let require;
  ({ onPress: require, isActive } = arg0);
  let importDefault;
  let colors = importDefault(689).colors;
  const ref = React.useRef(null);
  importDefault = importDefault(9377)(ref);
  let obj = {
    onPress() {
      callback2(outer1_6.AUTO);
      callback();
    },
    accessible: true
  };
  const intl = require(1212) /* getSystemLocale */.intl;
  const string = intl.string;
  const t = require(1212) /* getSystemLocale */.t;
  if (isActive) {
    let stringResult = string(t["5cRA/b"]);
  } else {
    stringResult = string(t.buV4av);
  }
  obj.accessibilityLabel = stringResult;
  obj.accessibilityRole = "switch";
  obj.accessibilityState = { checked: isActive };
  obj = { style: items, ref };
  items = [
    callback().container,
    (function useBurstToggleStyles(isActive) {
      let obj = outer1_0(outer1_2[6]);
      let items = [outer1_5];
      const stateFromStores = obj.useStateFromStores(items, () => outer2_5.useReducedMotion);
      const colors = callback2(outer1_2[8]).colors;
      const token = outer1_0(outer1_2[7]).useToken(isActive ? colors.BACKGROUND_BRAND : colors.INPUT_BACKGROUND_DEFAULT);
      let str = "";
      if (null != token) {
        str = token;
      }
      let num = 0;
      if (isActive) {
        num = 360;
      }
      const obj2 = outer1_0(outer1_2[7]);
      const sharedValue = outer1_0(outer1_2[5]).useSharedValue(str);
      const obj3 = outer1_0(outer1_2[5]);
      const sharedValue1 = outer1_0(outer1_2[5]).useSharedValue(num);
      const obj4 = outer1_0(outer1_2[5]);
      const fn = function c() {
        let obj = {};
        if (stateFromStores) {
          let value = str;
        } else {
          value = sharedValue.get();
        }
        obj.backgroundColor = value;
        obj = {};
        let num = 0;
        if (!stateFromStores) {
          num = sharedValue1.get();
        }
        obj.rotate = "" + num + "deg";
        const items = [obj];
        obj.transform = items;
        return obj;
      };
      obj = { reducedMotion: stateFromStores, targetBackgroundColor: str, backgroundColor: sharedValue, rotation: sharedValue1 };
      fn.__closure = obj;
      fn.__workletHash = 1525758595013;
      fn.__initData = outer1_10;
      const items1 = [sharedValue, str, sharedValue1, num];
      const containerStyle = outer1_0(outer1_2[5]).useAnimatedStyle(fn);
      const effect = outer1_3.useEffect(() => {
        const result = sharedValue.set(outer2_0(outer2_2[9]).withTiming(str, outer2_8));
        const obj = outer2_0(outer2_2[9]);
        const result1 = sharedValue1.set(outer2_0(outer2_2[10]).withSpring(num, outer2_9));
      }, items1);
      return { containerStyle };
    })(isActive).containerStyle
  ];
  obj.children = jsx(require(7483) /* SuperReactionIcon */.SuperReactionIcon, { color: isActive ? colors.WHITE : colors.INTERACTIVE_TEXT_DEFAULT });
  obj.children = jsx(importDefault(3991).View, { style: items, ref });
  return <Pressable style={items} ref={ref} />;
};
