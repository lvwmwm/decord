// Module ID: 9348
// Function ID: 9349
// Name: GameProfileCommunities
// Dependencies: [32, 5, 19, 17, 2090, 2119, 9144, 1087, 2075, 21, 5153, 587, 558, 576, 2082, 504, 9109, 9139, 9103, 7142, 7275, 7100, 7141, 1128, 9182, 9349, 5149, 12, 9176, 2]

// Module 9348 (GameProfileCommunities)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1087 */;
import ChannelConstants from "ChannelConstants" /* 2075 */;
import GuildRecordUtils from "GuildRecordUtils" /* 2082 */;
import GameProfileAnalyticUtils from "GameProfileAnalyticUtils" /* 9103 */;
import GameProfileActionCreatorsDefault from "GameProfileActionCreators" /* 9109 */;
import GameProfileNavTypes from "GameProfileNavTypes" /* 9139 */;
import GameProfileConstants from "GameProfileConstants" /* 9144 */;
import useGameProfileCommunitiesDefault from "useGameProfileCommunities" /* 9349 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import GuildStore from "GuildStore" /* 2090 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2119 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5153 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let _require, c5, c6;

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
let obj = { container: obj2, header: obj3, list: obj4 };
obj2 = { marginTop: nativeDefault.modules.mobile.SHEET_HANDLE_HEIGHT, padding: nativeDefault.space.PX_16, maxWidth: MOBILE_GAME_PROFILE_MAX_WIDTH, alignSelf: "center", width: "100%", gap: nativeDefault.space.PX_8 };
createStyles = createStyles.createStyles;
obj3 = { justifyContent: "center", minHeight: nativeDefault.space.PX_32, paddingHorizontal: nativeDefault.space.PX_8 };
obj4 = { gap: nativeDefault.space.PX_12 };
let closure_13 = createStyles(obj);
let memo = react.memo;
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_14 = memo(ReactCompilerGating.isReactCompilerEnabled() ? (function GameProfileCommunityCard(gameId) {
  let tmp6;
  let tmp8;
  let tmp9;
  let viewId;
  const tmp = gameId;
  let obj = gameId(viewId[13]);
  const cResult = obj.c(24);
  gameId = gameId.gameId;
  let guild = gameId.guild;
  viewId = gameId.viewId;
  const scrollY = gameId.scrollY;
  const trackAction = gameId.trackAction;
  const closeModal = gameId.closeModal;
  if (cResult[0] !== guild) {
    const tmpResult = tmp(viewId[14]);
    let result = tmpResult.fromClientDiscoverableGuild(guild);
    cResult[0] = guild;
    cResult[1] = result;
    let tmp4 = result;
  } else {
    tmp4 = cResult[1];
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [A];
    cResult[2] = items;
    tmp6 = items;
  } else {
    tmp6 = cResult[2];
  }
  if (cResult[3] !== guild.id) {
    const fn = function p() {
      guild = GuildStore.getGuild(guild.id);
      let joinedAt;
      if (guild != null) {
        joinedAt = guild.joinedAt;
      }
      return null != joinedAt;
    };
    let items1 = [guild.id];
    cResult[3] = guild.id;
    cResult[4] = fn;
    cResult[5] = items1;
    tmp9 = items1;
    tmp8 = fn;
  } else {
    tmp8 = cResult[4];
    tmp9 = cResult[5];
  }
  const tmpResult2 = tmp(viewId[15]);
  const stateFromStores = tmpResult2.useStateFromStores(tmp6, tmp8, tmp9);
  if (cResult[6] !== gameId) {
    class A {
      constructor(channelId, initialScrollOffset) {
        const obj = GameProfileActionCreatorsDefault;
        const obj2 = { gameId, channelId, initialScrollOffset, tab: GameProfileNavTypes.GameProfileNavTab.COMMUNITIES, source: GameProfileAnalyticUtils.GameProfileSources.CommunityPreviewReturn };
        const result = obj.setGameProfilePendingReturn(obj2);
      }
    }
    cResult[6] = gameId;
    cResult[7] = A;
  } else {
    class A {
      constructor(channelId, initialScrollOffset) {
        const obj = GameProfileActionCreatorsDefault;
        const obj2 = { gameId, channelId, initialScrollOffset, tab: GameProfileNavTypes.GameProfileNavTab.COMMUNITIES, source: GameProfileAnalyticUtils.GameProfileSources.CommunityPreviewReturn };
        const result = obj.setGameProfilePendingReturn(obj2);
      }
    }
  }
  A = tmp11;
  if (cResult[8] === closeModal) {
    class A {
      constructor(channelId, initialScrollOffset) {
        const obj = GameProfileActionCreatorsDefault;
        const obj2 = { gameId, channelId, initialScrollOffset, tab: GameProfileNavTypes.GameProfileNavTab.COMMUNITIES, source: GameProfileAnalyticUtils.GameProfileSources.CommunityPreviewReturn };
        const result = obj.setGameProfilePendingReturn(obj2);
      }
    }
  }
  _require = trackAction(function*(arg0, value) {
    let closure_3;
    let v0;
    let v1;
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
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        let channelId;
        let user;
        let loadId;
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
            channelId = undefined;
            user = undefined;
            loadId = undefined;
            const obj5 = { communityGuildId: user.id };
            c4(channelId(viewId[18]).GameProfileTrackActionActions.CommunityClicked, obj5);
            value = tmp62.get();
            channelId = value;
            const tmp76 = c6;
            if (tmp76) {
              const obj8 = channelId(viewId[19]);
              const first = scrollY(obj8.getGuildTransitionRoute(user.id), 1)[0];
              const tmp43 = null == first || isStaticChannelRoute(first);
              if (!tmp43) {
                closure_1_7(first, value);
              }
              c5();
              const tmp51 = channelId(viewId[20]);
              const id2 = user.id;
              channelId = first;
              const startLurking2 = tmp51.startLurking;
              if (first == null) {
                channelId = undefined;
              }
              const obj6 = { channelId, joinSource: constants.GAME_PROFILE_COMMUNITIES, loadId, openChannel: true };
              const items = [];
              const obj7 = {};
              items[0] = guild(viewId[21]).GAME_PROFILE_COMMUNITIES;
              c5 = 2;
              c6 = 1;
              const obj9 = { value: startLurking2(id2, obj7, obj6, items), done: false };
              return obj9;
            } else {
              c5();
              c4 = 1;
              const tmp28 = channelId(viewId[20]);
              const id = user.id;
              const obj10 = { joinSource: constants.GAME_PROFILE_COMMUNITIES, loadId, openChannel: true };
              const startLurking = tmp28.startLurking;
              const items1 = [guild(viewId[21]).GAME_PROFILE_COMMUNITIES];
              c5 = 3;
              c6 = 1;
              const obj11 = { value: startLurking(id, {}, obj10, items1), done: false };
              return obj11;
            }
          }
        } else if (1 === c5) {
          c4 = 0;
          user = tmp62;
          const obj4 = channelId(viewId[22]);
          const result = obj4.ignoreJoinGuildRefused(user);
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
          loadId = currentlySelectedChannelId.getCurrentlySelectedChannelId(user.id);
          if (null != loadId) {
            closure_1_7(loadId, channelId);
          }
          c6 = 3;
          return { value: "IconComponent", done: null };
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
  });
  function t6() {
    return closure_0(...arguments);
  }
  cResult[8] = closeModal;
  cResult[9] = guild.id;
  cResult[10] = stateFromStores;
  cResult[11] = scrollY;
  cResult[12] = tmp11;
  cResult[13] = trackAction;
  cResult[14] = viewId;
  cResult[15] = t6;
}) : (function GameProfileCommunityCard(gameId) {
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
  let obj = gameId(viewId[15]);
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
        return { value: "IconComponent", done: null };
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
            trackAction(channelId(viewId[18]).GameProfileTrackActionActions.CommunityClicked, obj5);
            value = scrollY.get();
            channelId = value;
            const tmp76 = stateFromStores;
            if (tmp76) {
              const obj8 = channelId(viewId[19]);
              const first = tmp62(obj8.getGuildTransitionRoute(guild.id), 1)[0];
              const tmp43 = null == first || isStaticChannelRoute(first);
              if (!tmp43) {
                callback(first, value);
              }
              closeModal();
              const tmp51 = channelId(viewId[20]);
              const id2 = guild.id;
              channelId = first;
              const startLurking2 = tmp51.startLurking;
              if (first == null) {
                channelId = undefined;
              }
              const obj6 = { channelId, joinSource: constants.GAME_PROFILE_COMMUNITIES, loadId: viewId, openChannel: true };
              const items = [];
              const obj7 = {};
              items[0] = currentlySelectedChannelId2(viewId[21]).GAME_PROFILE_COMMUNITIES;
              c5 = 2;
              c6 = 1;
              const obj9 = { value: startLurking2(id2, obj7, obj6, items), done: false };
              return obj9;
            } else {
              closeModal();
              c4 = 1;
              const tmp28 = channelId(viewId[20]);
              const id = guild.id;
              const obj10 = { joinSource: constants.GAME_PROFILE_COMMUNITIES, loadId: viewId, openChannel: true };
              const startLurking = tmp28.startLurking;
              const items1 = [currentlySelectedChannelId2(viewId[21]).GAME_PROFILE_COMMUNITIES];
              c5 = 3;
              c6 = 1;
              const obj11 = { value: startLurking(id, {}, obj10, items1), done: false };
              return obj11;
            }
          }
        } else if (1 === c5) {
          c4 = 0;
          viewId = tmp62;
          const obj4 = channelId(viewId[22]);
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
          return { value: "IconComponent", done: null };
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
  const tmp6 = guild(viewId[24]);
  const intl = gameId(viewId[23]).intl;
  const string = intl.string;
  const t = gameId(viewId[23]).t;
  const tmp5 = closure_11;
  if (stateFromStores) {
    stringResult = string(t.KLOhbO);
  } else {
    stringResult = string(t.SKNnqq);
  }
  return tmp5(tmp6, obj2);
}));
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function GameProfileCommunities(game) {
  let data;
  let first;
  let intl;
  let isLoading;
  let items;
  let mapped;
  let scrollY;
  let tmp12;
  let obj = game(scrollY[13]);
  const cResult = obj.c(18);
  game = game.game;
  const viewId = game.viewId;
  scrollY = game.scrollY;
  const trackAction = game.trackAction;
  const closeModal = game.closeModal;
  const tmp4 = closure_13();
  ({ data, isLoading } = viewId(scrollY[25])(game.id));
  viewId(scrollY[25])(game.id);
  const tmp5 = viewId;
  if (isLoading) {
    isLoading = null == data || 0 === data.length;
    const tmp8 = null == data || 0 === data.length;
  }
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { variant: "heading-lg/semibold", color: "mobile-text-heading-primary", children: intl.string(game(scrollY[23]).t.r6bvTh) };
    const Heading = tmp(tmp2[26]).Heading;
    intl = tmp(tmp2[23]).intl;
    const tmp11 = closure_11(Heading, obj2);
    cResult[0] = tmp11;
    first = tmp11;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== tmp4.header) {
    const obj3 = { style: tmp4.header, children: first };
    const tmp15 = closure_11(View, obj3);
    cResult[1] = tmp4.header;
    cResult[2] = tmp15;
    tmp12 = tmp15;
  } else {
    tmp12 = cResult[2];
  }
  if (cResult[3] === closeModal) {
    if (cResult[4] === game.id) {
      if (cResult[5] === data) {
        if (cResult[6] === scrollY) {
          if (cResult[7] === isLoading) {
            if (cResult[8] === trackAction) {
              let tmp16;
              if (cResult[9] === viewId) {
                tmp16 = cResult[10];
              }
              if (cResult[11] === tmp4.list) {
                let tmp19;
                if (cResult[12] === tmp16) {
                  tmp19 = cResult[13];
                }
                if (cResult[14] === tmp4.container) {
                  if (cResult[15] === tmp12) {
                    let tmp23;
                    if (cResult[16] === tmp19) {
                      tmp23 = cResult[17];
                    }
                    return tmp23;
                  }
                }
                const obj4 = { style: tmp4.container, children: items };
                items = [tmp12, tmp19];
                const tmp26 = closure_12(View, obj4);
                cResult[14] = tmp4.container;
                cResult[15] = tmp12;
                cResult[16] = tmp19;
                cResult[17] = tmp26;
                tmp23 = tmp26;
              }
              const obj5 = { style: tmp4.list, children: tmp16 };
              const tmp22 = closure_11(View, obj5);
              cResult[11] = tmp4.list;
              cResult[12] = tmp16;
              cResult[13] = tmp22;
              tmp19 = tmp22;
            }
          }
        }
      }
    }
  }
  if (isLoading) {
    const tmp5Result = tmp5(scrollY[27]);
    const rangeResult = tmp5Result.range(8);
    mapped = rangeResult.map((item) => {
      const obj = { animationDelayMs: item * game(scrollY[28]).SKELETON_CARD_ANIMATION_DELAY_MS };
      const GameProfileGuildCardSkeleton = game(scrollY[24]).GameProfileGuildCardSkeleton;
      return closure_1_11(GameProfileGuildCardSkeleton, obj, item);
    });
  } else {
    let items1 = data;
    if (data == null) {
      items1 = [];
    }
    mapped = items1.map((guild) => {
      const obj = { gameId: game.id, guild, viewId, scrollY, trackAction, closeModal };
      return unpackModuleId(closure_14, obj, guild.id);
    });
  }
  cResult[3] = closeModal;
  cResult[4] = game.id;
  cResult[5] = data;
  cResult[6] = scrollY;
  cResult[7] = isLoading;
  cResult[8] = trackAction;
  cResult[9] = viewId;
  cResult[10] = mapped;
  tmp16 = mapped;
}) : (function GameProfileCommunities(game) {
  let Heading;
  let closeModal;
  let data;
  let intl;
  let isLoading;
  let items;
  let mapped;
  let obj3;
  let scrollY;
  let trackAction;
  let viewId;
  game = game.game;
  ({ viewId: importDefault, scrollY: dependencyMap, trackAction: _slicedToArray, closeModal: _asyncToGenerator } = game);
  const tmp = closure_13();
  ({ data, isLoading } = useGameProfileCommunitiesDefault(game.id));
  useGameProfileCommunitiesDefault(game.id);
  if (isLoading) {
    isLoading = null == data || 0 === data.length;
    const tmp6 = null == data || 0 === data.length;
  }
  let obj = { style: tmp.container, children: items };
  const obj2 = { style: tmp.header, children: closure_11(Heading, obj3) };
  obj3 = { variant: "heading-lg/semibold", color: "mobile-text-heading-primary", children: intl.string(game(1128).t.r6bvTh) };
  Heading = game(5149).Heading;
  intl = game(1128).intl;
  items = [closure_11(View, obj2), ];
  const obj4 = { style: tmp.list, children: mapped };
  const tmp7 = closure_12;
  const tmp9 = closure_11;
  if (isLoading) {
    const tmp2Result = _modDef12;
    const rangeResult = tmp2Result.range(8);
    mapped = rangeResult.map((item) => {
      const obj = { animationDelayMs: item * game(dependencyMap[28]).SKELETON_CARD_ANIMATION_DELAY_MS };
      const GameProfileGuildCardSkeleton = game(dependencyMap[24]).GameProfileGuildCardSkeleton;
      return closure_1_11(GameProfileGuildCardSkeleton, obj, item);
    });
  } else {
    if (data == null) {
      data = [];
    }
    mapped = data.map((guild) => {
      const obj = { gameId: game.id, guild, viewId: importDefault, scrollY: dependencyMap, trackAction: _slicedToArray, closeModal: _asyncToGenerator };
      return unpackModuleId(closure_14, obj, guild.id);
    });
  }
  items[1] = tmp9(View, obj4);
  return tmp7(View, obj);
});
let result = size.fileFinishedImporting("modules/game_profile/native/profile_sections/communities/GameProfileCommunities.tsx");

export default tmp5;
