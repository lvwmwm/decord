// Module ID: 11469
// Function ID: 89332
// Name: SpamMessageRequestHamActionSheet
// Dependencies: []
// Exports: default

// Module 11469 (SpamMessageRequestHamActionSheet)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
const View = arg1(dependencyMap[2]).View;
let closure_6 = importDefault(dependencyMap[3]);
({ jsx: closure_7, jsxs: closure_8 } = arg1(dependencyMap[4]));
let obj = arg1(dependencyMap[5]);
obj = {};
obj = { backgroundColor: importDefault(dependencyMap[6]).colors.BACKGROUND_SURFACE_HIGH };
obj.header = obj;
const tmp2 = arg1(dependencyMap[4]);
obj.container = { marginTop: importDefault(dependencyMap[6]).space.PX_24, paddingHorizontal: importDefault(dependencyMap[6]).space.PX_16 };
const obj1 = { marginTop: importDefault(dependencyMap[6]).space.PX_24, paddingHorizontal: importDefault(dependencyMap[6]).space.PX_16 };
obj.buttonContainer = { marginTop: importDefault(dependencyMap[6]).space.PX_24 };
obj.switch = { paddingHorizontal: 0 };
let closure_9 = obj.createStyles(obj);
const obj2 = { marginTop: importDefault(dependencyMap[6]).space.PX_24 };
const result = arg1(dependencyMap[18]).fileFinishedImporting("modules/message_request/native/spam/SpamMessageHamActionSheet.tsx");

export default function SpamMessageRequestHamActionSheet(arg0) {
  let isAcceptLoading;
  let isOptimisticAccepted;
  ({ channel: closure_0, onConfirm: closure_1, onCancel: closure_2 } = arg0);
  const tmp = callback3();
  const tmp2 = callback(React.useState(false), 2);
  const first = tmp2[0];
  const callback = first;
  const React = tmp2[1];
  let obj = arg1(dependencyMap[7]);
  const items = [closure_6];
  const stateFromStores = obj.useStateFromStores(items, () => user.getUser(recipientId.getRecipientId()));
  let obj1 = arg1(dependencyMap[8]);
  obj = {
    user: stateFromStores,
    onError() {
      let obj = callback(closure_2[9]);
      obj = { key: "MESSAGE_REQUEST_REQUEST_ERROR_ALERT_TITLE" };
      const intl = recipientId(closure_2[10]).intl;
      obj.content = intl.string(recipientId(closure_2[10]).t.EDYbS+);
      obj.icon = callback(closure_2[11]);
      obj.open(obj);
    },
    onAcceptSuccess() {
      callback(closure_2[12]).hideActionSheet();
    }
  };
  const messageRequestActions = obj1.useMessageRequestActions(obj);
  ({ acceptMessageRequest: closure_5, isAcceptLoading, isOptimisticAccepted } = messageRequestActions);
  obj = {
    onDismiss() {
      callback2();
    }
  };
  obj1 = {};
  const intl = arg1(dependencyMap[10]).intl;
  obj1.title = intl.string(arg1(dependencyMap[10]).t.9ty6yc);
  obj1.trailing = callback2(arg1(dependencyMap[15]).ActionSheetCloseButton, {
    onPress() {
      callback(callback2[12]).hideActionSheet();
      callback2();
    }
  });
  obj1.backgroundColor = tmp.header;
  const items1 = [callback2(arg1(dependencyMap[14]).BottomSheetTitleHeader, obj1), ];
  const obj3 = { style: tmp.container };
  const obj4 = { style: tmp.switch };
  const intl2 = arg1(dependencyMap[10]).intl;
  obj4.label = intl2.string(arg1(dependencyMap[10]).t.ZhGpNQ);
  obj4.value = first;
  obj4.switchProps = { renderIosBackground: true };
  obj4.onValueChange = function onValueChange(arg0) {
    return callback3(arg0);
  };
  const items2 = [callback2(arg1(dependencyMap[16]).FormSwitchRow, obj4), ];
  const obj5 = { style: tmp.buttonContainer };
  const obj6 = {
    size: "md",
    onPress() {
      callback(first);
      callback4(recipientId.id);
    }
  };
  const intl3 = arg1(dependencyMap[10]).intl;
  obj6.text = intl3.string(arg1(dependencyMap[10]).t.olZgw5);
  let isUserProfileLoading = isAcceptLoading;
  if (!isAcceptLoading) {
    isUserProfileLoading = messageRequestActions.isUserProfileLoading;
  }
  if (!isUserProfileLoading) {
    isUserProfileLoading = isOptimisticAccepted;
  }
  obj6.disabled = isUserProfileLoading;
  if (!isAcceptLoading) {
    isAcceptLoading = isOptimisticAccepted;
  }
  obj6.loading = isAcceptLoading;
  obj5.children = callback2(arg1(dependencyMap[17]).Button, obj6);
  items2[1] = callback2(View, obj5);
  obj3.children = items2;
  items1[1] = closure_8(View, obj3);
  obj.children = items1;
  return closure_8(arg1(dependencyMap[13]).BottomSheet, obj);
};
