// Module ID: 9368
// Function ID: 9369
// Name: GameProfileSummary
// Dependencies: [32, 19, 17, 21, 5005, 558, 576, 9369, 9282, 1125, 5271, 9395, 2]

// Module 9368 (GameProfileSummary)
import GameProfileAnalyticUtils from "GameProfileAnalyticUtils" /* 9282 */;
import DEFAULT_MAX_HTML_LENGTH from "DEFAULT_MAX_HTML_LENGTH" /* 9369 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5005 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
({ View: closure_4, Pressable: hasOwnProperty } = react_native);
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let closure_8 = createStyles.createStyles({ container: { flexDirection: "column", overflow: "hidden" }, measurement: { position: "absolute", top: 0, left: 0, right: 0, opacity: 0 } });
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function GameProfileSummary(arg0) {
  let Text;
  let arr;
  let closure_2;
  let expanded;
  let game;
  let items;
  let obj10;
  let obj5;
  let obj6;
  let obj9;
  let tmp11;
  let tmp8;
  let trackAction;
  let tmp = trackAction;
  const obj = trackAction(expanded[6]);
  const cResult = obj.c(27);
  ({ game, trackAction } = arg0);
  const tmp4 = closure_8();
  [expanded, _slicedToArray] = react.useState(false);
  const tmp7 = _slicedToArray(react.useState(false), 2);
  [tmp8, react] = tmp7;
  let summaryLocalized;
  if (game != null) {
    summaryLocalized = game.summaryLocalized;
  }
  if (summaryLocalized == null) {
    let description;
    if (game != null) {
      description = game.description;
    }
    summaryLocalized = description;
  }
  if (cResult[0] !== summaryLocalized) {
    let parseHTMLFromTextResult;
    if (null != summaryLocalized) {
      const tmpResult = tmp(expanded[7]);
      parseHTMLFromTextResult = tmpResult.parseHTMLFromText(summaryLocalized);
    } else {
      parseHTMLFromTextResult = [];
    }
    cResult[0] = summaryLocalized;
    cResult[1] = parseHTMLFromTextResult;
    arr = parseHTMLFromTextResult;
  } else {
    arr = cResult[1];
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function w(nativeEvent) {
      react(nativeEvent.nativeEvent.lines.length > 3);
    };
    cResult[2] = fn;
    tmp11 = fn;
  } else {
    tmp11 = cResult[2];
  }
  if (cResult[3] === expanded) {
    let tmp12;
    if (cResult[4] === trackAction) {
      tmp12 = cResult[5];
    }
    if (0 === arr.length) {
      return null;
    } else {
      let tmp13;
      if (cResult[6] !== expanded) {
        const intl = tmp(tmp2[9]).intl;
        const string = intl.string;
        const t = tmp(tmp2[9]).t;
        const stringResult = string(expanded ? t["6MwJo/"] : t.lBeKY2);
        cResult[6] = expanded;
        cResult[7] = stringResult;
        tmp13 = stringResult;
      } else {
        tmp13 = cResult[7];
      }
      if (cResult[8] === arr) {
        if (cResult[9] === expanded) {
          let tmp15;
          let tmp19;
          if (cResult[10] === tmp4.measurement) {
            tmp15 = cResult[11];
          }
          if (cResult[12] !== arr) {
            const obj2 = { runs: arr };
            const tmp21 = closure_6(tmp(expanded[11]).GameDescription, obj2);
            cResult[12] = arr;
            cResult[13] = tmp21;
            tmp19 = tmp21;
          } else {
            tmp19 = cResult[13];
          }
          if (cResult[14] === 3) {
            let tmp22;
            if (cResult[15] === tmp19) {
              tmp22 = cResult[16];
            }
            if (cResult[17] === tmp13) {
              if (cResult[18] === expanded) {
                if (cResult[19] === tmp12) {
                  let tmp25;
                  if (cResult[20] === tmp8) {
                    tmp25 = cResult[21];
                  }
                  if (cResult[22] === tmp4.container) {
                    if (cResult[23] === tmp15) {
                      if (cResult[24] === tmp22) {
                        let tmp29;
                        if (cResult[25] === tmp25) {
                          tmp29 = cResult[26];
                        }
                        return tmp29;
                      }
                    }
                  }
                  const obj3 = { style: tmp4.container, children: items };
                  items = [tmp15, tmp22, tmp25];
                  const tmp32 = closure_7(closure_4, obj3);
                  cResult[22] = tmp4.container;
                  cResult[23] = tmp15;
                  cResult[24] = tmp22;
                  cResult[25] = tmp25;
                  cResult[26] = tmp32;
                  tmp29 = tmp32;
                }
              }
            }
            let tmp26 = null;
            if (tmp8) {
              const obj4 = { onPress: tmp12, accessibilityRole: "button", accessibilityLabel: tmp13, accessibilityState: obj5, children: closure_6(tmp(expanded[10]).Text, obj6) };
              obj5 = { expanded };
              obj6 = { variant: "text-md/medium", color: "text-brand", children: tmp13 };
              tmp26 = closure_6(closure_5, obj4);
            }
            cResult[17] = tmp13;
            cResult[18] = expanded;
            cResult[19] = tmp12;
            cResult[20] = tmp8;
            cResult[21] = tmp26;
            tmp25 = tmp26;
          }
          const obj7 = { variant: "text-md/normal", color: "interactive-text-active", lineClamp: 3, children: tmp19 };
          const tmp24 = closure_6(tmp(expanded[10]).Text, obj7);
          cResult[14] = 3;
          cResult[15] = tmp19;
          cResult[16] = tmp24;
          tmp22 = tmp24;
        }
      }
      let tmp16 = null;
      if (!expanded) {
        const obj8 = { style: tmp4.measurement, pointerEvents: "none", accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: closure_6(Text, obj9) };
        obj9 = { variant: "text-md/normal", color: "interactive-text-active", onTextLayout: tmp11, children: closure_6(tmp(expanded[11]).GameDescription, obj10) };
        Text = tmp(tmp2[10]).Text;
        obj10 = { runs: arr };
        tmp16 = closure_6(closure_4, obj8);
      }
      cResult[8] = arr;
      cResult[9] = expanded;
      cResult[10] = tmp4.measurement;
      cResult[11] = tmp16;
      tmp15 = tmp16;
    }
  }
  class E {
    constructor() {
      const tmp = !first;
      const GameProfileTrackActionActions = GameProfileAnalyticUtils.GameProfileTrackActionActions;
      trackAction(first ? GameProfileTrackActionActions.ShowLess : GameProfileTrackActionActions.ShowMore);
      closure_2(tmp);
    }
  }
  cResult[3] = expanded;
  cResult[4] = trackAction;
  cResult[5] = E;
  tmp12 = E;
}) : (function GameProfileSummary(arg0) {
  let Text;
  let closure_2;
  let closure_3;
  let expanded;
  let first1;
  let game;
  let items2;
  let obj10;
  let obj4;
  let obj5;
  let obj7;
  let obj9;
  let trackAction;
  ({ game, trackAction } = arg0);
  expanded = undefined;
  _slicedToArray = undefined;
  react = undefined;
  let tmp = closure_8();
  let obj = react;
  [expanded, _slicedToArray] = react.useState(false);
  [first1, react] = react.useState(false);
  let summaryLocalized;
  if (game != null) {
    summaryLocalized = game.summaryLocalized;
  }
  if (summaryLocalized == null) {
    let description;
    if (game != null) {
      description = game.description;
    }
    summaryLocalized = description;
  }
  const items = [summaryLocalized];
  const memo = obj.useMemo(() => {
    let parseHTMLFromTextResult;
    if (null != summaryLocalized) {
      const obj = DEFAULT_MAX_HTML_LENGTH;
      parseHTMLFromTextResult = obj.parseHTMLFromText(tmp);
    } else {
      parseHTMLFromTextResult = [];
    }
    return parseHTMLFromTextResult;
  }, items);
  const items1 = [expanded, trackAction];
  const callback = obj.useCallback((nativeEvent) => {
    closure_3(nativeEvent.nativeEvent.lines.length > 3);
  }, []);
  if (0 === memo.length) {
    return null;
  } else {
    const intl = trackAction(expanded[9]).intl;
    const string = intl.string;
    const t = trackAction(expanded[9]).t;
    const stringResult = string(expanded ? t["6MwJo/"] : t.lBeKY2);
    let tmp13 = null;
    const obj2 = { style: tmp.container, children: items2 };
    const tmp11 = closure_7;
    if (!expanded) {
      const obj3 = { style: tmp.measurement, pointerEvents: "none", accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: closure_6(Text, obj4) };
      obj4 = { variant: "text-md/normal", color: "interactive-text-active", onTextLayout: callback, children: closure_6(trackAction(expanded[11]).GameDescription, obj5) };
      Text = tmp18(tmp19[10]).Text;
      obj5 = { runs: memo };
      tmp13 = closure_6(tmp12, obj3);
    }
    items2 = [tmp13, , ];
    const Text2 = tmp18(tmp19[10]).Text;
    const obj6 = { variant: "text-md/normal", color: "interactive-text-active", lineClamp: 3, children: closure_6(trackAction(expanded[11]).GameDescription, obj7) };
    obj7 = { runs: memo };
    items2[1] = closure_6(Text2, obj6);
    let tmp15Result = null;
    if (first1) {
      const obj8 = { onPress: tmp9, accessibilityRole: "button", accessibilityLabel: stringResult, accessibilityState: obj9, children: closure_6(trackAction(expanded[10]).Text, obj10) };
      obj10 = { variant: "text-md/medium", color: "text-brand", children: stringResult };
      obj9 = { expanded };
      tmp15Result = tmp15(closure_5, obj8);
    }
    items2[2] = tmp15Result;
    return tmp11(summaryLocalized, obj2);
  }
});
const result = size.fileFinishedImporting("modules/game_profile/native/components/GameProfileSummary.tsx");

export default tmp4;
