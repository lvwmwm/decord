// Module ID: 18248
// Function ID: 18249
// Name: TextDisplayComponent
// Dependencies: [32, 19, 5244, 5092, 5146, 8590, 21, 8591, 38, 5994, 8579, 504, 5068, 12331, 18249, 12496, 12417, 2]
// Exports: default

// Module 18248 (TextDisplayComponent)
import Fragment from "Fragment" /* 21 */;
import MarkupUtilsDefault from "MarkupUtils" /* 5994 */;
import renderMessageMarkup from "renderMessageMarkup" /* 8579 */;
import InteractionComponentConstants from "InteractionComponentConstants" /* 8590 */;
import handleMessagesTapLink from "handleMessagesTapLink" /* 12496 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5244 */;
import ChannelStore from "ChannelStore" /* 5092 */;
import SelectedChannelStore from "SelectedChannelStore" /* 5146 */;
import size from "module_2" /* 2 */;

let closure_8 = InteractionComponentConstants.TEXT_DISPLAY_COMPONENT_MARKDOWN_RENDER_OPTIONS;
const jsx = Fragment.jsx;
let result = size.fileFinishedImporting("modules/interaction_components/native/display/TextDisplayComponent.tsx");

export default function TextDisplayComponent(type) {
  let renderOptions;
  let tmp6;
  let tmp7;
  const f116022 = () => {
    const items = [, ];
    ({ roleStyle: arr[0], alwaysShowLinkDecorations: arr[1] } = AccessibilityStore);
    return items;
  };
  type = type.type;
  const id = type.id;
  const content = type.content;
  let obj = type(content[7]);
  const componentContainerId = obj.useComponentContainerId();
  const channelId = SelectedChannelStore.getChannelId();
  id(content[8])(null != channelId, "channelId not available in TextDisplayComponent");
  let items = [type, id, content, channelId];
  const memo = react.useMemo(() => {
    let obj2;
    let obj3;
    let parseToAST;
    const obj = { type, id, content: parseToAST(content, true, obj2.getInitialParserState(obj3)) };
    parseToAST = MarkupUtilsDefault.parseToAST;
    MarkupUtilsDefault;
    obj2 = renderMessageMarkup;
    obj3 = { channelId, renderOptions };
    return stringify(obj);
  }, items);
  let obj2 = type(content[11]);
  const items1 = [AccessibilityStore];
  [tmp6, tmp7] = channelId(obj2.useStateFromStoresArray(items1, f116022), 2);
  channelId(obj2.useStateFromStoresArray(items1, f116022), 2);
  const AnimateEmoji = type(content[12]).AnimateEmoji;
  const setting = AnimateEmoji.useSetting();
  let obj3 = type(content[11]);
  const items2 = [ChannelStore];
  const stateFromStores = obj3.useStateFromStores(items2, () => ChannelStore.getChannel(channelId));
  const obj4 = type(content[13]);
  const shouldDisplaySpoilerObscurity = obj4.useShouldDisplaySpoilerObscurity(stateFromStores);
  const obj6 = { containerId: componentContainerId, shouldAnimateEmoji: setting, shouldShowLinkDecorations: tmp7, shouldForceRevealSpoilers: !shouldDisplaySpoilerObscurity, shouldShowRoleDot: "dot" === tmp6, shouldShowRoleOnName: "username" === tmp6 };
  id(content[14]);
  return <tmp11 model={memo} markdownTextRenderOptions={obj6} onTapLink={function onTapLink(nativeEvent) {
    const data = nativeEvent.nativeEvent.data;
    const obj = handleMessagesTapLink;
    const result = obj.handleMessagesTapURLLink(data, channelId);
  }} onLongPressLink={type(content[16]).contentHandlers.onLongPressLink} onTapAttachmentLink={type(content[16]).contentHandlers.onTapAttachmentLink} onLongPressAttachmentLink={type(content[16]).contentHandlers.onLongPressAttachmentLink} onTapMention={type(content[16]).contentHandlers.onTapMention} onTapTimestamp={type(content[16]).contentHandlers.onTapTimestamp} onTapInlineCode={type(content[16]).contentHandlers.onTapInlineCode} onTapEmoji={type(content[16]).contentHandlers.onTapEmoji} style={{ width: "100%" }} />;
};
