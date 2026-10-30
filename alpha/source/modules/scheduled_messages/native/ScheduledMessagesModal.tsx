// Module ID: 9789
// Function ID: 9790
// Name: ScheduledMessagesModal
// Dependencies: [32, 19, 17, 9790, 1072, 1386, 9774, 21, 7345, 5009, 575, 1626, 1114, 5090, 5632, 6999, 9791, 1376, 6992, 6738, 14540, 504, 14541, 9787, 6947, 14543, 7288, 7320, 9764, 1093, 10009, 2048, 14544, 2]
// Exports: default

// Module 9789 (ScheduledMessagesModal)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1072 */;
import ConstantsIOS from "ConstantsIOS" /* 1093 */;
import intl2 from "intl" /* 1114 */;
import PlatformUtils from "PlatformUtils" /* 1376 */;
import PremiumConstants from "PremiumConstants" /* 1386 */;
import PremiumUtils from "PremiumUtils" /* 2048 */;
import ReanimatedRexport from "ReanimatedRexport" /* 5090 */;
import spring from "spring" /* 5632 */;
import _mod6999 from "module_6999" /* 6999 */;
import useAnalyticsLocationsDefault from "useAnalyticsLocations" /* 7320 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7345 */;
import PremiumUpsellUtils from "PremiumUpsellUtils" /* 9764 */;
import ScheduledMessagesConstants from "ScheduledMessagesConstants" /* 9774 */;
import HeaderShared from "HeaderShared" /* 9791 */;
import usePremiumFeatureUpsellGetNitroDefault from "usePremiumFeatureUpsellGetNitro" /* 10009 */;
import ScheduledMessageActionCreators from "ScheduledMessageActionCreators" /* 14540 */;
import ScheduledMessageCardDefault from "ScheduledMessageCard" /* 14541 */;
import NitroLimitUpsellBarDefault from "NitroLimitUpsellBar" /* 14544 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ScheduledMessageStore from "ScheduledMessageStore" /* 9790 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5009 */;
import size_mod from "module_2" /* 2 */;

let _require, item, set;

