// Module ID: 17114
// Function ID: 17115
// Name: EmailCategoryNotificationSettings
// Dependencies: [15229, 9555, 17112, 504, 1112, 3207, 11962, 17111, 2]

// Module 17114 (EmailCategoryNotificationSettings)
import get_initialized from "get initialized" /* 504 */;
import intl2 from "intl" /* 1112 */;
import _modDef3207 from "module_3207" /* 3207 */;
import SettingsConstants from "SettingsConstants" /* 9555 */;
import EmailSettingsStore from "EmailSettingsStore" /* 15229 */;
import EmailSettingsConstants from "EmailSettingsConstants" /* 17112 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

let metroImportDefault;
let metroRequire;
function useMarketingEmailsDisabled() {
  let emailSettings;
  const items = [EmailSettingsStore];
  const obj = get_initialized;
  return obj.useStateFromStores(items, () => {
    const categories = emailSettings.getEmailSettings().categories;
    return closure_1_7.every((item) => !categories[item]);
  });
}
function createEmailSettings(EMAIL_NOTIFICATIONS) {
  let obj2;
  let obj4;
  const f111757 = (category) => category.category === RECOMMENDATIONS_AND_EVENTS;
  function useValue() {
    let emailSettings;
    let closure_0 = RECOMMENDATIONS_AND_EVENTS;
    const items = [EmailSettingsStore];
    const obj = COMMUNICATION(dependencyMap[3]);
    return obj.useStateFromStores(items, () => emailSettings.getEmailSettings().categories[closure_0]);
  }
  function onValueChange(arg0) {
    const obj = COMMUNICATION(dependencyMap[7]);
    return obj.updateEmailSetting(RECOMMENDATIONS_AND_EVENTS, arg0);
  }
  let tmp = EmailCategories;
  const COMMUNICATION = EmailCategories.COMMUNICATION;
  const found = closure_6.find(f111757);
  if (null == found) {
    const _Error5 = Error;
    const _HermesInternal5 = HermesInternal;
    const self9 = this;
    const self10 = this;
    const error = new Error("[EmailCategoryNotificationSettings] Unknown email category: " + COMMUNICATION);
    throw error;
  } else {
    let tmp5 = found;
    if (EMAIL_NOTIFICATIONS === MobileUserSettings.REDESIGN_EMAIL_NOTIFICATIONS) {
      let tmp4 = closure_8[COMMUNICATION];
      if (tmp4 == null) {
        tmp4 = found;
      }
      tmp5 = tmp4;
    }
    let obj = { communication: obj2.createToggle(obj4), social: null, updatesAndAnnouncements: null, tips: null, recommendationsAndEvents: null, unsubscribeFromAllMarketing: null };
    obj4 = { useTitle: null, useDescription: null, parent: EMAIL_NOTIFICATIONS, useValue, onValueChange };
    ({ label: obj3.useTitle, subLabel: obj3.useDescription } = tmp5);
    const SOCIAL = tmp.SOCIAL;
    obj2 = COMMUNICATION(11962);
    const found1 = arr.find(f111757);
    if (null == found1) {
      const _Error4 = Error;
      const _HermesInternal4 = HermesInternal;
      const self7 = this;
      const self8 = this;
      const error1 = new Error("[EmailCategoryNotificationSettings] Unknown email category: " + SOCIAL);
      throw error1;
    } else {
      let tmp11 = found1;
      if (EMAIL_NOTIFICATIONS === MobileUserSettings.REDESIGN_EMAIL_NOTIFICATIONS) {
        let tmp10 = closure_8[SOCIAL];
        if (tmp10 == null) {
          tmp10 = found1;
        }
        tmp11 = tmp10;
      }
      const obj6 = { useTitle: null, useDescription: null, parent: EMAIL_NOTIFICATIONS, useValue, onValueChange };
      ({ label: obj5.useTitle, subLabel: obj5.useDescription } = tmp11);
      const tmp6Result = COMMUNICATION(11962);
      obj.social = tmp6Result.createToggle(obj6);
      const UPDATES_AND_ANNOUNCEMENTS = tmp.UPDATES_AND_ANNOUNCEMENTS;
      const found2 = arr.find(f111757);
      if (null == found2) {
        const _Error3 = Error;
        const _HermesInternal3 = HermesInternal;
        const self5 = this;
        const self6 = this;
        const error2 = new Error("[EmailCategoryNotificationSettings] Unknown email category: " + UPDATES_AND_ANNOUNCEMENTS);
        throw error2;
      } else {
        let tmp15 = found2;
        if (EMAIL_NOTIFICATIONS === MobileUserSettings.REDESIGN_EMAIL_NOTIFICATIONS) {
          let tmp14 = closure_8[UPDATES_AND_ANNOUNCEMENTS];
          if (tmp14 == null) {
            tmp14 = found2;
          }
          tmp15 = tmp14;
        }
        const obj8 = { useTitle: null, useDescription: null, parent: EMAIL_NOTIFICATIONS, useValue, onValueChange };
        ({ label: obj7.useTitle, subLabel: obj7.useDescription } = tmp15);
        const tmp6Result5 = COMMUNICATION(11962);
        obj.updatesAndAnnouncements = tmp6Result5.createToggle(obj8);
        const TIPS = tmp.TIPS;
        const found3 = arr.find(f111757);
        if (null == found3) {
          const _Error2 = Error;
          const _HermesInternal2 = HermesInternal;
          const self3 = this;
          const self4 = this;
          const error3 = new Error("[EmailCategoryNotificationSettings] Unknown email category: " + TIPS);
          throw error3;
        } else {
          let tmp19 = found3;
          if (EMAIL_NOTIFICATIONS === MobileUserSettings.REDESIGN_EMAIL_NOTIFICATIONS) {
            let tmp18 = closure_8[TIPS];
            if (tmp18 == null) {
              tmp18 = found3;
            }
            tmp19 = tmp18;
          }
          const obj10 = { useTitle: null, useDescription: null, parent: EMAIL_NOTIFICATIONS, useValue, onValueChange };
          ({ label: obj9.useTitle, subLabel: obj9.useDescription } = tmp19);
          const tmp6Result6 = COMMUNICATION(11962);
          obj.tips = tmp6Result6.createToggle(obj10);
          const RECOMMENDATIONS_AND_EVENTS = tmp.RECOMMENDATIONS_AND_EVENTS;
          const found4 = arr.find(f111757);
          if (null == found4) {
            const _Error = Error;
            const _HermesInternal = HermesInternal;
            const self = this;
            const self2 = this;
            const error4 = new Error("[EmailCategoryNotificationSettings] Unknown email category: " + RECOMMENDATIONS_AND_EVENTS);
            throw error4;
          } else {
            let tmp23 = found4;
            if (EMAIL_NOTIFICATIONS === MobileUserSettings.REDESIGN_EMAIL_NOTIFICATIONS) {
              let tmp22 = closure_8[RECOMMENDATIONS_AND_EVENTS];
              if (tmp22 == null) {
                tmp22 = found4;
              }
              tmp23 = tmp22;
            }
            const obj12 = { useTitle: null, useDescription: null, parent: EMAIL_NOTIFICATIONS, useValue, onValueChange };
            ({ label: obj11.useTitle, subLabel: obj11.useDescription } = tmp23);
            const tmp6Result7 = COMMUNICATION(11962);
            obj.recommendationsAndEvents = tmp6Result7.createToggle(obj12);
            let closure_0 = EMAIL_NOTIFICATIONS;
            const obj18 = {
              useTitle() {
                          let Ra9Pwk;
                          const intl = COMMUNICATION(dependencyMap[4]).intl;
                          const string = intl.string;
                          const tmp = COMMUNICATION;
                          if (closure_0 === constants.REDESIGN_EMAIL_NOTIFICATIONS) {
                            Ra9Pwk = require("module_3207").tNdxQ1;
                          } else {
                            Ra9Pwk = tmp(tmp2[4]).t.Ra9Pwk;
                          }
                          return string(Ra9Pwk);
                        },
              parent: EMAIL_NOTIFICATIONS,
              variant: "danger",
              useIsDisabled: useMarketingEmailsDisabled,
              onPress: COMMUNICATION(17111).updateMarketingEmailSettings
            };
            const createPressable = COMMUNICATION(11962).createPressable;
            COMMUNICATION(11962);
            obj.unsubscribeFromAllMarketing = createPressable(obj18);
            return obj;
          }
        }
      }
    }
  }
}
const MobileUserSettings = SettingsConstants.MobileUserSettings;
const EmailCategories = EmailSettingsConstants.EmailCategories;
({ EmailCategoriesList: metroRequire, MarketingEmailCategories: metroImportDefault } = EmailSettingsConstants);
let obj = {
  label() {
    const intl = intl2.intl;
    return intl.string(_modDef3207.KcqVQg);
  },
  subLabel() {
    const intl = intl2.intl;
    return intl.string(_modDef3207.rjpJyr);
  }
};
let obj2 = {
  label() {
    const intl = intl2.intl;
    return intl.string(_modDef3207.ZtaadX);
  },
  subLabel() {
    const intl = intl2.intl;
    return intl.string(_modDef3207.oBkSU3);
  }
};
const obj3 = {
  label() {
    const intl = intl2.intl;
    return intl.string(_modDef3207.gsNOLn);
  },
  subLabel() {
    const intl = intl2.intl;
    return intl.string(_modDef3207.VKva4A);
  }
};
let obj4 = {
  label() {
    const intl = intl2.intl;
    return intl.string(_modDef3207.KniwB2);
  },
  subLabel() {
    const intl = intl2.intl;
    return intl.string(_modDef3207.KpbEAR);
  }
};
const obj5 = {
  label() {
    const intl = intl2.intl;
    return intl.string(_modDef3207.WEPL42);
  },
  subLabel() {
    const intl = intl2.intl;
    return intl.string(_modDef3207.AmcFNU);
  }
};
let closure_8 = { [EmailCategories.COMMUNICATION]: obj, [EmailCategories.SOCIAL]: obj2, [EmailCategories.UPDATES_AND_ANNOUNCEMENTS]: obj3, [EmailCategories.TIPS]: obj4, [EmailCategories.RECOMMENDATIONS_AND_EVENTS]: obj5 };
const emailSettings = createEmailSettings(MobileUserSettings.EMAIL_NOTIFICATIONS);
const emailSettings1 = createEmailSettings(MobileUserSettings.REDESIGN_EMAIL_NOTIFICATIONS);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/EmailCategoryNotificationSettings.tsx");

export const EmailSettings = emailSettings;
export const RedesignEmailSettings = emailSettings1;
