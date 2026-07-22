// Module ID: 16458
// Function ID: 127119
// Name: PendingRequestRow
// Dependencies: []
// Exports: default

// Module 16458 (PendingRequestRow)
class PendingRequestRow {
  constructor(arg0) {
    request = global.request;
    arg1 = request;
    ({ actionsDisabled, onAccept: closure_1, onDecline: closure_2 } = global);
    ({ hasMaxConnections, isAcceptLoading, isDeclineLoading } = global);
    tmp = closure_9();
    obj = arg1(dependencyMap[7]);
    items = [];
    items[0] = View;
    stateFromStores = obj.useStateFromStores(items, () => user.getUser(request.parent_id));
    globalName = undefined;
    if (null != stateFromStores) {
      globalName = stateFromStores.globalName;
    }
    if (null == globalName) {
      username = undefined;
      if (null != stateFromStores) {
        username = stateFromStores.username;
      }
      globalName = username;
    }
    if (null == globalName) {
      globalName = request.parent_username;
    }
    username1 = undefined;
    if (null != stateFromStores) {
      username1 = stateFromStores.username;
    }
    if (null == username1) {
      username1 = request.parent_username;
    }
    avatar = undefined;
    if (null != stateFromStores) {
      avatar = stateFromStores.avatar;
    }
    if (null == avatar) {
      avatar = request.parent_avatar;
    }
    obj2 = arg1(dependencyMap[8]);
    pendingRequestResolution = obj2.usePendingRequestResolution(request.parent_id);
    ({ isConnected, isResolved } = pendingRequestResolution);
    obj3 = arg1(dependencyMap[9]);
    obj = { style: tmp.row };
    result = obj3.formatPendingRequestSentText(request.created_at);
    tmp9 = jsxs;
    tmp10 = View;
    obj1 = { avatarStyle: tmp.avatar };
    obj6 = importDefault(dependencyMap[10]);
    obj2 = { id: request.parent_id };
    obj2.avatar = avatar;
    obj1.source = obj6.getUserAvatarSource(obj2);
    obj1.disablePlaceholder = true;
    items1 = [, , ];
    items1[0] = jsx(arg1(dependencyMap[6]).Avatar, obj1);
    obj3 = { style: tmp.details };
    tmp11 = jsxs;
    tmp12 = View;
    obj4 = { 803799044: "<string:20995968>", 1269170180: "ars", 711589892: "<string:310460928>" };
    obj4.children = globalName;
    items2 = [, , ];
    items2[0] = jsx(arg1(dependencyMap[11]).Text, obj4);
    tmp13 = username1 !== globalName;
    if (tmp13) {
      tmp14 = jsx;
      tmp15 = arg1;
      tmp16 = dependencyMap;
      obj5 = {};
      obj5.children = username1;
      tmp13 = jsx(arg1(dependencyMap[11]).Text, obj5);
    }
    items2[1] = tmp13;
    obj6 = { cachedAt: "center", edpbxy: "center" };
    obj6.children = result;
    items2[2] = jsx(arg1(dependencyMap[11]).Text, obj6);
    obj3.children = items2;
    items1[1] = tmp11(tmp12, obj3);
    if (isResolved) {
      tmp42 = arg1;
      tmp43 = dependencyMap;
      tmp41 = jsx;
      obj7 = { cachedAt: 400, edpbxy: 20 };
      num10 = 12;
      intl3 = arg1(dependencyMap[12]).intl;
      tmp44 = importDefault;
      tmp45 = dependencyMap;
      num11 = 13;
      tmp46 = importDefault(dependencyMap[13]);
      obj7.children = intl3.string(isConnected ? tmp46.YQP5dE : tmp46.2HvOvh);
      tmp41Result = tmp41(arg1(dependencyMap[11]).Text, obj7);
    } else {
      obj8 = {};
      obj8.style = tmp.actions;
      tmp19 = !hasMaxConnections;
      if (!tmp19) {
        items3 = [, ];
        items3[0] = tmp19;
        tmp32 = arg1;
        tmp33 = dependencyMap;
        num6 = 14;
        tmp31 = jsx;
        obj9 = {};
        str4 = "button";
        obj9.accessibilityRole = "button";
        num7 = 12;
        intl2 = arg1(dependencyMap[12]).intl;
        tmp34 = importDefault;
        num8 = 15;
        obj10 = {};
        obj10.name = request.parent_username;
        obj9.accessibilityLabel = intl2.formatToPlainString(importDefault(dependencyMap[15]).4GtllP, obj10);
        obj9.disabled = actionsDisabled;
        obj9.onPress = function onPress() {
          return callback2(request.parent_id);
        };
        items4 = [, ];
        ({ actionButton: arr6[0], declineButton: arr6[1] } = tmp);
        obj9.style = items4;
        tmp35 = jsx;
        if (isDeclineLoading) {
          tmp40 = ActivityIndicator;
          obj11 = {};
          str5 = "small";
          obj11.size = "small";
          obj11.color = tmp.declineIcon.color;
          tmp35Result = tmp35(ActivityIndicator, obj11);
        } else {
          tmp36 = arg1;
          tmp37 = dependencyMap;
          obj12 = {};
          obj12.size = arg1(dependencyMap[6]).Icon.Sizes.SMALL;
          obj12.color = tmp.declineIcon.color;
          tmp38 = importDefault;
          num9 = 17;
          obj12.source = importDefault(dependencyMap[17]);
          tmp35Result = tmp35(arg1(dependencyMap[6]).Icon, obj12);
        }
        obj9.children = tmp35Result;
        items3[1] = tmp31(arg1(dependencyMap[14]).PressableOpacity, obj9);
        obj8.children = items3;
        items1[2] = tmp17(tmp18, obj8);
        obj.children = items1;
        return tmp9(tmp10, obj);
      } else {
        tmp21 = arg1;
        tmp22 = dependencyMap;
        num = 14;
        tmp20 = jsx;
        obj13 = {};
        str = "button";
        obj13.accessibilityRole = "button";
        num2 = 12;
        intl = arg1(dependencyMap[12]).intl;
        tmp23 = importDefault;
        num3 = 15;
        obj14 = {};
        obj14.name = request.parent_username;
        obj13.accessibilityLabel = intl.formatToPlainString(importDefault(dependencyMap[15]).jc1Ip7, obj14);
        obj13.disabled = actionsDisabled;
        obj13.onPress = function onPress() {
          return callback(request.parent_id);
        };
        items5 = [, ];
        ({ actionButton: arr4[0], acceptButton: arr4[1] } = tmp);
        obj13.style = items5;
        tmp24 = jsx;
        if (isAcceptLoading) {
          tmp29 = ActivityIndicator;
          obj15 = {};
          str3 = "small";
          obj15.size = "small";
          obj15.color = tmp.acceptIcon.color;
          tmp24Result = tmp24(ActivityIndicator, obj15);
        } else {
          tmp25 = arg1;
          tmp26 = dependencyMap;
          num4 = 16;
          obj16 = {};
          str2 = "sm";
          obj16.size = "sm";
          tmp27 = importDefault;
          num5 = 5;
          obj16.color = importDefault(dependencyMap[5]).colors.WHITE;
          tmp24Result = tmp24(arg1(dependencyMap[16]).CheckmarkLargeBoldIcon, obj16);
        }
        obj13.children = tmp24Result;
        tmp20Result = tmp20(arg1(dependencyMap[14]).PressableOpacity, obj13);
      }
    }
    return;
  }
}
let closure_3 = importAll(dependencyMap[0]);
({ ActivityIndicator: closure_4, View: closure_5 } = arg1(dependencyMap[1]));
let closure_6 = importDefault(dependencyMap[2]);
const tmp2 = arg1(dependencyMap[1]);
({ jsx: closure_7, jsxs: closure_8 } = arg1(dependencyMap[3]));
let obj = arg1(dependencyMap[4]);
obj = {};
obj = { borderRadius: importDefault(dependencyMap[5]).radii.lg, backgroundColor: importDefault(dependencyMap[5]).colors.BACKGROUND_SURFACE_HIGH, overflow: "hidden" };
obj.card = obj;
const obj1 = { <string:3814666730>: null, <string:1280564396>: "\u{1F43F}\uFE0F", paddingVertical: importDefault(dependencyMap[5]).space.PX_12, paddingHorizontal: importDefault(dependencyMap[5]).space.PX_16 };
obj.row = obj1;
const obj2 = { height: 1, backgroundColor: importDefault(dependencyMap[5]).colors.BORDER_SUBTLE };
const sum = importDefault(dependencyMap[5]).space.PX_16 + arg1(dependencyMap[6]).AVATAR_SIZE_MAP[arg1(undefined, dependencyMap[6]).AvatarSizes.NORMAL];
obj2.marginLeft = sum + importDefault(dependencyMap[5]).space.PX_12;
obj.divider = obj2;
const obj3 = { borderRadius: arg1(dependencyMap[6]).AVATAR_SIZE_MAP[arg1(undefined, dependencyMap[6]).AvatarSizes.NORMAL] / 2, backgroundColor: importDefault(dependencyMap[5]).colors.BACKGROUND_SURFACE_HIGHEST };
obj.avatar = obj3;
const obj4 = { nestedScrollEnabled: "<string:2491613185>", scrollEventThrottle: "<string:2941583362>", paddingLeft: importDefault(dependencyMap[5]).space.PX_12, paddingRight: importDefault(dependencyMap[5]).space.PX_4 };
obj.details = obj4;
obj.actions = { <string:3814666730>: null, <string:1280564396>: "\u{1F43F}\uFE0F" };
const tmp3 = arg1(dependencyMap[3]);
obj.actionButton = { borderRadius: importDefault(dependencyMap[5]).radii.round };
const obj5 = { borderRadius: importDefault(dependencyMap[5]).radii.round };
obj.acceptButton = { backgroundColor: importDefault(dependencyMap[5]).colors.STATUS_POSITIVE, marginRight: importDefault(dependencyMap[5]).space.PX_8 };
const obj6 = { backgroundColor: importDefault(dependencyMap[5]).colors.STATUS_POSITIVE, marginRight: importDefault(dependencyMap[5]).space.PX_8 };
obj.declineButton = { backgroundColor: importDefault(dependencyMap[5]).colors.BACKGROUND_SURFACE_HIGHEST, borderWidth: 1, borderColor: importDefault(dependencyMap[5]).colors.BORDER_STRONG };
const obj7 = { backgroundColor: importDefault(dependencyMap[5]).colors.BACKGROUND_SURFACE_HIGHEST, borderWidth: 1, borderColor: importDefault(dependencyMap[5]).colors.BORDER_STRONG };
obj.acceptIcon = { color: importDefault(dependencyMap[5]).colors.WHITE };
const obj8 = { color: importDefault(dependencyMap[5]).colors.WHITE };
obj.declineIcon = { color: importDefault(dependencyMap[5]).colors.INTERACTIVE_TEXT_DEFAULT };
const obj10 = { width: arg1(dependencyMap[6]).AVATAR_SIZE_MAP[arg1(undefined, dependencyMap[6]).AvatarSizes.NORMAL], height: arg1(dependencyMap[6]).AVATAR_SIZE_MAP[arg1(undefined, dependencyMap[6]).AvatarSizes.NORMAL], alignItems: "center", justifyContent: "center" };
obj.inviteIconContainer = obj10;
const obj9 = { color: importDefault(dependencyMap[5]).colors.INTERACTIVE_TEXT_DEFAULT };
obj.inviteQrButton = { backgroundColor: importDefault(dependencyMap[5]).colors.BACKGROUND_SURFACE_HIGHEST, borderWidth: 1, borderColor: importDefault(dependencyMap[5]).colors.BORDER_STRONG };
const obj11 = { backgroundColor: importDefault(dependencyMap[5]).colors.BACKGROUND_SURFACE_HIGHEST, borderWidth: 1, borderColor: importDefault(dependencyMap[5]).colors.BORDER_STRONG };
obj.inviteShareButton = { backgroundColor: importDefault(dependencyMap[5]).colors.BACKGROUND_SURFACE_HIGHEST, borderWidth: 1, borderColor: importDefault(dependencyMap[5]).colors.BORDER_STRONG, marginRight: importDefault(dependencyMap[5]).space.PX_8 };
obj.dividerRow = { <string:3814666730>: null, <string:1280564396>: "\u{1F43F}\uFE0F" };
const obj13 = { "Bool(true)": true, "Bool(true)": true, "Bool(true)": true, backgroundColor: importDefault(dependencyMap[5]).colors.BORDER_SUBTLE };
obj.dividerLine = obj13;
const obj12 = { backgroundColor: importDefault(dependencyMap[5]).colors.BACKGROUND_SURFACE_HIGHEST, borderWidth: 1, borderColor: importDefault(dependencyMap[5]).colors.BORDER_STRONG, marginRight: importDefault(dependencyMap[5]).space.PX_8 };
obj.dividerLabel = { marginHorizontal: importDefault(dependencyMap[5]).space.PX_12 };
let closure_9 = obj.createStyles(obj);
const obj14 = { marginHorizontal: importDefault(dependencyMap[5]).space.PX_12 };
const result = arg1(dependencyMap[24]).fileFinishedImporting("modules/safety_flows/native/tasks/PendingRequestList.tsx");

