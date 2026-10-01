// Module ID: 9257
// Function ID: 9258
// Name: XboxInstallAlert
// Dependencies: [19, 8545, 21, 4836, 576, 5300, 1115, 1177, 8552, 1364, 4525, 2]
// Exports: default

// Module 9257 (XboxInstallAlert)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 576 */;
import native from "native" /* 1177 */;
import LinkingDefault from "Linking" /* 4525 */;
import AlertDefault from "Alert" /* 5300 */;
import AssetRegistryDefault from "AssetRegistry" /* 8552 */;
import react from "react" /* 19 */;
import GameConsoleConstants from "GameConsoleConstants" /* 8545 */;
import createStyles from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let c3;
let closure_4;
let size;
({ XBOX_ANDROID_APP_LINK: c3, XBOX_IOS_APP_LINK: closure_4 } = GameConsoleConstants);
const jsx = Fragment.jsx;
let obj = { externalLinkIcon: size };
size = { tintColor: nativeDefault.colors.WHITE, width: 20, height: 20, marginLeft: 8 };
let closure_6 = createStyles.createStyles(obj);
size = size_mod;
const result = size.fileFinishedImporting("modules/game_console/native/XboxInstallAlert.tsx");

export default function XboxInstallAlert(arg0) {
  let closure_0;
  _require = closure_6();
  AlertDefault;
  const merged = Object.assign(arg0);
  const intl = require("intl").intl;
  const intl2 = require("intl").intl;
  const intl3 = require("intl").intl;
  const intl4 = require("intl").intl;
  return <tmp title={intl.string(require("intl").t["12Kx2v"])} body={intl2.string(require("intl").t.msZW3j)} confirmText={intl3.string(require("intl").t["n+VrqG"])} cancelText={intl4.string(require("intl").t.kYaBOg)} fillCancelText renderConfirmRightIcon={function renderConfirmRightIcon() {
    const Icon = native.Icon;
    return <Icon source={AssetRegistryDefault} style={closure_0.externalLinkIcon} />;
  }} onConfirm={function onConfirm() {
    const obj = closure_0(dependencyMap[9]);
    const isAndroidResult = obj.isAndroid();
    const openURL = LinkingDefault.openURL;
    LinkingDefault;
    if (isAndroidResult) {
      openURL(closure_1_3);
    } else {
      openURL(closure_1_4);
    }
  }} />;
};
