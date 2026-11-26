// Module ID: 7762
// Function ID: 7763
// Name: XboxLinkPreConnect
// Dependencies: [19, 7750, 1071, 21, 5043, 1501, 7763, 7764, 1112, 2]
// Exports: default

// Module 7762 (XboxLinkPreConnect)
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1071 */;
import XboxLinkConstants from "XboxLinkConstants" /* 7750 */;
import _modDef7763 from "module_7763" /* 7763 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5043 */;
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
  let obj = navigation(1501);
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
    const obj = { uri: _modDef7763 };
    return obj;
  }, []);
  const TwoWayLinkPreConnect = navigation(7764).TwoWayLinkPreConnect;
  const intl = navigation(1112).intl;
  const intl2 = navigation(1112).intl;
  return <TwoWayLinkPreConnect platformType={PlatformTypes.XBOX} onError={callback1} onNext={callback} img={memo} imgStyle={tmp.image} title={intl.string(navigation(1112).t["e/z3na"])} body={intl2.string(navigation(1112).t["7tXu0i"])} autoStart={autoStart} />;
};
