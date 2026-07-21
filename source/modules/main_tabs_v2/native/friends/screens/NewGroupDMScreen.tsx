// Module ID: 15325
// Function ID: 116611
// Name: handleOneRecipientInDM
// Dependencies: []
// Exports: default

// Module 15325 (handleOneRecipientInDM)
function handleOneRecipientInDM() {
  return _handleOneRecipientInDM(...arguments);
}
function _handleOneRecipientInDM() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback2(tmp);
  const _handleOneRecipientInDM = obj;
  return obj(...arguments);
}
function _handleInviteUsers() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback2(tmp);
  const _handleInviteUsers = obj;
  return obj(...arguments);
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importAll(dependencyMap[2]);
({ ActivityIndicator: closure_6, View: closure_7 } = arg1(dependencyMap[3]));
let closure_8 = importDefault(dependencyMap[4]);
let closure_9 = importDefault(dependencyMap[5]);
let closure_10 = importDefault(dependencyMap[6]);
let closure_11 = importDefault(dependencyMap[7]);
const UserRowModes = arg1(dependencyMap[8]).UserRowModes;
const tmp2 = arg1(dependencyMap[3]);
({ InstantInviteSources: closure_13, AnalyticEvents: closure_14, AnalyticsSections: closure_15, NEW_GROUP_DM_POPOUT_ID: closure_16 } = arg1(dependencyMap[9]));
const tmp3 = arg1(dependencyMap[9]);
({ jsx: closure_17, jsxs: closure_18 } = arg1(dependencyMap[10]));
let obj = arg1(dependencyMap[11]);
obj = {};
obj = { color: importDefault(dependencyMap[12]).colors.INTERACTIVE_TEXT_ACTIVE };
obj.button = obj;
obj.container = { "Bool(true)": null, "Bool(true)": null };
const tmp4 = arg1(dependencyMap[10]);
obj.instantInviteView = { flexShrink: 1, backgroundColor: importDefault(dependencyMap[12]).colors.MOBILE_ACTIONSHEET_BACKGROUND };
const obj1 = { flexShrink: 1, backgroundColor: importDefault(dependencyMap[12]).colors.MOBILE_ACTIONSHEET_BACKGROUND };
obj.nameInputContainer = { paddingHorizontal: 16, backgroundColor: importDefault(dependencyMap[12]).colors.BACKGROUND_BASE_LOW };
const obj2 = { paddingHorizontal: 16, backgroundColor: importDefault(dependencyMap[12]).colors.BACKGROUND_BASE_LOW };
obj.nameInput = { backgroundColor: importDefault(dependencyMap[12]).colors.BACKGROUND_BASE_LOWER };
let closure_19 = obj.createStyles(obj);
const obj3 = { backgroundColor: importDefault(dependencyMap[12]).colors.BACKGROUND_BASE_LOWER };
const result = arg1(dependencyMap[30]).fileFinishedImporting("modules/main_tabs_v2/native/friends/screens/NewGroupDMScreen.tsx");

