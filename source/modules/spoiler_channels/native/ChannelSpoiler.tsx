// Module ID: 10012
// Function ID: 77370
// Name: ChannelSpoiler
// Dependencies: [57, 31, 27, 4143, 1348, 1838, 10013, 33, 4130, 689, 566, 4320, 10014, 4323, 5048, 3982, 4593, 4126, 1212, 4541, 4120, 4660, 10011, 7538, 2]
// Exports: default

// Module 10012 (ChannelSpoiler)
import _slicedToArray from "_slicedToArray";
import result from "result";
import { View } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import closure_8 from "_createForOfIteratorHelperLoose";
import { VoicePanelControlsModes } from "VoicePanelControlsModes";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_11;
const require = arg1;
({ jsx: closure_10, jsxs: closure_11 } = jsxProd);
_createForOfIteratorHelperLoose = { subtitle: { textAlign: "center", lineHeight: 22 }, subtitleContainer: { alignItems: "center" } };
_createForOfIteratorHelperLoose = { height: 1, width: "100%", backgroundColor: require("_createForOfIteratorHelperLoose").colors.BORDER_SUBTLE, marginVertical: 16 };
_createForOfIteratorHelperLoose.divider = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.subtitleMeasure = { position: "absolute", opacity: 0, left: 0, right: 0 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("get ActivityIndicator").fileFinishedImporting("modules/spoiler_channels/native/ChannelSpoiler.tsx");

export default function ChannelSpoiler(channelId) {
  const _require = channelId;
  let obj = _require(566);
  const items = [closure_8];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_8.getGuild(channelId.guildId));
  let obj1 = _require(566);
  const items1 = [closure_7];
  const stateFromStores1 = obj1.useStateFromStores(items1, () => outer1_7.getChannel(channelId.channelId));
  const tmp2 = _createForOfIteratorHelperLoose();
  const tmp3 = setControlsMode(React.useState(false), 2);
  const importDefault = tmp3[1];
  let isVocalResult;
  if (null != stateFromStores1) {
    isVocalResult = stateFromStores1.isVocal();
  }
  const dependencyMap = isVocalResult;
  setControlsMode = React.useContext(importDefault(10014)).setControlsMode;
  const items2 = [, , , ];
  ({ guildId: arr3[0], channelId: arr3[1] } = channelId);
  items2[2] = setControlsMode;
  items2[3] = isVocalResult;
  const callback = React.useCallback(() => {
    if (closure_2) {
      if (outer1_6.getChatOpen(channelId.channelId)) {
        callback(isVocalResult[13]).updateChatOpen(channelId.channelId, false);
        let obj = { mode: outer1_9.FLOATING_DEFAULT };
        setControlsMode(obj);
      }
    }
    obj = callback(isVocalResult[14]);
    obj.nsfwReturnToSafety(channelId.guildId);
  }, items2);
  const items3 = [channelId.channelId];
  const callback1 = React.useCallback((nativeEvent) => {
    callback(nativeEvent.nativeEvent.lines.length > 3);
  }, []);
  let channelIconComponent = null;
  const callback2 = React.useCallback(() => {
    let obj = channelId(isVocalResult[15]);
    const rootNavigationRef = obj.getRootNavigationRef();
    if (null != rootNavigationRef) {
      obj = { channelId: channelId.channelId, expandTopic: true };
      rootNavigationRef.navigate("sidebar", obj);
    }
  }, items3);
  if (null != stateFromStores1) {
    let obj3 = _require(4593);
    channelIconComponent = obj3.getChannelIconComponent(stateFromStores1);
  }
  if (null != channelIconComponent) {
    obj = { style: { flexDirection: "row", alignItems: "center", gap: 4, flexShrink: 1 } };
    const items4 = [callback(channelIconComponent, { size: "lg", color: "mobile-text-heading-primary" }), ];
    obj = { variant: "heading-xxl/bold", color: "mobile-text-heading-primary", lineClamp: 1 };
    obj1 = { flexShrink: 1 };
    obj.style = obj1;
    obj.children = tmp4;
    items4[1] = callback(_require(4126).Text, obj);
    obj.children = items4;
    let stringResult = callback2(View, obj);
  } else {
    const intl = _require(1212).intl;
    stringResult = intl.string(_require(1212).t["q38/ae"]);
  }
  let topic;
  if (null != stateFromStores1) {
    topic = stateFromStores1.topic;
  }
  let tmp31Result = null;
  if (null != topic) {
    tmp31Result = null;
    if ("" !== str.trim()) {
      const obj2 = { spacing: 4, style: tmp2.subtitleContainer };
      obj3 = { style: tmp2.subtitleMeasure, pointerEvents: "none" };
      const obj4 = { variant: "text-md/medium", maxFontSizeMultiplier: 2, onTextLayout: callback1 };
      const obj5 = { channelId: stateFromStores1.id };
      obj4.children = importDefault(4120).parseTopic(stateFromStores1.topic, true, obj5);
      obj3.children = callback(_require(4126).Text, obj4);
      const items5 = [callback(View, obj3), , , ];
      const obj6 = { color: "text-muted", variant: "text-md/medium", style: tmp2.subtitle, maxFontSizeMultiplier: 2, lineClamp: 3 };
      const obj16 = importDefault(4120);
      const tmp31 = callback2;
      const obj7 = { channelId: stateFromStores1.id };
      obj6.children = importDefault(4120).parseTopic(stateFromStores1.topic, true, obj7);
      items5[1] = callback(_require(4126).Text, obj6);
      let tmp25 = null;
      if (tmp3[0]) {
        const obj8 = { onPress: callback2, accessibilityRole: "button" };
        const obj9 = { variant: "text-sm/medium", color: "text-brand" };
        const obj10 = { textDecorationLine: "underline" };
        obj9.style = obj10;
        const intl2 = _require(1212).intl;
        obj9.children = intl2.string(_require(1212).t["/QvRak"]);
        obj8.children = callback(_require(4126).Text, obj9);
        tmp25 = callback(_require(4660).PressableHighlight, obj8);
      }
      items5[2] = tmp25;
      const obj11 = { style: tmp2.divider };
      items5[3] = callback(View, obj11);
      obj2.children = items5;
      tmp31Result = tmp31(_require(4541).Stack, obj2);
      const obj19 = importDefault(4120);
    }
    str = stateFromStores1.topic;
  }
  const obj12 = {};
  const tmp28 = callback;
  tmp4 = importDefault(4320)(stateFromStores1);
  obj12.modalType = _require(7538).NsfwSpaceWarningModalType.SPOILER_CHANNEL;
  obj12.onAgree = function onAgree() {
    callback(isVocalResult[14]).spoilerAgree(channelId.channelId);
  };
  obj12.onDisagree = callback;
  obj12.title = stringResult;
  obj12.subtitle = tmp31Result;
  const intl3 = _require(1212).intl;
  obj12.description = intl3.string(_require(1212).t["08bm2Z"]);
  const intl4 = _require(1212).intl;
  obj12.agreement = intl4.string(_require(1212).t.KmRwcW);
  const intl5 = _require(1212).intl;
  obj12.disagreement = intl5.string(_require(1212).t["/g10LC"]);
  let id;
  if (null != stateFromStores) {
    id = stateFromStores.id;
  }
  obj12.guildId = id;
  obj12.channelId = channelId.channelId;
  return tmp28(importDefault(10011), obj12);
};
