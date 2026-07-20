// Module ID: 7496
// Function ID: 60112
// Name: ErrorText
// Dependencies: []
// Exports: ErrorText

// Module 7496 (ErrorText)
let closure_2 = importAll(dependencyMap[0]);
({ jsx: closure_3, jsxs: closure_4 } = arg1(dependencyMap[1]));
const tmp2 = arg1(dependencyMap[1]);
const result = arg1(dependencyMap[7]).fileFinishedImporting("design/components/ErrorText/native/ErrorText.native.tsx");

export const ErrorText = function ErrorText(children) {
  children = children.children;
  let obj = arg1(dependencyMap[2]);
  const nodeText = obj.getNodeText(children);
  const arg1 = nodeText;
  const items = [nodeText];
  const effect = React.useEffect(() => {
    let tmp = null != nodeText;
    if (tmp) {
      tmp = "" !== nodeText;
    }
    if (tmp) {
      const AccessibilityAnnouncer = nodeText(closure_1[3]).AccessibilityAnnouncer;
      AccessibilityAnnouncer.announce(nodeText);
    }
  }, items);
  obj = { onLongPressLink: null, onTapReaction: "\u{1F44A}\u{1F3FC}", onTapMessage: true, style: children.style };
  const items1 = [callback(arg1(dependencyMap[5]).CircleErrorIcon, { flexDirection: true, alignItems: true }), callback(arg1(dependencyMap[6]).Text, { children })];
  obj.children = items1;
  return callback2(arg1(dependencyMap[4]).Stack, obj);
};
