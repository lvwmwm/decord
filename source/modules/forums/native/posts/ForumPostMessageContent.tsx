// Module ID: 11137
// Function ID: 86626
// Name: ForumPostMessageContent
// Dependencies: []
// Exports: default

// Module 11137 (ForumPostMessageContent)
importAll(dependencyMap[0]);
const jsx = arg1(dependencyMap[1]).jsx;
let closure_4 = arg1(dependencyMap[2]).createStyles({ text: { alignSelf: "flex-start" } });
const obj = arg1(dependencyMap[2]);
const result = arg1(dependencyMap[5]).fileFinishedImporting("modules/forums/native/posts/ForumPostMessageContent.tsx");

export default function ForumPostMessageContent(senderModifier) {
  let content;
  let hasUnreads;
  let isMessageDeleted;
  let message;
  let messageContent;
  let messageLoaded;
  let style;
  let variant;
  let num = senderModifier.lineClamp;
  ({ messageContent, message, isMessageDeleted, hasUnreads, messageLoaded } = senderModifier);
  if (num === undefined) {
    num = 2;
  }
  const tmp = callback();
  ({ content, style, variant } = importDefault(dependencyMap[3])({ message, messageLoaded, messageContent, isMessageDeleted, senderModifier: senderModifier.senderModifier }));
  const obj = { variant };
  let str = "text-muted";
  if (hasUnreads) {
    str = "text-default";
  }
  obj.color = str;
  obj.lineClamp = num;
  obj.ellipsizeMode = "tail";
  const items = [style, tmp.text];
  obj.style = items;
  obj.children = content;
  return jsx(arg1(dependencyMap[4]).Text, obj);
};
