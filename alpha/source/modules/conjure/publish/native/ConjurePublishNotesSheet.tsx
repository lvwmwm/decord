// Module ID: 12380
// Function ID: 12381
// Name: ConjurePublishNotesSheet
// Dependencies: [5, 32, 19, 17, 4901, 4845, 4913, 1392, 4976, 21, 4971, 587, 5593, 504, 7345, 9662, 12381, 10795, 5210, 11833, 1128, 3830, 7755, 7566, 7298, 7248, 7180, 5234, 5604, 5244, 2]
// Exports: default

// Module 12380 (ConjurePublishNotesSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import intl10 from "intl" /* 1128 */;
import _modDef3830 from "module_3830" /* 3830 */;
import GuildChannelStore2 from "GuildChannelStore" /* 4901 */;
import MessageConstants from "MessageConstants" /* 4976 */;
import ActionSheetActionCreators from "ActionSheetActionCreators" /* 5210 */;
import ConjureUtils from "ConjureUtils" /* 7345 */;
import ChannelPickerActionSheetDefault from "ChannelPickerActionSheet" /* 11833 */;
import ConjurePatchNotesChannel from "ConjurePatchNotesChannel" /* 12381 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import GuildStore from "GuildStore" /* 4845 */;
import RelationshipStore from "RelationshipStore" /* 4913 */;
import UserStore from "UserStore" /* 1392 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4971 */;
import size from "module_2" /* 2 */;

const GuildChannelStore = GuildChannelStore2;
let c3, c4, channel;

let closure_14;
let map1;
const View = react_native.View;
let closure_8 = GuildChannelStore2.GUILD_SELECTABLE_CHANNELS_KEY;
const MessageSendLocation = MessageConstants.MessageSendLocation;
({ jsx: map1, jsxs: closure_14 } = Fragment);
const ConjurePublishNotesSheet_str = "ConjurePublishNotesSheet";
let closure_16 = createStyles.createStyles((paddingBottom) => {
  const obj = { container: { gap: nativeDefault.space.PX_16, paddingHorizontal: nativeDefault.space.PX_16, paddingBottom }, notesSection: { gap: nativeDefault.space.PX_4 }, actions: { flexDirection: "row", gap: nativeDefault.space.PX_8 } };
  ({ gap: nativeDefault.space.PX_16, paddingHorizontal: nativeDefault.space.PX_16, paddingBottom });
  ({ gap: nativeDefault.space.PX_4 });
  ({ flexDirection: "row", gap: nativeDefault.space.PX_8 });
  return obj;
});
let result = size.fileFinishedImporting("modules/conjure/publish/native/ConjurePublishNotesSheet.tsx");

