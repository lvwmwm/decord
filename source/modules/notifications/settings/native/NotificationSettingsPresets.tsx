// Module ID: 10278
// Function ID: 79410
// Name: NotificationSettingsPresets
// Dependencies: []
// Exports: NotificationSettingsChannelPresets, NotificationSettingsGuildPresets

// Module 10278 (NotificationSettingsPresets)
function NotificationSettingsPresets(preset) {
  const arg1 = preset;
  let num = 0;
  if (preset.preset !== arg1(dependencyMap[4]).Presets.ALL_MESSAGES) {
    let num2 = 1;
    if (preset.preset !== arg1(dependencyMap[4]).Presets.MENTIONS) {
      let num3;
      if (preset.preset === arg1(dependencyMap[4]).Presets.NOTHING) {
        num3 = 2;
      }
      num2 = num3;
    }
    num = num2;
  }
  const dependencyMap = num;
  let obj = arg1(dependencyMap[10]);
  obj = {
    pageWidth: 0,
    onSetActiveIndex(self) {
      let tmp = 0 === self;
      if (tmp) {
        tmp = self.preset !== self(num[4]).Presets.ALL_MESSAGES;
      }
      if (tmp) {
        self.updatePreset(self(num[4]).Presets.ALL_MESSAGES);
      }
      let tmp9 = 1 === self;
      if (tmp9) {
        tmp9 = self.preset !== self(num[4]).Presets.MENTIONS;
      }
      if (tmp9) {
        self.updatePreset(self(num[4]).Presets.MENTIONS);
      }
      let tmp17 = 2 === self;
      if (tmp17) {
        tmp17 = self.preset !== self(num[4]).Presets.NOTHING;
      }
      if (tmp17) {
        self.updatePreset(self(num[4]).Presets.NOTHING);
      }
    }
  };
  obj = {};
  const intl = arg1(dependencyMap[3]).intl;
  obj.label = intl.string(arg1(dependencyMap[3]).t.hZrr6k);
  obj.id = arg1(dependencyMap[4]).Presets.ALL_MESSAGES;
  obj.icon = callback(arg1(dependencyMap[5]).CircleCheckIcon, {});
  obj.page = null;
  const items = [obj, , ];
  const obj1 = {};
  const intl2 = arg1(dependencyMap[3]).intl;
  obj1.label = intl2.string(arg1(dependencyMap[3]).t.y59NJm);
  obj1.id = arg1(dependencyMap[4]).Presets.MENTIONS;
  obj1.icon = callback(arg1(dependencyMap[6]).MagicWandIcon, {});
  obj1.page = null;
  items[1] = obj1;
  const obj2 = {};
  const intl3 = arg1(dependencyMap[3]).intl;
  obj2.label = intl3.string(arg1(dependencyMap[3]).t.pGn/bJ);
  obj2.id = arg1(dependencyMap[4]).Presets.NOTHING;
  obj2.icon = callback(arg1(dependencyMap[7]).BellSlashIcon, {});
  obj2.page = null;
  items[2] = obj2;
  obj.items = items;
  obj.defaultIndex = num;
  const segmentedControlState = obj.useSegmentedControlState(obj);
  const React = segmentedControlState;
  const items1 = [num, segmentedControlState];
  const effect = React.useEffect(() => {
    let tmp = null == num;
    if (!tmp) {
      tmp = num >= 3;
    }
    if (!tmp) {
      segmentedControlState.setActiveIndex(num);
    }
  }, items1);
  if (preset.preset === arg1(dependencyMap[4]).Presets.CUSTOM) {
    const obj3 = { style: tmp.customContainer };
    const obj4 = { style: { WEBP_RE_IOS: "<string:2126337>", kkk: "<string:2097152>" } };
    const obj5 = { variant: "text-sm/semibold" };
    const intl4 = arg1(dependencyMap[3]).intl;
    obj5.children = intl4.string(arg1(dependencyMap[3]).t.32yow9);
    const items2 = [callback(arg1(dependencyMap[11]).Text, obj5), ];
    const obj6 = { variant: "text-xs/medium" };
    const intl5 = arg1(dependencyMap[3]).intl;
    obj6.children = intl5.string(arg1(dependencyMap[3]).t.l3doVX);
    items2[1] = callback(arg1(dependencyMap[11]).Text, obj6);
    obj4.children = items2;
    const items3 = [callback2(View, obj4), ];
    const obj7 = { variant: "secondary" };
    const intl6 = arg1(dependencyMap[3]).intl;
    obj7.text = intl6.string(arg1(dependencyMap[3]).t.ztO+l+);
    obj7.onPress = function onPress() {
      arg0.updatePreset(arg0(num[4]).Presets.MENTIONS);
    };
    items3[1] = callback(arg1(dependencyMap[12]).Button, obj7);
    obj3.children = items3;
    let tmp11 = callback2(View, obj3);
  } else {
    const obj8 = { variant: "experimental_Large", state: segmentedControlState };
    tmp11 = callback(arg1(dependencyMap[13]).SegmentedControl, obj8);
  }
  return tmp11;
}
let closure_2 = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
({ jsx: closure_4, jsxs: closure_5 } = arg1(dependencyMap[2]));
let obj = arg1(dependencyMap[8]);
obj = {};
obj = { "Bool(false)": null, "Bool(false)": null, "Bool(false)": null, "Bool(false)": null, "Bool(false)": null, "Bool(false)": null, borderRadius: importDefault(dependencyMap[9]).radii.lg + 8, backgroundColor: importDefault(dependencyMap[9]).colors.REDESIGN_INPUT_CONTROL_ACTIVE_BG };
obj.customContainer = obj;
let closure_6 = obj.createStyles(obj);
const tmp2 = arg1(dependencyMap[2]);
const result = arg1(dependencyMap[16]).fileFinishedImporting("modules/notifications/settings/native/NotificationSettingsPresets.tsx");

export const NotificationSettingsGuildPresets = function NotificationSettingsGuildPresets(guildId) {
  const arg1 = guildId;
  const obj = {
    preset: arg1(dependencyMap[14]).useGuildPresetSettings(guildId.guildId).preset,
    updatePreset(arg0) {
      return arg0(closure_1[14]).updateGuildPreset(arg0.guildId, arg0);
    }
  };
  return callback(NotificationSettingsPresets, obj);
};
export const NotificationSettingsChannelPresets = function NotificationSettingsChannelPresets(channel) {
  const arg1 = channel;
  const obj = {
    preset: arg1(dependencyMap[15]).useChannelPresetSettings(channel.channel).preset,
    updatePreset(arg0) {
      return arg0(closure_1[15]).updateChannelPreset(arg0.channel.guild_id, arg0.channel.id, arg0);
    }
  };
  return callback(NotificationSettingsPresets, obj);
};
