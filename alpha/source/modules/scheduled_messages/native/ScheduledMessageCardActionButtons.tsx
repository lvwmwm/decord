// Module ID: 9581
// Function ID: 9582
// Name: ScheduledMessageCardActionButtons
// Dependencies: [21, 1112, 5710, 9566, 9582, 5721, 7253, 9025, 7910, 7712, 2]
// Exports: default

// Module 9581 (ScheduledMessageCardActionButtons)
import Fragment from "Fragment" /* 21 */;
import intl5 from "intl" /* 1112 */;
import SendMessageIcon from "SendMessageIcon" /* 5710 */;
import ClockIcon from "ClockIcon" /* 5721 */;
import CircleXIcon from "CircleXIcon" /* 7253 */;
import AssetRegistryDefault from "AssetRegistry" /* 7712 */;
import IconButton2 from "IconButton" /* 7910 */;
import ContextMenu from "ContextMenu" /* 9025 */;
import ScheduledMessagesUtils from "ScheduledMessagesUtils" /* 9566 */;
import PencilIcon from "PencilIcon" /* 9582 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/scheduled_messages/native/ScheduledMessageCardActionButtons.tsx");

export default function ScheduledMessageCardActionButtons(arg0) {
  let disabled;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  ({ scheduledMessage: require, isPendingRemoval: importDefault } = arg0);
  let obj = {
    label: intl.string(intl5.t.JLba51),
    IconComponent: SendMessageIcon.SendMessageIcon,
    action() {
      const obj = ScheduledMessagesUtils;
      return obj.sendScheduledMessageNow(require.scheduledMessageId);
    }
  };
  intl = intl5.intl;
  const items = [obj, , , ];
  const obj2 = {
    label: intl2.string(intl5.t.ZXE1s4),
    IconComponent: PencilIcon.PencilIcon,
    action() {
      const obj = ScheduledMessagesUtils;
      return obj.openScheduledMessageEditContentModal(require);
    }
  };
  intl2 = intl5.intl;
  items[1] = obj2;
  const obj3 = {
    label: intl3.string(intl5.t.SBcdAN),
    IconComponent: ClockIcon.ClockIcon,
    action() {
      const obj = ScheduledMessagesUtils;
      return obj.openRescheduleMessageActionSheet(require.scheduledMessageId, require.sendAtTimestamp, require.createArgs.channelId);
    }
  };
  intl3 = intl5.intl;
  items[2] = obj3;
  const obj4 = {
    label: intl4.string(intl5.t.O3sL8F),
    IconComponent: CircleXIcon.CircleXIcon,
    action() {
      const obj = ScheduledMessagesUtils;
      return obj.cancelScheduledMessage(require.scheduledMessageId);
    },
    variant: "destructive"
  };
  intl4 = intl5.intl;
  items[3] = obj4;
  return jsx(ContextMenu.ContextMenu, {
    items,
    keyboardShouldPersistTaps: "handled",
    triggerOnTap: true,
    children(ref) {
      ref = ref.ref;
      const merged = Object.assign(ref, Object.assign({ ref: 0 }));
      const IconButton = IconButton2.IconButton;
      const merged1 = Object.assign(merged);
      const intl = intl5.intl;
      return <IconButton ref={ref} variant="secondary" accessibilityLabel={intl.string(intl5.t.sHmiIC)} size="sm" disabled={importDefault} icon={AssetRegistryDefault} />;
    }
  });
};
