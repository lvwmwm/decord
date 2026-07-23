// Module ID: 14695
// Function ID: 112043
// Name: DevToolsAccountLinkingScreen
// Dependencies: [57, 31, 27, 4167, 5066, 1838, 3947, 33, 4130, 689, 566, 5472, 1557, 5470, 5467, 5503, 5165, 4126, 7512, 4543, 2]
// Exports: default

// Module 14695 (DevToolsAccountLinkingScreen)
import _slicedToArray from "_slicedToArray";
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import closure_10 from "_createForOfIteratorHelperLoose";
import closure_11 from "_isNativeReflectConstruct";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_12;
let closure_13;
let closure_5;
let closure_6;
let closure_7;
const require = arg1;
({ Image: closure_5, ScrollView: closure_6, View: closure_7 } = get_ActivityIndicator);
({ jsx: closure_12, jsxs: closure_13 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW, flex: 1 };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.scrollContainer = { padding: require("_createForOfIteratorHelperLoose").space.PX_16, gap: require("_createForOfIteratorHelperLoose").space.PX_16 };
let obj1 = { padding: require("_createForOfIteratorHelperLoose").space.PX_16, gap: require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose.buttonRow = { gap: require("_createForOfIteratorHelperLoose").space.PX_8 };
let obj3 = { width: 64, height: 64, borderRadius: require("_createForOfIteratorHelperLoose").radii.sm };
_createForOfIteratorHelperLoose.rewardImage = obj3;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj2 = { gap: require("_createForOfIteratorHelperLoose").space.PX_8 };
const result = require("get ActivityIndicator").fileFinishedImporting("modules/devtools/native/components/screens/DevToolsAccountLinkingScreen.tsx");

export default function DevToolsAccountLinkingScreen() {
  let canDeauthorize;
  let result;
  let connectionApp;
  let deauthorize;
  let debug;
  let hasAlreadyLinked;
  const tmp = _createForOfIteratorHelperLoose();
  const tmp3 = getOrFetchApplication(React.useState(""), 2);
  const first = tmp3[0];
  const importDefault = tmp5;
  let obj = first(566);
  let items = [closure_11];
  const dependencyMap = obj.useStateFromStores(items, () => outer1_11.getGuildId());
  let obj1 = first(566);
  let items1 = [closure_10];
  let stateFromStores = obj1.useStateFromStores(items1, () => outer1_10.getGuild(closure_2));
  let gameApplicationIds;
  if (null != stateFromStores) {
    gameApplicationIds = stateFromStores.gameApplicationIds;
  }
  if (null == gameApplicationIds) {
    gameApplicationIds = [];
  }
  let tmp2 = importDefault(1557)();
  let found = importDefault(5470)(gameApplicationIds).filter((arg0) => null != arg0);
  let obj2 = first(5470);
  getOrFetchApplication = obj2.useGetOrFetchApplication(first);
  let obj3 = first(566);
  const items2 = [_isNativeReflectConstruct];
  const stateFromStoresArray = obj3.useStateFromStoresArray(items2, () => {
    let found;
    if (null != getOrFetchApplication) {
      const linkedGames = getOrFetchApplication.linkedGames;
      if (null != linkedGames) {
        const mapped = linkedGames.map((id) => outer2_8.getApplication(id.id));
        found = mapped.filter((arg0) => null != arg0);
      }
    }
    if (null == found) {
      found = [];
    }
    return found;
  });
  const tmp8 = importDefault(5467)(getOrFetchApplication, { debug: true });
  ({ startAuthorization: result, hasAlreadyLinked, debug, connectionApp } = tmp8);
  let id;
  if (null != connectionApp) {
    id = connectionApp.id;
  }
  const arr4 = importDefault(5470)(gameApplicationIds);
  let str = "N/A";
  let str2 = "N/A";
  ({ canDeauthorize, deauthorize } = (function useDeauthorize(id) {
    let closure_0 = id;
    let obj = first(566);
    const items = [outer1_9];
    const stateFromStores = obj.useStateFromStores(items, () => outer2_9.getNewestTokenForApplication(closure_0));
    const items1 = [stateFromStores];
    obj = {
      canDeauthorize: null != stateFromStores,
      deauthorize: outer1_4.useCallback(() => {
        if (null != stateFromStores) {
          stateFromStores(table[11]).delete(stateFromStores.id);
          const obj = stateFromStores(table[11]);
        }
      }, items1)
    };
    return obj;
  })(id));
  if (stateFromStoresArray.length > 0) {
    let mapped = stateFromStoresArray.map((id) => {
      id = undefined;
      if (null != connectionApp) {
        id = connectionApp.id;
      }
      if (id === id.id) {
        const _HermesInternal = HermesInternal;
        let name = "" + id.name + "*";
      } else {
        name = id.name;
      }
      return name;
    });
    str2 = mapped.join(", ");
  }
  obj = { style: tmp.container };
  const items3 = [tmp.scrollContainer, ];
  obj = { paddingBottom: tmp2.bottom + importDefault(689).space.PX_16 };
  items3[1] = obj;
  obj.contentContainerStyle = items3;
  obj1 = {};
  let name;
  if (null != stateFromStores) {
    name = stateFromStores.name;
  }
  let tmp15 = str;
  if (null != name) {
    tmp15 = name;
  }
  obj1.title = "Guild Official Games - " + tmp15;
  obj1.hasIcons = false;
  if (null != stateFromStores) {
    if (found.length > 0) {
      let mapped1 = found.map((name) => {
        let closure_0 = name;
        const obj = {
          label: "" + name.name + " (" + name.id + ")",
          onPress() {
            return outer1_1(name.id);
          }
        };
        let tmp2;
        if (closure_0 === name.id) {
          tmp2 = outer1_12(first(4126).Text, { variant: "text-sm/semibold", children: "Selected" });
        }
        obj.trailing = tmp2;
        return outer1_12(first(5165).TableRow, obj, name.id);
      });
    } else {
      obj2 = { label: "No official games" };
      mapped1 = callback(first(5165).TableRow, obj2);
    }
  } else {
    obj3 = { label: "No guild selected" };
    obj1.children = callback(first(5165).TableRow, obj3);
    const items4 = [callback(first(5503).TableRowGroup, obj1), , , ];
    const obj4 = { title: "Application", hasIcons: false };
    const obj5 = {};
    const obj6 = { padding: importDefault(689).space.PX_12 };
    obj5.style = obj6;
    const obj7 = { label: "Application ID", value: first, onChange: tmp5 };
    obj5.children = callback(first(7512).TextInput, obj7);
    const items5 = [callback(closure_7, obj5), , ];
    const obj8 = {};
    if (null != getOrFetchApplication) {
      str = getOrFetchApplication.name;
    }
    let _HermesInternal = HermesInternal;
    obj8.label = "Name: " + str;
    items5[1] = callback(first(5165).TableRow, obj8);
    const obj9 = {};
    const _HermesInternal2 = HermesInternal;
    obj9.label = "Linked Games: " + str2;
    items5[2] = callback(first(5165).TableRow, obj9);
    obj4.children = items5;
    items4[1] = callback2(first(5503).TableRowGroup, obj4);
    const obj10 = { title: "Authorization", hasIcons: false };
    const obj11 = { label: "Connection Entrypoint URL" };
    const obj12 = { variant: "text-sm/semibold" };
    let str11 = "text-feedback-critical";
    if (debug.hasConnectionEntrypointUrl) {
      str11 = "text-feedback-positive";
    }
    obj12.color = str11;
    let str12 = "Not set";
    if (debug.hasConnectionEntrypointUrl) {
      str12 = "Set";
    }
    obj12.children = str12;
    obj11.trailing = callback(first(4126).Text, obj12);
    const items6 = [callback(first(5165).TableRow, obj11), , ];
    const obj13 = { label: "Already Linked" };
    const obj14 = { variant: "text-sm/semibold" };
    let str14 = "text-muted";
    if (hasAlreadyLinked) {
      str14 = "text-feedback-positive";
    }
    obj14.color = str14;
    let str15 = "No";
    if (hasAlreadyLinked) {
      str15 = "Yes";
    }
    obj14.children = str15;
    obj13.trailing = callback(first(4126).Text, obj14);
    items6[1] = callback(first(5165).TableRow, obj13);
    const obj15 = { style: tmp.buttonRow };
    const obj16 = {
      disabled: !tmp8.canStartAuthorization,
      onPress() {
          return callback({});
        },
      variant: "primary",
      text: "Start Authorization"
    };
    const items7 = [callback(first(4543).Button, obj16), ];
    const obj17 = { disabled: !canDeauthorize, onPress: deauthorize, variant: "critical-primary", text: "Deauthorize" };
    items7[1] = callback(first(4543).Button, obj17);
    obj15.children = items7;
    items6[2] = callback2(closure_7, obj15);
    obj10.children = items6;
    items4[2] = callback2(first(5503).TableRowGroup, obj10);
    let prop;
    if (null != connectionApp) {
      prop = connectionApp.applicationAccountLinkBenefitConfig;
    }
    let tmp44Result = null != prop;
    if (tmp44Result) {
      const obj18 = { title: "Reward Configuration", hasIcons: false };
      let tmp47 = null != connectionApp.applicationAccountLinkBenefitConfig.reward_image;
      if (tmp47) {
        const obj19 = {};
        const obj20 = { padding: importDefault(689).space.PX_12 };
        obj19.style = obj20;
        const obj21 = {};
        const obj22 = { uri: connectionApp.applicationAccountLinkBenefitConfig.reward_image };
        obj21.source = obj22;
        obj21.style = tmp.rewardImage;
        obj19.children = callback(connectionApp, obj21);
        tmp47 = callback(closure_7, obj19);
      }
      const items8 = [tmp47, ];
      const obj23 = {};
      const reward_name = connectionApp.applicationAccountLinkBenefitConfig.reward_name;
      let str20 = "Unnamed Reward";
      if (null != reward_name) {
        str20 = reward_name;
      }
      const _HermesInternal3 = HermesInternal;
      obj23.label = "Reward: " + str20;
      items8[1] = callback(first(5165).TableRow, obj23);
      obj18.children = items8;
      tmp44Result = callback2(first(5503).TableRowGroup, obj18);
      const tmp44 = callback2;
      const tmp53 = callback;
    }
    items4[3] = tmp44Result;
    obj.children = items4;
    return callback2(closure_6, obj);
  }
};