export default function ConjurePublishNotesSheet(projectId) {
  let BottomSheetTitleHeader;
  let _undefined;
  let _undefined2;
  let _undefined22;
  let c11;
  let c14;
  let c15;
  let c9;
  let fn;
  let intl;
  let intl2;
  let intl8;
  let intl9;
  let items10;
  let items8;
  let items9;
  let obj6;
  let obj7;
  let str;
  let string;
  let stringResult;
  let stringResult1;
  let tmp15;
  let tmp19;
  let tmp21;
  let tmpResult;
  projectId = projectId.projectId;
  const guildId = projectId.guildId;
  let applicationId = projectId.applicationId;
  const publishedRevision = projectId.publishedRevision;
  let first;
  c9 = undefined;
  c11 = undefined;
  c14 = undefined;
  c15 = undefined;
  closure_16 = undefined;
  let trimmed;
  let c20;
  let callback2;
  let tmp = guildId;
  let tmp2 = applicationId;
  const projectName = projectId.projectName;
  const tmp3 = closure_16(guildId(applicationId[12])({ includeKeyboardHeight: true }).insets.bottom);
  const tmp4 = projectId;
  let obj = projectId(applicationId[13]);
  const items = [first];
  const items1 = [guildId];
  const stateFromStoresArray = obj.useStateFromStoresArray(items, () => {
    const arr = GuildChannelStore.getChannels(guildId)[closure_8];
    found = arr.filter((channel) => {
      channel = channel.channel;
      const isGuildVocalResult = channel.isGuildVocal();
      const tmp2 = !isGuildVocalResult && !channel.isThread() && !channel.isForumLikeChannel();
      return tmp2;
    });
    return found.map((channel) => channel.channel);
  }, items1);
  let obj2 = projectId(applicationId[13]);
  const items2 = [first];
  const items3 = [guildId, applicationId];
  const stateFromStores = obj2.useStateFromStores(items2, () => {
    const obj = ConjureUtils;
    return obj.findConjureChannelId(guildId, applicationId);
  }, items3);
  const tmp6 = guildId(applicationId[15])();
  let obj3 = projectId(applicationId[16]);
  const diff = tmp6 - obj3.formatPlaySuffix(projectId(applicationId[16]).PLAY_LINE_CHANNEL_PLACEHOLDER).length;
  let obj4 = stateFromStores;
  let ref = stateFromStores.useRef(diff);
  ref.current = diff;
  const tmp9 = stateFromStoresArray(stateFromStores.useState(() => {
    const obj = ConjurePatchNotesChannel;
    const result = obj.lastPatchNotesChannel(applicationId);
    let tmp2 = null;
    if (null != result) {
      tmp2 = null;
      if (stateFromStoresArray.some((id) => id.id === result)) {
        tmp2 = result;
      }
    }
    return tmp2;
  }), 2);
  first = tmp9[0];
  closure_8 = tmp9[1];
  [str, c9] = stateFromStoresArray(stateFromStores.useState(""), 2);
  const tmp11 = stateFromStoresArray(stateFromStores.useState(""), 2);
  const tmp12 = stateFromStoresArray(stateFromStores.useState(true), 2);
  let closure_10 = tmp12[1];
  const first1 = tmp12[0];
  [tmp15, c11] = stateFromStoresArray(stateFromStores.useState(false), 2);
  const tmp14 = stateFromStoresArray(stateFromStores.useState(false), 2);
  const tmp16 = stateFromStoresArray(stateFromStores.useState(undefined), 2);
  const first2 = tmp16[0];
  let closure_13 = tmp16[1];
  [tmp19, c14] = stateFromStoresArray(stateFromStores.useState(false), 2);
  const tmp18 = stateFromStoresArray(stateFromStores.useState(false), 2);
  [tmp21, c15] = stateFromStoresArray(stateFromStores.useState(false), 2);
  const tmp20 = stateFromStoresArray(stateFromStores.useState(false), 2);
  closure_16 = stateFromStores.useRef(false);
  ref = stateFromStores.useRef(null != first);
  const items4 = [stateFromStores];
  const effect = stateFromStores.useEffect(() => {
    let current = null == stateFromStores;
    const tmp = stateFromStores;
    if (!current) {
      current = ref.current;
    }
    if (!current) {
      closure_8(tmp);
    }
  }, items4);
  const items5 = [projectId];
  const effect1 = stateFromStores.useEffect(() => {
    let c0 = false;
    const obj = projectId(applicationId[17]);
    const draftPatchNotesResult = obj.draftPatchNotes(c0);
    draftPatchNotesResult.then((source_sha) => {
      const tmp = c0;
      if (!tmp) {
        closure_10(false);
        closure_13(source_sha.source_sha);
        if (true !== source_sha.ok) {
          c11(true);
        } else {
          const current = null == source_sha.notes || "" === source_sha.notes || ref.current;
          if (!current) {
            const notes = source_sha.notes;
            c9(notes.slice(0, ref.current));
          }
        }
      }
    }, () => {
      const tmp = c0;
      if (!tmp) {
        closure_10(false);
        c11(true);
      }
    });
    return () => {
      c0 = true;
    };
  }, items5);
  let found = null;
  const callback = stateFromStores.useCallback((arg0) => {
    closure_16.current = true;
    _undefined22(false);
    _undefined(arg0);
  }, []);
  if (null != first) {
    found = stateFromStoresArray.find((id) => id.id === first);
  }
  if (found == null) {
    found = null;
  }
  trimmed = str.trim();
  let formatPlaySuffixResult = null;
  if (null != stateFromStores) {
    let _HermesInternal = HermesInternal;
    const tmp4Result = tmp4(tmp2[16]);
    formatPlaySuffixResult = tmp4Result.formatPlaySuffix("<#" + stateFromStores + ">");
  }
  c20 = formatPlaySuffixResult;
  const items6 = [stateFromStoresArray, guildId, found];
  const callback1 = obj4.useCallback(() => {
    let intl;
    let obj2;
    let obj3;
    let tmp2;
    const tmp = ActionSheetActionCreators;
    const showActionSheet = tmp.showActionSheet;
    const obj = { content: map1(tmp2, obj2), key: "ConjurePatchNotesChannelSheet", stackingBehavior: "stack" };
    obj2 = {
      header: obj3,
      guild: GuildStore.getGuild(guildId),
      channels: stateFromStoresArray,
      selectedChannel: found,
      onSelect(id) {
        ref.current = true;
        closure_1_8(id.id);
      }
    };
    obj3 = { title: intl.string(_modDef3830.Gd63Fl) };
    tmp2 = ChannelPickerActionSheetDefault;
    intl = intl10.intl;
    showActionSheet(obj);
  }, items6);
  callback2 = obj4.useCallback(() => {
    const obj = guildId(applicationId[18]);
    obj.hideActionSheet(c15);
  }, []);
  const items7 = [found, trimmed, formatPlaySuffixResult, applicationId, projectId, publishedRevision, guildId, first2, callback2];
  const callback3 = obj4.useCallback(publishedRevision(function*(arg0, value) {
    let c2;
    let closure_0;
    let closure_1;
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
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        let id;
        c4 = 2;
        if (0 === c3) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            projectId = undefined;
            id = undefined;
            if (null != found) {
              if ("" !== trimmed) {
                _undefined2(true);
                _undefined22(false);
                applicationId = 1;
                let combined = tmp30;
                const parse = tmp(applicationId[22]).parse;
                const tmp35 = tmp;
                const tmp37 = tmp(applicationId[22]);
                const tmp38 = found;
                if (null != c20) {
                  const _HermesInternal = HermesInternal;
                  combined = "" + tmp30 + tmp39;
                }
                const parsed = parse(tmp38, combined);
                const tmp35Result = tmp35(applicationId[23]);
                const obj4 = { location: constants.CONJURE_PATCH_NOTES };
                c3 = 2;
                c4 = 1;
                const obj5 = { value: tmp35Result.sendMessage(found.id, parsed, false, obj4), done: false };
                return obj5;
              }
            }
          }
        } else if (1 === c3) {
          applicationId = 0;
          closure_129_15(true);
          closure_129_14(false);
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          applicationId = 0;
          c4 = 3;
          const obj6 = { value, done: true };
          return obj6;
        } else {
          projectId = value;
          let ok;
          if (projectId != null) {
            ok = projectId.ok;
          }
          if (false === ok) {
            const _Error = Error;
            const self = this;
            const self2 = this;
            const error = new Error("send failed");
            throw error;
          } else {
            const obj9 = projectId(applicationId[16]);
            const result = obj9.rememberPatchNotesChannel(closure_129_2, closure_129_18.id);
            id = undefined;
            if (projectId != null) {
              const body = projectId.body;
              if (body != null) {
                id = body.id;
              }
            }
            if (null != id) {
              const obj7 = { publishedRevision: closure_129_3, guildId: closure_129_1, channelId: closure_129_18.id, messageId: id };
              const obj = projectId(applicationId[17]);
              obj.recordPatchNotesSent(closure_129_0, obj7, closure_129_12);
            }
            closure_129_21();
            applicationId = 0;
          }
        }
        c4 = 3;
        return { value: "IconComponent", done: null };
      } catch (tmp47) {
        if (0 === applicationId) {
          c4 = 3;
          throw tmp47;
        } else {
          c3 = 1;
        }
      }
    }
  }), items7);
  let obj5 = { startExpanded: true, header: closure_13(BottomSheetTitleHeader, obj6), children: tmp32(tmp33, obj7) };
  const ActionSheet = tmp4(tmp2[24]).ActionSheet;
  obj6 = { title: intl.formatToPlainString(tmp(tmp2[21]).lsYQII, { projectName }) };
  BottomSheetTitleHeader = tmp4(tmp2[25]).BottomSheetTitleHeader;
  intl = tmp4(tmp2[20]).intl;
  obj7 = { style: tmp3.container, children: items9 };
  let tmp32Result = null;
  if (stateFromStoresArray.length > 0) {
    let combined;
    const obj8 = { style: tmp3.notesSection, children: items8 };
    let obj9 = { label: intl2.string(tmp(tmp2[21]).r4du8k), placeholder: string(first1 ? tmpResult.aYQksU : tmpResult["3hV1Gc"]), description: stringResult, errorMessage: stringResult1, maxLength: diff, value: str, onChange: callback, disabled: tmp19 };
    const TextArea = tmp4(tmp2[26]).TextArea;
    intl2 = tmp4(tmp2[20]).intl;
    const intl3 = tmp4(tmp2[20]).intl;
    string = intl3.string;
    tmpResult = tmp(tmp2[21]);
    stringResult = undefined;
    if (tmp15) {
      const intl4 = tmp4(tmp2[20]).intl;
      stringResult = intl4.string(tmp(tmp2[21])["Em8bo+"]);
    }
    stringResult1 = undefined;
    if (tmp21) {
      const intl5 = tmp4(tmp2[20]).intl;
      stringResult1 = intl5.string(tmp(tmp2[21])["6oEjjD"]);
    }
    items8 = [tmp31(TextArea, obj9), ];
    const Text = tmp4(tmp2[27]).Text;
    const intl6 = tmp4(tmp2[20]).intl;
    const format = intl6.format;
    const prop = tmp(tmp2[21])["1lVhj/"];
    if (null != found) {
      const _HermesInternal2 = HermesInternal;
      const tmp4Result2 = tmp4(tmp2[28]);
      combined = "#" + tmp4Result2.computeChannelName(found, c11, closure_10);
    } else {
      const intl7 = tmp4(tmp2[20]).intl;
      combined = intl7.string(tmp(tmp2[21])["7CvxMC"]);
    }
    const obj10 = { channel: combined, onPick: fn };
    fn = callback1;
    if (tmp19) {
      fn = () => {

      };
    }
    const obj11 = { variant: "text-md/medium", color: "text-subtle", children: format(prop, obj10) };
    items8[1] = closure_13(Text, obj11);
    tmp32Result = tmp32(tmp33, obj8);
  }
  items9 = [tmp32Result, ];
  const obj12 = { style: tmp3.actions, children: items10 };
  const obj13 = { variant: "tertiary", grow: true, text: intl8.string(tmp4(tmp2[20]).t["ETE/oC"]), onPress: callback2 };
  const Button = tmp4(tmp2[29]).Button;
  intl8 = tmp4(tmp2[20]).intl;
  items10 = [tmp31(Button, obj13), ];
  const obj14 = { variant: "primary", grow: true, text: intl9.string(tmp(tmp2[21])["69aIG4"]), loading: tmp19, disabled: "" === trimmed || trimmed.length > diff || null == found || tmp19, onPress: callback3 };
  const Button2 = tmp4(tmp2[29]).Button;
  intl9 = tmp4(tmp2[20]).intl;
  items10[1] = closure_13(Button2, obj14);
  items9[1] = c14(ref, obj12);
  return closure_13(ActionSheet, obj5);
};
export const CONJURE_PUBLISH_NOTES_SHEET_KEY = "ConjurePublishNotesSheet";
