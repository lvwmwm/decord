// Module ID: 12613
// Function ID: 12614
// Name: GroupAvatar
// Dependencies: [19, 17, 4825, 21, 4836, 576, 4685, 5898, 563, 4566, 4837, 5280, 6401, 4832, 5899, 2]
// Exports: default

// Module 12613 (GroupAvatar)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 19 */;
import nativeDefault from "native" /* 576 */;
import Text_Text from "Text/Text" /* 4832 */;
import timing from "timing" /* 4837 */;
import spring from "spring" /* 5280 */;
import FastImageDefault from "FastImage" /* 5899 */;
import ManaTypeConsolidationExperiment from "ManaTypeConsolidationExperiment" /* 6401 */;
import AccessibilityStore from "AccessibilityStore" /* 4825 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

const react_mod = react2;

let metroImportDefault;
let metroRequire;
function AnimatedContainer(scale) {
  let items2;
  scale = scale.scale;
  const translateX = scale.translateX;
  const translateY = scale.translateY;
  const animateOnMount = scale.animateOnMount;
  let sharedValue;
  let sharedValue2;
  let sharedValue3;
  let sharedValue4;
  const children = scale.children;
  const tmp = closure_12();
  let obj = scale(translateY[8]);
  let items = [sharedValue2];
  const stateFromStores = obj.useStateFromStores(items, () => sharedValue2.useReducedMotion);
  let num = 1;
  const useSharedValue = scale(translateY[9]).useSharedValue;
  const tmp5 = scale(translateY[9]);
  if (animateOnMount) {
    num = 0;
  }
  sharedValue = useSharedValue(num);
  let num2 = 0;
  const useSharedValue2 = tmp2(tmp3[9]).useSharedValue;
  scale(translateY[9]);
  if (!animateOnMount) {
    num2 = translateY;
  }
  sharedValue2 = useSharedValue2(num2);
  let num3 = 0;
  const useSharedValue3 = tmp2(tmp3[9]).useSharedValue;
  scale(translateY[9]);
  if (!animateOnMount) {
    num3 = translateX;
  }
  sharedValue3 = useSharedValue3(num3);
  let result = scale;
  const useSharedValue4 = tmp2(tmp3[9]).useSharedValue;
  scale(translateY[9]);
  if (animateOnMount) {
    result = scale / 2;
  }
  sharedValue4 = useSharedValue4(result);
  items1 = [sharedValue, sharedValue4, sharedValue2, sharedValue3, scale, translateY, translateX];
  const effect = stateFromStores.useEffect(() => {
    const result = sharedValue.set(1);
    const result1 = sharedValue4.set(scale);
    const result2 = sharedValue2.set(translateY);
    const result3 = sharedValue3.set(translateX);
  }, items1);
  const fn = function y() {
    let items;
    let obj2;
    let value3;
    let value4;
    let withSpringResult;
    const obj = { opacity: obj2.withTiming(sharedValue.get()), transform: items };
    obj2 = timing;
    if (stateFromStores) {
      withSpringResult = sharedValue3.get();
    } else {
      const tmpResult = spring;
      withSpringResult = tmpResult.withSpring(sharedValue3.get(), SPRING_OPTIONS_POSITION);
    }
    items = [{ translateX: withSpringResult }, , ];
    if (stateFromStores) {
      value3 = sharedValue2.get();
    } else {
      const tmpResult3 = spring;
      value3 = tmpResult3.withSpring(sharedValue2.get(), SPRING_OPTIONS_POSITION);
    }
    items[1] = { translateY: value3 };
    if (stateFromStores) {
      value4 = sharedValue4.get();
    } else {
      const tmpResult4 = spring;
      value4 = tmpResult4.withSpring(sharedValue4.get(), SPRING_OPTIONS_SCALE);
    }
    items[2] = { scale: value4 };
    return obj;
  };
  const tmp2Result6 = scale(translateY[9]);
  let obj2 = { withTiming: tmp2(tmp3[10]).withTiming, opacityAnimation: sharedValue, useReducedMotion: stateFromStores, translateXAnimation: sharedValue3, withSpring: tmp2(tmp3[11]).withSpring, SPRING_OPTIONS_POSITION, translateYAnimation: sharedValue2, scaleAnimation: sharedValue4, SPRING_OPTIONS_SCALE };
  fn.__closure = obj2;
  fn.__workletHash = 8800301056148;
  fn.__initData = __initData;
  const animatedStyle = tmp2Result6.useAnimatedStyle(fn);
  const obj3 = { style: items2, children };
  items2 = [tmp.avatarContainer, animatedStyle];
  return sharedValue3(translateX(translateY[9]).View, obj3);
}
function GroupMemberCount(count) {
  let Text;
  let items;
  let obj3;
  let obj4;
  let tmp5;
  count = count.count;
  const obj = ManaTypeConsolidationExperiment;
  const manaTypeConsolidationExperiment = obj.useManaTypeConsolidationExperiment("GroupAvatar");
  const tmp2 = closure_12();
  const obj2 = { style: tmp2.avatarWrapper, children: metroRequire(View, obj3) };
  let str = "text-sm/semibold";
  obj3 = { style: tmp2.overflowCount, children: tmp5(Text, obj4) };
  Text = Text_Text.Text;
  tmp5 = metroImportDefault;
  if (manaTypeConsolidationExperiment) {
    str = "text-sm/semibold";
    if (count < 100) {
      str = "experimental/body-md/semibold";
    }
  }
  obj4 = { variant: str, children: items };
  items = ["+", count];
  return metroRequire(View, obj2);
}
function GroupMemberAvatar(guildId) {
  let obj2;
  guildId = guildId.guildId;
  const user = guildId.user;
  const tmp = closure_12();
  const items = [guildId, user];
  const memo = react.useMemo(() => {
    let avatarSource;
    const obj = user;
    if (user != null) {
      avatarSource = obj.getAvatarSource(guildId, false, 32);
    }
    return avatarSource;
  }, items);
  let tmp3 = null;
  if (null != memo) {
    let obj = { style: tmp.avatarWrapper, children: metroRequire(FastImageDefault, obj2) };
    obj2 = { style: tmp.avatar, source: memo };
    tmp3 = metroRequire(View, obj);
  }
  return tmp3;
}
let react = react_mod;
const View = react_native.View;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
const createElement = react2.createElement;
let c9 = 38;
const SPRING_OPTIONS_SCALE = { damping: 30, stiffness: 400 };
const SPRING_OPTIONS_POSITION = { damping: 30, stiffness: 400 };
let closure_12 = createStyles.createStyles(() => {
  let size1;
  let size2;
  let size3;
  const obj = { groupContainer: { position: "relative" }, shadowContainer: { borderRadius: nativeDefault.radii.sm }, shadowContainerBackground: {}, shadowContainerBackgroundLight: { opacity: 0.4 }, shadowContainerBackgroundDark: { opacity: 0.15 }, gradientContainer: size, gradientDimOverlay: { position: "absolute", left: 0, top: 0, right: 0, bottom: 0 }, gradientImageBorder: size1, avatarContainer: size2, avatar: { width: 32, height: 32, position: "absolute", borderRadius: 16 }, avatarWrapper: { position: "absolute", width: v38, height: v38, justifyContent: "center", alignItems: "center", borderRadius: 19 }, overflowCount: size3 };
  ({ borderRadius: nativeDefault.radii.sm });
  size = { width: nativeDefault.modules.mobile.GROUP_AVATAR_SIZE, height: nativeDefault.modules.mobile.GROUP_AVATAR_SIZE, overflow: "hidden", borderRadius: nativeDefault.radii.sm };
  size1 = { width: nativeDefault.modules.mobile.GROUP_AVATAR_SIZE, height: nativeDefault.modules.mobile.GROUP_AVATAR_SIZE, borderRadius: nativeDefault.radii.sm, position: "absolute" };
  size2 = { position: "absolute", top: "50%", left: "50%", width: v38, height: v38, marginTop: -19, marginLeft: -19 };
  size3 = { width: v38, height: v38, position: "absolute", borderRadius: 19, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE, display: "flex", alignItems: "center", justifyContent: "center" };
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
const __initData = { code: "function GroupAvatarTsx1(){const{withTiming,opacityAnimation,useReducedMotion,translateXAnimation,withSpring,SPRING_OPTIONS_POSITION,translateYAnimation,scaleAnimation,SPRING_OPTIONS_SCALE}=this.__closure;return{opacity:withTiming(opacityAnimation.get()),transform:[{translateX:useReducedMotion?translateXAnimation.get():withSpring(translateXAnimation.get(),SPRING_OPTIONS_POSITION)},{translateY:useReducedMotion?translateYAnimation.get():withSpring(translateYAnimation.get(),SPRING_OPTIONS_POSITION)},{scale:useReducedMotion?scaleAnimation.get():withSpring(scaleAnimation.get(),SPRING_OPTIONS_SCALE)}]};}" };
let size = size_mod;
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/GroupAvatar.tsx");

export default function GroupAvatar(users) {
  let closure_3;
  let count;
  let items2;
  let primaryColor;
  let theme;
  let tmp10Result;
  users = users.users;
  const guildId = users.guildId;
  let ref;
  react = undefined;
  let animateOnMount;
  const tmp = closure_12();
  let obj = users(ref[6]);
  const themeContext = obj.useThemeContext();
  ({ primaryColor, theme } = themeContext);
  let obj2 = users(ref[6]);
  let shadowContainerBackground = obj2.isThemeLight(theme) ? tmp.shadowContainerBackgroundLight : tmp.shadowContainerBackgroundDark;
  const tmp2 = ref;
  ref = react.useRef(false);
  const effect = react.useEffect(() => {
    ref.current = true;
  }, []);
  react = users.length > 4;
  const diff = users.length - 3;
  let c4 = diff;
  let num = 2;
  const arr2 = items1[Math.max(Math, 0, Math.min(Math, items1.length - 1, users.length - 1))];
  if (10 <= diff) {
    num = 1;
  }
  animateOnMount = guildId(tmp2[7])(ref);
  let tmp9 = c4;
  let obj3 = { style: tmp.groupContainer, children: items2 };
  const items = [tmp.shadowContainer, ];
  const mapped = arr2.map((item, index) => {
    let tmp4Result = null;
    if (null != users[index]) {
      const obj = { key: users[index].id, animateOnMount };
      const merged = Object.assign(item);
      const tmp4 = createElement;
      const tmp5 = AnimatedContainer;
      const tmp9 = closure_3;
      if (tmp9) {
        let tmp14;
        if (index === num) {
          const obj2 = { count };
          tmp14 = metroRequire(GroupMemberCount, obj2);
        }
        tmp4Result = tmp4(tmp5, obj, tmp14);
      }
      const obj3 = { guildId, user: users[index] };
      tmp14 = metroRequire(GroupMemberAvatar, obj3);
    }
    return tmp4Result;
  });
  if (null == primaryColor) {
    shadowContainerBackground = tmp.shadowContainerBackground;
  }
  const obj4 = { style: items, children: items1 };
  items[1] = shadowContainerBackground;
  const obj5 = { style: tmp.gradientContainer, children: tmp10Result };
  tmp10Result = null == primaryColor;
  if (tmp10Result) {
    const obj6 = { style: tmp.gradientDimOverlay };
    tmp10Result = tmp10(tmp9, obj6);
  }
  items1 = [tmp10(tmp9, obj5), ];
  const obj7 = { style: tmp.gradientImageBorder };
  items1[1] = animateOnMount(tmp9, obj7);
  items2 = [tmp8(tmp9, obj4), mapped];
  return closure_7(tmp9, obj3);
};
