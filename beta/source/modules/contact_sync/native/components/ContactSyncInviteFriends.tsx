// Module ID: 12197
// Function ID: 12198
// Name: ContactSyncInviteFriends
// Dependencies: [19, 17, 1372, 1074, 21, 4836, 576, 504, 5899, 12198, 4832, 1115, 5281, 1241, 4678, 7809, 2]
// Exports: default

// Module 12197 (ContactSyncInviteFriends)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import intl4 from "intl" /* 1115 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import FastImageDefault from "FastImage" /* 5899 */;
import AssetRegistryDefault from "AssetRegistry" /* 12198 */;
import react from "react" /* 19 */;
import UserStore from "UserStore" /* 1372 */;
import Constants from "Constants" /* 1074 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let c9;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let tmp;
let tmp5;
const UserUtilsDefault = tmp(4678);
const showShareActionSheet = tmp5(7809);
const View = react_native.View;
({ AnalyticEvents: hasOwnProperty, AnalyticsSections: metroRequire } = Constants);
({ jsx: metroImportDefault, jsxs: metroImportAll, Fragment: c9 } = Fragment);
let obj = { container: { flex: 1, alignItems: "center", justifyContent: "center", paddingHorizontal: 16 }, art: { marginBottom: 16 }, title: { marginBottom: 8, textAlign: "center" }, subtitle: { lineHeight: 18, textAlign: "center" }, button: obj2 };
obj2 = { marginTop: nativeDefault.space.PX_24, marginHorizontal: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_32 };
let closure_10 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/contact_sync/native/components/ContactSyncInviteFriends.tsx");

export default function ContactSyncInviteFriends() {
  let Button;
  let closure_0;
  let currentUser;
  let intl;
  let intl2;
  let intl3;
  let items1;
  let items2;
  let obj8;
  let tmp = closure_10();
  let obj = require("get initialized");
  const items = [UserStore];
  _require = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  let obj2 = { children: items2 };
  const obj3 = { style: tmp.container, children: items1 };
  const obj4 = { style: tmp.art, source: AssetRegistryDefault };
  const tmp2 = FastImageDefault;
  items1 = [closure_7(tmp2, obj4), , ];
  const obj5 = { style: tmp.title, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: intl.string(require("intl").t.ZxBpLf) };
  const Text = require("Text/Text").Text;
  intl = require("intl").intl;
  items1[1] = closure_7(Text, obj5);
  const obj6 = { style: tmp.subtitle, variant: "text-sm/medium", color: "text-default", children: intl2.string(require("intl").t["fXtCJ+"]) };
  const Text2 = require("Text/Text").Text;
  intl2 = require("intl").intl;
  items1[2] = closure_7(Text2, obj6);
  items2 = [closure_8(View, obj3), ];
  const obj7 = { style: tmp.button, children: closure_7(Button, obj8) };
  obj8 = {
    variant: "primary",
    size: "lg",
    text: intl3.string(require("intl").t["6Qgrev"]),
    onPress() {
      const obj = AnalyticsUtilsDefault;
      const obj2 = { friend_add_type: "Invite", source_page: metroRequire.CONTACT_SYNC_MODAL };
      obj.track(hasOwnProperty.FRIEND_ADD_VIEWED, obj2);
      const intl = intl4.intl;
      const formatToPlainString = intl.formatToPlainString;
      let str = "";
      const v6E9a1J = intl4.t["6E9a1J"];
      const tmp3 = metroRequire;
      if (null != closure_0) {
        const tmpResult = UserUtilsDefault;
        str = tmpResult.getUserTag(tmp7);
      }
      const formatToPlainStringResult = formatToPlainString(v6E9a1J, { url: "https://discord.com/", username: str });
      const tmp5Result = showShareActionSheet;
      tmp5Result.showShareActionSheet({ message: formatToPlainStringResult }, tmp3.CONTACT_SYNC_MODAL);
    }
  };
  Button = require("components/Button/Button").Button;
  intl3 = require("intl").intl;
  items2[1] = closure_7(View, obj7);
  return closure_8(closure_9, obj2);
};
