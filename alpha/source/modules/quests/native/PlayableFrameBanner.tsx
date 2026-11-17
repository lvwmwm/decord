// Module ID: 20001
// Function ID: 20002
// Name: PlayableFrameBanner
// Dependencies: [19, 17732, 21, 5310, 1630, 504, 10615, 6969, 6965, 8845, 17623, 17622, 2]
// Exports: default

// Module 20001 (PlayableFrameBanner)
import Fragment from "Fragment" /* 21 */;
import QuestTypes from "QuestTypes" /* 6965 */;
import AdCreativeType from "AdCreativeType" /* 6969 */;
import AnalyticsTypes from "AnalyticsTypes" /* 8845 */;
import QuestPlatformUtils from "QuestPlatformUtils" /* 10615 */;
import react from "react" /* 19 */;
import PlayableStore from "PlayableStore" /* 17732 */;
import createStyles from "createStyles" /* 5310 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let closure_6 = createStyles.createStyles((bottom) => {
  const obj = { banner: obj2 };
  return obj;
});
let result = size.fileFinishedImporting("modules/quests/native/PlayableFrameBanner.tsx");

export default function PlayableFrameBanner(frameId) {
  frameId = frameId.frameId;
  let stateFromStores;
  const tmp4 = frameId;
  const tmp3 = closure_6(stateFromStores(1630)().bottom);
  let obj = frameId(504);
  const items = [PlayableStore];
  const items1 = [frameId];
  const tmp = stateFromStores;
  stateFromStores = obj.useStateFromStores(items, () => PlayableStore.getPlayableForFrame(frameId), items1);
  const items2 = [stateFromStores];
  const callback = react.useCallback(() => {
    if (null != stateFromStores) {
      const obj = { adContentId: stateFromStores.id, adCreativeType: AdCreativeType.AdCreativeType.PLAYABLE, cta: stateFromStores.cta };
      const openAdGameLinkDirectly = QuestPlatformUtils.openAdGameLinkDirectly;
      QuestPlatformUtils;
      const obj2 = { content: QuestTypes.QuestContent.RUNNING_ACTIVITY, ctaContent: AnalyticsTypes.QuestContentCTA.OPEN_GAME_LINK, sourceQuestContent: QuestTypes.QuestContent.QUEST_BAR_MOBILE };
      const result = openAdGameLinkDirectly(obj, obj2);
    }
  }, items2);
  let tmp7 = null;
  if (null != stateFromStores) {
    tmp(17623);
    tmp7 = <tmpResult style={tmp3.banner} ctaInfo={tmp4(17622).getAdvertiserCtaInfo(stateFromStores)} onContainerPress={callback} onButtonPress={callback} />;
    const tmp4Result = tmp4(17622);
  }
  return tmp7;
};
