// Module ID: 14032
// Function ID: 14033
// Name: GuildActionSheetTabItems
// Dependencies: [19, 2063, 4705, 2115, 1085, 21, 558, 576, 14014, 8003, 504, 8661, 8658, 1126, 5026, 587, 5105, 5054, 5964, 8106, 10311, 7866, 6798, 7083, 8613, 5963, 2]

// Module 14032 (GuildActionSheetTabItems)
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5054 */;
import AppAnalyticsUtilsDefault from "AppAnalyticsUtils" /* 5105 */;
import BoostingActionCreatorsAll from "BoostingActionCreators" /* 5964 */;
import NotificationSettingsModalActionCreatorsDefault from "NotificationSettingsModalActionCreators" /* 6798 */;
import GuildSettingsActionCreatorsDefault from "GuildSettingsActionCreators" /* 8613 */;
import utils_InstantInviteUtils from "utils/InstantInviteUtils" /* 8661 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 2063 */;
import GuildChannelStore from "GuildChannelStore" /* 4705 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2115 */;
import Constants from "Constants" /* 1085 */;
import Fragment from "Fragment" /* 21 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let importAll;

let c10;
let c9;
let closure_12;
let map1;
let metroImportAll;
let tmp3;
let unpackModuleId;
const instant_invite_InstantInviteUtils = tmp3(8658);
({ AnalyticEvents: metroImportAll, AnalyticsObjects: c9, AnalyticsSections: c10, InstantInviteSources: unpackModuleId } = Constants);
({ jsx: closure_12, jsxs: map1 } = Fragment);
const tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function GuildActionSheetTabItems(guild) {
  let closure_2;
  let first;
  let intl;
  let intl2;
  let items1;
  let stateFromStores;
  let tmp11;
  let tmp27;
  let tmp7;
  const tmp = guild;
  let obj = guild(576);
  const cResult = obj.c(32);
  guild = guild.guild;
  let obj2 = guild(14014);
  const canAccessSettings = obj2.useGuildActionSheetPermissions(guild).canAccessSettings;
  const total = stateFromStores(8003)(guild.id).total;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildChannelStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== guild.id) {
    class S {
      constructor() {
        return GuildChannelStore.getChannels(guild.id);
      }
    }
    cResult[1] = guild.id;
    cResult[2] = S;
    tmp7 = S;
  } else {
    class S {
      constructor() {
        return GuildChannelStore.getChannels(guild.id);
      }
    }
  }
  const tmpResult = tmp(504);
  stateFromStores = tmpResult.useStateFromStores(first, tmp7);
  if (cResult[3] === stateFromStores) {
    class S {
      constructor() {
        return GuildChannelStore.getChannels(guild.id);
      }
    }
    if (cResult[6] === stateFromStores) {
      let tmp12;
      let tmp19;
      class S {
        constructor() {
          return GuildChannelStore.getChannels(guild.id);
        }
      }
      importAll = tmp11;
      class G {
        constructor() {
          const channelId = SelectedChannelStore.getChannelId(guild.id);
          const obj = utils_InstantInviteUtils;
          let channel = ChannelStore.getChannel(obj.getInviteChannelId(channelId, stateFromStores));
          if (null == channel) {
            channel = GuildChannelStore.getDefaultChannel(tmp.id);
          }
          if (null != channel) {
            const tmp3Result = instant_invite_InstantInviteUtils;
            const result = tmp3Result.handleOpenInviteActionsheet(tmp, channel.id, tmp5, unpackModuleId.SERVER_PROFILE);
          }
        }
      }
      if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
        class S {
          constructor() {
            return GuildChannelStore.getChannels(guild.id);
          }
        }
        class G {
          constructor() {
            const channelId = SelectedChannelStore.getChannelId(guild.id);
            const obj = utils_InstantInviteUtils;
            let channel = ChannelStore.getChannel(obj.getInviteChannelId(channelId, stateFromStores));
            if (null == channel) {
              channel = GuildChannelStore.getDefaultChannel(tmp.id);
            }
            if (null != channel) {
              const tmp3Result = instant_invite_InstantInviteUtils;
              const result = tmp3Result.handleOpenInviteActionsheet(tmp, channel.id, tmp5, unpackModuleId.SERVER_PROFILE);
            }
          }
        }
        tmp12 = tmp13;
      } else {
        class S {
          constructor() {
            return GuildChannelStore.getChannels(guild.id);
          }
        }
      }
      if (cResult[10] !== total) {
        let formatToPlainStringResult;
        class S {
          constructor() {
            return GuildChannelStore.getChannels(guild.id);
          }
        }
        if (total > 0) {
          class S {
            constructor() {
              return GuildChannelStore.getChannels(guild.id);
            }
          }
          const formatToPlainString = tmp17.formatToPlainString;
          class G {
            constructor() {
              const channelId = SelectedChannelStore.getChannelId(guild.id);
              const obj = utils_InstantInviteUtils;
              let channel = ChannelStore.getChannel(obj.getInviteChannelId(channelId, stateFromStores));
              if (null == channel) {
                channel = GuildChannelStore.getDefaultChannel(tmp.id);
              }
              if (null != channel) {
                const tmp3Result = instant_invite_InstantInviteUtils;
                const result = tmp3Result.handleOpenInviteActionsheet(tmp, channel.id, tmp5, unpackModuleId.SERVER_PROFILE);
              }
            }
          }
          tmp18[0] = total;
          formatToPlainStringResult = formatToPlainString(tmp(1126).t["pob/cL"], tmp18);
        } else {
          class S {
            constructor() {
              return GuildChannelStore.getChannels(guild.id);
            }
          }
          const string = tmp15.string;
          class G {
            constructor() {
              const channelId = SelectedChannelStore.getChannelId(guild.id);
              const obj = utils_InstantInviteUtils;
              let channel = ChannelStore.getChannel(obj.getInviteChannelId(channelId, stateFromStores));
              if (null == channel) {
                channel = GuildChannelStore.getDefaultChannel(tmp.id);
              }
              if (null != channel) {
                const tmp3Result = instant_invite_InstantInviteUtils;
                const result = tmp3Result.handleOpenInviteActionsheet(tmp, channel.id, tmp5, unpackModuleId.SERVER_PROFILE);
              }
            }
          }
        }
        class G {
          constructor() {
            const channelId = SelectedChannelStore.getChannelId(guild.id);
            const obj = utils_InstantInviteUtils;
            let channel = ChannelStore.getChannel(obj.getInviteChannelId(channelId, stateFromStores));
            if (null == channel) {
              channel = GuildChannelStore.getDefaultChannel(tmp.id);
            }
            if (null != channel) {
              const tmp3Result = instant_invite_InstantInviteUtils;
              const result = tmp3Result.handleOpenInviteActionsheet(tmp, channel.id, tmp5, unpackModuleId.SERVER_PROFILE);
            }
          }
        }
        cResult[10] = total;
        cResult[11] = formatToPlainStringResult;
      } else {
        class S {
          constructor() {
            return GuildChannelStore.getChannels(guild.id);
          }
        }
      }
      const _Symbol = Symbol;
      if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
        class S {
          constructor() {
            return GuildChannelStore.getChannels(guild.id);
          }
        }
        let obj3 = { color: tmp4(587).unsafe_rawColors.GUILD_BOOSTING_PINK };
        class G {
          constructor() {
            const channelId = SelectedChannelStore.getChannelId(guild.id);
            const obj = utils_InstantInviteUtils;
            let channel = ChannelStore.getChannel(obj.getInviteChannelId(channelId, stateFromStores));
            if (null == channel) {
              channel = GuildChannelStore.getDefaultChannel(tmp.id);
            }
            if (null != channel) {
              const tmp3Result = instant_invite_InstantInviteUtils;
              const result = tmp3Result.handleOpenInviteActionsheet(tmp, channel.id, tmp5, unpackModuleId.SERVER_PROFILE);
            }
          }
        }
        const tmp21 = closure_12(tmp20, obj3);
        cResult[12] = tmp21;
        tmp19 = tmp21;
      } else {
        class S {
          constructor() {
            return GuildChannelStore.getChannels(guild.id);
          }
        }
      }
      if (cResult[13] !== guild.id) {
        class R {
          constructor() {
            let obj3;
            const obj2 = { location: obj3 };
            obj3 = { section: constants2.GUILD_POPOUT, object: constants.BOOST_GEM_ICON };
            const obj = AppAnalyticsUtilsDefault;
            obj.trackWithMetadata(metroImportAll.PREMIUM_GUILD_PROMOTION_OPENED, obj2);
            const obj4 = ActionSheetActionCreatorsDefault;
            obj4.hideActionSheet();
            const obj5 = BoostingActionCreatorsAll;
            obj5.openApplyBoostModal(guild.id);
          }
        }
        class G {
          constructor() {
            const channelId = SelectedChannelStore.getChannelId(guild.id);
            const obj = utils_InstantInviteUtils;
            let channel = ChannelStore.getChannel(obj.getInviteChannelId(channelId, stateFromStores));
            if (null == channel) {
              channel = GuildChannelStore.getDefaultChannel(tmp.id);
            }
            if (null != channel) {
              const tmp3Result = instant_invite_InstantInviteUtils;
              const result = tmp3Result.handleOpenInviteActionsheet(tmp, channel.id, tmp5, unpackModuleId.SERVER_PROFILE);
            }
          }
        }
        cResult[14] = R;
      } else {
        class R {
          constructor() {
            let obj3;
            const obj2 = { location: obj3 };
            obj3 = { section: constants2.GUILD_POPOUT, object: constants.BOOST_GEM_ICON };
            const obj = AppAnalyticsUtilsDefault;
            obj.trackWithMetadata(metroImportAll.PREMIUM_GUILD_PROMOTION_OPENED, obj2);
            const obj4 = ActionSheetActionCreatorsDefault;
            obj4.hideActionSheet();
            const obj5 = BoostingActionCreatorsAll;
            obj5.openApplyBoostModal(guild.id);
          }
        }
      }
      if (cResult[15] === tmp14) {
        class R {
          constructor() {
            let obj3;
            const obj2 = { location: obj3 };
            obj3 = { section: constants2.GUILD_POPOUT, object: constants.BOOST_GEM_ICON };
            const obj = AppAnalyticsUtilsDefault;
            obj.trackWithMetadata(metroImportAll.PREMIUM_GUILD_PROMOTION_OPENED, obj2);
            const obj4 = ActionSheetActionCreatorsDefault;
            obj4.hideActionSheet();
            const obj5 = BoostingActionCreatorsAll;
            obj5.openApplyBoostModal(guild.id);
          }
        }
        if (cResult[18] === tmp9) {
          class R {
            constructor() {
              let obj3;
              const obj2 = { location: obj3 };
              obj3 = { section: constants2.GUILD_POPOUT, object: constants.BOOST_GEM_ICON };
              const obj = AppAnalyticsUtilsDefault;
              obj.trackWithMetadata(metroImportAll.PREMIUM_GUILD_PROMOTION_OPENED, obj2);
              const obj4 = ActionSheetActionCreatorsDefault;
              obj4.hideActionSheet();
              const obj5 = BoostingActionCreatorsAll;
              obj5.openApplyBoostModal(guild.id);
            }
          }
          const _Symbol2 = Symbol;
          class G {
            constructor() {
              const channelId = SelectedChannelStore.getChannelId(guild.id);
              const obj = utils_InstantInviteUtils;
              let channel = ChannelStore.getChannel(obj.getInviteChannelId(channelId, stateFromStores));
              if (null == channel) {
                channel = GuildChannelStore.getDefaultChannel(tmp.id);
              }
              if (null != channel) {
                const tmp3Result = instant_invite_InstantInviteUtils;
                const result = tmp3Result.handleOpenInviteActionsheet(tmp, channel.id, tmp5, unpackModuleId.SERVER_PROFILE);
              }
            }
          }
          if (tmp29 === Symbol.for("react.memo_cache_sentinel")) {
            class R {
              constructor() {
                let obj3;
                const obj2 = { location: obj3 };
                obj3 = { section: constants2.GUILD_POPOUT, object: constants.BOOST_GEM_ICON };
                const obj = AppAnalyticsUtilsDefault;
                obj.trackWithMetadata(metroImportAll.PREMIUM_GUILD_PROMOTION_OPENED, obj2);
                const obj4 = ActionSheetActionCreatorsDefault;
                obj4.hideActionSheet();
                const obj5 = BoostingActionCreatorsAll;
                obj5.openApplyBoostModal(guild.id);
              }
            }
            const string2 = tmp31.string;
            class G {
              constructor() {
                const channelId = SelectedChannelStore.getChannelId(guild.id);
                const obj = utils_InstantInviteUtils;
                let channel = ChannelStore.getChannel(obj.getInviteChannelId(channelId, stateFromStores));
                if (null == channel) {
                  channel = GuildChannelStore.getDefaultChannel(tmp.id);
                }
                if (null != channel) {
                  const tmp3Result = instant_invite_InstantInviteUtils;
                  const result = tmp3Result.handleOpenInviteActionsheet(tmp, channel.id, tmp5, unpackModuleId.SERVER_PROFILE);
                }
              }
            }
            cResult[21] = tmp32;
          } else {
            class R {
              constructor() {
                let obj3;
                const obj2 = { location: obj3 };
                obj3 = { section: constants2.GUILD_POPOUT, object: constants.BOOST_GEM_ICON };
                const obj = AppAnalyticsUtilsDefault;
                obj.trackWithMetadata(metroImportAll.PREMIUM_GUILD_PROMOTION_OPENED, obj2);
                const obj4 = ActionSheetActionCreatorsDefault;
                obj4.hideActionSheet();
                const obj5 = BoostingActionCreatorsAll;
                obj5.openApplyBoostModal(guild.id);
              }
            }
          }
          if (cResult[22] !== guild.id) {
            class R {
              constructor() {
                let obj3;
                const obj2 = { location: obj3 };
                obj3 = { section: constants2.GUILD_POPOUT, object: constants.BOOST_GEM_ICON };
                const obj = AppAnalyticsUtilsDefault;
                obj.trackWithMetadata(metroImportAll.PREMIUM_GUILD_PROMOTION_OPENED, obj2);
                const obj4 = ActionSheetActionCreatorsDefault;
                obj4.hideActionSheet();
                const obj5 = BoostingActionCreatorsAll;
                obj5.openApplyBoostModal(guild.id);
              }
            }
            let obj4 = {
              variant: "secondary",
              label: null,
              icon: tmp4(7866),
              grow: true,
              onPress() {
                          const obj = ActionSheetActionCreatorsDefault;
                          obj.hideActionSheet();
                          const obj2 = NotificationSettingsModalActionCreatorsDefault;
                          obj2.open(guild.id);
                        }
            };
            class G {
              constructor() {
                const channelId = SelectedChannelStore.getChannelId(guild.id);
                const obj = utils_InstantInviteUtils;
                let channel = ChannelStore.getChannel(obj.getInviteChannelId(channelId, stateFromStores));
                if (null == channel) {
                  channel = GuildChannelStore.getDefaultChannel(tmp.id);
                }
                if (null != channel) {
                  const tmp3Result = instant_invite_InstantInviteUtils;
                  const result = tmp3Result.handleOpenInviteActionsheet(tmp, channel.id, tmp5, unpackModuleId.SERVER_PROFILE);
                }
              }
            }
            const IconButton = tmp(8106).IconButton;
            cResult[22] = guild.id;
            cResult[23] = closure_12(IconButton, obj4);
            const tmp34 = closure_12(IconButton, obj4);
          } else {
            class R {
              constructor() {
                let obj3;
                const obj2 = { location: obj3 };
                obj3 = { section: constants2.GUILD_POPOUT, object: constants.BOOST_GEM_ICON };
                const obj = AppAnalyticsUtilsDefault;
                obj.trackWithMetadata(metroImportAll.PREMIUM_GUILD_PROMOTION_OPENED, obj2);
                const obj4 = ActionSheetActionCreatorsDefault;
                obj4.hideActionSheet();
                const obj5 = BoostingActionCreatorsAll;
                obj5.openApplyBoostModal(guild.id);
              }
            }
          }
          if (cResult[24] === canAccessSettings) {
            class R {
              constructor() {
                let obj3;
                const obj2 = { location: obj3 };
                obj3 = { section: constants2.GUILD_POPOUT, object: constants.BOOST_GEM_ICON };
                const obj = AppAnalyticsUtilsDefault;
                obj.trackWithMetadata(metroImportAll.PREMIUM_GUILD_PROMOTION_OPENED, obj2);
                const obj4 = ActionSheetActionCreatorsDefault;
                obj4.hideActionSheet();
                const obj5 = BoostingActionCreatorsAll;
                obj5.openApplyBoostModal(guild.id);
              }
            }
            if (cResult[27] === tmp26) {
              class R {
                constructor() {
                  let obj3;
                  const obj2 = { location: obj3 };
                  obj3 = { section: constants2.GUILD_POPOUT, object: constants.BOOST_GEM_ICON };
                  const obj = AppAnalyticsUtilsDefault;
                  obj.trackWithMetadata(metroImportAll.PREMIUM_GUILD_PROMOTION_OPENED, obj2);
                  const obj4 = ActionSheetActionCreatorsDefault;
                  obj4.hideActionSheet();
                  const obj5 = BoostingActionCreatorsAll;
                  obj5.openApplyBoostModal(guild.id);
                }
              }
            }
            class G {
              constructor() {
                const channelId = SelectedChannelStore.getChannelId(guild.id);
                const obj = utils_InstantInviteUtils;
                let channel = ChannelStore.getChannel(obj.getInviteChannelId(channelId, stateFromStores));
                if (null == channel) {
                  channel = GuildChannelStore.getDefaultChannel(tmp.id);
                }
                if (null != channel) {
                  const tmp3Result = instant_invite_InstantInviteUtils;
                  const result = tmp3Result.handleOpenInviteActionsheet(tmp, channel.id, tmp5, unpackModuleId.SERVER_PROFILE);
                }
              }
            }
            let obj5 = { direction: "horizontal", style: tmp12, children: items1 };
            items1 = [tmp23, tmp26, tmp33, tmp35];
            cResult[27] = tmp26;
            cResult[28] = tmp33;
            cResult[29] = tmp35;
            cResult[30] = tmp23;
            cResult[31] = closure_13(tmp(5963).ButtonGroup, obj5);
            const tmp39 = closure_13(tmp(5963).ButtonGroup, obj5);
          }
          let tmp36 = canAccessSettings;
          if (tmp36) {
            class R {
              constructor() {
                let obj3;
                const obj2 = { location: obj3 };
                obj3 = { section: constants2.GUILD_POPOUT, object: constants.BOOST_GEM_ICON };
                const obj = AppAnalyticsUtilsDefault;
                obj.trackWithMetadata(metroImportAll.PREMIUM_GUILD_PROMOTION_OPENED, obj2);
                const obj4 = ActionSheetActionCreatorsDefault;
                obj4.hideActionSheet();
                const obj5 = BoostingActionCreatorsAll;
                obj5.openApplyBoostModal(guild.id);
              }
            }
            const obj6 = {
              variant: "secondary",
              label: intl2.string(tmp(1126).t["3D5yo/"]),
              icon: stateFromStores(7083),
              grow: true,
              onPress() {
                          const obj = ActionSheetActionCreatorsDefault;
                          obj.hideActionSheet();
                          const obj2 = GuildSettingsActionCreatorsDefault;
                          obj2.open(guild.id);
                        }
            };
            class G {
              constructor() {
                const channelId = SelectedChannelStore.getChannelId(guild.id);
                const obj = utils_InstantInviteUtils;
                let channel = ChannelStore.getChannel(obj.getInviteChannelId(channelId, stateFromStores));
                if (null == channel) {
                  channel = GuildChannelStore.getDefaultChannel(tmp.id);
                }
                if (null != channel) {
                  const tmp3Result = instant_invite_InstantInviteUtils;
                  const result = tmp3Result.handleOpenInviteActionsheet(tmp, channel.id, tmp5, unpackModuleId.SERVER_PROFILE);
                }
              }
            }
            intl2 = tmp(1126).intl;
            tmp36 = closure_12(tmp37, obj6);
          }
          cResult[24] = canAccessSettings;
          cResult[25] = guild.id;
          cResult[26] = tmp36;
        }
        class G {
          constructor() {
            const channelId = SelectedChannelStore.getChannelId(guild.id);
            const obj = utils_InstantInviteUtils;
            let channel = ChannelStore.getChannel(obj.getInviteChannelId(channelId, stateFromStores));
            if (null == channel) {
              channel = GuildChannelStore.getDefaultChannel(tmp.id);
            }
            if (null != channel) {
              const tmp3Result = instant_invite_InstantInviteUtils;
              const result = tmp3Result.handleOpenInviteActionsheet(tmp, channel.id, tmp5, unpackModuleId.SERVER_PROFILE);
            }
          }
        }
        if (tmp27) {
          class R {
            constructor() {
              let obj3;
              const obj2 = { location: obj3 };
              obj3 = { section: constants2.GUILD_POPOUT, object: constants.BOOST_GEM_ICON };
              const obj = AppAnalyticsUtilsDefault;
              obj.trackWithMetadata(metroImportAll.PREMIUM_GUILD_PROMOTION_OPENED, obj2);
              const obj4 = ActionSheetActionCreatorsDefault;
              obj4.hideActionSheet();
              const obj5 = BoostingActionCreatorsAll;
              obj5.openApplyBoostModal(guild.id);
            }
          }
          const obj7 = {
            variant: "secondary",
            label: intl.string(tmp(1126).t.VINpSK),
            icon: stateFromStores(10311),
            grow: true,
            onPress() {
                      const obj = ActionSheetActionCreatorsDefault;
                      obj.hideActionSheet();
                      tmp11();
                    }
          };
          class G {
            constructor() {
              const channelId = SelectedChannelStore.getChannelId(guild.id);
              const obj = utils_InstantInviteUtils;
              let channel = ChannelStore.getChannel(obj.getInviteChannelId(channelId, stateFromStores));
              if (null == channel) {
                channel = GuildChannelStore.getDefaultChannel(tmp.id);
              }
              if (null != channel) {
                const tmp3Result = instant_invite_InstantInviteUtils;
                const result = tmp3Result.handleOpenInviteActionsheet(tmp, channel.id, tmp5, unpackModuleId.SERVER_PROFILE);
              }
            }
          }
          intl = tmp(1126).intl;
          tmp27 = closure_12(tmp28, obj7);
        }
        cResult[18] = tmp9;
        cResult[19] = tmp11;
        cResult[20] = tmp27;
      }
      const obj8 = { variant: "secondary", label: tmp14, icon: tmp19, grow: true, onPress: tmp22 };
      cResult[15] = tmp14;
      cResult[16] = tmp22;
      cResult[17] = closure_12(tmp(8106).IconButton, obj8);
      const tmp25 = closure_12(tmp(8106).IconButton, obj8);
    }
    class G {
      constructor() {
        const channelId = SelectedChannelStore.getChannelId(guild.id);
        const obj = utils_InstantInviteUtils;
        let channel = ChannelStore.getChannel(obj.getInviteChannelId(channelId, stateFromStores));
        if (null == channel) {
          channel = GuildChannelStore.getDefaultChannel(tmp.id);
        }
        if (null != channel) {
          const tmp3Result = instant_invite_InstantInviteUtils;
          const result = tmp3Result.handleOpenInviteActionsheet(tmp, channel.id, tmp5, unpackModuleId.SERVER_PROFILE);
        }
      }
    }
    cResult[6] = stateFromStores;
    cResult[7] = guild;
    cResult[8] = G;
    tmp11 = G;
  }
  const tmpResult2 = tmp(8661);
  const shouldRenderInviteResult = tmpResult2.shouldRenderInvite(stateFromStores, guild);
  cResult[3] = stateFromStores;
  cResult[4] = guild;
  cResult[5] = shouldRenderInviteResult;
}) : (function GuildActionSheetTabItems(guild) {
  let BoostGemIcon;
  let formatToPlainStringResult;
  let intl3;
  let intl4;
  let intl5;
  let items2;
  let obj7;
  guild = guild.guild;
  let stateFromStores;
  const tmp = guild;
  let obj = guild(14014);
  let canAccessSettings = obj.useGuildActionSheetPermissions(guild).canAccessSettings;
  let tmp3 = stateFromStores;
  const total = stateFromStores(8003)(guild.id).total;
  let obj2 = guild(504);
  const items = [GuildChannelStore];
  stateFromStores = obj2.useStateFromStores(items, () => GuildChannelStore.getChannels(guild.id));
  let obj3 = guild(8661);
  let shouldRenderInviteResult = obj3.shouldRenderInvite(stateFromStores, guild);
  const items1 = [stateFromStores, guild];
  let closure_2 = react.useCallback(() => {
    const channelId = SelectedChannelStore.getChannelId(guild.id);
    const obj = utils_InstantInviteUtils;
    let channel = ChannelStore.getChannel(obj.getInviteChannelId(channelId, stateFromStores));
    if (null == channel) {
      channel = GuildChannelStore.getDefaultChannel(tmp.id);
    }
    if (null != channel) {
      const tmp3Result = instant_invite_InstantInviteUtils;
      const result = tmp3Result.handleOpenInviteActionsheet(tmp, channel.id, tmp5, unpackModuleId.SERVER_PROFILE);
    }
  }, items1);
  let obj4 = { direction: "horizontal", style: { flexWrap: "wrap" }, children: items2 };
  const ButtonGroup = guild(5963).ButtonGroup;
  const IconButton = guild(8106).IconButton;
  const tmp6 = closure_13;
  if (total > 0) {
    const intl2 = tmp(1126).intl;
    let obj5 = { subscriptions: total };
    formatToPlainStringResult = intl2.formatToPlainString(tmp(1126).t["pob/cL"], obj5);
  } else {
    const intl = tmp(1126).intl;
    formatToPlainStringResult = intl.string(tmp(1126).t.Uj0md3);
  }
  const obj6 = {
    variant: "secondary",
    label: formatToPlainStringResult,
    icon: closure_12(BoostGemIcon, obj7),
    grow: true,
    onPress() {
      let obj3;
      const obj2 = { location: obj3 };
      obj3 = { section: constants2.GUILD_POPOUT, object: constants.BOOST_GEM_ICON };
      const obj = AppAnalyticsUtilsDefault;
      obj.trackWithMetadata(metroImportAll.PREMIUM_GUILD_PROMOTION_OPENED, obj2);
      const obj4 = ActionSheetActionCreatorsDefault;
      obj4.hideActionSheet();
      const obj5 = BoostingActionCreatorsAll;
      obj5.openApplyBoostModal(guild.id);
    }
  };
  obj7 = { color: tmp3(587).unsafe_rawColors.GUILD_BOOSTING_PINK };
  BoostGemIcon = tmp(5026).BoostGemIcon;
  items2 = [tmp7(IconButton, obj6), , , ];
  if (shouldRenderInviteResult) {
    const obj8 = {
      variant: "secondary",
      label: intl3.string(tmp(1126).t.VINpSK),
      icon: tmp3(10311),
      grow: true,
      onPress() {
          const obj = ActionSheetActionCreatorsDefault;
          obj.hideActionSheet();
          closure_2();
        }
    };
    const IconButton2 = tmp(8106).IconButton;
    intl3 = tmp(1126).intl;
    shouldRenderInviteResult = tmp7(IconButton2, obj8);
  }
  items2[1] = shouldRenderInviteResult;
  const obj9 = {
    variant: "secondary",
    label: intl4.string(tmp(1126).t.HcoRu0),
    icon: tmp3(7866),
    grow: true,
    onPress() {
      const obj = ActionSheetActionCreatorsDefault;
      obj.hideActionSheet();
      const obj2 = NotificationSettingsModalActionCreatorsDefault;
      obj2.open(guild.id);
    }
  };
  const IconButton3 = tmp(8106).IconButton;
  intl4 = tmp(1126).intl;
  items2[2] = closure_12(IconButton3, obj9);
  if (canAccessSettings) {
    const obj10 = {
      variant: "secondary",
      label: intl5.string(tmp(1126).t["3D5yo/"]),
      icon: tmp3(7083),
      grow: true,
      onPress() {
          const obj = ActionSheetActionCreatorsDefault;
          obj.hideActionSheet();
          const obj2 = GuildSettingsActionCreatorsDefault;
          obj2.open(guild.id);
        }
    };
    const IconButton4 = tmp(8106).IconButton;
    intl5 = tmp(1126).intl;
    canAccessSettings = tmp7(IconButton4, obj10);
  }
  items2[3] = canAccessSettings;
  return tmp6(ButtonGroup, obj4);
});
let result = size.fileFinishedImporting("modules/guild_action_sheet/native/components/GuildActionSheetTabItems.tsx");

export default tmp4;
