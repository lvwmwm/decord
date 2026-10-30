// Module ID: 14395
// Function ID: 14396
// Name: CollectiblesShopGiftBadgePostPurchaseModal
// Dependencies: [19, 17, 21, 5009, 575, 1626, 6738, 7712, 7345, 7964, 1114, 7048, 5619, 2633, 14396, 2]
// Exports: default

// Module 14395 (CollectiblesShopGiftBadgePostPurchaseModal)
import nativeDefault from "native" /* 575 */;
import intl3 from "intl" /* 1114 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1626 */;
import _modDef2633 from "module_2633" /* 2633 */;
import Text_Text from "Text/Text" /* 5619 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6738 */;
import XSmallIcon from "XSmallIcon" /* 7048 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7345 */;
import CollectiblesActionCreators from "CollectiblesActionCreators" /* 7712 */;
import ModalScreen2 from "ModalScreen" /* 7964 */;
import GiftBadgePostPurchaseDefault from "GiftBadgePostPurchase" /* 14396 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
({ Pressable: closure_4, View: hasOwnProperty } = react_native);
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let closure_8 = createStyles.createStyles((paddingTop) => {
  let rect;
  let rect1;
  const obj = { header: rect, closeButton: rect1, closeIcon: { tintColor: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY } };
  rect = { position: "absolute", top: 0, left: 0, right: 0, height: paddingTop + 56, paddingTop, zIndex: 1, flexDirection: "row", alignItems: "center", justifyContent: "center" };
  rect1 = { position: "absolute", left: 0, top: paddingTop, bottom: 0, paddingHorizontal: nativeDefault.space.PX_16, justifyContent: "center" };
  ({ tintColor: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY });
  return obj;
});
let result = size.fileFinishedImporting("modules/collectibles/native/CollectiblesShopGiftBadgePostPurchaseModal.tsx");

export default function CollectiblesShopGiftBadgePostPurchaseModal(giftBadgeProgress) {
  let intl;
  let intl2;
  let items;
  let items1;
  let obj4;
  giftBadgeProgress = giftBadgeProgress.giftBadgeProgress;
  const tmp = closure_8(useSafeAreaInsetsDefault().top);
  const callback = react.useCallback(() => {
    const arr = ModalActionCreatorsDefault;
    arr.pop();
  }, []);
  const callback1 = react.useCallback(() => {
    let items;
    const obj = { analyticsLocations: items, analyticsSource: AnalyticsLocationDefault.GIFTING_BADGE_POST_PURCHASE };
    const openCollectiblesShopMobile = CollectiblesActionCreators.openCollectiblesShopMobile;
    items = [];
    CollectiblesActionCreators;
    items[0] = AnalyticsLocationDefault.GIFTING_BADGE_POST_PURCHASE;
    const result = openCollectiblesShopMobile(obj);
  }, []);
  let obj = { children: items1 };
  const obj2 = { style: tmp.header, children: items };
  const obj3 = { onPress: callback, accessibilityRole: "button", accessibilityLabel: intl.string(intl3.t.cpT0Cq), style: tmp.closeButton, children: metroRequire(XSmallIcon.XSmallIcon, obj4) };
  const ModalScreen = ModalScreen2.ModalScreen;
  intl = intl3.intl;
  obj4 = { size: "md", style: tmp.closeIcon };
  items = [metroRequire(React3, obj3), ];
  const obj5 = { accessibilityRole: "header", "aria-level": "1", lineClamp: 1, variant: "redesign/heading-18/bold", color: "mobile-text-heading-primary", children: intl2.string(_modDef2633.roVAey) };
  const Text = Text_Text.Text;
  intl2 = intl3.intl;
  items[1] = metroRequire(Text, obj5);
  items1 = [metroImportDefault(hasOwnProperty, obj2), metroRequire(GiftBadgePostPurchaseDefault, { currentProgress: giftBadgeProgress, onSendGift: callback1 })];
  return metroImportDefault(ModalScreen, obj);
};
