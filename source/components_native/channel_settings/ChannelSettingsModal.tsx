// Module ID: 15378
// Function ID: 117125
// Name: styles
// Dependencies: []
// Exports: getChannelSettingsScreens

// Module 15378 (styles)
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
({ ChannelSettingsSections: closure_4, SearchTypes: closure_5, WebhookTypes: closure_6 } = arg1(dependencyMap[2]));
const SearchTabs = arg1(dependencyMap[3]).SearchTabs;
const jsx = arg1(dependencyMap[4]).jsx;
let obj = arg1(dependencyMap[5]);
obj = {};
obj = { flex: 1, backgroundColor: importDefault(dependencyMap[6]).colors.MOBILE_ACTIONSHEET_BACKGROUND };
obj.container = obj;
const tmp3 = arg1(dependencyMap[2]);
obj.pinsScreen = { flex: 1, backgroundColor: importDefault(dependencyMap[6]).colors.MOBILE_ACTIONSHEET_BACKGROUND };
const styles = obj.createStyles(obj);
const obj1 = { flex: 1, backgroundColor: importDefault(dependencyMap[6]).colors.MOBILE_ACTIONSHEET_BACKGROUND };
const result = arg1(dependencyMap[24]).fileFinishedImporting("components_native/channel_settings/ChannelSettingsModal.tsx");

