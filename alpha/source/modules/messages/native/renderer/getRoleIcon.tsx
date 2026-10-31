// Module ID: 8487
// Function ID: 8488
// Name: getRoleIcon
// Dependencies: [7355, 1113, 2]
// Exports: getRoleIcon

// Module 8487 (getRoleIcon)
import intl2 from "intl" /* 1113 */;
import useRoleIconProps from "useRoleIconProps" /* 7355 */;
import size_mod from "module_2" /* 2 */;

let size = size_mod;
const result = size.fileFinishedImporting("modules/messages/native/renderer/getRoleIcon.tsx");

export function getRoleIcon(size) {
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
    intl = tmp(1113).intl;
    return obj3;
  }
}
