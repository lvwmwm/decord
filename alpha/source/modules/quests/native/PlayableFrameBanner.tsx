// Module ID: 19370
// Function ID: 19371
// Name: PlayableFrameBanner
// Dependencies: [19, 16624, 21, 575, 5012, 1628, 504, 9886, 9888, 6847, 8350, 6843, 16515, 16514, 2]
// Exports: default

// Module 19370 (PlayableFrameBanner)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import QuestTypes from "QuestTypes" /* 6843 */;
import AdCreativeType from "AdCreativeType" /* 6847 */;
import AnalyticsTypes from "AnalyticsTypes" /* 8350 */;
import QuestPlatformUtils from "QuestPlatformUtils" /* 9888 */;
import react from "react" /* 19 */;
import PlayableStore from "PlayableStore" /* 16624 */;
import createStyles from "createStyles" /* 5012 */;
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
  let callback;
  const tmp3 = closure_7(stateFromStores(getQuestImpressionId[5])().bottom);
  let obj = frameId(getQuestImpressionId[6]);
  const items = [PlayableStore];
  const items1 = [frameId];
  const tmp = stateFromStores;
  stateFromStores = obj.useStateFromStores(items, () => PlayableStore.getPlayableForFrame(frameId), items1);
  let obj2 = frameId(getQuestImpressionId[7]);
  getQuestImpressionId = obj2.useGetQuestImpressionId();
  const items2 = [stateFromStores, getQuestImpressionId];
  callback = callback.useCallback((content) => {
    if (null != stateFromStores) {
      const obj = { adContentId: stateFromStores.id, adCreativeType: AdCreativeType.AdCreativeType.PLAYABLE, cta: stateFromStores.cta };
      const openAdGameLinkDirectly = QuestPlatformUtils.openAdGameLinkDirectly;
      QuestPlatformUtils;
      const obj2 = { content, ctaContent: AnalyticsTypes.QuestContentCTA.OPEN_GAME_LINK, impressionId: getQuestImpressionId(), sourceQuestContent: QuestTypes.QuestContent.QUEST_BAR_MOBILE };
      const result = openAdGameLinkDirectly(obj, obj2);
    }
  }, items2);
  const items3 = [callback];
  [][0] = callback;
  const callback1 = callback.useCallback(() => {
    callback(QuestTypes.QuestContent.PLAYABLE_SHEET_MOBILE);
  }, items3);
  let tmp10 = null;
  const tmp4 = frameId;
  if (null != stateFromStores) {
    tmp(getQuestImpressionId[12]);
    tmp10 = <tmpResult style={tmp3.banner} ctaInfo={tmp4(getQuestImpressionId[13]).getAdvertiserCtaInfo(stateFromStores)} onContainerPress={callback1} onButtonPress={tmp9} />;
    const tmp4Result = tmp4(getQuestImpressionId[13]);
  }
  return tmp10;
};
