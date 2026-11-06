// Module ID: 17752
// Function ID: 17753
// Name: EmailSettingsConstants
// Dependencies: [1113, 2]

// Module 17752 (EmailSettingsConstants)
import intl2 from "intl" /* 1113 */;
import size from "module_2" /* 2 */;

const obj = { COMMUNICATION: "communication", SOCIAL: "social", TIPS: "tips", RECOMMENDATIONS_AND_EVENTS: "recommendations_and_events", UPDATES_AND_ANNOUNCEMENTS: "updates_and_announcements", FAMILY_CENTER_DIGEST: "family_center_digest" };
const items = [, , , , ];
const obj2 = {
  category: obj.COMMUNICATION,
  label() {
    const intl = intl2.intl;
    return intl.string(intl2.t["B75+xe"]);
  },
  subLabel() {
    const intl = intl2.intl;
    return intl.string(intl2.t.ZHg9Tc);
  }
};
items[0] = obj2;
items[1] = {
  category: obj.SOCIAL,
  label() {
    const intl = intl2.intl;
    return intl.string(intl2.t.sxn7lR);
  },
  subLabel() {
    const intl = intl2.intl;
    return intl.string(intl2.t.l7sdzF);
  }
};
items[2] = {
  category: obj.UPDATES_AND_ANNOUNCEMENTS,
  label() {
    const intl = intl2.intl;
    return intl.string(intl2.t.EkxXhe);
  },
  subLabel() {
    const intl = intl2.intl;
    return intl.string(intl2.t["8ba9Q7"]);
  }
};
items[3] = {
  category: obj.TIPS,
  label() {
    const intl = intl2.intl;
    return intl.string(intl2.t.jNrkrM);
  },
  subLabel() {
    const intl = intl2.intl;
    return intl.string(intl2.t["FF6/+B"]);
  }
};
items[4] = {
  category: obj.RECOMMENDATIONS_AND_EVENTS,
  label() {
    const intl = intl2.intl;
    return intl.string(intl2.t.E8g1l8);
  },
  subLabel() {
    const intl = intl2.intl;
    return intl.string(intl2.t.X4JMt1);
  }
};
const mapped = items.map((category) => category.category);
const result = size.fileFinishedImporting("modules/user_settings/notifications/EmailSettingsConstants.tsx");

export const EmailCategories = obj;
export const EmailCategoriesList = items;
export const MarketingEmailCategories = mapped;
