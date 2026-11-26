// Module ID: 16611
// Function ID: 16612
// Name: QuestDockBountyBody
// Dependencies: [19, 6558, 21, 16576, 16520, 16484, 16491, 9996, 1112, 10621, 8427, 9961, 9964, 6565, 8430, 6561, 16329, 16331, 9998, 16599, 9984, 16612, 7591, 10381, 2]

// Module 16611 (QuestDockBountyBody)
import Fragment from "Fragment" /* 21 */;
import intl2 from "intl" /* 1112 */;
import QuestConstants from "QuestConstants" /* 6558 */;
import QuestTypes from "QuestTypes" /* 6561 */;
import AdCreativeType from "AdCreativeType" /* 6565 */;
import QuestTaskUtils from "QuestTaskUtils" /* 8427 */;
import AnalyticsTypes from "AnalyticsTypes" /* 8430 */;
import captureAdUserAction from "captureAdUserAction" /* 9961 */;
import captureAdUserActionTypes from "captureAdUserActionTypes" /* 9964 */;
import QuestPlatformUtils from "QuestPlatformUtils" /* 9998 */;
import MobileQuestVideoWatchCtaCopy from "MobileQuestVideoWatchCtaCopy" /* 10621 */;
import BountiesModalActionCreatorsDefault from "BountiesModalActionCreators" /* 16329 */;
import BountiesModalTypes from "BountiesModalTypes" /* 16331 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const QuestDockMode = QuestConstants.QuestDockMode;
const jsx = Fragment.jsx;
const memoResult = react.memo(function QuestDockBountyBody() {
  let IconButton;
  let getQuestImpressionId;
  let intl;
  let obj6;
  let questDockBounty;
  let setRestingQuestDockMode;
  let tmp12;
  let tmp = setRestingQuestDockMode;
  const isRendered = react.useContext(setRestingQuestDockMode(getQuestImpressionId[3])).isRendered;
  const tmp3 = questDockBounty;
  let obj = questDockBounty(getQuestImpressionId[4]);
  questDockBounty = obj.useQuestDockBounty();
  let obj2 = questDockBounty(getQuestImpressionId[5]);
  let isQuestDockExpanded = obj2.useIsQuestDockExpanded();
  setRestingQuestDockMode = react.useContext(questDockBounty(getQuestImpressionId[6]).QuestDockExternalCoordinationContext).setRestingQuestDockMode;
  let obj3 = questDockBounty(getQuestImpressionId[7]);
  getQuestImpressionId = obj3.useGetQuestImpressionId();
  const items = [questDockBounty.videoDurationSeconds];
  const items1 = [questDockBounty, getQuestImpressionId, setRestingQuestDockMode];
  const memo = react.useMemo(() => {
    let stringResult;
    let num = questDockBounty.videoDurationSeconds;
    if (num == null) {
      num = 0;
    }
    if (num <= 0) {
      const intl = intl2.intl;
      stringResult = intl.string(intl2.t.kfks9Y);
    } else {
      const getBountyWatchCtaText = MobileQuestVideoWatchCtaCopy.getBountyWatchCtaText;
      MobileQuestVideoWatchCtaCopy;
      const obj2 = { progressSeconds: 0, targetSeconds: num };
      const obj = QuestTaskUtils;
      stringResult = getBountyWatchCtaText(obj.getWatchVideoTaskDetailsFromProgress(obj2));
    }
    return stringResult;
  }, items);
  const items2 = [, , ];
  ({ id: arr3[0], cta: arr3[1] } = questDockBounty);
  items2[2] = getQuestImpressionId;
  const callback = react.useCallback(() => {
    const obj = captureAdUserAction;
    const obj2 = { type: captureAdUserActionTypes.AdUserActionType.CLICK_INTERNAL, adCreativeType: AdCreativeType.AdCreativeType.BOUNTY, adCreativeId: questDockBounty.id, questContentCTA: AnalyticsTypes.QuestContentCTA.START_BOUNTY, surfaceId: QuestTypes.QuestContent.QUEST_BAR_MOBILE, sourceQuestContent: QuestTypes.QuestContent.QUEST_BAR_MOBILE, impressionId: getQuestImpressionId() };
    obj.captureAdUserAction(obj2);
    const obj3 = BountiesModalActionCreatorsDefault;
    const obj4 = { bountyId: questDockBounty.id, sourceQuestContent: QuestTypes.QuestContent.QUEST_BAR_MOBILE, variant: BountiesModalTypes.BountiesModalVariant.SINGLE_VIDEO, bounty: questDockBounty };
    obj3.showModal(obj4);
    setRestingQuestDockMode(QuestDockMode.COLLAPSED);
  }, items1);
  const callback1 = react.useCallback(() => {
    const openAdGameLinkDirectly = QuestPlatformUtils.openAdGameLinkDirectly;
    const obj = { adContentId: questDockBounty.id, adCreativeType: AdCreativeType.AdCreativeType.BOUNTY, cta: questDockBounty.cta };
    const obj2 = { content: QuestTypes.QuestContent.QUEST_BAR_MOBILE, ctaContent: AnalyticsTypes.QuestContentCTA.OPEN_GAME_LINK, impressionId: getQuestImpressionId(), sourceQuestContent: QuestTypes.QuestContent.QUEST_BAR_MOBILE };
    const result = openAdGameLinkDirectly(obj, obj2);
  }, items2);
  let obj4 = { assetUrl: setRestingQuestDockMode(getQuestImpressionId[20]), isAnimatedAsset: true, paused: tmp12, withAnimation: isQuestDockExpanded };
  const tmp11 = setRestingQuestDockMode(getQuestImpressionId[19]);
  const QuestDockBodyRewardTile = questDockBounty(getQuestImpressionId[19]).QuestDockBodyRewardTile;
  tmp12 = !isQuestDockExpanded;
  if (isQuestDockExpanded) {
    tmp12 = !isRendered;
  }
  if (isQuestDockExpanded) {
    isQuestDockExpanded = isRendered;
  }
  const obj5 = { rewardTile: jsx(QuestDockBodyRewardTile, obj4), contentBadge: jsx(tmp(getQuestImpressionId[21]), {}), title: questDockBounty.productName, description: intl.string(tmp3(getQuestImpressionId[8]).t["1uzE2S"]), ctaText: memo, onCtaPress: callback, ctaButtonVariant: "primary", secondaryCta: jsx(IconButton, obj6) };
  intl = tmp3(tmp2[8]).intl;
  obj6 = { variant: "secondary-overlay", size: "md", icon: tmp(getQuestImpressionId[23]), accessibilityLabel: questDockBounty.cta.buttonLabel, onPress: callback1 };
  IconButton = tmp3(tmp2[22]).IconButton;
  return jsx(tmp11, obj5);
});
let result = size.fileFinishedImporting("modules/quests/native/QuestDock/QuestDockBountyBody.tsx");

export default memoResult;
