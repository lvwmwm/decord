// Module ID: 10919
// Function ID: 84909
// Name: CancelButton
// Dependencies: []
// Exports: default, openQuestOrbsRewardModal

// Module 10919 (CancelButton)
function CancelButton() {
  const tmp = callback4();
  const arg1 = tmp;
  const obj = {
    onPress() {
      callback(closure_2[11]).popWithKey(closure_17);
    },
    backImage() {
      const style = [tmp.closeButtonIcon];
      return callback2(tmp(closure_2[17]).XSmallIcon, { size: "lg", style });
    }
  };
  const intl = arg1(dependencyMap[18]).intl;
  obj.accessibilityLabel = intl.string(arg1(dependencyMap[18]).t.cpT0Cq);
  obj.labelVisible = false;
  obj.style = tmp.closeButton;
  return callback3(arg1(dependencyMap[16]).HeaderBackButton, obj);
}
function StaticOrb() {
  let obj = { style: {} };
  obj = {};
  obj = {};
  const tmp = callback6();
  obj.uri = importDefault(dependencyMap[25]);
  obj.source = obj;
  obj.style = tmp.animatedOrb;
  obj.fade = false;
  obj.children = callback3(importDefault(dependencyMap[19]), obj);
  return callback3(closure_8, obj);
}
function AnimatedOrbContainer(isAppActive) {
  let tmp7;
  isAppActive = isAppActive.isAppActive;
  const tmp = callback6();
  const tmp2 = callback(importAllResult.useState(false), 2);
  const first = tmp2[0];
  const arg1 = first;
  const importDefault = tmp2[1];
  const tmp4 = callback(importAllResult.useState(false), 2);
  const first1 = tmp4[0];
  const dependencyMap = first1;
  let callback = tmp4[1];
  [tmp7, closure_4] = callback(importAllResult.useState(true), 2);
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
        const timeout = setTimeout(() => {
          callback(false);
        }, 1450);
        return () => clearTimeout(closure_0);
      }
    }
  }, items);
  let obj = { style: {} };
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
  const obj1 = { uri: importDefault(dependencyMap[26]) };
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
    const obj3 = { uri: importDefault(dependencyMap[27]) };
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
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
const importAllResult = importAll(dependencyMap[2]);
({ ActivityIndicator: closure_6, StyleSheet: closure_7, View: closure_8 } = arg1(dependencyMap[3]));
let closure_9 = importDefault(dependencyMap[4]);
let closure_10 = importDefault(dependencyMap[5]);
let closure_11 = importDefault(dependencyMap[6]);
const RewardFilterTypes = arg1(dependencyMap[7]).RewardFilterTypes;
const Orientation = arg1(dependencyMap[8]).Orientation;
let closure_14 = arg1(dependencyMap[9]).CollectiblesMobileShopScreen;
const tmp2 = arg1(dependencyMap[3]);
({ jsx: closure_15, jsxs: closure_16 } = arg1(dependencyMap[10]));
let closure_17 = "QuestOrbsRewardModal";
let obj1 = arg1(dependencyMap[14]);
let obj = {};
obj = { marginHorizontal: importDefault(dependencyMap[15]).space.PX_16 };
obj.closeButton = obj;
obj1 = { tintColor: importDefault(dependencyMap[15]).colors.WHITE };
obj.closeButtonIcon = obj1;
let closure_18 = obj1.createStyles(obj);
const tmp3 = arg1(dependencyMap[10]);
let closure_19 = arg1(dependencyMap[14]).createStyles(() => {
  let obj = {};
  obj = { flex: 1, backgroundColor: importDefault(dependencyMap[15]).colors.BACKGROUND_BASE_LOW };
  obj.root = obj;
  obj.background = closure_7.absoluteFillObject;
  obj = { margin: null, backgroundColor: importDefault(dependencyMap[15]).colors.BACKGROUND_BASE_LOW };
  const merged = Object.assign(closure_7.absoluteFillObject);
  obj.loading = obj;
  obj.header = { <string:1334598284>: false, <string:3229045644>: false, <string:2213734789>: false };
  obj.main = { flex: 2 };
  obj.animation = { flex: 3 };
  const obj1 = { padding: null, Date: null, apply: null, gap: importDefault(dependencyMap[15]).space.PX_16 };
  obj.body = obj1;
  obj.title = { textAlign: "center", marginHorizontal: importDefault(dependencyMap[15]).space.PX_32 };
  const obj2 = { textAlign: "center", marginHorizontal: importDefault(dependencyMap[15]).space.PX_32 };
  obj.buttonsContainer = { padding: importDefault(dependencyMap[15]).space.PX_24, gap: importDefault(dependencyMap[15]).space.PX_16 };
  const items = [{ translateY: 3 }];
  obj.orbsIconAndroid = { transform: items };
  obj.orbsIconIOS = { iconPosition: 2, style: "text-sm/semibold" };
  return obj;
});
let closure_20 = importAllResult.memo((uri) => {
  uri = uri.uri;
  const arg1 = uri;
  let flag = uri.animate;
  if (flag === undefined) {
    flag = true;
  }
  const items = [uri];
  const effect = importAllResult.useEffect(() => {
    callback(closure_2[19]).preload(uri);
  }, items);
  const obj = { source: { uri }, style: {}, resizeMode: "cover", enableAnimation: flag, onLoad: uri.onLoad, usesSmallCache: false, fade: false };
  return callback3(importDefault(dependencyMap[19]), obj, "orb-animate-" + flag);
});
let closure_21 = importAllResult.memo((animate) => {
  let onLoad;
  let uri;
  let flag = animate.animate;
  ({ uri, onLoad } = animate);
  if (flag === undefined) {
    flag = true;
  }
  const arg1 = flag;
  let importDefault;
  const ref = importAllResult.useRef(null);
  const aPNGPlayerControls = arg1(dependencyMap[20]).useAPNGPlayerControls(ref);
  importDefault = aPNGPlayerControls;
  const items = [flag, aPNGPlayerControls];
  const effect = importAllResult.useEffect(() => {
    if (flag) {
      obj.play();
    } else {
      obj.stop();
    }
  }, items);
  return callback3(arg1(dependencyMap[20]).APNGPlayer, { ref, url, autoplay: false, style: {}, onLoad });
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
  let obj = arg1(dependencyMap[21]);
  obj = { <string:1707113641>: null, <string:1403672123>: null, <string:1311855202>: null, style };
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
  obj = { uri: importDefault(dependencyMap[22]) };
  obj.source = obj;
  obj.style = style;
  obj.resizeMode = "cover";
  obj.onLoad = onStaticBgLoad;
  const items = [callback3(importDefault(dependencyMap[19]), obj), ];
  let tmp3 = !useReducedMotion && isAppActive;
  if (tmp3) {
    const obj1 = {};
    const obj2 = { uri: importDefault(dependencyMap[24]) };
    obj1.source = obj2;
    obj1.style = style;
    obj1.onLoad = onAnimatedBgLoad;
    tmp3 = callback3(arg1(dependencyMap[23]).VideoComponent, obj1);
  }
  items[1] = tmp3;
  obj.children = items;
  return closure_16(importAllResult.Fragment, obj);
});
const obj6 = arg1(dependencyMap[14]);
let closure_24 = arg1(dependencyMap[14]).createStyles({ animatedOrb: {} });
const obj7 = arg1(dependencyMap[14]);
const result = arg1(dependencyMap[42]).fileFinishedImporting("modules/quests/native/QuestOrbsRewardModal.native.tsx");

