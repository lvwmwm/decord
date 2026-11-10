// Module ID: 15156
// Function ID: 15157
// Name: GroupAvatar
// Dependencies: [19, 17, 5143, 21, 5142, 575, 5149, 7025, 563, 1652, 5372, 5763, 5753, 5844, 2]
// Exports: default

// Module 15156 (GroupAvatar)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 19 */;
import nativeDefault from "native" /* 575 */;
import Text_Text from "Text/Text" /* 5753 */;
import FastImageDefault from "FastImage" /* 5844 */;
import AccessibilityStore from "AccessibilityStore" /* 5143 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5142 */;
import size_mod from "module_2" /* 2 */;

const react_mod = react2;

let metroImportDefault;
let metroRequire;
function AnimatedContainer(scale) {
  let items4;
  let tmp16;
  let tmp17;
  let tmp18;
  let tmp19;
  let tmp20;
  let tmp21;
  let tmp22;
  let tmp23;
  let tmp24;
  let tmp25;
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
  let items = [sharedValue3];
  const stateFromStores = obj.useStateFromStores(items, () => sharedValue3.useReducedMotion);
  let num = 1;
  const useSharedValue = scale(translateY[9]).useSharedValue;
  scale(translateY[9]);
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
  const effect = sharedValue.useEffect(() => {
    const result = sharedValue.set(1);
    const result1 = sharedValue4.set(scale);
    const result2 = sharedValue2.set(translateY);
    const result3 = sharedValue3.set(translateX);
  }, items1);
  const items2 = [closure_14, , , , , , , , , ];
  const useAnimatedStyle = tmp2(tmp3[9]).useAnimatedStyle;
  scale(translateY[9]);
  items2[1] = scale(translateY[10]).withTiming;
  items2[2] = sharedValue;
  items2[3] = stateFromStores;
  items2[4] = sharedValue3;
  items2[5] = scale(translateY[11]).withSpring;
  items2[6] = closure_11;
  items2[7] = sharedValue2;
  items2[8] = sharedValue4;
  items2[9] = closure_10;
  let c0;
  let c1;
  let c2;
  let c3;
  let c4;
  let c5;
  let c6;
  let c7;
  let c8;
  [tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25] = items2;
  class GroupAvatarTsx1 {
    constructor() {
      let items;
      let value;
      let value3;
      let value4;
      const obj = { opacity: _undefined(_undefined2.get()), transform: items };
      if (c2) {
        value = _undefined3.get();
      } else {
        value = _undefined4(_undefined3.get(), c5);
      }
      items = [{ translateX: value }, , ];
      if (c2) {
        value3 = _undefined5.get();
      } else {
        value3 = _undefined4(_undefined5.get(), c5);
      }
      items[1] = { translateY: value3 };
      if (c2) {
        value4 = _undefined6.get();
      } else {
        value4 = _undefined4(_undefined6.get(), c8);
      }
      items[2] = { scale: value4 };
      return obj;
    }
  }
  const items3 = [tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25];
  GroupAvatarTsx1.__closure = items3;
  GroupAvatarTsx1.__workletHash = 10803845888973;
  GroupAvatarTsx1.__initData = tmp16;
  const animatedStyle = useAnimatedStyle(GroupAvatarTsx1);
  const obj2 = { style: items4, children };
  items4 = [tmp.avatarContainer, animatedStyle];
  return sharedValue4(translateX(translateY[9]).View, obj2);
}
function GroupMemberCount(count) {
  let Text;
  let items;
  let obj2;
  let obj3;
  let tmp4;
  count = count.count;
  const tmp = closure_12();
  const obj = { style: tmp.avatarWrapper, children: metroRequire(View, obj2) };
  let str = "body-sm/semibold";
  obj2 = { style: tmp.overflowCount, children: tmp4(Text, obj3) };
  Text = Text_Text.Text;
  tmp4 = metroImportDefault;
  if (count < 100) {
    str = "body-md/semibold";
  }
  obj3 = { variant: str, children: items };
  items = ["+", count];
  return metroRequire(View, obj);
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
let closure_10 = { damping: 30, stiffness: 400 };
let closure_11 = { damping: 30, stiffness: 400 };
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
let items3 = [{ translateY: -4, translateX: 16, scale: 0.75 }, { translateY: 14, translateX: -14, scale: 0.875 }, { translateY: -18, translateX: -12, scale: 0.625 }, { translateY: 0, translateX: 0, scale: 0 }];
items1[2] = items3;
let items4 = [{ translateY: -14, translateX: -14, scale: 0.875 }, { translateY: 14, translateX: 14, scale: 0.875 }, { translateY: -18, translateX: 18, scale: 0.625 }, { translateY: 18, translateX: -18, scale: 0.625 }];
items1[3] = items4;
let closure_14 = { code: "(function GroupAvatarTsx1(){let[withTiming,opacityAnimation,useReducedMotion,translateXAnimation,withSpring,SPRING_OPTIONS_POSITION,translateYAnimation,scaleAnimation,SPRING_OPTIONS_SCALE]=this.__closure;return{opacity:withTiming(opacityAnimation.get()),transform:[{translateX:useReducedMotion?translateXAnimation.get():withSpring(translateXAnimation.get(),SPRING_OPTIONS_POSITION)},{translateY:useReducedMotion?translateYAnimation.get():withSpring(translateYAnimation.get(),SPRING_OPTIONS_POSITION)},{scale:useReducedMotion?scaleAnimation.get():withSpring(scaleAnimation.get(),SPRING_OPTIONS_SCALE)}]};})" };
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
