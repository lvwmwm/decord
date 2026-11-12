// Module ID: 19344
// Function ID: 19345
// Name: GroupDMNitroUpsellBanner
// Dependencies: [32, 19, 17, 5244, 12447, 21, 575, 5243, 1627, 13033, 5839, 1652, 671, 5876, 5830, 504, 12448, 12445, 12452, 19345, 5873, 1113, 9224, 5866, 2]
// Exports: default

// Module 19344 (GroupDMNitroUpsellBanner)
import get_initialized from "get initialized" /* 504 */;
import nativeDefault from "native" /* 575 */;
import _modDef671 from "module_671" /* 671 */;
import intl4 from "intl" /* 1113 */;
import spring_spring from "spring/spring" /* 5876 */;
import AssetRegistryDefault from "AssetRegistry" /* 9224 */;
import GroupDMNitroUpsellModel from "GroupDMNitroUpsellModel" /* 12445 */;
import GroupDMConstants from "GroupDMConstants" /* 12447 */;
import GroupDMNitroCapExperimentDefault from "GroupDMNitroCapExperiment" /* 12448 */;
import useGroupDMNitroUpsellActionDefault from "useGroupDMNitroUpsellAction" /* 12452 */;
import GroupDMNitroCapBannerDefault from "GroupDMNitroCapBanner" /* 19345 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import AccessibilityStore from "AccessibilityStore" /* 5244 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5243 */;
import size from "module_2" /* 2 */;

let set, set2;

