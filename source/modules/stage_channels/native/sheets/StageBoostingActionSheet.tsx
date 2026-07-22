// Module ID: 4959
// Function ID: 42635
// Name: StageBoostingActionSheet
// Dependencies: []
// Exports: default

// Module 4959 (StageBoostingActionSheet)
importAll(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
const STAGE_BOOSTING_SHEET_KEY = arg1(dependencyMap[4]).STAGE_BOOSTING_SHEET_KEY;
({ AnalyticEvents: closure_7, BoostedGuildTiers: closure_8, GuildFeatures: closure_9, MAX_STAGE_VIDEO_USER_LIMIT_TIER2: closure_10, MAX_STAGE_VIDEO_USER_LIMIT_UNCAPPED: closure_11 } = arg1(dependencyMap[5]));
const tmp3 = arg1(dependencyMap[5]);
({ BoostingUpsellAction: closure_12, PremiumUpsellTypes: closure_13 } = arg1(dependencyMap[6]));
const tmp4 = arg1(dependencyMap[6]);
({ jsx: closure_14, jsxs: closure_15 } = arg1(dependencyMap[7]));
const tmp5 = arg1(dependencyMap[7]);
const result = arg1(dependencyMap[23]).fileFinishedImporting("modules/stage_channels/native/sheets/StageBoostingActionSheet.tsx");

export default function StageBoostingActionSheet(channel) {
  channel = channel.channel;
  const arg1 = channel;
  let importDefault;
  let closure_2;
  let closure_3;
  function handleClose() {
    let obj = stateFromStores2(closure_2[11]);
    obj.hideActionSheet(closure_6);
    obj = { guild_id: channel.guild_id, type: constants3.VIDEO_STAGE_LIMIT, is_moderator: stateFromStores2, action: constants2.DISMISS };
    stateFromStores2(closure_2[12]).track(constants.BOOSTING_UPSELL_CLICKED, obj);
  }
  let closure_4 = handleClose;
  let obj = arg1(closure_2[8]);
  const items = [closure_4];
  const items1 = [channel.guild_id];
  const stateFromStores = obj.useStateFromStores(items, () => handleClose.getGuild(channel.guild_id), items1);
  let obj1 = arg1(closure_2[8]);
  const items2 = [closure_3];
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
  let obj2 = arg1(closure_2[8]);
  const items3 = [closure_5];
  const items4 = [channel];
  const stateFromStores2 = obj2.useStateFromStores(items3, () => closure_5.can(channel(closure_2[9]).MODERATE_STAGE_CHANNEL_PERMISSIONS, channel), items4);
  importDefault = stateFromStores2;
  if (hasItem) {
    let premiumTier1;
    if (null != stateFromStores) {
      premiumTier1 = stateFromStores.premiumTier;
    }
    if (premiumTier1 === closure_8.TIER_3) {
      const intl2 = arg1(closure_2[10]).intl;
      const string2 = intl2.string;
      let tJmOuw = arg1(closure_2[10]).t;
      if (tmp8) {
        tJmOuw = tJmOuw.tJmOuw;
        let string2Result = string2(tJmOuw);
      } else {
        string2Result = string2(tJmOuw.7FHbPG);
      }
    }
  }
  const intl = arg1(closure_2[10]).intl;
  const string = intl.string;
  const t = arg1(closure_2[10]).t;
  if (tmp8) {
    let stringResult = string(t.8/uDSF);
  } else {
    stringResult = string(t.7FHbPG);
  }
  const intl3 = arg1(closure_2[10]).intl;
  const string3 = intl3.string;
  T+zF9M = arg1(closure_2[10]).t;
  if (stateFromStores2) {
    if (tmp8) {
      T+zF9M = T_zF9M.T+zF9M;
      let string3Result = string3(T_zF9M);
    } else {
      string3Result = string3(T_zF9M.XVL8LJ);
    }
  } else {
    let obj3 = arg1(closure_2[13]);
    closure_2 = obj3.useActualStageSpeakerCount(channel.id);
    let obj4 = arg1(closure_2[13]);
    closure_3 = obj4.useStageParticipantsCount(channel.id, arg1(closure_2[14]).StageChannelParticipantNamedIndex.AUDIENCE);
    importDefault(closure_2[15])(() => {
      let obj = stateFromStores2(closure_2[12]);
      obj = { guild_id: channel.guild_id, type: constants3.VIDEO_STAGE_LIMIT, is_moderator: stateFromStores2, listener_count: closure_2 + closure_3 };
      obj.track(constants.BOOSTING_UPSELL_VIEWED, obj);
    });
    if (tmp8) {
      obj = { size: "lg" };
      obj = { shiny: !stateFromStores1 };
      const intl6 = arg1(closure_2[10]).intl;
      obj.text = intl6.string(arg1(closure_2[10]).t.Uj0md3);
      obj.onPress = function onPress() {
        handleClose();
        let obj = channel(closure_2[18]);
        obj.openApplyBoostModal(channel.guild_id);
        obj = { guild_id: channel.guild_id, type: constants3.VIDEO_STAGE_LIMIT, is_moderator: stateFromStores2, action: constants2.BOOST };
        stateFromStores2(closure_2[12]).track(constants.BOOSTING_UPSELL_CLICKED, obj);
      };
      const items5 = [callback(arg1(closure_2[17]).Button, obj), ];
      obj1 = {};
      const intl7 = arg1(closure_2[10]).intl;
      obj1.text = intl7.string(arg1(closure_2[10]).t.f3Pet9);
      obj1.onPress = handleClose;
      items5[1] = callback(arg1(closure_2[17]).Button, obj1);
      obj.children = items5;
      let tmp26Result = callback2(arg1(closure_2[16]).ButtonGroup, obj);
    } else {
      if (stateFromStores2) {
        obj2 = {};
        const intl5 = arg1(closure_2[10]).intl;
        obj2.text = intl5.string(arg1(closure_2[10]).t.WAI6xu);
        obj2.onPress = handleClose;
        obj3 = obj2;
      } else {
        obj3 = {};
        const intl4 = arg1(closure_2[10]).intl;
        obj3.text = intl4.string(arg1(closure_2[10]).t.NX+WJN);
        obj3.onPress = handleClose;
      }
      tmp26Result = callback(arg1(closure_2[17]).Button, obj3);
      const tmp26 = callback;
    }
    obj4 = { title: string3(T_zF9M.pqPQL0), description: stringResult };
    if (tmp8) {
      const obj5 = { accessible: false };
      let tmp41Result = tmp41(arg1(closure_2[20]).HoldingGemSpotIllustration, obj5);
    } else {
      const obj6 = { source: importDefault(closure_2[22]) };
      tmp41Result = tmp41(importDefault(closure_2[21]), obj6);
      const tmp44 = importDefault(closure_2[21]);
    }
    obj4.illustration = tmp41Result;
    obj4.actions = tmp26Result;
    return callback(arg1(closure_2[19]).PromoSheet, obj4);
  }
};
