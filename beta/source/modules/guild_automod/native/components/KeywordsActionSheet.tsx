// Module ID: 17328
// Function ID: 17329
// Name: KeywordsActionSheet
// Dependencies: [32, 19, 11341, 21, 17312, 12, 17309, 6618, 6570, 6506, 1115, 5281, 4800, 2]
// Exports: default

// Module 17328 (KeywordsActionSheet)
import _mod12 from "module_12" /* 12 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4800 */;
import Constants from "Constants" /* 11341 */;
import KeywordTextUtils from "KeywordTextUtils" /* 17312 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

let metroImportDefault;
let metroRequire;
let react = react_mod;
let closure_5 = Constants.KEYWORDS_REGEX_PLACEHOLDER;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let result = size.fileFinishedImporting("modules/guild_automod/native/components/KeywordsActionSheet.tsx");

export default function KeywordsActionSheet(onSave) {
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
  const tmp4 = type(maxWordCount[4]);
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
          const obj2 = type(maxWordCount[6]);
          const result = obj2.validateRegexPatternsOrThrow(arr);
        } else {
          const obj = type(maxWordCount[6]);
          const result1 = obj.validateKeywordsOrThrow(arr, closure_1_2);
        }
        closure_1_8(null);
      } catch (tmp13) {
        closure_1_8(tmp13.message);
      }
    }, 300, { leading: true, trailing: true });
  }, items);
  let obj = { keyboardShouldPersistTaps: "handled", header: value(tmp6(tmp5[8]).BottomSheetTitleHeader, { title }), children: items1 };
  const ActionSheet = tmp6(tmp5[7]).ActionSheet;
  let obj2 = {
    accessibilityLabel: title,
    description,
    placeholder: stringResult,
    value,
    onChange(arg0) {
      closure_7(arg0);
      closure_9(getKeywordsFromString(arg0));
    },
    errorMessage: tmp10
  };
  const TextArea = tmp6(tmp5[9]).TextArea;
  const tmp11 = closure_7;
  if ("regex" === type) {
    stringResult = getKeywordsFromString;
  } else {
    const intl = tmp6(tmp5[10]).intl;
    stringResult = intl.string(tmp6(tmp5[10]).t.UyaxJy);
  }
  items1 = [tmp12(TextArea, obj2), ];
  const obj3 = {
    grow: true,
    text: intl2.string(tmp6(tmp5[10]).t["R3BPH+"]),
    onPress() {
      const obj = ActionSheetActionCreatorsDefault;
      obj.hideActionSheet();
      onSave(getKeywordsFromString(first));
    }
  };
  const Button = tmp6(tmp5[11]).Button;
  intl2 = tmp6(tmp5[10]).intl;
  items1[1] = value(Button, obj3);
  return tmp11(ActionSheet, obj);
};
