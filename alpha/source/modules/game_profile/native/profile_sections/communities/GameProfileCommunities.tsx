// Module ID: 9475
// Function ID: 9476
// Name: GameProfileCommunities
// Dependencies: [32, 5, 19, 17, 4843, 4872, 9269, 1087, 4828, 21, 4969, 587, 558, 576, 4835, 504, 9220, 9264, 9214, 7304, 7432, 7262, 7303, 1128, 9310, 9476, 9479, 5196, 9481, 5220, 7943, 9483, 12, 9304, 2]

// Module 9475 (GameProfileCommunities)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1087 */;
import ChannelConstants from "ChannelConstants" /* 4828 */;
import GuildRecordUtils from "GuildRecordUtils" /* 4835 */;
import ActionSheetActionCreators from "ActionSheetActionCreators" /* 5196 */;
import GameProfileAnalyticUtils from "GameProfileAnalyticUtils" /* 9214 */;
import GameProfileActionCreatorsDefault from "GameProfileActionCreators" /* 9220 */;
import GameProfileNavTypes from "GameProfileNavTypes" /* 9264 */;
import GameProfileConstants from "GameProfileConstants" /* 9269 */;
import useGameProfileCommunitiesDefault from "useGameProfileCommunities" /* 9476 */;
import useGameProfileCommunitiesLocaleFilterDefault from "useGameProfileCommunitiesLocaleFilter" /* 9479 */;
import GameProfileCommunitiesLocaleFilterActionSheet from "GameProfileCommunitiesLocaleFilterActionSheet" /* 9481 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import GuildStore from "GuildStore" /* 4843 */;
import SelectedChannelStore from "SelectedChannelStore" /* 4872 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4969 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const GameProfileCommunitiesLocaleFilterActionSheetDefault = GameProfileCommunitiesLocaleFilterActionSheet;
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
let obj = { container: obj2, header: obj3, heading: { flexShrink: 1 }, list: obj4 };
obj2 = { marginTop: nativeDefault.modules.mobile.SHEET_HANDLE_HEIGHT, padding: nativeDefault.space.PX_16, maxWidth: MOBILE_GAME_PROFILE_MAX_WIDTH, alignSelf: "center", width: "100%", gap: nativeDefault.space.PX_8 };
createStyles = createStyles.createStyles;
obj3 = { flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: nativeDefault.space.PX_8, minHeight: nativeDefault.space.PX_32, paddingHorizontal: nativeDefault.space.PX_8 };
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
    let items = [P];
    cResult[2] = items;
    tmp6 = items;
  } else {
    tmp6 = cResult[2];
  }
  if (cResult[3] !== guild.id) {
    class G {
      constructor() {
        guild = GuildStore.getGuild(guild.id);
        let joinedAt;
        if (guild != null) {
          joinedAt = guild.joinedAt;
        }
        return null != joinedAt;
      }
    }
    let items1 = [guild.id];
    cResult[3] = guild.id;
    cResult[4] = G;
    cResult[5] = items1;
    tmp9 = items1;
    tmp8 = G;
  } else {
    class G {
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
  const tmpResult2 = tmp(viewId[15]);
  const stateFromStores = tmpResult2.useStateFromStores(tmp6, tmp8, tmp9);
  if (cResult[6] !== gameId) {
    class P {
      constructor(channelId, initialScrollOffset) {
        const obj = GameProfileActionCreatorsDefault;
        const obj2 = { gameId, channelId, initialScrollOffset, tab: GameProfileNavTypes.GameProfileNavTab.COMMUNITIES, source: GameProfileAnalyticUtils.GameProfileSources.CommunityPreviewReturn };
        const result = obj.setGameProfilePendingReturn(obj2);
      }
    }
    cResult[6] = gameId;
    cResult[7] = P;
  } else {
    class P {
      constructor(channelId, initialScrollOffset) {
        const obj = GameProfileActionCreatorsDefault;
        const obj2 = { gameId, channelId, initialScrollOffset, tab: GameProfileNavTypes.GameProfileNavTab.COMMUNITIES, source: GameProfileAnalyticUtils.GameProfileSources.CommunityPreviewReturn };
        const result = obj.setGameProfilePendingReturn(obj2);
      }
    }
  }
  P = tmp11;
  if (cResult[8] === closeModal) {
    class P {
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
  let container;
  let data;
  let filteredGuilds;
  let header;
  let heading;
  let intl2;
  let isLoading;
  let items;
  let items1;
  let scrollY;
  let showLocaleFilter;
  let tmp = game;
  let obj = game(scrollY[13]);
  const cResult = obj.c(28);
  game = game.game;
  const viewId = game.viewId;
  scrollY = game.scrollY;
  const trackAction = game.trackAction;
  const closeModal = game.closeModal;
  const tmp4 = closure_13();
  ({ data, isLoading } = viewId(scrollY[25])(game.id));
  viewId(scrollY[25])(game.id);
  const tmp7 = viewId(scrollY[26])(game.id, data);
  const locales = tmp7.locales;
  ({ filteredGuilds, showLocaleFilter } = tmp7);
  const tmp5 = viewId;
  if (cResult[0] === game.id) {
    let tmp8;
    let tmp12;
    let tmp14;
    if (cResult[1] === locales) {
      tmp8 = cResult[2];
    }
    if (isLoading) {
      isLoading = null == data || 0 === data.length;
      const tmp10 = null == data || 0 === data.length;
    }
    const _Symbol = Symbol;
    ({ container, header, heading } = tmp4);
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const intl = tmp(tmp2[23]).intl;
      const stringResult = intl.string(tmp(scrollY[23]).t.r6bvTh);
      cResult[3] = stringResult;
      tmp12 = stringResult;
    } else {
      tmp12 = cResult[3];
    }
    if (cResult[4] !== tmp4.heading) {
      let obj2 = { variant: "heading-lg/semibold", color: "mobile-text-heading-primary", style: heading, children: tmp12 };
      const tmp16 = closure_11(tmp(scrollY[29]).Heading, obj2);
      cResult[4] = tmp4.heading;
      cResult[5] = tmp16;
      tmp14 = tmp16;
    } else {
      tmp14 = cResult[5];
    }
    if (cResult[6] === tmp8) {
      let tmp17;
      if (cResult[7] === showLocaleFilter) {
        tmp17 = cResult[8];
      }
      if (cResult[9] === tmp4.header) {
        if (cResult[10] === tmp14) {
          let tmp20;
          let mapped;
          if (cResult[11] === tmp17) {
            tmp20 = cResult[12];
          }
          if (cResult[13] === closeModal) {
            if (cResult[14] === filteredGuilds) {
              if (cResult[15] === game.id) {
                if (cResult[16] === scrollY) {
                  if (cResult[17] === isLoading) {
                    if (cResult[18] === trackAction) {
                      let tmp24;
                      if (cResult[19] === viewId) {
                        tmp24 = cResult[20];
                      }
                      if (cResult[21] === tmp4.list) {
                        let tmp26;
                        if (cResult[22] === tmp24) {
                          tmp26 = cResult[23];
                        }
                        if (cResult[24] === tmp4.container) {
                          if (cResult[25] === tmp26) {
                            let tmp30;
                            if (cResult[26] === tmp20) {
                              tmp30 = cResult[27];
                            }
                            return tmp30;
                          }
                        }
                        const obj3 = { style: container, children: items };
                        items = [tmp20, tmp26];
                        const tmp33 = closure_12(View, obj3);
                        cResult[24] = tmp4.container;
                        cResult[25] = tmp26;
                        cResult[26] = tmp20;
                        cResult[27] = tmp33;
                        tmp30 = tmp33;
                      }
                      const obj4 = { style: tmp4.list, children: tmp24 };
                      const tmp29 = closure_11(View, obj4);
                      cResult[21] = tmp4.list;
                      cResult[22] = tmp24;
                      cResult[23] = tmp29;
                      tmp26 = tmp29;
                    }
                  }
                }
              }
            }
          }
          if (isLoading) {
            const tmp5Result = tmp5(scrollY[32]);
            const rangeResult = tmp5Result.range(8);
            mapped = rangeResult.map((item) => {
              const obj = { animationDelayMs: item * game(scrollY[33]).SKELETON_CARD_ANIMATION_DELAY_MS };
              const GameProfileGuildCardSkeleton = game(scrollY[24]).GameProfileGuildCardSkeleton;
              return closure_1_11(GameProfileGuildCardSkeleton, obj, item);
            });
          } else {
            mapped = filteredGuilds.map((guild) => {
              const obj = { gameId: game.id, guild, viewId, scrollY, trackAction, closeModal };
              return unpackModuleId(closure_14, obj, guild.id);
            });
          }
          cResult[13] = closeModal;
          cResult[14] = filteredGuilds;
          cResult[15] = game.id;
          cResult[16] = scrollY;
          cResult[17] = isLoading;
          cResult[18] = trackAction;
          cResult[19] = viewId;
          cResult[20] = mapped;
          tmp24 = mapped;
        }
      }
      const obj5 = { style: header, children: items1 };
      items1 = [tmp14, tmp17];
      const tmp23 = closure_12(View, obj5);
      cResult[9] = tmp4.header;
      cResult[10] = tmp14;
      cResult[11] = tmp17;
      cResult[12] = tmp23;
      tmp20 = tmp23;
    }
    let tmp18 = showLocaleFilter;
    if (tmp18) {
      const obj6 = { size: "sm", variant: "secondary", icon: closure_11(tmp(scrollY[31]).LanguageIcon, { size: "sm" }), accessibilityLabel: intl2.string(tmp(scrollY[23]).t.OlOHDH), onPress: tmp8 };
      const IconButton = tmp(tmp2[30]).IconButton;
      intl2 = tmp(tmp2[23]).intl;
      tmp18 = closure_11(IconButton, obj6);
    }
    cResult[6] = tmp8;
    cResult[7] = showLocaleFilter;
    cResult[8] = tmp18;
    tmp17 = tmp18;
  }
  const fn = function t() {
    let obj2;
    const tmp = ActionSheetActionCreators;
    const showActionSheet = tmp.showActionSheet;
    const obj = { key: GameProfileCommunitiesLocaleFilterActionSheet.ACTION_SHEET_KEY, content: unpackModuleId(GameProfileCommunitiesLocaleFilterActionSheetDefault, obj2), stackingBehavior: "stack" };
    obj2 = { gameId: game.id, locales };
    showActionSheet(obj);
  };
  cResult[0] = game.id;
  cResult[1] = locales;
  cResult[2] = fn;
  tmp8 = fn;
}) : (function GameProfileCommunities(game) {
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
  const obj3 = { variant: "heading-lg/semibold", color: "mobile-text-heading-primary", style: tmp.heading, children: intl.string(game(1128).t.r6bvTh) };
  const Heading = game(5220).Heading;
  intl = game(1128).intl;
  items1 = [closure_11(Heading, obj3), ];
  if (showLocaleFilter) {
    const obj4 = { size: "sm", variant: "secondary", icon: closure_11(game(9483).LanguageIcon, { size: "sm" }), accessibilityLabel: intl2.string(game(1128).t.OlOHDH), onPress: callback };
    const IconButton = tmp12(7943).IconButton;
    intl2 = tmp12(1128).intl;
    showLocaleFilter = tmp11(IconButton, obj4);
  }
  items1[1] = showLocaleFilter;
  items2 = [closure_12(View, obj2), ];
  const obj5 = { style: tmp.list, children: mapped };
  if (isLoading) {
    const tmp2Result = _modDef12;
    const rangeResult = tmp2Result.range(8);
    mapped = rangeResult.map((item) => {
      const obj = { animationDelayMs: item * game(dependencyMap[33]).SKELETON_CARD_ANIMATION_DELAY_MS };
      const GameProfileGuildCardSkeleton = game(dependencyMap[24]).GameProfileGuildCardSkeleton;
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
});
let result = size.fileFinishedImporting("modules/game_profile/native/profile_sections/communities/GameProfileCommunities.tsx");

export default tmp5;
