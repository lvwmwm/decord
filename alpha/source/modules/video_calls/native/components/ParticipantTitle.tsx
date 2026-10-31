// Module ID: 12047
// Function ID: 12048
// Name: ParticipantTitle
// Dependencies: [19, 21, 5014, 575, 1187, 12028, 2]
// Exports: default

// Module 12047 (ParticipantTitle)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import native from "native" /* 1187 */;
import getParticipantTitleDefault from "getParticipantTitle" /* 12028 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const obj = { usernameText: { fontSize: 14, color: nativeDefault.colors.WHITE } };
({ fontSize: 14, color: nativeDefault.colors.WHITE });
let closure_4 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/video_calls/native/components/ParticipantTitle.tsx");

export default function ParticipantTitle(arg0) {
  let channel;
  let participant;
  let style;
  ({ channel, participant, style } = arg0);
  const items = [closure_4().usernameText, style];
  closure_4();
  const LegacyText = native.LegacyText;
  return <LegacyText style={items} numberOfLines={1}>{getParticipantTitleDefault(channel, participant)}</LegacyText>;
};
