// Module ID: 16303
// Function ID: 16304
// Name: VibegrationsPublishNotesSheet
// Dependencies: [5, 32, 19, 17, 4467, 2067, 4479, 1372, 1074, 4829, 21, 4836, 576, 6402, 504, 5370, 8605, 16304, 4800, 10872, 1115, 3715, 1101, 7095, 6876, 6618, 6570, 4832, 6506, 4989, 5281, 2]
// Exports: default

// Module 16303 (VibegrationsPublishNotesSheet)
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1074 */;
import router_utils from "router_utils" /* 1101 */;
import intl15 from "intl" /* 1115 */;
import _modDef3715 from "module_3715" /* 3715 */;
import GuildChannelStore2 from "GuildChannelStore" /* 4467 */;
import ActionSheetActionCreators from "ActionSheetActionCreators" /* 4800 */;
import MessageConstants from "MessageConstants" /* 4829 */;
import VibegrationsUtils from "VibegrationsUtils" /* 5370 */;
import ChannelPickerActionSheetDefault from "ChannelPickerActionSheet" /* 10872 */;
import VibegrationsPatchNotesChannel from "VibegrationsPatchNotesChannel" /* 16304 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import GuildStore from "GuildStore" /* 2067 */;
import RelationshipStore from "RelationshipStore" /* 4479 */;
import UserStore from "UserStore" /* 1372 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const GuildChannelStore = GuildChannelStore2;
let c3, c4, channel;

let closure_15;
let closure_16;
let metroImportDefault;
let metroRequire;
({ ActivityIndicator: metroRequire, View: metroImportDefault } = react_native);
let closure_9 = GuildChannelStore2.GUILD_SELECTABLE_CHANNELS_KEY;
const Routes = Constants.Routes;
const MessageSendLocation = MessageConstants.MessageSendLocation;
({ jsx: closure_15, jsxs: closure_16 } = Fragment);
const VibegrationsPublishNotesSheet_str = "VibegrationsPublishNotesSheet";
let closure_18 = createStyles.createStyles((paddingBottom) => {
  const obj = { container: { gap: nativeDefault.space.PX_16, paddingHorizontal: nativeDefault.space.PX_16, paddingBottom }, section: { gap: nativeDefault.space.PX_8 }, notesSection: { gap: nativeDefault.space.PX_4 }, statusRow: { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 }, actions: { flexDirection: "row", gap: nativeDefault.space.PX_8 } };
  ({ gap: nativeDefault.space.PX_16, paddingHorizontal: nativeDefault.space.PX_16, paddingBottom });
  ({ gap: nativeDefault.space.PX_8 });
  ({ gap: nativeDefault.space.PX_4 });
  ({ flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 });
  ({ flexDirection: "row", gap: nativeDefault.space.PX_8 });
  return obj;
});
let result = size.fileFinishedImporting("modules/vibegrations/native/VibegrationsPublishNotesSheet.tsx");

export default function VibegrationsPublishNotesSheet(guildId) {
  let BottomSheetTitleHeader;
  let MsXuP8;
  let NmaE9T;
  let _undefined;
  let _undefined2;
  let _undefined22;
  let c10;
  let c12;
  let c13;
  let c14;
  let c7;
  let fn;
  let format;
  let intl;
  let intl14;
  let intl2;
  let intl3;
  let intl5;
  let intl6;
  let intl7;
  let items10;
  let items11;
  let items12;
  let items13;
  let items9;
  let obj12;
  let obj14;
  let obj6;
  let obj7;
  let projectName;
  let publish;
  let str;
  let string;
  let stringResult;
  let stringResult1;
  let tmp10;
  let tmp17;
  let tmp19;
  let tmp21;
  let tmp33Result;
  let tmpResult;
  guildId = guildId.guildId;
  const applicationId = guildId.applicationId;
  ({ projectName, publish } = guildId);
  const initialDraft = guildId.initialDraft;
  c7 = undefined;
  let first;
  c10 = undefined;
  c12 = undefined;
  c13 = undefined;
  c14 = undefined;
  let trimmed;
  let c19;
  let callback2;
  let tmp = applicationId;
  let tmp2 = publish;
  const tmp3 = trimmed(applicationId(publish[13])({ includeKeyboardHeight: true }).insets.bottom);
  const tmp4 = guildId;
  let obj = guildId(publish[14]);
  const items = [first];
  const stateFromStores = obj.useStateFromStores(items, () => {
    const arr = GuildChannelStore.getChannels(guildId)[closure_9];
    found = arr.filter((channel) => {
      channel = channel.channel;
      const isGuildVocalResult = channel.isGuildVocal();
      const tmp2 = !isGuildVocalResult && !channel.isThread() && !channel.isForumLikeChannel();
      return tmp2;
    });
    return found.map((channel) => channel.channel);
  });
  let obj2 = guildId(publish[14]);
  const items1 = [first];
  const items2 = [guildId, applicationId];
  const stateFromStores1 = obj2.useStateFromStores(items1, () => {
    const obj = VibegrationsUtils;
    return obj.findVibegrationChannelId(guildId, applicationId);
  }, items2);
  const tmp6 = applicationId(publish[16])();
  let obj3 = guildId(publish[17]);
  const diff = tmp6 - obj3.formatPlaySuffix(guildId(publish[17]).PLAY_LINE_CHANNEL_PLACEHOLDER).length;
  let obj4 = stateFromStores1;
  let ref = stateFromStores1.useRef(diff);
  ref.current = diff;
  [tmp10, c7] = stateFromStores(stateFromStores1.useState("publishing"), 2);
  const tmp9 = stateFromStores(stateFromStores1.useState("publishing"), 2);
  const tmp11 = stateFromStores(stateFromStores1.useState(() => {
    const obj = VibegrationsPatchNotesChannel;
    const result = obj.lastPatchNotesChannel(applicationId);
    let tmp2 = null;
    if (null != result) {
      tmp2 = null;
      if (stateFromStores.some((id) => id.id === result)) {
        tmp2 = result;
      }
    }
    return tmp2;
  }), 2);
  first = tmp11[0];
  closure_9 = tmp11[1];
  [str, c10] = stateFromStores(stateFromStores1.useState(""), 2);
  const tmp13 = stateFromStores(stateFromStores1.useState(""), 2);
  const tmp14 = stateFromStores(stateFromStores1.useState(true), 2);
  let closure_11 = tmp14[1];
  const first1 = tmp14[0];
  [tmp17, c12] = stateFromStores(stateFromStores1.useState(false), 2);
  const tmp16 = stateFromStores(stateFromStores1.useState(false), 2);
  [tmp19, c13] = stateFromStores(stateFromStores1.useState(false), 2);
  const tmp18 = stateFromStores(stateFromStores1.useState(false), 2);
  [tmp21, c14] = stateFromStores(stateFromStores1.useState(false), 2);
  const tmp20 = stateFromStores(stateFromStores1.useState(false), 2);
  let closure_15 = stateFromStores1.useRef(false);
  ref = stateFromStores1.useRef(null != first);
  const items3 = [publish];
  const effect = stateFromStores1.useEffect(() => {
    let c0 = false;
    publish.then(() => {
      const tmp = c0;
      if (!tmp) {
        c7("succeeded");
      }
    }, () => {
      const tmp = c0;
      if (!tmp) {
        c7("failed");
      }
    });
    return () => {
      c0 = true;
    };
  }, items3);
  const items4 = [stateFromStores1];
  const effect1 = stateFromStores1.useEffect(() => {
    let current = null == stateFromStores1;
    const tmp = stateFromStores1;
    if (!current) {
      current = ref.current;
    }
    if (!current) {
      closure_9(tmp);
    }
  }, items4);
  const items5 = [initialDraft];
  const effect2 = stateFromStores1.useEffect(() => {
    let c0 = false;
    initialDraft.then((ok) => {
      const tmp = c0;
      if (!tmp) {
        closure_11(false);
        if (true !== ok.ok) {
          c12(true);
        } else {
          const current = null == ok.notes || "" === ok.notes || ref.current;
          if (!current) {
            const notes = ok.notes;
            c10(notes.slice(0, ref.current));
          }
        }
      }
    }, () => {
      const tmp = c0;
      if (!tmp) {
        closure_11(false);
        c12(true);
      }
    });
    return () => {
      c0 = true;
    };
  }, items5);
  let found = null;
  const callback = stateFromStores1.useCallback((arg0) => {
    closure_15.current = true;
    _undefined22(false);
    _undefined(arg0);
  }, []);
  if (null != first) {
    found = stateFromStores.find((id) => id.id === first);
  }
  if (found == null) {
    found = null;
  }
  trimmed = str.trim();
  let formatPlaySuffixResult = null;
  if (null != stateFromStores1) {
    let tmp28 = globalThis;
    let _HermesInternal = HermesInternal;
    const tmp4Result = tmp4(tmp2[17]);
    formatPlaySuffixResult = tmp4Result.formatPlaySuffix("<#" + stateFromStores1 + ">");
  }
  c19 = formatPlaySuffixResult;
  const items6 = [stateFromStores, guildId, found];
  const callback1 = obj4.useCallback(() => {
    let intl;
    let obj2;
    let obj3;
    let tmp2;
    const tmp = ActionSheetActionCreators;
    const showActionSheet = tmp.showActionSheet;
    const obj = { content: closure_15(tmp2, obj2), key: "VibegrationsPatchNotesChannelSheet", stackingBehavior: "stack" };
    obj2 = {
      header: obj3,
      guild: GuildStore.getGuild(guildId),
      channels: stateFromStores,
      selectedChannel: found,
      onSelect(id) {
        ref.current = true;
        closure_1_9(id.id);
      }
    };
    obj3 = { title: intl.string(_modDef3715.IcSdnu) };
    tmp2 = ChannelPickerActionSheetDefault;
    intl = intl15.intl;
    showActionSheet(obj);
  }, items6);
  callback2 = obj4.useCallback(() => {
    const obj = applicationId(publish[18]);
    obj.hideActionSheet(found);
  }, []);
  const items7 = [stateFromStores1, guildId, callback2];
  const callback3 = obj4.useCallback(() => {
    let CHANNELResult;
    const transitionTo = router_utils.transitionTo;
    router_utils;
    if (null == stateFromStores1) {
      CHANNELResult = Routes.CHANNEL(guildId);
    } else {
      CHANNELResult = Routes.CHANNEL(guildId, tmp2);
    }
    transitionTo(CHANNELResult);
    callback2();
  }, items7);
  const items8 = [found, trimmed, formatPlaySuffixResult, applicationId, callback2];
  const callback4 = obj4.useCallback(initialDraft(function*(arg0, value) {
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
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
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
            guildId = undefined;
            if (null != found) {
              if ("" !== trimmed) {
                _undefined2(true);
                _undefined22(false);
                publish = 1;
                let combined = tmp21;
                const parse = tmp(publish[23]).parse;
                const tmp26 = tmp;
                const tmp28 = tmp(publish[23]);
                const tmp29 = found;
                if (null != c19) {
                  const _HermesInternal = HermesInternal;
                  combined = "" + tmp21 + tmp30;
                }
                const parsed = parse(tmp29, combined);
                const tmp26Result = tmp26(publish[24]);
                const obj4 = { location: _undefined2.VIBEGRATIONS_PATCH_NOTES };
                c3 = 2;
                c4 = 1;
                const obj5 = { value: tmp26Result.sendMessage(found.id, parsed, false, obj4), done: false };
                return obj5;
              }
            }
          }
        } else if (1 === c3) {
          publish = 0;
          closure_129_14(true);
          closure_129_13(false);
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          publish = 0;
          c4 = 3;
          const obj6 = { value, done: true };
          return obj6;
        } else {
          guildId = value;
          let ok;
          if (guildId != null) {
            ok = guildId.ok;
          }
          if (false === ok) {
            const _Error = Error;
            const self = this;
            const self2 = this;
            const error = new Error("send failed");
            throw error;
          } else {
            const obj = guildId(publish[17]);
            const result = obj.rememberPatchNotesChannel(closure_129_1, closure_129_17.id);
            closure_129_20();
            publish = 0;
          }
        }
        c4 = 3;
        return { value: "HermesInternal", done: null };
      } catch (tmp38) {
        if (0 === publish) {
          c4 = 3;
          throw tmp38;
        } else {
          c3 = 1;
        }
      }
    }
  }), items8);
  let obj5 = { startExpanded: true, header: closure_15(BottomSheetTitleHeader, obj6), children: tmp34(tmp35, obj7) };
  const ActionSheet = tmp4(tmp2[25]).ActionSheet;
  obj6 = { title: intl.formatToPlainString(tmp(tmp2[21]).gOv8LL, { projectName }) };
  BottomSheetTitleHeader = tmp4(tmp2[26]).BottomSheetTitleHeader;
  intl = tmp4(tmp2[20]).intl;
  obj7 = { style: tmp3.container, children: items11 };
  const obj8 = { style: tmp3.section, children: items9 };
  const obj9 = { variant: "heading-md/semibold", color: "text-default", children: intl2.string(tmp(tmp2[21]).tqtMyS) };
  const Text = tmp4(tmp2[27]).Text;
  intl2 = tmp4(tmp2[20]).intl;
  items9 = [closure_15(Text, obj9), ];
  if ("publishing" === tmp10) {
    const obj10 = { style: tmp3.statusRow, children: items10 };
    items10 = [tmp33(ref, { size: "small" }), ];
    const obj11 = { variant: "text-md/medium", color: "text-subtle", children: intl6.formatToPlainString(tmp(tmp2[21]).g5fncX, obj12) };
    const Text2 = tmp4(tmp2[27]).Text;
    intl6 = tmp4(tmp2[20]).intl;
    obj12 = { projectName };
    items10[1] = closure_15(Text2, obj11);
    tmp33Result = tmp34(tmp35, obj10);
  } else {
    let obj15;
    const Text4 = tmp4(tmp2[27]).Text;
    if ("succeeded" === tmp10) {
      const obj13 = { variant: "text-md/medium", color: "text-feedback-positive", children: format(MsXuP8, obj14) };
      const intl4 = tmp4(tmp2[20]).intl;
      format = intl4.format;
      obj14 = { projectName, link: intl5.string(tmp4(tmp2[20]).t.jVcuVY), onNavigate: callback3 };
      MsXuP8 = tmp(tmp2[21]).MsXuP8;
      intl5 = tmp4(tmp2[20]).intl;
      obj15 = obj13;
    } else {
      obj15 = { variant: "text-md/medium", color: "text-feedback-critical", children: intl3.string(tmp(tmp2[21]).fNP6Cd) };
      intl3 = tmp4(tmp2[20]).intl;
    }
    tmp33Result = tmp33(Text4, obj15);
  }
  items9[1] = tmp33Result;
  items11 = [tmp34(tmp35, obj8), , ];
  let tmp34Result2 = null;
  if (stateFromStores.length > 0) {
    let combined;
    const obj16 = { style: tmp3.notesSection, children: items12 };
    const obj17 = { label: intl7.string(tmp(tmp2[21]).oouynk), placeholder: string(first1 ? tmpResult.VQhlkB : tmpResult.xkxDN1), description: stringResult, errorMessage: stringResult1, maxLength: diff, value: str, onChange: callback, disabled: tmp19 };
    const TextArea = tmp4(tmp2[28]).TextArea;
    intl7 = tmp4(tmp2[20]).intl;
    const intl8 = tmp4(tmp2[20]).intl;
    string = intl8.string;
    tmpResult = tmp(tmp2[21]);
    stringResult = undefined;
    if (tmp17) {
      const intl9 = tmp4(tmp2[20]).intl;
      stringResult = intl9.string(tmp(tmp2[21]).PCST1n);
    }
    stringResult1 = undefined;
    if (tmp21) {
      const intl10 = tmp4(tmp2[20]).intl;
      stringResult1 = intl10.string(tmp(tmp2[21]).P6SoGm);
    }
    items12 = [tmp33(TextArea, obj17), ];
    const Text3 = tmp4(tmp2[27]).Text;
    const intl11 = tmp4(tmp2[20]).intl;
    const format2 = intl11.format;
    const unJ01l = tmp(tmp2[21]).unJ01l;
    if (null != found) {
      const _HermesInternal2 = HermesInternal;
      const tmp4Result2 = tmp4(tmp2[29]);
      combined = "#" + tmp4Result2.computeChannelName(found, c12, closure_11);
    } else {
      const intl12 = tmp4(tmp2[20]).intl;
      combined = intl12.string(tmp(tmp2[21])["8qO519"]);
    }
    const obj18 = { channel: combined, onPick: fn };
    fn = callback1;
    if (tmp19) {
      fn = () => {

      };
    }
    const obj19 = { variant: "text-md/medium", color: "text-subtle", children: format2(unJ01l, obj18) };
    items12[1] = closure_15(Text3, obj19);
    tmp34Result2 = tmp34(tmp35, obj16);
  }
  items11[1] = tmp34Result2;
  const obj20 = { style: tmp3.actions, children: items13 };
  const Button = tmp4(tmp2[30]).Button;
  const intl13 = tmp4(tmp2[20]).intl;
  const string2 = intl13.string;
  if ("failed" === tmp10) {
    NmaE9T = tmp4(tmp2[20]).t.cpT0Cq;
  } else {
    NmaE9T = tmp(tmp2[21]).NmaE9T;
  }
  items13 = [, ];
  const obj21 = { variant: "tertiary", grow: true, text: string2(NmaE9T), onPress: callback2 };
  items13[0] = closure_15(Button, obj21);
  const obj22 = { variant: "primary", grow: true, text: intl14.string(tmp(tmp2[21]).dx7eQG), loading: tmp19, disabled: "succeeded" !== tmp10 || "" === trimmed || trimmed.length > diff || null == found || tmp19, onPress: callback4 };
  const Button2 = tmp4(tmp2[30]).Button;
  intl14 = tmp4(tmp2[20]).intl;
  items13[1] = closure_15(Button2, obj22);
  items11[2] = ref(c7, obj20);
  return closure_15(ActionSheet, obj5);
};
export const VIBEGRATIONS_PUBLISH_NOTES_SHEET_KEY = "VibegrationsPublishNotesSheet";
