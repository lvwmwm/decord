// Module ID: 17228
// Function ID: 17229
// Name: BountiesModalEndedCtaButtons
// Dependencies: [21, 5170, 575, 9823, 1652, 5400, 5403, 17223, 5788, 9825, 6868, 6866, 7970, 1113, 2]
// Exports: default

// Module 17228 (BountiesModalEndedCtaButtons)
import nativeDefault from "native" /* 575 */;
import _modDef1652 from "module_1652" /* 1652 */;
import QuestContent from "QuestContent" /* 6866 */;
import AdCreativeType from "AdCreativeType" /* 6868 */;
import AnalyticsTypes from "AnalyticsTypes" /* 7970 */;
import QuestPlatformUtils from "QuestPlatformUtils" /* 9825 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5170 */;
import size from "module_2" /* 2 */;

let dependencyMap;

let c3;
let closure_4;
({ jsx: c3, jsxs: closure_4 } = Fragment);
let closure_5 = createStyles.createStyles(() => {
  const obj = { container: { gap: nativeDefault.space.PX_8 } };
  ({ gap: nativeDefault.space.PX_8 });
  return obj;
});
let closure_6 = { code: "(function BountiesModalEndedCtaButtonsTsx1(){let[withTiming,visible,timingStandard]=this.__closure;return{opacity:withTiming(visible?1:0,timingStandard)};})" };
let result = size.fileFinishedImporting("modules/quests/native/BountiesModal/BountiesModalEndedCtaButtons.tsx");

export default function BountiesModalEndedCtaButtons(bounty) {
  let closure_2;
  let intl;
  let items2;
  let items3;
  let showCloseButton;
  let sourceQuestContent;
  let tmp5;
  let tmp6;
  let tmp7;
  let tmp8;
  let visible;
  bounty = bounty.bounty;
  ({ visible, sourceQuestContent: importDefault, showCloseButton } = bounty);
  const onClose = bounty.onClose;
  if (showCloseButton === undefined) {
    showCloseButton = true;
  }
  let flag = bounty.disabled;
  if (flag === undefined) {
    flag = false;
  }
  let tmp = closure_5();
  let obj = bounty(9823);
  dependencyMap = obj.useGetQuestImpressionId();
  const items = [closure_6, , , ];
  const useAnimatedStyle = bounty(1652).useAnimatedStyle;
  bounty(1652);
  items[1] = bounty(5400).withTiming;
  items[2] = visible;
  items[3] = bounty(5403).timingStandard;
  let c0;
  let c1;
  let c2;
  [tmp5, tmp6, tmp7, tmp8] = items;
  class BountiesModalEndedCtaButtonsTsx1 {
    constructor() {
      let num = 0;
      const tmp = c0;
      if (c1) {
        num = 1;
      }
      const obj = { opacity: tmp(num, c2) };
      return obj;
    }
  }
  const items1 = [tmp6, tmp7, tmp8];
  BountiesModalEndedCtaButtonsTsx1.__closure = items1;
  BountiesModalEndedCtaButtonsTsx1.__workletHash = 17030874897727;
  BountiesModalEndedCtaButtonsTsx1.__initData = tmp5;
  const animatedStyle = useAnimatedStyle(BountiesModalEndedCtaButtonsTsx1);
  bounty(17223);
  if (visible) {
    let obj2 = { style: items2, children: items3 };
    items2 = [tmp.container, animatedStyle];
    const View = _modDef1652.View;
    const obj3 = {
      variant: "primary-overlay",
      text: tmp11.buttonLabel,
      size: "lg",
      disabled: flag,
      onPress() {
          const openAdGameLinkDirectly = QuestPlatformUtils.openAdGameLinkDirectly;
          const obj = { adContentId: bounty.id, adCreativeType: AdCreativeType.AdCreativeType.BOUNTY, cta: bounty.cta };
          const obj2 = { content: QuestContent.QuestContent.VIDEO_MODAL_END_CARD, ctaContent: AnalyticsTypes.QuestContentCTA.OPEN_GAME_LINK, impressionId: closure_2(), sourceQuestContent: importDefault };
          const result = openAdGameLinkDirectly(obj, obj2);
        }
    };
    items3 = [closure_3(bounty(5788).Button, obj3), ];
    let tmp14Result = null;
    const tmp12 = closure_4;
    const tmp14 = closure_3;
    if (showCloseButton) {
      const obj4 = { variant: "secondary-overlay", text: intl.string(bounty(1113).t.cpT0Cq), size: "lg", disabled: flag, onPress: onClose };
      const Button = tmp2(5788).Button;
      intl = tmp2(1113).intl;
      tmp14Result = tmp14(Button, obj4);
    }
    items3[1] = tmp14Result;
    visible = tmp12(View, obj2);
  }
  return visible;
};
