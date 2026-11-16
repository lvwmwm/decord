// Module ID: 15237
// Function ID: 15238
// Name: UserProfileGameWidgetTagMetadata
// Dependencies: [12585, 1113, 2]
// Exports: buildWidgetGameTagMetadata, clearWidgetGameTagSection, toggleWidgetGameTag

// Module 15237 (UserProfileGameWidgetTagMetadata)
import intl2 from "intl" /* 1113 */;
import WidgetGameTag from "WidgetGameTag" /* 12585 */;
import size from "module_2" /* 2 */;

let items;
let items1;
let items2;
let obj = { RIBBON: "ribbon", THUMBS_UP: "thumbsUp", THUMBS_DOWN: "thumbsDown", FRIENDS: "friends" };
let obj2 = {
  getText() {
    const intl = intl2.intl;
    return intl.string(intl2.t.jbIRBE);
  },
  iconRole: obj.RIBBON
};
const obj10 = {
  getText() {
    const intl = intl2.intl;
    return intl.string(intl2.t["NXZ/MZ"]);
  },
  iconRole: obj.THUMBS_DOWN
};
const obj11 = {
  getText() {
    const intl = intl2.intl;
    return intl.string(intl2.t.q30PoH);
  },
  iconRole: obj.FRIENDS
};
const obj12 = {
  getText() {
    const intl = intl2.intl;
    return intl.string(intl2.t.DWWAAQ);
  },
  iconRole: obj.FRIENDS
};
const obj13 = {
  getText() {
    const intl = intl2.intl;
    return intl.string(intl2.t.KQDVvH);
  },
  iconRole: obj.FRIENDS
};
const obj14 = {
  getText() {
    const intl = intl2.intl;
    return intl.string(intl2.t["5HhQo+"]);
  },
  iconRole: obj.FRIENDS
};
const obj15 = {
  getText() {
    const intl = intl2.intl;
    return intl.string(intl2.t.GipOCq);
  },
  iconRole: obj.FRIENDS
};
const obj3 = {
  getText() {
    const intl = intl2.intl;
    return intl.string(intl2.t.xcFFv6);
  },
  iconRole: obj.RIBBON
};
const obj4 = {
  getText() {
    const intl = intl2.intl;
    return intl.string(intl2.t["A/mIs/"]);
  },
  iconRole: obj.RIBBON
};
const obj5 = {
  getText() {
    const intl = intl2.intl;
    return intl.string(intl2.t.RIOFc2);
  },
  iconRole: obj.RIBBON
};
const obj6 = {
  getText() {
    const intl = intl2.intl;
    return intl.string(intl2.t.isPJDu);
  },
  iconRole: obj.THUMBS_UP
};
const obj7 = {
  getText() {
    const intl = intl2.intl;
    return intl.string(intl2.t["1rN7BF"]);
  },
  iconRole: obj.THUMBS_UP
};
const obj8 = {
  getText() {
    const intl = intl2.intl;
    return intl.string(intl2.t.bCBpVg);
  },
  iconRole: obj.THUMBS_UP
};
const obj9 = {
  getText() {
    const intl = intl2.intl;
    return intl.string(intl2.t["/WcmcP"]);
  },
  iconRole: obj.THUMBS_DOWN
};
let closure_2 = { [WidgetGameTag.WidgetGameTag.BETTER_THAN_YOU]: obj2, [WidgetGameTag.WidgetGameTag.CASUAL]: obj3, [WidgetGameTag.WidgetGameTag.INTERMEDIATE]: obj4, [WidgetGameTag.WidgetGameTag.EXPERT]: obj5, [WidgetGameTag.WidgetGameTag.OBSESSED]: obj6, [WidgetGameTag.WidgetGameTag.LOVE_IT]: obj7, [WidgetGameTag.WidgetGameTag.KIND_OF_LOVE_IT]: obj8, [WidgetGameTag.WidgetGameTag.KIND_OF_HATE_IT]: obj9, [WidgetGameTag.WidgetGameTag.RAGE_QUITTING]: obj10, [WidgetGameTag.WidgetGameTag.OPEN_TO_PLAY]: obj11, [WidgetGameTag.WidgetGameTag.LOOKING_FOR_GROUP]: obj12, [WidgetGameTag.WidgetGameTag.LOOKING_FOR_TIPS]: obj13, [WidgetGameTag.WidgetGameTag.OPEN_TO_TEACH]: obj14, [WidgetGameTag.WidgetGameTag.LOOKING_TO_DISCUSS]: obj15 };
const obj16 = { LOOKING_FOR: "looking_for", SKILL_LEVEL: "skill_level", RATING: "rating" };
const obj17 = { RADIO: "radio", CHECKBOX: "checkbox" };
const obj18 = {};
const SKILL_LEVEL = obj16.SKILL_LEVEL;
const obj19 = {
  getLabel() {
    const intl = intl2.intl;
    return intl.string(intl2.t.MKqADM);
  },
  type: obj17.RADIO,
  tags: items
};
items = [WidgetGameTag.WidgetGameTag.CASUAL, WidgetGameTag.WidgetGameTag.INTERMEDIATE, WidgetGameTag.WidgetGameTag.EXPERT, WidgetGameTag.WidgetGameTag.BETTER_THAN_YOU];
obj18[SKILL_LEVEL] = obj19;
const RATING = obj16.RATING;
const obj20 = {
  getLabel() {
    const intl = intl2.intl;
    return intl.string(intl2.t["7/umul"]);
  },
  type: obj17.CHECKBOX,
  tags: items1
};
items1 = [WidgetGameTag.WidgetGameTag.OBSESSED, WidgetGameTag.WidgetGameTag.LOVE_IT, WidgetGameTag.WidgetGameTag.KIND_OF_LOVE_IT, WidgetGameTag.WidgetGameTag.KIND_OF_HATE_IT, WidgetGameTag.WidgetGameTag.RAGE_QUITTING];
obj18[RATING] = obj20;
const LOOKING_FOR = obj16.LOOKING_FOR;
const obj21 = {
  getLabel() {
    const intl = intl2.intl;
    return intl.string(intl2.t["5Dez17"]);
  },
  type: obj17.CHECKBOX,
  tags: items2
};
items2 = [WidgetGameTag.WidgetGameTag.LOOKING_FOR_GROUP, WidgetGameTag.WidgetGameTag.OPEN_TO_PLAY, WidgetGameTag.WidgetGameTag.LOOKING_FOR_TIPS, WidgetGameTag.WidgetGameTag.OPEN_TO_TEACH, WidgetGameTag.WidgetGameTag.LOOKING_TO_DISCUSS];
obj18[LOOKING_FOR] = obj21;
const result = size.fileFinishedImporting("modules/user_profile/UserProfileGameWidgetTagMetadata.tsx");

