// Module ID: 16364
// Function ID: 16365
// Dependencies: [19, 21, 13865, 3976, 16365, 16367, 2]

// Module 16364
import { jsx } from "jsxProd";
import importAllResult from "noop";

const require = arg1;
const memoResult = require("noop").memo(function MediaPlaybackPanelContainer() {
  let obj = require(13865) /* _initialize */;
  let tmp2 = null;
  if (obj.useMediaPlayerManagerStore(obj2.useShallow((showPip) => {
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
    if (!tmp) {
      ({ mediaSourceMessage, activeMediaPlayerSource } = showPip);
      if (activeMediaPlayerSource != null) {
        const attachmentIndex = activeMediaPlayerSource.attachmentIndex;
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
    obj = { children: null };
    obj[0] = jsx(importDefault(16367), {});
    tmp2 = jsx(importDefault(16365), { children: null });
    let tmp5 = importDefault(16365);
  }
  return tmp2;
});
const result = require("_initialize").fileFinishedImporting("modules/media_panel/native/MediaPlaybackPanelContainer.tsx");

export default memoResult;
