// Module ID: 15233
// Function ID: 115947
// Name: customScoreToIndex
// Dependencies: [57, 31, 27, 4325, 8350, 33, 4130, 689, 8364, 1212, 1273, 15234, 15235, 15236, 8404, 8799, 566, 15237, 4126, 5502, 4320, 2]
// Exports: ChannelScoreSettings, GuildScoreSettings

// Module 15233 (customScoreToIndex)
import _slicedToArray from "_slicedToArray";
import result from "result";
import { View } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_8;
let closure_9;
const require = arg1;
function customScoreToIndex(first) {
  if (require(8364) /* generateHydrationId */.ICYMICustomScore.LESS === first) {
    return 0;
  } else if (require(8364) /* generateHydrationId */.ICYMICustomScore.MORE === first) {
    return 2;
  } else {
    return 1;
  }
}
function ContentSettingsControl(initialValue) {
  let disabled;
  let require;
  ({ onValueUpdated: require, disabled } = initialValue);
  const tmp = _createForOfIteratorHelperLoose();
  const tmp2 = callback(React.useState(initialValue.initialValue), 2);
  const first = tmp2[0];
  const importDefault = tmp2[1];
  let obj = {};
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.label = intl.string(require(1212) /* getSystemLocale */.t.rdt65I);
  obj.id = "-1";
  obj = { source: importDefault(15234) };
  const items = [tmp.icon, ];
  let iconSelected = null;
  if (first === require(8364) /* generateHydrationId */.ICYMICustomScore.LESS) {
    iconSelected = tmp.iconSelected;
  }
  items[1] = iconSelected;
  obj.style = items;
  obj.icon = callback2(require(1273) /* Button */.Icon, obj);
  obj.page = null;
  const items1 = [obj, , ];
  obj = {};
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj.label = intl2.string(require(1212) /* getSystemLocale */.t.SnrG00);
  obj.id = "0";
  const obj1 = { source: importDefault(15235) };
  const items2 = [tmp.icon, ];
  let iconSelected1 = null;
  if (first === require(8364) /* generateHydrationId */.ICYMICustomScore.DEFAULT) {
    iconSelected1 = tmp.iconSelected;
  }
  items2[1] = iconSelected1;
  obj1.style = items2;
  obj.icon = callback2(require(1273) /* Button */.Icon, obj1);
  obj.page = null;
  items1[1] = obj;
  const obj2 = {};
  const intl3 = require(1212) /* getSystemLocale */.intl;
  obj2.label = intl3.string(require(1212) /* getSystemLocale */.t.Rxe3jF);
  obj2.id = "1";
  const obj3 = { source: importDefault(15236) };
  const items3 = [tmp.icon, ];
  let iconSelected2 = null;
  if (first === require(8364) /* generateHydrationId */.ICYMICustomScore.MORE) {
    iconSelected2 = tmp.iconSelected;
  }
  items3[1] = iconSelected2;
  obj3.style = items3;
  obj2.icon = callback2(require(1273) /* Button */.Icon, obj3);
  obj2.page = null;
  items1[2] = obj2;
  let obj6 = require(8404) /* useSegmentedControlState */;
  const obj5 = {};
  let tmp13 = null;
  const segmentedControlState = obj6.useSegmentedControlState({
    pageWidth: 0,
    onSetActiveIndex(arg0) {
      let MORE = outer1_0(outer1_2[8]).ICYMICustomScore.DEFAULT;
      if (0 === arg0) {
        MORE = outer1_0(outer1_2[8]).ICYMICustomScore.LESS;
      } else if (2 === arg0) {
        MORE = outer1_0(outer1_2[8]).ICYMICustomScore.MORE;
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
  obj5.children = callback2(require(8799) /* SegmentedControl */.SegmentedControl, { variant: "experimental_Large", state: segmentedControlState });
  return callback2(View, obj5);
}
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { marginVertical: require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose.customScoreWrapper = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.warningText = { marginTop: require("_createForOfIteratorHelperLoose").space.PX_8, marginHorizontal: require("_createForOfIteratorHelperLoose").space.PX_12 };
let obj2 = { width: 24, height: 24, tintColor: require("_createForOfIteratorHelperLoose").colors.TEXT_MUTED };
_createForOfIteratorHelperLoose.icon = obj2;
let obj1 = { marginTop: require("_createForOfIteratorHelperLoose").space.PX_8, marginHorizontal: require("_createForOfIteratorHelperLoose").space.PX_12 };
_createForOfIteratorHelperLoose.iconSelected = { tintColor: require("_createForOfIteratorHelperLoose").colors.INTERACTIVE_TEXT_ACTIVE };
let obj3 = { tintColor: require("_createForOfIteratorHelperLoose").colors.INTERACTIVE_TEXT_ACTIVE };
_createForOfIteratorHelperLoose.muted = { marginTop: require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj4 = { marginTop: require("_createForOfIteratorHelperLoose").space.PX_16 };
const result = require("get ActivityIndicator").fileFinishedImporting("modules/icymi/native/custom_scores/ICYMIContentSettingControl.tsx");

export const GuildScoreSettings = function GuildScoreSettings(guild) {
  guild = guild.guild;
  const id = guild.id;
  let obj = id(566);
  const items = [closure_7];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_7.getCustomGuildScore(id));
  let obj1 = id(8364);
  const numberToCustomScoreResult = obj1.numberToCustomScore(stateFromStores);
  const importDefault = numberToCustomScoreResult;
  const tmp3 = numberToCustomScoreResult === id(8364).ICYMICustomScore.MUTED;
  const items1 = [id];
  const items2 = [numberToCustomScoreResult, id];
  const callback = React.useCallback((arg0) => {
    let obj = numberToCustomScoreResult(outer1_2[17]);
    obj = { guildId: id };
    const customScoreToNumber = id(outer1_2[8]).customScoreToNumber;
    const ICYMICustomScore = id(outer1_2[8]).ICYMICustomScore;
    if (arg0) {
      let customScoreToNumberResult = customScoreToNumber(ICYMICustomScore.DEFAULT);
    } else {
      customScoreToNumberResult = customScoreToNumber(ICYMICustomScore.MUTED);
    }
    obj.guildScore = customScoreToNumberResult;
    obj.customScoreGuild(obj);
  }, items1);
  const callback1 = React.useCallback((DEFAULT) => {
    if (closure_1 !== DEFAULT) {
      let obj = numberToCustomScoreResult(outer1_2[17]);
      obj = { guildId: id, guildScore: id(outer1_2[8]).customScoreToNumber(DEFAULT) };
      obj.customScoreGuild(obj);
      const obj3 = id(outer1_2[8]);
    }
  }, items2);
  const tmp6 = _createForOfIteratorHelperLoose();
  obj = {};
  obj = { variant: "text-sm/semibold", color: "text-default" };
  const intl = id(1212).intl;
  obj.children = intl.string(id(1212).t.Clq6km);
  const items3 = [callback2(id(4126).Text, obj), , , , ];
  obj1 = { variant: "text-xs/normal", color: "text-default" };
  const intl2 = id(1212).intl;
  obj1.children = intl2.format(id(1212).t["0DhU2P"], { guildName: guild.name });
  items3[1] = callback2(id(4126).Text, obj1);
  let tmp9 = null;
  if (!tmp3) {
    let obj3 = { style: tmp6.customScoreWrapper };
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
  const intl3 = id(1212).intl;
  obj6.label = intl3.string(id(1212).t.oujX73);
  obj6.start = true;
  obj6.end = true;
  obj5.children = callback2(id(5502).TableSwitchRow, obj6);
  items3[3] = callback2(View, obj5);
  const obj7 = { variant: "text-xs/normal", color: "text-muted", style: tmp6.warningText };
  const intl4 = id(1212).intl;
  obj7.children = intl4.string(id(1212).t.vRVs07);
  items3[4] = callback2(id(4126).Text, obj7);
  obj.children = items3;
  return closure_9(View, obj);
};
export const ChannelScoreSettings = function ChannelScoreSettings(channel) {
  channel = channel.channel;
  const id = channel.guild.id;
  const id2 = channel.id;
  let obj = id(stateFromStores[16]);
  let items = [closure_7, _isNativeReflectConstruct];
  stateFromStores = obj.useStateFromStores(items, () => {
    const customChannelScore = outer1_7.getCustomChannelScore(id, id2);
    if (customChannelScore !== id(stateFromStores[8]).ICYMICustomScore.UNKNOWN) {
      return customChannelScore;
    } else {
      const ICYMICustomScore = id(stateFromStores[8]).ICYMICustomScore;
      const isChannelMutedResult = outer1_6.isChannelMuted(id, id2);
    }
  });
  let obj1 = id(stateFromStores[16]);
  const items1 = [closure_7];
  const stateFromStores1 = obj1.useStateFromStores(items1, () => outer1_7.getCustomGuildScore(id));
  let obj2 = id(stateFromStores[8]);
  const tmp2 = id2(stateFromStores[20])(channel, true);
  const tmp5 = obj2.numberToCustomScore(stateFromStores1) === id(stateFromStores[8]).ICYMICustomScore.MUTED;
  const tmp6 = stateFromStores === id(stateFromStores[8]).ICYMICustomScore.MUTED;
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
  const tmp9 = _createForOfIteratorHelperLoose();
  obj = {};
  obj = { variant: "text-sm/semibold", color: "text-default" };
  const intl = id(stateFromStores[9]).intl;
  obj.children = intl.string(id(stateFromStores[9]).t["0jRosn"]);
  const items4 = [callback2(id(stateFromStores[18]).Text, obj), , , , ];
  obj1 = { variant: "text-xs/normal", color: "text-default" };
  const intl2 = id(stateFromStores[9]).intl;
  obj1.children = intl2.format(id(stateFromStores[9]).t.KzkF1j, { channelName: tmp2 });
  items4[1] = callback2(id(stateFromStores[18]).Text, obj1);
  let tmp12 = null;
  if (!tmp6) {
    obj2 = { style: tmp9.customScoreWrapper };
    const obj3 = { disabled: tmp5, initialValue: stateFromStores, onValueUpdated: callback };
    obj2.children = callback2(ContentSettingsControl, obj3);
    tmp12 = callback2(View, obj2);
  }
  items4[2] = tmp12;
  let obj4 = {};
  let muted = tmp6;
  if (tmp6) {
    muted = tmp9.muted;
  }
  obj4.style = muted;
  const obj5 = { value: !tmp6, onValueChange: callback1 };
  const intl3 = id(stateFromStores[9]).intl;
  obj5.label = intl3.string(id(stateFromStores[9]).t.W2aJRS);
  obj5.disabled = tmp5;
  obj5.start = true;
  obj5.end = true;
  obj4.children = callback2(id(stateFromStores[19]).TableSwitchRow, obj5);
  items4[3] = callback2(View, obj4);
  const obj6 = { variant: "text-xs/normal", color: "text-muted", style: tmp9.warningText };
  const intl4 = id(stateFromStores[9]).intl;
  obj6.children = intl4.string(id(stateFromStores[9]).t["5lP6Ax"]);
  items4[4] = callback2(id(stateFromStores[18]).Text, obj6);
  obj.children = items4;
  return closure_9(View, obj);
};