let c10;
let c9;
let hasOwnProperty;
let metroRequire;
let obj2;
function FloatingBanner(visible) {
  let View2;
  let _undefined;
  let c3;
  let hideGradient;
  let items7;
  let items8;
  let items9;
  let obj4;
  let onListInsetChange;
  let str;
  let str2;
  let tmp18;
  let tmp19;
  let tmp20;
  let tmp22;
  let tmp23;
  let tmp24;
  let tmp27;
  let tmp8;
  visible = visible.visible;
  ({ hideGradient, onListInsetChange } = visible);
  let token;
  _slicedToArray = undefined;
  let sharedValue;
  let sharedValue1;
  let bound1;
  const children = visible.children;
  let tmp = closure_17();
  let tmp2 = onListInsetChange;
  const bottom = onListInsetChange(token[8])().bottom;
  const tmp4 = onListInsetChange(token[9])();
  let obj = visible(token[10]);
  token = obj.useToken(onListInsetChange(token[6]).colors.MOBILE_ACTIONSHEET_BACKGROUND);
  const obj2 = sharedValue;
  let num = 0;
  [tmp8, c3] = _slicedToArray(sharedValue.useState(0), 2);
  const tmp7 = _slicedToArray(sharedValue.useState(0), 2);
  const useSharedValue = visible(token[11]).useSharedValue;
  const tmp9 = visible(token[11]);
  if (visible) {
    num = 0.4;
  }
  sharedValue = useSharedValue(num);
  const tmp5Result = visible(token[11]);
  sharedValue1 = tmp5Result.useSharedValue(PX_16);
  const bound = Math.max(125, tmp8 + PX_40);
  bound1 = Math.max(tmp2(tmp3[6]).space.PX_12, tmp8 - PX_8 + PX_24);
  let items = [bound1, onListInsetChange, visible];
  const effect = obj2.useEffect(() => {
    if (onListInsetChange != null) {
      let PX_12;
      const tmp2 = visible;
      if (tmp2) {
        PX_12 = bound1;
      } else {
        PX_12 = nativeDefault.space.PX_12;
      }
      tmp(PX_12);
    }
  }, items);
  const items1 = [token];
  const callback = obj2.useCallback((nativeEvent) => {
    const height = nativeEvent.nativeEvent.layout.height;
    let tmp = _undefined((arg0) => {
      let tmp = height;
      if (arg0 === height) {
        tmp = arg0;
      }
      return tmp;
    });
  }, []);
  const items2 = [visible, sharedValue, sharedValue1];
  const memo = obj2.useMemo(() => {
    const items = [, , ];
    const obj = _modDef671(token);
    const alphaResult = obj.alpha(0);
    items[0] = alphaResult.hex();
    const obj3 = _modDef671(token);
    const alphaResult1 = obj3.alpha(1);
    items[1] = alphaResult1.hex();
    const obj5 = _modDef671(token);
    const alphaResult2 = obj5.alpha(1);
    items[2] = alphaResult2.hex();
    return items;
  }, items1);
  const effect1 = obj2.useEffect(() => {
    if (visible) {
      const result = sharedValue.set(0.4);
      const result1 = sharedValue1.set(PX_16);
    }
    let num2 = 0;
    set = sharedValue.set;
    const withSpring = spring_spring.withSpring;
    spring_spring;
    if (visible) {
      num2 = 1;
    }
    const result2 = set(withSpring(num2, closure_16));
    let num3 = 0;
    set2 = sharedValue1.set;
    const withSpring2 = tmp8(5876).withSpring;
    spring_spring;
    const tmp11 = closure_16;
    if (!visible) {
      num3 = PX_16;
    }
    set2(withSpring2(num3, tmp11));
  }, items2);
  const items3 = [closure_18, sharedValue, sharedValue1];
  let c0;
  let c1;
  [tmp18, tmp19, tmp20] = items3;
  const tmp5Result3 = visible(token[11]);
  class GroupDMNitroUpsellBannerTsx1 {
    constructor() {
      let items;
      const obj = { opacity: _undefined.get(), transform: items };
      items = [{ translateY: _undefined2.get() }];
      ({ translateY: _undefined2.get() });
      return obj;
    }
  }
  const items4 = [tmp19, tmp20];
  GroupDMNitroUpsellBannerTsx1.__closure = items4;
  GroupDMNitroUpsellBannerTsx1.__workletHash = 13790129208113;
  GroupDMNitroUpsellBannerTsx1.__initData = tmp18;
  const animatedStyle = tmp5Result3.useAnimatedStyle(GroupDMNitroUpsellBannerTsx1);
  const items5 = [closure_19, tmp4, bottom];
  c0 = undefined;
  c1 = undefined;
  [tmp22, tmp23, tmp24] = items5;
  const tmp5Result4 = visible(token[11]);
  class GroupDMNitroUpsellBannerTsx2 {
    constructor() {
      const obj = { bottom: Math.max(_undefined.get() - c1, 0) };
      return obj;
    }
  }
  const items6 = [tmp23, tmp24];
  GroupDMNitroUpsellBannerTsx2.__closure = items6;
  GroupDMNitroUpsellBannerTsx2.__workletHash = 11189258336600;
  GroupDMNitroUpsellBannerTsx2.__initData = tmp22;
  const animatedStyle1 = tmp5Result4.useAnimatedStyle(GroupDMNitroUpsellBannerTsx2);
  let obj3 = { style: items7, pointerEvents: str, accessibilityElementsHidden: !visible, importantForAccessibility: str2, children: tmp27(View2, obj4) };
  items7 = [tmp.floatingOverlay, { height: bound + bottom }, animatedStyle1];
  str = "none";
  const View = tmp2(tmp3[11]).View;
  if (visible) {
    str = "box-none";
  }
  str2 = "no-hide-descendants";
  if (visible) {
    str2 = "auto";
  }
  obj4 = { style: items8, children: items9 };
  items8 = [sharedValue1.absoluteFillObject, tmp.floatingContent, { paddingBottom: bottom }, animatedStyle];
  let tmp26Result = !hideGradient;
  View2 = tmp2(tmp3[11]).View;
  tmp27 = closure_10;
  if (!hideGradient) {
    let obj5 = { style: tmp28.absoluteFill, colors: memo, locations, start: { x: 0.5, y: 0 }, end: { x: 0.5, y: 1 }, pointerEvents: "none" };
    tmp26Result = tmp26(tmp2(tmp3[14]), obj5);
  }
  items9 = [tmp26Result, closure_9(bound1, { onLayout: callback, children })];
  return closure_9(View, obj3);
}
let _slicedToArray = _slicedToArray_mod;
({ StyleSheet: hasOwnProperty, View: metroRequire } = react_native);
const number = GroupDMConstants.MAX_GROUP_DM_NITRO_PARTICIPANTS;
({ jsx: c9, jsxs: c10 } = Fragment);
const PX_40 = nativeDefault.space.PX_40;
const PX_16 = nativeDefault.space.PX_16;
const PX_24 = nativeDefault.space.PX_24;
const PX_8 = nativeDefault.space.PX_8;
const locations = [0, 0.225, 1];
let closure_16 = { mass: 0.8, stiffness: 400, damping: 32, overshootClamping: true };
let obj = { floatingOverlay: { position: "absolute", left: 0, right: 0, bottom: 0 }, floatingContent: { justifyContent: "flex-end" }, floatingBanner: obj2 };
obj2 = { backgroundColor: "transparent", paddingTop: 0, paddingBottom: nativeDefault.space.PX_16 };
let closure_17 = createStyles.createStyles(obj);
let closure_18 = { code: "(function GroupDMNitroUpsellBannerTsx1(){let[opacity,translateY]=this.__closure;return{opacity:opacity.get(),transform:[{translateY:translateY.get()}]};})" };
let closure_19 = { code: "(function GroupDMNitroUpsellBannerTsx2(){let[keyboardHeight,safeAreaBottom]=this.__closure;return{bottom:Math.max(keyboardHeight.get()-safeAreaBottom,0)};})" };
let result = size.fileFinishedImporting("modules/group_dm/native/GroupDMNitroUpsellBanner.tsx");

