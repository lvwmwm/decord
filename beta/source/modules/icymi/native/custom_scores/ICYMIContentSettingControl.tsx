// Module ID: 16098
// Function ID: 16099
// Name: ICYMIContentSettingControl
// Dependencies: [32, 19, 17, 5017, 7783, 21, 4836, 576, 7798, 1115, 1177, 16099, 16100, 16101, 9083, 9084, 504, 16102, 4832, 6621, 4989, 2]
// Exports: ChannelScoreSettings, GuildScoreSettings

// Module 16098 (ICYMIContentSettingControl)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import intl5 from "intl" /* 1115 */;
import native from "native" /* 1177 */;
import ICYMIUtils from "ICYMIUtils" /* 7798 */;
import SegmentedControlState from "SegmentedControlState" /* 9083 */;
import SegmentedControl from "SegmentedControl" /* 9084 */;
import AssetRegistryDefault from "AssetRegistry" /* 16099 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 16100 */;
import AssetRegistryDefault3 from "AssetRegistry" /* 16101 */;
import NativeICYMIActionCreatorsDefault from "NativeICYMIActionCreators" /* 16102 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 5017 */;
import ICYMIStore from "ICYMIStore" /* 7783 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let importDefault;

let c9;
let metroImportAll;
let obj2;
let obj3;
let obj4;
let obj5;
let size;
function ContentSettingsControl(initialValue) {
  let Icon;
  let Icon2;
  let Icon3;
  let _undefined;
  let c1;
  let disabled;
  let intl;
  let intl2;
  let intl3;
  let items;
  let items2;
  let items3;
  let num;
  let obj2;
  let obj4;
  let obj6;
  let str;
  let tmp3;
  ({ onValueUpdated: require, disabled } = initialValue);
  importDefault = undefined;
  initialValue = initialValue.initialValue;
  const tmp = closure_10();
  [tmp3, c1] = _slicedToArray(react.useState(initialValue), 2);
  const tmp2 = _slicedToArray(react.useState(initialValue), 2);
  const obj = { label: intl.string(intl5.t.rdt65I), id: "-1", icon: closure_8(Icon, obj2), page: null };
  intl = intl5.intl;
  obj2 = { source: AssetRegistryDefault, style: items };
  Icon = native.Icon;
  items = [tmp.icon, ];
  let iconSelected = null;
  if (tmp3 === ICYMIUtils.ICYMICustomScore.LESS) {
    iconSelected = tmp.iconSelected;
  }
  items[1] = iconSelected;
  const items1 = [obj, , ];
  const obj3 = { label: intl2.string(intl5.t.SnrG00), id: "0", icon: closure_8(Icon2, obj4), page: null };
  intl2 = tmp4(1115).intl;
  obj4 = { source: AssetRegistryDefault2, style: items2 };
  Icon2 = tmp4(1177).Icon;
  items2 = [tmp.icon, ];
  let iconSelected1 = null;
  if (tmp3 === ICYMIUtils.ICYMICustomScore.DEFAULT) {
    iconSelected1 = tmp.iconSelected;
  }
  items2[1] = iconSelected1;
  items1[1] = obj3;
  const obj5 = { label: intl3.string(intl5.t.Rxe3jF), id: "1", icon: closure_8(Icon3, obj6), page: null };
  intl3 = tmp4(1115).intl;
  obj6 = { source: AssetRegistryDefault3, style: items3 };
  Icon3 = tmp4(1177).Icon;
  items3 = [tmp.icon, ];
  let iconSelected2 = null;
  if (tmp3 === ICYMIUtils.ICYMICustomScore.MORE) {
    iconSelected2 = tmp.iconSelected;
  }
  items3[1] = iconSelected2;
  items1[2] = obj5;
  const obj7 = {
    pageWidth: 0,
    onSetActiveIndex(arg0) {
      let MORE = ICYMIUtils.ICYMICustomScore.DEFAULT;
      if (0 === arg0) {
        MORE = tmp(7798).ICYMICustomScore.LESS;
      } else if (2 === arg0) {
        MORE = tmp(7798).ICYMICustomScore.MORE;
      }
      _undefined(MORE);
      require(MORE);
    },
    items: items1,
    defaultIndex: num
  };
  const useSegmentedControlState = tmp4(9083).useSegmentedControlState;
  num = 0;
  SegmentedControlState;
  if (ICYMIUtils.ICYMICustomScore.LESS !== tmp3) {
    num = 1;
    if (ICYMIUtils.ICYMICustomScore.MORE === tmp3) {
      num = 2;
    }
  }
  let obj8 = null;
  const segmentedControlState = useSegmentedControlState(obj7);
  const tmp13 = View;
  if (disabled) {
    obj8 = { opacity: 0.7 };
  }
  const obj9 = { style: obj8, pointerEvents: str, children: closure_8(SegmentedControl.SegmentedControl, { variant: "experimental_Large", state: segmentedControlState }) };
  str = "auto";
  if (disabled) {
    str = "none";
  }
  return closure_8(tmp13, obj9);
}
const View = react_native.View;
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let createStyles = createStyles_mod;
let obj = { customScoreWrapper: obj2, warningText: obj3, icon: size, iconSelected: obj4, muted: obj5 };
obj2 = { marginVertical: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { marginTop: nativeDefault.space.PX_8, marginHorizontal: nativeDefault.space.PX_12 };
size = { width: 24, height: 24, tintColor: nativeDefault.colors.TEXT_MUTED };
obj4 = { tintColor: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE };
obj5 = { marginTop: nativeDefault.space.PX_16 };
let closure_10 = createStyles(obj);
size = size_mod;
const result = size.fileFinishedImporting("modules/icymi/native/custom_scores/ICYMIContentSettingControl.tsx");

export const GuildScoreSettings = function GuildScoreSettings(guild) {
  let TableSwitchRow;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let obj10;
  let obj5;
  let obj7;
  guild = guild.guild;
  const id = guild.id;
  const tmp = id;
  let obj = id(504);
  const items = [ICYMIStore];
  const stateFromStores = obj.useStateFromStores(items, () => ICYMIStore.getCustomGuildScore(id));
  let obj2 = id(7798);
  const numberToCustomScoreResult = obj2.numberToCustomScore(stateFromStores);
  let c1 = numberToCustomScoreResult;
  const tmp5 = numberToCustomScoreResult === id(7798).ICYMICustomScore.MUTED;
  const items1 = [id];
  const items2 = [numberToCustomScoreResult, id];
  const callback = react.useCallback((arg0) => {
    let customScoreToNumberResult;
    const obj = { guildId: id, guildScore: customScoreToNumberResult };
    const customScoreGuild = NativeICYMIActionCreatorsDefault.customScoreGuild;
    NativeICYMIActionCreatorsDefault;
    const customScoreToNumber = ICYMIUtils.customScoreToNumber;
    ICYMIUtils;
    const ICYMICustomScore = ICYMIUtils.ICYMICustomScore;
    const tmp3 = arg0;
    if (tmp3) {
      customScoreToNumberResult = customScoreToNumber(ICYMICustomScore.DEFAULT);
    } else {
      customScoreToNumberResult = customScoreToNumber(ICYMICustomScore.MUTED);
    }
    customScoreGuild(obj);
  }, items1);
  const callback1 = react.useCallback((DEFAULT) => {
    let obj2;
    if (c1 !== DEFAULT) {
      const obj = { guildId: id, guildScore: obj2.customScoreToNumber(DEFAULT) };
      const customScoreGuild = NativeICYMIActionCreatorsDefault.customScoreGuild;
      NativeICYMIActionCreatorsDefault;
      obj2 = ICYMIUtils;
      customScoreGuild(obj);
    }
  }, items2);
  const tmp8 = closure_10();
  const obj3 = { variant: "text-sm/semibold", color: "text-default", children: intl.string(id(1115).t.Clq6km) };
  const Text = id(4832).Text;
  intl = id(1115).intl;
  const items3 = [closure_8(Text, obj3), , , , ];
  const obj4 = { variant: "text-xs/normal", color: "text-default", children: intl2.format(id(1115).t["0DhU2P"], obj5) };
  const Text2 = id(4832).Text;
  intl2 = id(1115).intl;
  obj5 = { guildName: guild.name };
  items3[1] = closure_8(Text2, obj4);
  let tmp11Result = null;
  const tmp9 = closure_9;
  if (!tmp5) {
    const obj6 = { style: tmp8.customScoreWrapper, children: closure_8(ContentSettingsControl, obj7) };
    obj7 = { initialValue: numberToCustomScoreResult, onValueUpdated: callback1 };
    tmp11Result = tmp11(tmp10, obj6);
  }
  items3[2] = tmp11Result;
  const obj8 = { children: items3 };
  const obj9 = { style: tmp5 && tmp8.muted, children: closure_8(TableSwitchRow, obj10) };
  obj10 = { value: !tmp5, onValueChange: callback, label: intl3.string(tmp(1115).t.oujX73), start: true, end: true };
  TableSwitchRow = tmp(6621).TableSwitchRow;
  intl3 = tmp(1115).intl;
  items3[3] = closure_8(View, obj9);
  const obj11 = { variant: "text-xs/normal", color: "text-muted", style: tmp8.warningText, children: intl4.string(tmp(1115).t.vRVs07) };
  const Text3 = tmp(4832).Text;
  intl4 = tmp(1115).intl;
  items3[4] = closure_8(Text3, obj11);
  return tmp9(View, obj8);
};
export const ChannelScoreSettings = function ChannelScoreSettings(channel) {
  let TableSwitchRow;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let obj10;
  let obj7;
  channel = channel.channel;
  let stateFromStores;
  const id = channel.guild.id;
  const id2 = channel.id;
  let tmp = id;
  let tmp2 = stateFromStores;
  let obj = id(stateFromStores[16]);
  let items = [ICYMIStore, UserGuildSettingsStore];
  stateFromStores = obj.useStateFromStores(items, () => {
    let customChannelScore = ICYMIStore.getCustomChannelScore(id, id2);
    const tmp = id;
    const tmp2 = id2;
    if (customChannelScore === ICYMIUtils.ICYMICustomScore.UNKNOWN) {
      const isChannelMutedResult = UserGuildSettingsStore.isChannelMuted(tmp, tmp2);
      const ICYMICustomScore = ICYMIUtils.ICYMICustomScore;
      customChannelScore = isChannelMutedResult ? ICYMICustomScore.MUTED : ICYMICustomScore.DEFAULT;
    }
    return customChannelScore;
  });
  let tmp4 = id2(stateFromStores[20])(channel, true);
  let obj2 = id(stateFromStores[16]);
  const items1 = [ICYMIStore];
  const stateFromStores1 = obj2.useStateFromStores(items1, () => ICYMIStore.getCustomGuildScore(id));
  let obj3 = id(stateFromStores[8]);
  const numberToCustomScoreResult = obj3.numberToCustomScore(stateFromStores1);
  const tmp7 = numberToCustomScoreResult === id(stateFromStores[8]).ICYMICustomScore.MUTED;
  const tmp8 = stateFromStores === id(stateFromStores[8]).ICYMICustomScore.MUTED;
  const items2 = [stateFromStores, id, id2];
  const items3 = [id2, id];
  const callback = react.useCallback((DEFAULT) => {
    let items;
    let obj3;
    if (stateFromStores !== DEFAULT) {
      const obj = { guildId: id, channelScores: items };
      const obj2 = { channelId: id2, score: obj3.customScoreToNumber(DEFAULT) };
      const customScoreGuild = NativeICYMIActionCreatorsDefault.customScoreGuild;
      NativeICYMIActionCreatorsDefault;
      items = [obj2];
      obj3 = ICYMIUtils;
      customScoreGuild(obj);
    }
  }, items2);
  const callback1 = react.useCallback((arg0) => {
    let customScoreToNumberResult;
    let items;
    const obj = { guildId: id, channelScores: items };
    const obj2 = { channelId: id2, score: customScoreToNumberResult };
    const customScoreGuild = NativeICYMIActionCreatorsDefault.customScoreGuild;
    NativeICYMIActionCreatorsDefault;
    const customScoreToNumber = ICYMIUtils.customScoreToNumber;
    ICYMIUtils;
    const ICYMICustomScore = ICYMIUtils.ICYMICustomScore;
    const tmp3 = arg0;
    if (tmp3) {
      customScoreToNumberResult = customScoreToNumber(ICYMICustomScore.DEFAULT);
    } else {
      customScoreToNumberResult = customScoreToNumber(ICYMICustomScore.MUTED);
    }
    items = [obj2];
    customScoreGuild(obj);
  }, items3);
  const tmp11 = closure_10();
  const obj4 = { variant: "text-sm/semibold", color: "text-default", children: intl.string(id(stateFromStores[9]).t["0jRosn"]) };
  const Text = id(stateFromStores[18]).Text;
  intl = id(stateFromStores[9]).intl;
  const items4 = [closure_8(Text, obj4), , , , ];
  const obj5 = { variant: "text-xs/normal", color: "text-default", children: intl2.format(id(stateFromStores[9]).t.KzkF1j, { channelName: tmp4 }) };
  const Text2 = id(stateFromStores[18]).Text;
  intl2 = id(stateFromStores[9]).intl;
  items4[1] = closure_8(Text2, obj5);
  let tmp14Result = null;
  const tmp12 = closure_9;
  if (!tmp8) {
    const obj6 = { style: tmp11.customScoreWrapper, children: closure_8(ContentSettingsControl, obj7) };
    obj7 = { disabled: tmp7, initialValue: stateFromStores, onValueUpdated: callback };
    tmp14Result = tmp14(tmp13, obj6);
  }
  items4[2] = tmp14Result;
  const obj8 = { children: items4 };
  const obj9 = { style: tmp8 && tmp11.muted, children: closure_8(TableSwitchRow, obj10) };
  obj10 = { value: !tmp8, onValueChange: callback1, label: intl3.string(tmp(tmp2[9]).t.W2aJRS), disabled: tmp7, start: true, end: true };
  TableSwitchRow = tmp(tmp2[19]).TableSwitchRow;
  intl3 = tmp(tmp2[9]).intl;
  items4[3] = closure_8(View, obj9);
  const obj11 = { variant: "text-xs/normal", color: "text-muted", style: tmp11.warningText, children: intl4.string(tmp(tmp2[9]).t["5lP6Ax"]) };
  const Text3 = tmp(tmp2[18]).Text;
  intl4 = tmp(tmp2[9]).intl;
  items4[4] = closure_8(Text3, obj11);
  return tmp12(View, obj8);
};
