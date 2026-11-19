// Module ID: 7079
// Function ID: 7080
// Name: PlayStationLinkPreConnect
// Dependencies: [19, 7076, 21, 4792, 1502, 7080, 6948, 1113, 2]
// Exports: PlayStationLinkPreConnect

// Module 7079 (PlayStationLinkPreConnect)
import Fragment from "Fragment" /* 21 */;
import PlayStationLinkConstants from "PlayStationLinkConstants" /* 7076 */;
import _modDef7080 from "module_7080" /* 7080 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4792 */;
import size from "module_2" /* 2 */;

let navigation;

let closure_4 = PlayStationLinkConstants.PlayStationLinkModalScenes;
const jsx = Fragment.jsx;
let closure_6 = createStyles.createStyles({ image: { width: 231, height: 160 } });
const result = size.fileFinishedImporting("modules/user_settings/connections/native/two_way_link/playstation/PlayStationLinkPreConnect.tsx");

export function PlayStationLinkPreConnect(arg0) {
  let autoStart;
  let platformType;
  navigation = undefined;
  ({ platformType, autoStart } = arg0);
  const tmp = closure_6();
  let obj = navigation(1502);
  navigation = obj.useNavigation();
  const items = [navigation];
  const items1 = [navigation];
  const callback = react.useCallback((arg0) => {
    navigation.push(constants.DISCORD_CONSENT, arg0);
  }, items);
  const callback1 = react.useCallback(() => {
    navigation.push(constants.ERROR, {});
  }, items1);
  const memo = react.useMemo(() => {
    const obj = { uri: _modDef7080 };
    return obj;
  }, []);
  const TwoWayLinkPreConnect = navigation(6948).TwoWayLinkPreConnect;
  const intl = navigation(1113).intl;
  const intl2 = navigation(1113).intl;
  return <TwoWayLinkPreConnect platformType={platformType} onError={callback1} onNext={callback} img={memo} imgStyle={tmp.image} title={intl.string(navigation(1113).t["6n+UPR"])} body={intl2.string(navigation(1113).t.JaaqIf)} autoStart={autoStart} />;
}
