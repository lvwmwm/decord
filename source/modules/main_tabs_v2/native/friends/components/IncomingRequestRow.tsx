// Module ID: 15457
// Function ID: 118963
// Name: IncomingRequestRow
// Dependencies: [31, 4122, 4167, 8818, 653, 33, 3991, 624, 1212, 3969, 14912, 11661, 8834, 15169, 15458, 2]
// Exports: ConnectedIncomingGameFriendRequestRow, IncomingFriendRequestRow

// Module 15457 (IncomingRequestRow)
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import { UserRowModes } from "UserRowModes";
import { RelationshipTypes } from "ME";
import { jsx } from "jsxProd";

const require = arg1;
function IncomingRequestRow(user) {
  let acceptedRequestAccessibilityLabel;
  let acceptedRequestLabel;
  let accessibilityLabel;
  user = user.user;
  const applicationId = user.applicationId;
  const accepted = user.accepted;
  const onAcceptIncomingRequest = user.onAcceptIncomingRequest;
  const onDeclineIncomingRequest = user.onDeclineIncomingRequest;
  const acceptRequestAccessibilityLabel = user.acceptRequestAccessibilityLabel;
  const ignoreRequestAccessibilityLabel = user.ignoreRequestAccessibilityLabel;
  let obj = { user: 0, applicationId: 0, accepted: 0, onAcceptIncomingRequest: 0, onDeclineIncomingRequest: 0, accessibilityLabel: 0, acceptRequestAccessibilityLabel: 0, ignoreRequestAccessibilityLabel: 0, acceptedRequestLabel: 0, acceptedRequestAccessibilityLabel: 0 };
  ({ accessibilityLabel, acceptedRequestLabel, acceptedRequestAccessibilityLabel } = user);
  Object.setPrototypeOf(null);
  const merged = Object.assign(user, obj);
  let obj1 = user(accepted[6]);
  const sharedValue = obj1.useSharedValue(false);
  let items = [onDeclineIncomingRequest];
  const stateFromStores = user(accepted[7]).useStateFromStores(items, () => onDeclineIncomingRequest.useReducedMotion);
  let items1 = [accepted, sharedValue];
  const effect = onAcceptIncomingRequest.useEffect(() => {
    const result = sharedValue.set(accepted);
  }, items1);
  const items2 = [acceptRequestAccessibilityLabel, accepted, ignoreRequestAccessibilityLabel, user];
  const items3 = [applicationId, onAcceptIncomingRequest, onDeclineIncomingRequest, sharedValue, user];
  const memo = onAcceptIncomingRequest.useMemo(() => {
    let obj = {};
    if (accepted) {
      obj.name = tmp.WAVE;
      const intl = user(accepted[8]).intl;
      obj = { username: applicationId(accepted[9]).getName(user) };
      obj.label = intl.formatToPlainString(user(accepted[8]).t.m0zYbV, obj);
      const items = [obj];
      let items1 = items;
      const obj4 = applicationId(accepted[9]);
    } else {
      obj.name = tmp.ACCEPT;
      obj.label = acceptRequestAccessibilityLabel;
      items1 = [obj, ];
      obj = { name: stateFromStores1.DECLINE, label: ignoreRequestAccessibilityLabel };
      items1[1] = obj;
    }
    return items1;
  }, items2);
  const callback = onAcceptIncomingRequest.useCallback((nativeEvent) => {
    const actionName = nativeEvent.nativeEvent.actionName;
    if (stateFromStores1.ACCEPT === actionName) {
      const result = sharedValue.set(true);
      onAcceptIncomingRequest(user.id, applicationId);
      let obj = { userId: user.id, applicationId };
      return user(accepted[10]).acceptIncomingRequest(obj);
    } else if (stateFromStores1.DECLINE === actionName) {
      onDeclineIncomingRequest(user.id, applicationId);
      obj = { userId: user.id, applicationId };
      return user(accepted[10]).dismissIncomingRequest(obj);
    } else if (stateFromStores1.WAVE === actionName) {
      obj = user(accepted[10]);
      return obj.sendWave(user.id, true, "Incoming Friend Request");
    }
  }, items3);
  const obj3 = user(accepted[7]);
  const userTag = applicationId(accepted[9]).useUserTag(user);
  let obj4 = applicationId(accepted[9]);
  const items4 = [acceptRequestAccessibilityLabel];
  const stateFromStores1 = user(accepted[7]).useStateFromStores(items4, () => acceptRequestAccessibilityLabel.getApplication(applicationId));
  const items5 = [stateFromStores1, applicationId, userTag];
  const memo1 = onAcceptIncomingRequest.useMemo(() => {
    if (null != stateFromStores1) {
      const obj = { application: stateFromStores1, textVariant: "text-xs/medium", iconSize: 12 };
      let str = userTag(applicationId(accepted[11]), obj, stateFromStores1.id);
    } else {
      str = "";
      if (null == applicationId) {
        str = userTag;
      }
    }
    return str;
  }, items5);
  obj = {};
  const obj5 = user(accepted[7]);
  const merged1 = Object.assign(merged);
  obj["user"] = user;
  obj["type"] = sharedValue.PENDING_INCOMING;
  obj["mode"] = ignoreRequestAccessibilityLabel.ACTIONS;
  obj["accessibilityActions"] = memo;
  obj["accessibilityLabel"] = accessibilityLabel;
  obj["onAccessibilityAction"] = callback;
  obj = { actioned: sharedValue, label: memo1, actionStatus: acceptedRequestLabel, actionStatusAccessibilityLabel: acceptedRequestAccessibilityLabel, animate: !stateFromStores };
  obj["subLabel"] = userTag(user(accepted[13]).ActionStatusSubLabel, obj);
  obj1 = { user, pressed: sharedValue, applicationId, onAcceptIncomingRequest, onDeclineIncomingRequest, animate: !stateFromStores, acceptRequestAccessibilityLabel, ignoreRequestAccessibilityLabel };
  obj["trailing"] = userTag(user(accepted[14]).IncomingRequestRowActions, obj1);
  return userTag(applicationId(accepted[12]), obj);
}
function IncomingGameFriendRequestRow(arg0) {
  let application;
  let user;
  ({ user, application } = arg0);
  let obj = Object.create(null);
  obj.user = 0;
  obj.application = 0;
  const merged = Object.assign(arg0, obj);
  obj = importDefault(3969);
  const userTag = obj.useUserTag(user);
  obj = { user, applicationId: application.id };
  const intl = application(1212).intl;
  obj.accessibilityLabel = intl.formatToPlainString(application(1212).t.u6lp4x, { name: userTag });
  const intl2 = application(1212).intl;
  obj.acceptedRequestLabel = intl2.format(application(1212).t.gRgJGR, {
    applicationNameHook() {
      const obj = { application, textVariant: "text-xs/medium", iconSize: 12 };
      return outer1_8(outer1_1(outer1_2[11]), obj, application.id);
    }
  });
  const intl3 = application(1212).intl;
  obj.acceptedRequestAccessibilityLabel = intl3.formatToPlainString(application(1212).t.Ke6fRJ, { name: userTag, applicationName: application.name });
  const intl4 = application(1212).intl;
  obj.acceptRequestAccessibilityLabel = intl4.formatToPlainString(application(1212).t.kMUpdH, { name: userTag, applicationName: application.name });
  const intl5 = application(1212).intl;
  obj.ignoreRequestAccessibilityLabel = intl5.formatToPlainString(application(1212).t.d8Cw5e, { name: userTag, applicationName: application.name });
  const merged1 = Object.assign(merged);
  return <IncomingRequestRow user={user} applicationId={application.id} />;
}
let closure_9 = { ACCEPT: "accept", DECLINE: "decline", WAVE: "wave" };
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/main_tabs_v2/native/friends/components/IncomingRequestRow.tsx");

