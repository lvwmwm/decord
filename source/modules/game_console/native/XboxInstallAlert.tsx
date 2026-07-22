// Module ID: 9046
// Function ID: 71055
// Name: XboxInstallAlert
// Dependencies: []
// Exports: default

// Module 9046 (XboxInstallAlert)
importAll(dependencyMap[0]);
({ XBOX_ANDROID_APP_LINK: closure_3, XBOX_IOS_APP_LINK: closure_4 } = arg1(dependencyMap[1]));
const jsx = arg1(dependencyMap[2]).jsx;
let obj = arg1(dependencyMap[3]);
obj = {};
obj = { <string:1199788897>: true, <string:480689183>: true, <string:3327199329>: true, <string:1359503823>: true, tintColor: importDefault(dependencyMap[4]).colors.WHITE };
obj.externalLinkIcon = obj;
let closure_6 = obj.createStyles(obj);
const tmp3 = arg1(dependencyMap[1]);
const result = arg1(dependencyMap[11]).fileFinishedImporting("modules/game_console/native/XboxInstallAlert.tsx");

export default function XboxInstallAlert(arg0) {
  const callback = callback2();
  const obj = {};
  const merged = Object.assign(arg0);
  const intl = callback(dependencyMap[6]).intl;
  obj["title"] = intl.string(callback(dependencyMap[6]).t.12Kx2v);
  const intl2 = callback(dependencyMap[6]).intl;
  obj["body"] = intl2.string(callback(dependencyMap[6]).t.msZW3j);
  const intl3 = callback(dependencyMap[6]).intl;
  obj["confirmText"] = intl3.string(callback(dependencyMap[6]).t.n+VrqG);
  const intl4 = callback(dependencyMap[6]).intl;
  obj["cancelText"] = intl4.string(callback(dependencyMap[6]).t.kYaBOg);
  obj["fillCancelText"] = true;
  obj["renderConfirmRightIcon"] = function renderConfirmRightIcon() {
    const obj = { source: callback(closure_2[8]), style: lib.externalLinkIcon };
    return callback2(lib(closure_2[7]).Icon, obj);
  };
  obj["onConfirm"] = function onConfirm() {
    const obj = lib(closure_2[9]);
    const isAndroidResult = lib(closure_2[9]).isAndroid();
    const openURL = callback(closure_2[10]).openURL;
    if (isAndroidResult) {
      openURL(closure_3);
    } else {
      openURL(closure_4);
    }
  };
  return jsx(importDefault(dependencyMap[5]), obj);
};
