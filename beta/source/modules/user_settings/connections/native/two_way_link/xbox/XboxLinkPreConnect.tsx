// Module ID: 7065
// Function ID: 7066
// Name: XboxLinkPreConnect
// Dependencies: [19, 7028, 1071, 21, 4913, 1500, 7066, 7067, 1112, 2]
// Exports: default

// Module 7065 (XboxLinkPreConnect)
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1071 */;
import XboxLinkConstants from "XboxLinkConstants" /* 7028 */;
import _modDef7066 from "module_7066" /* 7066 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4913 */;
import size from "module_2" /* 2 */;

let navigation;

const XboxLinkModalScenes = XboxLinkConstants.XboxLinkModalScenes;
const PlatformTypes = Constants.PlatformTypes;
const jsx = Fragment.jsx;
let closure_7 = createStyles.createStyles({ image: { width: 231, height: 160 } });
const result = size.fileFinishedImporting("modules/user_settings/connections/native/two_way_link/xbox/XboxLinkPreConnect.tsx");

export default function XboxLinkPreConnect(autoStart) {
  navigation = undefined;
  autoStart = autoStart.autoStart;
  const tmp = closure_7();
  let obj = navigation(1500);
  navigation = obj.useNavigation();
  const items = [navigation];
  const items1 = [navigation];
  const callback = react.useCallback((arg0) => {
    navigation.push(XboxLinkModalScenes.DISCORD_CONSENT, arg0);
  }, items);
  const callback1 = react.useCallback(() => {
    navigation.push(XboxLinkModalScenes.ERROR);
  }, items1);
  const memo = react.useMemo(() => {
    const obj = { uri: _modDef7066 };
    return obj;
  }, []);
  const TwoWayLinkPreConnect = navigation(7067).TwoWayLinkPreConnect;
  const intl = navigation(1112).intl;
  const intl2 = navigation(1112).intl;
  return <TwoWayLinkPreConnect platformType={PlatformTypes.XBOX} onError={callback1} onNext={callback} img={memo} imgStyle={tmp.image} title={intl.string(navigation(1112).t["e/z3na"])} body={intl2.string(navigation(1112).t["7tXu0i"])} autoStart={autoStart} />;
};
