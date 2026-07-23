// Module ID: 15893
// Function ID: 122788
// Name: trackStreamProblem
// Dependencies: [653, 675, 2]
// Exports: default

// Module 15893 (trackStreamProblem)
import { AnalyticEvents } from "ME";

const result = require("set").fileFinishedImporting("modules/go_live/utils/trackStreamProblem.tsx");

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
  let obj = importDefault(675);
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
