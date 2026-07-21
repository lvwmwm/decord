// Module ID: 8772
// Function ID: 69316
// Dependencies: []

// Module 8772
let closure_3 = importDefault(dependencyMap[0]);
const importAllResult = importAll(dependencyMap[1]);
({ ScrollView: closure_5, View: closure_6 } = arg1(dependencyMap[2]));
const AnalyticEvents = arg1(dependencyMap[3]).AnalyticEvents;
const tmp2 = arg1(dependencyMap[2]);
({ jsx: closure_8, jsxs: closure_9 } = arg1(dependencyMap[4]));
let obj1 = arg1(dependencyMap[5]);
let obj = {};
obj = { paddingTop: importDefault(dependencyMap[6]).space.PX_12 };
obj.container = obj;
obj1 = { paddingBottom: importDefault(dependencyMap[6]).space.PX_24 };
obj.scrollView = obj1;
const tmp3 = arg1(dependencyMap[4]);
obj.sectionHeader = { marginTop: importDefault(dependencyMap[6]).space.PX_24, marginBottom: importDefault(dependencyMap[6]).space.PX_8, paddingHorizontal: importDefault(dependencyMap[6]).space.PX_16, textTransform: "capitalize" };
let closure_10 = obj1.createStyles(obj);
const obj2 = { marginTop: importDefault(dependencyMap[6]).space.PX_24, marginBottom: importDefault(dependencyMap[6]).space.PX_8, paddingHorizontal: importDefault(dependencyMap[6]).space.PX_16, textTransform: "capitalize" };
const memoResult = importAllResult.memo((skuId) => {
  let lockedRecipient;
  let renderProductDetails;
  let renderPurchaseSection;
  let setRecipientUser;
  skuId = skuId.skuId;
  const arg1 = skuId;
  const applicationId = skuId.applicationId;
  const importDefault = applicationId;
  const recipientUser = skuId.recipientUser;
  const dependencyMap = recipientUser;
  const validateRecipient = skuId.validateRecipient;
  let callback = validateRecipient;
  ({ setRecipientUser, lockedRecipient, renderProductDetails, renderPurchaseSection } = skuId);
  const tmp = callback2();
  let obj = arg1(dependencyMap[7]);
  const navigation = obj.useNavigation();
  const tmp3 = callback(navigation.useState(true), 2);
  const first = tmp3[0];
  let closure_5 = tmp3[1];
  const tmp5 = callback(navigation.useState(false), 2);
  let closure_6 = tmp5[1];
  const items = [navigation];
  callback = importAllResult.useCallback(() => {
    navigation.navigate(skuId(recipientUser[8]).UnifiedGiftModalScreens.RECIPENT_SELECT);
  }, items);
  const analyticsLocations = importDefault(dependencyMap[9])().analyticsLocations;
  const AnalyticEvents = analyticsLocations;
  const tmp7 = importDefault(dependencyMap[10])(() => skuId(recipientUser[11]).v4());
  const items1 = [analyticsLocations, skuId, applicationId, tmp7];
  const memo = importAllResult.useMemo(() => ({ location_stack: analyticsLocations, sku_id: skuId, application_id: applicationId, load_id: tmp7 }), items1);
  const items2 = [recipientUser, skuId, validateRecipient];
  const effect = importAllResult.useEffect(() => {
    callback(true);
    if (null != recipientUser) {
      callback2(true);
      const promise = validateRecipient(recipientUser.id);
      validateRecipient(recipientUser.id).then((arg0) => {
        callback(arg0);
      }).finally(() => {
        callback2(false);
      });
      const nextPromise = validateRecipient(recipientUser.id).then((arg0) => {
        callback(arg0);
      });
    }
  }, items2);
  const items3 = [memo];
  const effect1 = importAllResult.useEffect(() => {
    let obj = applicationId(recipientUser[12]);
    obj.track(analyticsLocations.PAYMENT_FLOW_STARTED, memo);
    obj = {};
    const merged = Object.assign(memo);
    obj["initial_step"] = "gift_customization";
    applicationId(recipientUser[12]).track(analyticsLocations.PAYMENT_FLOW_LOADED, obj);
  }, items3);
  let obj1 = arg1(dependencyMap[13]);
  const tmp11 = callback(navigation.useState(obj1.useGiftStyles()[0]), 2);
  const first1 = tmp11[0];
  const callback2 = first1;
  const ref = importAllResult.useRef(null);
  const tmp14 = callback(navigation.useState(0), 2);
  const first2 = tmp14[0];
  const tmp16 = callback(navigation.useState(undefined), 2);
  const first3 = tmp16[0];
  const items4 = [first2];
  const items5 = [first1, recipientUser, first3];
  const callback1 = importAllResult.useCallback(() => {
    const timerId = setTimeout(() => {
      const current = ref.current;
      let scrollToResult;
      if (null != current) {
        const obj = { y: closure_12, animated: true };
        scrollToResult = current.scrollTo(obj);
      }
      return scrollToResult;
    }, 100);
  }, items4);
  obj = { style: tmp.container };
  obj = { ref, contentContainerStyle: tmp.scrollView, showsVerticalScrollIndicator: false };
  const memo1 = importAllResult.useMemo(() => {
    const obj = { gift_style: first1 };
    let id;
    if (null != recipientUser) {
      id = recipientUser.id;
    }
    obj.recipient_id = id;
    obj.custom_message = first3;
    return obj;
  }, items5);
  const items6 = [tmp7(arg1(dependencyMap[14]).GiftBackgroundSelect, { giftStyle: first1, setGiftStyle: tmp11[1], withConsistentHeight: false }), , , , , ];
  obj1 = { variant: "text-sm/semibold", style: tmp.sectionHeader };
  const intl = arg1(dependencyMap[16]).intl;
  obj1.children = intl.string(arg1(dependencyMap[16]).t.xFn72s);
  items6[1] = tmp7(arg1(dependencyMap[15]).Text, obj1);
  if (lockedRecipient) {
    if (null != recipientUser) {
      const obj2 = { user: recipientUser };
      let tmp23 = tmp7(importDefault(dependencyMap[17]), obj2);
    }
    items6[2] = tmp23;
    const obj3 = { variant: "text-sm/semibold", style: tmp.sectionHeader };
    const intl2 = arg1(dependencyMap[16]).intl;
    obj3.children = intl2.string(arg1(dependencyMap[16]).t.PpoJzt);
    items6[3] = tmp7(arg1(dependencyMap[15]).Text, obj3);
    const obj4 = { recipientUser, isValidRecipient: first };
    items6[4] = renderProductDetails(obj4);
    const obj5 = { onFocusMessage: callback1, setMessagePosition: tmp14[1], customGiftMessage: first3, setCustomGiftMessage: tmp16[1] };
    items6[5] = tmp7(arg1(dependencyMap[19]).GiftCustomMessage, obj5);
    obj.children = items6;
    const items7 = [tmp20(closure_5, obj), ];
    const obj6 = { isPurchaseDisabled: null == recipientUser || tmp5[0] || !first, giftOptions: memo1, baseAnalyticsFields: memo };
    items7[1] = renderPurchaseSection(obj6);
    obj.children = items7;
    return tmp20(closure_6, obj);
  }
  tmp23 = tmp7(importDefault(dependencyMap[18]), { selectedUser: recipientUser, onPress: callback, setSelectedUser: setRecipientUser });
});
const result = arg1(dependencyMap[20]).fileFinishedImporting("modules/checkout/native/gifting/UnifiedGiftModalDetailsScreen.tsx");

export default memoResult;
