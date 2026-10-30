// Module ID: 19706
// Function ID: 19707
// Name: GuildSettingsModalSecurity
// Dependencies: [19, 17, 4876, 4880, 1384, 9056, 1072, 21, 5009, 575, 504, 9055, 5619, 1114, 5629, 5712, 16613, 5601, 2]
// Exports: default

// Module 19706 (GuildSettingsModalSecurity)
import nativeDefault from "native" /* 575 */;
import GuildRecord from "GuildRecord" /* 4876 */;
import GuildSettingsActionCreatorsDefault from "GuildSettingsActionCreators" /* 9055 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import GuildStore from "GuildStore" /* 4880 */;
import UserStore from "UserStore" /* 1384 */;
import GuildSettingsStore from "GuildSettingsStore" /* 9056 */;
import Constants from "Constants" /* 1072 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5009 */;
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
({ View: closure_4, ScrollView: hasOwnProperty } = react_native);
let closure_6 = GuildRecord.isGuildOwnerWithRequiredMfaLevel;
({ GuildFeatures: c10, MFALevels: unpackModuleId } = Constants);
({ jsx: closure_12, jsxs: map1, Fragment: closure_14 } = Fragment);
let obj = { wrapper: { flexGrow: 1, justifyContent: "space-between", paddingTop: 99 }, center: obj2, label: { textAlign: "center", marginBottom: 8 }, image: { width: 295, height: 142, marginHorizontal: 35 }, infoWrapper: { marginBottom: 40 }, button: { alignSelf: "center", paddingHorizontal: 16, marginTop: 16 } };
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
  const obj3 = { contentContainerStyle: items3, alwaysBounceVertical: false, children: items5 };
  items3 = [tmp.wrapper, contentContainerStyle];
  const obj4 = { style: tmp.center, children: items4 };
  const callback = react.useCallback(() => {
    if (null != stateFromStores) {
      const obj2 = { guildId: tmp.id, level: closure_2 ? unpackModuleId.NONE : unpackModuleId.ELEVATED };
      const obj = GuildSettingsActionCreatorsDefault;
      obj.updateMFALevel(obj2);
    }
  }, items2);
  const obj5 = { style: tmp.label, variant: "text-md/medium", color: "mobile-text-heading-primary", children: intl.string(guildId(1114).t.Wi9LEV) };
  const Text = tmp2(5619).Text;
  intl = tmp2(1114).intl;
  items4 = [closure_12(Text, obj5), , ];
  const obj6 = { style: tmp.button, children: closure_12(Button, obj7) };
  Button = tmp2(5629).Button;
  const intl2 = tmp2(1114).intl;
  const string = intl2.string;
  const t = tmp2(1114).t;
  const tmp15 = closure_14;
  const tmp16 = closure_5;
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
  let tmp18Result = null;
  if (hasItem) {
    const obj8 = { variant: "text-sm/normal", color: "text-feedback-critical", children: intl3.string(guildId(1114).t["KG1V/E"]) };
    const Text2 = tmp2(5619).Text;
    intl3 = tmp2(1114).intl;
    tmp18Result = tmp18(Text2, obj8);
  }
  const obj9 = { children: items7 };
  items4[2] = tmp18Result;
  items5 = [closure_13(closure_4, obj4), ];
  const obj10 = { style: tmp.center, children: items6 };
  const obj11 = { source: stateFromStores(16613), style: tmp.image, resizeMode: "contain" };
  const tmp23 = stateFromStores(5712);
  items6 = [closure_12(tmp23, obj11), ];
  const obj12 = { style: tmp.infoWrapper, children: closure_12(Text3, obj13) };
  obj13 = { variant: "text-sm/medium", color: "text-muted", children: intl4.format(guildId(1114).t["FK0+iX"], {}) };
  Text3 = tmp2(5619).Text;
  intl4 = tmp2(1114).intl;
  items6[1] = closure_12(closure_4, obj12);
  items5[1] = closure_13(closure_4, obj10);
  items7 = [closure_13(tmp16, obj3), closure_12(tmp2(5601).NavScrim, {})];
  return closure_13(tmp15, obj9);
};
