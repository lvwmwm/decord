// Module ID: 19974
// Function ID: 19975
// Name: GuildRoleSubscriptionTierConfirmationModal
// Dependencies: [5, 32, 19, 17, 19942, 21, 5014, 575, 19943, 19953, 19945, 1113, 7060, 5717, 5624, 19975, 2]
// Exports: default

// Module 19974 (GuildRoleSubscriptionTierConfirmationModal)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import intl5 from "intl" /* 1113 */;
import Text_Text from "Text/Text" /* 5624 */;
import FormStylesDefault from "FormStyles" /* 19943 */;
import GuildRoleSubscriptionTierEditStepDefault from "GuildRoleSubscriptionTierEditStep" /* 19945 */;
import EditStateContextProvider from "EditStateContextProvider" /* 19953 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import RoleTierEditStore from "RoleTierEditStore" /* 19942 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5014 */;
import size_mod from "module_2" /* 2 */;

let _undefined, c4, closure_2;

let c9;
let metroImportAll;
let size;
let tmp3;
const FastImageDefault = tmp3(5717);
const View = react_native.View;
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let obj = { coverPhoto: size };
size = { height: 114, width: "100%", borderRadius: nativeDefault.radii.sm, overflow: "hidden" };
let closure_10 = createStyles.createStyles(obj);
size = size_mod;
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/GuildRoleSubscriptionTierConfirmationModal.tsx");

export default function GuildRoleSubscriptionTierConfirmationModal(onDone) {
  let editStateId;
  let guildId;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let items1;
  let items2;
  let items3;
  let items4;
  let tmp10;
  let tmp9;
  onDone = onDone.onDone;
  let flag = onDone.isForGroupSetupModal;
  if (flag === undefined) {
    flag = false;
  }
  const merged = Object.assign(onDone, Object.assign({ onDone: 0, isForGroupSetupModal: 0 }));
  const tmp4 = dependencyMap;
  const tmp3 = importDefault;
  const tmp2 = closure_10();
  const tmp5 = FormStylesDefault();
  let obj = EditStateContextProvider;
  const editStateContext = obj.useEditStateContext();
  ({ guildId, editStateId } = editStateContext);
  [tmp9, tmp10] = _slicedToArray(react.useState(false), 2);
  let c1 = tmp10;
  const tmp8 = _slicedToArray(react.useState(false), 2);
  const first = _slicedToArray(RoleTierEditStore.useGroupCoverState(), 1)[0];
  const first1 = _slicedToArray(RoleTierEditStore.useGroupDescriptionState(), 1)[0];
  const items = [tmp10, onDone];
  const callback = react.useCallback(_asyncToGenerator(async (arg0, value) => {
    let v1;
    if (c4 === 2) {
      c4 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: "HermesInternal" };
      }
    } else {
      let c3;
      try {
        c4 = 2;
        if (0 === _undefined) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_0 = tmp;
            c3 = 1;
            _undefined(true);
            _undefined = 2;
            c4 = 1;
            const obj4 = { value: onDone(), done: false };
            return obj4;
          }
        } else if (1 === tmp4) {
          c3 = 0;
          closure_128_1(false);
          throw closure_2;
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 0;
          closure_128_1(false);
          c4 = 3;
          const obj = { value, done: true };
          return obj;
        } else {
          c3 = 0;
          closure_128_1(false);
          c4 = 3;
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } catch (tmp19) {
        closure_2 = tmp19;
        if (0 === c3) {
          c4 = 3;
          throw tmp19;
        } else {
          _undefined = 1;
        }
      }
    }
  }), items);
  let obj2 = { title: intl.string(intl5.t.T0lZnZ), description: intl2.string(intl5.t.ltfNIq), canProceedToNextStep: !tmp9, nextStep: null, onProceed: callback, submitting: tmp9, children: items4 };
  const tmp15 = GuildRoleSubscriptionTierEditStepDefault;
  intl = intl5.intl;
  intl2 = intl5.intl;
  const merged1 = Object.assign(merged);
  if (flag) {
    let obj3 = { style: tmp5.container, children: items2 };
    let tmp14Result = null != first;
    if (tmp14Result) {
      let obj4 = { children: items1 };
      const tmp19 = metroImportAll;
      const obj5 = { title: intl3.string(intl5.t["3S8gA7"]) };
      const TableRowGroupTitle = tmp6(7060).TableRowGroupTitle;
      intl3 = tmp6(1113).intl;
      items1 = [metroImportAll(TableRowGroupTitle, obj5), ];
      const obj6 = { style: tmp2.coverPhoto, resizeMode: "cover", source: first };
      items1[1] = metroImportAll(FastImageDefault, obj6);
      tmp14Result = tmp14(tmp17, obj4);
    }
    items2 = [tmp14Result, ];
    const obj7 = { children: items3 };
    const obj8 = { title: intl4.string(intl5.t["74JctW"]) };
    const TableRowGroupTitle2 = tmp6(7060).TableRowGroupTitle;
    intl4 = tmp6(1113).intl;
    items3 = [metroImportAll(TableRowGroupTitle2, obj8), ];
    const obj9 = { variant: "text-md/medium", color: "interactive-text-active", children: first1 };
    items3[1] = metroImportAll(Text_Text.Text, obj9);
    items2[1] = React4(View, obj7);
    flag = tmp14(tmp17, obj3);
  }
  items4 = [flag, metroImportAll(tmp6(19975).GuildRoleSubscriptionListingPreview, { guildId, listingId: editStateId })];
  return React4(tmp15, obj2);
};
