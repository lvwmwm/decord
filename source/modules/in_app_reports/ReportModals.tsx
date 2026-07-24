// Module ID: 7689
// Function ID: 61141
// Name: _submitHamReportForFirstDM
// Dependencies: [5, 1353, 3768, 1857, 653, 7690, 7691, 7693, 1387, 4324, 2]
// Exports: showReportModalForApp, showReportModalForFirstDM, showReportModalForGuild, showReportModalForGuildDirectoryEntry, showReportModalForGuildScheduledEvent, showReportModalForInappropriateConversationSafetyAlert, showReportModalForMessage, showReportModalForStageChannel, showReportModalForUser, showReportModalForWidget, showReportToModMessageModal, showStaffTestReportModalForGuild, showStaffTestReportModalForMessage, showStaffTestReportModalForUser, showUnauthenticatedReportModalForGuild, showUnauthenticatedReportModalForMessage, showUnauthenticatedReportModalForTida, showUnauthenticatedReportModalForUser, submitHamReportForFirstDM, submitReportForInappropriateConversationSafetyAlert

// Module 7689 (_submitHamReportForFirstDM)
import ReportNames from "ReportNames";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import _callSuper from "_callSuper";
import closure_6 from "_isNativeReflectConstruct";
import { AnalyticEvents } from "ME";

const require = arg1;
async function _submitHamReportForFirstDM(arg0, arg1, arg2) {
  let obj = outer2_0(outer2_2[7]);
  obj = { name: outer2_0(outer2_2[5]).ReportNames.FIRST_DM, record: arg0 };
  yield obj.submitHeadlessReport(obj, { variant: "_first_dm_ham_v1" });
  if (null != arg1) {
    arg1();
  }
}
async function _submitReportForInappropriateConversationSafetyAlert(arg0, arg1, arg2, arg3) {
  let obj = outer2_0(outer2_2[7]);
  obj = { name: outer2_0(outer2_2[5]).ReportNames.MESSAGE, record: arg0 };
  yield obj.submitHeadlessReport(obj, { variant: "safety_alerts_headless_v1" });
  if (null != arg1) {
    arg1();
  }
}
function trackShowReportModalAnalytics(MESSAGE, arg1) {
  let obj = importDefault(4324);
  obj = { report_type: MESSAGE };
  const merged = Object.assign(arg1);
  obj.trackWithMetadata(AnalyticEvents.IAR_MODAL_OPEN, obj);
}
let result = require("_callSuper").fileFinishedImporting("modules/in_app_reports/ReportModals.tsx");

