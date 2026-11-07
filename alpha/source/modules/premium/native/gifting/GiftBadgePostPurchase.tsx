// Module ID: 14683
// Function ID: 14684
// Name: GiftBadgePostPurchase
// Dependencies: [19, 17, 8834, 14684, 4986, 21, 5140, 575, 1627, 6799, 5315, 5758, 13596, 1113, 2760, 14685, 5751, 10736, 504, 8826, 11596, 5376, 5377, 8839, 10738, 14686, 5170, 4973, 2]
// Exports: default

// Module 14683 (GiftBadgePostPurchase)
import react_native from "react-native" /* 17 */;
import get_initialized from "get initialized" /* 504 */;
import nativeDefault from "native" /* 575 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1627 */;
import _modDef2760 from "module_2760" /* 2760 */;
import dismissible_content from "dismissible_content" /* 4973 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 4986 */;
import DismissibleContentUnsafeUtils from "DismissibleContentUnsafeUtils" /* 5170 */;
import Text_Text from "Text/Text" /* 5751 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6799 */;
import BadgeId from "BadgeId" /* 8826 */;
import BadgeDirectoryActionCreators from "BadgeDirectoryActionCreators" /* 8839 */;
import GiftingBadgeProgressDefault from "GiftingBadgeProgress" /* 14685 */;
import react from "react" /* 19 */;
import BadgeDirectoryStore from "BadgeDirectoryStore" /* 8834 */;
import GiftingBadgeConstants from "GiftingBadgeConstants" /* 14684 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5140 */;
import size from "module_2" /* 2 */;

let importDefault;

