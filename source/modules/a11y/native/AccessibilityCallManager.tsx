// Module ID: 13484
// Function ID: 103408
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 1194, 1348, 3802, 1850, 477, 3838, 4355, 4011, 1212, 686, 4565, 2]

// Module 13484 (_isNativeReflectConstruct)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";
import LifecycleManager from "LifecycleManager";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import closure_10 from "_isNativeReflectConstruct";
import closure_11 from "_isNativeReflectConstruct";
import tmp4 from "LifecycleManager";
import set from "_possibleConstructorReturn";

const require = arg1;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function announceIncomingCall(channelId) {
  if (!set.has(channelId)) {
    let obj = require(477) /* set */;
    if (!obj.isIOS()) {
      channel = channel.getChannel(channelId);
      if (null != channel) {
        const channelName = require(4355) /* computeDefaultGroupDmNameFromUserIds */.computeChannelName(channel, closure_11, closure_10);
        if (null != channelName) {
          set.add(channelId);
          const AccessibilityAnnouncer = require(4011) /* AccessibilityAnnouncer */.AccessibilityAnnouncer;
          const intl = require(1212) /* getSystemLocale */.intl;
          obj = { callLocation: channelName };
          AccessibilityAnnouncer.announce(intl.formatToPlainString(require(1212) /* getSystemLocale */.t["Bm0A/p"], obj), "assertive");
        }
        const obj3 = require(4355) /* computeDefaultGroupDmNameFromUserIds */;
      }
    } else {
      const NativePhoneIntegrationEnabled = require(3838) /* explicitContentFromProto */.NativePhoneIntegrationEnabled;
    }
  }
}
let set = new Set();
const map = new Map();
tmp4 = new tmp4();
let result = set.fileFinishedImporting("modules/a11y/native/AccessibilityCallManager.tsx");

export default tmp4;
