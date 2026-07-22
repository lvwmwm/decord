// Module ID: 13829
// Function ID: 104568
// Name: BountiesModalEndedCtaButtons
// Dependencies: []
// Exports: default

// Module 13829 (BountiesModalEndedCtaButtons)
const _module = require(dependencyMap[0]);
({ jsx: closure_3, jsxs: closure_4 } = _module);
const _module1 = require(dependencyMap[1]);
let closure_5 = _module1.createStyles(() => {
  let obj = {};
  obj = { gap: importDefault(dependencyMap[2]).space.PX_8 };
  obj.container = obj;
  return obj;
});
let closure_6 = { code: "function BountiesModalEndedCtaButtonsTsx1(){const{withTiming,visible,timingStandard}=this.__closure;return{opacity:withTiming(visible?1:0,timingStandard)};}" };
const _module2 = require(dependencyMap[14]);
const result = _module2.fileFinishedImporting("modules/quests/native/BountiesModal/BountiesModalEndedCtaButtons.tsx");

export default function BountiesModalEndedCtaButtons(bounty) {
  let showCloseButton;
  const require = bounty.bounty;
  let visible = bounty.visible;
  const importDefault = visible;
  ({ sourceQuestContent: closure_2, showCloseButton } = bounty);
  if (showCloseButton === undefined) {
    showCloseButton = true;
  }
  let flag = bounty.disabled;
  if (flag === undefined) {
    flag = false;
  }
  let callback;
  let obj = require(dependencyMap[3]);
  callback = obj.useGetQuestImpressionId();
  let obj1 = require(dependencyMap[4]);
  const fn = function y() {
    const obj = {};
    let num = 0;
    if (visible) {
      num = 1;
    }
    obj.opacity = bounty(closure_2[5]).withTiming(num, bounty(closure_2[6]).timingStandard);
    return obj;
  };
  obj = { withTiming: require(dependencyMap[5]).withTiming, visible, timingStandard: require(dependencyMap[6]).timingStandard };
  fn.__closure = obj;
  fn.__workletHash = 11417131685254;
  fn.__initData = closure_6;
  const animatedStyle = obj1.useAnimatedStyle(fn);
  require(dependencyMap[7]);
  if (visible) {
    obj = {};
    const items = [tmp.container, animatedStyle];
    obj.style = items;
    obj1 = {
      text: tmp4.buttonLabel,
      disabled: flag,
      onPress() {
          let obj = bounty(closure_2[9]);
          obj = { adContentId: bounty.id, adCreativeType: bounty(closure_2[10]).AdCreativeType.BOUNTY, cta: bounty.cta };
          obj = { content: bounty(closure_2[11]).QuestContent.VIDEO_MODAL_END_CARD, ctaContent: bounty(closure_2[12]).QuestContentCTA.OPEN_GAME_LINK, impressionId: callback(), sourceQuestContent: closure_2 };
          const result = obj.openAdGameLinkDirectly(obj, obj);
        }
    };
    const items1 = [callback(require(dependencyMap[8]).Button, obj1), ];
    let tmp10 = null;
    if (showCloseButton) {
      const obj2 = { responsive: null, handleToggleFollowForumPost: 0, getNextAssetPage: 491 };
      const intl = require(dependencyMap[13]).intl;
      obj2.text = intl.string(require(dependencyMap[13]).t.cpT0Cq);
      obj2.disabled = flag;
      obj2.onPress = bounty.onClose;
      tmp10 = callback(require(dependencyMap[8]).Button, obj2);
    }
    items1[1] = tmp10;
    obj.children = items1;
    visible = closure_4(importDefault(dependencyMap[4]).View, obj);
    const tmp5 = closure_4;
  }
  return visible;
};
