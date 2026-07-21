// Module ID: 11976
// Function ID: 92583
// Name: WidgetGameTagIconRole
// Dependencies: []
// Exports: buildWidgetGameTagMetadata

// Module 11976 (WidgetGameTagIconRole)
let obj = { RIBBON: "ribbon", THUMBS_UP: "thumbsUp", THUMBS_DOWN: "thumbsDown", FRIENDS: "friends" };
obj = {
  getText() {
    const intl = require(dependencyMap[1]).intl;
    return intl.string(require(dependencyMap[1]).t.jbIRBE);
  },
  iconRole: obj.RIBBON
};
obj = {
  getText() {
    const intl = require(dependencyMap[1]).intl;
    return intl.string(require(dependencyMap[1]).t.xcFFv6);
  },
  iconRole: obj.RIBBON
};
let closure_2 = {
  [require(dependencyMap[0]).WidgetGameTag.BETTER_THAN_YOU]: obj,
  [require(dependencyMap[0]).WidgetGameTag.CASUAL]: obj,
  [require(dependencyMap[0]).WidgetGameTag.INTERMEDIATE]: {
    getText() {
      const intl = require(dependencyMap[1]).intl;
      return intl.string(require(dependencyMap[1]).t.A/mIs/);
    },
    iconRole: obj.RIBBON
  },
  [require(dependencyMap[0]).WidgetGameTag.EXPERT]: {
    getText() {
      const intl = require(dependencyMap[1]).intl;
      return intl.string(require(dependencyMap[1]).t.RIOFc2);
    },
    iconRole: obj.RIBBON
  },
  [require(dependencyMap[0]).WidgetGameTag.OBSESSED]: {
    getText() {
      const intl = require(dependencyMap[1]).intl;
      return intl.string(require(dependencyMap[1]).t.isPJDu);
    },
    iconRole: obj.THUMBS_UP
  },
  [require(dependencyMap[0]).WidgetGameTag.LOVE_IT]: {
    getText() {
      const intl = require(dependencyMap[1]).intl;
      return intl.string(require(dependencyMap[1]).t.1rN7BF);
    },
    iconRole: obj.THUMBS_UP
  },
  [require(dependencyMap[0]).WidgetGameTag.KIND_OF_LOVE_IT]: {
    getText() {
      const intl = require(dependencyMap[1]).intl;
      return intl.string(require(dependencyMap[1]).t.bCBpVg);
    },
    iconRole: obj.THUMBS_UP
  },
  [require(dependencyMap[0]).WidgetGameTag.KIND_OF_HATE_IT]: {
    getText() {
      const intl = require(dependencyMap[1]).intl;
      return intl.string(require(dependencyMap[1]).t./WcmcP);
    },
    iconRole: obj.THUMBS_DOWN
  },
  [require(dependencyMap[0]).WidgetGameTag.RAGE_QUITTING]: {
    getText() {
      const intl = require(dependencyMap[1]).intl;
      return intl.string(require(dependencyMap[1]).t.NXZ/MZ);
    },
    iconRole: obj.THUMBS_DOWN
  },
  [require(dependencyMap[0]).WidgetGameTag.OPEN_TO_PLAY]: {
    getText() {
      const intl = require(dependencyMap[1]).intl;
      return intl.string(require(dependencyMap[1]).t.q30PoH);
    },
    iconRole: obj.FRIENDS
  },
  [require(dependencyMap[0]).WidgetGameTag.LOOKING_FOR_GROUP]: {
    getText() {
      const intl = require(dependencyMap[1]).intl;
      return intl.string(require(dependencyMap[1]).t.DWWAAQ);
    },
    iconRole: obj.FRIENDS
  },
  [require(dependencyMap[0]).WidgetGameTag.LOOKING_FOR_TIPS]: {
    getText() {
      const intl = require(dependencyMap[1]).intl;
      return intl.string(require(dependencyMap[1]).t.KQDVvH);
    },
    iconRole: obj.FRIENDS
  },
  [require(dependencyMap[0]).WidgetGameTag.OPEN_TO_TEACH]: {
    getText() {
      const intl = require(dependencyMap[1]).intl;
      return intl.string(require(dependencyMap[1]).t.5HhQo+);
    },
    iconRole: obj.FRIENDS
  },
  [require(dependencyMap[0]).WidgetGameTag.LOOKING_TO_DISCUSS]: {
    getText() {
      const intl = require(dependencyMap[1]).intl;
      return intl.string(require(dependencyMap[1]).t.GipOCq);
    },
    iconRole: obj.FRIENDS
  }
};
const _module = require(dependencyMap[2]);
const result = _module.fileFinishedImporting("modules/user_profile/UserProfileGameWidgetTagMetadata.tsx");

export const WidgetGameTagIconRole = obj;
export const buildWidgetGameTagMetadata = function buildWidgetGameTagMetadata(arg0) {
  let obj = {};
  const keys = Object.keys(closure_2);
  for (let num = 0; num < keys.length; num = num + 1) {
    let tmp = keys[num];
    let tmp2 = closure_2;
    let tmp3 = closure_2[tmp];
    if (null != tmp3) {
      obj = { getText: tmp3.getText, icon: arg0[tmp3.iconRole] };
      obj[tmp] = obj;
    }
  }
  return obj;
};
