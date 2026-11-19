// Module ID: 19865
// Function ID: 19866
// Name: GuildSettingsModalSoundboardSoundInfoActionSheet
// Dependencies: [5, 32, 19, 17, 5840, 502, 21, 504, 5740, 1113, 1187, 6709, 5473, 5020, 7396, 575, 7229, 6926, 6915, 11180, 19858, 5499, 2]

// Module 19865 (GuildSettingsModalSoundboardSoundInfoActionSheet)
import SoundboardActionCreators from "SoundboardActionCreators" /* 6709 */;
import showSoundboardSoundEditModalDefault from "showSoundboardSoundEditModal" /* 19858 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import SoundboardStore from "SoundboardStore" /* 5840 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

let c1, closure_2;

let c10;
let metroImportDefault;
let metroRequire;
let unpackModuleId;
let _slicedToArray = _slicedToArray_mod;
({ ActivityIndicator: metroRequire, View: metroImportDefault } = react_native);
({ jsx: c10, jsxs: unpackModuleId } = Fragment);
const memoResult = react.memo(function GuildSettingsModalSoundboardSoundInfoActionSheet(guildId) {
  let TableRowGroup;
  let c4;
  let intl2;
  let intl3;
  let obj10;
  let obj4;
  let obj5;
  let obj6;
  let string;
  let t;
  let tmp10;
  let tmp12;
  let tmp6;
  let tmp9Result;
  guildId = guildId.guildId;
  const soundId = guildId.soundId;
  const hideActionSheet = guildId.hideActionSheet;
  _slicedToArray = undefined;
  let obj = function _onDeleteSound() {
    obj = _asyncToGenerator(async (arg0, value) => {
      let closure_0;
      let intl2;
      let intl3;
      let intl4;
      let obj3;
      let obj6;
      let obj7;
      let v3;
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
          return { value: "HermesInternal", done: "+60" };
        }
      } else {
        let c3;
        try {
          c4 = 2;
          if (0 === c1) {
            if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else if (null != stateFromStores) {
              const obj5 = { title: intl2.formatToPlainString(tmp(closure_2[9]).t["PR/VbI"], obj6), body: intl3.format(tmp(closure_2[9]).t["u6+CmN"], obj7), confirmText: intl4.string(tmp(closure_2[9]).t.oyYWHE), confirmColor: tmp(closure_2[10]).ButtonColors.RED };
              const _confirm = c1(closure_2[8]).confirm;
              const tmp41 = c1(closure_2[8]);
              intl2 = tmp(closure_2[9]).intl;
              obj6 = { soundName: stateFromStores.name };
              intl3 = tmp(closure_2[9]).intl;
              obj7 = { soundName: stateFromStores.name };
              intl4 = tmp(closure_2[9]).intl;
              c1 = 2;
              c4 = 1;
              const obj8 = { value: _confirm(obj5), done: false };
              return obj8;
            }
          } else if (1 === c1) {
            c3 = 0;
            closure_128_4(false);
            throw closure_2;
          } else if (2 === c1) {
            if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              const obj9 = { value, done: true };
              return obj9;
            } else if (value) {
              closure_128_4(true);
              c3 = 2;
              c1 = 4;
              c4 = 1;
              const obj10 = { value: obj3.deleteSound(closure_128_0, closure_128_1), done: false };
              obj3 = tmp(closure_2[11]);
              return obj10;
            }
          } else if (3 === c1) {
            const presentError = tmp(closure_2[12]).presentError;
            const tmp17 = tmp(closure_2[12]);
            const intl = tmp(closure_2[9]).intl;
            presentError(intl.string(tmp(closure_2[9]).t["5NMPSS"]));
            c3 = 0;
            closure_128_4(false);
            c4 = 3;
            const obj11 = { value: undefined, done: true };
            return obj11;
          } else if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            closure_128_4(false);
            c4 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            c3 = 0;
            closure_128_4(false);
            closure_128_2();
          }
          c4 = 3;
          return { value: "HermesInternal", done: "+60" };
        } catch (tmp56) {
          closure_2 = tmp56;
          if (0 === c3) {
            c4 = 3;
            throw tmp56;
          } else if (1 === tmp58) {
            c1 = 1;
          } else {
            c1 = 3;
          }
        }
      }
    });
    return obj(...arguments);
  };
  const tmp = guildId;
  obj = guildId(hideActionSheet[7]);
  const items = [SoundboardStore];
  const items1 = [guildId, soundId];
  const stateFromStores = obj.useStateFromStores(items, () => {
    const soundsForGuild = SoundboardStore.getSoundsForGuild(guildId);
    let found;
    if (soundsForGuild != null) {
      found = soundsForGuild.find((soundId) => soundId.soundId === soundId);
    }
    return found;
  }, items1);
  let obj2 = guildId(hideActionSheet[7]);
  const items2 = [SoundboardStore, AuthenticationStore];
  const items3 = [soundId];
  const stateFromStores1 = obj2.useStateFromStores(items2, () => {
    let isPlayingSoundResult = SoundboardStore.isPlayingSound(soundId);
    obj = SoundboardStore;
    if (isPlayingSoundResult) {
      isPlayingSoundResult = obj.isUserPlayingSounds(AuthenticationStore.getId());
    }
    return isPlayingSoundResult;
  }, items3);
  [tmp6, c4] = _slicedToArray(obj.useState(false), 2);
  const items4 = [hideActionSheet, stateFromStores];
  const tmp5 = _slicedToArray(obj.useState(false), 2);
  const effect = obj.useEffect(() => {
    if (null == stateFromStores) {
      hideActionSheet();
    }
  }, items4);
  let tmp9Result2 = null;
  if (null != stateFromStores) {
    let obj3 = { header: closure_10(tmp(tmp2[14]).BottomSheetTitleHeader, obj4), children: tmp9(tmp10, obj5) };
    const BottomSheet = tmp(tmp2[13]).BottomSheet;
    obj4 = { title: stateFromStores.name };
    obj5 = { style: obj6, children: tmp12(TableRowGroup, obj10) };
    obj6 = { paddingHorizontal: soundId(tmp2[15]).space.PX_12, paddingBottom: soundId(tmp2[15]).space.PX_16 };
    TableRowGroup = tmp(tmp2[16]).TableRowGroup;
    let obj7 = {
      icon: closure_10(tmp(tmp2[18]).VoiceNormalIcon, {}),
      label: string(stateFromStores1 ? t.diasud : t.Kd4uxG),
      disabled: stateFromStores1,
      onPress() {
          obj = SoundboardActionCreators;
          const obj2 = { soundId: stateFromStores.soundId, volume: stateFromStores.volume };
          obj.playSoundLocally(null, obj2);
        }
    };
    const TableRow = tmp(tmp2[17]).TableRow;
    let intl = tmp(tmp2[9]).intl;
    string = intl.string;
    t = tmp(tmp2[9]).t;
    const items5 = [tmp9(TableRow, obj7), , ];
    let obj8 = {
      icon: tmp9(tmp(tmp2[19]).PencilIcon, {}),
      label: intl2.string(tmp(tmp2[9]).t.uKlG0Z),
      onPress() {
          obj = { guildId, sound: stateFromStores, analyticsSource: "guild_settings" };
          showSoundboardSoundEditModalDefault(obj);
        }
    };
    const TableRow2 = tmp(tmp2[17]).TableRow;
    intl2 = tmp(tmp2[9]).intl;
    items5[1] = closure_10(TableRow2, obj8);
    let obj9 = {
      icon: tmp9(tmp(tmp2[21]).TrashIcon, { color: "text-feedback-critical" }),
      trailing: tmp9Result,
      label: intl3.string(tmp(tmp2[9]).t.gq0iCT),
      variant: "danger",
      disabled: tmp6,
      onPress: function onDeleteSound() {
          return obj(...arguments);
        }
    };
    const TableRow3 = tmp(tmp2[17]).TableRow;
    tmp9Result = null;
    tmp10 = closure_7;
    tmp12 = closure_11;
    if (tmp6) {
      tmp9Result = tmp9(closure_6, {});
    }
    obj10 = { hasIcons: true, children: items5 };
    intl3 = tmp(tmp2[9]).intl;
    items5[2] = closure_10(TableRow3, obj9);
    tmp9Result2 = tmp9(BottomSheet, obj3);
  }
  return tmp9Result2;
});
const result = size.fileFinishedImporting("modules/guild_settings/server_monetization/soundboard/native/GuildSettingsModalSoundboardSoundInfoActionSheet.tsx");

export default memoResult;
