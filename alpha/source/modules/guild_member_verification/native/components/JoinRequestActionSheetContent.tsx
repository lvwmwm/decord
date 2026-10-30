// Module ID: 18607
// Function ID: 18608
// Name: JoinRequestActionSheetContent
// Dependencies: [19, 17, 4858, 5268, 7371, 21, 5009, 575, 8806, 8795, 8792, 8803, 8742, 18605, 8811, 8820, 11358, 14874, 14971, 504, 14157, 5042, 5629, 8635, 1114, 5043, 12181, 5619, 7086, 4831, 11, 7334, 6761, 8020, 6987, 10748, 1626, 18608, 2]

// Module 18607 (JoinRequestActionSheetContent)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import intl8 from "intl" /* 1114 */;
import DateUtils from "DateUtils" /* 4831 */;
import MemberVerificationTypes from "MemberVerificationTypes" /* 5043 */;
import ActionSheetConstants from "ActionSheetConstants" /* 5268 */;
import Text_Text from "Text/Text" /* 5619 */;
import Constants from "Constants" /* 7371 */;
import showUserProfileActionSheetDefault from "showUserProfileActionSheet" /* 8742 */;
import openJoinRequestActionSheetDefault from "openJoinRequestActionSheet" /* 18605 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 4858 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5009 */;
import size_mod from "module_2" /* 2 */;

