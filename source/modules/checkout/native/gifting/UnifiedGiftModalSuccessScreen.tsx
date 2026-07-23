// Module ID: 11818
// Function ID: 91680
// Name: UnifiedGiftModalSuccessScreen
// Dependencies: [31, 27, 653, 33, 4130, 689, 11819, 8776, 4337, 11830, 1934, 5796, 4561, 4126, 1212, 4544, 2]
// Exports: default

// Module 11818 (UnifiedGiftModalSuccessScreen)
import result from "result";
import { Image } from "get ActivityIndicator";
import { UserSettingsSections } from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_6;
let closure_7;
const require = arg1;
({ jsx: closure_6, jsxs: closure_7 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_24, paddingBottom: require("_createForOfIteratorHelperLoose").space.PX_24, alignItems: "center" };
_createForOfIteratorHelperLoose.alertContainer = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.image = { position: "relative", top: -50 };
_createForOfIteratorHelperLoose.title = { marginTop: -require("_createForOfIteratorHelperLoose").space.PX_24, marginBottom: require("_createForOfIteratorHelperLoose").space.PX_8 };
let obj1 = { marginTop: -require("_createForOfIteratorHelperLoose").space.PX_24, marginBottom: require("_createForOfIteratorHelperLoose").space.PX_8 };
_createForOfIteratorHelperLoose.description = { marginBottom: require("_createForOfIteratorHelperLoose").space.PX_24 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj2 = { marginBottom: require("_createForOfIteratorHelperLoose").space.PX_24 };
const result = require("ME").fileFinishedImporting("modules/checkout/native/gifting/UnifiedGiftModalSuccessScreen.tsx");

export default function UnifiedGiftModalSuccessScreen(giftBadgeProgress) {
  giftBadgeProgress = giftBadgeProgress.giftBadgeProgress;
  const onClose = giftBadgeProgress.onClose;
  const tmp = _createForOfIteratorHelperLoose();
  const GiftingBadgeExperiment = giftBadgeProgress(enabled[7]).GiftingBadgeExperiment;
  enabled = GiftingBadgeExperiment.useConfig({ location: "UnifiedGiftModalSuccessScreen" }).enabled;
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
    obj = { screen: outer1_5.PREMIUM_GIFTING, params: {} };
    obj.openUserSettings(obj);
  }, items1);
  let obj = { onClose: callback, noDefaultButtons: true, style: tmp.alertContainer };
  obj = { source: giftBadgeProgress(enabled[6]).GIFT_STYLE_IMG[giftBadgeProgress.giftStyle], style: tmp.image };
  const items2 = [callback(Image, obj), , , ];
  obj = { variant: "heading-lg/bold", style: tmp.title };
  const intl = giftBadgeProgress(enabled[14]).intl;
  obj.children = intl.string(giftBadgeProgress(enabled[14]).t.MqZXbv);
  items2[1] = callback(giftBadgeProgress(enabled[13]).Text, obj);
  const obj1 = { variant: "text-md/medium", style: tmp.description };
  const intl2 = giftBadgeProgress(enabled[14]).intl;
  obj1.children = intl2.format(giftBadgeProgress(enabled[14]).t.YS2J4S, { onClick: callback1 });
  items2[2] = callback(giftBadgeProgress(enabled[13]).Text, obj1);
  const obj2 = { onPress: callback };
  if (enabled) {
    if (null != giftBadgeProgress) {
      let cpT0Cq = giftBadgeProgress(enabled[14]).t.PDTjLN;
    }
    obj2.text = tmp7(cpT0Cq);
    obj2.textVariant = "text-md/semibold";
    obj2.grow = true;
    items2[3] = callback(giftBadgeProgress(enabled[15]).BaseTextButton, obj2);
    obj.children = items2;
    return closure_7(tmp5, obj);
  }
  cpT0Cq = giftBadgeProgress(enabled[14]).t.cpT0Cq;
};
