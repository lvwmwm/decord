// Module ID: 13163
// Function ID: 13164
// Name: SubscribeModalSuccessAlert
// Dependencies: [32, 19, 17, 2067, 6852, 21, 4836, 576, 13164, 13165, 504, 4767, 5300, 1115, 5204, 5746, 5293, 1094, 4685, 13166, 13167, 4832, 2]
// Exports: default

// Module 13163 (SubscribeModalSuccessAlert)
import get_initialized from "get initialized" /* 504 */;
import nativeDefault from "native" /* 576 */;
import ConstantsIOS from "ConstantsIOS" /* 1094 */;
import intl4 from "intl" /* 1115 */;
import shared from "shared" /* 4685 */;
import useThemeDefault from "useTheme" /* 4767 */;
import LinearGradientDefault from "LinearGradient" /* 5293 */;
import AlertDefault from "Alert" /* 5300 */;
import ColorConstants from "ColorConstants" /* 6852 */;
import SequencedLottieAnimationViewDefault from "SequencedLottieAnimationView" /* 13164 */;
import _mod13165 from "module_13165" /* 13165 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import GuildStore from "GuildStore" /* 2067 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let dependencyMap, importDefault;

let c10;
let c9;
let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
class PremiumPaymentGuildAnimation {
  constructor(arg0) {
    let loop;
    let nextScene;
    let onSceneComplete;
    ({ nextScene, onSceneComplete, loop } = arg0);
    const obj = { nextScene, onSceneComplete, loop, sceneSegments, style: closure_11().animation, source: _mod13165 };
    const tmp2 = SequencedLottieAnimationViewDefault;
    return React4(tmp2, obj);
  }
}
({ View: hasOwnProperty, Image: metroRequire } = react_native);
const Gradients = ColorConstants.Gradients;
({ jsx: c9, jsxs: c10 } = Fragment);
let createStyles = createStyles_mod;
let obj = { wrapper: { paddingHorizontal: 24, paddingBottom: 16, paddingTop: 4, alignItems: "stretch" }, animation: { width: "auto", height: 112, alignSelf: "center" }, text: { lineHeight: 18, textAlign: "center" }, activated: obj2, activatedBackground: obj3, activatedImage: { width: 220 }, successInfo: { marginTop: 24 } };
obj2 = { padding: 2, borderRadius: nativeDefault.radii.xs, marginTop: 8 };
createStyles = createStyles.createStyles;
obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, paddingVertical: 12, paddingHorizontal: 20, alignItems: "center" };
const unpackModuleId = createStyles(obj);
let obj4 = { ENTRY: "entry", IDLE: "idle" };
const sceneSegments = { [obj4.ENTRY]: { BEG: 0, END: 180 }, [obj4.IDLE]: { BEG: 180, END: 360 } };
PremiumPaymentGuildAnimation.Scenes = obj4;
const result = size.fileFinishedImporting("components_native/premium/premium_guild_subscribe_modal/SubscribeModalSuccessAlert.tsx");

export default function SubscribeModalSuccessAlert(arg0) {
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
  const tmp = closure_11();
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
  [first, importDefault] = react.useState(PremiumPaymentGuildAnimation.Scenes.ENTRY);
  [first1, dependencyMap] = react.useState(false);
  let obj2 = {
    style: tmp.wrapper,
    confirmText: intl.string(tmp2(1115).t.YKxJCI),
    onConfirm() {
      const obj = closure_1(closure_2[14]);
      obj.close();
      const obj2 = require("actions/BoostingActionCreators");
      obj2.closeApplyBoostModal();
    },
    children: items1
  };
  const tmp11 = useThemeDefault();
  const tmp13 = AlertDefault;
  intl = tmp2(1115).intl;
  items1 = [, ];
  const obj3 = {
    nextScene: first,
    loop: first1,
    onSceneComplete(currentScene) {
      if (PremiumPaymentGuildAnimation.Scenes.ENTRY === currentScene) {
        return closure_1(PremiumPaymentGuildAnimation.Scenes.IDLE);
      } else if (PremiumPaymentGuildAnimation.Scenes.IDLE === currentScene) {
        return closure_2(true);
      }
    }
  };
  items1[0] = closure_9(PremiumPaymentGuildAnimation, obj3);
  const obj4 = { style: tmp.activated, start: ConstantsIOS.HorizontalGradient.START, end: ConstantsIOS.HorizontalGradient.END, colors: Gradients.PREMIUM_GUILD, children: closure_9(closure_5, obj5) };
  const tmp16 = LinearGradientDefault;
  obj5 = { style: tmp.activatedBackground, children: closure_9(tmp17, obj6) };
  obj6 = { style: tmp.activatedImage, source: tmp10Result };
  tmp17 = closure_6;
  const tmp2Result = shared;
  if (tmp2Result.isThemeLight(tmp11)) {
    tmp10Result = tmp10(13166);
  } else {
    tmp10Result = tmp10(13167);
  }
  const items2 = [closure_9(tmp16, obj4), ];
  const obj7 = { style: tmp.successInfo, children: items3 };
  const obj8 = { style: tmp.text, variant: "text-sm/medium", children: stringResult };
  const Text = tmp2(4832).Text;
  const intl2 = tmp2(1115).intl;
  const string = intl2.string;
  const t = tmp2(1115).t;
  if (someResult) {
    stringResult = string(t.RMmWY3);
  } else {
    stringResult = string(t.d81BkZ);
  }
  const obj9 = { children: items2 };
  items3 = [closure_9(Text, obj8), ];
  const obj10 = { style: tmp.text, variant: "text-sm/medium", children: intl3.format(intl4.t.r0IGsP, obj11) };
  const Text2 = tmp2(4832).Text;
  intl3 = tmp2(1115).intl;
  obj11 = { guildName: stateFromStores.name, guildSubscriptionQuantity: num };
  items3[1] = closure_9(Text2, obj10);
  items2[1] = closure_10(closure_5, obj7);
  items1[1] = closure_10(closure_5, obj9);
  return closure_10(tmp13, obj2);
};
