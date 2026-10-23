// Module ID: 12423
// Function ID: 12424
// Name: ConjurePlanWidget
// Dependencies: [19, 502, 21, 4969, 587, 558, 576, 8730, 504, 7706, 11877, 2]

// Module 12423 (ConjurePlanWidget)
import Fragment from "Fragment" /* 21 */;
import get_initialized from "get initialized" /* 504 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import UserProfileApplicationWidgetTypes from "UserProfileApplicationWidgetTypes" /* 7706 */;
import UserProfileSharedStylesDefault from "UserProfileSharedStyles" /* 8730 */;
import react from "react" /* 19 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import createStyles from "createStyles" /* 4969 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let obj2;
let tmp5;
const UserProfileApplicationWidgetCardDefault = tmp5(11877);
const jsx = Fragment.jsx;
let obj = { card: obj2 };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
let closure_6 = createStyles.createStyles(obj);
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function ConjurePlanWidget(arg0) {
  let applicationId;
  let id;
  let rendererProps;
  let tmp11;
  let tmp7;
  let tmp8;
  const obj = react2;
  const cResult = obj.c(12);
  ({ applicationId, rendererProps } = arg0);
  const tmp4 = closure_6();
  const tmp6 = UserProfileSharedStylesDefault();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [AuthenticationStore];
    const fn = function s() {
      return id.getId();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp7 = items;
    tmp8 = fn;
  } else {
    [tmp7, tmp8] = cResult;
  }
  const tmpResult = get_initialized;
  const stateFromStores = tmpResult.useStateFromStores(tmp7, tmp8);
  if (cResult[2] !== applicationId) {
    const self = this;
    const self2 = this;
    const obj2 = { applicationId };
    const applicationWidget = new tmp(7706).ApplicationWidget(obj2);
    cResult[2] = applicationId;
    cResult[3] = applicationWidget;
    tmp11 = applicationWidget;
  } else {
    tmp11 = cResult[3];
  }
  if (cResult[4] === tmp6.card) {
    let tmp15;
    if (cResult[5] === tmp4.card) {
      tmp15 = cResult[6];
    }
    if (cResult[7] === rendererProps) {
      if (cResult[8] === tmp15) {
        if (cResult[9] === stateFromStores) {
          let tmp16;
          if (cResult[10] === tmp11) {
            tmp16 = cResult[11];
          }
          return tmp16;
        }
      }
    }
    const tmp18 = jsx(UserProfileApplicationWidgetCardDefault, { userId: stateFromStores, widget: tmp11, rendererProps, cardStyle: tmp15 });
    cResult[7] = rendererProps;
    cResult[8] = tmp15;
    cResult[9] = stateFromStores;
    cResult[10] = tmp11;
    cResult[11] = tmp18;
    tmp16 = tmp18;
  }
  const items1 = [tmp6.card, tmp4.card];
  cResult[4] = tmp6.card;
  cResult[5] = tmp4.card;
  cResult[6] = items1;
  tmp15 = items1;
}) : (function ConjurePlanWidget(applicationId) {
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
});
const result = size.fileFinishedImporting("modules/conjure/plan/native/ConjurePlanWidget.tsx");

export default tmp2;
