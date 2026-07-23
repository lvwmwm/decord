// Module ID: 14853
// Function ID: 113319
// Name: VoiceSubtitle
// Dependencies: [31, 33, 4126, 1212, 4319, 2]
// Exports: default

// Module 14853 (VoiceSubtitle)
import "result";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("Text").fileFinishedImporting("modules/home_drawer/native/subtitles/VoiceSubtitle.tsx");

export default function VoiceSubtitle(arg0) {
  let require;
  let voiceUsers;
  ({ guildId: require, voiceUsers } = arg0);
  let obj = { variant: "text-xs/medium", color: "text-voice-connected", lineClamp: 1 };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj = {};
  const substr = voiceUsers.slice(0, 2);
  const mapped = substr.map((arg0) => outer1_1(outer1_2[4]).getName(closure_0, null, arg0));
  obj.users = mapped.join(", ");
  obj.overflowCount = Math.max(voiceUsers.length - 2, 0);
  obj.children = intl.format(require(1212) /* getSystemLocale */.t.r1Vkoc, obj);
  return jsx(require(4126) /* Text */.Text, {});
};