let c10;
let closure_12;
let obj2;
let obj3;
let obj4;
let size;
let tmp4;
let unpackModuleId;
const NavigatorHeader = tmp4(6992);
function keyExtractor(scheduledMessageId) {
  return scheduledMessageId.scheduledMessageId;
}
function ScheduledMessagesPage(handleScroll) {
  let c0;
  let obj7;
  let tmp21Result;
  let tmp3;
  _require = undefined;
  let stateFromStores2;
  handleScroll = handleScroll.handleScroll;
  let tmp = closure_14();
  [tmp3, c0] = react.useState(false);
  _slicedToArray(react.useState(false), 2);
  const effect = react.useEffect(() => {
    const obj = ScheduledMessageActionCreators;
    const scheduledMessages = obj.fetchScheduledMessages();
    scheduledMessages.then(() => closure_1_0(true));
  }, []);
  let obj = require("get initialized");
  items = [ScheduledMessageStore];
  const stateFromStores = obj.useStateFromStores(items, () => ScheduledMessageStore.getScheduledMessagesForInbox());
  const items1 = [ScheduledMessageStore];
  const obj2 = require("get initialized");
  const stateFromStores1 = obj2.useStateFromStores(items1, () => ScheduledMessageStore.loading);
  const items2 = [ScheduledMessageStore];
  const obj3 = require("get initialized");
  stateFromStores2 = obj3.useStateFromStores(items2, () => ScheduledMessageStore.getMessagesPendingRemoval());
  const items3 = [stateFromStores];
  const memo = react.useMemo(() => {
    const values = Object.values(stateFromStores);
    return values.sort((sendAtTimestamp, sendAtTimestamp2) => {
      const date = new Date(sendAtTimestamp.sendAtTimestamp);
      const valueOfResult = date.valueOf();
      const date1 = new Date(sendAtTimestamp2.sendAtTimestamp);
      return valueOfResult - date1.valueOf();
    });
  }, items3);
  const items4 = [stateFromStores2];
  const callback = react.useCallback((item) => {
    item = item.item;
    const obj = { scheduledMessage: item, isPendingRemoval: stateFromStores2.has(item.scheduledMessageId) };
    const tmp = ScheduledMessageCardDefault;
    return authStore(tmp, obj);
  }, items4);
  const obj4 = require("ScheduledMessageUtils");
  const scheduledMessagesLimit = obj4.useScheduledMessagesLimit("ScheduledMessagesMobileModal");
  const limit = scheduledMessagesLimit.limit;
  let tmp12 = limit > 0;
  const isUpgradable = scheduledMessagesLimit.isUpgradable;
  if (tmp12) {
    tmp12 = memo.length >= limit;
  }
  if (!tmp3) {
    let tmp15;
    if (0 === memo.length) {
      const obj5 = { style: tmp.loading, children: closure_10(require("ActivityIndicator/ActivityIndicator").ActivityIndicator, { size: "large" }) };
      tmp15 = closure_10(View, obj5);
    }
    return tmp15;
  }
  if (0 === memo.length) {
    tmp21Result = closure_10(stateFromStores(tmp6[25]), {});
  } else {
    const obj6 = { style: tmp.listContainer, children: closure_10(require("defaultMVCPConfig").FlashList, obj7) };
    obj7 = { data: memo, renderItem: callback, contentContainerStyle: tmp.cardContainer, keyExtractor, onScroll: handleScroll };
    const items5 = [closure_10(View, obj6), ];
    let tmp23Result = null;
    const tmp21 = closure_11;
    const tmp22 = closure_12;
    const tmp23 = closure_10;
    if (isUpgradable) {
      const obj8 = { isAtLimit: tmp12 };
      tmp23Result = tmp23(ScheduledMessageNitroUpsellBar, obj8);
    }
    const obj9 = { children: items5 };
    items5[1] = tmp23Result;
    tmp21Result = tmp21(tmp22, obj9);
  }
  tmp15 = tmp21Result;
}
function ScheduledMessageNitroUpsellBar(isAtLimit) {
  let formatToPlainStringResult;
  let loading;
  let onPress;
  let onViewAllPerks;
  let tmp8;
  let useTier0UpsellContent;
  isAtLimit = isAtLimit.isAtLimit;
  const analyticsLocations = useAnalyticsLocationsDefault(items).analyticsLocations;
  const obj = PremiumUpsellUtils;
  const premiumUpsellConfig = obj.usePremiumUpsellConfig(ConstantsIOS.UpsellTypes.SCHEDULED_MESSAGES, analyticsLocations);
  ({ useTier0UpsellContent, onViewAllPerks } = premiumUpsellConfig);
  ({ loading, onPress } = usePremiumFeatureUpsellGetNitroDefault(useTier0UpsellContent, onViewAllPerks, AnalyticsPages.PREMIUM_UPSELL_SCHEDULED_MESSAGES, undefined, items));
  usePremiumFeatureUpsellGetNitroDefault(useTier0UpsellContent, onViewAllPerks, AnalyticsPages.PREMIUM_UPSELL_SCHEDULED_MESSAGES, undefined, items);
  const obj2 = PremiumUtils;
  const premiumTypeDisplayName = obj2.getPremiumTypeDisplayName(PremiumTypes.TIER_2);
  const tmp5 = NitroLimitUpsellBarDefault;
  const intl = intl2.intl;
  const formatToPlainString = intl.formatToPlainString;
  const t = intl2.t;
  const tmp4 = authStore;
  if (isAtLimit) {
    const obj3 = { nitroTierName: premiumTypeDisplayName, premiumMax };
    formatToPlainStringResult = formatToPlainString(t["7GgYhg"], obj3);
  } else {
    const obj4 = { nitroTierName: premiumTypeDisplayName };
    formatToPlainStringResult = formatToPlainString(t.WfTDdG, obj4);
  }
  const obj5 = { text: formatToPlainStringResult, isAtLimit, onPress: tmp8, loading };
  tmp8 = null;
  if (!loading) {
    tmp8 = onPress;
  }
  return tmp4(tmp5, obj5);
}
const View = react_native.View;
const AnalyticsPages = Constants.AnalyticsPages;
const PremiumTypes = PremiumConstants.PremiumTypes;
const premiumMax = ScheduledMessagesConstants.MAX_SCHEDULED_MESSAGES_PER_USER;
({ jsx: c10, jsxs: unpackModuleId, Fragment: closure_12 } = Fragment);
let items = [AnalyticsLocationDefault.SCHEDULED_MESSAGES_LIST];
let createStyles = createStyles_mod;
let obj = { modal: obj2, headerLeftContainer: obj3, headerRightContainer: obj4, headerBorder: size, cardContainer: { paddingHorizontal: 16, paddingVertical: 8 }, listContainer: { flex: 1 }, loading: { flex: 1, alignItems: "center", justifyContent: "center" } };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, borderBottomWidth: 0, shadowColor: "transparent", height: "100%" };
createStyles = createStyles.createStyles;
obj3 = { paddingLeft: nativeDefault.space.PX_16 };
obj4 = { paddingRight: nativeDefault.space.PX_16 };
size = { height: 1, width: "100%", backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
let closure_14 = createStyles(obj);
const __initData = { code: "function ScheduledMessagesModalTsx1(){const{borderOpacity}=this.__closure;return{opacity:borderOpacity.get()};}" };
size = size_mod;
let result = size.fileFinishedImporting("modules/scheduled_messages/native/ScheduledMessagesModal.tsx");

export default function ScheduledMessagesModal() {
  let items1;
  let items2;
  let num;
  let sharedValue;
  let tmp4Result;
  const tmp = closure_14();
  const tmp2 = sharedValue;
  const top = sharedValue(1626)().top;
  const intl = intl2.intl;
  const stringResult = intl.string(intl2.t.SZVs3K);
  const require = stringResult;
  let obj = ReanimatedRexport;
  sharedValue = obj.useSharedValue(0);
  items = [sharedValue];
  const callback = react.useCallback((nativeEvent) => {
    let num = 0;
    set = sharedValue.set;
    const withSpring = spring.withSpring;
    spring;
    if (nativeEvent.nativeEvent.contentOffset.y > 8) {
      num = 1;
    }
    const result = set(withSpring(num));
  }, items);
  const fn = function t() {
    const obj = { opacity: sharedValue.get() };
    return obj;
  };
  fn.__closure = { borderOpacity: sharedValue };
  fn.__workletHash = 2142182513871;
  fn.__initData = __initData;
  const obj3 = { style: tmp.modal, children: items1 };
  const obj2 = ReanimatedRexport;
  const animatedStyle = obj2.useAnimatedStyle(fn);
  const obj6 = {
    title: stringResult,
    headerTitle() {
      const obj = { title: require };
      return authStore(HeaderShared.GenericHeaderTitle, obj);
    },
    headerTitleAlign: "center",
    headerStatusBarHeight: num + tmp2(575).space.PX_8,
    headerLeft: tmp4Result.getHeaderCloseButton(tmp2(6738).pop),
    headerLeftContainerStyle: null,
    headerRightContainerStyle: null
  };
  const Header = _mod6999.Header;
  num = 0;
  const obj5 = PlatformUtils;
  const tmp10 = View;
  const tmp9 = closure_11;
  if (!obj5.isIOS()) {
    num = top;
  }
  ({ headerLeftContainer: obj4.headerLeftContainerStyle, headerRightContainer: obj4.headerRightContainerStyle } = tmp);
  tmp4Result = NavigatorHeader;
  items1 = [closure_10(Header, obj6), , ];
  const obj7 = { style: items2 };
  items2 = [tmp.headerBorder, animatedStyle];
  items1[1] = closure_10(tmp2(5090).View, obj7);
  items1[2] = closure_10(ScheduledMessagesPage, { handleScroll: callback });
  return tmp9(tmp10, obj3);
};
