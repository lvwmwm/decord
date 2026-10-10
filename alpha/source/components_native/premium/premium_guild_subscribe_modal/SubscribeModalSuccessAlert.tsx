// Module ID: 13893
// Function ID: 13894
// Name: SubscribeModalSuccessAlert
// Dependencies: [32, 19, 17, 2087, 7151, 21, 5092, 587, 558, 576, 13894, 13895, 504, 5031, 1126, 5300, 5959, 4969, 13896, 13897, 6156, 5391, 1105, 5088, 5398, 2]

// Module 13893 (SubscribeModalSuccessAlert)
import react_native from "react-native" /* 17 */;
import get_initialized from "get initialized" /* 504 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import ConstantsIOS from "ConstantsIOS" /* 1105 */;
import intl4 from "intl" /* 1126 */;
import shared from "shared" /* 4969 */;
import useThemeDefault from "useTheme" /* 5031 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 5300 */;
import LinearGradientDefault from "LinearGradient" /* 5391 */;
import AlertDefault from "Alert" /* 5398 */;
import ColorConstants from "ColorConstants" /* 7151 */;
import SequencedLottieAnimationViewDefault from "SequencedLottieAnimationView" /* 13895 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import GuildStore from "GuildStore" /* 2087 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5092 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let dependencyMap, importDefault;

let c9;
let metroImportAll;
let obj2;
let obj3;
let tmp;
let tmp17;
const FastImageDefault = tmp17(6156);
const _mod13894 = tmp(13894);
const View = react_native.View;
const Gradients = ColorConstants.Gradients;
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let createStyles = createStyles_mod;
let obj = { wrapper: { paddingHorizontal: 24, paddingBottom: 16, paddingTop: 4, alignItems: "stretch" }, animation: { width: "auto", height: 112, alignSelf: "center" }, text: { lineHeight: 18, textAlign: "center" }, activated: obj2, activatedBackground: obj3, activatedImage: { width: 220 }, successInfo: { marginTop: 24 } };
obj2 = { padding: 2, borderRadius: nativeDefault.radii.xs, marginTop: 8 };
createStyles = createStyles.createStyles;
obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, paddingVertical: 12, paddingHorizontal: 20, alignItems: "center" };
let closure_10 = createStyles(obj);
let obj4 = { ENTRY: "entry", IDLE: "idle" };
const sceneSegments = { [obj4.ENTRY]: { BEG: 0, END: 180 }, [obj4.IDLE]: { BEG: 180, END: 360 } };
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function PremiumPaymentGuildAnimation(arg0) {
  let first;
  let loop;
  let nextScene;
  let onSceneComplete;
  const obj = react2;
  const cResult = obj.c(6);
  ({ nextScene, onSceneComplete, loop } = arg0);
  const tmp4 = closure_10();
  const animation = tmp4.animation;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const tmpResult = _mod13894;
    cResult[0] = tmpResult;
    first = tmpResult;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === loop) {
    if (cResult[2] === nextScene) {
      if (cResult[3] === onSceneComplete) {
        let tmp7;
        if (cResult[4] === tmp4.animation) {
          tmp7 = cResult[5];
        }
        return tmp7;
      }
    }
  }
  const obj2 = { nextScene, onSceneComplete, loop, sceneSegments, style: animation, source: first };
  const tmp8 = metroImportAll(SequencedLottieAnimationViewDefault, obj2);
  cResult[1] = loop;
  cResult[2] = nextScene;
  cResult[3] = onSceneComplete;
  cResult[4] = tmp4.animation;
  cResult[5] = tmp8;
  tmp7 = tmp8;
}) : (function PremiumPaymentGuildAnimation(arg0) {
  let loop;
  let nextScene;
  let onSceneComplete;
  ({ nextScene, onSceneComplete, loop } = arg0);
  const obj = { nextScene, onSceneComplete, loop, sceneSegments, style: closure_10().animation, source: _mod13894 };
  const tmp2 = SequencedLottieAnimationViewDefault;
  return metroImportAll(tmp2, obj);
});
let closure_12 = tmp4;
tmp4.Scenes = obj4;
ReactCompilerGating = ReactCompilerGating_mod;
const tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function SubscribeModalSuccessAlert(guildId) {
  let first;
  let tmp14;
  let tmp16;
  let tmp7;
  const f116861 = (premiumGuildSubscription) => null != premiumGuildSubscription.premiumGuildSubscription;
  let obj = guildId(576);
  const cResult = obj.c(42);
  guildId = guildId.guildId;
  const guildBoostSlots = guildId.guildBoostSlots;
  const tmp4 = closure_10();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== guildId) {
    const fn = function v() {
      return GuildStore.getGuild(guildId);
    };
    cResult[1] = guildId;
    cResult[2] = fn;
    tmp7 = fn;
  } else {
    tmp7 = cResult[2];
  }
  const tmpResult = guildId(504);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp7);
  if (cResult[3] !== guildBoostSlots) {
    cResult[3] = guildBoostSlots;
    cResult[4] = null != guildBoostSlots && guildBoostSlots.some(f116861);
    const tmp11 = null != guildBoostSlots && guildBoostSlots.some(f116861);
  }
  let num6;
  if (guildBoostSlots != null) {
    num6 = guildBoostSlots.length;
  }
  if (num6 == null) {
    num6 = 1;
  }
  [tmp14, importDefault] = react.useState(Scenes.Scenes.ENTRY);
  _slicedToArray(react.useState(Scenes.Scenes.ENTRY), 2);
  [tmp16, dependencyMap] = react.useState(false);
  _slicedToArray(react.useState(false), 2);
  const tmp18 = useThemeDefault();
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1126).intl;
    const stringResult = intl.string(guildId(1126).t.YKxJCI);
    class G {
      constructor() {
        const obj = actions_AlertActionCreatorsDefault;
        obj.close();
        const obj2 = guildId(dependencyMap[16]);
        obj2.closeApplyBoostModal();
      }
    }
    cResult[5] = stringResult;
    cResult[6] = G;
  }
  if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
    class B {
      constructor(arg0) {
        if (Scenes.Scenes.ENTRY === arg0) {
          return importDefault(Scenes.Scenes.IDLE);
        } else if (Scenes.Scenes.IDLE === arg0) {
          return dependencyMap(true);
        }
      }
    }
    cResult[7] = B;
    class G {
      constructor() {
        const obj = actions_AlertActionCreatorsDefault;
        obj.close();
        const obj2 = guildId(dependencyMap[16]);
        obj2.closeApplyBoostModal();
      }
    }
  } else {
    class B {
      constructor(arg0) {
        if (Scenes.Scenes.ENTRY === arg0) {
          return importDefault(Scenes.Scenes.IDLE);
        } else if (Scenes.Scenes.IDLE === arg0) {
          return dependencyMap(true);
        }
      }
    }
  }
  if (cResult[8] === tmp14) {
    class B {
      constructor(arg0) {
        if (Scenes.Scenes.ENTRY === arg0) {
          return importDefault(Scenes.Scenes.IDLE);
        } else if (Scenes.Scenes.IDLE === arg0) {
          return dependencyMap(true);
        }
      }
    }
    const tmpResult2 = guildId(4969);
    if (tmpResult2.isThemeLight(tmp18)) {
      class B {
        constructor(arg0) {
          if (Scenes.Scenes.ENTRY === arg0) {
            return importDefault(Scenes.Scenes.IDLE);
          } else if (Scenes.Scenes.IDLE === arg0) {
            return dependencyMap(true);
          }
        }
      }
    } else {
      class B {
        constructor(arg0) {
          if (Scenes.Scenes.ENTRY === arg0) {
            return importDefault(Scenes.Scenes.IDLE);
          } else if (Scenes.Scenes.IDLE === arg0) {
            return dependencyMap(true);
          }
        }
      }
    }
    class G {
      constructor() {
        const obj = actions_AlertActionCreatorsDefault;
        obj.close();
        const obj2 = guildId(dependencyMap[16]);
        obj2.closeApplyBoostModal();
      }
    }
    let obj2 = { style: tmp4.activatedImage, source: tmp24 };
    cResult[11] = tmp4.activatedImage;
    cResult[12] = tmp24;
    cResult[13] = closure_8(FastImageDefault, obj2);
    const tmp27 = closure_8(FastImageDefault, obj2);
  }
  cResult[8] = tmp14;
  cResult[9] = tmp16;
  cResult[10] = closure_8(Scenes, { nextScene: tmp14, loop: tmp16, onSceneComplete: tmp22 });
  closure_8(Scenes, { nextScene: tmp14, loop: tmp16, onSceneComplete: tmp22 });
}) : (function SubscribeModalSuccessAlert(arg0) {
  let closure_1;
  let closure_2;
  let first;
  let first1;
  let guildBoostSlots;
  let intl;
  let intl3;
  let items1;
  let items3;
  let obj11;
  let obj5;
  let obj6;
  let stringResult;
  let tmp10Result;
  let tmp17;
  ({ guildId: require, guildBoostSlots } = arg0);
  importDefault = undefined;
  dependencyMap = undefined;
  const tmp = closure_10();
  let obj = get_initialized;
  const items = [GuildStore];
  let someResult = null != guildBoostSlots;
  const stateFromStores = obj.useStateFromStores(items, () => GuildStore.getGuild(require));
  if (someResult) {
    someResult = guildBoostSlots.some((premiumGuildSubscription) => null != premiumGuildSubscription.premiumGuildSubscription);
  }
  let num;
  if (guildBoostSlots != null) {
    num = guildBoostSlots.length;
  }
  if (num == null) {
    num = 1;
  }
  [first, importDefault] = react.useState(Scenes.Scenes.ENTRY);
  [first1, dependencyMap] = react.useState(false);
  let obj2 = {
    style: tmp.wrapper,
    confirmText: intl.string(tmp2(1126).t.YKxJCI),
    onConfirm() {
      const obj = closure_1(closure_2[15]);
      obj.close();
      const obj2 = require("BoostingActionCreators");
      obj2.closeApplyBoostModal();
    },
    children: items1
  };
  const tmp11 = useThemeDefault();
  const tmp13 = AlertDefault;
  intl = tmp2(1126).intl;
  items1 = [, ];
  const obj3 = {
    nextScene: first,
    loop: first1,
    onSceneComplete(currentScene) {
      if (Scenes.Scenes.ENTRY === currentScene) {
        return closure_1(Scenes.Scenes.IDLE);
      } else if (Scenes.Scenes.IDLE === currentScene) {
        return closure_2(true);
      }
    }
  };
  items1[0] = closure_8(Scenes, obj3);
  const obj4 = { style: tmp.activated, start: ConstantsIOS.HorizontalGradient.START, end: ConstantsIOS.HorizontalGradient.END, colors: Gradients.PREMIUM_GUILD, children: closure_8(View, obj5) };
  const tmp16 = LinearGradientDefault;
  obj5 = { style: tmp.activatedBackground, children: closure_8(tmp17, obj6) };
  obj6 = { style: tmp.activatedImage, source: tmp10Result };
  tmp17 = FastImageDefault;
  const tmp2Result = shared;
  if (tmp2Result.isThemeLight(tmp11)) {
    tmp10Result = tmp10(13896);
  } else {
    tmp10Result = tmp10(13897);
  }
  const items2 = [closure_8(tmp16, obj4), ];
  const obj7 = { style: tmp.successInfo, children: items3 };
  const obj8 = { style: tmp.text, variant: "text-sm/medium", children: stringResult };
  const Text = tmp2(5088).Text;
  const intl2 = tmp2(1126).intl;
  const string = intl2.string;
  const t = tmp2(1126).t;
  if (someResult) {
    stringResult = string(t.RMmWY3);
  } else {
    stringResult = string(t.d81BkZ);
  }
  const obj9 = { children: items2 };
  items3 = [closure_8(Text, obj8), ];
  const obj10 = { style: tmp.text, variant: "text-sm/medium", children: intl3.format(intl4.t.r0IGsP, obj11) };
  const Text2 = tmp2(5088).Text;
  intl3 = tmp2(1126).intl;
  obj11 = { guildName: stateFromStores.name, guildSubscriptionQuantity: num };
  items3[1] = closure_8(Text2, obj10);
  items2[1] = closure_9(View, obj7);
  items1[1] = closure_9(View, obj9);
  return closure_9(tmp13, obj2);
});
const result = size.fileFinishedImporting("components_native/premium/premium_guild_subscribe_modal/SubscribeModalSuccessAlert.tsx");

export default tmp5;
