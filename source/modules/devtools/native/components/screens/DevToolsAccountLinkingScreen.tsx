// Module ID: 14569
// Function ID: 109804
// Name: DevToolsAccountLinkingScreen
// Dependencies: []
// Exports: default

// Module 14569 (DevToolsAccountLinkingScreen)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
({ Image: closure_5, ScrollView: closure_6, View: closure_7 } = arg1(dependencyMap[2]));
let closure_8 = importDefault(dependencyMap[3]);
let closure_9 = importDefault(dependencyMap[4]);
let closure_10 = importDefault(dependencyMap[5]);
let closure_11 = importDefault(dependencyMap[6]);
const tmp2 = arg1(dependencyMap[2]);
({ jsx: closure_12, jsxs: closure_13 } = arg1(dependencyMap[7]));
let obj = arg1(dependencyMap[8]);
obj = {};
obj = { backgroundColor: importDefault(dependencyMap[9]).colors.BACKGROUND_BASE_LOW, flex: 1 };
obj.container = obj;
const tmp3 = arg1(dependencyMap[7]);
obj.scrollContainer = { padding: importDefault(dependencyMap[9]).space.PX_16, gap: importDefault(dependencyMap[9]).space.PX_16 };
const obj1 = { padding: importDefault(dependencyMap[9]).space.PX_16, gap: importDefault(dependencyMap[9]).space.PX_16 };
obj.buttonRow = { gap: importDefault(dependencyMap[9]).space.PX_8 };
const obj3 = { bhk: 0.000000000000000000000000000000000000000000000000000000000000041334633291766945, bic: 241505615215171200000000000000000000000000000000000000000000000000000000000000000000, borderRadius: importDefault(dependencyMap[9]).radii.sm };
obj.rewardImage = obj3;
let closure_14 = obj.createStyles(obj);
const obj2 = { gap: importDefault(dependencyMap[9]).space.PX_8 };
const result = arg1(dependencyMap[20]).fileFinishedImporting("modules/devtools/native/components/screens/DevToolsAccountLinkingScreen.tsx");

