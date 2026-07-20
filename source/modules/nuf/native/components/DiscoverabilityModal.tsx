// Module ID: 11764
// Function ID: 91341
// Name: DiscoverabilityLandingScene
// Dependencies: []

// Module 11764 (DiscoverabilityLandingScene)
function DiscoverabilityLandingScene() {
  const navigation = arg1(dependencyMap[9]).useNavigation();
  const arg1 = navigation;
  const obj = arg1(dependencyMap[9]);
  const items = [closure_6];
  const stateFromStores = arg1(dependencyMap[10]).useStateFromStores(items, () => {
    const currentUser = currentUser.getCurrentUser();
    let phone;
    if (null != currentUser) {
      phone = currentUser.phone;
    }
    return phone;
  });
  const importDefault = stateFromStores;
  const tmp3 = useContactSyncModalStore();
  const allowPhone = tmp3.allowPhone;
  const dependencyMap = allowPhone;
  const allowEmail = tmp3.allowEmail;
  const React = allowEmail;
  let tmp4 = allowPhone;
  if (!allowPhone) {
    tmp4 = allowEmail;
  }
  const View = tmp4;
  const items1 = [navigation, stateFromStores, allowEmail, allowPhone, tmp4];
  const onNext = React.useCallback(() => {
    let obj = stateFromStores(allowPhone[11]);
    obj = { phone: allowPhone, email: allowEmail };
    const result = obj.updateDiscoverability(obj);
    if (tmp4) {
      if (null != stateFromStores) {
        if (allowPhone) {
          navigation.push(navigation(allowPhone[12]).DiscoverabilityScenes.NAME);
        }
      }
    }
    const result1 = navigation(allowPhone[13]).closeDiscoverabilityModal(false);
  }, items1);
  return jsx(importDefault(dependencyMap[14]), { onNext });
}
function DiscoverabilityNameScene() {
  let allowPhone;
  let name;
  const tmp = callback();
  ({ name, allowPhone } = useContactSyncModalStore());
  const arg1 = allowPhone;
  const items = [allowPhone];
  const effect = React.useEffect(() => {
    if (!allowPhone) {
      const result = allowPhone(closure_2[13]).closeDiscoverabilityModal(false);
      const obj = allowPhone(closure_2[13]);
    }
  }, items);
  let obj = { style: tmp.container };
  const callback = React.useCallback((arg0) => {
    const result = allowPhone(closure_2[13]).startContactSyncForDiscoverability(arg0);
    const obj = allowPhone(closure_2[13]);
    const result1 = allowPhone(closure_2[13]).closeDiscoverabilityModal(false);
  }, []);
  obj = { onNext: callback, loading: false };
  let str = "";
  const tmp2 = useContactSyncModalStore();
  const tmp5 = jsx;
  const tmp6 = View;
  const tmp7 = jsx;
  if (null != name) {
    str = name;
  }
  obj.initialName = str;
  obj.children = tmp7(importDefault(dependencyMap[15]), obj);
  return tmp5(tmp6, obj);
}
class DiscoverabilityModal {
  constructor() {
    obj = {};
    obj.screens = importAll.useMemo(() => function getScreens() {
      let obj = {};
      obj = {
        1370275409: 24,
        1398917168: 24,
        1638217297: null,
        impressionName: callback(closure_2[16]).ImpressionNames.DISCOVERABILITY,
        headerLeft() {
          return null;
        },
        headerTitle() {
          return null;
        },
        render() {
          return callback(closure_9, {});
        }
      };
      obj[callback(closure_2[12]).DiscoverabilityScenes.LANDING] = obj;
      obj = {
        1370275409: 24,
        1398917168: 24,
        1638217297: null,
        impressionName: callback(closure_2[16]).ImpressionNames.DISCOVERABILITY,
        headerTitle() {
          return null;
        },
        render() {
          return callback(closure_10, {});
        }
      };
      obj[callback(closure_2[12]).DiscoverabilityScenes.NAME] = obj;
      return obj;
    }(), []);
    obj.initialRouteName = arg1(dependencyMap[12]).DiscoverabilityScenes.LANDING;
    intl = arg1(dependencyMap[18]).intl;
    obj.headerBackTitle = intl.string(arg1(dependencyMap[18]).t.13/7kX);
    return jsx(arg1(dependencyMap[17]).Navigator, obj);
  }
}
let closure_3 = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
const useContactSyncModalStore = arg1(dependencyMap[2]).useContactSyncModalStore;
let closure_6 = importDefault(dependencyMap[3]);
const jsx = arg1(dependencyMap[5]).jsx;
let obj = arg1(dependencyMap[6]);
obj = {};
obj = { backgroundColor: importDefault(dependencyMap[7]).colors.BACKGROUND_BASE_LOW, paddingTop: arg1(dependencyMap[8]).NAV_BAR_HEIGHT + 32 };
obj.container = obj;
let closure_8 = obj.createStyles(obj);
DiscoverabilityModal.modalConfig = { animation: arg1(dependencyMap[4]).ModalAnimation.SLIDE_IN_OUT };
const result = arg1(dependencyMap[19]).fileFinishedImporting("modules/nuf/native/components/DiscoverabilityModal.tsx");

export default DiscoverabilityModal;
