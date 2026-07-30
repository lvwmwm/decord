// Module ID: 10853
// Function ID: 10854
// Name: ParticipantTitle
// Dependencies: [19, 21, 4189, 712, 1297, 10836, 2]
// Exports: default

// Module 10853 (ParticipantTitle)
import "noop";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

const require = arg1;
createCacheKey = { usernameText: null };
createCacheKey = { fontSize: 14, color: require("Themes").colors.WHITE };
createCacheKey[0] = createCacheKey;
createCacheKey = createCacheKey.createStyles(createCacheKey);
const result = require("createCacheKey").fileFinishedImporting("modules/video_calls/native/components/ParticipantTitle.tsx");

export default function ParticipantTitle(arg0) {
  let channel;
  let participant;
  let style;
  ({ channel, participant, style } = arg0);
  const obj = { style: items, numberOfLines: 1, children: null };
  items = [createCacheKey().usernameText, style];
  obj[2] = importDefault(10836)(channel, participant);
  return jsx(require(1297) /* Button */.LegacyText, { style: items, numberOfLines: 1, children: null });
};
