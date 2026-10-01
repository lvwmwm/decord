// Module ID: 16588
// Function ID: 16589
// Name: IncomingRequestRow
// Dependencies: [19, 4825, 5063, 10320, 1074, 21, 4566, 563, 1115, 4678, 15677, 12125, 10328, 16079, 16589, 2]
// Exports: ConnectedIncomingGameFriendRequestRow, IncomingFriendRequestRow

// Module 16588 (IncomingRequestRow)
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1074 */;
import intl6 from "intl" /* 1115 */;
import UserUtilsDefault from "UserUtils" /* 4678 */;
import UserRowConstants from "UserRowConstants" /* 10320 */;
import ApplicationIconAndNameDefault from "ApplicationIconAndName" /* 12125 */;
import AddFriendsScreenUtils from "AddFriendsScreenUtils" /* 15677 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4825 */;
import ApplicationStore from "ApplicationStore" /* 5063 */;
import size from "module_2" /* 2 */;

function IncomingRequestRow(user) {
  let acceptedRequestAccessibilityLabel;
  let acceptedRequestLabel;
  let accessibilityLabel;
  let obj6;
  let obj7;
  user = user.user;
  const applicationId = user.applicationId;
  const accepted = user.accepted;
  const onAcceptIncomingRequest = user.onAcceptIncomingRequest;
  const onDeclineIncomingRequest = user.onDeclineIncomingRequest;
  const acceptRequestAccessibilityLabel = user.acceptRequestAccessibilityLabel;
  const ignoreRequestAccessibilityLabel = user.ignoreRequestAccessibilityLabel;
  ({ accessibilityLabel, acceptedRequestLabel, acceptedRequestAccessibilityLabel } = user);
  const merged = Object.assign(user, Object.assign({ user: 0, applicationId: 0, accepted: 0, onAcceptIncomingRequest: 0, onDeclineIncomingRequest: 0, accessibilityLabel: 0, acceptRequestAccessibilityLabel: 0, ignoreRequestAccessibilityLabel: 0, acceptedRequestLabel: 0, acceptedRequestAccessibilityLabel: 0 }));
  let obj = user(accepted[6]);
  const sharedValue = obj.useSharedValue(false);
  let obj2 = user(accepted[7]);
  let items = [onDeclineIncomingRequest];
  const stateFromStores = obj2.useStateFromStores(items, () => onDeclineIncomingRequest.useReducedMotion);
  let items1 = [accepted, sharedValue];
  const effect = onAcceptIncomingRequest.useEffect(() => {
    const result = sharedValue.set(accepted);
  }, items1);
  const items2 = [acceptRequestAccessibilityLabel, accepted, ignoreRequestAccessibilityLabel, user];
  const items3 = [applicationId, onAcceptIncomingRequest, onDeclineIncomingRequest, sharedValue, user];
  const memo = onAcceptIncomingRequest.useMemo(() => {
    let items1;
    let obj4;
    const obj = { name: null, label: null };
    if (accepted) {
      obj.name = stateFromStores1.WAVE;
      const intl = intl6.intl;
      const formatToPlainString = intl.formatToPlainString;
      const obj2 = { username: obj4.getName(user) };
      const m0zYbV = intl6.t.m0zYbV;
      obj4 = UserUtilsDefault;
      obj.label = formatToPlainString(m0zYbV, obj2);
      const items = [obj];
      items1 = items;
    } else {
      obj.name = stateFromStores1.ACCEPT;
      obj.label = acceptRequestAccessibilityLabel;
      items1 = [obj, ];
      const obj3 = { name: stateFromStores1.DECLINE, label: ignoreRequestAccessibilityLabel };
      items1[1] = obj3;
    }
    return items1;
  }, items2);
  const callback = onAcceptIncomingRequest.useCallback((nativeEvent) => {
    const actionName = nativeEvent.nativeEvent.actionName;
    if (stateFromStores1.ACCEPT === actionName) {
      const result = sharedValue.set(true);
      onAcceptIncomingRequest(user.id, applicationId);
      const obj3 = { userId: user.id, applicationId };
      const obj4 = AddFriendsScreenUtils;
      return obj4.acceptIncomingRequest(obj3);
    } else if (stateFromStores1.DECLINE === actionName) {
      onDeclineIncomingRequest(user.id, applicationId);
      const obj5 = { userId: user.id, applicationId };
      const obj2 = AddFriendsScreenUtils;
      return obj2.dismissIncomingRequest(obj5);
    } else if (stateFromStores1.WAVE === actionName) {
      const obj = AddFriendsScreenUtils;
      return obj.sendWave(user.id, true, "Incoming Friend Request");
    }
  }, items3);
  let obj3 = applicationId(accepted[9]);
  const userTag = obj3.useUserTag(user);
  let obj4 = user(accepted[7]);
  const items4 = [acceptRequestAccessibilityLabel];
  const stateFromStores1 = obj4.useStateFromStores(items4, () => ApplicationStore.getApplication(applicationId));
  const items5 = [stateFromStores1, applicationId, userTag];
  const memo1 = onAcceptIncomingRequest.useMemo(() => {
    let str;
    if (null != stateFromStores1) {
      str = jsx(ApplicationIconAndNameDefault, { application: stateFromStores1, textVariant: "text-xs/medium", iconSize: 12 }, tmp.id);
    } else {
      str = "";
      if (null == applicationId) {
        str = userTag;
      }
    }
    return str;
  }, items5);
  let obj5 = { user, type: sharedValue.PENDING_INCOMING, mode: ignoreRequestAccessibilityLabel.ACTIONS, accessibilityActions: memo, accessibilityLabel, onAccessibilityAction: callback, subLabel: userTag(user(accepted[13]).ActionStatusSubLabel, obj6), trailing: userTag(user(accepted[14]).IncomingRequestRowActions, obj7) };
  const tmp10 = applicationId(accepted[12]);
  const merged1 = Object.assign(merged);
  obj6 = { actioned: sharedValue, label: memo1, actionStatus: acceptedRequestLabel, actionStatusAccessibilityLabel: acceptedRequestAccessibilityLabel, animate: !stateFromStores };
  obj7 = { user, pressed: sharedValue, applicationId, onAcceptIncomingRequest, onDeclineIncomingRequest, animate: !stateFromStores, acceptRequestAccessibilityLabel, ignoreRequestAccessibilityLabel };
  return userTag(tmp10, obj5);
}
function IncomingGameFriendRequestRow(arg0) {
  let application;
  let user;
  ({ user, application } = arg0);
  const merged = Object.assign(arg0, Object.assign({ user: 0, application: 0 }));
  const obj = UserUtilsDefault;
  const userTag = obj.useUserTag(user);
  const intl = application(1115).intl;
  const intl2 = application(1115).intl;
  const obj3 = {
    applicationNameHook() {
      return jsx(ApplicationIconAndNameDefault, { application, textVariant: "text-xs/medium", iconSize: 12 }, application.id);
    }
  };
  const intl3 = application(1115).intl;
  const obj4 = { name: userTag, applicationName: application.name };
  const intl4 = application(1115).intl;
  const obj5 = { name: userTag, applicationName: application.name };
  const intl5 = application(1115).intl;
  const obj6 = { name: userTag, applicationName: application.name };
  const merged1 = Object.assign(merged);
  return <IncomingRequestRow user={user} applicationId={application.id} accessibilityLabel={intl.formatToPlainString(application(1115).t.u6lp4x, { name: userTag })} acceptedRequestLabel={intl2.format(application(1115).t.gRgJGR, obj3)} acceptedRequestAccessibilityLabel={intl3.formatToPlainString(application(1115).t.Ke6fRJ, obj4)} acceptRequestAccessibilityLabel={intl4.formatToPlainString(application(1115).t.kMUpdH, obj5)} ignoreRequestAccessibilityLabel={intl5.formatToPlainString(application(1115).t.d8Cw5e, obj6)} />;
}
const UserRowModes = UserRowConstants.UserRowModes;
const RelationshipTypes = Constants.RelationshipTypes;
const jsx = Fragment.jsx;
let closure_9 = { ACCEPT: "accept", DECLINE: "decline", WAVE: "wave" };
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/friends/components/IncomingRequestRow.tsx");

