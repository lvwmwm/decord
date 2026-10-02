// Module ID: 16316
// Function ID: 16317
// Name: vibegrationsFeedback
// Dependencies: [12645, 8492, 1086, 10991, 510, 1127, 3718, 1253, 10994, 2]
// Exports: countSettledTurns, hasShownFeedbackForProject, markFeedbackShownForProject, submitVibegrationsFeedback, trackVibegrationsFeedbackOpened, vibegrationsFeedbackSection

// Module 16316 (vibegrationsFeedback)
import Storage3 from "Storage" /* 510 */;
import Constants2 from "Constants" /* 1086 */;
import intl7 from "intl" /* 1127 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1253 */;
import _modDef3718 from "module_3718" /* 3718 */;
import FeedbackUtils from "FeedbackUtils" /* 10994 */;
import VibegrationsChatStore2 from "VibegrationsChatStore" /* 12645 */;
import VibegrationsProjectStore from "VibegrationsProjectStore" /* 8492 */;
import Constants from "Constants" /* 10991 */;
import size from "module_2" /* 2 */;

const VibegrationsChatStore = VibegrationsChatStore2;

let c10;
let c9;
let metroImportAll;
let metroImportDefault;
const turnSettled = VibegrationsChatStore2.turnSettled;
const AnalyticEvents = Constants2.AnalyticEvents;
({ FeedbackCategory: metroImportDefault, FeedbackOptionVariant: metroImportAll, FeedbackType: c9, VibegrationsFeedbackOption: c10 } = Constants);
const shownVibegrationsFeedbackProjectIds = "shownVibegrationsFeedbackProjectIds";
let result = size.fileFinishedImporting("modules/vibegrations/lib/vibegrationsFeedback.tsx");

export const MINIMUM_SETTLED_TURNS_FOR_FEEDBACK = 3;
export const hasShownFeedbackForProject = function hasShownFeedbackForProject(arg0) {
  const Storage = Storage3.Storage;
  let items = Storage.get(shownVibegrationsFeedbackProjectIds);
  if (items == null) {
    items = [];
  }
  return items.includes(arg0);
};
export const markFeedbackShownForProject = function markFeedbackShownForProject(arg0) {
  const Storage = Storage3.Storage;
  let items1 = Storage.get(shownVibegrationsFeedbackProjectIds);
  const tmp4 = shownVibegrationsFeedbackProjectIds;
  if (items1 == null) {
    items1 = [];
  }
  if (!items1.includes(arg0)) {
    const Storage2 = Storage3.Storage;
    const items = [];
    items[HermesBuiltin.arraySpread(items, items1, 0)] = arg0;
    const result = Storage2.set(tmp4, items);
  }
};
export const countSettledTurns = function countSettledTurns(arg0) {
  const messages = VibegrationsChatStore.getMessages(arg0);
  return messages.filter((role) => {
    const tmp = "assistant" === role.role && "side_reply" !== role.kind && turnSettled(role);
    return tmp;
  }).length;
};
export const vibegrationsFeedbackSection = function vibegrationsFeedbackSection() {
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let items;
  let obj6;
  const obj = { value: metroImportDefault.VIBEGRATIONS, label: "", problemsHeader: intl.string(_modDef3718.kLHFxL), problemOptions: items, freeformConfig: obj6 };
  intl = intl7.intl;
  const obj2 = { value: constants4.NOT_WHAT_I_WANTED, variant: metroImportAll.UNSPECIFIED, label: intl2.string(_modDef3718.UJLIUY) };
  intl2 = intl7.intl;
  items = [obj2, , , ];
  const obj3 = { value: constants4.TOO_SLOW, variant: metroImportAll.UNSPECIFIED, label: intl3.string(_modDef3718.FVQz1w) };
  intl3 = intl7.intl;
  items[1] = obj3;
  const obj4 = { value: constants4.APP_DIDNT_WORK, variant: metroImportAll.UNSPECIFIED, label: intl4.string(_modDef3718["4AdY23"]) };
  intl4 = intl7.intl;
  items[2] = obj4;
  const obj5 = { value: constants4.DIDNT_KNOW_WHAT_TO_ASK_FOR, variant: metroImportAll.UNSPECIFIED, label: intl5.string(_modDef3718["u/juX1"]) };
  intl5 = intl7.intl;
  items[3] = obj5;
  obj6 = { value: constants4.FREEFORM, label: intl6.string(_modDef3718["8Ee6yW"]) };
  intl6 = intl7.intl;
  return obj;
};
export const trackVibegrationsFeedbackOpened = function trackVibegrationsFeedbackOpened() {
  const obj = AnalyticsUtilsDefault;
  obj.track(AnalyticEvents.OPEN_MODAL, { type: "vibegrations", source: "Feedback Modal" });
};
export const submitVibegrationsFeedback = function submitVibegrationsFeedback(projectId, promptCount, feedback, VibegrationsFeedbackSheet) {
  let application_id;
  let rating;
  let reason;
  let value;
  ({ rating, reason } = feedback);
  feedback = feedback.feedback;
  if (true === feedback.dontShowAgain) {
    const obj2 = { feedbackType: constants3.VIBEGRATIONS, location: VibegrationsFeedbackSheet };
    const obj = FeedbackUtils;
    obj.processOptOut(obj2);
  }
  if (null != rating) {
    const obj3 = { project_id: projectId, application_id, rating, reason: value, feedback, prompt_count: promptCount, location: "Vibegrations Prompt" };
    const track = AnalyticsUtilsDefault.track;
    const VIBEGRATIONS_FEEDBACK = AnalyticEvents.VIBEGRATIONS_FEEDBACK;
    AnalyticsUtilsDefault;
    const project = VibegrationsProjectStore.getProject(projectId);
    application_id = undefined;
    if (project != null) {
      application_id = project.application_id;
    }
    if (application_id == null) {
      application_id = null;
    }
    value = undefined;
    if (reason != null) {
      value = reason.value;
    }
    if (value == null) {
      value = null;
    }
    track(VIBEGRATIONS_FEEDBACK, obj3);
  }
};
