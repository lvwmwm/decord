// Module ID: 16663
// Function ID: 16664
// Name: IntegrationsSettingsWebhooksOverview
// Dependencies: [5, 19, 2045, 4467, 2067, 4469, 1372, 16664, 1074, 21, 4836, 576, 1485, 1397, 5917, 1177, 1115, 11, 4678, 504, 16665, 8055, 16666, 4540, 2111, 4832, 16668, 5999, 8053, 5279, 6461, 2]
// Exports: default

// Module 16663 (IntegrationsSettingsWebhooksOverview)
import get_initialized from "get initialized" /* 504 */;
import nativeDefault from "native" /* 576 */;
import intl3 from "intl" /* 1115 */;
import AvatarUtils from "AvatarUtils" /* 1397 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2111 */;
import native from "native" /* 4540 */;
import Stack_Stack from "Stack/Stack" /* 5279 */;
import NavScrim from "NavScrim" /* 6461 */;
import Form2 from "Form" /* 8053 */;
import WebhooksActionCreatorsDefault from "WebhooksActionCreators" /* 16665 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import GuildChannelStore_mod from "GuildChannelStore" /* 4467 */;
import GuildStore from "GuildStore" /* 2067 */;
import PermissionStore from "PermissionStore" /* 4469 */;
import UserStore from "UserStore" /* 1372 */;
import WebhooksStore from "WebhooksStore" /* 16664 */;
import Constants from "Constants" /* 1074 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let c3, c4, importDefault, navigation;

let closure_14;
let closure_15;
let closure_16;
let closure_17;
let closure_18;
let closure_19;
let closure_20;
let map1;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
function WebhookItem(avatar) {
  let formatToPlainString2Result;
  let obj4;
  let obj6;
  let obj7;
  let user;
  let webhookId;
  avatar = avatar.avatar;
  const channel = avatar.channel;
  const guildId = avatar.guildId;
  const name = avatar.name;
  const token = avatar.token;
  ({ user, webhookId } = avatar);
  const webhookType = avatar.webhookType;
  const tmp = avatar;
  let obj = avatar(guildId[12]);
  navigation = obj.useNavigation();
  const items = [webhookId, webhookType, avatar, channel, guildId, name, token, navigation];
  const items1 = [webhookId, avatar];
  const callback = token.useCallback(() => {
    const obj = { webhookId, webhookType, avatar, name, channel, guildId, token };
    navigation.push(constants.EDIT_WEBHOOK, obj);
  }, items);
  const memo = token.useMemo(() => {
    const makeSource = AvatarUtils.makeSource;
    AvatarUtils;
    const obj = AvatarUtils;
    const obj2 = { id: webhookId, avatar, discriminator };
    return makeSource(obj.getUserAvatarURL(obj2));
  }, items1);
  let obj2 = { icon: closure_18(avatar(guildId[15]).Avatar, { source: memo }), arrow: true, label: name, subLabel: formatToPlainString2Result, onPress: callback };
  const TableRow = avatar(guildId[14]).TableRow;
  const tmp6 = closure_18;
  if (null != user) {
    const intl2 = tmp(tmp2[16]).intl;
    const formatToPlainString2 = intl2.formatToPlainString;
    const obj3 = { timestamp: obj6.extractTimestamp(webhookId), user: obj7.getUserTag(user) };
    const v7EcUbr = tmp(tmp2[16]).t["7EcUbr"];
    obj6 = channel(guildId[17]);
    obj7 = channel(guildId[18]);
    formatToPlainString2Result = formatToPlainString2(v7EcUbr, obj3);
  } else {
    const intl = tmp(tmp2[16]).intl;
    const formatToPlainString = intl.formatToPlainString;
    const obj5 = { timestamp: obj4.extractTimestamp(webhookId) };
    const v7mv59O = tmp(tmp2[16]).t["7mv59O"];
    obj4 = channel(guildId[17]);
    formatToPlainString2Result = formatToPlainString(v7mv59O, obj5);
  }
  return tmp6(TableRow, obj2);
}
function ConnectedWebhookItem(arg0) {
  let id;
  let stateFromStores1;
  ({ channelId: require, user: importDefault } = arg0);
  const merged = Object.assign(arg0, Object.assign({ channelId: 0, user: 0 }));
  const items = [UserStore];
  const obj = get_initialized;
  const stateFromStores = obj.useStateFromStores(items, () => {
    importDefault = undefined;
    const getUser = UserStore.getUser;
    if (importDefault != null) {
      importDefault = importDefault.id;
    }
    return getUser(importDefault);
  });
  const items1 = [ChannelStore];
  const obj3 = { user: stateFromStores, channel: stateFromStores1 };
  const obj2 = get_initialized;
  stateFromStores1 = obj2.useStateFromStores(items1, () => ChannelStore.getChannel(require));
  const merged1 = Object.assign(merged);
  return closure_18(WebhookItem, obj3);
}
function CreateWebhookButton(guild) {
  let Icon;
  let intl;
  let obj4;
  guild = guild.guild;
  let channel = guild.channel;
  navigation = undefined;
  let obj = guild(navigation[12]);
  navigation = obj.useNavigation();
  let obj2 = guild(navigation[19]);
  let items = [GuildChannelStore, PermissionStore];
  const stateFromStores = obj2.useStateFromStores(items, () => {
    if (null != channel) {
      return channel;
    } else {
      const channels = GuildChannelStore.getChannels(guild.id);
      const items = [];
      HermesBuiltin.arraySpread(items, channels[metroImportDefault], HermesBuiltin.arraySpread(items, channels[metroRequire], 0));
      const found = items.find((channel) => closure_1_10.can(constants.MANAGE_WEBHOOKS, channel.channel));
      channel = undefined;
      if (found != null) {
        channel = found.channel;
      }
      return channel;
    }
  });
  const items1 = [stateFromStores, guild.id, navigation];
  const callback = react.useCallback(stateFromStores(function*(arg0, value) {
    let closure_1;
    let closure_2;
    let obj2;
    if (c4 === 2) {
      c4 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        let avatar;
        c4 = 2;
        if (0 === c3) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            navigation = tmp4;
            avatar = undefined;
            if (null != stateFromStores) {
              c3 = 1;
              c4 = 1;
              const obj5 = { value: obj2.create(guild.id, stateFromStores.id), done: false };
              obj2 = tmp(navigation[20]);
              return obj5;
            }
          }
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          const obj = { value, done: true };
          return obj;
        } else {
          avatar = value;
          if (null != avatar) {
            const obj6 = { webhookId: avatar.id, webhookType: avatar.type, avatar, name: avatar.name, channel: closure_130_3, guildId: closure_130_0.id, token: avatar.token };
            avatar = avatar.avatar;
            const push = closure_130_2.push;
            const EDIT_WEBHOOK = constants.EDIT_WEBHOOK;
            if (avatar == null) {
              avatar = undefined;
            }
            push(EDIT_WEBHOOK, obj6);
          }
        }
        c4 = 3;
        return { value: "HermesInternal", done: null };
      } catch (tmp17) {
        c4 = 3;
        throw tmp17;
      }
    }
  }), items1);
  let obj3 = { icon: closure_18(Icon, obj4), label: intl.string(guild(navigation[16]).t["nrO/HH"]), disabled: null == stateFromStores, onPress: callback };
  const RowButton = guild(navigation[21]).RowButton;
  obj4 = { IconComponent: guild(navigation[22]).WebhookPlusIcon };
  Icon = guild(navigation[21]).RowButton.Icon;
  intl = guild(navigation[16]).intl;
  return closure_18(RowButton, obj3);
}
let GuildChannelStore = GuildChannelStore_mod;
({ GUILD_SELECTABLE_CHANNELS_KEY: metroRequire, GUILD_VOCAL_CHANNELS_KEY: metroImportDefault } = GuildChannelStore);
GuildChannelStore = GuildChannelStore_mod;
({ HelpdeskArticles: map1, ChannelSettingsSections: closure_14, NON_USER_BOT_DISCRIMINATOR: closure_15, Permissions: closure_16, WebhookTypes: closure_17 } = Constants);
({ jsx: closure_18, Fragment: closure_19, jsxs: closure_20 } = Fragment);
let obj = { form: obj2, content: obj3, hint: obj4 };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
const createLegacyClassComponentStyles = createStyles.createLegacyClassComponentStyles;
obj3 = { paddingTop: nativeDefault.space.PX_16, paddingHorizontal: nativeDefault.modules.mobile.TABLE_ROW_PADDING };
obj4 = { paddingHorizontal: nativeDefault.space.PX_16, marginBottom: nativeDefault.space.PX_16 };
let closure_21 = createLegacyClassComponentStyles(obj);
const PureComponent = react.PureComponent;
class WebhooksOverview extends PureComponent {
  getHelpText() {
    let format2Result;
    let obj2;
    let obj4;
    if (this.props.webhookType === constants3.CHANNEL_FOLLOWER) {
      const intl2 = intl3.intl;
      const format2 = intl2.format;
      const obj3 = { helpdeskArticle: obj4.getArticleURL(map1.CHANNEL_FOLLOWING) };
      const prop = intl3.t["5u+aV1"];
      obj4 = HelpdeskUtilsDefault;
      format2Result = format2(prop, obj3);
    } else {
      const intl = intl3.intl;
      const format = intl.format;
      const obj = { articleURL: obj2.getArticleURL(map1.WEBHOOKS_INTRODUCTION) };
      const prop1 = intl3.t["3hX7G+"];
      obj2 = HelpdeskUtilsDefault;
      format2Result = format(prop1, obj);
    }
    return format2Result;
  }
  renderWebhooks() {
    let stringResult;
    let tmp4Result2;
    let webhookType;
    let webhooks;
    const self = this;
    ({ webhooks, webhookType } = this.props);
    let found = webhooks;
    if (null != webhookType) {
      found = webhooks.filter((type) => type.type === webhookType);
    }
    const helpText = self.getHelpText();
    const tmp2 = closure_20;
    const children = [closure_18(webhookType(4832).Text, { variant: "text-sm/medium", color: "text-muted", children: helpText }), , ];
    let tmp4Result = webhookType === constants3.INCOMING;
    const tmp3 = closure_19;
    const tmp7 = constants3;
    if (tmp4Result) {
      let obj = { guild: self.props.guild, channel: self.props.channel };
      tmp4Result = tmp4(CreateWebhookButton, obj);
    }
    children[1] = tmp4Result;
    if (0 === found.length) {
      const obj2 = { Illustration: webhookType(16668).WebhookEmpty, title: stringResult };
      const EmptyState = tmp5(1177).EmptyState;
      if (webhookType === tmp7.CHANNEL_FOLLOWER) {
        const intl2 = tmp5(1115).intl;
        stringResult = intl2.string(tmp5(1115).t.dkHRkE);
      } else {
        const intl = tmp5(1115).intl;
        stringResult = intl.string(tmp5(1115).t["4JAVI+"]);
      }
      tmp4Result2 = tmp4(EmptyState, obj2);
    } else {
      const obj3 = {
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
            const obj = { webhookId: id, webhookType: type.type, avatar, name, user, channelId: channel_id, token, guildId: guild_id };
            ({ name, user, token, guild_id, channel_id } = type);
            return closure_1_18(ConnectedWebhookItem, obj, id);
          })
      };
      const TableRowGroup = tmp5(5999).TableRowGroup;
      tmp4Result2 = tmp4(TableRowGroup, obj3);
    }
    children[2] = tmp4Result2;
    return tmp2(tmp3, { children });
  }
  render() {
    let Stack;
    let items;
    let obj3;
    const tmp = closure_21(this.context);
    const obj = { children: items };
    const obj2 = { style: tmp.form, contentContainerStyle: this.props.contentContainerStyle, children: authStore4(Stack, obj3) };
    const Form = Form2.Form;
    obj3 = { spacing: nativeDefault.space.PX_24, style: tmp.content, children: this.renderWebhooks() };
    Stack = Stack_Stack.Stack;
    items = [authStore4(Form, obj2), authStore4(NavScrim.NavScrim, {})];
    return closure_20(closure_19, obj);
  }
}
const prototype = WebhooksOverview.prototype;
WebhooksOverview.contextType = native.ThemeContext;
let closure_26 = [];
const result = size.fileFinishedImporting("modules/integration_settings/native/IntegrationsSettingsWebhooksOverview.tsx");

export default function ConnectedWebhooksOverview(channelId) {
  let contentContainerStyle;
  let webhookType;
  channelId = channelId.channelId;
  const guildId = channelId.guildId;
  let stateFromStores;
  let id1;
  ({ contentContainerStyle, webhookType } = channelId);
  const tmp = channelId;
  const tmp2 = stateFromStores;
  let obj = channelId(stateFromStores[19]);
  const items = [ChannelStore];
  stateFromStores = obj.useStateFromStores(items, () => ChannelStore.getChannel(channelId));
  let obj2 = channelId(stateFromStores[19]);
  const items1 = [GuildStore];
  const stateFromStores1 = obj2.useStateFromStores(items1, () => {
    let guild_id;
    const getGuild = GuildStore.getGuild;
    if (stateFromStores != null) {
      guild_id = stateFromStores.guild_id;
    }
    if (guild_id == null) {
      guild_id = guildId;
    }
    return getGuild(guild_id);
  });
  let id;
  if (stateFromStores1 != null) {
    id = stateFromStores1.id;
  }
  if (id == null) {
    id = guildId;
  }
  id1 = undefined;
  if (stateFromStores != null) {
    id1 = stateFromStores.id;
  }
  if (id1 == null) {
    id1 = channelId;
  }
  const items2 = [WebhooksStore];
  const items3 = [id, id1];
  const tmpResult = tmp(tmp2[19]);
  const stateFromStoresArray = tmpResult.useStateFromStoresArray(items2, () => {
    let webhooksForChannel;
    if (null != id) {
      if (null != id1) {
        webhooksForChannel = WebhooksStore.getWebhooksForChannel(tmp, tmp2);
      }
      return webhooksForChannel;
    }
    if (null != id) {
      webhooksForChannel = WebhooksStore.getWebhooksForGuild(tmp);
    } else {
      webhooksForChannel = closure_26;
    }
  });
  const effect = id1.useEffect(() => {
    if (null != id) {
      if (null != id1) {
        const obj2 = WebhooksActionCreatorsDefault;
        const forChannel = obj2.fetchForChannel(tmp, tmp2);
      }
    }
    if (null != id) {
      const obj = WebhooksActionCreatorsDefault;
      const forGuild = obj.fetchForGuild(tmp);
    }
  }, items3);
  let tmp9 = null;
  if (null != stateFromStores1) {
    const obj3 = { guild: stateFromStores1, channel: stateFromStores, webhooks: stateFromStoresArray, contentContainerStyle, webhookType };
    tmp9 = closure_18(WebhooksOverview, obj3);
  }
  return tmp9;
};
