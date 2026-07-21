// Module ID: 10132
// Function ID: 78425
// Name: SafetyToolsActionSheetWrapper
// Dependencies: []
// Exports: default

// Module 10132 (SafetyToolsActionSheetWrapper)
let closure_3 = importAll(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
const jsx = arg1(dependencyMap[2]).jsx;
const result = arg1(dependencyMap[6]).fileFinishedImporting("modules/self_mod/shared/native/SafetyToolsActionSheetWrapper.tsx");

export default function SafetyToolsActionSheetWrapper(channelId) {
  let children;
  let hasHeaderBack;
  let headerTitle;
  let recipientId;
  let warningId;
  let warningType;
  channelId = channelId.channelId;
  const arg1 = channelId;
  const onClose = channelId.onClose;
  const importDefault = onClose;
  ({ headerTitle, hasHeaderBack, warningId, warningType, recipientId, children } = channelId);
  let obj = arg1(dependencyMap[3]);
  const items = [closure_4];
  const stateFromStores = obj.useStateFromStores(items, () => channel.getChannel(channelId));
  const dependencyMap = stateFromStores;
  const items1 = [stateFromStores, onClose];
  const effect = React.useEffect(() => {
    if (null == stateFromStores) {
      onClose();
    }
  }, items1);
  let tmp3 = null;
  if (null != stateFromStores) {
    obj = { marginVertical: null, GUILDS_EMPTY_NUX: null };
    obj = { recipientId, warningId, warningType, hasBackButton: hasHeaderBack, title: headerTitle, channelId };
    obj.header = jsx(importDefault(dependencyMap[5]), obj);
    obj.children = children;
    tmp3 = jsx(arg1(dependencyMap[4]).BottomSheet, obj);
  }
  return tmp3;
};
