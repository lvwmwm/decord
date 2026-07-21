// Module ID: 9754
// Function ID: 75885
// Name: PremiumGiftCustomization
// Dependencies: []
// Exports: default

// Module 9754 (PremiumGiftCustomization)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
({ View: closure_5, ScrollView: closure_6 } = arg1(dependencyMap[2]));
const PremiumTypes = arg1(dependencyMap[3]).PremiumTypes;
const tmp2 = arg1(dependencyMap[2]);
({ jsx: closure_8, Fragment: closure_9, jsxs: closure_10 } = arg1(dependencyMap[4]));
let obj = arg1(dependencyMap[5]);
obj = {};
obj = { flex: 1, backgroundColor: importDefault(dependencyMap[6]).colors.BACKGROUND_BASE_LOW };
obj.container = obj;
const tmp3 = arg1(dependencyMap[4]);
obj.scrollViewContainer = { paddingBottom: importDefault(dependencyMap[6]).space.PX_24 };
const obj1 = { paddingBottom: importDefault(dependencyMap[6]).space.PX_24 };
obj.senderHeaderTitle = { marginTop: importDefault(dependencyMap[6]).space.PX_24, marginLeft: importDefault(dependencyMap[6]).space.PX_16, marginBottom: importDefault(dependencyMap[6]).space.PX_8, fontSize: 14 };
let closure_11 = obj.createStyles(obj);
const obj2 = { marginTop: importDefault(dependencyMap[6]).space.PX_24, marginLeft: importDefault(dependencyMap[6]).space.PX_16, marginBottom: importDefault(dependencyMap[6]).space.PX_8, fontSize: 14 };
const result = arg1(dependencyMap[17]).fileFinishedImporting("modules/premium/native/gifting/PremiumGiftCustomization.tsx");

export default function PremiumGiftCustomization() {
  let claimableRewards;
  let premiumType;
  let selectedGiftingPromotionReward;
  let obj = arg1(dependencyMap[7]);
  const navigation = obj.useNavigation();
  const arg1 = navigation;
  const tmp2 = callback4();
  let obj1 = arg1(dependencyMap[8]);
  const nativeGiftContext = obj1.useNativeGiftContext();
  const recipientUser = nativeGiftContext.recipientUser;
  ({ premiumType, claimableRewards, selectedGiftingPromotionReward } = nativeGiftContext);
  let obj2 = arg1(dependencyMap[9]);
  const giftingPromotionDefaultSelectionV2 = obj2.useGiftingPromotionDefaultSelectionV2(claimableRewards, selectedGiftingPromotionReward);
  const tmp5 = callback(React.useState(0), 2);
  const first = tmp5[0];
  const importDefault = first;
  const ref = React.useRef(null);
  const dependencyMap = ref;
  const items = [first];
  let callback = React.useCallback(() => {
    const timerId = setTimeout(() => {
      const current = ref.current;
      let scrollToResult;
      if (null != current) {
        const obj = { y: closure_1, animated: true };
        scrollToResult = current.scrollTo(obj);
      }
      return scrollToResult;
    }, 100);
  }, items);
  if (premiumType === PremiumTypes.TIER_2) {
    const intl2 = arg1(dependencyMap[10]).intl;
    let stringResult = intl2.string(arg1(dependencyMap[10]).t.lG6a5x);
  } else {
    const intl = arg1(dependencyMap[10]).intl;
    stringResult = intl.string(arg1(dependencyMap[10]).t.t9uG/o);
  }
  callback = stringResult;
  const items1 = [navigation, stringResult];
  const effect = React.useEffect(() => {
    let obj = {};
    const intl = navigation(ref[10]).intl;
    obj = { nitroTierName: stringResult };
    obj.title = intl.formatToPlainString(navigation(ref[10]).t.RMu0/q, obj);
    navigation.setOptions(obj);
  }, items1);
  obj = { style: tmp2.container };
  obj = { ref, contentContainerStyle: tmp2.scrollViewContainer, showsVerticalScrollIndicator: false };
  obj1 = {};
  const items2 = [callback2(importDefault(dependencyMap[11]), {}), callback2(importDefault(dependencyMap[12]), {}), ];
  let tmp19 = null != recipientUser;
  if (tmp19) {
    obj2 = {};
    const obj3 = { style: tmp2.senderHeaderTitle, variant: "text-md/semibold" };
    const intl3 = arg1(dependencyMap[10]).intl;
    obj3.children = intl3.string(arg1(dependencyMap[10]).t.NlkxGS);
    const items3 = [callback2(arg1(dependencyMap[13]).Text, obj3), , ];
    const obj4 = { user: recipientUser };
    items3[1] = callback2(importDefault(dependencyMap[14]), obj4);
    const obj5 = { onFocusMessage: callback, setMessagePosition: tmp5[1] };
    items3[2] = callback2(importDefault(dependencyMap[15]), obj5);
    obj2.children = items3;
    tmp19 = callback3(closure_9, obj2);
  }
  items2[2] = tmp19;
  obj1.children = items2;
  obj.children = callback3(closure_5, obj1);
  const items4 = [callback2(closure_6, obj), callback2(importDefault(dependencyMap[16]), { defaultSelection: giftingPromotionDefaultSelectionV2 })];
  obj.children = items4;
  return callback3(closure_5, obj);
};
