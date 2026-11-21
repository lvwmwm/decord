// Module ID: 16586
// Function ID: 16587
// Name: useQuestDockAcceptQuest
// Dependencies: [5, 19, 8404, 6558, 16508, 563, 16469, 16479, 9958, 16397, 13756, 6561, 8430, 16504, 9959, 16511, 2]
// Exports: useQuestDockAcceptQuest

// Module 16586 (useQuestDockAcceptQuest)
import QuestConstants from "QuestConstants" /* 6558 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import QuestStore from "QuestStore" /* 8404 */;
import size from "module_2" /* 2 */;

let c2, c3;

const QuestDockMode = QuestConstants.QuestDockMode;
const result = size.fileFinishedImporting("modules/quests/native/QuestDock/useQuestDockAcceptQuest.tsx");

export function useQuestDockAcceptQuest() {
  let isMobileActivityQuest;
  let isQuestAccessSuspended;
  let questDockQuest;
  let setRestingQuestDockMode;
  let obj = questDockQuest(isMobileActivityQuest[4]);
  questDockQuest = obj.useQuestDockQuest();
  let obj2 = questDockQuest(isMobileActivityQuest[5]);
  const items = [isQuestAccessSuspended];
  const stateFromStores = obj2.useStateFromStores(items, () => QuestStore.isEnrolling(questDockQuest.id));
  let obj3 = questDockQuest(isMobileActivityQuest[6]);
  const hasWatchVideoOnMobileTasks = obj3.useHasWatchVideoOnMobileTasks(questDockQuest.config);
  let obj4 = questDockQuest(isMobileActivityQuest[6]);
  const mobileActivityQuest = obj4.useMobileActivityQuest(questDockQuest);
  isMobileActivityQuest = mobileActivityQuest.isMobileActivityQuest;
  const launchMobileActivity = mobileActivityQuest.launchMobileActivity;
  const questApplication = mobileActivityQuest.questApplication;
  setRestingQuestDockMode = setRestingQuestDockMode.useContext(questDockQuest(isMobileActivityQuest[7]).QuestDockExternalCoordinationContext).setRestingQuestDockMode;
  let obj5 = questDockQuest(isMobileActivityQuest[8]);
  isQuestAccessSuspended = obj5.useIsQuestAccessSuspended();
  let obj6 = questDockQuest(isMobileActivityQuest[9]);
  const trackQuestContentClickedWithImpression = obj6.useTrackQuestContentClickedWithImpression();
  let obj7 = questDockQuest(isMobileActivityQuest[10]);
  const primaryCtaCopy = obj7.usePrimaryCtaCopy({ quest: questDockQuest, application: questApplication, shortText: true });
  const useCallback = setRestingQuestDockMode.useCallback;
  let closure_0 = launchMobileActivity(function*(arg0, value) {
    let v3;
    closure_0 = arg0;
    if (c3 === 2) {
      c3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp2 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        let c1;
        c3 = 2;
        if (0 === c2) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            c1 = 0;
            const tmp50 = isQuestAccessSuspended;
            if (tmp50) {
              const obj4 = { questId: closure_0.id, questContent: closure_0(isMobileActivityQuest[11]).QuestContent.QUEST_BAR_MOBILE, questContentCTA: closure_0(isMobileActivityQuest[12]).QuestContentCTA.QUEST_ACCESS_SUSPENDED, sourceQuestContent: closure_0(isMobileActivityQuest[11]).QuestContent.QUEST_BAR_MOBILE };
              constants(obj4);
              hasWatchVideoOnMobileTasks(isMobileActivityQuest[13])();
              c3 = 3;
              const obj5 = { value: undefined, done: true };
              return obj5;
            } else {
              const obj6 = { questContentCTA: tmp49, questContent: closure_0(isMobileActivityQuest[11]).QuestContent.QUEST_BAR_MOBILE, sourceQuestContent: closure_0(isMobileActivityQuest[11]).QuestContent.QUEST_BAR_MOBILE };
              const enrollInQuest = closure_0(isMobileActivityQuest[14]).enrollInQuest;
              const id = closure_0.id;
              const tmp22 = closure_0(isMobileActivityQuest[14]);
              c2 = 1;
              c3 = 1;
              const obj7 = { value: enrollInQuest(id, obj6), done: false };
              return obj7;
            }
          }
        } else {
          if (1 === tmp3) {
            if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              const obj8 = { value, done: true };
              return obj8;
            } else if (value.type === closure_0(isMobileActivityQuest[14]).QuestEnrollmentResultType.SUCCESS) {
              const tmp48 = c2;
              if (tmp48) {
                c2 = 2;
                c3 = 1;
                const obj9 = { value: c3(), done: false };
                return obj9;
              } else {
                const tmp8 = c1;
                if (tmp8) {
                  const obj10 = { questId: closure_0.id, sourceQuestContent: closure_0(isMobileActivityQuest[11]).QuestContent.QUEST_BAR_MOBILE };
                  const tmp11 = hasWatchVideoOnMobileTasks(isMobileActivityQuest[15]);
                  tmp11(obj10);
                  setRestingQuestDockMode(constants.COLLAPSED);
                }
              }
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj = { value, done: true };
            return obj;
          } else {
            setRestingQuestDockMode(constants.COLLAPSED);
          }
          c3 = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp40) {
        c3 = 3;
        throw tmp40;
      }
    }
  });
  const items1 = [questDockQuest.id, hasWatchVideoOnMobileTasks, setRestingQuestDockMode, isMobileActivityQuest, launchMobileActivity, isQuestAccessSuspended, trackQuestContentClickedWithImpression];
  let obj8 = {
    handleAcceptQuest: useCallback(function() {
      return closure_0(...arguments);
    }, items1),
    isEnrolling: stateFromStores,
    primaryCtaCopy
  };
  return obj8;
}
