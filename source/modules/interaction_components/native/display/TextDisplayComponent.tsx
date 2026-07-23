// Module ID: 14687
// Function ID: 111956
// Dependencies: [57, 31, 27, 4122, 1906, 7793, 33, 477, 3994, 14688, 7794, 44, 4120, 7779, 566, 3803, 9483, 10865, 2]

// Module 14687
import _slicedToArray from "_slicedToArray";
import "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import { TEXT_DISPLAY_COMPONENT_MARKDOWN_RENDER_OPTIONS as closure_6 } from "TEXT_DISPLAY_COMPONENT_MARKDOWN_RENDER_OPTIONS";
import { jsx } from "jsxProd";
import result from "__INTERNAL_VIEW_CONFIG";

const require = arg1;
if (!set.isAndroid()) {
  if (!obj2.isFabric()) {
    let result = require("get ActivityIndicator").requireNativeComponent("DCDTextDisplayComponentView");
  }
  obj2 = require("isFabric");
  const result1 = require("get ActivityIndicator").fileFinishedImporting("modules/interaction_components/native/display/TextDisplayComponent.tsx");
  exports.default = function TextDisplayComponent(content) {
    let obj = channelId(7794);
    const componentContainerId = obj.useComponentContainerId();
    channelId = channelId.getChannelId();
    importDefault(44)(channelId, "channelId not available in TextDisplayComponent");
    let obj1 = importDefault(4120);
    let obj2 = channelId(7779);
    obj = { channelId, renderOptions: closure_6 };
    const parseToASTResult = obj1.parseToAST(content.content, true, obj2.getInitialParserState(obj));
    let items = [_isNativeReflectConstruct];
    const tmp5 = callback(channelId(566).useStateFromStoresArray(items, () => {
      const items = [, ];
      ({ roleStyle: arr[0], alwaysShowLinkDecorations: arr[1] } = outer1_4);
      return items;
    }), 2);
    const first = tmp5[0];
    const AnimateEmoji = channelId(3803).AnimateEmoji;
    obj = {};
    obj1 = {};
    const setting = AnimateEmoji.useSetting();
    const merged = Object.assign(content);
    obj1["content"] = parseToASTResult;
    obj.model = obj1;
    obj2 = { containerId: componentContainerId, shouldAnimateEmoji: setting, shouldShowLinkDecorations: tmp5[1], shouldShowRoleDot: "dot" === first, shouldShowRoleOnName: "username" === first };
    obj.markdownTextRenderOptions = obj2;
    obj.onTapLink = function onTapLink(nativeEvent) {
      const result = channelId(outer1_2[16]).handleMessagesTapURLLink(nativeEvent.nativeEvent.data, channelId);
    };
    obj.onLongPressLink = channelId(10865).contentHandlers.onLongPressLink;
    obj.onTapAttachmentLink = channelId(10865).contentHandlers.onTapAttachmentLink;
    obj.onLongPressAttachmentLink = channelId(10865).contentHandlers.onLongPressAttachmentLink;
    obj.onTapMention = channelId(10865).contentHandlers.onTapMention;
    obj.onTapTimestamp = channelId(10865).contentHandlers.onTapTimestamp;
    obj.onTapInlineCode = channelId(10865).contentHandlers.onTapInlineCode;
    obj.onTapEmoji = channelId(10865).contentHandlers.onTapEmoji;
    obj.style = { width: "100%" };
    return <closure_8 />;
  };
}
