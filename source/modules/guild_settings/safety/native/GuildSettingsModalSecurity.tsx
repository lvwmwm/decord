// Module ID: 16172
// Function ID: 124736
// Name: GuildSettingsModalSecurity
// Dependencies: []
// Exports: default

// Module 16172 (GuildSettingsModalSecurity)
let closure_3 = importAll(dependencyMap[0]);
({ View: closure_4, Image: closure_5 } = arg1(dependencyMap[1]));
let closure_6 = arg1(dependencyMap[2]).isGuildOwnerWithRequiredMfaLevel;
let closure_7 = importDefault(dependencyMap[3]);
let closure_8 = importDefault(dependencyMap[4]);
let closure_9 = importDefault(dependencyMap[5]);
const tmp2 = arg1(dependencyMap[1]);
({ GuildFeatures: closure_10, MFALevels: closure_11 } = arg1(dependencyMap[6]));
const tmp3 = arg1(dependencyMap[6]);
({ jsx: closure_12, jsxs: closure_13, Fragment: closure_14 } = arg1(dependencyMap[7]));
let obj = arg1(dependencyMap[8]);
obj = { wrapper: { 979561191: 0.129, 1890734395: 1, -1135424415: 0 } };
obj = { paddingHorizontal: importDefault(dependencyMap[9]).modules.mobile.TABLE_ROW_PADDING };
obj.center = obj;
obj.label = {};
obj.image = { 9223372036854775807: "<string:2835350032>", 9223372036854775807: "<string:1358954899>", 0: "<string:3461534584>" };
obj.infoWrapper = { marginBottom: 40 };
obj.button = { 0: "<string:2255552513>", 0: "<string:16777216>", 0: "%MapPrototype%" };
let closure_15 = obj.createStyles(obj);
const tmp4 = arg1(dependencyMap[7]);
const result = arg1(dependencyMap[17]).fileFinishedImporting("modules/guild_settings/safety/native/GuildSettingsModalSecurity.tsx");

export default function GuildSettingsModalSecurity(guildId) {
  const arg1 = guildId.guildId;
  const tmp = callback4();
  let obj = arg1(dependencyMap[10]);
  const items = [closure_7];
  const stateFromStores = obj.useStateFromStores(items, () => guild.getGuild(guildId));
  const importDefault = stateFromStores;
  let obj1 = arg1(dependencyMap[10]);
  const items1 = [closure_9];
  const stateFromStores1 = obj1.useStateFromStores(items1, () => props.getProps().mfaLevel);
  const currentUser = currentUser.getCurrentUser();
  const dependencyMap = tmp5;
  let mfaEnabled;
  if (null != currentUser) {
    mfaEnabled = currentUser.mfaEnabled;
  }
  let tmp7 = true === mfaEnabled && null != stateFromStores;
  if (tmp7) {
    tmp7 = callback(stateFromStores, currentUser);
  }
  if (tmp7) {
    let tmp9 = !tmp5;
    if (tmp5) {
      const features = stateFromStores.features;
      tmp9 = !features.has(constants.DISCOVERABLE);
    }
    tmp7 = tmp9;
  }
  const items2 = [stateFromStores, stateFromStores1 === constants2.ELEVATED];
  obj = {};
  obj = { style: items3 };
  const items3 = [tmp.wrapper, guildId.contentContainerStyle];
  obj1 = { style: tmp.center };
  const callback = React.useCallback(() => {
    if (null != stateFromStores) {
      let updateMFALevelResult = stateFromStores(tmp5[11]);
      updateMFALevelResult = { guildId: stateFromStores.id, level: closure_11 ? closure_11.NONE : closure_11.ELEVATED };
      updateMFALevelResult = updateMFALevelResult.updateMFALevel(updateMFALevelResult);
    }
  }, items2);
  const obj2 = { delete: -246006407672989600000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, dispatch: 0.0000000000000000000000000000000000000000000000000000000000000000000741841232901058, raw: 0.158, style: tmp.label };
  const intl = arg1(dependencyMap[13]).intl;
  obj2.children = intl.string(arg1(dependencyMap[13]).t.Wi9LEV);
  const items4 = [callback2(arg1(dependencyMap[12]).Text, obj2), , ];
  const obj3 = { style: tmp.button };
  const obj4 = {};
  const intl2 = arg1(dependencyMap[13]).intl;
  const string = intl2.string;
  const t = arg1(dependencyMap[13]).t;
  if (stateFromStores1 === constants2.ELEVATED) {
    let stringResult = string(t.MP0Ho+);
  } else {
    stringResult = string(t.yZcYGa);
  }
  obj4.text = stringResult;
  obj4.disabled = !tmp7;
  let str = "primary";
  if (stateFromStores1 === constants2.ELEVATED) {
    str = "destructive";
  }
  obj4.variant = str;
  obj4.onPress = callback;
  obj4.shrink = true;
  obj3.children = callback2(arg1(dependencyMap[14]).Button, obj4);
  items4[1] = callback2(closure_4, obj3);
  let tmp17 = null;
  if (null != stateFromStores) {
    const features2 = stateFromStores.features;
    tmp17 = null;
    if (features2.has(constants.DISCOVERABLE)) {
      const obj5 = { hasMaxConnections: false, isBoostOnlySubscription: false };
      const intl3 = arg1(dependencyMap[13]).intl;
      obj5.children = intl3.string(arg1(dependencyMap[13]).t.KG1V/E);
      tmp17 = callback2(arg1(dependencyMap[12]).Text, obj5);
    }
  }
  items4[2] = tmp17;
  obj1.children = items4;
  const items5 = [callback3(closure_4, obj1), ];
  const obj6 = { style: tmp.center };
  const items6 = [callback2(closure_5, { source: importDefault(dependencyMap[15]), style: tmp.image, resizeMode: "contain" }), ];
  const obj8 = { style: tmp.infoWrapper };
  const obj9 = { hasMaxConnections: "<string:3086024708>", isBoostOnlySubscription: "<string:625475588>" };
  const intl4 = arg1(dependencyMap[13]).intl;
  obj9.children = intl4.format(arg1(dependencyMap[13]).t.FK0+iX, {});
  obj8.children = callback2(arg1(dependencyMap[12]).Text, obj9);
  items6[1] = callback2(closure_4, obj8);
  obj6.children = items6;
  items5[1] = callback3(closure_4, obj6);
  obj.children = items5;
  const items7 = [callback3(closure_4, obj), callback2(arg1(dependencyMap[16]).NavScrim, {})];
  obj.children = items7;
  return callback3(closure_14, obj);
};
