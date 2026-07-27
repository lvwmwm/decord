// Module ID: 14911
// Function ID: 113771
// Name: StreamingSubtitle
// Dependencies: [31, 33, 4127, 1212, 4320, 2]
// Exports: default

// Module 14911 (StreamingSubtitle)
import "result";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("Text").fileFinishedImporting("modules/home_drawer/native/subtitles/StreamingSubtitle.tsx");

export default function StreamingSubtitle(arg0) {
  let guildId;
  let streamingUser;
  ({ guildId, streamingUser } = arg0);
  let obj = { variant: "text-xs/medium", color: "text-voice-connected", lineClamp: 1 };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj = { username: importDefault(4320).getName(guildId, null, streamingUser) };
  obj.children = intl.format(require(1212) /* getSystemLocale */.t.k5IKep, obj);
  return jsx(require(4127) /* Text */.Text, { username: importDefault(4320).getName(guildId, null, streamingUser) });
};
