// Module ID: 9762
// Function ID: 75939
// Name: PremiumGiftCustomization
// Dependencies: [57, 31, 27, 1851, 33, 4130, 689, 1456, 8809, 9763, 1212, 8782, 9764, 4126, 8814, 8816, 9765, 2]
// Exports: default

// Module 9762 (PremiumGiftCustomization)
import _slicedToArray from "_slicedToArray";
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import { PremiumTypes } from "GuildFeatures";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_5;
let closure_6;
let closure_8;
let closure_9;
const require = arg1;
({ View: closure_5, ScrollView: closure_6 } = get_ActivityIndicator);
({ jsx: closure_8, Fragment: closure_9, jsxs: closure_10 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { flex: 1, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.scrollViewContainer = { paddingBottom: require("_createForOfIteratorHelperLoose").space.PX_24 };
let obj1 = { paddingBottom: require("_createForOfIteratorHelperLoose").space.PX_24 };
_createForOfIteratorHelperLoose.senderHeaderTitle = { marginTop: require("_createForOfIteratorHelperLoose").space.PX_24, marginLeft: require("_createForOfIteratorHelperLoose").space.PX_16, marginBottom: require("_createForOfIteratorHelperLoose").space.PX_8, fontSize: 14 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj2 = { marginTop: require("_createForOfIteratorHelperLoose").space.PX_24, marginLeft: require("_createForOfIteratorHelperLoose").space.PX_16, marginBottom: require("_createForOfIteratorHelperLoose").space.PX_8, fontSize: 14 };
const result = require("get ActivityIndicator").fileFinishedImporting("modules/premium/native/gifting/PremiumGiftCustomization.tsx");

export default function PremiumGiftCustomization() {
  let claimableRewards;
  let premiumType;
  let selectedGiftingPromotionReward;
  let obj = navigation(ref[7]);
  navigation = obj.useNavigation();
  const tmp2 = _createForOfIteratorHelperLoose();
  let obj1 = navigation(ref[8]);
  const nativeGiftContext = obj1.useNativeGiftContext();
  const recipientUser = nativeGiftContext.recipientUser;
  ({ premiumType, claimableRewards, selectedGiftingPromotionReward } = nativeGiftContext);
  let obj2 = navigation(ref[9]);
  const giftingPromotionDefaultSelectionV2 = obj2.useGiftingPromotionDefaultSelectionV2(claimableRewards, selectedGiftingPromotionReward);
  const tmp5 = stringResult(React.useState(0), 2);
  const first = tmp5[0];
  ref = React.useRef(null);
  const items = [first];
  const callback = React.useCallback(() => {
    const timerId = setTimeout(() => {
      const current = outer1_2.current;
      let scrollToResult;
      if (null != current) {
        const obj = { y: outer1_1, animated: true };
        scrollToResult = current.scrollTo(obj);
      }
      return scrollToResult;
    }, 100);
  }, items);
  if (premiumType === PremiumTypes.TIER_2) {
    const intl2 = navigation(ref[10]).intl;
    stringResult = intl2.string(navigation(ref[10]).t.lG6a5x);
  } else {
    let intl = navigation(ref[10]).intl;
    stringResult = intl.string(navigation(ref[10]).t["t9uG/o"]);
  }
  const items1 = [navigation, stringResult];
  const effect = React.useEffect(() => {
    let obj = {};
    const intl = navigation(ref[10]).intl;
    obj = { nitroTierName: _slicedToArray };
    obj.title = intl.formatToPlainString(navigation(ref[10]).t["RMu0/q"], obj);
    navigation.setOptions(obj);
  }, items1);
  obj = { style: tmp2.container };
  obj = { ref, contentContainerStyle: tmp2.scrollViewContainer, showsVerticalScrollIndicator: false };
  obj1 = {};
  const items2 = [callback(first(ref[11]), {}), callback(first(ref[12]), {}), ];
  let tmp19 = null != recipientUser;
  if (tmp19) {
    obj2 = {};
    const obj3 = { style: tmp2.senderHeaderTitle, variant: "text-md/semibold" };
    const intl3 = navigation(ref[10]).intl;
    obj3.children = intl3.string(navigation(ref[10]).t.NlkxGS);
    const items3 = [callback(navigation(ref[13]).Text, obj3), , ];
    const obj4 = { user: recipientUser };
    items3[1] = callback(first(ref[14]), obj4);
    const obj5 = { onFocusMessage: callback, setMessagePosition: tmp5[1] };
    items3[2] = callback(first(ref[15]), obj5);
    obj2.children = items3;
    tmp19 = callback2(closure_9, obj2);
  }
  items2[2] = tmp19;
  obj1.children = items2;
  obj.children = callback2(closure_5, obj1);
  const items4 = [callback(closure_6, obj), callback(first(ref[16]), { defaultSelection: giftingPromotionDefaultSelectionV2 })];
  obj.children = items4;
  return callback2(closure_5, obj);
};
