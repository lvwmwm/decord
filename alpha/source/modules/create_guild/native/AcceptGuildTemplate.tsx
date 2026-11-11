// Module ID: 13947
// Function ID: 13948
// Name: AcceptGuildTemplate
// Dependencies: [19, 17, 5096, 5150, 1072, 8065, 21, 5243, 575, 6763, 7354, 1187, 13948, 1113, 38, 1627, 5151, 5866, 13950, 7553, 5873, 8045, 12, 7947, 13955, 13956, 10872, 1090, 2]
// Exports: default

// Module 13947 (AcceptGuildTemplate)
import _modDef12 from "module_12" /* 12 */;
import _modDef38 from "module_38" /* 38 */;
import nativeDefault from "native" /* 575 */;
import intl11 from "intl" /* 1113 */;
import native from "native" /* 1187 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1627 */;
import ChannelRecord from "ChannelRecord" /* 5096 */;
import GuildRoleRecord from "GuildRoleRecord" /* 5150 */;
import GuildRoleRecordUtilsAll from "GuildRoleRecordUtils" /* 5151 */;
import ActivityIndicator_ActivityIndicator from "ActivityIndicator/ActivityIndicator" /* 7354 */;
import GuildTemplatesConstants from "GuildTemplatesConstants" /* 8065 */;
import RolePillDefault from "RolePill" /* 10872 */;
import InvalidLink from "InvalidLink" /* 13948 */;
import GuildIconUploaderDefault from "GuildIconUploader" /* 13950 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Constants from "Constants" /* 1072 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5243 */;
import TextStyles_mod from "TextStyles" /* 6763 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let errors;

let Fonts;
let c9;
let closure_12;
let closure_4;
let hasOwnProperty;
let map1;
let metroImportAll;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
let obj8;
let tmp2;
let unpackModuleId;
const FormDividerDefault = tmp2(8045);
function GuildTemplateResolving() {
  const obj = { style: closure_14().resolvingContainer, children: unpackModuleId(ActivityIndicator_ActivityIndicator.ActivityIndicator, {}) };
  return unpackModuleId(React3, obj);
}
function GuildTemplateResolved(guildTemplate) {
  let Button;
  let chooseIcon;
  let createServer;
  let icon;
  let intl;
  let intl10;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let intl9;
  let items;
  let items1;
  let items2;
  let items3;
  let items4;
  let name;
  let name1;
  let obj7;
  let obj9;
  let setName;
  guildTemplate = guildTemplate.guildTemplate;
  errors = guildTemplate.errors;
  ({ createServer, name, setName, icon, chooseIcon } = guildTemplate);
  const tmp = closure_14();
  _modDef38(null != guildTemplate, "guild template cannot be null");
  _modDef38(guildTemplate.state !== GuildTemplateStates.RESOLVING, "guild must be resolved");
  const roles = guildTemplate.serializedSourceGuild.roles;
  const bottom = useSafeAreaInsetsDefault().bottom;
  const mapped = roles.map((item) => {
    const obj = GuildRoleRecordUtilsAll;
    return obj.fromServer(guildTemplate.serializedSourceGuild.id, item);
  });
  const found = mapped.filter((item) => !isEveryoneRole(item));
  let obj = { contentContainerStyle: items, keyboardShouldPersistTaps: "handled", children: items1 };
  items = [tmp.wrapper, { marginBottom: bottom }];
  const obj2 = { style: tmp.header, variant: "heading-xl/semibold", color: "mobile-text-heading-primary", children: intl.string(guildTemplate(1113).t.QzUORX) };
  const Text = guildTemplate(5866).Text;
  intl = guildTemplate(1113).intl;
  items1 = [closure_11(Text, obj2), , , , , , , , , , , ];
  const obj3 = { style: tmp.description, variant: "body-lg/medium", color: "text-default", children: guildTemplate.name };
  items1[1] = closure_11(guildTemplate(5866).Text, obj3);
  const obj4 = { iconBackgroundColor: tmp.wrapper.backgroundColor, style: tmp.iconUploader, onPress: chooseIcon, icon };
  items1[2] = closure_11(GuildIconUploaderDefault, obj4);
  const obj5 = { label: intl2.string(guildTemplate(1113).t.dBih7e), errorMessage: name1, value: name, onChange: setName, autoFocus: true, autoCorrect: false, returnKeyType: "done", clearable: true };
  const TextInput = guildTemplate(7553).TextInput;
  intl2 = guildTemplate(1113).intl;
  name1 = undefined;
  const tmp8 = closure_5;
  if (errors != null) {
    name1 = errors.name;
  }
  items1[3] = closure_11(TextInput, obj5);
  const obj6 = { style: tmp.hint, variant: "body-xs/medium", color: "text-muted", children: intl3.format(guildTemplate(1113).t["2bprXx"], obj7) };
  const Text2 = tmp10(5866).Text;
  intl3 = tmp10(1113).intl;
  obj7 = { guidelinesURL: constants.GUIDELINES };
  items1[4] = closure_11(Text2, obj6);
  const obj8 = { style: tmp.createButtonWrapper, children: closure_11(Button, obj9) };
  obj9 = { size: "md", text: intl4.string(guildTemplate(1113).t["O0p/lS"]), onPress: createServer, loading: guildTemplate.state === GuildTemplateStates.ACCEPTING, disabled: guildTemplate.state === GuildTemplateStates.ACCEPTING, grow: true };
  Button = tmp10(5873).Button;
  intl4 = tmp10(1113).intl;
  items1[5] = closure_11(closure_4, obj8);
  const obj10 = { style: tmp.divider, outer: true };
  items1[6] = closure_11(FormDividerDefault, obj10);
  const obj11 = { style: tmp.sectionHeader, variant: "heading-sm/semibold", color: "mobile-text-heading-primary", children: intl5.string(guildTemplate(1113).t.OGiMXJ) };
  const Text3 = tmp10(5866).Text;
  intl5 = tmp10(1113).intl;
  items1[7] = closure_11(Text3, obj11);
  const obj12 = { variant: "body-xs/medium", color: "text-default", children: intl6.string(guildTemplate(1113).t.Ztwyoz) };
  const Text4 = tmp10(5866).Text;
  intl6 = tmp10(1113).intl;
  items1[8] = closure_11(Text4, obj12);
  const obj13 = { channels: guildTemplate.serializedSourceGuild.channels };
  items1[9] = closure_11(Channels, obj13);
  const obj14 = { style: tmp.sectionTip, variant: "body-xs/medium", color: "interactive-text-default", children: items3 };
  const Text5 = tmp10(5866).Text;
  const obj15 = { style: tmp.protip, children: items2 };
  const LegacyText = tmp10(1187).LegacyText;
  const intl7 = tmp10(1113).intl;
  items2 = [intl7.string(guildTemplate(1113).t["8tvIiN"]), ": "];
  items3 = [closure_12(LegacyText, obj15), ];
  const intl8 = tmp10(1113).intl;
  items3[1] = intl8.string(guildTemplate(1113).t.de7DpI);
  items1[10] = closure_12(Text5, obj14);
  let tmp7Result = null;
  if (found.length > 0) {
    const obj16 = { children: items4 };
    const obj17 = { style: tmp.sectionHeader, variant: "heading-sm/semibold", color: "mobile-text-heading-primary", children: intl9.string(guildTemplate(1113).t.mQ0H1p) };
    const Text6 = tmp10(5866).Text;
    intl9 = tmp10(1113).intl;
    items4 = [closure_11(Text6, obj17), , ];
    const obj18 = { variant: "body-xs/medium", color: "text-default", children: intl10.string(guildTemplate(1113).t.jOPEYC) };
    const Text7 = tmp10(5866).Text;
    intl10 = tmp10(1113).intl;
    items4[1] = closure_11(Text7, obj18);
    const obj19 = { roles: found };
    items4[2] = closure_11(Roles, obj19);
    tmp7Result = tmp7(closure_13, obj16);
  }
  items1[11] = tmp7Result;
  return closure_12(tmp8, obj);
}
function Channels(channels) {
  let items;
  channels = channels.channels;
  let tmp = closure_14();
  let closure_0 = tmp;
  let obj = _modDef12(channels);
  const sortByResult = obj.sortBy((parent_id) => {
    let result;
    if (null == parent_id.parent_id) {
      const _Number2 = Number;
      result = 10000 * Number(parent_id.id);
    } else {
      const _Number = Number;
      result = 10000 * Number(parent_id.parent_id) + parent_id.id;
    }
    return result;
  });
  const iter = sortByResult.map((children) => {
    let items1;
    let tmp10Result;
    const items = [closure_0.channelIcon, ];
    let channelCategoryIcon = null;
    const obj = { style: closure_0.channelRow, children: items1 };
    const Icon = native.Icon;
    const tmp = constants;
    const tmp3 = authStore2;
    const tmp4 = React3;
    if (children.type === constants.GUILD_CATEGORY) {
      channelCategoryIcon = tmp5.channelCategoryIcon;
    }
    items[1] = channelCategoryIcon;
    const type = children.type;
    const obj2 = { style: items, color: nativeDefault.unsafe_rawColors.PRIMARY_400, size: native.Icon.Sizes.CUSTOM, source: tmp10Result };
    if (isGuildVocalChannelType(type)) {
      tmp10Result = tmp10(7947);
    } else if (type === tmp.GUILD_CATEGORY) {
      tmp10Result = tmp10(13955);
    } else {
      tmp10Result = tmp10(13956);
    }
    items1 = [unpackModuleId(Icon, obj2), ];
    const items2 = [closure_0.channelName, ];
    let channelCategoryName = null;
    const LegacyText = tmp7(1187).LegacyText;
    if (children.type === constants.GUILD_CATEGORY) {
      channelCategoryName = tmp5.channelCategoryName;
    }
    const obj3 = { numberOfLines: 1, style: items2, children: children.name };
    items2[1] = channelCategoryName;
    items1[1] = unpackModuleId(LegacyText, obj3);
    return tmp3(tmp4, obj, children.id);
  });
  let obj2 = { style: items, children: iter.value() };
  items = [, ];
  ({ rolesChannelsWrapper: arr2[0], channelsWrapper: arr2[1] } = tmp);
  return closure_11(closure_4, obj2);
}
function Roles(roles) {
  let items;
  roles = roles.roles;
  let tmp = closure_14();
  const substr = roles.slice();
  const reversed = substr.reverse();
  let obj = {
    style: items,
    children: reversed.map((role) => {
      let int2hexResult;
      const obj = { disableInteraction: true, role, color: int2hexResult };
      int2hexResult = undefined;
      const tmp = closure_1_11;
      const tmp2 = dependencyMap;
      const tmp3 = RolePillDefault;
      if (0 !== role.color) {
        const obj2 = require("utils/ColorUtils");
        int2hexResult = obj2.int2hex(role.color);
      }
      return tmp(tmp3, obj, role.id);
    })
  };
  items = [, ];
  ({ rolesChannelsWrapper: arr3[0], rolesWrapper: arr3[1] } = tmp);
  return unpackModuleId(React3, obj);
}
({ View: closure_4, ScrollView: hasOwnProperty } = react_native);
const isGuildVocalChannelType = ChannelRecord.isGuildVocalChannelType;
const isEveryoneRole = GuildRoleRecord.isEveryoneRole;
({ MarketingURLs: metroImportAll, Fonts, ChannelTypes: c9 } = Constants);
const GuildTemplateStates = GuildTemplatesConstants.GuildTemplateStates;
({ jsx: unpackModuleId, jsxs: closure_12, Fragment: map1 } = Fragment);
let createStyles = createStyles_mod;
let obj = { wrapper: obj2, header: obj3, description: { textAlign: "center", marginTop: 8, marginBottom: 32 }, iconUploader: { alignSelf: "center", marginBottom: 12 }, hint: { marginVertical: 8 }, createButtonWrapper: { marginTop: 8 }, resolvingContainer: { alignItems: "center", flex: 1, justifyContent: "center" }, divider: { marginTop: 8 }, sectionHeader: obj4, rolesChannelsWrapper: obj5, channelsWrapper: { flexDirection: "column", paddingVertical: 0 }, rolesWrapper: { flexDirection: "row", flexWrap: "wrap" }, channelRow: { alignItems: "center", flexDirection: "row", height: 40 }, channelIcon: { marginLeft: 12, marginRight: 8, height: 20, width: 20 }, channelCategoryIcon: { marginLeft: 0, marginRight: 2, height: 12, width: 12 }, channelName: obj6, channelCategoryName: obj7, sectionTip: { marginTop: 8 }, protip: obj8 };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, padding: 16 };
createStyles = createStyles.createStyles;
obj3 = { textAlign: "center" };
let TextStyles = TextStyles_mod;
let merged = Object.assign(TextStyles(Fonts.DISPLAY_EXTRABOLD, nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, 24));
obj4 = { marginTop: 24 };
TextStyles = TextStyles_mod;
let merged1 = Object.assign(TextStyles(Fonts.DISPLAY_EXTRABOLD, nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, 16));
obj5 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.sm, marginTop: 8, padding: 8 };
obj6 = { color: nativeDefault.colors.CHANNELS_DEFAULT, fontSize: 16, flex: 1 };
obj7 = {};
let merged2 = Object.assign(TextStyles(Fonts.DISPLAY_EXTRABOLD, undefined, 12, { uppercase: true }));
obj8 = { color: nativeDefault.unsafe_rawColors.GREEN_360, fontFamily: Fonts.PRIMARY_BOLD };
let closure_14 = createStyles(obj);
let closure_16 = react.memo(function GuildTemplateExpired() {
  let intl;
  let intl2;
  const obj = { Illustration: InvalidLink.InvalidLink, title: intl.string(intl11.t.C7ZRNw), body: intl2.string(intl11.t.A6MwXE) };
  const EmptyState = native.EmptyState;
  intl = intl11.intl;
  intl2 = intl11.intl;
  return unpackModuleId(EmptyState, obj);
});
let result = size.fileFinishedImporting("modules/create_guild/native/AcceptGuildTemplate.tsx");

export default function AcceptGuildTemplate(guildTemplate) {
  guildTemplate = guildTemplate.guildTemplate;
  if (null != guildTemplate) {
    const state = guildTemplate.state;
    if (GuildTemplateStates.RESOLVED !== state) {
      if (GuildTemplateStates.ACCEPTING !== state) {
        if (GuildTemplateStates.ACCEPTED !== state) {
          if (GuildTemplateStates.RESOLVING === state) {
            const obj2 = {};
            const merged = Object.assign(guildTemplate);
            return unpackModuleId(GuildTemplateResolving, obj2);
          } else if (GuildTemplateStates.EXPIRED === state) {
            return unpackModuleId(closure_16, {});
          }
        }
      }
    }
    const obj3 = {};
    const merged1 = Object.assign(guildTemplate);
    return unpackModuleId(GuildTemplateResolved, obj3);
  }
  const obj = {};
  const merged2 = Object.assign(guildTemplate);
  return unpackModuleId(GuildTemplateResolving, obj);
};
