// Module ID: 15400
// Function ID: 117487
// Name: _isNativeReflectConstruct
// Dependencies: []
// Exports: default

// Module 15400 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function WebhookItem(avatar) {
  let user;
  let webhookId;
  avatar = avatar.avatar;
  const arg1 = avatar;
  const channel = avatar.channel;
  const importDefault = channel;
  const guildId = avatar.guildId;
  const dependencyMap = guildId;
  const name = avatar.name;
  let closure_3 = name;
  const token = avatar.token;
  let closure_4 = token;
  ({ user, webhookId } = avatar);
  let closure_5 = webhookId;
  const webhookType = avatar.webhookType;
  let closure_6 = webhookType;
  let obj = arg1(dependencyMap[18]);
  const navigation = obj.useNavigation();
  let closure_7 = navigation;
  const items = [webhookId, webhookType, avatar, channel, guildId, name, token, navigation];
  const items1 = [webhookId, avatar];
  const callback = importAllResult.useCallback(() => {
    navigation.push(constants.EDIT_WEBHOOK, { webhookId, webhookType, avatar, name, channel, guildId, token });
  }, items);
  const memo = importAllResult.useMemo(() => {
    let obj = avatar(guildId[19]);
    obj = { id: webhookId, avatar, discriminator: closure_20 };
    return obj.makeSource(avatar(guildId[19]).getUserAvatarURL(obj));
  }, items1);
  obj = { icon: callback4(arg1(dependencyMap[21]).Avatar, { source: memo }), arrow: true, label: name };
  if (null != user) {
    const intl2 = arg1(dependencyMap[22]).intl;
    obj = { timestamp: importDefault(dependencyMap[23]).extractTimestamp(webhookId) };
    const obj6 = importDefault(dependencyMap[23]);
    obj.user = importDefault(dependencyMap[24]).getUserTag(user);
    let formatToPlainStringResult = intl2.formatToPlainString(arg1(dependencyMap[22]).t.7EcUbr, obj);
    const obj7 = importDefault(dependencyMap[24]);
  } else {
    const intl = arg1(dependencyMap[22]).intl;
    const obj1 = { timestamp: importDefault(dependencyMap[23]).extractTimestamp(webhookId) };
    formatToPlainStringResult = intl.formatToPlainString(arg1(dependencyMap[22]).t.7mv59O, obj1);
    const obj4 = importDefault(dependencyMap[23]);
  }
  obj.subLabel = formatToPlainStringResult;
  obj.onPress = callback;
  return callback4(arg1(dependencyMap[20]).TableRow, obj);
}
function ConnectedWebhookItem(arg0) {
  ({ channelId: closure_0, user: closure_1 } = arg0);
  let obj = Object.create(null);
  obj.channelId = 0;
  obj.user = 0;
  const merged = Object.assign(arg0, obj);
  obj = arg1(dependencyMap[25]);
  const items = [closure_16];
  const stateFromStores = obj.useStateFromStores(items, () => {
    let id;
    if (null != id) {
      id = id.id;
    }
    return user.getUser(id);
  });
  const items1 = [closure_10];
  obj = {};
  const stateFromStores1 = arg1(dependencyMap[25]).useStateFromStores(items1, () => channel.getChannel(closure_0));
  const merged1 = Object.assign(merged);
  obj["user"] = stateFromStores;
  obj["channel"] = stateFromStores1;
  return callback4(WebhookItem, obj);
}
function CreateWebhookButton(guild) {
  guild = guild.guild;
  const arg1 = guild;
  const importDefault = guild.channel;
  let obj = arg1(dependencyMap[18]);
  const navigation = obj.useNavigation();
  const dependencyMap = navigation;
  const items = [closure_13, closure_15];
  const stateFromStores = arg1(dependencyMap[25]).useStateFromStores(items, () => {
    if (null != channel) {
      return channel;
    } else {
      const channels = channels.getChannels(guild.id);
      const items = [];
      HermesBuiltin.arraySpread(channels[closure_12], HermesBuiltin.arraySpread(channels[closure_11], 0));
      const found = items.find((channel) => closure_15.can(constants.MANAGE_WEBHOOKS, channel.channel));
      let channel;
      if (null != found) {
        channel = found.channel;
      }
      return channel;
    }
  });
  let closure_3 = stateFromStores;
  // CreateGeneratorClosureLongIndex (0x67)
  const items1 = [stateFromStores, guild.id, navigation];
  const callback = importAllResult.useCallback(callback3(tmp), items1);
  obj = {};
  obj = { IconComponent: arg1(dependencyMap[28]).WebhookPlusIcon };
  obj.icon = callback4(arg1(dependencyMap[27]).RowButton.Icon, obj);
  const intl = arg1(dependencyMap[22]).intl;
  obj.label = intl.string(arg1(dependencyMap[22]).t.nrO/HH);
  obj.disabled = null == stateFromStores;
  obj.onPress = callback;
  return callback4(arg1(dependencyMap[27]).RowButton, obj);
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
const importAllResult = importAll(dependencyMap[6]);
const Platform = arg1(dependencyMap[7]).Platform;
let closure_10 = importDefault(dependencyMap[8]);
({ GUILD_SELECTABLE_CHANNELS_KEY: closure_11, GUILD_VOCAL_CHANNELS_KEY: closure_12 } = arg1(dependencyMap[9]));
let closure_13 = importDefault(dependencyMap[9]);
let closure_14 = importDefault(dependencyMap[10]);
let closure_15 = importDefault(dependencyMap[11]);
let closure_16 = importDefault(dependencyMap[12]);
let closure_17 = importDefault(dependencyMap[13]);
const tmp3 = arg1(dependencyMap[9]);
({ HelpdeskArticles: closure_18, ChannelSettingsSections: closure_19, NON_USER_BOT_DISCRIMINATOR: closure_20, Permissions: closure_21, WebhookTypes: closure_22 } = arg1(dependencyMap[14]));
const tmp4 = arg1(dependencyMap[14]);
({ jsx: closure_23, Fragment: closure_24, jsxs: closure_25 } = arg1(dependencyMap[15]));
let obj = arg1(dependencyMap[16]);
obj = {};
obj = { backgroundColor: importDefault(dependencyMap[17]).colors.BACKGROUND_BASE_LOWER, paddingTop: 16 };
obj.form = obj;
obj.hint = {};
const tmp5 = arg1(dependencyMap[15]);
obj.row = { padding: importDefault(dependencyMap[17]).modules.mobile.TABLE_ROW_PADDING };
let closure_26 = obj.createLegacyClassComponentStyles(obj);
const tmp6 = (PureComponent) => {
  class WebhooksOverview {
    constructor() {
      self = this;
      tmp = closure_3(this, WebhooksOverview);
      obj = closure_6(WebhooksOverview);
      tmp2 = closure_5;
      if (closure_29()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = closure_6;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, closure_6(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  const arg1 = WebhooksOverview;
  callback2(WebhooksOverview, PureComponent);
  let obj = {
    key: "getHelpText",
    value() {
      if (this.props.webhookType === constants2.CHANNEL_FOLLOWER) {
        const intl2 = WebhooksOverview(closure_2[22]).intl;
        let obj = { helpdeskArticle: callback(closure_2[29]).getArticleURL(constants.CHANNEL_FOLLOWING) };
        let formatResult = intl2.format(WebhooksOverview(closure_2[22]).t.5u+aV1, obj);
        const obj4 = callback(closure_2[29]);
      } else {
        const intl = WebhooksOverview(closure_2[22]).intl;
        obj = { articleURL: callback(closure_2[29]).getArticleURL(constants.WEBHOOKS_INTRODUCTION) };
        formatResult = intl.format(WebhooksOverview(closure_2[22]).t.3hX7G+, obj);
        const obj2 = callback(closure_2[29]);
      }
      return formatResult;
    }
  };
  const items = [obj, , ];
  obj = {
    key: "renderWebhooks",
    value() {
      let webhookType;
      let webhooks;
      const self = this;
      ({ webhooks, webhookType } = this.props);
      const WebhooksOverview = webhookType;
      let found = webhooks;
      if (null != webhookType) {
        found = webhooks.filter((type) => type.type === webhookType);
      }
      let obj = {};
      const helpText = self.getHelpText();
      obj = { hasMaxConnections: "<string:3086024708>", isBoostOnlySubscription: "<string:625475588>", children: helpText };
      const items = [callback4(WebhooksOverview(closure_2[30]).Text, obj), , ];
      let tmp4 = webhookType === constants2.INCOMING;
      if (tmp4) {
        obj = { guild: self.props.guild, channel: self.props.channel };
        tmp4 = callback4(closure_32, obj);
      }
      items[1] = tmp4;
      if (0 === found.length) {
        const obj1 = { Illustration: WebhooksOverview(closure_2[31]).WebhookEmpty };
        if (webhookType === constants2.CHANNEL_FOLLOWER) {
          const intl2 = WebhooksOverview(closure_2[22]).intl;
          let stringResult = intl2.string(WebhooksOverview(closure_2[22]).t.dkHRkE);
        } else {
          const intl = WebhooksOverview(closure_2[22]).intl;
          stringResult = intl.string(WebhooksOverview(closure_2[22]).t.4JAVI+);
        }
        obj1.title = stringResult;
        callback4(WebhooksOverview(closure_2[21]).EmptyState, obj1);
        const tmp10 = callback4;
      } else {
        const obj2 = {
          hasIcons: true,
          children: found.map((type) => {
              let avatar;
              let channel_id;
              let guild_id;
              let id;
              let name;
              let token;
              let user;
              ({ id, avatar } = type);
              const obj = { webhookId: id, webhookType: type.type };
              let tmp3;
              ({ name, user, token, guild_id, channel_id } = type);
              if (null != avatar) {
                tmp3 = avatar;
              }
              obj.avatar = tmp3;
              obj.name = name;
              obj.user = user;
              obj.channelId = channel_id;
              obj.token = token;
              obj.guildId = guild_id;
              return closure_23(closure_31, obj, id);
            })
        };
        items[2] = callback4(WebhooksOverview(closure_2[32]).TableRowGroup, obj2);
        obj.children = items;
        return closure_25(closure_24, obj);
      }
    }
  };
  items[1] = obj;
  obj = {
    key: "render",
    value() {
      const tmp = callback6(this.context);
      let obj = {};
      obj = { style: tmp.form, contentContainerStyle: this.props.contentContainerStyle };
      obj = { spacing: callback(closure_2[17]).space.PX_24, style: { paddingHorizontal: tmp.row.padding }, children: this.renderWebhooks() };
      obj.children = callback4(WebhooksOverview(closure_2[34]).Stack, obj);
      const items = [callback4(WebhooksOverview(closure_2[33]).Form, obj), callback4(WebhooksOverview(closure_2[35]).NavScrim, {})];
      obj.children = items;
      return callback5(closure_24, obj);
    }
  };
  items[2] = obj;
  return callback(WebhooksOverview, items);
}(importAllResult.PureComponent);
tmp6.contextType = arg1(dependencyMap[36]).ThemeContext;
let closure_28 = [];
const obj1 = { padding: importDefault(dependencyMap[17]).modules.mobile.TABLE_ROW_PADDING };
const result = arg1(dependencyMap[37]).fileFinishedImporting("modules/integration_settings/native/IntegrationsSettingsWebhooksOverview.tsx");

export default function ConnectedWebhooksOverview(channelId) {
  let contentContainerStyle;
  let webhookType;
  channelId = channelId.channelId;
  const arg1 = channelId;
  let guildId = channelId.guildId;
  const importDefault = guildId;
  let closure_3;
  let closure_4;
  ({ contentContainerStyle, webhookType } = channelId);
  let obj = arg1(dependencyMap[25]);
  const items = [closure_10];
  const stateFromStores = obj.useStateFromStores(items, () => channel.getChannel(channelId));
  const dependencyMap = stateFromStores;
  const items1 = [closure_14];
  const stateFromStores1 = arg1(dependencyMap[25]).useStateFromStores(items1, () => {
    let guild_id;
    if (null != stateFromStores) {
      guild_id = stateFromStores.guild_id;
    }
    if (null == guild_id) {
      guild_id = guildId;
    }
    return guild.getGuild(guild_id);
  });
  let id;
  if (null != stateFromStores1) {
    id = stateFromStores1.id;
  }
  if (null != id) {
    guildId = id;
  }
  closure_3 = guildId;
  let id1;
  if (null != stateFromStores) {
    id1 = stateFromStores.id;
  }
  if (null != id1) {
    channelId = id1;
  }
  closure_4 = channelId;
  const obj2 = arg1(dependencyMap[25]);
  const items2 = [closure_17];
  const items3 = [guildId, channelId];
  const stateFromStoresArray = arg1(dependencyMap[25]).useStateFromStoresArray(items2, () => {
    if (null != guildId) {
      if (null != channelId) {
        let webhooksForChannel = store.getWebhooksForChannel(guildId, channelId);
      }
      return webhooksForChannel;
    }
    if (null != guildId) {
      webhooksForChannel = store.getWebhooksForGuild(guildId);
    } else {
      webhooksForChannel = closure_28;
    }
  });
  const effect = importAllResult.useEffect(() => {
    if (null != guildId) {
      if (null != channelId) {
        const forChannel = guildId(stateFromStores[26]).fetchForChannel(guildId, channelId);
        const obj2 = guildId(stateFromStores[26]);
      }
    }
    if (null != guildId) {
      const forGuild = guildId(stateFromStores[26]).fetchForGuild(guildId);
      const obj = guildId(stateFromStores[26]);
    }
  }, items3);
  let tmp7 = null;
  if (null != stateFromStores1) {
    obj = { guild: stateFromStores1, channel: stateFromStores, webhooks: stateFromStoresArray, contentContainerStyle, webhookType };
    tmp7 = callback4(tmp6, obj);
  }
  return tmp7;
};
