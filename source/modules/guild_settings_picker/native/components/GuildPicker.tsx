// Module ID: 12787
// Function ID: 97962
// Name: GuildPicker
// Dependencies: []
// Exports: default

// Module 12787 (GuildPicker)
importAll(dependencyMap[0]);
const jsx = arg1(dependencyMap[1]).jsx;
const result = arg1(dependencyMap[8]).fileFinishedImporting("modules/guild_settings_picker/native/components/GuildPicker.tsx");

export default function GuildPicker(isGuildIncluded) {
  let selectedGuild;
  const guildId = isGuildIncluded.guildId;
  const arg1 = guildId;
  const importDefault = isGuildIncluded.onChange;
  ({ options: closure_2, selectedGuild } = importDefault(dependencyMap[2])({ isGuildIncluded: isGuildIncluded.isGuildIncluded, selectedGuildId: guildId }));
  const obj = {};
  let name;
  const tmp = importDefault(dependencyMap[2])({ isGuildIncluded: isGuildIncluded.isGuildIncluded, selectedGuildId: guildId });
  const tmp2 = jsx;
  if (null != selectedGuild) {
    name = selectedGuild.name;
  }
  obj.label = name;
  obj.onPress = function onPress() {
    let obj = onChange(paths[4]);
    obj = {};
    const intl = guildId(paths[7]).intl;
    obj.title = intl.string(guildId(paths[7]).t.etZ9tX);
    obj.items = paths;
    obj.onItemSelect = function onItemSelect(arg0) {
      if (null != arg0) {
        if (null != callback) {
          callback(arg0);
        }
      }
      setImmediate(() => {
        callback(closure_2[4]).hideActionSheet("GuildPicker");
      });
    };
    obj.selectedItem = guildId;
    obj.hasIcons = false;
    obj.openLazy(guildId(paths[6])(paths[5], paths.paths), "GuildPicker", obj);
  };
  const intl = arg1(dependencyMap[7]).intl;
  obj.placeholder = intl.string(arg1(dependencyMap[7]).t.etZ9tX);
  return tmp2(importDefault(dependencyMap[3]), obj);
};
