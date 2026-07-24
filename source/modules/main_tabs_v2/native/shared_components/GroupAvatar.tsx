// Module ID: 11988
// Function ID: 92675
// Name: AnimatedContainer
// Dependencies: [31, 27, 4122, 33, 4130, 689, 4973, 1324, 3976, 5122, 624, 3991, 4131, 4542, 4126, 5085, 2]
// Exports: default

// Module 11988 (AnimatedContainer)
import result from "result";
import { View } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import jsxProd from "jsxProd";
import { createElement } from "result";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_6;
let closure_7;
const require = arg1;
function AnimatedContainer(scale) {
  let children;
  let shadow;
  scale = scale.scale;
  const translateX = scale.translateX;
  const translateY = scale.translateY;
  const animateOnMount = scale.animateOnMount;
  let sharedValue;
  let sharedValue1;
  let sharedValue2;
  let sharedValue3;
  ({ shadow, children } = scale);
  const tmp = callback3(translateX(translateY[7])("GroupAvatar"));
  let obj = scale(translateY[10]);
  let items = [sharedValue1];
  const stateFromStores = obj.useStateFromStores(items, () => sharedValue1.useReducedMotion);
  let num = 1;
  if (animateOnMount) {
    num = 0;
  }
  sharedValue = scale(translateY[11]).useSharedValue(num);
  const obj2 = scale(translateY[11]);
  let num2 = 0;
  if (!animateOnMount) {
    num2 = translateY;
  }
  sharedValue1 = scale(translateY[11]).useSharedValue(num2);
  const obj3 = scale(translateY[11]);
  let num3 = 0;
  if (!animateOnMount) {
    num3 = translateX;
  }
  sharedValue2 = scale(translateY[11]).useSharedValue(num3);
  let obj4 = scale(translateY[11]);
  let result = scale;
  if (animateOnMount) {
    result = scale / 2;
  }
  sharedValue3 = scale(translateY[11]).useSharedValue(result);
  const items1 = [sharedValue, sharedValue3, sharedValue1, sharedValue2, scale, translateY, translateX];
  const effect = stateFromStores.useEffect(() => {
    const result = sharedValue.set(1);
    const result1 = sharedValue3.set(scale);
    const result2 = sharedValue1.set(translateY);
    const result3 = sharedValue2.set(translateX);
  }, items1);
  const obj5 = scale(translateY[11]);
  class T {
    constructor() {
      obj = {};
      obj2 = scale(translateY[12]);
      obj.opacity = obj2.withTiming(c4.get());
      obj = {};
      if (result) {
        tmp6 = c6;
        value = c6.get();
      } else {
        tmp = scale;
        tmp2 = translateY;
        num = 13;
        obj4 = scale(translateY[13]);
        tmp3 = c6;
        tmp4 = outer1_10;
        value = obj4.withSpring(c6.get(), outer1_10);
      }
      obj.translateX = value;
      items = [, , ];
      items[0] = obj;
      obj1 = {};
      if (result) {
        tmp12 = useStateFromStores;
        value1 = useStateFromStores.get();
      } else {
        tmp7 = scale;
        tmp8 = translateY;
        num2 = 13;
        obj6 = scale(translateY[13]);
        tmp9 = useStateFromStores;
        tmp10 = outer1_10;
        value1 = obj6.withSpring(useStateFromStores.get(), outer1_10);
      }
      obj1.translateY = value1;
      items[1] = obj1;
      obj2 = {};
      if (result) {
        tmp18 = c7;
        value2 = c7.get();
      } else {
        tmp13 = scale;
        tmp14 = translateY;
        num3 = 13;
        obj8 = scale(translateY[13]);
        tmp15 = c7;
        tmp16 = outer1_9;
        value2 = obj8.withSpring(c7.get(), outer1_9);
      }
      obj2.scale = value2;
      items[2] = obj2;
      obj.transform = items;
      return obj;
    }
  }
  obj = { withTiming: scale(translateY[12]).withTiming, opacityAnimation: sharedValue, useReducedMotion: stateFromStores, translateXAnimation: sharedValue2, withSpring: scale(translateY[13]).withSpring, SPRING_OPTIONS_POSITION: closure_10, translateYAnimation: sharedValue1, scaleAnimation: sharedValue3, SPRING_OPTIONS_SCALE: closure_9 };
  T.__closure = obj;
  T.__workletHash = 8800301056148;
  T.__initData = closure_13;
  const animatedStyle = scale(translateY[11]).useAnimatedStyle(T);
  obj = {};
  const items2 = [tmp.avatarContainer, animatedStyle, ];
  shadow = undefined;
  if (shadow) {
    shadow = tmp.shadow;
  }
  items2[2] = shadow;
  obj.style = items2;
  obj.children = children;
  return sharedValue2(translateX(translateY[11]).View, obj);
}
function GroupMemberCount(count) {
  const tmp = callback3(importDefault(1324)("GroupAvatar"));
  let obj = { style: tmp.avatarWrapper };
  obj = { style: tmp.overflowCount, children: callback2(require(4126) /* Text */.Text, { variant: "text-sm/semibold", children: items }) };
  items = ["+", count.count];
  obj.children = callback(View, obj);
  return callback(View, obj);
}
function GroupMemberAvatar(guildId) {
  guildId = guildId.guildId;
  const user = guildId.user;
  const tmp = callback3(user(1324)("GroupAvatar"));
  const items = [guildId, user];
  const memo = React.useMemo(() => {
    let avatarSource;
    if (null != user) {
      avatarSource = user.getAvatarSource(guildId, false, 32);
    }
    return avatarSource;
  }, items);
  let tmp3 = null;
  if (null != memo) {
    let obj = { style: tmp.avatarWrapper };
    obj = { style: tmp.avatar, source: memo };
    obj.children = callback(user(5085), obj);
    tmp3 = callback(View, obj);
  }
  return tmp3;
}
({ jsx: closure_6, jsxs: closure_7 } = jsxProd);
let closure_9 = { damping: 30, stiffness: 400 };
let closure_10 = { damping: 30, stiffness: 400 };
let closure_11 = _createForOfIteratorHelperLoose.createStyles((arg0) => {
  let obj = { groupContainer: { position: "relative" } };
  obj = { borderRadius: importDefault(689).radii.sm };
  let BLACK;
  if (!arg0) {
    BLACK = importDefault(689).colors.BLACK;
  }
  obj.shadowColor = BLACK;
  obj = undefined;
  if (!arg0) {
    obj = { width: 0, height: 0 };
  }
  obj.shadowOffset = obj;
  obj.shadowRadius = 5;
  obj.shadowOpacity = 0.2;
  obj.elevation = 10;
  obj.shadowContainer = obj;
  const obj1 = {};
  let prop;
  if (!arg0) {
    prop = importDefault(689).colors.CARD_BACKGROUND_DEFAULT;
  }
  obj1.backgroundColor = prop;
  obj.shadowContainerBackground = obj1;
  const obj2 = {};
  let WHITE;
  if (!arg0) {
    WHITE = importDefault(689).colors.WHITE;
  }
  obj2.backgroundColor = WHITE;
  obj2.opacity = 0.4;
  obj.shadowContainerBackgroundLight = obj2;
  const obj3 = {};
  let WHITE1;
  if (!arg0) {
    WHITE1 = importDefault(689).colors.WHITE;
  }
  obj3.backgroundColor = WHITE1;
  obj3.opacity = 0.15;
  obj.shadowContainerBackgroundDark = obj3;
  const obj4 = { width: importDefault(689).modules.mobile.GROUP_AVATAR_SIZE, height: importDefault(689).modules.mobile.GROUP_AVATAR_SIZE, overflow: "hidden", borderRadius: importDefault(689).radii.sm };
  let prop1;
  if (!arg0) {
    prop1 = importDefault(689).colors.CARD_BACKGROUND_DEFAULT;
  }
  obj4.backgroundColor = prop1;
  obj.gradientContainer = obj4;
  const obj5 = { position: "absolute", left: 0, top: 0, right: 0, bottom: 0 };
  let prop2;
  if (!arg0) {
    prop2 = importDefault(689).colors.BACKGROUND_MOD_SUBTLE;
  }
  obj5.backgroundColor = prop2;
  obj.gradientDimOverlay = obj5;
  const obj6 = { width: importDefault(689).modules.mobile.GROUP_AVATAR_SIZE, height: importDefault(689).modules.mobile.GROUP_AVATAR_SIZE, borderRadius: importDefault(689).radii.sm, borderWidth: 1 };
  let BORDER_SUBTLE;
  if (!arg0) {
    BORDER_SUBTLE = importDefault(689).colors.BORDER_SUBTLE;
  }
  obj6.borderColor = BORDER_SUBTLE;
  obj6.position = "absolute";
  obj.gradientImageBorder = obj6;
  obj.avatarContainer = { position: "absolute", top: "50%", left: "50%", width: 38, height: 38, marginTop: -19, marginLeft: -19 };
  const obj7 = {};
  let BLACK1;
  if (!arg0) {
    BLACK1 = importDefault(689).colors.BLACK;
  }
  obj7.shadowColor = BLACK1;
  let DARK_03_LIGHT_02;
  if (!arg0) {
    DARK_03_LIGHT_02 = require(4973) /* result */.DARK_03_LIGHT_02;
  }
  obj7.shadowOpacity = DARK_03_LIGHT_02;
  let obj8;
  if (!arg0) {
    obj8 = { width: 0, height: 3 };
  }
  obj7.shadowOffset = obj8;
  obj7.shadowRadius = 2;
  obj.shadow = obj7;
  obj.avatar = { width: 32, height: 32, position: "absolute", borderRadius: 16 };
  const obj9 = { position: "absolute", width: 38, height: 38, justifyContent: "center", alignItems: "center", borderRadius: 19 };
  let prop3;
  if (!arg0) {
    prop3 = importDefault(689).colors.BACKGROUND_BASE_LOWER;
  }
  obj9.backgroundColor = prop3;
  obj.avatarWrapper = obj9;
  const obj10 = { width: 38, height: 38, position: "absolute", borderRadius: 19, backgroundColor: null, display: "flex", alignItems: "center", justifyContent: "center" };
  const colors = importDefault(689).colors;
  obj10.backgroundColor = arg0 ? colors.BACKGROUND_MOD_SUBTLE : colors.BACKGROUND_BASE_LOWER;
  obj.overflowCount = obj10;
  return obj;
});
let items = [{ translateY: 0, translateX: 0, scale: 1 }, { translateY: 0, translateX: 0, scale: 0 }, { translateY: 0, translateX: 0, scale: 0 }, { translateY: 0, translateX: 0, scale: 0 }];
let items1 = [items, , , ];
let items2 = [{ translateY: -14, translateX: -14, scale: 0.75 }, { translateY: 12, translateX: 12, scale: 0.875 }, { translateY: 0, translateX: 0, scale: 0 }, { translateY: 0, translateX: 0, scale: 0 }];
items1[1] = items2;
const items3 = [{ translateY: -4, translateX: 16, scale: 0.75 }, { translateY: 14, translateX: -14, scale: 0.875 }, { translateY: -18, translateX: -12, scale: 0.625 }, { translateY: 0, translateX: 0, scale: 0 }];
items1[2] = items3;
const items4 = [{ translateY: -14, translateX: -14, scale: 0.875 }, { translateY: 14, translateX: 14, scale: 0.875 }, { translateY: -18, translateX: 18, scale: 0.625 }, { translateY: 18, translateX: -18, scale: 0.625 }];
items1[3] = items4;
let closure_13 = { code: "function GroupAvatarTsx1(){const{withTiming,opacityAnimation,useReducedMotion,translateXAnimation,withSpring,SPRING_OPTIONS_POSITION,translateYAnimation,scaleAnimation,SPRING_OPTIONS_SCALE}=this.__closure;return{opacity:withTiming(opacityAnimation.get()),transform:[{translateX:useReducedMotion?translateXAnimation.get():withSpring(translateXAnimation.get(),SPRING_OPTIONS_POSITION)},{translateY:useReducedMotion?translateYAnimation.get():withSpring(translateYAnimation.get(),SPRING_OPTIONS_POSITION)},{scale:useReducedMotion?scaleAnimation.get():withSpring(scaleAnimation.get(),SPRING_OPTIONS_SCALE)}]};}" };
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/main_tabs_v2/native/shared_components/GroupAvatar.tsx");

