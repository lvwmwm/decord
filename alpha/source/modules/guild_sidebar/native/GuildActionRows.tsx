// Module ID: 17771
// Function ID: 17772
// Name: GuildActionRows
// Dependencies: [19, 17, 8206, 6498, 5521, 7349, 6432, 21, 4792, 575, 6706, 4824, 4625, 563, 8202, 6308, 11929, 2121, 13158, 13055, 1113, 14967, 2]
// Exports: GuildRolesAndChannelsRow

// Module 17771 (GuildActionRows)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import asyncRequire from "asyncRequire" /* 2121 */;
import RedesignChannelListConstants from "RedesignChannelListConstants" /* 5521 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6308 */;
import ReadStateConstants from "ReadStateConstants" /* 6432 */;
import GuildOnboardingConstants from "GuildOnboardingConstants" /* 7349 */;
import ChannelListState from "ChannelListState" /* 8202 */;
import react from "react" /* 19 */;
import NewChannelsStore from "NewChannelsStore" /* 8206 */;
import ReadStateStore from "ReadStateStore" /* 6498 */;
import createStyles from "createStyles" /* 4792 */;
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

export function GuildRolesAndChannelsRow(guild) {
  let stringResult;
  guild = guild.guild;
  const selected = guild.selected;
  let id;
  const tmp = closure_10();
  const tmp4 = id(6706)(guild);
  const tmp2 = id;
  id = guild.id;
  let obj = guild(4824);
  const result = obj.useIsDismissibleContentDismissed_UNSAFE(guild(4625).DismissibleContent.CHANNEL_BROWSER_NEW_BADGE_NUX);
  let obj2 = guild(563);
  const items = [ReadStateStore];
  const stateFromStores = obj2.useStateFromStores(items, () => ReadStateStore.hasUnread(guild.id, ReadStateTypes.GUILD_ONBOARDING_QUESTION));
  const items1 = [NewChannelsStore];
  const items2 = [id];
  const obj3 = guild(563);
  const stateFromStores1 = obj3.useStateFromStores(items1, () => NewChannelsStore.getNewChannelIds(guild.id).size > ChannelListState.MAX_NEW_CHANNELS_TO_SHOW);
  const callback = react.useCallback(() => {
    const obj = ModalActionCreatorsDefault;
    const obj2 = { guildId: id };
    obj.pushLazy(asyncRequire(11929, dependencyMap.paths), obj2, closure_7);
  }, items2);
  let SELECTED = guild(13158).ChannelModes.DEFAULT;
  if (selected) {
    SELECTED = tmp5(13158).ChannelModes.SELECTED;
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
    tmp11 = <View style={tmp.channelInfoContainer}>{jsx(guild(13055).NewBadge, {})}</View>;
  }
  tmp2(13158);
  const intl = tmp5(1113).intl;
  const string = intl.string;
  const t = tmp5(1113).t;
  if (tmp4) {
    stringResult = string(t.h9mGOP);
  } else {
    stringResult = string(t.et6wav);
  }
  const BaseChannelName = tmp5(13158).BaseChannelName;
  const intl2 = tmp5(1113).intl;
  const string2 = intl2.string;
  const t2 = tmp5(1113).t;
  if (tmp4) {
    string2(t2.h9mGOP);
  } else {
    string2(t2.et6wav);
  }
  ({ mode: SELECTED, IconComponent: guild(14967).ChannelListMagnifyingGlassIcon });
  const BaseChannelIcon = tmp5(13158).BaseChannelIcon;
  return <tmp2Result onPress={callback} style={tmp.container} accessible accessibilityLabel={stringResult} accessibilityState={{ selected }} mode={SELECTED} name={null} icon={null} channelInfo={tmp11} />;
}
