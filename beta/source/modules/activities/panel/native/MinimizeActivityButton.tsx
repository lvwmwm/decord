// Module ID: 19206
// Function ID: 19207
// Name: MinimizeActivityButton
// Dependencies: [19, 17, 5539, 21, 4913, 5511, 12801, 1112, 7591, 2]

// Module 19206 (MinimizeActivityButton)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import ActivityPanelConstants from "ActivityPanelConstants" /* 5539 */;
import AssetRegistryDefault from "AssetRegistry" /* 12801 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4913 */;
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
      ({ icon: AssetRegistryDefault, accessibilityLabel: intl2.string(setMode(1112).t.brPQ5U), onPress: callback, text: activityName, size: "sm", variant: "secondary-overlay", maxFontSizeMultiplier: 1, shrink: true });
      const Button = setMode(5511).Button;
      intl2 = setMode(1112).intl;
      tmp3 = <View style={tmp2.buttonParent}>{null}</View>;
    }
    return tmp3;
  }
  const IconButton = setMode(7591).IconButton;
  const intl = setMode(1112).intl;
  tmp3 = <IconButton icon={AssetRegistryDefault} accessibilityLabel={intl.string(setMode(1112).t.brPQ5U)} onPress={callback} size="sm" variant="secondary-overlay" maxFontSizeMultiplier={1} />;
});
const result = size.fileFinishedImporting("modules/activities/panel/native/MinimizeActivityButton.tsx");

export default memoResult;
