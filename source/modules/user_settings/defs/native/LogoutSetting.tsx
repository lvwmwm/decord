// Module ID: 14271
// Function ID: 107848
// Name: handleLogout
// Dependencies: []

// Module 14271 (handleLogout)
function handleLogout() {
  const Storage = require(dependencyMap[1]).Storage;
  const result = Storage.set(require(dependencyMap[2]).StorageKeys.LOGOUT_TIMESTAMP_KEY, new Date().getTime());
  const date = new Date();
  importDefault(dependencyMap[3]).disconnect();
  const obj2 = importDefault(dependencyMap[3]);
  const result1 = importDefault(dependencyMap[4]).clearAllNotifications();
  const obj3 = importDefault(dependencyMap[4]);
  importDefault(dependencyMap[5]).close();
  const obj4 = importDefault(dependencyMap[5]);
  importDefault(dependencyMap[6]).logout("confirm_logout_alert");
}
const _module = require(dependencyMap[0]);
({ jsx: closure_3, Fragment: closure_4, jsxs: closure_5 } = _module);
const _module1 = require(dependencyMap[10]);
const pressable = _module1.createPressable({
  useTitle() {
    const intl = require(dependencyMap[9]).intl;
    return intl.string(require(dependencyMap[9]).t.2jxGer);
  },
  IconComponent: require(dependencyMap[11]).DoorExitIcon,
  parent: null,
  variant: "danger",
  onPress: function showConfirmLogoutAlert() {
    let obj = require(dependencyMap[7]);
    obj = {};
    const intl = require(dependencyMap[9]).intl;
    obj.title = intl.string(require(dependencyMap[9]).t.2jxGer);
    const intl2 = require(dependencyMap[9]).intl;
    obj.content = intl2.string(require(dependencyMap[9]).t.SUnWBB);
    obj = {};
    const obj1 = {};
    const intl3 = require(dependencyMap[9]).intl;
    obj1.text = intl3.string(require(dependencyMap[9]).t.2jxGer);
    obj1.onPress = handleLogout;
    obj1.variant = "destructive";
    const items = [callback(require(dependencyMap[8]).AlertActionButton, obj1), ];
    const obj2 = { variant: "secondary" };
    const intl4 = require(dependencyMap[9]).intl;
    obj2.text = intl4.string(require(dependencyMap[9]).t.13/7kX);
    items[1] = callback(require(dependencyMap[8]).AlertActionButton, obj2);
    obj.children = items;
    obj.actions = callback2(closure_4, obj);
    obj.openAlert("logout", callback(require(dependencyMap[8]).AlertModal, obj));
  }
});
const _module2 = require(dependencyMap[12]);
const result = _module2.fileFinishedImporting("modules/user_settings/defs/native/LogoutSetting.tsx");

export default pressable;
