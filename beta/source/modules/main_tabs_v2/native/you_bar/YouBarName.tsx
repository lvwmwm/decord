// Module ID: 16731
// Function ID: 16732
// Name: YouBarName
// Dependencies: [19, 17, 4780, 2045, 4399, 4798, 4409, 5498, 4777, 1078, 21, 4758, 580, 558, 568, 16710, 11202, 9980, 11408, 16709, 504, 9626, 11184, 11182, 11183, 16732, 11180, 11198, 4754, 4603, 2]

// Module 16731 (YouBarName)
import c from "c" /* 568 */;
import nativeDefault from "native" /* 580 */;
import GuildTagDefault from "GuildTag" /* 9980 */;
import useDiscoverableApplicationStream from "useDiscoverableApplicationStream" /* 11182 */;
import useUserVoiceActivity from "useUserVoiceActivity" /* 11183 */;
import UsernameWithEffectsDefault from "UsernameWithEffects" /* 11202 */;
import YouBarGuildTagExperiment from "YouBarGuildTagExperiment" /* 16710 */;
import shouldShowActivityStatusDefault from "shouldShowActivityStatus" /* 16732 */;
import noop from "module_19" /* 19 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 4780 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import PermissionStore from "PermissionStore" /* 4399 */;
import PresenceStore from "PresenceStore" /* 4798 */;
import RelationshipStore from "RelationshipStore" /* 4409 */;
import SelfPresenceStore from "SelfPresenceStore" /* 5498 */;
import VoiceStateStore from "VoiceStateStore" /* 4777 */;

const require = globalThis.__r;

