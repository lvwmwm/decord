// Module ID: 19089
// Function ID: 19090
// Name: MinimizeActivityButton
// Dependencies: [19, 17, 5652, 21, 5009, 5629, 11378, 1114, 8020, 2]

// Module 19089 (MinimizeActivityButton)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import ActivityPanelConstants from "ActivityPanelConstants" /* 5652 */;
import AssetRegistryDefault from "AssetRegistry" /* 11378 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

const View = react_native.View;
const ActivityPanelModes = ActivityPanelConstants.ActivityPanelModes;
const jsx = Fragment.jsx;
let closure_7 = createStyles.createStyles({ buttonParent: { flexShrink: 1 } });
const memoResult = react.memo(function MinimizeActivityButton(arg0) {
  let activityName;
  let intl2;
  let setMode;
  ({ activityName, setMode } = arg0);
  const items = [setMode];
  const callback = react.useCallback(() => {
    setMode(ActivityPanelModes.PIP);
  }, items);
  if (undefined !== activityName) {
    let tmp3;
    if ("" !== activityName) {
      ({ icon: AssetRegistryDefault, accessibilityLabel: intl2.string(setMode(1114).t.brPQ5U), onPress: callback, text: activityName, size: "sm", variant: "secondary-overlay", maxFontSizeMultiplier: 1, shrink: true });
      const Button = setMode(5629).Button;
      intl2 = setMode(1114).intl;
      tmp3 = <View style={tmp2.buttonParent}>{null}</View>;
    }
    return tmp3;
  }
  const IconButton = setMode(8020).IconButton;
  const intl = setMode(1114).intl;
  tmp3 = <IconButton icon={AssetRegistryDefault} accessibilityLabel={intl.string(setMode(1114).t.brPQ5U)} onPress={callback} size="sm" variant="secondary-overlay" maxFontSizeMultiplier={1} />;
});
const result = size.fileFinishedImporting("modules/activities/panel/native/MinimizeActivityButton.tsx");

export default memoResult;
