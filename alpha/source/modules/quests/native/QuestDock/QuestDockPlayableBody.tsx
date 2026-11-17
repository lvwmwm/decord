// Module ID: 17860
// Function ID: 17861
// Name: QuestDockPlayableBody
// Dependencies: [19, 6962, 21, 17823, 17767, 17733, 17740, 10613, 7928, 10579, 10582, 6969, 8845, 6965, 17861, 12855, 10615, 17846, 10602, 17857, 1113, 7999, 11054, 2]

// Module 17860 (QuestDockPlayableBody)
import Fragment from "Fragment" /* 21 */;
import QuestConstants from "QuestConstants" /* 6962 */;
import QuestTypes from "QuestTypes" /* 6965 */;
import AdCreativeType from "AdCreativeType" /* 6969 */;
import AnalyticsTypes from "AnalyticsTypes" /* 8845 */;
import captureAdUserAction from "captureAdUserAction" /* 10579 */;
import captureAdUserActionTypes from "captureAdUserActionTypes" /* 10582 */;
import QuestPlatformUtils from "QuestPlatformUtils" /* 10615 */;
import GamesActionCreatorsDefault from "GamesActionCreators" /* 12855 */;
import PlayableActionCreators from "PlayableActionCreators" /* 17861 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const QuestDockMode = QuestConstants.QuestDockMode;
const jsx = Fragment.jsx;
const memoResult = react.memo(function QuestDockPlayableBody() {
  let analyticsLocations;
  let getQuestImpressionId;
  let questDockPlayable;
  let setRestingQuestDockMode;
  let tmp11;
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
  const items = [questDockPlayable, analyticsLocations, getQuestImpressionId, setRestingQuestDockMode];
  const items1 = [, , ];
  ({ id: arr2[0], cta: arr2[1] } = questDockPlayable);
  items1[2] = getQuestImpressionId;
  const callback = analyticsLocations.useCallback(() => {
    const obj = captureAdUserAction;
    const obj2 = { type: captureAdUserActionTypes.AdUserActionType.CLICK_INTERNAL, adCreativeType: AdCreativeType.AdCreativeType.PLAYABLE, adCreativeId: questDockPlayable.id, questContentCTA: AnalyticsTypes.QuestContentCTA.LAUNCH_MOBILE_ACTIVITY, surfaceId: QuestTypes.QuestContent.QUEST_BAR_MOBILE, sourceQuestContent: QuestTypes.QuestContent.QUEST_BAR_MOBILE, impressionId: getQuestImpressionId() };
    obj.captureAdUserAction(obj2);
    const obj3 = PlayableActionCreators;
    obj3.recordPlayableLaunch(questDockPlayable);
    const obj4 = GamesActionCreatorsDefault;
    const obj5 = { applicationId: questDockPlayable.applicationId, analyticsLocations };
    obj4.launch(obj5);
    setRestingQuestDockMode(QuestDockMode.COLLAPSED);
  }, items);
  const callback1 = analyticsLocations.useCallback(() => {
    const openAdGameLinkDirectly = QuestPlatformUtils.openAdGameLinkDirectly;
    const obj = { adContentId: questDockPlayable.id, adCreativeType: AdCreativeType.AdCreativeType.PLAYABLE, cta: questDockPlayable.cta };
    const obj2 = { content: QuestTypes.QuestContent.QUEST_BAR_MOBILE, ctaContent: AnalyticsTypes.QuestContentCTA.OPEN_GAME_LINK, impressionId: getQuestImpressionId(), sourceQuestContent: QuestTypes.QuestContent.QUEST_BAR_MOBILE };
    const result = openAdGameLinkDirectly(obj, obj2);
  }, items1);
  let obj4 = { assetUrl: setRestingQuestDockMode(getQuestImpressionId[18]), isAnimatedAsset: true, paused: tmp11, withAnimation: isQuestDockExpanded };
  setRestingQuestDockMode(getQuestImpressionId[17]);
  const QuestDockBodyRewardTile = questDockPlayable(getQuestImpressionId[17]).QuestDockBodyRewardTile;
  tmp11 = !isQuestDockExpanded;
  if (isQuestDockExpanded) {
    tmp11 = !isRendered;
  }
  if (isQuestDockExpanded) {
    isQuestDockExpanded = isRendered;
  }
  const intl = tmp3(tmp2[20]).intl;
  const intl2 = tmp3(tmp2[20]).intl;
  ({ variant: "secondary-overlay", size: "md", icon: tmp(getQuestImpressionId[22]), accessibilityLabel: questDockPlayable.cta.buttonLabel, onPress: callback1 });
  const IconButton = tmp3(tmp2[21]).IconButton;
  return <tmp10 rewardTile={tmp9(QuestDockBodyRewardTile, obj4)} contentBadge={tmp9(tmp(tmp2[19]), {})} title={questDockPlayable.productName} description={intl.string(questDockPlayable(getQuestImpressionId[20]).t["1uzE2S"])} ctaText={intl2.string(questDockPlayable(getQuestImpressionId[20]).t.U7cCLU)} onCtaPress={callback} ctaButtonVariant="primary" secondaryCta={null} />;
});
let result = size.fileFinishedImporting("modules/quests/native/QuestDock/QuestDockPlayableBody.tsx");

export default memoResult;
