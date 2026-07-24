// Module ID: 16344
// Function ID: 127275
// Name: GuildSettingsModalSecurity
// Dependencies: [31, 27, 1391, 1838, 1849, 8483, 653, 33, 4130, 689, 566, 8482, 4126, 1212, 4543, 13746, 5448, 2]
// Exports: default

// Module 16344 (GuildSettingsModalSecurity)
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import { isGuildOwnerWithRequiredMfaLevel as closure_6 } from "isGuildOwner";
import closure_7 from "_createForOfIteratorHelperLoose";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import ME from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_11;
let closure_12;
let closure_13;
let closure_14;
let closure_4;
let closure_5;
const require = arg1;
({ View: closure_4, Image: closure_5 } = get_ActivityIndicator);
({ GuildFeatures: closure_10, MFALevels: closure_11 } = ME);
({ jsx: closure_12, jsxs: closure_13, Fragment: closure_14 } = jsxProd);
_createForOfIteratorHelperLoose = { wrapper: { flex: 1, justifyContent: "space-between", paddingTop: 99 } };
_createForOfIteratorHelperLoose = { alignItems: "center", flexDirection: "column", paddingHorizontal: require("_createForOfIteratorHelperLoose").modules.mobile.TABLE_ROW_PADDING };
_createForOfIteratorHelperLoose.center = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.label = { textAlign: "center", marginBottom: 8 };
_createForOfIteratorHelperLoose.image = { width: 295, height: 142, marginHorizontal: 35 };
_createForOfIteratorHelperLoose.infoWrapper = { marginBottom: 40 };
_createForOfIteratorHelperLoose.button = { alignSelf: "center", paddingHorizontal: 16, marginTop: 16 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("isGuildOwner").fileFinishedImporting("modules/guild_settings/safety/native/GuildSettingsModalSecurity.tsx");

export default function GuildSettingsModalSecurity(guildId) {
  guildId = guildId.guildId;
  const tmp = _createForOfIteratorHelperLoose();
  let obj = guildId(566);
  const items = [closure_7];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_7.getGuild(guildId));
  let obj1 = guildId(566);
  const items1 = [closure_9];
  const stateFromStores1 = obj1.useStateFromStores(items1, () => outer1_9.getProps().mfaLevel);
  currentUser = currentUser.getCurrentUser();
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
  items3 = [tmp.wrapper, guildId.contentContainerStyle];
  obj1 = { style: tmp.center };
  callback = React.useCallback(() => {
    if (null != stateFromStores) {
      let updateMFALevelResult = stateFromStores(tmp5[11]);
      updateMFALevelResult = { guildId: stateFromStores.id, level: outer1_11 ? outer1_11.NONE : outer1_11.ELEVATED };
      updateMFALevelResult = updateMFALevelResult.updateMFALevel(updateMFALevelResult);
    }
  }, items2);
  const obj2 = { style: tmp.label, variant: "text-md/medium", color: "mobile-text-heading-primary" };
  const intl = guildId(1212).intl;
  obj2.children = intl.string(guildId(1212).t.Wi9LEV);
  const items4 = [callback2(guildId(4126).Text, obj2), , ];
  const obj3 = { style: tmp.button };
  const obj4 = {};
  const intl2 = guildId(1212).intl;
  const string = intl2.string;
  const t = guildId(1212).t;
  if (stateFromStores1 === constants2.ELEVATED) {
    let stringResult = string(t["MP0Ho+"]);
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
  obj3.children = callback2(guildId(4543).Button, obj4);
  items4[1] = callback2(closure_4, obj3);
  let tmp17 = null;
  if (null != stateFromStores) {
    const features2 = stateFromStores.features;
    tmp17 = null;
    if (features2.has(constants.DISCOVERABLE)) {
      const obj5 = { variant: "text-sm/normal", color: "text-feedback-critical" };
      const intl3 = guildId(1212).intl;
      obj5.children = intl3.string(guildId(1212).t["KG1V/E"]);
      tmp17 = callback2(guildId(4126).Text, obj5);
    }
  }
  items4[2] = tmp17;
  obj1.children = items4;
  const items5 = [callback3(closure_4, obj1), ];
  const obj6 = { style: tmp.center };
  const items6 = [callback2(closure_5, { source: stateFromStores(13746), style: tmp.image, resizeMode: "contain" }), ];
  const obj8 = { style: tmp.infoWrapper };
  const obj9 = { variant: "text-sm/medium", color: "text-muted" };
  const intl4 = guildId(1212).intl;
  obj9.children = intl4.format(guildId(1212).t["FK0+iX"], {});
  obj8.children = callback2(guildId(4126).Text, obj9);
  items6[1] = callback2(closure_4, obj8);
  obj6.children = items6;
  items5[1] = callback3(closure_4, obj6);
  obj.children = items5;
  const items7 = [callback3(closure_4, obj), callback2(guildId(5448).NavScrim, {})];
  obj.children = items7;
  return callback3(closure_14, obj);
};
