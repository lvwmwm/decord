// Module ID: 19806
// Function ID: 19807
// Name: GuildSettingsModalSoundboard
// Dependencies: [5, 19, 17, 5961, 4784, 1386, 1071, 21, 1112, 8743, 19794, 9370, 14134, 4913, 575, 504, 7045, 7496, 12488, 7688, 5504, 1186, 5943, 7058, 5511, 19807, 1628, 6830, 6954, 7633, 19808, 7190, 19803, 19819, 2]

// Module 19806 (GuildSettingsModalSoundboard)
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1071 */;
import intl7 from "intl" /* 1112 */;
import NicknameUtilsDefault from "NicknameUtils" /* 5943 */;
import EmojiDefault from "Emoji" /* 7496 */;
import GuildBoostingUtils from "GuildBoostingUtils" /* 8743 */;
import getSoundboardEmojiUrlDefault from "getSoundboardEmojiUrl" /* 12488 */;
import SoundboardCreationUtils from "SoundboardCreationUtils" /* 19807 */;
import showGuildSettingsModalSoundboardSoundInfoActionSheet from "showGuildSettingsModalSoundboardSoundInfoActionSheet" /* 19819 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import SoundboardStore from "SoundboardStore" /* 5961 */;
import GuildStore from "GuildStore" /* 4784 */;
import UserStore from "UserStore" /* 1386 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4913 */;
import size_mod from "module_2" /* 2 */;

let c1, c2, set;