export default function NewGroupDMScreen(navigation) {
  let locationPage;
  navigation = navigation.navigation;
  const arg1 = navigation;
  const params = navigation.route.params;
  ({ channelId: closure_1, locationPage } = params);
  const dependencyMap = locationPage;
  let flag = params.allowNameEdit;
  if (flag === undefined) {
    flag = false;
  }
  let callback;
  let callback2;
  let React;
  let first;
  let closure_7;
  let closure_8;
  let closure_9;
  let closure_10;
  let closure_11;
  let UserRowModes;
  let tmp9;
  callback = undefined;
  let closure_15;
  let closure_16;
  const tmp = callback4();
  callback = tmp;
  let obj = arg1(dependencyMap[18]);
  const items = [closure_8];
  const stateFromStores = obj.useStateFromStores(items, () => first1.getChannel(closure_1));
  callback2 = stateFromStores;
  let obj2 = arg1(dependencyMap[18]);
  const items1 = [closure_11];
  const stateFromStores1 = obj2.useStateFromStores(items1, () => memo.getCurrentUser());
  React = stateFromStores1;
  const tmp3 = callback(React.useState([]), 2);
  first = tmp3[0];
  closure_7 = tmp3[1];
  const tmp4 = callback(React.useState(false), 2);
  const first1 = tmp4[0];
  closure_8 = first1;
  closure_9 = tmp4[1];
  const tmp6 = callback(React.useState(""), 2);
  const first2 = tmp6[0];
  closure_10 = first2;
  const items2 = [stateFromStores];
  const memo = React.useMemo(() => {
    let recipients;
    if (null != stateFromStores) {
      recipients = stateFromStores.recipients;
    }
    if (null == recipients) {
      recipients = [];
    }
    return recipients;
  }, items2);
  closure_11 = memo;
  let num = 0;
  if (null != memo.length) {
    num = length;
  }
  const sum = first.length + (num + 1);
  UserRowModes = sum;
  tmp9 = sum > importDefault(dependencyMap[19])(stateFromStores);
  const items3 = [locationPage];
  // CreateGeneratorClosureLongIndex (0x67)
  const items4 = [stateFromStores, navigation, memo, first, first2];
  callback = React.useCallback(callback2(React.useEffect(() => {
    let obj = callback(locationPage[20]);
    obj = { type: constants.DM_INVITE, location: obj };
    obj = { page: locationPage };
    obj.track(callback.OPEN_POPOUT, obj);
  }, items3)), items4);
  const items5 = [stateFromStores, first1, navigation, sum, tmp9, memo, first, callback, tmp];
  const layoutEffect = React.useLayoutEffect(() => {
    if (null != stateFromStores) {
      if (stateFromStores.isGroupDM()) {
        const intl2 = navigation(locationPage[22]).intl;
        let stringResult = intl2.string(navigation(locationPage[22]).t.LR+Ptf);
      }
      const navigation = stringResult;
      if (null != stateFromStores) {
        stateFromStores.isGroupDM();
      }
      const intl3 = navigation(locationPage[22]).intl;
      let obj = { numMembers: sum, maxMemberLimit: formatToPlainStringResult(locationPage[19])(stateFromStores) };
      const formatToPlainStringResult = intl3.formatToPlainString(navigation(locationPage[22]).t.YUhnoy, obj);
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
          obj["title"] = stringResult;
          obj["subtitle"] = formatToPlainStringResult;
          let str = "mobile-text-heading-primary";
          if (closure_13) {
            str = "text-feedback-critical";
          }
          obj["color"] = str;
          return closure_17(stringResult(closure_2[23]).GenericHeaderTitle, obj);
        }
      };
      obj.headerRight = function headerRight(arg0) {
        if (closure_8) {
          let obj = { color: button.button.color, size: "small" };
          let result = callback(length, obj);
        } else {
          let isGroupDMResult = lib;
          if (null != lib) {
            isGroupDMResult = lib.isGroupDM();
            if (isGroupDMResult) {
              const intl2 = stringResult(closure_2[22]).intl;
              // CreateGeneratorClosureLongIndex (0x67)
              const stringResult = intl2.string(stringResult(closure_2[22]).t.OYkgVk);
              obj = {};
              const renderHeaderTextButton = stringResult(closure_2[23]).getRenderHeaderTextButton(stringResult, lib(tmp));
              const merged = Object.assign(arg0);
              let tmp23 = closure_13;
              if (!closure_13) {
                let isGroupDMResult1;
                if (null != lib) {
                  isGroupDMResult1 = lib.isGroupDM();
                }
                if (isGroupDMResult1) {
                  isGroupDMResult1 = length.length <= 0;
                }
                tmp23 = isGroupDMResult1;
              }
              obj["disabled"] = tmp23;
              result = renderHeaderTextButton(obj);
              const obj3 = stringResult(closure_2[23]);
            }
          }
          obj = stringResult(closure_2[23]);
          const intl = stringResult(closure_2[22]).intl;
          // CreateGeneratorClosureLongIndex (0x67)
          const obj1 = {};
          const renderHeaderTextButton1 = obj.getRenderHeaderTextButton(intl.string(stringResult(closure_2[22]).t.CumH4u), lib(isGroupDMResult));
          const merged1 = Object.assign(arg0);
          obj1["disabled"] = closure_13;
          result = renderHeaderTextButton1(obj1);
          const stringResult1 = intl.string(stringResult(closure_2[22]).t.CumH4u);
        }
        return result;
      };
      navigation.setOptions(obj);
    }
    const intl = navigation(locationPage[22]).intl;
    stringResult = intl.string(navigation(locationPage[22]).t.3hF1W4);
  }, items5);
  const callback1 = React.useCallback((arg0) => {
    const navigation = arg0;
    callback2((arr) => {
      const index = arr.indexOf(arr.id);
      const items = [...arr];
      if (-1 === index) {
        items.push(arr.id);
      } else {
        items.splice(index, 1);
      }
      return items;
    });
  }, []);
  [closure_15, closure_16] = callback(React.useState(false), 2);
  obj = { style: tmp.container };
  let isGroupDMResult;
  const tmp13 = callback(React.useState(false), 2);
  if (null != stateFromStores) {
    isGroupDMResult = stateFromStores.isGroupDM();
  }
  if (isGroupDMResult) {
    isGroupDMResult = null != stateFromStores1;
  }
  if (isGroupDMResult) {
    isGroupDMResult = sum < importDefault(dependencyMap[19])(stateFromStores);
  }
  if (isGroupDMResult) {
    obj = { style: tmp.instantInviteView };
    const obj1 = {
      onItemPressed: () => {
          // CreateGeneratorClosureLongIndex (0x67)
          let closure_0 = stateFromStores(tmp);
          return function() {
            return callback(...arguments);
          };
        }()
    };
    obj.children = callback3(importDefault(dependencyMap[25]), obj1);
    isGroupDMResult = callback3(closure_7, obj);
    const tmp24 = importDefault(dependencyMap[25]);
  }
  const items6 = [isGroupDMResult, , ];
  let tmp25 = null;
  if (flag) {
    obj2 = { style: tmp.nameInputContainer };
    const obj3 = { style: tmp.nameInput, value: first2, onChangeText: tmp6[1] };
    const intl = arg1(dependencyMap[22]).intl;
    obj3.placeholder = intl.string(arg1(dependencyMap[22]).t.KSVhrX);
    obj2.children = callback3(arg1(dependencyMap[28]).TextInput, obj3);
    tmp25 = callback3(closure_7, obj2);
  }
  items6[1] = tmp25;
  const tmp14 = importDefault(dependencyMap[24])();
  const tmp15 = closure_18;
  const tmp16 = closure_7;
  items6[2] = callback3(importDefault(dependencyMap[29]), { rowMode: UserRowModes.TOGGLE, onSelectUser: callback1, disabledUserIds: memo, selectedUserIds: first, withAffinitySuggestions: true, withAlphabeticalSections: false, disableGradient: true, disableStickySections: importDefault(dependencyMap[24])() });
  obj.children = items6;
  return tmp15(tmp16, obj);
};
