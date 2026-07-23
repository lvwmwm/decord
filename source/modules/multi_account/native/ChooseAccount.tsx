// Module ID: 14735
// Function ID: 112397
// Name: ChooseAccount
// Dependencies: [5, 31, 27, 11452, 11453, 653, 33, 4130, 689, 1456, 14736, 675, 11456, 4471, 1212, 1273, 4098, 5497, 9219, 4126, 12871, 14737, 4660, 8468, 7495, 14738, 2]
// Exports: default

// Module 14735 (ChooseAccount)
import closure_4 from "ME";
import "result";
import { View } from "get ActivityIndicator";
import { MultiAccountTokenStatus } from "_isNativeReflectConstruct";
import MAX_ACCOUNTS from "MAX_ACCOUNTS";
import ME from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_11;
let closure_12;
let closure_7;
let closure_8;
let closure_9;
const require = arg1;
({ MAX_ACCOUNTS: closure_7, MultiAccountSwitchLocation: closure_8 } = MAX_ACCOUNTS);
({ AnalyticEvents: closure_9, AuthStates: closure_10 } = ME);
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW, borderRadius: require("_createForOfIteratorHelperLoose").radii.sm, paddingTop: require("_createForOfIteratorHelperLoose").space.PX_16, margin: require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
let obj1 = { marginVertical: require("_createForOfIteratorHelperLoose").space.PX_16, borderRadius: require("_createForOfIteratorHelperLoose").radii.sm, flexDirection: "column", alignItems: "stretch", alignSelf: "stretch", display: "flex" };
_createForOfIteratorHelperLoose.mainCard = obj1;
_createForOfIteratorHelperLoose.addAccountLabel = { color: require("_createForOfIteratorHelperLoose").colors.TEXT_LINK };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj2 = { color: require("_createForOfIteratorHelperLoose").colors.TEXT_LINK };
let result = require("get ActivityIndicator").fileFinishedImporting("modules/multi_account/native/ChooseAccount.tsx");

export default function ChooseAccount() {
  function handlePressUser(tokenStatus) {
    if (tokenStatus.tokenStatus === outer1_6.INVALID) {
      arr = arr.push(outer1_10.LOGIN);
      let obj = { source: "choose_account_user_invalid" };
      multiAccountUsers(_handlePressRemove[11]).track(outer1_9.LOGIN_VIEWED, obj);
    } else {
      obj = handlePressUser(_handlePressRemove[12]);
      obj.switchAccount(tokenStatus.id, undefined, outer1_8.CHOOSE_ACCOUNT);
    }
  }
  function _handlePressRemove() {
    // CreateGeneratorClosureLongIndex (0x67)
    const obj = handlePressMore(tmp);
    return obj(...arguments);
  }
  function handlePressMore(arg0) {
    let obj = multiAccountUsers(_handlePressRemove[16]);
    obj.hideActionSheet();
    let obj1 = arr(_handlePressRemove[17]);
    obj = { key: "RemoveAccount", options: null, hasIcons: false };
    obj = {};
    const intl = arr(_handlePressRemove[14]).intl;
    obj.label = intl.string(arg0(_handlePressRemove[14]).t["DSN+hw"]);
    obj.onPress = function onPress() {
      return outer1_2(closure_0);
    };
    const items = [obj, ];
    obj1 = {};
    const intl2 = arr(_handlePressRemove[14]).intl;
    obj1.label = intl2.string(arg0(_handlePressRemove[14]).t.lSLMaU);
    obj1.onPress = function onPress() {
      return (function handlePressRemove(closure_0) {
        return outer2_3(...arguments);
      })(closure_0);
    };
    obj1.isDestructive = true;
    items[1] = obj1;
    obj.options = items;
    const result = obj1.showSimpleActionSheet(obj);
  }
  const tmp = _createForOfIteratorHelperLoose();
  let obj = _require(_handlePressRemove[9]);
  _require = obj.useNavigation();
  let obj1 = _require(_handlePressRemove[10]);
  const multiAccountUsers = obj1.useMultiAccountUsers().multiAccountUsers;
  obj = {};
  let intl = _require(_handlePressRemove[14]).intl;
  obj.headerText = intl.string(_require(_handlePressRemove[14]).t.bVbB63);
  obj = { variant: "text-sm/medium", color: "text-default" };
  let intl2 = _require(_handlePressRemove[14]).intl;
  obj.children = intl2.string(_require(_handlePressRemove[14]).t["0M5fN7"]);
  obj.subHeader = callback(_require(_handlePressRemove[19]).Text, obj);
  obj.backgroundImageSource = multiAccountUsers(_handlePressRemove[20]);
  obj.backgroundImageCover = true;
  obj.contentStyle = tmp.container;
  obj1 = { style: tmp.mainCard };
  let items = [
    multiAccountUsers.map((id) => {
      let obj = {
        user: id,
        onPressUser() {
          return outer1_2(closure_0);
        }
      };
      obj = {
        accessibilityRole: "button",
        onPress() {
          outer1_4(closure_0);
        }
      };
      obj = { size: id(_handlePressRemove[15]).Icon.Sizes.SMALL_20, source: multiAccountUsers(_handlePressRemove[23]), disableColor: true };
      obj.children = outer1_11(id(_handlePressRemove[15]).Icon, obj);
      obj.trailing = outer1_11(id(_handlePressRemove[22]).PressableOpacity, obj);
      return outer1_11(multiAccountUsers(_handlePressRemove[21]), obj, id.id);
    }),

  ];
  const obj2 = {};
  let obj3 = { themedColor: multiAccountUsers(_handlePressRemove[8]).colors.TEXT_LINK, size: _require(_handlePressRemove[15]).Icon.Sizes.SMALL_20, source: multiAccountUsers(_handlePressRemove[25]) };
  obj2.leading = callback(_require(_handlePressRemove[24]).FormRow.Icon, obj3);
  const intl3 = _require(_handlePressRemove[14]).intl;
  obj2.label = intl3.string(_require(_handlePressRemove[14]).t.bPP34Q);
  obj2.labelStyle = tmp.addAccountLabel;
  obj2.onPress = function handlePressAddAccount() {
    if (multiAccountUsers.length >= outer1_7) {
      let obj = {};
      const intl = arr(_handlePressRemove[14]).intl;
      obj.title = intl.string(arr(_handlePressRemove[14]).t.w7wfXi);
      const intl2 = arr(_handlePressRemove[14]).intl;
      obj = { maxNumAccounts: outer1_7 };
      obj.body = intl2.formatToPlainString(arr(_handlePressRemove[14]).t.WOyelG, obj);
      obj.isDismissable = true;
      multiAccountUsers(_handlePressRemove[13]).show(obj);
      const obj3 = multiAccountUsers(_handlePressRemove[13]);
    } else {
      arr = arr.push(outer1_10.LOGIN);
      obj = multiAccountUsers(_handlePressRemove[11]);
      const obj1 = { source: "choose_account_add_account" };
      obj.track(outer1_9.LOGIN_VIEWED, obj1);
    }
  };
  items[1] = callback(_require(_handlePressRemove[24]).FormRow, obj2);
  obj1.children = items;
  obj.children = callback2(View, obj1);
  return callback(multiAccountUsers(_handlePressRemove[18]), obj);
};
