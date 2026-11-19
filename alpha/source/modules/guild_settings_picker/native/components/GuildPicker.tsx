// Module ID: 15022
// Function ID: 15023
// Name: GuildPicker
// Dependencies: [19, 21, 15023, 15024, 7203, 5006, 7493, 2121, 1113, 2]
// Exports: default

// Module 15022 (GuildPicker)
import Fragment from "Fragment" /* 21 */;
import intl2 from "intl" /* 1113 */;
import asyncRequire from "asyncRequire" /* 2121 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5006 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let dependencyMap;

const jsx = Fragment.jsx;
const GuildPicker_str = "GuildPicker";
const result = size.fileFinishedImporting("modules/guild_settings_picker/native/components/GuildPicker.tsx");

export default function GuildPicker(isGuildIncluded) {
  let c2;
  let items;
  let selectedGuild;
  const guildId = isGuildIncluded.guildId;
  const onChange = isGuildIncluded.onChange;
  dependencyMap = undefined;
  let tmp2 = dependencyMap;
  let tmp = onChange;
  ({ options: c2, selectedGuild } = onChange(15023)({ isGuildIncluded: isGuildIncluded.isGuildIncluded, selectedGuildId: guildId }));
  let tmp4Result;
  onChange(15023)({ isGuildIncluded: isGuildIncluded.isGuildIncluded, selectedGuildId: guildId });
  onChange(15024);
  if (null != selectedGuild) {
    let obj = { guild: selectedGuild, size: guildId(7203).GuildIconSizes.XSMALL };
    const tmpResult = tmp(7203);
    tmp4Result = tmp4(tmpResult, obj);
  }
  let name;
  if (selectedGuild != null) {
    name = selectedGuild.name;
  }
  let intl = guildId(1113).intl;
  return <tmp5 leading={tmp4Result} label={name} onPress={function handleSelectGuild() {
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
          const obj = closure_1_1(closure_1_2[5]);
          obj.hideActionSheet(closure_1_4);
        });
      },
      selectedItem: guildId,
      hasIcons: false
    };
    const tmp2 = asyncRequire(7493, dependencyMap.paths);
    intl = intl2.intl;
    openLazy(tmp2, GuildPicker_str, obj);
  }} placeholder={intl.string(guildId(1113).t.etZ9tX)} />;
};
