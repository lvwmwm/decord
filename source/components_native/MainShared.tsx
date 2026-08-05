// Module ID: 15833
// Function ID: 15834
// Name: BurstReactionAnimationContainer
// Dependencies: [19, 17, 1372, 4326, 21, 589, 10543, 4106, 10635, 15834, 500, 13719, 1236, 15836, 13714, 13586, 2, 15837, 15838, 15839, 15840, 15848, 15850, 15879]
// Exports: PictureInPictureGlobalContainer, useAppKeyCommands, useScreenReaderEnabled

// Module 15833 (BurstReactionAnimationContainer)
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
  const hasPipParticipant = require(10543) /* usePipVideoOrStream */.useHasPipParticipant({ isActivityViewFocused: false });
  const obj2 = require(10543) /* usePipVideoOrStream */;
  const isModalOpen = require(4106) /* navigationToRootTabHelper */.useIsModalOpen();
  require(10635) /* isVoicePanelEnabled */;
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
          tmp7 = jsx(importDefault(15834), { channel: null });
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
  const keyCommands = require(13714) /* KeyCommandsView */.useKeyCommands(memo);
};
export const useScreenReaderEnabled = function useScreenReaderEnabled() {
  const effect = React.useEffect(() => {
    const result = callback(table[15]).checkScreenreaderEnabled();
  }, []);
};
