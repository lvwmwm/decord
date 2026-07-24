// Module ID: 10548
// Function ID: 82303
// Name: handlePressJoinActivity
// Dependencies: [5, 4153, 1348, 1838, 3758, 1849, 4146, 1347, 10549, 10550, 4470, 1212, 5463, 10546, 10551, 2]
// Exports: maybeJoinEmbeddedActivity

// Module 10548 (handlePressJoinActivity)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import _callSuper from "_callSuper";
import closure_5 from "_isNativeReflectConstruct";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import closure_7 from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import closure_10 from "_createForOfIteratorHelperLoose";

const require = arg1;
function handlePressJoinActivity(arg0) {
  let embeddedActivityJoinability;
  let handleCanJoin;
  ({ embeddedActivityJoinability, handleCanJoin } = arg0);
  if (require(10549) /* getEmbeddedActivityJoinability */.EmbeddedActivityJoinability.CAN_JOIN === embeddedActivityJoinability) {
    if (null != handleCanJoin) {
      handleCanJoin();
    }
  } else if (require(10549) /* getEmbeddedActivityJoinability */.EmbeddedActivityJoinability.NO_USE_EMBEDDED_ACTIVITIES_PERMISSION === embeddedActivityJoinability) {
    const result = require(10550) /* showActivitiesInvalidPermissionsAlert */.showActivitiesInvalidPermissionsAlert();
    const obj9 = require(10550) /* showActivitiesInvalidPermissionsAlert */;
  } else if (require(10549) /* getEmbeddedActivityJoinability */.EmbeddedActivityJoinability.ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS === embeddedActivityJoinability) {
    let obj = {};
    const intl7 = require(1212) /* getSystemLocale */.intl;
    obj.title = intl7.string(require(1212) /* getSystemLocale */.t.PtobXW);
    const intl8 = require(1212) /* getSystemLocale */.intl;
    obj.body = intl8.string(require(1212) /* getSystemLocale */.t.UXoQTp);
    obj.hideActionSheet = false;
    importDefault(4470).show(obj);
    const obj7 = importDefault(4470);
  } else if (require(10549) /* getEmbeddedActivityJoinability */.EmbeddedActivityJoinability.ACTIVITY_NOT_SUPPORTED_ON_OS === embeddedActivityJoinability) {
    obj = {};
    const intl5 = require(1212) /* getSystemLocale */.intl;
    obj.title = intl5.string(require(1212) /* getSystemLocale */.t.PtobXW);
    const intl6 = require(1212) /* getSystemLocale */.intl;
    obj.body = intl6.string(require(1212) /* getSystemLocale */.t.uGDCcw);
    obj.hideActionSheet = false;
    importDefault(4470).show(obj);
    const obj5 = importDefault(4470);
  } else if (require(10549) /* getEmbeddedActivityJoinability */.EmbeddedActivityJoinability.ACTIVITY_AGE_GATED === embeddedActivityJoinability) {
    let obj2 = importDefault(4470);
    const obj1 = {};
    const intl3 = require(1212) /* getSystemLocale */.intl;
    obj1.title = intl3.string(require(1212) /* getSystemLocale */.t.PtobXW);
    const intl4 = require(1212) /* getSystemLocale */.intl;
    obj1.body = intl4.string(require(1212) /* getSystemLocale */.t["4WuFRE"]);
    obj1.hideActionSheet = false;
    obj2.show(obj1);
  } else {
    obj = importDefault(4470);
    obj2 = {};
    const intl = require(1212) /* getSystemLocale */.intl;
    obj2.title = intl.string(require(1212) /* getSystemLocale */.t.PtobXW);
    const intl2 = require(1212) /* getSystemLocale */.intl;
    obj2.body = intl2.string(require(1212) /* getSystemLocale */.t.FUCQco);
    obj2.hideActionSheet = false;
    obj.show(obj2);
  }
}
function _maybeJoinEmbeddedActivity() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/activities/handlePressJoinActivity.tsx");

export default handlePressJoinActivity;
export const maybeJoinEmbeddedActivity = function maybeJoinEmbeddedActivity(arg0) {
  return _maybeJoinEmbeddedActivity(...arguments);
};
