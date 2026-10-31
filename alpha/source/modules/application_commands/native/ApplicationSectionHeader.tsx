// Module ID: 13945
// Function ID: 13946
// Name: ApplicationSectionHeader
// Dependencies: [19, 17, 4926, 21, 5014, 575, 504, 13778, 1113, 5717, 5624, 2]
// Exports: default

// Module 13945 (ApplicationSectionHeader)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import react from "react" /* 19 */;
import GuildMemberStore from "GuildMemberStore" /* 4926 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5014 */;
import size_mod from "module_2" /* 2 */;

let hasOwnProperty;
let metroRequire;
let obj2;
let size;
const View = react_native.View;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let createStyles = createStyles_mod;
let obj = { applicationHeaderWrapper: obj2, applicationIcon: size };
obj2 = { flexDirection: "row", alignItems: "center", height: 32, backgroundColor: nativeDefault.colors.MOBILE_FLOATING_ACCESSORY_BACKGROUND, paddingHorizontal: 16 };
createStyles = createStyles.createStyles;
size = { width: 16, height: 16, borderRadius: nativeDefault.radii.sm, marginRight: 8 };
let closure_7 = createStyles(obj);
size = size_mod;
const result = size.fileFinishedImporting("modules/application_commands/native/ApplicationSectionHeader.tsx");

export default function ApplicationSectionHeader(section) {
  let intl;
  let items1;
  let name;
  section = section.section;
  const guildId = section.guildId;
  const tmp = closure_7();
  const tmp2 = section;
  const items = [GuildMemberStore];
  const obj = section(504);
  const stateFromStores = obj.useStateFromStores(items, () => {
    if (null != guildId) {
      let botId;
      if (section != null) {
        botId = tmp2.botId;
      }
      if (null != botId) {
        return GuildMemberStore.getMember(tmp, section.botId);
      }
    }
  });
  const obj2 = section(13778);
  const applicationCommandsIconSource = obj2.getApplicationCommandsIconSource(section, stateFromStores);
  let nick;
  if (stateFromStores != null) {
    nick = stateFromStores.nick;
  }
  if (null != nick) {
    name = stateFromStores.nick;
  } else if (section != null) {
    name = section.name;
  }
  const obj3 = { style: tmp.applicationHeaderWrapper, accessibilityLabel: intl.formatToPlainString(tmp2(1113).t["Ocw/sM"], { applicationName: name }), children: items1 };
  intl = tmp2(1113).intl;
  let tmp9 = null != applicationCommandsIconSource;
  const tmp7 = closure_6;
  const tmp8 = View;
  if (tmp9) {
    const obj4 = { style: tmp.applicationIcon, source: applicationCommandsIconSource };
    tmp9 = closure_5(guildId(5717), obj4);
  }
  items1 = [tmp9, closure_5(tmp2(5624).Text, { variant: "eyebrow", color: "interactive-text-default", children: name })];
  return tmp7(tmp8, obj3);
};
export const APPLICATION_SECTION_HEADER_HEIGHT = 32;