export const IncomingFriendRequestRow = function IncomingFriendRequestRow(user) {
  user = user.user;
  let obj = Object.create(null);
  obj.user = 0;
  const merged = Object.assign(user, obj);
  obj = importDefault(3969);
  const userTag = obj.useUserTag(user);
  obj = { user };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.accessibilityLabel = intl.formatToPlainString(require(1212) /* getSystemLocale */.t.u6lp4x, { name: userTag });
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj.acceptedRequestLabel = intl2.string(require(1212) /* getSystemLocale */.t["0E614Z"]);
  const intl3 = require(1212) /* getSystemLocale */.intl;
  obj.acceptedRequestAccessibilityLabel = intl3.formatToPlainString(require(1212) /* getSystemLocale */.t.cRwkp7, { name: userTag });
  const intl4 = require(1212) /* getSystemLocale */.intl;
  obj.acceptRequestAccessibilityLabel = intl4.formatToPlainString(require(1212) /* getSystemLocale */.t.MUfqsS, { name: userTag });
  const intl5 = require(1212) /* getSystemLocale */.intl;
  obj.ignoreRequestAccessibilityLabel = intl5.formatToPlainString(require(1212) /* getSystemLocale */.t["0OF9IB"], { name: userTag });
  const merged1 = Object.assign(merged);
  return <IncomingRequestRow user={user} />;
};
export const ConnectedIncomingGameFriendRequestRow = function ConnectedIncomingGameFriendRequestRow(applicationId) {
  applicationId = applicationId.applicationId;
  let tmp = null;
  let obj = Object.create(null);
  obj.user = 0;
  obj.applicationId = 0;
  const merged = Object.assign(applicationId, obj);
  obj = applicationId(624);
  const items = [closure_5];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_5.getApplication(applicationId));
  if (null != stateFromStores) {
    obj = { user: applicationId.user, application: stateFromStores };
    const merged1 = Object.assign(merged);
    tmp = <IncomingGameFriendRequestRow user={arg0.user} application={stateFromStores} />;
  }
  return tmp;
};
