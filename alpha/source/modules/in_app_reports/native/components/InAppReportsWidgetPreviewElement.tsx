// Module ID: 10075
// Function ID: 10076
// Name: InAppReportsWidgetPreviewElement
// Dependencies: [19, 17, 21, 4792, 575, 8078, 6839, 10076, 5383, 1113, 2]
// Exports: default

// Module 10075 (InAppReportsWidgetPreviewElement)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import intl2 from "intl" /* 1113 */;
import UserProfileGameWidgetTypes from "UserProfileGameWidgetTypes" /* 6839 */;
import UserProfileSharedStylesDefault from "UserProfileSharedStyles" /* 8078 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4792 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let obj2;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let obj = { container: { alignSelf: "stretch", marginHorizontal: 16, marginBottom: 16 }, title: { lineHeight: 16, marginBottom: 8 }, card: obj2 };
obj2 = { backgroundColor: nativeDefault.colors.USER_PROFILE_CONTAINER_BACKGROUND };
let closure_6 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/in_app_reports/native/components/InAppReportsWidgetPreviewElement.tsx");

export default function WidgetPreview(widget) {
  let intl;
  let items;
  let items1;
  widget = widget.widget;
  const userId = widget.userId;
  const tmp = closure_6();
  let tmp5 = null;
  const tmp3 = UserProfileSharedStylesDefault();
  const obj = UserProfileGameWidgetTypes;
  if (obj.isGameWidget(widget)) {
    tmp5 = null;
    if (widget.games.length > 0) {
      const obj2 = { userId, widget, disableInteraction: true, cardStyle: items };
      items = [tmp3.card, tmp.card];
      tmp5 = React3(tmp4(10076).WidgetSection, obj2);
    }
  }
  let tmp7 = null;
  if (null !== tmp5) {
    const obj3 = { style: tmp.container, children: items1 };
    const obj4 = { style: tmp.title, accessibilityRole: "header", variant: "body-sm/medium", children: intl.string(intl2.t.SpsnDY) };
    const Text = tmp4(5383).Text;
    intl = tmp4(1113).intl;
    items1 = [React3(Text, obj4), tmp5];
    tmp7 = hasOwnProperty(View, obj3);
  }
  return tmp7;
};
