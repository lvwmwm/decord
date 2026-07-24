// Module ID: 1174
// Function ID: 13378
// Name: lazyLoadFeedbackIntegration
// Dependencies: [794, 1109]

// Module 1174 (lazyLoadFeedbackIntegration)
const require = arg1;
const dependencyMap = arg6;
arg5.lazyLoadFeedbackIntegration = function lazyLoadFeedbackIntegration() {
  const client = require(794) /* registerSpanErrorInstrumentation */.getClient();
  let integrationByName;
  if (null !== client) {
    if (undefined !== client) {
      integrationByName = client.getIntegrationByName(require(1109) /* _getClientIntegration */.MOBILE_FEEDBACK_INTEGRATION_NAME);
    }
  }
  if (!integrationByName) {
    const client1 = require(794) /* registerSpanErrorInstrumentation */.getClient();
    integrationByName = null === client1;
    const obj4 = require(794) /* registerSpanErrorInstrumentation */;
  }
  if (!integrationByName) {
    integrationByName = undefined === obj3;
  }
  if (!integrationByName) {
    obj3.addIntegration(require(1109) /* _getClientIntegration */.feedbackIntegration());
    const obj5 = require(1109) /* _getClientIntegration */;
  }
};
arg5.AUTO_INJECT_FEEDBACK_INTEGRATION_NAME = "AutoInjectMobileFeedback";
arg5.lazyLoadAutoInjectFeedbackIntegration = function lazyLoadAutoInjectFeedbackIntegration() {
  let obj = require(794) /* registerSpanErrorInstrumentation */;
  const client = obj.getClient();
  let integrationByName;
  if (null !== client) {
    if (undefined !== client) {
      integrationByName = client.getIntegrationByName("AutoInjectMobileFeedback");
    }
  }
  if (!integrationByName) {
    const client1 = require(794) /* registerSpanErrorInstrumentation */.getClient();
    integrationByName = null === client1;
    const obj4 = require(794) /* registerSpanErrorInstrumentation */;
  }
  if (!integrationByName) {
    integrationByName = undefined === obj3;
  }
  if (!integrationByName) {
    obj = { name: "AutoInjectMobileFeedback" };
    obj3.addIntegration(obj);
  }
};
arg5.AUTO_INJECT_FEEDBACK_BUTTON_INTEGRATION_NAME = "AutoInjectMobileFeedbackButton";
arg5.lazyLoadAutoInjectFeedbackButtonIntegration = function lazyLoadAutoInjectFeedbackButtonIntegration() {
  let obj = require(794) /* registerSpanErrorInstrumentation */;
  const client = obj.getClient();
  let integrationByName;
  if (null !== client) {
    if (undefined !== client) {
      integrationByName = client.getIntegrationByName("AutoInjectMobileFeedbackButton");
    }
  }
  if (!integrationByName) {
    const client1 = require(794) /* registerSpanErrorInstrumentation */.getClient();
    integrationByName = null === client1;
    const obj4 = require(794) /* registerSpanErrorInstrumentation */;
  }
  if (!integrationByName) {
    integrationByName = undefined === obj3;
  }
  if (!integrationByName) {
    obj = { name: "AutoInjectMobileFeedbackButton" };
    obj3.addIntegration(obj);
  }
};
arg5.AUTO_INJECT_SCREENSHOT_BUTTON_INTEGRATION_NAME = "AutoInjectMobileScreenshotButton";
arg5.lazyLoadAutoInjectScreenshotButtonIntegration = function lazyLoadAutoInjectScreenshotButtonIntegration() {
  let obj = require(794) /* registerSpanErrorInstrumentation */;
  const client = obj.getClient();
  let integrationByName;
  if (null !== client) {
    if (undefined !== client) {
      integrationByName = client.getIntegrationByName("AutoInjectMobileScreenshotButton");
    }
  }
  if (!integrationByName) {
    const client1 = require(794) /* registerSpanErrorInstrumentation */.getClient();
    integrationByName = null === client1;
    const obj4 = require(794) /* registerSpanErrorInstrumentation */;
  }
  if (!integrationByName) {
    integrationByName = undefined === obj3;
  }
  if (!integrationByName) {
    obj = { name: "AutoInjectMobileScreenshotButton" };
    obj3.addIntegration(obj);
  }
};
