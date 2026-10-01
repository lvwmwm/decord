// Module ID: 14729
// Function ID: 14730
// Name: QuestDockInsetHeaderBody
// Dependencies: [19, 17, 14624, 21, 576, 4836, 10746, 10745, 14621, 1613, 14693, 14690, 4832, 5281, 1177, 2]
// Exports: QuestDockBodyQuestRewardTile, QuestDockBodyRewardTile

// Module 14729 (QuestDockInsetHeaderBody)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1613 */;
import Text_Text from "Text/Text" /* 4832 */;
import QuestRewardTileDefault from "QuestRewardTile" /* 10745 */;
import QuestDockRewardTileDefault from "QuestDockRewardTile" /* 10746 */;
import QuestDockHooks from "QuestDockHooks" /* 14621 */;
import QuestDockBlurredContentBackgroundDefault from "QuestDockBlurredContentBackground" /* 14690 */;
import PremiumRewardGradientDefault from "PremiumRewardGradient" /* 14693 */;
import react from "react" /* 19 */;
import QuestDockConstants from "QuestDockConstants" /* 14624 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let rect;
let rect1;
const View = react_native.View;
const QUEST_DOCK_EXPANDED_PADDING_BOTTOM = QuestDockConstants.QUEST_DOCK_EXPANDED_PADDING_BOTTOM;
const QUEST_DOCK_EXPANDED_PADDING_HORIZONTAL = QuestDockConstants.QUEST_DOCK_EXPANDED_PADDING_HORIZONTAL;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
const PX_80 = nativeDefault.space.PX_80;
let createStyles = createStyles_mod;
let obj = { rewardTile: obj2, wrapper: { flexGrow: 1, flexShrink: 0, justifyContent: "flex-end", paddingHorizontal: QUEST_DOCK_EXPANDED_PADDING_HORIZONTAL, paddingBottom: QUEST_DOCK_EXPANDED_PADDING_BOTTOM }, rewardContentContainer: { position: "relative" }, rewardContentWrapper: obj3, contentBadge: rect, rewardContent: { alignItems: "center", flexDirection: "row", gap: 16 }, rewardContentCopy: { flexGrow: 1, flexShrink: 1, gap: 4 }, premiumRewardPerkPill: { alignSelf: "flex-start" }, titleRow: obj4, questDockCtaWrapper: { marginTop: 12, paddingHorizontal: 4, paddingTop: 16, position: "relative" }, questDockCta: obj5, questDockCtaRow: obj6, questDockCtaSaparator: rect1 };
obj2 = { borderRadius: nativeDefault.radii.lg };
createStyles = createStyles.createStyles;
obj3 = { borderRadius: nativeDefault.modules.mobile.QUEST_DOCK_BORDER_RADIUS, overflow: "hidden", padding: 8, paddingRight: 16 };
rect = { position: "absolute", top: -10, right: nativeDefault.space.PX_12, zIndex: 1 };
obj4 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8, flexWrap: "wrap" };
obj5 = { borderRadius: nativeDefault.radii.round };
obj6 = { alignSelf: "stretch", flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
rect1 = { position: "absolute", left: -12, right: -12, top: 0, backgroundColor: nativeDefault.colors.BORDER_SUBTLE, height: 1, opacity: 1 };
let closure_8 = createStyles(obj);
const memoResult = react.memo(function QuestDockInsetHeaderBody(showBonusOrbsGradient) {
  let contentBadge;
  let ctaButtonVariant;
  let ctaLoading;
  let ctaText;
  let description;
  let items;
  let items1;
  let items2;
  let items3;
  let items4;
  let items5;
  let items6;
  let items7;
  let onCtaPress;
  let premiumRewardPerkPill;
  let renderCtaIcon;
  let renderCtaIconResult;
  let rewardTile;
  let secondaryCta;
  let title;
  let tmp8Result4;
  ({ premiumRewardPerkPill, contentBadge, ctaText, onCtaPress, renderCtaIcon, ctaButtonVariant } = showBonusOrbsGradient);
  ({ rewardTile, title, description } = showBonusOrbsGradient);
  if (ctaButtonVariant === undefined) {
    ctaButtonVariant = "primary";
  }
  ({ ctaLoading, secondaryCta } = showBonusOrbsGradient);
  if (ctaLoading === undefined) {
    ctaLoading = false;
  }
  let flag = showBonusOrbsGradient.showBonusOrbsGradient;
  if (flag === undefined) {
    flag = false;
  }
  const tmp = closure_8();
  const obj = QuestDockHooks;
  const isQuestDockExpanded = obj.useIsQuestDockExpanded();
  const bottom = useSafeAreaInsetsDefault().bottom;
  const obj2 = { visible: flag, glow: true, style: items, children: items5 };
  items = [tmp.wrapper, ];
  const obj3 = { paddingBottom: Math.max(bottom, QUEST_DOCK_EXPANDED_PADDING_BOTTOM) };
  items[1] = obj3;
  const obj4 = { style: tmp.rewardContentContainer, children: items4 };
  const obj5 = { style: tmp.rewardContentWrapper, children: items1 };
  const tmp6 = PremiumRewardGradientDefault;
  items1 = [hasOwnProperty(QuestDockBlurredContentBackgroundDefault, {}), ];
  const obj6 = { style: tmp.rewardContent, children: items2 };
  items2 = [rewardTile, ];
  let tmp8Result = null != premiumRewardPerkPill;
  const obj7 = { style: tmp.rewardContentCopy, children: items3 };
  if (tmp8Result) {
    const obj8 = { style: tmp.premiumRewardPerkPill, children: premiumRewardPerkPill };
    tmp8Result = tmp8(tmp7, obj8);
  }
  items3 = [tmp8Result, , ];
  const obj9 = { style: tmp.titleRow, children: hasOwnProperty(Text_Text.Text, { variant: "heading-md/medium", color: "mobile-text-heading-primary", children: title }) };
  items3[1] = hasOwnProperty(View, obj9);
  items3[2] = hasOwnProperty(Text_Text.Text, { color: "text-default", variant: "text-sm/normal", children: description });
  items2[1] = metroRequire(View, obj7);
  items1[1] = metroRequire(View, obj6);
  items4 = [metroRequire(View, obj5), ];
  let tmp8Result3 = null != contentBadge;
  if (tmp8Result3) {
    const obj10 = { style: tmp.contentBadge, children: contentBadge };
    tmp8Result3 = tmp8(tmp7, obj10);
  }
  items4[1] = tmp8Result3;
  items5 = [metroRequire(View, obj4), ];
  const obj11 = { style: tmp.questDockCtaWrapper, children: items6 };
  items6 = [, ];
  const obj12 = { style: tmp.questDockCtaSaparator };
  items6[0] = hasOwnProperty(View, obj12);
  const obj13 = { style: tmp.questDockCtaRow, children: items7 };
  items7 = [secondaryCta, ];
  if ("primary" === ctaButtonVariant) {
    const obj14 = { variant: "primary", grow: true, onPress: onCtaPress, loading: ctaLoading, icon: renderCtaIconResult, text: ctaText };
    renderCtaIconResult = undefined;
    const Button = tmp2(5281).Button;
    if (renderCtaIcon != null) {
      renderCtaIconResult = renderCtaIcon();
    }
    tmp8Result4 = tmp8(Button, obj14);
  } else {
    const obj15 = { style: tmp.questDockCta, onPress: onCtaPress, loading: ctaLoading, renderIcon: renderCtaIcon, text: ctaText, shineDisabled: !isQuestDockExpanded };
    tmp8Result4 = tmp8(tmp2(1177).ShinyButton, obj15);
  }
  items7[1] = tmp8Result4;
  items6[1] = metroRequire(View, obj13);
  items5[1] = metroRequire(View, obj11);
  return metroRequire(tmp6, obj2);
});
const result = size.fileFinishedImporting("modules/quests/native/QuestDock/QuestDockInsetHeaderBody.tsx");

export default memoResult;
export const QuestDockBodyRewardTile = function QuestDockBodyRewardTile(arg0) {
  let tmp;
  const obj = { height: PX_80, width: PX_80, style: tmp.rewardTile };
  tmp = closure_8();
  const tmp2 = QuestDockRewardTileDefault;
  const merged = Object.assign(arg0);
  return hasOwnProperty(tmp2, obj);
};
export const QuestDockBodyQuestRewardTile = function QuestDockBodyQuestRewardTile(arg0) {
  let tmp;
  const obj = { height: PX_80, width: PX_80, style: tmp.rewardTile };
  tmp = closure_8();
  const tmp2 = QuestRewardTileDefault;
  const merged = Object.assign(arg0);
  return hasOwnProperty(tmp2, obj);
};
