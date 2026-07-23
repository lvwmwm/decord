// Module ID: 14649
// Function ID: 111603
// Name: isValidClipboardCode
// Dependencies: [5, 57, 31, 33, 14647, 4126, 1212, 9197, 14642, 14648, 14645, 2]
// Exports: default

// Module 14649 (isValidClipboardCode)
import Text from "Text";
import _slicedToArray from "_slicedToArray";
import result from "result";
import jsxProd from "jsxProd";

let closure_6;
let closure_7;
let closure_8;
const require = arg1;
function isValidClipboardCode(arg0) {
  let tmp = arg0.length >= require(14647) /* finishMFACheck */.BACKUP_CODE_MIN_LENGTH;
  if (tmp) {
    tmp = arg0.length <= require(14647) /* finishMFACheck */.BACKUP_CODE_MAX_LENGTH;
  }
  return tmp;
}
function getFormattedExplainer(first2) {
  if (first2 > 0) {
    let obj = { variant: "text-md/normal" };
    const intl = require(1212) /* getSystemLocale */.intl;
    const items = [intl.string(require(1212) /* getSystemLocale */.t.RRtlLg), ];
    const intl2 = require(1212) /* getSystemLocale */.intl;
    obj = { countdown: first2 };
    items[1] = intl2.format(require(1212) /* getSystemLocale */.t.tsWkAE, obj);
    obj.children = items;
  } else {
    obj = { variant: "text-md/normal" };
    const intl3 = require(1212) /* getSystemLocale */.intl;
    const items1 = [intl3.string(require(1212) /* getSystemLocale */.t.RRtlLg), ];
    const intl4 = require(1212) /* getSystemLocale */.intl;
    items1[1] = intl4.string(require(1212) /* getSystemLocale */.t.v3a6Pd);
    obj.children = items1;
  }
  return closure_6(require(4126) /* Text */.Text, obj);
}
({ jsxs: closure_6, jsx: closure_7, Fragment: closure_8 } = jsxProd);
const result = require("result").fileFinishedImporting("modules/mfa/native/screens/BackupScreen.tsx");

export default function BackupScreen(finish) {
  let _slicedToArray;
  let result;
  let tmp6;
  let tmp8;
  finish = finish.finish;
  const tmp2 = callback(React.useState(false), 2);
  let first = tmp2[0];
  const importDefault = tmp2[1];
  const tmp4 = callback(React.useState(""), 2);
  const first1 = tmp4[0];
  let Text = tmp4[1];
  const tmp = importDefault(first1[7])();
  [tmp6, _slicedToArray] = callback(React.useState(undefined), 2);
  const tmp5 = callback(React.useState(undefined), 2);
  [tmp8, result] = callback(React.useState(false), 2);
  const tmp9 = callback(React.useState(10), 2);
  const first2 = tmp9[0];
  let closure_7 = tmp9[1];
  const items = [first2];
  const effect = React.useEffect(() => {
    if (first2 > 0) {
      const _setTimeout = setTimeout;
      const timeout = setTimeout(() => {
        outer1_7((arg0) => arg0 - 1);
      }, 1000);
      return () => clearTimeout(closure_0);
    }
  }, items);
  const items1 = [finish];
  let closure_8 = React.useCallback((() => {
    // CreateGeneratorClosureLongIndex (0x67)
    let closure_0 = callback(tmp);
    return function() {
      return callback(...arguments);
    };
  })(), items1);
  let obj = {};
  const tmp7 = callback(React.useState(false), 2);
  const intl = finish(first1[6]).intl;
  obj.headerText = intl.string(finish(first1[6]).t.B2T1HD);
  const intl2 = finish(first1[6]).intl;
  obj.subtitle = intl2.string(finish(first1[6]).t.c5J7O0);
  obj = {};
  const items2 = [getFormattedExplainer(first2), ];
  obj = {};
  const tmp13 = importDefault(first1[8]);
  const tmp14 = first2;
  const tmp15 = closure_8;
  const intl3 = finish(first1[6]).intl;
  obj.label = intl3.string(finish(first1[6]).t["C/ZAw/"]);
  const intl4 = finish(first1[6]).intl;
  obj.placeholder = intl4.string(finish(first1[6]).t.fZSi1D);
  obj.isValidClipboardCode = isValidClipboardCode;
  obj.maxLength = finish(first1[4]).BACKUP_CODE_MAX_LENGTH;
  obj.onChangeCode = function onChangeCode(arg0) {
    callback(arg0);
    callback2(undefined);
  };
  obj.error = tmp6;
  let tmp17 = first;
  if (!first) {
    tmp17 = tmp8;
  }
  obj.isDisabled = tmp17;
  obj.autoFocus = !tmp;
  items2[1] = closure_7(importDefault(first1[9]), obj);
  obj.children = items2;
  obj.input = tmp14(tmp15, obj);
  const obj1 = { variant: "primary" };
  const tmp16 = importDefault(first1[9]);
  const tmp18 = closure_7;
  const intl5 = finish(first1[6]).intl;
  obj1.text = intl5.string(finish(first1[6]).t.geKm7t);
  let tmp20 = first;
  if (!first) {
    tmp20 = tmp8;
  }
  obj1.loading = tmp20;
  obj1.onPress = function onPress() {
    return callback3(first1);
  };
  if (!first) {
    first = tmp8;
  }
  if (!first) {
    first = first1.length < finish(first1[4]).BACKUP_CODE_MIN_LENGTH;
  }
  if (!first) {
    first = first2 > 0;
  }
  obj1.disabled = first;
  obj.submit = tmp18(importDefault(first1[10]), obj1);
  obj.screenProps = { mfaChallenge: finish.mfaChallenge, finish };
  obj.mfaMethod = "backup";
  return closure_7(tmp13, obj);
};
