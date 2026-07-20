// Module ID: 9107
// Function ID: 71345
// Name: useNavigationHeaderAccessibilityRefreshKey
// Dependencies: []
// Exports: default

// Module 9107 (useNavigationHeaderAccessibilityRefreshKey)
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importAll(dependencyMap[2]);
const AccessibilityInfo = arg1(dependencyMap[3]).AccessibilityInfo;

export default function useNavigationHeaderAccessibilityRefreshKey() {
  const navigation = arg1(closure_1[4]).useNavigation();
  const arg1 = navigation;
  const tmp2 = callback(React.useState(0), 2);
  closure_1 = tmp2[1];
  const items = [navigation];
  const effect = React.useEffect(() => {
    // CreateGeneratorClosureLongIndex (0x67)
    return navigation.addListener("focus", callback(tmp));
  }, items);
  return "key-" + tmp2[0];
};
