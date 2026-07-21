// Module ID: 11738
// Function ID: 91174
// Name: JoinServerContainer
// Dependencies: []
// Exports: default

// Module 11738 (JoinServerContainer)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
({ CreateGuildModalStates: closure_5, NUXGuildTemplatesAnalytics: closure_6 } = arg1(dependencyMap[2]));
const jsx = arg1(dependencyMap[3]).jsx;
let obj = arg1(dependencyMap[4]);
obj = { flex: { flex: 1 } };
obj = { marginTop: arg1(dependencyMap[5]).NAV_BAR_HEIGHT };
obj.contentContainer = obj;
let closure_8 = obj.createStyles(obj);
const tmp2 = arg1(dependencyMap[2]);
const result = arg1(dependencyMap[13]).fileFinishedImporting("modules/create_guild/native/components/JoinServer.tsx");

export default function JoinServerContainer(initialRoute) {
  let tmp5;
  initialRoute = initialRoute.initialRoute;
  const arg1 = initialRoute;
  const onClose = initialRoute.onClose;
  const importDefault = onClose;
  const dependencyMap = initialRoute.location;
  const tmp2 = callback(React.useState(""), 2);
  const first = tmp2[0];
  const callback = first;
  const React = tmp2[1];
  const tmp = callback2();
  [tmp5, closure_5] = callback(React.useState(false), 2);
  const tmp6 = callback(React.useState(false), 2);
  let closure_6 = tmp6[1];
  let obj = arg1(dependencyMap[6]);
  const navigation = obj.useNavigation();
  const jsx = navigation;
  const items = [navigation, initialRoute, onClose];
  const layoutEffect = React.useLayoutEffect(() => {
    const obj = {};
    if (initialRoute === lib.JOIN_SERVER) {
      let headerCloseButton = initialRoute(location[7]).getHeaderCloseButton(() => {
        callback(closure_2[8]).trackNUFStep(constants.STEP_GUILD_JOIN, constants.STEP_FRIEND_LIST, { skip: true });
        callback2();
      });
      const obj3 = initialRoute(location[7]);
    } else {
      headerCloseButton = initialRoute(location[7]).getHeaderBackButton(() => {
        callback2();
      });
      const obj2 = initialRoute(location[7]);
    }
    obj.headerLeft = headerCloseButton;
    navigation.setOptions(obj);
  }, items);
  obj = { top: true, style: items1 };
  const items1 = [, ];
  ({ flex: arr2[0], contentContainer: arr2[1] } = tmp);
  obj = { inviteString: first };
  let stringResult = null;
  const tmp4 = callback(React.useState(false), 2);
  if (tmp5) {
    const intl = arg1(dependencyMap[11]).intl;
    stringResult = intl.string(arg1(dependencyMap[11]).t.IRq5ah);
  }
  obj.error = stringResult;
  obj.submitting = tmp6[0];
  obj.onInviteChange = function onInviteChange(arg0) {
    callback(arg0);
  };
  obj.onDone = function onDone() {
    const str = first.trim();
    if ("" !== str) {
      callback2(true);
      lib(false);
      const parts = str.split("/");
      let arr = parts.pop();
      let obj = onClose(location[12]);
      let str3 = "Join Guild Modal";
      if (null != location) {
        str3 = location;
      }
      const invite = obj.resolveInvite(arr, str3);
      invite.then(() => {
        callback(false);
      });
      obj = { code: arr };
      arr = navigation.push(lib.ACCEPT_INVITE, obj);
    } else {
      lib(true);
    }
  };
  obj.children = jsx(importDefault(dependencyMap[10]), obj);
  return jsx(arg1(dependencyMap[9]).SafeAreaPaddingView, obj);
};
