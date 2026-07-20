// Module ID: 1174
// Function ID: 13372
// Name: lazyLoadFeedbackIntegration
// Dependencies: []

// Module 1174 (lazyLoadFeedbackIntegration)
arg5.lazyLoadFeedbackIntegration = function lazyLoadFeedbackIntegration() {
  const client = arg1(arg6[0]).getClient();
  let integrationByName;
  if (null !== client) {
    if (undefined !== client) {
      integrationByName = client.getIntegrationByName(arg1(arg6[1]).MOBILE_FEEDBACK_INTEGRATION_NAME);
    }
  }
  if (!integrationByName) {
    const client1 = arg1(arg6[0]).getClient();
    integrationByName = null === client1;
    const obj4 = arg1(arg6[0]);
  }
  if (!integrationByName) {
    integrationByName = undefined === obj3;
  }
  if (!integrationByName) {
    obj3.addIntegration(arg1(arg6[1]).feedbackIntegration());
    const obj5 = arg1(arg6[1]);
  }
};
arg5.AUTO_INJECT_FEEDBACK_INTEGRATION_NAME = "AutoInjectMobileFeedback";
arg5.lazyLoadAutoInjectFeedbackIntegration = function lazyLoadAutoInjectFeedbackIntegration() {
  let obj = arg1(arg6[0]);
  const client = obj.getClient();
  let integrationByName;
  if (null !== client) {
    if (undefined !== client) {
      integrationByName = client.getIntegrationByName("AutoInjectMobileFeedback");
    }
  }
  if (!integrationByName) {
    const client1 = arg1(arg6[0]).getClient();
    integrationByName = null === client1;
    const obj4 = arg1(arg6[0]);
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
  let obj = arg1(arg6[0]);
  const client = obj.getClient();
  let integrationByName;
  if (null !== client) {
    if (undefined !== client) {
      integrationByName = client.getIntegrationByName("AutoInjectMobileFeedbackButton");
    }
  }
  if (!integrationByName) {
    const client1 = arg1(arg6[0]).getClient();
    integrationByName = null === client1;
    const obj4 = arg1(arg6[0]);
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
  let obj = arg1(arg6[0]);
  const client = obj.getClient();
  let integrationByName;
  if (null !== client) {
    if (undefined !== client) {
      integrationByName = client.getIntegrationByName("AutoInjectMobileScreenshotButton");
    }
  }
  if (!integrationByName) {
    const client1 = arg1(arg6[0]).getClient();
    integrationByName = null === client1;
    const obj4 = arg1(arg6[0]);
  }
  if (!integrationByName) {
    integrationByName = undefined === obj3;
  }
  if (!integrationByName) {
    obj = { name: "AutoInjectMobileScreenshotButton" };
    obj3.addIntegration(obj);
  }
};
