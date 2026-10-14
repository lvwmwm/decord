// Module ID: 9123
// Function ID: 9124
// Name: GameProfileCommunities
// Dependencies: [5, 19, 17, 2087, 2116, 8924, 1085, 21, 5096, 587, 558, 576, 2079, 504, 8883, 7058, 6884, 6925, 8889, 8919, 1126, 8957, 9124, 12, 8951, 8953, 2]

// Module 9123 (GameProfileCommunities)
import _modDef12 from "module_12" /* 12 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1085 */;
import GuildRecordUtils from "GuildRecordUtils" /* 2079 */;
import GameProfileConstants from "GameProfileConstants" /* 8924 */;
import GameProfileSectionDefault from "GameProfileSection" /* 8953 */;
import useGameProfileCommunitiesDefault from "useGameProfileCommunities" /* 9124 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import GuildStore from "GuildStore" /* 2087 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2116 */;
import createStyles_mod from "createStyles" /* 5096 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let obj2;
let obj3;
const View = react_native.View;
const MOBILE_GAME_PROFILE_MAX_WIDTH = GameProfileConstants.MOBILE_GAME_PROFILE_MAX_WIDTH;
const JoinGuildSources = Constants.JoinGuildSources;
const jsx = Fragment.jsx;
let createStyles = createStyles_mod;
let obj = { container: obj2, list: obj3 };
obj2 = { marginTop: nativeDefault.modules.mobile.SHEET_HANDLE_HEIGHT, padding: nativeDefault.space.PX_16, maxWidth: MOBILE_GAME_PROFILE_MAX_WIDTH, alignSelf: "center", width: "100%" };
createStyles = createStyles.createStyles;
obj3 = { gap: nativeDefault.space.PX_12 };
let closure_10 = createStyles(obj);
let memo = react.memo;
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_11 = memo(ReactCompilerGating.isReactCompilerEnabled() ? (function GameProfileCommunityCard(gameId) {
  let tmp6;
  let tmp8;
  let tmp9;
  let viewId;
  const tmp = gameId;
  const obj = gameId(viewId[11]);
  const cResult = obj.c(21);
  gameId = gameId.gameId;
  let guild = gameId.guild;
  viewId = gameId.viewId;
  const scrollY = gameId.scrollY;
  const trackAction = gameId.trackAction;
  const closeModal = gameId.closeModal;
  if (cResult[0] !== guild) {
    const tmpResult = tmp(viewId[12]);
    let result = tmpResult.fromClientDiscoverableGuild(guild);
    cResult[0] = guild;
    cResult[1] = result;
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [GuildStore];
    cResult[2] = items;
    tmp6 = items;
  } else {
    tmp6 = cResult[2];
  }
  if (cResult[3] !== guild.id) {
    class E {
      constructor() {
        guild = GuildStore.getGuild(guild.id);
        let joinedAt;
        if (guild != null) {
          joinedAt = guild.joinedAt;
        }
        return null != joinedAt;
      }
    }
    const items1 = [guild.id];
    cResult[3] = guild.id;
    cResult[4] = E;
    cResult[5] = items1;
    tmp9 = items1;
    tmp8 = E;
  } else {
    class E {
      constructor() {
        guild = GuildStore.getGuild(guild.id);
        let joinedAt;
        if (guild != null) {
          joinedAt = guild.joinedAt;
        }
        return null != joinedAt;
      }
    }
    tmp9 = cResult[5];
  }
  const tmpResult2 = tmp(viewId[13]);
  const stateFromStores = tmpResult2.useStateFromStores(tmp6, tmp8, tmp9);
  if (cResult[6] === closeModal) {
    class E {
      constructor() {
        guild = GuildStore.getGuild(guild.id);
        let joinedAt;
        if (guild != null) {
          joinedAt = guild.joinedAt;
        }
        return null != joinedAt;
      }
    }
  }
  let closure_0 = scrollY(function*() {
    let closure_2;
    let initialScrollOffset;
    let tmp13;
    let v1;
    let v3;
    let user = tmp;
    c4(initialScrollOffset(viewId[14]).GameProfileTrackActionActions.CommunityClicked, undefined, user.id);
    initialScrollOffset = c3.get();
    c5();
    const tmp48 = initialScrollOffset(viewId[15]);
    const id = user.id;
    const obj5 = { joinSource: constants.GAME_PROFILE_COMMUNITIES, loadId: tmp13, openChannel: true };
    const startLurking = tmp48.startLurking;
    const items = [guild(viewId[16]).GAME_PROFILE_COMMUNITIES];
    yield startLurking(id, {}, obj5, items);
    let setGameProfilePendingReturn = currentlySelectedChannelId.getCurrentlySelectedChannelId(user.id);
    tmp13 = setGameProfilePendingReturn;
    if (null != tmp13) {
      setGameProfilePendingReturn = guild(viewId[18]).setGameProfilePendingReturn;
      const obj8 = { gameId: setGameProfilePendingReturn, channelId: tmp13, initialScrollOffset, tab: initialScrollOffset(viewId[19]).GameProfileNavTab.COMMUNITIES, source: initialScrollOffset(viewId[14]).GameProfileSources.CommunityPreviewReturn };
      const tmp29 = guild(viewId[18]);
      const result1 = setGameProfilePendingReturn(obj8);
    }
    yield "IconComponent";
    user = tmp13;
    const obj2 = initialScrollOffset(viewId[17]);
    const result = obj2.ignoreJoinGuildRefused(user);
  });
  function t5() {
    return closure_0(...arguments);
  }
  cResult[6] = closeModal;
  cResult[7] = gameId;
  cResult[8] = guild.id;
  cResult[9] = scrollY;
  cResult[10] = trackAction;
  cResult[11] = viewId;
  cResult[12] = t5;
}) : (function GameProfileCommunityCard(gameId) {
  let stringResult;
  gameId = gameId.gameId;
  let guild = gameId.guild;
  const viewId = gameId.viewId;
  const scrollY = gameId.scrollY;
  const trackAction = gameId.trackAction;
  const closeModal = gameId.closeModal;
  let items = [guild];
  const memo = trackAction.useMemo(() => {
    const obj = GuildRecordUtils;
    return obj.fromClientDiscoverableGuild(guild);
  }, items);
  let obj = gameId(viewId[13]);
  const items1 = [GuildStore];
  const items2 = [guild.id];
  const stateFromStores = obj.useStateFromStores(items1, () => {
    guild = GuildStore.getGuild(guild.id);
    let joinedAt;
    if (guild != null) {
      joinedAt = guild.joinedAt;
    }
    return null != joinedAt;
  }, items2);
  const items3 = [guild.id, trackAction, closeModal, viewId, scrollY, gameId];
  const callback = trackAction.useCallback(scrollY(function*() {
    let c3;
    let c4;
    let c5;
    let closure_2;
    let setGameProfilePendingReturn;
    let channelId = tmp;
    trackAction(setGameProfilePendingReturn(viewId[14]).GameProfileTrackActionActions.CommunityClicked, undefined, guild.id);
    const initialScrollOffset = scrollY.get();
    closeModal();
    const tmp48 = setGameProfilePendingReturn(viewId[15]);
    const id = guild.id;
    const obj5 = { joinSource: constants.GAME_PROFILE_COMMUNITIES, loadId: viewId, openChannel: true };
    const startLurking = tmp48.startLurking;
    const items = [channelId(viewId[16]).GAME_PROFILE_COMMUNITIES];
    yield startLurking(id, {}, obj5, items);
    setGameProfilePendingReturn = currentlySelectedChannelId.getCurrentlySelectedChannelId(closure_129_1.id);
    channelId = setGameProfilePendingReturn;
    if (null != channelId) {
      setGameProfilePendingReturn = channelId(viewId[18]).setGameProfilePendingReturn;
      const obj8 = { gameId: closure_129_0, channelId, initialScrollOffset, tab: setGameProfilePendingReturn(viewId[19]).GameProfileNavTab.COMMUNITIES, source: setGameProfilePendingReturn(viewId[14]).GameProfileSources.CommunityPreviewReturn };
      const tmp29 = channelId(viewId[18]);
      const result1 = setGameProfilePendingReturn(obj8);
    }
    yield "IconComponent";
    const obj2 = setGameProfilePendingReturn(viewId[17]);
    const result = obj2.ignoreJoinGuildRefused(viewId);
  }), items3);
  const tmp4 = jsx;
  let obj2 = { guild: memo, presenceCount: guild.presenceCount, memberCount: guild.memberCount, buttonText: stringResult, onJoin: callback };
  const tmp5 = guild(viewId[21]);
  const intl = gameId(viewId[20]).intl;
  const string = intl.string;
  const t = gameId(viewId[20]).t;
  if (stateFromStores) {
    stringResult = string(t.KLOhbO);
  } else {
    stringResult = string(t.SKNnqq);
  }
  return tmp4(tmp5, obj2);
}));
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function GameProfileCommunities(game) {
  let data;
  let first;
  let isLoading;
  let mapped;
  let scrollY;
  const obj = game(scrollY[11]);
  const cResult = obj.c(15);
  game = game.game;
  const viewId = game.viewId;
  scrollY = game.scrollY;
  const trackAction = game.trackAction;
  const closeModal = game.closeModal;
  const tmp4 = closure_10();
  ({ data, isLoading } = viewId(scrollY[22])(game.id));
  viewId(scrollY[22])(game.id);
  if (isLoading) {
    isLoading = null == data || 0 === data.length;
    const tmp8 = null == data || 0 === data.length;
  }
  const container = tmp4.container;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(tmp2[20]).intl;
    const stringResult = intl.string(game(scrollY[20]).t.r6bvTh);
    cResult[0] = stringResult;
    first = stringResult;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === closeModal) {
    if (cResult[2] === game.id) {
      if (cResult[3] === data) {
        if (cResult[4] === scrollY) {
          if (cResult[5] === isLoading) {
            if (cResult[6] === trackAction) {
              let tmp11;
              if (cResult[7] === viewId) {
                tmp11 = cResult[8];
              }
              if (cResult[9] === tmp4.list) {
                let tmp14;
                if (cResult[10] === tmp11) {
                  tmp14 = cResult[11];
                }
                if (cResult[12] === tmp4.container) {
                  let tmp19;
                  if (cResult[13] === tmp14) {
                    tmp19 = cResult[14];
                  }
                  return tmp19;
                }
                const tmp22 = <View style={container}>{tmp14}</View>;
                cResult[12] = tmp4.container;
                cResult[13] = tmp14;
                cResult[14] = tmp22;
                tmp19 = tmp22;
              }
              viewId(scrollY[25]);
              const tmp18 = <tmp5Result title={first}>{null}</tmp5Result>;
              cResult[9] = tmp4.list;
              cResult[10] = tmp11;
              cResult[11] = tmp18;
              tmp14 = tmp18;
            }
          }
        }
      }
    }
  }
  if (isLoading) {
    const tmp5Result2 = viewId(scrollY[23]);
    const rangeResult = tmp5Result2.range(8);
    mapped = rangeResult.map((item) => {
      const GameProfileGuildCardSkeleton = game(scrollY[21]).GameProfileGuildCardSkeleton;
      return <GameProfileGuildCardSkeleton key={arg0} animationDelayMs={arg0 * game(scrollY[24]).SKELETON_CARD_ANIMATION_DELAY_MS} />;
    });
  } else {
    let items = data;
    if (data == null) {
      items = [];
    }
    mapped = items.map((guild) => <closure_11 key={arg0.id} gameId={game.id} guild={arg0} viewId={viewId} scrollY={scrollY} trackAction={trackAction} closeModal={closeModal} />);
  }
  cResult[1] = closeModal;
  cResult[2] = game.id;
  cResult[3] = data;
  cResult[4] = scrollY;
  cResult[5] = isLoading;
  cResult[6] = trackAction;
  cResult[7] = viewId;
  cResult[8] = mapped;
  tmp11 = mapped;
}) : (function GameProfileCommunities(game) {
  let closeModal;
  let data;
  let intl;
  let isLoading;
  let scrollY;
  let trackAction;
  let viewId;
  game = game.game;
  ({ viewId: importDefault, scrollY: dependencyMap, trackAction: _asyncToGenerator, closeModal: react } = game);
  const tmp = closure_10();
  ({ data, isLoading } = useGameProfileCommunitiesDefault(game.id));
  useGameProfileCommunitiesDefault(game.id);
  if (isLoading) {
    isLoading = null == data || 0 === data.length;
    const tmp6 = null == data || 0 === data.length;
  }
  ({ title: intl.string(game(1126).t.r6bvTh), children: null });
  GameProfileSectionDefault;
  intl = game(1126).intl;
  if (isLoading) {
    const tmp2Result2 = _modDef12;
    const rangeResult = tmp2Result2.range(8);
    let mapped = rangeResult.map((item) => {
      const GameProfileGuildCardSkeleton = game(dependencyMap[21]).GameProfileGuildCardSkeleton;
      return <GameProfileGuildCardSkeleton key={arg0} animationDelayMs={arg0 * game(dependencyMap[24]).SKELETON_CARD_ANIMATION_DELAY_MS} />;
    });
  } else {
    if (data == null) {
      data = [];
    }
    mapped = data.map((guild) => <closure_11 key={arg0.id} gameId={game.id} guild={arg0} viewId={importDefault} scrollY={dependencyMap} trackAction={_asyncToGenerator} closeModal={react} />);
  }
  return <View style={tmp.container}>{null}</View>;
});
let result = size.fileFinishedImporting("modules/game_profile/native/profile_sections/communities/GameProfileCommunities.tsx");

export default tmp4;
