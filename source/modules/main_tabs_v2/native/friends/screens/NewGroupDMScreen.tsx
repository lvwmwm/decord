// Module ID: 15453
// Function ID: 118867
// Name: handleOneRecipientInDM
// Dependencies: [57, 5, 31, 27, 1348, 12679, 4202, 1849, 8818, 653, 33, 4130, 689, 4140, 4341, 8922, 10815, 4098, 566, 15443, 675, 3831, 1212, 9122, 8830, 12165, 7460, 7001, 1273, 8819, 2]
// Exports: default

// Module 15453 (handleOneRecipientInDM)
import _slicedToArray from "_slicedToArray";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import result from "result";
import get_ActivityIndicator from "getInviteURL";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import closure_10 from "_isNativeReflectConstruct";
import closure_11 from "_isNativeReflectConstruct";
import { UserRowModes } from "UserRowModes";
import ME from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_13;
let closure_14;
let closure_15;
let closure_16;
let closure_17;
let closure_18;
let closure_6;
let closure_7;
const require = arg1;
function handleOneRecipientInDM() {
  return _handleOneRecipientInDM(...arguments);
}
function _handleOneRecipientInDM() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback2(tmp);
  return obj(...arguments);
}
function _handleInviteUsers() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback2(tmp);
  return obj(...arguments);
}
({ ActivityIndicator: closure_6, View: closure_7 } = get_ActivityIndicator);
({ InstantInviteSources: closure_13, AnalyticEvents: closure_14, AnalyticsSections: closure_15, NEW_GROUP_DM_POPOUT_ID: closure_16 } = ME);
({ jsx: closure_17, jsxs: closure_18 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { color: require("_createForOfIteratorHelperLoose").colors.INTERACTIVE_TEXT_ACTIVE };
_createForOfIteratorHelperLoose.button = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.container = { height: "100%", display: "flex" };
_createForOfIteratorHelperLoose.instantInviteView = { flexShrink: 1, backgroundColor: require("_createForOfIteratorHelperLoose").colors.MOBILE_ACTIONSHEET_BACKGROUND };
let obj1 = { flexShrink: 1, backgroundColor: require("_createForOfIteratorHelperLoose").colors.MOBILE_ACTIONSHEET_BACKGROUND };
_createForOfIteratorHelperLoose.nameInputContainer = { paddingHorizontal: 16, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW };
let obj3 = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOWER, marginBottom: 8, height: 40, width: "100%" };
_createForOfIteratorHelperLoose.nameInput = obj3;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj2 = { paddingHorizontal: 16, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW };
let result = require("result").fileFinishedImporting("modules/main_tabs_v2/native/friends/screens/NewGroupDMScreen.tsx");

export default function NewGroupDMScreen(navigation) {
  let c15;
  let c16;
  let importDefault;
  let locationPage;
  navigation = navigation.navigation;
  const params = navigation.route.params;
  ({ channelId: importDefault, locationPage } = params);
  let flag = params.allowNameEdit;
  if (flag === undefined) {
    flag = false;
  }
  let callback;
  let stateFromStores;
  let stateFromStores1;
  let first;
  let closure_7;
  let first1;
  let closure_9;
  let first2;
  let memo;
  let UserRowModes;
  let c13;
  callback = undefined;
  c15 = undefined;
  c16 = undefined;
  const tmp = _createForOfIteratorHelperLoose();
  callback = tmp;
  let obj = navigation(locationPage[18]);
  let items = [first1];
  stateFromStores = obj.useStateFromStores(items, () => first1.getChannel(closure_1));
  let obj2 = navigation(locationPage[18]);
  const items1 = [memo];
  stateFromStores1 = obj2.useStateFromStores(items1, () => memo.getCurrentUser());
  const tmp3 = callback(stateFromStores1.useState([]), 2);
  first = tmp3[0];
  closure_7 = tmp3[1];
  const tmp4 = callback(stateFromStores1.useState(false), 2);
  first1 = tmp4[0];
  closure_9 = tmp4[1];
  const tmp6 = callback(stateFromStores1.useState(""), 2);
  first2 = tmp6[0];
  const items2 = [stateFromStores];
  memo = stateFromStores1.useMemo(() => {
    let recipients;
    if (null != stateFromStores) {
      recipients = stateFromStores.recipients;
    }
    if (null == recipients) {
      recipients = [];
    }
    return recipients;
  }, items2);
  let num = 0;
  if (null != memo.length) {
    num = length;
  }
  const sum = first.length + (num + 1);
  UserRowModes = sum;
  const tmp9 = sum > importDefault(locationPage[19])(stateFromStores);
  c13 = tmp9;
  const items3 = [locationPage];
  // CreateGeneratorClosureLongIndex (0x67)
  const items4 = [stateFromStores, navigation, memo, first, first2];
  callback = stateFromStores1.useCallback(stateFromStores(stateFromStores1.useEffect(() => {
    let obj = outer1_1(locationPage[20]);
    obj = { type: _undefined.DM_INVITE, location: obj };
    obj = { page: locationPage };
    obj.track(callback.OPEN_POPOUT, obj);
  }, items3)), items4);
  const items5 = [stateFromStores, first1, navigation, sum, tmp9, memo, first, callback, tmp];
  const layoutEffect = stateFromStores1.useLayoutEffect(() => {
    if (null != stateFromStores) {
      if (stateFromStores.isGroupDM()) {
        let intl2 = navigation(locationPage[22]).intl;
        let stringResult = intl2.string(navigation(locationPage[22]).t["LR+Ptf"]);
      }
      navigation = stringResult;
      if (null != stateFromStores) {
        stateFromStores.isGroupDM();
      }
      const intl3 = navigation(locationPage[22]).intl;
      let obj = { numMembers: c12, maxMemberLimit: outer1_1(locationPage[19])(stateFromStores) };
      const formatToPlainStringResult = intl3.formatToPlainString(navigation(locationPage[22]).t.YUhnoy, obj);
      let closure_1 = formatToPlainStringResult;
      obj = {};
      const _HermesInternal = HermesInternal;
      obj.title = "" + stringResult + " (" + formatToPlainStringResult + ")";
      obj.headerTitle = function headerTitle(arg0) {
        if (arg0 == null) {
          HermesBuiltin.throwTypeError("Cannot destructure 'undefined' or 'null'.");
          throw undefined;
        } else {
          const merged = Object.assign(arg0, undefined);
          const obj = {};
          const merged1 = Object.assign(merged);
          obj["title"] = closure_0;
          obj["subtitle"] = closure_1;
          let str = "mobile-text-heading-primary";
          if (outer1_13) {
            str = "text-feedback-critical";
          }
          obj["color"] = str;
          return outer2_17(navigation(locationPage[23]).GenericHeaderTitle, obj);
        }
      };
      obj.headerRight = function headerRight(arg0) {
        if (outer1_8) {
          let obj = { color: outer1_3.button.color, size: "small" };
          let result = outer2_17(first, obj);
        } else {
          let isGroupDMResult = outer1_4;
          if (null != outer1_4) {
            isGroupDMResult = outer1_4.isGroupDM();
            if (isGroupDMResult) {
              const intl2 = navigation(locationPage[22]).intl;
              // CreateGeneratorClosureLongIndex (0x67)
              const obj3 = navigation(locationPage[23]);
              obj = {};
              const renderHeaderTextButton = obj3.getRenderHeaderTextButton(intl2.string(navigation(locationPage[22]).t.OYkgVk), stateFromStores(tmp));
              const merged = Object.assign(arg0);
              let tmp23 = outer1_13;
              if (!outer1_13) {
                let isGroupDMResult1;
                if (null != outer1_4) {
                  isGroupDMResult1 = outer1_4.isGroupDM();
                }
                if (isGroupDMResult1) {
                  isGroupDMResult1 = outer1_6.length <= 0;
                }
                tmp23 = isGroupDMResult1;
              }
              obj["disabled"] = tmp23;
              result = renderHeaderTextButton(obj);
              const stringResult = intl2.string(navigation(locationPage[22]).t.OYkgVk);
            }
          }
          obj = navigation(locationPage[23]);
          const intl = navigation(locationPage[22]).intl;
          // CreateGeneratorClosureLongIndex (0x67)
          const obj1 = {};
          const renderHeaderTextButton1 = obj.getRenderHeaderTextButton(intl.string(navigation(locationPage[22]).t.CumH4u), stateFromStores(isGroupDMResult));
          const merged1 = Object.assign(arg0);
          obj1["disabled"] = outer1_13;
          result = renderHeaderTextButton1(obj1);
          const stringResult1 = intl.string(navigation(locationPage[22]).t.CumH4u);
        }
        return result;
      };
      navigation.setOptions(obj);
    }
    let intl = navigation(locationPage[22]).intl;
    stringResult = intl.string(navigation(locationPage[22]).t["3hF1W4"]);
  }, items5);
  const callback1 = stateFromStores1.useCallback((arg0) => {
    let closure_0 = arg0;
    callback((arr) => {
      const index = arr.indexOf(user.id);
      const items = [...arr];
      if (-1 === index) {
        items.push(user.id);
      } else {
        items.splice(index, 1);
      }
      return items;
    });
  }, []);
  [c15, c16] = callback(stateFromStores1.useState(false), 2);
  obj = { style: tmp.container };
  let isGroupDMResult;
  const tmp13 = callback(stateFromStores1.useState(false), 2);
  if (null != stateFromStores) {
    isGroupDMResult = stateFromStores.isGroupDM();
  }
  if (isGroupDMResult) {
    isGroupDMResult = null != stateFromStores1;
  }
  if (isGroupDMResult) {
    isGroupDMResult = sum < importDefault(locationPage[19])(stateFromStores);
  }
  if (isGroupDMResult) {
    obj = { style: tmp.instantInviteView };
    let obj1 = {
      onItemPressed: (() => {
          // CreateGeneratorClosureLongIndex (0x67)
          let closure_0 = stateFromStores(tmp);
          return function() {
            return callback(...arguments);
          };
        })()
    };
    obj.children = callback3(importDefault(locationPage[25]), obj1);
    isGroupDMResult = callback3(closure_7, obj);
    const tmp24 = importDefault(locationPage[25]);
  }
  const items6 = [isGroupDMResult, , ];
  let tmp25 = null;
  if (flag) {
    obj2 = { style: tmp.nameInputContainer };
    let obj3 = { style: tmp.nameInput, value: first2, onChangeText: tmp6[1] };
    let intl = navigation(locationPage[22]).intl;
    obj3.placeholder = intl.string(navigation(locationPage[22]).t.KSVhrX);
    obj2.children = callback3(navigation(locationPage[28]).TextInput, obj3);
    tmp25 = callback3(closure_7, obj2);
  }
  items6[1] = tmp25;
  const tmp14 = importDefault(locationPage[24])();
  const tmp15 = closure_18;
  const tmp16 = closure_7;
  items6[2] = callback3(importDefault(locationPage[29]), { rowMode: UserRowModes.TOGGLE, onSelectUser: callback1, disabledUserIds: memo, selectedUserIds: first, withAffinitySuggestions: true, withAlphabeticalSections: false, disableGradient: true, disableStickySections: importDefault(locationPage[24])() });
  obj.children = items6;
  return tmp15(tmp16, obj);
};
