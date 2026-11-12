// Module ID: 18115
// Function ID: 18116
// Name: BuildOverridesScreen
// Dependencies: [5, 32, 19, 17, 11534, 21, 5170, 575, 5767, 504, 13462, 13465, 13463, 1374, 7451, 5868, 6191, 7159, 7071, 5887, 7231, 12423, 5894, 7157, 7160, 9686, 18116, 7181, 5790, 5883, 5783, 2]

// Module 18115 (BuildOverridesScreen)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import ToastUtils from "ToastUtils" /* 5868 */;
import ClipboardUtils from "ClipboardUtils" /* 7451 */;
import build_overrides_BuildOverrideUtils from "build_overrides/BuildOverrideUtils" /* 13462 */;
import RecentBuildOverrides from "RecentBuildOverrides" /* 13465 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import BuildOverrideStore from "BuildOverrideStore" /* 11534 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5170 */;
import size from "module_2" /* 2 */;

let c2, c5, closure_2, closure_3, dependencyMap;

let c10;
let c9;
let metroImportAll;
let react = react_mod;
const ScrollView = react_native.ScrollView;
({ jsx: metroImportAll, Fragment: c9, jsxs: c10 } = Fragment);
let closure_11 = createStyles.createStyles((arg0) => {
  const obj = { content: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, flex: 1 }, container: { padding: nativeDefault.space.PX_16, paddingBottom: arg0 + nativeDefault.space.PX_16 } };
  ({ backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, flex: 1 });
  ({ padding: nativeDefault.space.PX_16, paddingBottom: arg0 + nativeDefault.space.PX_16 });
  return obj;
});
const memoResult = react.memo(function BuildOverridesScreen() {
  let HashmarkIcon;
  let MobilePhoneIcon;
  let Stack;
  let TableRow4;
  let arr2;
  let closure_5;
  let currentBuildOverride;
  let first;
  let first1;
  let fn;
  let items3;
  let items6;
  let mapped;
  let obj20;
  let obj9;
  let stateFromStores;
  let str10;
  let str3;
  let str4;
  let str7;
  let str8;
  let tmp11;
  let tmp13;
  let tmp24;
  function run(arg0) {
    return obj(...arguments);
  }
  let obj = function _run() {
    obj = _asyncToGenerator(async (arg0, value) => {
      let closure_0 = arg0;
      if (c5 === 2) {
        c5 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        let c4;
        try {
          c5 = 2;
          if (0 === c2) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              let closure_1 = tmp;
              closure_2_5(true);
              c4 = 1;
              c2 = 2;
              c5 = 1;
              const obj4 = { value: closure_0(), done: false };
              return obj4;
            }
          } else if (1 === tmp4) {
            c4 = 0;
            closure_129_5(false);
            throw closure_3;
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 0;
            closure_129_5(false);
            c5 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            c4 = 0;
            closure_129_5(false);
            c5 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp19) {
          closure_3 = tmp19;
          if (0 === c4) {
            c5 = 3;
            throw tmp19;
          } else {
            c2 = 1;
          }
        }
      }
    });
    return obj(...arguments);
  };
  obj = function _share() {
    obj = _asyncToGenerator(async (arg0, value) => {
      let obj6;
      let obj7;
      let tmp49;
      if (c5 === 2) {
        c5 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj3 = { value, done: true };
          return obj3;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        let c3;
        try {
          let closure_0;
          c5 = 2;
          if (0 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              let closure_1 = tmp;
              closure_0 = undefined;
              if (null != stateFromStores) {
                ScrollView(true);
                currentBuildOverride(undefined);
                c3 = 2;
                const obj5 = { overrides: obj6, meta: obj7 };
                obj6 = {};
                const getPublicBuildOverrideLink = closure_0(closure_2[12]).getPublicBuildOverrideLink;
                obj6[closure_0(closure_2[10]).DEVICE_FIELD] = tmp64;
                obj7 = { release_channel: null, user_ids: [], ttl_seconds: 3600, allow_logged_out: false, allowed_versions: tmp49 };
                tmp49 = undefined;
                const tmp44 = closure_0(closure_2[12]);
                if (null != closure_0(closure_2[13]).APP_VERSION) {
                  const items = [closure_0(closure_2[13]).APP_VERSION];
                  tmp49 = items;
                }
                c4 = 3;
                c5 = 1;
                const obj8 = { value: getPublicBuildOverrideLink(obj5), done: false };
                return obj8;
              }
            }
          } else if (1 === c4) {
            c3 = 0;
            closure_129_6(false);
            throw closure_2;
          } else {
            if (2 === c4) {
              c3 = 1;
              closure_129_7("Unable to create a link. Try again.");
            } else if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 0;
              closure_129_6(false);
              c5 = 3;
              const obj9 = { value, done: true };
              return obj9;
            } else {
              closure_0 = value;
              if (false !== closure_0.error) {
                let error;
                const tmp16 = closure_129_7;
                if (typeof closure_0.error === "string") {
                  error = closure_0.error;
                } else {
                  const _JSON = JSON;
                  error = JSON.stringify(closure_0.error);
                }
                tmp16(error);
                c3 = 0;
                closure_129_6(false);
                c5 = 3;
                const obj10 = { value: undefined, done: true };
                return obj10;
              } else {
                const _String = String;
                obj = closure_0(closure_2[14]);
                obj.copy(String(closure_0.url));
                const obj2 = closure_0(closure_2[15]);
                const result = obj2.presentCopiedToClipboard();
                c3 = 1;
              }
            }
            c3 = 0;
            closure_129_6(false);
          }
          c5 = 3;
          return { value: "HermesInternal", done: null };
        } catch (tmp52) {
          closure_2 = tmp52;
          if (0 === c3) {
            c5 = 3;
            throw tmp52;
          } else if (1 === tmp54) {
            c4 = 1;
          } else {
            c4 = 2;
          }
        }
      }
    });
    return obj(...arguments);
  };
  let tmp = dependencyMap;
  const tmp2 = obj(first(5767)({ includeKeyboardHeight: true }).insets.bottom);
  let tmp3 = stateFromStores;
  obj = stateFromStores(504);
  let items = [BuildOverrideStore];
  stateFromStores = obj.useStateFromStores(items, () => {
    const overrides = BuildOverrideStore.getCurrentBuildOverride().overrides;
    let tmp;
    if (overrides != null) {
      tmp = overrides[stateFromStores(undefined, closure_2[10]).DEVICE_FIELD];
    }
    return tmp;
  });
  let obj2 = react;
  const tmp5 = first1(react.useState({ type: "branch", id: "" }), 2);
  first = tmp5[0];
  dependencyMap = tmp5[1];
  [arr2, _asyncToGenerator] = first1(react.useState(stateFromStores(13465).getRecentDeviceBuildOverrides), 2);
  const tmp7 = first1(react.useState(stateFromStores(13465).getRecentDeviceBuildOverrides), 2);
  const tmp8 = first1(react.useState(false), 2);
  first1 = tmp8[0];
  react = tmp8[1];
  [tmp11, ScrollView] = first1(react.useState(false), 2);
  const tmp10 = first1(react.useState(false), 2);
  [tmp13, BuildOverrideStore] = first1(react.useState(), 2);
  let str = first.id;
  const tmp12 = first1(react.useState(), 2);
  const trimmed = str.trim();
  let str2 = "Discord Android";
  if ("discord_ios" === stateFromStores(13462).DEVICE_FIELD) {
    str2 = "Discord iOS";
  }
  const items1 = [stateFromStores];
  const effect = obj2.useEffect(() => {
    if (null != stateFromStores) {
      obj = RecentBuildOverrides;
      const result = obj.recordDeviceBuildOverride(tmp);
      const obj2 = RecentBuildOverrides;
      _asyncToGenerator(obj2.getRecentDeviceBuildOverrides());
    }
  }, items1);
  let tmp16 = trimmed;
  let obj3 = { style: tmp2.content, contentContainerStyle: tmp2.container, keyboardShouldPersistTaps: "handled", children: tmp18(Stack, obj20) };
  Stack = tmp3(6191).Stack;
  const TableRowGroup = tmp3(7159).TableRowGroup;
  let TableRow = tmp3(7071).TableRow;
  const tmp17 = ScrollView;
  if (null != stateFromStores) {
    MobilePhoneIcon = tmp3(5887).CopyIcon;
  } else {
    MobilePhoneIcon = tmp3(7231).MobilePhoneIcon;
  }
  let obj4 = { icon: tmp16(MobilePhoneIcon, {}), label: str3, subLabel: str4, onPress: fn };
  str3 = undefined;
  if (stateFromStores != null) {
    str3 = stateFromStores.id;
  }
  if (str3 == null) {
    str3 = "Default build";
  }
  str4 = "You\u2019re using the regular release. No build override is active.";
  if (null != stateFromStores) {
    const tmp19 = globalThis;
    const _HermesInternal = HermesInternal;
    str4 = "" + str2 + " \u00B7 Override active";
  }
  fn = undefined;
  if (null != stateFromStores) {
    fn = () => {
      obj = ClipboardUtils;
      obj.copy(stateFromStores.id);
      const obj2 = ToastUtils;
      const result = obj2.presentCopiedToClipboard();
    };
  }
  const items2 = [tmp16(TableRow, obj4), ];
  let tmp18Result = null != stateFromStores;
  if (tmp18Result) {
    let obj5 = { children: items3 };
    let obj6 = { icon: tmp16(tmp3(12423).RefreshIcon, {}), label: "Refresh override", onPress: tmp3(13462).refreshBuildOverride, arrow: true };
    const TableRow2 = tmp3(7071).TableRow;
    items3 = [tmp16(TableRow2, obj6), ];
    let obj7 = {
      icon: tmp16(tmp3(5894).TrashIcon, { color: "text-feedback-critical" }),
      label: "Clear override",
      subLabel: stateFromStores.id,
      variant: "danger",
      disabled: first1,
      onPress() {
          return run(build_overrides_BuildOverrideUtils.clearBuildOverride);
        },
      arrow: true
    };
    const TableRow3 = tmp3(7071).TableRow;
    items3[1] = tmp16(TableRow3, obj7);
    tmp18Result = tmp18(run, obj5);
  }
  items2[1] = tmp18Result;
  const items4 = [tmp18(TableRowGroup, { title: "Current build", hasIcons: true, children: items2 }), , , ];
  const Stack2 = tmp3(6191).Stack;
  let obj8 = { title: "Manual override", description: "Choose a branch or commit to run on this device.", hasIcons: true, children: tmp16(TableRow4, obj9) };
  const TableRowGroup2 = tmp3(7159).TableRowGroup;
  obj9 = { icon: tmp16(tmp3(7231).MobilePhoneIcon, {}), label: "Project", subLabel: str2 };
  TableRow4 = tmp3(7071).TableRow;
  const items5 = [tmp16(TableRowGroup2, obj8), , , ];
  let obj10 = {
    title: "Target type",
    value: first.type,
    onChange(type) {
      obj = { type, id: "" };
      return closure_2(obj);
    },
    hasIcons: true,
    children: items6
  };
  const TableRadioGroup = tmp3(7157).TableRadioGroup;
  const obj11 = { value: "branch", label: "Branch name", icon: tmp16(tmp3(9686).TagIcon, {}) };
  const TableRadioRow = tmp3(7160).TableRadioRow;
  items6 = [tmp16(TableRadioRow, obj11), ];
  const obj12 = { value: "id", label: "Commit SHA", icon: tmp16(tmp3(18116).HashmarkIcon, {}) };
  const TableRadioRow2 = tmp3(7160).TableRadioRow;
  items6[1] = tmp16(TableRadioRow2, obj12);
  items5[1] = obj(TableRadioGroup, obj10);
  const TextInput = tmp3(7181).TextInput;
  if ("branch" === first.type) {
    HashmarkIcon = tmp3(9686).TagIcon;
  } else {
    HashmarkIcon = tmp3(18116).HashmarkIcon;
  }
  const obj13 = {
    leadingIcon: HashmarkIcon,
    label: str7,
    value: first.id,
    onChange(id) {
      obj = { id };
      const merged = Object.assign(first);
      return closure_2(obj);
    },
    placeholder: str8,
    autoCapitalize: "none",
    autoCorrect: false,
    autoComplete: "off"
  };
  str7 = "Commit SHA";
  if ("branch" === first.type) {
    str7 = "Branch name";
  }
  str8 = "Full commit SHA";
  if ("branch" === first.type) {
    str8 = "team/feature-name";
  }
  items5[2] = tmp16(TextInput, obj13);
  let tmp22 = first1;
  const Button = tmp3(5790).Button;
  if (!first1) {
    tmp22 = "" === trimmed;
  }
  const obj14 = { spacing: 16, children: items5 };
  const obj15 = {
    text: "Apply override",
    disabled: tmp22,
    loading: first1,
    onPress() {
      let id;
      return run(() => {
        obj = { id };
        const setBuildOverride = stateFromStores(closure_2[10]).setBuildOverride;
        stateFromStores(closure_2[10]);
        const merged = Object.assign(first);
        return setBuildOverride(obj);
      });
    }
  };
  items5[3] = tmp16(Button, obj15);
  items4[1] = obj(Stack2, obj14);
  const TableRowGroup3 = tmp3(7159).TableRowGroup;
  if (0 === arr2.length) {
    const obj16 = { icon: tmp16(tmp3(12423).RefreshIcon, {}), label: "No recent builds", subLabel: "Your recent builds will appear here after you apply an override." };
    const TableRow5 = tmp3(7071).TableRow;
    mapped = tmp16(TableRow5, obj16);
  } else {
    mapped = arr2.map((id) => {
      let str;
      let tmp4Result;
      let closure_0 = id;
      id = undefined;
      if (closure_0 != null) {
        id = tmp.id;
      }
      let tmp3 = id === id.id && tmp.type === id.type;
      const TableRow = stateFromStores(closure_2[18]).TableRow;
      if ("branch" === id.type) {
        tmp4Result = tmp4(tmp5(tmp6[25]).TagIcon, {});
      } else {
        tmp4Result = tmp4(tmp5(tmp6[26]).HashmarkIcon, {});
      }
      obj = {
        icon: tmp4Result,
        arrow: !tmp3,
        label: id.id,
        subLabel: str,
        disabled: tmp3,
        onPress() {
          return run(() => {
            obj = stateFromStores(closure_2[10]);
            return obj.setBuildOverride(id);
          });
        }
      };
      str = "Active";
      if (!tmp3) {
        let str2 = "Commit";
        if ("branch" === id.type) {
          str2 = "Branch";
        }
        str = `${str2} · Tap to reapply`;
      }
      if (!tmp3) {
        tmp3 = first1;
      }
      return trimmed(TableRow, obj, "" + id.type + ":" + id.id);
    });
  }
  items4[2] = tmp16(TableRowGroup3, { title: "Recent builds", description: "Return to a build you used on this device.", hasIcons: true, children: mapped });
  const Stack3 = tmp3(6191).Stack;
  const TableRowGroup4 = tmp3(7159).TableRowGroup;
  const obj17 = { icon: tmp16(tmp3(5883).LinkIcon, {}), label: str10, subLabel: tmp24 };
  const TableRow6 = tmp3(7071).TableRow;
  str10 = "Apply an override to create a link.";
  if (null != stateFromStores) {
    str10 = stateFromStores.id;
  }
  tmp24 = undefined;
  if (null != stateFromStores) {
    tmp24 = str2;
  }
  const items7 = [, , ];
  const obj18 = { title: "Share an override", description: "Copy a public link to the current build. It expires in one hour and requires sign-in.", hasIcons: true, children: tmp16(TableRow6, obj17) };
  items7[0] = tmp16(TableRowGroup4, obj18);
  let tmp16Result2 = null != tmp13;
  if (tmp16Result2) {
    const obj19 = { variant: "body-sm/normal", color: "text-feedback-critical", children: tmp13 };
    tmp16Result2 = tmp16(tmp3(5783).Text, obj19);
  }
  items7[1] = tmp16Result2;
  let tmp26 = null == stateFromStores;
  const Button2 = tmp3(5790).Button;
  if (!tmp26) {
    tmp26 = tmp11;
  }
  obj20 = { spacing: 32, children: items4 };
  const obj21 = { spacing: 12, children: items7 };
  const obj22 = {
    text: "Copy public link",
    variant: "secondary",
    disabled: tmp26,
    loading: tmp11,
    onPress: function share() {
      return obj(...arguments);
    }
  };
  items7[2] = tmp16(Button2, obj22);
  items4[3] = obj(Stack3, obj21);
  return tmp16(tmp17, obj3);
});
let result = size.fileFinishedImporting("modules/user_settings/dev_tools/native/BuildOverridesScreen.tsx");

export default memoResult;
