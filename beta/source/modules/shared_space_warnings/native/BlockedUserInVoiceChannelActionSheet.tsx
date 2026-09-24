// Module ID: 14048
// Function ID: 14049
// Name: BlockedUserInVoiceChannelActionSheet
// Dependencies: [19, 17, 2045, 4441, 1376, 14042, 14045, 1078, 21, 4790, 580, 558, 568, 504, 4757, 1245, 5662, 1119, 7481, 10414, 4786, 5935, 5854, 1181, 11990, 10298, 5220, 2]

// Module 14048 (BlockedUserInVoiceChannelActionSheet)
import nativeDefault from "native" /* 580 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1245 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4757 */;
import SelectedChannelActionCreatorsDefault from "SelectedChannelActionCreators" /* 5662 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import RelationshipStore from "RelationshipStore" /* 4441 */;
import UserStore from "UserStore" /* 1376 */;

const require = globalThis.__r;

const require = fn;
get_ActivityIndicator = fn(17);
({ Image: c3, View: closure_4 } = get_ActivityIndicator);
const setDismissalTimeForUser = fn(14042).setDismissalTimeForUser;
const SharedSpaceWarningConstants = fn(14045);
({ BlockWarningEngagements: closure_9, VoiceChannelWarningSurfaces: c10 } = SharedSpaceWarningConstants);
const AnalyticEvents = fn(1078).AnalyticEvents;
const jsxProd = fn(21);
({ Fragment: closure_12, jsxs: map1, jsx: closure_14 } = jsxProd);
const createStyles = fn(4790);
let obj2 = { container: { paddingTop: nativeDefault.space.PX_12, gap: nativeDefault.space.PX_8 }, headerImage: { alignSelf: "center", width: 73, height: 86 }, headerText: null, centerText: null, buttonGroup: null };
let obj3 = { paddingTop: nativeDefault.space.PX_12, gap: nativeDefault.space.PX_8 };
obj2.headerText = { gap: nativeDefault.space.PX_4, marginBottom: nativeDefault.space.PX_16 };
obj2.centerText = { textAlign: "center", alignSelf: "center" };
let obj4 = { gap: nativeDefault.space.PX_4, marginBottom: nativeDefault.space.PX_16 };
obj2.buttonGroup = { paddingVertical: nativeDefault.space.PX_16, gap: 8 };
let closure_15 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
const obj5 = { paddingVertical: nativeDefault.space.PX_16, gap: 8 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/shared_space_warnings/native/BlockedUserInVoiceChannelActionSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((channelId) => {
  const cResult = channelId(stateFromStores[12]).c(79);
  channelId = channelId.channelId;
  const blockedUserId = channelId.blockedUserId;
  closure_15();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [RelationshipStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== blockedUserId) {
    class E {
      constructor() {
        return closure_6.isBlocked(blockedUserId);
      }
    }
    cResult[1] = blockedUserId;
    cResult[2] = E;
    const tmp7 = E;
  } else {
    class E {
      constructor() {
        return closure_6.isBlocked(blockedUserId);
      }
    }
  }
  let obj = channelId(stateFromStores[12]);
  stateFromStores = channelId(stateFromStores[13]).useStateFromStores(first, tmp7);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    class E {
      constructor() {
        return closure_6.isBlocked(blockedUserId);
      }
    }
    let items1 = [ChannelStore];
    cResult[3] = items1;
    const tmp9 = items1;
  } else {
    class E {
      constructor() {
        return closure_6.isBlocked(blockedUserId);
      }
    }
  }
  if (cResult[4] !== channelId) {
    class E {
      constructor() {
        return closure_6.isBlocked(blockedUserId);
      }
    }
    cResult[4] = channelId;
    cResult[5] = tmp11;
    const tmp10 = tmp11;
  } else {
    class E {
      constructor() {
        return closure_6.isBlocked(blockedUserId);
      }
    }
  }
  const tmpResult = channelId(stateFromStores[13]);
  const stateFromStores1 = channelId(stateFromStores[13]).useStateFromStores(tmp9, tmp10);
  if (stateFromStores1 != null) {
    class E {
      constructor() {
        return closure_6.isBlocked(blockedUserId);
      }
    }
  }
  if (cResult[6] === undefined) {
    class E {
      constructor() {
        return closure_6.isBlocked(blockedUserId);
      }
    }
  }
  const user = UserStore.getUser(blockedUserId);
  if (cResult[27] === channelId) {
    class E {
      constructor() {
        return closure_6.isBlocked(blockedUserId);
      }
    }
  }
  class J {
    constructor() {
      obj = closure_1(closure_2[14]);
      hideActionSheetResult = obj.hideActionSheet();
      tmp2 = blockedUserId;
      tmp3 = setDismissalTimeForUser(blockedUserId);
      obj2 = closure_1(closure_2[15]);
      obj1 = { action: BlockWarningEngagements.CLICK_TO_STAY, channel_id: channelId, blocked_user_ids: null, ignored_user_ids: null, warning_surface: null };
      tmp4 = closure_2;
      if (closure_2) {
        items = [];
        items[0] = tmp2;
        items1 = items;
      } else {
        items1 = [];
      }
      obj1.blocked_user_ids = items1;
      if (tmp4) {
        items2 = [];
      } else {
        items2 = [];
        items2[0] = tmp2;
      }
      obj1.ignored_user_ids = items2;
      obj1.warning_surface = closure_10.POST_JOIN_SHEET;
      trackResult = obj2.track(AnalyticEvents.VOICE_CHANNEL_BLOCKED_USER_WARNING_ENGAGEMENT, obj1);
      return;
    }
  }
  cResult[27] = channelId;
  cResult[28] = stateFromStores;
  cResult[29] = blockedUserId;
  cResult[30] = J;
}) : ((arg0) => {
  ({ channelId: require, blockedUserId } = arg0);
  let stateFromStores;
  const tmp = closure_15();
  let items = [RelationshipStore];
  stateFromStores = require("initialize").useStateFromStores(items, () => RelationshipStore.isBlocked(blockedUserId));
  let obj = require("initialize");
  let items1 = [ChannelStore];
  const stateFromStores1 = require("initialize").useStateFromStores(items1, () => ChannelStore.getChannel(channel_id));
  const user = UserStore.getUser(blockedUserId);
  let obj3 = { children: null };
  const intl = require("util").intl;
  const string = intl.string;
  const t = require("util").t;
  if (stateFromStores) {
    let items2 = [string(t.cpgfFk), "\n", ];
    const intl3 = tmp2(tmp3[17]).intl;
    items2[2] = intl3.string(tmp2(tmp3[17]).t.UKQ4Cn);
    obj3.children = items2;
    let tmp9 = obj3;
  } else {
    const items3 = [string(t.xj3j47), "\n", ];
    const intl2 = tmp2(tmp3[17]).intl;
    items3[2] = intl2.string(tmp2(tmp3[17]).t.wWueRW);
    obj3.children = items3;
    tmp9 = obj3;
  }
  let obj2 = require("initialize");
  let obj4 = { style: tmp.container, children: null };
  const tmp7Result = closure_13(closure_12, tmp9);
  const items4 = [closure_14(closure_3, { source: blockedUserId(stateFromStores[19]), style: tmp.headerImage }), , , ];
  const obj6 = { style: tmp.headerText, children: null };
  const obj7 = { variant: "heading-xl/bold", color: "mobile-text-heading-primary", style: tmp.centerText, children: null };
  const intl4 = tmp2(tmp3[17]).intl;
  obj7.children = intl4.string(require("util").t["1/gpFh"]);
  const items5 = [closure_14(require("Text/Text").Text, obj7), closure_14(require("Text/Text").Text, { variant: "text-md/medium", style: tmp.centerText, children: tmp7Result })];
  obj6.children = items5;
  items4[1] = closure_13(closure_4, obj6);
  if (null != user) {
    const obj9 = { size: tmp2(tmp3[23]).AvatarSizes.SMALL, user, guildId: null };
    let guild_id;
    if (stateFromStores1 != null) {
      guild_id = stateFromStores1.guild_id;
    }
    obj9.guildId = guild_id;
    let tmp11Result = tmp11(tmp2(tmp3[23]).Avatar, obj9);
  } else {
    tmp11Result = tmp11(tmp2(tmp3[24]).UserIcon, {});
  }
  const obj10 = { icon: tmp11Result, label: null };
  const intl5 = tmp2(tmp3[17]).intl;
  let username;
  if (user != null) {
    username = user.username;
  }
  const obj11 = { startExpanded: true, children: null };
  const obj12 = { hasIcons: true, children: null };
  obj10.label = intl5.formatToPlainString(require("util").t.w0YvUo, { userName: username });
  const items6 = [closure_14(require("TableRow").TableRow, obj10), ];
  const obj13 = { icon: closure_14(require("MicrophoneIcon").MicrophoneIcon, {}), label: null };
  const intl6 = tmp2(tmp3[17]).intl;
  obj13.label = intl6.string(require("util").t["+4O9nX"]);
  items6[1] = closure_14(require("TableRow").TableRow, obj13);
  obj12.children = items6;
  items4[2] = closure_13(require("TableRowGroup").TableRowGroup, obj12);
  const obj14 = { style: tmp.buttonGroup, children: null };
  const obj15 = {
    size: "lg",
    onPress() {
      ActionSheetActionCreatorsDefault.hideActionSheet();
      SelectedChannelActionCreatorsDefault.disconnect();
      const obj4 = { action: constants.CLICK_TO_LEAVE, channel_id, blocked_user_ids: null, ignored_user_ids: null, warning_surface: null };
      if (stateFromStores) {
        const items = [blockedUserId];
        let items1 = items;
      } else {
        items1 = [];
      }
      obj4.blocked_user_ids = items1;
      if (stateFromStores) {
        let items2 = [];
      } else {
        items2 = [blockedUserId];
      }
      obj4.ignored_user_ids = items2;
      obj4.warning_surface = constants2.POST_JOIN_SHEET;
      AnalyticsUtilsDefault.track(AnalyticEvents.VOICE_CHANNEL_BLOCKED_USER_WARNING_ENGAGEMENT, obj4);
    },
    text: null
  };
  const intl7 = tmp2(tmp3[17]).intl;
  obj15.text = intl7.string(require("util").t["Y56/oK"]);
  const items7 = [closure_14(require("components/Button/Button").Button, obj15), ];
  const obj16 = {
    size: "lg",
    variant: "secondary",
    onPress() {
      ActionSheetActionCreatorsDefault.hideActionSheet();
      setDismissalTimeForUser(blockedUserId);
      const obj3 = { action: constants.CLICK_TO_STAY, channel_id, blocked_user_ids: null, ignored_user_ids: null, warning_surface: null };
      if (stateFromStores) {
        const items = [tmp2];
        let items1 = items;
      } else {
        items1 = [];
      }
      obj3.blocked_user_ids = items1;
      if (stateFromStores) {
        let items2 = [];
      } else {
        items2 = [tmp2];
      }
      obj3.ignored_user_ids = items2;
      obj3.warning_surface = constants2.POST_JOIN_SHEET;
      AnalyticsUtilsDefault.track(AnalyticEvents.VOICE_CHANNEL_BLOCKED_USER_WARNING_ENGAGEMENT, obj3);
    },
    text: null
  };
  const intl8 = tmp2(tmp3[17]).intl;
  obj16.text = intl8.string(require("util").t.bCcJST);
  items7[1] = closure_14(require("components/Button/Button").Button, obj16);
  obj14.children = items7;
  items4[3] = closure_13(closure_4, obj14);
  obj4.children = items4;
  obj11.children = closure_13(closure_4, obj4);
  return closure_14(require("ActionSheet").ActionSheet, obj11);
});
