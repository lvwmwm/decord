// Module ID: 15060
// Function ID: 113379
// Name: customScoreToIndex
// Dependencies: []
// Exports: ChannelScoreSettings, GuildScoreSettings

// Module 15060 (customScoreToIndex)
function customScoreToIndex(first) {
  if (arg1(dependencyMap[8]).ICYMICustomScore.LESS === first) {
    return 0;
  } else if (arg1(dependencyMap[8]).ICYMICustomScore.MORE === first) {
    return 2;
  } else {
    return 1;
  }
}
function ContentSettingsControl(initialValue) {
  let disabled;
  ({ onValueUpdated: closure_0, disabled } = initialValue);
  const tmp = callback3();
  const tmp2 = callback(React.useState(initialValue.initialValue), 2);
  const first = tmp2[0];
  const importDefault = tmp2[1];
  let obj = {};
  const intl = arg1(dependencyMap[9]).intl;
  obj.label = intl.string(arg1(dependencyMap[9]).t.rdt65I);
  obj.id = "-1";
  obj = { source: importDefault(dependencyMap[11]) };
  const items = [tmp.icon, ];
  let iconSelected = null;
  if (first === arg1(dependencyMap[8]).ICYMICustomScore.LESS) {
    iconSelected = tmp.iconSelected;
  }
  items[1] = iconSelected;
  obj.style = items;
  obj.icon = callback2(arg1(dependencyMap[10]).Icon, obj);
  obj.page = null;
  const items1 = [obj, , ];
  obj = {};
  const intl2 = arg1(dependencyMap[9]).intl;
  obj.label = intl2.string(arg1(dependencyMap[9]).t.SnrG00);
  obj.id = "0";
  const obj1 = { source: importDefault(dependencyMap[12]) };
  const items2 = [tmp.icon, ];
  let iconSelected1 = null;
  if (first === arg1(dependencyMap[8]).ICYMICustomScore.DEFAULT) {
    iconSelected1 = tmp.iconSelected;
  }
  items2[1] = iconSelected1;
  obj1.style = items2;
  obj.icon = callback2(arg1(dependencyMap[10]).Icon, obj1);
  obj.page = null;
  items1[1] = obj;
  const obj2 = {};
  const intl3 = arg1(dependencyMap[9]).intl;
  obj2.label = intl3.string(arg1(dependencyMap[9]).t.Rxe3jF);
  obj2.id = "1";
  const obj3 = { source: importDefault(dependencyMap[13]) };
  const items3 = [tmp.icon, ];
  let iconSelected2 = null;
  if (first === arg1(dependencyMap[8]).ICYMICustomScore.MORE) {
    iconSelected2 = tmp.iconSelected;
  }
  items3[1] = iconSelected2;
  obj3.style = items3;
  obj2.icon = callback2(arg1(dependencyMap[10]).Icon, obj3);
  obj2.page = null;
  items1[2] = obj2;
  let obj6 = arg1(dependencyMap[14]);
  const obj5 = {};
  let tmp13 = null;
  const segmentedControlState = obj6.useSegmentedControlState({
    pageWidth: 0,
    onSetActiveIndex(arg0) {
      let MORE = callback(closure_2[8]).ICYMICustomScore.DEFAULT;
      if (0 === arg0) {
        MORE = callback(closure_2[8]).ICYMICustomScore.LESS;
      } else if (2 === arg0) {
        MORE = callback(closure_2[8]).ICYMICustomScore.MORE;
      }
      callback2(MORE);
      callback(MORE);
    },
    items: items1,
    defaultIndex: customScoreToIndex(first)
  });
  if (disabled) {
    obj6 = { opacity: 0.7 };
    tmp13 = obj6;
  }
  obj5.style = tmp13;
  let str = "auto";
  if (disabled) {
    str = "none";
  }
  obj5.pointerEvents = str;
  obj5.children = callback2(arg1(dependencyMap[15]).SegmentedControl, { variant: "experimental_Large", state: segmentedControlState });
  return callback2(View, obj5);
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
const View = arg1(dependencyMap[2]).View;
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
({ jsx: closure_8, jsxs: closure_9 } = arg1(dependencyMap[5]));
let obj = arg1(dependencyMap[6]);
obj = {};
obj = { marginVertical: importDefault(dependencyMap[7]).space.PX_16 };
obj.customScoreWrapper = obj;
const tmp2 = arg1(dependencyMap[5]);
obj.warningText = { marginTop: importDefault(dependencyMap[7]).space.PX_8, marginHorizontal: importDefault(dependencyMap[7]).space.PX_12 };
const obj2 = { bhk: "<string:1027735553>", bic: "<string:4143972873>", tintColor: importDefault(dependencyMap[7]).colors.TEXT_MUTED };
obj.icon = obj2;
const obj1 = { marginTop: importDefault(dependencyMap[7]).space.PX_8, marginHorizontal: importDefault(dependencyMap[7]).space.PX_12 };
obj.iconSelected = { tintColor: importDefault(dependencyMap[7]).colors.INTERACTIVE_TEXT_ACTIVE };
const obj3 = { tintColor: importDefault(dependencyMap[7]).colors.INTERACTIVE_TEXT_ACTIVE };
obj.muted = { marginTop: importDefault(dependencyMap[7]).space.PX_16 };
let closure_10 = obj.createStyles(obj);
const obj4 = { marginTop: importDefault(dependencyMap[7]).space.PX_16 };
const result = arg1(dependencyMap[21]).fileFinishedImporting("modules/icymi/native/custom_scores/ICYMIContentSettingControl.tsx");

export const GuildScoreSettings = function GuildScoreSettings(guild) {
  guild = guild.guild;
  const id = guild.id;
  const arg1 = id;
  let obj = arg1(dependencyMap[16]);
  const items = [closure_7];
  const stateFromStores = obj.useStateFromStores(items, () => customGuildScore.getCustomGuildScore(id));
  let obj1 = arg1(dependencyMap[8]);
  const numberToCustomScoreResult = obj1.numberToCustomScore(stateFromStores);
  const importDefault = numberToCustomScoreResult;
  const tmp3 = numberToCustomScoreResult === arg1(dependencyMap[8]).ICYMICustomScore.MUTED;
  const items1 = [id];
  const items2 = [numberToCustomScoreResult, id];
  const callback = React.useCallback((arg0) => {
    let obj = numberToCustomScoreResult(closure_2[17]);
    obj = { guildId: id };
    const customScoreToNumber = id(closure_2[8]).customScoreToNumber;
    const ICYMICustomScore = id(closure_2[8]).ICYMICustomScore;
    if (arg0) {
      let customScoreToNumberResult = customScoreToNumber(ICYMICustomScore.DEFAULT);
    } else {
      customScoreToNumberResult = customScoreToNumber(ICYMICustomScore.MUTED);
    }
    obj.guildScore = customScoreToNumberResult;
    obj.customScoreGuild(obj);
  }, items1);
  const callback1 = React.useCallback((DEFAULT) => {
    if (numberToCustomScoreResult !== DEFAULT) {
      let obj = numberToCustomScoreResult(closure_2[17]);
      obj = { guildId: id, guildScore: id(closure_2[8]).customScoreToNumber(DEFAULT) };
      obj.customScoreGuild(obj);
      const obj3 = id(closure_2[8]);
    }
  }, items2);
  const tmp6 = callback3();
  obj = {};
  obj = {};
  const intl = arg1(dependencyMap[9]).intl;
  obj.children = intl.string(arg1(dependencyMap[9]).t.Clq6km);
  const items3 = [callback2(arg1(dependencyMap[18]).Text, obj), , , , ];
  obj1 = {};
  const intl2 = arg1(dependencyMap[9]).intl;
  obj1.children = intl2.format(arg1(dependencyMap[9]).t.0DhU2P, { guildName: guild.name });
  items3[1] = callback2(arg1(dependencyMap[18]).Text, obj1);
  let tmp9 = null;
  if (!tmp3) {
    const obj3 = { style: tmp6.customScoreWrapper };
    const obj4 = { initialValue: numberToCustomScoreResult, onValueUpdated: callback1 };
    obj3.children = callback2(ContentSettingsControl, obj4);
    tmp9 = callback2(View, obj3);
  }
  items3[2] = tmp9;
  const obj5 = {};
  let muted = tmp3;
  if (tmp3) {
    muted = tmp6.muted;
  }
  obj5.style = muted;
  const obj6 = { value: !tmp3, onValueChange: callback };
  const intl3 = arg1(dependencyMap[9]).intl;
  obj6.label = intl3.string(arg1(dependencyMap[9]).t.oujX73);
  obj6.start = true;
  obj6.end = true;
  obj5.children = callback2(arg1(dependencyMap[19]).TableSwitchRow, obj6);
  items3[3] = callback2(View, obj5);
  const obj7 = { style: tmp6.warningText };
  const intl4 = arg1(dependencyMap[9]).intl;
  obj7.children = intl4.string(arg1(dependencyMap[9]).t.vRVs07);
  items3[4] = callback2(arg1(dependencyMap[18]).Text, obj7);
  obj.children = items3;
  return closure_9(View, obj);
};
export const ChannelScoreSettings = function ChannelScoreSettings(channel) {
  channel = channel.channel;
  const id = channel.guild.id;
  const arg1 = id;
  const id2 = channel.id;
  const importDefault = id2;
  let obj = arg1(dependencyMap[16]);
  const items = [closure_7, closure_6];
  const stateFromStores = obj.useStateFromStores(items, () => {
    const customChannelScore = store.getCustomChannelScore(id, id2);
    if (customChannelScore !== id(stateFromStores[8]).ICYMICustomScore.UNKNOWN) {
      return customChannelScore;
    } else {
      const ICYMICustomScore = id(stateFromStores[8]).ICYMICustomScore;
      const isChannelMutedResult = channelMuted.isChannelMuted(id, id2);
    }
  });
  const dependencyMap = stateFromStores;
  let obj1 = arg1(dependencyMap[16]);
  const items1 = [closure_7];
  const stateFromStores1 = obj1.useStateFromStores(items1, () => store.getCustomGuildScore(id));
  let obj2 = arg1(dependencyMap[8]);
  const tmp2 = importDefault(dependencyMap[20])(channel, true);
  const tmp5 = obj2.numberToCustomScore(stateFromStores1) === arg1(dependencyMap[8]).ICYMICustomScore.MUTED;
  const tmp6 = stateFromStores === arg1(dependencyMap[8]).ICYMICustomScore.MUTED;
  const items2 = [stateFromStores, id, id2];
  const items3 = [id2, id];
  const callback = React.useCallback((DEFAULT) => {
    if (stateFromStores !== DEFAULT) {
      let obj = id2(stateFromStores[17]);
      obj = { guildId: id };
      obj = { channelId: id2, score: id(stateFromStores[8]).customScoreToNumber(DEFAULT) };
      const items = [obj];
      obj.channelScores = items;
      obj.customScoreGuild(obj);
      const obj4 = id(stateFromStores[8]);
    }
  }, items2);
  const callback1 = React.useCallback((arg0) => {
    let obj = id2(stateFromStores[17]);
    obj = { guildId: id };
    obj = { channelId: id2 };
    const customScoreToNumber = id(stateFromStores[8]).customScoreToNumber;
    const ICYMICustomScore = id(stateFromStores[8]).ICYMICustomScore;
    if (arg0) {
      let customScoreToNumberResult = customScoreToNumber(ICYMICustomScore.DEFAULT);
    } else {
      customScoreToNumberResult = customScoreToNumber(ICYMICustomScore.MUTED);
    }
    obj.score = customScoreToNumberResult;
    const items = [obj];
    obj.channelScores = items;
    obj.customScoreGuild(obj);
  }, items3);
  const tmp9 = callback3();
  obj = {};
  obj = {};
  const intl = arg1(dependencyMap[9]).intl;
  obj.children = intl.string(arg1(dependencyMap[9]).t.0jRosn);
  const items4 = [callback2(arg1(dependencyMap[18]).Text, obj), , , , ];
  obj1 = {};
  const intl2 = arg1(dependencyMap[9]).intl;
  obj1.children = intl2.format(arg1(dependencyMap[9]).t.KzkF1j, { channelName: tmp2 });
  items4[1] = callback2(arg1(dependencyMap[18]).Text, obj1);
  let tmp12 = null;
  if (!tmp6) {
    obj2 = { style: tmp9.customScoreWrapper };
    const obj3 = { disabled: tmp5, initialValue: stateFromStores, onValueUpdated: callback };
    obj2.children = callback2(ContentSettingsControl, obj3);
    tmp12 = callback2(View, obj2);
  }
  items4[2] = tmp12;
  const obj4 = {};
  let muted = tmp6;
  if (tmp6) {
    muted = tmp9.muted;
  }
  obj4.style = muted;
  const obj5 = { value: !tmp6, onValueChange: callback1 };
  const intl3 = arg1(dependencyMap[9]).intl;
  obj5.label = intl3.string(arg1(dependencyMap[9]).t.W2aJRS);
  obj5.disabled = tmp5;
  obj5.start = true;
  obj5.end = true;
  obj4.children = callback2(arg1(dependencyMap[19]).TableSwitchRow, obj5);
  items4[3] = callback2(View, obj4);
  const obj6 = { style: tmp9.warningText };
  const intl4 = arg1(dependencyMap[9]).intl;
  obj6.children = intl4.string(arg1(dependencyMap[9]).t.5lP6Ax);
  items4[4] = callback2(arg1(dependencyMap[18]).Text, obj6);
  obj.children = items4;
  return closure_9(View, obj);
};
