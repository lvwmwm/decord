// Module ID: 13914
// Function ID: 13915
// Name: UnifiedGiftModalSuccessScreen
// Dependencies: [19, 1071, 21, 4913, 575, 13915, 6429, 13926, 2119, 8194, 5932, 5600, 5504, 1112, 5512, 2]
// Exports: default

// Module 13914 (UnifiedGiftModalSuccessScreen)
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1071 */;
import asyncRequire from "asyncRequire" /* 2119 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6429 */;
import openUserSettings from "openUserSettings" /* 8194 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4913 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
let obj4;
const UserSettingsSections = Constants.UserSettingsSections;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let createStyles = createStyles_mod;
let obj = { alertContainer: obj2, image: { position: "relative", top: -50 }, title: obj3, description: obj4 };
obj2 = { paddingHorizontal: nativeDefault.space.PX_24, paddingBottom: nativeDefault.space.PX_24, alignItems: "center" };
createStyles = createStyles.createStyles;
obj3 = { marginTop: -nativeDefault.space.PX_24, marginBottom: nativeDefault.space.PX_8 };
obj4 = { marginBottom: nativeDefault.space.PX_24 };
let closure_7 = createStyles(obj);
const result = size.fileFinishedImporting("modules/checkout/native/gifting/UnifiedGiftModalSuccessScreen.tsx");

export default function UnifiedGiftModalSuccessScreen(giftBadgeProgress) {
  let cpT0Cq;
  let intl;
  let intl2;
  let items2;
  let string;
  giftBadgeProgress = giftBadgeProgress.giftBadgeProgress;
  const onClose = giftBadgeProgress.onClose;
  const giftStyle = giftBadgeProgress.giftStyle;
  const tmp = closure_7();
  const tmp2 = giftBadgeProgress;
  const items = [giftBadgeProgress, onClose];
  const tmp4 = giftBadgeProgress(13915).GIFT_STYLE_IMG[giftStyle];
  const callback = react.useCallback(() => {
    onClose();
    if (null != giftBadgeProgress) {
      const obj2 = { giftBadgeProgress: tmp2 };
      const obj = ModalActionCreatorsDefault;
      obj.pushLazy(asyncRequire(13926, dependencyMap.paths), obj2, "collectibles_shop_gift_badge_modal");
    }
  }, items);
  const items1 = [onClose];
  const callback1 = react.useCallback(() => {
    onClose();
    const obj = openUserSettings;
    const obj2 = { screen: UserSettingsSections.PREMIUM_GIFTING, params: {} };
    obj.openUserSettings(obj2);
  }, items1);
  let obj = { onClose: callback, noDefaultButtons: true, style: tmp.alertContainer, children: items2 };
  const tmp8 = onClose(5932);
  let obj2 = { source: tmp4, style: tmp.image };
  const tmp10 = onClose(5600);
  items2 = [closure_5(tmp10, obj2), , , ];
  const obj3 = { variant: "heading-lg/semibold", style: tmp.title, children: intl.string(tmp2(1112).t.MqZXbv) };
  const Text = tmp2(5504).Text;
  intl = tmp2(1112).intl;
  items2[1] = closure_5(Text, obj3);
  const obj4 = { variant: "body-md/medium", style: tmp.description, children: intl2.format(tmp2(1112).t.YS2J4S, { onClick: callback1 }) };
  const Text2 = tmp2(5504).Text;
  intl2 = tmp2(1112).intl;
  items2[2] = closure_5(Text2, obj4);
  const obj5 = { onPress: callback, text: string(cpT0Cq), textVariant: "body-md/semibold", grow: true };
  const BaseTextButton = tmp2(5512).BaseTextButton;
  const intl3 = tmp2(1112).intl;
  string = intl3.string;
  const tmp7 = closure_6;
  if (null != giftBadgeProgress) {
    cpT0Cq = tmp2(1112).t.PDTjLN;
  } else {
    cpT0Cq = tmp2(1112).t.cpT0Cq;
  }
  items2[3] = closure_5(BaseTextButton, obj5);
  return tmp7(tmp8, obj);
};
