// Module ID: 11518
// Function ID: 89688
// Dependencies: [31, 3759, 1348, 11132, 653, 33, 566, 1198, 4324, 10399, 5713, 1282, 5736, 5048, 11511, 1212, 2]

// Module 11518
import importAllResult from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import { TextAreaCta } from "TextAreaCta";
import ME from "ME";
import { jsx } from "jsxProd";

let closure_8;
let closure_9;
const require = arg1;
({ AnalyticEvents: closure_8, JoinGuildSources: closure_9 } = ME);
const memoResult = importAllResult.memo(function ChatInputGuardLurking(channel) {
  let isLurking;
  let lurkingSource;
  channel = channel.channel;
  let guildId = channel.getGuildId();
  let obj = channel(566);
  const items = [_isNativeReflectConstruct];
  const items1 = [guildId];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    const obj = {};
    let isLurkingResult = null != guildId;
    if (isLurkingResult) {
      isLurkingResult = outer1_5.isLurking(guildId);
    }
    obj.isLurking = isLurkingResult;
    obj.lurkingSource = outer1_5.getLurkingSourceForGuild(guildId);
    return obj;
  }, items1);
  ({ isLurking, lurkingSource } = stateFromStoresObject);
  const items2 = [guildId, channel.id];
  const callback = importAllResult.useCallback(() => {
    const history = channel(outer1_3[7]).getHistory();
    history.goBack();
  }, []);
  const items3 = [guildId];
  const callback1 = importAllResult.useCallback(() => {
    if (null != guildId) {
      let obj = guildId(outer1_3[8]);
      obj = { cta_type: outer1_7.FOLLOW_ANNOUNCEMENT };
      obj.trackWithMetadata(outer1_8.TEXT_AREA_CTA_CLICKED, obj);
      const result = channel(outer1_3[9]).showChannelFollowingActionSheet(channel.id, guildId);
      const obj3 = channel(outer1_3[9]);
    }
  }, items2);
  const callback2 = importAllResult.useCallback(() => {
    if (null != guildId) {
      const lurkingSourceForGuild = outer1_5.getLurkingSourceForGuild(guildId);
      let type;
      if (null != lurkingSourceForGuild) {
        type = lurkingSourceForGuild.type;
      }
      if (type === outer1_9.DIRECTORY_ENTRY) {
        const channel = outer1_6.getChannel(lurkingSourceForGuild.directoryChannelId);
        if (null != channel) {
          guildId = channel.getGuildId();
          const result = channel(outer1_3[10]).setHubProgressActionComplete(guildId, channel(outer1_3[11]).HubProgressStep.JOIN_GUILD);
          const obj2 = channel(outer1_3[10]);
        }
      }
      const result1 = outer1_2(outer1_3[12]).trackGuildJoinClicked(guildId);
      const obj3 = outer1_2(outer1_3[12]);
      let obj = { cta_type: outer1_7.JOIN_GUILD };
      guildId(outer1_3[8]).trackWithMetadata(outer1_8.TEXT_AREA_CTA_CLICKED, obj);
      const obj4 = guildId(outer1_3[8]);
      obj = { source: outer1_9.CHAT_INPUT_BLOCKER };
      guildId(outer1_3[13]).joinGuild(guildId, obj);
      const obj6 = guildId(outer1_3[13]);
    }
  }, items3);
  let type;
  if (null != lurkingSource) {
    type = lurkingSource.type;
  }
  if (type === constants.DIRECTORY_ENTRY) {
    obj = { type: "button-action" };
    const intl6 = channel(1212).intl;
    obj.message = intl6.string(channel(1212).t.G42YmG);
    const intl7 = channel(1212).intl;
    obj.buttonSecondaryText = intl7.string(channel(1212).t.GlKb5i);
    obj.buttonSecondaryOnPress = callback;
    const intl8 = channel(1212).intl;
    obj.buttonPrimaryText = intl8.string(channel(1212).t.RLch70);
    obj.buttonPrimaryOnPress = callback2;
    let tmp23Result = jsx(guildId(11511), { type: "button-action" });
    const tmp21 = guildId(11511);
  } else {
    if (channel.isReadonlyAnnouncementsChannel) {
      obj = { type: "button-action" };
      const intl3 = channel(1212).intl;
      obj.message = intl3.string(channel(1212).t.Hl0Mqh);
      let stringResult;
      if (isLurking) {
        const intl4 = channel(1212).intl;
        stringResult = intl4.string(channel(1212).t.VJlc0S);
      }
      obj.buttonSecondaryText = stringResult;
      let tmp14;
      if (isLurking) {
        tmp14 = callback2;
      }
      obj.buttonSecondaryOnPress = tmp14;
      const intl5 = channel(1212).intl;
      obj.buttonPrimaryText = intl5.string(channel(1212).t["3aOv+h"]);
      obj.buttonPrimaryOnPress = callback1;
      let obj1 = obj;
    } else {
      obj1 = { type: "button-action" };
      const intl = channel(1212).intl;
      obj1.message = intl.string(channel(1212).t.G42YmG);
      const intl2 = channel(1212).intl;
      obj1.buttonPrimaryText = intl2.string(channel(1212).t.RLch70);
      obj1.buttonPrimaryOnPress = callback2;
    }
    tmp23Result = jsx(guildId(11511), obj1);
    const tmp23 = jsx;
    const tmp26 = guildId(11511);
  }
  return tmp23Result;
});
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/chat_input/native/guard/ChatInputGuardLurking.tsx");

export default memoResult;
