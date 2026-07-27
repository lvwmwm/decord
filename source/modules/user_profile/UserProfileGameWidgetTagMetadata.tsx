// Module ID: 11993
// Function ID: 92718
// Name: WidgetGameTagIconRole
// Dependencies: [5638, 1212, 2]
// Exports: buildWidgetGameTagMetadata

// Module 11993 (WidgetGameTagIconRole)
let obj = { RIBBON: "ribbon", THUMBS_UP: "thumbsUp", THUMBS_DOWN: "thumbsDown", FRIENDS: "friends" };
obj = {
  getText() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.jbIRBE);
  },
  iconRole: obj.RIBBON
};
obj = {
  getText() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.xcFFv6);
  },
  iconRole: obj.RIBBON
};
let closure_2 = {
  [require(5638).WidgetGameTag.BETTER_THAN_YOU]: obj,
  [require(5638).WidgetGameTag.CASUAL]: obj,
  [require(5638).WidgetGameTag.INTERMEDIATE]: {
    getText() {
      const intl = require(1212) /* getSystemLocale */.intl;
      return intl.string(require(1212) /* getSystemLocale */.t["A/mIs/"]);
    },
    iconRole: obj.RIBBON
  },
  [require(5638).WidgetGameTag.EXPERT]: {
    getText() {
      const intl = require(1212) /* getSystemLocale */.intl;
      return intl.string(require(1212) /* getSystemLocale */.t.RIOFc2);
    },
    iconRole: obj.RIBBON
  },
  [require(5638).WidgetGameTag.OBSESSED]: {
    getText() {
      const intl = require(1212) /* getSystemLocale */.intl;
      return intl.string(require(1212) /* getSystemLocale */.t.isPJDu);
    },
    iconRole: obj.THUMBS_UP
  },
  [require(5638).WidgetGameTag.LOVE_IT]: {
    getText() {
      const intl = require(1212) /* getSystemLocale */.intl;
      return intl.string(require(1212) /* getSystemLocale */.t["1rN7BF"]);
    },
    iconRole: obj.THUMBS_UP
  },
  [require(5638).WidgetGameTag.KIND_OF_LOVE_IT]: {
    getText() {
      const intl = require(1212) /* getSystemLocale */.intl;
      return intl.string(require(1212) /* getSystemLocale */.t.bCBpVg);
    },
    iconRole: obj.THUMBS_UP
  },
  [require(5638).WidgetGameTag.KIND_OF_HATE_IT]: {
    getText() {
      const intl = require(1212) /* getSystemLocale */.intl;
      return intl.string(require(1212) /* getSystemLocale */.t["/WcmcP"]);
    },
    iconRole: obj.THUMBS_DOWN
  },
  [require(5638).WidgetGameTag.RAGE_QUITTING]: {
    getText() {
      const intl = require(1212) /* getSystemLocale */.intl;
      return intl.string(require(1212) /* getSystemLocale */.t["NXZ/MZ"]);
    },
    iconRole: obj.THUMBS_DOWN
  },
  [require(5638).WidgetGameTag.OPEN_TO_PLAY]: {
    getText() {
      const intl = require(1212) /* getSystemLocale */.intl;
      return intl.string(require(1212) /* getSystemLocale */.t.q30PoH);
    },
    iconRole: obj.FRIENDS
  },
  [require(5638).WidgetGameTag.LOOKING_FOR_GROUP]: {
    getText() {
      const intl = require(1212) /* getSystemLocale */.intl;
      return intl.string(require(1212) /* getSystemLocale */.t.DWWAAQ);
    },
    iconRole: obj.FRIENDS
  },
  [require(5638).WidgetGameTag.LOOKING_FOR_TIPS]: {
    getText() {
      const intl = require(1212) /* getSystemLocale */.intl;
      return intl.string(require(1212) /* getSystemLocale */.t.KQDVvH);
    },
    iconRole: obj.FRIENDS
  },
  [require(5638).WidgetGameTag.OPEN_TO_TEACH]: {
    getText() {
      const intl = require(1212) /* getSystemLocale */.intl;
      return intl.string(require(1212) /* getSystemLocale */.t["5HhQo+"]);
    },
    iconRole: obj.FRIENDS
  },
  [require(5638).WidgetGameTag.LOOKING_TO_DISCUSS]: {
    getText() {
      const intl = require(1212) /* getSystemLocale */.intl;
      return intl.string(require(1212) /* getSystemLocale */.t.GipOCq);
    },
    iconRole: obj.FRIENDS
  }
};
const result = require("set").fileFinishedImporting("modules/user_profile/UserProfileGameWidgetTagMetadata.tsx");

export const WidgetGameTagIconRole = obj;
export const buildWidgetGameTagMetadata = function buildWidgetGameTagMetadata(arg0) {
  let obj = {};
  const keys = Object.keys(table);
  for (let num = 0; num < keys.length; num = num + 1) {
    let tmp = keys[num];
    let tmp2 = table;
    let tmp3 = table[tmp];
    if (null != tmp3) {
      obj = { getText: tmp3.getText, icon: arg0[tmp3.iconRole] };
      obj[tmp] = obj;
    }
  }
  return obj;
};
