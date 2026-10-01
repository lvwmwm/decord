// Module ID: 10494
// Function ID: 10495
// Name: GiftBadgePostPurchase
// Dependencies: [19, 17, 7637, 10495, 2042, 21, 4836, 576, 1613, 5039, 4693, 5281, 10496, 1115, 2583, 10497, 4832, 10208, 4801, 4802, 10214, 10498, 4654, 2029, 504, 7629, 2]
// Exports: default

// Module 10494 (GiftBadgePostPurchase)
import react_native from "react-native" /* 17 */;
import get_initialized from "get initialized" /* 504 */;
import nativeDefault from "native" /* 576 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1613 */;
import dismissible_content from "dismissible_content" /* 2029 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 2042 */;
import _modDef2583 from "module_2583" /* 2583 */;
import DismissibleContentUnsafeUtils from "DismissibleContentUnsafeUtils" /* 4654 */;
import HapticUtils from "HapticUtils" /* 4801 */;
import haptics_HapticFeedbackTypesDefault from "haptics/HapticFeedbackTypes" /* 4802 */;
import Text_Text from "Text/Text" /* 4832 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5039 */;
import BadgeId from "BadgeId" /* 7629 */;
import GiftingBadgesUtils from "GiftingBadgesUtils" /* 10208 */;
import GiftingBadgeProgressDefault from "GiftingBadgeProgress" /* 10497 */;
import GiftingBadgeLevelUpProgressDefault from "GiftingBadgeLevelUpProgress" /* 10498 */;
import react from "react" /* 19 */;
import BadgeDirectoryStore from "BadgeDirectoryStore" /* 7637 */;
import GiftingBadgeConstants from "GiftingBadgeConstants" /* 10495 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let badgeById;

let c10;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let unpackModuleId;
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
  const obj2 = { grow: true, variant: "primary", icon: closure_10(GiftIcon, obj3), text: intl.string(_modDef2583.g86YiI), onPress: callback };
  const Button = onSendGift(5281).Button;
  obj3 = { size: "sm", color: nativeDefault.colors.CONTROL_PRIMARY_TEXT_DEFAULT };
  GiftIcon = onSendGift(10496).GiftIcon;
  intl = onSendGift(1115).intl;
  items1 = [closure_10(Button, obj2), ];
  const obj4 = { grow: true, variant: "secondary", text: intl2.string(_modDef2583["sa/cfM"]), onPress: callback1 };
  const Button2 = onSendGift(5281).Button;
  intl2 = onSendGift(1115).intl;
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
  const obj5 = { variant: "heading-xxl/bold", style: tmp.centerText, children: title };
  items1[0] = authStore(Text_Text.Text, obj5);
  const obj6 = { variant: "text-md/medium", color: "text-subtle", style: tmp.centerText, children: description };
  items1[1] = authStore(Text_Text.Text, obj6);
  items[1] = unpackModuleId(View, obj4);
  items2 = [unpackModuleId(View, obj2), authStore(PostPurchaseFooter, { onSendGift })];
  return unpackModuleId(View, obj);
}
function LevelUpScreen(arg0) {
  let currentTier;
  let format;
  let format2;
  let giftsToNextTier;
  let items;
  let items1;
  let items2;
  let items3;
  let k8MmO8;
  let newTier;
  let nextTier;
  let obj12;
  let onSendGift;
  let simulatedProgress;
  let str;
  let str2;
  let tmp10Result;
  let v6QVlxw;
  ({ newTier, nextTier, giftsToNextTier } = arg0);
  ({ simulatedProgress, currentTier, onSendGift } = arg0);
  const tmp3 = closure_12(useSafeAreaInsetsDefault().bottom);
  let obj = GiftingBadgesUtils;
  const isGiftingBadgeComplexArtEnabled = obj.useIsGiftingBadgeComplexArtEnabled("GiftBadgePostPurchase");
  const obj2 = GiftingBadgesUtils;
  const giftingBadgeTierIconUrl = obj2.getGiftingBadgeTierIconUrl(newTier, isGiftingBadgeComplexArtEnabled);
  const effect = react.useEffect(() => {
    const obj = HapticUtils;
    const result = obj.triggerHapticFeedback(haptics_HapticFeedbackTypesDefault.IMPACT_HEAVY);
  }, []);
  const obj5 = { style: tmp3.levelUpIconWrapper, children: tmp10Result };
  tmp10Result = null != giftingBadgeTierIconUrl;
  const obj3 = { style: tmp3.screenContainer, children: items3 };
  const obj4 = { style: tmp3.content, children: items };
  if (tmp10Result) {
    const obj6 = { icon: giftingBadgeTierIconUrl, size: 140 };
    tmp10Result = tmp10(tmp(10214), obj6);
  }
  items = [authStore(View, obj5), ];
  const obj7 = { style: tmp3.levelUpBody, children: items1 };
  items1 = [, ];
  const obj8 = { progress: simulatedProgress, currentTier, newTier, style: tmp3.levelUpProgress };
  items1[0] = authStore(GiftingBadgeLevelUpProgressDefault, obj8);
  const obj9 = { style: tmp3.messageSection, children: items2 };
  const obj10 = { variant: "heading-xxl/bold", style: tmp3.centerText, children: format(k8MmO8, { tierName: str }) };
  const Text = tmp4(4832).Text;
  const intl = tmp4(1115).intl;
  format = intl.format;
  str = newTier.name;
  k8MmO8 = tmp(2583).k8MmO8;
  if (str == null) {
    str = "";
  }
  items2 = [authStore(Text, obj10), ];
  let tmp10Result2 = null != nextTier && null != giftsToNextTier && giftsToNextTier > 0;
  if (tmp10Result2) {
    const obj11 = { variant: "text-md/normal", color: "text-subtle", style: tmp3.centerText, children: format2(v6QVlxw, obj12) };
    const Text2 = tmp4(4832).Text;
    const intl2 = tmp4(1115).intl;
    format2 = intl2.format;
    obj12 = { count: giftsToNextTier, nextTierName: str2 };
    str2 = nextTier.name;
    v6QVlxw = tmp(2583)["6QVlxw"];
    if (str2 == null) {
      str2 = "";
    }
    tmp10Result2 = tmp10(Text2, obj11);
  }
  items2[1] = tmp10Result2;
  items1[1] = unpackModuleId(View, obj9);
  items[1] = unpackModuleId(View, obj7);
  items3 = [unpackModuleId(View, obj4), authStore(PostPurchaseFooter, { onSendGift })];
  return unpackModuleId(View, obj3);
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
      const intl2 = tmp2(1115).intl;
      const formatToPlainString2 = intl2.formatToPlainString;
      let str2;
      const KjdBPz = _modDef2583.KjdBPz;
      if (tmp8 != null) {
        str2 = tmp8.name;
      }
      if (str2 == null) {
        str2 = "";
      }
      const obj3 = { title: formatToPlainString2(KjdBPz, obj4), description: intl3.string(_modDef2583.oqDrEM), progressBarTitle: intl4.string(_modDef2583["Ka5s+Q"]), progress: sum, currentTier: tmp18, nextTier: tmp19, onSendGift };
      obj4 = { nextTier: str2 };
      intl3 = tmp2(1115).intl;
      intl4 = tmp2(1115).intl;
      obj5 = obj3;
      tmp18 = tmp26;
      tmp19 = tmp8;
    } else {
      obj5 = { title: intl5.string(_modDef2583["/rBQud"]), description: intl6.string(_modDef2583.DDQMlx), progressBarTitle: str, progress: sum, currentTier: tmp15, nextTier: tmp16, onSendGift };
      intl5 = tmp2(1115).intl;
      intl6 = tmp2(1115).intl;
      let name;
      const tmp27 = importDefault;
      if (tmp24 != null) {
        name = tmp24.name;
      }
      str = "";
      if (null != name) {
        const intl = tmp2(1115).intl;
        const formatToPlainString = intl.formatToPlainString;
        let name1;
        const bwyQt8 = tmp27(2583).bwyQt8;
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
