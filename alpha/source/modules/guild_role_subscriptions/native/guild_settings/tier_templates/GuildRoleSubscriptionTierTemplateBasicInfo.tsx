// Module ID: 19873
// Function ID: 19874
// Name: GuildRoleSubscriptionTierTemplateBasicInfo
// Dependencies: [19, 17, 21, 5005, 587, 558, 576, 5707, 1199, 5271, 17097, 1125, 5281, 2]

// Module 19873 (GuildRoleSubscriptionTierTemplateBasicInfo)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import FastImageDefault from "FastImage" /* 5707 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5005 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let size;
let tmp;
const intl2 = tmp(1125);
const native = tmp(1199);
const Text_Text = tmp(5271);
const components_Button_Button = tmp(5281);
const GuildRoleSubscriptionTypeUtils = tmp(17097);
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let obj = { container: { paddingBottom: 24 }, header: { flexDirection: "row" }, image: size };
size = { width: 48, height: 48, borderRadius: nativeDefault.radii.sm };
let closure_6 = createStyles.createStyles(obj);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function GuildRoleSubscriptionTierTemplateBasicInfo(template) {
  let closeActionSheet;
  let container;
  let description;
  let descriptionTextStyle;
  let header;
  let image;
  let items;
  let items1;
  let items2;
  let name;
  let price_tier;
  let subscriptionPlanTextStyle;
  let tmp5;
  const tmp = require;
  let obj = react2;
  const cResult = obj.c(37);
  template = template.template;
  const handleSelectTemplateInPreview = template.handleSelectTemplateInPreview;
  ({ subscriptionPlanTextStyle, descriptionTextStyle, closeActionSheet } = template);
  const descriptionTextProps = template.descriptionTextProps;
  const tmp4 = closure_6();
  ({ image, name, price_tier, description } = template.listings[0]);
  ({ container, header } = tmp4);
  if (cResult[0] !== image) {
    let obj2 = { uri: image };
    cResult[0] = image;
    cResult[1] = obj2;
    tmp5 = obj2;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] === tmp4.image) {
    let tmp6;
    let tmp9;
    let tmp12;
    let tmp13;
    let tmp14;
    let tmp17;
    let tmp20;
    if (cResult[3] === tmp5) {
      tmp6 = cResult[4];
    }
    const _Symbol = Symbol;
    if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
      const tmp11 = React3(native.Spacer, { size: 16 });
      cResult[5] = tmp11;
      tmp9 = tmp11;
    } else {
      tmp9 = cResult[5];
    }
    const _Symbol2 = Symbol;
    if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
      let obj3 = { flexShrink: 1 };
      cResult[6] = obj3;
      tmp12 = obj3;
    } else {
      tmp12 = cResult[6];
    }
    const _Symbol3 = Symbol;
    if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
      let obj4 = { flexWrap: "wrap" };
      cResult[7] = obj4;
      tmp13 = obj4;
    } else {
      tmp13 = cResult[7];
    }
    if (cResult[8] !== name) {
      let obj5 = { variant: "heading-md/semibold", color: "mobile-text-heading-primary", style: tmp13, children: name };
      const tmp16 = React3(Text_Text.Text, obj5);
      cResult[8] = name;
      cResult[9] = tmp16;
      tmp14 = tmp16;
    } else {
      tmp14 = cResult[9];
    }
    const _Symbol4 = Symbol;
    if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
      const tmp19 = React3(native.Spacer, { size: 4 });
      cResult[10] = tmp19;
      tmp17 = tmp19;
    } else {
      tmp17 = cResult[10];
    }
    if (cResult[11] !== price_tier) {
      const tmpResult = GuildRoleSubscriptionTypeUtils;
      const result = tmpResult.formatMonthlyPriceLabel(price_tier);
      cResult[11] = price_tier;
      cResult[12] = result;
      tmp20 = result;
    } else {
      tmp20 = cResult[12];
    }
    if (cResult[13] === subscriptionPlanTextStyle) {
      let tmp22;
      if (cResult[14] === tmp20) {
        tmp22 = cResult[15];
      }
      if (cResult[16] === tmp22) {
        let tmp25;
        if (cResult[17] === tmp14) {
          tmp25 = cResult[18];
        }
        if (cResult[19] === tmp4.header) {
          if (cResult[20] === tmp25) {
            let tmp29;
            if (cResult[21] === tmp6) {
              tmp29 = cResult[22];
            }
            if (cResult[23] === description) {
              if (cResult[24] === descriptionTextProps) {
                let tmp33;
                let tmp39;
                if (cResult[25] === descriptionTextStyle) {
                  tmp33 = cResult[26];
                }
                const _Symbol5 = Symbol;
                if (cResult[27] === Symbol.for("react.memo_cache_sentinel")) {
                  const intl = intl2.intl;
                  const stringResult = intl.string(intl2.t["1W7mCt"]);
                  cResult[27] = stringResult;
                  tmp39 = stringResult;
                } else {
                  tmp39 = cResult[27];
                }
                if (cResult[28] === closeActionSheet) {
                  if (cResult[29] === handleSelectTemplateInPreview) {
                    let tmp41;
                    if (cResult[30] === template) {
                      tmp41 = cResult[31];
                    }
                    if (cResult[32] === tmp4.container) {
                      if (cResult[33] === tmp29) {
                        if (cResult[34] === tmp33) {
                          let tmp44;
                          if (cResult[35] === tmp41) {
                            tmp44 = cResult[36];
                          }
                          return tmp44;
                        }
                      }
                    }
                    const obj6 = { style: container, children: items };
                    items = [tmp29, tmp33, tmp41];
                    const tmp47 = hasOwnProperty(View, obj6);
                    cResult[32] = tmp4.container;
                    cResult[33] = tmp29;
                    cResult[34] = tmp33;
                    cResult[35] = tmp41;
                    cResult[36] = tmp47;
                    tmp44 = tmp47;
                  }
                }
                const obj7 = {
                  text: tmp39,
                  onPress() {
                                  return handleSelectTemplateInPreview(template, closeActionSheet);
                                },
                  grow: true
                };
                const tmp43 = React3(components_Button_Button.Button, obj7);
                cResult[28] = closeActionSheet;
                cResult[29] = handleSelectTemplateInPreview;
                cResult[30] = template;
                cResult[31] = tmp43;
                tmp41 = tmp43;
              }
            }
            const obj8 = { variant: "text-sm/normal", style: descriptionTextStyle, children: description };
            const Text = Text_Text.Text;
            const merged = Object.assign(descriptionTextProps);
            const tmp38 = React3(Text, obj8);
            cResult[23] = description;
            cResult[24] = descriptionTextProps;
            cResult[25] = descriptionTextStyle;
            cResult[26] = tmp38;
            tmp33 = tmp38;
          }
        }
        const tmp31 = View;
        const obj9 = { style: header, children: items1 };
        items1 = [tmp6, tmp9, tmp25];
        const tmp32 = hasOwnProperty(View, obj9);
        cResult[19] = tmp4.header;
        cResult[20] = tmp25;
        cResult[21] = tmp6;
        cResult[22] = tmp32;
        tmp29 = tmp32;
      }
      const obj10 = { style: tmp12, children: items2 };
      items2 = [tmp14, tmp17, tmp22];
      const tmp28 = hasOwnProperty(View, obj10);
      cResult[16] = tmp22;
      cResult[17] = tmp14;
      cResult[18] = tmp28;
      tmp25 = tmp28;
    }
    const obj11 = { variant: "heading-md/medium", style: subscriptionPlanTextStyle, children: tmp20 };
    const tmp24 = React3(Text_Text.Text, obj11);
    cResult[13] = subscriptionPlanTextStyle;
    cResult[14] = tmp20;
    cResult[15] = tmp24;
    tmp22 = tmp24;
  }
  const obj12 = { source: tmp5, style: tmp4.image };
  const tmp7 = React3(FastImageDefault, obj12);
  cResult[2] = tmp4.image;
  cResult[3] = tmp5;
  cResult[4] = tmp7;
  tmp6 = tmp7;
}) : (function GuildRoleSubscriptionTierTemplateBasicInfo(template) {
  let closure_129_1;
  let closure_129_2;
  let description;
  let descriptionTextProps;
  let descriptionTextStyle;
  let image;
  let intl;
  let items;
  let items1;
  let items2;
  let name;
  let obj6;
  let price_tier;
  let subscriptionPlanTextStyle;
  template = template.template;
  ({ handleSelectTemplateInPreview: closure_129_1, closeActionSheet: closure_129_2, descriptionTextProps } = template);
  ({ subscriptionPlanTextStyle, descriptionTextStyle } = template);
  const tmp = closure_6();
  const obj = { style: tmp.container, children: items2 };
  const obj2 = { style: tmp.header, children: items };
  ({ image, name, price_tier, description } = template.listings[0]);
  items = [, , ];
  const obj3 = { source: { uri: image }, style: tmp.image };
  items[0] = React3(FastImageDefault, obj3);
  items[1] = React3(native.Spacer, { size: 16 });
  const obj4 = { style: { flexShrink: 1 }, children: items1 };
  items1 = [React3(Text_Text.Text, { variant: "heading-md/semibold", color: "mobile-text-heading-primary", style: { flexWrap: "wrap" }, children: name }), React3(native.Spacer, { size: 4 }), ];
  const obj5 = { variant: "heading-md/medium", style: subscriptionPlanTextStyle, children: obj6.formatMonthlyPriceLabel(price_tier) };
  const Text = Text_Text.Text;
  obj6 = GuildRoleSubscriptionTypeUtils;
  items1[2] = React3(Text, obj5);
  items[2] = hasOwnProperty(View, obj4);
  items2 = [hasOwnProperty(View, obj2), , ];
  const obj7 = { variant: "text-sm/normal", style: descriptionTextStyle, children: description };
  const Text2 = Text_Text.Text;
  const merged = Object.assign(descriptionTextProps);
  items2[1] = React3(Text2, obj7);
  const obj8 = {
    text: intl.string(intl2.t["1W7mCt"]),
    onPress() {
      return closure_1_1(template, closure_1_2);
    },
    grow: true
  };
  const Button = components_Button_Button.Button;
  intl = intl2.intl;
  items2[2] = React3(Button, obj8);
  return hasOwnProperty(View, obj);
});
size = size_mod;
let result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/guild_settings/tier_templates/GuildRoleSubscriptionTierTemplateBasicInfo.tsx");

export const GuildRoleSubscriptionTierTemplateBasicInfo = tmp4;
