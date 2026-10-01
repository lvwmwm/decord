// Module ID: 8192
// Function ID: 8193
// Name: GameProfileSummary
// Dependencies: [32, 19, 17, 21, 4836, 8139, 1115, 4832, 2]
// Exports: default

// Module 8192 (GameProfileSummary)
import GameProfileAnalyticUtils from "GameProfileAnalyticUtils" /* 8139 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let _slicedToArray = _slicedToArray_mod;
({ View: closure_4, Pressable: hasOwnProperty } = react_native);
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let closure_8 = createStyles.createStyles({ container: { flexDirection: "column" } });
const result = size.fileFinishedImporting("modules/game_profile/native/components/GameProfileSummary.tsx");

export default function GameProfileSummary(arg0) {
  let closure_2;
  let closure_4;
  let first;
  let first1;
  let game;
  let items2;
  let obj4;
  let trackAction;
  ({ game, trackAction } = arg0);
  first = undefined;
  _slicedToArray = undefined;
  first1 = undefined;
  closure_4 = undefined;
  let tmp = closure_8();
  [first, _slicedToArray] = first1.useState(false);
  [first1, closure_4] = first1.useState(null);
  const items = [first1];
  const items1 = [first, trackAction];
  const callback = first1.useCallback((nativeEvent) => {
    if (null == first1) {
      closure_4(nativeEvent.nativeEvent.lines.length > 3);
    }
  }, items);
  let summaryLocalized;
  const callback1 = first1.useCallback(() => {
    const tmp = !first;
    const GameProfileTrackActionActions = GameProfileAnalyticUtils.GameProfileTrackActionActions;
    trackAction(first ? GameProfileTrackActionActions.ShowLess : GameProfileTrackActionActions.ShowMore);
    closure_2(tmp);
  }, items1);
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
  if (null == summaryLocalized) {
    return null;
  } else {
    const intl = trackAction(first[6]).intl;
    const string = intl.string;
    const t = trackAction(first[6]).t;
    const stringResult = string(first ? t["6MwJo/"] : t.lBeKY2);
    const obj = { style: tmp.container, children: items2 };
    const Text = tmp16(tmp17[7]).Text;
    const tmp11 = closure_7;
    const tmp12 = closure_4;
    const obj2 = { variant: "text-md/normal", color: "interactive-text-active", lineClamp: num, onTextLayout: callback, children: summaryLocalized };
    items2 = [closure_6(Text, obj2), ];
    let tmp13Result = null;
    if (first1) {
      const obj3 = { onPress: callback1, accessibilityRole: "button", accessibilityLabel: stringResult, children: closure_6(trackAction(first[7]).Text, obj4) };
      obj4 = { variant: "text-md/medium", color: "text-brand", children: stringResult };
      tmp13Result = tmp13(closure_5, obj3);
    }
    items2[1] = tmp13Result;
    return tmp11(tmp12, obj);
  }
};
