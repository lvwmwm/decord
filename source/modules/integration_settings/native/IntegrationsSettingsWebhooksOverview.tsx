// Module ID: 15525
// Function ID: 119704
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 5, 31, 27, 1348, 1907, 1838, 3758, 1849, 15526, 653, 33, 4130, 689, 1456, 1392, 5165, 1273, 1212, 21, 3969, 566, 15527, 7498, 15528, 1920, 4126, 15530, 5503, 7495, 4541, 5448, 3842, 2]
// Exports: default

// Module 15525 (_isNativeReflectConstruct)
import result from "result";
import getActivityIndicator from "get ActivityIndicator";
import closure_5 from "jsxProd";
import closure_6 from "_createForOfIteratorHelperLoose";
import useNavigation from "useNavigation";
import asyncGeneratorStep from "asyncGeneratorStep";
import importAllResult from "getWebhookEmptySource";
import { Platform } from "RowButtonWrapper";
import closure_10 from "_isNativeReflectConstruct";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_13 from "_isNativeReflectConstruct";
import closure_14 from "_createForOfIteratorHelperLoose";
import closure_15 from "_isNativeReflectConstruct";
import closure_16 from "_isNativeReflectConstruct";
import closure_17 from "_isNativeReflectConstruct";
import ME from "ME";
import jsxProd from "Form";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_11;
let closure_12;
let closure_18;
let closure_19;
let closure_20;
let closure_21;
let closure_22;
let closure_23;
let closure_24;
let closure_25;
const require = arg1;
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
  const channel = avatar.channel;
  const guildId = avatar.guildId;
  const name = avatar.name;
  const token = avatar.token;
  ({ user, webhookId } = avatar);
  const webhookType = avatar.webhookType;
  let obj = avatar(guildId[18]);
  const navigation = obj.useNavigation();
  const items = [webhookId, webhookType, avatar, channel, guildId, name, token, navigation];
  const items1 = [webhookId, avatar];
  const callback = importAllResult.useCallback(() => {
    navigation.push(outer1_19.EDIT_WEBHOOK, { webhookId, webhookType, avatar, name, channel, guildId, token });
  }, items);
  const memo = importAllResult.useMemo(() => {
    let obj = avatar(guildId[19]);
    obj = { id: webhookId, avatar, discriminator: outer1_20 };
    return obj.makeSource(avatar(guildId[19]).getUserAvatarURL(obj));
  }, items1);
  obj = { icon: callback4(avatar(guildId[21]).Avatar, { source: memo }), arrow: true, label: name };
  if (null != user) {
    const intl2 = avatar(guildId[22]).intl;
    obj = { timestamp: channel(guildId[23]).extractTimestamp(webhookId) };
    const obj6 = channel(guildId[23]);
    obj.user = channel(guildId[24]).getUserTag(user);
    let formatToPlainStringResult = intl2.formatToPlainString(avatar(guildId[22]).t["7EcUbr"], obj);
    const obj7 = channel(guildId[24]);
  } else {
    const intl = avatar(guildId[22]).intl;
    const obj1 = { timestamp: channel(guildId[23]).extractTimestamp(webhookId) };
    formatToPlainStringResult = intl.formatToPlainString(avatar(guildId[22]).t["7mv59O"], obj1);
    const obj4 = channel(guildId[23]);
  }
  obj.subLabel = formatToPlainStringResult;
  obj.onPress = callback;
  return callback4(avatar(guildId[20]).TableRow, obj);
}
function ConnectedWebhookItem(arg0) {
  let importDefault;
  let require;
  ({ channelId: require, user: importDefault } = arg0);
  let obj = Object.create(null);
  obj.channelId = 0;
  obj.user = 0;
  const merged = Object.assign(arg0, obj);
  obj = require(566) /* initialize */;
  const items = [closure_16];
  const stateFromStores = obj.useStateFromStores(items, () => {
    let id;
    if (null != id) {
      id = id.id;
    }
    return outer1_16.getUser(id);
  });
  const items1 = [closure_10];
  obj = {};
  const stateFromStores1 = require(566) /* initialize */.useStateFromStores(items1, () => outer1_10.getChannel(closure_0));
  const merged1 = Object.assign(merged);
  obj["user"] = stateFromStores;
  obj["channel"] = stateFromStores1;
  return callback4(WebhookItem, obj);
}
function CreateWebhookButton(guild) {
  guild = guild.guild;
  let channel = guild.channel;
  let obj = guild(navigation[18]);
  navigation = obj.useNavigation();
  let items = [closure_13, closure_15];
  const stateFromStores = guild(navigation[25]).useStateFromStores(items, () => {
    if (null != channel) {
      return channel;
    } else {
      const channels = outer1_13.getChannels(guild.id);
      const items = [];
      HermesBuiltin.arraySpread(channels[outer1_12], HermesBuiltin.arraySpread(channels[outer1_11], 0));
      const found = items.find((channel) => outer2_15.can(outer2_21.MANAGE_WEBHOOKS, channel.channel));
      channel = undefined;
      if (null != found) {
        channel = found.channel;
      }
      return channel;
    }
  });
  // CreateGeneratorClosureLongIndex (0x67)
  const items1 = [stateFromStores, guild.id, navigation];
  const callback = importAllResult.useCallback(callback3(tmp), items1);
  obj = {};
  obj = { IconComponent: guild(navigation[28]).WebhookPlusIcon };
  obj.icon = callback4(guild(navigation[27]).RowButton.Icon, obj);
  const intl = guild(navigation[22]).intl;
  obj.label = intl.string(guild(navigation[22]).t["nrO/HH"]);
  obj.disabled = null == stateFromStores;
  obj.onPress = callback;
  return callback4(guild(navigation[27]).RowButton, obj);
}
({ GUILD_SELECTABLE_CHANNELS_KEY: closure_11, GUILD_VOCAL_CHANNELS_KEY: closure_12 } = _isNativeReflectConstruct);
({ HelpdeskArticles: closure_18, ChannelSettingsSections: closure_19, NON_USER_BOT_DISCRIMINATOR: closure_20, Permissions: closure_21, WebhookTypes: closure_22 } = ME);
({ jsx: closure_23, Fragment: closure_24, jsxs: closure_25 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOWER, paddingTop: 16 };
_createForOfIteratorHelperLoose.form = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.hint = { paddingHorizontal: 16, marginBottom: 16 };
_createForOfIteratorHelperLoose.row = { padding: require("_createForOfIteratorHelperLoose").modules.mobile.TABLE_ROW_PADDING };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createLegacyClassComponentStyles(_createForOfIteratorHelperLoose);
const tmp6 = ((PureComponent) => {
  class WebhooksOverview {
    constructor() {
      self = this;
      tmp = outer1_3(this, WebhooksOverview);
      obj = outer1_6(WebhooksOverview);
      tmp2 = outer1_5;
      if (outer1_29()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = outer1_6;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, outer1_6(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  callback2(WebhooksOverview, PureComponent);
  let obj = {
    key: "getHelpText",
    value() {
      if (this.props.webhookType === outer1_22.CHANNEL_FOLLOWER) {
        const intl2 = WebhooksOverview(outer1_2[22]).intl;
        let obj = { helpdeskArticle: outer1_1(outer1_2[29]).getArticleURL(outer1_18.CHANNEL_FOLLOWING) };
        let formatResult = intl2.format(WebhooksOverview(outer1_2[22]).t["5u+aV1"], obj);
        const obj4 = outer1_1(outer1_2[29]);
      } else {
        const intl = WebhooksOverview(outer1_2[22]).intl;
        obj = { articleURL: outer1_1(outer1_2[29]).getArticleURL(outer1_18.WEBHOOKS_INTRODUCTION) };
        formatResult = intl.format(WebhooksOverview(outer1_2[22]).t["3hX7G+"], obj);
        const obj2 = outer1_1(outer1_2[29]);
      }
      return formatResult;
    }
  };
  let items = [obj, , ];
  obj = {
    key: "renderWebhooks",
    value() {
      let webhookType;
      let webhooks;
      const self = this;
      ({ webhooks, webhookType } = this.props);
      let found = webhooks;
      if (null != webhookType) {
        found = webhooks.filter((type) => type.type === webhookType);
      }
      let obj = {};
      const helpText = self.getHelpText();
      obj = { variant: "text-sm/medium", color: "text-muted", children: helpText };
      const items = [outer1_23(WebhooksOverview(outer1_2[30]).Text, obj), , ];
      let tmp4 = webhookType === outer1_22.INCOMING;
      if (tmp4) {
        obj = { guild: self.props.guild, channel: self.props.channel };
        tmp4 = outer1_23(outer1_32, obj);
      }
      items[1] = tmp4;
      if (0 === found.length) {
        const obj1 = { Illustration: WebhooksOverview(outer1_2[31]).WebhookEmpty };
        if (webhookType === outer1_22.CHANNEL_FOLLOWER) {
          const intl2 = WebhooksOverview(outer1_2[22]).intl;
          let stringResult = intl2.string(WebhooksOverview(outer1_2[22]).t.dkHRkE);
        } else {
          const intl = WebhooksOverview(outer1_2[22]).intl;
          stringResult = intl.string(WebhooksOverview(outer1_2[22]).t["4JAVI+"]);
        }
        obj1.title = stringResult;
        outer1_23(WebhooksOverview(outer1_2[21]).EmptyState, obj1);
        const tmp10 = outer1_23;
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
              return outer2_23(outer2_31, obj, id);
            })
        };
        items[2] = outer1_23(WebhooksOverview(outer1_2[32]).TableRowGroup, obj2);
        obj.children = items;
        return outer1_25(outer1_24, obj);
      }
    }
  };
  items[1] = obj;
  obj = {
    key: "render",
    value() {
      const tmp = outer1_26(this.context);
      let obj = {};
      obj = { style: tmp.form, contentContainerStyle: this.props.contentContainerStyle };
      obj = { spacing: outer1_1(outer1_2[17]).space.PX_24, style: { paddingHorizontal: tmp.row.padding }, children: this.renderWebhooks() };
      obj.children = outer1_23(WebhooksOverview(outer1_2[34]).Stack, obj);
      const items = [outer1_23(WebhooksOverview(outer1_2[33]).Form, obj), outer1_23(WebhooksOverview(outer1_2[35]).NavScrim, {})];
      obj.children = items;
      return outer1_25(outer1_24, obj);
    }
  };
  items[2] = obj;
  return callback(WebhooksOverview, items);
})(importAllResult.PureComponent);
let closure_27 = tmp6;
tmp6.contextType = require("ManaContext").ThemeContext;
let closure_28 = [];
let obj1 = { padding: require("_createForOfIteratorHelperLoose").modules.mobile.TABLE_ROW_PADDING };
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/integration_settings/native/IntegrationsSettingsWebhooksOverview.tsx");

export default function ConnectedWebhooksOverview(channelId) {
  let contentContainerStyle;
  let webhookType;
  channelId = channelId.channelId;
  let guildId = channelId.guildId;
  guildId = undefined;
  channelId = undefined;
  ({ contentContainerStyle, webhookType } = channelId);
  let obj = channelId(stateFromStores[25]);
  const items = [closure_10];
  stateFromStores = obj.useStateFromStores(items, () => outer1_10.getChannel(channelId));
  const items1 = [closure_14];
  const stateFromStores1 = channelId(stateFromStores[25]).useStateFromStores(items1, () => {
    let guild_id;
    if (null != stateFromStores) {
      guild_id = stateFromStores.guild_id;
    }
    if (null == guild_id) {
      guild_id = guildId;
    }
    return outer1_14.getGuild(guild_id);
  });
  let id;
  if (null != stateFromStores1) {
    id = stateFromStores1.id;
  }
  if (null != id) {
    guildId = id;
  }
  let id1;
  if (null != stateFromStores) {
    id1 = stateFromStores.id;
  }
  if (null != id1) {
    channelId = id1;
  }
  let obj2 = channelId(stateFromStores[25]);
  const items2 = [closure_17];
  const items3 = [guildId, channelId];
  const stateFromStoresArray = channelId(stateFromStores[25]).useStateFromStoresArray(items2, () => {
    if (null != guildId) {
      if (null != channelId) {
        let webhooksForChannel = outer1_17.getWebhooksForChannel(guildId, channelId);
      }
      return webhooksForChannel;
    }
    if (null != guildId) {
      webhooksForChannel = outer1_17.getWebhooksForGuild(guildId);
    } else {
      webhooksForChannel = outer1_28;
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
    tmp7 = callback4(closure_27, obj);
  }
  return tmp7;
};
