// Module ID: 14784
// Function ID: 14785
// Name: VibegrationsBuilderPreviewStore
// Dependencies: [504, 577, 2]

// Module 14784 (VibegrationsBuilderPreviewStore)
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 577 */;

let applicationId = null;
let enabled = false;
const Store = initializeDefault.Store;
class VibegrationsBuilderPreviewStore extends Store {
}
const prototype = VibegrationsBuilderPreviewStore.prototype;
prototype["getBuilderPreviewApplicationId"] = function getBuilderPreviewApplicationId() {
  return applicationId;
};
prototype["isBuilderPreviewMobile"] = function isBuilderPreviewMobile() {
  return enabled;
};
const vibegrationsBuilderPreviewStore = new VibegrationsBuilderPreviewStore(DispatcherDefault, {
  LOGOUT: function handleLogout() {
    if (null == applicationId) {
      if (!enabled) {
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
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/vibegrations/stores/VibegrationsBuilderPreviewStore.tsx");

export default vibegrationsBuilderPreviewStore;
