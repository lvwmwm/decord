// Module ID: 16598
// Function ID: 16599
// Name: QuestDockPlayableBody
// Dependencies: [19, 6711, 21, 558, 576, 16562, 16508, 16477, 16484, 9608, 7255, 9575, 9578, 6718, 7802, 6714, 11364, 9610, 16580, 9598, 16595, 1125, 7957, 14632, 2]

// Module 16598 (QuestDockPlayableBody)
import Fragment from "Fragment" /* 21 */;
import QuestConstants from "QuestConstants" /* 6711 */;
import QuestTypes from "QuestTypes" /* 6714 */;
import AdCreativeType from "AdCreativeType" /* 6718 */;
import AnalyticsTypes from "AnalyticsTypes" /* 7802 */;
import captureAdUserAction from "captureAdUserAction" /* 9575 */;
import captureAdUserActionTypes from "captureAdUserActionTypes" /* 9578 */;
import QuestPlatformUtils from "QuestPlatformUtils" /* 9610 */;
import GamesActionCreatorsDefault from "GamesActionCreators" /* 11364 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const QuestDockMode = QuestConstants.QuestDockMode;
const jsx = Fragment.jsx;
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function QuestDockPlayableBody() {
  let analyticsLocations;
  let getQuestImpressionId;
  let questDockPlayable;
  let setRestingQuestDockMode;
  let tmp = questDockPlayable;
  let obj = questDockPlayable(getQuestImpressionId[4]);
  const cResult = obj.c(24);
  const isRendered = analyticsLocations.useContext(setRestingQuestDockMode(getQuestImpressionId[5])).isRendered;
  let obj2 = questDockPlayable(getQuestImpressionId[6]);
  questDockPlayable = obj2.useQuestDockPlayable();
  let obj3 = questDockPlayable(getQuestImpressionId[7]);
  let isQuestDockExpanded = obj3.useIsQuestDockExpanded();
  setRestingQuestDockMode = analyticsLocations.useContext(questDockPlayable(getQuestImpressionId[8]).QuestDockExternalCoordinationContext).setRestingQuestDockMode;
  let obj4 = questDockPlayable(getQuestImpressionId[9]);
  getQuestImpressionId = obj4.useGetQuestImpressionId();
  analyticsLocations = setRestingQuestDockMode(getQuestImpressionId[10])().analyticsLocations;
  if (cResult[0] === analyticsLocations) {
    if (cResult[1] === getQuestImpressionId) {
      if (cResult[2] === questDockPlayable.applicationId) {
        if (cResult[3] === questDockPlayable.id) {
          let tmp8;
          if (cResult[4] === setRestingQuestDockMode) {
            tmp8 = cResult[5];
          }
          if (cResult[6] === getQuestImpressionId) {
            if (cResult[7] === questDockPlayable.cta) {
              let tmp9;
              if (cResult[8] === questDockPlayable.id) {
                tmp9 = cResult[9];
              }
              class L {
                constructor() {
                  const openAdGameLinkDirectly = QuestPlatformUtils.openAdGameLinkDirectly;
                  const obj = { adContentId: questDockPlayable.id, adCreativeType: AdCreativeType.AdCreativeType.PLAYABLE, cta: questDockPlayable.cta };
                  const obj2 = { content: QuestTypes.QuestContent.QUEST_BAR_MOBILE, ctaContent: AnalyticsTypes.QuestContentCTA.OPEN_GAME_LINK, impressionId: getQuestImpressionId(), sourceQuestContent: QuestTypes.QuestContent.QUEST_BAR_MOBILE };
                  const result = openAdGameLinkDirectly(obj, obj2);
                }
              }
              if (isQuestDockExpanded) {
                isQuestDockExpanded = isRendered;
              }
              if (cResult[10] === !isQuestDockExpanded) {
                let tmp11;
                let tmp15;
                let tmp19;
                let tmp18;
                if (cResult[11] === isQuestDockExpanded) {
                  tmp11 = cResult[12];
                }
                class L {
                  constructor() {
                    const openAdGameLinkDirectly = QuestPlatformUtils.openAdGameLinkDirectly;
                    const obj = { adContentId: questDockPlayable.id, adCreativeType: AdCreativeType.AdCreativeType.PLAYABLE, cta: questDockPlayable.cta };
                    const obj2 = { content: QuestTypes.QuestContent.QUEST_BAR_MOBILE, ctaContent: AnalyticsTypes.QuestContentCTA.OPEN_GAME_LINK, impressionId: getQuestImpressionId(), sourceQuestContent: QuestTypes.QuestContent.QUEST_BAR_MOBILE };
                    const result = openAdGameLinkDirectly(obj, obj2);
                  }
                }
                if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
                  const tmp17 = jsx(setRestingQuestDockMode(getQuestImpressionId[20]), {});
                  class L {
                    constructor() {
                      const openAdGameLinkDirectly = QuestPlatformUtils.openAdGameLinkDirectly;
                      const obj = { adContentId: questDockPlayable.id, adCreativeType: AdCreativeType.AdCreativeType.PLAYABLE, cta: questDockPlayable.cta };
                      const obj2 = { content: QuestTypes.QuestContent.QUEST_BAR_MOBILE, ctaContent: AnalyticsTypes.QuestContentCTA.OPEN_GAME_LINK, impressionId: getQuestImpressionId(), sourceQuestContent: QuestTypes.QuestContent.QUEST_BAR_MOBILE };
                      const result = openAdGameLinkDirectly(obj, obj2);
                    }
                  }
                  cResult[13] = tmp17;
                  tmp15 = tmp17;
                } else {
                  tmp15 = cResult[13];
                }
                const _Symbol = Symbol;
                const productName = questDockPlayable.productName;
                if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
                  const string = tmp(tmp2[21]).intl.string;
                  class L {
                    constructor() {
                      const openAdGameLinkDirectly = QuestPlatformUtils.openAdGameLinkDirectly;
                      const obj = { adContentId: questDockPlayable.id, adCreativeType: AdCreativeType.AdCreativeType.PLAYABLE, cta: questDockPlayable.cta };
                      const obj2 = { content: QuestTypes.QuestContent.QUEST_BAR_MOBILE, ctaContent: AnalyticsTypes.QuestContentCTA.OPEN_GAME_LINK, impressionId: getQuestImpressionId(), sourceQuestContent: QuestTypes.QuestContent.QUEST_BAR_MOBILE };
                      const result = openAdGameLinkDirectly(obj, obj2);
                    }
                  }
                  const intl = tmp(tmp2[21]).intl;
                  const stringResult = intl.string(tmp(getQuestImpressionId[21]).t.U7cCLU);
                  cResult[14] = tmp20;
                  cResult[15] = stringResult;
                  tmp19 = stringResult;
                  tmp18 = tmp20;
                } else {
                  tmp18 = cResult[14];
                  tmp19 = cResult[15];
                }
                if (cResult[16] === tmp9) {
                  let tmp22;
                  if (cResult[17] === questDockPlayable.cta.buttonLabel) {
                    tmp22 = cResult[18];
                  }
                  if (cResult[19] === tmp8) {
                    if (cResult[20] === questDockPlayable.productName) {
                      if (cResult[21] === tmp11) {
                        let tmp25;
                        if (cResult[22] === tmp22) {
                          tmp25 = cResult[23];
                        }
                        return tmp25;
                      }
                    }
                  }
                  class L {
                    constructor() {
                      const openAdGameLinkDirectly = QuestPlatformUtils.openAdGameLinkDirectly;
                      const obj = { adContentId: questDockPlayable.id, adCreativeType: AdCreativeType.AdCreativeType.PLAYABLE, cta: questDockPlayable.cta };
                      const obj2 = { content: QuestTypes.QuestContent.QUEST_BAR_MOBILE, ctaContent: AnalyticsTypes.QuestContentCTA.OPEN_GAME_LINK, impressionId: getQuestImpressionId(), sourceQuestContent: QuestTypes.QuestContent.QUEST_BAR_MOBILE };
                      const result = openAdGameLinkDirectly(obj, obj2);
                    }
                  }
                  const tmp26 = jsx(setRestingQuestDockMode(getQuestImpressionId[18]), { rewardTile: tmp11, contentBadge: tmp15, title: productName, description: tmp18, ctaText: tmp19, onCtaPress: tmp8, ctaButtonVariant: "primary", secondaryCta: tmp22 });
                  cResult[19] = tmp8;
                  cResult[20] = questDockPlayable.productName;
                  cResult[21] = tmp11;
                  cResult[22] = tmp22;
                  cResult[23] = tmp26;
                  tmp25 = tmp26;
                }
                const IconButton = tmp(tmp2[22]).IconButton;
                const tmp24 = <IconButton variant="secondary-overlay" size="md" icon={setRestingQuestDockMode(getQuestImpressionId[23])} accessibilityLabel={questDockPlayable.cta.buttonLabel} onPress={tmp9} />;
                cResult[16] = tmp9;
                cResult[17] = questDockPlayable.cta.buttonLabel;
                cResult[18] = tmp24;
                tmp22 = tmp24;
              }
              const QuestDockBodyRewardTile = tmp(tmp2[18]).QuestDockBodyRewardTile;
              const tmp13 = <QuestDockBodyRewardTile assetUrl={setRestingQuestDockMode(getQuestImpressionId[19])} isAnimatedAsset paused={!isQuestDockExpanded} withAnimation={isQuestDockExpanded} />;
              cResult[10] = !isQuestDockExpanded;
              cResult[11] = isQuestDockExpanded;
              cResult[12] = tmp13;
              tmp11 = tmp13;
            }
          }
          class L {
            constructor() {
              const openAdGameLinkDirectly = QuestPlatformUtils.openAdGameLinkDirectly;
              const obj = { adContentId: questDockPlayable.id, adCreativeType: AdCreativeType.AdCreativeType.PLAYABLE, cta: questDockPlayable.cta };
              const obj2 = { content: QuestTypes.QuestContent.QUEST_BAR_MOBILE, ctaContent: AnalyticsTypes.QuestContentCTA.OPEN_GAME_LINK, impressionId: getQuestImpressionId(), sourceQuestContent: QuestTypes.QuestContent.QUEST_BAR_MOBILE };
              const result = openAdGameLinkDirectly(obj, obj2);
            }
          }
          cResult[6] = getQuestImpressionId;
          cResult[7] = questDockPlayable.cta;
          cResult[8] = questDockPlayable.id;
          cResult[9] = L;
          tmp9 = L;
        }
      }
    }
  }
  const fn = function s() {
    const obj = captureAdUserAction;
    const obj2 = { type: captureAdUserActionTypes.AdUserActionType.CLICK_INTERNAL, adCreativeType: AdCreativeType.AdCreativeType.PLAYABLE, adCreativeId: questDockPlayable.id, questContentCTA: AnalyticsTypes.QuestContentCTA.LAUNCH_MOBILE_ACTIVITY, surfaceId: QuestTypes.QuestContent.QUEST_BAR_MOBILE, sourceQuestContent: QuestTypes.QuestContent.QUEST_BAR_MOBILE, impressionId: getQuestImpressionId() };
    obj.captureAdUserAction(obj2);
    const obj3 = GamesActionCreatorsDefault;
    const obj4 = { applicationId: questDockPlayable.applicationId, analyticsLocations };
    obj3.launch(obj4);
    setRestingQuestDockMode(QuestDockMode.COLLAPSED);
  };
  cResult[0] = analyticsLocations;
  cResult[1] = getQuestImpressionId;
  cResult[2] = questDockPlayable.applicationId;
  cResult[3] = questDockPlayable.id;
  cResult[4] = setRestingQuestDockMode;
  cResult[5] = fn;
  tmp8 = fn;
}) : (function QuestDockPlayableBody() {
  let analyticsLocations;
  let getQuestImpressionId;
  let questDockPlayable;
  let setRestingQuestDockMode;
  let tmp = setRestingQuestDockMode;
  const isRendered = analyticsLocations.useContext(setRestingQuestDockMode(getQuestImpressionId[5])).isRendered;
  let obj = questDockPlayable(getQuestImpressionId[6]);
  questDockPlayable = obj.useQuestDockPlayable();
  let obj2 = questDockPlayable(getQuestImpressionId[7]);
  let isQuestDockExpanded = obj2.useIsQuestDockExpanded();
  setRestingQuestDockMode = analyticsLocations.useContext(questDockPlayable(getQuestImpressionId[8]).QuestDockExternalCoordinationContext).setRestingQuestDockMode;
  let obj3 = questDockPlayable(getQuestImpressionId[9]);
  getQuestImpressionId = obj3.useGetQuestImpressionId();
  analyticsLocations = setRestingQuestDockMode(getQuestImpressionId[10])().analyticsLocations;
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
  setRestingQuestDockMode(getQuestImpressionId[18]);
  const QuestDockBodyRewardTile = questDockPlayable(getQuestImpressionId[18]).QuestDockBodyRewardTile;
  let tmp11 = !isQuestDockExpanded;
  if (isQuestDockExpanded) {
    tmp11 = !isRendered;
  }
  if (isQuestDockExpanded) {
    isQuestDockExpanded = isRendered;
  }
  const intl = tmp3(tmp2[21]).intl;
  const intl2 = tmp3(tmp2[21]).intl;
  ({ variant: "secondary-overlay", size: "md", icon: tmp(getQuestImpressionId[23]), accessibilityLabel: questDockPlayable.cta.buttonLabel, onPress: callback1 });
  const IconButton = tmp3(tmp2[22]).IconButton;
  return <tmp10 rewardTile={<QuestDockBodyRewardTile assetUrl={setRestingQuestDockMode(getQuestImpressionId[19])} isAnimatedAsset paused={tmp11} withAnimation={isQuestDockExpanded} />} contentBadge={jsx(tmp(getQuestImpressionId[20]), {})} title={questDockPlayable.productName} description={intl.string(questDockPlayable(getQuestImpressionId[21]).t["1uzE2S"])} ctaText={intl2.string(questDockPlayable(getQuestImpressionId[21]).t.U7cCLU)} onCtaPress={callback} ctaButtonVariant="primary" secondaryCta={null} />;
}));
let result = size.fileFinishedImporting("modules/quests/native/QuestDock/QuestDockPlayableBody.tsx");

export default memoResult;