export default function DevToolsAccountLinkingScreen() {
  let canDeauthorize;
  let connectionApp;
  let deauthorize;
  let debug;
  let hasAlreadyLinked;
  const tmp = callback4();
  const tmp3 = callback(React.useState(""), 2);
  const first = tmp3[0];
  const arg1 = first;
  const importDefault = tmp5;
  let obj = arg1(closure_2[10]);
  const items = [closure_11];
  closure_2 = obj.useStateFromStores(items, () => guildId.getGuildId());
  let obj1 = arg1(closure_2[10]);
  const items1 = [closure_10];
  const stateFromStores = obj1.useStateFromStores(items1, () => guild.getGuild(closure_2));
  let gameApplicationIds;
  if (null != stateFromStores) {
    gameApplicationIds = stateFromStores.gameApplicationIds;
  }
  if (null == gameApplicationIds) {
    gameApplicationIds = [];
  }
  const tmp2 = importDefault(closure_2[12])();
  const found = importDefault(closure_2[13])(gameApplicationIds).filter((arg0) => null != arg0);
  let obj2 = arg1(closure_2[13]);
  const getOrFetchApplication = obj2.useGetOrFetchApplication(first);
  const callback = getOrFetchApplication;
  let obj3 = arg1(closure_2[10]);
  const items2 = [closure_8];
  const stateFromStoresArray = obj3.useStateFromStoresArray(items2, () => {
    let found;
    if (null != getOrFetchApplication) {
      const linkedGames = getOrFetchApplication.linkedGames;
      if (null != linkedGames) {
        const mapped = linkedGames.map((id) => application.getApplication(id.id));
        found = mapped.filter((arg0) => null != arg0);
      }
    }
    if (null == found) {
      found = [];
    }
    return found;
  });
  const tmp8 = importDefault(closure_2[14])(getOrFetchApplication, { debug: true });
  ({ startAuthorization: closure_4, hasAlreadyLinked, debug, connectionApp } = tmp8);
  let id;
  if (null != connectionApp) {
    id = connectionApp.id;
  }
  const arr4 = importDefault(closure_2[13])(gameApplicationIds);
  let str = "N/A";
  let str2 = "N/A";
  ({ canDeauthorize, deauthorize } = function useDeauthorize(id) {
    const first = id;
    let obj = first(closure_2[10]);
    const items = [closure_9];
    const stateFromStores = obj.useStateFromStores(items, () => newestTokenForApplication.getNewestTokenForApplication(arg0));
    const items1 = [stateFromStores];
    obj = {
      canDeauthorize: null != stateFromStores,
      deauthorize: React.useCallback(() => {
        if (null != stateFromStores) {
          stateFromStores(closure_2[11]).delete(stateFromStores.id);
          const obj = stateFromStores(closure_2[11]);
        }
      }, items1)
    };
    return obj;
  }(id));
  if (stateFromStoresArray.length > 0) {
    const mapped = stateFromStoresArray.map((id) => {
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
  obj = { paddingBottom: tmp2.bottom + importDefault(closure_2[9]).space.PX_16 };
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
        const first = name;
        const obj = {
          label: "" + name.name + " (" + name.id + ")",
          onPress() {
            return callback(arg0.id);
          }
        };
        let tmp2;
        if (first === name.id) {
          tmp2 = callback(first(closure_2[17]).Text, {});
        }
        obj.trailing = tmp2;
        return callback(first(closure_2[16]).TableRow, obj, name.id);
      });
    } else {
      obj2 = { label: "No official games" };
      mapped1 = callback2(arg1(closure_2[16]).TableRow, obj2);
    }
  } else {
    obj3 = { label: "No guild selected" };
    obj1.children = callback2(arg1(closure_2[16]).TableRow, obj3);
    const items4 = [callback2(arg1(closure_2[15]).TableRowGroup, obj1), , , ];
    const obj4 = {};
    const obj5 = {};
    const obj6 = { padding: importDefault(closure_2[9]).space.PX_12 };
    obj5.style = obj6;
    const obj7 = { label: "Application ID", value: first, onChange: tmp5 };
    obj5.children = callback2(arg1(closure_2[18]).TextInput, obj7);
    const items5 = [callback2(closure_7, obj5), , ];
    const obj8 = {};
    if (null != getOrFetchApplication) {
      str = getOrFetchApplication.name;
    }
    const _HermesInternal = HermesInternal;
    obj8.label = "Name: " + str;
    items5[1] = callback2(arg1(closure_2[16]).TableRow, obj8);
    const obj9 = {};
    const _HermesInternal2 = HermesInternal;
    obj9.label = "Linked Games: " + str2;
    items5[2] = callback2(arg1(closure_2[16]).TableRow, obj9);
    obj4.children = items5;
    items4[1] = callback3(arg1(closure_2[15]).TableRowGroup, obj4);
    const obj10 = { "Bool(false)": 32, "Bool(false)": 0 };
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
    obj11.trailing = callback2(arg1(closure_2[17]).Text, obj12);
    const items6 = [callback2(arg1(closure_2[16]).TableRow, obj11), , ];
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
    obj13.trailing = callback2(arg1(closure_2[17]).Text, obj14);
    items6[1] = callback2(arg1(closure_2[16]).TableRow, obj13);
    const obj15 = { style: tmp.buttonRow };
    const obj16 = {
      disabled: !tmp8.canStartAuthorization,
      onPress() {
          return React({});
        },
      variant: "primary",
      text: "Start Authorization"
    };
    const items7 = [callback2(arg1(closure_2[19]).Button, obj16), ];
    const obj17 = { disabled: !canDeauthorize, onPress: deauthorize, variant: "critical-primary", text: "Deauthorize" };
    items7[1] = callback2(arg1(closure_2[19]).Button, obj17);
    obj15.children = items7;
    items6[2] = callback3(closure_7, obj15);
    obj10.children = items6;
    items4[2] = callback3(arg1(closure_2[15]).TableRowGroup, obj10);
    let prop;
    if (null != connectionApp) {
      prop = connectionApp.applicationAccountLinkBenefitConfig;
    }
    let tmp44Result = null != prop;
    if (tmp44Result) {
      const obj18 = {};
      let tmp47 = null != connectionApp.applicationAccountLinkBenefitConfig.reward_image;
      if (tmp47) {
        const obj19 = {};
        const obj20 = { padding: importDefault(closure_2[9]).space.PX_12 };
        obj19.style = obj20;
        const obj21 = {};
        const obj22 = { uri: connectionApp.applicationAccountLinkBenefitConfig.reward_image };
        obj21.source = obj22;
        obj21.style = tmp.rewardImage;
        obj19.children = callback2(connectionApp, obj21);
        tmp47 = callback2(closure_7, obj19);
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
      items8[1] = callback2(arg1(closure_2[16]).TableRow, obj23);
      obj18.children = items8;
      tmp44Result = callback3(arg1(closure_2[15]).TableRowGroup, obj18);
      const tmp44 = callback3;
      const tmp53 = callback2;
    }
    items4[3] = tmp44Result;
    obj.children = items4;
    return callback3(closure_6, obj);
  }
};
