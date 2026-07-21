// Module ID: 14524
// Function ID: 109368
// Name: isValidClipboardCode
// Dependencies: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
// Exports: default

// Module 14524 (isValidClipboardCode)
import closure_3 from "__exportStarResult1";
import closure_4 from "__exportStarResult1";
import closure_5 from "__exportStarResult1";
import __exportStarResult1 from "__exportStarResult1";
import __exportStarResult1 from "__exportStarResult1";

function isValidClipboardCode(arg0) {
  let tmp = arg0.length >= arg1(dependencyMap[4]).BACKUP_CODE_MIN_LENGTH;
  if (tmp) {
    tmp = arg0.length <= arg1(dependencyMap[4]).BACKUP_CODE_MAX_LENGTH;
  }
  return tmp;
}
function getFormattedExplainer(first2) {
  if (first2 > 0) {
    let obj = { variant: "text-md/normal" };
    const intl = arg1(dependencyMap[6]).intl;
    const items = [intl.string(arg1(dependencyMap[6]).t.RRtlLg), ];
    const intl2 = arg1(dependencyMap[6]).intl;
    obj = { countdown: first2 };
    items[1] = intl2.format(arg1(dependencyMap[6]).t.tsWkAE, obj);
    obj.children = items;
  } else {
    obj = { variant: "text-md/normal" };
    const intl3 = arg1(dependencyMap[6]).intl;
    const items1 = [intl3.string(arg1(dependencyMap[6]).t.RRtlLg), ];
    const intl4 = arg1(dependencyMap[6]).intl;
    items1[1] = intl4.string(arg1(dependencyMap[6]).t.v3a6Pd);
    obj.children = items1;
  }
  return closure_6(arg1(dependencyMap[5]).Text, obj);
}
({ jsxs: closure_6, jsx: closure_7, Fragment: closure_8 } = __exportStarResult1);
const result = __exportStarResult1.fileFinishedImporting("modules/mfa/native/screens/BackupScreen.tsx");

export default function BackupScreen(finish) {
  let tmp6;
  let tmp8;
  finish = finish.finish;
  const arg1 = finish;
  const tmp2 = callback(React.useState(false), 2);
  let first = tmp2[0];
  const importDefault = tmp2[1];
  const tmp4 = callback(React.useState(""), 2);
  const first1 = tmp4[0];
  const dependencyMap = first1;
  let closure_3 = tmp4[1];
  const tmp = importDefault(dependencyMap[7])();
  [tmp6, closure_4] = callback(React.useState(undefined), 2);
  const tmp5 = callback(React.useState(undefined), 2);
  [tmp8, closure_5] = callback(React.useState(false), 2);
  const tmp9 = callback(React.useState(10), 2);
  const first2 = tmp9[0];
  let closure_7 = tmp9[1];
  const items = [first2];
  const effect = React.useEffect(() => {
    if (first2 > 0) {
      const _setTimeout = setTimeout;
      const timeout = setTimeout(() => {
        callback((arg0) => arg0 - 1);
      }, 1000);
      return () => clearTimeout(closure_0);
    }
  }, items);
  const items1 = [finish];
  let closure_8 = React.useCallback(() => {
    // CreateGeneratorClosureLongIndex (0x67)
    let closure_0 = callback(tmp);
    return function() {
      return callback(...arguments);
    };
  }(), items1);
  let obj = {};
  const tmp7 = callback(React.useState(false), 2);
  const intl = arg1(dependencyMap[6]).intl;
  obj.headerText = intl.string(arg1(dependencyMap[6]).t.B2T1HD);
  const intl2 = arg1(dependencyMap[6]).intl;
  obj.subtitle = intl2.string(arg1(dependencyMap[6]).t.c5J7O0);
  obj = {};
  const items2 = [getFormattedExplainer(first2), ];
  obj = {};
  const tmp13 = importDefault(dependencyMap[8]);
  const tmp14 = first2;
  const tmp15 = closure_8;
  const intl3 = arg1(dependencyMap[6]).intl;
  obj.label = intl3.string(arg1(dependencyMap[6]).t.C/ZAw/);
  const intl4 = arg1(dependencyMap[6]).intl;
  obj.placeholder = intl4.string(arg1(dependencyMap[6]).t.fZSi1D);
  obj.isValidClipboardCode = isValidClipboardCode;
  obj.maxLength = arg1(dependencyMap[4]).BACKUP_CODE_MAX_LENGTH;
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
  items2[1] = closure_7(importDefault(dependencyMap[9]), obj);
  obj.children = items2;
  obj.input = tmp14(tmp15, obj);
  const obj1 = { variant: "primary" };
  const tmp16 = importDefault(dependencyMap[9]);
  const tmp18 = closure_7;
  const intl5 = arg1(dependencyMap[6]).intl;
  obj1.text = intl5.string(arg1(dependencyMap[6]).t.geKm7t);
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
    first = first1.length < arg1(dependencyMap[4]).BACKUP_CODE_MIN_LENGTH;
  }
  if (!first) {
    first = first2 > 0;
  }
  obj1.disabled = first;
  obj.submit = tmp18(importDefault(dependencyMap[10]), obj1);
  obj.screenProps = { mfaChallenge: finish.mfaChallenge, finish };
  obj.mfaMethod = "backup";
  return closure_7(tmp13, obj);
};
