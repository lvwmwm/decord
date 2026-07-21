// Module ID: 7475
// Function ID: 59993
// Name: StartStageChannelEventActionSheet
// Dependencies: []
// Exports: default

// Module 7475 (StartStageChannelEventActionSheet)
let closure_4 = importDefault(dependencyMap[0]);
let closure_5 = importDefault(dependencyMap[1]);
let closure_6 = importAll(dependencyMap[2]);
const View = arg1(dependencyMap[3]).View;
let closure_8 = importDefault(dependencyMap[4]);
({ MAX_STAGE_TOPIC_LENGTH: closure_9, START_STAGE_CHANNEL_EVENT_SHEET_KEY: closure_10 } = arg1(dependencyMap[5]));
const tmp3 = arg1(dependencyMap[6]);
const AnalyticEvents = tmp3.AnalyticEvents;
let closure_12 = arg1(dependencyMap[7]).GuildScheduledEventPrivacyLevel;
const tmp2 = arg1(dependencyMap[5]);
({ jsx: closure_13, jsxs: closure_14 } = arg1(dependencyMap[8]));
let obj = arg1(dependencyMap[9]);
obj = { container: { padding: 16 }, header: { guild: 24, body: "recent_games_enabled" }, headerTitle: {}, headerSubtitle: { textAlign: "center" } };
obj = { borderRadius: importDefault(dependencyMap[10]).radii.xs, backgroundColor: importDefault(dependencyMap[10]).colors.BACKGROUND_BASE_LOWEST };
obj.textInput = obj;
obj.startButton = { marginTop: 16 };
obj.buttonSubtitle = { "Bool(false)": null, "Bool(false)": null };
const tmp4 = arg1(dependencyMap[8]);
obj.ageVerificationNotice = { marginBottom: importDefault(dependencyMap[10]).space.PX_16 };
const obj1 = { marginBottom: importDefault(dependencyMap[10]).space.PX_16 };
obj.error = { fontFamily: tmp3.Fonts.PRIMARY_MEDIUM, color: importDefault(dependencyMap[10]).unsafe_rawColors.RED_400 };
let closure_15 = obj.createStyles(obj);
const obj2 = { fontFamily: tmp3.Fonts.PRIMARY_MEDIUM, color: importDefault(dependencyMap[10]).unsafe_rawColors.RED_400 };
const result = arg1(dependencyMap[29]).fileFinishedImporting("modules/stage_channels/native/sheets/StartStageChannelActionSheet.tsx");

