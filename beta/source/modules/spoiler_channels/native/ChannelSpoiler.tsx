// Module ID: 12852
// Function ID: 12853
// Name: ChannelSpoiler
// Dependencies: [32, 19, 17, 4806, 2045, 2067, 12454, 21, 4790, 580, 558, 568, 504, 4943, 12455, 4991, 5771, 4649, 5273, 4786, 1119, 5218, 4780, 5373, 12851, 8721, 2]

// Module 12852 (ChannelSpoiler)
import nativeDefault from "native" /* 580 */;
import RootNavigationRef from "RootNavigationRef" /* 4649 */;
import useChannelNameDefault from "useChannelName" /* 4943 */;
import ChannelRTCActionCreatorsDefault from "ChannelRTCActionCreators" /* 4991 */;
import GuildActionCreatorsDefault from "GuildActionCreators" /* 5771 */;
import VoicePanelStateContextDefault from "VoicePanelStateContext" /* 12455 */;
import GatedContentDefault from "GatedContent" /* 12851 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ChannelRTCStore from "ChannelRTCStore" /* 4806 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import GuildStore from "GuildStore" /* 2067 */;

const require = globalThis.__r;

require = fn;
const View = fn(17).View;
const VoicePanelControlsModes = fn(12454).VoicePanelControlsModes;
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
const createStyles = fn(4790);
let obj2 = { subtitle: { textAlign: "center", lineHeight: 22 }, subtitleContainer: { alignItems: "center" }, divider: null, subtitleMeasure: null };
let size = { height: 1, width: "100%", backgroundColor: nativeDefault.colors.BORDER_SUBTLE, marginVertical: 16 };
obj2.divider = size;
obj2.subtitleMeasure = { position: "absolute", opacity: 0, left: 0, right: 0 };
let closure_12 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
size = fn(2);
const result = size.fileFinishedImporting("modules/spoiler_channels/native/ChannelSpoiler.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((guildId) => {
  _require = guildId;
  const cResult = require("c").c(38);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== guildId.guildId) {
    const fn = function v() {
      return GuildStore.getGuild(guildId.guildId);
    };
    cResult[1] = guildId.guildId;
    cResult[2] = fn;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const obj = require("c");
  const stateFromStores = require("initialize").useStateFromStores(first, tmp6);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [ChannelStore];
    cResult[3] = items1;
    let tmp8 = items1;
  } else {
    tmp8 = cResult[3];
  }
  if (cResult[4] !== guildId.channelId) {
    class S {
      constructor() {
        return closure_7.getChannel(closure_0.channelId);
      }
    }
    cResult[4] = guildId.channelId;
    cResult[5] = S;
    const tmp10 = S;
  } else {
    class S {
      constructor() {
        return closure_7.getChannel(closure_0.channelId);
      }
    }
  }
  const tmpResult = require("initialize");
  const stateFromStores1 = require("initialize").useStateFromStores(tmp8, tmp10);
  closure_12();
  const obj4 = noop;
  const tmpResult2 = require("initialize");
  [r10058, importDefault] = setControlsMode(noop.useState(false), 2);
  useChannelNameDefault(stateFromStores1);
  if (cResult[6] !== stateFromStores1) {
    class S {
      constructor() {
        return closure_7.getChannel(closure_0.channelId);
      }
    }
    if (stateFromStores1 != null) {
      class S {
        constructor() {
          return closure_7.getChannel(closure_0.channelId);
        }
      }
    }
    cResult[6] = stateFromStores1;
    cResult[7] = undefined;
  } else {
    class S {
      constructor() {
        return closure_7.getChannel(closure_0.channelId);
      }
    }
  }
  dependencyMap = tmp16;
  setControlsMode = obj4.useContext(VoicePanelStateContextDefault).setControlsMode;
  if (cResult[8] === tmp16) {
    class S {
      constructor() {
        return closure_7.getChannel(closure_0.channelId);
      }
    }
  }
  const fn2 = function k() {
    if (c2) {
      if (ChannelRTCStore.getChatOpen(guildId.channelId)) {
        ChannelRTCActionCreatorsDefault.updateChatOpen(tmp2.channelId, false);
        const obj3 = { mode: VoicePanelControlsModes.FLOATING_DEFAULT };
        setControlsMode(obj3);
      }
      tmp2 = guildId;
    }
    GuildActionCreatorsDefault.nsfwReturnToSafety(guildId.guildId);
  };
  cResult[8] = tmp16;
  cResult[9] = guildId.channelId;
  cResult[10] = guildId.guildId;
  cResult[11] = setControlsMode;
  cResult[12] = fn2;
}) : ((channelId) => {
  _require = channelId;
  const items = [GuildStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => GuildStore.getGuild(channelId.guildId));
  const obj = require("initialize");
  const items1 = [ChannelStore];
  const stateFromStores1 = require("initialize").useStateFromStores(items1, () => ChannelStore.getChannel(channelId.channelId));
  const tmp4 = closure_12();
  const tmp5 = setControlsMode(noop.useState(false), 2);
  importDefault = tmp5[1];
  let isVocalResult;
  let obj2 = require("initialize");
  if (stateFromStores1 != null) {
    isVocalResult = stateFromStores1.isVocal();
  }
  dependencyMap = isVocalResult;
  setControlsMode = obj4.useContext(tmp6(12455)).setControlsMode;
  const items2 = [, , , ];
  ({ guildId: arr3[0], channelId: arr3[1] } = channelId);
  items2[2] = setControlsMode;
  items2[3] = isVocalResult;
  const callback = obj4.useCallback(() => {
    if (isVocalResult) {
      if (ChannelRTCStore.getChatOpen(channelId.channelId)) {
        ChannelRTCActionCreatorsDefault.updateChatOpen(tmp2.channelId, false);
        const obj3 = { mode: VoicePanelControlsModes.FLOATING_DEFAULT };
        setControlsMode(obj3);
      }
      tmp2 = channelId;
    }
    GuildActionCreatorsDefault.nsfwReturnToSafety(channelId.guildId);
  }, items2);
  const items3 = [channelId.channelId];
  const callback1 = obj4.useCallback((nativeEvent) => {
    closure_1(nativeEvent.nativeEvent.lines.length > 3);
  }, []);
  let channelIconComponent = null;
  const callback2 = obj4.useCallback(() => {
    const rootNavigationRef = RootNavigationRef.getRootNavigationRef();
    if (rootNavigationRef != null) {
      const obj2 = { channelId: channelId.channelId, expandTopic: true };
      rootNavigationRef.navigate("sidebar", obj2);
    }
  }, items3);
  if (null != stateFromStores1) {
    channelIconComponent = tmp(5273).getChannelIconComponent(stateFromStores1);
    const tmpResult = tmp(5273);
  }
  if (null != channelIconComponent) {
    let obj3 = { style: { flexDirection: "row", alignItems: "center", gap: 4, flexShrink: 1 }, children: null };
    const items4 = [closure_10(channelIconComponent, { size: "lg", color: "mobile-text-heading-primary" }), ];
    const obj5 = { variant: "heading-xxl/bold", color: "mobile-text-heading-primary", lineClamp: 1, style: { flexShrink: 1 }, children: tmp7 };
    items4[1] = closure_10(tmp(4786).Text, obj5);
    obj3.children = items4;
    let stringResult = closure_11(View, obj3);
  } else {
    const intl = tmp(1119).intl;
    stringResult = intl.string(tmp(1119).t["q38/ae"]);
  }
  let topic;
  if (stateFromStores1 != null) {
    topic = stateFromStores1.topic;
  }
  let tmp23Result = null;
  if (null != topic) {
    tmp23Result = null;
    if ("" !== str.trim()) {
      const obj6 = { spacing: 4, style: tmp4.subtitleContainer, children: null };
      const obj7 = { style: tmp4.subtitleMeasure, pointerEvents: "none", children: null };
      const obj8 = { variant: "text-md/medium", maxFontSizeMultiplier: 2, onTextLayout: callback1, children: null };
      const obj9 = { channelId: stateFromStores1.id };
      obj8.children = tmp6(4780).parseTopic(stateFromStores1.topic, true, obj9);
      obj7.children = closure_10(tmp(4786).Text, obj8);
      const items5 = [closure_10(View, obj7), , , ];
      const obj10 = { color: "text-muted", variant: "text-md/medium", style: tmp4.subtitle, maxFontSizeMultiplier: 2, lineClamp: 3, children: null };
      const tmp23 = closure_11;
      const tmp25 = View;
      const tmp6Result = tmp6(4780);
      const obj11 = { channelId: stateFromStores1.id };
      obj10.children = tmp6(4780).parseTopic(stateFromStores1.topic, true, obj11);
      items5[1] = closure_10(tmp(4786).Text, obj10);
      let tmp24Result = null;
      if (tmp5[0]) {
        const obj12 = { onPress: callback2, accessibilityRole: "button", children: null };
        const obj13 = { variant: "text-sm/medium", color: "text-brand", style: { textDecorationLine: "underline" }, children: null };
        const intl2 = tmp(1119).intl;
        obj13.children = intl2.string(tmp(1119).t["/QvRak"]);
        obj12.children = tmp24(tmp(4786).Text, obj13);
        tmp24Result = tmp24(tmp(5373).PressableHighlight, obj12);
      }
      items5[2] = tmp24Result;
      const obj14 = { style: tmp4.divider };
      items5[3] = closure_10(tmp25, obj14);
      obj6.children = items5;
      tmp23Result = tmp23(tmp(5218).Stack, obj6);
      const tmp6Result3 = tmp6(4780);
    }
    str = stateFromStores1.topic;
  }
  const obj15 = { modalType: null, onAgree: null, onDisagree: null, title: null, subtitle: null, description: null, agreement: null, disagreement: null, guildId: null, channelId: null };
  const tmp20 = closure_10;
  tmp7 = useChannelNameDefault(stateFromStores1);
  obj15.modalType = require("AgeVerificationAnalyticsUtils").NsfwSpaceWarningModalType.SPOILER_CHANNEL;
  obj15.onAgree = function onAgree() {
    GuildActionCreatorsDefault.spoilerAgree(channelId.channelId);
  };
  obj15.onDisagree = callback;
  obj15.title = stringResult;
  obj15.subtitle = tmp23Result;
  const intl3 = tmp(1119).intl;
  obj15.description = intl3.string(require("util").t["08bm2Z"]);
  const intl4 = tmp(1119).intl;
  obj15.agreement = intl4.string(require("util").t.KmRwcW);
  const intl5 = tmp(1119).intl;
  obj15.disagreement = intl5.string(require("util").t["/g10LC"]);
  let id;
  if (stateFromStores != null) {
    id = stateFromStores.id;
  }
  obj15.guildId = id;
  obj15.channelId = channelId.channelId;
  return tmp20(GatedContentDefault, obj15);
});
