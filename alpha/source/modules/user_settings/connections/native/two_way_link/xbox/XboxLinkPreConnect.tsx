// Module ID: 7397
// Function ID: 7398
// Name: XboxLinkPreConnect
// Dependencies: [19, 7362, 1072, 21, 5243, 1499, 7398, 7399, 1113, 2]
// Exports: default

// Module 7397 (XboxLinkPreConnect)
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1072 */;
import XboxLinkConstants from "XboxLinkConstants" /* 7362 */;
import _modDef7398 from "module_7398" /* 7398 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5243 */;
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
  let obj = navigation(1499);
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
    const obj = { uri: _modDef7398 };
    return obj;
  }, []);
  const TwoWayLinkPreConnect = navigation(7399).TwoWayLinkPreConnect;
  const intl = navigation(1113).intl;
  const intl2 = navigation(1113).intl;
  return <TwoWayLinkPreConnect platformType={PlatformTypes.XBOX} onError={callback1} onNext={callback} img={memo} imgStyle={tmp.image} title={intl.string(navigation(1113).t["e/z3na"])} body={intl2.string(navigation(1113).t["7tXu0i"])} autoStart={autoStart} />;
};
