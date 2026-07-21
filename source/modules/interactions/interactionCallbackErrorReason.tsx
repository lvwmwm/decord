// Module ID: 4351
// Function ID: 38618
// Name: interactionCallbackErrorReason
// Dependencies: []
// Exports: interactionCallbackErrorReason

// Module 4351 (interactionCallbackErrorReason)
let closure_3 = importDefault(dependencyMap[0]);
const result = arg1(dependencyMap[3]).fileFinishedImporting("modules/interactions/interactionCallbackErrorReason.tsx");

export const interactionCallbackErrorReason = function interactionCallbackErrorReason(reason, applicationId) {
  if (importDefault(dependencyMap[1]).ReasonCodes.TIMEOUT === reason) {
    const application = application.getApplication(applicationId);
    if (null != application) {
      const intl11 = applicationId(dependencyMap[2]).intl;
      const obj = { applicationName: application.name };
      let formatToPlainStringResult = intl11.formatToPlainString(applicationId(dependencyMap[2]).t.u2D2Uj, obj);
    } else {
      const intl10 = applicationId(dependencyMap[2]).intl;
      formatToPlainStringResult = intl10.string(applicationId(dependencyMap[2]).t.vGU8+r);
    }
    return formatToPlainStringResult;
  } else if (importDefault(dependencyMap[1]).ReasonCodes.ACTIVITY_LAUNCH_NOT_IN_EXPERIMENT === reason) {
    const intl9 = applicationId(dependencyMap[2]).intl;
    return intl9.string(applicationId(dependencyMap[2]).t.GyzcrS);
  } else {
    if (importDefault(dependencyMap[1]).ReasonCodes.ACTIVITY_LAUNCH_INVALID_USER_VERIFICATION_LEVEL !== reason) {
      if (importDefault(dependencyMap[1]).ReasonCodes.ACTIVITY_LAUNCH_INVALID_USER_PERMISSIONS !== reason) {
        if (importDefault(dependencyMap[1]).ReasonCodes.ACTIVITY_LAUNCH_UNKNOWN_CHANNEL !== reason) {
          if (importDefault(dependencyMap[1]).ReasonCodes.ACTIVITY_LAUNCH_UNKNOWN_GUILD !== reason) {
            if (importDefault(dependencyMap[1]).ReasonCodes.ACTIVITY_LAUNCH_INVALID_CHANNEL_TYPE !== reason) {
              if (importDefault(dependencyMap[1]).ReasonCodes.ACTIVITY_LAUNCH_INVALID_CHANNEL_NO_AFK !== reason) {
                if (importDefault(dependencyMap[1]).ReasonCodes.ACTIVITY_LAUNCH_INVALID_USER_AGE_GATE === reason) {
                  const intl6 = applicationId(dependencyMap[2]).intl;
                  return intl6.string(applicationId(dependencyMap[2]).t.4WuFRE);
                } else if (importDefault(dependencyMap[1]).ReasonCodes.ACTIVITY_LAUNCH_INVALID_DEV_PREVIEW_GUILD_SIZE === reason) {
                  const intl5 = applicationId(dependencyMap[2]).intl;
                  return intl5.string(applicationId(dependencyMap[2]).t.RvkXdb);
                } else {
                  if (importDefault(dependencyMap[1]).ReasonCodes.ACTIVITY_LAUNCH_INVALID_CONFIGURATION_PLATFORM_NOT_SUPPORTED !== reason) {
                    if (importDefault(dependencyMap[1]).ReasonCodes.ACTIVITY_LAUNCH_INVALID_CONFIGURATION_PLATFORM_NOT_RELEASED !== reason) {
                      if (importDefault(dependencyMap[1]).ReasonCodes.ACTIVITY_LAUNCH_INVALID_USER_NO_ACCESS_TO_ACTIVITY === reason) {
                        const intl3 = applicationId(dependencyMap[2]).intl;
                        return intl3.string(applicationId(dependencyMap[2]).t.WjNAAA);
                      } else if (importDefault(dependencyMap[1]).ReasonCodes.ACTIVITY_LAUNCH_INVALID_LOCATION_TYPE === reason) {
                        const intl2 = applicationId(dependencyMap[2]).intl;
                        return intl2.string(applicationId(dependencyMap[2]).t.PtobXW);
                      } else if (importDefault(dependencyMap[1]).ReasonCodes.ACTIVITY_LAUNCH_INVALID_USER_REGION_FOR_APPLICATION === reason) {
                        const intl = applicationId(dependencyMap[2]).intl;
                        return intl.string(applicationId(dependencyMap[2]).t.PrHIM5);
                      }
                    }
                  }
                  const intl4 = applicationId(dependencyMap[2]).intl;
                  return intl4.string(applicationId(dependencyMap[2]).t.uGDCcw);
                }
              }
            }
          }
        }
        const intl7 = applicationId(dependencyMap[2]).intl;
        return intl7.string(applicationId(dependencyMap[2]).t.j29zCr);
      }
    }
    const intl8 = applicationId(dependencyMap[2]).intl;
    return intl8.string(applicationId(dependencyMap[2]).t.hHGrWz);
  }
};
