// Module ID: 10754
// Function ID: 83545
// Name: ScreenshareParticipant
// Dependencies: [31, 27, 33, 4130, 689, 10562, 5217, 10563, 4126, 1212, 4543, 10689, 2]
// Exports: default

// Module 10754 (ScreenshareParticipant)
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_4;
let closure_5;
let closure_6;
let closure_7;
const require = arg1;
({ View: closure_4, Image: closure_5 } = get_ActivityIndicator);
({ jsx: closure_6, jsxs: closure_7 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { alignItems: "center", justifyContent: "center", flex: 1, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.image = { marginBottom: 12 };
_createForOfIteratorHelperLoose.title = { textAlign: "center", marginBottom: 8 };
_createForOfIteratorHelperLoose.description = { lineHeight: 18, textAlign: "center", marginBottom: 16 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("jsxProd").fileFinishedImporting("modules/video_calls/native/components/ScreenshareParticipant.tsx");

export default function ScreenshareParticipant(participant) {
  participant = participant.participant;
  const onSingleTap = participant.onSingleTap;
  const onDoubleTap = participant.onDoubleTap;
  const items = [onSingleTap, participant];
  const items1 = [onDoubleTap, participant];
  const callback = React.useCallback(() => {
    let tmp;
    if (null != onSingleTap) {
      tmp = onSingleTap(participant);
    }
    return tmp;
  }, items);
  const callback1 = React.useCallback(() => {
    let tmp;
    if (null != onDoubleTap) {
      tmp = onDoubleTap(participant);
    }
    return tmp;
  }, items1);
  const tmp4 = _createForOfIteratorHelperLoose();
  let obj = { gesture: onSingleTap(onDoubleTap[5])({ onSingleTapStart: callback, onDoubleTapStart: callback1 }) };
  obj = { style: items2 };
  items2 = [tmp4.container, participant.containerStyle];
  obj = { source: onSingleTap(onDoubleTap[7]), style: tmp4.image };
  const items3 = [callback(closure_5, obj), , , ];
  const obj1 = { style: tmp4.title, accessibilityRole: "header", variant: "heading-lg/extrabold", color: "mobile-text-heading-primary" };
  const intl = participant(onDoubleTap[9]).intl;
  obj1.children = intl.string(participant(onDoubleTap[9]).t.gMOwov);
  items3[1] = callback(participant(onDoubleTap[8]).Text, obj1);
  const obj2 = { style: tmp4.description, variant: "text-sm/medium", color: "interactive-text-default" };
  const intl2 = participant(onDoubleTap[9]).intl;
  obj2.children = intl2.string(participant(onDoubleTap[9]).t.dKeLGt);
  items3[2] = callback(participant(onDoubleTap[8]).Text, obj2);
  const obj3 = { variant: "primary-overlay" };
  const intl3 = participant(onDoubleTap[9]).intl;
  obj3.text = intl3.string(participant(onDoubleTap[9]).t.CpkXwZ);
  obj3.onPress = participant(onDoubleTap[11]).stopScreenshare;
  items3[3] = callback(participant(onDoubleTap[10]).Button, obj3);
  obj.children = items3;
  obj.children = callback2(closure_4, obj);
  return callback(participant(onDoubleTap[6]).GestureDetector, obj);
};
