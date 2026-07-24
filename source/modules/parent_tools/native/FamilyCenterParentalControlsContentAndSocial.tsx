// Module ID: 13884
// Function ID: 106257
// Name: FamilyCenterParentalControlsContentAndSocial
// Dependencies: [31, 27, 653, 7751, 33, 10127, 1212, 1920, 13601, 2]
// Exports: default

// Module 13884 (FamilyCenterParentalControlsContentAndSocial)
import "result";
import { View } from "get ActivityIndicator";
import { HelpdeskArticles } from "ME";
import { MobileSetting } from "MobileSetting";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("ME").fileFinishedImporting("modules/parent_tools/native/FamilyCenterParentalControlsContentAndSocial.tsx");

export default function FamilyCenterParentalControlsContentAndSocial() {
  let obj = require(10127) /* createToggle */;
  obj = {};
  obj = { settings: items };
  items = [MobileSetting.PARENTAL_CONTROLS_SENSITIVE_CONTENT_FILTERS];
  const intl = require(1212) /* getSystemLocale */.intl;
  const obj1 = {};
  let obj4 = importDefault(1920);
  obj1.learnMoreLink = obj4.getArticleURL(HelpdeskArticles.EXPLICIT_MEDIA_REDACTION);
  obj.subLabel = intl.format(require(1212) /* getSystemLocale */.t.dliU4j, obj1);
  const items1 = [obj, , ];
  const obj2 = {};
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj2.label = intl2.string(require(1212) /* getSystemLocale */.t.MeYuqs);
  const items2 = [, ];
  ({ PARENTAL_CONTROLS_DIRECT_MESSAGES: arr3[0], PARENTAL_CONTROLS_MESSAGE_REQUESTS: arr3[1] } = MobileSetting);
  obj2.settings = items2;
  items1[1] = obj2;
  const obj3 = {};
  const intl3 = require(1212) /* getSystemLocale */.intl;
  obj3.label = intl3.string(require(1212) /* getSystemLocale */.t.XlGG9c);
  const items3 = [, , ];
  ({ PARENTAL_CONTROLS_FRIEND_REQUESTS_EVERYONE: arr4[0], PARENTAL_CONTROLS_FRIEND_REQUESTS_MUTUAL_FRIENDS: arr4[1], PARENTAL_CONTROLS_FRIEND_REQUESTS_MUTUAL_GUILDS: arr4[2] } = MobileSetting);
  obj3.settings = items3;
  items1[2] = obj3;
  obj.sections = items1;
  obj4 = {};
  const list = obj.createList(obj);
  obj4.children = jsx(importDefault(13601), { node: list });
  return <View />;
};
