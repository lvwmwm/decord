// Module ID: 15542
// Function ID: 119621
// Name: styles
// Dependencies: [31, 27, 653, 9141, 33, 4130, 689, 15543, 1212, 10309, 15455, 9345, 15552, 15554, 15559, 15560, 15569, 15572, 15581, 15583, 15584, 15585, 15586, 15587, 2]
// Exports: getChannelSettingsScreens

// Module 15542 (styles)
import "result";
import { View } from "get ActivityIndicator";
import ME from "ME";
import { SearchTabs } from "SearchAutocompleteSelectAnalyticsActions";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_4;
let closure_5;
let closure_6;
const require = arg1;
({ ChannelSettingsSections: closure_4, SearchTypes: closure_5, WebhookTypes: closure_6 } = ME);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { flex: 1, backgroundColor: require("_createForOfIteratorHelperLoose").colors.MOBILE_ACTIONSHEET_BACKGROUND };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.pinsScreen = { flex: 1, backgroundColor: require("_createForOfIteratorHelperLoose").colors.MOBILE_ACTIONSHEET_BACKGROUND };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj1 = { flex: 1, backgroundColor: require("_createForOfIteratorHelperLoose").colors.MOBILE_ACTIONSHEET_BACKGROUND };
const result = require("ME").fileFinishedImporting("components_native/channel_settings/ChannelSettingsModal.tsx");

