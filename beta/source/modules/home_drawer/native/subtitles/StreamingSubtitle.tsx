// Module ID: 16663
// Function ID: 16664
// Name: StreamingSubtitle
// Dependencies: [19, 21, 558, 568, 1119, 4910, 4754, 2]

// Module 16663 (StreamingSubtitle)
import c from "c" /* 568 */;
import util from "util" /* 1119 */;
import Text_Text from "Text/Text" /* 4754 */;
import NicknameUtilsDefault from "NicknameUtils" /* 4910 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/home_drawer/native/subtitles/StreamingSubtitle.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(5);
  ({ guildId, streamingUser } = arg0);
  if (cResult[0] === guildId) {
    if (cResult[1] === streamingUser) {
      let tmp4 = cResult[2];
    }
    if (cResult[3] !== tmp4) {
      const obj2 = { variant: "text-xs/medium", color: "text-voice-connected", lineClamp: 1, children: tmp4 };
      const tmp8 = jsx(tmp(4754).Text, { variant: "text-xs/medium", color: "text-voice-connected", lineClamp: 1, children: tmp4 });
      cResult[3] = tmp4;
      cResult[4] = tmp8;
      let tmp6 = tmp8;
    } else {
      tmp6 = cResult[4];
    }
    return tmp6;
  }
  const intl = tmp(1119).intl;
  const obj4 = { username: null };
  obj4.username = NicknameUtilsDefault.getName(guildId, null, streamingUser);
  const formatResult = intl.format(util.t.k5IKep, obj4);
  cResult[0] = guildId;
  cResult[1] = streamingUser;
  cResult[2] = formatResult;
  tmp4 = formatResult;
}) : ((arg0) => {
  ({ guildId, streamingUser } = arg0);
  const obj = { variant: "text-xs/medium", color: "text-voice-connected", lineClamp: 1, children: null };
  const intl = util.intl;
  const obj2 = { username: NicknameUtilsDefault.getName(guildId, null, streamingUser) };
  obj.children = intl.format(util.t.k5IKep, obj2);
  return jsx(Text_Text.Text, { variant: "text-xs/medium", color: "text-voice-connected", lineClamp: 1, children: null });
});
