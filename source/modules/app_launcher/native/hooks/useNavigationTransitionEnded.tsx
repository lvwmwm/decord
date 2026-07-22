// Module ID: 11238
// Function ID: 87486
// Name: useNavigationTransitionEnded
// Dependencies: []
// Exports: default

// Module 11238 (useNavigationTransitionEnded)
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importAll(dependencyMap[1]);
const useAppLauncherNavigation = arg1(dependencyMap[2]).useAppLauncherNavigation;
const result = arg1(dependencyMap[4]).fileFinishedImporting("modules/app_launcher/native/hooks/useNavigationTransitionEnded.tsx");

export default function useNavigationTransitionEnded() {
  const tmp = callback(React.useState(false), 2);
  const arg1 = tmp2;
  const tmp3 = useAppLauncherNavigation();
  const dependencyMap = tmp3;
  const route = arg1(dependencyMap[3]).useRoute();
  const callback = route;
  const items = [tmp3, route, tmp[1]];
  const effect = React.useEffect(() => tmp3.addListener("transitionEnd", () => {
    const state = state.getState();
    if (state.routes[state.index].key === key.key) {
      callback(true);
    }
  }), items);
  return tmp[0];
};
