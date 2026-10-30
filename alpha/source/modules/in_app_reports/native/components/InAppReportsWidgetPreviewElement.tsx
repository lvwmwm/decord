// Module ID: 15116
// Function ID: 15117
// Name: InAppReportsWidgetPreviewElement
// Dependencies: [19, 17, 21, 5009, 575, 7142, 8806, 7771, 14925, 7767, 14908, 5619, 1114, 2]
// Exports: default

// Module 15116 (InAppReportsWidgetPreviewElement)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import intl3 from "intl" /* 1114 */;
import useTypeConsolidationTextTransform from "useTypeConsolidationTextTransform" /* 7142 */;
import UserProfileGameWidgetTypes from "UserProfileGameWidgetTypes" /* 7767 */;
import UserProfilePersonalWidget from "UserProfilePersonalWidget" /* 7771 */;
import UserProfileSharedStylesDefault from "UserProfileSharedStyles" /* 8806 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let obj2;
let tmp5;
const UserProfilePersonalWidgetCardDefault = tmp5(14925);
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let obj = { container: { alignSelf: "stretch", marginHorizontal: 16, marginBottom: 16 }, title: { lineHeight: 16, marginBottom: 8 }, card: obj2 };
obj2 = { backgroundColor: nativeDefault.colors.USER_PROFILE_CONTAINER_BACKGROUND };
let closure_6 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/in_app_reports/native/components/InAppReportsWidgetPreviewElement.tsx");

export default function WidgetPreview(arg0) {
  let items;
  let items1;
  let items3;
  let stringResult;
  let tmp7;
  let userId;
  let widget;
  ({ widget, userId } = arg0);
  const tmp = closure_6();
  const obj = useTypeConsolidationTextTransform;
  const typeConsolidationEyebrow = obj.useTypeConsolidationEyebrow("InAppReportsWidgetPreview", "text-xs/bold");
  const tmp6 = UserProfileSharedStylesDefault();
  if (widget instanceof UserProfilePersonalWidget.UserProfilePersonalWidget) {
    const obj2 = { userId, widget, disableInteraction: true, cardStyle: items };
    items = [tmp6.card, tmp.card];
    tmp7 = React3(UserProfilePersonalWidgetCardDefault, obj2);
  } else {
    tmp7 = null;
    const tmp2Result = UserProfileGameWidgetTypes;
    if (tmp2Result.isGameWidget(widget)) {
      tmp7 = null;
      if (widget.games.length > 0) {
        const obj3 = { userId, widget, disableInteraction: true, cardStyle: items1 };
        items1 = [tmp6.card, tmp.card];
        tmp7 = React3(tmp2(14908).WidgetSection, obj3);
      }
    }
  }
  let tmp12Result = null;
  if (null !== tmp7) {
    let title;
    const obj4 = { style: tmp.container, children: items3 };
    const Text = tmp2(5619).Text;
    const tmp12 = hasOwnProperty;
    const tmp13 = View;
    const tmp14 = React3;
    if (null != typeConsolidationEyebrow.style) {
      const items2 = [tmp.title, typeConsolidationEyebrow.style];
      title = items2;
    } else {
      title = tmp.title;
    }
    const obj5 = { style: title, accessibilityRole: "header", variant: typeConsolidationEyebrow.variant, children: stringResult };
    if (null != typeConsolidationEyebrow.style) {
      const intl2 = tmp2(1114).intl;
      stringResult = intl2.string(tmp2(1114).t.SpsnDY);
    } else {
      const intl = tmp2(1114).intl;
      const str = intl.string(intl3.t.SpsnDY);
      stringResult = str.toUpperCase();
    }
    items3 = [tmp14(Text, obj5), tmp7];
    tmp12Result = tmp12(tmp13, obj4);
  }
  return tmp12Result;
};
