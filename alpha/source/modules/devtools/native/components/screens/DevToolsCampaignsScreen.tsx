// Module ID: 18234
// Function ID: 18235
// Name: DevToolsCampaignsScreen
// Dependencies: [5, 32, 19, 17, 21, 5243, 575, 18235, 9604, 7885, 7553, 7354, 5866, 6274, 5873, 5489, 7680, 7379, 9609, 18237, 18238, 2118, 2]
// Exports: default

// Module 18234 (DevToolsCampaignsScreen)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5489 */;
import TextInput_TextInput from "TextInput/TextInput" /* 7553 */;
import TableRowGroup3 from "TableRowGroup" /* 7680 */;
import ActionSheet2 from "ActionSheet" /* 7885 */;
import CampaignDevToolsUtils from "CampaignDevToolsUtils" /* 9604 */;
import useCampaignDevTools from "useCampaignDevTools" /* 18235 */;
import MobileBottomSheetCopy from "MobileBottomSheetCopy" /* 18237 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5243 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, c1, c2, component, content, title;

let c9;
let metroImportAll;
let metroImportDefault;
let obj2;
let tmp;
const Text_Text = tmp(5866);
const components_Button_Button = tmp(5873);
const Stack_Stack = tmp(6274);
function CampaignPicker() {
  let campaigns;
  let campaignsLoading;
  let componentsLoading;
  let error;
  let first;
  let items1;
  let loading;
  let reload;
  let require;
  let selectedId;
  let tmp5;
  const tmp2 = loading(18235)();
  ({ select: require, error, loading } = tmp2);
  ({ campaignsLoading, componentsLoading } = tmp2);
  ({ campaigns, selectedId, reload } = tmp2);
  [first, tmp5] = react.useState("");
  const groupCampaigns = CampaignDevToolsUtils.groupCampaigns;
  CampaignDevToolsUtils;
  let obj = CampaignDevToolsUtils;
  const groupCampaignsResult = groupCampaigns(obj.filterCampaigns(campaigns, first, (name) => name.name));
  const ActionSheet = ActionSheet2.ActionSheet;
  let str = "Search campaigns";
  const TextInput = TextInput_TextInput.TextInput;
  if (campaignsLoading) {
    str = "Loading...";
  }
  const items = [tmp9(TextInput, { label: "Search campaigns", placeholder: str, disabled: loading, onChange: tmp5, value: first }), , , , ];
  if (componentsLoading) {
    componentsLoading = tmp9(tmp6(7354).ActivityIndicator, { size: "small", accessibilityLabel: "Loading campaign surfaces" });
  }
  items[1] = componentsLoading;
  let tmp9Result = null != error;
  if (tmp9Result) {
    let obj2 = { variant: "body-md/normal", children: error };
    tmp9Result = tmp9(tmp6(5866).Text, obj2);
  }
  items[2] = tmp9Result;
  let tmp9Result2 = null != selectedId;
  const Stack = tmp6(6274).Stack;
  if (tmp9Result2) {
    let obj3 = {
      grow: true,
      shrink: true,
      text: "Clear override",
      variant: "secondary",
      onPress() {
          _require(null);
          const obj = ActionSheetActionCreatorsDefault;
          obj.hideActionSheet();
        }
    };
    tmp9Result2 = tmp9(tmp6(5873).Button, obj3);
  }
  let obj4 = { keyboardShouldPersistTaps: "handled", dismissAccessibilityLabel: "Dismiss campaign picker", children: items };
  let obj5 = { direction: "horizontal", spacing: 8, children: items1 };
  items1 = [tmp9Result2, tmp9(tmp6(5873).Button, { grow: true, shrink: true, text: "Refresh campaigns", variant: "secondary", disabled: campaignsLoading, onPress: reload })];
  items[3] = closure_8(Stack, obj5);
  items[4] = groupCampaignsResult.map((label) => {
    let campaigns;
    let disabled;
    let obj = {
      hasIcons: false,
      title: label.label,
      children: campaigns.map((label) => {
        let closure_0 = label;
        let obj = {
          label: label.name,
          disabled,
          onPress: closure_1_3(function*(arg0, value) {
            let closure_0;
            if (c2 === 2) {
              c2 = 3;
              throw new TypeError("Generator functions may not be called on executing generators");
            } else if (tmp2 === 3) {
              if (arg0 === 1) {
                throw value;
              } else if (arg0 === 2) {
                const obj2 = { value, done: true };
                return obj2;
              } else {
                return { value: "HermesInternal", done: null };
              }
            } else {
              try {
                c2 = 2;
                if (0 === c1) {
                  if (arg0 === 1) {
                    c2 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    c2 = 3;
                    const obj3 = { value, done: true };
                    return obj3;
                  } else {
                    c1 = 1;
                    c2 = 1;
                    const obj4 = { value: tmp3(tmp3.id), done: false };
                    return obj4;
                  }
                } else if (arg0 === 1) {
                  c2 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c2 = 3;
                  const obj5 = { value, done: true };
                  return obj5;
                } else {
                  if (value) {
                    const obj = disabled(closure_2_2[15]);
                    obj.hideActionSheet();
                  }
                  c2 = 3;
                  return { value: "HermesInternal", done: null };
                }
              } catch (tmp10) {
                c2 = 3;
                throw tmp10;
              }
            }
          })
        };
        const TableRow = closure_1_0(closure_1_2[17]).TableRow;
        return closure_1_7(TableRow, obj, label.id);
      })
    };
    campaigns = label.campaigns;
    const TableRowGroup = TableRowGroup3.TableRowGroup;
    return metroImportDefault(TableRowGroup, obj, label.label);
  });
  return closure_8(ActionSheet, obj4);
}
function NitroPicker() {
  let NITRO_OPTIONS;
  let TableRowGroup;
  let obj2;
  let obj = { dismissAccessibilityLabel: "Dismiss Nitro status picker", children: metroImportDefault(TableRowGroup, obj2) };
  const ActionSheet = ActionSheet2.ActionSheet;
  obj2 = {
    hasIcons: false,
    title: "Nitro status",
    children: NITRO_OPTIONS.map((label) => {
      let obj = {
        label: label.label,
        onPress() {
          const obj = require("useCampaignDevTools");
          obj.setCampaignNitro(label.value);
          const obj2 = ActionSheetActionCreatorsDefault;
          obj2.hideActionSheet();
        }
      };
      return closure_7(label(closure_2[17]).TableRow, obj, label.id);
    })
  };
  TableRowGroup = TableRowGroup3.TableRowGroup;
  NITRO_OPTIONS = useCampaignDevTools.NITRO_OPTIONS;
  return metroImportDefault(ActionSheet, obj);
}
const ScrollView = react_native.ScrollView;
({ jsx: metroImportDefault, jsxs: metroImportAll, Fragment: c9 } = Fragment);
let obj = { content: obj2, dismissalDetails: { flex: 1, minWidth: 0 }, variantDetails: { flex: 1, minWidth: 0 } };
obj2 = { padding: nativeDefault.space.PX_16 };
let closure_10 = createStyles.createStyles(obj);
let result = size.fileFinishedImporting("modules/devtools/native/components/screens/DevToolsCampaignsScreen.tsx");

export default function DevToolsCampaignsScreen() {
  let Stack;
  let campaigns;
  let campaignsLoading;
  let closure_0;
  let componentsLoading;
  let details;
  let dismissals;
  let error;
  let obj33;
  let obj8;
  let obj9;
  let previewActions;
  let reload;
  let selectedId;
  let tmp3;
  let tmp = closure_10();
  _require = tmp;
  let tmp2 = _slicedToArray(reload.useState(false), 2);
  [tmp3, importDefault] = tmp2;
  const tmp5 = require("useCampaignDevTools")();
  ({ campaigns, selectedId } = tmp5);
  ({ previewActions, details, dismissals } = tmp5);
  ({ nitro: _slicedToArray, error, reload } = tmp5);
  ({ campaignsLoading, componentsLoading } = tmp5);
  let items = [reload];
  const effect = reload.useEffect(() => {
    reload();
  }, items);
  const found = campaigns.find((id) => id.id === selectedId);
  let str;
  if (found != null) {
    str = found.name;
  }
  if (str == null) {
    str = "Select a campaign";
  }
  const found1 = previewActions.filter((component) => {
    component = component.component;
    let tmp3 = component.componentType === closure_0(selectedId[18]).MarketingComponentType.MOBILE_BOTTOM_SHEET;
    const tmp = closure_0;
    const tmp2 = selectedId;
    if (tmp3) {
      tmp3 = "mobileBottomSheet" === component.properties.properties.oneofKind;
    }
    if (tmp3) {
      const tmpResult = tmp(tmp2[19]);
      tmp3 = null != tmpResult.getMobileBottomSheetCopy(component);
    }
    return tmp3;
  });
  let obj = require("CampaignDevToolsUtils");
  const result = obj.groupCampaignPreviewActions(found1);
  let tmp9 = closure_7;
  let obj2 = { contentContainerStyle: tmp.content, children: tmp11(Stack, obj33) };
  Stack = require("Stack/Stack").Stack;
  let items1 = [closure_7(require("Text/Text").Text, { variant: "body-md/normal", children: "Force campaign surfaces for this session. Purchases and rewards still use server eligibility." }), , , , , , ];
  const TableRowGroup = require("TableRowGroup").TableRowGroup;
  let str2 = "Loading...";
  const TableRow = require("TableRow").TableRow;
  const tmp10 = ScrollView;
  if (!campaignsLoading) {
    str2 = str;
  }
  let obj3 = {
    label: "Campaign",
    subLabel: str2,
    disabled: campaignsLoading,
    onPress() {
      const obj = require("ActionSheetActionCreators");
      const obj2 = { default: CampaignPicker };
      return obj.openLazy(Promise.resolve(obj2), "campaign-picker");
    }
  };
  const items2 = [tmp9(TableRow, obj3), ];
  const TableRow2 = tmp8(tmp4[17]).TableRow;
  const NITRO_OPTIONS = tmp8(tmp4[7]).NITRO_OPTIONS;
  const found2 = NITRO_OPTIONS.find((value) => value.value === _slicedToArray);
  let label;
  if (found2 != null) {
    label = found2.label;
  }
  let obj4 = { hasIcons: false, children: items2 };
  const obj5 = {
    label: "Nitro status",
    subLabel: label,
    onPress() {
      const obj = require("ActionSheetActionCreators");
      const obj2 = { default: NitroPicker };
      return obj.openLazy(Promise.resolve(obj2), "campaign-nitro-picker");
    }
  };
  items2[1] = tmp9(TableRow2, obj5);
  items1[1] = closure_8(TableRowGroup, obj4);
  let tmp9Result = null != error;
  if (tmp9Result) {
    const obj6 = { variant: "body-md/normal", children: error };
    tmp9Result = tmp9(tmp8(tmp4[12]).Text, obj6);
  }
  items1[2] = tmp9Result;
  let tmp11Result = componentsLoading || details.length > 0;
  if (tmp11Result) {
    const TableRowGroup2 = tmp8(tmp4[16]).TableRowGroup;
    const TableRow3 = tmp8(tmp4[17]).TableRow;
    let str3 = "Show";
    let Text = tmp8(tmp4[12]).Text;
    if (tmp3) {
      str3 = "Hide";
    }
    const obj7 = {
      label: "Campaign details",
      arrow: false,
      trailing: tmp9(Text, obj8),
      accessibilityState: obj9,
      onPress() {
          return importDefault((arg0) => !arg0);
        }
    };
    obj8 = { variant: "body-sm/normal", children: str3 };
    obj9 = { expanded: tmp3 };
    const items3 = [tmp9(TableRow3, obj7), ];
    if (tmp3) {
      let tmp9Result7;
      if (componentsLoading) {
        tmp9Result7 = tmp9(tmp8(tmp4[11]).ActivityIndicator, { size: "small", accessibilityLabel: "Loading campaign surfaces" });
      } else {
        tmp9Result7 = details.map((subLabel) => {
          const label = subLabel.label;
          return closure_1_7(closure_0(selectedId[17]).TableRow, { label, subLabel: subLabel.value }, label);
        });
      }
      tmp3 = tmp9Result7;
    }
    const obj10 = { hasIcons: false, children: items3 };
    items3[1] = tmp3;
    tmp11Result = tmp11(TableRowGroup2, obj10);
  }
  items1[3] = tmp11Result;
  let tmp11Result3 = componentsLoading || null != selectedId;
  if (tmp11Result3) {
    let tmp9Result9;
    let Stack2 = tmp8(tmp4[13]).Stack;
    const Stack3 = tmp8(tmp4[13]).Stack;
    const items4 = [tmp9(tmp8(tmp4[12]).Heading, { variant: "heading-sm/semibold", children: "Dismissed content" }), ];
    let tmp9Result8 = !componentsLoading && dismissals.contents.length > 0;
    if (tmp9Result8) {
      const obj12 = { text: "Reset all", variant: "secondary", size: "sm", accessibilityLabel: "Reset all for this campaign", disabled: null, onPress: null };
      ({ resetting: obj11.disabled, resetAll: obj11.onPress } = dismissals);
      tmp9Result8 = tmp9(tmp8(tmp4[14]).Button, obj12);
    }
    const obj13 = { direction: "horizontal", spacing: 8, align: "center", justify: "space-between", children: items4 };
    items4[1] = tmp9Result8;
    const items5 = [tmp11(Stack3, obj13), tmp9(tmp8(tmp4[12]).Text, { variant: "body-sm/normal", color: "text-muted", children: "Reset your dismissals. Keys are shared by campaigns using these surfaces." }), ];
    if (componentsLoading) {
      tmp9Result9 = tmp9(tmp8(tmp4[11]).ActivityIndicator, { size: "small", accessibilityLabel: "Loading dismissed content" });
    } else {
      let tmp9Result10 = 0 === dismissals.contents.length;
      const tmp19 = closure_9;
      if (tmp9Result10) {
        tmp9Result10 = tmp9(tmp8(tmp4[12]).Text, { variant: "body-sm/normal", children: "No resettable dismissible content for these surfaces." });
      }
      const items6 = [tmp9Result10, , ];
      const contents = dismissals.contents;
      items6[1] = contents.map((content) => {
        let items;
        let items1;
        let obj3;
        content = content.content;
        const label = content.label;
        const status = content.status;
        const obj = { direction: "horizontal", spacing: 8, align: "center", children: items1 };
        const Stack = closure_0(selectedId[13]).Stack;
        const obj2 = { spacing: 0, style: content.dismissalDetails, children: closure_1_8(closure_0(selectedId[12]).Text, obj3) };
        const Stack2 = closure_0(selectedId[13]).Stack;
        obj3 = { variant: "body-sm/normal", children: items };
        items = [label, " \u00B7 ", status];
        items1 = [closure_1_7(Stack2, obj2), ];
        const obj4 = {
          text: "Reset",
          variant: "secondary",
          size: "sm",
          accessibilityLabel: "Reset " + label,
          disabled: dismissals.resetting,
          onPress() {
            return dismissals.resetOne(content);
          }
        };
        const Button = closure_0(selectedId[14]).Button;
        items1[1] = closure_1_7(Button, obj4);
        return closure_1_8(Stack, obj, content);
      });
      let tmp9Result11 = null != dismissals.error;
      if (tmp9Result11) {
        const obj14 = { variant: "body-sm/normal", children: dismissals.error };
        tmp9Result11 = tmp9(tmp8(tmp4[12]).Text, obj14);
      }
      const obj15 = { children: items6 };
      items6[2] = tmp9Result11;
      tmp9Result9 = tmp11(tmp19, obj15);
    }
    const obj16 = { spacing: 8, children: items5 };
    items5[2] = tmp9Result9;
    tmp11Result3 = tmp11(Stack2, obj16);
  }
  items1[4] = tmp11Result3;
  let tmp11Result4 = componentsLoading || null != selectedId;
  if (tmp11Result4) {
    const Stack4 = tmp8(tmp4[13]).Stack;
    const items7 = [tmp9(tmp8(tmp4[12]).Heading, { variant: "heading-sm/semibold", children: "Bottom sheets" }), tmp9(tmp8(tmp4[12]).Text, { variant: "body-sm/normal", color: "text-muted", children: "Force open any bottom sheet variant from this campaign, regardless of eligibility or Nitro override." }), componentsLoading && tmp9(tmp8(tmp4[11]).ActivityIndicator, { size: "small", accessibilityLabel: "Loading bottom sheets" }), ];
    let tmp9Result12 = !componentsLoading;
    componentsLoading && tmp9(require("ActivityIndicator/ActivityIndicator").ActivityIndicator, { size: "small", accessibilityLabel: "Loading bottom sheets" });
    if (tmp9Result12) {
      tmp9Result12 = 0 === found1.length;
    }
    if (tmp9Result12) {
      tmp9Result12 = tmp9(tmp8(tmp4[12]).Text, { variant: "body-sm/normal", children: "No bottom sheets for this platform." });
    }
    const obj17 = { spacing: 8, children: items7 };
    items7[3] = tmp9Result12;
    tmp11Result4 = tmp11(Stack4, obj17);
  }
  obj33 = { spacing: 16, children: items1 };
  items1[5] = tmp11Result4;
  items1[6] = result.map((title) => {
    let items;
    title = title.title;
    const variants = title.variants;
    let obj = { spacing: 8, children: items };
    let Stack = title(selectedId[13]).Stack;
    items = [
      closure_1_7(title(selectedId[12]).Text, { variant: "body-sm/semibold", accessibilityRole: "header", children: title }),
      variants.map((component) => {
        let items;
        let paths;
        let target;
        let timing;
        let variant;
        component = component.component;
        ({ target, timing, variant } = component);
        const properties = component.properties.properties;
        let tmp2 = dependencyMap;
        let obj = MobileBottomSheetCopy;
        const mobileBottomSheetCopy = obj.getMobileBottomSheetCopy(component);
        let tmp5Result = null;
        if ("mobileBottomSheet" === properties.oneofKind) {
          tmp5Result = null;
          if (null != mobileBottomSheetCopy) {
            const Stack = Stack_Stack.Stack;
            const obj2 = { variant: "body-sm/normal", color: "text-muted", style: title.variantDetails, children: items };
            items = ["Targets: ", target, " \u00B7 ", timing];
            let combined = null != variant;
            const Text = Text_Text.Text;
            if (combined) {
              const _HermesInternal = HermesInternal;
              combined = " \u00B7 Variant: " + variant;
            }
            items[4] = combined;
            const items1 = [metroImportAll(Text, obj2), ];
            let str3 = variant;
            const Button = components_Button_Button.Button;
            const tmp9 = metroImportDefault;
            if (variant == null) {
              str3 = "Default";
            }
            const obj3 = { direction: "horizontal", spacing: 8, align: "center", children: items1 };
            const _HermesInternal2 = HermesInternal;
            const obj4 = {
              text: "Force open",
              variant: "primary",
              size: "sm",
              accessibilityLabel: "Force open " + title + ", Targets: " + target + ", " + str3 + ", " + timing,
              onPress() {
                    const openLazy = closure_2_1(paths[15]).openLazy;
                    closure_2_1(paths[15]);
                    const obj = {
                      bottomSheetData: properties.mobileBottomSheet,
                      copy: mobileBottomSheetCopy,
                      componentId: component.id,
                      componentType: component.componentType,
                      promotionId: component.promotionId,
                      markAsDismissed() {

                      }
                    };
                    const tmp2 = title(paths[21])(paths[20], paths.paths);
                    openLazy(tmp2, "campaign-sheet-" + component.id, obj);
                  }
            };
            items1[1] = tmp9(Button, obj4);
            tmp5Result = tmp5(Stack, obj3, component.id);
          }
        }
        return tmp5Result;
      })
    ];
    return closure_1_8(Stack, obj, title);
  });
  return tmp9(tmp10, obj2);
};
