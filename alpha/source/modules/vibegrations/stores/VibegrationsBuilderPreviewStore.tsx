// Module ID: 14301
// Function ID: 14302
// Name: VibegrationsBuilderPreviewStore
// Dependencies: [504, 584, 2]

// Module 14301 (VibegrationsBuilderPreviewStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import size from "module_2" /* 2 */;

let applicationId = null;
let enabled = false;
const Store = get_initializedDefault.Store;
class VibegrationsBuilderPreviewStore extends Store {
  getBuilderPreviewApplicationId() {
    return applicationId;
  }
  isBuilderPreviewMobile() {
    return enabled;
  }
}
const prototype = VibegrationsBuilderPreviewStore.prototype;
const obj = {
  LOGOUT: function handleLogout() {
    if (null == applicationId) {
      const tmp = enabled;
      if (!tmp) {
        return false;
      }
    }
    applicationId = null;
    enabled = false;
  },
  VIBEGRATIONS_BUILDER_PREVIEW_APPLICATION_SET: function handleBuilderPreviewApplicationSet(applicationId) {
    applicationId = applicationId.applicationId;
    if (applicationId === applicationId) {
      return false;
    }
  },
  VIBEGRATIONS_BUILDER_PREVIEW_MOBILE_SET: function handleBuilderPreviewMobileSet(enabled) {
    enabled = enabled.enabled;
    if (enabled === enabled) {
      return false;
    }
  }
};
const vibegrationsBuilderPreviewStore = new VibegrationsBuilderPreviewStore(DispatcherDefault, obj);
const result = size.fileFinishedImporting("modules/vibegrations/stores/VibegrationsBuilderPreviewStore.tsx");

export default vibegrationsBuilderPreviewStore;
