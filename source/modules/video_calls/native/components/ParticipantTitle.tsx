// Module ID: 10782
// Function ID: 83736
// Name: ParticipantTitle
// Dependencies: []
// Exports: default

// Module 10782 (ParticipantTitle)
importAll(dependencyMap[0]);
const jsx = arg1(dependencyMap[1]).jsx;
let obj = arg1(dependencyMap[2]);
obj = {};
obj = { fontSize: 14, color: importDefault(dependencyMap[3]).colors.WHITE };
obj.usernameText = obj;
let closure_4 = obj.createStyles(obj);
const result = arg1(dependencyMap[6]).fileFinishedImporting("modules/video_calls/native/components/ParticipantTitle.tsx");

export default function ParticipantTitle(arg0) {
  let channel;
  let participant;
  let style;
  ({ channel, participant, style } = arg0);
  const obj = { style: items, numberOfLines: 1 };
  const items = [callback().usernameText, style];
  obj.children = importDefault(dependencyMap[5])(channel, participant);
  return jsx(arg1(dependencyMap[4]).LegacyText, obj);
};
