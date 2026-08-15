// Module ID: 15169
// Function ID: 15170
// Name: TextDisplayComponent
// Dependencies: [32, 19, 4662, 1979, 8325, 21, 8326, 38, 6807, 8315, 589, 4066, 15170, 10802, 10783, 2]
// Exports: default

// Module 15169 (TextDisplayComponent)
import _slicedToArray from "_slicedToArray";
import "noop";
import maybeApplyNoTextColorForLightCustomTheme from "maybeApplyNoTextColorForLightCustomTheme";
import handleConnectionOpen from "handleConnectionOpen";
import { TEXT_DISPLAY_COMPONENT_MARKDOWN_RENDER_OPTIONS as closure_6 } from "TEXT_DISPLAY_COMPONENT_MARKDOWN_RENDER_OPTIONS";
import { jsx } from "jsxProd";

const require = arg1;
let result = require("maybeApplyNoTextColorForLightCustomTheme").fileFinishedImporting("modules/interaction_components/native/display/TextDisplayComponent.tsx");

export default function TextDisplayComponent(content) {
  let tmp6;
  let tmp7;
  let obj = channelId(8326);
  const componentContainerId = obj.useComponentContainerId();
  channelId = channelId.getChannelId();
  importDefault(38)(null != channelId, "channelId not available in TextDisplayComponent");
  let obj1 = importDefault(6807);
  let obj2 = channelId(8315);
  obj = { channelId, renderOptions: closure_6 };
  const parseToASTResult = obj1.parseToAST(content.content, true, obj2.getInitialParserState(obj));
  let items = [maybeApplyNoTextColorForLightCustomTheme];
  const obj5 = channelId(589);
  [tmp6, tmp7] = callback(channelId(589).useStateFromStoresArray(items, () => {
    const items = [, ];
    ({ roleStyle: arr[0], alwaysShowLinkDecorations: arr[1] } = maybeApplyNoTextColorForLightCustomTheme);
    return items;
  }), 2);
  const AnimateEmoji = channelId(4066).AnimateEmoji;
  const setting = AnimateEmoji.useSetting();
  obj = { model: null, markdownTextRenderOptions: null, onTapLink: null, onLongPressLink: null, onTapAttachmentLink: null, onLongPressAttachmentLink: null, onTapMention: null, onTapTimestamp: null, onTapInlineCode: null, onTapEmoji: null, style: null };
  obj1 = {};
  const tmp5 = callback(channelId(589).useStateFromStoresArray(items, () => {
    const items = [, ];
    ({ roleStyle: arr[0], alwaysShowLinkDecorations: arr[1] } = maybeApplyNoTextColorForLightCustomTheme);
    return items;
  }), 2);
  const merged = Object.assign(content);
  obj1.content = parseToASTResult;
  obj[0] = obj1;
  obj2 = { containerId: componentContainerId, shouldAnimateEmoji: setting, shouldShowLinkDecorations: tmp7, shouldShowRoleDot: "dot" === tmp6, shouldShowRoleOnName: "username" === tmp6 };
  obj[1] = obj2;
  obj[2] = function onTapLink(nativeEvent) {
    const result = channelId(outer1_2[13]).handleMessagesTapURLLink(nativeEvent.nativeEvent.data, channelId);
  };
  obj[3] = channelId(10783).contentHandlers.onLongPressLink;
  obj[4] = channelId(10783).contentHandlers.onTapAttachmentLink;
  obj[5] = channelId(10783).contentHandlers.onLongPressAttachmentLink;
  obj[6] = channelId(10783).contentHandlers.onTapMention;
  obj[7] = channelId(10783).contentHandlers.onTapTimestamp;
  obj[8] = channelId(10783).contentHandlers.onTapInlineCode;
  obj[9] = channelId(10783).contentHandlers.onTapEmoji;
  obj[10] = { width: "100%" };
  return jsx(importDefault(15170), { model: null, markdownTextRenderOptions: null, onTapLink: null, onLongPressLink: null, onTapAttachmentLink: null, onLongPressAttachmentLink: null, onTapMention: null, onTapTimestamp: null, onTapInlineCode: null, onTapEmoji: null, style: null });
};
