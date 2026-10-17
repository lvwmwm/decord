// Module ID: 11511
// Function ID: 11512
// Name: ScreenshareParticipant
// Dependencies: [19, 17, 6153, 1087, 21, 5191, 587, 558, 576, 11259, 504, 5128, 11260, 1128, 5187, 5479, 11422, 6612, 2]

// Module 11511 (ScreenshareParticipant)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1087 */;
import react from "react" /* 19 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 6153 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5191 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let currentUserActiveStream;

let metroImportAll;
let metroImportDefault;
let obj2;
const View = react_native.View;
const ApplicationStreamStates = Constants.ApplicationStreamStates;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let obj = { container: obj2, image: { marginBottom: 12 }, title: { textAlign: "center", marginBottom: 8 }, description: { lineHeight: 18, textAlign: "center", marginBottom: 16 } };
obj2 = { alignItems: "center", justifyContent: "center", flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
let closure_9 = createStyles.createStyles(obj);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function ScreenshareParticipant(participant) {
  let onDoubleTap;
  const tmp = participant;
  const obj = participant(onDoubleTap[8]);
  const cResult = obj.c(35);
  participant = participant.participant;
  const onSingleTap = participant.onSingleTap;
  onDoubleTap = participant.onDoubleTap;
  const containerStyle = participant.containerStyle;
  if (cResult[0] === onSingleTap) {
    let tmp4;
    if (cResult[1] === participant) {
      tmp4 = cResult[2];
    }
    if (cResult[3] === onDoubleTap) {
      let tmp5;
      if (cResult[4] === participant) {
        tmp5 = cResult[5];
      }
      if (cResult[6] === tmp5) {
        let tmp6;
        let tmp13;
        let tmp12;
        if (cResult[7] === tmp4) {
          tmp6 = cResult[8];
        }
        onSingleTap(onDoubleTap[9])(tmp6);
        const tmp10 = closure_9();
        const _Symbol = Symbol;
        const tmp7 = onSingleTap;
        if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
          const items = [ApplicationStreamingStore];
          class A {
            constructor() {
              currentUserActiveStream = currentUserActiveStream.getCurrentUserActiveStream();
              let state;
              if (currentUserActiveStream != null) {
                state = currentUserActiveStream.state;
              }
              return state === constants.PAUSED;
            }
          }
          cResult[9] = items;
          cResult[10] = A;
          tmp13 = A;
          tmp12 = items;
        } else {
          tmp12 = cResult[9];
          tmp13 = cResult[10];
        }
        let tmpResult = tmp(tmp2[10]);
        const stateFromStores = tmpResult.useStateFromStores(tmp12, tmp13);
        if (cResult[11] === containerStyle) {
          let tmp21;
          if (cResult[14] !== tmp10.image) {
            const obj2 = { source: null, style: tmp10.image };
            const tmp7Result = tmp7(onDoubleTap[11]);
            class A {
              constructor() {
                currentUserActiveStream = currentUserActiveStream.getCurrentUserActiveStream();
                let state;
                if (currentUserActiveStream != null) {
                  state = currentUserActiveStream.state;
                }
                return state === constants.PAUSED;
              }
            }
            cResult[14] = tmp10.image;
            cResult[15] = closure_7(tmp7Result, obj2);
            const tmp20 = closure_7(tmp7Result, obj2);
          }
          if (cResult[16] !== stateFromStores) {
            const string = tmp(tmp2[13]).intl.string;
            const t = tmp(tmp2[13]).t;
            class A {
              constructor() {
                currentUserActiveStream = currentUserActiveStream.getCurrentUserActiveStream();
                let state;
                if (currentUserActiveStream != null) {
                  state = currentUserActiveStream.state;
                }
                return state === constants.PAUSED;
              }
            }
            cResult[16] = stateFromStores;
            cResult[17] = tmp22;
            tmp21 = tmp22;
          } else {
            tmp21 = cResult[17];
          }
          class A {
            constructor() {
              currentUserActiveStream = currentUserActiveStream.getCurrentUserActiveStream();
              let state;
              if (currentUserActiveStream != null) {
                state = currentUserActiveStream.state;
              }
              return state === constants.PAUSED;
            }
          }
          const obj3 = { style: tmp10.title, accessibilityRole: "header", variant: "heading-lg/extrabold", color: "mobile-text-heading-primary", children: tmp21 };
          cResult[18] = tmp10.title;
          cResult[19] = tmp21;
          cResult[20] = closure_7(tmp(onDoubleTap[14]).Text, obj3);
          const tmp25 = closure_7(tmp(onDoubleTap[14]).Text, obj3);
        }
        const items1 = [tmp10.container, containerStyle];
        cResult[11] = containerStyle;
        cResult[12] = tmp10.container;
        cResult[13] = items1;
      }
      const obj4 = { onSingleTapStart: null, onDoubleTapStart: tmp5 };
      cResult[6] = tmp5;
      cResult[7] = tmp4;
      cResult[8] = obj4;
      tmp6 = obj4;
    }
    const fn2 = function b() {
      let tmpResult;
      if (onDoubleTap != null) {
        tmpResult = tmp(participant);
      }
      return tmpResult;
    };
    cResult[3] = onDoubleTap;
    cResult[4] = participant;
    cResult[5] = fn2;
    tmp5 = fn2;
  }
  const fn = function s() {
    let tmpResult;
    if (onSingleTap != null) {
      tmpResult = tmp(participant);
    }
    return tmpResult;
  };
  cResult[0] = onSingleTap;
  cResult[1] = participant;
  cResult[2] = fn;
  tmp4 = fn;
}) : (function ScreenshareParticipant(participant) {
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
  const tmp4 = onSingleTap(onDoubleTap[9])({ onSingleTapStart: callback, onDoubleTapStart: callback1 });
  const tmp5 = closure_9();
  const items2 = [ApplicationStreamingStore];
  const obj = participant(onDoubleTap[10]);
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
  const GestureDetector = participant(onDoubleTap[17]).GestureDetector;
  const obj4 = { source: onSingleTap(onDoubleTap[12]), style: tmp5.image };
  const tmp11 = onSingleTap(onDoubleTap[11]);
  items4 = [closure_7(tmp11, obj4), , , ];
  const obj5 = { style: tmp5.title, accessibilityRole: "header", variant: "heading-lg/extrabold", color: "mobile-text-heading-primary", children: stringResult };
  const Text = participant(onDoubleTap[14]).Text;
  const intl = participant(onDoubleTap[13]).intl;
  const string = intl.string;
  const t = participant(onDoubleTap[13]).t;
  tmp10 = View;
  tmp9 = closure_8;
  if (stateFromStores) {
    stringResult = string(t["5q17w5"]);
  } else {
    stringResult = string(t.gMOwov);
  }
  items4[1] = closure_7(Text, obj5);
  const obj6 = { style: tmp5.description, variant: "text-sm/medium", color: "interactive-text-default", children: string2Result };
  const Text2 = tmp6(tmp3[14]).Text;
  const intl2 = tmp6(tmp3[13]).intl;
  const string2 = intl2.string;
  const t2 = tmp6(tmp3[13]).t;
  if (stateFromStores) {
    string2Result = string2(t2.LV1NSN);
  } else {
    string2Result = string2(t2.dKeLGt);
  }
  items4[2] = closure_7(Text2, obj6);
  const obj7 = { variant: "primary-overlay", text: intl3.string(participant(onDoubleTap[13]).t.CpkXwZ), onPress: participant(onDoubleTap[16]).stopScreenshare };
  const Button = tmp6(tmp3[15]).Button;
  intl3 = tmp6(tmp3[13]).intl;
  items4[3] = closure_7(Button, obj7);
  return closure_7(GestureDetector, obj2);
});
const result = size.fileFinishedImporting("modules/video_calls/native/components/ScreenshareParticipant.tsx");

export default tmp3;
