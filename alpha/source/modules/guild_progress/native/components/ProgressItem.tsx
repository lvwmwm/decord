// Module ID: 13470
// Function ID: 13471
// Name: ProgressItem
// Dependencies: [19, 17, 1071, 21, 5043, 575, 6013, 7186, 1112, 8090, 5730, 5634, 2]
// Exports: default

// Module 13470 (ProgressItem)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1071 */;
import AppAnalyticsUtilsDefault from "AppAnalyticsUtils" /* 6013 */;
import react from "react" /* 19 */;
import createStyles_mod from "createStyles" /* 5043 */;
import size_mod from "module_2" /* 2 */;

let obj2;
let size;
const View = react_native.View;
const AnalyticEvents = Constants.AnalyticEvents;
const jsx = Fragment.jsx;
let createStyles = createStyles_mod;
let obj = { container: obj2, icon: size, completedIcon: { opacity: 0.3 } };
obj2 = { marginBottom: nativeDefault.space.PX_8 };
createStyles = createStyles.createStyles;
size = { width: nativeDefault.space.PX_40, height: nativeDefault.space.PX_40 };
let closure_7 = createStyles(obj);
size = size_mod;
const result = size.fileFinishedImporting("modules/guild_progress/native/components/ProgressItem.tsx");

export default function ProgressItem(isCompleted) {
  let RowButton;
  let Text;
  let analyticsSetupType;
  let description;
  let iconStyle;
  let items1;
  let obj3;
  let onPress;
  let renderEndComponentResult;
  let source;
  let str;
  let title;
  let tmp8Result;
  let tmp8Result2;
  ({ source, onPress } = isCompleted);
  isCompleted = isCompleted.isCompleted;
  ({ description, analyticsSetupType } = isCompleted);
  const analyticsAction = isCompleted.analyticsAction;
  const renderEndComponent = isCompleted.renderEndComponent;
  ({ title, iconStyle } = isCompleted);
  let tmp = closure_7();
  const items = [analyticsAction, analyticsSetupType, onPress, isCompleted];
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
  if (isCompleted) {
    const CheckmarkLargeIcon = onPress(analyticsSetupType[7]).CheckmarkLargeIcon;
    const intl = onPress(analyticsSetupType[8]).intl;
    renderEndComponentResult = <CheckmarkLargeIcon color="status-positive" accessible={false} accessibilityLabel={intl.string(onPress(analyticsSetupType[8]).t.g62IJl)} />;
  } else if (renderEndComponent != null) {
    renderEndComponentResult = renderEndComponent();
  }
  let obj2 = { style: tmp.container, children: tmp8(RowButton, obj3) };
  obj3 = { onPress: callback, icon: tmp8Result, label: jsx(Text, { variant: "heading-sm/semibold", color: str, maxFontSizeMultiplier: 2, children: title }), subLabel: tmp8Result2, arrow: null == renderEndComponentResult, trailing: renderEndComponentResult };
  tmp8Result = undefined;
  RowButton = onPress(analyticsSetupType[9]).RowButton;
  const tmp9 = View;
  if (null != source) {
    const obj4 = { source, style: items1, accessible: false };
    items1 = [tmp.icon, iconStyle, ];
    let completedIcon;
    const tmp14 = isCompleted(analyticsSetupType[10]);
    if (isCompleted) {
      completedIcon = tmp.completedIcon;
    }
    items1[2] = completedIcon;
    tmp8Result = tmp8(tmp14, obj4);
  }
  str = "mobile-text-heading-primary";
  Text = tmp10(tmp11[11]).Text;
  if (isCompleted) {
    str = "text-muted";
  }
  tmp8Result2 = undefined;
  if (null != description) {
    let str2 = "text-subtle";
    const Text2 = tmp10(tmp11[11]).Text;
    if (isCompleted) {
      str2 = "text-muted";
    }
    const obj5 = { variant: "body-xs/medium", color: str2, children: description };
    tmp8Result2 = tmp8(Text2, obj5);
  }
  return jsx(tmp9, obj2);
};