export default function QuestOrbsRewardModal(quest) {
  let tmp6;
  quest = quest.quest;
  let callback;
  let closure_4;
  let importAllResult;
  let tmp18;
  let isAndroidResult;
  let closure_8;
  const tmp = callback5();
  let obj = arg1(dependencyMap[28]);
  const items = [closure_9];
  const stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  let obj1 = arg1(dependencyMap[29]);
  const balance = obj1.useFetchVirtualCurrencyBalance().balance;
  const arg1 = balance;
  const tmp3 = callback(importAllResult.useState(false), 2);
  let first = tmp3[0];
  let closure_1 = tmp3[1];
  [tmp6, closure_2] = callback(importAllResult.useState(false), 2);
  let obj2 = arg1(dependencyMap[28]);
  const items1 = [closure_11];
  const stateFromStores1 = obj2.useStateFromStores(items1, () => state.getState());
  const tmp8 = stateFromStores1 === arg1(dependencyMap[30]).AppStates.ACTIVE;
  let obj3 = arg1(dependencyMap[28]);
  const items2 = [closure_10];
  const userStatus = quest.userStatus;
  let orbQuantityClaimed;
  const stateFromStores2 = obj3.useStateFromStores(items2, () => currentUser.getCurrentUser());
  if (null != userStatus) {
    orbQuantityClaimed = userStatus.orbQuantityClaimed;
  }
  if (null == orbQuantityClaimed) {
    let obj4 = arg1(dependencyMap[31]);
    orbQuantityClaimed = obj4.getQuestOrbRewardQuantityForUser(quest.config, stateFromStores2);
  }
  const effect = importAllResult.useEffect(() => {
    balance(closure_2[32]).lockOrientation(constants2.PORTRAIT);
    return () => {
      const result = callback(closure_2[32]).restoreDefaultOrientation();
    };
  }, []);
  callback = importAllResult.useCallback(() => {
    callback(true);
  }, []);
  const callback1 = importAllResult.useCallback(() => {
    callback2(true);
  }, []);
  const callback2 = importAllResult.useCallback(() => {
    let obj = callback(closure_2[11]);
    obj.popWithKey(closure_17);
    obj = {};
    const items = [callback(closure_2[34]).MOBILE_ORBS_REWARD_CLAIM_MODAL];
    obj.analyticsLocations = items;
    obj.analyticsSource = callback(closure_2[34]).MOBILE_ORBS_REWARD_CLAIM_MODAL;
    obj.screen = constants3.ORBS;
    const result = balance(closure_2[33]).openCollectiblesShopMobile(obj);
  }, []);
  callback = callback2;
  const callback3 = importAllResult.useCallback(() => {
    let obj = callback(closure_2[11]);
    obj.popWithKey(closure_17);
    obj = { filter: constants.VIRTUAL_CURRENCY, fromContent: balance(closure_2[36]).QuestContent.REWARD_MODAL };
    balance(closure_2[35]).openQuestHome(obj);
  }, []);
  closure_4 = callback3;
  let obj5 = arg1(dependencyMap[37]);
  const variant = obj5.useMobileQuestOrbRewardModalCtaPriorityExperiment().variant;
  importAllResult = variant;
  let num2 = 0;
  if (null != balance) {
    num2 = balance;
  }
  tmp18 = num2 >= 4100;
  const items3 = [variant, tmp18, callback3, callback2];
  const memo = importAllResult.useMemo(() => {
    if (balance(closure_2[37]).MobileQuestOrbRewardModalCtaPriorityVariant.EARN_ORBS_PRIMARY === variant) {
      let obj = {};
      obj = { text: balance(closure_2[18]).t.uJAMFX, handler: callback3 };
      obj.primary = obj;
      const obj1 = { text: balance(closure_2[18]).t.GPdvqY, handler: callback2 };
      obj.secondary = obj1;
      return obj;
    } else if (balance(closure_2[37]).MobileQuestOrbRewardModalCtaPriorityVariant.EARN_ORBS_ONLY === tmp) {
      const obj2 = {};
      const obj3 = { text: balance(closure_2[18]).t.uJAMFX, handler: callback3 };
      obj2.primary = obj3;
      obj2.secondary = null;
      return obj2;
    } else {
      const obj4 = {};
      const obj5 = {};
      const t = balance(closure_2[18]).t;
      if (balance) {
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
    const tmp = variant;
  }, items3);
  let obj6 = arg1(dependencyMap[21]);
  isAndroidResult = obj6.isAndroid();
  closure_8 = isAndroidResult ? tmp.orbsIconAndroid : tmp.orbsIconIOS;
  obj = { style: tmp.root };
  obj = { style: isAndroidResult.absoluteFill, children: callback3(closure_23, obj1) };
  obj1 = { useReducedMotion: stateFromStores, style: tmp.background, onStaticBgLoad: callback, onAnimatedBgLoad: callback1, isAppActive: tmp8 };
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
    obj2.children = callback3(tmp18, obj3);
    tmp23 = callback3(closure_8, obj2);
  }
  items4[1] = tmp23;
  if (!first) {
    first = !stateFromStores && tmp6;
    const tmp29 = !stateFromStores && tmp6;
  }
  if (first) {
    obj4 = {};
    const items5 = [tmp.main];
    obj4.style = items5;
    obj5 = { style: tmp.header, children: callback3(CancelButton, {}) };
    const items6 = [callback3(closure_8, obj5), , , ];
    obj6 = { style: tmp.animation };
    if (stateFromStores) {
      let tmp39Result = tmp39(StaticOrb, {});
    } else {
      const obj7 = { isAppActive: tmp8 };
      tmp39Result = tmp39(AnimatedOrbContainer, obj7);
    }
    obj6.children = tmp39Result;
    items6[1] = callback3(closure_8, obj6);
    const obj8 = { style: tmp.body };
    const obj9 = { hasMaxConnections: "png", isBoostOnlySubscription: 1, style: tmp.title };
    const intl = arg1(dependencyMap[18]).intl;
    const obj10 = {};
    let num6 = 0;
    if (null != orbQuantityClaimed) {
      num6 = orbQuantityClaimed;
    }
    obj10.count = num6;
    obj9.children = intl.format(arg1(dependencyMap[18]).t.FIilK5, obj10);
    const items7 = [callback3(arg1(dependencyMap[39]).Heading, obj9), ];
    const obj11 = { style: tmp.title };
    const intl2 = arg1(dependencyMap[18]).intl;
    const format = intl2.format;
    const t = arg1(dependencyMap[18]).t;
    if (tmp18) {
      const obj12 = {
        balanceHook() {
              let obj = {};
              obj = { size: "xs", color: callback(closure_2[15]).colors.WHITE, style: closure_8 };
              const items = [callback3(balance(closure_2[40]).OrbsIcon, obj), , ];
              let tmp2 = isAndroidResult;
              if (isAndroidResult) {
                obj = {};
                const obj1 = { width: 2 };
                obj.style = obj1;
                tmp2 = callback3(closure_8, obj);
              }
              items[1] = tmp2;
              items[2] = balance;
              obj.children = items;
              return closure_16(variant.Fragment, obj, "balance");
            },
        profileDecoHook() {
              const obj = { hasMaxConnections: "<string:3362914305>", isBoostOnlySubscription: "<string:2018574337>" };
              const intl = balance(closure_2[18]).intl;
              obj.children = intl.string(balance(closure_2[18]).t.pGDUH9);
              return callback3(balance(closure_2[39]).Text, obj, "profileDeco");
            }
      };
      let formatResult = format(t.2dz2AL, obj12);
    } else {
      const obj13 = {
        balanceHook() {
              let obj = {};
              obj = { size: "xs", color: callback(closure_2[15]).colors.WHITE, style: closure_8 };
              const items = [callback3(balance(closure_2[40]).OrbsIcon, obj), , ];
              let tmp2 = isAndroidResult;
              if (isAndroidResult) {
                obj = {};
                const obj1 = { width: 2 };
                obj.style = obj1;
                tmp2 = callback3(closure_8, obj);
              }
              items[1] = tmp2;
              items[2] = balance;
              obj.children = items;
              return closure_16(variant.Fragment, obj, "balance");
            }
      };
      formatResult = format(t.rKHvlX, obj13);
    }
    obj11.children = formatResult;
    items7[1] = callback3(arg1(dependencyMap[39]).Text, obj11);
    obj8.children = items7;
    items6[2] = closure_16(closure_8, obj8);
    const obj14 = { style: tmp.buttonsContainer };
    const obj15 = { paddingVertical: true, display: "/assets/.cache/intl/bW9kdWxlcy9jb2xsZWN0aWJsZXMvd2Vi", flexDirection: null, onPress: memo.primary.handler };
    const intl3 = arg1(dependencyMap[18]).intl;
    obj15.text = intl3.string(memo.primary.text);
    const items8 = [callback3(arg1(dependencyMap[41]).Button, obj15), ];
    let tmp59 = null != memo.secondary;
    if (tmp59) {
      const obj16 = { paddingVertical: 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000012882297944488606, display: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000076436369851344, flexDirection: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002134690713675183, onPress: memo.secondary.handler };
      const intl4 = arg1(dependencyMap[18]).intl;
      obj16.text = intl4.string(memo.secondary.text);
      tmp59 = callback3(arg1(dependencyMap[41]).Button, obj16);
    }
    items8[1] = tmp59;
    obj14.children = items8;
    items6[3] = closure_16(closure_8, obj14);
    obj4.children = items6;
    first = closure_16(arg1(dependencyMap[38]).SafeAreaPaddingView, obj4);
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
  importDefault(dependencyMap[11]).pushLazy(callback2(dependencyMap[11]), { quest: quest.quest }, closure_17);
};
