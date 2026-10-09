// Module ID: 14043
// Function ID: 14044
// Name: GuildPicker
// Dependencies: [19, 21, 14044, 14045, 5055, 8537, 2000, 1126, 2]
// Exports: default

// Module 14043 (GuildPicker)
import Fragment from "Fragment" /* 21 */;
import intl2 from "intl" /* 1126 */;
import asyncRequire from "asyncRequire" /* 2000 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5055 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let dependencyMap;

const jsx = Fragment.jsx;
const GuildPicker_str = "GuildPicker";
const result = size.fileFinishedImporting("modules/guild_settings_picker/native/components/GuildPicker.tsx");

export default function GuildPicker(isGuildIncluded) {
  let c2;
  let intl;
  let items;
  let selectedGuild;
  const guildId = isGuildIncluded.guildId;
  const onChange = isGuildIncluded.onChange;
  dependencyMap = undefined;
  let tmp = dependencyMap;
  let tmp2 = onChange(14044)({ isGuildIncluded: isGuildIncluded.isGuildIncluded, selectedGuildId: guildId });
  ({ options: c2, selectedGuild } = tmp2);
  let name;
  const tmp3 = jsx;
  const tmp4 = onChange(14045);
  if (selectedGuild != null) {
    name = selectedGuild.name;
  }
  let obj = {
    label: name,
    onPress: function handleSelectGuild() {
      let intl;
      const tmp = ActionSheetActionCreatorsDefault;
      const openLazy = tmp.openLazy;
      let obj = {
        title: intl.string(intl2.t.etZ9tX),
        items,
        onItemSelect(arg0) {
          if (null != arg0) {
            if (onChange != null) {
              tmp(arg0);
            }
          }
          setImmediate(() => {
            const obj = closure_1_1(closure_1_2[4]);
            obj.hideActionSheet(closure_1_4);
          });
        },
        selectedItem: guildId,
        hasIcons: false
      };
      const tmp2 = asyncRequire(8537, dependencyMap.paths);
      intl = intl2.intl;
      openLazy(tmp2, GuildPicker_str, obj);
    },
    placeholder: intl.string(guildId(1126).t.etZ9tX)
  };
  intl = guildId(1126).intl;
  return tmp3(tmp4, obj);
};
