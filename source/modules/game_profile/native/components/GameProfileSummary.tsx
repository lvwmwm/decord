// Module ID: 8634
// Function ID: 68370
// Name: GameProfileSummary
// Dependencies: []
// Exports: default

// Module 8634 (GameProfileSummary)
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importAll(dependencyMap[1]);
({ View: closure_4, Pressable: closure_5 } = arg1(dependencyMap[2]));
const tmp2 = arg1(dependencyMap[2]);
({ jsx: closure_6, jsxs: closure_7 } = arg1(dependencyMap[3]));
const tmp3 = arg1(dependencyMap[3]);
let closure_8 = arg1(dependencyMap[4]).createStyles({ container: { flexDirection: "column" } });
const obj = arg1(dependencyMap[4]);
const result = arg1(dependencyMap[8]).fileFinishedImporting("modules/game_profile/native/components/GameProfileSummary.tsx");

export default function GameProfileSummary(arg0) {
  let game;
  let trackAction;
  ({ game, trackAction } = arg0);
  const arg1 = trackAction;
  const tmp2 = callback(React.useState(false), 2);
  const first = tmp2[0];
  const dependencyMap = first;
  let callback = tmp2[1];
  const tmp4 = callback(React.useState(null), 2);
  const first1 = tmp4[0];
  const React = first1;
  let closure_4 = tmp4[1];
  const items = [first1];
  const items1 = [first, trackAction];
  callback = React.useCallback((nativeEvent) => {
    if (null == first1) {
      callback2(nativeEvent.nativeEvent.lines.length > 3);
    }
  }, items);
  let summaryLocalized;
  const callback1 = React.useCallback(() => {
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
    const intl = arg1(dependencyMap[6]).intl;
    const t = arg1(dependencyMap[6]).t;
    const stringResult = intl.string(first ? t.6MwJo/ : t.lBeKY2);
    let obj = { style: tmp.container };
    obj = { lineClamp: num2, onTextLayout: callback, children: summaryLocalized };
    const items2 = [callback2(arg1(dependencyMap[7]).Text, obj), ];
    let tmp16 = null;
    if (first1) {
      obj = { onPress: callback1, accessibilityRole: "button", accessibilityLabel: stringResult };
      const obj1 = { children: stringResult };
      obj.children = callback2(arg1(dependencyMap[7]).Text, obj1);
      tmp16 = callback2(closure_5, obj);
    }
    items2[1] = tmp16;
    obj.children = items2;
    return closure_7(closure_4, obj);
  }
  const tmp = callback3();
};
