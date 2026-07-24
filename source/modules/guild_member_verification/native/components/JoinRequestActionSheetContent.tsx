// Module ID: 15354
// Function ID: 117059
// Name: OpenInterviewButton
// Dependencies: [31, 27, 1348, 5188, 5510, 33, 4130, 689, 8282, 8545, 8280, 8284, 8537, 15352, 8304, 8307, 11936, 12009, 12172, 566, 11693, 3949, 4543, 4629, 1212, 3950, 11953, 4126, 5776, 3800, 21, 4091, 4965, 7533, 4082, 4084, 1557, 15355, 2]

// Module 15354 (OpenInterviewButton)
import importAllResult from "CircleCheckIcon";
import { View } from "Text";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { ACTION_SHEET_MAX_WIDTH } from "ACTION_SHEET_START_HEIGHT_RATIO";
import { PROFILE_CONTENT_WITHOUT_STATUS_TOP_PADDING as closure_7 } from "ARBITRARY_LARGE_OFFSET";
import jsxProd from "IconButton";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_8;
let closure_9;
const require = arg1;
function OpenInterviewButton(arg0) {
  let handleOpenInterview;
  let joinRequest;
  let label;
  let submitting;
  ({ joinRequest, label } = arg0);
  const interviewChannelId = joinRequest.interviewChannelId;
  let obj = interviewChannelId(566);
  const items = [_isNativeReflectConstruct];
  const items1 = [interviewChannelId];
  const stateFromStores = obj.useStateFromStores(items, () => {
    let tmp = null != interviewChannelId;
    if (tmp) {
      tmp = null != outer1_5.getChannel(interviewChannelId);
    }
    return tmp;
  }, items1);
  const joinRequestButtonActions = interviewChannelId(11693).useJoinRequestButtonActions(joinRequest, interviewChannelId);
  ({ handleOpenInterview, submitting } = joinRequestButtonActions);
  const obj2 = interviewChannelId(11693);
  if (!obj3.isActionedApplicationStatus(joinRequest.applicationStatus)) {
    obj = { variant: "secondary", size: "md" };
    obj = { color: importDefault(689).colors.CONTROL_SECONDARY_TEXT_DEFAULT, size: "sm" };
    obj.icon = callback(interviewChannelId(4629).ChatIcon, obj);
    if (null == label) {
      const intl = interviewChannelId(1212).intl;
      label = intl.string(interviewChannelId(1212).t["2simqN"]);
    }
    obj.text = label;
    obj.onPress = handleOpenInterview;
    obj.disabled = submitting;
    let tmp4Result = callback(interviewChannelId(4543).Button, obj);
    const tmp4 = callback;
  } else {
    tmp4Result = null;
  }
  return tmp4Result;
}
({ jsx: closure_8, jsxs: closure_9, Fragment: closure_10 } = jsxProd);
let obj = {};
obj = { paddingHorizontal: 16, paddingTop: 24, borderTopColor: require("_createForOfIteratorHelperLoose").colors.BORDER_SUBTLE, borderTopWidth: 1 };
obj.responsesContainer = obj;
obj.formQuestion = { marginBottom: 8 };
_createForOfIteratorHelperLoose = { padding: 12, width: "100%", borderRadius: require("_createForOfIteratorHelperLoose").radii.md, lineHeight: 20, backgroundColor: require("_createForOfIteratorHelperLoose").colors.INPUT_BACKGROUND_DEFAULT };
obj.formResponse = _createForOfIteratorHelperLoose;
obj.formResponseMargin = { marginBottom: 16 };
obj.termsField = { flexDirection: "row", alignItems: "center", justifyContent: "space-between" };
let obj2 = { flexDirection: "column", gap: 12, paddingHorizontal: 16, paddingVertical: 12, marginTop: 8, marginBottom: 16, marginHorizontal: 16, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SURFACE_HIGH, borderRadius: require("_createForOfIteratorHelperLoose").radii.md };
obj.statusContainer = obj2;
obj.statusRow = { flexDirection: "row", alignItems: "center", gap: 12 };
obj.actionedInfo = { flexDirection: "row", gap: 8, alignItems: "center" };
let obj3 = { height: 4, width: 4, borderRadius: require("_createForOfIteratorHelperLoose").radii.xs, backgroundColor: require("_createForOfIteratorHelperLoose").colors.TEXT_DEFAULT };
obj.dot = obj3;
obj.accountInfoLabel = { marginTop: 16, marginHorizontal: 16, marginBottom: 8 };
let obj4 = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SURFACE_HIGH, marginHorizontal: 16, marginBottom: 16, borderRadius: require("_createForOfIteratorHelperLoose").radii.md };
obj.accountInfoContainer = obj4;
obj.accountInfoRow = { flexDirection: "row", justifyContent: "space-between", alignItems: "center", padding: 16 };
let obj5 = { width: "100%", height: 1, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BORDER_SUBTLE };
obj.divider = obj5;
let closure_11 = _createForOfIteratorHelperLoose.createStyles(obj);
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
  ({ displayProfile, joinRequest } = user);
  const tmp = joinRequest(8282)();
  const tmp3 = joinRequest(8280)({ user, displayProfile });
  ({ primaryColor, secondaryColor } = tmp3);
  let obj = user(8284);
  const userProfileColors = obj.useUserProfileColors({ theme: tmp3.theme, primaryColor, secondaryColor });
  const items = [joinRequest, user.id];
  ({ gradientFallbackBackground, containerBackground, avatarBackground, statusBackground } = userProfileColors);
  let tmp6 = null;
  if (null != user) {
    obj = {};
    obj = { user, displayProfile, bannerHeight: tmp2 };
    const items1 = [callback(joinRequest(8304), obj), ];
    const obj1 = {};
    const obj2 = { user, disableStatus: true, backgroundColor: avatarBackground };
    const obj3 = { backgroundColor: statusBackground };
    obj2.statusStyle = obj3;
    obj2.onPress = tmp5;
    const items2 = [callback(joinRequest(8307), obj2), ];
    const obj4 = { fallbackBackground: gradientFallbackBackground, primaryColor, secondaryColor };
    const items3 = [, , ];
    ({ profileContentWrapper: arr4[0], profileContent: arr4[1] } = tmp);
    const obj5 = { paddingTop: closure_7, paddingBottom: 0 };
    items3[2] = obj5;
    obj4.containerStyle = items3;
    const obj6 = { style: tmp.primaryInfo };
    const obj7 = { user, displayProfile, badgeContainerBackground: containerBackground, isPreviewingChanges: false };
    const items4 = [callback(user(12009).PrimaryInfo, obj7), ];
    const obj8 = { user };
    items4[1] = callback(joinRequest(12172), obj8);
    obj6.children = items4;
    obj4.children = callback2(View, obj6);
    items2[1] = callback(joinRequest(11936), obj4);
    obj1.children = items2;
    items1[1] = callback2(View, obj1);
    obj.children = items1;
    tmp6 = callback2(closure_10, obj);
    const tmp15 = joinRequest(11936);
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
  if (applicationStatus === require(3950) /* isTermsFormField */.GuildJoinRequestApplicationStatuses.SUBMITTED) {
    if (null != joinRequest.interviewChannelId) {
      let obj = { style: tmp.statusContainer };
      obj = { style: tmp.statusRow };
      const obj1 = { size: "lg", color: importDefault(689).colors.STATUS_WARNING };
      const items = [callback(require(11953) /* HourglassIcon */.HourglassIcon, obj1), ];
      const obj2 = {};
      const obj3 = { variant: "text-md/medium", color: "mobile-text-heading-primary" };
      const intl6 = require(1212) /* getSystemLocale */.intl;
      obj3.children = intl6.string(require(1212) /* getSystemLocale */.t["Vr+7eO"]);
      obj2.children = callback(require(4126) /* Text */.Text, obj3);
      items[1] = callback(View, obj2);
      obj.children = items;
      const items1 = [callback2(View, obj), ];
      const obj4 = { joinRequest };
      const intl7 = require(1212) /* getSystemLocale */.intl;
      obj4.label = intl7.string(require(1212) /* getSystemLocale */.t.rcqdhN);
      items1[1] = callback(OpenInterviewButton, obj4);
      obj.children = items1;
      return callback2(View, obj);
    }
  }
  if (require(3950) /* isTermsFormField */.GuildJoinRequestApplicationStatuses.REJECTED === applicationStatus) {
    const obj5 = { style: tmp.statusContainer };
    const obj6 = { style: tmp.statusRow };
    const obj7 = { size: "lg", color: importDefault(689).colors.ICON_FEEDBACK_CRITICAL, secondaryColor: importDefault(689).colors.WHITE };
    const items2 = [callback(require(5776) /* CircleXIcon */.CircleXIcon, obj7), ];
    const obj8 = {};
    const obj9 = { variant: "text-md/medium", color: "mobile-text-heading-primary" };
    const intl3 = require(1212) /* getSystemLocale */.intl;
    obj9.children = intl3.string(require(1212) /* getSystemLocale */.t.bSZkla);
    const items3 = [callback(require(4126) /* Text */.Text, obj9), , ];
    let tmp40Result = null;
    if (null != actionedByUser) {
      tmp40Result = null;
      if (null != actionedAt) {
        let obj10 = { style: tmp.actionedInfo };
        let obj11 = { variant: "text-sm/normal", color: "text-default" };
        const intl4 = require(1212) /* getSystemLocale */.intl;
        const obj12 = {};
        let username2 = actionedByUser.global_name;
        if (null == username2) {
          username2 = actionedByUser.username;
        }
        obj12.username = username2;
        obj11.children = intl4.formatToPlainString(require(1212) /* getSystemLocale */.t.qnimbL, obj12);
        const items4 = [callback(require(4126) /* Text */.Text, obj11), , ];
        const obj13 = { style: tmp.dot };
        items4[1] = callback(View, obj13);
        const obj14 = { variant: "text-sm/normal", color: "text-default" };
        let obj23 = require(3800) /* resetCache */;
        const _Date2 = Date;
        let obj24 = importDefault(21);
        const date = new Date(obj24.extractTimestamp(actionedAt));
        obj14.children = obj23.dateFormat(date, "LL");
        items4[2] = callback(require(4126) /* Text */.Text, obj14);
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
      const obj15 = { variant: "text-sm/normal", color: "text-default" };
      const intl5 = require(1212) /* getSystemLocale */.intl;
      const obj16 = { rejectionReason };
      obj15.children = intl5.formatToPlainString(require(1212) /* getSystemLocale */.t.fU5PPM, obj16);
      tmp56 = callback(require(4126) /* Text */.Text, obj15);
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
  } else if (require(3950) /* isTermsFormField */.GuildJoinRequestApplicationStatuses.APPROVED === applicationStatus) {
    obj = { style: tmp.statusContainer };
    const obj18 = { style: tmp.statusRow };
    const obj19 = { size: "lg", color: importDefault(689).colors.STATUS_POSITIVE_BACKGROUND, secondaryColor: importDefault(689).colors.STATUS_POSITIVE_TEXT };
    const items6 = [callback(require(4091) /* CircleCheckIcon */.CircleCheckIcon, obj19), ];
    const obj20 = {};
    const obj21 = { variant: "text-md/medium", color: "mobile-text-heading-primary" };
    const intl = require(1212) /* getSystemLocale */.intl;
    obj21.children = intl.string(require(1212) /* getSystemLocale */.t.aURgY2);
    const items7 = [callback(require(4126) /* Text */.Text, obj21), ];
    let tmp13Result = null;
    if (null != actionedByUser) {
      tmp13Result = null;
      if (null != actionedAt) {
        const obj22 = { style: tmp.actionedInfo };
        obj23 = { variant: "text-sm/normal", color: "text-default" };
        const intl2 = require(1212) /* getSystemLocale */.intl;
        obj24 = {};
        let username = actionedByUser.global_name;
        if (null == username) {
          username = actionedByUser.username;
        }
        obj24.username = username;
        obj23.children = intl2.formatToPlainString(require(1212) /* getSystemLocale */.t.qnimbL, obj24);
        const items8 = [callback(require(4126) /* Text */.Text, obj23), , ];
        const obj25 = { style: tmp.dot };
        items8[1] = callback(View, obj25);
        const obj26 = { variant: "text-sm/normal", color: "text-default" };
        obj10 = require(3800) /* resetCache */;
        const _Date = Date;
        obj11 = importDefault(21);
        const date1 = new Date(obj11.extractTimestamp(actionedAt));
        obj26.children = obj10.dateFormat(date1, "LL");
        items8[2] = callback(require(4126) /* Text */.Text, obj26);
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
  const items = [joinRequest];
  const callback = importAllResult.useCallback(() => {
    outer1_1(outer1_2[13])(joinRequest);
  }, items);
  let obj = joinRequest(11693);
  const joinRequestButtonActions = obj.useJoinRequestButtonActions(joinRequest, joinRequest.interviewChannelId, callback);
  const submitting = joinRequestButtonActions.submitting;
  ({ approveRequest, rejectRequest, handleOpenInterview } = joinRequestButtonActions);
  obj = { direction: "horizontal", align: "flex-start", justify: "space-evenly" };
  obj = { variant: "primary" };
  const obj1 = { color: importDefault(689).colors.WHITE, size: "lg" };
  obj.icon = callback(joinRequest(4082).CheckmarkLargeIcon, obj1);
  const intl = joinRequest(1212).intl;
  obj.label = intl.string(joinRequest(1212).t.BzjDQJ);
  obj.onPress = approveRequest;
  obj.disabled = submitting;
  const items1 = [callback(joinRequest(7533).IconButton, obj), , ];
  const obj2 = { variant: "destructive" };
  const obj3 = { color: importDefault(689).colors.WHITE, size: "lg" };
  obj2.icon = callback(joinRequest(4084).XLargeIcon, obj3);
  const intl2 = joinRequest(1212).intl;
  obj2.label = intl2.string(joinRequest(1212).t.hDtbsz);
  obj2.onPress = rejectRequest;
  obj2.disabled = submitting;
  items1[1] = callback(joinRequest(7533).IconButton, obj2);
  let tmp4 = null == joinRequest.interviewChannelId;
  if (tmp4) {
    const obj4 = { variant: "secondary" };
    const obj5 = { color: importDefault(689).colors.CONTROL_SECONDARY_TEXT_DEFAULT, size: "lg" };
    obj4.icon = callback(joinRequest(4629).ChatIcon, obj5);
    const intl3 = joinRequest(1212).intl;
    obj4.label = intl3.string(joinRequest(1212).t.KQeYoC);
    obj4.onPress = handleOpenInterview;
    obj4.disabled = submitting;
    tmp4 = callback(joinRequest(7533).IconButton, obj4);
  }
  items1[2] = tmp4;
  obj.children = items1;
  return closure_9(joinRequest(4965).ButtonGroup, obj);
});
let closure_15 = importAllResult.memo((arg0) => {
  let field;
  let isLastField;
  ({ field, isLastField } = arg0);
  const tmp = callback3();
  const field_type = field.field_type;
  if (require(3950) /* isTermsFormField */.VerificationFormFieldTypes.TERMS === field_type) {
    let obj = {};
    const items = [, , ];
    ({ termsField: arr3[0], formResponse: arr3[1] } = tmp);
    let formResponseMargin = null;
    if (!isLastField) {
      formResponseMargin = tmp.formResponseMargin;
    }
    items[2] = formResponseMargin;
    obj.style = items;
    obj = { variant: "text-md/medium", color: "text-default", children: field.label };
    const items1 = [callback(require(4126) /* Text */.Text, obj), ];
    const obj1 = { size: "sm", color: importDefault(689).colors.STATUS_POSITIVE_BACKGROUND, secondaryColor: importDefault(689).colors.STATUS_POSITIVE_TEXT };
    items1[1] = callback(require(4091) /* CircleCheckIcon */.CircleCheckIcon, obj1);
    obj.children = items1;
    return closure_9(View, obj);
  } else if (require(3950) /* isTermsFormField */.VerificationFormFieldTypes.MULTIPLE_CHOICE === field_type) {
    const obj2 = {};
    const obj3 = { style: tmp.formQuestion, variant: "text-sm/semibold", color: "text-subtle", children: field.label };
    const items2 = [callback(require(4126) /* Text */.Text, obj3), ];
    const obj4 = {};
    const items3 = [tmp.formResponse, ];
    let formResponseMargin1 = null;
    if (!isLastField) {
      formResponseMargin1 = tmp.formResponseMargin;
    }
    items3[1] = formResponseMargin1;
    obj4.style = items3;
    const obj5 = { variant: "text-md/medium", color: "text-default" };
    let tmp17 = null;
    if (null != field.response) {
      tmp17 = field.choices[field.response];
    }
    obj5.children = tmp17;
    obj4.children = callback(require(4126) /* Text */.Text, obj5);
    items2[1] = callback(View, obj4);
    obj2.children = items2;
    return closure_9(View, obj2);
  } else {
    const obj6 = {};
    const obj7 = { style: tmp.formQuestion, variant: "text-sm/semibold", color: "text-subtle", children: field.label };
    const items4 = [callback(require(4126) /* Text */.Text, obj7), ];
    const obj8 = {};
    const items5 = [tmp.formResponse, ];
    let formResponseMargin2 = null;
    if (!isLastField) {
      formResponseMargin2 = tmp.formResponseMargin;
    }
    items5[1] = formResponseMargin2;
    obj8.style = items5;
    obj = { variant: "text-md/medium", color: "text-default", children: field.response };
    obj8.children = callback(require(4126) /* Text */.Text, obj);
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
  obj = { variant: "text-sm/semibold", color: "text-subtle", style: tmp.accountInfoLabel };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.children = intl.string(require(1212) /* getSystemLocale */.t["ldCE/p"]);
  const items = [callback(require(4126) /* Text */.Text, obj), ];
  obj = { style: tmp.accountInfoContainer };
  const obj1 = { style: tmp.accountInfoRow };
  const obj2 = { variant: "text-sm/semibold", color: "text-strong" };
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj2.children = intl2.string(require(1212) /* getSystemLocale */.t.SaDIpL);
  const items1 = [callback(require(4126) /* Text */.Text, obj2), ];
  const obj3 = { variant: "text-sm/normal", color: "text-subtle" };
  let obj6 = require(3800) /* resetCache */;
  let obj7 = importDefault(21);
  obj3.children = obj6.dateFormat(new Date(obj7.extractTimestamp(user.id)), "LL");
  items1[1] = callback(require(4126) /* Text */.Text, obj3);
  obj1.children = items1;
  const items2 = [callback2(View, obj1), callback(View, { style: tmp.divider }), ];
  const obj5 = { style: tmp.accountInfoRow };
  obj6 = { variant: "text-sm/semibold", color: "text-strong" };
  const intl3 = require(1212) /* getSystemLocale */.intl;
  obj6.children = intl3.string(require(1212) /* getSystemLocale */.t["Vt4cn+"]);
  const items3 = [callback(require(4126) /* Text */.Text, obj6), ];
  obj7 = { variant: "text-sm/normal", color: "text-subtle" };
  const date = new Date(obj7.extractTimestamp(user.id));
  const obj4 = { style: tmp.divider };
  const obj13 = require(3800) /* resetCache */;
  obj7.children = obj13.dateFormat(new Date(joinRequest.createdAt), "LL");
  items3[1] = callback(require(4126) /* Text */.Text, obj7);
  obj5.children = items3;
  items2[2] = callback2(View, obj5);
  obj.children = items2;
  items[1] = callback2(View, obj);
  obj.children = items;
  return callback2(closure_10, obj);
});
const memoResult = importAllResult.memo(function JoinRequestActionSheetContent(displayProfile) {
  let joinRequest;
  let user;
  ({ user, joinRequest } = displayProfile);
  let memo;
  let formResponses;
  if (null != joinRequest) {
    formResponses = joinRequest.formResponses;
  }
  const items = [formResponses];
  memo = importAllResult.useMemo(() => {
    let formResponses;
    if (null != joinRequest) {
      formResponses = joinRequest.formResponses;
    }
    if (null == formResponses) {
      formResponses = [];
    }
    return formResponses;
  }, items);
  let obj = { style: { paddingBottom: memo(1557)().bottom } };
  const items1 = [callback(closure_12, { joinRequest, user, displayProfile: displayProfile.displayProfile }), , , , ];
  if (joinRequest.applicationStatus === joinRequest(3950).GuildJoinRequestApplicationStatuses.SUBMITTED) {
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
    mapped = memo.map((field) => outer1_8(outer1_15, { field, isLastField: arg1 === memo.length - 1 }, "response-" + arg1 + "-" + field.field_type + "-" + field.label + "-" + arg1 === memo.length - 1));
  }
  obj3.children = mapped;
  items1[2] = callback(View, obj3);
  items1[3] = callback(closure_16, { joinRequest, user });
  items1[4] = callback(memo(15355), { guildId: joinRequest.guildId, userId: joinRequest.userId, selectedJoinRequestId: joinRequest.joinRequestId });
  obj.children = items1;
  return closure_9(View, obj);
});
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/guild_member_verification/native/components/JoinRequestActionSheetContent.tsx");

export default memoResult;