let closure_12;
let hasOwnProperty;
let metroRequire;
let obj2;
let obj4;
let obj5;
let size;
let unpackModuleId;
function SoundboardSoundRow(arg0) {
  let canManage;
  let guildId;
  let items3;
  let obj8;
  let obj9;
  let onPress;
  let sound;
  let str;
  let tmp5Result2;
  let tmp9Result;
  ({ guildId, sound } = arg0);
  ({ canManage, onPress } = arg0);
  const tmp = closure_15();
  const items = [UserStore];
  const items1 = [sound.userId];
  const obj = sound(504);
  const stateFromStores = obj.useStateFromStores(items, () => UserStore.getUser(sound.userId), items1);
  const obj2 = { style: tmp.soundEmoji, children: null };
  if (null == sound.emojiId) {
    let tmp5Result;
    if (null == sound.emojiName) {
      tmp5Result = tmp5(tmp2(7688).ImageIcon, { size: "lg", color: "icon-subtle" });
    }
    obj2.children = tmp5Result;
    const obj3 = { icon: closure_11(closure_6, obj2), label: closure_12(closure_6, obj8), trailing: tmp5Result2, onPress };
    const obj4 = { variant: "heading-xs/semibold", color: "text-strong", style: tmp.name, children: sound.name };
    const items2 = [closure_11(sound(5504).Text, obj4), ];
    let tmp12Result = null;
    if (null != stateFromStores) {
      const obj5 = { style: tmp.userRow, children: items3 };
      const obj6 = { user: stateFromStores, size: sound(1186).AvatarSizes.XSMALL_20, guildId };
      const Avatar = tmp2(1186).Avatar;
      items3 = [closure_11(Avatar, obj6), ];
      const obj7 = { variant: "body-sm/medium", color: "text-subtle", children: obj9.getName(guildId, undefined, stateFromStores) };
      const Text = tmp2(5504).Text;
      obj9 = NicknameUtilsDefault;
      items3[1] = closure_11(Text, obj7);
      tmp12Result = tmp12(tmp7, obj5);
    }
    obj8 = { children: items2 };
    items2[1] = tmp12Result;
    tmp5Result2 = undefined;
    if (canManage) {
      tmp5Result2 = tmp5(tmp2(7058).TableRowArrow, {});
    }
    return closure_11(tmp6, obj3);
  }
  const obj10 = { fastImageStyle: tmp.soundEmojiImage, textEmojiStyle: tmp.soundEmojiText, name: str, src: tmp9Result(sound, nativeDefault.space.PX_48) };
  str = sound.emojiName;
  const tmp10 = EmojiDefault;
  if (str == null) {
    str = "";
  }
  tmp9Result = getSoundboardEmojiUrlDefault;
  tmp5Result = tmp5(tmp10, obj10);
}
function AddSoundButton(guildId) {
  let Button;
  let intl;
  let obj2;
  guildId = guildId.guildId;
  let obj = { style: closure_14().addSoundButton, children: closure_11(Button, obj2) };
  obj2 = {
    variant: "primary",
    text: intl.string(guildId(1112).t["8Fu/S7"]),
    onPress() {
      const obj = SoundboardCreationUtils;
      return obj.showAddSoundboardSoundOptions(guildId);
    }
  };
  Button = guildId(5511).Button;
  intl = guildId(1112).intl;
  return closure_11(closure_6, obj);
}
let react = react_mod;
({ ScrollView: hasOwnProperty, View: metroRequire } = react_native);
const BoostedGuildTiers = Constants.BoostedGuildTiers;
({ jsx: unpackModuleId, jsxs: closure_12 } = Fragment);
let createStyles = createStyles_mod;
let closure_13 = createStyles.createStyles((arg0) => {
  const obj = { container: { padding: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_16 + arg0 }, label: { marginBottom: nativeDefault.space.PX_8 } };
  ({ padding: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_16 + arg0 });
  ({ marginBottom: nativeDefault.space.PX_8 });
  return obj;
});
createStyles = createStyles_mod;
let obj = { addSoundButton: obj2 };
obj2 = { marginTop: nativeDefault.space.PX_8, marginBottom: nativeDefault.space.PX_16 };
let closure_14 = createStyles.createStyles(obj);
createStyles = createStyles_mod;
let obj3 = { soundEmoji: size, soundEmojiImage: { width: 32, height: 32 }, soundEmojiText: { fontSize: 28 }, name: obj4, userRow: obj5 };
size = { width: nativeDefault.space.PX_48, height: nativeDefault.space.PX_48, alignItems: "center", justifyContent: "center" };
createStyles = createStyles.createStyles;
obj4 = { marginBottom: nativeDefault.space.PX_8 };
obj5 = { gap: nativeDefault.space.PX_8, flexDirection: "row", alignItems: "center" };
let closure_15 = createStyles(obj3);
const memoResult = react.memo(function GuildSettingsModalSoundboard(guildId) {
  let IJXOt6;
  let _undefined;
  let c4;
  let canCreateExpressions;
  let canManageAllExpressions;
  let format;
  let intl;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let items5;
  let items6;
  let obj7;
  let tmp4Result10;
  let tmp4Result6;
  let tmp4Result7;
  let tmp4Result8;
  let tmp4Result9;
  guildId = guildId.guildId;
  let guild;
  let stateFromStores;
  react = undefined;
  let tmp2 = stateFromStores;
  let tmp = guild;
  let tmp3 = closure_13(guild(stateFromStores[26])().bottom);
  let tmp4 = guildId;
  let obj = guildId(stateFromStores[15]);
  let items = [GuildStore];
  const items1 = [guildId];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    let NONE;
    guild = GuildStore.getGuild(guildId);
    const obj = { guild, guildTier: NONE };
    if (null != guild) {
      const obj2 = GuildBoostingUtils;
      NONE = obj2.getGuildSoundboardTier(guild);
    } else {
      NONE = BoostedGuildTiers.NONE;
    }
    return obj;
  }, items1);
  guild = stateFromStoresObject.guild;
  const guildTier = stateFromStoresObject.guildTier;
  let obj2 = guildId(stateFromStores[15]);
  const items2 = [SoundboardStore];
  const items3 = [guildId];
  stateFromStores = obj2.useStateFromStores(items2, () => SoundboardStore.getSoundsForGuild(guildId), items3);
  const effect = react.useEffect(() => {
    const obj = guildId(stateFromStores[27]);
    const result = obj.maybeFetchSoundboardSounds();
  }, []);
  const useRef = react.useRef;
  set = new Set();
  const ref = useRef(set);
  const items4 = [stateFromStores];
  const effect1 = react.useEffect(() => {
    let obj = function _fetchUploader() {
      obj = ref(function*(arg0, value) {
        let closure_0 = arg0;
        if (c1 === 2) {
          c1 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp2 === 3) {
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
            c1 = 2;
            if (0 === c2) {
              if (arg0 === 1) {
                c1 = 3;
                throw value;
              } else if (arg0 === 2) {
                c1 = 3;
                const obj4 = { value, done: true };
                return obj4;
              } else {
                c3 = 1;
                const obj2 = closure_0(c2[28]);
                c2 = 2;
                c1 = 1;
                const obj5 = { value: obj2.getUser(closure_0), done: false };
                return obj5;
              }
            } else {
              if (1 === tmp3) {
                c3 = 0;
              } else if (arg0 === 1) {
                c1 = 3;
                throw value;
              } else if (arg0 === 2) {
                c3 = 0;
                c1 = 3;
                obj = { value, done: true };
                return obj;
              } else {
                c3 = 0;
              }
              c1 = 3;
              return { value: "HermesInternal", done: null };
            }
          } catch (tmp7) {
            if (0 === c3) {
              c1 = 3;
              throw tmp7;
            } else {
              c2 = 1;
            }
          }
        }
      });
      return obj(...arguments);
    };
    let items = stateFromStores;
    function fetchUploader(arg0) {
      return obj(...arguments);
    }
    if (stateFromStores == null) {
      items = [];
    }
    for (const item10009 of items) {
      let userId = item10009.userId;
      let tmp = userId;
      let current = ref.current;
      let tmp2 = ref;
      let hasItem = current.has(userId);
      if (!hasItem) {
        hasItem = null != UserStore.getUser(tmp);
      }
      if (!hasItem) {
        let current2 = tmp2.current;
        let addResult = current2.add(tmp);
        let uploader = fetchUploader(tmp);
      }
      continue;
    }
  }, items4);
  let obj3 = guildId(stateFromStores[29]);
  const manageResourcePermissions = obj3.useManageResourcePermissions(guild);
  ({ canCreateExpressions, canManageGuildExpression: c4, canManageAllExpressions } = manageResourcePermissions);
  guildId(stateFromStores[30]);
  if (null == guild) {
    return null;
  } else if (null == stateFromStores) {
    return closure_11(tmp4(tmp2[31]).SceneLoadingIndicator, {});
  } else {
    if (!canCreateExpressions) {
      canCreateExpressions = canManageAllExpressions;
    }
    if (canCreateExpressions) {
      const length = stateFromStores.length;
      const tmp4Result = tmp4(tmp2[9]);
      canCreateExpressions = length < tmp4Result.getMaxSoundboardSlots(guild);
    }
    if (canCreateExpressions) {
      canCreateExpressions = tmp11;
    }
    let obj4 = { contentContainerStyle: tmp3.container, children: items5 };
    let obj5 = { variant: "heading-sm/semibold", style: tmp3.label, children: intl.string(tmp4(tmp2[8]).t.OWQNYr) };
    const Text = tmp4(tmp2[20]).Text;
    intl = tmp4(tmp2[8]).intl;
    items5 = [closure_11(Text, obj5), , , ];
    const obj6 = { variant: "body-sm/medium", color: "text-muted", style: tmp3.label, children: format(IJXOt6, obj7) };
    const Text2 = tmp4(tmp2[20]).Text;
    const intl2 = tmp4(tmp2[8]).intl;
    format = intl2.format;
    obj7 = { maxSounds: tmp4Result6.getMaxSoundboardSlots(guild) };
    IJXOt6 = tmp4(tmp2[8]).t.IJXOt6;
    tmp4Result6 = tmp4(tmp2[9]);
    items5[1] = closure_11(Text2, obj6);
    let tmp14Result = null;
    const tmp12 = closure_12;
    const tmp13 = closure_5;
    if (canCreateExpressions) {
      const obj8 = { guildId };
      tmp14Result = tmp14(AddSoundButton, obj8);
    }
    items5[2] = tmp14Result;
    const obj9 = {
      tiers: items6,
      guildTier,
      renderUnlockedSubLabel(arg0) {
          let numSlots;
          let obj2;
          let tier;
          ({ tier, numSlots } = arg0);
          const intl = intl7.intl;
          const format = intl.format;
          const obj = { numTotal: numSlots, numAvailable: obj2.getAvailableSoundboardSoundSlotCount(stateFromStores, tier, guild) };
          const ZLoNtm = intl7.t.ZLoNtm;
          obj2 = GuildBoostingUtils;
          return format(ZLoNtm, obj);
        },
      renderSlot(arg0, arg1) {
          let fn;
          let soundId;
          guildId = tmp;
          if (null == stateFromStores[arg1]) {
            return null;
          } else {
            const tmp3 = _undefined(stateFromStores[arg1]);
            let obj = { guildId, sound: stateFromStores[arg1], canManage: tmp3, onPress: fn };
            fn = undefined;
            const tmp4 = closure_1_11;
            const tmp5 = SoundboardSoundRow;
            if (tmp3) {
              fn = () => {
                const obj = showGuildSettingsModalSoundboardSoundInfoActionSheet;
                const obj2 = { guildId, soundId: soundId.soundId };
                const result = obj.showGuildSettingsModalSoundboardSoundInfoActionSheet(obj2);
              };
            }
            return tmp4(tmp5, obj, stateFromStores[arg1].soundId);
          }
        }
    };
    const obj10 = { tier: BoostedGuildTiers.NONE, title: intl3.string(tmp4(tmp2[8]).t.tfVXhP), numSlots: tmp4Result7.getIncrementalSoundboardSoundCountForTier(BoostedGuildTiers.NONE, guild) };
    const tmpResult = tmp(tmp2[32]);
    intl3 = tmp4(tmp2[8]).intl;
    items6 = [obj10, , , ];
    tmp4Result7 = tmp4(tmp2[9]);
    const obj11 = { tier: BoostedGuildTiers.TIER_1, title: intl4.string(tmp4(tmp2[8]).t.nzXtaS), IconComponent: tmp4(tmp2[10]).BoostGemOutlineIcon, numSlots: tmp4Result8.getIncrementalSoundboardSoundCountForTier(BoostedGuildTiers.TIER_1, guild) };
    intl4 = tmp4(tmp2[8]).intl;
    items6[1] = obj11;
    tmp4Result8 = tmp4(tmp2[9]);
    const obj12 = { tier: BoostedGuildTiers.TIER_2, title: intl5.string(tmp4(tmp2[8]).t["h33/uW"]), IconComponent: tmp4(tmp2[11]).BoostGemIcon, numSlots: tmp4Result9.getIncrementalSoundboardSoundCountForTier(BoostedGuildTiers.TIER_2, guild) };
    intl5 = tmp4(tmp2[8]).intl;
    items6[2] = obj12;
    tmp4Result9 = tmp4(tmp2[9]);
    const obj13 = { tier: BoostedGuildTiers.TIER_3, title: intl6.string(tmp4(tmp2[8]).t.BfF6ED), IconComponent: tmp4(tmp2[12]).BoostTier3Icon, numSlots: tmp4Result10.getIncrementalSoundboardSoundCountForTier(BoostedGuildTiers.TIER_3, guild) };
    intl6 = tmp4(tmp2[8]).intl;
    items6[3] = obj13;
    tmp4Result10 = tmp4(tmp2[9]);
    items5[3] = closure_11(tmpResult, obj9);
    return tmp12(tmp13, obj4);
  }
});
size = size_mod;
let result = size.fileFinishedImporting("modules/guild_settings/server_monetization/soundboard/native/GuildSettingsModalSoundboard.tsx");

export default memoResult;
