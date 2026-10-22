// Module ID: 6678
// Function ID: 6679
// Name: StageBoostingActionSheet
// Dependencies: [19, 4970, 4843, 4901, 6622, 1087, 1394, 21, 504, 4829, 1128, 5196, 1267, 6679, 6673, 5249, 6681, 5230, 6682, 10828, 14889, 5655, 14893, 2]
// Exports: default

// Module 6678 (StageBoostingActionSheet)
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1267 */;
import StageChannelPermissions from "StageChannelPermissions" /* 4829 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5196 */;
import StageChannelsConstants from "StageChannelsConstants" /* 6622 */;
import BoostingActionCreators from "BoostingActionCreators" /* 6682 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4970 */;
import GuildStore from "GuildStore" /* 4843 */;
import PermissionStore from "PermissionStore" /* 4901 */;
import Constants from "Constants" /* 1087 */;
import PremiumConstants from "PremiumConstants" /* 1394 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

let dependencyMap;

let c10;
let c9;
let closure_12;
let closure_14;
let closure_15;
let map1;
let metroImportAll;
let metroImportDefault;
let unpackModuleId;
const STAGE_BOOSTING_SHEET_KEY = StageChannelsConstants.STAGE_BOOSTING_SHEET_KEY;
({ AnalyticEvents: metroImportDefault, BoostedGuildTiers: metroImportAll, GuildFeatures: c9, MAX_STAGE_VIDEO_USER_LIMIT_TIER2: c10, MAX_STAGE_VIDEO_USER_LIMIT_UNCAPPED: unpackModuleId } = Constants);
({ BoostingUpsellAction: closure_12, PremiumUpsellTypes: map1 } = PremiumConstants);
({ jsx: closure_14, jsxs: closure_15 } = Fragment);
const result = size.fileFinishedImporting("modules/stage_channels/native/sheets/StageBoostingActionSheet.tsx");

export default function StageBoostingActionSheet(channel) {
  let closure_2;
  let intl4;
  let intl5;
  let intl6;
  let intl7;
  let items5;
  let stringResult;
  let tmp21Result2;
  let tmp9;
  channel = channel.channel;
  let stateFromStores2;
  dependencyMap = undefined;
  let useReducedMotion;
  let obj = channel(504);
  const items = [GuildStore];
  const items1 = [channel.guild_id];
  const stateFromStores = obj.useStateFromStores(items, () => GuildStore.getGuild(channel.guild_id), items1);
  let obj2 = channel(504);
  const items2 = [useReducedMotion];
  let num;
  const stateFromStores1 = obj2.useStateFromStores(items2, () => useReducedMotion.useReducedMotion);
  if (stateFromStores != null) {
    num = stateFromStores.maxStageVideoChannelUsers;
  }
  if (num == null) {
    num = 0;
  }
  let hasItem = null != stateFromStores;
  if (hasItem) {
    const features = stateFromStores.features;
    hasItem = features.has(constants2.COMMUNITY);
  }
  if (hasItem) {
    tmp9 = num < closure_11;
  } else {
    let premiumTier;
    if (stateFromStores != null) {
      premiumTier = stateFromStores.premiumTier;
    }
    tmp9 = premiumTier !== closure_8.TIER_3 && num <= closure_10;
  }
  const items3 = [PermissionStore];
  const items4 = [channel];
  const tmpResult = channel(504);
  stateFromStores2 = tmpResult.useStateFromStores(items3, () => PermissionStore.can(StageChannelPermissions.MODERATE_STAGE_CHANNEL_PERMISSIONS, channel), items4);
  if (hasItem) {
    let string3Result1;
    let tmp21Result;
    let tmp21;
    let premiumTier1;
    if (stateFromStores != null) {
      premiumTier1 = stateFromStores.premiumTier;
    }
    if (premiumTier1 === closure_8.TIER_3) {
      let string2Result;
      const intl2 = tmp(1128).intl;
      const string2 = intl2.string;
      const t2 = tmp(1128).t;
      if (tmp9) {
        string2Result = string2(t2.tJmOuw);
      } else {
        string2Result = string2(t2["7FHbPG"]);
      }
      stringResult = string2Result;
    }
    const intl3 = tmp(1128).intl;
    const string3 = intl3.string;
    const t3 = tmp(1128).t;
    if (stateFromStores2) {
      let string3Result;
      if (tmp9) {
        string3Result = string3(t3["T+zF9M"]);
      } else {
        string3Result = string3(t3.XVL8LJ);
      }
      string3Result1 = string3Result;
    } else {
      string3Result1 = string3(t3.pqPQL0);
    }
    function handleClose() {
      const obj = ActionSheetActionCreatorsDefault;
      obj.hideActionSheet(STAGE_BOOSTING_SHEET_KEY);
      const obj2 = AnalyticsUtilsDefault;
      const obj3 = { guild_id: channel.guild_id, type: map1.VIDEO_STAGE_LIMIT, is_moderator: stateFromStores2, action: constants.DISMISS };
      obj2.track(metroImportDefault.BOOSTING_UPSELL_CLICKED, obj3);
    }
    const tmpResult3 = channel(6679);
    dependencyMap = tmpResult3.useActualStageSpeakerCount(channel.id);
    const tmpResult4 = channel(6679);
    useReducedMotion = tmpResult4.useStageParticipantsCount(channel.id, tmp(6673).StageChannelParticipantNamedIndex.AUDIENCE);
    stateFromStores2(5249)(() => {
      const obj = AnalyticsUtilsDefault;
      const obj2 = { guild_id: channel.guild_id, type: map1.VIDEO_STAGE_LIMIT, is_moderator: stateFromStores2, listener_count: closure_2 + useReducedMotion };
      obj.track(metroImportDefault.BOOSTING_UPSELL_VIEWED, obj2);
    });
    if (tmp9) {
      let obj3 = { size: "lg", children: items5 };
      const ButtonGroup = tmp(6681).ButtonGroup;
      let obj4 = {
        variant: "experimental_premium-primary",
        size: "lg",
        shiny: !stateFromStores1,
        text: intl6.string(channel(1128).t.Uj0md3),
        onPress: function handleBoost() {
              const obj = ActionSheetActionCreatorsDefault;
              obj.hideActionSheet(STAGE_BOOSTING_SHEET_KEY);
              const obj2 = AnalyticsUtilsDefault;
              const obj3 = { guild_id: channel.guild_id, type: map1.VIDEO_STAGE_LIMIT, is_moderator: stateFromStores2, action: constants.DISMISS };
              obj2.track(metroImportDefault.BOOSTING_UPSELL_CLICKED, obj3);
              const obj4 = BoostingActionCreators;
              obj4.openApplyBoostModal(channel.guild_id);
              const obj5 = AnalyticsUtilsDefault;
              const obj6 = { guild_id: channel.guild_id, type: map1.VIDEO_STAGE_LIMIT, is_moderator: stateFromStores2, action: constants.BOOST };
              obj5.track(metroImportDefault.BOOSTING_UPSELL_CLICKED, obj6);
            }
      };
      const Button2 = tmp(5230).Button;
      intl6 = tmp(1128).intl;
      items5 = [closure_14(Button2, obj4), ];
      let obj5 = { variant: "secondary", size: "lg", text: intl7.string(channel(1128).t.f3Pet9), onPress: handleClose };
      const Button3 = tmp(5230).Button;
      intl7 = tmp(1128).intl;
      items5[1] = closure_14(Button3, obj5);
      tmp21Result = closure_15(ButtonGroup, obj3);
      tmp21 = closure_14;
    } else {
      let obj7;
      tmp21 = closure_14;
      const Button = tmp(5230).Button;
      if (stateFromStores2) {
        let obj6 = { variant: "secondary", size: "lg", text: intl5.string(channel(1128).t.WAI6xu), onPress: handleClose };
        intl5 = tmp(1128).intl;
        obj7 = obj6;
      } else {
        obj7 = { variant: "primary", size: "lg", text: intl4.string(channel(1128).t["NX+WJN"]), onPress: handleClose };
        intl4 = tmp(1128).intl;
      }
      tmp21Result = tmp21(Button, obj7);
    }
    const obj8 = { title: string3Result1, description: stringResult, illustration: tmp21Result2, actions: tmp21Result };
    const PromoSheet = tmp(10828).PromoSheet;
    if (tmp9) {
      tmp21Result2 = tmp21(tmp(14889).HoldingGemSpotIllustration, { accessible: false });
    } else {
      const obj9 = { source: stateFromStores2(14893) };
      const tmp19Result = stateFromStores2(5655);
      tmp21Result2 = tmp21(tmp19Result, obj9);
    }
    return tmp21(PromoSheet, obj8);
  }
  const intl = tmp(1128).intl;
  const string = intl.string;
  const t = tmp(1128).t;
  if (tmp9) {
    stringResult = string(t["8/uDSF"]);
  } else {
    stringResult = string(t["7FHbPG"]);
  }
};
