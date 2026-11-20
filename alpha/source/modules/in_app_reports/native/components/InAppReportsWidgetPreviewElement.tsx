// Module ID: 10078
// Function ID: 10079
// Name: InAppReportsWidgetPreviewElement
// Dependencies: [19, 17, 21, 4794, 575, 8077, 6839, 10079, 5385, 1112, 2]
// Exports: default

// Module 10078 (InAppReportsWidgetPreviewElement)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import intl2 from "intl" /* 1112 */;
import UserProfileGameWidgetTypes from "UserProfileGameWidgetTypes" /* 6839 */;
import UserProfileSharedStylesDefault from "UserProfileSharedStyles" /* 8077 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4794 */;
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
      tmp5 = React3(tmp4(10079).WidgetSection, obj2);
    }
  }
  let tmp7 = null;
  if (null !== tmp5) {
    const obj3 = { style: tmp.container, children: items1 };
    const obj4 = { style: tmp.title, accessibilityRole: "header", variant: "body-sm/medium", children: intl.string(intl2.t.SpsnDY) };
    const Text = tmp4(5385).Text;
    intl = tmp4(1112).intl;
    items1 = [React3(Text, obj4), tmp5];
    tmp7 = hasOwnProperty(View, obj3);
  }
  return tmp7;
};