export const showReportModalForGuild = function showReportModalForGuild(guild) {
  let obj = { guild_id: guild.id };
  trackShowReportModalAnalytics(require(7690) /* ReportNames */.ReportNames.GUILD, obj);
  obj = { name: require(7690) /* ReportNames */.ReportNames.GUILD, record: guild };
  obj = { onSubmit: arg1 };
  require(7691) /* _showReportModal */.showReportModal(obj, {}, obj);
};
export const showReportModalForGuildDirectoryEntry = function showReportModalForGuildDirectoryEntry(entry) {
  let obj = { channel_id: entry.channelId, guild_id: entry.guildId };
  trackShowReportModalAnalytics(require(7690) /* ReportNames */.ReportNames.GUILD_DIRECTORY_ENTRY, obj);
  obj = { name: require(7690) /* ReportNames */.ReportNames.GUILD_DIRECTORY_ENTRY, record: entry };
  obj = { onSubmit: arg1 };
  require(7691) /* _showReportModal */.showReportModal(obj, {}, obj);
};
export const showReportModalForMessage = function showReportModalForMessage(message, mobile_media_message_preview_action_sheet) {
  let obj = { message_id: message.id, channel_id: message.channel_id };
  trackShowReportModalAnalytics(require(7690) /* ReportNames */.ReportNames.MESSAGE, obj);
  obj = { name: require(7690) /* ReportNames */.ReportNames.MESSAGE, record: message };
  obj = { onSubmit: arg2 };
  require(7691) /* _showReportModal */.showReportModal(obj, {}, obj);
};
export const showStaffTestReportModalForMessage = function showStaffTestReportModalForMessage(id, arg1, onSubmit) {
  let obj = { message_id: id.id, channel_id: id.channel_id };
  trackShowReportModalAnalytics(require(7690) /* ReportNames */.ReportNames.MESSAGE, obj);
  obj = { name: require(7690) /* ReportNames */.ReportNames.MESSAGE, record: id };
  obj = { onSubmit };
  require(7691) /* _showReportModal */.showReportModal(obj, { variant: "staff" }, obj);
};
export const showStaffTestReportModalForGuild = function showStaffTestReportModalForGuild(guild_id, arg1, onSubmit) {
  let obj = { guild_id: guild_id.id };
  trackShowReportModalAnalytics(require(7690) /* ReportNames */.ReportNames.GUILD, obj);
  obj = { name: require(7690) /* ReportNames */.ReportNames.GUILD, record: guild_id };
  obj = { onSubmit };
  require(7691) /* _showReportModal */.showReportModal(obj, { variant: "staff" }, obj);
};
export const showReportModalForStageChannel = function showReportModalForStageChannel(channel) {
  stageInstanceByChannel = stageInstanceByChannel.getStageInstanceByChannel(channel.id);
  if (null != stageInstanceByChannel) {
    let obj = {};
    ({ id: obj.stage_instance_id, channel_id: obj.channel_id, guild_id: obj.guild_id } = stageInstanceByChannel);
    trackShowReportModalAnalytics(require(7690) /* ReportNames */.ReportNames.STAGE_CHANNEL, obj);
    obj = { name: require(7690) /* ReportNames */.ReportNames.STAGE_CHANNEL, record: stageInstanceByChannel };
    obj = { onSubmit: arg1 };
    require(7691) /* _showReportModal */.showReportModal(obj, {}, obj);
    const obj2 = require(7691) /* _showReportModal */;
  }
};
export const showReportModalForGuildScheduledEvent = function showReportModalForGuildScheduledEvent(closure_0) {
  let obj = { guild_scheduled_event_id: closure_0.id, guild_id: closure_0.guild_id };
  const channel_id = closure_0.channel_id;
  let tmp2;
  if (null != channel_id) {
    tmp2 = channel_id;
  }
  obj.channel_id = tmp2;
  trackShowReportModalAnalytics(require(7690) /* ReportNames */.ReportNames.GUILD_SCHEDULED_EVENT, obj);
  obj = { name: require(7690) /* ReportNames */.ReportNames.GUILD_SCHEDULED_EVENT, record: closure_0 };
  obj = { onSubmit: arg1 };
  require(7691) /* _showReportModal */.showReportModal(obj, {}, obj);
};
export const showReportModalForFirstDM = function showReportModalForFirstDM(message, onSubmit) {
  let obj = { message_id: message.id, channel_id: message.channel_id };
  trackShowReportModalAnalytics(require(7690) /* ReportNames */.ReportNames.FIRST_DM, obj);
  obj = { name: require(7690) /* ReportNames */.ReportNames.FIRST_DM, record: message };
  obj = { onSubmit, isEligibleForFeedback: false };
  require(7691) /* _showReportModal */.showReportModal(obj, {}, obj);
};
export const submitHamReportForFirstDM = function submitHamReportForFirstDM(closure_1) {
  return _submitHamReportForFirstDM(...arguments);
};
export const showReportModalForUser = function showReportModalForUser(closure_0, closure_1, closure_2, ReportNames) {
  let obj = { reported_user_id: closure_0.id };
  trackShowReportModalAnalytics(require(7690) /* ReportNames */.ReportNames.USER, obj);
  obj = { name: require(7690) /* ReportNames */.ReportNames.USER, record: closure_0, contextualGuildId: closure_1 };
  obj = { onSubmit: closure_2, appContext: ReportNames };
  require(7691) /* _showReportModal */.showReportModal(obj, {}, obj);
};
export const showStaffTestReportModalForUser = function showStaffTestReportModalForUser(id, contextualGuildId, onSubmit, appContext) {
  let obj = { reported_user_id: id.id };
  trackShowReportModalAnalytics(require(7690) /* ReportNames */.ReportNames.USER, obj);
  obj = { name: require(7690) /* ReportNames */.ReportNames.USER, record: id, contextualGuildId };
  obj = { onSubmit, isEligibleForFeedback: false, appContext };
  require(7691) /* _showReportModal */.showReportModal(obj, { variant: "staff" }, obj);
};
export const showUnauthenticatedReportModalForUser = function showUnauthenticatedReportModalForUser(emailToken, onClose) {
  const tmp = new closure_6({});
  let obj = { reported_user_id: tmp.id };
  trackShowReportModalAnalytics(require(7690) /* ReportNames */.UnauthenticatedReportNames.USER, obj);
  obj = { name: require(7690) /* ReportNames */.UnauthenticatedReportNames.USER, record: tmp };
  obj = { onClose, isEligibleForFeedback: false, isAuthenticated: false, emailToken };
  require(7691) /* _showReportModal */.showReportModal(obj, {}, obj);
};
export const showUnauthenticatedReportModalForGuild = function showUnauthenticatedReportModalForGuild(emailToken, onClose) {
  let obj = require(1387) /* fromGuildPropertiesWithAdditionalFields */;
  const result = obj.dangerouslyConstructGuildRecordFromUntypedObject({});
  obj = { guild_id: result.id };
  trackShowReportModalAnalytics(require(7690) /* ReportNames */.UnauthenticatedReportNames.GUILD, obj);
  obj = { name: require(7690) /* ReportNames */.UnauthenticatedReportNames.GUILD, record: result };
  const obj1 = { onClose, isEligibleForFeedback: false, isAuthenticated: false, emailToken };
  require(7691) /* _showReportModal */.showReportModal(obj, {}, obj1);
};
export const showUnauthenticatedReportModalForTida = function showUnauthenticatedReportModalForTida(emailToken, onClose) {
  trackShowReportModalAnalytics(require(7690) /* ReportNames */.UnauthenticatedReportNames.MEDIA_TAKEDOWN, {});
  let obj = require(7691) /* _showReportModal */;
  obj = { name: require(7690) /* ReportNames */.UnauthenticatedReportNames.MEDIA_TAKEDOWN };
  obj = { onClose, isEligibleForFeedback: false, isAuthenticated: false, emailToken };
  obj.showReportModal(obj, {}, obj);
};
export const showUnauthenticatedReportModalForMessage = function showUnauthenticatedReportModalForMessage(emailToken, onClose) {
  trackShowReportModalAnalytics(require(7690) /* ReportNames */.UnauthenticatedReportNames.MESSAGE, { message_id: undefined, channel_id: undefined });
  let obj = require(7691) /* _showReportModal */;
  obj = { name: require(7690) /* ReportNames */.UnauthenticatedReportNames.MESSAGE, record: new _callSuper({}) };
  obj = { onClose, isEligibleForFeedback: false, isAuthenticated: false, emailToken };
  obj.showReportModal(obj, {}, obj);
};
export const submitReportForInappropriateConversationSafetyAlert = function submitReportForInappropriateConversationSafetyAlert(arg0, arg1, arg2) {
  return _submitReportForInappropriateConversationSafetyAlert(...arguments);
};
export const showReportModalForInappropriateConversationSafetyAlert = function showReportModalForInappropriateConversationSafetyAlert(lastChannelMessage) {
  let obj = { message_id: lastChannelMessage.id, channel_id: lastChannelMessage.channel_id };
  trackShowReportModalAnalytics(require(7690) /* ReportNames */.ReportNames.MESSAGE, obj);
  obj = { name: require(7690) /* ReportNames */.ReportNames.MESSAGE, record: lastChannelMessage };
  obj = { onSubmit: arg1 };
  require(7691) /* _showReportModal */.showReportModal(obj, { variant: "safety_alerts_v1" }, obj);
};
export const showReportModalForWidget = function showReportModalForWidget(closure_0, closure_1) {
  let obj = require(7691) /* _showReportModal */;
  obj = { name: require(7690) /* ReportNames */.ReportNames.WIDGET };
  const id = closure_1.id;
  let str = "";
  if (null != id) {
    str = id;
  }
  obj.widget_id = str;
  obj.user_id = closure_0;
  obj.widget = closure_1;
  obj = { onSubmit: arg2, appContext: arg3 };
  obj.showReportModal(obj, {}, obj);
};
export const showReportModalForApp = function showReportModalForApp(arg0) {
  let appContext;
  let application;
  let contextualChannelId;
  let contextualGuildId;
  let entrypoint;
  let onSubmit;
  ({ application, entrypoint, contextualGuildId, contextualChannelId } = arg0);
  ({ onSubmit, appContext } = arg0);
  let obj = importDefault(4324);
  obj = { application_id: application.id, location: entrypoint };
  obj.trackWithMetadata(AnalyticEvents.REPORT_APPLICATION_CLICKED, obj);
  obj = { application_id: application.id, guild_id: contextualGuildId, channel_id: contextualChannelId };
  trackShowReportModalAnalytics(require(7690) /* ReportNames */.ReportNames.APPLICATION, obj);
  const obj4 = require(7691) /* _showReportModal */;
  obj4.showReportModal({ name: require(7690) /* ReportNames */.ReportNames.APPLICATION, record: application, contextualGuildId, contextualChannelId, entrypoint }, {}, { onSubmit, appContext });
};
export const showReportToModMessageModal = function showReportToModMessageModal(message) {
  let obj = require(7691) /* _showReportModal */;
  obj = { name: require(7690) /* ReportNames */.ModeratorReportNames.MESSAGE, record: message };
  obj = { onSubmit: arg1, isEligibleForFeedback: false };
  obj.showReportModal(obj, {}, obj);
};
