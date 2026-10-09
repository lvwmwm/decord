// Module ID: 16551
// Function ID: 16552
// Name: GuildActionRows
// Dependencies: [19, 17, 7248, 6042, 11713, 6782, 5974, 21, 5091, 587, 7038, 4899, 2049, 573, 7244, 5941, 10664, 2000, 12041, 11943, 1126, 13986, 2]
// Exports: GuildRolesAndChannelsRow

// Module 16551 (GuildActionRows)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 587 */;
import asyncRequire from "asyncRequire" /* 2000 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5941 */;
import ReadStateConstants from "ReadStateConstants" /* 5974 */;
import GuildOnboardingConstants from "GuildOnboardingConstants" /* 6782 */;
import ChannelListState from "ChannelListState" /* 7244 */;
import RedesignChannelListConstants from "RedesignChannelListConstants" /* 11713 */;
import react from "react" /* 19 */;
import NewChannelsStore from "NewChannelsStore" /* 7248 */;
import ReadStateStore from "ReadStateStore" /* 6042 */;
import createStyles from "createStyles" /* 5091 */;
import size from "module_2" /* 2 */;

let obj2;
const View = react_native.View;
const CHANNEL_MARGIN_VERTICAL = RedesignChannelListConstants.CHANNEL_MARGIN_VERTICAL;
let closure_7 = GuildOnboardingConstants.CHANNELS_AND_ROLES_MODAL_KEY;
const ReadStateTypes = ReadStateConstants.ReadStateTypes;
const jsx = Fragment.jsx;
let obj = { container: obj2, channelInfoContainer: { paddingStart: 4 } };
obj2 = { marginVertical: CHANNEL_MARGIN_VERTICAL, marginHorizontal: 8, borderRadius: nativeDefault.radii.md };
let closure_10 = createStyles.createStyles(obj);
let result = size.fileFinishedImporting("modules/guild_sidebar/native/GuildActionRows.tsx");

export const GuildRolesAndChannelsRow = function GuildRolesAndChannelsRow(guild) {
  let stringResult;
  guild = guild.guild;
  const selected = guild.selected;
  let id;
  const tmp = closure_10();
  const tmp4 = id(7038)(guild);
  const tmp2 = id;
  id = guild.id;
  let obj = guild(4899);
  const result = obj.useIsDismissibleContentDismissed_UNSAFE(guild(2049).DismissibleContent.CHANNEL_BROWSER_NEW_BADGE_NUX);
  let obj2 = guild(573);
  const items = [ReadStateStore];
  const stateFromStores = obj2.useStateFromStores(items, () => ReadStateStore.hasUnread(guild.id, ReadStateTypes.GUILD_ONBOARDING_QUESTION));
  const items1 = [NewChannelsStore];
  const items2 = [id];
  const obj3 = guild(573);
  const stateFromStores1 = obj3.useStateFromStores(items1, () => NewChannelsStore.getNewChannelIds(guild.id).size > ChannelListState.MAX_NEW_CHANNELS_TO_SHOW);
  const callback = react.useCallback(() => {
    const obj = ModalActionCreatorsDefault;
    const obj2 = { guildId: id };
    obj.pushLazy(asyncRequire(10664, dependencyMap.paths), obj2, closure_7);
  }, items2);
  let SELECTED = guild(12041).ChannelModes.DEFAULT;
  if (selected) {
    SELECTED = tmp5(12041).ChannelModes.SELECTED;
  }
  let tmp10 = !result;
  if (result) {
    tmp10 = stateFromStores;
  }
  if (!tmp10) {
    tmp10 = stateFromStores1;
  }
  let tmp11 = null;
  if (tmp10) {
    tmp11 = <View style={tmp.channelInfoContainer}>{jsx(guild(11943).NewBadge, {})}</View>;
  }
  tmp2(12041);
  const intl = tmp5(1126).intl;
  const string = intl.string;
  const t = tmp5(1126).t;
  if (tmp4) {
    stringResult = string(t.h9mGOP);
  } else {
    stringResult = string(t.et6wav);
  }
  const BaseChannelName = tmp5(12041).BaseChannelName;
  const intl2 = tmp5(1126).intl;
  const string2 = intl2.string;
  const t2 = tmp5(1126).t;
  if (tmp4) {
    string2(t2.h9mGOP);
  } else {
    string2(t2.et6wav);
  }
  ({ mode: SELECTED, IconComponent: guild(13986).ChannelListMagnifyingGlassIcon });
  const BaseChannelIcon = tmp5(12041).BaseChannelIcon;
  return <tmp2Result onPress={callback} style={tmp.container} accessible accessibilityLabel={stringResult} accessibilityState={{ selected }} mode={SELECTED} name={null} icon={null} channelInfo={tmp11} />;
};
