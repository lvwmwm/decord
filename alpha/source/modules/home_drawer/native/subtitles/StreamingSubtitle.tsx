// Module ID: 18383
// Function ID: 18384
// Name: StreamingSubtitle
// Dependencies: [19, 21, 5624, 1113, 6041, 2]
// Exports: default

// Module 18383 (StreamingSubtitle)
import Fragment from "Fragment" /* 21 */;
import intl2 from "intl" /* 1113 */;
import Text_Text from "Text/Text" /* 5624 */;
import NicknameUtilsDefault from "NicknameUtils" /* 6041 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/home_drawer/native/subtitles/StreamingSubtitle.tsx");

export default function StreamingSubtitle(arg0) {
  let guildId;
  let obj3;
  let streamingUser;
  ({ guildId, streamingUser } = arg0);
  const Text = Text_Text.Text;
  const intl = intl2.intl;
  const format = intl.format;
  const obj2 = { username: obj3.getName(guildId, null, streamingUser) };
  const k5IKep = intl2.t.k5IKep;
  obj3 = NicknameUtilsDefault;
  return <Text variant="text-xs/medium" color="text-voice-connected" lineClamp={1}>{format(k5IKep, obj2)}</Text>;
};
