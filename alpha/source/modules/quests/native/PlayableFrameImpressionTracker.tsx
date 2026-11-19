// Module ID: 19267
// Function ID: 19268
// Name: PlayableFrameImpressionTracker
// Dependencies: [19, 16525, 21, 504, 13666, 6444, 6440, 2]
// Exports: default

// Module 19267 (PlayableFrameImpressionTracker)
import Fragment from "Fragment" /* 21 */;
import react from "react" /* 19 */;
import PlayableStore from "PlayableStore" /* 16525 */;
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
    tmp4 = <QuestContentImpressionTrackerNative adContentId={stateFromStores.id} adCreativeType={frameId(children[5]).AdCreativeType.PLAYABLE} questContent={frameId(children[6]).QuestContent.RUNNING_ACTIVITY} sourceQuestContent={frameId(children[6]).QuestContent.QUEST_BAR_MOBILE} overrideVisibility>{function children() {
      return children;
    }}</QuestContentImpressionTrackerNative>;
  }
  return tmp4;
};
