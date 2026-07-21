// Module ID: 7593
// Function ID: 60796
// Name: _submitHamReportForFirstDM
// Dependencies: []
// Exports: showReportModalForApp, showReportModalForFirstDM, showReportModalForGuild, showReportModalForGuildDirectoryEntry, showReportModalForGuildScheduledEvent, showReportModalForInappropriateConversationSafetyAlert, showReportModalForMessage, showReportModalForStageChannel, showReportModalForUser, showReportModalForWidget, showReportToModMessageModal, showStaffTestReportModalForGuild, showStaffTestReportModalForMessage, showStaffTestReportModalForUser, showUnauthenticatedReportModalForGuild, showUnauthenticatedReportModalForMessage, showUnauthenticatedReportModalForTida, showUnauthenticatedReportModalForUser, submitHamReportForFirstDM, submitReportForInappropriateConversationSafetyAlert

// Module 7593 (_submitHamReportForFirstDM)
async function _submitHamReportForFirstDM(record, arg1, arg2) {
  let obj = callback(closure_2[7]);
  obj = { name: callback(closure_2[5]).ReportNames.FIRST_DM, record };
  yield obj.submitHeadlessReport(obj, { variant: "_first_dm_ham_v1" });
  if (null != arg1) {
    arg1();
  }
}
async function _submitReportForInappropriateConversationSafetyAlert(record, arg1, arg2, arg3) {
  let obj = callback(closure_2[7]);
  obj = { name: callback(closure_2[5]).ReportNames.MESSAGE, record };
  yield obj.submitHeadlessReport(obj, { variant: "safety_alerts_headless_v1" });
  if (null != arg1) {
    arg1();
  }
}
function trackShowReportModalAnalytics(MESSAGE, arg1) {
  let obj = importDefault(dependencyMap[9]);
  obj = { report_type: MESSAGE };
  const merged = Object.assign(arg1);
  obj.trackWithMetadata(AnalyticEvents.IAR_MODAL_OPEN, obj);
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
const AnalyticEvents = arg1(dependencyMap[4]).AnalyticEvents;
const result = arg1(dependencyMap[10]).fileFinishedImporting("modules/in_app_reports/ReportModals.tsx");

export const showReportModalForGuild = function showReportModalForGuild(guild) {
  let obj = { guild_id: guild.id };
  trackShowReportModalAnalytics(arg1(dependencyMap[5]).ReportNames.GUILD, obj);
  obj = { name: arg1(dependencyMap[5]).ReportNames.GUILD, record: guild };
  obj = { onSubmit: arg1 };
  arg1(dependencyMap[6]).showReportModal(obj, {}, obj);
};
export const showReportModalForGuildDirectoryEntry = function showReportModalForGuildDirectoryEntry(entry) {
  let obj = { channel_id: entry.channelId, guild_id: entry.guildId };
  trackShowReportModalAnalytics(arg1(dependencyMap[5]).ReportNames.GUILD_DIRECTORY_ENTRY, obj);
  obj = { name: arg1(dependencyMap[5]).ReportNames.GUILD_DIRECTORY_ENTRY, record: entry };
  obj = { onSubmit: arg1 };
  arg1(dependencyMap[6]).showReportModal(obj, {}, obj);
};
export const showReportModalForMessage = function showReportModalForMessage(message, mobile_media_message_preview_action_sheet) {
  let obj = { message_id: message.id, channel_id: message.channel_id };
  trackShowReportModalAnalytics(mobile_media_message_preview_action_sheet(dependencyMap[5]).ReportNames.MESSAGE, obj);
  obj = { name: mobile_media_message_preview_action_sheet(dependencyMap[5]).ReportNames.MESSAGE, record: message };
  obj = { onSubmit: arg2 };
  mobile_media_message_preview_action_sheet(dependencyMap[6]).showReportModal(obj, {}, obj);
};
export const showStaffTestReportModalForMessage = function showStaffTestReportModalForMessage(id, arg1, onSubmit) {
  let obj = { message_id: id.id, channel_id: id.channel_id };
  trackShowReportModalAnalytics(arg1(dependencyMap[5]).ReportNames.MESSAGE, obj);
  obj = { name: arg1(dependencyMap[5]).ReportNames.MESSAGE, record: id };
  obj = { onSubmit };
  arg1(dependencyMap[6]).showReportModal(obj, { variant: "staff" }, obj);
};
export const showStaffTestReportModalForGuild = function showStaffTestReportModalForGuild(guild_id, arg1, onSubmit) {
  let obj = { guild_id: guild_id.id };
  trackShowReportModalAnalytics(arg1(dependencyMap[5]).ReportNames.GUILD, obj);
  obj = { name: arg1(dependencyMap[5]).ReportNames.GUILD, record: guild_id };
  obj = { onSubmit };
  arg1(dependencyMap[6]).showReportModal(obj, { variant: "staff" }, obj);
};
export const showReportModalForStageChannel = function showReportModalForStageChannel(channel) {
  const stageInstanceByChannel = stageInstanceByChannel.getStageInstanceByChannel(channel.id);
  if (null != stageInstanceByChannel) {
    let obj = {};
    ({ id: obj.stage_instance_id, channel_id: obj.channel_id, guild_id: obj.guild_id } = stageInstanceByChannel);
    trackShowReportModalAnalytics(arg1(dependencyMap[5]).ReportNames.STAGE_CHANNEL, obj);
    obj = { name: arg1(dependencyMap[5]).ReportNames.STAGE_CHANNEL, record: stageInstanceByChannel };
    obj = { onSubmit: arg1 };
    arg1(dependencyMap[6]).showReportModal(obj, {}, obj);
    const obj2 = arg1(dependencyMap[6]);
  }
};
export const showReportModalForGuildScheduledEvent = function showReportModalForGuildScheduledEvent(guild_scheduled_event_id) {
  let obj = { guild_scheduled_event_id: guild_scheduled_event_id.id, guild_id: guild_scheduled_event_id.guild_id };
  const channel_id = guild_scheduled_event_id.channel_id;
  let tmp2;
  if (null != channel_id) {
    tmp2 = channel_id;
  }
  obj.channel_id = tmp2;
  trackShowReportModalAnalytics(arg1(dependencyMap[5]).ReportNames.GUILD_SCHEDULED_EVENT, obj);
  obj = { name: arg1(dependencyMap[5]).ReportNames.GUILD_SCHEDULED_EVENT, record: guild_scheduled_event_id };
  obj = { onSubmit: arg1 };
  arg1(dependencyMap[6]).showReportModal(obj, {}, obj);
};
export const showReportModalForFirstDM = function showReportModalForFirstDM(message, onSubmit) {
  let obj = { message_id: message.id, channel_id: message.channel_id };
  trackShowReportModalAnalytics(onSubmit(dependencyMap[5]).ReportNames.FIRST_DM, obj);
  obj = { name: onSubmit(dependencyMap[5]).ReportNames.FIRST_DM, record: message };
  obj = { onSubmit, isEligibleForFeedback: false };
  onSubmit(dependencyMap[6]).showReportModal(obj, {}, obj);
};
export const submitHamReportForFirstDM = function submitHamReportForFirstDM(arg0) {
  return _submitHamReportForFirstDM(...arguments);
};
export const showReportModalForUser = function showReportModalForUser(closure_0, closure_1, closure_2, closure_3) {
  let obj = { reported_user_id: closure_0.id };
  trackShowReportModalAnalytics(closure_1(dependencyMap[5]).ReportNames.USER, obj);
  obj = { name: closure_1(dependencyMap[5]).ReportNames.USER, record: closure_0, contextualGuildId: closure_1 };
  obj = { onSubmit: closure_2, appContext: closure_3 };
  closure_1(dependencyMap[6]).showReportModal(obj, {}, obj);
};
export const showStaffTestReportModalForUser = function showStaffTestReportModalForUser(id, contextualGuildId, onSubmit, appContext) {
  let obj = { reported_user_id: id.id };
  trackShowReportModalAnalytics(contextualGuildId(dependencyMap[5]).ReportNames.USER, obj);
  obj = { name: contextualGuildId(dependencyMap[5]).ReportNames.USER, record: id, contextualGuildId };
  obj = { onSubmit, isEligibleForFeedback: false, appContext };
  contextualGuildId(dependencyMap[6]).showReportModal(obj, { variant: "staff" }, obj);
};
export const showUnauthenticatedReportModalForUser = function showUnauthenticatedReportModalForUser(emailToken, onClose) {
  const tmp = new closure_6({});
  let obj = { reported_user_id: tmp.id };
  trackShowReportModalAnalytics(onClose(dependencyMap[5]).UnauthenticatedReportNames.USER, obj);
  obj = { name: onClose(dependencyMap[5]).UnauthenticatedReportNames.USER, record: tmp };
  obj = { -9223372036854775808: "postal-address-country", -9223372036854775808: "password", 0: "email", onClose, emailToken };
  onClose(dependencyMap[6]).showReportModal(obj, {}, obj);
};
export const showUnauthenticatedReportModalForGuild = function showUnauthenticatedReportModalForGuild(emailToken, onClose) {
  let obj = onClose(dependencyMap[8]);
  const result = obj.dangerouslyConstructGuildRecordFromUntypedObject({});
  obj = { guild_id: result.id };
  trackShowReportModalAnalytics(onClose(dependencyMap[5]).UnauthenticatedReportNames.GUILD, obj);
  obj = { name: onClose(dependencyMap[5]).UnauthenticatedReportNames.GUILD, record: result };
  const obj1 = { -9223372036854775808: "postal-address-country", -9223372036854775808: "password", 0: "email", onClose, emailToken };
  onClose(dependencyMap[6]).showReportModal(obj, {}, obj1);
};
export const showUnauthenticatedReportModalForTida = function showUnauthenticatedReportModalForTida(emailToken, onClose) {
  trackShowReportModalAnalytics(onClose(dependencyMap[5]).UnauthenticatedReportNames.MEDIA_TAKEDOWN, {});
  let obj = onClose(dependencyMap[6]);
  obj = { name: onClose(dependencyMap[5]).UnauthenticatedReportNames.MEDIA_TAKEDOWN };
  obj = { -9223372036854775808: "postal-address-country", -9223372036854775808: "password", 0: "email", onClose, emailToken };
  obj.showReportModal(obj, {}, obj);
};
export const showUnauthenticatedReportModalForMessage = function showUnauthenticatedReportModalForMessage(emailToken, onClose) {
  trackShowReportModalAnalytics(onClose(dependencyMap[5]).UnauthenticatedReportNames.MESSAGE, { message_id: undefined, channel_id: undefined });
  let obj = onClose(dependencyMap[6]);
  obj = { name: onClose(dependencyMap[5]).UnauthenticatedReportNames.MESSAGE, record: new closure_5({}) };
  obj = { -9223372036854775808: "postal-address-country", -9223372036854775808: "password", 0: "email", onClose, emailToken };
  obj.showReportModal(obj, {}, obj);
};
export const submitReportForInappropriateConversationSafetyAlert = function submitReportForInappropriateConversationSafetyAlert(arg0, arg1, arg2) {
  return _submitReportForInappropriateConversationSafetyAlert(...arguments);
};
export const showReportModalForInappropriateConversationSafetyAlert = function showReportModalForInappropriateConversationSafetyAlert(closure_6) {
  let obj = { message_id: closure_6.id, channel_id: closure_6.channel_id };
  trackShowReportModalAnalytics(arg1(dependencyMap[5]).ReportNames.MESSAGE, obj);
  obj = { name: arg1(dependencyMap[5]).ReportNames.MESSAGE, record: closure_6 };
  obj = { onSubmit: arg1 };
  arg1(dependencyMap[6]).showReportModal(obj, { variant: "safety_alerts_v1" }, obj);
};
export const showReportModalForWidget = function showReportModalForWidget(user_id, id, onSubmit, appContext) {
  let obj = id(dependencyMap[6]);
  obj = { name: id(dependencyMap[5]).ReportNames.WIDGET };
  id = id.id;
  let str = "";
  if (null != id) {
    str = id;
  }
  obj.widget_id = str;
  obj.user_id = user_id;
  obj.widget = id;
  obj = { onSubmit, appContext };
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
  let obj = importDefault(dependencyMap[9]);
  obj = { application_id: application.id, location: entrypoint };
  obj.trackWithMetadata(AnalyticEvents.REPORT_APPLICATION_CLICKED, obj);
  obj = { application_id: application.id, guild_id: contextualGuildId, channel_id: contextualChannelId };
  trackShowReportModalAnalytics(arg1(dependencyMap[5]).ReportNames.APPLICATION, obj);
  const obj4 = arg1(dependencyMap[6]);
  obj4.showReportModal({ name: arg1(dependencyMap[5]).ReportNames.APPLICATION, record: application, contextualGuildId, contextualChannelId, entrypoint }, {}, { onSubmit, appContext });
};
export const showReportToModMessageModal = function showReportToModMessageModal(message) {
  let obj = arg1(dependencyMap[6]);
  obj = { name: arg1(dependencyMap[5]).ModeratorReportNames.MESSAGE, record: message };
  obj = { onSubmit: arg1, isEligibleForFeedback: false };
  obj.showReportModal(obj, {}, obj);
};
