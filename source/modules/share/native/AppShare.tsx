// Module ID: 16618
// Function ID: 129572
// Name: AppShare
// Dependencies: [57, 31, 27, 6696, 13328, 1194, 653, 11453, 33, 566, 5590, 477, 13367, 11456, 6707, 675, 4559, 13476, 12907, 1553, 8333, 5585, 15592, 15635, 4475, 2]
// Exports: default

// Module 16618 (AppShare)
import _slicedToArray from "_slicedToArray";
import closure_4 from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import { AnalyticEvents } from "ME";
import { MultiAccountSwitchLocation as closure_9 } from "MAX_ACCOUNTS";
import jsxProd from "jsxProd";

let closure_10;
let closure_11;
let closure_5;
let closure_6;
const require = arg1;
({ BackHandler: closure_5, NativeModules: closure_6 } = get_ActivityIndicator);
({ jsx: closure_10, jsxs: closure_11 } = jsxProd);
result = require("get ActivityIndicator").fileFinishedImporting("modules/share/native/AppShare.tsx");

export default function AppShare(attachments) {
  const _require = attachments;
  (function useAuthenticated() {
    const items = [outer1_7];
    const stateFromStores = attachments(outer1_2[9]).useStateFromStores(items, () => outer2_7.isAuthenticated());
    const items1 = [stateFromStores];
    const effect = outer1_4.useEffect(() => {
      if (stateFromStores) {
        outer2_1(outer2_2[10]).startSession(outer2_7.getToken());
        const obj = outer2_1(outer2_2[10]);
        if (obj2.isAndroid()) {
          const NativePermissionManager = outer2_6.NativePermissionManager;
          const notificationAuthorization = NativePermissionManager.requestNotificationAuthorization();
        }
        obj2 = stateFromStores(outer2_2[11]);
      }
    }, items1);
  })();
  let items = [attachments.attachments.length, attachments.text];
  let effect = React.useEffect(() => {
    let obj = outer1_1(outer1_2[15]);
    obj = {};
    let tmp = null != attachments.text;
    if (tmp) {
      tmp = attachments.text.length > 0;
    }
    obj.has_content = tmp;
    obj.has_attachment = attachments.attachments.length > 0;
    obj.track(outer1_8.EXTERNAL_SHARE_OPENED, obj);
  }, items);
  importDefault(4559)(() => {
    let mimeTypes;
    let numAttachments;
    attachments = attachments.attachments;
    ({ numAttachments, mimeTypes } = {
      numAttachments: attachments.attachments.length,
      mimeTypes: attachments.map((mimeType) => {
        mimeType = mimeType.mimeType;
        let str = "unknown";
        if (null != mimeType) {
          str = mimeType;
        }
        return str;
      })
    });
    const obj = {
      numAttachments: attachments.attachments.length,
      mimeTypes: attachments.map((mimeType) => {
        mimeType = mimeType.mimeType;
        let str = "unknown";
        if (null != mimeType) {
          str = mimeType;
        }
        return str;
      })
    };
    attachments(outer1_2[14]).trackAppUIViewed("share", { share_num_attachments: numAttachments, share_attachment_mimetypes: mimeTypes });
  });
  let obj = { appEntryKey: "share" };
  if (tmp) {
    obj = { appEntryKey: "share", sharedContent: attachments };
    const tmp12 = importDefault(12907);
    if (obj3.isMetaQuest()) {
      let exitApp = importDefault(8333).close;
    } else {
      exitApp = exitApp.exitApp;
    }
    obj.onClose = exitApp;
    tmp7(tmp12, obj);
    obj3 = _require(1553);
  } else {
    let items1 = [tmp7(_require(5585).SceneLoadingIndicator, {}), , , ];
    obj = { appEntryKey: "share" };
    items1[1] = callback(_require(15592).ActionSheetContainer, obj);
    items1[2] = callback(importDefault(15635), {});
    items1[3] = callback(_require(4475).AlertModalContainer, {});
    obj.children = items1;
    return closure_11(tmp6, obj);
  }
};