export default function GroupAvatar(users) {
  let primaryColor;
  let theme;
  users = users.users;
  const guildId = users.guildId;
  let ref;
  let React;
  let c4;
  let num;
  let callback;
  const tmp = callback3(guildId(ref[7])("GroupAvatar"));
  let obj = users(ref[8]);
  const themeContext = obj.useThemeContext();
  ({ primaryColor, theme } = themeContext);
  let obj1 = users(ref[8]);
  let shadowContainerBackground = obj1.isThemeLight(theme) ? tmp.shadowContainerBackgroundLight : tmp.shadowContainerBackgroundDark;
  ref = React.useRef(false);
  const effect = React.useEffect(() => {
    ref.current = true;
  }, []);
  React = users.length > 4;
  const diff = users.length - 3;
  c4 = diff;
  num = 2;
  if (diff >= 10) {
    num = 1;
  }
  callback = guildId(ref[9])(ref);
  obj = { style: tmp.groupContainer };
  obj = {};
  const items = [tmp.shadowContainer, ];
  const mapped = items1[Math.max(Math, 0, Math.min(Math, items1.length - 1, users.length - 1))].map((arg0, arg1) => {
    if (null == users[arg1]) {
      return null;
    } else {
      let obj = {};
      const merged = Object.assign(arg0);
      obj["key"] = tmp.id;
      obj["animateOnMount"] = callback;
      obj["shadow"] = users.length >= 2;
      if (!result) {
        obj = { guildId, user: tmp };
        let tmp14 = callback(outer1_16, obj);
        tmp2(tmp3, obj, tmp14);
      }
      obj = { count: c4 };
      tmp14 = callback(outer1_15, obj);
      tmp2 = outer1_8;
      tmp3 = outer1_14;
    }
  });
  if (null == primaryColor) {
    shadowContainerBackground = tmp.shadowContainerBackground;
  }
  items[1] = shadowContainerBackground;
  obj.style = items;
  obj1 = { style: tmp.gradientContainer };
  let tmp13 = null == primaryColor;
  if (tmp13) {
    const obj2 = { style: tmp.gradientDimOverlay };
    tmp13 = callback(c4, obj2);
  }
  obj1.children = tmp13;
  items1 = [callback(c4, obj1), callback(c4, { style: tmp.gradientImageBorder })];
  obj.children = items1;
  const items2 = [closure_7(c4, obj), mapped];
  obj.children = items2;
  return closure_7(c4, obj);
};
