// Module ID: 11500
// Function ID: 89606
// Name: ProgressItem
// Dependencies: []
// Exports: default

// Module 11500 (ProgressItem)
let closure_3 = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
const AnalyticEvents = arg1(dependencyMap[2]).AnalyticEvents;
const jsx = arg1(dependencyMap[3]).jsx;
let obj = arg1(dependencyMap[4]);
obj = { formCTAContainer: { marginBottom: 8 } };
obj = { backgroundColor: importDefault(dependencyMap[5]).colors.CARD_BACKGROUND_DEFAULT };
obj.formCTA = obj;
obj.formCTAFullWidth = { width: "100%" };
let closure_7 = obj.createStyles(obj);
const result = arg1(dependencyMap[8]).fileFinishedImporting("modules/guild_progress/native/components/ProgressItem.tsx");

export default function ProgressItem(onPress) {
  let description;
  let fullWidth;
  let iconStyle;
  let source;
  let title;
  onPress = onPress.onPress;
  const arg1 = onPress;
  const isCompleted = onPress.isCompleted;
  const importDefault = isCompleted;
  const analyticsSetupType = onPress.analyticsSetupType;
  const dependencyMap = analyticsSetupType;
  const analyticsAction = onPress.analyticsAction;
  const React = analyticsAction;
  const renderEndComponent = onPress.renderEndComponent;
  ({ title, source, description, fullWidth, iconStyle } = onPress);
  const tmp = callback();
  const items = [analyticsAction, analyticsSetupType, onPress, isCompleted];
  let obj = { style: tmp.formCTAContainer };
  const callback = React.useCallback(() => {
    let tmp = null != analyticsAction;
    if (tmp) {
      tmp = null != analyticsSetupType;
    }
    if (tmp) {
      let obj = isCompleted(analyticsSetupType[6]);
      obj = { setup_type: analyticsSetupType, action: analyticsAction, action_completed: isCompleted };
      obj.trackWithMetadata(constants.SERVER_SETUP_CTA_CLICKED, obj);
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
  obj.children = jsx(arg1(dependencyMap[7]).FormCTA, obj);
  return <View {...obj} />;
};
