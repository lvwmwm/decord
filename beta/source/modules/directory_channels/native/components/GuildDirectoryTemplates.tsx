// Module ID: 11806
// Function ID: 11807
// Name: GuildDirectoryTemplates
// Dependencies: [19, 17, 11788, 11793, 21, 4836, 11807, 1177, 11808, 1485, 1613, 11792, 4832, 1115, 5999, 6357, 2]
// Exports: default

// Module 11806 (GuildDirectoryTemplates)
import native from "native" /* 1177 */;
import directory_channels_GuildDirectoryConstants from "directory_channels/GuildDirectoryConstants" /* 11793 */;
import GuildDirectoryTemplatesIcons from "GuildDirectoryTemplatesIcons" /* 11808 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import GuildDirectoryConstants from "GuildDirectoryConstants" /* 11788 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, importDefault, navigation;

let c10;
let c9;
let closure_4;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
class GuildTemplatesItem {
  constructor(guildTemplate) {
    guildTemplate = guildTemplate.guildTemplate;
    const onGuildTemplatePress = guildTemplate.onGuildTemplatePress;
    let obj = {
      Icon() {
        const obj = { source: GuildDirectoryTemplatesIcons.GUILD_TEMPLATE_ICONS[guildTemplate.id], disableColor: true, style: { width: 48, height: 48 } };
        const Icon = native.Icon;
        return React4(Icon, obj);
      },
      message: guildTemplate.label,
      onPress() {
        return onGuildTemplatePress(guildTemplate);
      }
    };
    return closure_9(onGuildTemplatePress(11807), obj);
  }
}
({ View: closure_4, ScrollView: hasOwnProperty } = react_native);
({ getHubGuildTemplatesMap: metroRequire, HubGuildTemplateId: metroImportDefault } = GuildDirectoryConstants);
const GuildDirectoryCreate = directory_channels_GuildDirectoryConstants.GuildDirectoryCreate;
({ jsx: c9, jsxs: c10 } = Fragment);
let closure_11 = createStyles.createStyles({ label: { marginTop: 16, marginLeft: 16, marginBottom: 8 }, title: { marginBottom: 8, textAlign: "center" }, description: { textAlign: "center" }, header: { alignItems: "center", justifyContent: "center", padding: 16 }, templateGroup: { marginHorizontal: 16 } });
const result = size.fileFinishedImporting("modules/directory_channels/native/components/GuildDirectoryTemplates.tsx");

export default function GuildDirectoryTemplates(directoryGuildName) {
  let TableRowGroup;
  let TableRowGroup2;
  let current;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let items1;
  let items2;
  let items3;
  let obj10;
  let obj11;
  let obj12;
  let obj15;
  let obj3;
  let obj4;
  let obj7;
  let ref;
  _require = directoryGuildName;
  const tmp = closure_11();
  importDefault = react.useRef(directoryGuildName);
  let obj = require("useNavigation");
  navigation = obj.useNavigation();
  const tmp3 = closure_6();
  const bottom = require("useSafeAreaInsets")().bottom;
  const effect = react.useEffect(() => {
    ref.current = current;
  });
  const items = [navigation];
  const callback = react.useCallback((guildTemplate) => {
    const obj = { onHubGuildInfoSet: ref.current.onHubGuildInfoSet, guildTemplate };
    navigation.push(GuildDirectoryCreate.CREATE, obj);
  }, items);
  const obj2 = { children: closure_10(closure_5, obj3) };
  obj3 = { contentContainerStyle: obj4, children: items2 };
  obj4 = { paddingBottom: bottom + 16 };
  const obj5 = { style: tmp.header, children: items1 };
  const GuildDirectoryAddModalScreen = require("GuildDirectoryAddModal").GuildDirectoryAddModalScreen;
  const obj6 = { style: tmp.title, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: intl.format(require("intl").t.T7aLYT, obj7) };
  const Text = require("Text/Text").Text;
  intl = require("intl").intl;
  obj7 = { guildName: directoryGuildName.directoryGuildName };
  items1 = [closure_9(Text, obj6), ];
  const obj8 = { style: tmp.description, variant: "text-sm/medium", color: "text-default", children: intl2.string(require("intl").t["RA+St6"]) };
  const Text2 = require("Text/Text").Text;
  intl2 = require("intl").intl;
  items1[1] = closure_9(Text2, obj8);
  items2 = [closure_10(closure_4, obj5), , , ];
  const obj9 = { style: tmp.templateGroup, children: closure_9(TableRowGroup, obj10) };
  obj10 = { hasIcons: true, children: closure_9(GuildTemplatesItem, obj11) };
  obj11 = { guildTemplate: obj12, onGuildTemplatePress: callback };
  obj12 = { label: intl3.string(require("intl").t.WqJbLi) };
  TableRowGroup = require("TableRowGroup").TableRowGroup;
  const merged = Object.assign(tmp3[constants.CREATE]);
  intl3 = require("intl").intl;
  items2[1] = closure_9(closure_4, obj9);
  const obj13 = { style: tmp.label, children: intl4.string(require("intl").t.JGDkfg) };
  const tmp7 = require("FreeFormLabel");
  intl4 = require("intl").intl;
  items2[2] = closure_9(tmp7, obj13);
  const obj14 = { style: tmp.templateGroup, children: closure_10(TableRowGroup2, obj15) };
  obj15 = { hasIcons: true, children: items3 };
  const obj16 = { guildTemplate: tmp3[constants.HUB_STUDY], onGuildTemplatePress: callback };
  TableRowGroup2 = require("TableRowGroup").TableRowGroup;
  items3 = [closure_9(GuildTemplatesItem, obj16), , , , , ];
  const obj17 = { guildTemplate: tmp3[constants.HUB_SCHOOL_CLUB], onGuildTemplatePress: callback };
  items3[1] = closure_9(GuildTemplatesItem, obj17);
  const obj18 = { guildTemplate: tmp3[constants.HUB_CLASS], onGuildTemplatePress: callback };
  items3[2] = closure_9(GuildTemplatesItem, obj18);
  const obj19 = { guildTemplate: tmp3[constants.HUB_SOCIAL], onGuildTemplatePress: callback };
  items3[3] = closure_9(GuildTemplatesItem, obj19);
  const obj20 = { guildTemplate: tmp3[constants.HUB_MAJOR], onGuildTemplatePress: callback };
  items3[4] = closure_9(GuildTemplatesItem, obj20);
  const obj21 = { guildTemplate: tmp3[constants.HUB_DORM], onGuildTemplatePress: callback };
  items3[5] = closure_9(GuildTemplatesItem, obj21);
  items2[3] = closure_9(closure_4, obj14);
  return closure_9(GuildDirectoryAddModalScreen, obj2);
};
export { GuildTemplatesItem };