export default function GroupDMNitroUpsellBanner(wrapperStyle) {
  let Button;
  let _location;
  let floating;
  let hideFloatingGradient;
  let intl2;
  let intl3;
  let items2;
  let memberCount;
  let obj10;
  let obj7;
  let onFloatingListInsetChange;
  let recipientLimit;
  let string;
  let tmp2Result;
  let useReducedMotion;
  ({ location: _location, floating } = wrapperStyle);
  ({ memberCount, recipientLimit } = wrapperStyle);
  if (floating === undefined) {
    floating = false;
  }
  wrapperStyle = wrapperStyle.wrapperStyle;
  ({ hideFloatingGradient, onFloatingListInsetChange } = wrapperStyle);
  const items = [AccessibilityStore];
  const tmp = closure_17();
  const obj = get_initialized;
  const stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const obj2 = GroupDMNitroCapExperimentDefault;
  const enabled = obj2.useConfig({ location: _location }).enabled;
  const obj3 = GroupDMNitroUpsellModel;
  const groupDMNitroAudience = obj3.useGroupDMNitroAudience();
  const obj4 = { audience: groupDMNitroAudience, location: _location, acquisitionStrategy: GroupDMNitroUpsellModel.GroupDMNitroAcquisitionStrategy.MARKETING };
  const tmp7 = useGroupDMNitroUpsellActionDefault;
  const tmp7Result = tmp7(obj4);
  const obj5 = GroupDMNitroUpsellModel;
  const tmp9 = obj5.isGroupDMNitroUpsellAudience(groupDMNitroAudience) && memberCount >= recipientLimit && enabled;
  if (!floating) {
    if (!tmp9) {
      return null;
    }
  }
  let tmp13 = wrapperStyle;
  const tmp11 = authStore;
  const tmp5Result = GroupDMNitroCapBannerDefault;
  if (floating) {
    const items1 = [tmp.floatingBanner, wrapperStyle];
    tmp13 = items1;
  }
  const obj6 = { showLeadingIcon: false, wrapperStyle: tmp13, trailing: React4(Button, obj7), children: items2 };
  obj7 = { text: string(tmp2Result.getGroupDMNitroCapCTAMessage(groupDMNitroAudience)), size: "sm", variant: "experimental_premium-primary", shiny: tmp9 && !stateFromStores, icon: AssetRegistryDefault, onPress: tmp7Result };
  Button = tmp2(5873).Button;
  const intl = tmp2(1113).intl;
  string = intl.string;
  tmp2Result = GroupDMNitroUpsellModel;
  const obj8 = { variant: "body-md/semibold", color: "mobile-text-heading-primary", children: intl2.string(intl4.t.KCD0Hp) };
  const Text = tmp2(5866).Text;
  intl2 = tmp2(1113).intl;
  items2 = [React4(Text, obj8), ];
  const obj9 = { variant: "body-xs/medium", color: "mobile-text-heading-primary", children: intl3.formatToPlainString(intl4.t["8o8Zk5"], obj10) };
  const Text2 = tmp2(5866).Text;
  intl3 = tmp2(1113).intl;
  obj10 = { number };
  items2[1] = React4(Text2, obj9);
  const tmp11Result = tmp11(tmp5Result, obj6);
  let tmp14Result = tmp11Result;
  if (floating) {
    const obj11 = { visible: tmp9, hideGradient: hideFloatingGradient, onListInsetChange: onFloatingListInsetChange, children: tmp11Result };
    tmp14Result = tmp14(FloatingBanner, obj11);
  }
  return tmp14Result;
};