export default function StartStageChannelEventActionSheet(channel) {
  let obj2;
  let tmp8;
  channel = channel.channel;
  const arg1 = channel;
  let importDefault;
  let importAll;
  let closure_3;
  let closure_4;
  function handleSave() {
    return _handleSave(...arguments);
  }
  async function _handleSave(closure_6, arg1) {
    if ("" !== lib.trim()) {
      callback2(true);
      callback3(null);
      const result = lib(callback2[15]).dismissGlobalKeyboard();
      if (null != callback) {
        yield lib(callback2[16]).editStage(closure_0, closure_2, closure_12.GUILD_ONLY);
        const obj2 = lib(callback2[16]);
        callback(callback2[17]).hideActionSheet(closure_10);
        const obj3 = callback(callback2[17]);
      } else {
        const obj = lib(callback2[16]);
        return yield obj.startStage(closure_0, closure_2, closure_12.GUILD_ONLY, false);
      }
      const obj4 = lib(callback2[15]);
    }
  }
  const tmp = callback2();
  let obj = arg1(closure_3[11]);
  const items = [closure_8];
  const stateFromStores = obj.useStateFromStores(items, () => stageInstanceByChannel.getStageInstanceByChannel(channel.id));
  importDefault = stateFromStores;
  let topic;
  if (null != stateFromStores) {
    topic = stateFromStores.topic;
  }
  let str = "";
  if (null != topic) {
    str = topic;
  }
  const tmp5 = _handleSave(React.useState(str), 2);
  const first = tmp5[0];
  importAll = first;
  [tmp8, closure_3] = _handleSave(React.useState(false), 2);
  const tmp7 = _handleSave(React.useState(false), 2);
  [obj2, closure_4] = _handleSave(React.useState(null), 2);
  obj2 = arg1(closure_3[12]);
  const shouldAgeVerifyToSpeakForCurrentUser = obj2.useShouldAgeVerifyToSpeakForCurrentUser(channel.id);
  importDefault(closure_3[13])(() => {
    let obj = stateFromStores(closure_3[14]);
    obj = {};
    let id;
    if (null != stateFromStores) {
      id = stateFromStores.id;
    }
    obj.stage_instance_id = id;
    obj.can_start_public_stage = false;
    obj.guild_id = channel.guild_id;
    obj.track(constants.START_STAGE_OPENED, obj);
  });
  obj = { style: tmp.header };
  const items1 = [callback(importDefault(closure_3[19]), {}), , ];
  obj = { style: tmp.headerTitle };
  if (null == stateFromStores) {
    const intl2 = arg1(closure_3[21]).intl;
    let stringResult = intl2.string(arg1(closure_3[21]).t.DDF0cJ);
  } else {
    const intl = arg1(closure_3[21]).intl;
    stringResult = intl.string(arg1(closure_3[21]).t.5BKP4y);
  }
  obj.children = stringResult;
  items1[1] = callback(arg1(closure_3[20]).Text, obj);
  const obj1 = { style: tmp.headerSubtitle };
  if (null == stateFromStores) {
    const intl4 = arg1(closure_3[21]).intl;
    let stringResult1 = intl4.string(arg1(closure_3[21]).t.bqQIwa);
  } else {
    const intl3 = arg1(closure_3[21]).intl;
    stringResult1 = intl3.string(arg1(closure_3[21]).t.I+9bLx);
  }
  obj1.children = stringResult1;
  items1[2] = callback(arg1(closure_3[20]).Text, obj1);
  obj.children = items1;
  let stringResult2;
  const tmp12 = closure_14;
  const tmp13 = View;
  const tmp14 = callback;
  const tmp20 = callback;
  const tmp9 = _handleSave(React.useState(null), 2);
  if (null == stateFromStores) {
    const intl5 = arg1(closure_3[21]).intl;
    stringResult2 = intl5.string(arg1(closure_3[21]).t.gR66jX);
  }
  obj2 = { keyboardShouldPersistTaps: "always" };
  const obj3 = { bottom: true, style: tmp.container };
  const items2 = [closure_14(View, obj), , , , , , ];
  const obj4 = {};
  const tmp12Result = closure_14(View, obj);
  const tmp30 = callback;
  const tmp31 = closure_14;
  const intl6 = arg1(closure_3[21]).intl;
  obj4.children = intl6.string(arg1(closure_3[21]).t.5FPBOB);
  items2[1] = callback(importDefault(closure_3[24]), obj4);
  const obj5 = { -449510645: 0, -406513309: 0, 1631422033: 0, -1207873045: 0, 426332259: 0, style: tmp.textInput, maxLength: closure_9, value: first };
  const intl7 = arg1(closure_3[21]).intl;
  obj5.placeholder = intl7.string(arg1(closure_3[21]).t.ZwWruY);
  obj5.onChange = tmp5[1];
  obj5.autoFocus = true;
  obj5.returnKeyType = "done";
  obj5.clearButtonVisibility = arg1(closure_3[26]).ClearButtonVisibility.WITH_CONTENT;
  const intl8 = arg1(closure_3[21]).intl;
  obj5.accessibilityLabel = intl8.string(arg1(closure_3[21]).t.5FPBOB);
  obj5.onNext = handleSave;
  items2[2] = callback(arg1(closure_3[25]).FormInput, obj5);
  items2[3] = callback(importDefault(closure_3[27]), {
    onConfirmPress() {
      return stateFromStores(closure_3[17]).hideActionSheet(closure_10);
    },
    style: tmp.ageVerificationNotice,
    channelId: channel.id
  });
  let tmp33 = null;
  if (null != obj1) {
    const obj7 = { style: tmp.error, children: obj1.getAnyErrorMessage() };
    tmp33 = callback(arg1(closure_3[20]).Text, obj7);
  }
  items2[4] = tmp33;
  const obj8 = { style: tmp.startButton };
  const obj9 = {};
  if (null == stateFromStores) {
    const intl10 = arg1(closure_3[21]).intl;
    let stringResult3 = intl10.string(arg1(closure_3[21]).t.s8mM8A);
  } else {
    const intl9 = arg1(closure_3[21]).intl;
    stringResult3 = intl9.string(arg1(closure_3[21]).t.K344S7);
  }
  obj9.text = stringResult3;
  obj9.onPress = handleSave;
  obj9.disabled = "" === first;
  obj9.loading = tmp8;
  obj9.accessibilityHint = stringResult2;
  obj8.children = callback(arg1(closure_3[28]).Button, obj9);
  items2[5] = callback(View, obj8);
  let tmp44 = null != stringResult2 && !shouldAgeVerifyToSpeakForCurrentUser;
  if (tmp44) {
    const obj10 = { style: tmp.buttonSubtitle };
    const intl11 = arg1(closure_3[21]).intl;
    obj10.children = intl11.string(arg1(closure_3[21]).t.gR66jX);
    tmp44 = callback(arg1(closure_3[20]).Text, obj10);
  }
  items2[6] = tmp44;
  obj3.children = items2;
  obj2.children = tmp31(arg1(closure_3[23]).SafeAreaPaddingView, obj3);
  return tmp30(arg1(closure_3[22]).BottomSheet, obj2);
};
