// Module ID: 13943
// Function ID: 106724
// Name: BountiesModalEndedCtaButtons
// Dependencies: [33, 4130, 689, 10468, 3991, 4131, 4134, 13938, 4543, 10472, 6970, 4981, 6969, 1212, 2]
// Exports: default

// Module 13943 (BountiesModalEndedCtaButtons)
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_3;
let closure_4;
({ jsx: closure_3, jsxs: closure_4 } = jsxProd);
let closure_5 = _createForOfIteratorHelperLoose.createStyles(() => {
  let obj = {};
  obj = { gap: importDefault(689).space.PX_8 };
  obj.container = obj;
  return obj;
});
let closure_6 = { code: "function BountiesModalEndedCtaButtonsTsx1(){const{withTiming,visible,timingStandard}=this.__closure;return{opacity:withTiming(visible?1:0,timingStandard)};}" };
let result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/quests/native/BountiesModal/BountiesModalEndedCtaButtons.tsx");

export default function BountiesModalEndedCtaButtons(bounty) {
  let dependencyMap;
  let showCloseButton;
  bounty = bounty.bounty;
  let visible = bounty.visible;
  ({ sourceQuestContent: dependencyMap, showCloseButton } = bounty);
  if (showCloseButton === undefined) {
    showCloseButton = true;
  }
  let flag = bounty.disabled;
  if (flag === undefined) {
    flag = false;
  }
  let callback;
  let obj = bounty(10468);
  callback = obj.useGetQuestImpressionId();
  let obj1 = bounty(3991);
  const fn = function y() {
    const obj = {};
    let num = 0;
    if (visible) {
      num = 1;
    }
    obj.opacity = bounty(outer1_2[5]).withTiming(num, bounty(outer1_2[6]).timingStandard);
    return obj;
  };
  obj = { withTiming: bounty(4131).withTiming, visible, timingStandard: bounty(4134).timingStandard };
  fn.__closure = obj;
  fn.__workletHash = 11417131685254;
  fn.__initData = closure_6;
  const animatedStyle = obj1.useAnimatedStyle(fn);
  bounty(13938);
  if (visible) {
    obj = {};
    const items = [tmp.container, animatedStyle];
    obj.style = items;
    obj1 = {
      variant: "primary-overlay",
      text: tmp4.buttonLabel,
      size: "lg",
      disabled: flag,
      onPress() {
          let obj = bounty(outer1_2[9]);
          obj = { adContentId: bounty.id, adCreativeType: bounty(outer1_2[10]).AdCreativeType.BOUNTY, cta: bounty.cta };
          obj = { content: bounty(outer1_2[11]).QuestContent.VIDEO_MODAL_END_CARD, ctaContent: bounty(outer1_2[12]).QuestContentCTA.OPEN_GAME_LINK, impressionId: callback(), sourceQuestContent: closure_2 };
          const result = obj.openAdGameLinkDirectly(obj, obj);
        }
    };
    const items1 = [callback(bounty(4543).Button, obj1), ];
    let tmp10 = null;
    if (showCloseButton) {
      const obj2 = { variant: "secondary-overlay", text: null, size: "lg" };
      const intl = bounty(1212).intl;
      obj2.text = intl.string(bounty(1212).t.cpT0Cq);
      obj2.disabled = flag;
      obj2.onPress = bounty.onClose;
      tmp10 = callback(bounty(4543).Button, obj2);
    }
    items1[1] = tmp10;
    obj.children = items1;
    visible = closure_4(visible(3991).View, obj);
    const tmp5 = closure_4;
  }
  return visible;
};
