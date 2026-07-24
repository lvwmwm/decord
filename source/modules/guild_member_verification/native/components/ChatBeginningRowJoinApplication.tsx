// Module ID: 11691
// Function ID: 90692
// Name: ChatBeginningRowJoinRequest
// Dependencies: [31, 27, 3758, 1849, 653, 33, 4130, 689, 11692, 566, 11693, 5513, 4126, 1212, 3950, 4965, 4543, 2]
// Exports: default

// Module 11691 (ChatBeginningRowJoinRequest)
import "result";
import { View } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import { Permissions } from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_7;
let closure_8;
let closure_9;
let require = arg1;
({ jsx: closure_7, jsxs: closure_8, Fragment: closure_9 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { width: "100%", marginTop: 12, display: "flex", flexDirection: "column", alignSelf: "flex-start", padding: 16, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SURFACE_HIGH, borderColor: require("_createForOfIteratorHelperLoose").colors.BORDER_SUBTLE, borderWidth: 1, borderRadius: require("_createForOfIteratorHelperLoose").radii.lg };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.guildInfoRow = { display: "flex", flexDirection: "row", alignItems: "center", gap: 4 };
let obj1 = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BORDER_SUBTLE, height: 1, border: "none", marginVertical: 16 };
_createForOfIteratorHelperLoose.divider = obj1;
_createForOfIteratorHelperLoose.formQuestion = { marginBottom: 4 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/guild_member_verification/native/components/ChatBeginningRowJoinApplication.tsx");

export default function ChatBeginningRowJoinRequest(channelId) {
  let approveRequest;
  let rejectRequest;
  channelId = channelId.channelId;
  const tmp = _createForOfIteratorHelperLoose();
  const require = tmp;
  const tmp2 = joinRequest(joinRequestGuild[8])(channelId);
  joinRequest = tmp2.joinRequest;
  joinRequestGuild = tmp2.joinRequestGuild;
  let obj = require(joinRequestGuild[9]);
  let items = [closure_5];
  const stateFromStores = obj.useStateFromStores(items, () => {
    let userId;
    if (null != joinRequest) {
      userId = joinRequest.userId;
    }
    return outer1_5.getUser(userId);
  });
  let obj1 = require(joinRequestGuild[10]);
  const joinRequestButtonActions = obj1.useJoinRequestButtonActions(joinRequest, channelId);
  ({ approveRequest, rejectRequest } = joinRequestButtonActions);
  let obj2 = require(joinRequestGuild[9]);
  const items1 = [_isNativeReflectConstruct];
  let stateFromStores1 = obj2.useStateFromStores(items1, () => outer1_4.can(outer1_6.KICK_MEMBERS, joinRequestGuild));
  let tmp7Result = null;
  if (null != joinRequest) {
    tmp7Result = null;
    if (null != joinRequest.formResponses) {
      obj = {};
      obj = { style: tmp.container };
      let tmp10 = null != joinRequestGuild;
      if (tmp10) {
        obj1 = { style: tmp.guildInfoRow };
        obj2 = { guild: joinRequestGuild, size: require(joinRequestGuild[11]).GuildIconSizes.XXSMALL };
        const items2 = [callback(joinRequest(joinRequestGuild[11]), obj2), ];
        const obj3 = { variant: "heading-sm/semibold", color: "mobile-text-heading-primary", children: joinRequestGuild.name };
        items2[1] = callback(require(joinRequestGuild[12]).Text, obj3);
        obj1.children = items2;
        tmp10 = callback2(View, obj1);
        const tmp16 = joinRequest(joinRequestGuild[11]);
      }
      const items3 = [tmp10, , ];
      let tmp18 = null != stateFromStores;
      if (tmp18) {
        const obj4 = { variant: "heading-xl/semibold", color: "mobile-text-heading-primary" };
        const intl = require(joinRequestGuild[13]).intl;
        const obj5 = { username: stateFromStores.globalName };
        obj4.children = intl.format(require(joinRequestGuild[13]).t.jDV3i6, obj5);
        tmp18 = callback(require(joinRequestGuild[12]).Text, obj4);
      }
      items3[1] = tmp18;
      const formResponses = joinRequest.formResponses;
      const found = formResponses.filter((field_type) => field_type.field_type !== tmp(joinRequestGuild[14]).VerificationFormFieldTypes.TERMS);
      items3[2] = found.map((field_type) => {
        if (field_type.field_type === tmp(joinRequestGuild[14]).VerificationFormFieldTypes.MULTIPLE_CHOICE) {
          if (null != field_type.response) {
            let response = field_type.choices[field_type.response];
          }
          let obj = {};
          obj = { style: null.divider };
          const items = [outer1_7(outer1_3, obj), , ];
          obj = { style: null.formQuestion, variant: "text-xs/semibold", color: "text-muted", children: field_type.label };
          items[1] = outer1_7(null(joinRequestGuild[12]).Text, obj);
          const obj1 = { variant: "text-md/medium", color: "text-strong", children: response };
          items[2] = outer1_7(null(joinRequestGuild[12]).Text, obj1);
          obj.children = items;
          const _HermesInternal = HermesInternal;
          return outer1_8(outer1_3, obj, "form-response-" + arg1);
        }
        response = field_type.response;
      });
      obj.children = items3;
      const items4 = [callback2(View, obj), ];
      if (stateFromStores1) {
        stateFromStores1 = joinRequest.applicationStatus === require(joinRequestGuild[14]).GuildJoinRequestApplicationStatuses.SUBMITTED;
      }
      if (stateFromStores1) {
        const obj6 = { direction: "horizontal", align: "center" };
        const obj7 = { grow: true, size: "md", variant: "primary", onPress: approveRequest };
        const intl2 = require(joinRequestGuild[13]).intl;
        obj7.text = intl2.string(require(joinRequestGuild[13]).t.BzjDQJ);
        const items5 = [callback(require(joinRequestGuild[16]).Button, obj7), ];
        const obj8 = { grow: true, size: "md", variant: "destructive", onPress: rejectRequest };
        const intl3 = require(joinRequestGuild[13]).intl;
        obj8.text = intl3.string(require(joinRequestGuild[13]).t.hDtbsz);
        items5[1] = callback(require(joinRequestGuild[16]).Button, obj8);
        obj6.children = items5;
        stateFromStores1 = callback2(require(joinRequestGuild[15]).ButtonGroup, obj6);
      }
      items4[1] = stateFromStores1;
      obj.children = items4;
      tmp7Result = tmp7(closure_9, obj);
      const tmp8 = closure_9;
      const tmp9 = View;
    }
  }
  return tmp7Result;
};
