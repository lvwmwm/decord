// Module ID: 15954
// Function ID: 123289
// Dependencies: [31, 33, 13522, 3746, 15955, 15957, 2]

// Module 15954
import { jsx } from "jsxProd";
import importAllResult from "result";

const require = arg1;
const memoResult = require("result").memo(function MediaPlaybackPanelContainer() {
  let obj = require(13522) /* _isNativeReflectConstruct */;
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
    obj = { children: jsx(importDefault(15957), {}) };
    tmp = jsx(importDefault(15955), { children: jsx(importDefault(15957), {}) });
    let tmp5 = importDefault(15955);
  }
  return tmp;
});
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/media_panel/native/MediaPlaybackPanelContainer.tsx");

export default memoResult;
