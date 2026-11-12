// Module ID: 17850
// Function ID: 17851
// Name: EmailCategoryNotificationSettings
// Dependencies: [15967, 8536, 17847, 504, 11717, 17846, 1113, 2]

// Module 17850 (EmailCategoryNotificationSettings)
import get_initialized from "get initialized" /* 504 */;
import SettingsConstants from "SettingsConstants" /* 8536 */;
import EmailSettingsStore from "EmailSettingsStore" /* 15967 */;
import EmailSettingsConstants from "EmailSettingsConstants" /* 17847 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
let hasOwnProperty;
function useMarketingEmailsDisabled() {
  let emailSettings;
  const items = [EmailSettingsStore];
  const obj = get_initialized;
  return obj.useStateFromStores(items, () => {
    const categories = emailSettings.getEmailSettings().categories;
    return closure_1_5.every((item) => !categories[item]);
  });
}
function createEmailSettings(EMAIL_NOTIFICATIONS) {
  let obj2;
  let obj4;
  const f114338 = (category) => category.category === RECOMMENDATIONS_AND_EVENTS;
  function useValue() {
    let emailSettings;
    let closure_0 = RECOMMENDATIONS_AND_EVENTS;
    const items = [EmailSettingsStore];
    const obj = COMMUNICATION(dependencyMap[3]);
    return obj.useStateFromStores(items, () => emailSettings.getEmailSettings().categories[closure_0]);
  }
  function onValueChange(arg0) {
    const obj = COMMUNICATION(dependencyMap[5]);
    return obj.updateEmailSetting(RECOMMENDATIONS_AND_EVENTS, arg0);
  }
  const COMMUNICATION = constants.COMMUNICATION;
  const found = closure_4.find(f114338);
  if (null == found) {
    const _Error5 = Error;
    const _HermesInternal5 = HermesInternal;
    const self9 = this;
    const self10 = this;
    const error = new Error("[EmailCategoryNotificationSettings] Unknown email category: " + COMMUNICATION);
    throw error;
  } else {
    let obj = { communication: obj2.createToggle(obj4), social: null, updatesAndAnnouncements: null, tips: null, recommendationsAndEvents: null, unsubscribeFromAllMarketing: null };
    obj4 = { useTitle: null, useDescription: null, parent: EMAIL_NOTIFICATIONS, useValue, onValueChange };
    ({ label: obj3.useTitle, subLabel: obj3.useDescription } = found);
    const SOCIAL = tmp.SOCIAL;
    obj2 = COMMUNICATION(11717);
    const found1 = arr.find(f114338);
    if (null == found1) {
      const _Error4 = Error;
      const _HermesInternal4 = HermesInternal;
      const self7 = this;
      const self8 = this;
      const error1 = new Error("[EmailCategoryNotificationSettings] Unknown email category: " + SOCIAL);
      throw error1;
    } else {
      const obj6 = { useTitle: null, useDescription: null, parent: EMAIL_NOTIFICATIONS, useValue, onValueChange };
      ({ label: obj5.useTitle, subLabel: obj5.useDescription } = found1);
      const tmp19Result = COMMUNICATION(11717);
      obj.social = tmp19Result.createToggle(obj6);
      const UPDATES_AND_ANNOUNCEMENTS = tmp.UPDATES_AND_ANNOUNCEMENTS;
      const found2 = arr.find(f114338);
      if (null == found2) {
        const _Error3 = Error;
        const _HermesInternal3 = HermesInternal;
        const self5 = this;
        const self6 = this;
        const error2 = new Error("[EmailCategoryNotificationSettings] Unknown email category: " + UPDATES_AND_ANNOUNCEMENTS);
        throw error2;
      } else {
        const obj8 = { useTitle: null, useDescription: null, parent: EMAIL_NOTIFICATIONS, useValue, onValueChange };
        ({ label: obj7.useTitle, subLabel: obj7.useDescription } = found2);
        const tmp19Result5 = COMMUNICATION(11717);
        obj.updatesAndAnnouncements = tmp19Result5.createToggle(obj8);
        const TIPS = tmp.TIPS;
        const found3 = arr.find(f114338);
        if (null == found3) {
          const _Error2 = Error;
          const _HermesInternal2 = HermesInternal;
          const self3 = this;
          const self4 = this;
          const error3 = new Error("[EmailCategoryNotificationSettings] Unknown email category: " + TIPS);
          throw error3;
        } else {
          const obj10 = { useTitle: null, useDescription: null, parent: EMAIL_NOTIFICATIONS, useValue, onValueChange };
          ({ label: obj9.useTitle, subLabel: obj9.useDescription } = found3);
          const tmp19Result6 = COMMUNICATION(11717);
          obj.tips = tmp19Result6.createToggle(obj10);
          const RECOMMENDATIONS_AND_EVENTS = tmp.RECOMMENDATIONS_AND_EVENTS;
          const found4 = arr.find(f114338);
          if (null == found4) {
            const _Error = Error;
            const _HermesInternal = HermesInternal;
            const self = this;
            const self2 = this;
            const error4 = new Error("[EmailCategoryNotificationSettings] Unknown email category: " + RECOMMENDATIONS_AND_EVENTS);
            throw error4;
          } else {
            const obj12 = { useTitle: null, useDescription: null, parent: EMAIL_NOTIFICATIONS, useValue, onValueChange };
            ({ label: obj11.useTitle, subLabel: obj11.useDescription } = found4);
            const tmp19Result7 = COMMUNICATION(11717);
            obj.recommendationsAndEvents = tmp19Result7.createToggle(obj12);
            const obj18 = {
              useTitle() {
                          const intl = COMMUNICATION(dependencyMap[6]).intl;
                          return intl.string(COMMUNICATION(dependencyMap[6]).t.Ra9Pwk);
                        },
              parent: EMAIL_NOTIFICATIONS,
              variant: "danger",
              useIsDisabled: useMarketingEmailsDisabled,
              onPress: COMMUNICATION(17846).updateMarketingEmailSettings
            };
            const createPressable = COMMUNICATION(11717).createPressable;
            COMMUNICATION(11717);
            obj.unsubscribeFromAllMarketing = createPressable(obj18);
            return obj;
          }
        }
      }
    }
  }
}
const MobileUserSettings = SettingsConstants.MobileUserSettings;
({ EmailCategories: c3, EmailCategoriesList: closure_4, MarketingEmailCategories: hasOwnProperty } = EmailSettingsConstants);
const emailSettings = createEmailSettings(MobileUserSettings.EMAIL_NOTIFICATIONS);
const emailSettings1 = createEmailSettings(MobileUserSettings.REDESIGN_EMAIL_NOTIFICATIONS);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/EmailCategoryNotificationSettings.tsx");

export const EmailSettings = emailSettings;
export const RedesignEmailSettings = emailSettings1;
