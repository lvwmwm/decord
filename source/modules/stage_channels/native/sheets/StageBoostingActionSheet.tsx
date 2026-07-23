// Module ID: 4962
// Function ID: 42653
// Name: StageBoostingActionSheet
// Dependencies: [31, 4122, 1838, 3758, 4947, 653, 1851, 33, 566, 1356, 1212, 4098, 675, 4963, 4957, 4559, 4965, 4543, 4966, 11548, 5807, 5085, 7580, 2]
// Exports: default

// Module 4962 (StageBoostingActionSheet)
import "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import closure_5 from "_isNativeReflectConstruct";
import { STAGE_BOOSTING_SHEET_KEY } from "MAX_STAGE_TOPIC_LENGTH";
import ME from "ME";
import GuildFeatures from "GuildFeatures";
import jsxProd from "jsxProd";

let closure_10;
let closure_11;
let closure_12;
let closure_13;
let closure_14;
let closure_15;
let closure_7;
let closure_8;
let closure_9;
const require = arg1;
({ AnalyticEvents: closure_7, BoostedGuildTiers: closure_8, GuildFeatures: closure_9, MAX_STAGE_VIDEO_USER_LIMIT_TIER2: closure_10, MAX_STAGE_VIDEO_USER_LIMIT_UNCAPPED: closure_11 } = ME);
({ BoostingUpsellAction: closure_12, PremiumUpsellTypes: closure_13 } = GuildFeatures);
({ jsx: closure_14, jsxs: closure_15 } = jsxProd);
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/stage_channels/native/sheets/StageBoostingActionSheet.tsx");

