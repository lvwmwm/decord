// Module ID: 14600
// Function ID: 14601
// Name: CrunchyrollLinkPreConnect
// Dependencies: [19, 14597, 1072, 8900, 21, 5009, 1498, 9714, 14601, 1114, 2]
// Exports: default

// Module 14600 (CrunchyrollLinkPreConnect)
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1072 */;
import CrunchyrollConnectionConstants from "CrunchyrollConnectionConstants" /* 8900 */;
import CrunchyrollLinkConstants from "CrunchyrollLinkConstants" /* 14597 */;
import AssetRegistryDefault from "AssetRegistry" /* 14601 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

let navigation;

let closure_4 = CrunchyrollLinkConstants.CrunchyrollLinkModalScenes;
const PlatformTypes = Constants.PlatformTypes;
const redirectDestination = CrunchyrollConnectionConstants.CRUNCHYROLL_LINK_DEST_ORIGIN;
const jsx = Fragment.jsx;
let closure_8 = createStyles.createStyles({ image: { width: 152, height: 123 } });
const result = size.fileFinishedImporting("modules/user_settings/connections/native/two_way_link/crunchyroll/CrunchyrollLinkPreConnect.tsx");

export default function CrunchyrollLinkPreConnect() {
  const tmp = closure_8();
  const obj = navigation(1498);
  navigation = obj.useNavigation();
  const items = [navigation];
  const items1 = [navigation];
  const callback = react.useCallback((arg0) => {
    navigation.push(constants.DISCORD_CONSENT, arg0);
  }, items);
  const callback1 = react.useCallback(() => {
    navigation.push(constants.ERROR);
  }, items1);
  const TwoWayLinkPreConnect = navigation(9714).TwoWayLinkPreConnect;
  const intl = navigation(1114).intl;
  const intl2 = navigation(1114).intl;
  return <TwoWayLinkPreConnect platformType={PlatformTypes.CRUNCHYROLL} onError={callback1} onNext={callback} img={AssetRegistryDefault} imgStyle={tmp.image} title={intl.string(navigation(1114).t.siPkNp)} body={intl2.string(navigation(1114).t.oS4NEH)} redirectDestination={redirectDestination} />;
};
