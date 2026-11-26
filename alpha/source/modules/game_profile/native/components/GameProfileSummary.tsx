// Module ID: 14183
// Function ID: 14184
// Name: GameProfileSummary
// Dependencies: [32, 19, 17, 21, 5043, 14184, 9950, 5649, 14185, 8754, 1112, 5634, 9978, 2]
// Exports: default

// Module 14183 (GameProfileSummary)
import GameProfileAnalyticUtils from "GameProfileAnalyticUtils" /* 8754 */;
import DEFAULT_MAX_HTML_LENGTH from "DEFAULT_MAX_HTML_LENGTH" /* 9950 */;
import GameProfileSummaryUtils from "GameProfileSummaryUtils" /* 14185 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5043 */;
import size_mod from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
({ View: closure_4, Pressable: hasOwnProperty } = react_native);
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let closure_8 = createStyles.createStyles({ container: { flexDirection: "column", overflow: "hidden" }, measurement: { position: "absolute", top: 0, left: 0, right: 0, opacity: 0 } });
let size = size_mod;
let result = size.fileFinishedImporting("modules/game_profile/native/components/GameProfileSummary.tsx");

export default function GameProfileSummary(arg0) {
  let Text;
  let Text2;
  let Text3;
  let game;
  let isExpanded;
  let items10;
  let obj11;
  let obj12;
  let obj14;
  let obj15;
  let obj5;
  let obj6;
  let obj8;
  let obj9;
  let showToggle;
  let str3;
  let str4;
  let sum;
  let tmp21;
  let trackAction;
  ({ game, trackAction } = arg0);
  showToggle = undefined;
  let memo;
  let memo1;
  let memo2;
  let fontScale;
  let width;
  let closure_9;
  let closure_11;
  let first1;
  let candidate;
  let tmp = width();
  let tmp2 = trackAction;
  const tmp3 = showToggle;
  let obj = trackAction(showToggle[5]);
  const gameProfileSummaryExpansion = obj.useGameProfileSummaryExpansion(trackAction);
  ({ isExpanded, showToggle } = gameProfileSummaryExpansion);
  let setHasOverflow = gameProfileSummaryExpansion.setHasOverflow;
  let description = game.summaryLocalized;
  const toggleExpanded = gameProfileSummaryExpansion.toggleExpanded;
  if (description == null) {
    description = game.description;
  }
  let obj2 = description;
  let items = [description];
  memo = description.useMemo(() => {
    let parseHTMLFromTextResult;
    if (null != description) {
      const obj = DEFAULT_MAX_HTML_LENGTH;
      parseHTMLFromTextResult = obj.parseHTMLFromText(tmp, { parseTextLinks: true });
    } else {
      parseHTMLFromTextResult = [];
    }
    return parseHTMLFromTextResult;
  }, items);
  const items1 = [memo];
  memo1 = description.useMemo(() => {
    const mapped = memo.map((text) => text.text);
    return mapped.join("");
  }, items1);
  const items2 = [memo];
  memo2 = description.useMemo(() => {
    const mapped = memo.map((text) => {
      const items = [text.text.length, "" + +text.bold + +text.italic + +text.underline, , ];
      let str = text.heading;
      if (str == null) {
        str = "";
      }
      items[2] = str;
      items[3] = null != text.link;
      return items.join(":");
    });
    return mapped.join("|");
  }, items2);
  const items3 = [memo1, memo2];
  const memo3 = description.useMemo(() => {
    let num = 0;
    const sum = memo1 + memo2;
    const iter = sum[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let _Math = Math;
      let imulResult = Math.imul(num, 31);
      num = imulResult + nextResult.charCodeAt(0) | 0;
      continue;
    }
    return num;
  }, items3);
  const tmp2Result = tmp2(tmp3[7]);
  fontScale = tmp2Result.useFontScale();
  const tmp9 = setHasOverflow(description.useState(0), 2);
  width = tmp9[0];
  closure_9 = tmp9[1];
  const items4 = [width];
  const callback = description.useCallback((nativeEvent) => {
    const rounded = Math.round(nativeEvent.nativeEvent.layout.width);
    if (rounded !== first) {
      closure_9(rounded);
    }
  }, items4);
  const tmp12 = setHasOverflow(description.useState(), 2);
  first1 = tmp12[0];
  closure_11 = tmp12[1];
  let text;
  if (first1 != null) {
    text = first1.text;
  }
  let tmp15;
  if (text === memo1) {
    if (first1.formatting === memo2) {
      if (first1.width === width) {
        if (first1.fontScale === fontScale) {
          tmp15 = first1;
        }
      }
    }
  }
  first1 = tmp15;
  candidate = undefined;
  if (tmp15 != null) {
    candidate = tmp15.candidate;
  }
  const items5 = [memo, candidate];
  const memo4 = obj2.useMemo(() => {
    let truncateSummaryRunsResult;
    if (null != candidate) {
      const obj = GameProfileSummaryUtils;
      truncateSummaryRunsResult = obj.truncateSummaryRuns(memo, tmp.end);
    } else {
      truncateSummaryRunsResult = [];
    }
    return truncateSummaryRunsResult;
  }, items5);
  if (!isExpanded) {
    if (null != tmp15) {
      if (null == candidate) {
        const lines = tmp15.lines;
        let num = 3;
        let substr = lines.slice(0, 3);
        let mapped = substr.map((text) => text.text);
        let str = "";
        const joined = mapped.join("");
        const trimEndResult = joined.trimEnd();
        sum = trimEndResult + tmp2(tmp3[8]).SUMMARY_ELLIPSIS;
      }
    }
  }
  if (isExpanded) {
    tmp21 = memo;
  } else {
    let fitted;
    if (candidate != null) {
      fitted = candidate.fitted;
    }
    tmp21 = memo4;
  }
  const items6 = [trackAction];
  const callback1 = obj2.useCallback(() => {
    trackAction(GameProfileAnalyticUtils.GameProfileTrackActionActions.ClickDescriptionLink);
  }, items6);
  const items7 = [memo1, memo2, width, fontScale, setHasOverflow, tmp15, first1, showToggle];
  const items8 = [candidate, tmp15, memo1];
  const callback2 = obj2.useCallback((nativeEvent) => {
    let closure_2;
    let lines;
    if (first > 0) {
      const items = [];
      HermesBuiltin.arraySpread(items, nativeEvent.nativeEvent.lines, 0);
      if (items.length > 0) {
        const str = items[items.length - 1].text;
        if (0 === str.trim().length) {
          items.pop();
          while (items.length > 0) {
            let str2 = items[items.length - 1].text;
            if (0 !== str2.trim().length) {
              break;
            }
          }
        }
      }
      let closure_0 = tmp3;
      const substr = items.slice(0, 3);
      if (items.length > 3) {
        let tmp5 = null;
      }
      setHasOverflow(items.length > 3);
      const tmp11 = trackAction;
      const obj = trackAction(showToggle[8]);
      let tmp13 = memo1;
      setHasOverflow = obj.getSummaryLineEnd(memo1, substr);
      closure_11((arg0) => {
        let tmp13;
        let tmp = arg0;
        closure_0 = arg0;
        if (closure_0) {
          if (tmp === first1) {
            if (null != tmp) {
              return tmp;
            }
          }
        }
        let tmp5;
        if (closure_0) {
          const obj2 = { text: memo1, formatting: memo2, width, fontScale, lines: substr, candidate: tmp13 };
          tmp13 = undefined;
          if (null != closure_2) {
            const obj3 = { fitted: false };
            const merged = Object.assign(tmp11);
            tmp13 = obj3;
          }
          tmp5 = obj2;
        }
        tmp = tmp5;
      });
    }
  }, items7);
  if (0 === memo.length) {
    return null;
  } else {
    const intl = tmp2(tmp3[10]).intl;
    const string = intl.string;
    const t = tmp2(tmp3[10]).t;
    const stringResult = string(isExpanded ? t["6MwJo/"] : t.lBeKY2);
    let obj3 = { style: tmp.container, onLayout: callback, children: items10 };
    let tmp28 = null;
    const tmp26 = fontScale;
    if (!isExpanded) {
      tmp28 = null;
      if (width > 0) {
        tmp28 = null;
        if (null == candidate) {
          let obj4 = { style: tmp.measurement, pointerEvents: "none", accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: memo2(Text, obj5) };
          obj5 = { variant: "body-md/normal", color: "interactive-text-active", onTextLayout: callback2, children: memo2(tmp2(tmp3[12]).HTMLText, obj6) };
          Text = tmp2(tmp3[11]).Text;
          const items9 = [memo3, width, fontScale];
          let str2 = ":";
          obj6 = { runs: memo, onLinkPress: callback1 };
          tmp28 = memo2(tmp27, obj4, items9.join(":"));
        }
      }
    }
    items10 = [tmp28, , , ];
    let tmp30 = null;
    if (!isExpanded) {
      tmp30 = null;
      if (width > 0) {
        tmp30 = null;
        if (null != candidate) {
          const obj7 = { style: tmp.measurement, pointerEvents: "none", accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: memo2(Text2, obj8) };
          obj8 = { variant: "body-md/normal", color: "interactive-text-active", onTextLayout: tmp24, children: memo2(tmp2(tmp3[12]).HTMLText, obj9) };
          Text2 = tmp2(tmp3[11]).Text;
          obj9 = { runs: memo4 };
          tmp30 = memo2(tmp27, obj7);
        }
      }
    }
    items10[1] = tmp30;
    const obj10 = { accessible: null != sum, accessibilityRole: str3, accessibilityLabel: sum, children: memo2(Text3, obj11) };
    str3 = undefined;
    if (null != sum) {
      str3 = "text";
    }
    Text3 = tmp2(tmp3[11]).Text;
    obj11 = { variant: "body-md/normal", color: "interactive-text-active", lineClamp: 3, accessible: null == sum && undefined, accessibilityLabel: sum, accessibilityElementsHidden: null != sum, importantForAccessibility: str4, children: memo2(tmp2(tmp3[12]).HTMLText, obj12) };
    str4 = "auto";
    if (null != sum) {
      str4 = "no-hide-descendants";
    }
    obj12 = { runs: tmp21, onLinkPress: callback1, linksAccessible: null == sum };
    items10[2] = memo2(memo, obj10);
    let tmp32Result = null;
    if (showToggle) {
      const obj13 = { onPress: toggleExpanded, accessibilityRole: "button", accessibilityLabel: stringResult, accessibilityState: obj14, children: memo2(tmp2(tmp3[11]).Text, obj15) };
      obj14 = { expanded: isExpanded };
      obj15 = { variant: "body-md/medium", color: "text-brand", children: stringResult };
      tmp32Result = tmp32(memo1, obj13);
    }
    items10[3] = tmp32Result;
    return tmp26(memo, obj3);
  }
};
