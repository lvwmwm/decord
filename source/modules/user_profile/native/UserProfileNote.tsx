// Module ID: 11961
// Function ID: 92448
// Name: UserProfileNote
// Dependencies: []
// Exports: default

// Module 11961 (UserProfileNote)
importAll(dependencyMap[0]);
const jsx = arg1(dependencyMap[1]).jsx;
let closure_4 = arg1(dependencyMap[2]).createStyles({ title: { justifyContent: "space-between" } });
const obj = arg1(dependencyMap[2]);
const result = arg1(dependencyMap[13]).fileFinishedImporting("modules/user_profile/native/UserProfileNote.tsx");

export default function UserProfileNote(style) {
  const userId = style.userId;
  const arg1 = userId;
  const importDefault = style.onBack;
  let obj = arg1(dependencyMap[3]);
  const dependencyMap = obj.useUserProfileAnalyticsContext().trackUserProfileAction;
  const note = importDefault(dependencyMap[4])(userId).note;
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
  const intl = arg1(dependencyMap[8]).intl;
  const string = intl.string;
  const t = arg1(dependencyMap[8]).t;
  if (tmp2) {
    let stringResult = string(t.gs+qcM);
  } else {
    stringResult = string(t.1ZZtts);
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
        return callback({ action: "SET_NOTE" });
      }
    };
    onBack(trackUserProfileAction[10])(obj);
  };
  obj.activeOpacity = 0.8;
  obj = { style: style.style };
  const tmp = callback();
  const tmp5 = jsx;
  const tmp8 = jsx;
  const intl2 = arg1(dependencyMap[8]).intl;
  obj.title = intl2.string(arg1(dependencyMap[8]).t.mQKv+v);
  const items = [tmp.title, ];
  let tmp10 = !tmp2;
  if (!tmp2) {
    const obj1 = { marginBottom: 0 };
    tmp10 = obj1;
  }
  items[1] = tmp10;
  obj.titleStyle = items;
  obj.titleIcon = <PaperPlusIcon />;
  if (tmp2) {
    const obj2 = { children: note };
    tmp2 = jsx(arg1(dependencyMap[12]).Text, obj2);
  }
  obj.children = tmp2;
  obj.children = tmp8(importDefault(dependencyMap[11]), obj);
  return tmp5(arg1(dependencyMap[7]).PressableOpacity, obj);
};
