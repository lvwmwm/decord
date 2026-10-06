// Module ID: 13724
// Function ID: 13725
// Name: GuildPicker
// Dependencies: [19, 21, 13725, 13726, 4860, 8978, 1987, 1126, 2]
// Exports: default

// Module 13724 (GuildPicker)
import Fragment from "Fragment" /* 21 */;
import intl2 from "intl" /* 1126 */;
import asyncRequire from "asyncRequire" /* 1987 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4860 */;
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
  let tmp2 = onChange(13725)({ isGuildIncluded: isGuildIncluded.isGuildIncluded, selectedGuildId: guildId });
  ({ options: c2, selectedGuild } = tmp2);
  let name;
  const tmp3 = jsx;
  const tmp4 = onChange(13726);
  if (selectedGuild != null) {
    name = selectedGuild.name;
  }
  let obj = {
    label: name,
    onPress() {
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
      const tmp2 = asyncRequire(8978, dependencyMap.paths);
      intl = intl2.intl;
      openLazy(tmp2, GuildPicker_str, obj);
    },
    placeholder: intl.string(guildId(1126).t.etZ9tX)
  };
  intl = guildId(1126).intl;
  return tmp3(tmp4, obj);
};