export default function PendingRequestList(arg0) {
  let expiresAt;
  let linkedUsersProcessed;
  let onInviteAnotherGuardian;
  let onRefreshLinkCode;
  let onShare;
  let pendingRequests;
  let seenRequests;
  ({ pendingRequests, linkedUsersProcessed, expiresAt, onRefreshLinkCode, onInviteAnotherGuardian, onShare } = arg0);
  const tmp = callback3();
  const arg1 = tmp;
  importDefault(dependencyMap[18])(expiresAt, onRefreshLinkCode);
  let obj = arg1(dependencyMap[8]);
  obj = {
    pendingRequests,
    linkedUsersProcessed,
    onActionError() {
      let obj = callback(closure_2[19]);
      obj = { key: "SAFETY_FLOWS_PARENTAL_CONSENT_LINK_UPDATE_ERROR" };
      const intl = tmp(closure_2[12]).intl;
      obj.content = intl.string(callback(closure_2[15]).Wu8BK2);
      obj.open(obj);
    }
  };
  const pendingRequestListController = obj.usePendingRequestListController(obj);
  ({ seenRequests, hasMaxConnections: closure_1, actioningUserId: closure_2, isAcceptLoading: closure_3, isDeclineLoading: closure_4, actionsDisabled: closure_5, handleAccept: closure_6, handleDecline: closure_7 } = pendingRequestListController);
  obj = { spacing: importDefault(dependencyMap[5]).space.PX_16 };
  let tmp5 = seenRequests.length > 0;
  if (tmp5) {
    const obj1 = {
      style: tmp.card,
      children: seenRequests.map((parent_id) => {
          let obj = {};
          let tmp2 = arg1 > 0;
          if (tmp2) {
            obj = { style: tmp.divider };
            tmp2 = callback2(closure_5, obj);
          }
          const items = [tmp2, ];
          obj = { request: parent_id, hasMaxConnections: closure_1 };
          let tmp8 = React;
          if (React) {
            tmp8 = closure_2 === parent_id.parent_id;
          }
          obj.isAcceptLoading = tmp8;
          let tmp10 = closure_4;
          if (closure_4) {
            tmp10 = closure_2 === parent_id.parent_id;
          }
          obj.isDeclineLoading = tmp10;
          obj.actionsDisabled = closure_5;
          obj.onAccept = closure_6;
          obj.onDecline = callback2;
          items[1] = callback2(closure_10, obj);
          obj.children = items;
          return closure_8(React.Fragment, obj, parent_id.parent_id);
        })
    };
    tmp5 = callback(closure_5, obj1);
  }
  const items = [tmp5, , ];
  const obj2 = { style: tmp.dividerRow };
  const items1 = [callback(closure_5, { style: tmp.dividerLine }), , ];
  const obj4 = { style: tmp.dividerLabel };
  const intl = arg1(dependencyMap[12]).intl;
  obj4.children = intl.string(importDefault(dependencyMap[13])./SbB94);
  items1[1] = callback(arg1(dependencyMap[11]).Text, obj4);
  items1[2] = callback(closure_5, { style: tmp.dividerLine });
  obj2.children = items1;
  items[1] = callback2(closure_5, obj2);
  const obj6 = { style: items2 };
  const items2 = [, ];
  ({ card: arr3[0], row: arr3[1] } = tmp);
  const items3 = [callback(closure_5, { style: tmp.inviteIconContainer, children: callback(arg1(dependencyMap[21]).PlaneIllocon, { size: 32 }) }), , ];
  const obj8 = { style: tmp.details };
  const obj9 = {};
  const intl2 = arg1(dependencyMap[12]).intl;
  obj9.children = intl2.string(importDefault(dependencyMap[13]).z9gkwZ);
  const items4 = [callback(arg1(dependencyMap[11]).Text, obj9), ];
  const obj10 = { cachedAt: true, edpbxy: true };
  const intl3 = arg1(dependencyMap[12]).intl;
  obj10.children = intl3.string(importDefault(dependencyMap[13]).9t4+vC);
  items4[1] = callback(arg1(dependencyMap[11]).Text, obj10);
  obj8.children = items4;
  items3[1] = callback2(closure_5, obj8);
  const obj11 = { style: tmp.actions };
  const obj12 = { accessibilityRole: "button" };
  const intl4 = arg1(dependencyMap[12]).intl;
  obj12.accessibilityLabel = intl4.string(arg1(dependencyMap[12]).t.Ej3B3Y);
  obj12.onPress = onShare;
  const items5 = [, ];
  ({ actionButton: arr6[0], inviteShareButton: arr6[1] } = tmp);
  obj12.style = items5;
  obj12.children = callback(arg1(dependencyMap[22]).ShareIcon, { size: "sm", color: tmp.declineIcon.color });
  const items6 = [callback(arg1(dependencyMap[14]).PressableOpacity, obj12), ];
  const obj14 = { accessibilityRole: "button" };
  const intl5 = arg1(dependencyMap[12]).intl;
  obj14.accessibilityLabel = intl5.string(importDefault(dependencyMap[13]).z9gkwZ);
  obj14.onPress = onInviteAnotherGuardian;
  const items7 = [, ];
  ({ actionButton: arr8[0], inviteQrButton: arr8[1] } = tmp);
  obj14.style = items7;
  obj14.children = callback(arg1(dependencyMap[23]).QrCodeIcon, { size: "sm", color: tmp.declineIcon.color });
  items6[1] = callback(arg1(dependencyMap[14]).PressableOpacity, obj14);
  obj11.children = items6;
  items3[2] = callback2(closure_5, obj11);
  obj6.children = items3;
  items[2] = callback2(closure_5, obj6);
  obj.children = items;
  return callback2(arg1(dependencyMap[20]).Stack, obj);
};
export { PendingRequestRow };
