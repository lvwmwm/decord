// Module ID: 16470
// Function ID: 128291
// Name: Content
// Dependencies: [57, 31, 27, 16471, 14144, 653, 33, 4130, 12957, 16466, 8521, 1212, 16472, 4126, 14156, 7636, 16475, 2]
// Exports: default

// Module 16470 (Content)
import _slicedToArray from "_slicedToArray";
import "result";
import { View } from "get ActivityIndicator";
import closure_5 from "_createForOfIteratorHelperLoose";
import MAX_SUBSCRIPTION_TIERS from "MAX_SUBSCRIPTION_TIERS";
import { UPLOAD_BANNER_SIZE } from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_11;
let closure_6;
let closure_7;
let closure_9;
const require = arg1;
class Content {
  constructor(arg0) {
    ({ cover, setCover, description, setDescription } = global);
    tmp = c12();
    tmp2 = require("styles")();
    obj = require("useRoleSubscriptionSettingsDisabled");
    roleSubscriptionSettingsDisabled = obj.useRoleSubscriptionSettingsDisabled();
    obj = {};
    obj1 = { style: tmp2.header };
    tmp4 = require("FormHeader");
    intl = require("getSystemLocale").intl;
    obj1.children = intl.string(require("getSystemLocale").t["3S8gA7"]);
    items = [, , , , ];
    items[0] = jsx(tmp4, obj1);
    obj2 = { style: tmp.paddedContainer };
    obj3 = { style: tmp.coverPhoto, image: cover, imageUploadSize: UPLOAD_BANNER_SIZE.width };
    obj3.previewShape = require("pickImage").PreviewShape.SQUIRCLE;
    obj3.setImage = setCover;
    obj3.disabled = roleSubscriptionSettingsDisabled;
    obj3.standalone = true;
    obj3.size = 114;
    items1 = [, ];
    items1[0] = jsx(require("pickImage").ImagePickerIcon, obj3);
    obj4 = { style: null, variant: "text-sm/medium", color: "text-default" };
    obj4.style = tmp.coverDescription;
    intl2 = require("getSystemLocale").intl;
    obj4.children = intl2.string(require("getSystemLocale").t["0ng4rB"]);
    items1[1] = jsx(require("Text").Text, obj4);
    obj2.children = items1;
    items[1] = jsxs(View, obj2);
    obj5 = { style: tmp.paddedContainer };
    items[2] = jsx(require("FormSeparator"), obj5);
    obj6 = { style: tmp2.header };
    tmp5 = require("FormHeader");
    intl3 = require("getSystemLocale").intl;
    obj6.children = intl3.string(require("getSystemLocale").t["74JctW"]);
    items[3] = jsx(tmp5, obj6);
    obj7 = { style: null, showTopContainer: false, multiline: true, maxLength: null, numberOfLines: 3 };
    obj7.style = tmp2.textInput;
    obj7.maxLength = c7;
    obj7.value = description;
    intl4 = require("getSystemLocale").intl;
    obj7.placeholder = intl4.string(require("getSystemLocale").t["3YHwoG"]);
    obj7.onChange = setDescription;
    obj7.disabled = roleSubscriptionSettingsDisabled;
    items[4] = jsx(require("Form").FormInput, obj7);
    obj.children = items;
    return jsxs(Fragment, obj);
  }
}
({ GuildRoleSubscriptionsTierScenes: closure_6, MAX_SUBSCRIPTION_TIER_DESCRIPTION_LENGTH: closure_7 } = MAX_SUBSCRIPTION_TIERS);
({ jsx: closure_9, jsxs: closure_10, Fragment: closure_11 } = jsxProd);
let closure_12 = _createForOfIteratorHelperLoose.createStyles({ coverPhoto: { height: 114, width: "100%" }, coverDescription: { marginTop: 16 }, paddedContainer: { paddingHorizontal: 16 } });
const result = require("get ActivityIndicator").fileFinishedImporting("modules/guild_role_subscriptions/native/components/GuildRoleSubscriptionGroupDetailsModal.tsx");

export default function GuildRoleSubscriptionTierDetailsModal(arg0) {
  const tmp = callback(closure_5.useGroupCoverState(), 2);
  const first = tmp[0];
  const tmp3 = callback(closure_5.useGroupDescriptionState(), 2);
  const first1 = tmp3[0];
  let tmp4 = first1.length > 0;
  if (tmp4) {
    tmp4 = null != first;
  }
  let obj = {};
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.title = intl.string(require(1212) /* getSystemLocale */.t.EPOLQD);
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj.description = intl2.string(require(1212) /* getSystemLocale */.t["LeAm+L"]);
  obj.canProceedToNextStep = tmp4;
  obj.nextStep = constants.DETAILS;
  const merged = Object.assign(arg0);
  obj = {};
  const merged1 = Object.assign(arg0);
  obj["cover"] = first;
  obj["setCover"] = tmp[1];
  obj["description"] = first1;
  obj["setDescription"] = tmp3[1];
  obj["children"] = callback2(Content, obj);
  return callback2(importDefault(16475), obj);
};
export { Content };
