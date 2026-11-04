// Module ID: 9402
// Function ID: 9403
// Name: GameProfileSummary
// Dependencies: [19, 17, 21, 5014, 9403, 9404, 9340, 1113, 5624, 9432, 2]
// Exports: default

// Module 9402 (GameProfileSummary)
import GameProfileAnalyticUtils from "GameProfileAnalyticUtils" /* 9340 */;
import DEFAULT_MAX_HTML_LENGTH from "DEFAULT_MAX_HTML_LENGTH" /* 9404 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
let hasOwnProperty;
let metroRequire;
({ View: c3, Pressable: closure_4 } = react_native);
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let closure_7 = createStyles.createStyles({ container: { flexDirection: "column", overflow: "hidden" }, measurement: { position: "absolute", top: 0, left: 0, right: 0, opacity: 0 } });
const result = size.fileFinishedImporting("modules/game_profile/native/components/GameProfileSummary.tsx");

export default function GameProfileSummary(arg0) {
  let Text;
  let game;
  let isExpanded;
  let items2;
  let obj10;
  let obj4;
  let obj5;
  let obj7;
  let obj9;
  let setHasOverflow;
  let showToggle;
  let toggleExpanded;
  let trackAction;
  ({ game, trackAction } = arg0);
  setHasOverflow = undefined;
  const tmp = closure_7();
  let obj = trackAction(setHasOverflow[4]);
  const gameProfileSummaryExpansion = obj.useGameProfileSummaryExpansion(trackAction);
  ({ isExpanded, setHasOverflow } = gameProfileSummaryExpansion);
  let description = game.summaryLocalized;
  ({ showToggle, toggleExpanded } = gameProfileSummaryExpansion);
  if (description == null) {
    description = game.description;
  }
  const items = [description];
  const memo = description.useMemo(() => {
    let parseHTMLFromTextResult;
    if (null != description) {
      const obj = DEFAULT_MAX_HTML_LENGTH;
      parseHTMLFromTextResult = obj.parseHTMLFromText(tmp, { parseTextLinks: true });
    } else {
      parseHTMLFromTextResult = [];
    }
    return parseHTMLFromTextResult;
  }, items);
  const items1 = [trackAction];
  const callback = description.useCallback(() => {
    trackAction(GameProfileAnalyticUtils.GameProfileTrackActionActions.ClickDescriptionLink);
  }, items1);
  [][0] = setHasOverflow;
  if (0 === memo.length) {
    return null;
  } else {
    const intl = tmp2(tmp3[7]).intl;
    const string = intl.string;
    const t = tmp2(tmp3[7]).t;
    const stringResult = string(isExpanded ? t["6MwJo/"] : t.lBeKY2);
    let tmp10 = null;
    const obj2 = { style: tmp.container, children: items2 };
    const tmp8 = closure_6;
    if (!isExpanded) {
      const obj3 = { style: tmp.measurement, pointerEvents: "none", accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: closure_5(Text, obj4) };
      obj4 = { variant: "text-md/normal", color: "interactive-text-active", onTextLayout: tmp6, children: closure_5(trackAction(setHasOverflow[9]).HTMLText, obj5) };
      Text = tmp2(tmp3[8]).Text;
      obj5 = { runs: memo, onLinkPress: callback };
      tmp10 = closure_5(tmp9, obj3);
    }
    items2 = [tmp10, , ];
    const Text2 = tmp2(tmp3[8]).Text;
    const obj6 = { variant: "text-md/normal", color: "interactive-text-active", lineClamp: 3, children: closure_5(trackAction(setHasOverflow[9]).HTMLText, obj7) };
    obj7 = { runs: memo, onLinkPress: callback };
    items2[1] = closure_5(Text2, obj6);
    let tmp12Result = null;
    if (showToggle) {
      const obj8 = { onPress: toggleExpanded, accessibilityRole: "button", accessibilityLabel: stringResult, accessibilityState: obj9, children: closure_5(trackAction(setHasOverflow[8]).Text, obj10) };
      obj10 = { variant: "text-md/medium", color: "text-brand", children: stringResult };
      obj9 = { expanded: isExpanded };
      tmp12Result = tmp12(closure_4, obj8);
    }
    items2[2] = tmp12Result;
    return tmp8(closure_3, obj2);
  }
};
