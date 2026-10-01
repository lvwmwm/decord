// Module ID: 10509
// Function ID: 10510
// Name: PremiumGiftCustomization
// Dependencies: [32, 19, 17, 1374, 21, 4836, 576, 1485, 10162, 10510, 1115, 10289, 10511, 4832, 10316, 10318, 10512, 2]
// Exports: default

// Module 10509 (PremiumGiftCustomization)
import nativeDefault from "native" /* 576 */;
import intl4 from "intl" /* 1115 */;
import PremiumConstants from "PremiumConstants" /* 1374 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let navigation;

let c10;
let c9;
let hasOwnProperty;
let metroImportAll;
let metroRequire;
let obj2;
let obj3;
let obj4;
let _slicedToArray = _slicedToArray_mod;
({ View: hasOwnProperty, ScrollView: metroRequire } = react_native);
const PremiumTypes = PremiumConstants.PremiumTypes;
({ jsx: metroImportAll, Fragment: c9, jsxs: c10 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, scrollViewContainer: obj3, senderHeaderTitle: obj4 };
obj2 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
createStyles = createStyles.createStyles;
obj3 = { paddingBottom: nativeDefault.space.PX_24 };
obj4 = { marginTop: nativeDefault.space.PX_24, marginLeft: nativeDefault.space.PX_16, marginBottom: nativeDefault.space.PX_8, fontSize: 14 };
let closure_11 = createStyles(obj);
const result = size.fileFinishedImporting("modules/premium/native/gifting/PremiumGiftCustomization.tsx");

export default function PremiumGiftCustomization() {
  let claimableRewards;
  let first;
  let intl3;
  let items2;
  let items3;
  let items4;
  let premiumType;
  let recipientUser;
  let ref;
  let selectedGiftingPromotionReward;
  let stringResult;
  let tmp9;
  let obj = navigation(ref[7]);
  navigation = obj.useNavigation();
  const tmp4 = closure_11();
  let obj2 = navigation(ref[8]);
  const nativeGiftContext = obj2.useNativeGiftContext();
  ({ recipientUser, premiumType, claimableRewards, selectedGiftingPromotionReward } = nativeGiftContext);
  const obj3 = navigation(ref[9]);
  const giftingPromotionDefaultSelectionV2 = obj3.useGiftingPromotionDefaultSelectionV2(claimableRewards, selectedGiftingPromotionReward);
  [first, tmp9] = react.useState(0);
  ref = react.useRef(null);
  const items = [first];
  const callback = react.useCallback(() => {
    let closure_1;
    const timerId = setTimeout(() => {
      const current = ref.current;
      let scrollToResult;
      if (current != null) {
        const obj = { y, animated: true };
        scrollToResult = current.scrollTo(obj);
      }
      return scrollToResult;
    }, 100);
  }, items);
  const obj4 = react;
  if (premiumType === PremiumTypes.TIER_2) {
    const intl2 = tmp(tmp2[10]).intl;
    stringResult = intl2.string(tmp(tmp2[10]).t.lG6a5x);
  } else {
    let intl = tmp(tmp2[10]).intl;
    stringResult = intl.string(tmp(tmp2[10]).t["t9uG/o"]);
  }
  _slicedToArray = stringResult;
  const items1 = [navigation, stringResult];
  const effect = obj4.useEffect(() => {
    let intl;
    let obj2;
    const setOptions = navigation.setOptions;
    const obj = { title: intl.formatToPlainString(intl4.t["RMu0/q"], obj2) };
    intl = intl4.intl;
    obj2 = { nitroTierName: _slicedToArray };
    setOptions(obj);
  }, items1);
  const obj5 = { style: tmp4.container, children: items4 };
  const obj6 = { ref, contentContainerStyle: tmp4.scrollViewContainer, showsVerticalScrollIndicator: false, children: closure_10(closure_5, { children: items2 }) };
  items2 = [closure_8(first(tmp2[11]), {}), closure_8(first(tmp2[12]), {}), ];
  let tmp14Result = null != recipientUser;
  const tmp17 = closure_6;
  if (tmp14Result) {
    const obj7 = { children: items3 };
    const obj8 = { style: tmp4.senderHeaderTitle, variant: "text-md/semibold", children: intl3.string(navigation(ref[10]).t.NlkxGS) };
    const Text = tmp(tmp2[13]).Text;
    intl3 = tmp(tmp2[10]).intl;
    items3 = [closure_8(Text, obj8), , ];
    const obj9 = { user: recipientUser };
    items3[1] = closure_8(first(ref[14]), obj9);
    const obj10 = { onFocusMessage: callback, setMessagePosition: tmp9 };
    items3[2] = closure_8(first(ref[15]), obj10);
    tmp14Result = tmp14(closure_9, obj7);
  }
  items2[2] = tmp14Result;
  items4 = [closure_8(tmp17, obj6), closure_8(first(tmp2[16]), { defaultSelection: giftingPromotionDefaultSelectionV2 })];
  return closure_10(closure_5, obj5);
};