export const useChannelSettingsScreensStyles = styles;
export const getChannelSettingsScreens = function getChannelSettingsScreens(channelId, guildId, channelSettingsScreensStyles) {
  guildId = channelId;
  const importDefault = guildId;
  const dependencyMap = channelSettingsScreensStyles;
  let obj = { [closure_4.OVERVIEW]: obj };
  obj = {
    render(autoFocusElement) {
      const obj = { channelId: autoFocusElement };
      autoFocusElement = undefined;
      if (null != autoFocusElement) {
        autoFocusElement = autoFocusElement.autoFocusElement;
      }
      obj.autoFocusElement = autoFocusElement;
      return closure_8(arg1(arg2[7]), obj);
    }
  };
  obj = {};
  const intl = guildId(dependencyMap[8]).intl;
  obj.title = intl.string(guildId(dependencyMap[8]).t.h850Ss);
  obj.render = function render() {
    return callback(arg1(arg2[9]), { channelId: arg0 });
  };
  obj[constants.NOTIFICATIONS] = obj;
  const obj1 = {};
  const intl2 = guildId(dependencyMap[8]).intl;
  obj1.title = intl2.string(guildId(dependencyMap[8]).t.mp1N/2);
  obj1.render = function render() {
    let obj = { type: constants.GUILD_CHANNEL, guildId: arg1, channelId: arg0 };
    obj = { style: arg2.pinsScreen, children: callback(arg1(arg2[10]), obj) };
    obj = { searchContext: obj, tab: constants3.PINS, isFocused: true };
    return callback(closure_3, obj);
  };
  obj[constants.PINNED_MESSAGES] = obj1;
  obj[constants.PINNED_CHAT] = {
    postponeRender: true,
    render() {
      return callback(arg1(arg2[11]), { channelId: arg0 });
    }
  };
  const obj3 = {};
  const intl3 = guildId(dependencyMap[8]).intl;
  obj3.title = intl3.string(guildId(dependencyMap[8]).t.ngRFjZ);
  obj3.postponeRender = true;
  obj3.render = function render() {
    return callback(arg1(arg2[12]), {});
  };
  obj[constants.INSTANT_INVITES] = obj3;
  const obj4 = {};
  const intl4 = guildId(dependencyMap[8]).intl;
  obj4.title = intl4.string(guildId(dependencyMap[8]).t.xrmhRX);
  obj4.render = function render(arg0) {
    const obj = {};
    const merged = Object.assign(arg0);
    obj["channelId"] = arg0;
    return callback(arg1(arg2[13]), obj);
  };
  obj[constants.PERMISSIONS] = obj4;
  const obj5 = {};
  const intl5 = guildId(dependencyMap[8]).intl;
  obj5.title = intl5.string(guildId(dependencyMap[8]).t.vPHdP5);
  obj5.postponeRender = true;
  obj5.render = function render(arg0) {
    const merged = Object.assign(arg0);
    return callback(arg1(arg2[14]), { channelId: arg0 });
  };
  obj[constants.NEW_PERMISSION] = obj5;
  const obj6 = {};
  const intl6 = guildId(dependencyMap[8]).intl;
  obj6.title = intl6.string(guildId(dependencyMap[8]).t.D4p9TR);
  obj6.render = function render(arg0) {
    const merged = Object.assign(arg0);
    return callback(arg1(arg2[15]), { channelId: arg0 });
  };
  obj[constants.PERMISSION_OVERRIDES] = obj6;
  const obj7 = {};
  const intl7 = guildId(dependencyMap[8]).intl;
  obj7.title = intl7.string(guildId(dependencyMap[8]).t.CIsNZw);
  obj7.render = function render(arg0) {
    const merged = Object.assign(arg0);
    return callback(arg1(arg2[16]), { channelId: arg0 });
  };
  obj[constants.INTEGRATIONS] = obj7;
  const obj8 = {};
  const intl8 = guildId(dependencyMap[8]).intl;
  obj8.title = intl8.string(guildId(dependencyMap[8]).t.jp25Id);
  obj8.render = function render() {
    return callback(arg1(arg2[17]), { channelId: arg0, webhookType: constants2.INCOMING });
  };
  obj[constants.WEBHOOKS] = obj8;
  const obj9 = {};
  const intl9 = guildId(dependencyMap[8]).intl;
  obj9.title = intl9.string(guildId(dependencyMap[8]).t.6SE3L3);
  obj9.render = function render(arg0) {
    const merged = Object.assign(arg0);
    return callback(arg1(arg2[18]), {});
  };
  obj[constants.EDIT_WEBHOOK] = obj9;
  const obj10 = {};
  const intl10 = guildId(dependencyMap[8]).intl;
  obj10.title = intl10.string(guildId(dependencyMap[8]).t.OJknhi);
  obj10.render = function render(arg0) {
    const merged = Object.assign(arg0);
    return callback(arg1(arg2[19]), {});
  };
  obj[constants.EDIT_LINKED_LOBBY] = obj10;
  const obj11 = {};
  const intl11 = guildId(dependencyMap[8]).intl;
  obj11.title = intl11.string(guildId(dependencyMap[8]).t.OrV60r);
  obj11.render = function render() {
    return callback(arg1(arg2[17]), { channelId: arg0, webhookType: constants2.CHANNEL_FOLLOWER });
  };
  obj[constants.CHANNELS_FOLLOWED] = obj11;
  const obj12 = {};
  const intl12 = guildId(dependencyMap[8]).intl;
  obj12.title = intl12.string(guildId(dependencyMap[8]).t.+caQHK);
  obj12.render = function render() {
    return callback(arg1(arg2[20]), { channelId: arg0 });
  };
  obj[constants.CHANGE_CATEGORY] = obj12;
  const obj13 = {};
  const intl13 = guildId(dependencyMap[8]).intl;
  obj13.title = intl13.string(guildId(dependencyMap[8]).t.Ms8bX+);
  obj13.render = function render() {
    return callback(arg1(arg2[21]), { channelId: arg0 });
  };
  obj[constants.CHANGE_RTC_REGION] = obj13;
  obj[constants.EDIT_FORUM_TAG] = {
    render(arg0) {
      const merged = Object.assign(arg0);
      return callback(arg1(arg2[22]), { channelId: arg0 });
    }
  };
  const obj14 = {};
  const intl14 = guildId(dependencyMap[8]).intl;
  obj14.title = intl14.string(guildId(dependencyMap[8]).t.kQvoC/);
  obj14.render = function render() {
    return callback(arg1(arg2[23]), { channelId: arg0 });
  };
  obj[constants.DEFAULT_FORUM_LAYOUT] = obj14;
  return obj;
};
