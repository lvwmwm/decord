// Module ID: 12128
// Function ID: 12129
// Name: ChatBeginningRowJoinApplication
// Dependencies: [19, 17, 4469, 1372, 1074, 21, 4836, 576, 12129, 504, 12130, 5896, 4832, 1115, 4658, 5745, 5281, 2]
// Exports: default

// Module 12128 (ChatBeginningRowJoinApplication)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1074 */;
import MemberVerificationTypes from "MemberVerificationTypes" /* 4658 */;
import Text_Text from "Text/Text" /* 4832 */;
import react from "react" /* 19 */;
import PermissionStore from "PermissionStore" /* 4469 */;
import UserStore from "UserStore" /* 1372 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let c9;
let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
const View = react_native.View;
const Permissions = Constants.Permissions;
({ jsx: metroImportDefault, jsxs: metroImportAll, Fragment: c9 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, guildInfoRow: { display: "flex", flexDirection: "row", alignItems: "center", gap: 4 }, divider: obj3, formQuestion: { marginBottom: 4 } };
obj2 = { width: "100%", marginTop: 12, display: "flex", flexDirection: "column", alignSelf: "flex-start", padding: 16, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderColor: nativeDefault.colors.BORDER_SUBTLE, borderWidth: 1, borderRadius: nativeDefault.radii.lg };
createStyles = createStyles.createStyles;
obj3 = { backgroundColor: nativeDefault.colors.BORDER_SUBTLE, height: 1, border: "none", marginVertical: 16 };
let closure_10 = createStyles(obj);
const result = size.fileFinishedImporting("modules/guild_member_verification/native/components/ChatBeginningRowJoinApplication.tsx");

export default function ChatBeginningRowJoinRequest(channelId) {
  let approveRequest;
  let closure_0;
  let intl;
  let intl2;
  let intl3;
  let items2;
  let items3;
  let items5;
  let obj9;
  let rejectRequest;
  channelId = channelId.channelId;
  let joinRequest;
  let joinRequestGuild;
  const tmp = closure_10();
  _require = tmp;
  const tmp4 = joinRequest(joinRequestGuild[8])(channelId);
  const tmp2 = joinRequest;
  joinRequest = tmp4.joinRequest;
  joinRequestGuild = tmp4.joinRequestGuild;
  let obj = require("get initialized");
  let items = [UserStore];
  const stateFromStores = obj.useStateFromStores(items, () => {
    let userId;
    const getUser = UserStore.getUser;
    if (joinRequest != null) {
      userId = joinRequest.userId;
    }
    return getUser(userId);
  });
  let obj2 = require("useJoinRequestButtonActions");
  const joinRequestButtonActions = obj2.useJoinRequestButtonActions(joinRequest, channelId);
  ({ approveRequest, rejectRequest } = joinRequestButtonActions);
  let obj3 = require("get initialized");
  const items1 = [PermissionStore];
  let stateFromStores1 = obj3.useStateFromStores(items1, () => PermissionStore.can(Permissions.KICK_MEMBERS, joinRequestGuild));
  let tmp10Result2 = null;
  if (null != joinRequest) {
    tmp10Result2 = null;
    if (null != joinRequest.formResponses) {
      let obj4 = { style: tmp.container, children: items3 };
      let tmp10Result = null != joinRequestGuild;
      const tmp11 = closure_9;
      if (tmp10Result) {
        const obj5 = { style: tmp.guildInfoRow, children: items2 };
        const obj6 = { guild: joinRequestGuild, size: require("GuildIcon").GuildIconSizes.XXSMALL };
        const tmp2Result = tmp2(joinRequestGuild[11]);
        items2 = [closure_7(tmp2Result, obj6), ];
        const obj7 = { variant: "heading-sm/semibold", color: "mobile-text-heading-primary", children: joinRequestGuild.name };
        items2[1] = closure_7(require("Text/Text").Text, obj7);
        tmp10Result = tmp10(tmp12, obj5);
      }
      items3 = [tmp10Result, , ];
      let tmp16 = null != stateFromStores;
      if (tmp16) {
        const obj8 = { variant: "heading-xl/semibold", color: "mobile-text-heading-primary", children: intl.format(require("intl").t.jDV3i6, obj9) };
        const Text = tmp5(tmp3[12]).Text;
        intl = tmp5(tmp3[13]).intl;
        obj9 = { username: stateFromStores.globalName };
        tmp16 = closure_7(Text, obj8);
      }
      items3[1] = tmp16;
      const formResponses = joinRequest.formResponses;
      const found = formResponses.filter((field_type) => field_type.field_type !== closure_0(joinRequestGuild[14]).VerificationFormFieldTypes.TERMS);
      items3[2] = found.map((field_type, index) => {
        let items;
        if (field_type.field_type === MemberVerificationTypes.VerificationFormFieldTypes.MULTIPLE_CHOICE) {
          let response;
          if (null != field_type.response) {
            response = field_type.choices[field_type.response];
          }
          const obj = { children: items };
          const obj2 = { style: closure_0.divider };
          items = [metroImportDefault(View, obj2), , ];
          const obj3 = { style: closure_0.formQuestion, variant: "text-xs/semibold", color: "text-muted", children: field_type.label };
          items[1] = metroImportDefault(Text_Text.Text, obj3);
          const obj4 = { variant: "text-md/medium", color: "text-strong", children: response };
          items[2] = metroImportDefault(Text_Text.Text, obj4);
          const _HermesInternal = HermesInternal;
          return metroImportAll(View, obj, "form-response-" + index);
        }
        response = field_type.response;
      });
      const items4 = [closure_8(View, obj4), ];
      if (stateFromStores1) {
        stateFromStores1 = joinRequest.applicationStatus === tmp5(tmp3[14]).GuildJoinRequestApplicationStatuses.SUBMITTED;
      }
      if (stateFromStores1) {
        const obj10 = { direction: "horizontal", align: "center", children: items5 };
        const ButtonGroup = tmp5(tmp3[15]).ButtonGroup;
        const obj11 = { grow: true, size: "md", variant: "primary", onPress: approveRequest, text: intl2.string(require("intl").t.BzjDQJ) };
        const Button = tmp5(tmp3[16]).Button;
        intl2 = tmp5(tmp3[13]).intl;
        items5 = [closure_7(Button, obj11), ];
        const obj12 = { grow: true, size: "md", variant: "destructive", onPress: rejectRequest, text: intl3.string(require("intl").t.hDtbsz) };
        const Button2 = tmp5(tmp3[16]).Button;
        intl3 = tmp5(tmp3[13]).intl;
        items5[1] = closure_7(Button2, obj12);
        stateFromStores1 = tmp10(ButtonGroup, obj10);
      }
      const obj13 = { children: items4 };
      items4[1] = stateFromStores1;
      tmp10Result2 = tmp10(tmp11, obj13);
    }
  }
  return tmp10Result2;
};
