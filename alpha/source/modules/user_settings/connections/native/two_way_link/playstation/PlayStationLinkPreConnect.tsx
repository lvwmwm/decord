// Module ID: 7788
// Function ID: 7789
// Name: PlayStationLinkPreConnect
// Dependencies: [19, 7785, 21, 5043, 1501, 7789, 7764, 1112, 2]
// Exports: PlayStationLinkPreConnect

// Module 7788 (PlayStationLinkPreConnect)
import Fragment from "Fragment" /* 21 */;
import PlayStationLinkConstants from "PlayStationLinkConstants" /* 7785 */;
import _modDef7789 from "module_7789" /* 7789 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5043 */;
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
  let obj = navigation(1501);
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
    const obj = { uri: _modDef7789 };
    return obj;
  }, []);
  const TwoWayLinkPreConnect = navigation(7764).TwoWayLinkPreConnect;
  const intl = navigation(1112).intl;
  const intl2 = navigation(1112).intl;
  return <TwoWayLinkPreConnect platformType={platformType} onError={callback1} onNext={callback} img={memo} imgStyle={tmp.image} title={intl.string(navigation(1112).t["6n+UPR"])} body={intl2.string(navigation(1112).t.JaaqIf)} autoStart={autoStart} />;
}
