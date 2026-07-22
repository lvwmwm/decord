// Module ID: 11679
// Function ID: 90619
// Name: WelcomeChannelRow
// Dependencies: []
// Exports: default

// Module 11679 (WelcomeChannelRow)
let Fonts;
class WelcomeChannelRow {
  constructor(arg0) {
    welcomeChannel = global.welcomeChannel;
    arg1 = welcomeChannel;
    trackOptionSelect = global.trackOptionSelect;
    importDefault = trackOptionSelect;
    tmp = jsx();
    obj = arg1(dependencyMap[15]);
    items = [];
    items[0] = closure_7;
    stateFromStores = obj.useStateFromStores(items, () => channel.getChannel(welcomeChannel.channel_id));
    dependencyMap = stateFromStores;
    tmp3 = importDefault(dependencyMap[16])(stateFromStores, true);
    obj2 = arg1(dependencyMap[15]);
    items1 = [];
    items1[0] = closure_9;
    stateFromStores1 = obj2.useStateFromStores(items1, () => {
      let canResult = null != stateFromStores;
      if (canResult) {
        canResult = closure_9.can(constants.VIEW_CHANNEL, stateFromStores);
      }
      return canResult;
    });
    obj3 = arg1(dependencyMap[15]);
    items2 = [];
    items2[0] = closure_6;
    items3 = [];
    items3[0] = welcomeChannel.emoji_id;
    stateFromStores2 = obj3.useStateFromStores(items2, () => {
      let customEmojiById = null;
      if (null != welcomeChannel.emoji_id) {
        customEmojiById = customEmojiById.getCustomEmojiById(welcomeChannel.emoji_id);
      }
      return customEmojiById;
    }, items3);
    items4 = [, ];
    items4[0] = stateFromStores;
    items4[1] = trackOptionSelect;
    tmp25Result = null;
    if (null != stateFromStores) {
      tmp25Result = null;
      if (stateFromStores1) {
        if (null != stateFromStores2) {
          tmp20 = jsx;
          tmp21 = importDefault;
          tmp22 = dependencyMap;
          num5 = 19;
          obj = {};
          obj.style = tmp.emoji;
          obj1 = {};
          num6 = 20;
          tmp23 = importDefault(dependencyMap[19]);
          obj11 = importDefault(dependencyMap[20]);
          obj2 = {};
          ({ id: obj12.id, animated: obj12.animated } = stateFromStores2);
          tmp24 = EMOJI_URL_BASE_SIZE;
          obj2.size = EMOJI_URL_BASE_SIZE;
          obj1.uri = obj11.getEmojiURL(obj2);
          obj.source = obj1;
          str2 = "contain";
          obj.resizeMode = "contain";
          tmp16 = jsx(tmp23, obj);
        } else {
          if (null != welcomeChannel.emoji_name) {
            tmp8 = importDefault;
            tmp9 = dependencyMap;
            num = 21;
            obj4 = importDefault(dependencyMap[21]);
            obj5 = importDefault(dependencyMap[21]);
            flag = false;
            if (null != obj4.getByName(obj5.convertSurrogateToName(welcomeChannel.emoji_name, false))) {
              tmp17 = jsx;
              tmp18 = arg1;
              tmp19 = dependencyMap;
              num4 = 22;
              obj3 = {};
              obj3.style = tmp.emoji;
              str = "text-sm/medium";
              obj3.variant = "text-sm/medium";
              obj3.children = welcomeChannel.emoji_name;
              tmp16 = jsx(arg1(dependencyMap[22]).Text, obj3);
            }
          }
          tmp10 = jsx;
          tmp11 = View;
          obj4 = {};
          obj4.style = tmp.placeholderEmojiWrapper;
          tmp12 = jsx;
          tmp13 = arg1;
          tmp14 = dependencyMap;
          num2 = 23;
          obj5 = {};
          obj5.size = arg1(dependencyMap[23]).Icon.Sizes.REFRESH_SMALL_16;
          tmp15 = importDefault;
          num3 = 24;
          obj5.source = importDefault(dependencyMap[24]);
          obj4.children = jsx(arg1(dependencyMap[23]).Icon, obj5);
          tmp16 = jsx(View, obj4);
        }
        tmp26 = arg1;
        tmp27 = dependencyMap;
        num7 = 25;
        tmp25 = jsx;
        obj6 = {};
        obj6.DEPRECATED_style = tmp.welcomeChannel;
        obj6.leading = tmp16;
        tmp28 = jsx;
        num8 = 22;
        obj7 = { cachedAt: null, edpbxy: null };
        obj7.children = welcomeChannel.description;
        obj6.label = jsx(arg1(dependencyMap[22]).Text, obj7);
        tmp29 = null;
        if (null != stateFromStores) {
          tmp30 = jsx;
          tmp31 = arg1;
          tmp32 = dependencyMap;
          obj8 = {};
          obj8.children = tmp3;
          tmp29 = jsx(arg1(dependencyMap[22]).Text, obj8);
        }
        obj6.subLabel = tmp29;
        obj6.onPress = tmp6;
        tmp33 = jsx;
        tmp34 = arg1;
        tmp35 = dependencyMap;
        obj6.trailing = jsx(arg1(dependencyMap[25]).FormRow.Arrow, {});
        tmp25Result = tmp25(arg1(dependencyMap[25]).FormRow, obj6);
      }
    }
    return tmp25Result;
  }
}
let closure_3 = importAll(dependencyMap[0]);
({ View: closure_4, ScrollView: closure_5 } = arg1(dependencyMap[1]));
let closure_6 = importDefault(dependencyMap[2]);
let closure_7 = importDefault(dependencyMap[3]);
let closure_8 = importDefault(dependencyMap[4]);
let closure_9 = importDefault(dependencyMap[5]);
let closure_10 = importDefault(dependencyMap[6]);
const NO_WELCOME_SCREEN = arg1(dependencyMap[6]).NO_WELCOME_SCREEN;
const WELCOME_SCREEN_TYPE = arg1(dependencyMap[7]).WELCOME_SCREEN_TYPE;
const tmp2 = arg1(dependencyMap[1]);
({ AnalyticEvents: closure_13, Fonts, Routes: closure_14 } = arg1(dependencyMap[8]));
const EMOJI_URL_BASE_SIZE = arg1(dependencyMap[9]).EMOJI_URL_BASE_SIZE;
const Permissions = arg1(dependencyMap[10]).Permissions;
const tmp3 = arg1(dependencyMap[8]);
({ jsx: closure_17, jsxs: closure_18 } = arg1(dependencyMap[11]));
let obj = arg1(dependencyMap[12]);
obj = {};
obj = { backgroundColor: importDefault(dependencyMap[13]).colors.BACKGROUND_BASE_LOW };
obj.container = obj;
const tmp4 = arg1(dependencyMap[11]);
obj.guildIcon = { borderRadius: importDefault(dependencyMap[13]).radii.sm };
const obj2 = {};
const obj1 = { borderRadius: importDefault(dependencyMap[13]).radii.sm };
const merged = Object.assign(importDefault(dependencyMap[14])(Fonts.DISPLAY_EXTRABOLD, importDefault(dependencyMap[13]).colors.TEXT_SUBTLE, 24));
obj2["marginBottom"] = 8;
obj2["textAlign"] = "center";
obj.header = obj2;
const importDefaultResult = importDefault(dependencyMap[14]);
const obj3 = {};
const merged1 = Object.assign(importDefault(dependencyMap[14])(Fonts.DISPLAY_EXTRABOLD, importDefault(dependencyMap[13]).colors.MOBILE_TEXT_HEADING_PRIMARY, 24));
obj.headerGuildName = obj3;
obj.guildDescription = {};
const importDefaultResult1 = importDefault(dependencyMap[14]);
obj.welcomeChannel = { backgroundColor: importDefault(dependencyMap[13]).colors.BACKGROUND_SURFACE_HIGH, marginTop: 8, borderRadius: importDefault(dependencyMap[13]).radii.sm };
obj.channelsTitle = { alignSelf: "flex-start" };
obj.emoji = {};
const obj4 = { backgroundColor: importDefault(dependencyMap[13]).colors.BACKGROUND_SURFACE_HIGH, marginTop: 8, borderRadius: importDefault(dependencyMap[13]).radii.sm };
obj.placeholderEmojiWrapper = { padding: 4, backgroundColor: importDefault(dependencyMap[13]).colors.BACKGROUND_BASE_LOWEST, borderRadius: importDefault(dependencyMap[13]).radii.xs };
let closure_19 = obj.createStyles(obj);
const obj5 = { padding: 4, backgroundColor: importDefault(dependencyMap[13]).colors.BACKGROUND_BASE_LOWEST, borderRadius: importDefault(dependencyMap[13]).radii.xs };
const result = arg1(dependencyMap[32]).fileFinishedImporting("modules/welcome_screen/native/GuildWelcomeActionSheet.tsx");

