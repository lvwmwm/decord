// Module ID: 9019
// Function ID: 70951
// Name: styles
// Dependencies: [5, 57, 31, 27, 1352, 3767, 1849, 33, 4130, 689, 4098, 8382, 1934, 1212, 4320, 8961, 4126, 1273, 7495, 2]
// Exports: default

// Module 9019 (styles)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import _slicedToArray from "_slicedToArray";
import result from "result";
import { View } from "get ActivityIndicator";
import { createChannelRecord } from "_callSuper";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_11;
const require = arg1;
({ jsx: closure_10, jsxs: closure_11 } = jsxProd);
_createForOfIteratorHelperLoose = { selectorGroup: { flexDirection: "column", gap: 8 } };
_createForOfIteratorHelperLoose = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOWER, borderRadius: require("_createForOfIteratorHelperLoose").radii.xs };
_createForOfIteratorHelperLoose.select = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.label = { color: require("_createForOfIteratorHelperLoose").colors.TEXT_SUBTLE, fontWeight: "500" };
let obj1 = { color: require("_createForOfIteratorHelperLoose").colors.TEXT_SUBTLE, fontWeight: "500" };
_createForOfIteratorHelperLoose.error = { color: require("_createForOfIteratorHelperLoose").unsafe_rawColors.RED_400 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj2 = { color: require("_createForOfIteratorHelperLoose").unsafe_rawColors.RED_400 };
const result = require("result").fileFinishedImporting("modules/oauth2/native/WebhookGuildChannelSelector.tsx");

export default function WebhookGuildChannelSelector(selectedGuildId) {
  selectedGuildId = selectedGuildId.selectedGuildId;
  const selectedChannelId = selectedGuildId.selectedChannelId;
  const onChannelChange = selectedGuildId.onChannelChange;
  const error = selectedGuildId.error;
  let tmp = _createForOfIteratorHelperLoose();
  const tmp2 = callback(React.useState(null), 2);
  const first = tmp2[0];
  callback = tmp2[1];
  React = React.useRef(false);
  const items = [first, onChannelChange, selectedChannelId, selectedGuildId];
  const items1 = [onChannelChange, selectedGuildId];
  callback = React.useCallback(() => {
    let tmp = null != first;
    if (tmp) {
      tmp = first.guildId === selectedGuildId;
    }
    if (tmp) {
      let tmp6;
      let obj = selectedChannelId(onChannelChange[10]);
      obj = {};
      const intl = selectedGuildId(onChannelChange[13]).intl;
      obj.title = intl.string(selectedGuildId(onChannelChange[13]).t["Re/64R"]);
      const channels = first.channels;
      obj.items = channels.map((id) => {
        const obj = { label: selectedGuildId(onChannelChange[14]).computeChannelName(outer2_7(id), outer2_9, outer2_8), value: id.id };
        return obj;
      });
      obj.onItemSelect = function onItemSelect(arg0) {
        outer1_2(arg0);
        selectedChannelId(onChannelChange[10]).hideActionSheet("WebhookGuildChannelSelector");
      };
      if (null != selectedChannelId) {
        tmp6 = selectedChannelId;
      }
      obj.selectedItem = tmp6;
      obj.hasIcons = false;
      obj.openLazy(selectedGuildId(onChannelChange[12])(onChannelChange[11], onChannelChange.paths), "WebhookGuildChannelSelector", obj);
      const tmp8 = selectedGuildId(onChannelChange[12])(onChannelChange[11], onChannelChange.paths);
    }
  }, items);
  const effect = React.useEffect(() => {
    function _updateChannels() {
      // CreateGeneratorClosureLongIndex (0x67)
      const obj = first(tmp);
      return obj(...arguments);
    }
    callback(null);
    if (null == _updateChannels) {
      onChannelChange(null);
    } else {
      (function updateChannels(_updateChannels) {
        return _updateChannels(...arguments);
      })(_updateChannels);
    }
  }, items1);
  const items2 = [first, onChannelChange, selectedChannelId, selectedGuildId];
  const effect1 = React.useEffect(() => {
    if (ref.current) {
      if (null == first) {
        if (null != selectedChannelId) {
          onChannelChange(null);
        }
      } else {
        const channels = first.channels;
        if (!channels.some((id) => id.id === outer1_1)) {
          onChannelChange(null);
        }
      }
    }
  }, items2);
  if (null == selectedGuildId) {
    return null;
  } else {
    let found;
    if (null != first) {
      let channels = first.channels;
      found = channels.find((id) => id.id === selectedChannelId);
    }
    let obj = { style: tmp.selectorGroup };
    obj = { variant: "eyebrow", color: "text-default" };
    let intl = selectedGuildId(onChannelChange[13]).intl;
    obj.children = intl.string(selectedGuildId(onChannelChange[13]).t["8qKd+J"]);
    const items3 = [callback2(selectedGuildId(onChannelChange[16]).Text, obj), , , ];
    let tmp13 = null;
    if (null != error) {
      tmp13 = null;
      if ("" !== error) {
        obj = { style: tmp.error, children: error };
        tmp13 = callback2(selectedGuildId(onChannelChange[17]).LegacyText, obj);
      }
    }
    items3[1] = tmp13;
    const obj1 = {};
    let name;
    if (null != found) {
      name = found.name;
    }
    if (null == name) {
      const intl2 = selectedGuildId(onChannelChange[13]).intl;
      name = intl2.string(selectedGuildId(onChannelChange[13]).t["Re/64R"]);
    }
    obj1.label = name;
    obj1.disabled = null == selectedGuildId;
    obj1.trailing = callback2(selectedGuildId(onChannelChange[18]).FormRow.Arrow, {});
    obj1.DEPRECATED_style = tmp.select;
    obj1.onPress = callback;
    items3[2] = callback2(selectedGuildId(onChannelChange[18]).FormRow, obj1);
    const obj2 = { style: tmp.label };
    const intl3 = selectedGuildId(onChannelChange[13]).intl;
    obj2.children = intl3.string(selectedGuildId(onChannelChange[13]).t.kQXMfN);
    items3[3] = callback2(selectedGuildId(onChannelChange[17]).LegacyText, obj2);
    obj.children = items3;
    return closure_11(View, obj);
  }
};
export const useStyles = _createForOfIteratorHelperLoose;
