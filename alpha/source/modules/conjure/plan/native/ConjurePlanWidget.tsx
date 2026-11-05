// Module ID: 12968
// Function ID: 12969
// Name: ConjurePlanWidget
// Dependencies: [19, 502, 21, 5143, 575, 8960, 504, 7922, 12467, 2]
// Exports: default

// Module 12968 (ConjurePlanWidget)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import UserProfileApplicationWidgetTypes from "UserProfileApplicationWidgetTypes" /* 7922 */;
import UserProfileSharedStylesDefault from "UserProfileSharedStyles" /* 8960 */;
import UserProfileApplicationWidgetCardDefault from "UserProfileApplicationWidgetCard" /* 12467 */;
import react from "react" /* 19 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import createStyles from "createStyles" /* 5143 */;
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
