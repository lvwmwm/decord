// Module ID: 4959
// Function ID: 42626
// Name: StageBoostingActionSheet
// Dependencies: [325779456, 326041600, 335216640, 335282176, 325910528, 326369280, 327155712, 332595200, 332791808, 327090176, 327024640, 335347712, 334495744, 334102528, 341377024, 341573632, 341704704, 334233600, 341966848, 326500352, 326762496, 1299382272, 452984832, 771751936, 1895825414]
// Exports: default

// Module 4959 (StageBoostingActionSheet)
importAll(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
const STAGE_BOOSTING_SHEET_KEY = arg1(dependencyMap[3]).STAGE_BOOSTING_SHEET_KEY;
({ AnalyticEvents: closure_6, BoostedGuildTiers: closure_7, GuildFeatures: closure_8, MAX_STAGE_VIDEO_USER_LIMIT_TIER2: closure_9, MAX_STAGE_VIDEO_USER_LIMIT_UNCAPPED: closure_10 } = arg1(dependencyMap[4]));
const tmp3 = arg1(dependencyMap[4]);
({ BoostingUpsellAction: closure_11, PremiumUpsellTypes: closure_12 } = arg1(dependencyMap[5]));
const tmp4 = arg1(dependencyMap[5]);
({ jsx: closure_13, Fragment: closure_14, jsxs: closure_15 } = arg1(dependencyMap[6]));
const tmp5 = arg1(dependencyMap[6]);
let closure_16 = arg1(dependencyMap[7]).createStyles({ title: { padding: "none", HermesInternal: "restore" }, body: { paddingBottom: 16 } });
const obj = arg1(dependencyMap[7]);
const result = arg1(dependencyMap[24]).fileFinishedImporting("modules/stage_channels/native/sheets/StageBoostingActionSheet.tsx");

export default function StageBoostingActionSheet(channel) {
  channel = channel.channel;
  const arg1 = channel;
  let importDefault;
  let closure_2;
  let closure_3;
  function handleClose() {
    let obj = stateFromStores1(closure_2[11]);
    obj.hideActionSheet(closure_5);
    obj = { guild_id: channel.guild_id, type: constants3.VIDEO_STAGE_LIMIT, is_moderator: stateFromStores1, action: constants2.DISMISS };
    stateFromStores1(closure_2[12]).track(constants.BOOSTING_UPSELL_CLICKED, obj);
  }
  let closure_4 = handleClose;
  const tmp = callback3();
  let obj = arg1(closure_2[8]);
  const items = [closure_3];
  const items1 = [channel.guild_id];
  const stateFromStores = obj.useStateFromStores(items, () => guild.getGuild(channel.guild_id), items1);
  let prop;
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
    let tmp8 = num < closure_10;
  } else {
    let premiumTier;
    if (null != stateFromStores) {
      premiumTier = stateFromStores.premiumTier;
    }
    tmp8 = premiumTier !== closure_7.TIER_3;
    if (tmp8) {
      tmp8 = num <= closure_9;
    }
  }
  let obj1 = arg1(closure_2[8]);
  const items2 = [closure_4];
  const items3 = [channel];
  const stateFromStores1 = obj1.useStateFromStores(items2, () => handleClose.can(channel(closure_2[9]).MODERATE_STAGE_CHANNEL_PERMISSIONS, channel), items3);
  importDefault = stateFromStores1;
  if (hasItem) {
    let premiumTier1;
    if (null != stateFromStores) {
      premiumTier1 = stateFromStores.premiumTier;
    }
    if (premiumTier1 === closure_7.TIER_3) {
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
  let obj2 = arg1(closure_2[13]);
  closure_2 = obj2.useActualStageSpeakerCount(channel.id);
  let obj3 = arg1(closure_2[13]);
  closure_3 = obj3.useStageParticipantsCount(channel.id, arg1(closure_2[14]).StageChannelParticipantNamedIndex.AUDIENCE);
  importDefault(closure_2[15])(() => {
    let obj = stateFromStores1(closure_2[12]);
    obj = { guild_id: channel.guild_id, type: constants3.VIDEO_STAGE_LIMIT, is_moderator: stateFromStores1, listener_count: closure_2 + closure_3 };
    obj.track(constants.BOOSTING_UPSELL_VIEWED, obj);
  });
  obj = {};
  obj = {};
  if (tmp8) {
    let tmp25 = tmp24[18];
  } else {
    tmp25 = tmp24[19];
  }
  obj.source = importDefault(tmp25);
  const items4 = [callback(importDefault(closure_2[17]), obj), , , ];
  obj1 = { variant: "heading-xl/bold", style: tmp.title };
  const intl3 = arg1(closure_2[10]).intl;
  const string3 = intl3.string;
  T+zF9M = arg1(closure_2[10]).t;
  if (stateFromStores1) {
    if (tmp8) {
      T+zF9M = T_zF9M.T+zF9M;
      let string3Result = string3(T_zF9M);
    } else {
      string3Result = string3(T_zF9M.XVL8LJ);
    }
  } else {
    obj1.children = string3(T_zF9M.pqPQL0);
    items4[1] = callback(arg1(closure_2[20]).Text, obj1);
    obj2 = { variant: "text-sm/medium", style: tmp.body, children: stringResult };
    items4[2] = callback(arg1(closure_2[20]).Text, obj2);
    if (tmp8) {
      obj3 = {};
      const obj4 = {};
      const intl6 = arg1(closure_2[10]).intl;
      obj4.text = intl6.string(arg1(closure_2[10]).t.Uj0md3);
      obj4.onPress = function onPress() {
        handleClose();
        let obj = channel(closure_2[22]);
        obj.openApplyBoostModal(channel.guild_id);
        obj = { guild_id: channel.guild_id, type: constants3.VIDEO_STAGE_LIMIT, is_moderator: stateFromStores1, action: constants2.BOOST };
        stateFromStores1(closure_2[12]).track(constants.BOOSTING_UPSELL_CLICKED, obj);
      };
      const items5 = [callback(arg1(closure_2[21]).ShinyButton, obj4), ];
      const obj5 = { variant: "secondary" };
      const intl7 = arg1(closure_2[10]).intl;
      obj5.text = intl7.string(arg1(closure_2[10]).t.f3Pet9);
      obj5.onPress = handleClose;
      items5[1] = callback(arg1(closure_2[23]).Button, obj5);
      obj3.children = items5;
      let tmp32Result = callback2(closure_14, obj3);
    } else {
      if (stateFromStores1) {
        const obj6 = { variant: "secondary" };
        const intl5 = arg1(closure_2[10]).intl;
        obj6.text = intl5.string(arg1(closure_2[10]).t.WAI6xu);
        obj6.onPress = handleClose;
        let obj7 = obj6;
      } else {
        obj7 = {};
        const intl4 = arg1(closure_2[10]).intl;
        obj7.text = intl4.string(arg1(closure_2[10]).t.NX+WJN);
        obj7.onPress = handleClose;
      }
      tmp32Result = callback(arg1(closure_2[23]).Button, obj7);
      const tmp32 = callback;
    }
    items4[3] = tmp32Result;
    obj.children = items4;
    return callback2(arg1(closure_2[16]).BottomSheet, obj);
  }
};
