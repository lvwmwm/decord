// Module ID: 16575
// Function ID: 129293
// Name: PendingRequestRow
// Dependencies: [31, 27, 1849, 33, 4130, 689, 1273, 566, 16573, 16576, 1392, 4126, 1212, 2460, 4660, 2198, 8694, 13826, 13780, 3831, 4541, 5807, 12227, 13785, 2]
// Exports: default

// Module 16575 (PendingRequestRow)
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_4;
let closure_5;
let closure_7;
let closure_8;
let require = arg1;
class PendingRequestRow {
  constructor(arg0) {
    request = global.request;
    ({ actionsDisabled, onAccept, onDecline } = global);
    ({ hasMaxConnections, isAcceptLoading, isDeclineLoading } = global);
    tmp = c9();
    obj = require("initialize");
    items = [];
    items[0] = View;
    stateFromStores = obj.useStateFromStores(items, () => outer1_6.getUser(request.parent_id));
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
    obj2 = require("_createForOfIteratorHelperLoose");
    pendingRequestResolution = obj2.usePendingRequestResolution(request.parent_id);
    ({ isConnected, isResolved } = pendingRequestResolution);
    obj3 = require("SENT_TIMESTAMP_FORMATTER");
    obj = { style: tmp.row };
    result = obj3.formatPendingRequestSentText(request.created_at);
    tmp9 = jsxs;
    tmp10 = View;
    obj1 = { avatarStyle: tmp.avatar };
    obj6 = require("getAvatarURL");
    obj2 = { id: request.parent_id };
    obj2.avatar = avatar;
    obj1.source = obj6.getUserAvatarSource(obj2);
    obj1.disablePlaceholder = true;
    items1 = [, , ];
    items1[0] = jsx(require("Button").Avatar, obj1);
    obj3 = { style: tmp.details };
    tmp11 = jsxs;
    tmp12 = View;
    obj4 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", lineClamp: 1 };
    obj4.children = globalName;
    items2 = [, , ];
    items2[0] = jsx(require("Text").Text, obj4);
    tmp13 = username1 !== globalName;
    if (tmp13) {
      tmp14 = jsx;
      tmp15 = request;
      tmp16 = onDecline;
      obj5 = { variant: "text-sm/medium", color: "text-default", lineClamp: 1 };
      obj5.children = username1;
      tmp13 = jsx(require("Text").Text, obj5);
    }
    items2[1] = tmp13;
    obj6 = { variant: "text-xs/medium", color: "text-muted" };
    obj6.children = result;
    items2[2] = jsx(require("Text").Text, obj6);
    obj3.children = items2;
    items1[1] = tmp11(tmp12, obj3);
    if (isResolved) {
      tmp42 = request;
      tmp43 = onDecline;
      tmp41 = jsx;
      obj7 = { variant: "text-sm/normal", color: "text-muted" };
      num10 = 12;
      intl3 = require("getSystemLocale").intl;
      tmp44 = onAccept;
      tmp45 = onDecline;
      num11 = 13;
      tmp46 = require("messagesProxy");
      obj7.children = intl3.string(isConnected ? tmp46.YQP5dE : tmp46["2HvOvh"]);
      tmp41Result = tmp41(require("Text").Text, obj7);
    } else {
      obj8 = {};
      obj8.style = tmp.actions;
      tmp19 = !hasMaxConnections;
      if (!tmp19) {
        items3 = [, ];
        items3[0] = tmp19;
        tmp32 = request;
        tmp33 = onDecline;
        num6 = 14;
        tmp31 = jsx;
        obj9 = {};
        str4 = "button";
        obj9.accessibilityRole = "button";
        num7 = 12;
        intl2 = require("getSystemLocale").intl;
        tmp34 = onAccept;
        num8 = 15;
        obj10 = {};
        obj10.name = request.parent_username;
        obj9.accessibilityLabel = intl2.formatToPlainString(require("messagesProxy")["4GtllP"], obj10);
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
          tmp36 = request;
          tmp37 = onDecline;
          obj12 = {};
          obj12.size = require("Button").Icon.Sizes.SMALL;
          obj12.color = tmp.declineIcon.color;
          tmp38 = onAccept;
          num9 = 17;
          obj12.source = require("registerAsset");
          tmp35Result = tmp35(require("Button").Icon, obj12);
        }
        obj9.children = tmp35Result;
        items3[1] = tmp31(require("PressableBase").PressableOpacity, obj9);
        obj8.children = items3;
        items1[2] = tmp17(tmp18, obj8);
        obj.children = items1;
        return tmp9(tmp10, obj);
      } else {
        tmp21 = request;
        tmp22 = onDecline;
        num = 14;
        tmp20 = jsx;
        obj13 = {};
        str = "button";
        obj13.accessibilityRole = "button";
        num2 = 12;
        intl = require("getSystemLocale").intl;
        tmp23 = onAccept;
        num3 = 15;
        obj14 = {};
        obj14.name = request.parent_username;
        obj13.accessibilityLabel = intl.formatToPlainString(require("messagesProxy").jc1Ip7, obj14);
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
          tmp25 = request;
          tmp26 = onDecline;
          num4 = 16;
          obj16 = {};
          str2 = "sm";
          obj16.size = "sm";
          tmp27 = onAccept;
          num5 = 5;
          obj16.color = require("_createForOfIteratorHelperLoose").colors.WHITE;
          tmp24Result = tmp24(require("CheckmarkLargeBoldIcon").CheckmarkLargeBoldIcon, obj16);
        }
        obj13.children = tmp24Result;
        tmp20Result = tmp20(require("PressableBase").PressableOpacity, obj13);
      }
    }
    return;
  }
}
({ ActivityIndicator: closure_4, View: closure_5 } = get_ActivityIndicator);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { borderRadius: require("_createForOfIteratorHelperLoose").radii.lg, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SURFACE_HIGH, overflow: "hidden" };
_createForOfIteratorHelperLoose.card = _createForOfIteratorHelperLoose;
let obj1 = { flexDirection: "row", alignItems: "center", paddingVertical: require("_createForOfIteratorHelperLoose").space.PX_12, paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose.row = obj1;
let obj2 = { height: 1, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BORDER_SUBTLE };
const sum = require("_createForOfIteratorHelperLoose").space.PX_16 + require("Button").AVATAR_SIZE_MAP[require("Button").AvatarSizes.NORMAL];
obj2.marginLeft = sum + require("_createForOfIteratorHelperLoose").space.PX_12;
_createForOfIteratorHelperLoose.divider = obj2;
let obj3 = { borderRadius: require("Button").AVATAR_SIZE_MAP[require("Button").AvatarSizes.NORMAL] / 2, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SURFACE_HIGHEST };
_createForOfIteratorHelperLoose.avatar = obj3;
let obj4 = { flexGrow: 1, flexShrink: 1, paddingLeft: require("_createForOfIteratorHelperLoose").space.PX_12, paddingRight: require("_createForOfIteratorHelperLoose").space.PX_4 };
_createForOfIteratorHelperLoose.details = obj4;
_createForOfIteratorHelperLoose.actions = { flexDirection: "row", alignItems: "center" };
let obj5 = { height: 36, width: 36, borderRadius: require("_createForOfIteratorHelperLoose").radii.round, alignItems: "center", justifyContent: "center" };
_createForOfIteratorHelperLoose.actionButton = obj5;
_createForOfIteratorHelperLoose.acceptButton = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.STATUS_POSITIVE, marginRight: require("_createForOfIteratorHelperLoose").space.PX_8 };
let obj6 = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.STATUS_POSITIVE, marginRight: require("_createForOfIteratorHelperLoose").space.PX_8 };
_createForOfIteratorHelperLoose.declineButton = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SURFACE_HIGHEST, borderWidth: 1, borderColor: require("_createForOfIteratorHelperLoose").colors.BORDER_STRONG };
let obj7 = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SURFACE_HIGHEST, borderWidth: 1, borderColor: require("_createForOfIteratorHelperLoose").colors.BORDER_STRONG };
_createForOfIteratorHelperLoose.acceptIcon = { color: require("_createForOfIteratorHelperLoose").colors.WHITE };
let obj8 = { color: require("_createForOfIteratorHelperLoose").colors.WHITE };
_createForOfIteratorHelperLoose.declineIcon = { color: require("_createForOfIteratorHelperLoose").colors.INTERACTIVE_TEXT_DEFAULT };
let obj10 = { width: require("Button").AVATAR_SIZE_MAP[require("Button").AvatarSizes.NORMAL], height: require("Button").AVATAR_SIZE_MAP[require("Button").AvatarSizes.NORMAL], alignItems: "center", justifyContent: "center" };
_createForOfIteratorHelperLoose.inviteIconContainer = obj10;
let obj9 = { color: require("_createForOfIteratorHelperLoose").colors.INTERACTIVE_TEXT_DEFAULT };
_createForOfIteratorHelperLoose.inviteQrButton = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SURFACE_HIGHEST, borderWidth: 1, borderColor: require("_createForOfIteratorHelperLoose").colors.BORDER_STRONG };
let obj11 = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SURFACE_HIGHEST, borderWidth: 1, borderColor: require("_createForOfIteratorHelperLoose").colors.BORDER_STRONG };
_createForOfIteratorHelperLoose.inviteShareButton = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SURFACE_HIGHEST, borderWidth: 1, borderColor: require("_createForOfIteratorHelperLoose").colors.BORDER_STRONG, marginRight: require("_createForOfIteratorHelperLoose").space.PX_8 };
_createForOfIteratorHelperLoose.dividerRow = { flexDirection: "row", alignItems: "center" };
let obj13 = { flexGrow: 1, flexShrink: 1, height: 1, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BORDER_SUBTLE };
_createForOfIteratorHelperLoose.dividerLine = obj13;
let obj12 = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SURFACE_HIGHEST, borderWidth: 1, borderColor: require("_createForOfIteratorHelperLoose").colors.BORDER_STRONG, marginRight: require("_createForOfIteratorHelperLoose").space.PX_8 };
_createForOfIteratorHelperLoose.dividerLabel = { marginHorizontal: require("_createForOfIteratorHelperLoose").space.PX_12 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj14 = { marginHorizontal: require("_createForOfIteratorHelperLoose").space.PX_12 };
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/safety_flows/native/tasks/PendingRequestList.tsx");

export default function PendingRequestList(arg0) {
  let result;
  let closure_4;
  let closure_5;
  let _isNativeReflectConstruct;
  let closure_7;
  let dependencyMap;
  let expiresAt;
  let importDefault;
  let linkedUsersProcessed;
  let onInviteAnotherGuardian;
  let onRefreshLinkCode;
  let onShare;
  let pendingRequests;
  let seenRequests;
  ({ pendingRequests, linkedUsersProcessed, expiresAt, onRefreshLinkCode, onInviteAnotherGuardian, onShare } = arg0);
  const tmp = _createForOfIteratorHelperLoose();
  const require = tmp;
  importDefault(13780)(expiresAt, onRefreshLinkCode);
  let obj = require(16573) /* _createForOfIteratorHelperLoose */;
  obj = {
    pendingRequests,
    linkedUsersProcessed,
    onActionError() {
      let obj = outer1_1(outer1_2[19]);
      obj = { key: "SAFETY_FLOWS_PARENTAL_CONSENT_LINK_UPDATE_ERROR" };
      const intl = tmp(outer1_2[12]).intl;
      obj.content = intl.string(outer1_1(outer1_2[15]).Wu8BK2);
      obj.open(obj);
    }
  };
  const pendingRequestListController = obj.usePendingRequestListController(obj);
  ({ seenRequests, hasMaxConnections: importDefault, actioningUserId: dependencyMap, isAcceptLoading: result, isDeclineLoading: closure_4, actionsDisabled: closure_5, handleAccept: _isNativeReflectConstruct, handleDecline: closure_7 } = pendingRequestListController);
  obj = { spacing: importDefault(689).space.PX_16 };
  let tmp5 = seenRequests.length > 0;
  if (tmp5) {
    const obj1 = {
      style: tmp.card,
      children: seenRequests.map((parent_id) => {
          let obj = {};
          let tmp2 = arg1 > 0;
          if (tmp2) {
            obj = { style: tmp.divider };
            tmp2 = outer1_7(outer1_5, obj);
          }
          const items = [tmp2, ];
          obj = { request: parent_id, hasMaxConnections: closure_1 };
          let tmp8 = result;
          if (result) {
            tmp8 = closure_2 === parent_id.parent_id;
          }
          obj.isAcceptLoading = tmp8;
          let tmp10 = closure_4;
          if (closure_4) {
            tmp10 = closure_2 === parent_id.parent_id;
          }
          obj.isDeclineLoading = tmp10;
          obj.actionsDisabled = closure_5;
          obj.onAccept = _isNativeReflectConstruct;
          obj.onDecline = closure_7;
          items[1] = outer1_7(outer1_10, obj);
          obj.children = items;
          return outer1_8(outer1_3.Fragment, obj, parent_id.parent_id);
        })
    };
    tmp5 = callback(closure_5, obj1);
  }
  let items = [tmp5, , ];
  const obj2 = { style: tmp.dividerRow };
  const items1 = [callback(closure_5, { style: tmp.dividerLine }), , ];
  const obj4 = { style: tmp.dividerLabel, variant: "text-sm/medium", color: "text-muted" };
  let intl = require(1212) /* getSystemLocale */.intl;
  obj4.children = intl.string(importDefault(2460)["/SbB94"]);
  items1[1] = callback(require(4126) /* Text */.Text, obj4);
  items1[2] = callback(closure_5, { style: tmp.dividerLine });
  obj2.children = items1;
  items[1] = callback2(closure_5, obj2);
  const obj6 = { style: items2 };
  items2 = [, ];
  ({ card: arr3[0], row: arr3[1] } = tmp);
  const items3 = [callback(closure_5, { style: tmp.inviteIconContainer, children: callback(require(5807) /* AccountAgeTier10LargeBadge */.PlaneIllocon, { size: 32 }) }), , ];
  const obj8 = { style: tmp.details };
  const obj9 = { variant: "text-md/semibold", color: "mobile-text-heading-primary" };
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj9.children = intl2.string(importDefault(2460).z9gkwZ);
  const items4 = [callback(require(4126) /* Text */.Text, obj9), ];
  const obj10 = { variant: "text-xs/medium", color: "text-default" };
  const intl3 = require(1212) /* getSystemLocale */.intl;
  obj10.children = intl3.string(importDefault(2460)["9t4+vC"]);
  items4[1] = callback(require(4126) /* Text */.Text, obj10);
  obj8.children = items4;
  items3[1] = callback2(closure_5, obj8);
  const obj11 = { style: tmp.actions };
  const obj12 = { accessibilityRole: "button" };
  const intl4 = require(1212) /* getSystemLocale */.intl;
  obj12.accessibilityLabel = intl4.string(require(1212) /* getSystemLocale */.t.Ej3B3Y);
  obj12.onPress = onShare;
  const items5 = [, ];
  ({ actionButton: arr6[0], inviteShareButton: arr6[1] } = tmp);
  obj12.style = items5;
  obj12.children = callback(require(12227) /* ShareIcon */.ShareIcon, { size: "sm", color: tmp.declineIcon.color });
  const items6 = [callback(require(4660) /* PressableBase */.PressableOpacity, obj12), ];
  const obj14 = { accessibilityRole: "button" };
  const intl5 = require(1212) /* getSystemLocale */.intl;
  obj14.accessibilityLabel = intl5.string(importDefault(2460).z9gkwZ);
  obj14.onPress = onInviteAnotherGuardian;
  const items7 = [, ];
  ({ actionButton: arr8[0], inviteQrButton: arr8[1] } = tmp);
  obj14.style = items7;
  obj14.children = callback(require(13785) /* QrCodeIcon */.QrCodeIcon, { size: "sm", color: tmp.declineIcon.color });
  items6[1] = callback(require(4660) /* PressableBase */.PressableOpacity, obj14);
  obj11.children = items6;
  items3[2] = callback2(closure_5, obj11);
  obj6.children = items3;
  items[2] = callback2(closure_5, obj6);
  obj.children = items;
  return callback2(require(4541) /* Stack */.Stack, obj);
};
export { PendingRequestRow };
