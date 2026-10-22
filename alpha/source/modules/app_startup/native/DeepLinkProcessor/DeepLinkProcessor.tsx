// Module ID: 19326
// Function ID: 19327
// Name: DeepLinkProcessor
// Dependencies: [1384, 2]

// Module 19326 (DeepLinkProcessor)
import PlatformUtils from "PlatformUtils" /* 1384 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/app_startup/native/DeepLinkProcessor/DeepLinkProcessor.tsx");
class DeepLinkProcessor {
  constructor(handleEvent) {
    let obj = arg1;
    if (arg1 === undefined) {
      obj = {};
    }
    const merged = Object.assign({ initialUrlsHandled: false, pendingEvents: null });
    merged[1] = [];
    merged.handleEvent = handleEvent;
    let isAndroid = obj.isAndroid;
    if (isAndroid == null) {
      const obj2 = PlatformUtils;
      isAndroid = obj2.isAndroid();
    }
    merged.android = isAndroid;
    return merged;
  }
  process(url) {
    const obj = { url, source: "linking" };
    this.processEvent(obj);
  }
  processNative(url, source, isDeferred, isColdStart) {
    let obj;
    const processEvent = this.processEvent;
    if ("appsflyer" === source) {
      obj = { url, source, isDeferred, isColdStart };
      const obj2 = { url, source, isDeferred, isColdStart };
    } else {
      obj = { url, source };
    }
    processEvent(obj);
  }
  processEvent(arg0) {
    const self = this;
    if (this.android) {
      if (self.initialUrlsHandled) {
        self.handleEvent(arg0, false);
      } else {
        const pendingEvents = self.pendingEvents;
        pendingEvents.push(arg0);
      }
    } else {
      self.handleEvent(arg0, false);
    }
  }
  finishInitialUrls() {
    const self = this;
    if (this.android) {
      if (!self.initialUrlsHandled) {
        self.initialUrlsHandled = true;
        const pendingEvents = self.pendingEvents;
        self.pendingEvents = [];
        const item = pendingEvents.forEach((item) => self.handleEvent(item, true));
      }
    }
  }
}
const prototype = DeepLinkProcessor.prototype;

export default DeepLinkProcessor;
