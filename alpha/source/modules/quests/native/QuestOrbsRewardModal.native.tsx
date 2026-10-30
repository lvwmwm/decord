// Module ID: 14649
// Function ID: 14650
// Name: QuestOrbsRewardModal
// Dependencies: [32, 5, 19, 17, 5010, 1384, 1994, 6775, 21, 6738, 14649, 1995, 5009, 575, 1492, 1626, 9510, 6999, 7048, 1114, 1894, 5712, 9482, 1377, 14650, 14651, 14652, 504, 9531, 1093, 9680, 14653, 9658, 6778, 14654, 7286, 5619, 5629, 2]
// Exports: default, openQuestOrbsRewardModal

// Module 14649 (QuestOrbsRewardModal)
import nativeDefault from "native" /* 575 */;
import utils_PlatformUtils from "utils/PlatformUtils" /* 1377 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1492 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1626 */;
import react_nativeDefault from "react-native" /* 1894 */;
import FastImageDefault from "FastImage" /* 5712 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6738 */;
import XSmallIcon from "XSmallIcon" /* 7048 */;
import APNGPlayer from "APNGPlayer" /* 9482 */;
import OrbsIcon2 from "OrbsIcon" /* 9510 */;
import _modDef14650 from "module_14650" /* 14650 */;
import _modDef14651 from "module_14651" /* 14651 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import AccessibilityStore from "AccessibilityStore" /* 5010 */;
import UserStore from "UserStore" /* 1384 */;
import AppStateStore from "AppStateStore" /* 1994 */;
import QuestConstants from "QuestConstants" /* 6775 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5009 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, importDefault;

let closure_12;
let closure_14;
let closure_15;
let closure_16;
let items;
let map1;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj6;
let tmp17;
const _modDef14652 = tmp17(14652);
function OrbsBalance(balance) {
  let items;
  balance = balance.balance;
  const tmp = closure_20();
  const obj = { children: items };
  const obj2 = { size: "xs", color: nativeDefault.colors.WHITE, style: tmp.orbsIcon };
  const OrbsIcon = OrbsIcon2.OrbsIcon;
  items = [authStore3(OrbsIcon, obj2), , ];
  const obj3 = { style: tmp.spacer };
  items[1] = authStore3(metroImportAll, obj3);
  items[2] = balance;
  return authStore4(closure_15, obj);
}
function CancelButton(alignEnd) {
  let closeButtonIcon;
  let intl;
  let flag = alignEnd.alignEnd;
  if (flag === undefined) {
    flag = false;
  }
  const tmp = closure_18();
  _require = tmp;
  let obj = {
    onPress: function onClose() {
      const obj = ModalActionCreatorsDefault;
      obj.popWithKey(QuestOrbsRewardModal_str);
    },
    backImage() {
      const obj = { size: "lg", style: closeButtonIcon.closeButtonIcon };
      return authStore3(XSmallIcon.XSmallIcon, obj);
    },
    accessibilityLabel: intl.string(require("intl").t.cpT0Cq),
    displayMode: "minimal",
    style: flag ? tmp.closeButtonWide : tmp.closeButton
  };
  const HeaderBackButton = require("module_6999").HeaderBackButton;
  intl = require("intl").intl;
  return closure_14(HeaderBackButton, obj);
}
function StaticOrb() {
  let obj2;
  let obj3;
  let tmp;
  let tmp2;
  const obj = { style: { width: "100%", height: "100%" }, children: authStore3(tmp2, obj2) };
  obj2 = { source: obj3, style: tmp.animatedOrb, fadeDuration: 0 };
  obj3 = { uri: _modDef14650 };
  tmp = closure_26();
  tmp2 = FastImageDefault;
  return authStore3(metroImportAll, obj);
}
function AnimatedOrbContainer(isAppActive) {
  let c4;
  let closure_1;
  let closure_3;
  let first;
  let first1;
  let items1;
  let items2;
  let tmp15Result;
  let tmp7;
  isAppActive = isAppActive.isAppActive;
  first = undefined;
  closure_1 = undefined;
  first1 = undefined;
  closure_3 = undefined;
  c4 = undefined;
  let tmp = closure_26();
  [first, closure_1] = react.useState(false);
  [first1, closure_3] = react.useState(false);
  [tmp7, c4] = react.useState(true);
  _slicedToArray(react.useState(true), 2);
  const callback = react.useCallback(() => {
    closure_1(true);
  }, []);
  const items = [first, first1];
  const callback1 = react.useCallback(() => {
    closure_3(true);
  }, []);
  const effect = react.useEffect(() => {
    let closure_0;
    let timeout;
    const tmp = timeout;
    if (tmp) {
      const tmp2 = first1;
      if (tmp2) {
        const _setTimeout = setTimeout;
        timeout = setTimeout(() => {
          closure_1_4(false);
        }, 1450);
        return () => clearTimeout(closure_0);
      }
    }
  }, items);
  let tmp13 = !first;
  const obj = { style: { width: "100%", height: "100%" }, children: items1 };
  const tmp11 = authStore4;
  if (!first) {
    tmp13 = !first1;
  }
  if (tmp13) {
    const obj2 = { style: { height: "100%" } };
    tmp13 = authStore3(tmp12, obj2);
  }
  items1 = [tmp13, , ];
  const obj3 = { uri: _modDef14651, style: items2, onLoad: callback1, animate: !tmp15Result && isAppActive };
  items2 = [tmp.animatedOrb, (tmp15Result || !first1) && { opacity: 0 }];
  items1[1] = authStore3(closure_25, obj3);
  if (tmp15Result) {
    const obj4 = { uri: _modDef14652, style: tmp.animatedOrb, onLoad: callback, animate: isAppActive };
    tmp15Result = authStore3(closure_25, obj4);
  }
  items1[2] = tmp15Result;
  return tmp11(metroImportAll, obj);
}
({ ActivityIndicator: metroRequire, StyleSheet: metroImportDefault, View: metroImportAll } = react_native);
({ DEFAULT_PORTRAIT_ASPECT_RATIO: closure_12, RewardFilterTypes: map1 } = QuestConstants);
({ jsx: closure_14, Fragment: closure_15, jsxs: closure_16 } = Fragment);
const QuestOrbsRewardModal_str = "QuestOrbsRewardModal";
let createStyles = createStyles_mod;
let obj = { closeButton: obj2, closeButtonWide: obj3, closeButtonIcon: obj4 };
obj2 = { alignSelf: "flex-start", marginHorizontal: nativeDefault.space.PX_16, zIndex: 999 };
createStyles = createStyles.createStyles;
obj3 = { alignSelf: "flex-end", marginTop: nativeDefault.space.PX_16, marginRight: nativeDefault.space.PX_16, zIndex: 999 };
obj4 = { tintColor: nativeDefault.colors.WHITE };
let closure_18 = createStyles(obj);
createStyles = createStyles_mod;
let closure_19 = createStyles.createStyles(() => {
  let obj3;
  const obj = { root: { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW }, background: metroImportDefault.absoluteFillObject, loading: obj3, header: { flexDirection: "row", alignItems: "flex-end", justifyContent: "flex-end" }, main: { flex: 2 }, content: { flex: 1, width: "100%", alignSelf: "center" }, mainColumn: { flex: 1 }, centeredLockup: { flex: 1, justifyContent: "center", gap: nativeDefault.space.PX_32 }, animation: { flex: 3 }, animationInLockup: { flexGrow: 0, flexShrink: 1, width: "100%", aspectRatio: 1.3333333333333333 }, body: { flex: 2, flexDirection: "column", justifyContent: "center", gap: nativeDefault.space.PX_16 }, bodyInLockup: { flexDirection: "column", justifyContent: "center", gap: nativeDefault.space.PX_16 }, title: { textAlign: "center", marginHorizontal: nativeDefault.space.PX_32 }, buttonsContainer: { padding: nativeDefault.space.PX_24, gap: nativeDefault.space.PX_16 } };
  ({ flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW });
  obj3 = { justifyContent: "center", alignItems: "center", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
  const merged = Object.assign(metroImportDefault.absoluteFillObject);
  ({ flex: 1, justifyContent: "center", gap: nativeDefault.space.PX_32 });
  ({ flex: 2, flexDirection: "column", justifyContent: "center", gap: nativeDefault.space.PX_16 });
  ({ flexDirection: "column", justifyContent: "center", gap: nativeDefault.space.PX_16 });
  ({ textAlign: "center", marginHorizontal: nativeDefault.space.PX_32 });
  ({ padding: nativeDefault.space.PX_24, gap: nativeDefault.space.PX_16 });
  return obj;
});
createStyles = createStyles_mod;
let obj5 = { orbsIcon: obj6, spacer: { width: 2 } };
obj6 = { transform: items };
items = [{ translateY: 3 }];
let closure_20 = createStyles.createStyles(obj5);
let closure_23 = react.memo(function OrbPlayerIOS(uri) {
  uri = uri.uri;
  let flag = uri.animate;
  const onLoad = uri.onLoad;
  if (flag === undefined) {
    flag = true;
  }
  const items = [uri];
  const effect = react.useEffect(() => {
    const obj = react_nativeDefault;
    const obj2 = { uri };
    obj.preload(obj2);
  }, items);
  let obj = { source: { uri }, style: { width: "100%", height: "100%" }, resizeMode: "cover", enableAnimation: flag, onLoad, usesSmallCache: false, fadeDuration: 0 };
  const tmp2 = FastImageDefault;
  return closure_14(tmp2, obj, "orb-animate-" + flag);
});
let closure_24 = react.memo(function OrbPlayerAndroid(animate) {
  let onLoad;
  let uri;
  let flag = animate.animate;
  ({ uri, onLoad } = animate);
  if (flag === undefined) {
    flag = true;
  }
  const ref = react.useRef(null);
  const obj = APNGPlayer;
  const aPNGPlayerControls = obj.useAPNGPlayerControls(ref);
  const items = [flag, aPNGPlayerControls];
  const effect = react.useEffect(() => {
    if (flag) {
      aPNGPlayerControls.play();
    } else {
      aPNGPlayerControls.stop();
    }
  }, items);
  return authStore3(APNGPlayer.APNGPlayer, { ref, url, autoplay: false, style: { width: "100%", height: "100%" }, onLoad });
});
let closure_25 = react.memo(function AnimatedOrb(animate) {
  let onLoad;
  let style;
  let uri;
  let flag = animate.animate;
  ({ uri, style, onLoad } = animate);
  if (flag === undefined) {
    flag = true;
  }
  const obj = utils_PlatformUtils;
  const obj2 = { style, renderToHardwareTextureAndroid: true, needsOffscreenAlphaCompositing: true, children: authStore3(obj.isAndroid() ? closure_24 : closure_23, { uri, onLoad, animate: flag }) };
  return authStore3(metroImportAll, obj2);
});
createStyles = createStyles_mod;
let closure_26 = createStyles.createStyles({ animatedOrb: { position: "absolute", height: "130%", width: "130%", left: "-15%", top: "-15%", pointerEvents: "none" } });
let size = size_mod;
let result = size.fileFinishedImporting("modules/quests/native/QuestOrbsRewardModal.native.tsx");

export default function QuestOrbsRewardModal(quest) {
  let Button;
  let FIilK5;
  let _undefined;
  let c1;
  let currentUser;
  let format;
  let formatResult;
  let intl4;
  let items4;
  let items5;
  let items6;
  let items7;
  let items8;
  let items9;
  let obj18;
  let obj23;
  let obj8;
  let state;
  let tmp14Result;
  let tmp16Result6;
  let tmp8;
  let useReducedMotion;
  quest = quest.quest;
  let num;
  importDefault = undefined;
  const tmp = closure_19();
  size = useWindowDimensionsDefault();
  const width = size.width;
  const height = size.height;
  const tmp3 = useSafeAreaInsetsDefault();
  let closure_2 = tmp3;
  let obj = react;
  const items = [width, height, , ];
  ({ left: arr[2], right: arr[3] } = tmp3);
  const memo = react.useMemo(() => {
    const diff = width - closure_2.left - closure_2.right;
    const bound = Math.min(diff, Math.floor(height * closure_2_12));
    return { maxWidthStyle: { maxWidth: bound }, isWidthConstrained: bound < diff };
  }, items);
  const isWidthConstrained = memo.isWidthConstrained;
  const maxWidthStyle = memo.maxWidthStyle;
  let obj2 = num(504);
  const items1 = [AccessibilityStore];
  const stateFromStores = obj2.useStateFromStores(items1, () => useReducedMotion.useReducedMotion);
  let obj3 = num(9531);
  num = obj3.useFetchVirtualCurrencyBalance().balance;
  [tmp8, c1] = react.useState(false);
  _slicedToArray(react.useState(false), 2);
  const items2 = [AppStateStore];
  const obj4 = num(504);
  const stateFromStores1 = obj4.useStateFromStores(items2, () => state.getState());
  const ACTIVE = num(1093).AppStates.ACTIVE;
  const items3 = [UserStore];
  const userStatus = quest.userStatus;
  let num2;
  const obj5 = num(504);
  const stateFromStores2 = obj5.useStateFromStores(items3, () => currentUser.getCurrentUser());
  if (userStatus != null) {
    num2 = userStatus.orbQuantityClaimed;
  }
  if (num2 == null) {
    const tmp5Result = num(9680);
    num2 = tmp5Result.getQuestOrbRewardQuantityForUser(quest.config, stateFromStores2);
  }
  const effect = obj.useEffect(() => {
    let obj = num(dependencyMap[31]);
    obj.applyOrientationLock("PORTRAIT");
    return () => {
      const obj = num(closure_1_2[31]);
      const result = obj.restoreDefaultOrientationLock();
    };
  }, []);
  const callback = obj.useCallback(() => {
    _undefined(true);
  }, []);
  const obj6 = { style: tmp.root, children: items4 };
  const obj7 = { style: absoluteFill.absoluteFill, accessible: false, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: closure_14(num(14654).OrbsRewardBackground, obj8) };
  const callback1 = obj.useCallback(() => {
    const obj = _undefined(dependencyMap[9]);
    obj.popWithKey(QuestOrbsRewardModal_str);
    const obj2 = num(dependencyMap[32]);
    const obj3 = { filter: constants.VIRTUAL_CURRENCY, fromContent: num(dependencyMap[33]).QuestContent.REWARD_MODAL };
    obj2.openQuestHome(obj3);
  }, []);
  obj8 = { style: tmp.background, onReady: callback };
  items4 = [closure_14(closure_8, obj7), , ];
  let tmp16Result = !tmp14Result;
  if (tmp16Result) {
    const obj9 = { style: tmp.loading, children: closure_14(closure_6, { animating: true }) };
    tmp16Result = tmp16(tmp15, obj9);
  }
  items4[1] = tmp16Result;
  if (tmp14Result) {
    const rect = { style: tmp.main, top: true, bottom: true, left: true, right: true, children: items5 };
    let tmp16Result4 = isWidthConstrained;
    const SafeAreaPaddingView = tmp5(7286).SafeAreaPaddingView;
    if (isWidthConstrained) {
      const obj10 = { style: tmp.header, children: closure_14(CancelButton, { alignEnd: true }) };
      tmp16Result4 = tmp16(tmp15, obj10);
    }
    items5 = [tmp16Result4, ];
    const obj11 = { style: items6, children: items7 };
    items6 = [tmp.content, maxWidthStyle];
    let tmp16Result5 = !isWidthConstrained;
    if (tmp16Result5) {
      const obj12 = { style: tmp.header, children: closure_14(CancelButton, {}) };
      tmp16Result5 = tmp16(tmp15, obj12);
    }
    items7 = [tmp16Result5, , ];
    const obj13 = { style: isWidthConstrained ? tmp.centeredLockup : tmp.mainColumn, children: items8 };
    const obj14 = { style: isWidthConstrained ? tmp.animationInLockup : tmp.animation, accessible: false, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: tmp16Result6 };
    if (stateFromStores) {
      tmp16Result6 = tmp16(StaticOrb, {});
    } else {
      const obj15 = { isAppActive: stateFromStores1 === ACTIVE };
      tmp16Result6 = tmp16(AnimatedOrbContainer, obj15);
    }
    items8 = [closure_14(closure_8, obj14), ];
    const obj16 = { style: isWidthConstrained ? tmp.bodyInLockup : tmp.body, children: items9 };
    const obj17 = { variant: "heading-xl/bold", color: "text-overlay-light", style: tmp.title, children: format(FIilK5, obj18) };
    const Heading = tmp5(5619).Heading;
    let intl = tmp5(1114).intl;
    format = intl.format;
    FIilK5 = tmp5(1114).t.FIilK5;
    if (num2 == null) {
      num2 = 0;
    }
    obj18 = { count: num2 };
    items9 = [closure_14(Heading, obj17), ];
    const obj19 = { variant: "text-md/normal", color: "text-overlay-light", style: tmp.title, children: formatResult };
    let Text = tmp5(5619).Text;
    if (num == null) {
      num = 0;
    }
    if (num >= 4100) {
      const intl3 = tmp5(1114).intl;
      const obj20 = {
        balanceHook() {
              const obj = { balance: num };
              return authStore3(OrbsBalance, obj, "balance");
            },
        profileDecoHook() {
              let intl;
              const obj = { variant: "text-md/semibold", color: "text-overlay-light", children: intl.string(num(dependencyMap[19]).t.pGDUH9) };
              const Text = num(dependencyMap[36]).Text;
              intl = num(dependencyMap[19]).intl;
              return closure_1_14(Text, obj, "profileDeco");
            }
      };
      formatResult = intl3.format(tmp5(1114).t["2dz2AL"], obj20);
    } else {
      const intl2 = tmp5(1114).intl;
      const obj21 = {
        balanceHook() {
              const obj = { balance: num };
              return authStore3(OrbsBalance, obj, "balance");
            }
      };
      formatResult = intl2.format(tmp5(1114).t.rKHvlX, obj21);
    }
    items9[1] = closure_14(Text, obj19);
    items8[1] = closure_16(closure_8, obj16);
    items7[1] = closure_16(closure_8, obj13);
    const obj22 = { style: tmp.buttonsContainer, children: closure_14(Button, obj23) };
    obj23 = { onPress: callback1, variant: "primary-overlay", size: "lg", text: intl4.string(num(1114).t.uJAMFX) };
    Button = tmp5(5629).Button;
    intl4 = tmp5(1114).intl;
    items7[2] = closure_14(closure_8, obj22);
    items5[1] = closure_16(closure_8, obj11);
    tmp14Result = closure_16(SafeAreaPaddingView, rect);
  }
  items4[2] = tmp14Result;
  return closure_16(closure_8, obj6);
};
export function openQuestOrbsRewardModal(quest) {
  let paths;
  quest = quest.quest;
  const obj = ModalActionCreatorsDefault;
  obj.pushLazy(_asyncToGenerator(async () => {
    let c0;
    let c1;
    await require("asyncRequire")(paths[10], paths.paths);
    return arg1.default;
  }), { quest }, QuestOrbsRewardModal_str);
}
