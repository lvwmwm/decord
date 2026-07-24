// Module ID: 10822
// Function ID: 84001
// Name: ParticipantTitle
// Dependencies: [31, 33, 4130, 689, 1273, 10805, 2]
// Exports: default

// Module 10822 (ParticipantTitle)
import "result";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { fontSize: 14, color: require("_createForOfIteratorHelperLoose").colors.WHITE };
_createForOfIteratorHelperLoose.usernameText = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/video_calls/native/components/ParticipantTitle.tsx");

export default function ParticipantTitle(arg0) {
  let channel;
  let participant;
  let style;
  ({ channel, participant, style } = arg0);
  const obj = { style: items, numberOfLines: 1 };
  items = [_createForOfIteratorHelperLoose().usernameText, style];
  obj.children = importDefault(10805)(channel, participant);
  return jsx(require(1273) /* Button */.LegacyText, { style: items, numberOfLines: 1 });
};
