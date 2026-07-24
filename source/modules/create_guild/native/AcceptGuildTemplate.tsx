// Module ID: 10974
// Function ID: 85306
// Name: GuildTemplateResolving
// Dependencies: [31, 27, 1352, 1911, 653, 5720, 33, 4130, 689, 5052, 5584, 44, 1557, 1914, 4126, 1212, 10099, 9039, 4543, 7191, 1273, 22, 8429, 10975, 10976, 10214, 665, 2]
// Exports: default

// Module 10974 (GuildTemplateResolving)
import "result";
import get_ActivityIndicator from "set";
import { isGuildVocalChannelType } from "_callSuper";
import { isEveryoneRole } from "GuildRoleRecordTypeTag";
import ME from "ME";
import { GuildTemplateStates } from "GUILD_TEMPLATES_MEMBER_COUNT_PROMOTION_THRESHOLD";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import importDefaultResult from "createTextStyle";
import importDefaultResult1 from "createTextStyle";

let Fonts;
let closure_11;
let closure_12;
let closure_13;
let closure_4;
let closure_5;
let closure_8;
let closure_9;
let require = arg1;
function GuildTemplateResolving() {
  return callback(closure_4, { style: _createForOfIteratorHelperLoose().resolvingContainer, children: callback(require(5584) /* ActivityIndicator */.ActivityIndicator, {}) });
}
function GuildTemplateResolved(guildTemplate) {
  let chooseIcon;
  let createServer;
  let icon;
  let name;
  let setName;
  guildTemplate = guildTemplate.guildTemplate;
  const errors = guildTemplate.errors;
  ({ createServer, name, setName, icon, chooseIcon } = guildTemplate);
  const tmp = _createForOfIteratorHelperLoose();
  importDefault(44)(null != guildTemplate, "guild template cannot be null");
  importDefault(44)(guildTemplate.state !== GuildTemplateStates.RESOLVING, "guild must be resolved");
  const roles = guildTemplate.serializedSourceGuild.roles;
  const mapped = roles.map((arg0) => outer1_2(outer1_3[13]).fromServer(guildTemplate.serializedSourceGuild.id, arg0));
  const found = mapped.filter((arg0) => !outer1_7(arg0));
  let obj = { contentContainerStyle: items, keyboardShouldPersistTaps: "handled" };
  items = [tmp.wrapper, { marginBottom: importDefault(1557)().bottom }];
  obj = { style: tmp.header, variant: "heading-xl/extrabold", color: "mobile-text-heading-primary" };
  const intl = guildTemplate(1212).intl;
  obj.children = intl.string(guildTemplate(1212).t.QzUORX);
  const items1 = [callback(guildTemplate(4126).Text, obj), , , , , , , , , , ];
  obj = { style: tmp.description, variant: "text-lg/medium", color: "text-default", children: guildTemplate.name };
  items1[1] = callback(guildTemplate(4126).Text, obj);
  items1[2] = callback(importDefault(10099), { iconBackgroundColor: tmp.wrapper.backgroundColor, style: tmp.iconUploader, onPress: chooseIcon, icon });
  const obj2 = {};
  const intl2 = guildTemplate(1212).intl;
  obj2.label = intl2.string(guildTemplate(1212).t.dBih7e);
  name = undefined;
  if (null != errors) {
    name = errors.name;
  }
  obj2.error = name;
  const intl3 = guildTemplate(1212).intl;
  obj2.hint = intl3.format(guildTemplate(1212).t["2bprXx"], { guidelinesURL: constants.GUIDELINES });
  obj2.value = name;
  obj2.onChangeText = setName;
  obj2.autoFocus = true;
  obj2.autoCorrect = false;
  obj2.returnKeyType = "done";
  items1[3] = callback(importDefault(9039), obj2);
  const obj4 = { style: tmp.createButtonWrapper };
  const obj5 = { size: "md" };
  const intl4 = guildTemplate(1212).intl;
  obj5.text = intl4.string(guildTemplate(1212).t["O0p/lS"]);
  obj5.onPress = createServer;
  obj5.loading = guildTemplate.state === GuildTemplateStates.ACCEPTING;
  obj5.disabled = guildTemplate.state === GuildTemplateStates.ACCEPTING;
  obj5.grow = true;
  obj4.children = callback(guildTemplate(4543).Button, obj5);
  items1[4] = callback(closure_4, obj4);
  items1[5] = callback(importDefault(7191), { style: tmp.divider, outer: true });
  const obj7 = { style: tmp.sectionHeader, variant: "heading-md/extrabold", color: "mobile-text-heading-primary" };
  const intl5 = guildTemplate(1212).intl;
  obj7.children = intl5.string(guildTemplate(1212).t.OGiMXJ);
  items1[6] = callback(guildTemplate(4126).Text, obj7);
  const obj8 = { variant: "text-xs/medium", color: "text-default" };
  const intl6 = guildTemplate(1212).intl;
  obj8.children = intl6.string(guildTemplate(1212).t.Ztwyoz);
  items1[7] = callback(guildTemplate(4126).Text, obj8);
  items1[8] = callback(Channels, { channels: guildTemplate.serializedSourceGuild.channels });
  const obj10 = { style: tmp.sectionTip, variant: "text-xs/medium", color: "interactive-text-default" };
  const obj11 = { style: tmp.protip };
  const intl7 = guildTemplate(1212).intl;
  const items2 = [intl7.string(guildTemplate(1212).t["8tvIiN"]), ": "];
  obj11.children = items2;
  const items3 = [callback2(guildTemplate(1273).LegacyText, obj11), ];
  const intl8 = guildTemplate(1212).intl;
  items3[1] = intl8.string(guildTemplate(1212).t.de7DpI);
  obj10.children = items3;
  items1[9] = callback2(guildTemplate(4126).Text, obj10);
  let tmp9 = null;
  if (found.length > 0) {
    const obj12 = {};
    const obj13 = { style: tmp.sectionHeader, variant: "heading-md/extrabold", color: "mobile-text-heading-primary" };
    const intl9 = guildTemplate(1212).intl;
    obj13.children = intl9.string(guildTemplate(1212).t.mQ0H1p);
    const items4 = [callback(guildTemplate(4126).Text, obj13), , ];
    const obj14 = { variant: "text-xs/medium", color: "text-default" };
    const intl10 = guildTemplate(1212).intl;
    obj14.children = intl10.string(guildTemplate(1212).t.jOPEYC);
    items4[1] = callback(guildTemplate(4126).Text, obj14);
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
  const tmp = _createForOfIteratorHelperLoose();
  const require = tmp;
  let obj = importDefault(22)(channels.channels);
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
      const items = [type.type === outer1_9.GUILD_CATEGORY.channelIcon, ];
      let channelCategoryIcon = null;
      if (type.type === outer1_9.GUILD_CATEGORY) {
        channelCategoryIcon = tmp.channelCategoryIcon;
      }
      items[1] = channelCategoryIcon;
      obj.style = items;
      obj.color = outer1_1(outer1_3[8]).unsafe_rawColors.PRIMARY_400;
      obj.size = type.type === outer1_9.GUILD_CATEGORY(outer1_3[20]).Icon.Sizes.CUSTOM;
      obj.source = outer1_18(type);
      const items1 = [outer1_11(type.type === outer1_9.GUILD_CATEGORY(outer1_3[20]).Icon, obj), ];
      obj = { numberOfLines: 1 };
      const items2 = [type.type === outer1_9.GUILD_CATEGORY.channelName, ];
      let channelCategoryName = null;
      if (type.type === outer1_9.GUILD_CATEGORY) {
        channelCategoryName = tmp.channelCategoryName;
      }
      items2[1] = channelCategoryName;
      obj.style = items2;
      obj.children = type.name;
      items1[1] = outer1_11(type.type === outer1_9.GUILD_CATEGORY(outer1_3[20]).LegacyText, obj);
      obj.children = items1;
      return outer1_12(outer1_4, obj, type.id);
    }).value()
  };
  items = [, ];
  ({ rolesChannelsWrapper: arr2[0], channelsWrapper: arr2[1] } = tmp);
  return callback(closure_4, obj);
}
function getChannelIcon(type) {
  type = type.type;
  if (isGuildVocalChannelType(type)) {
    let tmp4 = importDefault(8429);
  } else if (type === constants2.GUILD_CATEGORY) {
    tmp4 = importDefault(10975);
  } else {
    tmp4 = importDefault(10976);
  }
  return tmp4;
}
function Roles(roles) {
  roles = roles.roles;
  const substr = roles.slice();
  const reversed = substr.reverse();
  const tmp = _createForOfIteratorHelperLoose();
  const items = [, ];
  ({ rolesChannelsWrapper: arr3[0], rolesWrapper: arr3[1] } = tmp);
  return callback(closure_4, {
    style: items,
    children: reversed.map((color) => {
      const obj = { disableInteraction: true, role: color };
      let int2hexResult;
      if (0 !== color.color) {
        int2hexResult = outer1_0(outer1_3[26]).int2hex(color.color);
        const obj2 = outer1_0(outer1_3[26]);
      }
      obj.color = int2hexResult;
      return outer1_11(outer1_1(outer1_3[25]), obj, color.id);
    })
  });
}
({ View: closure_4, ScrollView: closure_5 } = get_ActivityIndicator);
({ MarketingURLs: closure_8, Fonts, ChannelTypes: closure_9 } = ME);
({ jsx: closure_11, jsxs: closure_12, Fragment: closure_13 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOWER, padding: 16 };
_createForOfIteratorHelperLoose.wrapper = _createForOfIteratorHelperLoose;
let merged = Object.assign(require("createTextStyle")(Fonts.DISPLAY_EXTRABOLD, require("_createForOfIteratorHelperLoose").colors.MOBILE_TEXT_HEADING_PRIMARY, 24));
_createForOfIteratorHelperLoose.header = { textAlign: "center" };
_createForOfIteratorHelperLoose.description = { textAlign: "center", marginTop: 8, marginBottom: 32 };
_createForOfIteratorHelperLoose.iconUploader = { alignSelf: "center", marginBottom: 12 };
_createForOfIteratorHelperLoose.createButtonWrapper = { marginTop: 8 };
_createForOfIteratorHelperLoose.resolvingContainer = { alignItems: "center", flex: 1, justifyContent: "center" };
_createForOfIteratorHelperLoose.divider = { marginTop: 8 };
let obj2 = {};
const obj1 = { textAlign: "center" };
let merged1 = Object.assign(require("createTextStyle")(Fonts.DISPLAY_EXTRABOLD, require("_createForOfIteratorHelperLoose").colors.MOBILE_TEXT_HEADING_PRIMARY, 16));
obj2["marginTop"] = 24;
_createForOfIteratorHelperLoose.sectionHeader = obj2;
_createForOfIteratorHelperLoose.rolesChannelsWrapper = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SURFACE_HIGH, borderRadius: require("_createForOfIteratorHelperLoose").radii.sm, marginTop: 8, padding: 8 };
_createForOfIteratorHelperLoose.channelsWrapper = { flexDirection: "column", paddingVertical: 0 };
_createForOfIteratorHelperLoose.rolesWrapper = { flexDirection: "row", flexWrap: "wrap" };
_createForOfIteratorHelperLoose.channelRow = { alignItems: "center", flexDirection: "row", height: 40 };
_createForOfIteratorHelperLoose.channelIcon = { marginLeft: 12, marginRight: 8, height: 20, width: 20 };
_createForOfIteratorHelperLoose.channelCategoryIcon = { marginLeft: 0, marginRight: 2, height: 12, width: 12 };
let obj4 = { color: require("_createForOfIteratorHelperLoose").colors.CHANNELS_DEFAULT, fontSize: 16, flex: 1 };
_createForOfIteratorHelperLoose.channelName = obj4;
let merged2 = Object.assign(require("createTextStyle")(Fonts.DISPLAY_EXTRABOLD, undefined, 12, { uppercase: true }));
_createForOfIteratorHelperLoose.channelCategoryName = {};
_createForOfIteratorHelperLoose.sectionTip = { marginTop: 8 };
const obj3 = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SURFACE_HIGH, borderRadius: require("_createForOfIteratorHelperLoose").radii.sm, marginTop: 8, padding: 8 };
let obj5 = {};
const obj6 = { uppercase: true };
_createForOfIteratorHelperLoose.protip = { color: require("_createForOfIteratorHelperLoose").unsafe_rawColors.GREEN_360, fontFamily: Fonts.PRIMARY_BOLD, textTransform: "uppercase" };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj7 = { color: require("_createForOfIteratorHelperLoose").unsafe_rawColors.GREEN_360, fontFamily: Fonts.PRIMARY_BOLD, textTransform: "uppercase" };
let result = require("_callSuper").fileFinishedImporting("modules/create_guild/native/AcceptGuildTemplate.tsx");

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