let c10;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let tmp;
let unpackModuleId;
const GiftingBadgeIconDefault = tmp(10738);
const GiftingBadgeLevelUpProgressDefault = tmp(14686);
function PostPurchaseFooter(onSendGift) {
  let GiftIcon;
  let intl;
  let intl2;
  let items1;
  let obj3;
  onSendGift = onSendGift.onSendGift;
  const items = [onSendGift];
  const tmp = closure_12(useSafeAreaInsetsDefault().bottom);
  const callback = react.useCallback(() => {
    const arr = ModalActionCreatorsDefault;
    arr.pop();
    onSendGift();
  }, items);
  let obj = { style: tmp.footer, children: items1 };
  const callback1 = react.useCallback(() => {
    const arr = ModalActionCreatorsDefault;
    arr.pop();
    const obj = onSendGift(dependencyMap[10]);
    const rootNavigationRef = obj.getRootNavigationRef();
    if (rootNavigationRef != null) {
      rootNavigationRef.navigate("you");
    }
  }, []);
  const obj2 = { grow: true, variant: "primary", icon: closure_10(GiftIcon, obj3), text: intl.string(_modDef2760.g86YiI), onPress: callback };
  const Button = onSendGift(5758).Button;
  obj3 = { size: "sm", color: nativeDefault.colors.CONTROL_PRIMARY_TEXT_DEFAULT };
  GiftIcon = onSendGift(13596).GiftIcon;
  intl = onSendGift(1113).intl;
  items1 = [closure_10(Button, obj2), ];
  const obj4 = { grow: true, variant: "secondary", text: intl2.string(_modDef2760["sa/cfM"]), onPress: callback1 };
  const Button2 = onSendGift(5758).Button;
  intl2 = onSendGift(1113).intl;
  items1[1] = closure_10(Button2, obj4);
  return closure_11(View, obj);
}
function InProgressScreen(arg0) {
  let currentTier;
  let description;
  let items;
  let items1;
  let items2;
  let nextTier;
  let onSendGift;
  let progress;
  let progressBarTitle;
  let title;
  ({ progress, title, progressBarTitle, description, currentTier, nextTier, onSendGift } = arg0);
  const tmp = closure_12(useSafeAreaInsetsDefault().bottom);
  const obj2 = { style: tmp.content, children: items };
  items = [, ];
  const obj = { style: tmp.screenContainer, children: items2 };
  const obj3 = { style: tmp.progressWrapper, children: authStore(GiftingBadgeProgressDefault, { progress, currentTier, nextTier, iconSize: 48, title: progressBarTitle }) };
  items[0] = authStore(View, obj3);
  const obj4 = { style: tmp.messageSection, children: items1 };
  items1 = [, ];
  const obj5 = { variant: "heading-xxl/semibold", style: tmp.centerText, children: title };
  items1[0] = authStore(Text_Text.Text, obj5);
  const obj6 = { variant: "body-md/medium", color: "text-subtle", style: tmp.centerText, children: description };
  items1[1] = authStore(Text_Text.Text, obj6);
  items[1] = unpackModuleId(View, obj4);
  items2 = [unpackModuleId(View, obj2), authStore(PostPurchaseFooter, { onSendGift })];
  return unpackModuleId(View, obj);
}
function LevelUpScreen(newTier) {
  let closure_1;
  let currentTier;
  let format;
  let format2;
  let giftsToNextTier;
  let items3;
  let items4;
  let items5;
  let items6;
  let k8MmO8;
  let nextTier;
  let obj13;
  let onSendGift;
  let simulatedProgress;
  let str;
  let str2;
  let tmp12Result;
  let v6QVlxw;
  newTier = newTier.newTier;
  ({ nextTier, giftsToNextTier } = newTier);
  importDefault = undefined;
  let tmp = importDefault;
  ({ simulatedProgress, currentTier, onSendGift } = newTier);
  const tmp3 = closure_12(useSafeAreaInsetsDefault().bottom);
  let obj = newTier(10736);
  const giftingBadgeTierIconUrl = obj.getGiftingBadgeTierIconUrl(newTier);
  const items = [BadgeDirectoryStore];
  const items1 = [newTier.key];
  const obj2 = newTier(504);
  const stateFromStores = obj2.useStateFromStores(items, () => {
    const badgeById = BadgeDirectoryStore.getBadgeById(BadgeId.BadgeId.GIFTING);
    let has_updates;
    if (badgeById != null) {
      has_updates = badgeById.has_updates;
    }
    return true === has_updates && badgeById.current_tier === newTier.key;
  }, items1);
  const obj3 = newTier(11596);
  const tmp7 = stateFromStores && obj3.useIsBadgeUnreadStateEnabled({ location: "GiftBadgePostPurchase", hasUnread: stateFromStores });
  importDefault = tmp7;
  const effect = react.useEffect(() => {
    const obj = newTier(dependencyMap[21]);
    const result = obj.triggerHapticFeedback(closure_1(dependencyMap[22]).IMPACT_HEAVY);
  }, []);
  const items2 = [tmp7];
  const effect1 = react.useEffect(() => {
    const tmp = closure_1;
    if (tmp) {
      const obj = BadgeDirectoryActionCreators;
      obj.ackBadge(BadgeId.BadgeId.GIFTING);
    }
  }, items2);
  const obj6 = { style: tmp3.levelUpIconWrapper, children: tmp12Result };
  tmp12Result = null != giftingBadgeTierIconUrl;
  const obj4 = { style: tmp3.screenContainer, children: items6 };
  const obj5 = { style: tmp3.content, children: items3 };
  if (tmp12Result) {
    const obj7 = { icon: giftingBadgeTierIconUrl, size: 140 };
    tmp12Result = tmp12(GiftingBadgeIconDefault, obj7);
  }
  items3 = [closure_10(View, obj6), ];
  const obj8 = { style: tmp3.levelUpBody, children: items4 };
  items4 = [, ];
  const obj9 = { progress: simulatedProgress, currentTier, newTier, style: tmp3.levelUpProgress };
  items4[0] = closure_10(GiftingBadgeLevelUpProgressDefault, obj9);
  const obj10 = { style: tmp3.messageSection, children: items5 };
  const obj11 = { variant: "heading-xxl/semibold", style: tmp3.centerText, children: format(k8MmO8, { tierName: str }) };
  const Text = tmp4(5751).Text;
  const intl = tmp4(1113).intl;
  format = intl.format;
  str = newTier.name;
  k8MmO8 = _modDef2760.k8MmO8;
  if (str == null) {
    str = "";
  }
  items5 = [closure_10(Text, obj11), ];
  let tmp12Result2 = null != nextTier && null != giftsToNextTier && giftsToNextTier > 0;
  if (tmp12Result2) {
    const obj12 = { variant: "body-md/normal", color: "text-subtle", style: tmp3.centerText, children: format2(v6QVlxw, obj13) };
    const Text2 = tmp4(5751).Text;
    const intl2 = tmp4(1113).intl;
    format2 = intl2.format;
    obj13 = { count: giftsToNextTier, nextTierName: str2 };
    str2 = nextTier.name;
    v6QVlxw = _modDef2760["6QVlxw"];
    if (str2 == null) {
      str2 = "";
    }
    tmp12Result2 = tmp12(Text2, obj12);
  }
  items5[1] = tmp12Result2;
  items4[1] = closure_11(View, obj10);
  items3[1] = closure_11(View, obj8);
  items6 = [closure_11(View, obj5), closure_10(PostPurchaseFooter, { onSendGift })];
  return closure_11(View, obj4);
}
const View = react_native.View;
({ getRemainingGiftsToNextTier: metroRequire, getTierForProgress: metroImportDefault, getNextTierForProgress: metroImportAll } = GiftingBadgeConstants);
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
({ jsx: c10, jsxs: unpackModuleId } = Fragment);
let closure_12 = createStyles.createStyles((arg0) => {
  const obj = { screenContainer: { flex: 1 }, content: { flex: 1, alignItems: "center", justifyContent: "center", padding: nativeDefault.space.PX_16 }, progressWrapper: { padding: nativeDefault.space.PX_16, width: "100%", marginBottom: nativeDefault.space.PX_24 }, messageSection: { gap: nativeDefault.space.PX_12, alignItems: "center", width: "100%", paddingHorizontal: nativeDefault.space.PX_16 }, centerText: { textAlign: "center" }, levelUpIconWrapper: { paddingVertical: 26, paddingHorizontal: 74, marginBottom: nativeDefault.space.PX_48 }, levelUpBody: { gap: nativeDefault.space.PX_12, alignItems: "center", width: "100%" }, levelUpProgress: { maxWidth: 260 }, footer: { width: "100%", gap: nativeDefault.space.PX_12, paddingHorizontal: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_16 + arg0 } };
  ({ flex: 1, alignItems: "center", justifyContent: "center", padding: nativeDefault.space.PX_16 });
  ({ padding: nativeDefault.space.PX_16, width: "100%", marginBottom: nativeDefault.space.PX_24 });
  ({ gap: nativeDefault.space.PX_12, alignItems: "center", width: "100%", paddingHorizontal: nativeDefault.space.PX_16 });
  ({ paddingVertical: 26, paddingHorizontal: 74, marginBottom: nativeDefault.space.PX_48 });
  ({ gap: nativeDefault.space.PX_12, alignItems: "center", width: "100%" });
  ({ width: "100%", gap: nativeDefault.space.PX_12, paddingHorizontal: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_16 + arg0 });
  return obj;
});
let result = size.fileFinishedImporting("modules/premium/native/gifting/GiftBadgePostPurchase.tsx");

