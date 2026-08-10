// Module ID: 15444
// Function ID: 15445
// Name: StreamingSubtitle
// Dependencies: [19, 21, 4299, 1236, 4493, 2]
// Exports: default

// Module 15444 (StreamingSubtitle)
import "noop";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("Text").fileFinishedImporting("modules/home_drawer/native/subtitles/StreamingSubtitle.tsx");

export default function StreamingSubtitle(arg0) {
  let guildId;
  let streamingUser;
  ({ guildId, streamingUser } = arg0);
  let obj = { variant: "text-xs/medium", color: "text-voice-connected", lineClamp: 1, children: null };
  const intl = require(1236) /* getSystemLocale */.intl;
  obj = { username: null };
  obj[0] = importDefault(4493).getName(guildId, null, streamingUser);
  obj[3] = intl.format(require(1236) /* getSystemLocale */.t.k5IKep, obj);
  return jsx(require(4299) /* Text */.Text, { username: null });
};
