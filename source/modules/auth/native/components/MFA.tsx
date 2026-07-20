// Module ID: 14628
// Function ID: 110350
// Name: statesAreEqual
// Dependencies: []
// Exports: default

// Module 14628 (statesAreEqual)
function statesAreEqual(arg0, arg1) {
  return importDefault(dependencyMap[3]).isEqual(arg0, arg1);
}
let closure_3 = importAll(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
const jsx = arg1(dependencyMap[2]).jsx;
let closure_6 = {};
const result = arg1(dependencyMap[11]).fileFinishedImporting("modules/auth/native/components/MFA.tsx");

export default function ConnectedMFA() {
  let inContainer;
  let isMultiAccount;
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  ({ inContainer, isMultiAccount } = obj);
  const arg1 = isMultiAccount;
  let importDefault;
  let obj1 = arg1(dependencyMap[4]);
  const navigation = obj1.useNavigation();
  importDefault = navigation;
  if (inContainer) {
    inContainer = importDefault(dependencyMap[5])();
  }
  const items = [closure_4];
  const items1 = [isMultiAccount];
  const stateFromStores = arg1(dependencyMap[6]).useStateFromStores(items, () => ({ ticket: store.getMFATicket(), methods: store.getMFAMethods() }), [], statesAreEqual);
  const items2 = [navigation];
  const callback = React.useCallback((arg0) => {
    let data;
    let mfaType;
    let ticket;
    ({ mfaType, data, ticket } = arg0);
    let obj = navigation(closure_2[7]);
    obj = { code: data, ticket, mfaType, isMultiAccount };
    return obj.loginMFAv2(obj);
  }, items1);
  const callback1 = React.useCallback(() => {
    navigation.goBack();
  }, items2);
  obj = { mfaChallenge: stateFromStores, finish: callback, handleOnClose: callback1, ignoreKeyboard: inContainer };
  let tmp6;
  if (inContainer) {
    tmp6 = closure_6;
  }
  obj.containerStyle = tmp6;
  let num;
  if (inContainer) {
    num = 0;
  }
  obj.headerStatusBarHeight = num;
  if (!inContainer) {
    obj.headerLeftContainerStyle = undefined;
    let tmp14;
    if (inContainer) {
      obj = { paddingRight: importDefault(dependencyMap[10]).space.PX_16, paddingTop: importDefault(dependencyMap[10]).space.PX_12, marginLeft: 0 };
      tmp14 = obj;
    }
    obj.headerRightContainerStyle = tmp14;
    return jsx(arg1(dependencyMap[8]).MFAModal, obj);
  } else {
    obj1 = {};
    const obj6 = arg1(dependencyMap[9]);
    let space = importDefault(dependencyMap[10]).space;
    obj1.paddingLeft = arg1(dependencyMap[9]).isAndroid() ? space.PX_8 : space.PX_16;
    space = importDefault;
    obj1.paddingTop = importDefault(dependencyMap[10]).space.PX_12;
    const isAndroidResult = arg1(dependencyMap[9]).isAndroid();
  }
};