const ChevronSmallDownIcon = tmp(11408);
require = fn;
const View = fn(17).View;
const ActivityTypes = fn(1078).ActivityTypes;
const jsxProd = fn(21);
({ jsx: closure_12, jsxs: map1, Fragment: closure_14 } = jsxProd);
const createStyles = fn(4758);
let obj = { userText: { flexDirection: "column", justifyContent: "center", height: "100%", gap: 1 }, statusRow: { flexDirection: "row", gap: nativeDefault.space.PX_4 }, statusEmoji: { width: 16, height: 16 }, usernameRow: { flexDirection: "row", alignItems: "center", overflow: "visible", gap: 2 }, username: { flexShrink: 1 }, guildTag: { marginLeft: 2, flexShrink: 0 }, statusText: { flexShrink: 1 } };
let closure_15 = createStyles.createStyles(obj);
let ReactCompilerGating = fn(558);
let closure_16 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(15);
  ({ userId, username } = arg0);
  const tmp4 = closure_15();
  const isYouBarGuildTagEnabled = YouBarGuildTagExperiment.useIsYouBarGuildTagEnabled("YouBarName");
  if (cResult[0] !== tmp4.usernameRow) {
    const items = [tmp4.usernameRow];
    cResult[0] = tmp4.usernameRow;
    cResult[1] = items;
    let tmp6 = items;
  } else {
    tmp6 = cResult[1];
  }
  if (cResult[2] === tmp4.username) {
    if (cResult[3] === userId) {
      if (cResult[4] === username) {
        let tmp7 = cResult[5];
      }
      if (cResult[6] === isYouBarGuildTagEnabled) {
        if (cResult[7] === tmp4.guildTag) {
          if (cResult[8] === userId) {
            let tmp9 = cResult[9];
          }
          const _Symbol = Symbol;
          if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
            const tmp16 = __initData(ChevronSmallDownIcon.ChevronSmallDownIcon, { size: "xs", color: "mobile-text-heading-primary" });
            cResult[10] = tmp16;
            let tmp14 = tmp16;
          } else {
            tmp14 = cResult[10];
          }
          if (cResult[11] === tmp6) {
            if (cResult[12] === tmp7) {
              if (cResult[13] === tmp9) {
                let tmp17 = cResult[14];
              }
              return tmp17;
            }
          }
          const obj3 = { style: tmp6, children: null };
          const items1 = [tmp7, tmp9, tmp14];
          obj3.children = items1;
          const tmp20 = __initData2(View, obj3);
          cResult[11] = tmp6;
          cResult[12] = tmp7;
          cResult[13] = tmp9;
          cResult[14] = tmp20;
          tmp17 = tmp20;
        }
      }
      let tmp10 = null;
      if (isYouBarGuildTagEnabled) {
        const obj4 = { userId, disabledTooltip: true, containerStyles: tmp4.guildTag };
        tmp10 = __initData(GuildTagDefault, obj4);
      }
      cResult[6] = isYouBarGuildTagEnabled;
      cResult[7] = tmp4.guildTag;
      cResult[8] = userId;
      cResult[9] = tmp10;
      tmp9 = tmp10;
    }
  }
  const tmp8 = __initData(UsernameWithEffectsDefault, { userId, userName: username, defaultColor: "mobile-text-heading-primary", variant: "heading-md/semibold", lineClamp: 1, ellipsizeMode: "tail", maxFontSizeMultiplier: 1.75, containerStyle: tmp4.username, style: tmp4.username });
  cResult[2] = tmp4.username;
  cResult[3] = userId;
  cResult[4] = username;
  cResult[5] = tmp8;
  tmp7 = tmp8;
}) : ((userId) => {
  userId = userId.userId;
  const tmp = closure_15();
  const obj2 = { style: null, children: null };
  const items = [tmp.usernameRow];
  obj2.style = items;
  const isYouBarGuildTagEnabled = YouBarGuildTagExperiment.useIsYouBarGuildTagEnabled("YouBarName");
  const items1 = [__initData(UsernameWithEffectsDefault, { userId, userName: userId.username, defaultColor: "mobile-text-heading-primary", variant: "heading-md/semibold", lineClamp: 1, ellipsizeMode: "tail", maxFontSizeMultiplier: 1.75, containerStyle: tmp.username, style: tmp.username }), , ];
  let tmp7Result = null;
  if (isYouBarGuildTagEnabled) {
    const obj4 = { userId, disabledTooltip: true, containerStyles: tmp.guildTag };
    tmp7Result = tmp7(GuildTagDefault, obj4);
  }
  items1[1] = tmp7Result;
  items1[2] = __initData(ChevronSmallDownIcon.ChevronSmallDownIcon, { size: "xs", color: "mobile-text-heading-primary" });
  obj2.children = items1;
  return __initData2(View, obj2);
});
ReactCompilerGating = fn(558);
let obj3 = { flexDirection: "row", gap: nativeDefault.space.PX_4 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/you_bar/YouBarName.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((userId) => {
  const cResult = userId(stateFromStores[14]).c(25);
  userId = userId.userId;
  const username = userId.username;
  closure_15();
  const obj = userId(stateFromStores[14]);
  const youBarActivityStatusEnabled = userId(stateFromStores[19]).useYouBarActivityStatusEnabled("YouBar");
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [SelfPresenceStore];
    class C {
      constructor() {
        return closure_1_9.getStatus();
      }
    }
    cResult[0] = items;
    cResult[1] = C;
    tmp6 = items;
    tmp7 = C;
  } else {
    [tmp6, tmp7] = cResult;
  }
  let obj2 = userId(stateFromStores[19]);
  stateFromStores = userId(stateFromStores[20]).useStateFromStores(tmp6, tmp7);
  const tmpResult = userId(stateFromStores[20]);
  const customStatusActivity = userId(stateFromStores[21]).useCustomStatusActivity();
  const tmpResult4 = userId(stateFromStores[21]);
  state = undefined;
  if (customStatusActivity != null) {
    state = customStatusActivity.state;
  }
  const gameMentionsAsPlainText = userId(stateFromStores[22]).useGameMentionsAsPlainText(state);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [PresenceStore, , , , , ];
    class C {
      constructor() {
        return closure_1_9.getStatus();
      }
    }
    items1[1] = ApplicationStreamingStore;
    items1[2] = RelationshipStore;
    items1[3] = ChannelStore;
    items1[4] = PermissionStore;
    items1[5] = VoiceStateStore;
    cResult[2] = items1;
    let tmp13 = items1;
  } else {
    tmp13 = cResult[2];
  }
  if (cResult[3] === youBarActivityStatusEnabled) {
    if (cResult[4] === stateFromStores) {
      if (cResult[5] === userId) {
        let tmp19 = cResult[6];
      }
      const stateFromStores1 = tmp(tmp2[20]).useStateFromStores(tmp13, tmp19);
      class C {
        constructor() {
          return closure_1_9.getStatus();
        }
      }
      const obj3 = { username, userId };
      const tmp24 = closure_12(closure_16, obj3);
      cResult[7] = userId;
      cResult[8] = username;
      cResult[9] = tmp24;
      const tmpResult6 = tmp(tmp2[20]);
    }
  }
  class M {
    constructor() {
      activities = closure_7.getActivities(userId);
      found = activities.filter(() => { ... });
      tmp2 = closure_2;
      obj = closure_0(closure_2[23]);
      items = [, ];
      items[0] = closure_4;
      items[1] = closure_8;
      discoverableApplicationStream = obj.getDiscoverableApplicationStream(userId, items);
      tmp4 = closure_0(closure_2[24]);
      tmp6 = closure_1;
      if (closure_1) {
        tmp7 = closure_1;
        obj1 = { activities: null, status: null, applicationStream: null, voiceChannel: null };
        obj1.activities = found;
        tmp8 = closure_2;
        obj1.status = closure_2;
        obj1.applicationStream = discoverableApplicationStream;
        obj1.voiceChannel = tmp5;
        tmp6 = closure_1(tmp2[25])(obj1);
      }
      return tmp6;
    }
  }
  cResult[3] = youBarActivityStatusEnabled;
  cResult[4] = stateFromStores;
  cResult[5] = userId;
  cResult[6] = M;
  tmp19 = M;
}) : ((username) => {
  const userId = username.userId;
  let stateFromStores;
  const tmp = closure_15();
  importDefault = userId(stateFromStores[19]).useYouBarActivityStatusEnabled("YouBar");
  const obj = userId(stateFromStores[19]);
  let items = [SelfPresenceStore];
  stateFromStores = userId(stateFromStores[20]).useStateFromStores(items, () => status.getStatus());
  let obj2 = userId(stateFromStores[20]);
  const customStatusActivity = userId(stateFromStores[21]).useCustomStatusActivity();
  const obj3 = userId(stateFromStores[21]);
  state = undefined;
  if (customStatusActivity != null) {
    state = customStatusActivity.state;
  }
  const gameMentionsAsPlainText = userId(stateFromStores[22]).useGameMentionsAsPlainText(state);
  const obj4 = userId(stateFromStores[22]);
  const items1 = [PresenceStore, ApplicationStreamingStore, RelationshipStore, ChannelStore, PermissionStore, VoiceStateStore];
  const obj5 = { style: tmp.userText, children: null };
  const stateFromStores1 = userId(stateFromStores[20]).useStateFromStores(items1, () => {
    const activities = PresenceStore.getActivities(userId);
    const found = activities.filter((type) => type.type !== constants.CUSTOM_STATUS);
    const items = [ApplicationStreamingStore, RelationshipStore];
    const discoverableApplicationStream = useDiscoverableApplicationStream.getDiscoverableApplicationStream(userId, items);
    useUserVoiceActivity;
    let tmp6 = closure_1;
    if (closure_1) {
      const obj2 = { activities: found, status: stateFromStores, applicationStream: discoverableApplicationStream, voiceChannel: tmp5 };
      tmp6 = shouldShowActivityStatusDefault(obj2);
    }
    return tmp6;
  });
  const items2 = [closure_12(closure_16, { username: username.username, userId }), ];
  const obj6 = { style: tmp.statusRow, children: null };
  if (stateFromStores1) {
    const obj7 = { userId, emojiSize: 16, maxFontSizeMultiplier: 1.75 };
    let tmp9Result = tmp11(require("ActivityStatus"), obj7);
  } else {
    let emoji;
    if (customStatusActivity != null) {
      emoji = customStatusActivity.emoji;
    }
    let tmp11Result2 = null;
    if (null != emoji) {
      const obj8 = { size: 16, style: tmp.statusEmoji, emoji: customStatusActivity.emoji };
      tmp11Result2 = tmp11(require("ActivityEmoji"), obj8);
    }
    const items3 = [tmp11Result2, ];
    const obj9 = { variant: "text-xs/medium", color: "text-muted", lineClamp: 1, ellipsizeMode: "tail", maxFontSizeMultiplier: 1.75, style: tmp.statusText, children: null };
    let humanizeStatusResult = gameMentionsAsPlainText;
    if (gameMentionsAsPlainText == null) {
      humanizeStatusResult = tmp2(tmp3[29]).humanizeStatus(stateFromStores);
      const tmp2Result2 = tmp2(tmp3[29]);
    }
    const obj10 = { children: null };
    obj9.children = humanizeStatusResult;
    items3[1] = tmp11(tmp2(tmp3[28]).Text, obj9);
    obj10.children = items3;
    tmp9Result = tmp9(closure_14, obj10);
  }
  obj6.children = tmp9Result;
  items2[1] = closure_12(View, obj6);
  obj5.children = items2;
  return closure_13(View, obj5);
}));
