// Module ID: 8780
// Function ID: 69369
// Dependencies: [57, 31, 27, 653, 33, 4130, 689, 1456, 8779, 5464, 5450, 491, 675, 8781, 8782, 4126, 1212, 8814, 8815, 8816, 2]

// Module 8780
import _slicedToArray from "_slicedToArray";
import importAllResult from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import { AnalyticEvents } from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_5;
let closure_6;
let closure_8;
let closure_9;
const require = arg1;
({ ScrollView: closure_5, View: closure_6 } = get_ActivityIndicator);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
let obj = {};
obj = { flex: 1, paddingTop: require("_createForOfIteratorHelperLoose").space.PX_12, alignItems: "stretch" };
obj.container = obj;
_createForOfIteratorHelperLoose = { paddingBottom: require("_createForOfIteratorHelperLoose").space.PX_24 };
obj.scrollView = _createForOfIteratorHelperLoose;
obj.sectionHeader = { marginTop: require("_createForOfIteratorHelperLoose").space.PX_24, marginBottom: require("_createForOfIteratorHelperLoose").space.PX_8, paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16, textTransform: "capitalize" };
let closure_10 = _createForOfIteratorHelperLoose.createStyles(obj);
let obj2 = { marginTop: require("_createForOfIteratorHelperLoose").space.PX_24, marginBottom: require("_createForOfIteratorHelperLoose").space.PX_8, paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16, textTransform: "capitalize" };
const memoResult = importAllResult.memo((skuId) => {
  let lockedRecipient;
  let renderProductDetails;
  let renderPurchaseSection;
  let setRecipientUser;
  skuId = skuId.skuId;
  const applicationId = skuId.applicationId;
  const recipientUser = skuId.recipientUser;
  const validateRecipient = skuId.validateRecipient;
  ({ setRecipientUser, lockedRecipient, renderProductDetails, renderPurchaseSection } = skuId);
  const tmp = first1();
  let obj = skuId(recipientUser[7]);
  const navigation = obj.useNavigation();
  const tmp3 = validateRecipient(navigation.useState(true), 2);
  const first = tmp3[0];
  let closure_5 = tmp3[1];
  const tmp5 = validateRecipient(navigation.useState(false), 2);
  let closure_6 = tmp5[1];
  const items = [navigation];
  let callback = navigation.useCallback(() => {
    navigation.navigate(skuId(recipientUser[8]).UnifiedGiftModalScreens.RECIPENT_SELECT);
  }, items);
  const analyticsLocations = applicationId(recipientUser[9])().analyticsLocations;
  const tmp7 = applicationId(recipientUser[10])(() => skuId(recipientUser[11]).v4());
  callback = tmp7;
  const items1 = [analyticsLocations, skuId, applicationId, tmp7];
  const memo = navigation.useMemo(() => {
    const obj = { is_gift: true, location_stack: analyticsLocations, payment_type: "sku", sku_id: skuId, application_id: applicationId, load_id: closure_8 };
    return obj;
  }, items1);
  const items2 = [recipientUser, skuId, validateRecipient];
  const effect = navigation.useEffect(() => {
    callback(true);
    if (null != recipientUser) {
      callback2(true);
      const promise = validateRecipient(recipientUser.id);
      validateRecipient(recipientUser.id).then((arg0) => {
        outer1_5(arg0);
      }).finally(() => {
        outer1_6(false);
      });
      const nextPromise = validateRecipient(recipientUser.id).then((arg0) => {
        outer1_5(arg0);
      });
    }
  }, items2);
  const items3 = [memo];
  const effect1 = navigation.useEffect(() => {
    let obj = applicationId(recipientUser[12]);
    obj.track(analyticsLocations.PAYMENT_FLOW_STARTED, memo);
    obj = {};
    const merged = Object.assign(memo);
    obj["initial_step"] = "gift_customization";
    applicationId(recipientUser[12]).track(analyticsLocations.PAYMENT_FLOW_LOADED, obj);
  }, items3);
  let obj1 = skuId(recipientUser[13]);
  const tmp11 = validateRecipient(navigation.useState(obj1.useGiftStyles()[0]), 2);
  first1 = tmp11[0];
  const ref = navigation.useRef(null);
  const tmp14 = validateRecipient(navigation.useState(0), 2);
  const first2 = tmp14[0];
  const tmp16 = validateRecipient(navigation.useState(undefined), 2);
  const first3 = tmp16[0];
  const items4 = [first2];
  const items5 = [first1, recipientUser, first3];
  const callback1 = navigation.useCallback(() => {
    const timerId = setTimeout(() => {
      const current = outer1_11.current;
      let scrollToResult;
      if (null != current) {
        const obj = { y: outer1_12, animated: true };
        scrollToResult = current.scrollTo(obj);
      }
      return scrollToResult;
    }, 100);
  }, items4);
  obj = { style: tmp.container };
  obj = { ref, contentContainerStyle: tmp.scrollView, showsVerticalScrollIndicator: false };
  const memo1 = navigation.useMemo(() => {
    const obj = { gift_style: first1 };
    let id;
    if (null != recipientUser) {
      id = recipientUser.id;
    }
    obj.recipient_id = id;
    obj.custom_message = first3;
    return obj;
  }, items5);
  const items6 = [callback(skuId(recipientUser[14]).GiftBackgroundSelect, { giftStyle: first1, setGiftStyle: tmp11[1], withConsistentHeight: false }), , , , , ];
  obj1 = { variant: "text-sm/semibold", style: tmp.sectionHeader };
  const intl = skuId(recipientUser[16]).intl;
  obj1.children = intl.string(skuId(recipientUser[16]).t.xFn72s);
  items6[1] = callback(skuId(recipientUser[15]).Text, obj1);
  if (lockedRecipient) {
    if (null != recipientUser) {
      const obj2 = { user: recipientUser };
      let tmp23 = callback(applicationId(recipientUser[17]), obj2);
    }
    items6[2] = tmp23;
    const obj3 = { variant: "text-sm/semibold", style: tmp.sectionHeader };
    const intl2 = skuId(recipientUser[16]).intl;
    obj3.children = intl2.string(skuId(recipientUser[16]).t.PpoJzt);
    items6[3] = callback(skuId(recipientUser[15]).Text, obj3);
    const obj4 = { recipientUser, isValidRecipient: first };
    items6[4] = renderProductDetails(obj4);
    const obj5 = { onFocusMessage: callback1, setMessagePosition: tmp14[1], customGiftMessage: first3, setCustomGiftMessage: tmp16[1] };
    items6[5] = callback(skuId(recipientUser[19]).GiftCustomMessage, obj5);
    obj.children = items6;
    const items7 = [tmp20(closure_5, obj), ];
    const obj6 = { isPurchaseDisabled: null == recipientUser || tmp5[0] || !first, giftOptions: memo1, baseAnalyticsFields: memo };
    items7[1] = renderPurchaseSection(obj6);
    obj.children = items7;
    return tmp20(closure_6, obj);
  }
  tmp23 = callback(applicationId(recipientUser[18]), { selectedUser: recipientUser, onPress: callback, setSelectedUser: setRecipientUser });
});
const result = require("get ActivityIndicator").fileFinishedImporting("modules/checkout/native/gifting/UnifiedGiftModalDetailsScreen.tsx");

export default memoResult;
