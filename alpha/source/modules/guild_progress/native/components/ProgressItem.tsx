// Module ID: 14036
// Function ID: 14037
// Name: ProgressItem
// Dependencies: [19, 17, 1072, 21, 5014, 575, 5760, 8177, 2]
// Exports: default

// Module 14036 (ProgressItem)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1072 */;
import AppAnalyticsUtilsDefault from "AppAnalyticsUtils" /* 5760 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

let obj2;
const View = react_native.View;
const AnalyticEvents = Constants.AnalyticEvents;
const jsx = Fragment.jsx;
let obj = { formCTAContainer: { marginBottom: 8 }, formCTA: obj2, formCTAFullWidth: { width: "100%" } };
obj2 = { backgroundColor: nativeDefault.colors.CARD_BACKGROUND_DEFAULT };
let closure_7 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/guild_progress/native/components/ProgressItem.tsx");

export default function ProgressItem(onPress) {
  let FormCTA;
  let description;
  let fullWidth;
  let iconStyle;
  let obj2;
  let renderEndComponentResult;
  let source;
  let title;
  onPress = onPress.onPress;
  const isCompleted = onPress.isCompleted;
  const analyticsSetupType = onPress.analyticsSetupType;
  const analyticsAction = onPress.analyticsAction;
  const renderEndComponent = onPress.renderEndComponent;
  ({ title, source, description, fullWidth, iconStyle } = onPress);
  let tmp = closure_7();
  const items = [analyticsAction, analyticsSetupType, onPress, isCompleted];
  let obj = { style: tmp.formCTAContainer, children: tmp3(FormCTA, obj2) };
  const callback = analyticsAction.useCallback(() => {
    let tmp2 = null != analyticsAction;
    const tmp = analyticsAction;
    if (tmp2) {
      tmp2 = null != analyticsSetupType;
    }
    if (tmp2) {
      const obj2 = { setup_type: analyticsSetupType, action: tmp, action_completed: isCompleted };
      const obj = AppAnalyticsUtilsDefault;
      obj.trackWithMetadata(AnalyticEvents.SERVER_SETUP_CTA_CLICKED, obj2);
    }
    onPress();
  }, items);
  const items1 = [tmp.formCTA, ];
  let formCTAFullWidth;
  FormCTA = onPress(analyticsSetupType[7]).FormCTA;
  const tmp4 = View;
  if (fullWidth) {
    formCTAFullWidth = tmp.formCTAFullWidth;
  }
  obj2 = { variant: "row-button", style: items1, onPress: callback, iconSource: source, iconStyle, title, subtitle: description, completed: isCompleted, trailing: renderEndComponentResult };
  items1[1] = formCTAFullWidth;
  renderEndComponentResult = undefined;
  if (renderEndComponent != null) {
    renderEndComponentResult = renderEndComponent();
  }
  if (renderEndComponentResult == null) {
    renderEndComponentResult = null;
  }
  return jsx(tmp4, obj);
};