export default function GiftBadgePostPurchase(arg0) {
  let currentProgress;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let obj4;
  let onSendGift;
  let str;
  let tmp15;
  let tmp16;
  let tmp18;
  let tmp19;
  ({ currentProgress, onSendGift } = arg0);
  const effect = react.useEffect(() => {
    const obj = DismissibleContentUnsafeUtils;
    const obj2 = { dismissAction: constants.INDIRECT_ACTION };
    const result = obj.UNSAFE_markDismissibleContentAsDismissed(dismissible_content.DismissibleContent.NEW_GIFTING_BADGES_COACHMARK, obj2);
  }, []);
  let obj = get_initialized;
  const items = [BadgeDirectoryStore];
  const stateFromStores = obj.useStateFromStores(items, () => {
    badgeById = badgeById.getBadgeById(BadgeId.BadgeId.GIFTING);
    let tiers;
    if (badgeById != null) {
      tiers = badgeById.tiers;
    }
    return tiers;
  });
  if (null == stateFromStores) {
    return null;
  } else {
    let obj5;
    const tmp24 = metroImportDefault(stateFromStores, currentProgress);
    const sum = currentProgress + 1;
    const tmp26 = metroImportDefault(stateFromStores, sum);
    let key;
    if (tmp26 != null) {
      key = tmp26.key;
    }
    let key1;
    if (tmp24 != null) {
      key1 = tmp24.key;
    }
    const tmp8 = metroImportAll(stateFromStores, sum);
    const tmp10 = metroRequire(stateFromStores, sum);
    if (key !== key1) {
      let tmp11Result;
      if (null != tmp26) {
        let obj2 = { simulatedProgress: sum, currentTier: tmp24, newTier: tmp26, nextTier: tmp8, giftsToNextTier: tmp10, onSendGift };
        tmp11Result = authStore(LevelUpScreen, obj2);
      }
      return tmp11Result;
    }
    const tmp11 = authStore;
    const tmp12 = InProgressScreen;
    if (1 === tmp10) {
      const intl2 = tmp2(1113).intl;
      const formatToPlainString2 = intl2.formatToPlainString;
      let str2;
      const KjdBPz = _modDef2760.KjdBPz;
      if (tmp8 != null) {
        str2 = tmp8.name;
      }
      if (str2 == null) {
        str2 = "";
      }
      const obj3 = { title: formatToPlainString2(KjdBPz, obj4), description: intl3.string(_modDef2760.oqDrEM), progressBarTitle: intl4.string(_modDef2760["Ka5s+Q"]), progress: sum, currentTier: tmp18, nextTier: tmp19, onSendGift };
      obj4 = { nextTier: str2 };
      intl3 = tmp2(1113).intl;
      intl4 = tmp2(1113).intl;
      obj5 = obj3;
      tmp18 = tmp26;
      tmp19 = tmp8;
    } else {
      obj5 = { title: intl5.string(_modDef2760["/rBQud"]), description: intl6.string(_modDef2760.DDQMlx), progressBarTitle: str, progress: sum, currentTier: tmp15, nextTier: tmp16, onSendGift };
      intl5 = tmp2(1113).intl;
      intl6 = tmp2(1113).intl;
      let name;
      const tmp27 = importDefault;
      if (tmp24 != null) {
        name = tmp24.name;
      }
      str = "";
      if (null != name) {
        const intl = tmp2(1113).intl;
        const formatToPlainString = intl.formatToPlainString;
        let name1;
        const bwyQt8 = tmp27(2760).bwyQt8;
        if (tmp24 != null) {
          name1 = tmp24.name;
        }
        const obj6 = { tierName: name1 };
        str = formatToPlainString(bwyQt8, obj6);
      }
      tmp15 = tmp26;
      tmp16 = tmp8;
    }
    tmp11Result = tmp11(tmp12, obj5);
  }
};
