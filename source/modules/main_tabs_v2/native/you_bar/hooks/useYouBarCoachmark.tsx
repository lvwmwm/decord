// Module ID: 14974
// Function ID: 112739
// Name: useYouBarCoachmark
// Dependencies: []
// Exports: useYouBarCoachmark

// Module 14974 (useYouBarCoachmark)
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importAll(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
const ContentDismissActionType = arg1(dependencyMap[3]).ContentDismissActionType;
let closure_6 = [];
const result = arg1(dependencyMap[15]).fileFinishedImporting("modules/main_tabs_v2/native/you_bar/hooks/useYouBarCoachmark.tsx");

export const useYouBarCoachmark = function useYouBarCoachmark(isQuestRendered) {
  isQuestRendered = isQuestRendered.isQuestRendered;
  const arg1 = isQuestRendered;
  const animatedRef = arg1(dependencyMap[6]).useAnimatedRef();
  const obj = arg1(dependencyMap[6]);
  const isInPrivateProfilesExperiment = arg1(dependencyMap[7]).useIsInPrivateProfilesExperiment("PrivateProfileCoachmark");
  const dependencyMap = isInPrivateProfilesExperiment;
  const obj2 = arg1(dependencyMap[7]);
  const isFocused = arg1(dependencyMap[8]).useIsFocused();
  const callback = isFocused;
  const obj3 = arg1(dependencyMap[8]);
  const items = [closure_4];
  const stateFromStores = arg1(dependencyMap[9]).useStateFromStores(items, () => {
    let obj = isQuestRendered(isInPrivateProfilesExperiment[10]);
    obj = { from: "authed", unit: isQuestRendered(isInPrivateProfilesExperiment[11]).TimeUnits.DAYS };
    const tmp = obj.getFirstInstallTimeElapsed(obj) >= 10;
    return null != guildId.getGuildId() && obj.getFirstInstallTimeElapsed(obj) >= 10;
  });
  const React = stateFromStores;
  const items1 = [isInPrivateProfilesExperiment, isQuestRendered, stateFromStores, isFocused];
  const memo = React.useMemo(() => {
    if (!isQuestRendered) {
      if (isFocused) {
        const items = [];
        if (stateFromStores) {
          items.push(isQuestRendered(isInPrivateProfilesExperiment[5]).DismissibleContent.YOU_BAR_DM_SWIPE_COACHMARK);
        }
        if (isInPrivateProfilesExperiment) {
          items.push(isQuestRendered(isInPrivateProfilesExperiment[5]).DismissibleContent.PRIVATE_PROFILE_COACHMARK);
        }
        return items;
      }
    }
    return closure_6;
  }, items1);
  const obj4 = arg1(dependencyMap[9]);
  const tmp6 = callback(arg1(dependencyMap[12]).useSelectedDismissibleContent(memo), 2);
  const visibleContent = tmp6[0];
  const markAsDismissed = tmp6[1];
  const obj5 = arg1(dependencyMap[12]);
  const tmp9 = function useSwipeCoachmarkProps(visibleContent) {
    visibleContent = visibleContent.visibleContent;
    const isQuestRendered = visibleContent;
    const markAsDismissed = visibleContent.markAsDismissed;
    const isInPrivateProfilesExperiment = markAsDismissed;
    const items = [markAsDismissed, visibleContent];
    return stateFromStores.useMemo(() => {
      const obj = {};
      const intl = visibleContent(markAsDismissed[4]).intl;
      obj.title = intl.string(visibleContent(markAsDismissed[4]).t.gMFchc);
      const intl2 = visibleContent(markAsDismissed[4]).intl;
      obj.description = intl2.string(visibleContent(markAsDismissed[4]).t.V3j11+);
      obj.position = "top";
      obj.visible = visibleContent === visibleContent(markAsDismissed[5]).DismissibleContent.YOU_BAR_DM_SWIPE_COACHMARK;
      obj.onDismiss = function onDismiss() {
        return callback(constants.USER_DISMISS);
      };
      return obj;
    }, items);
  }({ visibleContent, markAsDismissed });
  const privateProfileCoachmarkProps = arg1(dependencyMap[13]).usePrivateProfileCoachmarkProps({ visibleContent, markAsDismissed });
  const obj6 = arg1(dependencyMap[13]);
  const coachmark = arg1(dependencyMap[14]).useCoachmark(animatedRef, privateProfileCoachmarkProps);
  const obj7 = arg1(dependencyMap[14]);
  const coachmark1 = arg1(dependencyMap[14]).useCoachmark(animatedRef, tmp9);
  return { animatedRef, visibleContent, markAsDismissed };
};
