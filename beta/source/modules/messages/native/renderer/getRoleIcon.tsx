// Module ID: 8315
// Function ID: 8316
// Name: getRoleIcon
// Dependencies: [7465, 1119, 2]
// Exports: getRoleIcon

// Module 8315 (getRoleIcon)
import useRoleIconProps from "useRoleIconProps" /* 7465 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/messages/native/renderer/getRoleIcon.tsx");

export const getRoleIcon = function getRoleIcon(size) {
  size = size.size;
  ({ guildId, roleId } = size);
  const obj = useRoleIconProps;
  const roleIconProps = obj.getRoleIconProps(useRoleIconProps.computeRoleIconRole({ guildId, roleId }), size);
  if (null != roleIconProps) {
    const obj4 = { source: null, name: null, size: null, unicodeEmoji: null, alt: null };
    ({ src: obj3.source, name: obj3.name } = roleIconProps);
    obj4.size = size;
    const unicodeEmoji = roleIconProps.unicodeEmoji;
    let surrogates;
    if (unicodeEmoji != null) {
      surrogates = unicodeEmoji.surrogates;
    }
    obj4.unicodeEmoji = surrogates;
    const intl = tmp(1119).intl;
    const obj6 = { name: roleIconProps.name };
    obj4.alt = intl.formatToPlainString(tmp(1119).t["9+YWrE"], obj6);
    return obj4;
  }
};
