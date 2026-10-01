// Module ID: 10754
// Function ID: 10755
// Name: QuestOrbsRewardModal
// Dependencies: [32, 5, 19, 17, 4825, 1372, 1980, 5756, 21, 5039, 10754, 1981, 4836, 576, 8298, 5943, 5992, 1115, 5899, 8271, 1365, 10755, 10756, 10757, 504, 8315, 1094, 10694, 10758, 10678, 5759, 10759, 6544, 4832, 5281, 2]
// Exports: default, openQuestOrbsRewardModal

// Module 10754 (QuestOrbsRewardModal)
import nativeDefault from "native" /* 576 */;
import utils_PlatformUtils from "utils/PlatformUtils" /* 1365 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5039 */;
import QuestConstants from "QuestConstants" /* 5756 */;
import FastImageDefault from "FastImage" /* 5899 */;
import XSmallIcon from "XSmallIcon" /* 5992 */;
import APNGPlayer from "APNGPlayer" /* 8271 */;
import OrbsIcon2 from "OrbsIcon" /* 8298 */;
import _modDef10755 from "module_10755" /* 10755 */;
import _modDef10756 from "module_10756" /* 10756 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import AccessibilityStore from "AccessibilityStore" /* 4825 */;
import UserStore from "UserStore" /* 1372 */;
import AppStateStore from "AppStateStore" /* 1980 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let closure_14;
let closure_15;
let items;
let map1;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj5;
let tmp17;
const _modDef10757 = tmp17(10757);
function OrbsBalance(balance) {
  let items;
  balance = balance.balance;
  const tmp = closure_19();
  const obj = { children: items };
  const obj2 = { size: "xs", color: nativeDefault.colors.WHITE, style: tmp.orbsIcon };
  const OrbsIcon = OrbsIcon2.OrbsIcon;
  items = [map1(OrbsIcon, obj2), , ];
  const obj3 = { style: tmp.spacer };
  items[1] = map1(metroImportAll, obj3);
  items[2] = balance;
  return closure_15(authStore2, obj);
}
function CancelButton() {
  let closeButtonIcon;
  let intl;
  const tmp = closure_17();
  _require = tmp;
  let obj = {
    onPress() {
      const obj = ModalActionCreatorsDefault;
      obj.popWithKey(QuestOrbsRewardModal_str);
    },
    backImage() {
      let items;
      const obj = { size: "lg", style: items };
      items = [closeButtonIcon.closeButtonIcon];
      return map1(XSmallIcon.XSmallIcon, obj);
    },
    accessibilityLabel: intl.string(require("intl").t.cpT0Cq),
    displayMode: "minimal",
    style: tmp.closeButton
  };
  const HeaderBackButton = require("module_5943").HeaderBackButton;
  intl = require("intl").intl;
  return closure_13(HeaderBackButton, obj);
}
function StaticOrb() {
  let obj2;
  let obj3;
  let tmp;
  let tmp2;
  const obj = { style: { width: "100%", height: "100%" }, children: map1(tmp2, obj2) };
  obj2 = { source: obj3, style: tmp.animatedOrb, fade: false };
  obj3 = { uri: _modDef10755 };
  tmp = closure_25();
  tmp2 = FastImageDefault;
  return map1(metroImportAll, obj);
}
function AnimatedOrbContainer(isAppActive) {
  let c4;
  let closure_1;
  let closure_3;
  let first;
  let first1;
  let items1;
  let items2;
  let items3;
  let tmp15Result;
  let tmp7;
  isAppActive = isAppActive.isAppActive;
  first = undefined;
  closure_1 = undefined;
  first1 = undefined;
  closure_3 = undefined;
  c4 = undefined;
  let tmp = closure_25();
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
  const tmp11 = closure_15;
  if (!first) {
    tmp13 = !first1;
  }
  if (tmp13) {
    const obj2 = { style: { height: "100%" } };
    tmp13 = map1(tmp12, obj2);
  }
  items1 = [tmp13, , ];
  const obj3 = { uri: _modDef10756, style: items2, onLoad: callback1, animate: !tmp15Result && isAppActive };
  items2 = [tmp.animatedOrb, (tmp15Result || !first1) && { opacity: 0 }];
  items1[1] = map1(closure_24, obj3);
  if (tmp15Result) {
    const obj4 = { uri: _modDef10757, style: items3, onLoad: callback, animate: isAppActive };
    items3 = [tmp.animatedOrb];
    tmp15Result = map1(closure_24, obj4);
  }
  items1[2] = tmp15Result;
  return tmp11(metroImportAll, obj);
}
({ ActivityIndicator: metroRequire, StyleSheet: metroImportDefault, View: metroImportAll } = react_native);
const RewardFilterTypes = QuestConstants.RewardFilterTypes;
({ jsx: map1, Fragment: closure_14, jsxs: closure_15 } = Fragment);
const QuestOrbsRewardModal_str = "QuestOrbsRewardModal";
let createStyles = createStyles_mod;
let obj = { closeButton: obj2, closeButtonIcon: obj3 };
obj2 = { alignSelf: "flex-start", marginHorizontal: nativeDefault.space.PX_16, zIndex: 999 };
createStyles = createStyles.createStyles;
obj3 = { tintColor: nativeDefault.colors.WHITE };
let closure_17 = createStyles(obj);
createStyles = createStyles_mod;
let closure_18 = createStyles.createStyles(() => {
  let obj3;
  const obj = { root: { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW }, background: metroImportDefault.absoluteFillObject, loading: obj3, header: { flexDirection: "row", alignItems: "flex-end", justifyContent: "flex-end" }, main: { flex: 2 }, animation: { flex: 3 }, body: { flex: 2, flexDirection: "column", justifyContent: "center", gap: nativeDefault.space.PX_16 }, title: { textAlign: "center", marginHorizontal: nativeDefault.space.PX_32 }, buttonsContainer: { padding: nativeDefault.space.PX_24, gap: nativeDefault.space.PX_16 } };
  ({ flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW });
  obj3 = { justifyContent: "center", alignItems: "center", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
  const merged = Object.assign(metroImportDefault.absoluteFillObject);
  ({ flex: 2, flexDirection: "column", justifyContent: "center", gap: nativeDefault.space.PX_16 });
  ({ textAlign: "center", marginHorizontal: nativeDefault.space.PX_32 });
  ({ padding: nativeDefault.space.PX_24, gap: nativeDefault.space.PX_16 });
  return obj;
});
createStyles = createStyles_mod;
let obj4 = { orbsIcon: obj5, spacer: { width: 2 } };
obj5 = { transform: items };
items = [{ translateY: 3 }];
let closure_19 = createStyles.createStyles(obj4);
let closure_22 = react.memo((uri) => {
  uri = uri.uri;
  let flag = uri.animate;
  const onLoad = uri.onLoad;
  if (flag === undefined) {
    flag = true;
  }
  const items = [uri];
  const effect = react.useEffect(() => {
    const obj = FastImageDefault;
    obj.preload(uri);
  }, items);
  let obj = { source: { uri }, style: { width: "100%", height: "100%" }, resizeMode: "cover", enableAnimation: flag, onLoad, usesSmallCache: false, fade: false };
  const tmp2 = FastImageDefault;
  return closure_13(tmp2, obj, "orb-animate-" + flag);
});
let closure_23 = react.memo((animate) => {
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
  return map1(APNGPlayer.APNGPlayer, { ref, url, autoplay: false, style: { width: "100%", height: "100%" }, onLoad });
});
let closure_24 = react.memo((animate) => {
  let onLoad;
  let style;
  let uri;
  let flag = animate.animate;
  ({ uri, style, onLoad } = animate);
  if (flag === undefined) {
    flag = true;
  }
  const obj = utils_PlatformUtils;
  const obj2 = { style, renderToHardwareTextureAndroid: true, needsOffscreenAlphaCompositing: true, children: map1(obj.isAndroid() ? closure_23 : closure_22, { uri, onLoad, animate: flag }) };
  return map1(metroImportAll, obj2);
});
createStyles = createStyles_mod;
let closure_25 = createStyles.createStyles({ animatedOrb: { position: "absolute", height: "130%", width: "130%", left: "-15%", top: "-15%", pointerEvents: "none" } });
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
  let items3;
  let items4;
  let items5;
  let items6;
  let obj15;
  let obj20;
  let obj8;
  let state;
  let tmp12Result;
  let tmp14Result2;
  let tmp6;
  let useReducedMotion;
  quest = quest.quest;
  let num;
  c1 = undefined;
  const tmp = closure_18();
  let obj = num(504);
  const items = [AccessibilityStore];
  const stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  let obj2 = num(8315);
  num = obj2.useFetchVirtualCurrencyBalance().balance;
  let obj3 = react;
  [tmp6, c1] = react.useState(false);
  _slicedToArray(react.useState(false), 2);
  const items1 = [AppStateStore];
  const obj4 = num(504);
  const stateFromStores1 = obj4.useStateFromStores(items1, () => state.getState());
  const ACTIVE = num(1094).AppStates.ACTIVE;
  const items2 = [UserStore];
  const userStatus = quest.userStatus;
  let num2;
  const obj5 = num(504);
  const stateFromStores2 = obj5.useStateFromStores(items2, () => currentUser.getCurrentUser());
  if (userStatus != null) {
    num2 = userStatus.orbQuantityClaimed;
  }
  if (num2 == null) {
    const tmp2Result = num(10694);
    num2 = tmp2Result.getQuestOrbRewardQuantityForUser(quest.config, stateFromStores2);
  }
  const effect = obj3.useEffect(() => {
    let obj = num(dependencyMap[28]);
    obj.applyOrientationLock("PORTRAIT");
    return () => {
      const obj = num(closure_1_2[28]);
      const result = obj.restoreDefaultOrientationLock();
    };
  }, []);
  const callback = obj3.useCallback(() => {
    _undefined(true);
  }, []);
  const obj6 = { style: tmp.root, children: items3 };
  const obj7 = { style: absoluteFill.absoluteFill, accessible: false, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: closure_13(num(10759).OrbsRewardBackground, obj8) };
  const callback1 = obj3.useCallback(() => {
    const obj = _undefined(dependencyMap[9]);
    obj.popWithKey(QuestOrbsRewardModal_str);
    const obj2 = num(dependencyMap[29]);
    const obj3 = { filter: constants.VIRTUAL_CURRENCY, fromContent: num(dependencyMap[30]).QuestContent.REWARD_MODAL };
    obj2.openQuestHome(obj3);
  }, []);
  obj8 = { style: tmp.background, onReady: callback };
  items3 = [closure_13(closure_8, obj7), , ];
  let tmp14Result = !tmp12Result;
  if (tmp14Result) {
    const obj9 = { style: tmp.loading, children: closure_13(closure_6, { animating: true }) };
    tmp14Result = tmp14(tmp13, obj9);
  }
  items3[1] = tmp14Result;
  if (tmp12Result) {
    const rect = { style: items4, top: true, bottom: true, left: true, right: true, children: items5 };
    items4 = [tmp.main];
    const obj10 = { style: tmp.header, children: closure_13(CancelButton, {}) };
    const SafeAreaPaddingView = tmp2(6544).SafeAreaPaddingView;
    items5 = [closure_13(closure_8, obj10), , , ];
    const obj11 = { style: tmp.animation, accessible: false, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: tmp14Result2 };
    if (stateFromStores) {
      tmp14Result2 = tmp14(StaticOrb, {});
    } else {
      const obj12 = { isAppActive: stateFromStores1 === ACTIVE };
      tmp14Result2 = tmp14(AnimatedOrbContainer, obj12);
    }
    items5[1] = closure_13(closure_8, obj11);
    const obj13 = { style: tmp.body, children: items6 };
    const obj14 = { variant: "heading-xl/bold", color: "text-overlay-light", style: tmp.title, children: format(FIilK5, obj15) };
    const Heading = tmp2(4832).Heading;
    let intl = tmp2(1115).intl;
    format = intl.format;
    FIilK5 = tmp2(1115).t.FIilK5;
    if (num2 == null) {
      num2 = 0;
    }
    obj15 = { count: num2 };
    items6 = [closure_13(Heading, obj14), ];
    const obj16 = { variant: "text-md/normal", color: "text-overlay-light", style: tmp.title, children: formatResult };
    let Text = tmp2(4832).Text;
    if (num == null) {
      num = 0;
    }
    if (num >= 4100) {
      const intl3 = tmp2(1115).intl;
      const obj17 = {
        balanceHook() {
              const obj = { balance: num };
              return map1(OrbsBalance, obj, "balance");
            },
        profileDecoHook() {
              let intl;
              const obj = { variant: "text-md/semibold", color: "text-overlay-light", children: intl.string(num(dependencyMap[17]).t.pGDUH9) };
              const Text = num(dependencyMap[33]).Text;
              intl = num(dependencyMap[17]).intl;
              return closure_1_13(Text, obj, "profileDeco");
            }
      };
      formatResult = intl3.format(tmp2(1115).t["2dz2AL"], obj17);
    } else {
      const intl2 = tmp2(1115).intl;
      const obj18 = {
        balanceHook() {
              const obj = { balance: num };
              return map1(OrbsBalance, obj, "balance");
            }
      };
      formatResult = intl2.format(tmp2(1115).t.rKHvlX, obj18);
    }
    items6[1] = closure_13(Text, obj16);
    items5[2] = closure_15(closure_8, obj13);
    const obj19 = { style: tmp.buttonsContainer, children: closure_13(Button, obj20) };
    obj20 = { onPress: callback1, variant: "primary", size: "lg", text: intl4.string(num(1115).t.uJAMFX) };
    Button = tmp2(5281).Button;
    intl4 = tmp2(1115).intl;
    items5[3] = closure_13(closure_8, obj19);
    tmp12Result = closure_15(SafeAreaPaddingView, rect);
  }
  items3[2] = tmp12Result;
  return closure_15(closure_8, obj6);
};
export const openQuestOrbsRewardModal = function openQuestOrbsRewardModal(quest) {
  let paths;
  quest = quest.quest;
  const obj = ModalActionCreatorsDefault;
  obj.pushLazy(_asyncToGenerator(async () => {
    let c0;
    let c1;
    await require("asyncRequire")(paths[10], paths.paths);
    return arg1.default;
  }), { quest }, QuestOrbsRewardModal_str);
};