export default function GuildWelcomeActionSheet(guildId) {
  guildId = guildId.guildId;
  const arg1 = guildId;
  const onHide = guildId.onHide;
  const importDefault = onHide;
  const tmp = callback3();
  const dependencyMap = tmp;
  let obj = arg1(dependencyMap[15]);
  const items = [closure_8];
  const stateFromStores = obj.useStateFromStores(items, () => guild.getGuild(guildId));
  let obj1 = arg1(dependencyMap[15]);
  const items1 = [closure_10];
  const stateFromStoresObject = obj1.useStateFromStoresObject(items1, () => ({ welcomeScreen: closure_10.get(guildId), fetching: closure_10.isFetching(), hasError: closure_10.hasError() }));
  const welcomeScreen = stateFromStoresObject.welcomeScreen;
  const React = welcomeScreen;
  const fetching = stateFromStoresObject.fetching;
  const hasError = stateFromStoresObject.hasError;
  const items2 = [guildId, welcomeScreen];
  const effect = React.useEffect(() => {
    if (null == welcomeScreen) {
      onHide(onHide[26]).wait(() => callback(closure_2[27]).fetchWelcomeScreen(callback));
      const obj = onHide(onHide[26]);
    }
  }, items2);
  const items3 = [fetching, hasError];
  const effect1 = React.useEffect(() => {
    let tmp = false === fetching;
    if (tmp) {
      tmp = true === hasError;
    }
    if (tmp) {
      onHide(tmp[18]).hideActionSheet();
      const obj = onHide(tmp[18]);
    }
  }, items3);
  const items4 = [guildId, welcomeScreen];
  const effect2 = React.useEffect(() => {
    if (null != welcomeScreen) {
      onHide(onHide[26]).wait(() => callback(closure_2[27]).welcomeScreenViewed(callback));
      const obj = onHide(onHide[26]);
    }
  }, items4);
  const items5 = [welcomeScreen];
  const effect3 = React.useEffect(() => {
    if (welcomeScreen === closure_11) {
      onHide(onHide[18]).hideActionSheet();
      const obj = onHide(onHide[18]);
    }
  }, items5);
  const items6 = [guildId];
  const effect4 = React.useEffect(() => {
    let obj = onHide(tmp[28]);
    obj = { type: closure_12, guild_id: guildId };
    obj.track(constants.OPEN_MODAL, obj);
  }, items6);
  const items7 = [onHide];
  const effect5 = React.useEffect(() => () => {
    if (null != callback) {
      callback();
    }
  }, items7);
  const items8 = [guildId, welcomeScreen];
  let closure_6 = React.useCallback((index) => {
    if (null != welcomeScreen) {
      const items = [];
      const guildId = items;
      const items1 = [];
      const onHide = items1;
      let closure_2 = false;
      const welcome_channels = welcomeScreen.welcome_channels;
      const item = welcome_channels.forEach((description) => {
        items.push(description.description);
        items1.push(description.channel_id);
        if (null != description.emoji_id) {
          let closure_2 = true;
        }
      });
      let obj = onHide(closure_2[28]);
      obj = { index, guild_id: guildId, options: items, options_channel_ids: items1, guild_description: welcomeScreen.description, has_custom_emojis: closure_2 };
      obj.track(constants.GUILD_WELCOME_SCREEN_OPTION_SELECTED, obj);
    }
  }, items8);
  let tmp10 = null;
  if (null != stateFromStores) {
    tmp10 = null;
    if (null != welcomeScreen) {
      obj = { startExpanded: true };
      obj = { contentContainerStyle: tmp.container };
      obj1 = { style: tmp.guildIcon, guild: stateFromStores, size: importDefault(dependencyMap[30]).Sizes.MEDIUM, textScale: 2 };
      const items9 = [callback(importDefault(dependencyMap[30]), obj1), , , , ];
      const obj2 = { "Null": null, "Null": null, alignItems: null, style: tmp.header };
      const intl = arg1(dependencyMap[31]).intl;
      const obj3 = {
        guildName: stateFromStores.name,
        guildNameHook(children) {
              return callback(guildId(tmp[22]).Text, { style: tmp.headerGuildName, children }, arg1);
            }
      };
      obj2.children = intl.format(arg1(dependencyMap[31]).t.0aydCN, obj3);
      items9[1] = callback(arg1(dependencyMap[22]).Text, obj2);
      const obj4 = { style: tmp.guildDescription, children: welcomeScreen.description };
      items9[2] = callback(arg1(dependencyMap[22]).Text, obj4);
      const obj5 = { "Null": "guild", "Null": "2026-05_voice_channel_list_invite_embed", alignItems: "Voice Channel List Invite Embed", style: tmp.channelsTitle };
      const intl2 = arg1(dependencyMap[31]).intl;
      const tmp18 = importDefault(dependencyMap[30]);
      obj5.children = intl2.string(arg1(dependencyMap[31]).t.haj5+i).toUpperCase();
      items9[3] = callback(arg1(dependencyMap[22]).Text, obj5);
      const welcome_channels = welcomeScreen.welcome_channels;
      items9[4] = welcome_channels.map((welcomeChannel) => {
        const guildId = arg1;
        return callback(closure_20, {
          welcomeChannel,
          trackOptionSelect(arg0) {
            return callback(arg1);
          }
        }, arg1);
      });
      obj.children = items9;
      obj.children = callback2(hasError, obj);
      tmp10 = callback(arg1(dependencyMap[29]).ActionSheet, obj);
      const str = intl2.string(arg1(dependencyMap[31]).t.haj5+i);
    }
  }
  return tmp10;
};
export { WelcomeChannelRow };
