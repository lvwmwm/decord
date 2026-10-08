// Module ID: 18032
// Function ID: 18033
// Name: KeywordsActionSheet
// Dependencies: [32, 19, 11473, 21, 558, 576, 18016, 12, 18011, 5054, 6828, 1126, 6763, 5375, 6885, 2]

// Module 18032 (KeywordsActionSheet)
import _mod12 from "module_12" /* 12 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5054 */;
import Constants from "Constants" /* 11473 */;
import AutomodRuleUtils from "AutomodRuleUtils" /* 18011 */;
import KeywordTextUtils from "KeywordTextUtils" /* 18016 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let metroImportDefault;
let metroRequire;
let react = react_mod;
let closure_5 = Constants.KEYWORDS_REGEX_PLACEHOLDER;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function KeywordsActionSheet(keywords) {
  let closure_4;
  let closure_8;
  let description;
  let items;
  let maxWordCount;
  let title;
  let tmp14;
  let type;
  let obj = type(maxWordCount[5]);
  const cResult = obj.c(31);
  ({ title, description, type } = keywords);
  keywords = keywords.keywords;
  maxWordCount = keywords.maxWordCount;
  const onSave = keywords.onSave;
  react = tmp4;
  const tmp5 = type(maxWordCount[6]);
  const tmp6 = "regex" === type ? tmp5.getRegexPatternsFromString : tmp5.getKeywordsFromString;
  closure_5 = tmp6;
  if (cResult[0] === "regex" === type) {
    let tmp7;
    if (cResult[1] === keywords) {
      tmp7 = cResult[2];
    }
    const tmp10 = onSave(react.useState(tmp7), 2);
    const value = tmp10[0];
    let closure_7 = tmp10[1];
    const tmp13 = onSave(react.useState(null), 2);
    [tmp14, closure_8] = tmp13;
    if (cResult[3] === maxWordCount) {
      let tmp15;
      if (cResult[4] === type) {
        tmp15 = cResult[5];
      }
      let closure_9 = tmp15;
      if (cResult[6] === tmp6) {
        let tmp17;
        if (cResult[7] === tmp15) {
          tmp17 = cResult[8];
        }
        if (cResult[9] === value) {
          if (cResult[10] === onSave) {
            let tmp18;
            let tmp19;
            let tmp22;
            if (cResult[11] === tmp6) {
              tmp18 = cResult[12];
            }
            if (cResult[13] !== title) {
              let obj2 = { title };
              const tmp21 = value(type(maxWordCount[10]).BottomSheetTitleHeader, obj2);
              cResult[13] = title;
              cResult[14] = tmp21;
              tmp19 = tmp21;
            } else {
              tmp19 = cResult[14];
            }
            if (cResult[15] !== ("regex" === type)) {
              let stringResult;
              if ("regex" === type) {
                stringResult = closure_5;
              } else {
                const intl = tmp(tmp2[11]).intl;
                stringResult = intl.string(tmp(tmp2[11]).t.UyaxJy);
              }
              cResult[15] = "regex" === type;
              cResult[16] = stringResult;
              tmp22 = stringResult;
            } else {
              tmp22 = cResult[16];
            }
            if (cResult[17] === description) {
              if (cResult[18] === tmp17) {
                if (cResult[19] === value) {
                  if (cResult[20] === tmp22) {
                    if (cResult[21] === tmp14) {
                      let tmp24;
                      let tmp28;
                      let tmp30;
                      if (cResult[22] === title) {
                        tmp24 = cResult[23];
                      }
                      const _Symbol = Symbol;
                      if (cResult[24] === Symbol.for("react.memo_cache_sentinel")) {
                        const intl2 = tmp(tmp2[11]).intl;
                        const stringResult1 = intl2.string(type(maxWordCount[11]).t["R3BPH+"]);
                        cResult[24] = stringResult1;
                        tmp28 = stringResult1;
                      } else {
                        tmp28 = cResult[24];
                      }
                      if (cResult[25] !== tmp18) {
                        const obj3 = { grow: true, text: tmp28, onPress: tmp18 };
                        const tmp32 = value(type(maxWordCount[13]).Button, obj3);
                        cResult[25] = tmp18;
                        cResult[26] = tmp32;
                        tmp30 = tmp32;
                      } else {
                        tmp30 = cResult[26];
                      }
                      if (cResult[27] === tmp30) {
                        if (cResult[28] === tmp19) {
                          let tmp33;
                          if (cResult[29] === tmp24) {
                            tmp33 = cResult[30];
                          }
                          return tmp33;
                        }
                      }
                      const obj4 = { keyboardShouldPersistTaps: "handled", header: tmp19, children: items };
                      items = [tmp24, tmp30];
                      const tmp35 = closure_7(type(maxWordCount[14]).ActionSheet, obj4);
                      cResult[27] = tmp30;
                      cResult[28] = tmp19;
                      cResult[29] = tmp24;
                      cResult[30] = tmp35;
                      tmp33 = tmp35;
                    }
                  }
                }
              }
            }
            const obj5 = { accessibilityLabel: title, description, placeholder: tmp22, value, onChange: tmp17, errorMessage: tmp14 };
            const tmp26 = value(type(maxWordCount[12]).TextArea, obj5);
            cResult[17] = description;
            cResult[18] = tmp17;
            cResult[19] = value;
            cResult[20] = tmp22;
            cResult[21] = tmp14;
            cResult[22] = title;
            cResult[23] = tmp26;
            tmp24 = tmp26;
          }
        }
        function handleSave() {
          const obj = ActionSheetActionCreatorsDefault;
          obj.hideActionSheet();
          onSave(closure_5(first));
        }
        cResult[9] = value;
        cResult[10] = onSave;
        cResult[11] = tmp6;
        cResult[12] = handleSave;
        tmp18 = handleSave;
      }
      function handleChange(arg0) {
        closure_7(arg0);
        closure_9(closure_5(arg0));
      }
      cResult[6] = tmp6;
      cResult[7] = tmp15;
      cResult[8] = handleChange;
      tmp17 = handleChange;
    }
    const tmpResult = type(maxWordCount[7]);
    const debounceResult = tmpResult.debounce((arr) => {
      try {
        if ("regex" === type) {
          const obj2 = AutomodRuleUtils;
          const result = obj2.validateRegexPatternsOrThrow(arr);
        } else {
          const obj = AutomodRuleUtils;
          const result1 = obj.validateKeywordsOrThrow(arr, maxWordCount);
        }
        closure_8(null);
      } catch (tmp13) {
        closure_8(tmp13.message);
      }
    }, 300, { leading: true, trailing: true });
    cResult[3] = maxWordCount;
    cResult[4] = type;
    cResult[5] = debounceResult;
    tmp15 = debounceResult;
  }
  const fn = function c() {
    let stringFromRegexPatterns;
    const obj = KeywordTextUtils;
    if (closure_4) {
      stringFromRegexPatterns = obj.getStringFromRegexPatterns(keywords);
    } else {
      stringFromRegexPatterns = obj.getKeywordStringFromKeywordFilter(keywords);
    }
    return stringFromRegexPatterns;
  };
  cResult[0] = "regex" === type;
  cResult[1] = keywords;
  cResult[2] = fn;
  tmp7 = fn;
}) : (function KeywordsActionSheet(onSave) {
  let c8;
  let closure_4;
  let intl2;
  let items1;
  let maxWordCount;
  let stringResult;
  let title;
  let tmp10;
  let tmp5;
  let tmp6;
  let type;
  ({ title, type } = onSave);
  ({ keywords: importDefault, maxWordCount } = onSave);
  onSave = onSave.onSave;
  let getKeywordsFromString;
  let value;
  let closure_7;
  c8 = undefined;
  let closure_9;
  react = tmp;
  const description = onSave.description;
  const tmp4 = type(maxWordCount[6]);
  if ("regex" === type) {
    getKeywordsFromString = tmp4.getRegexPatternsFromString;
    tmp5 = tmp3;
    tmp6 = tmp2;
  } else {
    getKeywordsFromString = tmp4.getKeywordsFromString;
    tmp5 = tmp3;
    tmp6 = tmp2;
  }
  const tmp7 = onSave(react.useState(() => {
    let stringFromRegexPatterns;
    const obj = KeywordTextUtils;
    if (closure_4) {
      stringFromRegexPatterns = obj.getStringFromRegexPatterns(importDefault);
    } else {
      stringFromRegexPatterns = obj.getKeywordStringFromKeywordFilter(importDefault);
    }
    return stringFromRegexPatterns;
  }), 2);
  value = tmp7[0];
  closure_7 = tmp7[1];
  [tmp10, c8] = onSave(react.useState(null), 2);
  const items = [type, maxWordCount];
  onSave(react.useState(null), 2);
  closure_9 = react.useMemo(() => {
    let obj = _mod12;
    return obj.debounce((arr) => {
      try {
        if ("regex" === closure_1_0) {
          const obj2 = type(maxWordCount[8]);
          const result = obj2.validateRegexPatternsOrThrow(arr);
        } else {
          const obj = type(maxWordCount[8]);
          const result1 = obj.validateKeywordsOrThrow(arr, closure_1_2);
        }
        closure_1_8(null);
      } catch (tmp13) {
        closure_1_8(tmp13.message);
      }
    }, 300, { leading: true, trailing: true });
  }, items);
  let obj = { keyboardShouldPersistTaps: "handled", header: value(tmp6(tmp5[10]).BottomSheetTitleHeader, { title }), children: items1 };
  const ActionSheet = tmp6(tmp5[14]).ActionSheet;
  let obj2 = {
    accessibilityLabel: title,
    description,
    placeholder: stringResult,
    value,
    onChange: function handleChange(arg0) {
      closure_7(arg0);
      closure_9(getKeywordsFromString(arg0));
    },
    errorMessage: tmp10
  };
  const TextArea = tmp6(tmp5[12]).TextArea;
  const tmp11 = closure_7;
  if ("regex" === type) {
    stringResult = getKeywordsFromString;
  } else {
    const intl = tmp6(tmp5[11]).intl;
    stringResult = intl.string(tmp6(tmp5[11]).t.UyaxJy);
  }
  items1 = [tmp12(TextArea, obj2), ];
  const obj3 = {
    grow: true,
    text: intl2.string(tmp6(tmp5[11]).t["R3BPH+"]),
    onPress: function handleSave() {
      const obj = ActionSheetActionCreatorsDefault;
      obj.hideActionSheet();
      onSave(getKeywordsFromString(first));
    }
  };
  const Button = tmp6(tmp5[13]).Button;
  intl2 = tmp6(tmp5[11]).intl;
  items1[1] = value(Button, obj3);
  return tmp11(ActionSheet, obj);
});
let result = size.fileFinishedImporting("modules/guild_automod/native/components/KeywordsActionSheet.tsx");

export default tmp3;
