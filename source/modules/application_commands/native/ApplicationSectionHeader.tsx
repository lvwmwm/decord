// Module ID: 11428
// Function ID: 88948
// Name: ApplicationSectionHeader
// Dependencies: []
// Exports: default

// Module 11428 (ApplicationSectionHeader)
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
let closure_4 = importDefault(dependencyMap[2]);
({ jsx: closure_5, jsxs: closure_6 } = arg1(dependencyMap[3]));
let obj = arg1(dependencyMap[4]);
obj = {};
obj = { "Bool(true)": 1, "Bool(true)": 71, "Bool(true)": null, "Bool(true)": 1, "Bool(true)": "center", backgroundColor: importDefault(dependencyMap[5]).colors.MOBILE_FLOATING_ACCESSORY_BACKGROUND };
obj.applicationHeaderWrapper = obj;
const tmp3 = arg1(dependencyMap[3]);
obj.applicationIcon = { borderRadius: importDefault(dependencyMap[5]).radii.sm };
let closure_7 = obj.createStyles(obj);
const obj1 = { borderRadius: importDefault(dependencyMap[5]).radii.sm };
const result = arg1(dependencyMap[11]).fileFinishedImporting("modules/application_commands/native/ApplicationSectionHeader.tsx");

export default function ApplicationSectionHeader(section) {
  section = section.section;
  const arg1 = section;
  const importDefault = section.guildId;
  const tmp = callback2();
  let obj = arg1(dependencyMap[6]);
  const items = [closure_4];
  const stateFromStores = obj.useStateFromStores(items, () => {
    if (null != guildId) {
      let botId;
      if (null != section) {
        botId = section.botId;
      }
      if (null != botId) {
        return member.getMember(guildId, section.botId);
      }
    }
  });
  let obj1 = arg1(dependencyMap[7]);
  const applicationCommandsIconSource = obj1.getApplicationCommandsIconSource(section, stateFromStores);
  let nick;
  if (null != stateFromStores) {
    nick = stateFromStores.nick;
  }
  if (null != nick) {
    let name = stateFromStores.nick;
  } else if (null != section) {
    name = section.name;
  }
  obj = { style: tmp.applicationHeaderWrapper };
  const intl = arg1(dependencyMap[8]).intl;
  obj = { applicationName: name };
  obj.accessibilityLabel = intl.formatToPlainString(arg1(dependencyMap[8]).t.Ocw/sM, obj);
  let tmp7 = null != applicationCommandsIconSource;
  if (tmp7) {
    obj1 = { style: tmp.applicationIcon, source: applicationCommandsIconSource };
    tmp7 = callback(importDefault(dependencyMap[9]), obj1);
  }
  const items1 = [tmp7, ];
  const obj2 = { hasMaxConnections: null, isBoostOnlySubscription: null, children: name };
  items1[1] = callback(arg1(dependencyMap[10]).Text, obj2);
  obj.children = items1;
  return closure_6(View, obj);
};
export const APPLICATION_SECTION_HEADER_HEIGHT = 32;
