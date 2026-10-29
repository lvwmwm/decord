// Module ID: 19876
// Function ID: 19877
// Name: GuildRoleSubscriptionTierTemplatePriceReselectionActionSheet
// Dependencies: [32, 19, 17, 1095, 21, 5005, 587, 558, 576, 1631, 1125, 5271, 1199, 7399, 7044, 17097, 7045, 5281, 5247, 6754, 5306, 5302, 2]

// Module 19876 (GuildRoleSubscriptionTierTemplatePriceReselectionActionSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1095 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5005 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let BottomSheet;

let metroImportAll;
let metroImportDefault;
let obj2;
let react = react_mod;
const View = react_native.View;
const CurrencyCodes = Constants.CurrencyCodes;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let obj = { container: obj2 };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, padding: 24, borderTopLeftRadius: nativeDefault.radii.md, borderTopRightRadius: nativeDefault.radii.md };
let closure_9 = createStyles.createStyles(obj);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function GuildRoleSubscriptionTierTemplatePriceReselectionActionSheet(selectedTemplate) {
  let closure_4;
  let intl3;
  let items;
  let items1;
  let newPricesToPick;
  let tmpResult;
  let value;
  let obj = selectedTemplate(newPricesToPick[8]);
  const cResult = obj.c(39);
  selectedTemplate = selectedTemplate.selectedTemplate;
  const handleCreateFromTemplate = selectedTemplate.handleCreateFromTemplate;
  newPricesToPick = selectedTemplate.newPricesToPick;
  const tmp4 = closure_9();
  const bottom = handleCreateFromTemplate(newPricesToPick[9])().bottom;
  const tmp5 = value(react.useState(0), 2);
  value = tmp5[0];
  if (cResult[0] === handleCreateFromTemplate) {
    if (cResult[1] === newPricesToPick) {
      if (cResult[2] === value) {
        let tmp8;
        let tmp9;
        let tmp10;
        let tmp12;
        let tmp16;
        let tmp19;
        let tmp23;
        let tmp26;
        if (cResult[3] === selectedTemplate) {
          tmp8 = cResult[4];
        }
        react = tmp8;
        const container = tmp4.container;
        if (cResult[5] !== bottom) {
          let obj2 = { paddingBottom: bottom };
          cResult[5] = bottom;
          cResult[6] = obj2;
          tmp9 = obj2;
        } else {
          tmp9 = cResult[6];
        }
        if (cResult[7] !== selectedTemplate.listings[0].name) {
          const intl = tmp(tmp2[10]).intl;
          const obj3 = { tierName: selectedTemplate.listings[0].name };
          const formatResult = intl.format(selectedTemplate(newPricesToPick[10]).t["5WZ9Ct"], obj3);
          cResult[7] = selectedTemplate.listings[0].name;
          cResult[8] = formatResult;
          tmp10 = formatResult;
        } else {
          tmp10 = cResult[8];
        }
        if (cResult[9] !== tmp10) {
          const obj4 = { variant: "heading-lg/semibold", color: "mobile-text-heading-primary", children: tmp10 };
          const tmp14 = closure_7(selectedTemplate(newPricesToPick[11]).Text, obj4);
          cResult[9] = tmp10;
          cResult[10] = tmp14;
          tmp12 = tmp14;
        } else {
          tmp12 = cResult[10];
        }
        const _Symbol = Symbol;
        if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
          const tmp18 = closure_7(selectedTemplate(newPricesToPick[12]).Spacer, { size: 12 });
          cResult[11] = tmp18;
          tmp16 = tmp18;
        } else {
          tmp16 = cResult[11];
        }
        if (cResult[12] !== selectedTemplate.listings[0].price_tier) {
          const intl2 = tmp(tmp2[10]).intl;
          const format = intl2.format;
          const obj5 = { price: tmpResult.formatPrice(selectedTemplate.listings[0].price_tier, CurrencyCodes.USD) };
          const v5i7Uhb = tmp(tmp2[10]).t["5i7Uhb"];
          tmpResult = selectedTemplate(newPricesToPick[13]);
          const formatResult1 = format(v5i7Uhb, obj5);
          cResult[12] = selectedTemplate.listings[0].price_tier;
          cResult[13] = formatResult1;
          tmp19 = formatResult1;
        } else {
          tmp19 = cResult[13];
        }
        if (cResult[14] !== tmp19) {
          const obj6 = { variant: "text-sm/normal", color: "text-default", children: tmp19 };
          const tmp25 = closure_7(selectedTemplate(newPricesToPick[11]).Text, obj6);
          cResult[14] = tmp19;
          cResult[15] = tmp25;
          tmp23 = tmp25;
        } else {
          tmp23 = cResult[15];
        }
        const _Symbol2 = Symbol;
        if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
          const tmp28 = closure_7(selectedTemplate(newPricesToPick[12]).Spacer, { size: 24 });
          cResult[16] = tmp28;
          tmp26 = tmp28;
        } else {
          tmp26 = cResult[16];
        }
        if (cResult[17] !== newPricesToPick) {
          let tmp30;
          const _Symbol3 = Symbol;
          if (cResult[19] === Symbol.for("react.memo_cache_sentinel")) {
            class O {
              constructor(price_tier, value) {
                let obj2;
                const obj = { value, label: obj2.formatMonthlyPriceLabel(price_tier) };
                const TableRadioRow = selectedTemplate(newPricesToPick[14]).TableRadioRow;
                obj2 = selectedTemplate(newPricesToPick[15]);
                return closure_1_7(TableRadioRow, obj, price_tier);
              }
            }
            cResult[19] = O;
            tmp30 = O;
          } else {
            class O {
              constructor(price_tier, value) {
                let obj2;
                const obj = { value, label: obj2.formatMonthlyPriceLabel(price_tier) };
                const TableRadioRow = selectedTemplate(newPricesToPick[14]).TableRadioRow;
                obj2 = selectedTemplate(newPricesToPick[15]);
                return closure_1_7(TableRadioRow, obj, price_tier);
              }
            }
          }
          const mapped = newPricesToPick.map(tmp30);
          cResult[17] = newPricesToPick;
          cResult[18] = mapped;
        } else {
          class O {
            constructor(price_tier, value) {
              let obj2;
              const obj = { value, label: obj2.formatMonthlyPriceLabel(price_tier) };
              const TableRadioRow = selectedTemplate(newPricesToPick[14]).TableRadioRow;
              obj2 = selectedTemplate(newPricesToPick[15]);
              return closure_1_7(TableRadioRow, obj, price_tier);
            }
          }
        }
        if (cResult[20] === value) {
          let tmp35;
          let tmp37;
          let tmp41;
          class O {
            constructor(price_tier, value) {
              let obj2;
              const obj = { value, label: obj2.formatMonthlyPriceLabel(price_tier) };
              const TableRadioRow = selectedTemplate(newPricesToPick[14]).TableRadioRow;
              obj2 = selectedTemplate(newPricesToPick[15]);
              return closure_1_7(TableRadioRow, obj, price_tier);
            }
          }
          const _Symbol4 = Symbol;
          if (cResult[23] === Symbol.for("react.memo_cache_sentinel")) {
            class O {
              constructor(price_tier, value) {
                let obj2;
                const obj = { value, label: obj2.formatMonthlyPriceLabel(price_tier) };
                const TableRadioRow = selectedTemplate(newPricesToPick[14]).TableRadioRow;
                obj2 = selectedTemplate(newPricesToPick[15]);
                return closure_1_7(TableRadioRow, obj, price_tier);
              }
            }
            const tmp36 = closure_7(selectedTemplate(newPricesToPick[12]).Spacer, { size: 20 });
            cResult[23] = tmp36;
            tmp35 = tmp36;
          } else {
            class O {
              constructor(price_tier, value) {
                let obj2;
                const obj = { value, label: obj2.formatMonthlyPriceLabel(price_tier) };
                const TableRadioRow = selectedTemplate(newPricesToPick[14]).TableRadioRow;
                obj2 = selectedTemplate(newPricesToPick[15]);
                return closure_1_7(TableRadioRow, obj, price_tier);
              }
            }
          }
          const _Symbol5 = Symbol;
          if (cResult[24] === Symbol.for("react.memo_cache_sentinel")) {
            class O {
              constructor(price_tier, value) {
                let obj2;
                const obj = { value, label: obj2.formatMonthlyPriceLabel(price_tier) };
                const TableRadioRow = selectedTemplate(newPricesToPick[14]).TableRadioRow;
                obj2 = selectedTemplate(newPricesToPick[15]);
                return closure_1_7(TableRadioRow, obj, price_tier);
              }
            }
            const stringResult = obj9.string(selectedTemplate(newPricesToPick[10]).t.DVCXzm);
            cResult[24] = stringResult;
            tmp37 = stringResult;
          } else {
            class O {
              constructor(price_tier, value) {
                let obj2;
                const obj = { value, label: obj2.formatMonthlyPriceLabel(price_tier) };
                const TableRadioRow = selectedTemplate(newPricesToPick[14]).TableRadioRow;
                obj2 = selectedTemplate(newPricesToPick[15]);
                return closure_1_7(TableRadioRow, obj, price_tier);
              }
            }
          }
          if (cResult[25] !== tmp8) {
            class O {
              constructor(price_tier, value) {
                let obj2;
                const obj = { value, label: obj2.formatMonthlyPriceLabel(price_tier) };
                const TableRadioRow = selectedTemplate(newPricesToPick[14]).TableRadioRow;
                obj2 = selectedTemplate(newPricesToPick[15]);
                return closure_1_7(TableRadioRow, obj, price_tier);
              }
            }
            const obj7 = {
              text: tmp37,
              onPress() {
                          return closure_4();
                        }
            };
            cResult[25] = tmp8;
            cResult[26] = closure_7(selectedTemplate(newPricesToPick[17]).Button, obj7);
            const tmp40 = closure_7(selectedTemplate(newPricesToPick[17]).Button, obj7);
          } else {
            class O {
              constructor(price_tier, value) {
                let obj2;
                const obj = { value, label: obj2.formatMonthlyPriceLabel(price_tier) };
                const TableRadioRow = selectedTemplate(newPricesToPick[14]).TableRadioRow;
                obj2 = selectedTemplate(newPricesToPick[15]);
                return closure_1_7(TableRadioRow, obj, price_tier);
              }
            }
          }
          const _Symbol6 = Symbol;
          if (cResult[27] === Symbol.for("react.memo_cache_sentinel")) {
            class O {
              constructor(price_tier, value) {
                let obj2;
                const obj = { value, label: obj2.formatMonthlyPriceLabel(price_tier) };
                const TableRadioRow = selectedTemplate(newPricesToPick[14]).TableRadioRow;
                obj2 = selectedTemplate(newPricesToPick[15]);
                return closure_1_7(TableRadioRow, obj, price_tier);
              }
            }
            const obj8 = {
              variant: "secondary",
              text: intl3.string(selectedTemplate(newPricesToPick[10]).t.h26VOI),
              onPress() {
                          const obj = handleCreateFromTemplate(newPricesToPick[18]);
                          return obj.hideActionSheet();
                        }
            };
            const Button = tmp(tmp2[17]).Button;
            intl3 = tmp(tmp2[10]).intl;
            const tmp42 = closure_7(Button, obj8);
            cResult[27] = tmp42;
            tmp41 = tmp42;
          } else {
            class O {
              constructor(price_tier, value) {
                let obj2;
                const obj = { value, label: obj2.formatMonthlyPriceLabel(price_tier) };
                const TableRadioRow = selectedTemplate(newPricesToPick[14]).TableRadioRow;
                obj2 = selectedTemplate(newPricesToPick[15]);
                return closure_1_7(TableRadioRow, obj, price_tier);
              }
            }
          }
          if (cResult[28] !== tmp39) {
            class O {
              constructor(price_tier, value) {
                let obj2;
                const obj = { value, label: obj2.formatMonthlyPriceLabel(price_tier) };
                const TableRadioRow = selectedTemplate(newPricesToPick[14]).TableRadioRow;
                obj2 = selectedTemplate(newPricesToPick[15]);
                return closure_1_7(TableRadioRow, obj, price_tier);
              }
            }
            const obj10 = { children: items };
            items = [tmp39, tmp41];
            cResult[28] = tmp39;
            cResult[29] = closure_8(selectedTemplate(newPricesToPick[19]).ButtonGroup, obj10);
            const tmp44 = closure_8(selectedTemplate(newPricesToPick[19]).ButtonGroup, obj10);
          } else {
            class O {
              constructor(price_tier, value) {
                let obj2;
                const obj = { value, label: obj2.formatMonthlyPriceLabel(price_tier) };
                const TableRadioRow = selectedTemplate(newPricesToPick[14]).TableRadioRow;
                obj2 = selectedTemplate(newPricesToPick[15]);
                return closure_1_7(TableRadioRow, obj, price_tier);
              }
            }
          }
          if (cResult[30] === tmp32) {
            class O {
              constructor(price_tier, value) {
                let obj2;
                const obj = { value, label: obj2.formatMonthlyPriceLabel(price_tier) };
                const TableRadioRow = selectedTemplate(newPricesToPick[14]).TableRadioRow;
                obj2 = selectedTemplate(newPricesToPick[15]);
                return closure_1_7(TableRadioRow, obj, price_tier);
              }
            }
          }
          const obj11 = { contentContainerStyle: tmp9, children: items1 };
          items1 = [tmp12, tmp16, tmp23, tmp26, tmp32, tmp35, tmp43];
          cResult[30] = tmp32;
          cResult[31] = tmp43;
          cResult[32] = tmp9;
          cResult[33] = tmp12;
          cResult[34] = tmp23;
          cResult[35] = closure_8(selectedTemplate(newPricesToPick[20]).BottomSheetScrollView, obj11);
          const tmp47 = closure_8(selectedTemplate(newPricesToPick[20]).BottomSheetScrollView, obj11);
        }
        const obj12 = { hasIcons: false, value, onChange: tmp7, children: tmp29 };
        cResult[20] = value;
        cResult[21] = tmp29;
        cResult[22] = closure_7(selectedTemplate(newPricesToPick[16]).TableRadioGroup, obj12);
        const tmp34 = closure_7(selectedTemplate(newPricesToPick[16]).TableRadioGroup, obj12);
      }
    }
  }
  function handleSelectNewPrice() {
    let items;
    const obj = { listings: items };
    const merged = Object.assign(selectedTemplate);
    const obj2 = { price_tier: newPricesToPick[first] };
    const merged1 = Object.assign(selectedTemplate.listings[0]);
    items = [obj2];
    handleCreateFromTemplate(obj, true);
  }
  cResult[0] = handleCreateFromTemplate;
  cResult[1] = newPricesToPick;
  cResult[2] = value;
  cResult[3] = selectedTemplate;
  cResult[4] = handleSelectNewPrice;
  tmp8 = handleSelectNewPrice;
}) : (function GuildRoleSubscriptionTierTemplatePriceReselectionActionSheet(selectedTemplate) {
  let BottomSheetScrollView;
  let format;
  let intl;
  let intl3;
  let intl4;
  let items;
  let items1;
  let newPricesToPick;
  let obj2;
  let obj3;
  let obj5;
  let obj7;
  let obj8;
  let v5i7Uhb;
  selectedTemplate = selectedTemplate.selectedTemplate;
  ({ handleCreateFromTemplate: importDefault, newPricesToPick } = selectedTemplate);
  let value;
  const tmp = closure_9();
  const bottom = require("useSafeAreaInsets")().bottom;
  const tmp2 = value(react.useState(0), 2);
  value = tmp2[0];
  let obj = { backdropOpacity: 0.8, startExpanded: true, children: closure_7(View, obj2) };
  obj2 = { style: tmp.container, children: closure_8(BottomSheetScrollView, obj3) };
  const tmp4 = tmp2[1];
  BottomSheet = selectedTemplate(newPricesToPick[21]).BottomSheet;
  obj3 = { contentContainerStyle: { paddingBottom: bottom }, children: items };
  BottomSheetScrollView = selectedTemplate(newPricesToPick[20]).BottomSheetScrollView;
  const obj4 = { variant: "heading-lg/semibold", color: "mobile-text-heading-primary", children: intl.format(selectedTemplate(newPricesToPick[10]).t["5WZ9Ct"], obj5) };
  const Text = selectedTemplate(newPricesToPick[11]).Text;
  intl = selectedTemplate(newPricesToPick[10]).intl;
  obj5 = { tierName: selectedTemplate.listings[0].name };
  items = [closure_7(Text, obj4), closure_7(selectedTemplate(newPricesToPick[12]).Spacer, { size: 12 }), , , , , ];
  const obj6 = { variant: "text-sm/normal", color: "text-default", children: format(v5i7Uhb, obj7) };
  const Text2 = selectedTemplate(newPricesToPick[11]).Text;
  const intl2 = selectedTemplate(newPricesToPick[10]).intl;
  format = intl2.format;
  obj7 = { price: obj8.formatPrice(selectedTemplate.listings[0].price_tier, CurrencyCodes.USD) };
  v5i7Uhb = selectedTemplate(newPricesToPick[10]).t["5i7Uhb"];
  obj8 = selectedTemplate(newPricesToPick[13]);
  items[2] = closure_7(Text2, obj6);
  items[3] = closure_7(selectedTemplate(newPricesToPick[12]).Spacer, { size: 24 });
  const obj9 = {
    hasIcons: false,
    value,
    onChange: tmp4,
    children: newPricesToPick.map((item, value) => {
      let obj2;
      const obj = { value, label: obj2.formatMonthlyPriceLabel(item) };
      const TableRadioRow = selectedTemplate(newPricesToPick[14]).TableRadioRow;
      obj2 = selectedTemplate(newPricesToPick[15]);
      return closure_1_7(TableRadioRow, obj, item);
    })
  };
  const TableRadioGroup = selectedTemplate(newPricesToPick[16]).TableRadioGroup;
  items[4] = closure_7(TableRadioGroup, obj9);
  items[5] = closure_7(selectedTemplate(newPricesToPick[12]).Spacer, { size: 20 });
  const obj10 = { children: items1 };
  const ButtonGroup = selectedTemplate(newPricesToPick[19]).ButtonGroup;
  const obj11 = {
    text: intl3.string(selectedTemplate(newPricesToPick[10]).t.DVCXzm),
    onPress() {
      let items;
      const obj = { listings: items };
      const merged = Object.assign(selectedTemplate);
      const obj2 = { price_tier: newPricesToPick[first] };
      const merged1 = Object.assign(selectedTemplate.listings[0]);
      items = [obj2];
      importDefault(obj, true);
    }
  };
  const Button = selectedTemplate(newPricesToPick[17]).Button;
  intl3 = selectedTemplate(newPricesToPick[10]).intl;
  items1 = [closure_7(Button, obj11), ];
  const obj12 = {
    variant: "secondary",
    text: intl4.string(selectedTemplate(newPricesToPick[10]).t.h26VOI),
    onPress() {
      const obj = require("ActionSheetActionCreators");
      return obj.hideActionSheet();
    }
  };
  const Button2 = selectedTemplate(newPricesToPick[17]).Button;
  intl4 = selectedTemplate(newPricesToPick[10]).intl;
  items1[1] = closure_7(Button2, obj12);
  items[6] = closure_8(ButtonGroup, obj10);
  return closure_7(BottomSheet, obj);
});
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/guild_settings/tier_templates/GuildRoleSubscriptionTierTemplatePriceReselectionActionSheet.tsx");

export default tmp3;
