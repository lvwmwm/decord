// Module ID: 10481
// Function ID: 10482
// Name: UnifiedGiftModalSuccessScreen
// Dependencies: [19, 17, 1074, 21, 4836, 576, 10482, 10204, 5039, 10493, 1981, 6800, 5300, 4832, 1115, 5282, 2]
// Exports: default

// Module 10481 (UnifiedGiftModalSuccessScreen)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1074 */;
import asyncRequire from "asyncRequire" /* 1981 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5039 */;
import openUserSettings from "openUserSettings" /* 6800 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
const Image = react_native.Image;
const UserSettingsSections = Constants.UserSettingsSections;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let createStyles = createStyles_mod;
let obj = { alertContainer: obj2, image: { position: "relative", top: -50 }, title: obj3, description: obj4 };
obj2 = { paddingHorizontal: nativeDefault.space.PX_24, paddingBottom: nativeDefault.space.PX_24, alignItems: "center" };
createStyles = createStyles.createStyles;
obj3 = { marginTop: -nativeDefault.space.PX_24, marginBottom: nativeDefault.space.PX_8 };
obj4 = { marginBottom: nativeDefault.space.PX_24 };
let closure_8 = createStyles(obj);
const result = size.fileFinishedImporting("modules/checkout/native/gifting/UnifiedGiftModalSuccessScreen.tsx");

export default function UnifiedGiftModalSuccessScreen(giftBadgeProgress) {
  let intl;
  let intl2;
  giftBadgeProgress = giftBadgeProgress.giftBadgeProgress;
  const onClose = giftBadgeProgress.onClose;
  let enabled;
  const giftStyle = giftBadgeProgress.giftStyle;
  const tmp = closure_8();
  let tmp2 = giftBadgeProgress;
  const tmp4 = giftBadgeProgress(enabled[6]).GIFT_STYLE_IMG[giftStyle];
  const GiftingBadgeExperiment = giftBadgeProgress(enabled[7]).GiftingBadgeExperiment;
  enabled = GiftingBadgeExperiment.useConfig({ location: "UnifiedGiftModalSuccessScreen" }).enabled;
  const items = [enabled, giftBadgeProgress, onClose];
  const callback = react.useCallback(() => {
    onClose();
    const tmp2 = enabled && null != giftBadgeProgress;
    if (tmp2) {
      const obj2 = { giftBadgeProgress };
      const obj = ModalActionCreatorsDefault;
      obj.pushLazy(asyncRequire(10493, dependencyMap.paths), obj2, "collectibles_shop_gift_badge_modal");
    }
  }, items);
  const items1 = [onClose];
  const callback1 = react.useCallback(() => {
    onClose();
    const obj = openUserSettings;
    const obj2 = { screen: UserSettingsSections.PREMIUM_GIFTING, params: {} };
    obj.openUserSettings(obj2);
  }, items1);
  let obj = { onClose: callback, noDefaultButtons: true, style: tmp.alertContainer, children: null };
  let obj2 = { source: tmp4, style: tmp.image };
  const tmp8 = onClose(enabled[12]);
  const items2 = [closure_6(Image, obj2), , , ];
  const obj3 = { variant: "heading-lg/bold", style: tmp.title, children: intl.string(giftBadgeProgress(enabled[14]).t.MqZXbv) };
  const Text = giftBadgeProgress(enabled[13]).Text;
  intl = giftBadgeProgress(enabled[14]).intl;
  items2[1] = closure_6(Text, obj3);
  const obj4 = { variant: "text-md/medium", style: tmp.description, children: intl2.format(giftBadgeProgress(enabled[14]).t.YS2J4S, { onClick: callback1 }) };
  const Text2 = giftBadgeProgress(enabled[13]).Text;
  intl2 = giftBadgeProgress(enabled[14]).intl;
  items2[2] = closure_6(Text2, obj4);
  const obj5 = { onPress: callback, text: null, textVariant: "text-md/semibold", grow: true };
  const BaseTextButton = giftBadgeProgress(enabled[15]).BaseTextButton;
  const intl3 = giftBadgeProgress(enabled[14]).intl;
  const tmp7 = closure_7;
  const tmp9 = closure_6;
  if (enabled) {
    let cpT0Cq;
    if (null != giftBadgeProgress) {
      cpT0Cq = tmp2(tmp3[14]).t.PDTjLN;
    }
    obj5.text = tmp10(cpT0Cq);
    items2[3] = tmp9(BaseTextButton, obj5);
    obj.children = items2;
    return tmp7(tmp8, obj);
  }
  cpT0Cq = tmp2(tmp3[14]).t.cpT0Cq;
};
