// Module ID: 11974
// Function ID: 92527
// Name: UserProfileNote
// Dependencies: [31, 33, 4130, 8266, 11975, 9284, 11977, 4660, 1212, 4098, 11979, 5511, 4126, 2]
// Exports: default

// Module 11974 (UserProfileNote)
import "result";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
let closure_4 = _createForOfIteratorHelperLoose.createStyles({ title: { justifyContent: "space-between" } });
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/user_profile/native/UserProfileNote.tsx");

export default function UserProfileNote(style) {
  const userId = style.userId;
  const onBack = style.onBack;
  let obj = userId(trackUserProfileAction[3]);
  trackUserProfileAction = obj.useUserProfileAnalyticsContext().trackUserProfileAction;
  const note = onBack(trackUserProfileAction[4])(userId).note;
  let tmp2 = null != note;
  if (tmp2) {
    tmp2 = "" !== note;
  }
  if (tmp2) {
    let PaperPlusIcon = tmp3(tmp4[5]).PaperIcon;
  } else {
    PaperPlusIcon = tmp3(tmp4[6]).PaperPlusIcon;
  }
  obj = { accessibilityRole: "button" };
  const intl = userId(trackUserProfileAction[8]).intl;
  const string = intl.string;
  const t = userId(trackUserProfileAction[8]).t;
  if (tmp2) {
    let stringResult = string(t["gs+qcM"]);
  } else {
    stringResult = string(t["1ZZtts"]);
  }
  obj.accessibilityHint = stringResult;
  let tmp7;
  if (null != note) {
    tmp7 = note;
  }
  obj.accessibilityLabel = tmp7;
  obj.onPress = function onPress() {
    let obj = onBack(trackUserProfileAction[9]);
    obj.hideActionSheet();
    obj = {
      userId,
      onBack,
      onSave() {
        return outer1_2({ action: "SET_NOTE" });
      }
    };
    onBack(trackUserProfileAction[10])(obj);
  };
  obj.activeOpacity = 0.8;
  obj = { style: style.style };
  const tmp = callback();
  const tmp5 = jsx;
  const tmp8 = jsx;
  const intl2 = userId(trackUserProfileAction[8]).intl;
  obj.title = intl2.string(userId(trackUserProfileAction[8]).t["mQKv+v"]);
  const items = [tmp.title, ];
  let tmp10 = !tmp2;
  if (!tmp2) {
    const obj1 = { marginBottom: 0 };
    tmp10 = obj1;
  }
  items[1] = tmp10;
  obj.titleStyle = items;
  obj.titleIcon = <PaperPlusIcon size="xs" color="interactive-text-default" />;
  if (tmp2) {
    const obj2 = { variant: "text-md/normal", color: "text-default", children: note };
    tmp2 = jsx(userId(trackUserProfileAction[12]).Text, { variant: "text-md/normal", color: "text-default", children: note });
  }
  obj.children = tmp2;
  obj.children = tmp8(onBack(trackUserProfileAction[11]), obj);
  return tmp5(userId(trackUserProfileAction[7]).PressableOpacity, obj);
};
