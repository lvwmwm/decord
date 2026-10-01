// Module ID: 8540
// Function ID: 8541
// Name: XboxLinkPreConnect
// Dependencies: [19, 8531, 1074, 21, 4836, 1485, 8541, 8542, 1115, 2]
// Exports: default

// Module 8540 (XboxLinkPreConnect)
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1074 */;
import XboxLinkConstants from "XboxLinkConstants" /* 8531 */;
import _modDef8541 from "module_8541" /* 8541 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let navigation;

const XboxLinkModalScenes = XboxLinkConstants.XboxLinkModalScenes;
const PlatformTypes = Constants.PlatformTypes;
const jsx = Fragment.jsx;
let closure_7 = createStyles.createStyles({ image: { width: 231, height: 160 } });
const result = size.fileFinishedImporting("modules/user_settings/connections/native/two_way_link/xbox/XboxLinkPreConnect.tsx");

export default function XboxLinkPreConnect() {
  const tmp = closure_7();
  let obj = navigation(1485);
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
    const obj = { uri: _modDef8541 };
    return obj;
  }, []);
  const TwoWayLinkPreConnect = navigation(8542).TwoWayLinkPreConnect;
  const intl = navigation(1115).intl;
  const intl2 = navigation(1115).intl;
  return <TwoWayLinkPreConnect platformType={PlatformTypes.XBOX} onError={callback1} onNext={callback} img={memo} imgStyle={tmp.image} title={intl.string(navigation(1115).t["e/z3na"])} body={intl2.string(navigation(1115).t["7tXu0i"])} />;
};
