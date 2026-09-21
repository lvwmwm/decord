// Module ID: 15379
// Function ID: 15380
// Name: QuestBottomSheetHooks
// Dependencies: [5, 19, 5663, 558, 568, 15355, 15376, 4725, 11610, 15380, 7970, 7971, 7981, 5670, 7969, 5666, 7959, 2]

// Module 15379 (QuestBottomSheetHooks)
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4725 */;
import AdAnalyticsInterfaceExperiment from "AdAnalyticsInterfaceExperiment" /* 7970 */;
import openVideoQuestModalDefault from "openVideoQuestModal" /* 15380 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const QuestDockMode = fn(5663).QuestDockMode;
let ReactCompilerGating = fn(558);
let closure_6 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = setRestingQuestDockMode(568).c(3);
  setRestingQuestDockMode = noop.useContext(setRestingQuestDockMode(15355).QuestDockExternalCoordinationContext).setRestingQuestDockMode;
  const isInQuestBottomSheet = noop.useContext(setRestingQuestDockMode(15376).QuestBottomSheetContext).isInQuestBottomSheet;
  if (cResult[0] === isInQuestBottomSheet) {
    if (cResult[1] === setRestingQuestDockMode) {
      let tmp2 = cResult[2];
    }
    return tmp2;
  }
  const fn = function t() {
    if (isInQuestBottomSheet) {
      ActionSheetActionCreatorsDefault.hideActionSheet("QuestBottomSheet");
    } else {
      setRestingQuestDockMode(QuestDockMode.COLLAPSED);
    }
  };
  cResult[0] = isInQuestBottomSheet;
  cResult[1] = setRestingQuestDockMode;
  cResult[2] = fn;
  tmp2 = fn;
}) : (() => {
  setRestingQuestDockMode = noop.useContext(setRestingQuestDockMode(15355).QuestDockExternalCoordinationContext).setRestingQuestDockMode;
  const isInQuestBottomSheet = noop.useContext(setRestingQuestDockMode(15376).QuestBottomSheetContext).isInQuestBottomSheet;
  const items = [isInQuestBottomSheet, setRestingQuestDockMode];
  return noop.useCallback(() => {
    if (isInQuestBottomSheet) {
      ActionSheetActionCreatorsDefault.hideActionSheet("QuestBottomSheet");
    } else {
      setRestingQuestDockMode(QuestDockMode.COLLAPSED);
    }
  }, items);
});
fn(558);
ReactCompilerGating = fn(558);
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((questId) => {
  const cResult = questId(568).c(5);
  questId = questId.questId;
  const sourceQuestContent = questId.sourceQuestContent;
  const tmp2 = closure_6();
  dependencyMap = tmp2;
  let obj = questId(568);
  const questImpression = questId(11610).useQuestImpression();
  if (cResult[0] === tmp2) {
    if (cResult[1] === questImpression) {
      if (cResult[2] === questId) {
        if (cResult[3] === sourceQuestContent) {
          let tmp4 = cResult[4];
        }
        return tmp4;
      }
    }
  }
  const fn = function n() {
    closure_2();
    const obj = { questId, questContentPosition: null, sourceQuestContent: null };
    let questContentPosition;
    if (questImpression != null) {
      questContentPosition = obj2.getQuestContentPosition();
    }
    obj.questContentPosition = questContentPosition;
    obj.sourceQuestContent = sourceQuestContent;
    openVideoQuestModalDefault(obj);
    if (obj3.shouldMigrateToAdAnalyticsInterface(AdAnalyticsInterfaceExperiment.AdAnalyticsInterfaceExperimentStep.STEP_2_CLICKED_INTERNAL, "quest_bottom_sheet_watch_task")) {
      const obj4 = { type: tmp8(7981).AdUserActionType.CLICK_INTERNAL, adCreativeType: tmp8(5670).AdCreativeType.QUEST, adCreativeId: tmp4, questContentCTA: tmp8(7969).QuestContentCTA.WATCH_VIDEO, surfaceId: tmp8(5666).QuestContent.QUEST_BOTTOM_SHEET, sourceQuestContent: tmp6, impressionId: null, questContentPosition: null };
      let id;
      if (obj2 != null) {
        id = obj2.getId();
      }
      obj4.impressionId = id;
      let questContentPosition1;
      if (obj2 != null) {
        questContentPosition1 = obj2.getQuestContentPosition();
      }
      obj4.questContentPosition = questContentPosition1;
      tmp8(7971).captureAdUserAction(obj4);
      const tmp8Result = tmp8(7971);
    } else {
      const obj5 = { questId: tmp4, questContent: tmp8(5666).QuestContent.QUEST_BOTTOM_SHEET, questContentCTA: tmp8(7969).QuestContentCTA.WATCH_VIDEO, questContentPosition: null, impressionId: null, sourceQuestContent: null };
      let questContentPosition2;
      if (obj2 != null) {
        questContentPosition2 = obj2.getQuestContentPosition();
      }
      obj5.questContentPosition = questContentPosition2;
      let id1;
      if (obj2 != null) {
        id1 = obj2.getId();
      }
      obj5.impressionId = id1;
      obj5.sourceQuestContent = tmp6;
      const result = tmp8(7959).trackQuestContentClicked(obj5);
      const tmp8Result2 = tmp8(7959);
    }
  };
  cResult[0] = tmp2;
  cResult[1] = questImpression;
  cResult[2] = questId;
  cResult[3] = sourceQuestContent;
  cResult[4] = fn;
  tmp4 = fn;
}) : ((questId) => {
  questId = questId.questId;
  const sourceQuestContent = questId.sourceQuestContent;
  const tmp = closure_6();
  dependencyMap = tmp;
  const questImpression = questId(11610).useQuestImpression();
  const items = [questId, tmp, questImpression, sourceQuestContent];
  return noop.useCallback(() => {
    closure_2();
    const obj = { questId, questContentPosition: null, sourceQuestContent: null };
    let questContentPosition;
    if (questImpression != null) {
      questContentPosition = obj2.getQuestContentPosition();
    }
    obj.questContentPosition = questContentPosition;
    obj.sourceQuestContent = sourceQuestContent;
    openVideoQuestModalDefault(obj);
    if (obj3.shouldMigrateToAdAnalyticsInterface(AdAnalyticsInterfaceExperiment.AdAnalyticsInterfaceExperimentStep.STEP_2_CLICKED_INTERNAL, "quest_bottom_sheet_watch_task")) {
      const obj4 = { type: tmp8(7981).AdUserActionType.CLICK_INTERNAL, adCreativeType: tmp8(5670).AdCreativeType.QUEST, adCreativeId: tmp4, questContentCTA: tmp8(7969).QuestContentCTA.WATCH_VIDEO, surfaceId: tmp8(5666).QuestContent.QUEST_BOTTOM_SHEET, sourceQuestContent: tmp6, impressionId: null, questContentPosition: null };
      let id;
      if (obj2 != null) {
        id = obj2.getId();
      }
      obj4.impressionId = id;
      let questContentPosition1;
      if (obj2 != null) {
        questContentPosition1 = obj2.getQuestContentPosition();
      }
      obj4.questContentPosition = questContentPosition1;
      tmp8(7971).captureAdUserAction(obj4);
      const tmp8Result = tmp8(7971);
    } else {
      const obj5 = { questId: tmp4, questContent: tmp8(5666).QuestContent.QUEST_BOTTOM_SHEET, questContentCTA: tmp8(7969).QuestContentCTA.WATCH_VIDEO, questContentPosition: null, impressionId: null, sourceQuestContent: null };
      let questContentPosition2;
      if (obj2 != null) {
        questContentPosition2 = obj2.getQuestContentPosition();
      }
      obj5.questContentPosition = questContentPosition2;
      let id1;
      if (obj2 != null) {
        id1 = obj2.getId();
      }
      obj5.impressionId = id1;
      obj5.sourceQuestContent = tmp6;
      const result = tmp8(7959).trackQuestContentClicked(obj5);
      const tmp8Result2 = tmp8(7959);
    }
  }, items);
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/quests/native/QuestBottomSheet/QuestBottomSheetHooks.tsx");

export const useWatchTaskPressHandler = tmp2;
export const useMobileActivityPressHandler = ReactCompilerGating.isReactCompilerEnabled() ? ((questId) => {
  const cResult = require("c").c(6);
  questId = questId.questId;
  _require = questId;
  let sourceQuestContent = questId.sourceQuestContent;
  launchMobileActivity = questId.launchMobileActivity;
  const tmp2 = closure_6();
  asyncGeneratorStep = tmp2;
  let obj = require("c");
  const questImpression = require("ContentImpressionTrackerHooks").useQuestImpression();
  if (cResult[0] === tmp2) {
    if (cResult[1] === questImpression) {
      if (cResult[2] === launchMobileActivity) {
        if (cResult[3] === questId) {
          if (cResult[4] === sourceQuestContent) {
            let tmp4 = cResult[5];
          }
          return tmp4;
        }
      }
    }
  }
  _require = asyncGeneratorStep(async (arg0, value) => {
    if (v3 === 2) {
      v3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj = { value, done: true };
        return obj;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        v3 = 2;
        if (0 === sourceQuestContent) {
          if (arg0 === 1) {
            v3 = 3;
            throw value;
          } else if (arg0 === 2) {
            v3 = 3;
            const obj2 = { value, done: true };
            return obj2;
          } else {
            closure_1_3();
            sourceQuestContent = 1;
            v3 = 1;
            const obj5 = { value: v3(), done: false };
            return obj5;
          }
        } else if (arg0 === 1) {
          v3 = 3;
          throw value;
        } else if (arg0 === 2) {
          v3 = 3;
          const obj8 = { value, done: true };
          return obj8;
        } else {
          let captureAdUserAction = tmp4;
          let captureAdUserActionResult1 = launchMobileActivity;
          if (obj12.shouldMigrateToAdAnalyticsInterface(tmp4(launchMobileActivity[10]).AdAnalyticsInterfaceExperimentStep.STEP_2_CLICKED_INTERNAL, "quest_bottom_sheet_mobile_activity")) {
            captureAdUserAction = captureAdUserAction(captureAdUserActionResult1[11]).captureAdUserAction;
            const obj9 = { type: tmp4(launchMobileActivity[12]).AdUserActionType.CLICK_INTERNAL, adCreativeType: tmp4(launchMobileActivity[13]).AdCreativeType.QUEST, adCreativeId: tmp4, questContentCTA: tmp4(launchMobileActivity[14]).QuestContentCTA.LAUNCH_MOBILE_ACTIVITY, surfaceId: tmp4(launchMobileActivity[15]).QuestContent.QUEST_BOTTOM_SHEET, sourceQuestContent, impressionId: null, questContentPosition: null };
            let id;
            if (questImpression != null) {
              id = obj6.getId();
            }
            obj9.impressionId = id;
            let questContentPosition;
            if (questImpression != null) {
              questContentPosition = obj7.getQuestContentPosition();
            }
            obj9.questContentPosition = questContentPosition;
            captureAdUserActionResult1 = captureAdUserAction(obj9);
            const captureAdUserActionResult = captureAdUserAction(captureAdUserActionResult1[11]);
            obj6 = questImpression;
            obj7 = questImpression;
          } else {
            const obj10 = { questId: tmp4, questContent: tmp4(launchMobileActivity[15]).QuestContent.QUEST_BOTTOM_SHEET, questContentCTA: tmp4(launchMobileActivity[14]).QuestContentCTA.LAUNCH_MOBILE_ACTIVITY, questContentPosition: null, impressionId: null, sourceQuestContent: null };
            let questContentPosition1;
            if (questImpression != null) {
              questContentPosition1 = obj3.getQuestContentPosition();
            }
            obj10.questContentPosition = questContentPosition1;
            let id1;
            if (questImpression != null) {
              id1 = obj4.getId();
            }
            obj10.impressionId = id1;
            obj10.sourceQuestContent = sourceQuestContent;
            const result = captureAdUserAction(captureAdUserActionResult1[16]).trackQuestContentClicked(obj10);
            const captureAdUserActionResult2 = captureAdUserAction(captureAdUserActionResult1[16]);
            obj3 = questImpression;
            obj4 = questImpression;
          }
          v3 = 3;
          obj12 = tmp4(launchMobileActivity[10]);
        }
      } catch (tmp36) {
        v3 = tmp;
        throw tmp36;
      }
    }
  });
  const fn = function() {
    const self = this;
    const apply = closure_0.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  };
  cResult[0] = tmp2;
  cResult[1] = questImpression;
  cResult[2] = launchMobileActivity;
  cResult[3] = questId;
  cResult[4] = sourceQuestContent;
  cResult[5] = fn;
  tmp4 = fn;
}) : ((questId) => {
  questId = questId.questId;
  const sourceQuestContent = questId.sourceQuestContent;
  const launchMobileActivity = questId.launchMobileActivity;
  const tmp = closure_6();
  asyncGeneratorStep = tmp;
  const questImpression = questId(launchMobileActivity[8]).useQuestImpression();
  const items = [questId, tmp, launchMobileActivity, questImpression, sourceQuestContent];
  return questImpression.useCallback(asyncGeneratorStep(async (arg0, value) => {
    if (dependencyMap === 2) {
      dependencyMap = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj = { value, done: true };
        return obj;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        dependencyMap = 2;
        if (0 === c1) {
          if (arg0 === 1) {
            dependencyMap = 3;
            throw value;
          } else if (arg0 === 2) {
            dependencyMap = 3;
            const obj2 = { value, done: true };
            return obj2;
          } else {
            closure_3();
            c1 = 1;
            dependencyMap = 1;
            const obj5 = { value: launchMobileActivity(), done: false };
            return obj5;
          }
        } else if (arg0 === 1) {
          dependencyMap = 3;
          throw value;
        } else if (arg0 === 2) {
          dependencyMap = 3;
          const obj8 = { value, done: true };
          return obj8;
        } else {
          let captureAdUserAction = tmp4;
          if (obj12.shouldMigrateToAdAnalyticsInterface(tmp4(7970).AdAnalyticsInterfaceExperimentStep.STEP_2_CLICKED_INTERNAL, "quest_bottom_sheet_mobile_activity")) {
            captureAdUserAction = captureAdUserAction(7971).captureAdUserAction;
            const obj9 = { type: tmp4(7981).AdUserActionType.CLICK_INTERNAL, adCreativeType: tmp4(5670).AdCreativeType.QUEST, adCreativeId: closure_128_0, questContentCTA: tmp4(7969).QuestContentCTA.LAUNCH_MOBILE_ACTIVITY, surfaceId: tmp4(5666).QuestContent.QUEST_BOTTOM_SHEET, sourceQuestContent: closure_128_1, impressionId: null, questContentPosition: null };
            let id;
            if (closure_128_4 != null) {
              id = obj6.getId();
            }
            obj9.impressionId = id;
            let questContentPosition;
            if (closure_128_4 != null) {
              questContentPosition = obj7.getQuestContentPosition();
            }
            obj9.questContentPosition = questContentPosition;
            captureAdUserAction(obj9);
            const captureAdUserActionResult = captureAdUserAction(7971);
            obj6 = closure_128_4;
            obj7 = closure_128_4;
          } else {
            const obj10 = { questId: closure_128_0, questContent: tmp4(5666).QuestContent.QUEST_BOTTOM_SHEET, questContentCTA: tmp4(7969).QuestContentCTA.LAUNCH_MOBILE_ACTIVITY, questContentPosition: null, impressionId: null, sourceQuestContent: null };
            let questContentPosition1;
            if (closure_128_4 != null) {
              questContentPosition1 = obj3.getQuestContentPosition();
            }
            obj10.questContentPosition = questContentPosition1;
            let id1;
            if (closure_128_4 != null) {
              id1 = obj4.getId();
            }
            obj10.impressionId = id1;
            obj10.sourceQuestContent = closure_128_1;
            const result = captureAdUserAction(7959).trackQuestContentClicked(obj10);
            const captureAdUserActionResult2 = captureAdUserAction(7959);
            obj3 = closure_128_4;
            obj4 = closure_128_4;
          }
          dependencyMap = 3;
          obj12 = tmp4(7970);
        }
      } catch (tmp36) {
        dependencyMap = tmp;
        throw tmp36;
      }
    }
  }), items);
});
