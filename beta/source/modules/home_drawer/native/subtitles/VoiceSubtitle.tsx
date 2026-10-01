// Module ID: 15959
// Function ID: 15960
// Name: VoiceSubtitle
// Dependencies: [19, 21, 4832, 1115, 4988, 2]
// Exports: default

// Module 15959 (VoiceSubtitle)
import Fragment from "Fragment" /* 21 */;
import intl2 from "intl" /* 1115 */;
import Text_Text from "Text/Text" /* 4832 */;
import NicknameUtilsDefault from "NicknameUtils" /* 4988 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/home_drawer/native/subtitles/VoiceSubtitle.tsx");

export default function VoiceSubtitle(arg0) {
  let mapped;
  let voiceUsers;
  ({ guildId: require, voiceUsers } = arg0);
  const Text = Text_Text.Text;
  const intl = intl2.intl;
  const format = intl.format;
  const obj2 = { users: mapped.join(", "), overflowCount: Math.max(voiceUsers.length - 2, 0) };
  const r1Vkoc = intl2.t.r1Vkoc;
  const substr = voiceUsers.slice(0, 2);
  mapped = substr.map((item) => {
    const obj = NicknameUtilsDefault;
    return obj.getName(require, null, item);
  });
  return <Text variant="text-xs/medium" color="text-voice-connected" lineClamp={1}>{format(r1Vkoc, obj2)}</Text>;
};
