// Module ID: 10038
// Function ID: 77604
// Name: GuildTemplatesItem
// Dependencies: []
// Exports: default

// Module 10038 (GuildTemplatesItem)
class GuildTemplatesItem {
  constructor(arg0) {
    guildTemplate = global.guildTemplate;
    arg1 = guildTemplate;
    importDefault = global.onGuildTemplatePress;
    obj = {
      Icon() {
            const obj = { source: guildTemplate(closure_2[8]).GUILD_TEMPLATE_ICONS[closure_0.id], disableColor: true, style: {} };
            return callback(guildTemplate(closure_2[7]).Icon, obj);
          },
      message: guildTemplate.label,
      onPress() {
            return onGuildTemplatePress(guildTemplate);
          }
    };
    return jsx(importDefault(dependencyMap[6]), obj);
  }
}
let closure_3 = importAll(dependencyMap[0]);
({ View: closure_4, ScrollView: closure_5 } = arg1(dependencyMap[1]));
const tmp2 = arg1(dependencyMap[1]);
({ getHubGuildTemplatesMap: closure_6, HubGuildTemplateId: closure_7 } = arg1(dependencyMap[2]));
const GuildDirectoryCreate = arg1(dependencyMap[3]).GuildDirectoryCreate;
const tmp3 = arg1(dependencyMap[2]);
({ jsx: closure_9, jsxs: closure_10 } = arg1(dependencyMap[4]));
const tmp4 = arg1(dependencyMap[4]);
let closure_11 = arg1(dependencyMap[5]).createStyles({ label: { "Bool(true)": "Text", "Bool(true)": "round", "Bool(true)": "window" }, title: { bounces: null, keyboardShouldPersistTaps: null }, description: { textAlign: "center" }, header: {}, templateGroup: { marginHorizontal: 16 } });
const obj = arg1(dependencyMap[5]);
const result = arg1(dependencyMap[16]).fileFinishedImporting("modules/directory_channels/native/components/GuildDirectoryTemplates.tsx");

export default function GuildDirectoryTemplates(directoryGuildName) {
  const arg1 = directoryGuildName;
  const tmp = callback4();
  const importDefault = React.useRef(directoryGuildName);
  let obj = arg1(dependencyMap[9]);
  const navigation = obj.useNavigation();
  const dependencyMap = navigation;
  const tmp3 = callback();
  const effect = React.useEffect(() => {
    closure_1.current = arg0;
  });
  const items = [navigation];
  const callback = React.useCallback((guildTemplate) => {
    navigation.push(constants.CREATE, { onHubGuildInfoSet: ref.current.onHubGuildInfoSet, guildTemplate });
  }, items);
  obj = {};
  obj = { contentContainerStyle: obj1 };
  const obj2 = { style: tmp.header };
  const obj3 = { 0: 24, 9223372036854775807: 24, 0: null, -9223372036854775808: "aa9c26c29990ba7a6584e51ab5c56efa", style: tmp.title };
  const intl = arg1(dependencyMap[13]).intl;
  obj3.children = intl.format(arg1(dependencyMap[13]).t.T7aLYT, { guildName: directoryGuildName.directoryGuildName });
  const items1 = [callback2(arg1(dependencyMap[12]).Text, obj3), ];
  const obj5 = { style: tmp.description };
  const intl2 = arg1(dependencyMap[13]).intl;
  obj5.children = intl2.string(arg1(dependencyMap[13]).t.RA+St6);
  items1[1] = callback2(arg1(dependencyMap[12]).Text, obj5);
  obj2.children = items1;
  const items2 = [callback3(closure_4, obj2), , , ];
  const obj6 = { style: tmp.templateGroup };
  const obj7 = { hasIcons: true };
  const obj8 = {};
  const obj9 = {};
  const merged = Object.assign(tmp3[closure_7.CREATE]);
  const intl3 = arg1(dependencyMap[13]).intl;
  obj9["label"] = intl3.string(arg1(dependencyMap[13]).t.WqJbLi);
  obj8.guildTemplate = obj9;
  obj8.onGuildTemplatePress = callback;
  obj7.children = callback2(GuildTemplatesItem, obj8);
  obj6.children = callback2(arg1(dependencyMap[14]).TableRowGroup, obj7);
  items2[1] = callback2(closure_4, obj6);
  const obj10 = { style: tmp.label };
  const obj1 = { paddingBottom: importDefault(dependencyMap[10])().bottom + 16 };
  const obj4 = { guildName: directoryGuildName.directoryGuildName };
  const intl4 = arg1(dependencyMap[13]).intl;
  obj10.children = intl4.string(arg1(dependencyMap[13]).t.JGDkfg);
  items2[2] = callback2(importDefault(dependencyMap[15]), obj10);
  const obj11 = { style: tmp.templateGroup };
  const obj12 = { hasIcons: true };
  const items3 = [callback2(GuildTemplatesItem, { guildTemplate: tmp3[closure_7.HUB_STUDY], onGuildTemplatePress: callback }), callback2(GuildTemplatesItem, { guildTemplate: tmp3[closure_7.HUB_SCHOOL_CLUB], onGuildTemplatePress: callback }), callback2(GuildTemplatesItem, { guildTemplate: tmp3[closure_7.HUB_CLASS], onGuildTemplatePress: callback }), callback2(GuildTemplatesItem, { guildTemplate: tmp3[closure_7.HUB_SOCIAL], onGuildTemplatePress: callback }), callback2(GuildTemplatesItem, { guildTemplate: tmp3[closure_7.HUB_MAJOR], onGuildTemplatePress: callback }), callback2(GuildTemplatesItem, { guildTemplate: tmp3[closure_7.HUB_DORM], onGuildTemplatePress: callback })];
  obj12.children = items3;
  obj11.children = callback3(arg1(dependencyMap[14]).TableRowGroup, obj12);
  items2[3] = callback2(closure_4, obj11);
  obj.children = items2;
  obj.children = callback3(closure_5, obj);
  return callback2(arg1(dependencyMap[11]).GuildDirectoryAddModalScreen, obj);
};
export { GuildTemplatesItem };