let c10;
let c9;
let metroImportAll;
let obj2;
let obj3;
let obj4;
let obj5;
let size;
let size1;
function OpenInterviewButton(arg0) {
  let ChatIcon;
  let handleOpenInterview;
  let joinRequest;
  let label;
  let obj5;
  let submitting;
  let tmp6Result;
  ({ joinRequest, label } = arg0);
  const interviewChannelId = joinRequest.interviewChannelId;
  const tmp = interviewChannelId;
  let tmp2 = dependencyMap;
  const applicationStatus = joinRequest.applicationStatus;
  const items = [ChannelStore];
  const items1 = [interviewChannelId];
  const obj = interviewChannelId(504);
  const stateFromStores = obj.useStateFromStores(items, () => {
    const tmp2 = null != interviewChannelId && null != ChannelStore.getChannel(tmp);
    return tmp2;
  }, items1);
  const obj2 = interviewChannelId(14157);
  const joinRequestButtonActions = obj2.useJoinRequestButtonActions(joinRequest, interviewChannelId);
  ({ handleOpenInterview, submitting } = joinRequestButtonActions);
  const obj3 = interviewChannelId(5042);
  if (!obj3.isActionedApplicationStatus(applicationStatus)) {
    const obj4 = { variant: "secondary", size: "md", icon: closure_8(ChatIcon, obj5), text: label, onPress: handleOpenInterview, disabled: submitting };
    const Button = tmp(5629).Button;
    obj5 = { color: nativeDefault.colors.CONTROL_SECONDARY_TEXT_DEFAULT, size: "sm" };
    ChatIcon = tmp(8635).ChatIcon;
    const tmp6 = closure_8;
    if (label == null) {
      const intl = tmp(1114).intl;
      label = intl.string(tmp(1114).t["2simqN"]);
    }
    tmp6Result = tmp6(Button, obj4);
  } else {
    tmp6Result = null;
  }
  return tmp6Result;
}
const View = react_native.View;
const ACTION_SHEET_MAX_WIDTH = ActionSheetConstants.ACTION_SHEET_MAX_WIDTH;
const paddingTop = Constants.PROFILE_CONTENT_WITHOUT_STATUS_TOP_PADDING;
({ jsx: metroImportAll, jsxs: c9, Fragment: c10 } = Fragment);
let createStyles = createStyles_mod;
let obj = { responsesContainer: obj2, formQuestion: { marginBottom: 8 }, formResponse: obj3, formResponseMargin: { marginBottom: 16 }, termsField: { flexDirection: "row", alignItems: "center", justifyContent: "space-between" }, statusContainer: obj4, statusRow: { flexDirection: "row", alignItems: "center", gap: 12 }, actionedInfo: { flexDirection: "row", gap: 8, alignItems: "center" }, dot: size, accountInfoLabel: { marginTop: 16, marginHorizontal: 16, marginBottom: 8 }, accountInfoContainer: obj5, accountInfoRow: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", padding: 16 }, divider: size1 };
obj2 = { paddingHorizontal: 16, paddingTop: 24, borderTopColor: nativeDefault.colors.BORDER_SUBTLE, borderTopWidth: 1 };
createStyles = createStyles.createStyles;
obj3 = { padding: 12, width: "100%", borderRadius: nativeDefault.radii.md, lineHeight: 20, backgroundColor: nativeDefault.colors.INPUT_BACKGROUND_DEFAULT };
obj4 = { flexDirection: "column", gap: 12, paddingHorizontal: 16, paddingVertical: 12, marginTop: 8, marginBottom: 16, marginHorizontal: 16, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.md };
size = { height: 4, width: 4, borderRadius: nativeDefault.radii.xs, backgroundColor: nativeDefault.colors.TEXT_DEFAULT };
obj5 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, marginHorizontal: 16, marginBottom: 16, borderRadius: nativeDefault.radii.md };
size1 = { width: "100%", height: 1, backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
let closure_11 = createStyles(obj);
let closure_12 = react.memo(function JoinRequestActionSheetHeader(user) {
  let avatarBackground;
  let containerBackground;
  let displayProfile;
  let gradientFallbackBackground;
  let items1;
  let items2;
  let items3;
  let items4;
  let joinRequest;
  let obj6;
  let obj9;
  let primaryColor;
  let secondaryColor;
  let statusBackground;
  let theme;
  user = user.user;
  ({ displayProfile, joinRequest } = user);
  const tmp = joinRequest;
  const tmp3 = joinRequest(8806)();
  const tmp4 = joinRequest(8795)(ACTION_SHEET_MAX_WIDTH);
  ({ primaryColor, secondaryColor, theme } = joinRequest(8792)({ user, displayProfile }));
  joinRequest(8792)({ user, displayProfile });
  let obj = user(8803);
  const userProfileColors = obj.useUserProfileColors({ theme, primaryColor, secondaryColor });
  const items = [joinRequest, user.id];
  ({ gradientFallbackBackground, containerBackground, avatarBackground, statusBackground } = userProfileColors);
  let tmp9 = null;
  const tmp6 = user;
  if (null != user) {
    const obj2 = { children: items1 };
    const obj3 = { user, displayProfile, bannerHeight: tmp4 };
    items1 = [closure_8(tmp(8811), obj3), ];
    const obj5 = { user, disableStatus: true, backgroundColor: avatarBackground, statusStyle: obj6, onPress: tmp8 };
    const obj4 = { children: items2 };
    obj6 = { backgroundColor: statusBackground };
    items2 = [closure_8(tmp(8820), obj5), ];
    const obj7 = { fallbackBackground: gradientFallbackBackground, primaryColor, secondaryColor, containerStyle: items3, children: closure_9(View, obj9) };
    items3 = [, , ];
    ({ profileContentWrapper: arr4[0], profileContent: arr4[1] } = tmp3);
    const obj8 = { paddingTop, paddingBottom: 0 };
    items3[2] = obj8;
    obj9 = { style: tmp3.primaryInfo, children: items4 };
    items4 = [, ];
    const obj10 = { user, displayProfile, badgeContainerBackground: containerBackground, isPreviewingChanges: false };
    const tmpResult = tmp(11358);
    items4[0] = closure_8(tmp6(14874).PrimaryInfo, obj10);
    const obj11 = { user };
    items4[1] = closure_8(tmp(14971), obj11);
    items2[1] = closure_8(tmpResult, obj7);
    items1[1] = closure_9(View, obj4);
    tmp9 = closure_9(closure_10, obj2);
  }
  return tmp9;
});
let closure_14 = react.memo(function JoinRequestActionSheetApplicationActions(joinRequest) {
  let Text8;
  let actionedAt;
  let actionedByUser;
  let applicationStatus;
  let date;
  let date1;
  let dateFormat;
  let dateFormat2;
  let intl;
  let intl3;
  let intl5;
  let intl6;
  let intl7;
  let items;
  let items1;
  let items2;
  let items4;
  let items5;
  let items6;
  let items8;
  let items9;
  let obj14;
  let obj18;
  let obj26;
  let obj6;
  let rejectionReason;
  joinRequest = joinRequest.joinRequest;
  ({ actionedAt, actionedByUser, rejectionReason, applicationStatus } = joinRequest);
  const interviewChannelId = joinRequest.interviewChannelId;
  const tmp = closure_11();
  if (applicationStatus === MemberVerificationTypes.GuildJoinRequestApplicationStatuses.SUBMITTED) {
    if (null != interviewChannelId) {
      const obj2 = { style: tmp.statusContainer, children: items1 };
      const obj3 = { style: tmp.statusRow, children: items };
      const obj4 = { size: "lg", color: nativeDefault.colors.STATUS_WARNING };
      const HourglassIcon = tmp2(12181).HourglassIcon;
      items = [metroImportAll(HourglassIcon, obj4), ];
      const obj5 = { children: metroImportAll(Text8, obj6) };
      obj6 = { variant: "text-md/medium", color: "mobile-text-heading-primary", children: intl6.string(intl8.t["Vr+7eO"]) };
      Text8 = tmp2(5619).Text;
      intl6 = tmp2(1114).intl;
      items[1] = metroImportAll(View, obj5);
      items1 = [React4(View, obj3), ];
      const obj7 = { joinRequest, label: intl7.string(intl8.t.rcqdhN) };
      intl7 = tmp2(1114).intl;
      items1[1] = metroImportAll(OpenInterviewButton, obj7);
      return React4(View, obj2);
    }
  }
  if (MemberVerificationTypes.GuildJoinRequestApplicationStatuses.REJECTED === applicationStatus) {
    const obj8 = { style: tmp.statusContainer, children: items5 };
    const obj9 = { style: tmp.statusRow, children: items2 };
    const obj10 = { size: "lg", color: nativeDefault.colors.ICON_FEEDBACK_CRITICAL, secondaryColor: nativeDefault.colors.WHITE };
    const CircleXIcon = tmp2(7086).CircleXIcon;
    items2 = [metroImportAll(CircleXIcon, obj10), ];
    const obj11 = { variant: "text-md/medium", color: "mobile-text-heading-primary", children: intl3.string(intl8.t.bSZkla) };
    const Text4 = tmp2(5619).Text;
    intl3 = tmp2(1114).intl;
    const items3 = [metroImportAll(Text4, obj11), , ];
    let tmp17Result = null;
    const tmp20 = importDefault;
    if (null != actionedByUser) {
      tmp17Result = null;
      if (null != actionedAt) {
        const obj12 = { style: tmp.actionedInfo, children: items4 };
        const Text5 = tmp2(5619).Text;
        const intl4 = tmp2(1114).intl;
        const formatToPlainString2 = intl4.formatToPlainString;
        let username2 = actionedByUser.global_name;
        const qnimbL2 = tmp2(1114).t.qnimbL;
        if (username2 == null) {
          username2 = actionedByUser.username;
        }
        const obj13 = { variant: "text-sm/normal", color: "text-default", children: formatToPlainString2(qnimbL2, obj14) };
        obj14 = { username: username2 };
        items4 = [metroImportAll(Text5, obj13), , ];
        const obj15 = { style: tmp.dot };
        items4[1] = metroImportAll(View, obj15);
        const obj16 = { variant: "text-sm/normal", color: "text-default", children: dateFormat2(date, "LL") };
        const Text6 = tmp2(5619).Text;
        const _Date2 = Date;
        dateFormat2 = DateUtils.dateFormat;
        DateUtils;
        const self3 = this;
        const self4 = this;
        const tmp20Result = tmp20(11);
        date = new Date(tmp20Result.extractTimestamp(actionedAt));
        items4[2] = metroImportAll(Text6, obj16);
        tmp17Result = tmp17(tmp18, obj12);
      }
    }
    items3[1] = tmp17Result;
    let tmp19Result = null != rejectionReason;
    if (tmp19Result) {
      const obj17 = { variant: "text-sm/normal", color: "text-default", children: intl5.formatToPlainString(intl8.t.fU5PPM, obj18) };
      const Text7 = tmp2(5619).Text;
      intl5 = tmp2(1114).intl;
      obj18 = { rejectionReason };
      tmp19Result = tmp19(Text7, obj17);
    }
    const obj19 = { children: items3 };
    items3[2] = tmp19Result;
    items2[1] = React4(View, obj19);
    items5 = [React4(View, obj9), ];
    const obj20 = { joinRequest };
    items5[1] = metroImportAll(OpenInterviewButton, obj20);
    return React4(View, obj8);
  } else if (MemberVerificationTypes.GuildJoinRequestApplicationStatuses.APPROVED === applicationStatus) {
    const obj = { style: tmp.statusContainer, children: items9 };
    const obj21 = { style: tmp.statusRow, children: items6 };
    const obj22 = { size: "lg", color: nativeDefault.colors.STATUS_POSITIVE_BACKGROUND, secondaryColor: nativeDefault.colors.STATUS_POSITIVE_TEXT };
    const CircleCheckIcon = tmp2(7334).CircleCheckIcon;
    items6 = [metroImportAll(CircleCheckIcon, obj22), ];
    const obj23 = { variant: "text-md/medium", color: "mobile-text-heading-primary", children: intl.string(intl8.t.aURgY2) };
    const Text = tmp2(5619).Text;
    intl = tmp2(1114).intl;
    const items7 = [metroImportAll(Text, obj23), ];
    let tmp6Result = null;
    const tmp9 = importDefault;
    if (null != actionedByUser) {
      tmp6Result = null;
      if (null != actionedAt) {
        const obj24 = { style: tmp.actionedInfo, children: items8 };
        const Text2 = tmp2(5619).Text;
        const intl2 = tmp2(1114).intl;
        const formatToPlainString = intl2.formatToPlainString;
        let username = actionedByUser.global_name;
        const qnimbL = tmp2(1114).t.qnimbL;
        if (username == null) {
          username = actionedByUser.username;
        }
        const obj25 = { variant: "text-sm/normal", color: "text-default", children: formatToPlainString(qnimbL, obj26) };
        obj26 = { username };
        items8 = [metroImportAll(Text2, obj25), , ];
        const obj27 = { style: tmp.dot };
        items8[1] = metroImportAll(View, obj27);
        const obj28 = { variant: "text-sm/normal", color: "text-default", children: dateFormat(date1, "LL") };
        const Text3 = tmp2(5619).Text;
        const _Date = Date;
        dateFormat = DateUtils.dateFormat;
        DateUtils;
        const self = this;
        const self2 = this;
        const tmp9Result = tmp9(11);
        date1 = new Date(tmp9Result.extractTimestamp(actionedAt));
        items8[2] = metroImportAll(Text3, obj28);
        tmp6Result = tmp6(tmp7, obj24);
      }
    }
    const obj29 = { children: items7 };
    items7[1] = tmp6Result;
    items6[1] = React4(View, obj29);
    items9 = [React4(View, obj21), ];
    const obj30 = { joinRequest };
    items9[1] = metroImportAll(OpenInterviewButton, obj30);
    return React4(View, obj);
  } else {
    return null;
  }
});
let closure_15 = react.memo(function JoinRequestActionSheetApplicationActions(joinRequest) {
  let ChatIcon;
  let CheckmarkLargeIcon;
  let XLargeIcon;
  let approveRequest;
  let handleOpenInterview;
  let intl;
  let intl2;
  let intl3;
  let obj3;
  let obj5;
  let obj7;
  let rejectRequest;
  let submitting;
  joinRequest = joinRequest.joinRequest;
  const items = [joinRequest];
  const callback = react.useCallback(() => {
    openJoinRequestActionSheetDefault(joinRequest);
  }, items);
  const obj = joinRequest(14157);
  const joinRequestButtonActions = obj.useJoinRequestButtonActions(joinRequest, joinRequest.interviewChannelId, callback);
  ({ submitting, approveRequest, rejectRequest, handleOpenInterview } = joinRequestButtonActions);
  const ButtonGroup = joinRequest(6761).ButtonGroup;
  const obj2 = { variant: "primary", icon: closure_8(CheckmarkLargeIcon, obj3), label: intl.string(joinRequest(1114).t.BzjDQJ), onPress: approveRequest, disabled: submitting };
  const IconButton = joinRequest(8020).IconButton;
  obj3 = { color: nativeDefault.colors.WHITE, size: "lg" };
  CheckmarkLargeIcon = joinRequest(6987).CheckmarkLargeIcon;
  intl = joinRequest(1114).intl;
  const children = [closure_8(IconButton, obj2), , ];
  const obj4 = { variant: "destructive", icon: closure_8(XLargeIcon, obj5), label: intl2.string(joinRequest(1114).t.hDtbsz), onPress: rejectRequest, disabled: submitting };
  const IconButton2 = joinRequest(8020).IconButton;
  obj5 = { color: nativeDefault.colors.WHITE, size: "lg" };
  XLargeIcon = joinRequest(10748).XLargeIcon;
  intl2 = joinRequest(1114).intl;
  children[1] = closure_8(IconButton2, obj4);
  let tmp6Result = null == joinRequest.interviewChannelId;
  const tmp5 = closure_9;
  if (tmp6Result) {
    const obj6 = { variant: "secondary", icon: closure_8(ChatIcon, obj7), label: intl3.string(joinRequest(1114).t.KQeYoC), onPress: handleOpenInterview, disabled: submitting };
    const IconButton3 = tmp2(8020).IconButton;
    obj7 = { color: nativeDefault.colors.CONTROL_SECONDARY_TEXT_DEFAULT, size: "lg" };
    ChatIcon = tmp2(8635).ChatIcon;
    intl3 = tmp2(1114).intl;
    tmp6Result = tmp6(IconButton3, obj6);
  }
  children[2] = tmp6Result;
  return tmp5(ButtonGroup, { direction: "horizontal", align: "flex-start", justify: "space-evenly", children });
});
let closure_16 = react.memo(function VerificationFormResponse(arg0) {
  let Text;
  let field;
  let isLastField;
  let items1;
  let obj11;
  let obj8;
  ({ field, isLastField } = arg0);
  const tmp = closure_11();
  const field_type = field.field_type;
  if (MemberVerificationTypes.VerificationFormFieldTypes.TERMS === field_type) {
    const items = [, , ];
    ({ termsField: arr3[0], formResponse: arr3[1] } = tmp);
    let formResponseMargin = null;
    const tmp11 = React4;
    const tmp12 = View;
    if (!isLastField) {
      formResponseMargin = tmp.formResponseMargin;
    }
    const obj2 = { style: items, children: items1 };
    items[2] = formResponseMargin;
    const obj3 = { variant: "text-md/medium", color: "text-default", children: field.label };
    items1 = [metroImportAll(Text_Text.Text, obj3), ];
    const obj4 = { size: "sm", color: nativeDefault.colors.STATUS_POSITIVE_BACKGROUND, secondaryColor: nativeDefault.colors.STATUS_POSITIVE_TEXT };
    const CircleCheckIcon = tmp2(7334).CircleCheckIcon;
    items1[1] = metroImportAll(CircleCheckIcon, obj4);
    return tmp11(tmp12, obj2);
  } else if (MemberVerificationTypes.VerificationFormFieldTypes.MULTIPLE_CHOICE === field_type) {
    const obj5 = { style: tmp.formQuestion, variant: "text-sm/semibold", color: "text-subtle", children: field.label };
    const items2 = [metroImportAll(Text_Text.Text, obj5), ];
    const items3 = [tmp.formResponse, ];
    let formResponseMargin1 = null;
    const tmp5 = React4;
    if (!isLastField) {
      formResponseMargin1 = tmp.formResponseMargin;
    }
    items3[1] = formResponseMargin1;
    let tmp10 = null;
    const obj6 = { style: items3, children: metroImportAll(Text, obj8) };
    Text = tmp2(5619).Text;
    if (null != field.response) {
      tmp10 = field.choices[field.response];
    }
    const obj7 = { children: items2 };
    obj8 = { variant: "text-md/medium", color: "text-default", children: tmp10 };
    items2[1] = metroImportAll(View, obj6);
    return tmp5(View, obj7);
  } else {
    const obj9 = { style: tmp.formQuestion, variant: "text-sm/semibold", color: "text-subtle", children: field.label };
    const items4 = [metroImportAll(Text_Text.Text, obj9), ];
    const items5 = [tmp.formResponse, ];
    let formResponseMargin2 = null;
    const tmp16 = React4;
    if (!isLastField) {
      formResponseMargin2 = tmp.formResponseMargin;
    }
    const obj = { children: items4 };
    items5[1] = formResponseMargin2;
    const obj10 = { style: items5, children: metroImportAll(Text_Text.Text, obj11) };
    obj11 = { variant: "text-md/medium", color: "text-default", children: field.response };
    items4[1] = metroImportAll(View, obj10);
    return tmp16(View, obj);
  }
});
let closure_17 = react.memo(function JoinRequestAboutView(arg0) {
  let date;
  let date1;
  let dateFormat;
  let dateFormat2;
  let intl;
  let intl2;
  let intl3;
  let items;
  let items1;
  let items2;
  let items3;
  let joinRequest;
  let user;
  ({ joinRequest, user } = arg0);
  const tmp = closure_11();
  const obj = { children: items };
  const obj2 = { variant: "text-sm/semibold", color: "text-subtle", style: tmp.accountInfoLabel, children: intl.string(intl8.t["ldCE/p"]) };
  const Text = Text_Text.Text;
  intl = intl8.intl;
  items = [metroImportAll(Text, obj2), ];
  const obj3 = { style: tmp.accountInfoContainer, children: items2 };
  const obj4 = { style: tmp.accountInfoRow, children: items1 };
  const obj5 = { variant: "text-sm/semibold", color: "text-strong", children: intl2.string(intl8.t.SaDIpL) };
  const Text2 = Text_Text.Text;
  intl2 = intl8.intl;
  items1 = [metroImportAll(Text2, obj5), ];
  const obj6 = { variant: "text-sm/normal", color: "text-subtle", children: dateFormat(date, "LL") };
  const Text3 = Text_Text.Text;
  dateFormat = DateUtils.dateFormat;
  DateUtils;
  const obj7 = SnowflakeUtilsDefault;
  date = new Date(obj7.extractTimestamp(user.id));
  items1[1] = metroImportAll(Text3, obj6);
  items2 = [React4(View, obj4), , ];
  const obj8 = { style: tmp.divider };
  items2[1] = metroImportAll(View, obj8);
  const obj9 = { style: tmp.accountInfoRow, children: items3 };
  const obj10 = { variant: "text-sm/semibold", color: "text-strong", children: intl3.string(intl8.t["Vt4cn+"]) };
  const Text4 = Text_Text.Text;
  intl3 = intl8.intl;
  items3 = [metroImportAll(Text4, obj10), ];
  const obj11 = { variant: "text-sm/normal", color: "text-subtle", children: dateFormat2(date1, "LL") };
  const Text5 = Text_Text.Text;
  dateFormat2 = DateUtils.dateFormat;
  DateUtils;
  date1 = new Date(joinRequest.createdAt);
  items3[1] = metroImportAll(Text5, obj11);
  items2[2] = React4(View, obj9);
  items[1] = React4(View, obj3);
  return React4(authStore, obj);
});
const memoResult = react.memo(function JoinRequestActionSheetContent(displayProfile) {
  let items1;
  let items2;
  let joinRequest;
  let mapped;
  let tmp8Result1;
  let user;
  ({ user, joinRequest } = displayProfile);
  let memo;
  displayProfile = displayProfile.displayProfile;
  let formResponses;
  const tmp = closure_11();
  const bottom = memo(1626)().bottom;
  const useMemo = react.useMemo;
  const tmp2 = memo;
  if (joinRequest != null) {
    formResponses = joinRequest.formResponses;
  }
  const items = [formResponses];
  memo = useMemo(() => {
    let formResponses;
    if (joinRequest != null) {
      formResponses = joinRequest.formResponses;
    }
    if (formResponses == null) {
      formResponses = [];
    }
    return formResponses;
  }, items);
  let obj = { style: { paddingBottom: bottom }, children: items1 };
  items1 = [closure_8(closure_12, { joinRequest, user, displayProfile }), , , , ];
  if (joinRequest.applicationStatus === joinRequest(5043).GuildJoinRequestApplicationStatuses.SUBMITTED) {
    let tmp8Result = null != joinRequest.interviewChannelId;
    const tmp11 = closure_10;
    if (tmp8Result) {
      const obj2 = { joinRequest };
      tmp8Result = tmp8(closure_14, obj2);
    }
    const obj3 = { children: items2 };
    items2 = [tmp8Result, ];
    const obj4 = { joinRequest };
    items2[1] = closure_8(closure_15, obj4);
    tmp8Result1 = tmp6(tmp11, obj3);
  } else {
    const obj5 = { joinRequest };
    tmp8Result1 = tmp8(closure_14, obj5);
  }
  items1[1] = tmp8Result1;
  const obj6 = { style: tmp.responsesContainer, children: mapped };
  mapped = undefined;
  if (memo != null) {
    mapped = memo.map((field, index) => {
      const obj = { field, isLastField: index === memo.length - 1 };
      return metroImportAll(closure_16, obj, "response-" + index + "-" + field.field_type + "-" + field.label + "-" + index === memo.length - 1);
    });
  }
  items1[2] = closure_8(View, obj6);
  items1[3] = closure_8(closure_17, { joinRequest, user });
  const obj7 = { guildId: joinRequest.guildId, userId: joinRequest.userId, selectedJoinRequestId: joinRequest.joinRequestId };
  items1[4] = closure_8(tmp2(18608), obj7);
  return closure_9(View, obj);
});
size = size_mod;
const result = size.fileFinishedImporting("modules/guild_member_verification/native/components/JoinRequestActionSheetContent.tsx");

export default memoResult;
