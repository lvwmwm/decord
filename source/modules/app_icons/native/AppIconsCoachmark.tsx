// Module ID: 15484
// Function ID: 118179
// Name: AppIconsCoachmarkActionSheet
// Dependencies: []
// Exports: default

// Module 15484 (AppIconsCoachmarkActionSheet)
let closure_3 = importAll(dependencyMap[0]);
({ Image: closure_4, View: closure_5 } = arg1(dependencyMap[1]));
let closure_6 = importDefault(dependencyMap[2]);
const ContentDismissActionType = arg1(dependencyMap[3]).ContentDismissActionType;
const tmp2 = arg1(dependencyMap[1]);
({ jsx: closure_8, jsxs: closure_9 } = arg1(dependencyMap[4]));
let obj = arg1(dependencyMap[5]);
obj = {};
obj = { padding: importDefault(dependencyMap[6]).space.PX_16, paddingBottom: 0 };
obj.container = obj;
obj.info = { alignItems: "center" };
obj.image = {};
obj.nitroWheel = { marginRight: 8 };
obj.titleContainer = { ty: 8, c: null, o: "\u270A\u{1F3FF}" };
obj.subtitle = {};
const tmp3 = arg1(dependencyMap[4]);
obj.footer = { marginTop: 20, gap: importDefault(dependencyMap[6]).space.PX_8 };
let closure_10 = obj.createStyles(obj);
const obj1 = { marginTop: 20, gap: importDefault(dependencyMap[6]).space.PX_8 };
const result = arg1(dependencyMap[18]).fileFinishedImporting("modules/app_icons/native/AppIconsCoachmark.tsx");

export default function AppIconsCoachmarkActionSheet(markAsDismissed) {
  markAsDismissed = markAsDismissed.markAsDismissed;
  const arg1 = markAsDismissed;
  const tmp = callback3();
  let obj = arg1(dependencyMap[7]);
  const items = [closure_6];
  const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  let obj1 = importDefault(dependencyMap[8]);
  const items1 = [markAsDismissed];
  const callback = React.useCallback(() => {
    callback(closure_2[9]).hideActionSheet();
    if (null != markAsDismissed) {
      markAsDismissed(constants.DISMISS);
    }
  }, items1);
  obj = {
    onDismiss() {
      return markAsDismissed(constants.DISMISS);
    },
    contentStyles: tmp.container
  };
  obj = { style: tmp.info };
  obj1 = { source: importDefault(dependencyMap[11]), style: tmp.image };
  const items2 = [callback(closure_4, obj1), , ];
  const obj2 = { style: tmp.titleContainer };
  const obj3 = { source: importDefault(dependencyMap[13]), size: arg1(dependencyMap[12]).IconSizes.MEDIUM, style: tmp.nitroWheel, disableColor: true };
  const items3 = [callback(arg1(dependencyMap[12]).Icon, obj3), ];
  const obj4 = {};
  const intl = arg1(dependencyMap[15]).intl;
  obj4.children = intl.string(arg1(dependencyMap[15]).t.EfA4Cq);
  items3[1] = callback(arg1(dependencyMap[14]).Text, obj4);
  obj2.children = items3;
  items2[1] = callback2(closure_5, obj2);
  const obj5 = { hasMaxConnections: 1, isBoostOnlySubscription: 1, style: tmp.subtitle };
  const intl2 = arg1(dependencyMap[15]).intl;
  const string = intl2.string;
  const t = arg1(dependencyMap[15]).t;
  if (isPremiumResult) {
    let stringResult = string(t.IgchKK);
  } else {
    stringResult = string(t.D0XzaS);
  }
  obj5.children = stringResult;
  items2[2] = callback(arg1(dependencyMap[14]).Text, obj5);
  obj.children = items2;
  const items4 = [callback2(closure_5, obj), ];
  const obj6 = { style: tmp.footer };
  const obj7 = {};
  const intl3 = arg1(dependencyMap[15]).intl;
  obj7.text = intl3.string(arg1(dependencyMap[15]).t.Pt547C);
  obj7.onPress = function onPress() {
    callback(closure_2[9]).hideActionSheet();
    if (null != markAsDismissed) {
      markAsDismissed(constants.PRIMARY);
    }
    const obj = callback(closure_2[9]);
    const result = markAsDismissed(closure_2[17]).navigateToAppIconSettings();
  };
  const items5 = [callback(arg1(dependencyMap[16]).Button, obj7), ];
  const obj8 = { variant: "secondary" };
  const intl4 = arg1(dependencyMap[15]).intl;
  obj8.text = intl4.string(arg1(dependencyMap[15]).t.iSrIIZ);
  obj8.onPress = callback;
  items5[1] = callback(arg1(dependencyMap[16]).Button, obj8);
  obj6.children = items5;
  items4[1] = callback2(closure_5, obj6);
  obj.children = items4;
  return callback2(arg1(dependencyMap[10]).BottomSheet, obj);
};
