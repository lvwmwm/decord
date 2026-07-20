// Module ID: 14602
// Function ID: 110136
// Name: ChooseAccount
// Dependencies: []
// Exports: default

// Module 14602 (ChooseAccount)
let closure_4 = importDefault(dependencyMap[0]);
importAll(dependencyMap[1]);
const View = arg1(dependencyMap[2]).View;
const MultiAccountTokenStatus = arg1(dependencyMap[3]).MultiAccountTokenStatus;
({ MAX_ACCOUNTS: closure_7, MultiAccountSwitchLocation: closure_8 } = arg1(dependencyMap[4]));
const tmp3 = arg1(dependencyMap[4]);
({ AnalyticEvents: closure_9, AuthStates: closure_10 } = arg1(dependencyMap[5]));
const tmp4 = arg1(dependencyMap[5]);
({ jsx: closure_11, jsxs: closure_12 } = arg1(dependencyMap[6]));
let obj = arg1(dependencyMap[7]);
obj = {};
obj = { backgroundColor: importDefault(dependencyMap[8]).colors.BACKGROUND_BASE_LOW, borderRadius: importDefault(dependencyMap[8]).radii.sm, paddingTop: importDefault(dependencyMap[8]).space.PX_16, margin: importDefault(dependencyMap[8]).space.PX_16 };
obj.container = obj;
const obj1 = { value: false, padding: false, marginVertical: importDefault(dependencyMap[8]).space.PX_16, borderRadius: importDefault(dependencyMap[8]).radii.sm, display: false, flexDirection: false };
obj.mainCard = obj1;
const tmp5 = arg1(dependencyMap[6]);
obj.addAccountLabel = { color: importDefault(dependencyMap[8]).colors.TEXT_LINK };
let closure_13 = obj.createStyles(obj);
const obj2 = { color: importDefault(dependencyMap[8]).colors.TEXT_LINK };
const result = arg1(dependencyMap[26]).fileFinishedImporting("modules/multi_account/native/ChooseAccount.tsx");

export default function ChooseAccount() {
  function handlePressUser(tokenStatus) {
    if (tokenStatus.tokenStatus === constants.INVALID) {
      const arr = arr.push(constants4.LOGIN);
      let obj = { source: "choose_account_user_invalid" };
      multiAccountUsers(_handlePressRemove[11]).track(constants3.LOGIN_VIEWED, obj);
    } else {
      obj = handlePressUser(_handlePressRemove[12]);
      obj.switchAccount(tokenStatus.id, undefined, constants2.CHOOSE_ACCOUNT);
    }
  }
  function _handlePressRemove() {
    // CreateGeneratorClosureLongIndex (0x67)
    const obj = handlePressMore(tmp);
    const _handlePressRemove = obj;
    return obj(...arguments);
  }
  function handlePressMore(arg0) {
    let obj = multiAccountUsers(_handlePressRemove[16]);
    obj.hideActionSheet();
    let obj1 = arr(_handlePressRemove[17]);
    obj = {};
    obj = {};
    const intl = arr(_handlePressRemove[14]).intl;
    obj.label = intl.string(arg0(_handlePressRemove[14]).t.DSN+hw);
    obj.onPress = function onPress() {
      return callback(arg0);
    };
    const items = [obj, ];
    obj1 = {};
    const intl2 = arr(_handlePressRemove[14]).intl;
    obj1.label = intl2.string(arg0(_handlePressRemove[14]).t.lSLMaU);
    obj1.onPress = function onPress() {
      return function handlePressRemove(arg0) {
        return callback(...arguments);
      }(arg0);
    };
    obj1.isDestructive = true;
    items[1] = obj1;
    obj.options = items;
    const result = obj1.showSimpleActionSheet(obj);
  }
  const tmp = callback4();
  let obj = callback(_handlePressRemove[9]);
  const callback = obj.useNavigation();
  let obj1 = callback(_handlePressRemove[10]);
  const multiAccountUsers = obj1.useMultiAccountUsers().multiAccountUsers;
  const importDefault = multiAccountUsers;
  obj = {};
  const intl = callback(_handlePressRemove[14]).intl;
  obj.headerText = intl.string(callback(_handlePressRemove[14]).t.bVbB63);
  obj = {};
  const intl2 = callback(_handlePressRemove[14]).intl;
  obj.children = intl2.string(callback(_handlePressRemove[14]).t.0M5fN7);
  obj.subHeader = callback2(callback(_handlePressRemove[19]).Text, obj);
  obj.backgroundImageSource = importDefault(_handlePressRemove[20]);
  obj.backgroundImageCover = true;
  obj.contentStyle = tmp.container;
  obj1 = { style: tmp.mainCard };
  const items = [
    multiAccountUsers.map((id) => {
      let obj = {
        user: id,
        onPressUser() {
          return callback(arg0);
        }
      };
      obj = {
        accessibilityRole: "button",
        onPress() {
          callback2(arg0);
        }
      };
      obj = { size: id(_handlePressRemove[15]).Icon.Sizes.SMALL_20, source: multiAccountUsers(_handlePressRemove[23]), disableColor: true };
      obj.children = callback(id(_handlePressRemove[15]).Icon, obj);
      obj.trailing = callback(id(_handlePressRemove[22]).PressableOpacity, obj);
      return callback(multiAccountUsers(_handlePressRemove[21]), obj, id.id);
    }),

  ];
  const obj2 = {};
  const obj3 = { themedColor: importDefault(_handlePressRemove[8]).colors.TEXT_LINK, size: callback(_handlePressRemove[15]).Icon.Sizes.SMALL_20, source: importDefault(_handlePressRemove[25]) };
  obj2.leading = callback2(callback(_handlePressRemove[24]).FormRow.Icon, obj3);
  const intl3 = callback(_handlePressRemove[14]).intl;
  obj2.label = intl3.string(callback(_handlePressRemove[14]).t.bPP34Q);
  obj2.labelStyle = tmp.addAccountLabel;
  obj2.onPress = function handlePressAddAccount() {
    if (multiAccountUsers.length >= closure_7) {
      let obj = {};
      const intl = arr(_handlePressRemove[14]).intl;
      obj.title = intl.string(arr(_handlePressRemove[14]).t.w7wfXi);
      const intl2 = arr(_handlePressRemove[14]).intl;
      obj = { maxNumAccounts: closure_7 };
      obj.body = intl2.formatToPlainString(arr(_handlePressRemove[14]).t.WOyelG, obj);
      obj.isDismissable = true;
      multiAccountUsers(_handlePressRemove[13]).show(obj);
      const obj3 = multiAccountUsers(_handlePressRemove[13]);
    } else {
      const arr = arr.push(constants4.LOGIN);
      obj = multiAccountUsers(_handlePressRemove[11]);
      const obj1 = { source: "choose_account_add_account" };
      obj.track(constants3.LOGIN_VIEWED, obj1);
    }
  };
  items[1] = callback2(callback(_handlePressRemove[24]).FormRow, obj2);
  obj1.children = items;
  obj.children = callback3(View, obj1);
  return callback2(importDefault(_handlePressRemove[18]), obj);
};
