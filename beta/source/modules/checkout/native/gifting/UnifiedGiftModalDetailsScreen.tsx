// Module ID: 10288
// Function ID: 10289
// Name: UnifiedGiftModalDetailsScreen
// Dependencies: [32, 19, 17, 21, 4836, 576, 1485, 10287, 10165, 10289, 4832, 1115, 10316, 10317, 10318, 2]

// Module 10288 (UnifiedGiftModalDetailsScreen)
import nativeDefault from "native" /* 576 */;
import UnifiedGiftModalTypes from "UnifiedGiftModalTypes" /* 10287 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let navigation, recipientUser;

let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
({ ScrollView: hasOwnProperty, View: metroRequire } = react_native);
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, scrollView: obj3, sectionHeader: obj4 };
obj2 = { flex: 1, paddingTop: nativeDefault.space.PX_12, alignItems: "stretch" };
createStyles = createStyles.createStyles;
obj3 = { paddingBottom: nativeDefault.space.PX_24 };
obj4 = { marginTop: nativeDefault.space.PX_24, marginBottom: nativeDefault.space.PX_8, paddingHorizontal: nativeDefault.space.PX_16, textTransform: "capitalize" };
let closure_9 = createStyles(obj);
const memoResult = react.memo((recipientUser) => {
  let _undefined;
  let c3;
  let closure_4;
  let first;
  let first1;
  let first2;
  let first3;
  let intl;
  let intl2;
  let lockedRecipient;
  let renderProductDetails;
  let renderPurchaseSection;
  let setRecipientUser;
  let skuId;
  let tmp13;
  let tmp17;
  let tmp20;
  let tmp29;
  let tmp6;
  recipientUser = recipientUser.recipientUser;
  const validateRecipient = recipientUser.validateRecipient;
  navigation = undefined;
  _slicedToArray = undefined;
  react = undefined;
  first1 = undefined;
  first2 = undefined;
  first3 = undefined;
  ({ skuId, setRecipientUser, lockedRecipient, renderProductDetails, renderPurchaseSection } = recipientUser);
  const tmp = closure_9();
  const tmp2 = recipientUser;
  let obj = recipientUser(navigation[6]);
  navigation = obj.useNavigation();
  [tmp6, c3] = _slicedToArray(react.useState(true), 2);
  const tmp5 = _slicedToArray(react.useState(true), 2);
  [first, react] = react.useState(false);
  const items = [navigation];
  const items1 = [recipientUser, skuId, validateRecipient];
  const callback = react.useCallback(() => {
    navigation.navigate(UnifiedGiftModalTypes.UnifiedGiftModalScreens.RECIPENT_SELECT);
  }, items);
  const effect = react.useEffect(() => {
    _undefined(true);
    if (null != recipientUser) {
      closure_4(true);
      const promise = validateRecipient(tmp2.id);
      const nextPromise = promise.then((result) => {
        _undefined(result);
      });
      nextPromise.finally(() => {
        closure_1_4(false);
      });
    }
  }, items1);
  const obj2 = recipientUser(navigation[8]);
  [first1, tmp13] = react.useState(obj2.useGiftStyles()[0]);
  const ref = react.useRef(null);
  [first2, tmp17] = react.useState(0);
  [first3, tmp20] = react.useState(undefined);
  const items2 = [first2];
  const items3 = [, , ];
  items3[0] = first1;
  items3[1] = recipientUser;
  items3[2] = first3;
  const callback1 = react.useCallback(() => {
    let closure_7;
    const timerId = setTimeout(() => {
      const current = ref.current;
      let scrollToResult;
      if (current != null) {
        const obj = { y, animated: true };
        scrollToResult = current.scrollTo(obj);
      }
      return scrollToResult;
    }, 100);
  }, items2);
  const obj3 = { style: tmp.container, children: null };
  const obj4 = { ref, contentContainerStyle: tmp.scrollView, showsVerticalScrollIndicator: false, children: null };
  const memo = react.useMemo(() => {
    let id;
    const obj = { gift_style: first1, recipient_id: id, custom_message: first3 };
    id = undefined;
    if (recipientUser != null) {
      id = recipientUser.id;
    }
    return obj;
  }, items3);
  const items4 = [first2(recipientUser(navigation[9]).GiftBackgroundSelect, { giftStyle: first1, setGiftStyle: tmp13, withConsistentHeight: false }), , , , , ];
  const obj5 = { variant: "text-sm/semibold", style: tmp.sectionHeader, children: intl.string(recipientUser(navigation[11]).t.xFn72s) };
  const Text = recipientUser(navigation[10]).Text;
  intl = recipientUser(navigation[11]).intl;
  items4[1] = first2(Text, obj5);
  const tmp24 = ref;
  const tmp25 = first1;
  if (lockedRecipient) {
    let tmp26Result;
    if (null != recipientUser) {
      const obj6 = { user: recipientUser };
      tmp26Result = tmp26(validateRecipient(tmp3[12]), obj6);
    }
    items4[2] = tmp26Result;
    const obj7 = { variant: "text-sm/semibold", style: tmp.sectionHeader, children: intl2.string(tmp2(navigation[11]).t.PpoJzt) };
    const Text2 = tmp2(tmp3[10]).Text;
    intl2 = tmp2(tmp3[11]).intl;
    items4[3] = first2(Text2, obj7);
    const obj8 = { recipientUser, isValidRecipient: tmp6 };
    items4[4] = renderProductDetails(obj8);
    const obj9 = { onFocusMessage: callback1, setMessagePosition: tmp17, customGiftMessage: first3, setCustomGiftMessage: tmp20 };
    items4[5] = first2(tmp2(navigation[14]).GiftCustomMessage, obj9);
    obj4.children = items4;
    const items5 = [first3(tmp25, obj4), ];
    const obj10 = { isPurchaseDisabled: tmp29, giftOptions: memo };
    tmp29 = null == recipientUser || first || !tmp6;
    items5[1] = renderPurchaseSection(obj10);
    obj3.children = items5;
    return first3(tmp24, obj3);
  }
  tmp26Result = tmp26(validateRecipient(tmp3[13]), { selectedUser: recipientUser, onPress: callback, setSelectedUser: setRecipientUser });
});
const result = size.fileFinishedImporting("modules/checkout/native/gifting/UnifiedGiftModalDetailsScreen.tsx");

export default memoResult;
