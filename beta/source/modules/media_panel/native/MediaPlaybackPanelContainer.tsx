// Module ID: 17044
// Function ID: 17045
// Name: MediaPlaybackPanelContainer
// Dependencies: [19, 21, 14097, 4454, 17045, 17047, 2]

// Module 17044 (MediaPlaybackPanelContainer)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 4454 */;
import MediaPlayerManager from "MediaPlayerManager" /* 14097 */;
import MediaPlaybackPanelControllerDefault from "MediaPlaybackPanelController" /* 17045 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let showPip;

const jsx = Fragment.jsx;
const memoResult = react.memo(function MediaPlaybackPanelContainer() {
  let tmp = dependencyMap;
  const useMediaPlayerManagerStore = MediaPlayerManager.useMediaPlayerManagerStore;
  let tmp3 = null;
  const obj = react2;
  if (useMediaPlayerManagerStore(obj.useShallow((showPip) => {
    let activeMediaPlayerSource;
    let mediaSourceMessage;
    showPip = showPip.showPip;
    let tmp = !showPip;
    if (showPip) {
      tmp = !showPip.canAccessMedia;
    }
    if (!tmp) {
      tmp = null == showPip.activeMediaPlayerSource;
    }
    let tmp3 = !tmp;
    if (tmp3) {
      let attachmentIndex;
      ({ mediaSourceMessage, activeMediaPlayerSource } = showPip);
      if (activeMediaPlayerSource != null) {
        attachmentIndex = activeMediaPlayerSource.attachmentIndex;
      }
      let flag = false;
      if (null != mediaSourceMessage) {
        flag = false;
        if (null != attachmentIndex) {
          let tmp5;
          if (mediaSourceMessage != null) {
            const contentMessage = mediaSourceMessage.getContentMessage();
            if (contentMessage != null) {
              tmp5 = contentMessage.attachments[attachmentIndex];
            }
          }
          let flag2;
          if (tmp5 != null) {
            const content_type = tmp5.content_type;
            if (content_type != null) {
              flag2 = content_type.startsWith("audio");
            }
          }
          if (flag2 == null) {
            flag2 = false;
          }
          flag = flag2;
        }
      }
      tmp3 = flag;
    }
    return tmp3;
  }))) {
    let tmp5 = importDefault;
    MediaPlaybackPanelControllerDefault;
    tmp3 = <tmp6>{null}</tmp6>;
  }
  return tmp3;
});
const result = size.fileFinishedImporting("modules/media_panel/native/MediaPlaybackPanelContainer.tsx");

export default memoResult;
