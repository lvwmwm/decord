// Module ID: 13978
// Function ID: 13979
// Name: ChatInputGuardLurking
// Dependencies: [19, 4942, 4858, 12771, 1072, 21, 504, 1100, 5755, 11176, 9111, 1197, 7515, 6896, 6900, 13971, 1114, 2]

// Module 13978 (ChatInputGuardLurking)
import Fragment from "Fragment" /* 21 */;
import preloaded_user_settings from "preloaded_user_settings" /* 1197 */;
import AppAnalyticsUtilsDefault from "AppAnalyticsUtils" /* 5755 */;
import GuildActionCreatorsDefault from "GuildActionCreators" /* 6896 */;
import JoinGuildRefusedError from "JoinGuildRefusedError" /* 6900 */;
import GuildDiscoveryUtilsAll from "GuildDiscoveryUtils" /* 7515 */;
import HubProgressActionCreators from "HubProgressActionCreators" /* 9111 */;
import showChannelFollowingActionSheet from "showChannelFollowingActionSheet" /* 11176 */;
import ChatInputConstants from "ChatInputConstants" /* 12771 */;
import react from "react" /* 19 */;
import LurkingStore from "LurkingStore" /* 4942 */;
import ChannelStore from "ChannelStore" /* 4858 */;
import Constants from "Constants" /* 1072 */;
import size from "module_2" /* 2 */;

let c9;
let metroImportAll;
const TextAreaCta = ChatInputConstants.TextAreaCta;
({ AnalyticEvents: metroImportAll, JoinGuildSources: c9 } = Constants);
const jsx = Fragment.jsx;
const memoResult = react.memo(function ChatInputGuardLurking(channel) {
  let intl;
  let intl2;
  let intl3;
  let intl5;
  let intl6;
  let intl7;
  let intl8;
  let isLurking;
  let lurkingSource;
  let stringResult;
  let tmp10;
  let tmp15Result;
  channel = channel.channel;
  const isReadonlyAnnouncementsChannel = channel.isReadonlyAnnouncementsChannel;
  let guildId = channel.getGuildId();
  let tmp3 = dependencyMap;
  let obj = channel(504);
  const items = [LurkingStore];
  const items1 = [guildId];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    const isLurkingResult = null != guildId && LurkingStore.isLurking(tmp);
    const obj = { isLurking: isLurkingResult, lurkingSource: LurkingStore.getLurkingSourceForGuild(guildId) };
    return obj;
  }, items1);
  ({ isLurking, lurkingSource } = stateFromStoresObject);
  const items2 = [guildId, channel.id];
  const callback = react.useCallback(() => {
    const obj = channel(dependencyMap[7]);
    const history = obj.getHistory();
    history.goBack();
  }, []);
  const items3 = [guildId];
  const callback1 = react.useCallback(() => {
    if (null != guildId) {
      const obj2 = { cta_type: TextAreaCta.FOLLOW_ANNOUNCEMENT };
      const obj = AppAnalyticsUtilsDefault;
      obj.trackWithMetadata(metroImportAll.TEXT_AREA_CTA_CLICKED, obj2);
      const obj3 = showChannelFollowingActionSheet;
      const result = obj3.showChannelFollowingActionSheet(channel.id, tmp);
    }
  }, items2);
  const callback2 = react.useCallback(() => {
    if (null != guildId) {
      const lurkingSourceForGuild = LurkingStore.getLurkingSourceForGuild(tmp);
      let type;
      if (lurkingSourceForGuild != null) {
        type = lurkingSourceForGuild.type;
      }
      const tmp3 = constants;
      if (type === constants.DIRECTORY_ENTRY) {
        channel = ChannelStore.getChannel(lurkingSourceForGuild.directoryChannelId);
        if (null != channel) {
          const setHubProgressActionComplete = HubProgressActionCreators.setHubProgressActionComplete;
          HubProgressActionCreators;
          guildId = channel.getGuildId();
          const result = setHubProgressActionComplete(guildId, preloaded_user_settings.HubProgressStep.JOIN_GUILD);
        }
      }
      const obj2 = GuildDiscoveryUtilsAll;
      const result1 = obj2.trackGuildJoinClicked(tmp);
      const obj = { cta_type: TextAreaCta.JOIN_GUILD };
      const obj3 = AppAnalyticsUtilsDefault;
      obj3.trackWithMetadata(metroImportAll.TEXT_AREA_CTA_CLICKED, obj);
      const obj4 = { source: tmp3.CHAT_INPUT_BLOCKER };
      const obj5 = GuildActionCreatorsDefault;
      const joinGuildResult = obj5.joinGuild(guildId, obj4);
      joinGuildResult.catch(JoinGuildRefusedError.ignoreJoinGuildRefused);
    }
  }, items3);
  let type;
  if (lurkingSource != null) {
    type = lurkingSource.type;
  }
  if (type === constants2.DIRECTORY_ENTRY) {
    guildId(13971);
    const intl9 = tmp2(1114).intl;
    const intl10 = tmp2(1114).intl;
    const intl11 = tmp2(1114).intl;
    tmp15Result = <tmp14 type="button-action" message={intl9.string(tmp2(1114).t.G42YmG)} buttonSecondaryText={intl10.string(tmp2(1114).t.GlKb5i)} buttonSecondaryOnPress={callback} buttonPrimaryText={intl11.string(tmp2(1114).t.RLch70)} buttonPrimaryOnPress={callback2} />;
  } else {
    let obj9;
    const tmp15 = jsx;
    const tmp17 = guildId(13971);
    if (null != channel.pendingGameProfileReturn) {
      let obj3 = { type: "button-action", message: intl6.string(tmp2(1114).t.G42YmG), buttonSecondaryText: intl7.string(tmp2(1114).t.DjifDP), buttonSecondaryOnPress: null, buttonSecondaryLoading: null, buttonPrimaryText: intl8.string(tmp2(1114).t.RLch70), buttonPrimaryOnPress: callback2 };
      intl6 = tmp2(1114).intl;
      intl7 = tmp2(1114).intl;
      ({ onReturnToGameProfile: obj4.buttonSecondaryOnPress, isReturning: obj4.buttonSecondaryLoading } = channel.pendingGameProfileReturn);
      intl8 = tmp2(1114).intl;
      obj9 = obj3;
    } else if (isReadonlyAnnouncementsChannel) {
      let obj5 = { type: "button-action", message: intl3.string(tmp2(1114).t.Hl0Mqh), buttonSecondaryText: stringResult, buttonSecondaryOnPress: tmp10, buttonPrimaryText: intl5.string(tmp2(1114).t["3aOv+h"]), buttonPrimaryOnPress: callback1 };
      intl3 = tmp2(1114).intl;
      stringResult = undefined;
      if (isLurking) {
        const intl4 = tmp2(1114).intl;
        stringResult = intl4.string(tmp2(1114).t.VJlc0S);
      }
      tmp10 = undefined;
      if (isLurking) {
        tmp10 = callback2;
      }
      intl5 = tmp2(1114).intl;
      obj9 = obj5;
    } else {
      obj9 = { type: "button-action", message: intl.string(tmp2(1114).t.G42YmG), buttonPrimaryText: intl2.string(tmp2(1114).t.RLch70), buttonPrimaryOnPress: callback2 };
      intl = tmp2(1114).intl;
      intl2 = tmp2(1114).intl;
    }
    tmp15Result = tmp15(tmp17, obj9);
  }
  return tmp15Result;
});
let result = size.fileFinishedImporting("modules/chat_input/native/guard/ChatInputGuardLurking.tsx");

export default memoResult;
