// Module ID: 19268
// Function ID: 19269
// Name: PlayableFrameBanner
// Dependencies: [19, 16525, 21, 575, 4792, 1630, 504, 9873, 9875, 6444, 6440, 8311, 16416, 16415, 2]
// Exports: default

// Module 19268 (PlayableFrameBanner)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import QuestTypes from "QuestTypes" /* 6440 */;
import AdCreativeType from "AdCreativeType" /* 6444 */;
import AnalyticsTypes from "AnalyticsTypes" /* 8311 */;
import QuestPlatformUtils from "QuestPlatformUtils" /* 9875 */;
import react from "react" /* 19 */;
import PlayableStore from "PlayableStore" /* 16525 */;
import createStyles from "createStyles" /* 4792 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const PX_32 = nativeDefault.space.PX_32;
let closure_7 = createStyles.createStyles((arg0) => {
  const obj = { banner: { bottom: Math.max(arg0, PX_32), paddingBottom: nativeDefault.space.PX_0, paddingHorizontal: nativeDefault.space.PX_24 } };
  ({ bottom: Math.max(arg0, PX_32), paddingBottom: nativeDefault.space.PX_0, paddingHorizontal: nativeDefault.space.PX_24 });
  return obj;
});
let result = size.fileFinishedImporting("modules/quests/native/PlayableFrameBanner.tsx");

export default function PlayableFrameBanner(frameId) {
  frameId = frameId.frameId;
  let stateFromStores;
  let getQuestImpressionId;
  const tmp4 = frameId;
  const tmp3 = closure_7(stateFromStores(getQuestImpressionId[5])().bottom);
  let obj = frameId(getQuestImpressionId[6]);
  const items = [PlayableStore];
  const items1 = [frameId];
  const tmp = stateFromStores;
  stateFromStores = obj.useStateFromStores(items, () => PlayableStore.getPlayableForFrame(frameId), items1);
  let obj2 = frameId(getQuestImpressionId[7]);
  getQuestImpressionId = obj2.useGetQuestImpressionId();
  const items2 = [stateFromStores, getQuestImpressionId];
  const callback = react.useCallback(() => {
    if (null != stateFromStores) {
      const obj = { adContentId: stateFromStores.id, adCreativeType: AdCreativeType.AdCreativeType.PLAYABLE, cta: stateFromStores.cta };
      const openAdGameLinkDirectly = QuestPlatformUtils.openAdGameLinkDirectly;
      QuestPlatformUtils;
      const obj2 = { content: QuestTypes.QuestContent.RUNNING_ACTIVITY, ctaContent: AnalyticsTypes.QuestContentCTA.OPEN_GAME_LINK, impressionId: getQuestImpressionId(), sourceQuestContent: QuestTypes.QuestContent.QUEST_BAR_MOBILE };
      const result = openAdGameLinkDirectly(obj, obj2);
    }
  }, items2);
  let tmp8 = null;
  if (null != stateFromStores) {
    tmp(getQuestImpressionId[12]);
    tmp8 = <tmpResult style={tmp3.banner} ctaInfo={tmp4(getQuestImpressionId[13]).getAdvertiserCtaInfo(stateFromStores)} onContainerPress={callback} onButtonPress={callback} />;
    const tmp4Result = tmp4(getQuestImpressionId[13]);
  }
  return tmp8;
};
