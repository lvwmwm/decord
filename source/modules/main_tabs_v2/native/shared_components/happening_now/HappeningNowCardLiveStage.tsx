// Module ID: 14817
// Function ID: 111681
// Name: HappeningNowLiveStageContent
// Dependencies: []

// Module 14817 (HappeningNowLiveStageContent)
let HAPPENING_NOW_CONTENT_HEIGHT;
let HAPPENING_NOW_STAGE_PREVIEW_HEIGHT;
let HAPPENING_NOW_STAGE_PREVIEW_WIDTH;
class HappeningNowLiveStageContent {
  constructor(arg0) {
    ({ stage, streamingUser, guildId } = global);
    tmp = closure_9();
    obj = arg1(dependencyMap[10]);
    liveStageData = obj.useLiveStageData(stage);
    ({ speakers, friends } = liveStageData);
    tmp7Result = importDefault(dependencyMap[17])(liveStageData.channel);
    if ("guild" === global.renderingContext) {
      num = 0;
      if (speakers.length > 0) {
        obj = {};
        tmp12 = null;
        tmp11 = getUsersSubtitle;
        if (null != streamingUser) {
          items = [];
          items[0] = streamingUser;
          speakers = items;
        }
        obj.users = speakers;
        if (null != streamingUser) {
          tmp14 = memo;
          ON_STAGE2 = memo.SHARING;
        } else {
          tmp13 = memo;
          ON_STAGE2 = memo.ON_STAGE;
        }
        obj.action = ON_STAGE2;
        obj.guildId = guildId;
        tmp11Result = tmp11(obj);
      }
    }
    if (friends.length > 0) {
      obj1 = {};
      obj1.users = friends;
      tmp8 = null;
      tmp7 = getUsersSubtitle;
      if (null != streamingUser) {
        tmp10 = memo;
        LISTENING = memo.WATCHING;
      } else {
        tmp9 = memo;
        LISTENING = memo.LISTENING;
      }
      obj1.action = LISTENING;
      obj1.guildId = guildId;
      tmp7Result = tmp7(obj1);
    } else if (speakers.length > 0) {
      obj2 = {};
      tmp17 = null;
      tmp4 = speakers;
      tmp16 = getUsersSubtitle;
      if (null != streamingUser) {
        items1 = [];
        items1[0] = streamingUser;
        tmp4 = items1;
      }
      obj2.users = tmp4;
      if (null != streamingUser) {
        tmp6 = memo;
        ON_STAGE = memo.SHARING;
      } else {
        tmp5 = memo;
        ON_STAGE = memo.ON_STAGE;
      }
      obj2.action = ON_STAGE;
      obj2.guildId = guildId;
      tmp7Result = tmp16(obj2);
    }
    obj3 = { style: tmp.content };
    obj4 = { lineClamp: 3, children: stage.topic };
    items2 = [, ];
    items2[0] = jsx(arg1(dependencyMap[13]).HappeningNowCardHeader, obj4);
    obj5 = { lineClamp: 1 };
    obj5.children = tmp7Result;
    items2[1] = jsx(arg1(dependencyMap[13]).HappeningNowCardSubtitle, obj5);
    obj3.children = items2;
    return jsxs(View, obj3);
  }
}
function getUsersSubtitle(arg0) {
  let action;
  let guildId;
  let tmp8;
  let tmp9;
  let users;
  ({ users, action, guildId } = arg0);
  if (0 === users.length) {
    return "";
  } else if (1 === length) {
    const first = users[0];
    if (constants.LISTENING === action) {
      const intl9 = arg1(dependencyMap[18]).intl;
      let obj = { name: importDefault(dependencyMap[19]).getName(guildId, null, first) };
      let str3 = intl9.formatToPlainString(arg1(dependencyMap[18]).t.lJXKtO, obj);
      const obj14 = importDefault(dependencyMap[19]);
    } else if (constants.WATCHING === action) {
      const intl8 = arg1(dependencyMap[18]).intl;
      obj = { name: importDefault(dependencyMap[19]).getName(guildId, null, first) };
      str3 = intl8.formatToPlainString(arg1(dependencyMap[18]).t.iWY9wg, obj);
      const obj12 = importDefault(dependencyMap[19]);
    } else if (constants.ON_STAGE === action) {
      const intl7 = arg1(dependencyMap[18]).intl;
      const obj1 = {};
      let obj9 = importDefault(dependencyMap[19]);
      obj1.name = obj9.getName(guildId, null, first);
      str3 = intl7.formatToPlainString(arg1(dependencyMap[18]).t.5uJ3+u, obj1);
    } else {
      str3 = "";
      if (constants.SHARING === action) {
        const intl12 = arg1(dependencyMap[18]).intl;
        const obj2 = { name: importDefault(dependencyMap[19]).getName(guildId, null, first) };
        str3 = intl12.formatToPlainString(arg1(dependencyMap[18]).t.5oa7dX, obj2);
        const obj19 = importDefault(dependencyMap[19]);
      }
    }
    return str3;
  } else if (2 === length) {
    [tmp8, tmp9] = users;
    let obj3 = importDefault(dependencyMap[19]);
    const name = obj3.getName(guildId, null, tmp8);
    let obj4 = importDefault(dependencyMap[19]);
    const name1 = obj4.getName(guildId, null, tmp9);
    if (constants.LISTENING === action) {
      const intl6 = arg1(dependencyMap[18]).intl;
      obj3 = { name1: name, name2: name1 };
      let str2 = intl6.formatToPlainString(arg1(dependencyMap[18]).t.GFMcxs, obj3);
    } else if (constants.WATCHING === action) {
      const intl5 = arg1(dependencyMap[18]).intl;
      obj4 = { name1: name, name2: name1 };
      str2 = intl5.formatToPlainString(arg1(dependencyMap[18]).t.afUnti, obj4);
    } else if (constants.ON_STAGE === action) {
      const intl4 = arg1(dependencyMap[18]).intl;
      const obj5 = { name1: name, name2: name1 };
      str2 = intl4.formatToPlainString(arg1(dependencyMap[18]).t.SrTuJ6, obj5);
    } else {
      str2 = "";
      if (constants.SHARING === action) {
        const intl11 = arg1(dependencyMap[18]).intl;
        const obj6 = { name1: name, name2: name1 };
        str2 = intl11.formatToPlainString(arg1(dependencyMap[18]).t.uRjRHT, obj6);
      }
    }
    return str2;
  } else {
    let str = "";
    if (0 !== users.length) {
      const name2 = importDefault(dependencyMap[19]).getName(guildId, null, users[0]);
      const diff = users.length - 1;
      if (constants.LISTENING === action) {
        const intl3 = arg1(dependencyMap[18]).intl;
        const obj7 = { name: name2, count: diff };
        str = intl3.formatToPlainString(arg1(dependencyMap[18]).t.CsvyMc, obj7);
      } else if (constants.WATCHING === action) {
        const intl2 = arg1(dependencyMap[18]).intl;
        const obj8 = { name: name2, count: diff };
        str = intl2.formatToPlainString(arg1(dependencyMap[18]).t.Iwxee0, obj8);
      } else if (constants.ON_STAGE === action) {
        const intl = arg1(dependencyMap[18]).intl;
        obj = { name: name2, count: diff };
        str = intl.formatToPlainString(arg1(dependencyMap[18]).t.zRm3ZX, obj);
      } else {
        str = "";
        if (constants.SHARING === action) {
          const intl10 = arg1(dependencyMap[18]).intl;
          obj9 = { name: name2, count: diff };
          str = intl10.formatToPlainString(arg1(dependencyMap[18]).t.m+NEcC, obj9);
        }
      }
      const obj15 = importDefault(dependencyMap[19]);
    }
    return str;
  }
}
const importAllResult = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
const tmp2 = arg1(dependencyMap[2]);
let closure_5 = tmp2.HappeningNowCardTrackingType;
({ HAPPENING_NOW_CONTENT_HEIGHT, HAPPENING_NOW_STAGE_PREVIEW_HEIGHT, HAPPENING_NOW_STAGE_PREVIEW_WIDTH } = tmp2);
const AnalyticEvents = arg1(dependencyMap[3]).AnalyticEvents;
({ jsx: closure_7, jsxs: closure_8 } = arg1(dependencyMap[4]));
let obj1 = arg1(dependencyMap[5]);
let obj = { content: { "Bool(false)": -2923740127827069600000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, "Bool(false)": -0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001257033793555892 }, stagePreviewContainer: obj };
obj = { "Bool(true)": 155167561210812170000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, "Bool(true)": 0.00000000000000000000000000000000000000000000000000000000000004665176389013491, "Bool(true)": 141317.775, "Bool(true)": true, width: HAPPENING_NOW_STAGE_PREVIEW_WIDTH };
obj1 = { height: HAPPENING_NOW_STAGE_PREVIEW_HEIGHT, backgroundColor: importDefault(dependencyMap[6]).unsafe_rawColors.PRIMARY_800, borderRadius: importDefault(dependencyMap[6]).radii.sm, alignItems: "center", paddingTop: 6 };
obj.stagePreviewBackground = obj1;
const tmp3 = arg1(dependencyMap[4]);
obj.stagePreviewBackgroundNoAudience = { height: HAPPENING_NOW_CONTENT_HEIGHT, backgroundColor: importDefault(dependencyMap[6]).unsafe_rawColors.PRIMARY_800, borderRadius: importDefault(dependencyMap[6]).radii.sm, justifyContent: "center", alignItems: "center" };
const obj3 = { "Null": true, "Null": true, "Null": true, "Null": true, "Bool(false)": true, "Bool(false)": true, backgroundColor: importDefault(dependencyMap[6]).colors.STAGE_CARD_PILL_BG, borderRadius: importDefault(dependencyMap[6]).radii.xl };
obj.avatarStackContainer = obj3;
let closure_9 = obj1.createStyles(obj);
let closure_10 = { LISTENING: 0, [0]: "LISTENING", WATCHING: 1, [1]: "WATCHING", ON_STAGE: 2, [2]: "ON_STAGE", SHARING: 3, [3]: "SHARING" };
const obj2 = { height: HAPPENING_NOW_CONTENT_HEIGHT, backgroundColor: importDefault(dependencyMap[6]).unsafe_rawColors.PRIMARY_800, borderRadius: importDefault(dependencyMap[6]).radii.sm, justifyContent: "center", alignItems: "center" };
const memoResult = importAllResult.memo((arg0) => {
  let audienceCount;
  let fullwidth;
  let index;
  let panelVariant;
  let renderingContext;
  let speakers;
  let stage;
  ({ stage, index } = arg0);
  const arg1 = index;
  ({ fullwidth, renderingContext, panelVariant } = arg0);
  if (panelVariant === undefined) {
    panelVariant = false;
  }
  let importDefault;
  let dependencyMap;
  const tmp = callback3();
  const channel_id = stage.channel_id;
  importDefault = channel_id;
  const guild_id = stage.guild_id;
  dependencyMap = guild_id;
  const items = [channel_id, guild_id, index];
  const callback = importAllResult.useCallback(() => {
    let obj = channel_id(guild_id[7]);
    obj = { order: index, guild_id, type: constants.GUILD_LIVE_STAGE_CARD, destination_channel_id: channel_id };
    obj.track(constants2.ACTIVITY_CARD_CLICKED, obj);
    index(guild_id[9])(guild_id[8], guild_id.paths).then((arg0) => {
      arg0.default(closure_1, true);
    });
  }, items);
  let obj = arg1(dependencyMap[10]);
  const liveStageData = obj.useLiveStageData(stage);
  ({ speakers, audienceCount } = liveStageData);
  let obj1 = arg1(dependencyMap[11]);
  const stream = obj1.useCallActivityData(channel_id).stream;
  if (null != stream) {
    obj = { index, userId: stream.ownerId, guildId: guild_id, stream, fullwidth, renderingContext, panelVariant };
    let tmp30Result = callback(importDefault(dependencyMap[12]), obj);
  } else {
    obj = { onPress: callback };
    let str = "large";
    if (fullwidth) {
      str = "full";
    }
    obj.width = str;
    obj.IconComponent = arg1(dependencyMap[14]).StageIcon;
    obj.panelVariant = panelVariant;
    obj1 = { style: tmp.stagePreviewContainer };
    const obj2 = { style: 0 === audienceCount ? tmp.stagePreviewBackgroundNoAudience : tmp.stagePreviewBackground };
    let tmp10 = speakers.length > 0;
    if (tmp10) {
      const obj3 = { user: speakers[0], avatarDecoration: speakers[0].avatarDecoration, guildId: guild_id, size: arg1(dependencyMap[15]).AvatarSizes.REFRESH_MEDIUM_32 };
      tmp10 = callback(arg1(dependencyMap[15]).Avatar, obj3);
    }
    obj2.children = tmp10;
    const items1 = [callback(View, obj2), ];
    let tmp15Result = null;
    if (audienceCount > 0) {
      const obj4 = { style: tmp.avatarStackContainer };
      const obj5 = { users: liveStageData.audiencePrefixedFriends, guildId: guild_id };
      let num5 = 0;
      const sum = audienceCount + speakers.length;
      if (speakers.length > 0) {
        num5 = 1;
      }
      obj5.userCount = sum - num5;
      obj5.isStage = true;
      obj5.avatarSize = arg1(dependencyMap[15]).AvatarSizes.SIZE_16;
      obj4.children = callback(arg1(dependencyMap[16]).HappeningNowAvatarStack, obj5);
      tmp15Result = callback(View, obj4);
      const tmp15 = callback;
      const tmp16 = View;
      const tmp17 = callback;
    }
    items1[1] = tmp15Result;
    obj1.children = items1;
    const items2 = [closure_8(View, obj1), ];
    const obj6 = { stage, renderingContext };
    let tmp25;
    if ("guild" === renderingContext) {
      tmp25 = guild_id;
    }
    obj6.guildId = tmp25;
    items2[1] = callback(HappeningNowLiveStageContent, obj6);
    obj.children = items2;
    tmp30Result = closure_8(importDefault(dependencyMap[13]), obj);
    const tmp23 = callback;
    const tmp24 = HappeningNowLiveStageContent;
    const tmp30 = closure_8;
    const tmp33 = importDefault(dependencyMap[13]);
    const tmp6 = closure_8;
    const tmp7 = View;
    const tmp8 = callback;
    const tmp9 = View;
  }
  return tmp30Result;
});
const result = arg1(dependencyMap[20]).fileFinishedImporting("modules/main_tabs_v2/native/shared_components/happening_now/HappeningNowCardLiveStage.tsx");

export default memoResult;
export { HappeningNowLiveStageContent };
