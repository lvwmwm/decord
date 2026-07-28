// Module ID: 14955
// Function ID: 113944
// Name: StreamingSubtitle
// Dependencies: [31, 33, 4161, 1212, 4354, 2]
// Exports: default

// Module 14955 (StreamingSubtitle)
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
  obj = { username: importDefault(4354).getName(guildId, null, streamingUser) };
  obj.children = intl.format(require(1212) /* getSystemLocale */.t.k5IKep, obj);
  return jsx(require(4161) /* Text */.Text, { username: importDefault(4354).getName(guildId, null, streamingUser) });
};
