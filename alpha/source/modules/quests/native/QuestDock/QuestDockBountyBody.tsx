// Module ID: 17173
// Function ID: 17174
// Name: QuestDockBountyBody
// Dependencies: [19, 6781, 21, 17141, 17087, 17056, 17063, 9717, 1113, 14671, 7868, 9684, 9687, 6788, 7871, 6784, 16908, 16910, 9719, 17159, 9707, 17174, 8028, 15173, 2]

// Module 17173 (QuestDockBountyBody)
import Fragment from "Fragment" /* 21 */;
import intl2 from "intl" /* 1113 */;
import QuestConstants from "QuestConstants" /* 6781 */;
import QuestTypes from "QuestTypes" /* 6784 */;
import AdCreativeType from "AdCreativeType" /* 6788 */;
import QuestTaskUtils from "QuestTaskUtils" /* 7868 */;
import AnalyticsTypes from "AnalyticsTypes" /* 7871 */;
import captureAdUserAction from "captureAdUserAction" /* 9684 */;
import captureAdUserActionTypes from "captureAdUserActionTypes" /* 9687 */;
import QuestPlatformUtils from "QuestPlatformUtils" /* 9719 */;
import MobileQuestVideoWatchCtaCopy from "MobileQuestVideoWatchCtaCopy" /* 14671 */;
import BountiesModalActionCreatorsDefault from "BountiesModalActionCreators" /* 16908 */;
import BountiesModalTypes from "BountiesModalTypes" /* 16910 */;
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
  let str;
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
  const obj5 = { rewardTile: jsx(QuestDockBodyRewardTile, obj4), contentBadge: jsx(tmp(getQuestImpressionId[21]), {}), title: str, description: intl.string(tmp3(getQuestImpressionId[8]).t["1uzE2S"]), ctaText: memo, onCtaPress: callback, ctaButtonVariant: "primary", secondaryCta: jsx(IconButton, obj6) };
  str = questDockBounty.productName;
  if (str == null) {
    str = "";
  }
  intl = tmp3(tmp2[8]).intl;
  obj6 = { variant: "secondary-overlay", size: "md", icon: tmp(getQuestImpressionId[23]), accessibilityLabel: questDockBounty.cta.buttonLabel, onPress: callback1 };
  IconButton = tmp3(tmp2[22]).IconButton;
  return jsx(tmp11, obj5);
});
let result = size.fileFinishedImporting("modules/quests/native/QuestDock/QuestDockBountyBody.tsx");

export default memoResult;
