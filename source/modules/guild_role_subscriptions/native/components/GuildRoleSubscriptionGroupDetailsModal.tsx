// Module ID: 16298
// Function ID: 125751
// Name: Content
// Dependencies: []
// Exports: default

// Module 16298 (Content)
class Content {
  constructor(arg0) {
    ({ cover, setCover, description, setDescription } = global);
    tmp = closure_12();
    tmp2 = importDefault(dependencyMap[8])();
    obj = arg1(dependencyMap[9]);
    roleSubscriptionSettingsDisabled = obj.useRoleSubscriptionSettingsDisabled();
    obj = {};
    obj1 = { style: tmp2.header };
    tmp4 = importDefault(dependencyMap[10]);
    intl = arg1(dependencyMap[11]).intl;
    obj1.children = intl.string(arg1(dependencyMap[11]).t.3S8gA7);
    items = [, , , , ];
    items[0] = jsx(tmp4, obj1);
    obj2 = { style: tmp.paddedContainer };
    obj3 = { style: tmp.coverPhoto, image: cover, imageUploadSize: UPLOAD_BANNER_SIZE.width };
    obj3.previewShape = arg1(dependencyMap[12]).PreviewShape.SQUIRCLE;
    obj3.setImage = setCover;
    obj3.disabled = roleSubscriptionSettingsDisabled;
    obj3.standalone = true;
    obj3.size = 114;
    items1 = [, ];
    items1[0] = jsx(arg1(dependencyMap[12]).ImagePickerIcon, obj3);
    obj4 = { style: tmp.coverDescription };
    intl2 = arg1(dependencyMap[11]).intl;
    obj4.children = intl2.string(arg1(dependencyMap[11]).t.0ng4rB);
    items1[1] = jsx(arg1(dependencyMap[13]).Text, obj4);
    obj2.children = items1;
    items[1] = jsxs(View, obj2);
    obj5 = { style: tmp.paddedContainer };
    items[2] = jsx(importDefault(dependencyMap[14]), obj5);
    obj6 = { style: tmp2.header };
    tmp5 = importDefault(dependencyMap[10]);
    intl3 = arg1(dependencyMap[11]).intl;
    obj6.children = intl3.string(arg1(dependencyMap[11]).t.74JctW);
    items[3] = jsx(tmp5, obj6);
    obj7 = { style: tmp2.textInput, maxLength: closure_7, value: description };
    intl4 = arg1(dependencyMap[11]).intl;
    obj7.placeholder = intl4.string(arg1(dependencyMap[11]).t.3YHwoG);
    obj7.onChange = setDescription;
    obj7.disabled = roleSubscriptionSettingsDisabled;
    items[4] = jsx(arg1(dependencyMap[15]).FormInput, obj7);
    obj.children = items;
    return jsxs(Fragment, obj);
  }
}
let closure_3 = importDefault(dependencyMap[0]);
importAll(dependencyMap[1]);
const View = arg1(dependencyMap[2]).View;
let closure_5 = importAll(dependencyMap[3]);
({ GuildRoleSubscriptionsTierScenes: closure_6, MAX_SUBSCRIPTION_TIER_DESCRIPTION_LENGTH: closure_7 } = arg1(dependencyMap[4]));
const UPLOAD_BANNER_SIZE = arg1(dependencyMap[5]).UPLOAD_BANNER_SIZE;
const tmp3 = arg1(dependencyMap[4]);
({ jsx: closure_9, jsxs: closure_10, Fragment: closure_11 } = arg1(dependencyMap[6]));
const tmp4 = arg1(dependencyMap[6]);
let closure_12 = arg1(dependencyMap[7]).createStyles({ coverPhoto: {}, coverDescription: { marginTop: 16 }, paddedContainer: { paddingHorizontal: 16 } });
const obj = arg1(dependencyMap[7]);
const result = arg1(dependencyMap[17]).fileFinishedImporting("modules/guild_role_subscriptions/native/components/GuildRoleSubscriptionGroupDetailsModal.tsx");

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
  const intl = arg1(dependencyMap[11]).intl;
  obj.title = intl.string(arg1(dependencyMap[11]).t.EPOLQD);
  const intl2 = arg1(dependencyMap[11]).intl;
  obj.description = intl2.string(arg1(dependencyMap[11]).t.LeAm+L);
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
  return callback2(importDefault(dependencyMap[16]), obj);
};
export { Content };
