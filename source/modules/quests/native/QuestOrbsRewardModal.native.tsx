// Module ID: 10957
// Function ID: 85160
// Name: CancelButton
// Dependencies: [57, 5, 31, 27, 4122, 1849, 6651, 4976, 653, 655, 33, 4337, 10957, 1934, 4130, 689, 5094, 5119, 1212, 5085, 8043, 478, 10958, 8346, 10959, 10960, 10961, 10962, 566, 8763, 668, 9499, 8347, 6773, 5482, 10946, 4979, 10495, 5121, 4126, 8749, 4543, 2]
// Exports: default, openQuestOrbsRewardModal

// Module 10957 (CancelButton)
import _slicedToArray from "_slicedToArray";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import importAllResult from "getCollectiblesQuestReward";
import get_ActivityIndicator from "metadata";
import closure_9 from "_isNativeReflectConstruct";
import closure_10 from "_isNativeReflectConstruct";
import closure_11 from "_isNativeReflectConstruct";
import { RewardFilterTypes } from "QuestsExperimentLocations";
import { Orientation } from "ME";
import { CollectiblesMobileShopScreen as closure_14 } from "items";
import jsxProd from "_createForOfIteratorHelperLoose";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_15;
let closure_16;
let closure_6;
let closure_7;
let closure_8;
let require = arg1;
function CancelButton() {
  const tmp = callback4();
  const require = tmp;
  const obj = {
    onPress() {
      outer1_1(outer1_2[11]).popWithKey(outer1_17);
    },
    backImage() {
      const style = [tmp.closeButtonIcon];
      return outer1_15(tmp(outer1_2[17]).XSmallIcon, { size: "lg", style });
    }
  };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.accessibilityLabel = intl.string(require(1212) /* getSystemLocale */.t.cpT0Cq);
  obj.labelVisible = false;
  obj.style = tmp.closeButton;
  return callback3(require(5094) /* Background */.HeaderBackButton, obj);
}
function StaticOrb() {
  let obj = { style: { width: "100%", height: "100%" } };
  obj = {};
  obj = {};
  const tmp = callback6();
  obj.uri = importDefault(10960);
  obj.source = obj;
  obj.style = tmp.animatedOrb;
  obj.fade = false;
  obj.children = callback3(importDefault(5085), obj);
  return callback3(closure_8, obj);
}
function AnimatedOrbContainer(isAppActive) {
  let _isNativeReflectConstruct;
  let tmp7;
  isAppActive = isAppActive.isAppActive;
  const tmp = callback6();
  const tmp2 = callback(importAllResult.useState(false), 2);
  const first = tmp2[0];
  const importDefault = tmp2[1];
  const tmp4 = callback(importAllResult.useState(false), 2);
  const first1 = tmp4[0];
  callback = tmp4[1];
  [tmp7, _isNativeReflectConstruct] = callback(importAllResult.useState(true), 2);
  callback = importAllResult.useCallback(() => {
    callback(true);
  }, []);
  const items = [first, first1];
  const callback1 = importAllResult.useCallback(() => {
    callback2(true);
  }, []);
  const effect = importAllResult.useEffect(() => {
    if (timeout) {
      if (first1) {
        const _setTimeout = setTimeout;
        timeout = setTimeout(() => {
          outer1_4(false);
        }, 1450);
        return () => clearTimeout(closure_0);
      }
    }
  }, items);
  let obj = { style: { width: "100%", height: "100%" } };
  let tmp13 = !first;
  if (tmp13) {
    tmp13 = !first1;
  }
  if (tmp13) {
    obj = {};
    obj = { height: "100%" };
    obj.style = obj;
    tmp13 = callback3(closure_8, obj);
  }
  const items1 = [tmp13, , ];
  const obj1 = { uri: importDefault(first1[26]) };
  const items2 = [tmp.animatedOrb, ];
  let tmp18 = tmp7;
  if (!tmp7) {
    tmp18 = !first1;
  }
  if (tmp18) {
    const obj2 = { opacity: 0 };
    tmp18 = obj2;
  }
  items2[1] = tmp18;
  obj1.style = items2;
  obj1.onLoad = callback1;
  obj1.animate = !tmp7 && isAppActive;
  items1[1] = callback3(closure_22, obj1);
  if (tmp7) {
    const obj3 = { uri: importDefault(first1[27]) };
    const items3 = [tmp.animatedOrb];
    obj3.style = items3;
    obj3.onLoad = callback;
    obj3.animate = isAppActive;
    tmp7 = callback3(closure_22, obj3);
  }
  items1[2] = tmp7;
  obj.children = items1;
  return closure_16(closure_8, obj);
}
({ ActivityIndicator: closure_6, StyleSheet: closure_7, View: closure_8 } = get_ActivityIndicator);
({ jsx: closure_15, jsxs: closure_16 } = jsxProd);
const QuestOrbsRewardModal = "QuestOrbsRewardModal";
let obj = {};
obj = { alignSelf: "flex-start", marginHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16, zIndex: 999 };
obj.closeButton = obj;
_createForOfIteratorHelperLoose = { tintColor: require("_createForOfIteratorHelperLoose").colors.WHITE };
obj.closeButtonIcon = _createForOfIteratorHelperLoose;
let closure_18 = _createForOfIteratorHelperLoose.createStyles(obj);
let closure_19 = _createForOfIteratorHelperLoose.createStyles(() => {
  let obj = {};
  obj = { flex: 1, backgroundColor: importDefault(689).colors.BACKGROUND_BASE_LOW };
  obj.root = obj;
  obj.background = closure_7.absoluteFillObject;
  obj = { justifyContent: "center", alignItems: "center", backgroundColor: importDefault(689).colors.BACKGROUND_BASE_LOW };
  const merged = Object.assign(closure_7.absoluteFillObject);
  obj.loading = obj;
  obj.header = { flexDirection: "row", alignItems: "flex-end", justifyContent: "flex-end" };
  obj.main = { flex: 2 };
  obj.animation = { flex: 3 };
  const obj1 = { flex: 2, flexDirection: "column", justifyContent: "center", gap: importDefault(689).space.PX_16 };
  obj.body = obj1;
  obj.title = { textAlign: "center", marginHorizontal: importDefault(689).space.PX_32 };
  const obj2 = { textAlign: "center", marginHorizontal: importDefault(689).space.PX_32 };
  obj.buttonsContainer = { padding: importDefault(689).space.PX_24, gap: importDefault(689).space.PX_16 };
  const items = [{ translateY: 3 }];
  obj.orbsIconAndroid = { transform: items };
  obj.orbsIconIOS = { marginTop: 0, marginRight: 3 };
  return obj;
});
let closure_20 = importAllResult.memo((uri) => {
  uri = uri.uri;
  let flag = uri.animate;
  if (flag === undefined) {
    flag = true;
  }
  const items = [uri];
  const effect = importAllResult.useEffect(() => {
    outer1_1(outer1_2[19]).preload(uri);
  }, items);
  const obj = { source: { uri }, style: { width: "100%", height: "100%" }, resizeMode: "cover", enableAnimation: flag, onLoad: uri.onLoad, usesSmallCache: false, fade: false };
  return callback3(importDefault(5085), obj, "orb-animate-" + flag);
});
let closure_21 = importAllResult.memo((animate) => {
  let onLoad;
  let uri;
  let flag = animate.animate;
  ({ uri, onLoad } = animate);
  if (flag === undefined) {
    flag = true;
  }
  let aPNGPlayerControls;
  const ref = importAllResult.useRef(null);
  aPNGPlayerControls = flag(8043).useAPNGPlayerControls(ref);
  const items = [flag, aPNGPlayerControls];
  const effect = importAllResult.useEffect(() => {
    if (flag) {
      obj.play();
    } else {
      obj.stop();
    }
  }, items);
  return callback3(flag(8043).APNGPlayer, { ref, url, autoplay: false, style: { width: "100%", height: "100%" }, onLoad });
});
let closure_22 = importAllResult.memo((animate) => {
  let onLoad;
  let style;
  let uri;
  let flag = animate.animate;
  ({ uri, style, onLoad } = animate);
  if (flag === undefined) {
    flag = true;
  }
  let obj = require(478) /* isWindows */;
  obj = { style, renderToHardwareTextureAndroid: true, needsOffscreenAlphaCompositing: true };
  obj = { uri, onLoad, animate: flag };
  obj.children = callback3(obj.isAndroid() ? closure_21 : closure_20, obj);
  return callback3(closure_8, obj);
});
let closure_23 = importAllResult.memo((style) => {
  let isAppActive;
  let onAnimatedBgLoad;
  let onStaticBgLoad;
  let useReducedMotion;
  style = style.style;
  let obj = {};
  ({ useReducedMotion, onStaticBgLoad, onAnimatedBgLoad, isAppActive } = style);
  obj = {};
  obj = { uri: importDefault(10958) };
  obj.source = obj;
  obj.style = style;
  obj.resizeMode = "cover";
  obj.onLoad = onStaticBgLoad;
  const items = [callback3(importDefault(5085), obj), ];
  let tmp3 = !useReducedMotion && isAppActive;
  if (tmp3) {
    const obj1 = { source: null, style: null, resizeMode: "cover", onLoad: null, disableFocus: true, playInBackground: true, preventsDisplaySleepDuringVideoPlayback: false };
    const obj2 = { uri: importDefault(10959) };
    obj1.source = obj2;
    obj1.style = style;
    obj1.onLoad = onAnimatedBgLoad;
    tmp3 = callback3(require(8346) /* _isNativeReflectConstruct */.VideoComponent, obj1);
  }
  items[1] = tmp3;
  obj.children = items;
  return closure_16(importAllResult.Fragment, obj);
});
let closure_24 = _createForOfIteratorHelperLoose.createStyles({ animatedOrb: { position: "absolute", height: "130%", width: "130%", left: "-15%", top: "-15%", pointerEvents: "none" } });
let result = require("result").fileFinishedImporting("modules/quests/native/QuestOrbsRewardModal.native.tsx");

