// Module ID: 16012
// Function ID: 122927
// Name: ConnectGuardianShareScreen
// Dependencies: []
// Exports: default

// Module 16012 (ConnectGuardianShareScreen)
function ConnectGuardianShareScreen() {
  const tmp = callback3();
  let obj = arg1(dependencyMap[6]);
  const syncMessages = obj.useSyncMessages(arg1(dependencyMap[7]).messagesLoader);
  const callback = React.useCallback(() => {
    const intl = getLinkCode(closure_2[6]).intl;
    getLinkCode(closure_2[8]).presentFailedToast(intl.string(getLinkCode(closure_2[6]).t.R0RpRX));
    let arr = callback(closure_2[9]);
    arr = arr.pop();
  }, []);
  let obj1 = arg1(dependencyMap[10]);
  const getLinkCode = obj1.useFamilyCenterActions({ onError: callback }).getLinkCode;
  const arg1 = getLinkCode;
  let obj2 = arg1(dependencyMap[11]);
  const items = [closure_5];
  const stateFromStores = obj2.useStateFromStores(items, () => store.getLinkCode());
  let obj3 = arg1(dependencyMap[11]);
  const items1 = [closure_5];
  const stateFromStores1 = obj3.useStateFromStores(items1, () => store.getLinkCodeExpiresAt());
  const effect = React.useEffect(() => {
    getLinkCode();
  }, []);
  importDefault(dependencyMap[12])(importDefault(dependencyMap[9]).pop);
  obj = {};
  obj = {};
  obj1 = { spacing: importDefault(dependencyMap[5]).space.PX_40 };
  obj2 = { spacing: importDefault(dependencyMap[5]).space.PX_8 };
  obj3 = { style: tmp.title };
  const intl = arg1(dependencyMap[6]).intl;
  obj3.children = intl.string(importDefault(dependencyMap[7]).ITlV6p);
  const items2 = [callback(arg1(dependencyMap[16]).Text, obj3), ];
  const obj4 = { Promise: null, marginTop: null, flags: null, style: tmp.body };
  const intl2 = arg1(dependencyMap[6]).intl;
  obj4.children = intl2.format(importDefault(dependencyMap[7]).F4GT2S, { link: "https://support.discord.com/hc/articles/14155060633623" });
  items2[1] = callback(arg1(dependencyMap[17]).TextWithIOSLinkWorkaround, obj4);
  obj2.children = items2;
  const items3 = [callback2(arg1(dependencyMap[15]).Stack, obj2), ];
  const obj5 = { spacing: importDefault(dependencyMap[5]).space.PX_24, style: tmp.cardSection };
  const obj6 = { style: tmp.qrLabel };
  const intl3 = arg1(dependencyMap[6]).intl;
  obj6.children = intl3.string(importDefault(dependencyMap[7]).pojgfk);
  const items4 = [callback(arg1(dependencyMap[16]).Text, obj6), ];
  if (null != stateFromStores) {
    if (null != stateFromStores1) {
      const obj7 = { shareActions: "full", linkCode: stateFromStores, expiresAt: stateFromStores1, onRefresh: getLinkCode };
      let tmp13 = callback(arg1(dependencyMap[18]).ConnectGuardianCard, obj7);
    }
    items4[1] = tmp13;
    obj5.children = items4;
    items3[1] = tmp12(arg1(dependencyMap[15]).Stack, obj5);
    obj1.children = items3;
    obj.children = tmp11(arg1(dependencyMap[15]).Stack, obj1);
    obj.children = tmp10(arg1(dependencyMap[14]).ModalContent, obj);
    return tmp9(arg1(dependencyMap[13]).ModalScreen, obj);
  }
  const tmp10 = callback;
  const tmp11 = callback2;
  const tmp12 = callback2;
  const tmp7 = importDefault(dependencyMap[12]);
  const tmp9 = callback;
  tmp13 = callback(View, { style: tmp.loading, children: callback(arg1(dependencyMap[19]).ActivityIndicator, {}) });
}
let closure_3 = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
let closure_5 = importDefault(dependencyMap[2]);
({ jsx: closure_6, jsxs: closure_7 } = arg1(dependencyMap[3]));
let obj = arg1(dependencyMap[4]);
obj = { title: { textAlign: "center" }, body: { textAlign: "center" }, qrLabel: { textAlign: "center" }, cardSection: { alignItems: "center" } };
obj = { paddingVertical: importDefault(dependencyMap[5]).space.PX_24 };
obj.loading = obj;
let closure_8 = obj.createStyles(obj);
const tmp2 = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[22]).fileFinishedImporting("modules/parent_tools/native/ConnectGuardianShareModal.tsx");

export default function ConnectGuardianShareModal() {
  const memo = React.useMemo(() => function getScreens() {
    let obj = {};
    obj = {
      headerShown: true,
      headerLeft: callback(closure_2[20]).getHeaderBackButton(callback2(closure_2[9]).pop),
      headerTitle() {
        return null;
      },
      render() {
        return callback(closure_9, {});
      }
    };
    obj.CONNECT_GUARDIAN_SHARE = obj;
    return obj;
  }(), []);
  const obj = { initialRouteName: "CONNECT_GUARDIAN_SHARE", screens: memo };
  const intl = arg1(dependencyMap[6]).intl;
  obj.headerBackTitle = intl.string(arg1(dependencyMap[6]).t.13/7kX);
  return callback(arg1(dependencyMap[21]).Modal, obj);
};
