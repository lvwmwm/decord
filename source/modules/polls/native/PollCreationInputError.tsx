// Module ID: 11325
// Function ID: 88100
// Name: PollCreationInputError
// Dependencies: []
// Exports: default

// Module 11325 (PollCreationInputError)
let closure_2 = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
({ jsx: closure_4, jsxs: closure_5 } = arg1(dependencyMap[2]));
let obj = arg1(dependencyMap[3]);
obj = { container: { onTapButtonActionComponent: 0, onTapSelectActionComponent: 0, onTapWelcomeReply: null } };
obj = { height: "<string:1459617792>", backgroundColor: "<string:1275068417>", color: importDefault(dependencyMap[4]).colors.TEXT_FEEDBACK_CRITICAL };
obj.icon = obj;
let closure_6 = obj.createStyles(obj);
const tmp2 = arg1(dependencyMap[2]);
const result = arg1(dependencyMap[8]).fileFinishedImporting("modules/polls/native/PollCreationInputError.tsx");

export default function PollCreationInputError(message) {
  message = message.message;
  const arg1 = message;
  const tmp = callback3();
  const items = [message];
  const effect = React.useEffect(() => {
    let tmp = null != message;
    if (tmp) {
      tmp = "" !== message;
    }
    if (tmp) {
      const AccessibilityAnnouncer = message(closure_1[5]).AccessibilityAnnouncer;
      AccessibilityAnnouncer.announce(message);
    }
  }, items);
  let obj = { style: tmp.container };
  obj = { style: tmp.icon };
  const items1 = [callback(arg1(dependencyMap[6]).WarningCircle, obj), callback(arg1(dependencyMap[7]).Text, { children: message })];
  obj.children = items1;
  return callback2(View, obj);
};
