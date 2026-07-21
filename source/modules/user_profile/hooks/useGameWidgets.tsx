// Module ID: 11984
// Function ID: 92634
// Name: useGameWidgets
// Dependencies: []
// Exports: useGameWidgets

// Module 11984 (useGameWidgets)
let closure_3 = importAll(dependencyMap[0]);
const result = arg1(dependencyMap[4]).fileFinishedImporting("modules/user_profile/hooks/useGameWidgets.tsx");

export const useGameWidgets = function useGameWidgets(id) {
  const isMobileGameCollectionExperimentEnabled = arg1(dependencyMap[1]).useIsMobileGameCollectionExperimentEnabled("UserProfileWidgetsBoard");
  const arg1 = isMobileGameCollectionExperimentEnabled;
  const tmp2 = importDefault(dependencyMap[2])(id);
  const importDefault = tmp2;
  const items = [isMobileGameCollectionExperimentEnabled, tmp2];
  return React.useMemo(() => {
    if (isMobileGameCollectionExperimentEnabled) {
      const found = tmp2.filter(isMobileGameCollectionExperimentEnabled(closure_2[3]).isGameWidget);
      let found1 = found.filter((games) => games.games.length > 0);
    } else {
      found1 = [];
    }
    return found1;
  }, items);
};
