// Module ID: 14933
// Function ID: 113849
// Name: HappeningNowLiveStageContent
// Dependencies: [31, 27, 14183, 653, 33, 4130, 689, 675, 10815, 1934, 14934, 14935, 14936, 14184, 4654, 1273, 14945, 4320, 1212, 4319, 2]

// Module 14933 (HappeningNowLiveStageContent)
import importAllResult from "result";
import { View } from "get ActivityIndicator";
import HAPPENING_NOW_PANELS_CONTAINER_PADDING from "HAPPENING_NOW_PANELS_CONTAINER_PADDING";
import { AnalyticEvents } from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let HAPPENING_NOW_CONTENT_HEIGHT;
let HAPPENING_NOW_STAGE_PREVIEW_HEIGHT;
let HAPPENING_NOW_STAGE_PREVIEW_WIDTH;
let closure_7;
let closure_8;
const require = arg1;
class HappeningNowLiveStageContent {
  constructor(arg0) {
    ({ stage, streamingUser, guildId } = global);
    tmp = c9();
    obj = require("useLiveStageData");
    liveStageData = obj.useLiveStageData(stage);
    ({ speakers, friends } = liveStageData);
    tmp7Result = require("computeDefaultGroupDmNameFromUserIds")(liveStageData.channel);
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
    items2[0] = jsx(require("HAPPENING_NOW_CARD_MARGIN_RIGHT").HappeningNowCardHeader, obj4);
    obj5 = { lineClamp: 1 };
    obj5.children = tmp7Result;
    items2[1] = jsx(require("HAPPENING_NOW_CARD_MARGIN_RIGHT").HappeningNowCardSubtitle, obj5);
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
      const intl9 = require(1212) /* getSystemLocale */.intl;
      let obj = { name: importDefault(4319).getName(guildId, null, first) };
      let str3 = intl9.formatToPlainString(require(1212) /* getSystemLocale */.t.lJXKtO, obj);
      const obj14 = importDefault(4319);
    } else if (constants.WATCHING === action) {
      const intl8 = require(1212) /* getSystemLocale */.intl;
      obj = { name: importDefault(4319).getName(guildId, null, first) };
      str3 = intl8.formatToPlainString(require(1212) /* getSystemLocale */.t.iWY9wg, obj);
      const obj12 = importDefault(4319);
    } else if (constants.ON_STAGE === action) {
      const intl7 = require(1212) /* getSystemLocale */.intl;
      const obj1 = {};
      let obj9 = importDefault(4319);
      obj1.name = obj9.getName(guildId, null, first);
      str3 = intl7.formatToPlainString(require(1212) /* getSystemLocale */.t["5uJ3+u"], obj1);
    } else {
      str3 = "";
      if (constants.SHARING === action) {
        const intl12 = require(1212) /* getSystemLocale */.intl;
        const obj2 = { name: importDefault(4319).getName(guildId, null, first) };
        str3 = intl12.formatToPlainString(require(1212) /* getSystemLocale */.t["5oa7dX"], obj2);
        const obj19 = importDefault(4319);
      }
    }
    return str3;
  } else if (2 === length) {
    [tmp8, tmp9] = users;
    let obj3 = importDefault(4319);
    const name = obj3.getName(guildId, null, tmp8);
    let obj4 = importDefault(4319);
    const name1 = obj4.getName(guildId, null, tmp9);
    if (constants.LISTENING === action) {
      const intl6 = require(1212) /* getSystemLocale */.intl;
      obj3 = { name1: name, name2: name1 };
      let str2 = intl6.formatToPlainString(require(1212) /* getSystemLocale */.t.GFMcxs, obj3);
    } else if (constants.WATCHING === action) {
      const intl5 = require(1212) /* getSystemLocale */.intl;
      obj4 = { name1: name, name2: name1 };
      str2 = intl5.formatToPlainString(require(1212) /* getSystemLocale */.t.afUnti, obj4);
    } else if (constants.ON_STAGE === action) {
      const intl4 = require(1212) /* getSystemLocale */.intl;
      const obj5 = { name1: name, name2: name1 };
      str2 = intl4.formatToPlainString(require(1212) /* getSystemLocale */.t.SrTuJ6, obj5);
    } else {
      str2 = "";
      if (constants.SHARING === action) {
        const intl11 = require(1212) /* getSystemLocale */.intl;
        const obj6 = { name1: name, name2: name1 };
        str2 = intl11.formatToPlainString(require(1212) /* getSystemLocale */.t.uRjRHT, obj6);
      }
    }
    return str2;
  } else {
    let str = "";
    if (0 !== users.length) {
      const name2 = importDefault(4319).getName(guildId, null, users[0]);
      const diff = users.length - 1;
      if (constants.LISTENING === action) {
        const intl3 = require(1212) /* getSystemLocale */.intl;
        const obj7 = { name: name2, count: diff };
        str = intl3.formatToPlainString(require(1212) /* getSystemLocale */.t.CsvyMc, obj7);
      } else if (constants.WATCHING === action) {
        const intl2 = require(1212) /* getSystemLocale */.intl;
        const obj8 = { name: name2, count: diff };
        str = intl2.formatToPlainString(require(1212) /* getSystemLocale */.t.Iwxee0, obj8);
      } else if (constants.ON_STAGE === action) {
        const intl = require(1212) /* getSystemLocale */.intl;
        obj = { name: name2, count: diff };
        str = intl.formatToPlainString(require(1212) /* getSystemLocale */.t.zRm3ZX, obj);
      } else {
        str = "";
        if (constants.SHARING === action) {
          const intl10 = require(1212) /* getSystemLocale */.intl;
          obj9 = { name: name2, count: diff };
          str = intl10.formatToPlainString(require(1212) /* getSystemLocale */.t["m+NEcC"], obj9);
        }
      }
      const obj15 = importDefault(4319);
    }
    return str;
  }
}
let closure_5 = HAPPENING_NOW_PANELS_CONTAINER_PADDING.HappeningNowCardTrackingType;
({ HAPPENING_NOW_CONTENT_HEIGHT, HAPPENING_NOW_STAGE_PREVIEW_HEIGHT, HAPPENING_NOW_STAGE_PREVIEW_WIDTH } = HAPPENING_NOW_PANELS_CONTAINER_PADDING);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
obj = { content: { flexShrink: 1, gap: 2 }, stagePreviewContainer: obj };
obj = { marginRight: 12, flexDirection: "column", justifyContent: "space-between", height: "100%", width: HAPPENING_NOW_STAGE_PREVIEW_WIDTH };
_createForOfIteratorHelperLoose = { height: HAPPENING_NOW_STAGE_PREVIEW_HEIGHT, backgroundColor: require("_createForOfIteratorHelperLoose").unsafe_rawColors.PRIMARY_800, borderRadius: require("_createForOfIteratorHelperLoose").radii.sm, alignItems: "center", paddingTop: 6 };
obj.stagePreviewBackground = _createForOfIteratorHelperLoose;
obj.stagePreviewBackgroundNoAudience = { height: HAPPENING_NOW_CONTENT_HEIGHT, backgroundColor: require("_createForOfIteratorHelperLoose").unsafe_rawColors.PRIMARY_800, borderRadius: require("_createForOfIteratorHelperLoose").radii.sm, justifyContent: "center", alignItems: "center" };
let obj3 = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.STAGE_CARD_PILL_BG, padding: 2, borderRadius: require("_createForOfIteratorHelperLoose").radii.xl, position: "absolute", alignSelf: "center", bottom: 0 };
obj.avatarStackContainer = obj3;
let closure_9 = _createForOfIteratorHelperLoose.createStyles(obj);
let closure_10 = { LISTENING: 0, [0]: "LISTENING", WATCHING: 1, [1]: "WATCHING", ON_STAGE: 2, [2]: "ON_STAGE", SHARING: 3, [3]: "SHARING" };
let obj2 = { height: HAPPENING_NOW_CONTENT_HEIGHT, backgroundColor: require("_createForOfIteratorHelperLoose").unsafe_rawColors.PRIMARY_800, borderRadius: require("_createForOfIteratorHelperLoose").radii.sm, justifyContent: "center", alignItems: "center" };
const memoResult = importAllResult.memo((arg0) => {
  let audienceCount;
  let fullwidth;
  let index;
  let panelVariant;
  let renderingContext;
  let speakers;
  let stage;
  ({ stage, index } = arg0);
  ({ fullwidth, renderingContext, panelVariant } = arg0);
  if (panelVariant === undefined) {
    panelVariant = false;
  }
  let channel_id;
  let guild_id;
  const tmp = callback3();
  channel_id = stage.channel_id;
  guild_id = stage.guild_id;
  const items = [channel_id, guild_id, index];
  const callback = importAllResult.useCallback(() => {
    let obj = channel_id(guild_id[7]);
    obj = { order: index, guild_id, type: outer1_5.GUILD_LIVE_STAGE_CARD, destination_channel_id: channel_id };
    obj.track(outer1_6.ACTIVITY_CARD_CLICKED, obj);
    index(guild_id[9])(guild_id[8], guild_id.paths).then((arg0) => {
      arg0.default(outer1_1, true);
    });
  }, items);
  let obj = index(guild_id[10]);
  const liveStageData = obj.useLiveStageData(stage);
  ({ speakers, audienceCount } = liveStageData);
  let obj1 = index(guild_id[11]);
  const stream = obj1.useCallActivityData(channel_id).stream;
  if (null != stream) {
    obj = { index, userId: stream.ownerId, guildId: guild_id, stream, fullwidth, renderingContext, panelVariant };
    let tmp30Result = callback(channel_id(guild_id[12]), obj);
  } else {
    obj = { onPress: callback };
    let str = "large";
    if (fullwidth) {
      str = "full";
    }
    obj.width = str;
    obj.IconComponent = index(guild_id[14]).StageIcon;
    obj.panelVariant = panelVariant;
    obj1 = { style: tmp.stagePreviewContainer };
    const obj2 = { style: 0 === audienceCount ? tmp.stagePreviewBackgroundNoAudience : tmp.stagePreviewBackground };
    let tmp10 = speakers.length > 0;
    if (tmp10) {
      const obj3 = { user: speakers[0], avatarDecoration: speakers[0].avatarDecoration, guildId: guild_id, size: index(guild_id[15]).AvatarSizes.REFRESH_MEDIUM_32 };
      tmp10 = callback(index(guild_id[15]).Avatar, obj3);
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
      obj5.avatarSize = index(guild_id[15]).AvatarSizes.SIZE_16;
      obj4.children = callback(index(guild_id[16]).HappeningNowAvatarStack, obj5);
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
    tmp30Result = closure_8(channel_id(guild_id[13]), obj);
    const tmp23 = callback;
    const tmp24 = HappeningNowLiveStageContent;
    const tmp30 = closure_8;
    const tmp33 = channel_id(guild_id[13]);
    const tmp6 = closure_8;
    const tmp7 = View;
    const tmp8 = callback;
    const tmp9 = View;
  }
  return tmp30Result;
});
const result = require("HAPPENING_NOW_PANELS_CONTAINER_PADDING").fileFinishedImporting("modules/main_tabs_v2/native/shared_components/happening_now/HappeningNowCardLiveStage.tsx");

export default memoResult;
export { HappeningNowLiveStageContent };
