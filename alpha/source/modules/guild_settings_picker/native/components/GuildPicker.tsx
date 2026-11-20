// Module ID: 14986
// Function ID: 14987
// Name: GuildPicker
// Dependencies: [19, 21, 14987, 14988, 7202, 5008, 7492, 2119, 1112, 2]
// Exports: default

// Module 14986 (GuildPicker)
import Fragment from "Fragment" /* 21 */;
import intl2 from "intl" /* 1112 */;
import asyncRequire from "asyncRequire" /* 2119 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5008 */;
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
  ({ options: c2, selectedGuild } = onChange(14987)({ isGuildIncluded: isGuildIncluded.isGuildIncluded, selectedGuildId: guildId }));
  let tmp4Result;
  onChange(14987)({ isGuildIncluded: isGuildIncluded.isGuildIncluded, selectedGuildId: guildId });
  onChange(14988);
  if (null != selectedGuild) {
    let obj = { guild: selectedGuild, size: guildId(7202).GuildIconSizes.XSMALL };
    const tmpResult = tmp(7202);
    tmp4Result = tmp4(tmpResult, obj);
  }
  let name;
  if (selectedGuild != null) {
    name = selectedGuild.name;
  }
  let intl = guildId(1112).intl;
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
    const tmp2 = asyncRequire(7492, dependencyMap.paths);
    intl = intl2.intl;
    openLazy(tmp2, GuildPicker_str, obj);
  }} placeholder={intl.string(guildId(1112).t.etZ9tX)} />;
};
