// Module ID: 11654
// Function ID: 90405
// Name: ChatBeginningRowJoinRequest
// Dependencies: []
// Exports: default

// Module 11654 (ChatBeginningRowJoinRequest)
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
const Permissions = arg1(dependencyMap[4]).Permissions;
({ jsx: closure_7, jsxs: closure_8, Fragment: closure_9 } = arg1(dependencyMap[5]));
let obj = arg1(dependencyMap[6]);
obj = {};
obj = { backgroundColor: importDefault(dependencyMap[7]).colors.BACKGROUND_SURFACE_HIGH, borderColor: importDefault(dependencyMap[7]).colors.BORDER_SUBTLE, borderRadius: importDefault(dependencyMap[7]).radii.lg };
obj.container = obj;
obj.guildInfoRow = { 9223372036854775807: "suppress_editor_mention", -9223372036854775808: "scalar", 0: 8, 9223372036854775807: 33 };
const obj1 = { "Bool(true)": "r", "Bool(true)": "DISMISSIBLE_CONTENT_SHOWN", "Bool(true)": "OVERLAY", "Bool(true)": "y", backgroundColor: importDefault(dependencyMap[7]).colors.BORDER_SUBTLE };
obj.divider = obj1;
obj.formQuestion = { marginBottom: 4 };
let closure_10 = obj.createStyles(obj);
const tmp3 = arg1(dependencyMap[5]);
const result = arg1(dependencyMap[17]).fileFinishedImporting("modules/guild_member_verification/native/components/ChatBeginningRowJoinApplication.tsx");

export default function ChatBeginningRowJoinRequest(channelId) {
  let approveRequest;
  let rejectRequest;
  channelId = channelId.channelId;
  const tmp = callback3();
  const arg1 = tmp;
  const tmp2 = importDefault(dependencyMap[8])(channelId);
  const joinRequest = tmp2.joinRequest;
  const importDefault = joinRequest;
  const joinRequestGuild = tmp2.joinRequestGuild;
  const dependencyMap = joinRequestGuild;
  let obj = arg1(dependencyMap[9]);
  const items = [closure_5];
  const stateFromStores = obj.useStateFromStores(items, () => {
    let userId;
    if (null != joinRequest) {
      userId = joinRequest.userId;
    }
    return user.getUser(userId);
  });
  let obj1 = arg1(dependencyMap[10]);
  const joinRequestButtonActions = obj1.useJoinRequestButtonActions(joinRequest, channelId);
  ({ approveRequest, rejectRequest } = joinRequestButtonActions);
  let obj2 = arg1(dependencyMap[9]);
  const items1 = [closure_4];
  let stateFromStores1 = obj2.useStateFromStores(items1, () => closure_4.can(constants.KICK_MEMBERS, joinRequestGuild));
  let tmp7Result = null;
  if (null != joinRequest) {
    tmp7Result = null;
    if (null != joinRequest.formResponses) {
      obj = {};
      obj = { style: tmp.container };
      let tmp10 = null != joinRequestGuild;
      if (tmp10) {
        obj1 = { style: tmp.guildInfoRow };
        obj2 = { guild: joinRequestGuild, size: arg1(dependencyMap[11]).GuildIconSizes.XXSMALL };
        const items2 = [callback(importDefault(dependencyMap[11]), obj2), ];
        const obj3 = { cachedAt: "polite", edpbxy: "column", children: joinRequestGuild.name };
        items2[1] = callback(arg1(dependencyMap[12]).Text, obj3);
        obj1.children = items2;
        tmp10 = callback2(View, obj1);
        const tmp16 = importDefault(dependencyMap[11]);
      }
      const items3 = [tmp10, , ];
      let tmp18 = null != stateFromStores;
      if (tmp18) {
        const obj4 = { cachedAt: false, edpbxy: false };
        const intl = arg1(dependencyMap[13]).intl;
        const obj5 = { username: stateFromStores.globalName };
        obj4.children = intl.format(arg1(dependencyMap[13]).t.jDV3i6, obj5);
        tmp18 = callback(arg1(dependencyMap[12]).Text, obj4);
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
          const items = [callback(closure_3, obj), , ];
          obj = { "Null": null, "Null": 15, alignItems: "center", style: null.formQuestion, children: field_type.label };
          items[1] = callback(null(joinRequestGuild[12]).Text, obj);
          const obj1 = { cachedAt: null, edpbxy: null, children: response };
          items[2] = callback(null(joinRequestGuild[12]).Text, obj1);
          obj.children = items;
          const _HermesInternal = HermesInternal;
          return callback2(closure_3, obj, "form-response-" + arg1);
        }
        response = field_type.response;
      });
      obj.children = items3;
      const items4 = [callback2(View, obj), ];
      if (stateFromStores1) {
        stateFromStores1 = joinRequest.applicationStatus === arg1(dependencyMap[14]).GuildJoinRequestApplicationStatuses.SUBMITTED;
      }
      if (stateFromStores1) {
        const obj6 = { "Bool(false)": "absolute", "Bool(false)": 8 };
        const obj7 = { onPress: approveRequest };
        const intl2 = arg1(dependencyMap[13]).intl;
        obj7.text = intl2.string(arg1(dependencyMap[13]).t.BzjDQJ);
        const items5 = [callback(arg1(dependencyMap[16]).Button, obj7), ];
        const obj8 = { onPress: rejectRequest };
        const intl3 = arg1(dependencyMap[13]).intl;
        obj8.text = intl3.string(arg1(dependencyMap[13]).t.hDtbsz);
        items5[1] = callback(arg1(dependencyMap[16]).Button, obj8);
        obj6.children = items5;
        stateFromStores1 = callback2(arg1(dependencyMap[15]).ButtonGroup, obj6);
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
