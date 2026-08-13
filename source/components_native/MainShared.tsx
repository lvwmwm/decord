// Module ID: 16065
// Function ID: 16066
// Name: BurstReactionAnimationContainer
// Dependencies: [19, 17, 1391, 4416, 21, 589, 10634, 4197, 10741, 16066, 500, 13910, 1236, 16068, 13905, 13775, 2, 16069, 16070, 16071, 16072, 16080, 16082, 16113]
// Exports: PictureInPictureGlobalContainer, useAppKeyCommands, useScreenReaderEnabled

// Module 16065 (BurstReactionAnimationContainer)
import ActionSheetPresenter from "ActionSheetPresenter";
import { NativeModules } from "BurstReactionAnimationContainerInner";
import ensureGuildLoaded from "ensureGuildLoaded";
import createRTCConnection from "createRTCConnection";
import { jsx } from "MuteDeafen";

const require = arg1;
let result = require("ensureGuildLoaded").fileFinishedImporting("components_native/MainShared.tsx");

export const BurstReactionAnimationContainer = require("BurstReactionAnimationContainerInner");
export const MenuContainer = require("MenuContainer");
export const ActionSheetContainer = require("ActionSheetPresenter");
export const Alerts = require("StyleSheet");
export const SoundPlayer = require("MuteDeafen");
export const MainViewTooltipActionSheetsV2 = require("trackActionSheetImpression");
export const ToastContainer = require("AnimatedToast");
export const PictureInPictureGlobalContainer = function PictureInPictureGlobalContainer() {
  let obj = require(589) /* initialize */;
  const items = [ensureGuildLoaded, createRTCConnection];
  const stateFromStores = obj.useStateFromStores(items, () => channel.getChannel(channelId.getChannelId()));
  const hasPipParticipant = require(10634) /* usePipVideoOrStream */.useHasPipParticipant({ isActivityViewFocused: false });
  const obj2 = require(10634) /* usePipVideoOrStream */;
  const isModalOpen = require(4197) /* coerceMainRoute */.useIsModalOpen();
  require(10741) /* isVoicePanelEnabled */;
  let tmp7 = null;
  if (null != stateFromStores) {
    tmp7 = null;
    if (hasPipParticipant) {
      tmp7 = null;
      if (!isModalOpen) {
        tmp7 = null;
        if (!tmp6) {
          obj = { channel: null };
          obj[0] = stateFromStores;
          tmp7 = jsx(importDefault(16066), { channel: null });
        }
      }
    }
  }
  return tmp7;
};
export const useAppKeyCommands = function useAppKeyCommands() {
  const memo = React.useMemo(() => {
    let obj = callback(table[10]);
    if (obj.isAndroid()) {
      let keyModifierCommand = callback2(tmp2[11]).getConstants().keyModifierCommand;
      const obj2 = callback2(tmp2[11]);
    } else {
      keyModifierCommand = KeyCommandsView.KeyCommandsView.keyModifierCommand;
    }
    obj = { input: "k", modifierFlags: keyModifierCommand, eventName: "keyCommandShowQuickSwitcher", discoverabilityTitle: null, onKeyCommand: null };
    const intl = tmp(tmp2[12]).intl;
    obj[3] = intl.string(callback(table[12]).t.yYsRlD);
    obj[4] = function onKeyCommand() {
      callback(table[13])();
    };
    const items = [obj];
    return items;
  }, []);
  const keyCommands = require(13905) /* KeyCommandsView */.useKeyCommands(memo);
};
export const useScreenReaderEnabled = function useScreenReaderEnabled() {
  const effect = React.useEffect(() => {
    const result = callback(table[15]).checkScreenreaderEnabled();
  }, []);
};