export const useChannelSettingsScreensStyles = _createForOfIteratorHelperLoose;
export const getChannelSettingsScreens = function getChannelSettingsScreens(channelId, guildId, channelSettingsScreensStyles) {
  const _require = channelId;
  let closure_1 = guildId;
  const dependencyMap = channelSettingsScreensStyles;
  obj = { [closure_4.OVERVIEW]: obj };
  obj = {
    render(autoFocusElement) {
      const obj = { channelId: closure_0 };
      autoFocusElement = undefined;
      if (null != autoFocusElement) {
        autoFocusElement = autoFocusElement.autoFocusElement;
      }
      obj.autoFocusElement = autoFocusElement;
      return outer1_8(guildId(pinsScreen[7]), obj);
    }
  };
  obj = {};
  const intl = _require(1212).intl;
  obj.title = intl.string(_require(1212).t.h850Ss);
  obj.render = function render() {
    return outer1_8(guildId(pinsScreen[9]), { channelId: closure_0 });
  };
  obj[constants.NOTIFICATIONS] = obj;
  const obj1 = {};
  const intl2 = _require(1212).intl;
  obj1.title = intl2.string(_require(1212).t["mp1N/2"]);
  obj1.render = function render() {
    let obj = { type: outer1_5.GUILD_CHANNEL, guildId, channelId: closure_0 };
    obj = { style: pinsScreen.pinsScreen, children: outer1_8(guildId(pinsScreen[10]), obj) };
    obj = { searchContext: obj, tab: outer1_7.PINS, isFocused: true };
    return outer1_8(outer1_3, obj);
  };
  obj[constants.PINNED_MESSAGES] = obj1;
  obj[constants.PINNED_CHAT] = {
    postponeRender: true,
    render() {
      return outer1_8(guildId(pinsScreen[11]), { channelId: closure_0 });
    }
  };
  const obj3 = {};
  const intl3 = _require(1212).intl;
  obj3.title = intl3.string(_require(1212).t.ngRFjZ);
  obj3.postponeRender = true;
  obj3.render = function render() {
    return outer1_8(guildId(pinsScreen[12]), {});
  };
  obj[constants.INSTANT_INVITES] = obj3;
  const obj4 = {};
  const intl4 = _require(1212).intl;
  obj4.title = intl4.string(_require(1212).t.xrmhRX);
  obj4.render = function render(arg0) {
    const obj = {};
    const merged = Object.assign(arg0);
    obj["channelId"] = closure_0;
    return outer1_8(guildId(pinsScreen[13]), obj);
  };
  obj[constants.PERMISSIONS] = obj4;
  const obj5 = {};
  const intl5 = _require(1212).intl;
  obj5.title = intl5.string(_require(1212).t.vPHdP5);
  obj5.postponeRender = true;
  obj5.render = function render(arg0) {
    const merged = Object.assign(arg0);
    return outer1_8(guildId(pinsScreen[14]), { channelId: closure_0 });
  };
  obj[constants.NEW_PERMISSION] = obj5;
  const obj6 = {};
  const intl6 = _require(1212).intl;
  obj6.title = intl6.string(_require(1212).t.D4p9TR);
  obj6.render = function render(arg0) {
    const merged = Object.assign(arg0);
    return outer1_8(guildId(pinsScreen[15]), { channelId: closure_0 });
  };
  obj[constants.PERMISSION_OVERRIDES] = obj6;
  const obj7 = {};
  const intl7 = _require(1212).intl;
  obj7.title = intl7.string(_require(1212).t.CIsNZw);
  obj7.render = function render(arg0) {
    const merged = Object.assign(arg0);
    return outer1_8(guildId(pinsScreen[16]), { channelId: closure_0 });
  };
  obj[constants.INTEGRATIONS] = obj7;
  const obj8 = {};
  const intl8 = _require(1212).intl;
  obj8.title = intl8.string(_require(1212).t.jp25Id);
  obj8.render = function render() {
    return outer1_8(guildId(pinsScreen[17]), { channelId: closure_0, webhookType: outer1_6.INCOMING });
  };
  obj[constants.WEBHOOKS] = obj8;
  const obj9 = {};
  const intl9 = _require(1212).intl;
  obj9.title = intl9.string(_require(1212).t["6SE3L3"]);
  obj9.render = function render(arg0) {
    const merged = Object.assign(arg0);
    return outer1_8(guildId(pinsScreen[18]), {});
  };
  obj[constants.EDIT_WEBHOOK] = obj9;
  const obj10 = {};
  const intl10 = _require(1212).intl;
  obj10.title = intl10.string(_require(1212).t.OJknhi);
  obj10.render = function render(arg0) {
    const merged = Object.assign(arg0);
    return outer1_8(guildId(pinsScreen[19]), {});
  };
  obj[constants.EDIT_LINKED_LOBBY] = obj10;
  const obj11 = {};
  const intl11 = _require(1212).intl;
  obj11.title = intl11.string(_require(1212).t.OrV60r);
  obj11.render = function render() {
    return outer1_8(guildId(pinsScreen[17]), { channelId: closure_0, webhookType: outer1_6.CHANNEL_FOLLOWER });
  };
  obj[constants.CHANNELS_FOLLOWED] = obj11;
  const obj12 = {};
  const intl12 = _require(1212).intl;
  obj12.title = intl12.string(_require(1212).t["+caQHK"]);
  obj12.render = function render() {
    return outer1_8(guildId(pinsScreen[20]), { channelId: closure_0 });
  };
  obj[constants.CHANGE_CATEGORY] = obj12;
  const obj13 = {};
  const intl13 = _require(1212).intl;
  obj13.title = intl13.string(_require(1212).t["Ms8bX+"]);
  obj13.render = function render() {
    return outer1_8(guildId(pinsScreen[21]), { channelId: closure_0 });
  };
  obj[constants.CHANGE_RTC_REGION] = obj13;
  obj[constants.EDIT_FORUM_TAG] = {
    render(arg0) {
      const merged = Object.assign(arg0);
      return outer1_8(guildId(pinsScreen[22]), { channelId: closure_0 });
    }
  };
  const obj14 = {};
  const intl14 = _require(1212).intl;
  obj14.title = intl14.string(_require(1212).t["kQvoC/"]);
  obj14.render = function render() {
    return outer1_8(guildId(pinsScreen[23]), { channelId: closure_0 });
  };
  obj[constants.DEFAULT_FORUM_LAYOUT] = obj14;
  return obj;
};
