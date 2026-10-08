// Module ID: 10966
// Function ID: 10967
// Name: ParticipantTitle
// Dependencies: [19, 21, 5090, 587, 558, 576, 10946, 1200, 2]

// Module 10966 (ParticipantTitle)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import getParticipantTitleDefault from "getParticipantTitle" /* 10946 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5090 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let obj2;
let tmp;
const native = tmp(1200);
const jsx = Fragment.jsx;
let obj = { usernameText: obj2 };
obj2 = { fontSize: 14, color: nativeDefault.colors.WHITE };
let closure_4 = createStyles.createStyles(obj);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function ParticipantTitle(arg0) {
  let channel;
  let participant;
  let style;
  const obj = react2;
  const cResult = obj.c(9);
  ({ channel, participant, style } = arg0);
  const tmp4 = closure_4();
  if (cResult[0] === style) {
    let tmp5;
    if (cResult[1] === tmp4.usernameText) {
      tmp5 = cResult[2];
    }
    if (cResult[3] === channel) {
      let tmp6;
      if (cResult[4] === participant) {
        tmp6 = cResult[5];
      }
      if (cResult[6] === tmp5) {
        let tmp9;
        if (cResult[7] === tmp6) {
          tmp9 = cResult[8];
        }
        return tmp9;
      }
      const tmp11 = jsx(native.LegacyText, { style: tmp5, numberOfLines: 1, children: tmp6 });
      cResult[6] = tmp5;
      cResult[7] = tmp6;
      cResult[8] = tmp11;
      tmp9 = tmp11;
    }
    const tmp8 = getParticipantTitleDefault(channel, participant);
    cResult[3] = channel;
    cResult[4] = participant;
    cResult[5] = tmp8;
    tmp6 = tmp8;
  }
  const items = [tmp4.usernameText, style];
  cResult[0] = style;
  cResult[1] = tmp4.usernameText;
  cResult[2] = items;
  tmp5 = items;
}) : (function ParticipantTitle(arg0) {
  let channel;
  let participant;
  let style;
  ({ channel, participant, style } = arg0);
  const items = [closure_4().usernameText, style];
  closure_4();
  const LegacyText = native.LegacyText;
  return <LegacyText style={items} numberOfLines={1}>{getParticipantTitleDefault(channel, participant)}</LegacyText>;
});
const result = size.fileFinishedImporting("modules/video_calls/native/components/ParticipantTitle.tsx");

export default tmp3;
