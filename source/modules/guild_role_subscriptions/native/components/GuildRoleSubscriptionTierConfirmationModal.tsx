// Module ID: 16334
// Function ID: 126046
// Name: GuildRoleSubscriptionTierConfirmationModal
// Dependencies: []
// Exports: default

// Module 16334 (GuildRoleSubscriptionTierConfirmationModal)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importAll(dependencyMap[2]);
const View = arg1(dependencyMap[3]).View;
let closure_7 = importAll(dependencyMap[4]);
({ jsx: closure_8, Fragment: closure_9, jsxs: closure_10 } = arg1(dependencyMap[5]));
let obj = arg1(dependencyMap[6]);
obj = { description: { paddingHorizontal: 16 }, coverPhotoContainer: { marginHorizontal: 16 } };
obj = { borderRadius: importDefault(dependencyMap[7]).radii.sm };
obj.coverPhoto = obj;
let closure_11 = obj.createStyles(obj);
const tmp2 = arg1(dependencyMap[5]);
const result = arg1(dependencyMap[16]).fileFinishedImporting("modules/guild_role_subscriptions/native/components/GuildRoleSubscriptionTierConfirmationModal.tsx");

export default function GuildRoleSubscriptionTierConfirmationModal(onDone) {
  let editStateId;
  let guildId;
  onDone = onDone.onDone;
  const arg1 = onDone;
  let flag = onDone.isForGroupSetupModal;
  if (flag === undefined) {
    flag = false;
  }
  let obj = Object.create(null);
  obj.onDone = 0;
  obj.isForGroupSetupModal = 0;
  const merged = Object.assign(onDone, obj);
  let importDefault;
  const tmp4 = callback5();
  const tmp5 = importDefault(dependencyMap[8])();
  obj = arg1(dependencyMap[9]);
  const editStateContext = obj.useEditStateContext();
  ({ guildId, editStateId } = editStateContext);
  const tmp7 = callback2(React.useState(false), 2);
  const first = tmp7[0];
  importDefault = tmp9;
  const first1 = callback2(closure_7.useGroupCoverState(), 1)[0];
  // CreateGeneratorClosureLongIndex (0x67)
  const items = [tmp7[1], onDone];
  const callback = React.useCallback(callback(tmp), items);
  obj = {};
  const intl = arg1(dependencyMap[11]).intl;
  obj.title = intl.string(arg1(dependencyMap[11]).t.T0lZnZ);
  const intl2 = arg1(dependencyMap[11]).intl;
  obj.description = intl2.string(arg1(dependencyMap[11]).t.ltfNIq);
  obj.canProceedToNextStep = !first;
  obj.nextStep = null;
  obj.onProceed = callback;
  obj.submitting = first;
  const merged1 = Object.assign(merged);
  if (flag) {
    const obj1 = {};
    let tmp17 = null != first1;
    if (tmp17) {
      const obj2 = {};
      const obj3 = { style: tmp5.header };
      const intl3 = arg1(dependencyMap[11]).intl;
      obj3.children = intl3.string(arg1(dependencyMap[11]).t.3S8gA7);
      const items1 = [callback3(importDefault(dependencyMap[12]), obj3), ];
      const obj4 = { style: tmp4.coverPhotoContainer };
      const obj5 = { style: tmp4.coverPhoto, resizeMode: "cover", source: first1 };
      obj4.children = callback3(importDefault(dependencyMap[13]), obj5);
      items1[1] = callback3(View, obj4);
      obj2.children = items1;
      tmp17 = callback4(closure_9, obj2);
      const tmp23 = importDefault(dependencyMap[12]);
    }
    const items2 = [tmp17, , ];
    const obj6 = { style: tmp5.header };
    const intl4 = arg1(dependencyMap[11]).intl;
    obj6.children = intl4.string(arg1(dependencyMap[11]).t.74JctW);
    items2[1] = callback3(importDefault(dependencyMap[12]), obj6);
    const obj7 = { style: tmp4.description, children: callback2(closure_7.useGroupDescriptionState(), 1)[0] };
    items2[2] = callback3(arg1(dependencyMap[14]).Text, obj7);
    obj1.children = items2;
    flag = callback4(closure_9, obj1);
    const tmp15 = callback4;
    const tmp16 = closure_9;
    const tmp29 = importDefault(dependencyMap[12]);
  }
  const items3 = [flag, callback3(arg1(dependencyMap[15]).GuildRoleSubscriptionListingPreview, { guildId, listingId: editStateId })];
  obj["children"] = items3;
  return callback4(importDefault(dependencyMap[10]), obj);
};
