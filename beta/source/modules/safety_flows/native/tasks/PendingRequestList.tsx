// Module ID: 17710
// Function ID: 17711
// Name: PendingRequestList
// Dependencies: [19, 17, 1372, 21, 4836, 576, 1177, 504, 17708, 17711, 1397, 4832, 1115, 2781, 5435, 2487, 8258, 14459, 14413, 4528, 5279, 17712, 12470, 14418, 2]
// Exports: default

// Module 17710 (PendingRequestList)
import nativeDefault from "native" /* 576 */;
import native from "native" /* 1177 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1397 */;
import _modDef2487 from "module_2487" /* 2487 */;
import _modDef2781 from "module_2781" /* 2781 */;
import useRefreshLinkCodeOnExpiryDefault from "useRefreshLinkCodeOnExpiry" /* 14413 */;
import AssetRegistryDefault from "AssetRegistry" /* 14459 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import UserStore from "UserStore" /* 1372 */;
import Fragment_mod from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap, importDefault;

let closure_4;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let obj10;
let obj11;
let obj12;
let obj13;
let obj14;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
let obj8;
let obj9;
let size;
let size1;
let sum;
class PendingRequestRow {
  constructor(request) {
    let actionsDisabled;
    let hasMaxConnections;
    let intl;
    let intl2;
    let isAcceptLoading;
    let isConnected;
    let isDeclineLoading;
    let isResolved;
    let items1;
    let items2;
    let items3;
    let items4;
    let items5;
    let obj11;
    let obj15;
    let obj4;
    let obj6;
    let tmp13Result5;
    let tmp13Result6;
    let tmp13Result8;
    request = request.request;
    ({ hasMaxConnections, actionsDisabled, onAccept: importDefault, onDecline: dependencyMap } = request);
    ({ isAcceptLoading, isDeclineLoading } = request);
    const tmp = closure_9();
    const items = [UserStore];
    const obj = request(504);
    const stateFromStores = obj.useStateFromStores(items, () => UserStore.getUser(request.parent_id));
    let globalName;
    if (stateFromStores != null) {
      globalName = stateFromStores.globalName;
    }
    if (globalName == null) {
      let username;
      if (stateFromStores != null) {
        username = stateFromStores.username;
      }
      globalName = username;
    }
    if (globalName == null) {
      globalName = request.parent_username;
    }
    let username1;
    if (stateFromStores != null) {
      username1 = stateFromStores.username;
    }
    if (username1 == null) {
      username1 = request.parent_username;
    }
    let avatar;
    if (stateFromStores != null) {
      avatar = stateFromStores.avatar;
    }
    if (avatar == null) {
      avatar = request.parent_avatar;
    }
    const tmp2Result = request(17708);
    const pendingRequestResolution = tmp2Result.usePendingRequestResolution(request.parent_id);
    ({ isConnected, isResolved } = pendingRequestResolution);
    const obj2 = { style: tmp.row, children: items1 };
    const tmp2Result2 = request(17711);
    const result = tmp2Result2.formatPendingRequestSentText(request.created_at);
    const obj3 = { avatarStyle: tmp.avatar, source: obj6.getUserAvatarSource(obj4), disablePlaceholder: true };
    const Avatar = tmp2(1177).Avatar;
    obj4 = { id: request.parent_id, avatar };
    obj6 = AvatarUtilsDefault;
    items1 = [closure_7(Avatar, obj3), , ];
    const obj5 = { style: tmp.details, children: items2 };
    items2 = [closure_7(request(4832).Text, { variant: "text-md/semibold", color: "mobile-text-heading-primary", lineClamp: 1, children: globalName }), , ];
    let tmp13Result = username1 !== globalName;
    if (tmp13Result) {
      const obj7 = { variant: "text-sm/medium", color: "text-default", lineClamp: 1, children: username1 };
      tmp13Result = tmp13(tmp2(4832).Text, obj7);
    }
    items2[1] = tmp13Result;
    items2[2] = closure_7(request(4832).Text, { variant: "text-xs/medium", color: "text-muted", children: result });
    items1[1] = closure_8(closure_5, obj5);
    if (isResolved) {
      const Text = tmp2(4832).Text;
      const intl3 = tmp2(1115).intl;
      const string = intl3.string;
      const tmp14Result = _modDef2781;
      const obj8 = { variant: "text-sm/normal", color: "text-muted", children: string(isConnected ? tmp14Result.YQP5dE : tmp14Result["2HvOvh"]) };
      tmp13Result5 = tmp13(Text, obj8);
    } else {
      let tmp13Result7 = !hasMaxConnections;
      const obj9 = { style: tmp.actions, children: items4 };
      if (tmp13Result7) {
        const obj10 = {
          accessibilityRole: "button",
          accessibilityLabel: intl.formatToPlainString(_modDef2487.jc1Ip7, obj11),
          disabled: actionsDisabled,
          onPress() {
                return importDefault(request.parent_id);
              },
          style: items3,
          children: tmp13Result6
        };
        const PressableOpacity = tmp2(5435).PressableOpacity;
        intl = tmp2(1115).intl;
        items3 = [, ];
        obj11 = { name: request.parent_username };
        ({ actionButton: arr4[0], acceptButton: arr4[1] } = tmp);
        if (isAcceptLoading) {
          const obj12 = { size: "small", color: tmp.acceptIcon.color };
          tmp13Result6 = tmp13(closure_4, obj12);
        } else {
          const obj13 = { size: "sm", color: nativeDefault.colors.WHITE };
          const CheckmarkLargeBoldIcon = tmp2(8258).CheckmarkLargeBoldIcon;
          tmp13Result6 = tmp13(CheckmarkLargeBoldIcon, obj13);
        }
        tmp13Result7 = tmp13(PressableOpacity, obj10);
      }
      items4 = [tmp13Result7, ];
      const obj14 = {
        accessibilityRole: "button",
        accessibilityLabel: intl2.formatToPlainString(_modDef2487["4GtllP"], obj15),
        disabled: actionsDisabled,
        onPress() {
            return dependencyMap(request.parent_id);
          },
        style: items5,
        children: tmp13Result8
      };
      const PressableOpacity2 = tmp2(5435).PressableOpacity;
      intl2 = tmp2(1115).intl;
      items5 = [, ];
      obj15 = { name: request.parent_username };
      ({ actionButton: arr6[0], declineButton: arr6[1] } = tmp);
      if (isDeclineLoading) {
        const obj16 = { size: "small", color: tmp.declineIcon.color };
        tmp13Result8 = tmp13(closure_4, obj16);
      } else {
        const obj17 = { size: request(1177).Icon.Sizes.SMALL, color: tmp.declineIcon.color, source: AssetRegistryDefault };
        const Icon = tmp2(1177).Icon;
        tmp13Result8 = tmp13(Icon, obj17);
      }
      items4[1] = closure_7(PressableOpacity2, obj14);
      tmp13Result5 = tmp11(tmp12, obj9);
    }
    items1[2] = tmp13Result5;
    return closure_8(closure_5, obj2);
  }
}
({ ActivityIndicator: closure_4, View: hasOwnProperty } = react_native);
let Fragment = Fragment_mod;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let createStyles = createStyles_mod;
let obj = { card: obj2, row: obj3, divider: obj4, avatar: obj5, details: obj6, actions: { flexDirection: "row", alignItems: "center" }, actionButton: size, acceptButton: obj7, declineButton: obj8, acceptIcon: obj9, declineIcon: obj10, inviteIconContainer: size1, inviteQrButton: obj11, inviteShareButton: obj12, dividerRow: { flexDirection: "row", alignItems: "center" }, dividerLine: obj13, dividerLabel: obj14 };
obj2 = { borderRadius: nativeDefault.radii.lg, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, overflow: "hidden" };
createStyles = createStyles.createStyles;
obj3 = { flexDirection: "row", alignItems: "center", paddingVertical: nativeDefault.space.PX_12, paddingHorizontal: nativeDefault.space.PX_16 };
obj4 = { height: 1, backgroundColor: nativeDefault.colors.BORDER_SUBTLE, marginLeft: sum + nativeDefault.space.PX_12 };
const PX_16 = nativeDefault.space.PX_16;
sum = PX_16 + native.AVATAR_SIZE_MAP[native.AvatarSizes.NORMAL];
obj5 = { borderRadius: native.AVATAR_SIZE_MAP[native.AvatarSizes.NORMAL] / 2, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGHEST };
obj6 = { flexGrow: 1, flexShrink: 1, paddingLeft: nativeDefault.space.PX_12, paddingRight: nativeDefault.space.PX_4 };
size = { height: 36, width: 36, borderRadius: nativeDefault.radii.round, alignItems: "center", justifyContent: "center" };
obj7 = { backgroundColor: nativeDefault.colors.STATUS_POSITIVE, marginRight: nativeDefault.space.PX_8 };
obj8 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGHEST, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_STRONG };
obj9 = { color: nativeDefault.colors.WHITE };
obj10 = { color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
size1 = { width: native.AVATAR_SIZE_MAP[native.AvatarSizes.NORMAL], height: native.AVATAR_SIZE_MAP[native.AvatarSizes.NORMAL], alignItems: "center", justifyContent: "center" };
obj11 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGHEST, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_STRONG };
obj12 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGHEST, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_STRONG, marginRight: nativeDefault.space.PX_8 };
obj13 = { flexGrow: 1, flexShrink: 1, height: 1, backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
obj14 = { marginHorizontal: nativeDefault.space.PX_12 };
const React4 = createStyles(obj);
size = size_mod;
let result = size.fileFinishedImporting("modules/safety_flows/native/tasks/PendingRequestList.tsx");

export default function PendingRequestList(arg0) {
  let _undefined;
  let actionsDisabled;
  let c1;
  let c2;
  let c3;
  let c4;
  let c5;
  let c6;
  let c7;
  let closure_0;
  let expiresAt;
  let hasMaxConnections;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let items;
  let items1;
  let items2;
  let items3;
  let items4;
  let items5;
  let items6;
  let items7;
  let linkedUsersProcessed;
  let obj16;
  let obj18;
  let onAccept;
  let onDecline;
  let onInviteAnotherGuardian;
  let onRefreshLinkCode;
  let onShare;
  let pendingRequests;
  let seenRequests;
  importDefault = undefined;
  dependencyMap = undefined;
  c3 = undefined;
  c4 = undefined;
  c5 = undefined;
  c6 = undefined;
  c7 = undefined;
  ({ pendingRequests, linkedUsersProcessed, expiresAt, onRefreshLinkCode, onInviteAnotherGuardian, onShare } = arg0);
  let tmp = closure_9();
  _require = tmp;
  let tmp2 = importDefault;
  useRefreshLinkCodeOnExpiryDefault(expiresAt, onRefreshLinkCode);
  let obj = require("usePendingParentRequests");
  let obj2 = {
    pendingRequests,
    linkedUsersProcessed,
    onActionError() {
      let intl;
      const obj = { key: "SAFETY_FLOWS_PARENTAL_CONSENT_LINK_UPDATE_ERROR", content: intl.string(hasMaxConnections(c2[15]).Wu8BK2) };
      const open = hasMaxConnections(c2[19]).open;
      hasMaxConnections(c2[19]);
      intl = closure_0(c2[12]).intl;
      open(obj);
    }
  };
  const pendingRequestListController = obj.usePendingRequestListController(obj2);
  ({ seenRequests, hasMaxConnections: c1, actioningUserId: c2, isAcceptLoading: c3, isDeclineLoading: c4, actionsDisabled: c5, handleAccept: c6, handleDecline: c7 } = pendingRequestListController);
  let tmp7 = closure_8;
  let obj3 = { spacing: nativeDefault.space.PX_16, children: items };
  const Stack = require("Stack/Stack").Stack;
  let tmp8 = seenRequests.length > 0;
  if (tmp8) {
    let tmp10 = c5;
    const obj4 = {
      style: tmp.card,
      children: seenRequests.map((request, index) => {
          let tmp10;
          let tmp8;
          let tmp2 = index > 0;
          const Fragment = react.Fragment;
          const tmp = metroImportAll;
          if (tmp2) {
            const obj = { style: closure_0.divider };
            tmp2 = metroImportDefault(hasOwnProperty, obj);
          }
          const items = [tmp2, ];
          const obj2 = { request, hasMaxConnections, isAcceptLoading: tmp8, isDeclineLoading: tmp10, actionsDisabled, onAccept, onDecline };
          tmp8 = c3;
          const tmp6 = metroImportDefault;
          const tmp7 = PendingRequestRow;
          if (c3) {
            tmp8 = c2 === request.parent_id;
          }
          const obj3 = { children: items };
          tmp10 = c4 && c2 === request.parent_id;
          items[1] = tmp6(tmp7, obj2);
          return tmp(Fragment, obj3, request.parent_id);
        })
    };
    tmp8 = c7(c5, obj4);
  }
  items = [tmp8, , ];
  const obj5 = { style: tmp.dividerRow, children: items1 };
  items1 = [, , ];
  const obj6 = { style: tmp.dividerLine };
  items1[0] = c7(c5, obj6);
  const obj7 = { style: tmp.dividerLabel, variant: "text-sm/medium", color: "text-muted", children: intl.string(_modDef2781["/SbB94"]) };
  const Text = tmp5(4832).Text;
  intl = tmp5(1115).intl;
  items1[1] = c7(Text, obj7);
  const obj8 = { style: tmp.dividerLine };
  items1[2] = c7(c5, obj8);
  items[1] = tmp7(c5, obj5);
  const obj9 = { style: items2, children: items3 };
  items2 = [, ];
  ({ card: arr3[0], row: arr3[1] } = tmp);
  items3 = [, , ];
  const obj10 = { style: tmp.inviteIconContainer, children: c7(require("PlaneIllocon").PlaneIllocon, { size: 32 }) };
  items3[0] = c7(c5, obj10);
  const obj11 = { style: tmp.details, children: items4 };
  const obj12 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: intl2.string(_modDef2781.z9gkwZ) };
  const Text2 = tmp5(4832).Text;
  intl2 = tmp5(1115).intl;
  items4 = [c7(Text2, obj12), ];
  const obj13 = { variant: "text-xs/medium", color: "text-default", children: intl3.string(_modDef2781["9t4+vC"]) };
  const Text3 = tmp5(4832).Text;
  intl3 = tmp5(1115).intl;
  items4[1] = c7(Text3, obj13);
  items3[1] = tmp7(c5, obj11);
  const obj14 = { style: tmp.actions, children: items6 };
  const obj15 = { accessibilityRole: "button", accessibilityLabel: intl4.string(require("intl").t.Ej3B3Y), onPress: onShare, style: items5, children: c7(require("ShareIcon").ShareIcon, obj16) };
  const PressableOpacity = tmp5(5435).PressableOpacity;
  intl4 = tmp5(1115).intl;
  items5 = [, ];
  ({ actionButton: arr6[0], inviteShareButton: arr6[1] } = tmp);
  obj16 = { size: "sm", color: tmp.declineIcon.color };
  items6 = [c7(PressableOpacity, obj15), ];
  const obj17 = { accessibilityRole: "button", accessibilityLabel: intl5.string(_modDef2781.z9gkwZ), onPress: onInviteAnotherGuardian, style: items7, children: c7(require("QrCodeIcon").QrCodeIcon, obj18) };
  const PressableOpacity2 = tmp5(5435).PressableOpacity;
  intl5 = tmp5(1115).intl;
  items7 = [, ];
  ({ actionButton: arr8[0], inviteQrButton: arr8[1] } = tmp);
  obj18 = { size: "sm", color: tmp.declineIcon.color };
  items6[1] = c7(PressableOpacity2, obj17);
  items3[2] = tmp7(c5, obj14);
  items[2] = tmp7(c5, obj9);
  return tmp7(Stack, obj3);
};
export { PendingRequestRow };