export const WidgetGameTagIconRole = obj;
export function buildWidgetGameTagMetadata(arg0) {
  const obj = {};
  const keys = Object.keys(closure_2);
  const iter = keys[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp5 = closure_2[nextResult];
    let tmp6 = tmp5;
    if (null != tmp5) {
      let obj2 = { getText: tmp6.getText, icon: arg0[tmp6.iconRole] };
      obj[tmp3] = obj2;
    }
    continue;
  }
  return obj;
}
export const WidgetGameTagSection = obj16;
export const WidgetGameTagSectionType = obj17;
export const WIDGET_GAME_TAG_SECTION_METADATA = obj18;
export function toggleWidgetGameTag(arr, arg1) {
  let found1;
  let closure_0 = arg1;
  const values = Object.values(obj18);
  const found = values.find((tags) => {
    tags = tags.tags;
    return tags.includes(closure_0);
  });
  let type;
  if (found != null) {
    type = found.type;
  }
  if (type === obj17.RADIO) {
    const items = [];
    items[HermesBuiltin.arraySpread(items, arr.filter((item) => {
      const tags = closure_1.tags;
      return !tags.includes(item);
    }), 0)] = arg1;
    found1 = items;
  } else if (arr.includes(arg1)) {
    found1 = arr.filter((item) => item !== closure_0);
  } else {
    found1 = [];
    found1[HermesBuiltin.arraySpread(found1, arr, 0)] = arg1;
  }
  return found1;
}
export function clearWidgetGameTagSection(arr, tags) {
  return arr.filter((item) => !tags.includes(item));
}
