// Module ID: 17424
// Function ID: 17425
// Name: QuestDockPlayableBody
// Dependencies: [19, 6916, 21, 17389, 17335, 17304, 17311, 9867, 7462, 9834, 9837, 6923, 8011, 6919, 11887, 9869, 17407, 9857, 17421, 1113, 8168, 15405, 2]

// Module 17424 (QuestDockPlayableBody)
import Fragment from "Fragment" /* 21 */;
import QuestConstants from "QuestConstants" /* 6916 */;
import QuestTypes from "QuestTypes" /* 6919 */;
import AdCreativeType from "AdCreativeType" /* 6923 */;
import AnalyticsTypes from "AnalyticsTypes" /* 8011 */;
import captureAdUserAction from "captureAdUserAction" /* 9834 */;
import captureAdUserActionTypes from "captureAdUserActionTypes" /* 9837 */;
import QuestPlatformUtils from "QuestPlatformUtils" /* 9869 */;
import GamesActionCreatorsDefault from "GamesActionCreators" /* 11887 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const QuestDockMode = QuestConstants.QuestDockMode;
const jsx = Fragment.jsx;
const memoResult = react.memo(function QuestDockPlayableBody() {
  let analyticsLocations;
  let getQuestImpressionId;
  let questDockPlayable;
  let setRestingQuestDockMode;
  let tmp = setRestingQuestDockMode;
  const isRendered = analyticsLocations.useContext(setRestingQuestDockMode(getQuestImpressionId[3])).isRendered;
  let obj = questDockPlayable(getQuestImpressionId[4]);
  questDockPlayable = obj.useQuestDockPlayable();
  let obj2 = questDockPlayable(getQuestImpressionId[5]);
  let isQuestDockExpanded = obj2.useIsQuestDockExpanded();
  setRestingQuestDockMode = analyticsLocations.useContext(questDockPlayable(getQuestImpressionId[6]).QuestDockExternalCoordinationContext).setRestingQuestDockMode;
  let obj3 = questDockPlayable(getQuestImpressionId[7]);
  getQuestImpressionId = obj3.useGetQuestImpressionId();
  analyticsLocations = setRestingQuestDockMode(getQuestImpressionId[8])().analyticsLocations;
  const items = [, , , , ];
  ({ id: arr[0], applicationId: arr[1] } = questDockPlayable);
  items[2] = analyticsLocations;
  items[3] = getQuestImpressionId;
  items[4] = setRestingQuestDockMode;
  const items1 = [, , ];
  ({ id: arr2[0], cta: arr2[1] } = questDockPlayable);
  items1[2] = getQuestImpressionId;
  const callback = analyticsLocations.useCallback(() => {
    const obj = captureAdUserAction;
    const obj2 = { type: captureAdUserActionTypes.AdUserActionType.CLICK_INTERNAL, adCreativeType: AdCreativeType.AdCreativeType.PLAYABLE, adCreativeId: questDockPlayable.id, questContentCTA: AnalyticsTypes.QuestContentCTA.LAUNCH_MOBILE_ACTIVITY, surfaceId: QuestTypes.QuestContent.QUEST_BAR_MOBILE, sourceQuestContent: QuestTypes.QuestContent.QUEST_BAR_MOBILE, impressionId: getQuestImpressionId() };
    obj.captureAdUserAction(obj2);
    const obj3 = GamesActionCreatorsDefault;
    const obj4 = { applicationId: questDockPlayable.applicationId, analyticsLocations };
    obj3.launch(obj4);
    setRestingQuestDockMode(QuestDockMode.COLLAPSED);
  }, items);
  const callback1 = analyticsLocations.useCallback(() => {
    const openAdGameLinkDirectly = QuestPlatformUtils.openAdGameLinkDirectly;
    const obj = { adContentId: questDockPlayable.id, adCreativeType: AdCreativeType.AdCreativeType.PLAYABLE, cta: questDockPlayable.cta };
    const obj2 = { content: QuestTypes.QuestContent.QUEST_BAR_MOBILE, ctaContent: AnalyticsTypes.QuestContentCTA.OPEN_GAME_LINK, impressionId: getQuestImpressionId(), sourceQuestContent: QuestTypes.QuestContent.QUEST_BAR_MOBILE };
    const result = openAdGameLinkDirectly(obj, obj2);
  }, items1);
  setRestingQuestDockMode(getQuestImpressionId[16]);
  const QuestDockBodyRewardTile = questDockPlayable(getQuestImpressionId[16]).QuestDockBodyRewardTile;
  let tmp11 = !isQuestDockExpanded;
  if (isQuestDockExpanded) {
    tmp11 = !isRendered;
  }
  if (isQuestDockExpanded) {
    isQuestDockExpanded = isRendered;
  }
  const intl = tmp3(tmp2[19]).intl;
  const intl2 = tmp3(tmp2[19]).intl;
  ({ variant: "secondary-overlay", size: "md", icon: tmp(getQuestImpressionId[21]), accessibilityLabel: questDockPlayable.cta.buttonLabel, onPress: callback1 });
  const IconButton = tmp3(tmp2[20]).IconButton;
  return <tmp10 rewardTile={<QuestDockBodyRewardTile assetUrl={setRestingQuestDockMode(getQuestImpressionId[17])} isAnimatedAsset paused={tmp11} withAnimation={isQuestDockExpanded} />} contentBadge={jsx(tmp(getQuestImpressionId[18]), {})} title={questDockPlayable.productName} description={intl.string(questDockPlayable(getQuestImpressionId[19]).t["1uzE2S"])} ctaText={intl2.string(questDockPlayable(getQuestImpressionId[19]).t.U7cCLU)} onCtaPress={callback} ctaButtonVariant="primary" secondaryCta={null} />;
});
let result = size.fileFinishedImporting("modules/quests/native/QuestDock/QuestDockPlayableBody.tsx");

export default memoResult;