export default function StageBoostingActionSheet(channel) {
  channel = channel.channel;
  let stateFromStores2;
  let dependencyMap;
  let _isNativeReflectConstruct;
  function handleClose() {
    let obj = stateFromStores2(4098);
    obj.hideActionSheet(outer1_6);
    obj = { guild_id: channel.guild_id, type: outer1_13.VIDEO_STAGE_LIMIT, is_moderator: stateFromStores2, action: outer1_12.DISMISS };
    stateFromStores2(675).track(outer1_7.BOOSTING_UPSELL_CLICKED, obj);
  }
  let obj = channel(566);
  const items = [handleClose];
  const items1 = [channel.guild_id];
  const stateFromStores = obj.useStateFromStores(items, () => handleClose.getGuild(channel.guild_id), items1);
  let obj1 = channel(566);
  const items2 = [_isNativeReflectConstruct];
  let prop;
  const stateFromStores1 = obj1.useStateFromStores(items2, () => useReducedMotion.useReducedMotion);
  if (null != stateFromStores) {
    prop = stateFromStores.maxStageVideoChannelUsers;
  }
  let num = 0;
  if (null != prop) {
    num = prop;
  }
  let hasItem = null != stateFromStores;
  if (hasItem) {
    const features = stateFromStores.features;
    hasItem = features.has(constants.COMMUNITY);
  }
  if (hasItem) {
    let tmp8 = num < closure_11;
  } else {
    let premiumTier;
    if (null != stateFromStores) {
      premiumTier = stateFromStores.premiumTier;
    }
    tmp8 = premiumTier !== closure_8.TIER_3;
    if (tmp8) {
      tmp8 = num <= closure_10;
    }
  }
  let obj2 = channel(566);
  const items3 = [closure_5];
  const items4 = [channel];
  stateFromStores2 = obj2.useStateFromStores(items3, () => outer1_5.can(channel(1356).MODERATE_STAGE_CHANNEL_PERMISSIONS, channel), items4);
  if (hasItem) {
    let premiumTier1;
    if (null != stateFromStores) {
      premiumTier1 = stateFromStores.premiumTier;
    }
    if (premiumTier1 === closure_8.TIER_3) {
      const intl2 = channel(1212).intl;
      const string2 = intl2.string;
      let tJmOuw = channel(1212).t;
      if (tmp8) {
        tJmOuw = tJmOuw.tJmOuw;
        let string2Result = string2(tJmOuw);
      } else {
        string2Result = string2(tJmOuw["7FHbPG"]);
      }
    }
  }
  const intl = channel(1212).intl;
  const string = intl.string;
  const t = channel(1212).t;
  if (tmp8) {
    let stringResult = string(t["8/uDSF"]);
  } else {
    stringResult = string(t["7FHbPG"]);
  }
  const intl3 = channel(1212).intl;
  const string3 = intl3.string;
  T_zF9M = channel(1212).t;
  if (stateFromStores2) {
    if (tmp8) {
      T_zF9M = T_zF9M["T+zF9M"];
      let string3Result = string3(T_zF9M);
    } else {
      string3Result = string3(T_zF9M.XVL8LJ);
    }
  } else {
    let obj3 = channel(4963);
    dependencyMap = obj3.useActualStageSpeakerCount(channel.id);
    let obj4 = channel(4963);
    _isNativeReflectConstruct = obj4.useStageParticipantsCount(channel.id, channel(4957).StageChannelParticipantNamedIndex.AUDIENCE);
    stateFromStores2(4559)(() => {
      let obj = stateFromStores2(675);
      obj = { guild_id: channel.guild_id, type: outer1_13.VIDEO_STAGE_LIMIT, is_moderator: stateFromStores2, listener_count: dependencyMap + _isNativeReflectConstruct };
      obj.track(outer1_7.BOOSTING_UPSELL_VIEWED, obj);
    });
    if (tmp8) {
      obj = { size: "lg" };
      obj = { variant: "experimental_premium-primary", size: "lg", shiny: !stateFromStores1 };
      const intl6 = channel(1212).intl;
      obj.text = intl6.string(channel(1212).t.Uj0md3);
      obj.onPress = function onPress() {
        handleClose();
        let obj = channel(4966);
        obj.openApplyBoostModal(channel.guild_id);
        obj = { guild_id: channel.guild_id, type: outer1_13.VIDEO_STAGE_LIMIT, is_moderator: stateFromStores2, action: outer1_12.BOOST };
        stateFromStores2(675).track(outer1_7.BOOSTING_UPSELL_CLICKED, obj);
      };
      const items5 = [callback(channel(4543).Button, obj), ];
      obj1 = { variant: "secondary", size: "lg" };
      const intl7 = channel(1212).intl;
      obj1.text = intl7.string(channel(1212).t.f3Pet9);
      obj1.onPress = handleClose;
      items5[1] = callback(channel(4543).Button, obj1);
      obj.children = items5;
      let tmp26Result = callback2(channel(4965).ButtonGroup, obj);
    } else {
      if (stateFromStores2) {
        obj2 = { variant: "secondary", size: "lg" };
        const intl5 = channel(1212).intl;
        obj2.text = intl5.string(channel(1212).t.WAI6xu);
        obj2.onPress = handleClose;
        obj3 = obj2;
      } else {
        obj3 = { variant: "primary", size: "lg" };
        const intl4 = channel(1212).intl;
        obj3.text = intl4.string(channel(1212).t["NX+WJN"]);
        obj3.onPress = handleClose;
      }
      tmp26Result = callback(channel(4543).Button, obj3);
      const tmp26 = callback;
    }
    obj4 = { title: string3(T_zF9M.pqPQL0), description: stringResult };
    if (tmp8) {
      const obj5 = { accessible: false };
      let tmp41Result = tmp41(channel(5807).HoldingGemSpotIllustration, obj5);
    } else {
      const obj6 = { source: stateFromStores2(7580) };
      tmp41Result = tmp41(stateFromStores2(5085), obj6);
      const tmp44 = stateFromStores2(5085);
    }
    obj4.illustration = tmp41Result;
    obj4.actions = tmp26Result;
    return callback(channel(11548).PromoSheet, obj4);
  }
};
