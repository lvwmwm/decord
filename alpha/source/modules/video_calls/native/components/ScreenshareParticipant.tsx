// Module ID: 10926
// Function ID: 10927
// Name: ScreenshareParticipant
// Dependencies: [19, 17, 21, 5090, 587, 558, 576, 10698, 10699, 1126, 5086, 5375, 10839, 6326, 2]

// Module 10926 (ScreenshareParticipant)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import components_Button_Button from "components/Button/Button" /* 5375 */;
import useParticipantTileTapGestureDefault from "useParticipantTileTapGesture" /* 10698 */;
import AssetRegistryDefault from "AssetRegistry" /* 10699 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5090 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let obj2;
let tmp;
const intl4 = tmp(1126);
const Text_Text = tmp(5086);
const LegacyBaseButton = tmp(6326);
const useScreenshareUtils = tmp(10839);
({ View: closure_4, Image: hasOwnProperty } = react_native);
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let obj = { container: obj2, image: { marginBottom: 12 }, title: { textAlign: "center", marginBottom: 8 }, description: { lineHeight: 18, textAlign: "center", marginBottom: 16 } };
obj2 = { alignItems: "center", justifyContent: "center", flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
let closure_8 = createStyles.createStyles(obj);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function ScreenshareParticipant(participant) {
  let intl;
  let items;
  const tmp = require;
  const obj = react2;
  const cResult = obj.c(29);
  participant = participant.participant;
  const onSingleTap = participant.onSingleTap;
  const onDoubleTap = participant.onDoubleTap;
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
        const tmp8 = importDefault;
        class S {
          constructor() {
            let tmpResult;
            if (onDoubleTap != null) {
              tmpResult = tmp(participant);
            }
            return tmpResult;
          }
        }
        const tmp11 = closure_8();
        if (cResult[9] === containerStyle) {
          let tmp12;
          let tmp13;
          let tmp18;
          let tmp20;
          let tmp23;
          let tmp25;
          let tmp28;
          if (cResult[10] === tmp11.container) {
            tmp12 = cResult[11];
          }
          if (cResult[12] !== tmp11.image) {
            class S {
              constructor() {
                let tmpResult;
                if (onDoubleTap != null) {
                  tmpResult = tmp(participant);
                }
                return tmpResult;
              }
            }
            tmp16[0] = tmp8(10699);
            tmp16[1] = tmp11.image;
            const tmp17 = metroRequire(hasOwnProperty, tmp16);
            cResult[12] = tmp11.image;
            cResult[13] = tmp17;
            tmp13 = tmp17;
          } else {
            tmp13 = cResult[13];
          }
          class S {
            constructor() {
              let tmpResult;
              if (onDoubleTap != null) {
                tmpResult = tmp(participant);
              }
              return tmpResult;
            }
          }
          const _Symbol = Symbol;
          const title = tmp11.title;
          if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
            const string = intl4.intl.string;
            class S {
              constructor() {
                let tmpResult;
                if (onDoubleTap != null) {
                  tmpResult = tmp(participant);
                }
                return tmpResult;
              }
            }
            cResult[14] = tmp19;
            tmp18 = tmp19;
          } else {
            tmp18 = cResult[14];
          }
          if (cResult[15] !== tmp11.title) {
            const obj2 = { style: null, accessibilityRole: "header", variant: "heading-lg/extrabold", color: "mobile-text-heading-primary", children: tmp18 };
            class S {
              constructor() {
                let tmpResult;
                if (onDoubleTap != null) {
                  tmpResult = tmp(participant);
                }
                return tmpResult;
              }
            }
            const tmp22 = metroRequire(Text_Text.Text, obj2);
            cResult[15] = tmp11.title;
            cResult[16] = tmp22;
            tmp20 = tmp22;
          } else {
            tmp20 = cResult[16];
          }
          const _Symbol2 = Symbol;
          const description = tmp11.description;
          if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
            const string2 = intl4.intl.string;
            class S {
              constructor() {
                let tmpResult;
                if (onDoubleTap != null) {
                  tmpResult = tmp(participant);
                }
                return tmpResult;
              }
            }
            cResult[17] = tmp24;
            tmp23 = tmp24;
          } else {
            tmp23 = cResult[17];
          }
          if (cResult[18] !== tmp11.description) {
            const obj3 = { style: null, variant: "text-sm/medium", color: "interactive-text-default", children: tmp23 };
            class S {
              constructor() {
                let tmpResult;
                if (onDoubleTap != null) {
                  tmpResult = tmp(participant);
                }
                return tmpResult;
              }
            }
            const tmp27 = metroRequire(Text_Text.Text, obj3);
            cResult[18] = tmp11.description;
            cResult[19] = tmp27;
            tmp25 = tmp27;
          } else {
            tmp25 = cResult[19];
          }
          const _Symbol3 = Symbol;
          if (cResult[20] === Symbol.for("react.memo_cache_sentinel")) {
            const obj4 = { variant: "primary-overlay", text: intl.string(intl4.t.CpkXwZ), onPress: useScreenshareUtils.stopScreenshare };
            class S {
              constructor() {
                let tmpResult;
                if (onDoubleTap != null) {
                  tmpResult = tmp(participant);
                }
                return tmpResult;
              }
            }
            intl = intl4.intl;
            const tmp31 = metroRequire(tmp30, obj4);
            cResult[20] = tmp31;
            tmp28 = tmp31;
          } else {
            tmp28 = cResult[20];
          }
          if (cResult[21] === tmp25) {
            if (cResult[22] === tmp12) {
              if (cResult[23] === tmp13) {
                let tmp32;
                if (cResult[24] === tmp20) {
                  tmp32 = cResult[25];
                }
                if (cResult[26] === tmp9) {
                  let tmp36;
                  if (cResult[27] === tmp32) {
                    tmp36 = cResult[28];
                  }
                  return tmp36;
                }
                class S {
                  constructor() {
                    let tmpResult;
                    if (onDoubleTap != null) {
                      tmpResult = tmp(participant);
                    }
                    return tmpResult;
                  }
                }
                const obj5 = { gesture: tmp9, children: tmp32 };
                const tmp37 = metroRequire(LegacyBaseButton.GestureDetector, obj5);
                cResult[26] = tmp9;
                cResult[27] = tmp32;
                cResult[28] = tmp37;
                tmp36 = tmp37;
              }
            }
          }
          const obj6 = { style: tmp12, children: items };
          items = [tmp13, tmp20, tmp25, tmp28];
          const tmp35 = metroImportDefault(React3, obj6);
          cResult[21] = tmp25;
          cResult[22] = tmp12;
          cResult[23] = tmp13;
          cResult[24] = tmp20;
          cResult[25] = tmp35;
          tmp32 = tmp35;
        }
        const items1 = [tmp11.container, containerStyle];
        cResult[9] = containerStyle;
        cResult[10] = tmp11.container;
        cResult[11] = items1;
        tmp12 = items1;
      }
      class S {
        constructor() {
          let tmpResult;
          if (onDoubleTap != null) {
            tmpResult = tmp(participant);
          }
          return tmpResult;
        }
      }
      tmp7[0] = tmp4;
      tmp7[1] = tmp5;
      cResult[6] = tmp5;
      cResult[7] = tmp4;
      cResult[8] = tmp7;
    }
    class S {
      constructor() {
        let tmpResult;
        if (onDoubleTap != null) {
          tmpResult = tmp(participant);
        }
        return tmpResult;
      }
    }
    cResult[3] = onDoubleTap;
    cResult[4] = participant;
    cResult[5] = S;
    tmp5 = S;
  }
  const fn = function n() {
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
  let intl;
  let intl2;
  let intl3;
  let items2;
  let items3;
  let obj2;
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
  const tmp3 = useParticipantTileTapGestureDefault({ onSingleTapStart: callback, onDoubleTapStart: callback1 });
  const tmp4 = closure_8();
  const obj = { gesture: tmp3, children: metroImportDefault(React3, obj2) };
  obj2 = { style: items2, children: items3 };
  items2 = [tmp4.container, containerStyle];
  const obj3 = { source: AssetRegistryDefault, style: tmp4.image };
  const GestureDetector = LegacyBaseButton.GestureDetector;
  items3 = [metroRequire(hasOwnProperty, obj3), , , ];
  const obj4 = { style: tmp4.title, accessibilityRole: "header", variant: "heading-lg/extrabold", color: "mobile-text-heading-primary", children: intl.string(intl4.t.gMOwov) };
  const Text = Text_Text.Text;
  intl = intl4.intl;
  items3[1] = metroRequire(Text, obj4);
  const obj5 = { style: tmp4.description, variant: "text-sm/medium", color: "interactive-text-default", children: intl2.string(intl4.t.dKeLGt) };
  const Text2 = Text_Text.Text;
  intl2 = intl4.intl;
  items3[2] = metroRequire(Text2, obj5);
  const obj6 = { variant: "primary-overlay", text: intl3.string(intl4.t.CpkXwZ), onPress: useScreenshareUtils.stopScreenshare };
  const Button = components_Button_Button.Button;
  intl3 = intl4.intl;
  items3[3] = metroRequire(Button, obj6);
  return metroRequire(GestureDetector, obj);
});
const result = size.fileFinishedImporting("modules/video_calls/native/components/ScreenshareParticipant.tsx");

export default tmp4;
