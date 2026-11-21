// Module ID: 13950
// Function ID: 13951
// Name: PremiumGiftDMPurchaseSuccess
// Dependencies: [19, 17, 21, 4913, 575, 9468, 1500, 9466, 5511, 1112, 2888, 9616, 5504, 2]
// Exports: PremiumGiftDMSuccessActions, default

// Module 13950 (PremiumGiftDMPurchaseSuccess)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import intl3 from "intl" /* 1112 */;
import Text_Text from "Text/Text" /* 5504 */;
import PremiumGiftModal from "PremiumGiftModal" /* 9466 */;
import NativeGiftContext from "NativeGiftContext" /* 9468 */;
import PremiumGiftBackgroundAnimationDefault from "PremiumGiftBackgroundAnimation" /* 9616 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4913 */;
import size from "module_2" /* 2 */;

let navigation;

let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
const View = react_native.View;
({ jsx: hasOwnProperty, Fragment: metroRequire, jsxs: metroImportDefault } = Fragment);
let createStyles = createStyles_mod;
let obj = { title: obj2, description: obj3 };
obj2 = { marginTop: nativeDefault.space.PX_24, textAlign: "center" };
createStyles = createStyles.createStyles;
obj3 = { marginTop: nativeDefault.space.PX_8, textAlign: "center" };
let closure_8 = createStyles(obj);
const result = size.fileFinishedImporting("modules/premium/native/gifting/PremiumGiftDMPurchaseSuccess.tsx");

export default function PremiumGiftDMSuccessBody() {
  let intl;
  let intl2;
  let items;
  const tmp = closure_8();
  const obj2 = { children: items };
  items = [, , ];
  const obj = NativeGiftContext;
  const obj3 = { children: hasOwnProperty(PremiumGiftBackgroundAnimationDefault, { giftStyle: obj.useNativeGiftContext().giftStyle }) };
  items[0] = hasOwnProperty(View, obj3);
  const obj4 = { style: tmp.title, variant: "heading-lg/semibold", children: intl.string(intl3.t.MqZXbv) };
  const Text = Text_Text.Text;
  intl = intl3.intl;
  items[1] = hasOwnProperty(Text, obj4);
  const obj5 = { style: tmp.description, variant: "body-md/medium", children: intl2.string(intl3.t.Y1keV0) };
  const Text2 = Text_Text.Text;
  intl2 = intl3.intl;
  items[2] = hasOwnProperty(Text2, obj5);
  return metroImportDefault(metroRequire, obj2);
};
export function PremiumGiftDMSuccessActions() {
  let intl;
  let onClose;
  let obj = onClose(navigation[5]);
  const nativeGiftContext = obj.useNativeGiftContext();
  onClose = nativeGiftContext.onClose;
  const prePurchaseGiftingBadgeProgress = nativeGiftContext.prePurchaseGiftingBadgeProgress;
  const obj2 = onClose(navigation[6]);
  navigation = obj2.useNavigation();
  const items = [prePurchaseGiftingBadgeProgress, navigation, onClose];
  const callback = react.useCallback(() => {
    if (null != prePurchaseGiftingBadgeProgress) {
      const obj = { currentProgress: tmp };
      navigation.navigate(PremiumGiftModal.PremiumGiftScreens.GIFTING_BADGE, obj);
    } else {
      onClose();
    }
  }, items);
  const obj3 = { text: intl.string(prePurchaseGiftingBadgeProgress(navigation[10]).bGKjmg), variant: "primary", onPress: callback };
  const Button = onClose(navigation[8]).Button;
  intl = onClose(navigation[9]).intl;
  return closure_5(Button, obj3);
}
