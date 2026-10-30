// Module ID: 11970
// Function ID: 11971
// Name: ScreenshareParticipant
// Dependencies: [19, 17, 6708, 1072, 21, 5009, 575, 11717, 504, 5298, 5619, 1114, 5629, 11881, 2]
// Exports: default

// Module 11970 (ScreenshareParticipant)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1072 */;
import react from "react" /* 19 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 6708 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

let currentUserActiveStream;

let metroImportAll;
let metroImportDefault;
let obj2;
const View = react_native.View;
const ApplicationStreamStates = Constants.ApplicationStreamStates;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let obj = { container: obj2, title: { textAlign: "center", marginBottom: 8 }, description: { lineHeight: 18, textAlign: "center", marginBottom: 16 } };
obj2 = { alignItems: "center", justifyContent: "center", flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
let closure_9 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/video_calls/native/components/ScreenshareParticipant.tsx");

export default function ScreenshareParticipant(participant) {
  let intl3;
  let items3;
  let items4;
  let obj3;
  let string2Result;
  let stringResult;
  let tmp10;
  let tmp9;
  participant = participant.participant;
  const onSingleTap = participant.onSingleTap;
  const onDoubleTap = participant.onDoubleTap;
  const items = [onSingleTap, participant];
  const containerStyle = participant.containerStyle;
  const items1 = [onDoubleTap, participant];
  const callback = react.useCallback(() => {
    let tmpResult;
    if (onSingleTap != null) {
      tmpResult = tmp(participant);
    }
    return tmpResult;
  }, items);
  const callback1 = react.useCallback(() => {
    let tmpResult;
    if (onDoubleTap != null) {
      tmpResult = tmp(participant);
    }
    return tmpResult;
  }, items1);
  const tmp4 = onSingleTap(onDoubleTap[7])({ onSingleTapStart: callback, onDoubleTapStart: callback1 });
  const tmp5 = closure_9();
  const items2 = [ApplicationStreamingStore];
  const obj = participant(onDoubleTap[8]);
  const stateFromStores = obj.useStateFromStores(items2, () => {
    currentUserActiveStream = currentUserActiveStream.getCurrentUserActiveStream();
    let state;
    if (currentUserActiveStream != null) {
      state = currentUserActiveStream.state;
    }
    return state === constants.PAUSED;
  });
  const obj2 = { gesture: tmp4, children: tmp9(tmp10, obj3) };
  obj3 = { style: items3, children: items4 };
  items3 = [tmp5.container, containerStyle];
  const GestureDetector = participant(onDoubleTap[9]).GestureDetector;
  const obj4 = { style: tmp5.title, accessibilityRole: "header", variant: "heading-lg/extrabold", color: "mobile-text-heading-primary", children: stringResult };
  const Text = participant(onDoubleTap[10]).Text;
  const intl = participant(onDoubleTap[11]).intl;
  const string = intl.string;
  const t = participant(onDoubleTap[11]).t;
  tmp10 = View;
  tmp9 = closure_8;
  if (stateFromStores) {
    stringResult = string(t["5q17w5"]);
  } else {
    stringResult = string(t.gMOwov);
  }
  items4 = [closure_7(Text, obj4), , ];
  const obj5 = { style: tmp5.description, variant: "text-sm/medium", color: "interactive-text-default", children: string2Result };
  const Text2 = tmp6(tmp3[10]).Text;
  const intl2 = tmp6(tmp3[11]).intl;
  const string2 = intl2.string;
  const t2 = tmp6(tmp3[11]).t;
  if (stateFromStores) {
    string2Result = string2(t2.LV1NSN);
  } else {
    string2Result = string2(t2.dKeLGt);
  }
  items4[1] = closure_7(Text2, obj5);
  const obj6 = { variant: "primary-overlay", text: intl3.string(participant(onDoubleTap[11]).t.CpkXwZ), onPress: participant(onDoubleTap[13]).stopScreenshare };
  const Button = tmp6(tmp3[12]).Button;
  intl3 = tmp6(tmp3[11]).intl;
  items4[2] = closure_7(Button, obj6);
  return closure_7(GestureDetector, obj2);
};
