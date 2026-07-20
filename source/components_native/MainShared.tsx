// Module ID: 15457
// Function ID: 117926
// Name: BurstReactionAnimationContainer
// Dependencies: []
// Exports: PictureInPictureGlobalContainer, useAppKeyCommands, useScreenReaderEnabled

// Module 15457 (BurstReactionAnimationContainer)
let closure_3 = importAll(dependencyMap[0]);
const NativeModules = arg1(dependencyMap[1]).NativeModules;
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
const jsx = arg1(dependencyMap[4]).jsx;
const result = arg1(dependencyMap[16]).fileFinishedImporting("components_native/MainShared.tsx");

export const BurstReactionAnimationContainer = importDefault(dependencyMap[17]);
export const MenuContainer = importDefault(dependencyMap[18]);
export const ActionSheetContainer = importDefault(dependencyMap[19]);
export const Alerts = importDefault(dependencyMap[20]);
export const SoundPlayer = importDefault(dependencyMap[21]);
export const MainViewTooltipActionSheetsV2 = importDefault(dependencyMap[22]);
export const ToastContainer = importDefault(dependencyMap[23]);
export const PictureInPictureGlobalContainer = function PictureInPictureGlobalContainer() {
  let obj = arg1(dependencyMap[5]);
  const items = [closure_5, closure_6];
  const stateFromStores = obj.useStateFromStores(items, () => channel.getChannel(channelId.getChannelId()));
  const hasPipParticipant = arg1(dependencyMap[6]).useHasPipParticipant({ isActivityViewFocused: false });
  const obj2 = arg1(dependencyMap[6]);
  const isModalOpen = arg1(dependencyMap[7]).useIsModalOpen();
  arg1(dependencyMap[8]);
  let tmp6 = null;
  if (null != stateFromStores) {
    tmp6 = null;
    if (hasPipParticipant) {
      tmp6 = null;
      if (!isModalOpen) {
        tmp6 = null;
        if (!tmp5) {
          obj = { channel: stateFromStores };
          tmp6 = jsx(importDefault(dependencyMap[9]), obj);
        }
      }
    }
  }
  return tmp6;
};
export const useAppKeyCommands = function useAppKeyCommands() {
  const memo = React.useMemo(() => {
    const obj = {};
    if (obj2.isAndroid()) {
      let keyModifierCommand = callback2(closure_2[11]).getConstants().keyModifierCommand;
      const obj3 = callback2(closure_2[11]);
    } else {
      keyModifierCommand = KeyCommandsView.KeyCommandsView.keyModifierCommand;
    }
    obj.modifierFlags = keyModifierCommand;
    const intl = callback(closure_2[12]).intl;
    obj.discoverabilityTitle = intl.string(callback(closure_2[12]).t.yYsRlD);
    obj.onKeyCommand = function onKeyCommand() {
      callback(closure_2[13])();
    };
    const items = [obj];
    return items;
  }, []);
  const keyCommands = arg1(dependencyMap[14]).useKeyCommands(memo);
};
export const useScreenReaderEnabled = function useScreenReaderEnabled() {
  const effect = React.useEffect(() => {
    const result = callback(closure_2[15]).checkScreenreaderEnabled();
  }, []);
};
