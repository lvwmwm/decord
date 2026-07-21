// Module ID: 7602
// Function ID: 60925
// Name: _createForOfIteratorHelperLoose
// Dependencies: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
// Exports: default

// Module 7602 (_createForOfIteratorHelperLoose)
import closure_4 from "result";
import closure_5 from "result";
import result from "result";
import closure_8 from "result";
import closure_9 from "result";
import closure_10 from "result";
import { REMEDIATION_ELEMENT_TYPES } from "result";
import { IN_APP_REPORTS_NODE } from "result";
import result from "result";
import { Permissions } from "result";
import result from "result";
import result from "result";
import result from "result";

function _createForOfIteratorHelperLoose(@@iterator) {
  let arg1 = Symbol_iterator;
  @@iterator = "undefined" !== typeof Symbol;
  if (Symbol_iterator) {
    const _Symbol = Symbol;
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (!Symbol_iterator) {
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (Symbol_iterator) {
    const iter = Symbol_iterator.call(Symbol_iterator);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = Symbol_iterator;
    if (!Array.isArray(Symbol_iterator)) {
      let tmp2;
      if (Symbol_iterator) {
        if ("string" === typeof Symbol_iterator) {
          tmp2 = _arrayLikeToArray(Symbol_iterator, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(Symbol_iterator).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = Symbol_iterator.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(Symbol_iterator, undefined);
              } else {
                const obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(Symbol_iterator);
          const callResult = toString.call(Symbol_iterator);
          const tmp3 = "Object" === substr && Symbol_iterator.constructor;
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
      arg1 = tmp;
    }
    let closure_1 = 0;
    return () => {
      if (closure_1 >= tmp.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = tmp[+closure_1];
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
  const tmp = result();
  let obj = { style: tmp.headerContainer };
  let tmp5 = null != header;
  if (tmp5) {
    tmp5 = "" !== header;
  }
  if (tmp5) {
    obj = { ref: node.headerRef, style: tmp.header, children: header };
    tmp5 = callback2(arg1(dependencyMap[15]).Text, obj);
  }
  const items = [tmp5, , ];
  let tmp9 = null;
  if (null != subheader) {
    tmp9 = null;
    if (subheader.length > 0) {
      obj = { style: tmp.subheader, children: tmp2(subheader) };
      tmp9 = callback2(arg1(dependencyMap[15]).Text, obj);
    }
  }
  items[1] = tmp9;
  let tmp13 = null;
  if (null != description) {
    tmp13 = null;
    if (description.length > 0) {
      const obj1 = { delete: "a", dispatch: "isArray", raw: "textAlign", style: tmp.description, children: description };
      tmp13 = callback2(arg1(dependencyMap[15]).Text, obj1);
    }
  }
  items[2] = tmp13;
  obj.children = items;
  return closure_17(closure_6, obj);
}
function InfoView(node) {
  const info = node.node.info;
  const tmp = result();
  let tmp3 = null;
  if (null != info) {
    let obj = {};
    const items = [tmp.infoBox, ];
    obj = { backgroundColor: arg1(dependencyMap[16]).hexWithOpacity(tmp.infoBox.backgroundColor, 0.1) };
    items[1] = obj;
    obj.style = items;
    obj = { size: "md", color: tmp.infoBox.backgroundColor };
    const items1 = [callback2(arg1(dependencyMap[17]).CircleInformationIcon, obj), ];
    const obj1 = { delete: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001191393554252316, dispatch: 557056.0015292466, raw: 1112527108802911800000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, style: tmp.infoBoxText, children: tmp2(info) };
    items1[1] = callback2(arg1(dependencyMap[15]).Text, obj1);
    obj.children = items1;
    tmp3 = callback3(closure_6, obj);
    const obj3 = arg1(dependencyMap[16]);
  }
  return tmp3;
}
function ChildItem(child) {
  let tmp4;
  let tmp5;
  child = child.child;
  const arg1 = child;
  let obj = Object.create(null);
  obj.child = 0;
  obj.nodeMap = 0;
  const importDefault = Object.assign(child, obj);
  const tmp2 = result();
  [tmp4, tmp5] = callback(child, 2);
  obj = arg1(dependencyMap[18]);
  const items = [closure_8];
  let stateFromStores = obj.useStateFromStores(items, () => closure_8.get("iar_show_report_sub_type_labels"));
  if (null != child.nodeMap[tmp5]) {
    const report_type = tmp7.report_type;
  }
  obj = { style: tmp2.childButton, accessibilityRole: "button", onPress: callback(React.useState(() => () => closure_1.onPress(closure_0)), 1)[0] };
  const obj1 = { style: tmp2.childContainer };
  const obj2 = { style: tmp2.childContent };
  const obj3 = { delete: null, dispatch: null, raw: null, style: tmp2.childButtonText, children: tmp4 };
  const items1 = [callback2(arg1(dependencyMap[15]).Text, obj3), ];
  if (stateFromStores) {
    stateFromStores = null != report_type;
  }
  if (stateFromStores) {
    const obj4 = { delete: null, dispatch: null, raw: null, style: tmp2.debugText, children: report_type };
    stateFromStores = callback2(arg1(dependencyMap[15]).Text, obj4);
  }
  items1[1] = stateFromStores;
  obj2.children = items1;
  const items2 = [closure_17(closure_6, obj2), callback2(importDefault(dependencyMap[20]), {})];
  obj1.children = items2;
  obj.children = closure_17(closure_6, obj1);
  return callback2(arg1(dependencyMap[19]).PressableHighlight, obj);
}
function ChildrenView(node) {
  const children = node.node.children;
  ({ onSelectChild: closure_0, nodeMap: closure_1 } = node);
  let tmp2 = null;
  if (null != children) {
    tmp2 = null;
    if (0 !== children.length) {
      const obj = {
        style: tmp.childrenContainer,
        children: children.map((child) => {
              const tmp = callback(child, 2);
              return callback2(closure_23, { child, nodeMap: closure_1, onPress: closure_0 }, "" + tmp[0] + "+" + tmp[1]);
            })
      };
      tmp2 = callback2(closure_6, obj);
    }
  }
  return tmp2;
}
function getElementForType(node, block_users) {
  const elements = node.elements;
  return elements.find((type) => type.type === arg1);
}
function getElementsForType(node, external_link) {
  const elements = node.elements;
  let closure_0 = "external_link";
  return elements.filter((type) => type.type === closure_0);
}
function hasAnyRemediationElement(node) {
  const elements = node.elements;
  return elements.some((type) => closure_11.includes(type.type));
}
function NullComponent() {
  return null;
}
({ View: closure_6, ScrollView: closure_7 } = result);
({ AnalyticEvents: closure_13, ChannelTypes: closure_14 } = result);
({ jsx: closure_16, jsxs: closure_17 } = result);
result = {};
result = { backgroundColor: require("result").colors.BACKGROUND_BASE_LOWER };
result.container = result;
result.scrollView = { duration: true, dampingRatio: true, stiffness: true };
result.childrenContainer = { "Bool(true)": false, "Bool(true)": false, "Bool(true)": false };
result.headerContainer = { 0: "<string:1908422942>", 0: "a", 0: "<string:37392705>" };
result.header = { "Null": null, "Null": null };
result.subheader = { hour: "<string:410124289>", minute: "<string:402653184>", second: "<string:16777216>" };
result.description = {};
const obj1 = { 1895788287: 32, 1962898175: 32, 2046785279: "flex-start", 2080340735: "center", 2113895679: "flex", -2097184513: "row", -2030074625: 10, -2113961985: 8, -2046852097: 56, backgroundColor: require("result").unsafe_rawColors.BLUE_345, borderRadius: require("result").radii.xs, borderColor: require("result").unsafe_rawColors.BLUE_345 };
result.infoBox = obj1;
result.infoBoxText = {};
result.childButton = { marginBottom: 8, borderRadius: require("result").radii.xs };
const obj2 = { marginBottom: 8, borderRadius: require("result").radii.xs };
result.childContainer = { backgroundColor: require("result").colors.BACKGROUND_SURFACE_HIGH, borderRadius: require("result").radii.xs };
result.childContent = { flex: 1 };
result.childButtonText = { lineHeight: 20 };
result.debugText = {};
result = result.createStyles(result);
result = result.fileFinishedImporting("modules/in_app_reports/native/components/NodeView.tsx");

export default function NodeView(node) {
  let history;
  let onNavigate;
  let reportId;
  let reportSubType;
  const arg1 = node;
  let should_submit_data = callback4();
  let obj = arg1(dependencyMap[21]);
  const navigation = obj.useNavigation();
  const importDefault = navigation;
  let obj1 = arg1(dependencyMap[22]);
  const isScreenReaderEnabled = obj1.useIsScreenReaderEnabled();
  const importAll = isScreenReaderEnabled;
  const ref = React.useRef(null);
  const dependencyMap = ref;
  let callback = React.useRef(false);
  const items = [navigation, isScreenReaderEnabled];
  const effect = React.useEffect(() => {
    function focusHeader() {
      if (!ref.current) {
        ref.current = true;
        let obj = callback(closure_3[23]);
        obj = { ref: closure_3, delay: 300 };
        const result = obj.setAccessibilityFocus(obj);
      }
    }
    const isScreenReaderEnabled = focusHeader;
    if (isScreenReaderEnabled) {
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
      const navigation = setTimeout(focusHeader, 500);
      return () => {
        callback();
        clearTimeout(closure_1);
      };
    }
  }, items);
  node = node.node;
  const React = node;
  const reportType = node.reportType;
  ({ reportSubType, history } = node);
  const nodeMap = node.nodeMap;
  let closure_8 = nodeMap;
  const closeModal = node.closeModal;
  let closure_9 = closeModal;
  const onSubmit = node.onSubmit;
  let closure_10 = onSubmit;
  ({ reportId, onNavigate } = node);
  const REMEDIATION_ELEMENT_TYPES = onNavigate;
  const items1 = [reportType];
  const memo = React.useMemo(() => {
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
  const REPORT_TO_MOD = arg1(dependencyMap[24]).ReportMenuTypeSets.REPORT_TO_MOD;
  const hasItem = REPORT_TO_MOD.has(reportType.name);
  const tmp11 = callback(React.useState(false), 2);
  let first = tmp11[0];
  let closure_13 = tmp11[1];
  const tmp13 = callback(React.useState(false), 2);
  const first1 = tmp13[0];
  let closure_15 = tmp13[1];
  const tmp15 = callback(React.useState(() => ({})), 2);
  const first2 = tmp15[0];
  let closure_17 = tmp15[1];
  const tmp17 = callback(React.useState(false), 2);
  const callback4 = tmp17[1];
  const items2 = [node, tmp7, first2];
  callback = React.useCallback((destination) => {
    let obj = { nodeRef: node.id, destination };
    let tmp;
    if (null != tmp7) {
      obj = { name: tmp7.name, state: first2 };
      tmp = obj;
    }
    obj.multiSelect = tmp;
    return obj;
  }, items2);
  const _createForOfIteratorHelperLoose = callback;
  const items3 = [tmp7];
  const effect1 = React.useEffect(() => {
    let done;
    if (null != tmp7) {
      const data = tmp7.data;
      if (null != data) {
        function _loop(arg0, arg1) {
          if (true === arg0) {
            callback((arg0) => {
              const obj = {};
              const merged = Object.assign(arg0);
              obj[arg0] = arg1;
              return obj;
            });
          }
        }
        const tmp3 = callback(data);
        let iter = tmp3();
        if (!iter.done) {
          do {
            let tmp4 = closure_4;
            let tmp5 = closure_4(iter.value, 4);
            let tmp6 = tmp5[2];
            closure_0 = tmp5[3];
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
  const effect2 = React.useEffect(() => navigation.addListener("beforeRemove", () => {
    if (null != closure_0.onNavigate) {
      closure_0.onNavigate("..");
    }
  }), items4);
  const items5 = [node.is_auto_submit, first1, onSubmit, node.id];
  const effect3 = React.useEffect(() => {
    let is_auto_submit = node.is_auto_submit;
    if (is_auto_submit) {
      is_auto_submit = !first1;
    }
    if (is_auto_submit) {
      lib(true);
      const obj = { nodeRef: node.id };
      const items = ["<string:2246337460>", node.id];
      obj.destination = items;
      onSubmit(obj);
    }
  }, items5);
  const items6 = [node, nodeMap, navigation, history, onNavigate, closeModal, reportType, callback];
  const callback1 = React.useCallback((arg0) => {
    if (null == nodeMap[closure_4(undefined, arg0, 2)[1]]) {
      closeModal();
    } else {
      if (null != callback2(tmp2, "skip")) {
        const button = tmp2.button;
        let type;
        if (null != button) {
          type = button.type;
        }
        if ("next" === type) {
          const items = ["<string:2246337460>", tmp2.button.target];
          return callback1(items);
        }
      }
      if (reportType.name === arg0(ref[25]).ReportNames.MESSAGE) {
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
      navigation.push(tmp7, obj);
      if (null != onNavigate) {
        onNavigate(tmp2.key);
      }
    }
  }, items6);
  const _arrayLikeToArray = callback1;
  const items7 = [node, history, navigation];
  const effect4 = React.useEffect(() => {
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
      const obj = { headerLeft: closure_28 };
      navigation.setOptions(obj);
    }
  }, items7);
  const callback2 = React.useCallback((getChannelId) => {
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
  let obj2 = arg1(dependencyMap[28]);
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
  let obj3 = arg1(dependencyMap[29]);
  let userIsTeen = obj3.useUserIsTeen();
  let obj4 = arg1(dependencyMap[30]);
  const activeLinkUsers = obj4.useActiveLinkUsers();
  if (userIsTeen) {
    userIsTeen = activeLinkUsers.length > 0;
  }
  if (userIsTeen) {
    userIsTeen = null != getElementForType(node, "share_with_parents");
  }
  obj = { sections: null, count: null, countMessages: null, style: should_submit_data.container };
  obj = { style: should_submit_data.scrollView };
  obj1 = { element: getElementForType(node, "success") };
  const items8 = [first2(importDefault(dependencyMap[32]), obj1), first2(HeaderView, { node, headerRef: ref }), first2(InfoView, { node }), , , , , , , , , , , , , , ];
  let tmp34 = null;
  if (null != tmp8) {
    obj2 = { element: tmp8 };
    tmp34 = first2(importDefault(dependencyMap[33]), obj2);
  }
  items8[3] = tmp34;
  let tmp38 = null != tmp9;
  if (tmp38) {
    obj3 = { element: tmp9 };
    tmp38 = first2(importDefault(dependencyMap[34]), obj3);
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
    tmp42 = first2(importDefault(dependencyMap[35]), obj4);
  }
  items8[5] = tmp42;
  let tmp46 = null;
  if (null != getElementForType(node, "user_preview")) {
    tmp46 = null;
    if ("user" === reportType.name) {
      const obj5 = { user: reportType.record };
      tmp46 = first2(importDefault(dependencyMap[36]), obj5);
    }
  }
  items8[6] = tmp46;
  let tmp50 = null;
  if (null != getElementForType(node, "channel_preview")) {
    tmp50 = null;
    if ("stage_channel" === reportType.name) {
      const obj6 = { stageInstance: reportType.record };
      tmp50 = first2(importDefault(dependencyMap[37]), obj6);
    }
  }
  items8[7] = tmp50;
  let tmp54 = null;
  if (null != getElementForType(node, "guild_preview")) {
    tmp54 = null;
    if ("guild" === reportType.name) {
      const obj7 = { guild: reportType.record };
      tmp54 = first2(importDefault(dependencyMap[38]), obj7);
    }
  }
  items8[8] = tmp54;
  let tmp58 = null;
  if (null != getElementForType(node, "guild_scheduled_event_preview")) {
    tmp58 = null;
    if ("guild_scheduled_event" === reportType.name) {
      const obj8 = { event: reportType.record };
      tmp58 = first2(importDefault(dependencyMap[39]), obj8);
    }
  }
  items8[9] = tmp58;
  let tmp62 = null;
  if (null != getElementForType(node, "guild_discovery_preview")) {
    tmp62 = null;
    if ("guild_discovery" === reportType.name) {
      const obj9 = { guild: reportType.record };
      tmp62 = first2(importDefault(dependencyMap[40]), obj9);
    }
  }
  items8[10] = tmp62;
  const obj10 = {};
  const tmp30 = closure_17;
  const tmp31 = closure_17;
  const tmp32 = history;
  const tmp33 = importDefault(dependencyMap[32]);
  obj10.element = getElementForType(node, "breadcrumbs");
  obj10.menuName = reportType.name;
  obj10.history = history;
  items8[11] = first2(importDefault(dependencyMap[41]), obj10);
  let tmp68Result = hasAnyRemediationElement(node);
  if (tmp68Result) {
    const obj11 = {};
    if (!tmp26) {
      const items9 = [tmp26, , , , , ];
      if (userIsTeen) {
        const obj12 = { parents: activeLinkUsers };
        userIsTeen = first2(importDefault(dependencyMap[44]), obj12);
      }
      items9[1] = userIsTeen;
      let tmp82 = null != getElementForType(node, "block_users");
      if (tmp82) {
        let tmp83 = "message" === reportType.name;
        if (!tmp83) {
          tmp83 = "first_dm" === reportType.name;
        }
        if (!tmp83) {
          tmp83 = "user" === reportType.name;
        }
        if (!tmp83) {
          tmp83 = "report_to_mod_message" === reportType.name;
        }
        tmp82 = tmp83;
      }
      if (!tmp82) {
        items9[2] = tmp82;
        let tmp89 = !tmp26;
        if (!tmp26) {
          tmp89 = null != getElementForType(node, "mute_users");
        }
        if (tmp89) {
          let tmp91 = "message" === reportType.name;
          if (!tmp91) {
            tmp91 = "first_dm" === reportType.name;
          }
          if (!tmp91) {
            tmp91 = "user" === reportType.name;
          }
          if (!tmp91) {
            tmp91 = "report_to_mod_message" === reportType.name;
          }
          tmp89 = tmp91;
        }
        if (!tmp89) {
          items9[3] = tmp89;
          let callback2Result = null != getElementForType(node, "delete_message");
          if (callback2Result) {
            let tmp99 = "message" === reportType.name;
            if (!tmp99) {
              tmp99 = "report_to_mod_message" === reportType.name;
            }
            callback2Result = tmp99;
          }
          if (callback2Result) {
            callback2Result = callback2(reportType.record);
          }
          if (callback2Result) {
            should_submit_data = first2;
            should_submit_data = importDefault;
            should_submit_data = dependencyMap;
            const obj13 = { message: reportType.record, reportId };
            callback2Result = first2(importDefault(dependencyMap[47]), obj13);
          }
          items9[4] = callback2Result;
          should_submit_data = getElementForType;
          should_submit_data = null != getElementForType(node, "leave_guild");
          if (should_submit_data) {
            should_submit_data = "guild" === reportType.name;
          }
          if (should_submit_data) {
            should_submit_data = first2;
            should_submit_data = importDefault;
            should_submit_data = dependencyMap;
            const obj14 = { guild: reportType.record, reportId, addCallback: node.addOnCloseCallback };
            should_submit_data = first2(importDefault(dependencyMap[48]), obj14);
          }
          items9[5] = should_submit_data;
          obj11.children = items9;
          tmp68Result = tmp68(tmp71, obj11);
        } else {
          const obj15 = {};
          if ("user" === reportType.name) {
            let author3 = reportType.record;
          } else {
            author3 = reportType.record.author;
          }
          obj15.user = author3;
          obj15.channelId = memo;
          obj15.reportId = reportId;
          first2(importDefault(dependencyMap[46]), obj15);
          const tmp92 = first2;
          const tmp95 = importDefault(dependencyMap[46]);
        }
      } else {
        const obj16 = {};
        if ("user" === reportType.name) {
          let author2 = reportType.record;
        } else {
          author2 = reportType.record.author;
        }
        obj16.user = author2;
        obj16.channelId = memo;
        obj16.reportId = reportId;
        first2(importDefault(dependencyMap[45]), obj16);
        const tmp84 = first2;
        const tmp87 = importDefault(dependencyMap[45]);
      }
    } else {
      const obj17 = {};
      if ("user" === reportType.name) {
        let author = reportType.record;
      } else {
        author = reportType.record.author;
      }
      obj17.user = author;
      obj17.channelId = memo;
      obj17.reportId = reportId;
      first2(importDefault(dependencyMap[43]), obj17);
      const tmp73 = first2;
      const tmp76 = importDefault(dependencyMap[43]);
    }
    const tmp68 = closure_17;
  }
  items8[12] = tmp68Result;
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
    should_submit_data = importDefault;
    should_submit_data = dependencyMap;
    const obj18 = { settingsUpsells: iarReportSettingsUpsells, channelId: reportType.record.channel_id, reportId, reportType, reportSubType };
    should_submit_data = first2(importDefault(dependencyMap[49]), obj18);
  }
  items8[13] = should_submit_data;
  items8[14] = first2(importDefault(dependencyMap[50]), {
    element: tmp7,
    state: first2,
    onPress(arg0, arg1) {
      const obj = {};
      const merged = Object.assign(first2);
      if (arg0 in first2) {
        delete r2[r1];
      } else {
        obj[arg0] = arg1;
      }
      callback(obj);
    }
  });
  items8[15] = first2(ChildrenView, { node, onSelectChild: callback1, nodeMap });
  should_submit_data = null;
  if (null != getElementForType(node, "external_link")) {
    should_submit_data = first2;
    should_submit_data = importDefault;
    should_submit_data = dependencyMap;
    const obj20 = {};
    should_submit_data = getElementsForType;
    should_submit_data = importDefault(dependencyMap[51]);
    obj20.elements = getElementsForType(node, "external_link");
    should_submit_data = first2(should_submit_data, obj20);
  }
  items8[16] = should_submit_data;
  obj.children = items8;
  const items10 = [tmp31(tmp32, obj), ];
  should_submit_data = first2;
  const obj21 = { isModeratorReport: hasItem };
  should_submit_data = importDefault(dependencyMap[52]);
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
  obj21.disabled = first;
  obj21.button = node.button;
  obj21.hasError = tmp17[0];
  obj21.onPress = function onPress(type) {
    type = type.type;
    if ("done" !== type) {
      if ("cancel" !== type) {
        if ("next" === type) {
          const items = ["<string:2246337460>", type.target];
          callback1(items);
        } else if ("submit" === type) {
          function handleSubmit() {
            callback2(true);
            const items = ["<string:2246337460>"];
            items[1] = items.successNodeId;
            const promise = callback(callback3(items));
            const nextPromise = callback(callback3(items)).then(() => {
              callback2(false);
              let header;
              if (null != closure_8[closure_0.successNodeId]) {
                header = tmp2.header;
              }
              if (null != header) {
                const AccessibilityAnnouncer = items(closure_3[27]).AccessibilityAnnouncer;
                AccessibilityAnnouncer.announce(tmp2.header);
              }
              callback3(items);
            });
            callback(callback3(items)).then(() => {
              callback2(false);
              let header;
              if (null != closure_8[closure_0.successNodeId]) {
                header = tmp2.header;
              }
              if (null != header) {
                const AccessibilityAnnouncer = items(closure_3[27]).AccessibilityAnnouncer;
                AccessibilityAnnouncer.announce(tmp2.header);
              }
              callback3(items);
            }).catch(() => {
              callback2(true);
            }).finally(() => {
              callback(false);
            });
          }();
        }
      }
    }
    const items1 = ["<string:2246337460>", -1];
    callback1(items1);
  };
  items10[1] = should_submit_data(should_submit_data, obj21);
  obj.children = items10;
  return tmp30(arg1(dependencyMap[31]).SafeAreaPaddingView, obj);
};
