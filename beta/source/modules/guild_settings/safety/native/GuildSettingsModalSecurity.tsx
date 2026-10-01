// Module ID: 17402
// Function ID: 17403
// Name: GuildSettingsModalSecurity
// Dependencies: [19, 17, 2063, 2067, 1372, 9049, 1074, 21, 4836, 576, 504, 9048, 4832, 1115, 5281, 14326, 6461, 2]
// Exports: default

// Module 17402 (GuildSettingsModalSecurity)
import nativeDefault from "native" /* 576 */;
import GuildRecord from "GuildRecord" /* 2063 */;
import GuildSettingsActionCreatorsDefault from "GuildSettingsActionCreators" /* 9048 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import GuildStore from "GuildStore" /* 2067 */;
import UserStore from "UserStore" /* 1372 */;
import GuildSettingsStore from "GuildSettingsStore" /* 9049 */;
import Constants from "Constants" /* 1074 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let dependencyMap;

let c10;
let closure_12;
let closure_14;
let closure_4;
let hasOwnProperty;
let map1;
let obj2;
let unpackModuleId;
({ View: closure_4, Image: hasOwnProperty } = react_native);
let closure_6 = GuildRecord.isGuildOwnerWithRequiredMfaLevel;
({ GuildFeatures: c10, MFALevels: unpackModuleId } = Constants);
({ jsx: closure_12, jsxs: map1, Fragment: closure_14 } = Fragment);
let obj = { wrapper: { flex: 1, justifyContent: "space-between", paddingTop: 99 }, center: obj2, label: { textAlign: "center", marginBottom: 8 }, image: { width: 295, height: 142, marginHorizontal: 35 }, infoWrapper: { marginBottom: 40 }, button: { alignSelf: "center", paddingHorizontal: 16, marginTop: 16 } };
obj2 = { alignItems: "center", flexDirection: "column", paddingHorizontal: nativeDefault.modules.mobile.TABLE_ROW_PADDING };
let closure_15 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/guild_settings/safety/native/GuildSettingsModalSecurity.tsx");

export default function GuildSettingsModalSecurity(guildId) {
  let Button;
  let Text3;
  let closure_2;
  let intl;
  let intl3;
  let intl4;
  let items3;
  let items4;
  let items5;
  let items6;
  let items7;
  let obj13;
  let obj7;
  let props;
  let str;
  let stringResult;
  guildId = guildId.guildId;
  const contentContainerStyle = guildId.contentContainerStyle;
  const tmp = closure_15();
  let obj = guildId(504);
  const items = [GuildStore];
  const stateFromStores = obj.useStateFromStores(items, () => GuildStore.getGuild(guildId));
  let obj2 = guildId(504);
  const items1 = [GuildSettingsStore];
  const stateFromStores1 = obj2.useStateFromStores(items1, () => props.getProps().mfaLevel);
  const currentUser = UserStore.getCurrentUser();
  dependencyMap = tmp7;
  let mfaEnabled;
  if (currentUser != null) {
    mfaEnabled = currentUser.mfaEnabled;
  }
  let tmp9 = true === mfaEnabled && null != stateFromStores && closure_6(stateFromStores, currentUser);
  if (tmp9) {
    let tmp11 = !tmp7;
    if (stateFromStores1 === constants2.ELEVATED) {
      const features = stateFromStores.features;
      tmp11 = !features.has(constants.DISCOVERABLE);
    }
    tmp9 = tmp11;
  }
  const items2 = [stateFromStores, stateFromStores1 === constants2.ELEVATED];
  const obj3 = { style: items3, children: items5 };
  items3 = [tmp.wrapper, contentContainerStyle];
  const obj4 = { style: tmp.center, children: items4 };
  const callback = react.useCallback(() => {
    if (null != stateFromStores) {
      const obj2 = { guildId: tmp.id, level: closure_2 ? unpackModuleId.NONE : unpackModuleId.ELEVATED };
      const obj = GuildSettingsActionCreatorsDefault;
      obj.updateMFALevel(obj2);
    }
  }, items2);
  const obj5 = { style: tmp.label, variant: "text-md/medium", color: "mobile-text-heading-primary", children: intl.string(guildId(1115).t.Wi9LEV) };
  const Text = tmp2(4832).Text;
  intl = tmp2(1115).intl;
  items4 = [closure_12(Text, obj5), , ];
  const obj6 = { style: tmp.button, children: closure_12(Button, obj7) };
  Button = tmp2(5281).Button;
  const intl2 = tmp2(1115).intl;
  const string = intl2.string;
  const t = tmp2(1115).t;
  const tmp15 = closure_14;
  if (stateFromStores1 === constants2.ELEVATED) {
    stringResult = string(t["MP0Ho+"]);
  } else {
    stringResult = string(t.yZcYGa);
  }
  obj7 = { text: stringResult, disabled: !tmp9, variant: str, onPress: callback, shrink: true };
  str = "primary";
  if (stateFromStores1 === constants2.ELEVATED) {
    str = "destructive";
  }
  items4[1] = closure_12(closure_4, obj6);
  let hasItem;
  if (stateFromStores != null) {
    const features2 = stateFromStores.features;
    hasItem = features2.has(constants.DISCOVERABLE);
  }
  let tmp17Result = null;
  if (hasItem) {
    const obj8 = { variant: "text-sm/normal", color: "text-feedback-critical", children: intl3.string(guildId(1115).t["KG1V/E"]) };
    const Text2 = tmp2(4832).Text;
    intl3 = tmp2(1115).intl;
    tmp17Result = tmp17(Text2, obj8);
  }
  const obj9 = { children: items7 };
  items4[2] = tmp17Result;
  items5 = [closure_13(closure_4, obj4), ];
  const obj10 = { style: tmp.center, children: items6 };
  items6 = [, ];
  const obj11 = { source: stateFromStores(14326), style: tmp.image, resizeMode: "contain" };
  items6[0] = closure_12(closure_5, obj11);
  const obj12 = { style: tmp.infoWrapper, children: closure_12(Text3, obj13) };
  obj13 = { variant: "text-sm/medium", color: "text-muted", children: intl4.format(guildId(1115).t["FK0+iX"], {}) };
  Text3 = tmp2(4832).Text;
  intl4 = tmp2(1115).intl;
  items6[1] = closure_12(closure_4, obj12);
  items5[1] = closure_13(closure_4, obj10);
  items7 = [closure_13(closure_4, obj3), closure_12(tmp2(6461).NavScrim, {})];
  return closure_13(tmp15, obj9);
};
