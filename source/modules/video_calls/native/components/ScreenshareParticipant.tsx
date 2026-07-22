// Module ID: 10744
// Function ID: 83496
// Name: ScreenshareParticipant
// Dependencies: []
// Exports: default

// Module 10744 (ScreenshareParticipant)
let closure_3 = importAll(dependencyMap[0]);
({ View: closure_4, Image: closure_5 } = arg1(dependencyMap[1]));
const tmp2 = arg1(dependencyMap[1]);
({ jsx: closure_6, jsxs: closure_7 } = arg1(dependencyMap[2]));
let obj = arg1(dependencyMap[3]);
obj = {};
obj = { width: "ADBE Vector Group", backgroundColor: importDefault(dependencyMap[4]).colors.BACKGROUND_BASE_LOW, paddingHorizontal: 2 };
obj.container = obj;
obj.image = { marginBottom: 12 };
obj.title = {};
obj.description = { <string:2790674827>: "a", <string:3372925522>: "p", <string:2700829437>: "midnat" };
let closure_8 = obj.createStyles(obj);
const tmp3 = arg1(dependencyMap[2]);
const result = arg1(dependencyMap[12]).fileFinishedImporting("modules/video_calls/native/components/ScreenshareParticipant.tsx");

export default function ScreenshareParticipant(participant) {
  participant = participant.participant;
  const arg1 = participant;
  const onSingleTap = participant.onSingleTap;
  const importDefault = onSingleTap;
  const onDoubleTap = participant.onDoubleTap;
  const dependencyMap = onDoubleTap;
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
  const tmp4 = callback3();
  let obj = { gesture: importDefault(dependencyMap[5])({ onSingleTapStart: callback, onDoubleTapStart: callback1 }) };
  obj = { style: items2 };
  const items2 = [tmp4.container, participant.containerStyle];
  obj = { source: importDefault(dependencyMap[7]), style: tmp4.image };
  const items3 = [callback(closure_5, obj), , , ];
  const obj1 = { style: tmp4.title };
  const intl = arg1(dependencyMap[9]).intl;
  obj1.children = intl.string(arg1(dependencyMap[9]).t.gMOwov);
  items3[1] = callback(arg1(dependencyMap[8]).Text, obj1);
  const obj2 = { style: tmp4.description };
  const intl2 = arg1(dependencyMap[9]).intl;
  obj2.children = intl2.string(arg1(dependencyMap[9]).t.dKeLGt);
  items3[2] = callback(arg1(dependencyMap[8]).Text, obj2);
  const obj3 = { variant: "primary-overlay" };
  const intl3 = arg1(dependencyMap[9]).intl;
  obj3.text = intl3.string(arg1(dependencyMap[9]).t.CpkXwZ);
  obj3.onPress = arg1(dependencyMap[11]).stopScreenshare;
  items3[3] = callback(arg1(dependencyMap[10]).Button, obj3);
  obj.children = items3;
  obj.children = callback2(closure_4, obj);
  return callback(arg1(dependencyMap[6]).GestureDetector, obj);
};
