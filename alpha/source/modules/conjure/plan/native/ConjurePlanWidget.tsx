// Module ID: 18625
// Function ID: 18626
// Name: ConjurePlanWidget
// Dependencies: [19, 502, 21, 4792, 575, 8078, 504, 6842, 10152, 2]
// Exports: default

// Module 18625 (ConjurePlanWidget)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import UserProfileApplicationWidgetTypes from "UserProfileApplicationWidgetTypes" /* 6842 */;
import UserProfileSharedStylesDefault from "UserProfileSharedStyles" /* 8078 */;
import UserProfileApplicationWidgetCardDefault from "UserProfileApplicationWidgetCard" /* 10152 */;
import react from "react" /* 19 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import createStyles from "createStyles" /* 4792 */;
import size from "module_2" /* 2 */;

let obj2;
const jsx = Fragment.jsx;
let obj = { card: obj2 };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
let closure_6 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/conjure/plan/native/ConjurePlanWidget.tsx");

export default function ConjurePlanWidget(applicationId) {
  let id;
  applicationId = applicationId.applicationId;
  const rendererProps = applicationId.rendererProps;
  const tmp = closure_6();
  const tmp2 = UserProfileSharedStylesDefault();
  let obj = applicationId(504);
  const items = [AuthenticationStore];
  const items1 = [applicationId];
  const stateFromStores = obj.useStateFromStores(items, () => id.getId());
  const memo = react.useMemo(() => {
    const obj = { applicationId };
    const applicationWidget = new UserProfileApplicationWidgetTypes.ApplicationWidget(obj);
    return applicationWidget;
  }, items1);
  const items2 = [tmp2.card, tmp.card];
  return jsx(UserProfileApplicationWidgetCardDefault, { userId: stateFromStores, widget: memo, rendererProps, cardStyle: items2 });
};
