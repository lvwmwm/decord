// Module ID: 9155
// Function ID: 71631
// Name: useNavigationHeaderAccessibilityRefreshKey
// Dependencies: [5, 57, 31, 27, 1457]
// Exports: default

// Module 9155 (useNavigationHeaderAccessibilityRefreshKey)
import asyncGeneratorStep from "asyncGeneratorStep";
import _slicedToArray from "_slicedToArray";
import result from "result";
import { AccessibilityInfo } from "get ActivityIndicator";

const require = arg1;

export default function useNavigationHeaderAccessibilityRefreshKey() {
  navigation = navigation(1457).useNavigation();
  const tmp2 = callback(React.useState(0), 2);
  const dependencyMap = tmp2[1];
  const items = [navigation];
  const effect = React.useEffect(() => {
    // CreateGeneratorClosureLongIndex (0x67)
    return navigation.addListener("focus", outer1_2(tmp));
  }, items);
  return "key-" + tmp2[0];
};
