// Module ID: 15327
// Function ID: 15328
// Name: DevToolsAccountLinkingScreen
// Dependencies: [32, 19, 17, 5063, 6528, 2067, 4655, 21, 4836, 576, 504, 6591, 1613, 6589, 6586, 5999, 5917, 4832, 6024, 5281, 2]
// Exports: default

// Module 15327 (DevToolsAccountLinkingScreen)
import nativeDefault from "native" /* 576 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1613 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import ApplicationStore from "ApplicationStore" /* 5063 */;
import AuthorizedAppsStore from "AuthorizedAppsStore" /* 6528 */;
import GuildStore from "GuildStore" /* 2067 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4655 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

let dependencyMap, importDefault;

let closure_12;
let hasOwnProperty;
let map1;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let size;
let tmp2;
const useStartAuthorizeDefault = tmp2(6586);
const useGetOrFetchApplicationsDefault = tmp2(6589);
({ Image: hasOwnProperty, ScrollView: metroRequire, View: metroImportDefault } = react_native);
({ jsx: closure_12, jsxs: map1 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, scrollContainer: obj3, buttonRow: obj4, rewardImage: size };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, flex: 1 };
createStyles = createStyles.createStyles;
obj3 = { padding: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_16 };
obj4 = { gap: nativeDefault.space.PX_8 };
size = { width: 64, height: 64, borderRadius: nativeDefault.radii.sm };
let closure_14 = createStyles(obj);
size = size_mod;
const result = size.fileFinishedImporting("modules/devtools/native/components/screens/DevToolsAccountLinkingScreen.tsx");

export default function DevToolsAccountLinkingScreen() {
  let closure_1;
  let closure_2;
  let connectionApp;
  let debug;
  let getOrFetchApplication;
  let guildId;
  let hasAlreadyLinked;
  let items5;
  let items6;
  let items9;
  let newestTokenForApplication;
  let obj21;
  let obj22;
  let obj23;
  let obj8;
  let str5;
  let str7;
  let tmp18Result;
  const tmp = closure_14();
  let tmp2 = importDefault;
  let tmp3 = dependencyMap;
  let obj = react;
  const tmp4 = useSafeAreaInsetsDefault();
  const tmp5 = getOrFetchApplication(react.useState(""), 2);
  const value = tmp5[0];
  importDefault = tmp7;
  const items = [SelectedGuildStore];
  const obj2 = value(504);
  dependencyMap = obj2.useStateFromStores(items, () => guildId.getGuildId());
  const items1 = [GuildStore];
  const obj3 = value(504);
  const stateFromStores = obj3.useStateFromStores(items1, () => GuildStore.getGuild(closure_2));
  let gameApplicationIds;
  if (stateFromStores != null) {
    gameApplicationIds = stateFromStores.gameApplicationIds;
  }
  if (gameApplicationIds == null) {
    gameApplicationIds = [];
  }
  const arr4 = useGetOrFetchApplicationsDefault(gameApplicationIds);
  let found = arr4.filter((item) => null != item);
  const tmp8Result = value(6589);
  getOrFetchApplication = tmp8Result.useGetOrFetchApplication(value);
  const items2 = [ApplicationStore];
  const tmp8Result3 = value(504);
  const stateFromStoresArray = tmp8Result3.useStateFromStoresArray(items2, () => {
    let application;
    let found;
    if (getOrFetchApplication != null) {
      const linkedGames = getOrFetchApplication.linkedGames;
      if (linkedGames != null) {
        const mapped = linkedGames.map((id) => application.getApplication(id.id));
        found = mapped.filter((item) => null != item);
      }
    }
    if (found == null) {
      found = [];
    }
    return found;
  });
  const tmp11 = useStartAuthorizeDefault(getOrFetchApplication, { debug: true });
  ({ startAuthorization: react, hasAlreadyLinked, debug, connectionApp } = tmp11);
  let id;
  const canStartAuthorization = tmp11.canStartAuthorization;
  if (connectionApp != null) {
    id = connectionApp.id;
  }
  const items3 = [AuthorizedAppsStore];
  const tmp8Result4 = value(504);
  const stateFromStores1 = tmp8Result4.useStateFromStores(items3, () => newestTokenForApplication.getNewestTokenForApplication(id));
  const items4 = [stateFromStores1];
  let str = "N/A";
  let str2 = "N/A";
  const callback = obj.useCallback(() => {
    if (null != stateFromStores1) {
      const obj = stateFromStores1(closure_2[11]);
      obj.delete(tmp.id);
    }
  }, items4);
  const tmp15 = null != stateFromStores1;
  if (stateFromStoresArray.length > 0) {
    let mapped = stateFromStoresArray.map((id) => {
      let name;
      id = undefined;
      if (connectionApp != null) {
        id = connectionApp.id;
      }
      if (id === id.id) {
        const _HermesInternal = HermesInternal;
        name = "" + id.name + "*";
      } else {
        name = id.name;
      }
      return name;
    });
    str2 = mapped.join(", ");
  }
  const obj4 = { style: tmp.container, contentContainerStyle: items5, children: items6 };
  items5 = [tmp.scrollContainer, { paddingBottom: tmp4.bottom + nativeDefault.space.PX_16 }];
  let name;
  ({ paddingBottom: tmp4.bottom + nativeDefault.space.PX_16 });
  const TableRowGroup = tmp8(5999).TableRowGroup;
  const tmp17 = closure_6;
  if (stateFromStores != null) {
    name = stateFromStores.name;
  }
  if (name == null) {
    name = str;
  }
  const obj6 = { title: "Guild Official Games - " + name, hasIcons: false, children: tmp18Result };
  if (null != stateFromStores) {
    let mapped1;
    if (found.length > 0) {
      mapped1 = found.map((name) => {
        let tmpResult;
        const obj = {
          label: "" + name.name + " (" + name.id + ")",
          onPress() {
            return closure_1(name.id);
          },
          trailing: tmpResult
        };
        const TableRow = first(closure_2[16]).TableRow;
        tmpResult = undefined;
        const tmp2 = first;
        const tmp3 = closure_2;
        if (name === name.id) {
          tmpResult = tmp(tmp2(tmp3[17]).Text, { variant: "text-sm/semibold", children: "Selected" });
        }
        return closure_1_12(TableRow, obj, name.id);
      });
    } else {
      mapped1 = tmp18(tmp8(5917).TableRow, { label: "No official games" });
    }
    tmp18Result = mapped1;
  } else {
    tmp18Result = tmp18(tmp8(5917).TableRow, { label: "No guild selected" });
  }
  items6 = [closure_12(TableRowGroup, obj6), , , ];
  const obj7 = { style: obj8, children: closure_12(value(6024).TextInput, { label: "Application ID", value, onChange: tmp5[1] }) };
  obj8 = { padding: nativeDefault.space.PX_12 };
  const TableRowGroup2 = tmp8(5999).TableRowGroup;
  const items7 = [closure_12(closure_7, obj7), , ];
  let TableRow = tmp8(5917).TableRow;
  if (null != getOrFetchApplication) {
    str = getOrFetchApplication.name;
  }
  const obj9 = { title: "Application", hasIcons: false, children: items7 };
  const obj10 = { label: "Name: " + str };
  items7[1] = closure_12(TableRow, obj10);
  const obj11 = { label: "Linked Games: " + str2 };
  const TableRow2 = tmp8(5917).TableRow;
  items7[2] = closure_12(TableRow2, obj11);
  items6[1] = closure_13(TableRowGroup2, obj9);
  const TableRowGroup3 = tmp8(5999).TableRowGroup;
  const TableRow3 = tmp8(5917).TableRow;
  let str4 = "text-feedback-critical";
  const Text = tmp8(4832).Text;
  if (debug.hasConnectionEntrypointUrl) {
    str4 = "text-feedback-positive";
  }
  const obj12 = { variant: "text-sm/semibold", color: str4, children: str5 };
  str5 = "Not set";
  if (debug.hasConnectionEntrypointUrl) {
    str5 = "Set";
  }
  const items8 = [, , ];
  const obj13 = { label: "Connection Entrypoint URL", trailing: closure_12(Text, obj12) };
  items8[0] = closure_12(TableRow3, obj13);
  const TableRow4 = tmp8(5917).TableRow;
  let str6 = "text-muted";
  const Text2 = tmp8(4832).Text;
  if (hasAlreadyLinked) {
    str6 = "text-feedback-positive";
  }
  const obj14 = { variant: "text-sm/semibold", color: str6, children: str7 };
  str7 = "No";
  if (hasAlreadyLinked) {
    str7 = "Yes";
  }
  const obj15 = { title: "Authorization", hasIcons: false, children: items8 };
  const obj16 = { label: "Already Linked", trailing: closure_12(Text2, obj14) };
  items8[1] = closure_12(TableRow4, obj16);
  const obj17 = { style: tmp.buttonRow, children: items9 };
  items9 = [, ];
  const obj18 = {
    disabled: !canStartAuthorization,
    onPress() {
      return react({});
    },
    variant: "primary",
    text: "Start Authorization"
  };
  items9[0] = closure_12(value(5281).Button, obj18);
  const obj19 = { disabled: !tmp15, onPress: callback, variant: "critical-primary", text: "Deauthorize" };
  items9[1] = closure_12(value(5281).Button, obj19);
  items8[2] = closure_13(closure_7, obj17);
  items6[2] = closure_13(TableRowGroup3, obj15);
  let prop;
  if (connectionApp != null) {
    prop = connectionApp.applicationAccountLinkBenefitConfig;
  }
  let tmp16Result = null != prop;
  if (tmp16Result) {
    let tmp18Result2 = null != connectionApp.applicationAccountLinkBenefitConfig.reward_image;
    const TableRowGroup4 = tmp8(5999).TableRowGroup;
    if (tmp18Result2) {
      const obj20 = { style: obj21, children: closure_12(connectionApp, obj22) };
      obj22 = { source: obj23, style: tmp.rewardImage };
      obj21 = { padding: nativeDefault.space.PX_12 };
      obj23 = { uri: connectionApp.applicationAccountLinkBenefitConfig.reward_image };
      tmp18Result2 = tmp18(tmp22, obj20);
    }
    const items10 = [tmp18Result2, ];
    let str8 = connectionApp.applicationAccountLinkBenefitConfig.reward_name;
    const TableRow5 = tmp8(5917).TableRow;
    if (str8 == null) {
      str8 = "Unnamed Reward";
    }
    const obj24 = { title: "Reward Configuration", hasIcons: false, children: items10 };
    let _HermesInternal = HermesInternal;
    const obj25 = { label: "Reward: " + str8 };
    items10[1] = closure_12(TableRow5, obj25);
    tmp16Result = tmp16(TableRowGroup4, obj24);
  }
  items6[3] = tmp16Result;
  return closure_13(tmp17, obj4);
};
