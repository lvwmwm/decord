// Module ID: 15958
// Function ID: 15959
// Name: StreamingSubtitle
// Dependencies: [19, 21, 4832, 1115, 4988, 2]
// Exports: default

// Module 15958 (StreamingSubtitle)
import Fragment from "Fragment" /* 21 */;
import intl2 from "intl" /* 1115 */;
import Text_Text from "Text/Text" /* 4832 */;
import NicknameUtilsDefault from "NicknameUtils" /* 4988 */;
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
