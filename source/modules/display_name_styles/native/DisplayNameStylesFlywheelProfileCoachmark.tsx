// Module ID: 15361
// Function ID: 116982
// Name: CoachmarkImage
// Dependencies: []
// Exports: default

// Module 15361 (CoachmarkImage)
function CoachmarkImage() {
  const tmp = callback3();
  let obj = { style: tmp.coachmarkImageContainer };
  const items = [callback(arg1(dependencyMap[12]).DisplayNameLockeAbstractUI, { "Null": "backdropTint", "Null": "<string:4216275200>", "Null": "<string:3110141953>" }), ];
  obj = { style: tmp.betaTag };
  items[1] = callback(arg1(dependencyMap[13]).BetaTag, obj);
  obj.children = items;
  return callback2(View, obj);
}
let closure_3 = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
let closure_5 = importDefault(dependencyMap[2]);
const ContentDismissActionType = arg1(dependencyMap[3]).ContentDismissActionType;
({ jsx: closure_7, jsxs: closure_8 } = arg1(dependencyMap[4]));
let obj = arg1(dependencyMap[5]);
obj = {};
obj = { gap: importDefault(dependencyMap[6]).space.PX_12 };
obj.coachmarkImageContainer = obj;
obj.betaTag = { marginLeft: 0 };
let closure_9 = obj.createStyles(obj);
const tmp2 = arg1(dependencyMap[4]);
const result = arg1(dependencyMap[14]).fileFinishedImporting("modules/display_name_styles/native/DisplayNameStylesFlywheelProfileCoachmark.tsx");

export default function DisplayNameStylesFlywheelProfileCoachmark(visible) {
  visible = visible.visible;
  const arg1 = visible;
  const markAsDismissed = visible.markAsDismissed;
  const importDefault = markAsDismissed;
  let dependencyMap;
  let React;
  let View;
  const items = [closure_5];
  const stateFromStores = arg1(dependencyMap[7]).useStateFromStores(items, () => currentUser.getCurrentUser());
  const obj = arg1(dependencyMap[7]);
  const result = importDefault(dependencyMap[8]).canUsePremiumProfileCustomization(stateFromStores);
  const intl = arg1(dependencyMap[9]).intl;
  const string = intl.string;
  const tmp3 = importDefault(dependencyMap[10]);
  if (result) {
    let stringResult = string(tmp3.h6sykk);
  } else {
    stringResult = string(tmp3.M5amXH);
  }
  dependencyMap = stringResult;
  const intl2 = arg1(dependencyMap[9]).intl;
  const string2 = intl2.string;
  const tmp5 = importDefault(dependencyMap[10]);
  if (result) {
    let string2Result = string2(tmp5.TyUdka);
  } else {
    string2Result = string2(tmp5.dluV0R);
  }
  React = string2Result;
  const items1 = [markAsDismissed];
  const callback = React.useCallback(() => {
    markAsDismissed(constants.USER_DISMISS);
  }, items1);
  View = callback;
  const items2 = [stringResult, string2Result, visible, callback];
  const memo = React.useMemo(() => ({
    title: stringResult,
    description: string2Result,
    visible,
    position: "bottom",
    onDismiss: callback,
    renderImgComponent() {
      return callback(closure_10, {});
    }
  }), items2);
  const obj2 = importDefault(dependencyMap[8]);
  const coachmark = arg1(dependencyMap[11]).useCoachmark(visible.targetRef, memo);
  return null;
};
