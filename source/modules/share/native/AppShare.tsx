// Module ID: 16478
// Function ID: 127261
// Name: AppShare
// Dependencies: []
// Exports: default

// Module 16478 (AppShare)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
({ BackHandler: closure_5, NativeModules: closure_6 } = arg1(dependencyMap[2]));
arg1(dependencyMap[3]);
arg1(dependencyMap[4]);
let closure_7 = importDefault(dependencyMap[5]);
const AnalyticEvents = arg1(dependencyMap[6]).AnalyticEvents;
let closure_9 = arg1(dependencyMap[7]).MultiAccountSwitchLocation;
const tmp2 = arg1(dependencyMap[2]);
({ jsx: closure_10, jsxs: closure_11 } = arg1(dependencyMap[8]));
const tmp5 = arg1(dependencyMap[8]);
const result = arg1(dependencyMap[25]).fileFinishedImporting("modules/share/native/AppShare.tsx");

export default function AppShare(attachments) {
  const arg1 = attachments;
  function useAuthenticated() {
    const items = [closure_7];
    const stateFromStores = arg0(closure_2[9]).useStateFromStores(items, () => closure_7.isAuthenticated());
    const arg0 = stateFromStores;
    const items1 = [stateFromStores];
    const effect = React.useEffect(() => {
      if (stateFromStores) {
        const obj = callback(closure_2[10]);
        obj.startSession(closure_7.getToken());
        if (obj2.isAndroid()) {
          const NativePermissionManager = obj.NativePermissionManager;
          const notificationAuthorization = NativePermissionManager.requestNotificationAuthorization();
        }
        const obj2 = stateFromStores(closure_2[11]);
      }
    }, items1);
  }();
  const items = [attachments.attachments.length, attachments.text];
  const effect = React.useEffect((self) => {
    let obj = callback(closure_2[15]);
    obj = {};
    let tmp = null != self.text;
    if (tmp) {
      tmp = self.text.length > 0;
    }
    obj.has_content = tmp;
    obj.has_attachment = self.attachments.length > 0;
    obj.track(constants.EXTERNAL_SHARE_OPENED, obj);
  }, items);
  importDefault(dependencyMap[16])(() => {
    let mimeTypes;
    let numAttachments;
    const attachments = arg0.attachments;
    ({ numAttachments, mimeTypes } = {
      numAttachments: arg0.attachments.length,
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
      numAttachments: arg0.attachments.length,
      mimeTypes: attachments.map((mimeType) => {
        mimeType = mimeType.mimeType;
        let str = "unknown";
        if (null != mimeType) {
          str = mimeType;
        }
        return str;
      })
    };
    arg0(closure_2[14]).trackAppUIViewed("share", { share_num_attachments: numAttachments, share_attachment_mimetypes: mimeTypes });
  });
  let obj = { appEntryKey: "share" };
  if (tmp) {
    obj = { appEntryKey: "share", sharedContent: attachments };
    const tmp12 = importDefault(dependencyMap[18]);
    if (obj3.isMetaQuest()) {
      let exitApp = importDefault(dependencyMap[20]).close;
    } else {
      exitApp = exitApp.exitApp;
    }
    obj.onClose = exitApp;
    tmp7(tmp12, obj);
    const obj3 = arg1(dependencyMap[19]);
  } else {
    const items1 = [tmp7(arg1(dependencyMap[21]).SceneLoadingIndicator, {}), , , ];
    obj = { appEntryKey: "share" };
    items1[1] = callback(arg1(dependencyMap[22]).ActionSheetContainer, obj);
    items1[2] = callback(importDefault(dependencyMap[23]), {});
    items1[3] = callback(arg1(dependencyMap[24]).AlertModalContainer, {});
    obj.children = items1;
    return closure_11(tmp6, obj);
  }
};
