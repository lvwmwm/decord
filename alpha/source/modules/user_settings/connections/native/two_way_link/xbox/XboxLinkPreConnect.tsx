// Module ID: 6946
// Function ID: 6947
// Name: XboxLinkPreConnect
// Dependencies: [19, 6909, 1072, 21, 4792, 1502, 6947, 6948, 1113, 2]
// Exports: default

// Module 6946 (XboxLinkPreConnect)
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1072 */;
import XboxLinkConstants from "XboxLinkConstants" /* 6909 */;
import _modDef6947 from "module_6947" /* 6947 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4792 */;
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
  let obj = navigation(1502);
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
    const obj = { uri: _modDef6947 };
    return obj;
  }, []);
  const TwoWayLinkPreConnect = navigation(6948).TwoWayLinkPreConnect;
  const intl = navigation(1113).intl;
  const intl2 = navigation(1113).intl;
  return <TwoWayLinkPreConnect platformType={PlatformTypes.XBOX} onError={callback1} onNext={callback} img={memo} imgStyle={tmp.image} title={intl.string(navigation(1113).t["e/z3na"])} body={intl2.string(navigation(1113).t["7tXu0i"])} autoStart={autoStart} />;
};
