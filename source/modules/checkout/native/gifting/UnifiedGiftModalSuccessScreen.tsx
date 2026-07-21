// Module ID: 11807
// Function ID: 91605
// Name: UnifiedGiftModalSuccessScreen
// Dependencies: []
// Exports: default

// Module 11807 (UnifiedGiftModalSuccessScreen)
let closure_3 = importAll(dependencyMap[0]);
const Image = arg1(dependencyMap[1]).Image;
const UserSettingsSections = arg1(dependencyMap[2]).UserSettingsSections;
({ jsx: closure_6, jsxs: closure_7 } = arg1(dependencyMap[3]));
let obj = arg1(dependencyMap[4]);
obj = {};
obj = { paddingHorizontal: importDefault(dependencyMap[5]).space.PX_24, paddingBottom: importDefault(dependencyMap[5]).space.PX_24, alignItems: "center" };
obj.alertContainer = obj;
obj.image = { "Bool(false)": null, "Bool(false)": null };
const tmp2 = arg1(dependencyMap[3]);
obj.title = { marginTop: -importDefault(dependencyMap[5]).space.PX_24, marginBottom: importDefault(dependencyMap[5]).space.PX_8 };
const obj1 = { marginTop: -importDefault(dependencyMap[5]).space.PX_24, marginBottom: importDefault(dependencyMap[5]).space.PX_8 };
obj.description = { marginBottom: importDefault(dependencyMap[5]).space.PX_24 };
let closure_8 = obj.createStyles(obj);
const obj2 = { marginBottom: importDefault(dependencyMap[5]).space.PX_24 };
const result = arg1(dependencyMap[16]).fileFinishedImporting("modules/checkout/native/gifting/UnifiedGiftModalSuccessScreen.tsx");

export default function UnifiedGiftModalSuccessScreen(giftBadgeProgress) {
  giftBadgeProgress = giftBadgeProgress.giftBadgeProgress;
  const arg1 = giftBadgeProgress;
  const onClose = giftBadgeProgress.onClose;
  const importDefault = onClose;
  const tmp = callback2();
  const GiftingBadgeExperiment = arg1(dependencyMap[7]).GiftingBadgeExperiment;
  const enabled = GiftingBadgeExperiment.useConfig({ location: "UnifiedGiftModalSuccessScreen" }).enabled;
  const dependencyMap = enabled;
  const items = [enabled, giftBadgeProgress, onClose];
  const callback = React.useCallback(() => {
    onClose();
    let tmp2 = enabled;
    if (enabled) {
      tmp2 = null != giftBadgeProgress;
    }
    if (tmp2) {
      let obj = onClose(enabled[8]);
      obj = { giftBadgeProgress };
      obj.pushLazy(giftBadgeProgress(enabled[10])(enabled[9], enabled.paths), obj, "collectibles_shop_gift_badge_modal");
    }
  }, items);
  const items1 = [onClose];
  const callback1 = React.useCallback(() => {
    onClose();
    let obj = giftBadgeProgress(enabled[11]);
    obj = { screen: constants.PREMIUM_GIFTING, params: {} };
    obj.openUserSettings(obj);
  }, items1);
  let obj = { onClose: callback, noDefaultButtons: true, style: tmp.alertContainer };
  obj = { source: arg1(dependencyMap[6]).GIFT_STYLE_IMG[giftBadgeProgress.giftStyle], style: tmp.image };
  const items2 = [callback(Image, obj), , , ];
  obj = { variant: "heading-lg/bold", style: tmp.title };
  const intl = arg1(dependencyMap[14]).intl;
  obj.children = intl.string(arg1(dependencyMap[14]).t.MqZXbv);
  items2[1] = callback(arg1(dependencyMap[13]).Text, obj);
  const obj1 = { variant: "text-md/medium", style: tmp.description };
  const intl2 = arg1(dependencyMap[14]).intl;
  obj1.children = intl2.format(arg1(dependencyMap[14]).t.YS2J4S, { onClick: callback1 });
  items2[2] = callback(arg1(dependencyMap[13]).Text, obj1);
  const obj2 = { onPress: callback };
  if (enabled) {
    if (null != giftBadgeProgress) {
      let cpT0Cq = arg1(dependencyMap[14]).t.PDTjLN;
    }
    obj2.text = tmp7(cpT0Cq);
    obj2.textVariant = "text-md/semibold";
    obj2.grow = true;
    items2[3] = callback(arg1(dependencyMap[15]).BaseTextButton, obj2);
    obj.children = items2;
    return closure_7(tmp5, obj);
  }
  cpT0Cq = arg1(dependencyMap[14]).t.cpT0Cq;
};
