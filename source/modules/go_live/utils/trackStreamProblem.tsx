// Module ID: 15768
// Function ID: 120572
// Name: trackStreamProblem
// Dependencies: [670, 2, 6]
// Exports: default

// Module 15768 (trackStreamProblem)
import { AnalyticEvents } from "MessageEmbedTypes";
import _classCallCheck from "_classCallCheck";

const result = _classCallCheck.fileFinishedImporting("modules/go_live/utils/trackStreamProblem.tsx");

export default function trackStreamProblem(arg0) {
  let _location;
  let analyticsData;
  let category;
  let feedback;
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
  let obj = importDefault(dependencyMap[1]);
  obj = { reason: problem, category, reason_variant: variant, streamer_user_id: stream.ownerId, stream_channel_id: stream.channelId, guild_id: stream.guildId };
  let id = null;
  if (null != streamApplication) {
    id = streamApplication.id;
  }
  obj.application_id = id;
  let name = null;
  if (null != streamApplication) {
    name = streamApplication.name;
  }
  obj.application_name = name;
  obj.location = _location;
  obj.rating = rating;
  obj.feedback = feedback;
  const merged = Object.assign(analyticsData);
  obj.track(AnalyticEvents.STREAM_REPORT_PROBLEM, obj);
};
