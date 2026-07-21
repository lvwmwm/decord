// Module ID: 15442
// Function ID: 117808
// Name: MessageRequestEmpty
// Dependencies: []
// Exports: default

// Module 15442 (MessageRequestEmpty)
importAll(dependencyMap[0]);
const jsx = arg1(dependencyMap[1]).jsx;
const result = arg1(dependencyMap[4]).fileFinishedImporting("modules/message_request/native/MessageRequestEmpty.tsx");

export default function MessageRequestEmpty(bodyText) {
  const obj = { Illustration: arg1(dependencyMap[3]).Pending, body: bodyText.bodyText };
  return jsx(arg1(dependencyMap[2]).EmptyState, obj);
};
