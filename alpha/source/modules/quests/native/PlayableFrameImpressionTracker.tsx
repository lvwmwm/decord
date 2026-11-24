// Module ID: 19257
// Function ID: 19258
// Name: PlayableFrameImpressionTracker
// Dependencies: [19, 16503, 21, 504, 13667, 6752, 6748, 2]
// Exports: default

// Module 19257 (PlayableFrameImpressionTracker)
import Fragment from "Fragment" /* 21 */;
import react from "react" /* 19 */;
import PlayableStore from "PlayableStore" /* 16503 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/quests/native/PlayableFrameImpressionTracker.tsx");

export default function PlayableFrameImpressionTracker(frameId) {
  frameId = frameId.frameId;
  const children = frameId.children;
  const items = [PlayableStore];
  const items1 = [frameId];
  const obj = frameId(children[3]);
  const stateFromStores = obj.useStateFromStores(items, () => PlayableStore.getPlayableForFrame(frameId), items1);
  let tmp4 = null;
  if (null != stateFromStores) {
    const QuestContentImpressionTrackerNative = tmp(tmp2[4]).QuestContentImpressionTrackerNative;
    tmp4 = <QuestContentImpressionTrackerNative adContentId={stateFromStores.id} adCreativeType={frameId(children[5]).AdCreativeType.PLAYABLE} questContent={frameId(children[6]).QuestContent.PLAYABLE_SHEET_MOBILE} sourceQuestContent={frameId(children[6]).QuestContent.QUEST_BAR_MOBILE} overrideVisibility>{function children() {
      return children;
    }}</QuestContentImpressionTrackerNative>;
  }
  return tmp4;
};
