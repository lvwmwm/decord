// Module ID: 14887
// Function ID: 14888
// Name: CrunchyrollLinkPreConnect
// Dependencies: [19, 14884, 1072, 8983, 21, 5140, 1499, 9824, 14888, 1113, 2]
// Exports: default

// Module 14887 (CrunchyrollLinkPreConnect)
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1072 */;
import CrunchyrollConnectionConstants from "CrunchyrollConnectionConstants" /* 8983 */;
import CrunchyrollLinkConstants from "CrunchyrollLinkConstants" /* 14884 */;
import AssetRegistryDefault from "AssetRegistry" /* 14888 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5140 */;
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
  const obj = navigation(1499);
  navigation = obj.useNavigation();
  const items = [navigation];
  const items1 = [navigation];
  const callback = react.useCallback((arg0) => {
    navigation.push(constants.DISCORD_CONSENT, arg0);
  }, items);
  const callback1 = react.useCallback(() => {
    navigation.push(constants.ERROR);
  }, items1);
  const TwoWayLinkPreConnect = navigation(9824).TwoWayLinkPreConnect;
  const intl = navigation(1113).intl;
  const intl2 = navigation(1113).intl;
  return <TwoWayLinkPreConnect platformType={PlatformTypes.CRUNCHYROLL} onError={callback1} onNext={callback} img={AssetRegistryDefault} imgStyle={tmp.image} title={intl.string(navigation(1113).t.siPkNp)} body={intl2.string(navigation(1113).t.oS4NEH)} redirectDestination={redirectDestination} />;
};