export const IncomingFriendRequestRow = function IncomingFriendRequestRow(user) {
  user = user.user;
  const merged = Object.assign(user, Object.assign({ user: 0 }));
  const obj = UserUtilsDefault;
  const userTag = obj.useUserTag(user);
  const intl = intl6.intl;
  const intl2 = intl6.intl;
  const intl3 = intl6.intl;
  const intl4 = intl6.intl;
  const intl5 = intl6.intl;
  const merged1 = Object.assign(merged);
  return <IncomingRequestRow user={user} accessibilityLabel={intl.formatToPlainString(intl6.t.u6lp4x, { name: userTag })} acceptedRequestLabel={intl2.string(intl6.t["0E614Z"])} acceptedRequestAccessibilityLabel={intl3.formatToPlainString(intl6.t.cRwkp7, { name: userTag })} acceptRequestAccessibilityLabel={intl4.formatToPlainString(intl6.t.MUfqsS, { name: userTag })} ignoreRequestAccessibilityLabel={intl5.formatToPlainString(intl6.t["0OF9IB"], { name: userTag })} />;
};
export const ConnectedIncomingGameFriendRequestRow = function ConnectedIncomingGameFriendRequestRow(applicationId) {
  applicationId = applicationId.applicationId;
  let tmp = null;
  const user = applicationId.user;
  const merged = Object.assign(applicationId, Object.assign({ user: 0, applicationId: 0 }));
  const items = [ApplicationStore];
  const obj = applicationId(563);
  const stateFromStores = obj.useStateFromStores(items, () => ApplicationStore.getApplication(applicationId));
  if (null != stateFromStores) {
    const merged1 = Object.assign(merged);
    tmp = <IncomingGameFriendRequestRow user={user} application={stateFromStores} />;
  }
  return tmp;
};
