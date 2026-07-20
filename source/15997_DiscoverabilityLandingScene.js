// Module ID: 15997
// Function ID: 122769
// Name: DiscoverabilityLandingScene
// Dependencies: []

// Module 15997 (DiscoverabilityLandingScene)
function DiscoverabilityLandingScene(onComplete) {
  onComplete = onComplete.onComplete;
  const arg1 = onComplete;
  let closure_6;
  const navigation = arg1(dependencyMap[9]).useNavigation();
  const importDefault = navigation;
  const obj = arg1(dependencyMap[9]);
  const items = [closure_6];
  const stateFromStores = arg1(dependencyMap[10]).useStateFromStores(items, () => {
    const currentUser = tmp4.getCurrentUser();
    let phone;
    if (null != currentUser) {
      phone = currentUser.phone;
    }
    return phone;
  });
  const dependencyMap = stateFromStores;
  const tmp3 = useContactSyncModalStore();
  const allowPhone = tmp3.allowPhone;
  const React = allowPhone;
  const name = tmp3.name;
  const View = name;
  const allowEmail = tmp3.allowEmail;
  const useContactSyncModalStore = allowEmail;
  let tmp4 = allowPhone;
  if (!allowPhone) {
    tmp4 = allowEmail;
  }
  closure_6 = tmp4;
  const items1 = [allowPhone, allowEmail, tmp4, stateFromStores, name, navigation, onComplete];
  const onNext = React.useCallback(() => {
    let obj = navigation(stateFromStores[11]);
    obj = { phone: allowPhone, email: allowEmail };
    const result = obj.updateDiscoverability(obj);
    if (tmp4) {
      if (null != stateFromStores) {
        if (allowPhone) {
          if (null == name) {
            navigation.push(onComplete(stateFromStores[12]).DiscoverabilityScenes.NAME);
          }
        }
        const tmp4 = allowPhone;
      }
    }
    onComplete();
  }, items1);
  return jsx(importDefault(dependencyMap[13]), { onNext });
}
function DiscoverabilityNameScene(onComplete) {
  let allowPhone;
  let name;
  onComplete = onComplete.onComplete;
  const arg1 = onComplete;
  const tmp = callback();
  ({ name, allowPhone } = useContactSyncModalStore());
  const importDefault = allowPhone;
  const items = [allowPhone, onComplete];
  const effect = React.useEffect(() => {
    if (!allowPhone) {
      onComplete();
    }
  }, items);
  const items1 = [onComplete];
  let obj = { style: tmp.container };
  const callback = React.useCallback((arg0) => {
    const result = onComplete(closure_2[14]).startContactSyncForDiscoverability(arg0);
    onComplete();
  }, items1);
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
class RedesignDiscoverabilityModal {
  constructor(arg0) {
    onComplete = global.route.params.onComplete;
    arg1 = onComplete;
    tmp = closure_8();
    obj = { headerStyle: tmp.header };
    items = [];
    items[0] = onComplete;
    obj.screens = importAll.useMemo(() => function getScreens(arg0) {
      let obj = {};
      obj = {
        1370275409: 24,
        1398917168: 24,
        1638217297: null,
        impressionName: arg0(closure_2[16]).ImpressionNames.DISCOVERABILITY,
        headerLeft() {
          return null;
        },
        headerTitle() {
          return null;
        },
        headerRight(arg0) {
          const obj = { insideNavigator: true };
          const merged = Object.assign(arg0);
          obj["onPress"] = function onPress() {
            return callback(true);
          };
          return callback2(callback(closure_2[17]), obj);
        },
        render() {
          return callback2(closure_9, { onComplete: arg0 });
        }
      };
      obj[arg0(closure_2[12]).DiscoverabilityScenes.LANDING] = obj;
      obj = {
        1370275409: 24,
        1398917168: 24,
        1638217297: null,
        impressionName: arg0(closure_2[16]).ImpressionNames.DISCOVERABILITY,
        headerTitle() {
          return null;
        },
        render() {
          return callback2(closure_10, { onComplete: arg0 });
        }
      };
      obj[arg0(closure_2[12]).DiscoverabilityScenes.NAME] = obj;
      return obj;
    }(null != onComplete ? onComplete : () => {

    }), items);
    obj.initialRouteName = arg1(dependencyMap[12]).DiscoverabilityScenes.LANDING;
    intl = arg1(dependencyMap[19]).intl;
    obj.headerBackTitle = intl.string(arg1(dependencyMap[19]).t.13/7kX);
    return jsx(arg1(dependencyMap[18]).Navigator, obj);
  }
}
let closure_3 = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
const useContactSyncModalStore = arg1(dependencyMap[2]).useContactSyncModalStore;
let closure_6 = importDefault(dependencyMap[3]);
const jsx = arg1(dependencyMap[5]).jsx;
let obj = arg1(dependencyMap[6]);
obj = {};
obj = { backgroundColor: importDefault(dependencyMap[7]).colors.BACKGROUND_BASE_LOW };
obj.header = obj;
obj.container = { backgroundColor: importDefault(dependencyMap[7]).colors.BACKGROUND_BASE_LOW, paddingTop: arg1(dependencyMap[8]).NAV_BAR_HEIGHT + 32 };
let closure_8 = obj.createStyles(obj);
RedesignDiscoverabilityModal.modalConfig = { animation: arg1(dependencyMap[4]).ModalAnimation.SLIDE_IN_OUT };
const obj1 = { backgroundColor: importDefault(dependencyMap[7]).colors.BACKGROUND_BASE_LOW, paddingTop: arg1(dependencyMap[8]).NAV_BAR_HEIGHT + 32 };
const result = arg1(dependencyMap[20]).fileFinishedImporting("modules/nuf/native/components/RedesignDiscoverabilityModal.tsx");

export default RedesignDiscoverabilityModal;
