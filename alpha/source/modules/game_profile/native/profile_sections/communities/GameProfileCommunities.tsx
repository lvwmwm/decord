// Module ID: 9592
// Function ID: 9593
// Name: GameProfileCommunities
// Dependencies: [32, 5, 19, 17, 4880, 4912, 9350, 1072, 4865, 21, 5009, 575, 4872, 504, 9300, 9345, 9320, 7386, 7515, 7345, 6900, 9421, 1114, 9593, 9596, 5253, 9598, 5619, 8020, 9600, 12, 9416, 2]
// Exports: default

// Module 9592 (GameProfileCommunities)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1072 */;
import ChannelConstants from "ChannelConstants" /* 4865 */;
import GuildRecordUtils from "GuildRecordUtils" /* 4872 */;
import ActionSheetActionCreators from "ActionSheetActionCreators" /* 5253 */;
import GameProfileActionCreatorsDefault from "GameProfileActionCreators" /* 9300 */;
import GameProfileAnalyticUtils from "GameProfileAnalyticUtils" /* 9320 */;
import GameProfileNavTypes from "GameProfileNavTypes" /* 9345 */;
import GameProfileConstants from "GameProfileConstants" /* 9350 */;
import useGameProfileCommunitiesDefault from "useGameProfileCommunities" /* 9593 */;
import useGameProfileCommunitiesLocaleFilterDefault from "useGameProfileCommunitiesLocaleFilter" /* 9596 */;
import GameProfileCommunitiesLocaleFilterActionSheet from "GameProfileCommunitiesLocaleFilterActionSheet" /* 9598 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import GuildStore from "GuildStore" /* 4880 */;
import SelectedChannelStore from "SelectedChannelStore" /* 4912 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

const GameProfileCommunitiesLocaleFilterActionSheetDefault = GameProfileCommunitiesLocaleFilterActionSheet;
let c5, c6;

let closure_12;
let obj2;
let obj3;
let obj4;
let tmp2;
let unpackModuleId;
const _modDef12 = tmp2(12);
const View = react_native.View;
const MOBILE_GAME_PROFILE_MAX_WIDTH = GameProfileConstants.MOBILE_GAME_PROFILE_MAX_WIDTH;
const JoinGuildSources = Constants.JoinGuildSources;
const isStaticChannelRoute = ChannelConstants.isStaticChannelRoute;
({ jsx: unpackModuleId, jsxs: closure_12 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, header: obj3, heading: { flexShrink: 1 }, list: obj4 };
obj2 = { marginTop: nativeDefault.modules.mobile.SHEET_HANDLE_HEIGHT, padding: nativeDefault.space.PX_16, maxWidth: MOBILE_GAME_PROFILE_MAX_WIDTH, alignSelf: "center", width: "100%", gap: nativeDefault.space.PX_8 };
createStyles = createStyles.createStyles;
obj3 = { flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: nativeDefault.space.PX_8, minHeight: nativeDefault.space.PX_32, paddingHorizontal: nativeDefault.space.PX_8 };
obj4 = { gap: nativeDefault.space.PX_12 };
let closure_13 = createStyles(obj);
let closure_14 = react.memo(function GameProfileCommunityCard(gameId) {
  let stringResult;
  gameId = gameId.gameId;
  let guild = gameId.guild;
  let viewId = gameId.viewId;
  const scrollY = gameId.scrollY;
  const trackAction = gameId.trackAction;
  const closeModal = gameId.closeModal;
  let callback;
  let items = [guild];
  const memo = closeModal.useMemo(() => {
    const obj = GuildRecordUtils;
    return obj.fromClientDiscoverableGuild(guild);
  }, items);
  let obj = gameId(viewId[13]);
  let items1 = [callback];
  const items2 = [guild.id];
  const stateFromStores = obj.useStateFromStores(items1, () => {
    guild = GuildStore.getGuild(guild.id);
    let joinedAt;
    if (guild != null) {
      joinedAt = guild.joinedAt;
    }
    return null != joinedAt;
  }, items2);
  const items3 = [gameId];
  callback = closeModal.useCallback((channelId, initialScrollOffset) => {
    const obj = GameProfileActionCreatorsDefault;
    const obj2 = { gameId, channelId, initialScrollOffset, tab: GameProfileNavTypes.GameProfileNavTab.COMMUNITIES, source: GameProfileAnalyticUtils.GameProfileSources.CommunityPreviewReturn };
    const result = obj.setGameProfilePendingReturn(obj2);
  }, items3);
  const items4 = [guild.id, stateFromStores, trackAction, closeModal, viewId, scrollY, callback];
  const callback1 = closeModal.useCallback(trackAction(function*(arg0, value) {
    let closure_1;
    let closure_2;
    let closure_3;
    if (c6 === 2) {
      c6 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      let c4;
      try {
        let channelId;
        let currentlySelectedChannelId2;
        c6 = 2;
        if (0 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            viewId = tmp;
            channelId = undefined;
            currentlySelectedChannelId2 = undefined;
            const obj5 = { communityGuildId: guild.id };
            trackAction(channelId(viewId[16]).GameProfileTrackActionActions.CommunityClicked, obj5);
            value = scrollY.get();
            channelId = value;
            const tmp76 = stateFromStores;
            if (tmp76) {
              const obj8 = channelId(viewId[17]);
              const first = tmp62(obj8.getGuildTransitionRoute(guild.id), 1)[0];
              const tmp43 = null == first || isStaticChannelRoute(first);
              if (!tmp43) {
                callback(first, value);
              }
              closeModal();
              const tmp51 = channelId(viewId[18]);
              const id2 = guild.id;
              channelId = first;
              const startLurking2 = tmp51.startLurking;
              if (first == null) {
                channelId = undefined;
              }
              const obj6 = { channelId, joinSource: constants.GAME_PROFILE_COMMUNITIES, loadId: viewId, openChannel: true };
              const items = [];
              const obj7 = {};
              items[0] = currentlySelectedChannelId2(viewId[19]).GAME_PROFILE_COMMUNITIES;
              c5 = 2;
              c6 = 1;
              const obj9 = { value: startLurking2(id2, obj7, obj6, items), done: false };
              return obj9;
            } else {
              closeModal();
              c4 = 1;
              const tmp28 = channelId(viewId[18]);
              const id = guild.id;
              const obj10 = { joinSource: constants.GAME_PROFILE_COMMUNITIES, loadId: viewId, openChannel: true };
              const startLurking = tmp28.startLurking;
              const items1 = [currentlySelectedChannelId2(viewId[19]).GAME_PROFILE_COMMUNITIES];
              c5 = 3;
              c6 = 1;
              const obj11 = { value: startLurking(id, {}, obj10, items1), done: false };
              return obj11;
            }
          }
        } else if (1 === c5) {
          c4 = 0;
          viewId = tmp62;
          const obj4 = channelId(viewId[20]);
          const result = obj4.ignoreJoinGuildRefused(viewId);
          c6 = 3;
          const obj12 = { value: undefined, done: true };
          return obj12;
        } else if (2 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj13 = { value, done: true };
            return obj13;
          } else {
            c6 = 3;
            const obj14 = { value: undefined, done: true };
            return obj14;
          }
        } else if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 0;
          c6 = 3;
          const obj = { value, done: true };
          return obj;
        } else {
          c4 = 0;
          currentlySelectedChannelId2 = currentlySelectedChannelId.getCurrentlySelectedChannelId(closure_130_1.id);
          if (null != currentlySelectedChannelId2) {
            closure_130_7(currentlySelectedChannelId2, channelId);
          }
          c6 = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp62) {
        if (0 === c4) {
          c6 = 3;
          throw tmp62;
        } else {
          c5 = 1;
        }
      }
    }
  }), items4);
  let obj2 = { guild: memo, presenceCount: guild.presenceCount, memberCount: guild.memberCount, buttonText: stringResult, onJoin: callback1 };
  const tmp6 = guild(viewId[21]);
  const intl = gameId(viewId[22]).intl;
  const string = intl.string;
  const t = gameId(viewId[22]).t;
  const tmp5 = closure_11;
  if (stateFromStores) {
    stringResult = string(t.KLOhbO);
  } else {
    stringResult = string(t.SKNnqq);
  }
  return tmp5(tmp6, obj2);
});
let result = size.fileFinishedImporting("modules/game_profile/native/profile_sections/communities/GameProfileCommunities.tsx");

export default function GameProfileCommunities(game) {
  let closeModal;
  let data;
  let filteredGuilds;
  let intl;
  let intl2;
  let isLoading;
  let items1;
  let items2;
  let mapped;
  let scrollY;
  let showLocaleFilter;
  let trackAction;
  let viewId;
  game = game.game;
  ({ viewId: importDefault, scrollY: dependencyMap, trackAction: _slicedToArray, closeModal: _asyncToGenerator } = game);
  let tmp = closure_13();
  ({ data, isLoading } = useGameProfileCommunitiesDefault(game.id));
  useGameProfileCommunitiesDefault(game.id);
  const tmp5 = useGameProfileCommunitiesLocaleFilterDefault(game.id, data);
  const locales = tmp5.locales;
  ({ filteredGuilds, showLocaleFilter } = tmp5);
  const items = [game.id, locales];
  const callback = locales.useCallback(() => {
    let obj2;
    const tmp = ActionSheetActionCreators;
    const showActionSheet = tmp.showActionSheet;
    const obj = { key: GameProfileCommunitiesLocaleFilterActionSheet.ACTION_SHEET_KEY, content: unpackModuleId(GameProfileCommunitiesLocaleFilterActionSheetDefault, obj2), stackingBehavior: "stack" };
    obj2 = { gameId: game.id, locales };
    showActionSheet(obj);
  }, items);
  if (isLoading) {
    isLoading = null == data || 0 === data.length;
    const tmp8 = null == data || 0 === data.length;
  }
  let obj = { style: tmp.container, children: items2 };
  let obj2 = { style: tmp.header, children: items1 };
  const obj3 = { variant: "heading-lg/semibold", color: "mobile-text-heading-primary", style: tmp.heading, children: intl.string(game(1114).t.r6bvTh) };
  const Heading = game(5619).Heading;
  intl = game(1114).intl;
  items1 = [closure_11(Heading, obj3), ];
  if (showLocaleFilter) {
    const obj4 = { size: "sm", variant: "secondary", icon: closure_11(game(9600).LanguageIcon, { size: "sm" }), accessibilityLabel: intl2.string(game(1114).t.OlOHDH), onPress: callback };
    const IconButton = tmp12(8020).IconButton;
    intl2 = tmp12(1114).intl;
    showLocaleFilter = tmp11(IconButton, obj4);
  }
  items1[1] = showLocaleFilter;
  items2 = [closure_12(View, obj2), ];
  const obj5 = { style: tmp.list, children: mapped };
  if (isLoading) {
    const tmp2Result = _modDef12;
    const rangeResult = tmp2Result.range(8);
    mapped = rangeResult.map((item) => {
      const obj = { animationDelayMs: item * game(dependencyMap[31]).SKELETON_CARD_ANIMATION_DELAY_MS };
      const GameProfileGuildCardSkeleton = game(dependencyMap[21]).GameProfileGuildCardSkeleton;
      return closure_1_11(GameProfileGuildCardSkeleton, obj, item);
    });
  } else {
    mapped = filteredGuilds.map((guild) => {
      const obj = { gameId: game.id, guild, viewId: importDefault, scrollY: dependencyMap, trackAction: _slicedToArray, closeModal: _asyncToGenerator };
      return unpackModuleId(closure_14, obj, guild.id);
    });
  }
  items2[1] = closure_11(View, obj5);
  return closure_12(View, obj);
};
