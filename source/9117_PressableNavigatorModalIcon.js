// Module ID: 9117
// Function ID: 71400
// Name: PressableNavigatorModalIcon
// Dependencies: []
// Exports: default

// Module 9117 (PressableNavigatorModalIcon)
const jsx = require(dependencyMap[0]).jsx;
const _module = require(dependencyMap[6]);
const result = _module.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/navigator/PressableNavigatorModalIcon.tsx");

export default function PressableNavigatorModalIcon(onPress) {
  let goBack = onPress.onPress;
  if (goBack === undefined) {
    goBack = onPress.navigation.goBack;
  }
  let str = onPress.type;
  if (str === undefined) {
    str = "back";
  }
  let obj = { isModal: true };
  obj = {};
  if ("back" === str) {
    let tmp6 = tmp5[3];
  } else {
    tmp6 = tmp5[4];
  }
  obj.source = importDefault(tmp6);
  obj.onPress = goBack;
  const intl = require(dependencyMap[5]).intl;
  const string = intl.string;
  const t = require(dependencyMap[5]).t;
  if ("back" === str) {
    let stringResult = string(t.13/7kX);
  } else {
    stringResult = string(t.cpT0Cq);
  }
  obj.accessibilityLabel = stringResult;
  obj.children = jsx(require(dependencyMap[2]).HeaderIconButton, obj);
  return jsx(importDefault(dependencyMap[1]), obj);
};
