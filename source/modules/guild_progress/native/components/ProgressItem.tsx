// Module ID: 11511
// Function ID: 89681
// Name: ProgressItem
// Dependencies: [31, 27, 653, 33, 4130, 689, 4324, 7495, 2]
// Exports: default

// Module 11511 (ProgressItem)
import result from "result";
import { View } from "get ActivityIndicator";
import { AnalyticEvents } from "ME";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
_createForOfIteratorHelperLoose = { formCTAContainer: { marginBottom: 8 } };
_createForOfIteratorHelperLoose = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.CARD_BACKGROUND_DEFAULT };
_createForOfIteratorHelperLoose.formCTA = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.formCTAFullWidth = { width: "100%" };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("ME").fileFinishedImporting("modules/guild_progress/native/components/ProgressItem.tsx");

export default function ProgressItem(onPress) {
  let description;
  let fullWidth;
  let iconStyle;
  let source;
  let title;
  onPress = onPress.onPress;
  const isCompleted = onPress.isCompleted;
  const analyticsSetupType = onPress.analyticsSetupType;
  const analyticsAction = onPress.analyticsAction;
  const renderEndComponent = onPress.renderEndComponent;
  ({ title, source, description, fullWidth, iconStyle } = onPress);
  let tmp = _createForOfIteratorHelperLoose();
  const items = [analyticsAction, analyticsSetupType, onPress, isCompleted];
  let obj = { style: tmp.formCTAContainer };
  const callback = analyticsAction.useCallback(() => {
    let tmp = null != analyticsAction;
    if (tmp) {
      tmp = null != analyticsSetupType;
    }
    if (tmp) {
      let obj = isCompleted(analyticsSetupType[6]);
      obj = { setup_type: analyticsSetupType, action: analyticsAction, action_completed: isCompleted };
      obj.trackWithMetadata(outer1_5.SERVER_SETUP_CTA_CLICKED, obj);
    }
    onPress();
  }, items);
  obj = { variant: "row-button" };
  const items1 = [tmp.formCTA, ];
  let formCTAFullWidth;
  if (fullWidth) {
    formCTAFullWidth = tmp.formCTAFullWidth;
  }
  items1[1] = formCTAFullWidth;
  obj.style = items1;
  obj.onPress = callback;
  obj.iconSource = source;
  obj.iconStyle = iconStyle;
  obj.title = title;
  obj.subtitle = description;
  obj.completed = isCompleted;
  let renderEndComponentResult;
  if (null != renderEndComponent) {
    renderEndComponentResult = renderEndComponent();
  }
  let tmp7 = null;
  if (null != renderEndComponentResult) {
    tmp7 = renderEndComponentResult;
  }
  obj.trailing = tmp7;
  obj.children = jsx(onPress(analyticsSetupType[7]).FormCTA, { variant: "row-button" });
  return <View variant="row-button" />;
};
