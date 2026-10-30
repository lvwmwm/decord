// Module ID: 9382
// Function ID: 9383
// Name: GameProfileSummary
// Dependencies: [19, 17, 21, 5009, 9383, 9384, 1114, 5619, 9412, 2]
// Exports: default

// Module 9382 (GameProfileSummary)
import DEFAULT_MAX_HTML_LENGTH from "DEFAULT_MAX_HTML_LENGTH" /* 9384 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5009 */;
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
  let items1;
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
  let description;
  const tmp = closure_7();
  let obj = setHasOverflow(description[4]);
  const gameProfileSummaryExpansion = obj.useGameProfileSummaryExpansion(trackAction);
  ({ isExpanded, setHasOverflow } = gameProfileSummaryExpansion);
  description = game.summaryLocalized;
  ({ showToggle, toggleExpanded } = gameProfileSummaryExpansion);
  if (description == null) {
    description = game.description;
  }
  const items = [description];
  const memo = react.useMemo(() => {
    let parseHTMLFromTextResult;
    if (null != description) {
      const obj = DEFAULT_MAX_HTML_LENGTH;
      parseHTMLFromTextResult = obj.parseHTMLFromText(tmp, { parseTextLinks: true });
    } else {
      parseHTMLFromTextResult = [];
    }
    return parseHTMLFromTextResult;
  }, items);
  [][0] = setHasOverflow;
  if (0 === memo.length) {
    return null;
  } else {
    const intl = tmp2(tmp3[6]).intl;
    const string = intl.string;
    const t = tmp2(tmp3[6]).t;
    const stringResult = string(isExpanded ? t["6MwJo/"] : t.lBeKY2);
    let tmp9 = null;
    const obj2 = { style: tmp.container, children: items1 };
    const tmp7 = closure_6;
    if (!isExpanded) {
      const obj3 = { style: tmp.measurement, pointerEvents: "none", accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: closure_5(Text, obj4) };
      obj4 = { variant: "text-md/normal", color: "interactive-text-active", onTextLayout: tmp5, children: closure_5(setHasOverflow(description[8]).GameDescription, obj5) };
      Text = tmp2(tmp3[7]).Text;
      obj5 = { runs: memo, trackAction };
      tmp9 = closure_5(tmp8, obj3);
    }
    items1 = [tmp9, , ];
    const Text2 = tmp2(tmp3[7]).Text;
    const obj6 = { variant: "text-md/normal", color: "interactive-text-active", lineClamp: 3, children: closure_5(setHasOverflow(description[8]).GameDescription, obj7) };
    obj7 = { runs: memo, trackAction };
    items1[1] = closure_5(Text2, obj6);
    let tmp11Result = null;
    if (showToggle) {
      const obj8 = { onPress: toggleExpanded, accessibilityRole: "button", accessibilityLabel: stringResult, accessibilityState: obj9, children: closure_5(setHasOverflow(description[7]).Text, obj10) };
      obj10 = { variant: "text-md/medium", color: "text-brand", children: stringResult };
      obj9 = { expanded: isExpanded };
      tmp11Result = tmp11(closure_4, obj8);
    }
    items1[2] = tmp11Result;
    return tmp7(closure_3, obj2);
  }
};
