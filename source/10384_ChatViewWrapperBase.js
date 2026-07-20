// Module ID: 10384
// Function ID: 80064
// Name: ChatViewWrapperBase
// Dependencies: []
// Exports: default

// Module 10384 (ChatViewWrapperBase)
importAll(dependencyMap[0]);
const jsx = arg1(dependencyMap[1]).jsx;
const result = arg1(dependencyMap[5]).fileFinishedImporting("modules/chat/native/ChatViewWrapperBase.tsx");

export default function ChatViewWrapperBase(arg0) {
  let channelId;
  let children;
  let stickyHeader;
  let style;
  ({ channelId, children, stickyHeader, style } = arg0);
  const obj = { children: jsx(arg1(dependencyMap[4]).StickyWrapper, { header: stickyHeader, style, pointerEvents: importDefault(dependencyMap[2])(channelId), children }) };
  return jsx(arg1(dependencyMap[3]).LayerScope, obj);
};
