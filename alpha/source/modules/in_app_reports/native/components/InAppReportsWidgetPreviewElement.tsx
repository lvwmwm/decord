// Module ID: 15300
// Function ID: 15301
// Name: InAppReportsWidgetPreviewElement
// Dependencies: [19, 17, 21, 5141, 575, 8938, 7902, 15104, 7898, 15079, 5747, 1113, 2]
// Exports: default

// Module 15300 (InAppReportsWidgetPreviewElement)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import intl2 from "intl" /* 1113 */;
import UserProfileGameWidgetTypes from "UserProfileGameWidgetTypes" /* 7898 */;
import UserProfilePersonalWidget from "UserProfilePersonalWidget" /* 7902 */;
import UserProfileSharedStylesDefault from "UserProfileSharedStyles" /* 8938 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5141 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let obj2;
let tmp2;
const UserProfilePersonalWidgetCardDefault = tmp2(15104);
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let obj = { container: { alignSelf: "stretch", marginHorizontal: 16, marginBottom: 16 }, title: { lineHeight: 16, marginBottom: 8 }, card: obj2 };
obj2 = { backgroundColor: nativeDefault.colors.USER_PROFILE_CONTAINER_BACKGROUND };
let closure_6 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/in_app_reports/native/components/InAppReportsWidgetPreviewElement.tsx");

export default function WidgetPreview(arg0) {
  let intl;
  let items;
  let items1;
  let items2;
  let tmp6;
  let userId;
  let widget;
  ({ widget, userId } = arg0);
  const tmp = closure_6();
  const tmp4 = UserProfileSharedStylesDefault();
  if (widget instanceof UserProfilePersonalWidget.UserProfilePersonalWidget) {
    const obj = { userId, widget, disableInteraction: true, cardStyle: items };
    items = [tmp4.card, tmp.card];
    tmp6 = React3(UserProfilePersonalWidgetCardDefault, obj);
  } else {
    tmp6 = null;
    const tmp5Result = UserProfileGameWidgetTypes;
    if (tmp5Result.isGameWidget(widget)) {
      tmp6 = null;
      if (widget.games.length > 0) {
        const obj2 = { userId, widget, disableInteraction: true, cardStyle: items1 };
        items1 = [tmp4.card, tmp.card];
        tmp6 = React3(tmp5(15079).WidgetSection, obj2);
      }
    }
  }
  let tmp9 = null;
  if (null !== tmp6) {
    const obj3 = { style: tmp.container, children: items2 };
    const obj4 = { style: tmp.title, accessibilityRole: "header", variant: "body-sm/medium", children: intl.string(intl2.t.SpsnDY) };
    const Text = tmp5(5747).Text;
    intl = tmp5(1113).intl;
    items2 = [React3(Text, obj4), tmp6];
    tmp9 = hasOwnProperty(View, obj3);
  }
  return tmp9;
};
