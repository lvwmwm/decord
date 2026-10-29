// Module ID: 11777
// Function ID: 11778
// Name: ScreenshareParticipant
// Dependencies: [19, 17, 6701, 1084, 21, 5005, 587, 558, 576, 11516, 504, 1125, 5271, 5281, 11688, 5334, 2]

// Module 11777 (ScreenshareParticipant)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1084 */;
import react from "react" /* 19 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 6701 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5005 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
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
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function ScreenshareParticipant(participant) {
  let items1;
  let onDoubleTap;
  const tmp = participant;
  const obj = participant(onDoubleTap[8]);
  const cResult = obj.c(32);
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
        const tmp8 = onSingleTap(onDoubleTap[9])(tmp6);
        const tmp10 = closure_9();
        const _Symbol = Symbol;
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
          let tmp16;
          let tmp17;
          if (cResult[12] === tmp10.container) {
            tmp16 = cResult[13];
          }
          if (cResult[14] !== stateFromStores) {
            const string = tmp(tmp2[11]).intl.string;
            const t = tmp(tmp2[11]).t;
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
            cResult[14] = stateFromStores;
            cResult[15] = tmp18;
            tmp17 = tmp18;
          } else {
            tmp17 = cResult[15];
          }
          if (cResult[16] === tmp10.title) {
            let tmp19;
            let tmp21;
            if (cResult[17] === tmp17) {
              tmp19 = cResult[18];
            }
            if (cResult[19] !== stateFromStores) {
              const string2 = tmp(tmp2[11]).intl.string;
              const t2 = tmp(tmp2[11]).t;
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
              cResult[19] = stateFromStores;
              cResult[20] = tmp22;
              tmp21 = tmp22;
            } else {
              tmp21 = cResult[20];
            }
            if (cResult[21] === tmp10.description) {
              let tmp23;
              if (cResult[22] === tmp21) {
                tmp23 = cResult[23];
              }
              const _Symbol2 = Symbol;
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
              if (cResult[25] === tmp23) {
                if (cResult[26] === tmp16) {
                  let tmp27;
                  if (cResult[27] === tmp19) {
                    tmp27 = cResult[28];
                  }
                  if (cResult[29] === tmp8) {
                    let tmp31;
                    if (cResult[30] === tmp27) {
                      tmp31 = cResult[31];
                    }
                    return tmp31;
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
                  tmp33[0] = tmp8;
                  tmp33[1] = tmp27;
                  const tmp34 = closure_7(tmp(onDoubleTap[15]).GestureDetector, tmp33);
                  cResult[29] = tmp8;
                  cResult[30] = tmp27;
                  cResult[31] = tmp34;
                  tmp31 = tmp34;
                }
              }
              const obj2 = { style: tmp16, children: items1 };
              items1 = [tmp19, tmp23, tmp26];
              const tmp30 = closure_8(View, obj2);
              cResult[25] = tmp23;
              cResult[26] = tmp16;
              cResult[27] = tmp19;
              cResult[28] = tmp30;
              tmp27 = tmp30;
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
            const obj3 = { style: tmp10.description, variant: "text-sm/medium", color: "interactive-text-default", children: tmp21 };
            const tmp24 = closure_7(tmp(onDoubleTap[12]).Text, obj3);
            cResult[21] = tmp10.description;
            cResult[22] = tmp21;
            cResult[23] = tmp24;
            tmp23 = tmp24;
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
          const obj4 = { style: tmp10.title, accessibilityRole: "header", variant: "heading-lg/extrabold", color: "mobile-text-heading-primary", children: tmp17 };
          const tmp20 = closure_7(tmp(onDoubleTap[12]).Text, obj4);
          cResult[16] = tmp10.title;
          cResult[17] = tmp17;
          cResult[18] = tmp20;
          tmp19 = tmp20;
        }
        const items2 = [tmp10.container, containerStyle];
        cResult[11] = containerStyle;
        cResult[12] = tmp10.container;
        cResult[13] = items2;
        tmp16 = items2;
      }
      const obj5 = { onSingleTapStart: null, onDoubleTapStart: tmp5 };
      cResult[6] = tmp5;
      cResult[7] = tmp4;
      cResult[8] = obj5;
      tmp6 = obj5;
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
  const GestureDetector = participant(onDoubleTap[15]).GestureDetector;
  const obj4 = { style: tmp5.title, accessibilityRole: "header", variant: "heading-lg/extrabold", color: "mobile-text-heading-primary", children: stringResult };
  const Text = participant(onDoubleTap[12]).Text;
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
  const Text2 = tmp6(tmp3[12]).Text;
  const intl2 = tmp6(tmp3[11]).intl;
  const string2 = intl2.string;
  const t2 = tmp6(tmp3[11]).t;
  if (stateFromStores) {
    string2Result = string2(t2.LV1NSN);
  } else {
    string2Result = string2(t2.dKeLGt);
  }
  items4[1] = closure_7(Text2, obj5);
  const obj6 = { variant: "primary-overlay", text: intl3.string(participant(onDoubleTap[11]).t.CpkXwZ), onPress: participant(onDoubleTap[14]).stopScreenshare };
  const Button = tmp6(tmp3[13]).Button;
  intl3 = tmp6(tmp3[11]).intl;
  items4[2] = closure_7(Button, obj6);
  return closure_7(GestureDetector, obj2);
});
const result = size.fileFinishedImporting("modules/video_calls/native/components/ScreenshareParticipant.tsx");

export default tmp3;
