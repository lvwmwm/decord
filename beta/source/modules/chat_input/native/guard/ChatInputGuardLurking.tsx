// Module ID: 11948
// Function ID: 11949
// Name: ChatInputGuardLurking
// Dependencies: [19, 4470, 2045, 11444, 1074, 21, 504, 1101, 5016, 10867, 9285, 1186, 6759, 5832, 11941, 1115, 2]

// Module 11948 (ChatInputGuardLurking)
import Fragment from "Fragment" /* 21 */;
import preloaded_user_settings from "preloaded_user_settings" /* 1186 */;
import AppAnalyticsUtilsDefault from "AppAnalyticsUtils" /* 5016 */;
import GuildActionCreatorsDefault from "GuildActionCreators" /* 5832 */;
import GuildDiscoveryUtilsAll from "GuildDiscoveryUtils" /* 6759 */;
import HubProgressActionCreators from "HubProgressActionCreators" /* 9285 */;
import showChannelFollowingActionSheet from "showChannelFollowingActionSheet" /* 10867 */;
import ChatInputConstants from "ChatInputConstants" /* 11444 */;
import react from "react" /* 19 */;
import LurkingStore from "LurkingStore" /* 4470 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import Constants from "Constants" /* 1074 */;
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
      obj5.joinGuild(guildId, obj4);
    }
  }, items3);
  let type;
  if (lurkingSource != null) {
    type = lurkingSource.type;
  }
  if (type === constants2.DIRECTORY_ENTRY) {
    guildId(11941);
    const intl6 = tmp2(1115).intl;
    const intl7 = tmp2(1115).intl;
    const intl8 = tmp2(1115).intl;
    tmp15Result = <tmp14 type="button-action" message={intl6.string(tmp2(1115).t.G42YmG)} buttonSecondaryText={intl7.string(tmp2(1115).t.GlKb5i)} buttonSecondaryOnPress={callback} buttonPrimaryText={intl8.string(tmp2(1115).t.RLch70)} buttonPrimaryOnPress={callback2} />;
  } else {
    let obj4;
    const tmp15 = jsx;
    const tmp17 = guildId(11941);
    if (isReadonlyAnnouncementsChannel) {
      let obj3 = { type: "button-action", message: intl3.string(tmp2(1115).t.Hl0Mqh), buttonSecondaryText: stringResult, buttonSecondaryOnPress: tmp10, buttonPrimaryText: intl5.string(tmp2(1115).t["3aOv+h"]), buttonPrimaryOnPress: callback1 };
      intl3 = tmp2(1115).intl;
      stringResult = undefined;
      if (isLurking) {
        const intl4 = tmp2(1115).intl;
        stringResult = intl4.string(tmp2(1115).t.VJlc0S);
      }
      tmp10 = undefined;
      if (isLurking) {
        tmp10 = callback2;
      }
      intl5 = tmp2(1115).intl;
      obj4 = obj3;
    } else {
      obj4 = { type: "button-action", message: intl.string(tmp2(1115).t.G42YmG), buttonPrimaryText: intl2.string(tmp2(1115).t.RLch70), buttonPrimaryOnPress: callback2 };
      intl = tmp2(1115).intl;
      intl2 = tmp2(1115).intl;
    }
    tmp15Result = tmp15(tmp17, obj4);
  }
  return tmp15Result;
});
let result = size.fileFinishedImporting("modules/chat_input/native/guard/ChatInputGuardLurking.tsx");

export default memoResult;
