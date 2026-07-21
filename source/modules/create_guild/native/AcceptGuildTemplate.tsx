// Module ID: 10936
// Function ID: 85044
// Name: GuildTemplateResolving
// Dependencies: []
// Exports: default

// Module 10936 (GuildTemplateResolving)
let Fonts;
function GuildTemplateResolving() {
  return callback(closure_4, { style: callback3().resolvingContainer, children: callback(arg1(dependencyMap[10]).ActivityIndicator, {}) });
}
function GuildTemplateResolved(guildTemplate) {
  let chooseIcon;
  let createServer;
  let icon;
  let name;
  let setName;
  guildTemplate = guildTemplate.guildTemplate;
  const arg1 = guildTemplate;
  const errors = guildTemplate.errors;
  ({ createServer, name, setName, icon, chooseIcon } = guildTemplate);
  const tmp = callback3();
  importDefault(dependencyMap[11])(null != guildTemplate, "guild template cannot be null");
  importDefault(dependencyMap[11])(guildTemplate.state !== GuildTemplateStates.RESOLVING, "guild must be resolved");
  const roles = guildTemplate.serializedSourceGuild.roles;
  const mapped = roles.map((arg0) => callback(closure_3[13]).fromServer(guildTemplate.serializedSourceGuild.id, arg0));
  const found = mapped.filter((arg0) => !callback2(arg0));
  let obj = { contentContainerStyle: items, keyboardShouldPersistTaps: "handled" };
  const items = [tmp.wrapper, { marginBottom: importDefault(dependencyMap[12])().bottom }];
  obj = { style: tmp.header };
  const intl = arg1(dependencyMap[15]).intl;
  obj.children = intl.string(arg1(dependencyMap[15]).t.QzUORX);
  const items1 = [callback(arg1(dependencyMap[14]).Text, obj), , , , , , , , , , ];
  obj = { "Null": 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001965683182421529, "Null": 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000004778309744537072, "Null": 0.000000000000000000000000000000006550826165290012, style: tmp.description, children: guildTemplate.name };
  items1[1] = callback(arg1(dependencyMap[14]).Text, obj);
  items1[2] = callback(importDefault(dependencyMap[16]), { iconBackgroundColor: tmp.wrapper.backgroundColor, style: tmp.iconUploader, onPress: chooseIcon, icon });
  const obj2 = {};
  const intl2 = arg1(dependencyMap[15]).intl;
  obj2.label = intl2.string(arg1(dependencyMap[15]).t.dBih7e);
  name = undefined;
  if (null != errors) {
    name = errors.name;
  }
  obj2.error = name;
  const intl3 = arg1(dependencyMap[15]).intl;
  obj2.hint = intl3.format(arg1(dependencyMap[15]).t.2bprXx, { guidelinesURL: constants.GUIDELINES });
  obj2.value = name;
  obj2.onChangeText = setName;
  obj2.autoFocus = true;
  obj2.autoCorrect = false;
  obj2.returnKeyType = "done";
  items1[3] = callback(importDefault(dependencyMap[17]), obj2);
  const obj4 = { style: tmp.createButtonWrapper };
  const obj5 = { size: "md" };
  const intl4 = arg1(dependencyMap[15]).intl;
  obj5.text = intl4.string(arg1(dependencyMap[15]).t.O0p/lS);
  obj5.onPress = createServer;
  obj5.loading = guildTemplate.state === GuildTemplateStates.ACCEPTING;
  obj5.disabled = guildTemplate.state === GuildTemplateStates.ACCEPTING;
  obj5.grow = true;
  obj4.children = callback(arg1(dependencyMap[18]).Button, obj5);
  items1[4] = callback(closure_4, obj4);
  items1[5] = callback(importDefault(dependencyMap[19]), { style: tmp.divider, outer: true });
  const obj7 = { "Null": "781324642736144424", "Null": null, "Null": "Cheerful Choco preens against window", style: tmp.sectionHeader };
  const intl5 = arg1(dependencyMap[15]).intl;
  obj7.children = intl5.string(arg1(dependencyMap[15]).t.OGiMXJ);
  items1[6] = callback(arg1(dependencyMap[14]).Text, obj7);
  const obj8 = {};
  const intl6 = arg1(dependencyMap[15]).intl;
  obj8.children = intl6.string(arg1(dependencyMap[15]).t.Ztwyoz);
  items1[7] = callback(arg1(dependencyMap[14]).Text, obj8);
  items1[8] = callback(Channels, { channels: guildTemplate.serializedSourceGuild.channels });
  const obj10 = { "Null": 1, "Null": 22, "Null": "exposure_tracking", style: tmp.sectionTip };
  const obj11 = { style: tmp.protip };
  const intl7 = arg1(dependencyMap[15]).intl;
  const items2 = [intl7.string(arg1(dependencyMap[15]).t.8tvIiN), ": "];
  obj11.children = items2;
  const items3 = [callback2(arg1(dependencyMap[20]).LegacyText, obj11), ];
  const intl8 = arg1(dependencyMap[15]).intl;
  items3[1] = intl8.string(arg1(dependencyMap[15]).t.de7DpI);
  obj10.children = items3;
  items1[9] = callback2(arg1(dependencyMap[14]).Text, obj10);
  let tmp9 = null;
  if (found.length > 0) {
    const obj12 = {};
    const obj13 = { "Null": "781324642736144424", "Null": null, "Null": "Cheerful Choco preens against window", style: tmp.sectionHeader };
    const intl9 = arg1(dependencyMap[15]).intl;
    obj13.children = intl9.string(arg1(dependencyMap[15]).t.mQ0H1p);
    const items4 = [callback(arg1(dependencyMap[14]).Text, obj13), , ];
    const obj14 = {};
    const intl10 = arg1(dependencyMap[15]).intl;
    obj14.children = intl10.string(arg1(dependencyMap[15]).t.jOPEYC);
    items4[1] = callback(arg1(dependencyMap[14]).Text, obj14);
    const obj15 = { roles: found };
    items4[2] = callback(Roles, obj15);
    obj12.children = items4;
    tmp9 = callback2(closure_13, obj12);
  }
  items1[10] = tmp9;
  obj.children = items1;
  return callback2(closure_5, obj);
}
function Channels(channels) {
  const tmp = callback3();
  const arg1 = tmp;
  let obj = importDefault(dependencyMap[21])(channels.channels);
  const sortByResult = obj.sortBy((parent_id) => {
    if (null == parent_id.parent_id) {
      const _Number2 = Number;
      let result = 10000 * Number(parent_id.id);
    } else {
      const _Number = Number;
      result = 10000 * Number(parent_id.parent_id) + parent_id.id;
    }
    return result;
  });
  obj = {
    style: items,
    children: obj.sortBy((parent_id) => {
      if (null == parent_id.parent_id) {
        const _Number2 = Number;
        let result = 10000 * Number(parent_id.id);
      } else {
        const _Number = Number;
        result = 10000 * Number(parent_id.parent_id) + parent_id.id;
      }
      return result;
    }).map((type) => {
      let obj = { style: tmp.channelRow };
      obj = {};
      const items = [type.type === constants.GUILD_CATEGORY.channelIcon, ];
      let channelCategoryIcon = null;
      if (type.type === constants.GUILD_CATEGORY) {
        channelCategoryIcon = tmp.channelCategoryIcon;
      }
      items[1] = channelCategoryIcon;
      obj.style = items;
      obj.color = callback(closure_3[8]).unsafe_rawColors.PRIMARY_400;
      obj.size = type.type === constants.GUILD_CATEGORY(closure_3[20]).Icon.Sizes.CUSTOM;
      obj.source = callback2(type);
      const items1 = [closure_11(type.type === constants.GUILD_CATEGORY(closure_3[20]).Icon, obj), ];
      obj = { numberOfLines: 1 };
      const items2 = [type.type === constants.GUILD_CATEGORY.channelName, ];
      let channelCategoryName = null;
      if (type.type === constants.GUILD_CATEGORY) {
        channelCategoryName = tmp.channelCategoryName;
      }
      items2[1] = channelCategoryName;
      obj.style = items2;
      obj.children = type.name;
      items1[1] = closure_11(type.type === constants.GUILD_CATEGORY(closure_3[20]).LegacyText, obj);
      obj.children = items1;
      return closure_12(closure_4, obj, type.id);
    }).value()
  };
  const items = [, ];
  ({ rolesChannelsWrapper: arr2[0], channelsWrapper: arr2[1] } = tmp);
  return callback(closure_4, obj);
}
function getChannelIcon(type) {
  type = type.type;
  if (isGuildVocalChannelType(type)) {
    let tmp4 = importDefault(dependencyMap[22]);
  } else if (type === constants2.GUILD_CATEGORY) {
    tmp4 = importDefault(dependencyMap[23]);
  } else {
    tmp4 = importDefault(dependencyMap[24]);
  }
  return tmp4;
}
function Roles(roles) {
  roles = roles.roles;
  const substr = roles.slice();
  const reversed = substr.reverse();
  const tmp = callback3();
  const items = [, ];
  ({ rolesChannelsWrapper: arr3[0], rolesWrapper: arr3[1] } = tmp);
  return callback(closure_4, {
    style: items,
    children: reversed.map((color) => {
      const obj = { disableInteraction: true, role: color };
      let int2hexResult;
      if (0 !== color.color) {
        int2hexResult = callback(closure_3[26]).int2hex(color.color);
        const obj2 = callback(closure_3[26]);
      }
      obj.color = int2hexResult;
      return closure_11(callback2(closure_3[25]), obj, color.id);
    })
  });
}
importAll(dependencyMap[0]);
({ View: closure_4, ScrollView: closure_5 } = arg1(dependencyMap[1]));
const isGuildVocalChannelType = arg1(dependencyMap[2]).isGuildVocalChannelType;
const isEveryoneRole = arg1(dependencyMap[3]).isEveryoneRole;
const tmp3 = arg1(dependencyMap[1]);
({ MarketingURLs: closure_8, Fonts, ChannelTypes: closure_9 } = arg1(dependencyMap[4]));
const GuildTemplateStates = arg1(dependencyMap[5]).GuildTemplateStates;
const tmp4 = arg1(dependencyMap[4]);
({ jsx: closure_11, jsxs: closure_12, Fragment: closure_13 } = arg1(dependencyMap[6]));
let obj = arg1(dependencyMap[7]);
obj = {};
obj = { backgroundColor: importDefault(dependencyMap[8]).colors.BACKGROUND_BASE_LOWER, padding: 16 };
obj.wrapper = obj;
const obj1 = { textAlign: "center" };
const tmp5 = arg1(dependencyMap[6]);
const merged = Object.assign(importDefault(dependencyMap[9])(Fonts.DISPLAY_EXTRABOLD, importDefault(dependencyMap[8]).colors.MOBILE_TEXT_HEADING_PRIMARY, 24));
obj.header = obj1;
obj.description = {};
obj.iconUploader = { "Bool(false)": "isArrayBufferToString", "Bool(false)": "%AsyncGenerator%" };
obj.createButtonWrapper = { marginTop: 8 };
obj.resolvingContainer = {};
obj.divider = { marginTop: 8 };
const obj2 = {};
const importDefaultResult = importDefault(dependencyMap[9]);
const merged1 = Object.assign(importDefault(dependencyMap[9])(Fonts.DISPLAY_EXTRABOLD, importDefault(dependencyMap[8]).colors.MOBILE_TEXT_HEADING_PRIMARY, 16));
obj2["marginTop"] = 24;
obj.sectionHeader = obj2;
const importDefaultResult1 = importDefault(dependencyMap[9]);
obj.rolesChannelsWrapper = { backgroundColor: importDefault(dependencyMap[8]).colors.BACKGROUND_SURFACE_HIGH, borderRadius: importDefault(dependencyMap[8]).radii.sm, marginTop: 8, padding: 8 };
obj.channelsWrapper = {};
obj.rolesWrapper = { 1925026477: null, -1346530010: null };
obj.channelRow = { "Bool(false)": 44, "Bool(false)": 1166889217, "Bool(false)": 44579137 };
obj.channelIcon = { "Null": true, "Null": true, "Null": true, "Null": true };
obj.channelCategoryIcon = {};
const obj4 = { width: "message", height: "row", marginRight: 16, color: importDefault(dependencyMap[8]).colors.CHANNELS_DEFAULT };
obj.channelName = obj4;
const merged2 = Object.assign(importDefault(dependencyMap[9])(Fonts.DISPLAY_EXTRABOLD, undefined, 12, { uppercase: true }));
obj.channelCategoryName = {};
obj.sectionTip = { marginTop: 8 };
const obj3 = { backgroundColor: importDefault(dependencyMap[8]).colors.BACKGROUND_SURFACE_HIGH, borderRadius: importDefault(dependencyMap[8]).radii.sm, marginTop: 8, padding: 8 };
const obj5 = {};
const obj6 = { uppercase: true };
obj.protip = { color: importDefault(dependencyMap[8]).unsafe_rawColors.GREEN_360, fontFamily: Fonts.PRIMARY_BOLD, textTransform: "uppercase" };
let closure_14 = obj.createStyles(obj);
const obj7 = { color: importDefault(dependencyMap[8]).unsafe_rawColors.GREEN_360, fontFamily: Fonts.PRIMARY_BOLD, textTransform: "uppercase" };
const result = arg1(dependencyMap[27]).fileFinishedImporting("modules/create_guild/native/AcceptGuildTemplate.tsx");

export default function AcceptGuildTemplate(guildTemplate) {
  guildTemplate = guildTemplate.guildTemplate;
  if (null != guildTemplate) {
    const state = guildTemplate.state;
    if (GuildTemplateStates.RESOLVED !== state) {
      if (GuildTemplateStates.ACCEPTING !== state) {
        if (GuildTemplateStates.ACCEPTED !== state) {
          if (GuildTemplateStates.RESOLVING === state) {
            let obj = {};
            const merged = Object.assign(guildTemplate);
            return callback(GuildTemplateResolving, obj);
          }
        }
      }
    }
    obj = {};
    const merged1 = Object.assign(guildTemplate);
    return callback(GuildTemplateResolved, obj);
  }
  obj = {};
  const merged2 = Object.assign(guildTemplate);
  return callback(GuildTemplateResolving, obj);
};
