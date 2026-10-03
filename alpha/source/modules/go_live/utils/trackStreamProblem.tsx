// Module ID: 16629
// Function ID: 16630
// Name: trackStreamProblem
// Dependencies: [1085, 1252, 2]
// Exports: default

// Module 16629 (trackStreamProblem)
import Constants from "Constants" /* 1085 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import size from "module_2" /* 2 */;

const AnalyticEvents = Constants.AnalyticEvents;
const result = size.fileFinishedImporting("modules/go_live/utils/trackStreamProblem.tsx");

export default function trackStreamProblem(arg0) {
  let _location;
  let analyticsData;
  let category;
  let feedback;
  let id;
  let name;
  let problem;
  let rating;
  let stream;
  let streamApplication;
  let variant;
  ({ stream, streamApplication, analyticsData, rating } = arg0);
  ({ problem, feedback, location: _location } = arg0);
  if (rating === undefined) {
    rating = null;
  }
  ({ category, variant } = arg0);
  const obj = { reason: problem, category, reason_variant: variant, streamer_user_id: stream.ownerId, stream_channel_id: stream.channelId, guild_id: stream.guildId, application_id: id, application_name: name, location: _location, rating, feedback };
  id = null;
  const track = AnalyticsUtilsDefault.track;
  const STREAM_REPORT_PROBLEM = AnalyticEvents.STREAM_REPORT_PROBLEM;
  AnalyticsUtilsDefault;
  if (null != streamApplication) {
    id = streamApplication.id;
  }
  name = null;
  if (null != streamApplication) {
    name = streamApplication.name;
  }
  const merged = Object.assign(analyticsData);
  track(STREAM_REPORT_PROBLEM, obj);
};
