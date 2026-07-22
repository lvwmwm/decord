// Module ID: 14737
// Function ID: 111151
// Name: VoiceSubtitle
// Dependencies: []
// Exports: default

// Module 14737 (VoiceSubtitle)
importAll(dependencyMap[0]);
const jsx = arg1(dependencyMap[1]).jsx;
const result = arg1(dependencyMap[5]).fileFinishedImporting("modules/home_drawer/native/subtitles/VoiceSubtitle.tsx");

export default function VoiceSubtitle(arg0) {
  let voiceUsers;
  ({ guildId: closure_0, voiceUsers } = arg0);
  let obj = {};
  const intl = arg1(dependencyMap[3]).intl;
  obj = {};
  const substr = voiceUsers.slice(0, 2);
  const mapped = substr.map((arg0) => callback(closure_2[4]).getName(closure_0, null, arg0));
  obj.users = mapped.join(", ");
  obj.overflowCount = Math.max(voiceUsers.length - 2, 0);
  obj.children = intl.format(arg1(dependencyMap[3]).t.r1Vkoc, obj);
  return jsx(arg1(dependencyMap[2]).Text, obj);
};
