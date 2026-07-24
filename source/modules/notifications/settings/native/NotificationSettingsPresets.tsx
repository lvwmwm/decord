// Module ID: 10320
// Function ID: 79674
// Name: NotificationSettingsPresets
// Dependencies: [31, 27, 33, 1212, 4328, 4091, 10321, 10232, 4130, 689, 8404, 4126, 4543, 8799, 10323, 10317, 2]
// Exports: NotificationSettingsChannelPresets, NotificationSettingsGuildPresets

// Module 10320 (NotificationSettingsPresets)
import result from "result";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_4;
let closure_5;
const require = arg1;
function NotificationSettingsPresets(preset) {
  const _require = preset;
  let num = 0;
  if (preset.preset !== _require(num[4]).Presets.ALL_MESSAGES) {
    let num2 = 1;
    if (preset.preset !== _require(num[4]).Presets.MENTIONS) {
      let num3;
      if (preset.preset === _require(num[4]).Presets.NOTHING) {
        num3 = 2;
      }
      num2 = num3;
    }
    num = num2;
  }
  let obj = _require(num[10]);
  obj = {
    pageWidth: 0,
    onSetActiveIndex(arg0) {
      let tmp = 0 === arg0;
      if (tmp) {
        tmp = preset.preset !== preset(num[4]).Presets.ALL_MESSAGES;
      }
      if (tmp) {
        preset.updatePreset(preset(num[4]).Presets.ALL_MESSAGES);
      }
      let tmp9 = 1 === arg0;
      if (tmp9) {
        tmp9 = preset.preset !== preset(num[4]).Presets.MENTIONS;
      }
      if (tmp9) {
        preset.updatePreset(preset(num[4]).Presets.MENTIONS);
      }
      let tmp17 = 2 === arg0;
      if (tmp17) {
        tmp17 = preset.preset !== preset(num[4]).Presets.NOTHING;
      }
      if (tmp17) {
        preset.updatePreset(preset(num[4]).Presets.NOTHING);
      }
    }
  };
  obj = {};
  const intl = _require(num[3]).intl;
  obj.label = intl.string(_require(num[3]).t.hZrr6k);
  obj.id = _require(num[4]).Presets.ALL_MESSAGES;
  obj.icon = callback(_require(num[5]).CircleCheckIcon, {});
  obj.page = null;
  const items = [obj, , ];
  const obj1 = {};
  const intl2 = _require(num[3]).intl;
  obj1.label = intl2.string(_require(num[3]).t.y59NJm);
  obj1.id = _require(num[4]).Presets.MENTIONS;
  obj1.icon = callback(_require(num[6]).MagicWandIcon, {});
  obj1.page = null;
  items[1] = obj1;
  const obj2 = {};
  const intl3 = _require(num[3]).intl;
  obj2.label = intl3.string(_require(num[3]).t["pGn/bJ"]);
  obj2.id = _require(num[4]).Presets.NOTHING;
  obj2.icon = callback(_require(num[7]).BellSlashIcon, {});
  obj2.page = null;
  items[2] = obj2;
  obj.items = items;
  obj.defaultIndex = num;
  const segmentedControlState = obj.useSegmentedControlState(obj);
  const items1 = [num, segmentedControlState];
  const effect = segmentedControlState.useEffect(() => {
    let tmp = null == num;
    if (!tmp) {
      tmp = num >= 3;
    }
    if (!tmp) {
      segmentedControlState.setActiveIndex(num);
    }
  }, items1);
  if (preset.preset === _require(num[4]).Presets.CUSTOM) {
    const obj3 = { style: tmp.customContainer };
    const obj4 = { style: { flex: 1, marginRight: 8 } };
    const obj5 = { variant: "text-sm/semibold" };
    const intl4 = _require(num[3]).intl;
    obj5.children = intl4.string(_require(num[3]).t["32yow9"]);
    const items2 = [callback(_require(num[11]).Text, obj5), ];
    const obj6 = { variant: "text-xs/medium" };
    const intl5 = _require(num[3]).intl;
    obj6.children = intl5.string(_require(num[3]).t.l3doVX);
    items2[1] = callback(_require(num[11]).Text, obj6);
    obj4.children = items2;
    const items3 = [callback2(View, obj4), ];
    const obj7 = { variant: "secondary" };
    const intl6 = _require(num[3]).intl;
    obj7.text = intl6.string(_require(num[3]).t["ztO+l+"]);
    obj7.onPress = function onPress() {
      preset.updatePreset(preset(num[4]).Presets.MENTIONS);
    };
    items3[1] = callback(_require(num[12]).Button, obj7);
    obj3.children = items3;
    let tmp11 = callback2(View, obj3);
  } else {
    const obj8 = { variant: "experimental_Large", state: segmentedControlState };
    tmp11 = callback(_require(num[13]).SegmentedControl, obj8);
  }
  return tmp11;
}
({ jsx: closure_4, jsxs: closure_5 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { padding: 16, minHeight: 82, display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", borderRadius: require("_createForOfIteratorHelperLoose").radii.lg + 8, backgroundColor: require("_createForOfIteratorHelperLoose").colors.REDESIGN_INPUT_CONTROL_ACTIVE_BG };
_createForOfIteratorHelperLoose.customContainer = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("jsxProd").fileFinishedImporting("modules/notifications/settings/native/NotificationSettingsPresets.tsx");

export const NotificationSettingsGuildPresets = function NotificationSettingsGuildPresets(guildId) {
  const _require = guildId;
  const obj = {
    preset: _require(10323).useGuildPresetSettings(guildId.guildId).preset,
    updatePreset(arg0) {
      return guildId(outer1_1[14]).updateGuildPreset(guildId.guildId, arg0);
    }
  };
  return callback(NotificationSettingsPresets, obj);
};
export const NotificationSettingsChannelPresets = function NotificationSettingsChannelPresets(channel) {
  const _require = channel;
  const obj = {
    preset: _require(10317).useChannelPresetSettings(channel.channel).preset,
    updatePreset(arg0) {
      return channel(outer1_1[15]).updateChannelPreset(channel.channel.guild_id, channel.channel.id, arg0);
    }
  };
  return callback(NotificationSettingsPresets, obj);
};
