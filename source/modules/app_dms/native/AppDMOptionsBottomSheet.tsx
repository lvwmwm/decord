// Module ID: 10117
// Function ID: 78306
// Name: AppDMOptionsBottomSheet
// Dependencies: []
// Exports: default

// Module 10117 (AppDMOptionsBottomSheet)
let closure_3 = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
let closure_5 = importDefault(dependencyMap[2]);
const UserSettingsSections = arg1(dependencyMap[3]).UserSettingsSections;
({ jsx: closure_7, jsxs: closure_8 } = arg1(dependencyMap[4]));
let obj = arg1(dependencyMap[5]);
obj = {};
obj = { backgroundColor: importDefault(dependencyMap[6]).colors.BACKGROUND_BASE_LOWEST };
obj.sheet = obj;
obj.content = { "Null": null, "Null": null, "Null": null };
let closure_9 = obj.createStyles(obj);
const tmp2 = arg1(dependencyMap[4]);
const result = arg1(dependencyMap[16]).fileFinishedImporting("modules/app_dms/native/AppDMOptionsBottomSheet.tsx");

export default function AppDMOptionsBottomSheet(userId) {
  userId = userId.userId;
  const arg1 = userId;
  const channel = userId.channel;
  const importDefault = channel;
  const application = userId.application;
  const dependencyMap = application;
  const tmp = callback3();
  let obj = arg1(dependencyMap[7]);
  const items = [closure_5];
  const stateFromStores = obj.useStateFromStores(items, () => {
    let id;
    if (null != application) {
      id = application.id;
    }
    return newestTokenForApplication.getNewestTokenForApplication(id);
  });
  const React = stateFromStores;
  const items1 = [channel.id, userId];
  const items2 = [application, stateFromStores];
  const callback = React.useCallback(() => {
    channel(application[8])({ userId, channelId: channel.id });
    channel(application[9]).hideActionSheet();
  }, items1);
  const callback1 = React.useCallback(() => {
    let tmp = null != application;
    if (tmp) {
      tmp = null != stateFromStores;
    }
    if (tmp) {
      let obj = userId(application[10]);
      obj = { screen: constants.AUTHORIZED_APP };
      obj = { oauth2Token: stateFromStores };
      obj.params = obj;
      obj.openUserSettings(obj);
      channel(application[9]).hideActionSheet();
      const obj4 = channel(application[9]);
    }
  }, items2);
  const effect = React.useEffect(() => {
    const response = channel(application[11]).fetch();
  }, []);
  obj = { startExpanded: true, backgroundStyles: tmp.sheet };
  obj = { style: tmp.content };
  const obj1 = { hasIcons: false };
  const obj2 = {};
  const intl = arg1(dependencyMap[15]).intl;
  obj2.label = intl.string(arg1(dependencyMap[15]).t.iXAna6);
  obj2.onPress = callback;
  const items3 = [callback(arg1(dependencyMap[14]).TableRow, obj2), ];
  const obj3 = {};
  const intl2 = arg1(dependencyMap[15]).intl;
  obj3.label = intl2.string(arg1(dependencyMap[15]).t.KUsDNI);
  obj3.onPress = callback1;
  obj3.disabled = null == stateFromStores;
  items3[1] = callback(arg1(dependencyMap[14]).TableRow, obj3);
  obj1.children = items3;
  obj.children = callback2(arg1(dependencyMap[13]).TableRowGroup, obj1);
  obj.children = callback(View, obj);
  return callback(arg1(dependencyMap[12]).BottomSheet, obj);
};
