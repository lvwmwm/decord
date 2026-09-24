// Module ID: 14282
// Function ID: 14283
// Name: GuildActionSheetTabItems
// Dependencies: [19, 2045, 2100, 2099, 1078, 21, 558, 568, 14270, 4699, 504, 10097, 10094, 1119, 9519, 580, 4970, 4757, 5685, 8210, 10324, 8244, 7398, 7657, 9865, 5684, 2]

// Module 14282 (GuildActionSheetTabItems)
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4757 */;
import AppAnalyticsUtilsDefault from "AppAnalyticsUtils" /* 4970 */;
import actions_BoostingActionCreatorsAll from "actions/BoostingActionCreators" /* 5685 */;
import NotificationSettingsModalActionCreatorsDefault from "NotificationSettingsModalActionCreators" /* 7398 */;
import GuildSettingsActionCreatorsDefault from "GuildSettingsActionCreators" /* 9865 */;
import instant_invite_InstantInviteUtils from "instant_invite/InstantInviteUtils" /* 10094 */;
import utils_InstantInviteUtils from "utils/InstantInviteUtils" /* 10097 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import GuildChannelStore from "GuildChannelStore" /* 2100 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2099 */;

require = fn;
const Constants = fn(1078);
({ AnalyticEvents: closure_8, AnalyticsObjects: closure_9, AnalyticsSections: c10, InstantInviteSources: closure_11 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_12, jsxs: map1 } = jsxProd);
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_action_sheet/native/components/GuildActionSheetTabItems.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((guild) => {
  const cResult = guild(568).c(32);
  guild = guild.guild;
  let obj = guild(568);
  const canAccessSettings = guild(14270).useGuildActionSheetPermissions(guild).canAccessSettings;
  const total = stateFromStores(4699)(guild.id).total;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildChannelStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== guild.id) {
    const fn = function _() {
      return GuildChannelStore.getChannels(guild.id);
    };
    cResult[1] = guild.id;
    cResult[2] = fn;
    let tmp7 = fn;
  } else {
    tmp7 = cResult[2];
  }
  let obj2 = guild(14270);
  stateFromStores = guild(504).useStateFromStores(first, tmp7);
  if (cResult[3] === stateFromStores) {
    if (cResult[4] === guild) {
      let tmp9 = cResult[5];
    }
    if (cResult[6] === stateFromStores) {
      if (cResult[7] === guild) {
        let tmp11 = cResult[8];
      }
      importAll = tmp11;
      const _Symbol = Symbol;
      if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
        let obj3 = { flexWrap: "wrap" };
        cResult[9] = obj3;
        let tmp12 = obj3;
      } else {
        tmp12 = cResult[9];
      }
      if (cResult[10] !== total) {
        if (total > 0) {
          const intl2 = tmp(1119).intl;
          let obj4 = { subscriptions: total };
          let formatToPlainStringResult = intl2.formatToPlainString(tmp(1119).t["pob/cL"], obj4);
        } else {
          const intl = tmp(1119).intl;
          formatToPlainStringResult = intl.string(tmp(1119).t.Uj0md3);
        }
        cResult[10] = total;
        cResult[11] = formatToPlainStringResult;
      } else {
        const _Symbol2 = Symbol;
        if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
          const obj5 = { color: tmp4(580).unsafe_rawColors.GUILD_BOOSTING_PINK };
          const tmp18 = closure_12(tmp(9519).BoostGemIcon, obj5);
          cResult[12] = tmp18;
          let tmp16 = tmp18;
        } else {
          tmp16 = cResult[12];
        }
        if (cResult[13] !== guild.id) {
          class R {
            constructor() {
              obj = closure_1(closure_3[16]);
              obj1 = { location: null };
              obj6 = { section: AnalyticsSections.GUILD_POPOUT, object: AnalyticsObjects.BOOST_GEM_ICON };
              obj1.location = obj6;
              trackWithMetadataResult = obj.trackWithMetadata(AnalyticEvents.PREMIUM_GUILD_PROMOTION_OPENED, obj1);
              obj4 = closure_1(closure_3[17]);
              hideActionSheetResult = obj4.hideActionSheet();
              obj5 = closure_2(closure_3[18]);
              openApplyBoostModalResult = obj5.openApplyBoostModal(guild.id);
              return;
            }
          }
          cResult[13] = guild.id;
          cResult[14] = R;
        } else {
          class R {
            constructor() {
              obj = closure_1(closure_3[16]);
              obj1 = { location: null };
              obj6 = { section: AnalyticsSections.GUILD_POPOUT, object: AnalyticsObjects.BOOST_GEM_ICON };
              obj1.location = obj6;
              trackWithMetadataResult = obj.trackWithMetadata(AnalyticEvents.PREMIUM_GUILD_PROMOTION_OPENED, obj1);
              obj4 = closure_1(closure_3[17]);
              hideActionSheetResult = obj4.hideActionSheet();
              obj5 = closure_2(closure_3[18]);
              openApplyBoostModalResult = obj5.openApplyBoostModal(guild.id);
              return;
            }
          }
        }
        if (cResult[15] === cResult[11]) {
          class R {
            constructor() {
              obj = closure_1(closure_3[16]);
              obj1 = { location: null };
              obj6 = { section: AnalyticsSections.GUILD_POPOUT, object: AnalyticsObjects.BOOST_GEM_ICON };
              obj1.location = obj6;
              trackWithMetadataResult = obj.trackWithMetadata(AnalyticEvents.PREMIUM_GUILD_PROMOTION_OPENED, obj1);
              obj4 = closure_1(closure_3[17]);
              hideActionSheetResult = obj4.hideActionSheet();
              obj5 = closure_2(closure_3[18]);
              openApplyBoostModalResult = obj5.openApplyBoostModal(guild.id);
              return;
            }
          }
          if (cResult[18] === tmp9) {
            class R {
              constructor() {
                obj = closure_1(closure_3[16]);
                obj1 = { location: null };
                obj6 = { section: AnalyticsSections.GUILD_POPOUT, object: AnalyticsObjects.BOOST_GEM_ICON };
                obj1.location = obj6;
                trackWithMetadataResult = obj.trackWithMetadata(AnalyticEvents.PREMIUM_GUILD_PROMOTION_OPENED, obj1);
                obj4 = closure_1(closure_3[17]);
                hideActionSheetResult = obj4.hideActionSheet();
                obj5 = closure_2(closure_3[18]);
                openApplyBoostModalResult = obj5.openApplyBoostModal(guild.id);
                return;
              }
            }
            const _Symbol3 = Symbol;
            if (cResult[21] === Symbol.for("react.memo_cache_sentinel")) {
              class R {
                constructor() {
                  obj = closure_1(closure_3[16]);
                  obj1 = { location: null };
                  obj6 = { section: AnalyticsSections.GUILD_POPOUT, object: AnalyticsObjects.BOOST_GEM_ICON };
                  obj1.location = obj6;
                  trackWithMetadataResult = obj.trackWithMetadata(AnalyticEvents.PREMIUM_GUILD_PROMOTION_OPENED, obj1);
                  obj4 = closure_1(closure_3[17]);
                  hideActionSheetResult = obj4.hideActionSheet();
                  obj5 = closure_2(closure_3[18]);
                  openApplyBoostModalResult = obj5.openApplyBoostModal(guild.id);
                  return;
                }
              }
              const stringResult = obj10.string(tmp(1119).t.HcoRu0);
              cResult[21] = stringResult;
              const tmp25 = stringResult;
            } else {
              class R {
                constructor() {
                  obj = closure_1(closure_3[16]);
                  obj1 = { location: null };
                  obj6 = { section: AnalyticsSections.GUILD_POPOUT, object: AnalyticsObjects.BOOST_GEM_ICON };
                  obj1.location = obj6;
                  trackWithMetadataResult = obj.trackWithMetadata(AnalyticEvents.PREMIUM_GUILD_PROMOTION_OPENED, obj1);
                  obj4 = closure_1(closure_3[17]);
                  hideActionSheetResult = obj4.hideActionSheet();
                  obj5 = closure_2(closure_3[18]);
                  openApplyBoostModalResult = obj5.openApplyBoostModal(guild.id);
                  return;
                }
              }
            }
            if (cResult[22] !== guild.id) {
              class R {
                constructor() {
                  obj = closure_1(closure_3[16]);
                  obj1 = { location: null };
                  obj6 = { section: AnalyticsSections.GUILD_POPOUT, object: AnalyticsObjects.BOOST_GEM_ICON };
                  obj1.location = obj6;
                  trackWithMetadataResult = obj.trackWithMetadata(AnalyticEvents.PREMIUM_GUILD_PROMOTION_OPENED, obj1);
                  obj4 = closure_1(closure_3[17]);
                  hideActionSheetResult = obj4.hideActionSheet();
                  obj5 = closure_2(closure_3[18]);
                  openApplyBoostModalResult = obj5.openApplyBoostModal(guild.id);
                  return;
                }
              }
              const obj6 = {
                variant: "secondary",
                label: tmp25,
                icon: tmp4(8244),
                grow: true,
                onPress() {
                              ActionSheetActionCreatorsDefault.hideActionSheet();
                              NotificationSettingsModalActionCreatorsDefault.open(guild.id);
                            }
              };
              const tmp28 = closure_12(tmp(8210).IconButton, obj6);
              cResult[22] = guild.id;
              cResult[23] = tmp28;
            } else {
              class R {
                constructor() {
                  obj = closure_1(closure_3[16]);
                  obj1 = { location: null };
                  obj6 = { section: AnalyticsSections.GUILD_POPOUT, object: AnalyticsObjects.BOOST_GEM_ICON };
                  obj1.location = obj6;
                  trackWithMetadataResult = obj.trackWithMetadata(AnalyticEvents.PREMIUM_GUILD_PROMOTION_OPENED, obj1);
                  obj4 = closure_1(closure_3[17]);
                  hideActionSheetResult = obj4.hideActionSheet();
                  obj5 = closure_2(closure_3[18]);
                  openApplyBoostModalResult = obj5.openApplyBoostModal(guild.id);
                  return;
                }
              }
            }
            if (cResult[24] === canAccessSettings) {
              class R {
                constructor() {
                  obj = closure_1(closure_3[16]);
                  obj1 = { location: null };
                  obj6 = { section: AnalyticsSections.GUILD_POPOUT, object: AnalyticsObjects.BOOST_GEM_ICON };
                  obj1.location = obj6;
                  trackWithMetadataResult = obj.trackWithMetadata(AnalyticEvents.PREMIUM_GUILD_PROMOTION_OPENED, obj1);
                  obj4 = closure_1(closure_3[17]);
                  hideActionSheetResult = obj4.hideActionSheet();
                  obj5 = closure_2(closure_3[18]);
                  openApplyBoostModalResult = obj5.openApplyBoostModal(guild.id);
                  return;
                }
              }
              if (cResult[27] === tmp23) {
                class R {
                  constructor() {
                    obj = closure_1(closure_3[16]);
                    obj1 = { location: null };
                    obj6 = { section: AnalyticsSections.GUILD_POPOUT, object: AnalyticsObjects.BOOST_GEM_ICON };
                    obj1.location = obj6;
                    trackWithMetadataResult = obj.trackWithMetadata(AnalyticEvents.PREMIUM_GUILD_PROMOTION_OPENED, obj1);
                    obj4 = closure_1(closure_3[17]);
                    hideActionSheetResult = obj4.hideActionSheet();
                    obj5 = closure_2(closure_3[18]);
                    openApplyBoostModalResult = obj5.openApplyBoostModal(guild.id);
                    return;
                  }
                }
              }
              const obj7 = { direction: "horizontal", style: tmp12, children: null };
              const items1 = [tmp20, tmp23, tmp27, tmp29];
              obj7.children = items1;
              const tmp33 = closure_13(tmp(5684).ButtonGroup, obj7);
              cResult[27] = tmp23;
              cResult[28] = tmp27;
              cResult[29] = tmp29;
              cResult[30] = tmp20;
              cResult[31] = tmp33;
            }
            let tmp30 = canAccessSettings;
            if (canAccessSettings) {
              class R {
                constructor() {
                  obj = closure_1(closure_3[16]);
                  obj1 = { location: null };
                  obj6 = { section: AnalyticsSections.GUILD_POPOUT, object: AnalyticsObjects.BOOST_GEM_ICON };
                  obj1.location = obj6;
                  trackWithMetadataResult = obj.trackWithMetadata(AnalyticEvents.PREMIUM_GUILD_PROMOTION_OPENED, obj1);
                  obj4 = closure_1(closure_3[17]);
                  hideActionSheetResult = obj4.hideActionSheet();
                  obj5 = closure_2(closure_3[18]);
                  openApplyBoostModalResult = obj5.openApplyBoostModal(guild.id);
                  return;
                }
              }
              const obj8 = { variant: "secondary", label: null, icon: null, grow: true, onPress: null };
              const intl4 = tmp(1119).intl;
              obj8.label = intl4.string(tmp(1119).t["3D5yo/"]);
              obj8.icon = tmp4(7657);
              obj8.onPress = function onPress() {
                ActionSheetActionCreatorsDefault.hideActionSheet();
                GuildSettingsActionCreatorsDefault.open(guild.id);
              };
              tmp30 = closure_12(tmp(8210).IconButton, obj8);
            }
            cResult[24] = canAccessSettings;
            cResult[25] = guild.id;
            cResult[26] = tmp30;
          }
          let tmp24 = tmp9;
          if (tmp9) {
            class R {
              constructor() {
                obj = closure_1(closure_3[16]);
                obj1 = { location: null };
                obj6 = { section: AnalyticsSections.GUILD_POPOUT, object: AnalyticsObjects.BOOST_GEM_ICON };
                obj1.location = obj6;
                trackWithMetadataResult = obj.trackWithMetadata(AnalyticEvents.PREMIUM_GUILD_PROMOTION_OPENED, obj1);
                obj4 = closure_1(closure_3[17]);
                hideActionSheetResult = obj4.hideActionSheet();
                obj5 = closure_2(closure_3[18]);
                openApplyBoostModalResult = obj5.openApplyBoostModal(guild.id);
                return;
              }
            }
            const obj9 = { variant: "secondary", label: null, icon: null, grow: true, onPress: null };
            const intl3 = tmp(1119).intl;
            obj9.label = intl3.string(tmp(1119).t.VINpSK);
            obj9.icon = tmp4(10324);
            obj9.onPress = function onPress() {
              ActionSheetActionCreatorsDefault.hideActionSheet();
              closure_2();
            };
            tmp24 = closure_12(tmp(8210).IconButton, obj9);
          }
          cResult[18] = tmp9;
          cResult[19] = tmp11;
          cResult[20] = tmp24;
        }
        const obj11 = { variant: "secondary", label: cResult[11], icon: tmp16, grow: true, onPress: tmp19 };
        const tmp22 = closure_12(tmp(8210).IconButton, obj11);
        cResult[15] = cResult[11];
        cResult[16] = tmp19;
        cResult[17] = tmp22;
      }
    }
    const fn2 = function f() {
      const channelId = SelectedChannelStore.getChannelId(guild.id);
      let channel = ChannelStore.getChannel(utils_InstantInviteUtils.getInviteChannelId(channelId, stateFromStores));
      if (null == channel) {
        channel = GuildChannelStore.getDefaultChannel(tmp.id);
      }
      if (null != channel) {
        const tmp3Result = instant_invite_InstantInviteUtils;
        const result = tmp3Result.handleOpenInviteActionsheet(tmp, channel.id, tmp5, constants4.SERVER_PROFILE);
      }
    };
    cResult[6] = stateFromStores;
    cResult[7] = guild;
    cResult[8] = fn2;
    tmp11 = fn2;
  }
  const tmpResult = guild(504);
  const shouldRenderInviteResult = guild(10097).shouldRenderInvite(stateFromStores, guild);
  cResult[3] = stateFromStores;
  cResult[4] = guild;
  cResult[5] = shouldRenderInviteResult;
  tmp9 = shouldRenderInviteResult;
}) : ((guild) => {
  guild = guild.guild;
  let stateFromStores;
  let canAccessSettings = guild(14270).useGuildActionSheetPermissions(guild).canAccessSettings;
  const total = stateFromStores(4699)(guild.id).total;
  let obj = guild(14270);
  const items = [GuildChannelStore];
  stateFromStores = guild(504).useStateFromStores(items, () => GuildChannelStore.getChannels(guild.id));
  let obj2 = guild(504);
  let shouldRenderInviteResult = guild(10097).shouldRenderInvite(stateFromStores, guild);
  const items1 = [stateFromStores, guild];
  closure_2 = noop.useCallback(() => {
    const channelId = SelectedChannelStore.getChannelId(guild.id);
    let channel = ChannelStore.getChannel(utils_InstantInviteUtils.getInviteChannelId(channelId, stateFromStores));
    if (null == channel) {
      channel = GuildChannelStore.getDefaultChannel(tmp.id);
    }
    if (null != channel) {
      const tmp3Result = instant_invite_InstantInviteUtils;
      const result = tmp3Result.handleOpenInviteActionsheet(tmp, channel.id, tmp5, constants4.SERVER_PROFILE);
    }
  }, items1);
  let obj4 = { direction: "horizontal", style: { flexWrap: "wrap" }, children: null };
  if (total > 0) {
    const intl2 = tmp(1119).intl;
    const obj5 = { subscriptions: total };
    let formatToPlainStringResult = intl2.formatToPlainString(tmp(1119).t["pob/cL"], obj5);
  } else {
    const intl = tmp(1119).intl;
    formatToPlainStringResult = intl.string(tmp(1119).t.Uj0md3);
  }
  const obj6 = { variant: "secondary", label: formatToPlainStringResult, icon: null, grow: true, onPress: null };
  let obj3 = guild(10097);
  const tmp6 = closure_13;
  obj6.icon = closure_12(guild(9519).BoostGemIcon, { color: stateFromStores(580).unsafe_rawColors.GUILD_BOOSTING_PINK });
  obj6.onPress = function onPress() {
    const obj2 = { location: { section: constants3.GUILD_POPOUT, object: constants2.BOOST_GEM_ICON } };
    AppAnalyticsUtilsDefault.trackWithMetadata(constants.PREMIUM_GUILD_PROMOTION_OPENED, obj2);
    const obj3 = { section: constants3.GUILD_POPOUT, object: constants2.BOOST_GEM_ICON };
    ActionSheetActionCreatorsDefault.hideActionSheet();
    actions_BoostingActionCreatorsAll.openApplyBoostModal(guild.id);
  };
  const items2 = [closure_12(guild(8210).IconButton, obj6), , , ];
  if (shouldRenderInviteResult) {
    const obj8 = { variant: "secondary", label: null, icon: null, grow: true, onPress: null };
    const intl3 = tmp(1119).intl;
    obj8.label = intl3.string(tmp(1119).t.VINpSK);
    obj8.icon = tmp3(10324);
    obj8.onPress = function onPress() {
      ActionSheetActionCreatorsDefault.hideActionSheet();
      closure_2();
    };
    shouldRenderInviteResult = tmp7(tmp(8210).IconButton, obj8);
  }
  items2[1] = shouldRenderInviteResult;
  const obj9 = { variant: "secondary", label: null, icon: null, grow: true, onPress: null };
  const intl4 = tmp(1119).intl;
  obj9.label = intl4.string(guild(1119).t.HcoRu0);
  obj9.icon = stateFromStores(8244);
  obj9.onPress = function onPress() {
    ActionSheetActionCreatorsDefault.hideActionSheet();
    NotificationSettingsModalActionCreatorsDefault.open(guild.id);
  };
  items2[2] = closure_12(guild(8210).IconButton, obj9);
  if (canAccessSettings) {
    const obj10 = { variant: "secondary", label: null, icon: null, grow: true, onPress: null };
    const intl5 = tmp(1119).intl;
    obj10.label = intl5.string(tmp(1119).t["3D5yo/"]);
    obj10.icon = tmp3(7657);
    obj10.onPress = function onPress() {
      ActionSheetActionCreatorsDefault.hideActionSheet();
      GuildSettingsActionCreatorsDefault.open(guild.id);
    };
    canAccessSettings = tmp7(tmp(8210).IconButton, obj10);
  }
  items2[3] = canAccessSettings;
  obj4.children = items2;
  return tmp6(guild(5684).ButtonGroup, obj4);
});
