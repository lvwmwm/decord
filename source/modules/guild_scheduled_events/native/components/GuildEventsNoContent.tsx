// Module ID: 8452
// Function ID: 67459
// Name: GuildEventsNoContent
// Dependencies: []
// Exports: default

// Module 8452 (GuildEventsNoContent)
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
let closure_4 = importDefault(dependencyMap[2]);
const GuildSettingsSections = arg1(dependencyMap[3]).GuildSettingsSections;
const tmp3 = arg1(dependencyMap[4]);
const Permissions = tmp3.Permissions;
({ jsx: closure_7, jsxs: closure_8 } = arg1(dependencyMap[5]));
let obj = arg1(dependencyMap[6]);
obj = { container: { "Null": 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000041720134909825453, "Null": 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000005562684648340265, "Null": 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001001283236846306, "Null": -0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000030006326445372825, "Null": 59661297798907350000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, "Null": 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000003140553771325 } };
obj = {};
const tmp4 = arg1(dependencyMap[5]);
const merged = Object.assign(importDefault(dependencyMap[7])(tmp3.Fonts.DISPLAY_EXTRABOLD, importDefault(dependencyMap[8]).colors.MOBILE_TEXT_HEADING_PRIMARY, 24, { marginBottom: 8 }));
obj["textAlign"] = "center";
obj.title = obj;
obj.subtitle = { 0: false, 0: false };
let closure_9 = obj.createStyles(obj);
const importDefaultResult = importDefault(dependencyMap[7]);
const obj1 = { marginBottom: 8 };
const result = arg1(dependencyMap[17]).fileFinishedImporting("modules/guild_scheduled_events/native/components/GuildEventsNoContent.tsx");

export default function GuildEventsNoContent(guild) {
  guild = guild.guild;
  const arg1 = guild;
  const importDefault = guild.onClose;
  const tmp = callback2();
  let obj = arg1(dependencyMap[9]);
  const items = [closure_4];
  const items1 = [guild];
  let stateFromStores = obj.useStateFromStores(items, () => closure_4.can(constants2.MANAGE_ROLES, guild), items1);
  obj = { style: tmp.container };
  obj = { icon: importDefault(dependencyMap[11]), IconComponent: arg1(dependencyMap[12]).CalendarIcon };
  const items2 = [callback(importDefault(dependencyMap[10]), obj), , , ];
  const obj1 = { Opened: 24, marginVertical: 24, marginStart: null, marginEnd: "aa9c26c29990ba7a6584e51ab5c56efa", style: tmp.title };
  const intl = arg1(dependencyMap[14]).intl;
  obj1.children = intl.string(arg1(dependencyMap[14]).t.WgZ+3D);
  items2[1] = callback(arg1(dependencyMap[13]).Text, obj1);
  const obj2 = { delete: -1034747437, dispatch: -1274954172, raw: 94480, style: tmp.subtitle };
  const intl2 = arg1(dependencyMap[14]).intl;
  obj2.children = intl2.string(arg1(dependencyMap[14]).t.v/S/PG);
  items2[2] = callback(arg1(dependencyMap[13]).Text, obj2);
  if (stateFromStores) {
    const obj3 = { delete: -1034747437, dispatch: -1274954172, raw: 94480, style: tmp.subtitle };
    const intl3 = arg1(dependencyMap[14]).intl;
    const obj4 = {
      onClick() {
          onClose();
          onClose(closure_2[16]).open(guild.id, constants.ROLES);
        }
    };
    obj3.children = intl3.format(arg1(dependencyMap[14]).t.K+DH2o, obj4);
    stateFromStores = callback(arg1(dependencyMap[15]).TextWithIOSLinkWorkaround, obj3);
  }
  items2[3] = stateFromStores;
  obj.children = items2;
  return closure_8(View, obj);
};
