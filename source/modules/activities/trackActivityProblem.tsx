// Module ID: 15901
// Function ID: 121828
// Name: trackActivityProblem
// Dependencies: [670, 2, 6]
// Exports: default

// Module 15901 (trackActivityProblem)
import { AnalyticEvents } from "MessageEmbedTypes";
import _classCallCheck from "_classCallCheck";

const result = _classCallCheck.fileFinishedImporting("modules/activities/trackActivityProblem.tsx");

export default function trackActivityProblem(arg0) {
  let _location;
  let activityApplication;
  let analyticsData;
  let channel;
  let embeddedActivityLocation;
  let feedback;
  let problem;
  let rating;
  ({ channel, activityApplication, analyticsData } = arg0);
  ({ problem, embeddedActivityLocation, feedback } = arg0);
  if (analyticsData === undefined) {
    analyticsData = {};
  }
  ({ rating, location: _location } = arg0);
  if (rating === undefined) {
    rating = null;
  }
  let obj = importDefault(dependencyMap[1]);
  obj = { reason: problem };
  let guildId;
  if (null != channel) {
    guildId = channel.getGuildId();
  }
  obj.guild_id = guildId;
  let id;
  if (null != channel) {
    id = channel.id;
  }
  obj.channel_id = id;
  let id1;
  if (null != activityApplication) {
    id1 = activityApplication.id;
  }
  obj.application_id = id1;
  let name;
  if (null != activityApplication) {
    name = activityApplication.name;
  }
  obj.application_name = name;
  obj.location = _location;
  obj.rating = rating;
  obj.feedback = feedback;
  obj.embedded_activity_location_kind = embeddedActivityLocation.kind;
  ({ rtc_connection_id: obj2.rtc_connection_id, media_session_id: obj2.media_session_id } = analyticsData);
  obj.track(AnalyticEvents.ACTIVITY_REPORT_PROBLEM, obj);
};
