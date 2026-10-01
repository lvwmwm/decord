// Module ID: 12229
// Function ID: 12230
// Name: JoinServer
// Dependencies: [32, 19, 6399, 21, 4836, 5994, 1485, 5936, 12180, 6544, 6398, 1115, 7826, 2]
// Exports: default

// Module 12229 (JoinServer)
import Fragment from "Fragment" /* 21 */;
import NavigatorHeader from "NavigatorHeader" /* 5936 */;
import NavigatorConstants from "NavigatorConstants" /* 5994 */;
import InstantInviteActionCreatorsDefault from "InstantInviteActionCreators" /* 7826 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import CreateGuildConstants from "CreateGuildConstants" /* 6399 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let navigation;

let hasOwnProperty;
let metroRequire;
let obj2;
let react = react_mod;
({ CreateGuildModalStates: hasOwnProperty, NUXGuildTemplatesAnalytics: metroRequire } = CreateGuildConstants);
const jsx = Fragment.jsx;
let obj = { flex: { flex: 1 }, contentContainer: obj2 };
obj2 = { marginTop: NavigatorConstants.NAV_BAR_HEIGHT };
let closure_8 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/create_guild/native/components/JoinServer.tsx");

export default function JoinServerContainer(initialRoute) {
  let _undefined;
  let c5;
  let closure_4;
  let items1;
  let obj2;
  let stringResult;
  let tmp13;
  let tmp5;
  initialRoute = initialRoute.initialRoute;
  const onClose = initialRoute.onClose;
  const location = initialRoute.location;
  let inviteString;
  react = undefined;
  c5 = undefined;
  const tmp = closure_8();
  const tmp2 = inviteString(react.useState(""), 2);
  inviteString = tmp2[0];
  react = tmp2[1];
  [tmp5, c5] = inviteString(react.useState(false), 2);
  const tmp4 = inviteString(react.useState(false), 2);
  const tmp6 = inviteString(react.useState(false), 2);
  let closure_6 = tmp6[1];
  const first1 = tmp6[0];
  let obj = initialRoute(location[6]);
  navigation = obj.useNavigation();
  const items = [navigation, initialRoute, onClose];
  const layoutEffect = react.useLayoutEffect(() => {
    let headerCloseButton;
    const setOptions = navigation.setOptions;
    if (initialRoute === hasOwnProperty.JOIN_SERVER) {
      const obj2 = NavigatorHeader;
      headerCloseButton = obj2.getHeaderCloseButton(() => {
        const obj = initialRoute(location[8]);
        obj.trackNUFStep(constants.STEP_GUILD_JOIN, constants.STEP_FRIEND_LIST, { skip: true });
        onClose();
      });
    } else {
      let obj = NavigatorHeader;
      headerCloseButton = obj.getHeaderBackButton(() => {
        onClose();
      });
    }
    setOptions({ headerLeft: headerCloseButton });
  }, items);
  const rect = { top: true, left: true, right: true, style: items1, children: navigation(tmp13, obj2) };
  items1 = [, ];
  ({ flex: arr2[0], contentContainer: arr2[1] } = tmp);
  const SafeAreaPaddingView = initialRoute(location[9]).SafeAreaPaddingView;
  obj2 = {
    inviteString,
    error: stringResult,
    submitting: first1,
    onInviteChange(arg0) {
      closure_4(arg0);
    },
    onDone() {
      const str = first.trim();
      if ("" !== str) {
        closure_6(true);
        _undefined(false);
        const parts = str.split("/");
        const arr = parts.pop();
        let str3 = location;
        const resolveInvite = InstantInviteActionCreatorsDefault.resolveInvite;
        InstantInviteActionCreatorsDefault;
        if (location == null) {
          str3 = "Join Guild Modal";
        }
        const invite = resolveInvite(arr, str3);
        invite.then(() => {
          closure_1_6(false);
        });
        const obj = { code: arr };
        navigation.push(hasOwnProperty.ACCEPT_INVITE, obj);
      } else {
        _undefined(true);
      }
    }
  };
  stringResult = null;
  tmp13 = onClose(location[10]);
  if (tmp5) {
    const intl = tmp8(tmp9[11]).intl;
    stringResult = intl.string(tmp8(tmp9[11]).t.IRq5ah);
  }
  return navigation(SafeAreaPaddingView, rect);
};
