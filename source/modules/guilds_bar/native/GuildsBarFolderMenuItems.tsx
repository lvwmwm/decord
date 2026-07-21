// Module ID: 14692
// Function ID: 110830
// Name: getGuildFolderMenuItems
// Dependencies: []
// Exports: getGuildFolderMenuItems

// Module 14692 (getGuildFolderMenuItems)
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
const AnalyticsSections = arg1(dependencyMap[2]).AnalyticsSections;
const result = arg1(dependencyMap[9]).fileFinishedImporting("modules/guilds_bar/native/GuildsBarFolderMenuItems.tsx");

export const getGuildFolderMenuItems = function getGuildFolderMenuItems(id) {
  const arg1 = id;
  let obj = { IconComponent: arg1(dependencyMap[3]).EnvelopeIcon };
  const intl = arg1(dependencyMap[4]).intl;
  obj.label = intl.string(arg1(dependencyMap[4]).t.e6RscS);
  obj.action = function action() {
    // CreateGeneratorClosureLongIndex (0x67)
    return callback(tmp)();
  };
  const items = [obj, ];
  obj = { IconComponent: arg1(dependencyMap[7]).SettingsIcon };
  const intl2 = arg1(dependencyMap[4]).intl;
  obj.label = intl2.string(arg1(dependencyMap[4]).t.Dx7im5);
  obj.action = function action() {
    // CreateGeneratorClosureLongIndex (0x67)
    return callback(tmp)();
  };
  items[1] = obj;
  return items;
};
