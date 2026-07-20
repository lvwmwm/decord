// Module ID: 15173
// Function ID: 114466
// Name: OpenInterviewButton
// Dependencies: []

// Module 15173 (OpenInterviewButton)
function OpenInterviewButton(arg0) {
  let handleOpenInterview;
  let joinRequest;
  let label;
  let submitting;
  ({ joinRequest, label } = arg0);
  const interviewChannelId = joinRequest.interviewChannelId;
  const arg1 = interviewChannelId;
  let obj = arg1(dependencyMap[19]);
  const items = [closure_5];
  const items1 = [interviewChannelId];
  const stateFromStores = obj.useStateFromStores(items, () => {
    let tmp = null != interviewChannelId;
    if (tmp) {
      tmp = null != channel.getChannel(interviewChannelId);
    }
    return tmp;
  }, items1);
  const joinRequestButtonActions = arg1(dependencyMap[20]).useJoinRequestButtonActions(joinRequest, interviewChannelId);
  ({ handleOpenInterview, submitting } = joinRequestButtonActions);
  const obj2 = arg1(dependencyMap[20]);
  if (!obj3.isActionedApplicationStatus(joinRequest.applicationStatus)) {
    obj = { <string:1522289750>: "r", <string:570601313>: "isArray" };
    obj = { color: importDefault(dependencyMap[7]).colors.CONTROL_SECONDARY_TEXT_DEFAULT, size: "sm" };
    obj.icon = callback(arg1(dependencyMap[23]).ChatIcon, obj);
    if (null == label) {
      const intl = arg1(dependencyMap[24]).intl;
      label = intl.string(arg1(dependencyMap[24]).t.2simqN);
    }
    obj.text = label;
    obj.onPress = handleOpenInterview;
    obj.disabled = submitting;
    let tmp4Result = callback(arg1(dependencyMap[22]).Button, obj);
    const tmp4 = callback;
  } else {
    tmp4Result = null;
  }
  return tmp4Result;
}
const importAllResult = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
let closure_5 = importDefault(dependencyMap[2]);
const ACTION_SHEET_MAX_WIDTH = arg1(dependencyMap[3]).ACTION_SHEET_MAX_WIDTH;
let closure_7 = arg1(dependencyMap[4]).PROFILE_CONTENT_WITHOUT_STATUS_TOP_PADDING;
({ jsx: closure_8, jsxs: closure_9, Fragment: closure_10 } = arg1(dependencyMap[5]));
let obj1 = arg1(dependencyMap[6]);
let obj = {};
obj = { borderTopColor: importDefault(dependencyMap[7]).colors.BORDER_SUBTLE };
obj.responsesContainer = obj;
obj.formQuestion = { marginBottom: 8 };
obj1 = { skuId: "isArray", skuProductLine: "key", marginTop: "Array", flexDirection: "LIGHT", borderRadius: importDefault(dependencyMap[7]).radii.md, backgroundColor: importDefault(dependencyMap[7]).colors.INPUT_BACKGROUND_DEFAULT };
obj.formResponse = obj1;
obj.formResponseMargin = { marginBottom: 16 };
obj.termsField = { "Bool(true)": null, "Bool(true)": null, "Bool(true)": null };
const tmp2 = arg1(dependencyMap[5]);
obj.statusContainer = { backgroundColor: importDefault(dependencyMap[7]).colors.BACKGROUND_SURFACE_HIGH, borderRadius: importDefault(dependencyMap[7]).radii.md };
obj.statusRow = { 9223372036854775807: null, 0: null, 9223372036854775807: null };
obj.actionedInfo = {};
const obj2 = { backgroundColor: importDefault(dependencyMap[7]).colors.BACKGROUND_SURFACE_HIGH, borderRadius: importDefault(dependencyMap[7]).radii.md };
obj.dot = { borderRadius: importDefault(dependencyMap[7]).radii.xs, backgroundColor: importDefault(dependencyMap[7]).colors.TEXT_DEFAULT };
obj.accountInfoLabel = {};
const obj4 = { style: "/assets/.cache/intl/aW50bA==", accessibilityLabel: null, variant: "66d1e4125b6e3fe86e5116b45518629e", backgroundColor: importDefault(dependencyMap[7]).colors.BACKGROUND_SURFACE_HIGH, borderRadius: importDefault(dependencyMap[7]).radii.md };
obj.accountInfoContainer = obj4;
obj.accountInfoRow = { <string:4004065027>: "Text", clock10: "WireType", ackUserFeature: "prototype", 2bprXx: "Array" };
const obj3 = { borderRadius: importDefault(dependencyMap[7]).radii.xs, backgroundColor: importDefault(dependencyMap[7]).colors.TEXT_DEFAULT };
obj.divider = { backgroundColor: importDefault(dependencyMap[7]).colors.BORDER_SUBTLE };
let closure_11 = obj1.createStyles(obj);
let closure_12 = importAllResult.memo((user) => {
  let avatarBackground;
  let containerBackground;
  let displayProfile;
  let gradientFallbackBackground;
  let joinRequest;
  let primaryColor;
  let secondaryColor;
  let statusBackground;
  user = user.user;
  const arg1 = user;
  ({ displayProfile, joinRequest } = user);
  const importDefault = joinRequest;
  const tmp = importDefault(dependencyMap[8])();
  const tmp3 = importDefault(dependencyMap[10])({ user, displayProfile });
  ({ primaryColor, secondaryColor } = tmp3);
  let obj = arg1(dependencyMap[11]);
  const userProfileColors = obj.useUserProfileColors({ theme: tmp3.theme, primaryColor, secondaryColor });
  const items = [joinRequest, user.id];
  ({ gradientFallbackBackground, containerBackground, avatarBackground, statusBackground } = userProfileColors);
  let tmp6 = null;
  if (null != user) {
    obj = {};
    obj = { user, displayProfile, bannerHeight: tmp2 };
    const items1 = [callback(importDefault(dependencyMap[14]), obj), ];
    const obj1 = {};
    const obj2 = { user, disableStatus: true, backgroundColor: avatarBackground };
    const obj3 = { backgroundColor: statusBackground };
    obj2.statusStyle = obj3;
    obj2.onPress = tmp5;
    const items2 = [callback(importDefault(dependencyMap[15]), obj2), ];
    const obj4 = { fallbackBackground: gradientFallbackBackground, primaryColor, secondaryColor };
    const items3 = [, , ];
    ({ profileContentWrapper: arr4[0], profileContent: arr4[1] } = tmp);
    const obj5 = { paddingTop: closure_7, paddingBottom: 0 };
    items3[2] = obj5;
    obj4.containerStyle = items3;
    const obj6 = { style: tmp.primaryInfo };
    const obj7 = { user, displayProfile, badgeContainerBackground: containerBackground, isPreviewingChanges: false };
    const items4 = [callback(arg1(dependencyMap[17]).PrimaryInfo, obj7), ];
    const obj8 = { user };
    items4[1] = callback(importDefault(dependencyMap[18]), obj8);
    obj6.children = items4;
    obj4.children = callback2(View, obj6);
    items2[1] = callback(importDefault(dependencyMap[16]), obj4);
    obj1.children = items2;
    items1[1] = callback2(View, obj1);
    obj.children = items1;
    tmp6 = callback2(closure_10, obj);
    const tmp15 = importDefault(dependencyMap[16]);
  }
  return tmp6;
});
let closure_13 = importAllResult.memo((joinRequest) => {
  let actionedAt;
  let actionedByUser;
  let applicationStatus;
  let rejectionReason;
  joinRequest = joinRequest.joinRequest;
  ({ actionedAt, actionedByUser, rejectionReason, applicationStatus } = joinRequest);
  const tmp = callback3();
  if (applicationStatus === arg1(dependencyMap[25]).GuildJoinRequestApplicationStatuses.SUBMITTED) {
    if (null != joinRequest.interviewChannelId) {
      let obj = { style: tmp.statusContainer };
      obj = { style: tmp.statusRow };
      const obj1 = { size: "lg", color: importDefault(dependencyMap[7]).colors.STATUS_WARNING };
      const items = [callback(arg1(dependencyMap[26]).HourglassIcon, obj1), ];
      const obj2 = {};
      const obj3 = {};
      const intl6 = arg1(dependencyMap[24]).intl;
      obj3.children = intl6.string(arg1(dependencyMap[24]).t.Vr+7eO);
      obj2.children = callback(arg1(dependencyMap[27]).Text, obj3);
      items[1] = callback(View, obj2);
      obj.children = items;
      const items1 = [callback2(View, obj), ];
      const obj4 = { joinRequest };
      const intl7 = arg1(dependencyMap[24]).intl;
      obj4.label = intl7.string(arg1(dependencyMap[24]).t.rcqdhN);
      items1[1] = callback(OpenInterviewButton, obj4);
      obj.children = items1;
      return callback2(View, obj);
    }
  }
  if (arg1(dependencyMap[25]).GuildJoinRequestApplicationStatuses.REJECTED === applicationStatus) {
    const obj5 = { style: tmp.statusContainer };
    const obj6 = { style: tmp.statusRow };
    const obj7 = { size: "lg", color: importDefault(dependencyMap[7]).colors.ICON_FEEDBACK_CRITICAL, secondaryColor: importDefault(dependencyMap[7]).colors.WHITE };
    const items2 = [callback(arg1(dependencyMap[28]).CircleXIcon, obj7), ];
    const obj8 = {};
    const obj9 = {};
    const intl3 = arg1(dependencyMap[24]).intl;
    obj9.children = intl3.string(arg1(dependencyMap[24]).t.bSZkla);
    const items3 = [callback(arg1(dependencyMap[27]).Text, obj9), , ];
    let tmp40Result = null;
    if (null != actionedByUser) {
      tmp40Result = null;
      if (null != actionedAt) {
        let obj10 = { style: tmp.actionedInfo };
        let obj11 = { INTEGRATION_CREATE: "AutomodMentionRaidLimit", ConstraintReasonCode: "%URIError%" };
        const intl4 = arg1(dependencyMap[24]).intl;
        const obj12 = {};
        let username2 = actionedByUser.global_name;
        if (null == username2) {
          username2 = actionedByUser.username;
        }
        obj12.username = username2;
        obj11.children = intl4.formatToPlainString(arg1(dependencyMap[24]).t.qnimbL, obj12);
        const items4 = [callback(arg1(dependencyMap[27]).Text, obj11), , ];
        const obj13 = { style: tmp.dot };
        items4[1] = callback(View, obj13);
        const obj14 = { INTEGRATION_CREATE: "AutomodMentionRaidLimit", ConstraintReasonCode: "%URIError%" };
        let obj23 = arg1(dependencyMap[29]);
        const _Date2 = Date;
        let obj24 = importDefault(dependencyMap[30]);
        const date = new Date(obj24.extractTimestamp(actionedAt));
        obj14.children = obj23.dateFormat(date, "LL");
        items4[2] = callback(arg1(dependencyMap[27]).Text, obj14);
        obj10.children = items4;
        tmp40Result = callback2(View, obj10);
        const tmp40 = callback2;
        const tmp41 = View;
        const tmp42 = callback;
      }
    }
    items3[1] = tmp40Result;
    let tmp56 = null != rejectionReason;
    if (tmp56) {
      const obj15 = { INTEGRATION_CREATE: "AutomodMentionRaidLimit", ConstraintReasonCode: "%URIError%" };
      const intl5 = arg1(dependencyMap[24]).intl;
      const obj16 = { rejectionReason };
      obj15.children = intl5.formatToPlainString(arg1(dependencyMap[24]).t.fU5PPM, obj16);
      tmp56 = callback(arg1(dependencyMap[27]).Text, obj15);
    }
    items3[2] = tmp56;
    obj8.children = items3;
    items2[1] = callback2(View, obj8);
    obj6.children = items2;
    const items5 = [callback2(View, obj6), ];
    const obj17 = { joinRequest };
    items5[1] = callback(OpenInterviewButton, obj17);
    obj5.children = items5;
    return callback2(View, obj5);
  } else if (arg1(dependencyMap[25]).GuildJoinRequestApplicationStatuses.APPROVED === applicationStatus) {
    obj = { style: tmp.statusContainer };
    const obj18 = { style: tmp.statusRow };
    const obj19 = { size: "lg", color: importDefault(dependencyMap[7]).colors.STATUS_POSITIVE_BACKGROUND, secondaryColor: importDefault(dependencyMap[7]).colors.STATUS_POSITIVE_TEXT };
    const items6 = [callback(arg1(dependencyMap[31]).CircleCheckIcon, obj19), ];
    const obj20 = {};
    const obj21 = {};
    const intl = arg1(dependencyMap[24]).intl;
    obj21.children = intl.string(arg1(dependencyMap[24]).t.aURgY2);
    const items7 = [callback(arg1(dependencyMap[27]).Text, obj21), ];
    let tmp13Result = null;
    if (null != actionedByUser) {
      tmp13Result = null;
      if (null != actionedAt) {
        const obj22 = { style: tmp.actionedInfo };
        obj23 = { INTEGRATION_CREATE: "AutomodMentionRaidLimit", ConstraintReasonCode: "%URIError%" };
        const intl2 = arg1(dependencyMap[24]).intl;
        obj24 = {};
        let username = actionedByUser.global_name;
        if (null == username) {
          username = actionedByUser.username;
        }
        obj24.username = username;
        obj23.children = intl2.formatToPlainString(arg1(dependencyMap[24]).t.qnimbL, obj24);
        const items8 = [callback(arg1(dependencyMap[27]).Text, obj23), , ];
        const obj25 = { style: tmp.dot };
        items8[1] = callback(View, obj25);
        const obj26 = { INTEGRATION_CREATE: "AutomodMentionRaidLimit", ConstraintReasonCode: "%URIError%" };
        obj10 = arg1(dependencyMap[29]);
        const _Date = Date;
        obj11 = importDefault(dependencyMap[30]);
        const date1 = new Date(obj11.extractTimestamp(actionedAt));
        obj26.children = obj10.dateFormat(date1, "LL");
        items8[2] = callback(arg1(dependencyMap[27]).Text, obj26);
        obj22.children = items8;
        tmp13Result = callback2(View, obj22);
        const tmp13 = callback2;
        const tmp14 = View;
        const tmp15 = callback;
      }
    }
    items7[1] = tmp13Result;
    obj20.children = items7;
    items6[1] = callback2(View, obj20);
    obj18.children = items6;
    const items9 = [callback2(View, obj18), ];
    const obj27 = { joinRequest };
    items9[1] = callback(OpenInterviewButton, obj27);
    obj.children = items9;
    return callback2(View, obj);
  } else {
    return null;
  }
});
let closure_14 = importAllResult.memo((joinRequest) => {
  let approveRequest;
  let handleOpenInterview;
  let rejectRequest;
  joinRequest = joinRequest.joinRequest;
  const arg1 = joinRequest;
  const items = [joinRequest];
  const callback = importAllResult.useCallback(() => {
    callback(closure_2[13])(joinRequest);
  }, items);
  let obj = arg1(dependencyMap[20]);
  const joinRequestButtonActions = obj.useJoinRequestButtonActions(joinRequest, joinRequest.interviewChannelId, callback);
  const submitting = joinRequestButtonActions.submitting;
  ({ approveRequest, rejectRequest, handleOpenInterview } = joinRequestButtonActions);
  obj = { -9223372036854775808: null, 0: "210c1b00e626925954729db07b85fa94", 0: "ic_polls" };
  obj = { variant: "primary" };
  const obj1 = { color: importDefault(dependencyMap[7]).colors.WHITE, size: "lg" };
  obj.icon = callback(arg1(dependencyMap[34]).CheckmarkLargeIcon, obj1);
  const intl = arg1(dependencyMap[24]).intl;
  obj.label = intl.string(arg1(dependencyMap[24]).t.BzjDQJ);
  obj.onPress = approveRequest;
  obj.disabled = submitting;
  const items1 = [callback(arg1(dependencyMap[33]).IconButton, obj), , ];
  const obj2 = { variant: "destructive" };
  const obj3 = { color: importDefault(dependencyMap[7]).colors.WHITE, size: "lg" };
  obj2.icon = callback(arg1(dependencyMap[35]).XLargeIcon, obj3);
  const intl2 = arg1(dependencyMap[24]).intl;
  obj2.label = intl2.string(arg1(dependencyMap[24]).t.hDtbsz);
  obj2.onPress = rejectRequest;
  obj2.disabled = submitting;
  items1[1] = callback(arg1(dependencyMap[33]).IconButton, obj2);
  let tmp4 = null == joinRequest.interviewChannelId;
  if (tmp4) {
    const obj4 = { variant: "secondary" };
    const obj5 = { color: importDefault(dependencyMap[7]).colors.CONTROL_SECONDARY_TEXT_DEFAULT, size: "lg" };
    obj4.icon = callback(arg1(dependencyMap[23]).ChatIcon, obj5);
    const intl3 = arg1(dependencyMap[24]).intl;
    obj4.label = intl3.string(arg1(dependencyMap[24]).t.KQeYoC);
    obj4.onPress = handleOpenInterview;
    obj4.disabled = submitting;
    tmp4 = callback(arg1(dependencyMap[33]).IconButton, obj4);
  }
  items1[2] = tmp4;
  obj.children = items1;
  return closure_9(arg1(dependencyMap[32]).ButtonGroup, obj);
});
let closure_15 = importAllResult.memo((arg0) => {
  let field;
  let isLastField;
  ({ field, isLastField } = arg0);
  const tmp = callback3();
  const field_type = field.field_type;
  if (arg1(dependencyMap[25]).VerificationFormFieldTypes.TERMS === field_type) {
    let obj = {};
    const items = [, , ];
    ({ termsField: arr3[0], formResponse: arr3[1] } = tmp);
    let formResponseMargin = null;
    if (!isLastField) {
      formResponseMargin = tmp.formResponseMargin;
    }
    items[2] = formResponseMargin;
    obj.style = items;
    obj = { children: field.label };
    const items1 = [callback(arg1(dependencyMap[27]).Text, obj), ];
    const obj1 = { size: "sm", color: importDefault(dependencyMap[7]).colors.STATUS_POSITIVE_BACKGROUND, secondaryColor: importDefault(dependencyMap[7]).colors.STATUS_POSITIVE_TEXT };
    items1[1] = callback(arg1(dependencyMap[31]).CircleCheckIcon, obj1);
    obj.children = items1;
    return closure_9(View, obj);
  } else if (arg1(dependencyMap[25]).VerificationFormFieldTypes.MULTIPLE_CHOICE === field_type) {
    const obj2 = {};
    const obj3 = { Promise: false, marginTop: false, flags: false, style: tmp.formQuestion, children: field.label };
    const items2 = [callback(arg1(dependencyMap[27]).Text, obj3), ];
    const obj4 = {};
    const items3 = [tmp.formResponse, ];
    let formResponseMargin1 = null;
    if (!isLastField) {
      formResponseMargin1 = tmp.formResponseMargin;
    }
    items3[1] = formResponseMargin1;
    obj4.style = items3;
    const obj5 = {};
    let tmp17 = null;
    if (null != field.response) {
      tmp17 = field.choices[field.response];
    }
    obj5.children = tmp17;
    obj4.children = callback(arg1(dependencyMap[27]).Text, obj5);
    items2[1] = callback(View, obj4);
    obj2.children = items2;
    return closure_9(View, obj2);
  } else {
    const obj6 = {};
    const obj7 = { Promise: false, marginTop: false, flags: false, style: tmp.formQuestion, children: field.label };
    const items4 = [callback(arg1(dependencyMap[27]).Text, obj7), ];
    const obj8 = {};
    const items5 = [tmp.formResponse, ];
    let formResponseMargin2 = null;
    if (!isLastField) {
      formResponseMargin2 = tmp.formResponseMargin;
    }
    items5[1] = formResponseMargin2;
    obj8.style = items5;
    obj = { children: field.response };
    obj8.children = callback(arg1(dependencyMap[27]).Text, obj);
    items4[1] = callback(View, obj8);
    obj6.children = items4;
    return closure_9(View, obj6);
  }
});
let closure_16 = importAllResult.memo((arg0) => {
  let joinRequest;
  let user;
  ({ joinRequest, user } = arg0);
  const tmp = callback3();
  let obj = {};
  obj = { style: tmp.accountInfoLabel };
  const intl = arg1(dependencyMap[24]).intl;
  obj.children = intl.string(arg1(dependencyMap[24]).t.ldCE/p);
  const items = [callback(arg1(dependencyMap[27]).Text, obj), ];
  obj = { style: tmp.accountInfoContainer };
  const obj1 = { style: tmp.accountInfoRow };
  const obj2 = {};
  const intl2 = arg1(dependencyMap[24]).intl;
  obj2.children = intl2.string(arg1(dependencyMap[24]).t.SaDIpL);
  const items1 = [callback(arg1(dependencyMap[27]).Text, obj2), ];
  const obj3 = { INTEGRATION_CREATE: "<string:1900005261>", ConstraintReasonCode: "Array" };
  let obj6 = arg1(dependencyMap[29]);
  let obj7 = importDefault(dependencyMap[30]);
  obj3.children = obj6.dateFormat(new Date(obj7.extractTimestamp(user.id)), "LL");
  items1[1] = callback(arg1(dependencyMap[27]).Text, obj3);
  obj1.children = items1;
  const items2 = [callback2(View, obj1), callback(View, { style: tmp.divider }), ];
  const obj5 = { style: tmp.accountInfoRow };
  obj6 = {};
  const intl3 = arg1(dependencyMap[24]).intl;
  obj6.children = intl3.string(arg1(dependencyMap[24]).t.Vt4cn+);
  const items3 = [callback(arg1(dependencyMap[27]).Text, obj6), ];
  obj7 = { INTEGRATION_CREATE: "<string:1900005261>", ConstraintReasonCode: "Array" };
  const date = new Date(obj7.extractTimestamp(user.id));
  const obj4 = { style: tmp.divider };
  const obj13 = arg1(dependencyMap[29]);
  obj7.children = obj13.dateFormat(new Date(joinRequest.createdAt), "LL");
  items3[1] = callback(arg1(dependencyMap[27]).Text, obj7);
  obj5.children = items3;
  items2[2] = callback2(View, obj5);
  obj.children = items2;
  items[1] = callback2(View, obj);
  obj.children = items;
  return callback2(closure_10, obj);
});
const obj5 = { backgroundColor: importDefault(dependencyMap[7]).colors.BORDER_SUBTLE };
const memoResult = importAllResult.memo(function JoinRequestActionSheetContent(displayProfile) {
  let joinRequest;
  let user;
  ({ user, joinRequest } = displayProfile);
  const arg1 = joinRequest;
  let importDefault;
  let formResponses;
  if (null != joinRequest) {
    formResponses = joinRequest.formResponses;
  }
  const items = [formResponses];
  const memo = importAllResult.useMemo(() => {
    let formResponses;
    if (null != joinRequest) {
      formResponses = joinRequest.formResponses;
    }
    if (null == formResponses) {
      formResponses = [];
    }
    return formResponses;
  }, items);
  importDefault = memo;
  let obj = { style: { paddingBottom: importDefault(dependencyMap[36])().bottom } };
  const items1 = [callback(closure_12, { joinRequest, user, displayProfile: displayProfile.displayProfile }), , , , ];
  if (joinRequest.applicationStatus === arg1(dependencyMap[25]).GuildJoinRequestApplicationStatuses.SUBMITTED) {
    obj = {};
    let tmp11 = null != joinRequest.interviewChannelId;
    if (tmp11) {
      obj = { joinRequest };
      tmp11 = callback(closure_13, obj);
    }
    const items2 = [tmp11, ];
    const obj1 = { joinRequest };
    items2[1] = callback(closure_14, obj1);
    obj.children = items2;
    let tmp9Result = closure_9(closure_10, obj);
    const tmp10 = closure_10;
    const tmp9 = closure_9;
  } else {
    const obj2 = { joinRequest };
    tmp9Result = callback(closure_13, obj2);
  }
  items1[1] = tmp9Result;
  const obj3 = { style: callback3().responsesContainer };
  let mapped;
  if (null != memo) {
    mapped = memo.map((field) => callback(closure_15, { field, isLastField: arg1 === memo.length - 1 }, "response-" + arg1 + "-" + field.field_type + "-" + field.label + "-" + arg1 === memo.length - 1));
  }
  obj3.children = mapped;
  items1[2] = callback(View, obj3);
  items1[3] = callback(closure_16, { joinRequest, user });
  items1[4] = callback(importDefault(dependencyMap[37]), { guildId: joinRequest.guildId, userId: joinRequest.userId, selectedJoinRequestId: joinRequest.joinRequestId });
  obj.children = items1;
  return closure_9(View, obj);
});
const result = arg1(dependencyMap[38]).fileFinishedImporting("modules/guild_member_verification/native/components/JoinRequestActionSheetContent.tsx");

export default memoResult;
