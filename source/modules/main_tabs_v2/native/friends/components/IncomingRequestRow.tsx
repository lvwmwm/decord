// Module ID: 15332
// Function ID: 116746
// Name: IncomingRequestRow
// Dependencies: []
// Exports: ConnectedIncomingGameFriendRequestRow, IncomingFriendRequestRow

// Module 15332 (IncomingRequestRow)
function IncomingRequestRow(user) {
  let acceptedRequestAccessibilityLabel;
  let acceptedRequestLabel;
  let accessibilityLabel;
  user = user.user;
  const arg1 = user;
  const applicationId = user.applicationId;
  const importDefault = applicationId;
  const accepted = user.accepted;
  const dependencyMap = accepted;
  const onAcceptIncomingRequest = user.onAcceptIncomingRequest;
  const React = onAcceptIncomingRequest;
  const onDeclineIncomingRequest = user.onDeclineIncomingRequest;
  let closure_4 = onDeclineIncomingRequest;
  const acceptRequestAccessibilityLabel = user.acceptRequestAccessibilityLabel;
  let closure_5 = acceptRequestAccessibilityLabel;
  const ignoreRequestAccessibilityLabel = user.ignoreRequestAccessibilityLabel;
  const UserRowModes = ignoreRequestAccessibilityLabel;
  let obj = {};
  ({ accessibilityLabel, acceptedRequestLabel, acceptedRequestAccessibilityLabel } = user);
  Object.setPrototypeOf(null);
  const merged = Object.assign(user, obj);
  let obj1 = arg1(dependencyMap[6]);
  const sharedValue = obj1.useSharedValue(false);
  const RelationshipTypes = sharedValue;
  const items = [closure_4];
  const stateFromStores = arg1(dependencyMap[7]).useStateFromStores(items, () => onDeclineIncomingRequest.useReducedMotion);
  const items1 = [accepted, sharedValue];
  const effect = React.useEffect(() => {
    const result = sharedValue.set(accepted);
  }, items1);
  const items2 = [acceptRequestAccessibilityLabel, accepted, ignoreRequestAccessibilityLabel, user];
  const items3 = [applicationId, onAcceptIncomingRequest, onDeclineIncomingRequest, sharedValue, user];
  const memo = React.useMemo(() => {
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
  const callback = React.useCallback((nativeEvent) => {
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
  const obj3 = arg1(dependencyMap[7]);
  const userTag = importDefault(dependencyMap[9]).useUserTag(user);
  const jsx = userTag;
  const obj4 = importDefault(dependencyMap[9]);
  const items4 = [closure_5];
  const stateFromStores1 = arg1(dependencyMap[7]).useStateFromStores(items4, () => acceptRequestAccessibilityLabel.getApplication(applicationId));
  let closure_9 = stateFromStores1;
  const items5 = [stateFromStores1, applicationId, userTag];
  const memo1 = React.useMemo(() => {
    if (null != stateFromStores1) {
      const obj = { application: stateFromStores1 };
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
  const obj5 = arg1(dependencyMap[7]);
  const merged1 = Object.assign(merged);
  obj["user"] = user;
  obj["type"] = RelationshipTypes.PENDING_INCOMING;
  obj["mode"] = UserRowModes.ACTIONS;
  obj["accessibilityActions"] = memo;
  obj["accessibilityLabel"] = accessibilityLabel;
  obj["onAccessibilityAction"] = callback;
  obj = { actioned: sharedValue, label: memo1, actionStatus: acceptedRequestLabel, actionStatusAccessibilityLabel: acceptedRequestAccessibilityLabel, animate: !stateFromStores };
  obj["subLabel"] = jsx(arg1(dependencyMap[13]).ActionStatusSubLabel, obj);
  obj1 = { user, pressed: sharedValue, applicationId, onAcceptIncomingRequest, onDeclineIncomingRequest, animate: !stateFromStores, acceptRequestAccessibilityLabel, ignoreRequestAccessibilityLabel };
  obj["trailing"] = jsx(arg1(dependencyMap[14]).IncomingRequestRowActions, obj1);
  return jsx(importDefault(dependencyMap[12]), obj);
}
function IncomingGameFriendRequestRow(arg0) {
  let application;
  let user;
  ({ user, application } = arg0);
  const arg1 = application;
  let obj = Object.create(null);
  obj.user = 0;
  obj.application = 0;
  const merged = Object.assign(arg0, obj);
  obj = importDefault(dependencyMap[9]);
  const userTag = obj.useUserTag(user);
  obj = { user, applicationId: application.id };
  const intl = arg1(dependencyMap[8]).intl;
  obj.accessibilityLabel = intl.formatToPlainString(arg1(dependencyMap[8]).t.u6lp4x, { name: userTag });
  const intl2 = arg1(dependencyMap[8]).intl;
  obj.acceptedRequestLabel = intl2.format(arg1(dependencyMap[8]).t.gRgJGR, {
    applicationNameHook() {
      return callback2(callback(closure_2[11]), { application }, application.id);
    }
  });
  const intl3 = arg1(dependencyMap[8]).intl;
  obj.acceptedRequestAccessibilityLabel = intl3.formatToPlainString(arg1(dependencyMap[8]).t.Ke6fRJ, { name: userTag, applicationName: application.name });
  const intl4 = arg1(dependencyMap[8]).intl;
  obj.acceptRequestAccessibilityLabel = intl4.formatToPlainString(arg1(dependencyMap[8]).t.kMUpdH, { name: userTag, applicationName: application.name });
  const intl5 = arg1(dependencyMap[8]).intl;
  obj.ignoreRequestAccessibilityLabel = intl5.formatToPlainString(arg1(dependencyMap[8]).t.d8Cw5e, { name: userTag, applicationName: application.name });
  const merged1 = Object.assign(merged);
  return <IncomingRequestRow {...obj} />;
}
let closure_3 = importAll(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
const UserRowModes = arg1(dependencyMap[3]).UserRowModes;
const RelationshipTypes = arg1(dependencyMap[4]).RelationshipTypes;
const jsx = arg1(dependencyMap[5]).jsx;
let closure_9 = { ACCEPT: "accept", DECLINE: "decline", WAVE: "wave" };
const result = arg1(dependencyMap[15]).fileFinishedImporting("modules/main_tabs_v2/native/friends/components/IncomingRequestRow.tsx");

export const IncomingFriendRequestRow = function IncomingFriendRequestRow(user) {
  user = user.user;
  let obj = Object.create(null);
  obj.user = 0;
  const merged = Object.assign(user, obj);
  obj = importDefault(dependencyMap[9]);
  const userTag = obj.useUserTag(user);
  obj = { user };
  const intl = arg1(dependencyMap[8]).intl;
  obj.accessibilityLabel = intl.formatToPlainString(arg1(dependencyMap[8]).t.u6lp4x, { name: userTag });
  const intl2 = arg1(dependencyMap[8]).intl;
  obj.acceptedRequestLabel = intl2.string(arg1(dependencyMap[8]).t.0E614Z);
  const intl3 = arg1(dependencyMap[8]).intl;
  obj.acceptedRequestAccessibilityLabel = intl3.formatToPlainString(arg1(dependencyMap[8]).t.cRwkp7, { name: userTag });
  const intl4 = arg1(dependencyMap[8]).intl;
  obj.acceptRequestAccessibilityLabel = intl4.formatToPlainString(arg1(dependencyMap[8]).t.MUfqsS, { name: userTag });
  const intl5 = arg1(dependencyMap[8]).intl;
  obj.ignoreRequestAccessibilityLabel = intl5.formatToPlainString(arg1(dependencyMap[8]).t.0OF9IB, { name: userTag });
  const merged1 = Object.assign(merged);
  return <IncomingRequestRow {...obj} />;
};
export const ConnectedIncomingGameFriendRequestRow = function ConnectedIncomingGameFriendRequestRow(applicationId) {
  const arg1 = applicationId.applicationId;
  let tmp = null;
  let obj = Object.create(null);
  obj.user = 0;
  obj.applicationId = 0;
  const merged = Object.assign(applicationId, obj);
  obj = arg1(dependencyMap[7]);
  const items = [closure_5];
  const stateFromStores = obj.useStateFromStores(items, () => application.getApplication(applicationId));
  if (null != stateFromStores) {
    obj = { user: applicationId.user, application: stateFromStores };
    const merged1 = Object.assign(merged);
    tmp = <IncomingGameFriendRequestRow {...obj} />;
  }
  return tmp;
};
