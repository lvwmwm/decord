// Module ID: 12437
// Function ID: 94923
// Name: PremiumPaymentGuildAnimation
// Dependencies: []
// Exports: default

// Module 12437 (PremiumPaymentGuildAnimation)
class PremiumPaymentGuildAnimation {
  constructor(arg0) {
    ({ nextScene, onSceneComplete, loop } = global);
    tmp = closure_11();
    obj = { nextScene, onSceneComplete, loop, sceneSegments: closure_12, style: tmp.animation };
    tmp2 = importDefault(dependencyMap[8]);
    obj.source = arg1(dependencyMap[9]);
    return jsx(tmp2, obj);
  }
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
({ View: closure_5, Image: closure_6 } = arg1(dependencyMap[2]));
let closure_7 = importDefault(dependencyMap[3]);
const Gradients = arg1(dependencyMap[4]).Gradients;
const tmp2 = arg1(dependencyMap[2]);
({ jsx: closure_9, jsxs: closure_10 } = arg1(dependencyMap[5]));
let obj = arg1(dependencyMap[6]);
obj = { wrapper: { "Null": 1931542530, "Null": 0, "Null": 2, "Null": 3 }, animation: {}, text: { "Bool(false)": "errExpectingATEXT", "Bool(false)": "j" } };
obj = { borderRadius: importDefault(dependencyMap[7]).radii.xs };
obj.activated = obj;
const obj1 = { -9223372036854775808: "r", 0: "%MapPrototype%", 0: "isArray", 9223372036854775807: "isArrayBuffer", backgroundColor: importDefault(dependencyMap[7]).colors.BACKGROUND_BASE_LOW };
obj.activatedBackground = obj1;
obj.activatedImage = { width: 220 };
obj.successInfo = { marginTop: 24 };
let closure_11 = obj.createStyles(obj);
const obj2 = { ENTRY: "entry", IDLE: "idle" };
let closure_12 = { [obj2.ENTRY]: { paths: null, accessible: "center" }, [obj2.IDLE]: { paths: null, accessible: null } };
PremiumPaymentGuildAnimation.Scenes = obj2;
const tmp3 = arg1(dependencyMap[5]);
const result = arg1(dependencyMap[22]).fileFinishedImporting("components_native/premium/premium_guild_subscribe_modal/SubscribeModalSuccessAlert.tsx");

export default function SubscribeModalSuccessAlert(arg0) {
  let guildBoostSlots;
  ({ guildId: closure_0, guildBoostSlots } = arg0);
  let importDefault;
  let closure_2;
  const tmp = callback3();
  let obj = arg1(closure_2[10]);
  const items = [closure_7];
  let someResult = null != guildBoostSlots;
  const stateFromStores = obj.useStateFromStores(items, () => guild.getGuild(closure_0));
  if (someResult) {
    someResult = guildBoostSlots.some((premiumGuildSubscription) => null != premiumGuildSubscription.premiumGuildSubscription);
  }
  let length;
  if (null != guildBoostSlots) {
    length = guildBoostSlots.length;
  }
  let num = 1;
  if (null != length) {
    num = length;
  }
  const tmp5 = callback(React.useState(PremiumPaymentGuildAnimation.Scenes.ENTRY), 2);
  importDefault = tmp5[1];
  const tmp6 = callback(React.useState(false), 2);
  closure_2 = tmp6[1];
  obj = { style: tmp.wrapper };
  const tmp7 = importDefault(closure_2[11])();
  const intl = arg1(closure_2[13]).intl;
  obj.confirmText = intl.string(arg1(closure_2[13]).t.YKxJCI);
  obj.onConfirm = function onConfirm() {
    callback2(closure_2[14]).close();
    const obj = callback2(closure_2[14]);
    callback(closure_2[15]).closeApplyBoostModal();
  };
  obj = {
    nextScene: tmp5[0],
    loop: tmp6[0],
    onSceneComplete(currentScene) {
      if (closure_13.Scenes.ENTRY === currentScene) {
        return callback2(closure_13.Scenes.IDLE);
      } else if (closure_13.Scenes.IDLE === currentScene) {
        return callback3(true);
      }
    }
  };
  const items1 = [callback2(PremiumPaymentGuildAnimation, obj), ];
  const obj1 = {};
  const obj2 = { style: tmp.activated };
  const tmp11 = callback2;
  const tmp9 = importDefault(closure_2[12]);
  obj2.start = arg1(closure_2[17]).HorizontalGradient.START;
  obj2.end = arg1(closure_2[17]).HorizontalGradient.END;
  obj2.colors = Gradients.PREMIUM_GUILD;
  const obj3 = { style: tmp.activatedBackground };
  const obj4 = { style: tmp.activatedImage };
  let obj7 = arg1(closure_2[18]);
  if (obj7.isThemeLight(tmp7)) {
    let tmp16Result = tmp16(tmp17[19]);
  } else {
    tmp16Result = tmp16(tmp17[20]);
  }
  obj4.source = tmp16Result;
  obj3.children = callback2(closure_6, obj4);
  obj2.children = callback2(closure_5, obj3);
  const items2 = [tmp11(importDefault(closure_2[16]), obj2), ];
  const obj5 = { style: tmp.successInfo };
  const obj6 = { style: tmp.text, variant: "text-sm/medium" };
  const intl2 = arg1(closure_2[13]).intl;
  const string = intl2.string;
  const t = arg1(closure_2[13]).t;
  if (someResult) {
    let stringResult = string(t.RMmWY3);
  } else {
    stringResult = string(t.d81BkZ);
  }
  obj6.children = stringResult;
  const items3 = [callback2(arg1(closure_2[21]).Text, obj6), ];
  obj7 = { style: tmp.text, variant: "text-sm/medium" };
  const intl3 = arg1(closure_2[13]).intl;
  const obj8 = { guildName: stateFromStores.name, guildSubscriptionQuantity: num };
  obj7.children = intl3.format(arg1(closure_2[13]).t.r0IGsP, obj8);
  items3[1] = callback2(arg1(closure_2[21]).Text, obj7);
  obj5.children = items3;
  items2[1] = closure_10(closure_5, obj5);
  obj1.children = items2;
  items1[1] = closure_10(closure_5, obj1);
  obj.children = items1;
  return closure_10(tmp9, obj);
};
