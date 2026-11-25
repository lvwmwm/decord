// Module ID: 16611
// Function ID: 16612
// Name: QuestDockPlayableBody
// Dependencies: [5, 19, 6558, 21, 16572, 16516, 16480, 16487, 9996, 7520, 9961, 9964, 6565, 8430, 6561, 16612, 12195, 9998, 16595, 9984, 16608, 1112, 7591, 10381, 2]

// Module 16611 (QuestDockPlayableBody)
import Fragment from "Fragment" /* 21 */;
import QuestConstants from "QuestConstants" /* 6558 */;
import QuestTypes from "QuestTypes" /* 6561 */;
import AdCreativeType from "AdCreativeType" /* 6565 */;
import AnalyticsTypes from "AnalyticsTypes" /* 8430 */;
import QuestPlatformUtils from "QuestPlatformUtils" /* 9998 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let c6, c7, constants;

const QuestDockMode = QuestConstants.QuestDockMode;
const jsx = Fragment.jsx;
const memoResult = react.memo(function QuestDockPlayableBody() {
  let IconButton;
  let getQuestImpressionId;
  let intl;
  let intl2;
  let obj6;
  let obj7;
  let questDockPlayable;
  let setRestingQuestDockMode;
  let tmp11;
  let tmp = setRestingQuestDockMode;
  const isRendered = react.useContext(setRestingQuestDockMode(getQuestImpressionId[4])).isRendered;
  const tmp3 = questDockPlayable;
  let obj = questDockPlayable(getQuestImpressionId[5]);
  questDockPlayable = obj.useQuestDockPlayable();
  let obj2 = questDockPlayable(getQuestImpressionId[6]);
  let isQuestDockExpanded = obj2.useIsQuestDockExpanded();
  setRestingQuestDockMode = react.useContext(questDockPlayable(getQuestImpressionId[7]).QuestDockExternalCoordinationContext).setRestingQuestDockMode;
  let obj3 = questDockPlayable(getQuestImpressionId[8]);
  getQuestImpressionId = obj3.useGetQuestImpressionId();
  const analyticsLocations = setRestingQuestDockMode(getQuestImpressionId[9])().analyticsLocations;
  const items = [questDockPlayable, analyticsLocations, getQuestImpressionId, setRestingQuestDockMode];
  const items1 = [, , ];
  ({ id: arr2[0], cta: arr2[1] } = questDockPlayable);
  items1[2] = getQuestImpressionId;
  const callback = react.useCallback(analyticsLocations(function*(arg0, value) {
    let closure_2;
    let completePlayableLaunch;
    let recordPlayableLaunchResult;
    let tmp16;
    if (c7 === 2) {
      c7 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        let c0;
        c7 = 2;
        if (0 === c6) {
          if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            let closure_3 = tmp;
            let closure_4 = tmp16;
            const tmp21 = getQuestImpressionId();
            const obj5 = { type: recordPlayableLaunchResult(getQuestImpressionId[11]).AdUserActionType.CLICK_INTERNAL, adCreativeType: recordPlayableLaunchResult(getQuestImpressionId[12]).AdCreativeType.PLAYABLE, adCreativeId: questDockPlayable.id, questContentCTA: recordPlayableLaunchResult(getQuestImpressionId[13]).QuestContentCTA.LAUNCH_MOBILE_ACTIVITY, surfaceId: recordPlayableLaunchResult(getQuestImpressionId[14]).QuestContent.QUEST_BAR_MOBILE, sourceQuestContent: recordPlayableLaunchResult(getQuestImpressionId[14]).QuestContent.QUEST_BAR_MOBILE, impressionId: tmp21 };
            const captureAdUserAction = recordPlayableLaunchResult(getQuestImpressionId[10]).captureAdUserAction;
            const tmp24 = recordPlayableLaunchResult(getQuestImpressionId[10]);
            captureAdUserAction(obj5);
            const obj7 = recordPlayableLaunchResult(getQuestImpressionId[15]);
            recordPlayableLaunchResult = obj7.recordPlayableLaunch(questDockPlayable, tmp21);
            c0 = recordPlayableLaunchResult;
            constants = 1;
            const obj6 = { applicationId: questDockPlayable.applicationId, analyticsLocations };
            const obj8 = completePlayableLaunch(getQuestImpressionId[16]);
            const launchResult = obj8.launch(obj6);
            setRestingQuestDockMode(constants.COLLAPSED);
            const tmp49 = recordPlayableLaunchResult(getQuestImpressionId[15]);
            getQuestImpressionId = tmp49;
            completePlayableLaunch = tmp49.completePlayableLaunch;
            c6 = 2;
            c7 = 1;
            const obj9 = { value: launchResult, done: false };
            return obj9;
          }
        } else {
          if (1 === tmp4) {
            constants = 0;
            const obj2 = recordPlayableLaunchResult(getQuestImpressionId[15]);
            const result = obj2.completePlayableLaunch(c0, false);
          } else if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            constants = 0;
            c7 = 3;
            const obj = { value, done: true };
            return obj;
          } else {
            completePlayableLaunch(recordPlayableLaunchResult, value);
            constants = 0;
          }
          c7 = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp15) {
        tmp16 = constants;
        if (0 === constants) {
          c7 = 3;
          throw tmp15;
        } else {
          c6 = 1;
        }
      }
    }
  }), items);
  const callback1 = react.useCallback(() => {
    const openAdGameLinkDirectly = QuestPlatformUtils.openAdGameLinkDirectly;
    const obj = { adContentId: questDockPlayable.id, adCreativeType: AdCreativeType.AdCreativeType.PLAYABLE, cta: questDockPlayable.cta };
    const obj2 = { content: QuestTypes.QuestContent.QUEST_BAR_MOBILE, ctaContent: AnalyticsTypes.QuestContentCTA.OPEN_GAME_LINK, impressionId: getQuestImpressionId(), sourceQuestContent: QuestTypes.QuestContent.QUEST_BAR_MOBILE };
    const result = openAdGameLinkDirectly(obj, obj2);
  }, items1);
  const tmp10 = setRestingQuestDockMode(getQuestImpressionId[18]);
  let obj4 = { assetUrl: setRestingQuestDockMode(getQuestImpressionId[19]), isAnimatedAsset: true, paused: tmp11, withAnimation: isQuestDockExpanded };
  const QuestDockBodyRewardTile = questDockPlayable(getQuestImpressionId[18]).QuestDockBodyRewardTile;
  tmp11 = !isQuestDockExpanded;
  if (isQuestDockExpanded) {
    tmp11 = !isRendered;
  }
  if (isQuestDockExpanded) {
    isQuestDockExpanded = isRendered;
  }
  let obj5 = { rewardTile: tmp9(QuestDockBodyRewardTile, obj4), contentBadge: tmp9(tmp(tmp2[20]), {}), title: questDockPlayable.productName, description: intl.string(tmp3(tmp2[21]).t.vGP84Q), ctaText: intl2.formatToPlainString(tmp3(tmp2[21]).t.dPT1o7, obj6), onCtaPress: callback, ctaButtonVariant: "primary", secondaryCta: tmp9(IconButton, obj7) };
  intl = tmp3(tmp2[21]).intl;
  intl2 = tmp3(tmp2[21]).intl;
  obj6 = { seconds: questDockPlayable.rewardTimerSeconds };
  obj7 = { variant: "secondary-overlay", size: "md", icon: tmp(tmp2[23]), accessibilityLabel: questDockPlayable.cta.buttonLabel, onPress: callback1 };
  IconButton = tmp3(tmp2[22]).IconButton;
  return jsx(tmp10, obj5);
});
let result = size.fileFinishedImporting("modules/quests/native/QuestDock/QuestDockPlayableBody.tsx");

export default memoResult;
