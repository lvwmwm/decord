// Module ID: 14561
// Function ID: 109717
// Dependencies: []

// Module 14561
let closure_3 = importDefault(dependencyMap[0]);
importAll(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[3]);
let closure_5 = importDefault(dependencyMap[4]);
let closure_6 = arg1(dependencyMap[5]).TEXT_DISPLAY_COMPONENT_MARKDOWN_RENDER_OPTIONS;
const jsx = arg1(dependencyMap[6]).jsx;
if (!obj.isAndroid()) {
  if (!obj2.isFabric()) {
    let result = arg1(dependencyMap[2]).requireNativeComponent("DCDTextDisplayComponentView");
  }
  const obj2 = arg1(dependencyMap[8]);
  const result1 = arg1(dependencyMap[18]).fileFinishedImporting("modules/interaction_components/native/display/TextDisplayComponent.tsx");
  exports.default = function TextDisplayComponent(content) {
    let obj = arg1(dependencyMap[10]);
    const componentContainerId = obj.useComponentContainerId();
    const channelId = channelId.getChannelId();
    const arg1 = channelId;
    importDefault(dependencyMap[11])(channelId, "channelId not available in TextDisplayComponent");
    let obj1 = importDefault(dependencyMap[12]);
    let obj2 = arg1(dependencyMap[13]);
    obj = { channelId, renderOptions: closure_6 };
    const parseToASTResult = obj1.parseToAST(content.content, true, obj2.getInitialParserState(obj));
    const items = [closure_4];
    const tmp5 = callback(arg1(dependencyMap[14]).useStateFromStoresArray(items, () => {
      const items = [, ];
      ({ roleStyle: arr[0], alwaysShowLinkDecorations: arr[1] } = closure_4);
      return items;
    }), 2);
    const first = tmp5[0];
    const AnimateEmoji = arg1(dependencyMap[15]).AnimateEmoji;
    obj = {};
    obj1 = {};
    const setting = AnimateEmoji.useSetting();
    const merged = Object.assign(content);
    obj1["content"] = parseToASTResult;
    obj.model = obj1;
    obj2 = { containerId: componentContainerId, shouldAnimateEmoji: setting, shouldShowLinkDecorations: tmp5[1], shouldShowRoleDot: "dot" === first, shouldShowRoleOnName: "username" === first };
    obj.markdownTextRenderOptions = obj2;
    obj.onTapLink = function onTapLink(nativeEvent) {
      const result = channelId(closure_2[16]).handleMessagesTapURLLink(nativeEvent.nativeEvent.data, channelId);
    };
    obj.onLongPressLink = arg1(dependencyMap[17]).contentHandlers.onLongPressLink;
    obj.onTapAttachmentLink = arg1(dependencyMap[17]).contentHandlers.onTapAttachmentLink;
    obj.onLongPressAttachmentLink = arg1(dependencyMap[17]).contentHandlers.onLongPressAttachmentLink;
    obj.onTapMention = arg1(dependencyMap[17]).contentHandlers.onTapMention;
    obj.onTapTimestamp = arg1(dependencyMap[17]).contentHandlers.onTapTimestamp;
    obj.onTapInlineCode = arg1(dependencyMap[17]).contentHandlers.onTapInlineCode;
    obj.onTapEmoji = arg1(dependencyMap[17]).contentHandlers.onTapEmoji;
    obj.style = { width: "100%" };
    return <result {...obj} />;
  };
}
result = importDefault(dependencyMap[9]);
