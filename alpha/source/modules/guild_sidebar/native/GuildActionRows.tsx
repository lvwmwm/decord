// Module ID: 17678
// Function ID: 17679
// Name: GuildActionRows
// Dependencies: [19, 17, 7642, 6772, 11954, 7194, 6706, 21, 4972, 587, 7442, 5002, 4808, 573, 7638, 6673, 11246, 1999, 13290, 13192, 1125, 15120, 2]
// Exports: GuildRolesAndChannelsRow

// Module 17678 (GuildActionRows)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 587 */;
import asyncRequire from "asyncRequire" /* 1999 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6673 */;
import ReadStateConstants from "ReadStateConstants" /* 6706 */;
import GuildOnboardingConstants from "GuildOnboardingConstants" /* 7194 */;
import ChannelListState from "ChannelListState" /* 7638 */;
import RedesignChannelListConstants from "RedesignChannelListConstants" /* 11954 */;
import react from "react" /* 19 */;
import NewChannelsStore from "NewChannelsStore" /* 7642 */;
import ReadStateStore from "ReadStateStore" /* 6772 */;
import createStyles from "createStyles" /* 4972 */;
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
  const tmp4 = id(7442)(guild);
  const tmp2 = id;
  id = guild.id;
  let obj = guild(5002);
  const result = obj.useIsDismissibleContentDismissed_UNSAFE(guild(4808).DismissibleContent.CHANNEL_BROWSER_NEW_BADGE_NUX);
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
    obj.pushLazy(asyncRequire(11246, dependencyMap.paths), obj2, closure_7);
  }, items2);
  let SELECTED = guild(13290).ChannelModes.DEFAULT;
  if (selected) {
    SELECTED = tmp5(13290).ChannelModes.SELECTED;
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
    tmp11 = <View style={tmp.channelInfoContainer}>{jsx(guild(13192).NewBadge, {})}</View>;
  }
  tmp2(13290);
  const intl = tmp5(1125).intl;
  const string = intl.string;
  const t = tmp5(1125).t;
  if (tmp4) {
    stringResult = string(t.h9mGOP);
  } else {
    stringResult = string(t.et6wav);
  }
  const BaseChannelName = tmp5(13290).BaseChannelName;
  const intl2 = tmp5(1125).intl;
  const string2 = intl2.string;
  const t2 = tmp5(1125).t;
  if (tmp4) {
    string2(t2.h9mGOP);
  } else {
    string2(t2.et6wav);
  }
  ({ mode: SELECTED, IconComponent: guild(15120).ChannelListMagnifyingGlassIcon });
  const BaseChannelIcon = tmp5(13290).BaseChannelIcon;
  return <tmp2Result onPress={callback} style={tmp.container} accessible accessibilityLabel={stringResult} accessibilityState={{ selected }} mode={SELECTED} name={null} icon={null} channelInfo={tmp11} />;
};
