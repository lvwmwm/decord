// Module ID: 11950
// Function ID: 92386
// Name: AnimatedContainer
// Dependencies: []
// Exports: default

// Module 11950 (AnimatedContainer)
function AnimatedContainer(scale) {
  let children;
  let shadow;
  scale = scale.scale;
  const arg1 = scale;
  const translateX = scale.translateX;
  const importDefault = translateX;
  const translateY = scale.translateY;
  const dependencyMap = translateY;
  const animateOnMount = scale.animateOnMount;
  let View;
  let closure_5;
  let sharedValue2;
  let sharedValue3;
  ({ shadow, children } = scale);
  const tmp = callback3(importDefault(dependencyMap[7])("GroupAvatar"));
  let obj = arg1(dependencyMap[10]);
  const items = [closure_5];
  const stateFromStores = obj.useStateFromStores(items, () => sharedValue1.useReducedMotion);
  const React = stateFromStores;
  let num = 1;
  if (animateOnMount) {
    num = 0;
  }
  const sharedValue = arg1(dependencyMap[11]).useSharedValue(num);
  View = sharedValue;
  const obj2 = arg1(dependencyMap[11]);
  let num2 = 0;
  if (!animateOnMount) {
    num2 = translateY;
  }
  const sharedValue1 = arg1(dependencyMap[11]).useSharedValue(num2);
  closure_5 = sharedValue1;
  const obj3 = arg1(dependencyMap[11]);
  let num3 = 0;
  if (!animateOnMount) {
    num3 = translateX;
  }
  sharedValue2 = arg1(dependencyMap[11]).useSharedValue(num3);
  const obj4 = arg1(dependencyMap[11]);
  let result = scale;
  if (animateOnMount) {
    result = scale / 2;
  }
  sharedValue3 = arg1(dependencyMap[11]).useSharedValue(result);
  const items1 = [sharedValue, sharedValue3, sharedValue1, sharedValue2, scale, translateY, translateX];
  const effect = React.useEffect(() => {
    const result = sharedValue.set(1);
    const result1 = sharedValue3.set(scale);
    const result2 = sharedValue1.set(translateY);
    const result3 = sharedValue2.set(translateX);
  }, items1);
  const obj5 = arg1(dependencyMap[11]);
  class T {
    constructor() {
      obj = {};
      obj2 = scale(translateY[12]);
      obj.opacity = obj2.withTiming(closure_4.get());
      obj = {};
      if (closure_3) {
        tmp6 = closure_6;
        value = closure_6.get();
      } else {
        tmp = scale;
        tmp2 = translateY;
        num = 13;
        obj4 = scale(translateY[13]);
        tmp3 = closure_6;
        tmp4 = closure_10;
        value = obj4.withSpring(closure_6.get(), closure_10);
      }
      obj.translateX = value;
      items = [, , ];
      items[0] = obj;
      obj1 = {};
      if (closure_3) {
        tmp12 = useStateFromStores;
        value1 = useStateFromStores.get();
      } else {
        tmp7 = scale;
        tmp8 = translateY;
        num2 = 13;
        obj6 = scale(translateY[13]);
        tmp9 = useStateFromStores;
        tmp10 = closure_10;
        value1 = obj6.withSpring(useStateFromStores.get(), closure_10);
      }
      obj1.translateY = value1;
      items[1] = obj1;
      obj2 = {};
      if (closure_3) {
        tmp18 = closure_7;
        value2 = closure_7.get();
      } else {
        tmp13 = scale;
        tmp14 = translateY;
        num3 = 13;
        obj8 = scale(translateY[13]);
        tmp15 = closure_7;
        tmp16 = closure_9;
        value2 = obj8.withSpring(closure_7.get(), closure_9);
      }
      obj2.scale = value2;
      items[2] = obj2;
      obj.transform = items;
      return obj;
    }
  }
  obj = { withTiming: arg1(dependencyMap[12]).withTiming, opacityAnimation: sharedValue, useReducedMotion: stateFromStores, translateXAnimation: sharedValue2, withSpring: arg1(dependencyMap[13]).withSpring, SPRING_OPTIONS_POSITION: closure_10, translateYAnimation: sharedValue1, scaleAnimation: sharedValue3, SPRING_OPTIONS_SCALE: closure_9 };
  T.__closure = obj;
  T.__workletHash = 8800301056148;
  T.__initData = closure_13;
  const animatedStyle = arg1(dependencyMap[11]).useAnimatedStyle(T);
  obj = {};
  const items2 = [tmp.avatarContainer, animatedStyle, ];
  shadow = undefined;
  if (shadow) {
    shadow = tmp.shadow;
  }
  items2[2] = shadow;
  obj.style = items2;
  obj.children = children;
  return sharedValue2(importDefault(dependencyMap[11]).View, obj);
}
function GroupMemberCount(count) {
  const tmp = callback3(importDefault(dependencyMap[7])("GroupAvatar"));
  let obj = { style: tmp.avatarWrapper };
  obj = { style: tmp.overflowCount, children: callback2(arg1(dependencyMap[14]).Text, { variant: "text-sm/semibold", children: items }) };
  const items = [null, count.count];
  obj.children = callback(View, obj);
  return callback(View, obj);
}
function GroupMemberAvatar(guildId) {
  guildId = guildId.guildId;
  const arg1 = guildId;
  const user = guildId.user;
  const importDefault = user;
  const tmp = callback3(importDefault(dependencyMap[7])("GroupAvatar"));
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
    obj.children = callback(importDefault(dependencyMap[15]), obj);
    tmp3 = callback(View, obj);
  }
  return tmp3;
}
let closure_3 = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
let closure_5 = importDefault(dependencyMap[2]);
({ jsx: closure_6, jsxs: closure_7 } = arg1(dependencyMap[3]));
const createElement = arg1(dependencyMap[0]).createElement;
let closure_9 = { "Null": 1, "Null": "last_impression_time" };
let closure_10 = { "Null": 1, "Null": "last_impression_time" };
const tmp2 = arg1(dependencyMap[3]);
let closure_11 = arg1(dependencyMap[4]).createStyles((arg0) => {
  let obj = { groupContainer: { position: "relative" } };
  obj = { borderRadius: importDefault(dependencyMap[5]).radii.sm };
  let BLACK;
  if (!arg0) {
    BLACK = importDefault(dependencyMap[5]).colors.BLACK;
  }
  obj.shadowColor = BLACK;
  obj = undefined;
  if (!arg0) {
    obj = { "Null": "%FunctionPrototype%", "Null": "paddingStart" };
  }
  obj.shadowOffset = obj;
  obj.shadowRadius = 5;
  obj.shadowOpacity = 0.2;
  obj.elevation = 10;
  obj.shadowContainer = obj;
  const obj1 = {};
  let prop;
  if (!arg0) {
    prop = importDefault(dependencyMap[5]).colors.CARD_BACKGROUND_DEFAULT;
  }
  obj1.backgroundColor = prop;
  obj.shadowContainerBackground = obj1;
  const obj2 = {};
  let WHITE;
  if (!arg0) {
    WHITE = importDefault(dependencyMap[5]).colors.WHITE;
  }
  obj2.backgroundColor = WHITE;
  obj2.opacity = 0.4;
  obj.shadowContainerBackgroundLight = obj2;
  const obj3 = {};
  let WHITE1;
  if (!arg0) {
    WHITE1 = importDefault(dependencyMap[5]).colors.WHITE;
  }
  obj3.backgroundColor = WHITE1;
  obj3.opacity = 0.15;
  obj.shadowContainerBackgroundDark = obj3;
  const obj4 = { width: importDefault(dependencyMap[5]).modules.mobile.GROUP_AVATAR_SIZE, height: importDefault(dependencyMap[5]).modules.mobile.GROUP_AVATAR_SIZE, overflow: "hidden", borderRadius: importDefault(dependencyMap[5]).radii.sm };
  let prop1;
  if (!arg0) {
    prop1 = importDefault(dependencyMap[5]).colors.CARD_BACKGROUND_DEFAULT;
  }
  obj4.backgroundColor = prop1;
  obj.gradientContainer = obj4;
  const obj5 = { playerState: "center", onDataReceived: -24, baseURL: null, injectedJavaScript: 1, panGestureConfig: "Malaysia" };
  let prop2;
  if (!arg0) {
    prop2 = importDefault(dependencyMap[5]).colors.BACKGROUND_MOD_SUBTLE;
  }
  obj5.backgroundColor = prop2;
  obj.gradientDimOverlay = obj5;
  const obj6 = { width: importDefault(dependencyMap[5]).modules.mobile.GROUP_AVATAR_SIZE, height: importDefault(dependencyMap[5]).modules.mobile.GROUP_AVATAR_SIZE, borderRadius: importDefault(dependencyMap[5]).radii.sm, borderWidth: 1 };
  let BORDER_SUBTLE;
  if (!arg0) {
    BORDER_SUBTLE = importDefault(dependencyMap[5]).colors.BORDER_SUBTLE;
  }
  obj6.borderColor = BORDER_SUBTLE;
  obj6.position = "absolute";
  obj.gradientImageBorder = obj6;
  obj.avatarContainer = {};
  const obj7 = {};
  let BLACK1;
  if (!arg0) {
    BLACK1 = importDefault(dependencyMap[5]).colors.BLACK;
  }
  obj7.shadowColor = BLACK1;
  let DARK_03_LIGHT_02;
  if (!arg0) {
    DARK_03_LIGHT_02 = arg1(dependencyMap[6]).DARK_03_LIGHT_02;
  }
  obj7.shadowOpacity = DARK_03_LIGHT_02;
  let obj8;
  if (!arg0) {
    obj8 = { "Null": 2, "Null": "text-sm/semibold" };
  }
  obj7.shadowOffset = obj8;
  obj7.shadowRadius = 2;
  obj.shadow = obj7;
  obj.avatar = { y: true, isArray: "/assets/design/components/Icon/native/redesign/generated/images", createStyles: 24, push: 24 };
  const obj9 = {};
  let prop3;
  if (!arg0) {
    prop3 = importDefault(dependencyMap[5]).colors.BACKGROUND_BASE_LOWER;
  }
  obj9.backgroundColor = prop3;
  obj.avatarWrapper = obj9;
  const obj10 = {};
  const colors = importDefault(dependencyMap[5]).colors;
  obj10.backgroundColor = arg0 ? colors.BACKGROUND_MOD_SUBTLE : colors.BACKGROUND_BASE_LOWER;
  obj.overflowCount = obj10;
  return obj;
});
const items = [{}, { "Bool(false)": "spring", "Bool(false)": 0.4, "Bool(false)": 1 }, { "Bool(false)": "spring", "Bool(false)": 0.4, "Bool(false)": 1 }, { "Bool(false)": "spring", "Bool(false)": 0.4, "Bool(false)": 1 }];
const items1 = [items, , , ];
const items2 = [{}, { "Bool(false)": 1900038762, "Bool(false)": 3, "Bool(false)": 46199617 }, { "Bool(false)": "spring", "Bool(false)": 0.4, "Bool(false)": 1 }, { "Bool(false)": "spring", "Bool(false)": 0.4, "Bool(false)": 1 }];
items1[1] = items2;
const items3 = [{ "Bool(false)": true, "Bool(false)": true, "Bool(false)": true }, { "Bool(false)": false, "Bool(false)": false, "Bool(false)": false }, { "Bool(false)": "ThreadMinusIcon", "Bool(false)": "png", "Bool(false)": true }, { "Bool(false)": "spring", "Bool(false)": 0.4, "Bool(false)": 1 }];
items1[2] = items3;
const items4 = [{}, { "Bool(false)": "<string:1912602975>", "Bool(false)": "height", "Bool(false)": "height" }, {}, { "Bool(false)": "cursorHead", "Bool(false)": "fi", "Bool(false)": "paddingStart" }];
items1[3] = items4;
let closure_13 = { code: "function GroupAvatarTsx1(){const{withTiming,opacityAnimation,useReducedMotion,translateXAnimation,withSpring,SPRING_OPTIONS_POSITION,translateYAnimation,scaleAnimation,SPRING_OPTIONS_SCALE}=this.__closure;return{opacity:withTiming(opacityAnimation.get()),transform:[{translateX:useReducedMotion?translateXAnimation.get():withSpring(translateXAnimation.get(),SPRING_OPTIONS_POSITION)},{translateY:useReducedMotion?translateYAnimation.get():withSpring(translateYAnimation.get(),SPRING_OPTIONS_POSITION)},{scale:useReducedMotion?scaleAnimation.get():withSpring(scaleAnimation.get(),SPRING_OPTIONS_SCALE)}]};}" };
const obj = arg1(dependencyMap[4]);
const result = arg1(dependencyMap[16]).fileFinishedImporting("modules/main_tabs_v2/native/shared_components/GroupAvatar.tsx");

