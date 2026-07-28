// Module ID: 10793
// Function ID: 83600
// Name: SingleScreenshare
// Dependencies: [31, 10214, 33, 4165, 689, 4594, 10794, 4358, 2]
// Exports: default

// Module 10793 (SingleScreenshare)
import "result";
import resetFocusTimer from "resetFocusTimer";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_2;
let closure_3;
({ resetFocus: closure_2, toggleFocus: closure_3 } = resetFocusTimer);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BLACK };
_createForOfIteratorHelperLoose.stageStreamContainer = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("jsxProd").fileFinishedImporting("modules/video_calls/native/components/SingleScreenshare.tsx");

export default function SingleScreenshare(channel) {
  channel = channel.channel;
  channel(4594)(() => {
    outer1_2();
  });
  const obj = {
    participant: channel.participant,
    onSingleTap() {
      outer1_3();
    },
    onDoubleTap() {
      outer1_2();
      const participant = channel(outer1_1[7]).selectParticipant(channel.id, null);
    }
  };
  const tmp = _createForOfIteratorHelperLoose();
  const tmp3 = jsx;
  let stageStreamContainer;
  if (channel.isGuildStageVoice()) {
    stageStreamContainer = tmp.stageStreamContainer;
  }
  obj.containerStyle = stageStreamContainer;
  return tmp3(channel(10794), obj);
};
