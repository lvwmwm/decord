// Module ID: 11776
// Function ID: 91474
// Name: JoinServerContainer
// Dependencies: [57, 31, 9263, 33, 4130, 5084, 1456, 5087, 11739, 5121, 9262, 1212, 7540, 2]
// Exports: default

// Module 11776 (JoinServerContainer)
import _slicedToArray from "_slicedToArray";
import result from "result";
import NUXGuildTemplatesAnalytics from "NUXGuildTemplatesAnalytics";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_5;
let closure_6;
const require = arg1;
({ CreateGuildModalStates: closure_5, NUXGuildTemplatesAnalytics: closure_6 } = NUXGuildTemplatesAnalytics);
_createForOfIteratorHelperLoose = { flex: { flex: 1 } };
_createForOfIteratorHelperLoose = { marginTop: require("NAV_BAR_HEIGHT").NAV_BAR_HEIGHT };
_createForOfIteratorHelperLoose.contentContainer = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("NUXGuildTemplatesAnalytics").fileFinishedImporting("modules/create_guild/native/components/JoinServer.tsx");

export default function JoinServerContainer(initialRoute) {
  let closure_5;
  let tmp5;
  initialRoute = initialRoute.initialRoute;
  const onClose = initialRoute.onClose;
  const location = initialRoute.location;
  const tmp2 = first(React.useState(""), 2);
  first = tmp2[0];
  React = tmp2[1];
  const tmp = _createForOfIteratorHelperLoose();
  [tmp5, closure_5] = first(React.useState(false), 2);
  const tmp6 = first(React.useState(false), 2);
  let closure_6 = tmp6[1];
  let obj = initialRoute(location[6]);
  const navigation = obj.useNavigation();
  const items = [navigation, initialRoute, onClose];
  const layoutEffect = React.useLayoutEffect(() => {
    const obj = {};
    if (initialRoute === outer1_5.JOIN_SERVER) {
      let headerCloseButton = initialRoute(location[7]).getHeaderCloseButton(() => {
        initialRoute(location[8]).trackNUFStep(constants.STEP_GUILD_JOIN, constants.STEP_FRIEND_LIST, { skip: true });
        outer1_1();
      });
      const obj3 = initialRoute(location[7]);
    } else {
      headerCloseButton = initialRoute(location[7]).getHeaderBackButton(() => {
        outer1_1();
      });
      const obj2 = initialRoute(location[7]);
    }
    obj.headerLeft = headerCloseButton;
    navigation.setOptions(obj);
  }, items);
  obj = { top: true, style: items1 };
  items1 = [, ];
  ({ flex: arr2[0], contentContainer: arr2[1] } = tmp);
  obj = { inviteString: first };
  let stringResult = null;
  const tmp4 = first(React.useState(false), 2);
  if (tmp5) {
    const intl = initialRoute(location[11]).intl;
    stringResult = intl.string(initialRoute(location[11]).t.IRq5ah);
  }
  obj.error = stringResult;
  obj.submitting = tmp6[0];
  obj.onInviteChange = function onInviteChange(arg0) {
    callback(arg0);
  };
  obj.onDone = function onDone(arg0) {
    const str = first.trim();
    if ("" !== str) {
      callback3(true);
      callback2(false);
      const parts = str.split("/");
      let arr = parts.pop();
      let obj = onClose(location[12]);
      let str3 = "Join Guild Modal";
      if (null != location) {
        str3 = location;
      }
      const invite = obj.resolveInvite(arr, str3);
      invite.then(() => {
        outer1_6(false);
      });
      obj = { code: arr };
      arr = navigation.push(outer1_5.ACCEPT_INVITE, obj);
    } else {
      callback2(true);
    }
  };
  obj.children = navigation(onClose(location[10]), obj);
  return navigation(initialRoute(location[9]).SafeAreaPaddingView, obj);
};
