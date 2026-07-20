// Module ID: 14718
// Function ID: 111048
// Name: StreamingSubtitle
// Dependencies: []
// Exports: default

// Module 14718 (StreamingSubtitle)
importAll(dependencyMap[0]);
const jsx = arg1(dependencyMap[1]).jsx;
const result = arg1(dependencyMap[5]).fileFinishedImporting("modules/home_drawer/native/subtitles/StreamingSubtitle.tsx");

export default function StreamingSubtitle(arg0) {
  let guildId;
  let streamingUser;
  ({ guildId, streamingUser } = arg0);
  let obj = { 9223372036854775807: true, 9223372036854775807: true, 9223372036854775807: true };
  const intl = arg1(dependencyMap[3]).intl;
  obj = { username: importDefault(dependencyMap[4]).getName(guildId, null, streamingUser) };
  obj.children = intl.format(arg1(dependencyMap[3]).t.k5IKep, obj);
  return jsx(arg1(dependencyMap[2]).Text, obj);
};
