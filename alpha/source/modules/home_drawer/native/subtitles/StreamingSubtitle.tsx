// Module ID: 16724
// Function ID: 16725
// Name: StreamingSubtitle
// Dependencies: [19, 21, 4823, 1115, 4979, 2]
// Exports: default

// Module 16724 (StreamingSubtitle)
import util from "util" /* 1115 */;
import Text_Text from "Text/Text" /* 4823 */;
import NicknameUtilsDefault from "NicknameUtils" /* 4979 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/home_drawer/native/subtitles/StreamingSubtitle.tsx");

export default function StreamingSubtitle(arg0) {
  ({ guildId, streamingUser } = arg0);
  const obj = { variant: "text-xs/medium", color: "text-voice-connected", lineClamp: 1, children: null };
  const intl = util.intl;
  const obj2 = { username: NicknameUtilsDefault.getName(guildId, null, streamingUser) };
  obj.children = intl.format(util.t.k5IKep, obj2);
  return jsx(Text_Text.Text, { variant: "text-xs/medium", color: "text-voice-connected", lineClamp: 1, children: null });
};
