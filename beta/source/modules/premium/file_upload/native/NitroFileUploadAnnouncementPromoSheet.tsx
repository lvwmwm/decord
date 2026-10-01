// Module ID: 16773
// Function ID: 16774
// Name: NitroFileUploadAnnouncementPromoSheet
// Dependencies: [19, 17, 2042, 21, 4836, 576, 5298, 9691, 16774, 1115, 2587, 5281, 2]
// Exports: default

// Module 16773 (NitroFileUploadAnnouncementPromoSheet)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 576 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 2042 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let importDefault;

let obj2;
const View = react_native.View;
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
const jsx = Fragment.jsx;
let obj = { illustration: obj2 };
obj2 = { paddingTop: nativeDefault.space.PX_12 };
let closure_7 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/premium/file_upload/native/NitroFileUploadAnnouncementPromoSheet.tsx");

export default function NitroFileUploadAnnouncementPromoSheet(markAsDismissed) {
  let intl3;
  let ref;
  markAsDismissed = markAsDismissed.markAsDismissed;
  const tmp = closure_7();
  importDefault = react.useRef(false);
  const items = [markAsDismissed];
  const callback = react.useCallback((arg0) => {
    if (!ref.current) {
      tmp.current = true;
      markAsDismissed(arg0);
    }
  }, items);
  const obj = markAsDismissed(callback[6]);
  const unmountEffect = obj.useUnmountEffect(() => {
    callback(ContentDismissActionType.AUTO_DISMISS);
  });
  const items1 = [callback];
  const callback1 = react.useCallback(() => {
    callback(ContentDismissActionType.USER_DISMISS);
  }, items1);
  const PromoSheet = markAsDismissed(callback[7]).PromoSheet;
  const intl = markAsDismissed(callback[9]).intl;
  const intl2 = markAsDismissed(callback[9]).intl;
  ({ grow: true, size: "lg", variant: "primary", text: intl3.string(markAsDismissed(callback[9]).t["NX+WJN"]), onPress: callback1 });
  const Button = markAsDismissed(callback[11]).Button;
  intl3 = markAsDismissed(callback[9]).intl;
  return <PromoSheet illustration={null} title={intl.string(require("module_2587").IyCdAU)} description={intl2.string(require("module_2587").LhfXZN)} onDismiss={callback1} actions={null} />;
};
