// Module ID: 16459
// Function ID: 128262
// Name: GuildRoleSubscriptionTierConfirmationModal
// Dependencies: [5, 57, 31, 27, 16424, 33, 4130, 689, 12905, 16436, 16428, 1212, 7494, 5085, 4126, 16460, 2]
// Exports: default

// Module 16459 (GuildRoleSubscriptionTierConfirmationModal)
import closure_3 from "jsxProd";
import _slicedToArray from "_slicedToArray";
import result from "result";
import { View } from "get ActivityIndicator";
import closure_7 from "_createForOfIteratorHelperLoose";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_8;
let closure_9;
const require = arg1;
({ jsx: closure_8, Fragment: closure_9, jsxs: closure_10 } = jsxProd);
_createForOfIteratorHelperLoose = { description: { paddingHorizontal: 16 }, coverPhotoContainer: { marginHorizontal: 16 } };
_createForOfIteratorHelperLoose = { height: 114, width: "100%", borderRadius: require("_createForOfIteratorHelperLoose").radii.sm, overflow: "hidden" };
_createForOfIteratorHelperLoose.coverPhoto = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("result").fileFinishedImporting("modules/guild_role_subscriptions/native/components/GuildRoleSubscriptionTierConfirmationModal.tsx");

export default function GuildRoleSubscriptionTierConfirmationModal(onDone) {
  let editStateId;
  let guildId;
  onDone = onDone.onDone;
  let flag = onDone.isForGroupSetupModal;
  if (flag === undefined) {
    flag = false;
  }
  let obj = Object.create(null);
  obj.onDone = 0;
  obj.isForGroupSetupModal = 0;
  const merged = Object.assign(onDone, obj);
  let importDefault;
  const tmp4 = _createForOfIteratorHelperLoose();
  const tmp5 = importDefault(12905)();
  obj = onDone(16436);
  const editStateContext = obj.useEditStateContext();
  ({ guildId, editStateId } = editStateContext);
  const tmp7 = callback2(React.useState(false), 2);
  const first = tmp7[0];
  importDefault = tmp9;
  const first1 = callback2(closure_7.useGroupCoverState(), 1)[0];
  // CreateGeneratorClosureLongIndex (0x67)
  const items = [tmp7[1], onDone];
  callback = React.useCallback(callback(tmp), items);
  obj = {};
  const intl = onDone(1212).intl;
  obj.title = intl.string(onDone(1212).t.T0lZnZ);
  const intl2 = onDone(1212).intl;
  obj.description = intl2.string(onDone(1212).t.ltfNIq);
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
      const intl3 = onDone(1212).intl;
      obj3.children = intl3.string(onDone(1212).t["3S8gA7"]);
      const items1 = [callback3(importDefault(7494), obj3), ];
      const obj4 = { style: tmp4.coverPhotoContainer };
      const obj5 = { style: tmp4.coverPhoto, resizeMode: "cover", source: first1 };
      obj4.children = callback3(importDefault(5085), obj5);
      items1[1] = callback3(View, obj4);
      obj2.children = items1;
      tmp17 = callback4(closure_9, obj2);
      const tmp23 = importDefault(7494);
    }
    const items2 = [tmp17, , ];
    const obj6 = { style: tmp5.header };
    const intl4 = onDone(1212).intl;
    obj6.children = intl4.string(onDone(1212).t["74JctW"]);
    items2[1] = callback3(importDefault(7494), obj6);
    const obj7 = { style: tmp4.description, variant: "text-md/medium", color: "interactive-text-active", children: callback2(closure_7.useGroupDescriptionState(), 1)[0] };
    items2[2] = callback3(onDone(4126).Text, obj7);
    obj1.children = items2;
    flag = callback4(closure_9, obj1);
    const tmp15 = callback4;
    const tmp16 = closure_9;
    const tmp29 = importDefault(7494);
  }
  const items3 = [flag, callback3(onDone(16460).GuildRoleSubscriptionListingPreview, { guildId, listingId: editStateId })];
  obj["children"] = items3;
  return callback4(importDefault(16428), obj);
};
