// Module ID: 11530
// Function ID: 89732
// Name: sortChannelsByLastMessageId
// Dependencies: [31, 1352, 1348, 1907, 3758, 4142, 3767, 1849, 11132, 653, 33, 11415, 566, 1327, 1212, 4320, 4324, 1198, 21, 11511, 2]

// Module 11530 (sortChannelsByLastMessageId)
import { isTextChannel } from "_callSuper";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import { GUILD_SELECTABLE_CHANNELS_KEY as closure_6 } from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import closure_10 from "_isNativeReflectConstruct";
import { TextAreaCta } from "TextAreaCta";
import ME from "ME";
import { jsx } from "jsxProd";
import importAllResult from "result";

let closure_12;
let closure_13;
const require = arg1;
function sortChannelsByLastMessageId(id, id2) {
  const obj = importDefault(21);
  return obj.compare(closure_8.lastMessageId(id2.id), closure_8.lastMessageId(id.id));
}
({ AnalyticEvents: closure_12, Permissions: closure_13 } = ME);
const memoResult = require("result").memo(function ChatInputGuardReadonly(guildId) {
  let handlePress;
  let text;
  ({ text, handlePress } = (function useNotice(guildId, channel) {
    let closure_0 = guildId;
    let obj = outer1_0(outer1_2[11]);
    const channelAction = obj.useMemberActionsForChannel(guildId, channel).channelAction;
    let obj1 = outer1_0(outer1_2[11]);
    let channelId;
    if (null != channelAction) {
      channelId = channelAction.channelId;
    }
    let closure_1 = obj1.useNextMemberAction(guildId, channelId);
    let obj2 = outer1_0(outer1_2[12]);
    const items = [outer1_4];
    const stateFromStores = obj2.useStateFromStores(items, () => {
      let channelId;
      if (null != channelId) {
        channelId = channelId.channelId;
      }
      return outer2_4.getChannel(channelId);
    });
    let obj3 = outer1_0(outer1_2[12]);
    const items1 = [outer1_5];
    const stateFromStoresArray = obj3.useStateFromStoresArray(items1, () => {
      const mapped = outer2_5.getChannels(closure_0)[outer2_6].map((channel) => channel.channel);
      return mapped.sort(outer2_15);
    });
    const items2 = [outer1_7];
    const items3 = [stateFromStoresArray];
    const stateFromStoresArray1 = outer1_0(outer1_2[12]).useStateFromStoresArray(items2, () => {
      const found = stateFromStoresArray.filter(outer2_0(outer2_2[13]).isNotNullish);
      const found1 = found.filter((type) => outer3_3(type.type));
      return found1.filter((channel) => outer3_7.can(outer3_13.SEND_MESSAGES, channel));
    }, items3);
    if (null != stateFromStores) {
      obj = {};
      const intl2 = outer1_0(outer1_2[14]).intl;
      obj = { channelName: outer1_0(outer1_2[15]).computeChannelName(stateFromStores, outer1_10, outer1_9) };
      obj.text = intl2.formatToPlainString(outer1_0(outer1_2[14]).t.q1krfU, obj);
      obj.handlePress = function handlePress() {
        let obj = outer2_1(outer2_2[16]);
        obj = { cta_type: outer2_11.CHANNEL_LINK };
        obj.trackWithMetadata(outer2_12.TEXT_AREA_CTA_CLICKED, obj);
        outer2_0(outer2_2[17]).transitionToGuild(closure_0, stateFromStores.id);
      };
      obj2 = obj;
      const obj11 = outer1_0(outer1_2[15]);
    } else if (0 === stateFromStoresArray1.length) {
      obj1 = {};
      const intl = outer1_0(outer1_2[14]).intl;
      obj1.text = intl.string(outer1_0(outer1_2[14]).t["gHD/nZ"]);
      obj1.handlePress = function handlePress() {
        let obj = outer2_1(outer2_2[16]);
        obj = { cta_type: outer2_11.CHANNEL_LIST };
        obj.trackWithMetadata(outer2_12.TEXT_AREA_CTA_CLICKED, obj);
        outer2_0(outer2_2[17]).transitionToGuild(closure_0, undefined);
      };
      obj2 = obj1;
    } else {
      obj2 = {};
      const intl3 = outer1_0(outer1_2[14]).intl;
      obj3 = {};
      let str = "";
      if (null != stateFromStoresArray1[0]) {
        str = outer1_0(outer1_2[15]).computeChannelName(stateFromStoresArray1[0], outer1_10, outer1_9);
        const obj6 = outer1_0(outer1_2[15]);
      }
      obj3.channelName = str;
      obj2.text = intl3.formatToPlainString(outer1_0(outer1_2[14]).t.q1krfU, obj3);
      obj2.handlePress = function handlePress() {
        let obj = outer2_1(outer2_2[16]);
        obj = { cta_type: outer2_11.CHANNEL_LINK };
        obj.trackWithMetadata(outer2_12.TEXT_AREA_CTA_CLICKED, obj);
        outer2_0(outer2_2[17]).transitionToGuild(closure_0, stateFromStoresArray1[0].id);
      };
    }
    return obj2;
  })(guildId.guildId, guildId.channel));
  let obj = { type: "simple-action", actionOnPress: handlePress };
  const tmp = (function useNotice(guildId, channel) {
    let closure_0 = guildId;
    let obj = outer1_0(outer1_2[11]);
    const channelAction = obj.useMemberActionsForChannel(guildId, channel).channelAction;
    let obj1 = outer1_0(outer1_2[11]);
    let channelId;
    if (null != channelAction) {
      channelId = channelAction.channelId;
    }
    let closure_1 = obj1.useNextMemberAction(guildId, channelId);
    let obj2 = outer1_0(outer1_2[12]);
    const items = [outer1_4];
    const stateFromStores = obj2.useStateFromStores(items, () => {
      let channelId;
      if (null != channelId) {
        channelId = channelId.channelId;
      }
      return outer2_4.getChannel(channelId);
    });
    let obj3 = outer1_0(outer1_2[12]);
    const items1 = [outer1_5];
    const stateFromStoresArray = obj3.useStateFromStoresArray(items1, () => {
      const mapped = outer2_5.getChannels(closure_0)[outer2_6].map((channel) => channel.channel);
      return mapped.sort(outer2_15);
    });
    const items2 = [outer1_7];
    const items3 = [stateFromStoresArray];
    const stateFromStoresArray1 = outer1_0(outer1_2[12]).useStateFromStoresArray(items2, () => {
      const found = stateFromStoresArray.filter(outer2_0(outer2_2[13]).isNotNullish);
      const found1 = found.filter((type) => outer3_3(type.type));
      return found1.filter((channel) => outer3_7.can(outer3_13.SEND_MESSAGES, channel));
    }, items3);
    if (null != stateFromStores) {
      obj = {};
      const intl2 = outer1_0(outer1_2[14]).intl;
      obj = { channelName: outer1_0(outer1_2[15]).computeChannelName(stateFromStores, outer1_10, outer1_9) };
      obj.text = intl2.formatToPlainString(outer1_0(outer1_2[14]).t.q1krfU, obj);
      obj.handlePress = function handlePress() {
        let obj = outer2_1(outer2_2[16]);
        obj = { cta_type: outer2_11.CHANNEL_LINK };
        obj.trackWithMetadata(outer2_12.TEXT_AREA_CTA_CLICKED, obj);
        outer2_0(outer2_2[17]).transitionToGuild(closure_0, stateFromStores.id);
      };
      obj2 = obj;
      const obj11 = outer1_0(outer1_2[15]);
    } else if (0 === stateFromStoresArray1.length) {
      obj1 = {};
      const intl = outer1_0(outer1_2[14]).intl;
      obj1.text = intl.string(outer1_0(outer1_2[14]).t["gHD/nZ"]);
      obj1.handlePress = function handlePress() {
        let obj = outer2_1(outer2_2[16]);
        obj = { cta_type: outer2_11.CHANNEL_LIST };
        obj.trackWithMetadata(outer2_12.TEXT_AREA_CTA_CLICKED, obj);
        outer2_0(outer2_2[17]).transitionToGuild(closure_0, undefined);
      };
      obj2 = obj1;
    } else {
      obj2 = {};
      const intl3 = outer1_0(outer1_2[14]).intl;
      obj3 = {};
      let str = "";
      if (null != stateFromStoresArray1[0]) {
        str = outer1_0(outer1_2[15]).computeChannelName(stateFromStoresArray1[0], outer1_10, outer1_9);
        const obj6 = outer1_0(outer1_2[15]);
      }
      obj3.channelName = str;
      obj2.text = intl3.formatToPlainString(outer1_0(outer1_2[14]).t.q1krfU, obj3);
      obj2.handlePress = function handlePress() {
        let obj = outer2_1(outer2_2[16]);
        obj = { cta_type: outer2_11.CHANNEL_LINK };
        obj.trackWithMetadata(outer2_12.TEXT_AREA_CTA_CLICKED, obj);
        outer2_0(outer2_2[17]).transitionToGuild(closure_0, stateFromStoresArray1[0].id);
      };
    }
    return obj2;
  })(guildId.guildId, guildId.channel);
  let intl = require(1212) /* getSystemLocale */.intl;
  obj.actionLabel = intl.string(require(1212) /* getSystemLocale */.t["9cs5LM"]);
  obj.message = text;
  return jsx(importDefault(11511), { type: "simple-action", actionOnPress: handlePress });
});
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/chat_input/native/guard/ChatInputGuardReadonly.tsx");

export default memoResult;
