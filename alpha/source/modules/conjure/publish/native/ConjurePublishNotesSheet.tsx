// Module ID: 12625
// Function ID: 12626
// Name: ConjurePublishNotesSheet
// Dependencies: [5, 32, 19, 17, 4880, 4951, 1384, 21, 5009, 575, 5602, 12626, 5253, 11181, 1114, 3865, 7360, 7315, 7247, 5619, 5647, 5629, 2]
// Exports: default

// Module 12625 (ConjurePublishNotesSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import intl10 from "intl" /* 1114 */;
import _modDef3865 from "module_3865" /* 3865 */;
import ActionSheetActionCreators from "ActionSheetActionCreators" /* 5253 */;
import useSafeAreaInsetsKeyboardAwareDefault from "useSafeAreaInsetsKeyboardAware" /* 5602 */;
import ChannelPickerActionSheetDefault from "ChannelPickerActionSheet" /* 11181 */;
import useConjurePatchNotesComposerDefault from "useConjurePatchNotesComposer" /* 12626 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import GuildStore from "GuildStore" /* 4880 */;
import RelationshipStore from "RelationshipStore" /* 4951 */;
import UserStore from "UserStore" /* 1384 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

let c1, dependencyMap, importDefault;

let c10;
let unpackModuleId;
const View = react_native.View;
({ jsx: c10, jsxs: unpackModuleId } = Fragment);
const ConjurePublishNotesSheet_str = "ConjurePublishNotesSheet";
let closure_13 = createStyles.createStyles((paddingBottom) => {
  const obj = { container: { gap: nativeDefault.space.PX_16, paddingHorizontal: nativeDefault.space.PX_16, paddingBottom }, notesSection: { gap: nativeDefault.space.PX_4 }, actions: { flexDirection: "row", gap: nativeDefault.space.PX_8 } };
  ({ gap: nativeDefault.space.PX_16, paddingHorizontal: nativeDefault.space.PX_16, paddingBottom });
  ({ gap: nativeDefault.space.PX_4 });
  ({ flexDirection: "row", gap: nativeDefault.space.PX_8 });
  return obj;
});
const result = size.fileFinishedImporting("modules/conjure/publish/native/ConjurePublishNotesSheet.tsx");

export default function ConjurePublishNotesSheet(guildId) {
  let BottomSheetTitleHeader;
  let _undefined;
  let _undefined2;
  let applicationId;
  let c2;
  let draftFailed;
  let drafting;
  let fn;
  let intl;
  let intl2;
  let intl8;
  let intl9;
  let items3;
  let items4;
  let items5;
  let markEdited;
  let maxNotesLength;
  let obj2;
  let obj3;
  let projectId;
  let projectName;
  let publishedRevision;
  let sending;
  let str;
  let string;
  let stringResult;
  let stringResult1;
  let tmp5;
  let tmp7;
  let tmpResult;
  guildId = guildId.guildId;
  importDefault = undefined;
  dependencyMap = undefined;
  let selectedChannel;
  let pickChannel;
  markEdited = undefined;
  let tmp2 = dependencyMap;
  ({ projectId, applicationId, projectName, publishedRevision } = guildId);
  const tmp3 = closure_13(useSafeAreaInsetsKeyboardAwareDefault({ includeKeyboardHeight: true }).insets.bottom);
  [str, tmp5] = selectedChannel(pickChannel.useState(""), 2);
  importDefault = tmp5;
  const tmp4 = selectedChannel(pickChannel.useState(""), 2);
  [tmp7, c2] = selectedChannel(pickChannel.useState(false), 2);
  const tmp6 = selectedChannel(pickChannel.useState(false), 2);
  const tmp8 = useConjurePatchNotesComposerDefault({ projectId, guildId, applicationId, publishedRevision, applyDraft: tmp5 });
  const channels = tmp8.channels;
  selectedChannel = tmp8.selectedChannel;
  pickChannel = tmp8.pickChannel;
  ({ maxNotesLength, sending, markEdited } = tmp8);
  const send = tmp8.send;
  const items = [markEdited];
  ({ drafting, draftFailed } = tmp8);
  const callback = pickChannel.useCallback((arg0) => {
    markEdited();
    c2(false);
    _undefined(arg0);
  }, items);
  const trimmed = str.trim();
  const items1 = [channels, guildId, pickChannel, selectedChannel];
  const callback1 = pickChannel.useCallback(() => {
    let intl;
    let obj2;
    let obj3;
    let tmp2;
    const obj = { content: authStore(tmp2, obj2), key: "ConjurePatchNotesChannelSheet", stackingBehavior: "stack" };
    const showActionSheet = ActionSheetActionCreators.showActionSheet;
    obj2 = {
      header: obj3,
      guild: GuildStore.getGuild(guildId),
      channels,
      selectedChannel,
      onSelect(id) {
        return pickChannel(id.id);
      }
    };
    obj3 = { title: intl.string(_modDef3865.Gd63Fl) };
    ActionSheetActionCreators;
    tmp2 = ChannelPickerActionSheetDefault;
    intl = intl10.intl;
    showActionSheet(obj);
  }, items1);
  const callback2 = pickChannel.useCallback(() => {
    const obj = _undefined(c2[12]);
    obj.hideActionSheet(ConjurePublishNotesSheet_str);
  }, []);
  const items2 = [trimmed, callback2, send];
  const tmp13 = closure_10;
  const callback3 = pickChannel.useCallback(channels(function*(arg0, value) {
    let v3;
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
            let closure_0 = tmp3;
            c2(false);
            c1 = 1;
            c2 = 1;
            const obj4 = { value: send(trimmed), done: false };
            return obj4;
          }
        } else if (arg0 === 1) {
          c2 = 3;
          throw value;
        } else if (arg0 === 2) {
          c2 = 3;
          const obj = { value, done: true };
          return obj;
        } else {
          if (value) {
            closure_128_9();
          } else {
            closure_128_2(true);
          }
          c2 = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp13) {
        c2 = 3;
        throw tmp13;
      }
    }
  }), items2);
  let obj = { startExpanded: true, header: closure_10(BottomSheetTitleHeader, obj2), children: tmp15(tmp16, obj3) };
  const ActionSheet = guildId(7360).ActionSheet;
  obj2 = { title: intl.formatToPlainString(_modDef3865.lsYQII, { projectName }) };
  BottomSheetTitleHeader = guildId(7315).BottomSheetTitleHeader;
  intl = guildId(1114).intl;
  obj3 = { style: tmp3.container, children: items4 };
  let tmp15Result = null;
  if (channels.length > 0) {
    let combined;
    let obj4 = { style: tmp3.notesSection, children: items3 };
    const obj5 = { label: intl2.string(_modDef3865.r4du8k), placeholder: string(drafting ? tmpResult.aYQksU : tmpResult["3hV1Gc"]), description: stringResult, errorMessage: stringResult1, maxLength: maxNotesLength, value: str, onChange: callback, disabled: sending };
    const TextArea = tmp14(7247).TextArea;
    intl2 = tmp14(1114).intl;
    const intl3 = tmp14(1114).intl;
    string = intl3.string;
    tmpResult = _modDef3865;
    stringResult = undefined;
    if (draftFailed) {
      const intl4 = tmp14(1114).intl;
      stringResult = intl4.string(_modDef3865["Em8bo+"]);
    }
    stringResult1 = undefined;
    if (tmp7) {
      const intl5 = tmp14(1114).intl;
      stringResult1 = intl5.string(_modDef3865["6oEjjD"]);
    }
    items3 = [tmp13(TextArea, obj5), ];
    const Text = tmp14(5619).Text;
    const intl6 = tmp14(1114).intl;
    const format = intl6.format;
    const prop = _modDef3865["1lVhj/"];
    if (null != selectedChannel) {
      const _HermesInternal = HermesInternal;
      const tmp14Result = guildId(5647);
      combined = "#" + tmp14Result.computeChannelName(selectedChannel, callback2, trimmed);
    } else {
      const intl7 = tmp14(1114).intl;
      combined = intl7.string(_modDef3865["7CvxMC"]);
    }
    const obj6 = { channel: combined, onPick: fn };
    fn = callback1;
    if (sending) {
      fn = () => {

      };
    }
    const obj7 = { variant: "text-md/medium", color: "text-subtle", children: format(prop, obj6) };
    items3[1] = tmp13(Text, obj7);
    tmp15Result = tmp15(tmp16, obj4);
  }
  items4 = [tmp15Result, ];
  const obj8 = { style: tmp3.actions, children: items5 };
  const obj9 = { variant: "tertiary", grow: true, text: intl8.string(guildId(1114).t["ETE/oC"]), onPress: callback2 };
  const Button = tmp14(5629).Button;
  intl8 = tmp14(1114).intl;
  items5 = [tmp13(Button, obj9), ];
  const obj10 = { variant: "primary", grow: true, text: intl9.string(_modDef3865["69aIG4"]), loading: sending, disabled: "" === trimmed || trimmed.length > maxNotesLength || null == selectedChannel || sending, onPress: callback3 };
  const Button2 = tmp14(5629).Button;
  intl9 = tmp14(1114).intl;
  items5[1] = tmp13(Button2, obj10);
  items4[1] = closure_11(markEdited, obj8);
  return tmp13(ActionSheet, obj);
};
export const CONJURE_PUBLISH_NOTES_SHEET_KEY = "ConjurePublishNotesSheet";
