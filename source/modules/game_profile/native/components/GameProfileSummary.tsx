// Module ID: 8687
// Function ID: 68665
// Name: GameProfileSummary
// Dependencies: [57, 31, 27, 33, 4130, 8642, 1212, 4126, 2]
// Exports: default

// Module 8687 (GameProfileSummary)
import _slicedToArray from "_slicedToArray";
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_4;
let closure_5;
let closure_6;
let closure_7;
const require = arg1;
({ View: closure_4, Pressable: closure_5 } = get_ActivityIndicator);
({ jsx: closure_6, jsxs: closure_7 } = jsxProd);
let closure_8 = _createForOfIteratorHelperLoose.createStyles({ container: { flexDirection: "column" } });
const result = require("get ActivityIndicator").fileFinishedImporting("modules/game_profile/native/components/GameProfileSummary.tsx");

export default function GameProfileSummary(arg0) {
  let game;
  let trackAction;
  ({ game, trackAction } = arg0);
  const tmp2 = callback(first1.useState(false), 2);
  const first = tmp2[0];
  callback = tmp2[1];
  const tmp4 = callback(first1.useState(null), 2);
  first1 = tmp4[0];
  let closure_4 = tmp4[1];
  const items = [first1];
  const items1 = [first, trackAction];
  callback = first1.useCallback((nativeEvent) => {
    if (null == first1) {
      callback2(nativeEvent.nativeEvent.lines.length > 3);
    }
  }, items);
  let summaryLocalized;
  const callback1 = first1.useCallback(() => {
    const GameProfileTrackActionActions = trackAction(first[5]).GameProfileTrackActionActions;
    trackAction(!first ? GameProfileTrackActionActions.ShowMore : GameProfileTrackActionActions.ShowLess);
    callback(!first);
  }, items1);
  if (null != game) {
    summaryLocalized = game.summaryLocalized;
  }
  if (null == summaryLocalized) {
    let description;
    if (null != game) {
      description = game.description;
    }
    summaryLocalized = description;
  }
  if (null == summaryLocalized) {
    return null;
  } else {
    const intl = trackAction(first[6]).intl;
    const t = trackAction(first[6]).t;
    const stringResult = intl.string(first ? t["6MwJo/"] : t.lBeKY2);
    let obj = { style: tmp.container };
    obj = { variant: "text-md/normal", color: "interactive-text-active", lineClamp: num2, onTextLayout: callback, children: summaryLocalized };
    const items2 = [callback2(trackAction(first[7]).Text, obj), ];
    let tmp16 = null;
    if (first1) {
      obj = { onPress: callback1, accessibilityRole: "button", accessibilityLabel: stringResult };
      const obj1 = { variant: "text-md/medium", color: "text-brand", children: stringResult };
      obj.children = callback2(trackAction(first[7]).Text, obj1);
      tmp16 = callback2(closure_5, obj);
    }
    items2[1] = tmp16;
    obj.children = items2;
    return closure_7(closure_4, obj);
  }
  tmp = callback3();
};
