// Module ID: 9011
// Function ID: 70886
// Name: styles
// Dependencies: []
// Exports: default

// Module 9011 (styles)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importAll(dependencyMap[2]);
const View = arg1(dependencyMap[3]).View;
const createChannelRecord = arg1(dependencyMap[4]).createChannelRecord;
let closure_8 = importDefault(dependencyMap[5]);
let closure_9 = importDefault(dependencyMap[6]);
({ jsx: closure_10, jsxs: closure_11 } = arg1(dependencyMap[7]));
let obj = arg1(dependencyMap[8]);
obj = { selectorGroup: { stiffness: null, damping: null } };
obj = { backgroundColor: importDefault(dependencyMap[9]).colors.BACKGROUND_BASE_LOWER, borderRadius: importDefault(dependencyMap[9]).radii.xs };
obj.select = obj;
const tmp2 = arg1(dependencyMap[7]);
obj.label = { color: importDefault(dependencyMap[9]).colors.TEXT_SUBTLE, fontWeight: "500" };
const obj1 = { color: importDefault(dependencyMap[9]).colors.TEXT_SUBTLE, fontWeight: "500" };
obj.error = { color: importDefault(dependencyMap[9]).unsafe_rawColors.RED_400 };
const styles = obj.createStyles(obj);
const obj2 = { color: importDefault(dependencyMap[9]).unsafe_rawColors.RED_400 };
const result = arg1(dependencyMap[19]).fileFinishedImporting("modules/oauth2/native/WebhookGuildChannelSelector.tsx");

export default function WebhookGuildChannelSelector(selectedGuildId) {
  selectedGuildId = selectedGuildId.selectedGuildId;
  const arg1 = selectedGuildId;
  const selectedChannelId = selectedGuildId.selectedChannelId;
  const importDefault = selectedChannelId;
  const onChannelChange = selectedGuildId.onChannelChange;
  const dependencyMap = onChannelChange;
  const error = selectedGuildId.error;
  const tmp = styles();
  const tmp2 = callback(React.useState(null), 2);
  const first = tmp2[0];
  let closure_3 = first;
  let callback = tmp2[1];
  const React = React.useRef(false);
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
      obj.title = intl.string(selectedGuildId(onChannelChange[13]).t.Re/64R);
      const channels = first.channels;
      obj.items = channels.map((id) => {
        const obj = { label: callback(closure_2[14]).computeChannelName(callback4(id), closure_9, closure_8), value: id.id };
        return obj;
      });
      obj.onItemSelect = function onItemSelect(arg0) {
        callback3(arg0);
        callback2(callback3[10]).hideActionSheet("WebhookGuildChannelSelector");
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
      const obj = callback(tmp);
      const _updateChannels = obj;
      return obj(...arguments);
    }
    callback(null);
    if (null == _updateChannels) {
      onChannelChange(null);
    } else {
      function updateChannels(_updateChannels) {
        return _updateChannels(...arguments);
      }(_updateChannels);
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
        if (!channels.some((id) => id.id === closure_1)) {
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
      const channels = first.channels;
      found = channels.find((id) => id.id === selectedChannelId);
    }
    let obj = { style: tmp.selectorGroup };
    obj = {};
    const intl = arg1(dependencyMap[13]).intl;
    obj.children = intl.string(arg1(dependencyMap[13]).t.8qKd+J);
    const items3 = [callback2(arg1(dependencyMap[16]).Text, obj), , , ];
    let tmp13 = null;
    if (null != error) {
      tmp13 = null;
      if ("" !== error) {
        obj = { style: tmp.error, children: error };
        tmp13 = callback2(arg1(dependencyMap[17]).LegacyText, obj);
      }
    }
    items3[1] = tmp13;
    const obj1 = {};
    let name;
    if (null != found) {
      name = found.name;
    }
    if (null == name) {
      const intl2 = arg1(dependencyMap[13]).intl;
      name = intl2.string(arg1(dependencyMap[13]).t.Re/64R);
    }
    obj1.label = name;
    obj1.disabled = null == selectedGuildId;
    obj1.trailing = callback2(arg1(dependencyMap[18]).FormRow.Arrow, {});
    obj1.DEPRECATED_style = tmp.select;
    obj1.onPress = callback;
    items3[2] = callback2(arg1(dependencyMap[18]).FormRow, obj1);
    const obj2 = { style: tmp.label };
    const intl3 = arg1(dependencyMap[13]).intl;
    obj2.children = intl3.string(arg1(dependencyMap[13]).t.kQXMfN);
    items3[3] = callback2(arg1(dependencyMap[17]).LegacyText, obj2);
    obj.children = items3;
    return closure_11(View, obj);
  }
};
export const useStyles = styles;
