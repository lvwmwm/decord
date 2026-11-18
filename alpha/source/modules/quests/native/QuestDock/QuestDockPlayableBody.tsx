// Module ID: 16663
// Function ID: 16664
// Name: QuestDockPlayableBody
// Dependencies: [19, 6466, 21, 16627, 16571, 16535, 16542, 9894, 7431, 9860, 9863, 6473, 8342, 6469, 16664, 12149, 9896, 16649, 9883, 16660, 1113, 7502, 10336, 2]

// Module 16663 (QuestDockPlayableBody)
import Fragment from "Fragment" /* 21 */;
import QuestConstants from "QuestConstants" /* 6466 */;
import QuestTypes from "QuestTypes" /* 6469 */;
import AdCreativeType from "AdCreativeType" /* 6473 */;
import AnalyticsTypes from "AnalyticsTypes" /* 8342 */;
import captureAdUserAction from "captureAdUserAction" /* 9860 */;
import captureAdUserActionTypes from "captureAdUserActionTypes" /* 9863 */;
import QuestPlatformUtils from "QuestPlatformUtils" /* 9896 */;
import GamesActionCreatorsDefault from "GamesActionCreators" /* 12149 */;
import PlayableActionCreators from "PlayableActionCreators" /* 16664 */;
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
  const obj6 = { seconds: questDockPlayable.rewardTimerSeconds };
  ({ variant: "secondary-overlay", size: "md", icon: tmp(getQuestImpressionId[22]), accessibilityLabel: questDockPlayable.cta.buttonLabel, onPress: callback1 });
  const IconButton = tmp3(tmp2[21]).IconButton;
  return <tmp10 rewardTile={tmp9(QuestDockBodyRewardTile, obj4)} contentBadge={tmp9(tmp(tmp2[19]), {})} title={questDockPlayable.productName} description={intl.string(questDockPlayable(getQuestImpressionId[20]).t.vGP84Q)} ctaText={intl2.formatToPlainString(questDockPlayable(getQuestImpressionId[20]).t.dPT1o7, obj6)} onCtaPress={callback} ctaButtonVariant="primary" secondaryCta={null} />;
});
let result = size.fileFinishedImporting("modules/quests/native/QuestDock/QuestDockPlayableBody.tsx");

export default memoResult;
