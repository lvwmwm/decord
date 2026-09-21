// Module ID: 1067
// Function ID: 1068
// Name: lazyLoadFeedbackIntegration
// Dependencies: [686, 1002]
// Exports: lazyLoadAutoInjectFeedbackButtonIntegration, lazyLoadAutoInjectFeedbackIntegration, lazyLoadAutoInjectScreenshotButtonIntegration, lazyLoadFeedbackIntegration

// Module 1067 (lazyLoadFeedbackIntegration)
import _mod686 from "module_686" /* 686 */;

require = arg1;
const dependencyMap = arg6;
const AutoInjectMobileFeedback = "AutoInjectMobileFeedback";
const AutoInjectMobileFeedbackButton = "AutoInjectMobileFeedbackButton";
const AutoInjectMobileScreenshotButton = "AutoInjectMobileScreenshotButton";

export const lazyLoadFeedbackIntegration = function lazyLoadFeedbackIntegration() {
  const client = _mod686.getClient();
  let integrationByName;
  if (null !== client) {
    if (undefined !== client) {
      integrationByName = client.getIntegrationByName(tmp(1002).MOBILE_FEEDBACK_INTEGRATION_NAME);
    }
  }
  if (!integrationByName) {
    const client1 = tmp(686).getClient();
    integrationByName = null === client1;
    const tmpResult = tmp(686);
  }
  if (!integrationByName) {
    integrationByName = undefined === obj3;
  }
  if (!integrationByName) {
    obj3.addIntegration(tmp(1002).feedbackIntegration());
    const tmpResult2 = tmp(1002);
  }
};
export const AUTO_INJECT_FEEDBACK_INTEGRATION_NAME = "AutoInjectMobileFeedback";
export const lazyLoadAutoInjectFeedbackIntegration = function lazyLoadAutoInjectFeedbackIntegration() {
  const client = _mod686.getClient();
  let integrationByName;
  if (null !== client) {
    if (undefined !== client) {
      integrationByName = client.getIntegrationByName(AutoInjectMobileFeedback);
    }
  }
  if (!integrationByName) {
    const client1 = _mod686.getClient();
    integrationByName = null === client1;
    const tmpResult = _mod686;
  }
  if (!integrationByName) {
    integrationByName = undefined === obj3;
  }
  if (!integrationByName) {
    const obj2 = { name: AutoInjectMobileFeedback };
    obj3.addIntegration(obj2);
  }
};
export const AUTO_INJECT_FEEDBACK_BUTTON_INTEGRATION_NAME = "AutoInjectMobileFeedbackButton";
export const lazyLoadAutoInjectFeedbackButtonIntegration = function lazyLoadAutoInjectFeedbackButtonIntegration() {
  const client = _mod686.getClient();
  let integrationByName;
  if (null !== client) {
    if (undefined !== client) {
      integrationByName = client.getIntegrationByName(AutoInjectMobileFeedbackButton);
    }
  }
  if (!integrationByName) {
    const client1 = _mod686.getClient();
    integrationByName = null === client1;
    const tmpResult = _mod686;
  }
  if (!integrationByName) {
    integrationByName = undefined === obj3;
  }
  if (!integrationByName) {
    const obj2 = { name: AutoInjectMobileFeedbackButton };
    obj3.addIntegration(obj2);
  }
};
export const AUTO_INJECT_SCREENSHOT_BUTTON_INTEGRATION_NAME = "AutoInjectMobileScreenshotButton";
export const lazyLoadAutoInjectScreenshotButtonIntegration = function lazyLoadAutoInjectScreenshotButtonIntegration() {
  const client = _mod686.getClient();
  let integrationByName;
  if (null !== client) {
    if (undefined !== client) {
      integrationByName = client.getIntegrationByName(AutoInjectMobileScreenshotButton);
    }
  }
  if (!integrationByName) {
    const client1 = _mod686.getClient();
    integrationByName = null === client1;
    const tmpResult = _mod686;
  }
  if (!integrationByName) {
    integrationByName = undefined === obj3;
  }
  if (!integrationByName) {
    const obj2 = { name: AutoInjectMobileScreenshotButton };
    obj3.addIntegration(obj2);
  }
};
