// Module ID: 9712
// Function ID: 9713
// Name: XboxLinkPreConnect
// Dependencies: [19, 9703, 1072, 21, 5009, 1498, 9713, 9714, 1114, 2]
// Exports: default

// Module 9712 (XboxLinkPreConnect)
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1072 */;
import XboxLinkConstants from "XboxLinkConstants" /* 9703 */;
import _modDef9713 from "module_9713" /* 9713 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

let navigation;

const XboxLinkModalScenes = XboxLinkConstants.XboxLinkModalScenes;
const PlatformTypes = Constants.PlatformTypes;
const jsx = Fragment.jsx;
let closure_7 = createStyles.createStyles({ image: { width: 231, height: 160 } });
const result = size.fileFinishedImporting("modules/user_settings/connections/native/two_way_link/xbox/XboxLinkPreConnect.tsx");

export default function XboxLinkPreConnect() {
  const tmp = closure_7();
  let obj = navigation(1498);
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
    const obj = { uri: _modDef9713 };
    return obj;
  }, []);
  const TwoWayLinkPreConnect = navigation(9714).TwoWayLinkPreConnect;
  const intl = navigation(1114).intl;
  const intl2 = navigation(1114).intl;
  return <TwoWayLinkPreConnect platformType={PlatformTypes.XBOX} onError={callback1} onNext={callback} img={memo} imgStyle={tmp.image} title={intl.string(navigation(1114).t["e/z3na"])} body={intl2.string(navigation(1114).t["7tXu0i"])} />;
};