export default function QuestOrbsRewardModal(quest) {
  let dependencyMap;
  let tmp6;
  quest = quest.quest;
  let callback2;
  let callback3;
  let variant;
  let c6;
  let c7;
  let closure_8;
  let tmp = callback5();
  let obj = balance(566);
  let items = [closure_9];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_9.useReducedMotion);
  let obj1 = balance(8763);
  balance = obj1.useFetchVirtualCurrencyBalance().balance;
  const tmp3 = callback2(variant.useState(false), 2);
  let first = tmp3[0];
  let closure_1 = tmp3[1];
  [tmp6, dependencyMap] = callback2(variant.useState(false), 2);
  let obj2 = balance(566);
  const items1 = [closure_11];
  const stateFromStores1 = obj2.useStateFromStores(items1, () => outer1_11.getState());
  const tmp8 = stateFromStores1 === balance(668).AppStates.ACTIVE;
  let obj3 = balance(566);
  const items2 = [closure_10];
  const userStatus = quest.userStatus;
  let orbQuantityClaimed;
  const stateFromStores2 = obj3.useStateFromStores(items2, () => outer1_10.getCurrentUser());
  if (null != userStatus) {
    orbQuantityClaimed = userStatus.orbQuantityClaimed;
  }
  if (null == orbQuantityClaimed) {
    let obj4 = balance(9499);
    orbQuantityClaimed = obj4.getQuestOrbRewardQuantityForUser(quest.config, stateFromStores2);
  }
  const effect = variant.useEffect(() => {
    balance(outer1_2[32]).lockOrientation(outer1_13.PORTRAIT);
    return () => {
      const result = balance(outer2_2[32]).restoreDefaultOrientation();
    };
  }, []);
  const callback = variant.useCallback(() => {
    callback(true);
  }, []);
  const callback1 = variant.useCallback(() => {
    callback2(true);
  }, []);
  callback2 = variant.useCallback(() => {
    let obj = callback(outer1_2[11]);
    obj.popWithKey(outer1_17);
    obj = {};
    const items = [callback(outer1_2[34]).MOBILE_ORBS_REWARD_CLAIM_MODAL];
    obj.analyticsLocations = items;
    obj.analyticsSource = callback(outer1_2[34]).MOBILE_ORBS_REWARD_CLAIM_MODAL;
    obj.screen = outer1_14.ORBS;
    const result = balance(outer1_2[33]).openCollectiblesShopMobile(obj);
  }, []);
  callback3 = variant.useCallback(() => {
    let obj = callback(outer1_2[11]);
    obj.popWithKey(outer1_17);
    obj = { filter: outer1_12.VIRTUAL_CURRENCY, fromContent: balance(outer1_2[36]).QuestContent.REWARD_MODAL };
    balance(outer1_2[35]).openQuestHome(obj);
  }, []);
  let obj5 = balance(10495);
  variant = obj5.useMobileQuestOrbRewardModalCtaPriorityExperiment().variant;
  let num2 = 0;
  if (null != balance) {
    num2 = balance;
  }
  c6 = tmp18;
  const items3 = [variant, num2 >= 4100, callback3, callback2];
  const memo = variant.useMemo(() => {
    if (balance(outer1_2[37]).MobileQuestOrbRewardModalCtaPriorityVariant.EARN_ORBS_PRIMARY === variant) {
      let obj = {};
      obj = { text: balance(outer1_2[18]).t.uJAMFX, handler: callback3 };
      obj.primary = obj;
      const obj1 = { text: balance(outer1_2[18]).t.GPdvqY, handler: callback2 };
      obj.secondary = obj1;
      return obj;
    } else if (balance(outer1_2[37]).MobileQuestOrbRewardModalCtaPriorityVariant.EARN_ORBS_ONLY === tmp) {
      const obj2 = {};
      const obj3 = { text: balance(outer1_2[18]).t.uJAMFX, handler: callback3 };
      obj2.primary = obj3;
      obj2.secondary = null;
      return obj2;
    } else {
      const obj4 = {};
      const obj5 = {};
      const t = balance(outer1_2[18]).t;
      if (c6) {
        obj5.text = t.GPdvqY;
        obj5.handler = callback2;
        obj4.primary = obj5;
        const obj6 = { text: tmp18(tmp19[18]).t.uJAMFX, handler: callback3 };
        obj4.secondary = obj6;
        let tmp4 = obj4;
      } else {
        obj5.text = t.uJAMFX;
        obj5.handler = callback3;
        obj4.primary = obj5;
        obj = { text: tmp18(tmp19[18]).t.GPdvqY, handler: callback2 };
        obj4.secondary = obj;
        tmp4 = obj4;
      }
      return tmp4;
    }
    tmp = variant;
  }, items3);
  let obj6 = balance(478);
  const isAndroidResult = obj6.isAndroid();
  c7 = isAndroidResult;
  closure_8 = isAndroidResult ? tmp.orbsIconAndroid : tmp.orbsIconIOS;
  obj = { style: tmp.root };
  obj = { style: c7.absoluteFill, accessible: false, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants" };
  obj1 = { useReducedMotion: stateFromStores, style: tmp.background, onStaticBgLoad: callback, onAnimatedBgLoad: callback1, isAppActive: tmp8 };
  obj.children = callback3(closure_23, obj1);
  const items4 = [callback3(closure_8, obj), , ];
  let tmp23 = !first;
  if (tmp23) {
    let tmp24 = stateFromStores;
    if (!stateFromStores) {
      tmp24 = !tmp6;
    }
    tmp23 = tmp24;
  }
  if (tmp23) {
    obj2 = { style: tmp.loading };
    obj3 = { animating: true };
    obj2.children = callback3(c6, obj3);
    tmp23 = callback3(closure_8, obj2);
  }
  items4[1] = tmp23;
  if (!first) {
    first = !stateFromStores && tmp6;
    const tmp29 = !stateFromStores && tmp6;
  }
  if (first) {
    obj4 = { style: null, top: true, bottom: true, left: true, right: true };
    const items5 = [tmp.main];
    obj4.style = items5;
    obj5 = { style: tmp.header, children: callback3(CancelButton, {}) };
    const items6 = [callback3(closure_8, obj5), , , ];
    obj6 = { style: tmp.animation, accessible: false, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants" };
    if (stateFromStores) {
      let tmp39Result = tmp39(StaticOrb, {});
    } else {
      const obj7 = { isAppActive: tmp8 };
      tmp39Result = tmp39(AnimatedOrbContainer, obj7);
    }
    obj6.children = tmp39Result;
    items6[1] = callback3(closure_8, obj6);
    const obj8 = { style: tmp.body };
    const obj9 = { variant: "heading-xl/bold", color: "text-overlay-light", style: tmp.title };
    let intl = balance(1212).intl;
    const obj10 = {};
    let num6 = 0;
    if (null != orbQuantityClaimed) {
      num6 = orbQuantityClaimed;
    }
    obj10.count = num6;
    obj9.children = intl.format(balance(1212).t.FIilK5, obj10);
    const items7 = [callback3(balance(4126).Heading, obj9), ];
    const obj11 = { variant: "text-md/normal", color: "text-overlay-light", style: tmp.title };
    const intl2 = balance(1212).intl;
    const format = intl2.format;
    let t = balance(1212).t;
    if (tmp18) {
      const obj12 = {
        balanceHook() {
              let obj = {};
              obj = { size: "xs", color: callback(outer1_2[15]).colors.WHITE, style: closure_8 };
              const items = [outer1_15(balance(outer1_2[40]).OrbsIcon, obj), , ];
              let tmp2 = c7;
              if (c7) {
                obj = {};
                const obj1 = { width: 2 };
                obj.style = obj1;
                tmp2 = outer1_15(closure_8, obj);
              }
              items[1] = tmp2;
              items[2] = balance;
              obj.children = items;
              return outer1_16(variant.Fragment, obj, "balance");
            },
        profileDecoHook() {
              const obj = { variant: "text-md/semibold", color: "text-overlay-light" };
              const intl = balance(outer1_2[18]).intl;
              obj.children = intl.string(balance(outer1_2[18]).t.pGDUH9);
              return outer1_15(balance(outer1_2[39]).Text, obj, "profileDeco");
            }
      };
      let formatResult = format(t["2dz2AL"], obj12);
    } else {
      const obj13 = {
        balanceHook() {
              let obj = {};
              obj = { size: "xs", color: callback(outer1_2[15]).colors.WHITE, style: closure_8 };
              const items = [outer1_15(balance(outer1_2[40]).OrbsIcon, obj), , ];
              let tmp2 = c7;
              if (c7) {
                obj = {};
                const obj1 = { width: 2 };
                obj.style = obj1;
                tmp2 = outer1_15(closure_8, obj);
              }
              items[1] = tmp2;
              items[2] = balance;
              obj.children = items;
              return outer1_16(variant.Fragment, obj, "balance");
            }
      };
      formatResult = format(t.rKHvlX, obj13);
    }
    obj11.children = formatResult;
    items7[1] = callback3(balance(4126).Text, obj11);
    obj8.children = items7;
    items6[2] = closure_16(closure_8, obj8);
    const obj14 = { style: tmp.buttonsContainer };
    const obj15 = { onPress: memo.primary.handler, variant: "primary", size: "lg" };
    const intl3 = balance(1212).intl;
    obj15.text = intl3.string(memo.primary.text);
    const items8 = [callback3(balance(4543).Button, obj15), ];
    let tmp59 = null != memo.secondary;
    if (tmp59) {
      const obj16 = { onPress: memo.secondary.handler, variant: "secondary", size: "lg" };
      const intl4 = balance(1212).intl;
      obj16.text = intl4.string(memo.secondary.text);
      tmp59 = callback3(balance(4543).Button, obj16);
    }
    items8[1] = tmp59;
    obj14.children = items8;
    items6[3] = closure_16(closure_8, obj14);
    obj4.children = items6;
    first = closure_16(balance(5121).SafeAreaPaddingView, obj4);
    const tmp30 = closure_16;
    const tmp37 = callback3;
    const tmp38 = closure_8;
    const tmp43 = closure_16;
    const tmp44 = closure_8;
    const tmp45 = callback3;
    const tmp48 = callback3;
    const tmp54 = closure_16;
    const tmp55 = closure_8;
  }
  items4[2] = first;
  obj.children = items4;
  return closure_16(closure_8, obj);
};
export const openQuestOrbsRewardModal = function openQuestOrbsRewardModal(quest) {
  // CreateGeneratorClosureLongIndex (0x67)
  importDefault(4337).pushLazy(callback2(4337), { quest: quest.quest }, QuestOrbsRewardModal);
};
