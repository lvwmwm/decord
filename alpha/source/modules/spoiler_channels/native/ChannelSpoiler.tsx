// Module ID: 12318
// Function ID: 12319
// Name: ChannelSpoiler
// Dependencies: [32, 19, 17, 4906, 2051, 2074, 11900, 21, 4890, 587, 558, 576, 504, 5043, 11901, 5091, 5705, 4737, 5812, 4886, 1126, 5593, 4877, 5909, 12317, 8086, 2]

// Module 12318 (ChannelSpoiler)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import RootNavigationRef from "RootNavigationRef" /* 4737 */;
import MarkupUtilsDefault from "MarkupUtils" /* 4877 */;
import useChannelNameDefault from "useChannelName" /* 5043 */;
import ChannelRTCActionCreatorsDefault from "ChannelRTCActionCreators" /* 5091 */;
import GuildActionCreatorsDefault from "GuildActionCreators" /* 5705 */;
import VoicePanelControlsConstants from "VoicePanelControlsConstants" /* 11900 */;
import GatedContentDefault from "GatedContent" /* 12317 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ChannelRTCStore from "ChannelRTCStore" /* 4906 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import GuildStore from "GuildStore" /* 2074 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap, importDefault;

let c10;
let size;
let tmp14;
let unpackModuleId;
const VoicePanelStateContextDefault = tmp14(11901);
const View = react_native.View;
const VoicePanelControlsModes = VoicePanelControlsConstants.VoicePanelControlsModes;
({ jsx: c10, jsxs: unpackModuleId } = Fragment);
let obj = { subtitle: { textAlign: "center", lineHeight: 22 }, subtitleContainer: { alignItems: "center" }, divider: size, subtitleMeasure: { position: "absolute", opacity: 0, left: 0, right: 0 } };
size = { height: 1, width: "100%", backgroundColor: nativeDefault.colors.BORDER_SUBTLE, marginVertical: 16 };
let closure_12 = createStyles.createStyles(obj);
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((guildId) => {
  let c2;
  let first;
  let setControlsMode;
  let tmp10;
  let tmp6;
  let tmp8;
  _require = guildId;
  let tmp = _require;
  let obj = require("react");
  const cResult = obj.c(38);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== guildId.guildId) {
    const fn = function v() {
      return GuildStore.getGuild(guildId.guildId);
    };
    cResult[1] = guildId.guildId;
    cResult[2] = fn;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const tmpResult = tmp(504);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp6);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [ChannelStore];
    cResult[3] = items1;
    tmp8 = items1;
  } else {
    tmp8 = cResult[3];
  }
  if (cResult[4] !== guildId.channelId) {
    class S {
      constructor() {
        return ChannelStore.getChannel(guildId.channelId);
      }
    }
    cResult[4] = guildId.channelId;
    cResult[5] = S;
    tmp10 = S;
  } else {
    class S {
      constructor() {
        return ChannelStore.getChannel(guildId.channelId);
      }
    }
  }
  const tmpResult2 = tmp(504);
  const stateFromStores1 = tmpResult2.useStateFromStores(tmp8, tmp10);
  closure_12();
  [r10058, importDefault] = setControlsMode(react.useState(false), 2);
  setControlsMode(react.useState(false), 2);
  useChannelNameDefault(stateFromStores1);
  const obj4 = react;
  if (cResult[6] !== stateFromStores1) {
    class S {
      constructor() {
        return ChannelStore.getChannel(guildId.channelId);
      }
    }
    if (stateFromStores1 != null) {
      class S {
        constructor() {
          return ChannelStore.getChannel(guildId.channelId);
        }
      }
    }
    cResult[6] = stateFromStores1;
    cResult[7] = undefined;
  } else {
    class S {
      constructor() {
        return ChannelStore.getChannel(guildId.channelId);
      }
    }
  }
  dependencyMap = tmp16;
  setControlsMode = obj4.useContext(VoicePanelStateContextDefault).setControlsMode;
  if (cResult[8] === tmp16) {
    class S {
      constructor() {
        return ChannelStore.getChannel(guildId.channelId);
      }
    }
  }
  const fn2 = function k() {
    const tmp = c2;
    if (tmp) {
      const tmp3 = guildId;
      if (ChannelRTCStore.getChatOpen(guildId.channelId)) {
        const obj2 = ChannelRTCActionCreatorsDefault;
        obj2.updateChatOpen(tmp3.channelId, false);
        const obj3 = { mode: VoicePanelControlsModes.FLOATING_DEFAULT };
        setControlsMode(obj3);
      }
    }
    const obj = GuildActionCreatorsDefault;
    obj.nsfwReturnToSafety(guildId.guildId);
  };
  cResult[8] = tmp16;
  cResult[9] = guildId.channelId;
  cResult[10] = guildId.guildId;
  cResult[11] = setControlsMode;
  cResult[12] = fn2;
}) : ((channelId) => {
  let Text;
  let Text2;
  let closure_1;
  let id;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let items4;
  let items5;
  let obj11;
  let obj13;
  let obj8;
  let obj9;
  let setControlsMode;
  let stringResult;
  let tmp7Result;
  let tmp7Result3;
  _require = channelId;
  let tmp = _require;
  let obj = require("get initialized");
  const items = [GuildStore];
  const stateFromStores = obj.useStateFromStores(items, () => GuildStore.getGuild(channelId.guildId));
  let obj2 = require("get initialized");
  const items1 = [ChannelStore];
  const stateFromStores1 = obj2.useStateFromStores(items1, () => ChannelStore.getChannel(channelId.channelId));
  const tmp4 = closure_12();
  const tmp5 = setControlsMode(react.useState(false), 2);
  importDefault = tmp5[1];
  const first = tmp5[0];
  let isVocalResult;
  const tmp8 = useChannelNameDefault(stateFromStores1);
  if (stateFromStores1 != null) {
    isVocalResult = stateFromStores1.isVocal();
  }
  dependencyMap = isVocalResult;
  setControlsMode = obj4.useContext(tmp7(11901)).setControlsMode;
  const items2 = [, , , ];
  ({ guildId: arr3[0], channelId: arr3[1] } = channelId);
  items2[2] = setControlsMode;
  items2[3] = isVocalResult;
  const callback = obj4.useCallback(() => {
    const tmp = dependencyMap;
    if (tmp) {
      const tmp3 = channelId;
      if (ChannelRTCStore.getChatOpen(channelId.channelId)) {
        const obj2 = ChannelRTCActionCreatorsDefault;
        obj2.updateChatOpen(tmp3.channelId, false);
        const obj3 = { mode: VoicePanelControlsModes.FLOATING_DEFAULT };
        setControlsMode(obj3);
      }
    }
    const obj = GuildActionCreatorsDefault;
    obj.nsfwReturnToSafety(channelId.guildId);
  }, items2);
  const items3 = [channelId.channelId];
  const callback1 = obj4.useCallback((nativeEvent) => {
    closure_1(nativeEvent.nativeEvent.lines.length > 3);
  }, []);
  let channelIconComponent = null;
  const callback2 = obj4.useCallback(() => {
    const obj = RootNavigationRef;
    const rootNavigationRef = obj.getRootNavigationRef();
    if (rootNavigationRef != null) {
      const obj2 = { channelId: channelId.channelId, expandTopic: true };
      rootNavigationRef.navigate("sidebar", obj2);
    }
  }, items3);
  if (null != stateFromStores1) {
    const tmpResult = tmp(5812);
    channelIconComponent = tmpResult.getChannelIconComponent(stateFromStores1);
  }
  if (null != channelIconComponent) {
    let obj3 = { style: { flexDirection: "row", alignItems: "center", gap: 4, flexShrink: 1 }, children: items4 };
    items4 = [closure_10(channelIconComponent, { size: "lg", color: "mobile-text-heading-primary" }), ];
    const obj5 = { variant: "heading-xxl/bold", color: "mobile-text-heading-primary", lineClamp: 1, style: { flexShrink: 1 }, children: tmp8 };
    items4[1] = closure_10(tmp(4886).Text, obj5);
    stringResult = closure_11(View, obj3);
  } else {
    const intl = tmp(1126).intl;
    stringResult = intl.string(tmp(1126).t["q38/ae"]);
  }
  let topic;
  if (stateFromStores1 != null) {
    topic = stateFromStores1.topic;
  }
  let tmp24Result = null;
  if (null != topic) {
    tmp24Result = null;
    const str = stateFromStores1.topic;
    if ("" !== str.trim()) {
      const obj6 = { spacing: 4, style: tmp4.subtitleContainer, children: items5 };
      const obj7 = { style: tmp4.subtitleMeasure, pointerEvents: "none", children: closure_10(Text2, obj8) };
      const Stack = tmp(5593).Stack;
      obj8 = { variant: "text-md/medium", maxFontSizeMultiplier: 2, onTextLayout: callback1, children: tmp7Result.parseTopic(stateFromStores1.topic, true, obj9) };
      Text2 = tmp(4886).Text;
      obj9 = { channelId: stateFromStores1.id };
      tmp7Result = MarkupUtilsDefault;
      items5 = [closure_10(View, obj7), , , ];
      const obj10 = { color: "text-muted", variant: "text-md/medium", style: tmp4.subtitle, maxFontSizeMultiplier: 2, lineClamp: 3, children: tmp7Result3.parseTopic(stateFromStores1.topic, true, obj11) };
      const Text3 = tmp(4886).Text;
      obj11 = { channelId: stateFromStores1.id };
      tmp7Result3 = MarkupUtilsDefault;
      items5[1] = closure_10(Text3, obj10);
      let tmp25Result = null;
      const tmp24 = closure_11;
      const tmp26 = View;
      if (first) {
        const obj12 = { onPress: callback2, accessibilityRole: "button", children: closure_10(Text, obj13) };
        const PressableHighlight = tmp(5909).PressableHighlight;
        obj13 = { variant: "text-sm/medium", color: "text-brand", style: { textDecorationLine: "underline" }, children: intl2.string(tmp(1126).t["/QvRak"]) };
        Text = tmp(4886).Text;
        intl2 = tmp(1126).intl;
        tmp25Result = tmp25(PressableHighlight, obj12);
      }
      items5[2] = tmp25Result;
      const obj14 = { style: tmp4.divider };
      items5[3] = closure_10(tmp26, obj14);
      tmp24Result = tmp24(Stack, obj6);
    }
  }
  const obj15 = {
    modalType: tmp(8086).NsfwSpaceWarningModalType.SPOILER_CHANNEL,
    onAgree() {
      const obj = GuildActionCreatorsDefault;
      obj.spoilerAgree(channelId.channelId);
    },
    onDisagree: callback,
    title: stringResult,
    subtitle: tmp24Result,
    description: intl3.string(tmp(1126).t["08bm2Z"]),
    agreement: intl4.string(tmp(1126).t.KmRwcW),
    disagreement: intl5.string(tmp(1126).t["/g10LC"]),
    guildId: id,
    channelId: channelId.channelId
  };
  const tmp7Result4 = GatedContentDefault;
  intl3 = tmp(1126).intl;
  intl4 = tmp(1126).intl;
  intl5 = tmp(1126).intl;
  id = undefined;
  const tmp21 = closure_10;
  if (stateFromStores != null) {
    id = stateFromStores.id;
  }
  return tmp21(tmp7Result4, obj15);
});
size = size_mod;
const result = size.fileFinishedImporting("modules/spoiler_channels/native/ChannelSpoiler.tsx");

export default tmp3;
