// Module ID: 17484
// Function ID: 17485
// Name: QuestDockUnenrolledBackground
// Dependencies: [19, 17382, 21, 17411, 17377, 5724, 575, 17485, 2]

// Module 17484 (QuestDockUnenrolledBackground)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import useToken from "useToken" /* 5724 */;
import QuestHooks from "QuestHooks" /* 17377 */;
import QuestDockConstants from "QuestDockConstants" /* 17382 */;
import QuestDockCreativeContext from "QuestDockCreativeContext" /* 17411 */;
import QuestDockVideoBackgroundDefault from "QuestDockVideoBackground" /* 17485 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const expandedHeight = QuestDockConstants.QUEST_DOCK_LANDSCAPE_MEDIA_EXPANDED_HEIGHT;
const jsx = Fragment.jsx;
const memoResult = react.memo(function QuestDockUnenrolledBackground() {
  let mimetype;
  let staticUrl;
  let url;
  let videoAsset;
  const obj = QuestDockCreativeContext;
  const questDockQuest = obj.useQuestDockQuest();
  const obj2 = QuestHooks;
  const questDockHeroAsset = obj2.useQuestDockHeroAsset(questDockQuest);
  ({ videoAsset, staticUrl } = questDockHeroAsset);
  const obj3 = useToken;
  const token = obj3.useToken(nativeDefault.colors.CARD_BACKGROUND_DEFAULT);
  const obj4 = { expandedHeight, imageUrl: staticUrl, videoUrl: url, videoMimetype: mimetype, gradientBaseColor: token };
  url = undefined;
  const tmp4 = jsx;
  const tmp5 = QuestDockVideoBackgroundDefault;
  if (videoAsset != null) {
    url = videoAsset.url;
  }
  mimetype = undefined;
  if (videoAsset != null) {
    mimetype = videoAsset.mimetype;
  }
  if (mimetype == null) {
    mimetype = null;
  }
  return tmp4(tmp5, obj4);
});
const result = size.fileFinishedImporting("modules/quests/native/QuestDock/QuestDockUnenrolledBackground.tsx");

export default memoResult;
