// Module ID: 16245
// Function ID: 16246
// Name: StreamingSubtitle
// Dependencies: [19, 21, 4477, 1233, 4680, 2]
// Exports: default

// Module 16245 (StreamingSubtitle)
import noopAll from "noop" /* 19 */;
import getSystemLocale from "getSystemLocale" /* 1233 */;
import Text from "Text" /* 4477 */;
import getNicknameDefault from "getNickname" /* 4680 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("modules/home_drawer/native/subtitles/StreamingSubtitle.tsx");

export default function StreamingSubtitle(arg0) {
  ({ guildId, streamingUser } = arg0);
  let obj = { variant: "text-xs/medium", color: "text-voice-connected", lineClamp: 1, children: null };
  const intl = getSystemLocale.intl;
  obj = { username: getNicknameDefault.getName(guildId, null, streamingUser) };
  obj[3] = intl.format(getSystemLocale.t.k5IKep, obj);
  return jsx(Text.Text, { username: getNicknameDefault.getName(guildId, null, streamingUser) });
};
