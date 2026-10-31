// Module ID: 16956
// Function ID: 16957
// Name: BountiesModalEndedCtaButtons
// Dependencies: [21, 5014, 575, 9717, 5095, 5254, 5257, 16951, 5634, 9719, 6788, 6786, 7871, 1113, 2]
// Exports: default

// Module 16956 (BountiesModalEndedCtaButtons)
import nativeDefault from "native" /* 575 */;
import timing from "timing" /* 5254 */;
import QuestContent from "QuestContent" /* 6786 */;
import AdCreativeType from "AdCreativeType" /* 6788 */;
import AnalyticsTypes from "AnalyticsTypes" /* 7871 */;
import QuestPlatformUtils from "QuestPlatformUtils" /* 9719 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
let tmp;
const timingPresets = tmp(5257);
({ jsx: c3, jsxs: closure_4 } = Fragment);
let closure_5 = createStyles.createStyles(() => {
  const obj = { container: { gap: nativeDefault.space.PX_8 } };
  ({ gap: nativeDefault.space.PX_8 });
  return obj;
});
const __initData = { code: "function BountiesModalEndedCtaButtonsTsx1(){const{withTiming,visible,timingStandard}=this.__closure;return{opacity:withTiming(visible?1:0,timingStandard)};}" };
let result = size.fileFinishedImporting("modules/quests/native/BountiesModal/BountiesModalEndedCtaButtons.tsx");

export default function BountiesModalEndedCtaButtons(bounty) {
  let intl;
  let items;
  let items1;
  let showCloseButton;
  let sourceQuestContent;
  bounty = bounty.bounty;
  let visible = bounty.visible;
  ({ sourceQuestContent: dependencyMap, showCloseButton } = bounty);
  const onClose = bounty.onClose;
  if (showCloseButton === undefined) {
    showCloseButton = true;
  }
  let flag = bounty.disabled;
  if (flag === undefined) {
    flag = false;
  }
  let tmp = closure_5();
  let obj = bounty(9717);
  let closure_3 = obj.useGetQuestImpressionId();
  let obj2 = bounty(5095);
  const fn = function y() {
    let num = 0;
    const withTiming = timing.withTiming;
    timing;
    if (visible) {
      num = 1;
    }
    const obj = { opacity: withTiming(num, timingPresets.timingStandard) };
    return obj;
  };
  fn.__closure = { withTiming: bounty(5254).withTiming, visible, timingStandard: bounty(5257).timingStandard };
  fn.__workletHash = 11417131685254;
  fn.__initData = __initData;
  ({ withTiming: bounty(5254).withTiming, visible, timingStandard: bounty(5257).timingStandard });
  const animatedStyle = obj2.useAnimatedStyle(fn);
  bounty(16951);
  if (visible) {
    const obj4 = { style: items, children: items1 };
    items = [tmp.container, animatedStyle];
    const View = visible(5095).View;
    const obj5 = {
      variant: "primary-overlay",
      text: tmp6.buttonLabel,
      size: "lg",
      disabled: flag,
      onPress() {
          const openAdGameLinkDirectly = QuestPlatformUtils.openAdGameLinkDirectly;
          const obj = { adContentId: bounty.id, adCreativeType: AdCreativeType.AdCreativeType.BOUNTY, cta: bounty.cta };
          const obj2 = { content: QuestContent.QuestContent.VIDEO_MODAL_END_CARD, ctaContent: AnalyticsTypes.QuestContentCTA.OPEN_GAME_LINK, impressionId: closure_3(), sourceQuestContent: dependencyMap };
          const result = openAdGameLinkDirectly(obj, obj2);
        }
    };
    items1 = [closure_3(tmp2(5634).Button, obj5), ];
    let tmp9Result = null;
    const tmp7 = closure_4;
    const tmp9 = closure_3;
    if (showCloseButton) {
      const obj6 = { variant: "secondary-overlay", text: intl.string(bounty(1113).t.cpT0Cq), size: "lg", disabled: flag, onPress: onClose };
      const Button = tmp2(5634).Button;
      intl = tmp2(1113).intl;
      tmp9Result = tmp9(Button, obj6);
    }
    items1[1] = tmp9Result;
    visible = tmp7(View, obj4);
  }
  return visible;
};
