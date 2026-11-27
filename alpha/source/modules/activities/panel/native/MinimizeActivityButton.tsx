// Module ID: 19429
// Function ID: 19430
// Name: MinimizeActivityButton
// Dependencies: [19, 17, 5669, 21, 5043, 5641, 9818, 1112, 7944, 2]

// Module 19429 (MinimizeActivityButton)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import ActivityPanelConstants from "ActivityPanelConstants" /* 5669 */;
import AssetRegistryDefault from "AssetRegistry" /* 9818 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5043 */;
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
      const Button = setMode(5641).Button;
      intl2 = setMode(1112).intl;
      tmp3 = <View style={tmp2.buttonParent}>{null}</View>;
    }
    return tmp3;
  }
  const IconButton = setMode(7944).IconButton;
  const intl = setMode(1112).intl;
  tmp3 = <IconButton icon={AssetRegistryDefault} accessibilityLabel={intl.string(setMode(1112).t.brPQ5U)} onPress={callback} size="sm" variant="secondary-overlay" maxFontSizeMultiplier={1} />;
});
const result = size.fileFinishedImporting("modules/activities/panel/native/MinimizeActivityButton.tsx");

export default memoResult;