export default function GroupAvatar(users) {
  let primaryColor;
  let theme;
  users = users.users;
  const arg1 = users;
  const importDefault = users.guildId;
  let dependencyMap;
  let React;
  let View;
  let closure_5;
  let callback;
  const tmp = callback3(importDefault(dependencyMap[7])("GroupAvatar"));
  let obj = arg1(dependencyMap[8]);
  const themeContext = obj.useThemeContext();
  ({ primaryColor, theme } = themeContext);
  let obj1 = arg1(dependencyMap[8]);
  let shadowContainerBackground = obj1.isThemeLight(theme) ? tmp.shadowContainerBackgroundLight : tmp.shadowContainerBackgroundDark;
  const ref = React.useRef(false);
  dependencyMap = ref;
  const effect = React.useEffect(() => {
    ref.current = true;
  }, []);
  React = users.length > 4;
  const diff = users.length - 3;
  View = diff;
  let num = 2;
  if (diff >= 10) {
    num = 1;
  }
  closure_5 = num;
  callback = importDefault(dependencyMap[9])(ref);
  obj = { style: tmp.groupContainer };
  obj = {};
  const items = [tmp.shadowContainer, ];
  const mapped = items1[Math.max(Math, 0, Math.min(Math, closure_12.length - 1, users.length - 1))].map((arg0, arg1) => {
    if (null == users[arg1]) {
      return null;
    } else {
      let obj = {};
      const merged = Object.assign(arg0);
      obj["key"] = tmp.id;
      obj["animateOnMount"] = callback;
      obj["shadow"] = users.length >= 2;
      if (!closure_3) {
        obj = { guildId, user: tmp };
        let tmp14 = callback(closure_16, obj);
        tmp2(tmp3, obj, tmp14);
      }
      obj = { count: diff };
      tmp14 = callback(closure_15, obj);
      const tmp2 = closure_8;
      const tmp3 = closure_14;
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
    tmp13 = callback(View, obj2);
  }
  obj1.children = tmp13;
  const items1 = [callback(View, obj1), callback(View, { style: tmp.gradientImageBorder })];
  obj.children = items1;
  const items2 = [closure_7(View, obj), mapped];
  obj.children = items2;
  return closure_7(View, obj);
};
