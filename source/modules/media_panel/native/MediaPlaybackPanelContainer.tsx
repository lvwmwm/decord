// Module ID: 15767
// Function ID: 120539
// Dependencies: [37093376, 282853376, 517275648, 270270464, 1033633792, 298188800, 438173696]

// Module 15767
const jsx = arg1(dependencyMap[1]).jsx;
const importAllResult = importAll(dependencyMap[0]);
const memoResult = importAll(dependencyMap[0]).memo(function MediaPlaybackPanelContainer() {
  let obj = arg1(dependencyMap[2]);
  let tmp = null;
  if (obj.useMediaPlayerManagerStore(obj2.useShallow((showPip) => {
    let activeMediaPlayerSource;
    let mediaSourceMessage;
    let tmp = !showPip.showPip || !showPip.canAccessMedia;
    if (!tmp) {
      tmp = null == showPip.activeMediaPlayerSource;
    }
    let tmp3 = !tmp;
    if (!tmp) {
      ({ mediaSourceMessage, activeMediaPlayerSource } = showPip);
      if (null != activeMediaPlayerSource) {
        const attachmentIndex = activeMediaPlayerSource.attachmentIndex;
      }
      let flag = false;
      if (null != mediaSourceMessage) {
        flag = false;
        if (null != attachmentIndex) {
          let tmp5;
          if (null != mediaSourceMessage) {
            const contentMessage = mediaSourceMessage.getContentMessage();
            if (null != contentMessage) {
              tmp5 = contentMessage.attachments[attachmentIndex];
            }
          }
          let startsWithResult;
          if (null != tmp5) {
            const content_type = tmp5.content_type;
            if (null != content_type) {
              startsWithResult = content_type.startsWith("audio");
            }
          }
          flag = null != startsWithResult && startsWithResult;
          const tmp8 = null != startsWithResult && startsWithResult;
        }
      }
      tmp3 = flag;
    }
    return tmp3;
  }))) {
    obj = { children: jsx(importDefault(dependencyMap[5]), {}) };
    tmp = jsx(importDefault(dependencyMap[4]), obj);
    const tmp5 = importDefault(dependencyMap[4]);
  }
  return tmp;
});
const result = arg1(dependencyMap[6]).fileFinishedImporting("modules/media_panel/native/MediaPlaybackPanelContainer.tsx");

export default memoResult;
