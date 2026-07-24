// Module ID: 12953
// Function ID: 100441
// Name: GuildPicker
// Dependencies: [31, 33, 12954, 12955, 4098, 8426, 1934, 1212, 2]
// Exports: default

// Module 12953 (GuildPicker)
import "result";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("useFilteredGuilds").fileFinishedImporting("modules/guild_settings_picker/native/components/GuildPicker.tsx");

export default function GuildPicker(isGuildIncluded) {
  let dependencyMap;
  let selectedGuild;
  const guildId = isGuildIncluded.guildId;
  const onChange = isGuildIncluded.onChange;
  ({ options: dependencyMap, selectedGuild } = onChange(12954)({ isGuildIncluded: isGuildIncluded.isGuildIncluded, selectedGuildId: guildId }));
  let obj = {};
  let name;
  const tmp = onChange(12954)({ isGuildIncluded: isGuildIncluded.isGuildIncluded, selectedGuildId: guildId });
  const tmp2 = jsx;
  if (null != selectedGuild) {
    name = selectedGuild.name;
  }
  obj.label = name;
  obj.onPress = function onPress() {
    let obj = onChange(outer1_2[4]);
    obj = {};
    const intl = guildId(outer1_2[7]).intl;
    obj.title = intl.string(guildId(outer1_2[7]).t.etZ9tX);
    obj.items = closure_2;
    obj.onItemSelect = function onItemSelect(arg0) {
      if (null != arg0) {
        if (null != outer1_1) {
          outer1_1(arg0);
        }
      }
      setImmediate(() => {
        onChange(outer3_2[4]).hideActionSheet("GuildPicker");
      });
    };
    obj.selectedItem = guildId;
    obj.hasIcons = false;
    obj.openLazy(guildId(outer1_2[6])(outer1_2[5], outer1_2.paths), "GuildPicker", obj);
  };
  let intl = guildId(1212).intl;
  obj.placeholder = intl.string(guildId(1212).t.etZ9tX);
  return tmp2(onChange(12955), obj);
};
