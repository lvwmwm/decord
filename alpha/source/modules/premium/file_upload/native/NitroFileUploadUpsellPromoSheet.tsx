// Module ID: 19350
// Function ID: 19351
// Name: NitroFileUploadUpsellPromoSheet
// Dependencies: [19, 17, 1072, 5016, 21, 5170, 575, 5751, 7658, 10169, 10973, 19346, 1113, 2766, 5788, 2]
// Exports: default

// Module 19350 (NitroFileUploadUpsellPromoSheet)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 5016 */;
import openUserSettings from "openUserSettings" /* 7658 */;
import react_mod from "react" /* 19 */;
import Constants from "Constants" /* 1072 */;
import createStyles from "createStyles" /* 5170 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let importDefault;

let hasOwnProperty;
let metroRequire;
let obj2;
let react = react_mod;
const View = react_native.View;
({ AnalyticsPages: hasOwnProperty, UserSettingsSections: metroRequire } = Constants);
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
const jsx = Fragment.jsx;
let obj = { illustration: obj2 };
obj2 = { paddingTop: nativeDefault.space.PX_12 };
let closure_9 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/premium/file_upload/native/NitroFileUploadUpsellPromoSheet.tsx");

export default function NitroFileUploadUpsellPromoSheet(markAsDismissed) {
  let intl3;
  let loading;
  let onPress;
  let ref;
  let ref2;
  let tmp9;
  markAsDismissed = markAsDismissed.markAsDismissed;
  react = undefined;
  onPress = undefined;
  const tmp = closure_9();
  importDefault = react.useRef(false);
  const items = [markAsDismissed];
  const callback = react.useCallback((arg0) => {
    if (!ref.current) {
      tmp.current = true;
      markAsDismissed(arg0);
    }
  }, items);
  react = react.useRef(ContentDismissActionType.AUTO_DISMISS);
  let obj = markAsDismissed(callback[7]);
  const unmountEffect = obj.useUnmountEffect(() => {
    callback(ref2.current);
  });
  const items1 = [callback];
  const callback1 = react.useCallback(() => {
    callback(ContentDismissActionType.TAKE_ACTION);
    const obj = openUserSettings;
    const obj2 = { screen: metroRequire.PREMIUM };
    obj.openUserSettings(obj2);
  }, items1);
  ({ loading, onPress } = require("usePremiumFeatureUpsellGetNitro")(false, callback1, constants.PREMIUM_UPSELL_FILE_UPLOAD));
  const items2 = [onPress];
  const items3 = [callback];
  require("usePremiumFeatureUpsellGetNitro")(false, callback1, constants.PREMIUM_UPSELL_FILE_UPLOAD);
  const callback2 = react.useCallback(() => {
    ref2.current = ContentDismissActionType.TAKE_ACTION;
    onPress();
  }, items2);
  const callback3 = react.useCallback(() => {
    callback(ContentDismissActionType.USER_DISMISS);
  }, items3);
  const PromoSheet = markAsDismissed(callback[10]).PromoSheet;
  const intl = markAsDismissed(callback[12]).intl;
  const intl2 = markAsDismissed(callback[12]).intl;
  ({ grow: true, size: "lg", variant: "primary", loading, text: intl3.string(require("module_2766").mRy6sO), onPress: tmp9 });
  const Button = markAsDismissed(callback[14]).Button;
  intl3 = markAsDismissed(callback[12]).intl;
  tmp9 = null;
  if (!loading) {
    tmp9 = callback2;
  }
  return <PromoSheet illustration={null} title={intl.string(require("module_2766")["Uty2/X"])} description={intl2.string(require("module_2766").VAgI8Q)} onDismiss={callback3} actions={null} />;
};
