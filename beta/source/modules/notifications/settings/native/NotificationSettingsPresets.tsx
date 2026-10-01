// Module ID: 9610
// Function ID: 9611
// Name: NotificationSettingsPresets
// Dependencies: [19, 17, 21, 1115, 5020, 4792, 9611, 9613, 4836, 576, 9083, 4832, 5281, 9084, 9615, 9607, 2]
// Exports: NotificationSettingsChannelPresets, NotificationSettingsGuildPresets

// Module 9610 (NotificationSettingsPresets)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import notificationSettingsPresetUtils from "notificationSettingsPresetUtils" /* 5020 */;
import notficationSettingsChannelFlagUtils from "notficationSettingsChannelFlagUtils" /* 9607 */;
import notificationSettingsGuildFlagUtils from "notificationSettingsGuildFlagUtils" /* 9615 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let closure_4;
let hasOwnProperty;
let obj2;
function NotificationSettingsPresets(preset) {
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let items;
  let items2;
  let items3;
  let tmp5Result;
  _require = preset;
  let tmp2 = _require;
  let tmp = closure_6();
  let num = 0;
  if (preset.preset !== require("notificationSettingsPresetUtils").Presets.ALL_MESSAGES) {
    let num2 = 1;
    if (preset.preset !== tmp2(num[4]).Presets.MENTIONS) {
      let num3;
      if (preset.preset === tmp2(num[4]).Presets.NOTHING) {
        num3 = 2;
      }
      num2 = num3;
    }
    num = num2;
  }
  const obj = {
    pageWidth: 0,
    onSetActiveIndex(arg0) {
      const tmp = 0 === arg0 && preset.preset !== notificationSettingsPresetUtils.Presets.ALL_MESSAGES;
      if (tmp) {
        preset.updatePreset(notificationSettingsPresetUtils.Presets.ALL_MESSAGES);
      }
      const tmp9 = 1 === arg0 && preset.preset !== notificationSettingsPresetUtils.Presets.MENTIONS;
      if (tmp9) {
        preset.updatePreset(notificationSettingsPresetUtils.Presets.MENTIONS);
      }
      const tmp17 = 2 === arg0 && preset.preset !== notificationSettingsPresetUtils.Presets.NOTHING;
      if (tmp17) {
        preset.updatePreset(notificationSettingsPresetUtils.Presets.NOTHING);
      }
    },
    items,
    defaultIndex: num
  };
  const obj2 = { label: intl.string(tmp2(num[3]).t.hZrr6k), id: tmp2(num[4]).Presets.ALL_MESSAGES, icon: closure_4(tmp2(num[5]).CircleCheckIcon, {}), page: null };
  const useSegmentedControlState = tmp2(tmp3[10]).useSegmentedControlState;
  tmp2(num[10]);
  intl = tmp2(tmp3[3]).intl;
  items = [obj2, , ];
  const obj3 = { label: intl2.string(tmp2(num[3]).t.y59NJm), id: tmp2(num[4]).Presets.MENTIONS, icon: closure_4(tmp2(num[6]).MagicWandIcon, {}), page: null };
  intl2 = tmp2(tmp3[3]).intl;
  items[1] = obj3;
  const obj4 = { label: intl3.string(tmp2(num[3]).t["pGn/bJ"]), id: tmp2(num[4]).Presets.NOTHING, icon: closure_4(tmp2(num[7]).BellSlashIcon, {}), page: null };
  intl3 = tmp2(tmp3[3]).intl;
  items[2] = obj4;
  const segmentedControlState = useSegmentedControlState(obj);
  const items1 = [num, segmentedControlState];
  const effect = segmentedControlState.useEffect(() => {
    const tmp2 = null == num || tmp >= 3;
    if (!tmp2) {
      segmentedControlState.setActiveIndex(num);
    }
  }, items1);
  if (preset.preset === tmp2(num[4]).Presets.CUSTOM) {
    let tmp9 = closure_5;
    const obj5 = { style: tmp.customContainer, children: items3 };
    const obj6 = { style: { flex: 1, marginRight: 8 }, children: items2 };
    const obj7 = { variant: "text-sm/semibold", children: intl4.string(tmp2(num[3]).t["32yow9"]) };
    const Text = tmp2(tmp3[11]).Text;
    intl4 = tmp2(tmp3[3]).intl;
    items2 = [tmp5(Text, obj7), ];
    const obj8 = { variant: "text-xs/medium", children: intl5.string(tmp2(num[3]).t.l3doVX) };
    const Text2 = tmp2(tmp3[11]).Text;
    intl5 = tmp2(tmp3[3]).intl;
    items2[1] = closure_4(Text2, obj8);
    items3 = [closure_5(View, obj6), ];
    const obj9 = {
      variant: "secondary",
      text: intl6.string(tmp2(num[3]).t["ztO+l+"]),
      onPress() {
          preset.updatePreset(notificationSettingsPresetUtils.Presets.MENTIONS);
        }
    };
    const Button = tmp2(tmp3[12]).Button;
    intl6 = tmp2(tmp3[3]).intl;
    items3[1] = closure_4(Button, obj9);
    tmp5Result = closure_5(View, obj5);
  } else {
    const obj10 = { variant: "experimental_Large", state: segmentedControlState };
    tmp5Result = tmp5(tmp2(tmp3[13]).SegmentedControl, obj10);
  }
  return tmp5Result;
}
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let obj = { customContainer: obj2 };
obj2 = { padding: 16, minHeight: 82, display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", borderRadius: nativeDefault.radii.lg + 8, backgroundColor: nativeDefault.colors.REDESIGN_INPUT_CONTROL_ACTIVE_BG };
let closure_6 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/notifications/settings/native/NotificationSettingsPresets.tsx");

export const NotificationSettingsGuildPresets = function NotificationSettingsGuildPresets(guildId) {
  let obj2;
  _require = guildId;
  let obj = {
    preset: obj2.useGuildPresetSettings(guildId.guildId).preset,
    updatePreset(arg0) {
      const obj = notificationSettingsGuildFlagUtils;
      return obj.updateGuildPreset(guildId.guildId, arg0);
    }
  };
  obj2 = require("notificationSettingsGuildFlagUtils");
  return closure_4(NotificationSettingsPresets, obj);
};
export const NotificationSettingsChannelPresets = function NotificationSettingsChannelPresets(channel) {
  let obj2;
  _require = channel;
  let obj = {
    preset: obj2.useChannelPresetSettings(channel.channel).preset,
    updatePreset(arg0) {
      const obj = notficationSettingsChannelFlagUtils;
      return obj.updateChannelPreset(channel.channel.guild_id, channel.channel.id, arg0);
    }
  };
  obj2 = require("notficationSettingsChannelFlagUtils");
  return closure_4(NotificationSettingsPresets, obj);
};
