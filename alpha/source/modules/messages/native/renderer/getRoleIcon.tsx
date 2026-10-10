// Module ID: 8048
// Function ID: 8049
// Name: getRoleIcon
// Dependencies: [6882, 1126, 2]
// Exports: getRoleIcon

// Module 8048 (getRoleIcon)
import intl2 from "intl" /* 1126 */;
import useRoleIconProps from "useRoleIconProps" /* 6882 */;
import size_mod from "module_2" /* 2 */;

let size = size_mod;
const result = size.fileFinishedImporting("modules/messages/native/renderer/getRoleIcon.tsx");

export const getRoleIcon = function getRoleIcon(size) {
  let guildId;
  let intl;
  let roleId;
  let surrogates;
  size = size.size;
  ({ guildId, roleId } = size);
  const getRoleIconProps = useRoleIconProps.getRoleIconProps;
  useRoleIconProps;
  const obj = useRoleIconProps;
  const roleIconProps = getRoleIconProps(obj.computeRoleIconRole({ guildId, roleId }), size);
  if (null != roleIconProps) {
    ({ src: obj2.source, name: obj2.name } = roleIconProps);
    const unicodeEmoji = roleIconProps.unicodeEmoji;
    const obj3 = { source: null, name: null, size, unicodeEmoji: surrogates, alt: intl.formatToPlainString(intl2.t["9+YWrE"], obj5) };
    surrogates = undefined;
    if (unicodeEmoji != null) {
      surrogates = unicodeEmoji.surrogates;
    }
    intl = tmp(1126).intl;
    return obj3;
  }
};
