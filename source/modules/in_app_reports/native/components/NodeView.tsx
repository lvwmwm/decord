// Module ID: 7608
// Function ID: 60972
// Name: _createForOfIteratorHelperLoose
// Dependencies: [57, 31, 27, 4129, 1348, 3758, 7609, 7606, 653, 482, 33, 4130, 689, 5450, 4562, 4126, 3974, 4086, 566, 4660, 7610, 1456, 4528, 4539, 7603, 7601, 4324, 3843, 7612, 7616, 7123, 5121, 7617, 7618, 7619, 7620, 12326, 12327, 12328, 12329, 12330, 12331, 12332, 12333, 12334, 12336, 12337, 12338, 12339, 12340, 12341, 12342, 12343, 12346, 2]
// Exports: default

// Module 7608 (_createForOfIteratorHelperLoose)
import _slicedToArray from "_slicedToArray";
import SafeAreaPaddingView from "SafeAreaPaddingView";
import get_ActivityIndicator from "AccessibilityAnnouncer";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import closure_10 from "_isNativeReflectConstruct";
import { REMEDIATION_ELEMENT_TYPES } from "REMEDIATION_ELEMENT_TYPES";
import { IN_APP_REPORTS_NODE } from "IN_APP_REPORTS_NODE";
import ME from "ME";
import { Permissions } from "sum";
import jsxProd from "TextLineElement";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_13;
let closure_14;
let closure_16;
let closure_17;
let closure_6;
let closure_7;
const require = arg1;
function _createForOfIteratorHelperLoose(iterable) {
  let closure_0 = iterable;
  iterable = "undefined" !== typeof Symbol;
  if (iterable) {
    const _Symbol = Symbol;
    iterable = iterable[Symbol.iterator];
  }
  if (!iterable) {
    iterable = iterable[Symbol.iterator];
  }
  if (iterable) {
    const iter = iterable.call(iterable);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = iterable;
    if (!Array.isArray(iterable)) {
      let tmp2;
      if (iterable) {
        if ("string" === typeof iterable) {
          tmp2 = _arrayLikeToArray(iterable, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(iterable).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = iterable.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(iterable, undefined);
              } else {
                let obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(iterable);
          const callResult = toString.call(iterable);
          tmp3 = "Object" === substr && iterable.constructor;
        }
      }
      tmp = tmp2;
      if (!tmp2) {
        const _TypeError = TypeError;
        const typeError = new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        throw typeError;
      }
    }
    if (tmp) {
      closure_0 = tmp;
    }
    let c1 = 0;
    return () => {
      if (closure_1 >= length.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = length[+closure_1];
      }
      return obj;
    };
  }
}
function _arrayLikeToArray(arg0, arg1) {
  let length;
  if (tmp) {
    length = arg0.length;
  }
  const ArrayResult = Array(length);
  for (let num = 0; num < length; num = num + 1) {
    ArrayResult[num] = arg0[num];
  }
  return ArrayResult;
}
function HeaderView(node) {
  let description;
  let header;
  let subheader;
  ({ header, subheader, description } = node.node);
  const tmp = _createForOfIteratorHelperLoose();
  let obj = { style: tmp.headerContainer };
  let tmp5 = null != header;
  if (tmp5) {
    tmp5 = "" !== header;
  }
  if (tmp5) {
    obj = { ref: node.headerRef, style: tmp.header, variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", accessibilityRole: "header", children: header };
    tmp5 = callback2(require(4126) /* Text */.Text, obj);
  }
  const items = [tmp5, , ];
  let tmp9 = null;
  if (null != subheader) {
    tmp9 = null;
    if (subheader.length > 0) {
      obj = { style: tmp.subheader, variant: "text-md/medium", color: "text-default", children: tmp2(subheader) };
      tmp9 = callback2(require(4126) /* Text */.Text, obj);
    }
  }
  items[1] = tmp9;
  let tmp13 = null;
  if (null != description) {
    tmp13 = null;
    if (description.length > 0) {
      const obj1 = { style: tmp.description, variant: "text-xs/medium", color: "text-default", children: description };
      tmp13 = callback2(require(4126) /* Text */.Text, obj1);
    }
  }
  items[2] = tmp13;
  obj.children = items;
  return closure_17(closure_6, obj);
}
function InfoView(node) {
  const info = node.node.info;
  const tmp = _createForOfIteratorHelperLoose();
  let tmp3 = null;
  if (null != info) {
    let obj = {};
    const items = [tmp.infoBox, ];
    obj = { backgroundColor: require(3974) /* hexToRgb */.hexWithOpacity(tmp.infoBox.backgroundColor, 0.1) };
    items[1] = obj;
    obj.style = items;
    obj = { size: "md", color: tmp.infoBox.backgroundColor };
    const items1 = [callback2(require(4086) /* CircleInformationIcon */.CircleInformationIcon, obj), ];
    const obj1 = { style: tmp.infoBoxText, variant: "text-sm/normal", color: "interactive-text-active", children: tmp2(info) };
    items1[1] = callback2(require(4126) /* Text */.Text, obj1);
    obj.children = items1;
    tmp3 = callback3(closure_6, obj);
    const obj3 = require(3974) /* hexToRgb */;
  }
  return tmp3;
}
function ChildItem(child) {
  let tmp4;
  let tmp5;
  child = child.child;
  let obj = Object.create(null);
  obj.child = 0;
  obj.nodeMap = 0;
  const importDefault = Object.assign(child, obj);
  const tmp2 = _createForOfIteratorHelperLoose();
  [tmp4, tmp5] = callback(child, 2);
  obj = child(566);
  const items = [_isNativeReflectConstruct];
  let stateFromStores = obj.useStateFromStores(items, () => outer1_8.get("iar_show_report_sub_type_labels"));
  if (null != child.nodeMap[tmp5]) {
    const report_type = tmp7.report_type;
  }
  obj = { style: tmp2.childButton, accessibilityRole: "button", onPress: callback(React.useState(() => () => outer1_1.onPress(outer1_0)), 1)[0] };
  const obj1 = { style: tmp2.childContainer };
  const obj2 = { style: tmp2.childContent };
  const obj3 = { style: tmp2.childButtonText, variant: "text-md/semibold", color: "mobile-text-heading-primary", children: tmp4 };
  const items1 = [callback2(child(4126).Text, obj3), ];
  if (stateFromStores) {
    stateFromStores = null != report_type;
  }
  if (stateFromStores) {
    const obj4 = { style: tmp2.debugText, variant: "text-xs/normal", color: "text-muted", children: report_type };
    stateFromStores = callback2(child(4126).Text, obj4);
  }
  items1[1] = stateFromStores;
  obj2.children = items1;
  const items2 = [closure_17(closure_6, obj2), callback2(importDefault(7610), {})];
  obj1.children = items2;
  obj.children = closure_17(closure_6, obj1);
  return callback2(child(4660).PressableHighlight, obj);
}
function ChildrenView(node) {
  let importDefault;
  let require;
  const children = node.node.children;
  ({ onSelectChild: require, nodeMap: importDefault } = node);
  let tmp2 = null;
  if (null != children) {
    tmp2 = null;
    if (0 !== children.length) {
      const obj = {
        style: tmp.childrenContainer,
        children: children.map((child) => {
              const tmp = outer1_4(child, 2);
              return outer1_16(outer1_23, { child, nodeMap: closure_1, onPress: closure_0 }, "" + tmp[0] + "+" + tmp[1]);
            })
      };
      tmp2 = callback2(closure_6, obj);
    }
  }
  return tmp2;
}
function getElementForType(node, block_users) {
  const elements = node.elements;
  let closure_0 = block_users;
  return elements.find((type) => type.type === closure_0);
}
function getElementsForType(node, external_link) {
  const elements = node.elements;
  external_link = "external_link";
  return elements.filter((type) => type.type === external_link);
}
function hasAnyRemediationElement(node) {
  const elements = node.elements;
  return elements.some((type) => outer1_11.includes(type.type));
}
function NullComponent() {
  return null;
}
({ View: closure_6, ScrollView: closure_7 } = get_ActivityIndicator);
({ AnalyticEvents: closure_13, ChannelTypes: closure_14 } = ME);
({ jsx: closure_16, jsxs: closure_17 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { flex: 1, alignSelf: "stretch", justifyContent: "flex-start", alignItems: "center", backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOWER, marginTop: 30 };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.scrollView = { flex: 1, alignSelf: "stretch", marginTop: 24 };
_createForOfIteratorHelperLoose.childrenContainer = { flex: 1, alignSelf: "stretch", paddingHorizontal: 16 };
_createForOfIteratorHelperLoose.headerContainer = { alignSelf: "stretch", marginBottom: 24, paddingHorizontal: 16 };
_createForOfIteratorHelperLoose.header = { marginBottom: 8, textAlign: "center" };
_createForOfIteratorHelperLoose.subheader = { lineHeight: 20, marginBottom: 8, textAlign: "center" };
_createForOfIteratorHelperLoose.description = { lineHeight: 16, marginBottom: 8, textAlign: "center" };
let obj1 = { alignSelf: "stretch", backgroundColor: require("_createForOfIteratorHelperLoose").unsafe_rawColors.BLUE_345, borderRadius: require("_createForOfIteratorHelperLoose").radii.xs, borderColor: require("_createForOfIteratorHelperLoose").unsafe_rawColors.BLUE_345, borderWidth: 1, padding: 8, flexDirection: "row", marginBottom: 16, marginHorizontal: 16 };
_createForOfIteratorHelperLoose.infoBox = obj1;
_createForOfIteratorHelperLoose.infoBoxText = { flex: 1, lineHeight: 18, marginStart: 8, marginTop: 3 };
_createForOfIteratorHelperLoose.childButton = { marginBottom: 8, borderRadius: require("_createForOfIteratorHelperLoose").radii.xs };
let obj3 = { minHeight: 60, flexDirection: "row", alignItems: "center", justifyContent: "flex-start", backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SURFACE_HIGH, paddingVertical: 16, paddingStart: 16, paddingEnd: 8, borderRadius: require("_createForOfIteratorHelperLoose").radii.xs };
_createForOfIteratorHelperLoose.childContainer = obj3;
_createForOfIteratorHelperLoose.childContent = { flex: 1 };
_createForOfIteratorHelperLoose.childButtonText = { lineHeight: 20 };
_createForOfIteratorHelperLoose.debugText = { marginTop: 4, lineHeight: 16 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj2 = { marginBottom: 8, borderRadius: require("_createForOfIteratorHelperLoose").radii.xs };
let result = require("get ActivityIndicator").fileFinishedImporting("modules/in_app_reports/native/components/NodeView.tsx");

export default function NodeView(node) {
  let history;
  let onNavigate;
  let reportId;
  let reportSubType;
  const _require = node;
  let should_submit_data = _createForOfIteratorHelperLoose();
  let obj = _require(ref[21]);
  let navigation = obj.useNavigation();
  let obj1 = _require(ref[22]);
  const isScreenReaderEnabled = obj1.useIsScreenReaderEnabled();
  ref = node.useRef(null);
  let callback = node.useRef(false);
  let items = [navigation, isScreenReaderEnabled];
  const effect = node.useEffect(() => {
    function focusHeader() {
      if (!outer1_4.current) {
        outer1_4.current = true;
        let obj = callback(ref[23]);
        obj = { ref: outer1_3, delay: 300 };
        const result = obj.setAccessibilityFocus(obj);
      }
    }
    if (focusHeader) {
      let closure_0 = navigation.addListener("transitionEnd", (data) => {
        data = data.data;
        let closing;
        if (null != data) {
          closing = data.closing;
        }
        if (true !== closing) {
          focusHeader();
        }
      });
      const _setTimeout = setTimeout;
      navigation = setTimeout(focusHeader, 500);
      return () => {
        callback();
        clearTimeout(closure_1);
      };
    }
  }, items);
  node = node.node;
  const reportType = node.reportType;
  ({ reportSubType, history } = node);
  const nodeMap = node.nodeMap;
  const closeModal = node.closeModal;
  const onSubmit = node.onSubmit;
  ({ reportId, onNavigate } = node);
  let items1 = [reportType];
  const memo = node.useMemo(() => {
    let channel_id;
    if ("message" === reportType.name) {
      channel_id = reportType.record.channel_id;
    }
    return channel_id;
  }, items1);
  const tmp7 = getElementForType(node, "checkbox");
  const IN_APP_REPORTS_NODE = tmp7;
  const tmp8 = getElementForType(node, "text_line_resource");
  const tmp9 = getElementForType(node, "text");
  const REPORT_TO_MOD = _require(ref[24]).ReportMenuTypeSets.REPORT_TO_MOD;
  const hasItem = REPORT_TO_MOD.has(reportType.name);
  const tmp11 = callback(node.useState(false), 2);
  let first = tmp11[0];
  let closure_13 = tmp11[1];
  const tmp13 = callback(node.useState(false), 2);
  const first1 = tmp13[0];
  let closure_15 = tmp13[1];
  const tmp15 = callback(node.useState(() => ({})), 2);
  const first2 = tmp15[0];
  let closure_17 = tmp15[1];
  const tmp17 = callback(node.useState(false), 2);
  _createForOfIteratorHelperLoose = tmp17[1];
  const items2 = [node, tmp7, first2];
  callback = node.useCallback((destination) => {
    let obj = { nodeRef: node.id, destination };
    let tmp;
    if (null != tmp7) {
      obj = { name: tmp7.name, state: first2 };
      tmp = obj;
    }
    obj.multiSelect = tmp;
    return obj;
  }, items2);
  const items3 = [tmp7];
  const effect1 = node.useEffect(() => {
    let done;
    if (null != tmp7) {
      const data = tmp7.data;
      if (null != data) {
        function _loop(arg0, arg1) {
          let closure_0 = arg0;
          let closure_1 = arg1;
          if (true === closure_0) {
            outer1_17((arg0) => {
              const obj = {};
              const merged = Object.assign(arg0);
              obj[closure_0] = closure_1;
              return obj;
            });
          }
        }
        const tmp3 = callback(data);
        let iter = tmp3();
        if (!iter.done) {
          do {
            let tmp4 = callback;
            let tmp5 = callback(iter.value, 4);
            let tmp6 = tmp5[2];
            let closure_0 = tmp5[3];
            let _loopResult = _loop(tmp5[0], tmp5[1]);
            let iter2 = tmp3();
            iter = iter2;
            done = iter2.done;
          } while (!done);
        }
      }
    }
  }, items3);
  const items4 = [navigation, node];
  const effect2 = node.useEffect(() => navigation.addListener("beforeRemove", () => {
    if (null != outer1_0.onNavigate) {
      outer1_0.onNavigate("..");
    }
  }), items4);
  const items5 = [node.is_auto_submit, first1, onSubmit, node.id];
  const effect3 = node.useEffect(() => {
    let is_auto_submit = node.is_auto_submit;
    if (is_auto_submit) {
      is_auto_submit = !first1;
    }
    if (is_auto_submit) {
      lib(true);
      const obj = { nodeRef: node.id };
      const items = ["", node.id];
      obj.destination = items;
      onSubmit(obj);
    }
  }, items5);
  const items6 = [node, nodeMap, navigation, history, onNavigate, closeModal, reportType, callback];
  const callback1 = node.useCallback((arg0) => {
    const tmp2 = nodeMap[callback(undefined, arg0, 2)[1]];
    if (null == tmp2) {
      closeModal();
    } else {
      if (null != outer1_25(tmp2, "skip")) {
        const button = tmp2.button;
        let type;
        if (null != button) {
          type = button.type;
        }
        if ("next" === type) {
          const items = ["", tmp2.button.target];
          return callback1(items);
        }
      }
      if (reportType.name === node(ref[25]).ReportNames.MESSAGE) {
        let obj = navigation(ref[26]);
        obj = { message_id: reportType.record.id, content_type: reportType.name, report_sub_type: tmp2.report_type, current_node: node.id, next_node: tmp2.id };
        obj.trackWithMetadata(constants.IAR_NAVIGATE, obj);
      }
      obj = { node: tmp2 };
      const items1 = [];
      const arraySpreadResult = HermesBuiltin.arraySpread(history, 0);
      items1[arraySpreadResult] = tmp;
      const sum = arraySpreadResult + 1;
      obj.history = items1;
      navigation.push(closure_12, obj);
      if (null != onNavigate) {
        onNavigate(tmp2.key);
      }
    }
  }, items6);
  const items7 = [node, history, navigation];
  const effect4 = node.useEffect(() => {
    const button = node.button;
    let type;
    if (null != button) {
      type = button.type;
    }
    let tmp2 = "done" === type;
    if (!tmp2) {
      const button2 = node.button;
      let type1;
      if (null != button2) {
        type1 = button2.type;
      }
      tmp2 = "cancel" === type1;
    }
    if (!tmp2) {
      tmp2 = 0 === history.length;
    }
    if (tmp2) {
      const obj = { headerLeft: outer1_28 };
      navigation.setOptions(obj);
    }
  }, items7);
  const callback2 = node.useCallback((getChannelId) => {
    const channel = closeModal.getChannel(getChannelId.getChannelId());
    let tmp2 = null != channel;
    if (tmp2) {
      let result = channel.type !== first1.DM;
      if (result) {
        result = channel.type !== first1.GROUP_DM;
      }
      if (result) {
        const obj = { channelId: channel.id };
        result = onSubmit.canWithPartialContext(lib.MANAGE_MESSAGES, obj);
      }
      tmp2 = result;
    }
    return tmp2;
  }, []);
  let obj2 = _require(ref[28]);
  const iarReportSettingsUpsells = obj2.useIarReportSettingsUpsells(reportSubType);
  let tmp26 = null != getElementForType(node, "ignore_users");
  if (tmp26) {
    let tmp27 = "message" === reportType.name;
    if (!tmp27) {
      tmp27 = "first_dm" === reportType.name;
    }
    if (!tmp27) {
      tmp27 = "user" === reportType.name;
    }
    if (!tmp27) {
      tmp27 = "report_to_mod_message" === reportType.name;
    }
    tmp26 = tmp27;
  }
  let obj3 = _require(ref[29]);
  let userIsTeen = obj3.useUserIsTeen();
  let obj4 = _require(ref[30]);
  const activeLinkUsers = obj4.useActiveLinkUsers();
  if (userIsTeen) {
    userIsTeen = activeLinkUsers.length > 0;
  }
  if (userIsTeen) {
    userIsTeen = null != getElementForType(node, "share_with_parents");
  }
  obj = { style: should_submit_data.container, bottom: true, top: true };
  obj = { style: should_submit_data.scrollView };
  obj1 = { element: getElementForType(node, "success") };
  const items8 = [first2(navigation(ref[32]), obj1), first2(HeaderView, { node, headerRef: ref }), first2(InfoView, { node }), , , , , , , , , , , , , , , ];
  let tmp34 = null;
  if (null != tmp8) {
    obj2 = { element: tmp8 };
    tmp34 = first2(navigation(ref[33]), obj2);
  }
  items8[3] = tmp34;
  let tmp38 = null != tmp9;
  if (tmp38) {
    obj3 = { element: tmp9 };
    tmp38 = first2(navigation(ref[34]), obj3);
  }
  items8[4] = tmp38;
  let tmp42 = null;
  if (null != getElementForType(node, "message_preview")) {
    if ("message" !== reportType.name) {
      if ("first_dm" !== reportType.name) {
        tmp42 = null;
      }
    }
    obj4 = { message: reportType.record };
    tmp42 = first2(navigation(ref[35]), obj4);
  }
  items8[5] = tmp42;
  let tmp46 = null;
  if (null != getElementForType(node, "user_preview")) {
    tmp46 = null;
    if ("user" === reportType.name) {
      const obj5 = { user: reportType.record };
      tmp46 = first2(navigation(ref[36]), obj5);
    }
  }
  items8[6] = tmp46;
  let tmp50 = null;
  if (null != getElementForType(node, "widget_preview")) {
    tmp50 = null;
    if ("widget" === reportType.name) {
      ({ widget: obj13.widget, user_id: obj13.userId } = reportType);
      tmp50 = first2(navigation(ref[37]), {});
      const obj6 = {};
    }
  }
  items8[7] = tmp50;
  let tmp54 = null;
  if (null != getElementForType(node, "channel_preview")) {
    tmp54 = null;
    if ("stage_channel" === reportType.name) {
      const obj7 = { stageInstance: reportType.record };
      tmp54 = first2(navigation(ref[38]), obj7);
    }
  }
  items8[8] = tmp54;
  let tmp58 = null;
  if (null != getElementForType(node, "guild_preview")) {
    tmp58 = null;
    if ("guild" === reportType.name) {
      const obj8 = { guild: reportType.record };
      tmp58 = first2(navigation(ref[39]), obj8);
    }
  }
  items8[9] = tmp58;
  let tmp62 = null;
  if (null != getElementForType(node, "guild_scheduled_event_preview")) {
    tmp62 = null;
    if ("guild_scheduled_event" === reportType.name) {
      const obj9 = { event: reportType.record };
      tmp62 = first2(navigation(ref[40]), obj9);
    }
  }
  items8[10] = tmp62;
  let tmp66 = null;
  if (null != getElementForType(node, "guild_discovery_preview")) {
    tmp66 = null;
    if ("guild_discovery" === reportType.name) {
      const obj10 = { guild: reportType.record };
      tmp66 = first2(navigation(ref[41]), obj10);
    }
  }
  items8[11] = tmp66;
  const obj11 = {};
  const tmp30 = closure_17;
  const tmp31 = closure_17;
  const tmp32 = history;
  const tmp33 = navigation(ref[32]);
  obj11.element = getElementForType(node, "breadcrumbs");
  obj11.menuName = reportType.name;
  obj11.history = history;
  items8[12] = first2(navigation(ref[42]), obj11);
  let tmp72Result = hasAnyRemediationElement(node);
  if (tmp72Result) {
    const obj12 = {};
    if (!tmp26) {
      const items9 = [tmp26, , , , , ];
      if (userIsTeen) {
        const obj13 = { parents: activeLinkUsers };
        userIsTeen = first2(navigation(ref[45]), obj13);
      }
      items9[1] = userIsTeen;
      let tmp86 = null != getElementForType(node, "block_users");
      if (tmp86) {
        let tmp87 = "message" === reportType.name;
        if (!tmp87) {
          tmp87 = "first_dm" === reportType.name;
        }
        if (!tmp87) {
          tmp87 = "user" === reportType.name;
        }
        if (!tmp87) {
          tmp87 = "report_to_mod_message" === reportType.name;
        }
        tmp86 = tmp87;
      }
      if (!tmp86) {
        items9[2] = tmp86;
        let tmp93 = !tmp26;
        if (!tmp26) {
          tmp93 = null != getElementForType(node, "mute_users");
        }
        if (tmp93) {
          let tmp95 = "message" === reportType.name;
          if (!tmp95) {
            tmp95 = "first_dm" === reportType.name;
          }
          if (!tmp95) {
            tmp95 = "user" === reportType.name;
          }
          if (!tmp95) {
            tmp95 = "report_to_mod_message" === reportType.name;
          }
          tmp93 = tmp95;
        }
        if (!tmp93) {
          items9[3] = tmp93;
          should_submit_data = getElementForType;
          should_submit_data = null != getElementForType(node, "delete_message");
          if (should_submit_data) {
            should_submit_data = "message" === reportType.name;
            if (!should_submit_data) {
              should_submit_data = "report_to_mod_message" === reportType.name;
            }
          }
          if (should_submit_data) {
            should_submit_data = callback2(reportType.record);
          }
          if (should_submit_data) {
            should_submit_data = first2;
            should_submit_data = navigation;
            should_submit_data = ref;
            const obj14 = { message: reportType.record, reportId };
            should_submit_data = first2(navigation(ref[48]), obj14);
          }
          items9[4] = should_submit_data;
          should_submit_data = getElementForType;
          should_submit_data = null != getElementForType(node, "leave_guild");
          if (should_submit_data) {
            should_submit_data = "guild" === reportType.name;
          }
          if (should_submit_data) {
            should_submit_data = first2;
            should_submit_data = navigation;
            should_submit_data = ref;
            const obj15 = { guild: reportType.record, reportId, addCallback: node.addOnCloseCallback };
            should_submit_data = first2(navigation(ref[49]), obj15);
          }
          items9[5] = should_submit_data;
          obj12.children = items9;
          tmp72Result = tmp72(tmp75, obj12);
        } else {
          const obj16 = {};
          if ("user" === reportType.name) {
            let author3 = reportType.record;
          } else {
            author3 = reportType.record.author;
          }
          obj16.user = author3;
          obj16.channelId = memo;
          obj16.reportId = reportId;
          should_submit_data = first2(navigation(ref[47]), obj16);
          const tmp96 = first2;
          const tmp99 = navigation(ref[47]);
        }
      } else {
        const obj17 = {};
        if ("user" === reportType.name) {
          let author2 = reportType.record;
        } else {
          author2 = reportType.record.author;
        }
        obj17.user = author2;
        obj17.channelId = memo;
        obj17.reportId = reportId;
        first2(navigation(ref[46]), obj17);
        const tmp88 = first2;
        const tmp91 = navigation(ref[46]);
      }
    } else {
      const obj18 = {};
      if ("user" === reportType.name) {
        let author = reportType.record;
      } else {
        author = reportType.record.author;
      }
      obj18.user = author;
      obj18.channelId = memo;
      obj18.reportId = reportId;
      first2(navigation(ref[44]), obj18);
      const tmp77 = first2;
      const tmp80 = navigation(ref[44]);
    }
    tmp72 = closure_17;
  }
  items8[13] = tmp72Result;
  should_submit_data = null != getElementForType(node, "settings_upsells");
  if (should_submit_data) {
    should_submit_data = "message" === reportType.name;
    if (!should_submit_data) {
      should_submit_data = "report_to_mod_message" === reportType.name;
    }
  }
  if (should_submit_data) {
    should_submit_data = null != iarReportSettingsUpsells;
  }
  if (should_submit_data) {
    should_submit_data = first2;
    should_submit_data = navigation;
    should_submit_data = ref;
    const obj19 = { settingsUpsells: iarReportSettingsUpsells, channelId: reportType.record.channel_id, reportId, reportType, reportSubType };
    should_submit_data = first2(navigation(ref[50]), obj19);
  }
  items8[14] = should_submit_data;
  items8[15] = first2(navigation(ref[51]), {
    element: tmp7,
    state: first2,
    onPress(arg0, arg1) {
      const obj = {};
      const merged = Object.assign(first2);
      if (arg0 in first2) {
        delete tmp2[tmp];
      } else {
        obj[arg0] = arg1;
      }
      callback2(obj);
    }
  });
  items8[16] = first2(ChildrenView, { node, onSelectChild: callback1, nodeMap });
  should_submit_data = null;
  if (null != getElementForType(node, "external_link")) {
    should_submit_data = first2;
    should_submit_data = navigation;
    should_submit_data = ref;
    const obj21 = {};
    should_submit_data = getElementsForType;
    should_submit_data = navigation(ref[52]);
    obj21.elements = getElementsForType(node, "external_link");
    should_submit_data = first2(should_submit_data, obj21);
  }
  items8[17] = should_submit_data;
  obj.children = items8;
  const items10 = [tmp31(tmp32, obj), ];
  should_submit_data = first2;
  const obj22 = { isModeratorReport: hasItem };
  should_submit_data = navigation(ref[53]);
  if (!first) {
    should_submit_data = undefined;
    if (null != tmp7) {
      should_submit_data = tmp7.should_submit_data;
    }
    should_submit_data = true === should_submit_data;
    if (should_submit_data) {
      should_submit_data = globalThis;
      const _Object = Object;
      should_submit_data = 0 === Object.keys(first2).length;
    }
    first = should_submit_data;
  }
  obj22.disabled = first;
  obj22.button = node.button;
  obj22.hasError = tmp17[0];
  obj22.onPress = function onPress(type) {
    type = type.type;
    if ("done" !== type) {
      if ("cancel" !== type) {
        if ("next" === type) {
          let items = ["", type.target];
          callback1(items);
        } else if ("submit" === type) {
          (function handleSubmit() {
            outer1_13(true);
            const items = ["", outer1_0.successNodeId];
            const promise = outer1_10(outer1_19(items));
            const nextPromise = outer1_10(outer1_19(items)).then(() => {
              outer2_18(false);
              let header;
              if (null != outer2_8[outer2_0.successNodeId]) {
                header = tmp2.header;
              }
              if (null != header) {
                const AccessibilityAnnouncer = items(ref[27]).AccessibilityAnnouncer;
                AccessibilityAnnouncer.announce(tmp2.header);
              }
              outer2_20(items);
            });
            outer1_10(outer1_19(items)).then(() => {
              outer2_18(false);
              let header;
              if (null != outer2_8[outer2_0.successNodeId]) {
                header = tmp2.header;
              }
              if (null != header) {
                const AccessibilityAnnouncer = items(ref[27]).AccessibilityAnnouncer;
                AccessibilityAnnouncer.announce(tmp2.header);
              }
              outer2_20(items);
            }).catch(() => {
              outer2_18(true);
            }).finally(() => {
              outer2_13(false);
            });
          })();
        }
      }
    }
    const items1 = ["", -1];
    callback1(items1);
  };
  items10[1] = should_submit_data(should_submit_data, obj22);
  obj.children = items10;
  return tmp30(_require(ref[31]).SafeAreaPaddingView, obj);
};
