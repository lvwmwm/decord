// Module ID: 6945
// Function ID: 6946
// Name: XboxLinkPreConnect
// Dependencies: [19, 6908, 1071, 21, 4794, 1500, 6946, 6947, 1112, 2]
// Exports: default

// Module 6945 (XboxLinkPreConnect)
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1071 */;
import XboxLinkConstants from "XboxLinkConstants" /* 6908 */;
import _modDef6946 from "module_6946" /* 6946 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4794 */;
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
    const obj = { uri: _modDef6946 };
    return obj;
  }, []);
  const TwoWayLinkPreConnect = navigation(6947).TwoWayLinkPreConnect;
  const intl = navigation(1112).intl;
  const intl2 = navigation(1112).intl;
  return <TwoWayLinkPreConnect platformType={PlatformTypes.XBOX} onError={callback1} onNext={callback} img={memo} imgStyle={tmp.image} title={intl.string(navigation(1112).t["e/z3na"])} body={intl2.string(navigation(1112).t["7tXu0i"])} autoStart={autoStart} />;
};
